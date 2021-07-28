/**
 * This cloud function is specific for the Watson Assistant case worker skills created for the
 * integration with an external service. 
 * 
 * The person cloud function will be called from the main caseworker cloud function only
 * when either a personID or caseID parameter has been specified. The verifications REST API
 * is called to the external service and this cloud function formats the response to be returned to the 
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
     const referer = 'curam://app';
     const personRestURI = '/Rest/v1/api/core/persons';
     const caseOverviewRestURI = '/Rest/v1/api/core/case_overviews';
 
     if (params.identificationID && params.identificationID !== undefined && params.identificationID !== null && params.identificationID !== 0) {
 
         var identificationIDTypeCode = checkIdentificationIDTypeCode(params);
         const uri =  env + personRestURI + '?identification_type_code=' + encodeURIComponent(identificationIDTypeCode) + '&&identification_value=' + encodeURIComponent(params.identificationID);
         const options = callAPI(uri, params.authorization, referer);
 
         // The rp calls the person endpoint
         return rp(options)
             .then((personResponse) => {
 
                 var personObj = {};
                 if (personResponse.data && personResponse.data.length > 0) {
                     personObj = setPersonResponse(personResponse.data[0]);
                     return {
                         data: {
                             person: personObj
                         }
                     };
                 } else {
                     personObj.noRecordFound = true;
                     return {
                         noResult: personObj
                     };
                 }
             })
             .catch((error) => {
                 return checkAccessRights(error);
             });
     } else if (params.caseReference && params.caseReference !== undefined && params.caseReference !== null && params.caseReference !== 0) {
 
         const uri = env + caseOverviewRestURI + '?case_reference=' + encodeURIComponent(params.caseReference);
         const caseOverviewsRequest = callAPI(uri, params.authorization, referer);
 
         return rp(caseOverviewsRequest)
             .then((caseOverviewsResponse) => {
 
                 var caseObj = {};
                 if (caseOverviewsResponse.data && caseOverviewsResponse.data.length > 0) {
 
                     caseObj = setCaseObjForCaseOverview(caseOverviewsResponse, params);
                     const uri = env + personRestURI +'/' + encodeURIComponent(caseObj.primaryConcernRoleID);
                     const casePersonRequest = callAPI(uri, params.authorization, referer);
 
                     return rp(casePersonRequest)
                         .then((personResponse) => {
 
                             var casePersonObj = setPersonResponse(personResponse);
 
                             return {
                                 data: {
                                     person: casePersonObj,
                                     caseDetails: caseObj
                                 }
                             };
                         })
                         .catch((error) => {
                             console.error('Error has occurred in the case person response cloud function.')
                             return {
                                 error: error
                             };
                         });
                 } else {
                     console.log('No records returned for the Case Overview API based on the caseReference: ' + params.caseReference);
                     caseObj.noRecordFound = true;
                     return {
                         noResult: caseObj
                     }
                 }
             })
             .catch((error) => {
                return checkAccessRights(error);
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

 /**
  * This function is used to check the error and if it is a 403 error code, the message thrown 
  * will be returned otherwise the error will be returned. 
  * 
  * @param error The error message
  * @returns The a no client access message or else the error itself.
  */
 function checkAccessRights(error){
    console.log('The checkAccessRights function was called.');
     
    if (error !== null && error !== undefined && error.error !== null && error.error !== undefined &&
        error.error.errors !== null && error.error.errors !== undefined && error.error.errors.length > 0 &&
        error.error.errors[0].code === 403) {
        var obj = {};
        obj.errorNoClientAccess = error.error.errors[0].message;
        return {
            noClientAccess: obj
        };
    } else {
        console.error('Error has occurred in the person response cloud function.')
        return {
            error: error
        };
    }
 }
 
 /**
  * This function is used to check the identificationID type code based 
  * on the identificationIDType parameter passed in. By default, the type
  * will be set to the reference number code. 
  * 
  * @param params The alternate ID type parameters. 
  * @returns The alternate ID type code based on the input alternate ID type parameter.
  */
 function checkIdentificationIDTypeCode(params) {
     console.log('The checkIdentificationIDTypeCode function was called.');
 
    var identificationIDTypeCode = 'CA7';
     if(params.identificationIDType === 'Passport'){
         identificationIDTypeCode = 'CA4';
     } else if (params.identificationIDType === 'Drivers License'){
        identificationIDTypeCode = 'CA50';
    } else if (params.identificationIDType === 'SSN'){
       identificationIDTypeCode = 'CA1';
    }
     return identificationIDTypeCode;
 }
 
 /**
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
 
 /**
  * This function is used to retrieve the person response details
  * required to be displayed by the web hook. 
  * 
  * @param personResponse The person request details. 
  * @returns The person object in JSON format.
  */
 function setPersonResponse(personResponse) {
     console.log('The setPersonResponse function was called.');
 
     if (personResponse) {
         var personObj = {};
         personObj.personID = personResponse.id;
         personObj.name = personResponse.first_name + ' ' + personResponse.last_name;
         personObj.dateOfBirth = personResponse.birth_date;
         personObj.phone = setPersonsPhoneNumber(personResponse);
         personObj.address = setPersonsAddress(personResponse);
 
         var personsIdentification = setPersonsIdentification(personResponse);
         personObj.identifierName = personsIdentification.identifierName;
        personObj.identifierValue = personsIdentification.identifierValue;
 
         return personObj;
     }
 }
 
 /**
  * This function is used to set persons phone number based on whether 
  * the related information is available in the JSON response. Otherwise,
  * The variable is set to blank.  
  * 
  * @param personResponse The person request details. 
  * @returns The person phone number details.
  */
 function setPersonsPhoneNumber(personResponse) {
     console.log('The setPersonsPhoneNumber() function was called. ');
 
     var personsPhoneNumber = "";
     if (personResponse.phones !== null) {
         for (var phone of personResponse.phones) {
             if (phone.preferred === true) {
                 personsPhoneNumber = phone.area_code + ' ' + phone.country_code + ' '  + phone.number;
             }
         }
     }
     return personsPhoneNumber;
 }
 
 /**
  * This function is used to set persons identification based on whether 
  * the related information is available in the JSON response. Otherwise,
  * The variable is set to blank.  
  * 
  * @param personResponse The person request details. 
  * @returns The person identification details.
  */
 function setPersonsIdentification(personResponse) {
     console.log('The setPersonsIdentification() function was called. ');
 
     var personsIdentification = {};
     for (var identification of personResponse.identifications) {
         if (identification.preferred === true) {
             personsIdentification.identifierName = identification.type.display;
             personsIdentification.identifierValue = identification.value;
         }
     }
     return personsIdentification;
 }
 
 /**
  * This function is used to set persons address based on whether 
  * the related information is available in the JSON response. Otherwise,
  * The variable is set to blank.  
  * 
  * @param personResponse The person request details. 
  * @returns The person address details.
  */
 function setPersonsAddress(personResponse) {
     console.log('The setPersonsAddress() function was called. ');
 
     var personsAddress = "";
     for (var addressItem of personResponse.addresses) {
         if (addressItem.preferred === true) {
             personsAddress = addressItem.display_text;
         }
     }
     return personsAddress;
 }
 
 /*
  * This function is used to set the case object details using the case 
  * overview response details. 
  *
  * @param caseOverviewsResponse The case overviews response request details. 
  * @returns The case object in JSON format.
  */
 function setCaseObjForCaseOverview(caseOverviewsResponse, params) {
     console.log('The setCaseObjForCaseOverview() function was called');
 
     var caseObj = {};
     caseObj.caseID = caseOverviewsResponse.data[0].id;
     caseObj.status = caseOverviewsResponse.data[0].status.display;
     caseObj.caseReference = params.caseReference;
 
     // Loops through the list to get the primary client 
     for (var member of caseOverviewsResponse.data[0].members) {
         if (member.primary === true) {
             caseObj.primaryConcernRoleID = member.person_id;
         }
     }
     return caseObj;
 }