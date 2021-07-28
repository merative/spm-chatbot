/**
 * This cloud function is specific for the Watson Assistant case worker skills created for the
 * integration with the external service.
 * 
 * The person cloud function will be called from the main caseworker cloud function only
 * when either a personID or caseID parameter has been specified. The verifications REST API
 * is called within the external service and this cloud function formats the response to be returned to the 
 * Watson Assistant skill for display.
 * 
 * main() will be run when you invoke this action
 *
 * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
 *
 * @return The output of this action, which must be a JSON object.
 *
 */
 let rp = require('request-promise');

 function main(params) {
     const env = '<protocol>://<server-name>';
     const restURI = '/Rest/v1/api/core/verifications';
     const referer = 'curam://app';
 
     if (params.personID && params.personID !== undefined && params.personID !== null && params.personID !== 0) {
 
         const uri = env + restURI + '?person_id=' + encodeURIComponent(params.personID);
         const personVerificationRequest = callAPI(uri, params.authorization, referer);
 
         // The rp calls the person verification endpoint
         return rp(personVerificationRequest)
             .then((personVerificationResponse) => {
                 const personVerifInd = true;
                 var varObjDetailsFinal = groupVerificationsResponse(personVerificationResponse, personVerifInd);
 
                 if (varObjDetailsFinal.totalVerifications > 0) {
                     return {
                         data: {
                             totalVerifications: varObjDetailsFinal.totalVerifications,
                             personVerificationDetails: varObjDetailsFinal
                         }
                     };
                 } else {
                     var obj = {};
                     obj.noVerRecordFound = true;
                     obj.totalVerifications = "no";
                     return {
                         noResult: obj
                     };
                 }
             })
             .catch((error) => {
                 console.error('Error has occurred in the person verification response cloud function.')
                 return {
                     error: error
                 };
             });
     } else if (params.caseID && params.caseID !== undefined && params.caseID !== null && params.caseID !== 0) {
 
         const uri = env + restURI + '?case_id=' + encodeURIComponent(params.caseID);
         const caseVerificationsRequest = callAPI(uri, params.authorization, referer);
 
         return rp(caseVerificationsRequest)
             .then((caseVerificationsResponse) => {
 
                 const personVerifInd = false;
                 var varObjDetailsFinal = groupVerificationsResponse(caseVerificationsResponse, personVerifInd);
 
                 var caseObj = {};
                 caseObj.caseID = params.caseID;
                 caseObj.caseReference = varObjDetailsFinal.caseReference;
 
                 if (varObjDetailsFinal.totalVerifications > 0) {
                     return {
                         data: {
                             totalVerifications: varObjDetailsFinal.totalVerifications,
                             verificationDetails: varObjDetailsFinal,
                             caseDetails: caseObj
                         }
                     };
                 } else {
                     var obj = {};
                     obj.noVerRecordFound = true;
                     return {
                         noResult: obj
                     };
                 }
             })
             .catch((error) => {
                 console.error('Error has occurred in the Case Verifications cloud function.')
                 return {
                     error: error
                 };
             });
     } else {
         console.log('Please check the parameters passed in. ');
         return {
             data: {
                 params: JSON.stringify(params)
             }
         };
     }
 }
 
 
 /*
  * This function is call a specific API in IBM Social Program Management 
  * to retrieve data based on the URI passed in. 
  *
  * @param uri The uri to be used in the request. 
  * @param authorization The authorization required for the request. 
  * @param referer The referer required for the request. 
  * @returns The api request details. 
  */
 function callAPI(uri, authorization, referer) {
     console.log('The callAPI() function was called and uri is: ', uri);
 
     const apiRequest = {
         uri: uri,
         headers: {
             'Authorization': authorization,
             'Referer': referer
         },
         json: true,
     };
     return apiRequest;
 }
 
 /*
  * This function groups the verification by the type of verification names available
  * and for each type it specifies the eligible documents required and all the 
  * participants which have verifications outstanding. 
  *
  * @param verificationResponse The verification response details. 
  * @param personVerifInd An indicator used to differentiate between a person or case verifications
  * @returns The verification details in JSON format.
  */
 function groupVerificationsResponse(verificationResponse, personVerifInd) {
     console.log('The groupPersonVerificationsResponse() function was called.');
     var varObjDetailsFinal = [];
     var totalVerificationsTemp = 0;
     varObjDetailsFinal.totalVerifications = totalVerificationsTemp;
 
     if (verificationResponse.data && verificationResponse.data.length > 0) {
         // Add all verification names to a list
         var listOfVerificationTypes = [];
         for (var verificationDetails of verificationResponse.data) {
             listOfVerificationTypes.push(verificationDetails.evidence_attribute.name.display);
         }
         const uniqueListVerificationName = new Set(listOfVerificationTypes);
 
         // List iterate through the list of verification names and 
         // create a return structure of verifications and participants
         var itemIterationNumber = -1;

         for (var name of uniqueListVerificationName) {
             var varObjItemDetails = {};
             varObjItemDetails.evidenceName = name;
             itemIterationNumber++,
             varObjItemDetails.itemNumber = itemIterationNumber;
             var count = 0;
             var participantVerificationDetails = "<span>";
 
             for (var verificationDetails of verificationResponse.data) {
                 if (verificationDetails.status.code === 'VST2' && name === verificationDetails.evidence_attribute.name.display) {
 
                     const commaSpace = ", ";
                     var eligibleDocument = "";
                     for (var requiredProof of verificationDetails.required_proofs) {
                         eligibleDocument += requiredProof.name.display + commaSpace;
                     }
                     varObjItemDetails.eligibleDocuments = eligibleDocument.replace(/,(?=[^,]*$)/, '');
                     break;
                 }
             }
 
             for (var verificationDetails of verificationResponse.data) {
                 if (verificationDetails.status.code === 'VST2' && name === verificationDetails.evidence_attribute.name.display) {
                     totalVerificationsTemp++;
                     count++;
 
                     var dueDate = setVerificationDueDate(verificationDetails);
                     var participantName = setVerificationParticipantName(verificationDetails);
                     var relatedEvidenceSummary = setVerificationRelatedEvidence(verificationDetails)
 
                     var nameHtml = "<strong> Participant </strong>" + participantName + "<br/>";
                     var relatedEvidenceHtml = "<strong> Related Evidence </strong>" + relatedEvidenceSummary + "<br/>";
                     var dueDateHTML = "<strong> Due Date </strong>" + dueDate + "<br/>";
 
                     var relatedCaseHtml = "";
                     if (verificationDetails.related_case !== null && verificationDetails.related_case.reference !== null && personVerifInd == true) {
                         relatedCaseHtml = "<strong> Case </strong>" + verificationDetails.related_case.reference + "<br/>";
                         participantVerificationDetails += nameHtml + relatedEvidenceHtml + relatedCaseHtml + dueDateHTML + "<br/>";
                     } else {
                         participantVerificationDetails += nameHtml + relatedEvidenceHtml + dueDateHTML + "<br/>";
                     }
                 }
             }
             varObjItemDetails.participantVerificationDetails = participantVerificationDetails + "<span>";
             varObjItemDetails.count = count;
             varObjDetailsFinal.push(varObjItemDetails);
         }
         var caseRef = "";
         if (verificationResponse.data[0].related_case !== undefined  && verificationResponse.data[0].related_case !== null  && verificationResponse.data[0].related_case.reference !== undefined && verificationResponse.data[0].related_case.reference !== null) {
           caseRef = verificationResponse.data[0].related_case.reference;
         }
         varObjDetailsFinal.caseReference = caseRef;
         varObjDetailsFinal.totalVerifications = totalVerificationsTemp;
     }
     return varObjDetailsFinal;
 }
 
 /**
  * This function is used to set the verifications due date details 
  * based on whether the related information is available in the JSON response. Otherwise,
  * The variable is set to blank.  
  * 
  * @param verificationDetails The verification details. 
  * @returns The due date details.
  */
 function setVerificationDueDate(verificationDetails) {
     console.log('The setVerificationDueDate() function was called. ');
 
     var dueDate = "";
     if (verificationDetails.due_date !== null) {
         dueDate = verificationDetails.due_date;
     } else {
         dueDate = "";
     }
     return dueDate;
 }
 
 /**
  * This function is used to set the verifications participant name details 
  * based on whether the related information is available in the JSON response. Otherwise,
  * The variable is set to blank.  
  * 
  * @param verificationDetails The verification details. 
  * @returns The participant name details.
  */
 function setVerificationParticipantName(verificationDetails) {
     console.log('The setVerificationParticipantName() function was called. ');
 
     var participantName = "";
     if (verificationDetails.related_person !== null && verificationDetails.related_person && verificationDetails.related_person.name) {
         participantName = verificationDetails.related_person.name;
     } else if (verificationDetails.evidence_attribute !== null && verificationDetails.evidence_attribute.related_evidence !== null && verificationDetails.evidence_attribute.related_evidence.participant !== null && verificationDetails.evidence_attribute.related_evidence.participant.name !== null) {
         participantName = verificationDetails.evidence_attribute.related_evidence.participant.name;
     } else {
         participantName = "";
     }
     return participantName;
 }
 
 /**
  * This function is used to set the verifications related evidence summary details 
  * based on whether the related information is available in the JSON response. Otherwise,
  * The variable is set to blank.  
  * 
  * @param verificationDetails The verification details. 
  * @returns The related evidence summary details.
  */
 function setVerificationRelatedEvidence(verificationDetails) {
     console.log('The setVerificationRelatedEvidence() function was called. ');
 
     var relatedEvidenceSummary = "";
     if (verificationDetails.evidence_attribute !== null && verificationDetails.evidence_attribute.related_evidence !== null && verificationDetails.evidence_attribute.related_evidence.summary !== null) {
         relatedEvidenceSummary = verificationDetails.evidence_attribute.related_evidence.summary;
     } else {
         relatedEvidenceSummary = "";
     }
     return relatedEvidenceSummary;
 }