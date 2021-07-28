/**
 * This cloud function is specific for the Watson Assistant case worker skills created for the
 * integration with an external service. Currently there are four flows, where
 * based on the incoming parameter, it will call either the person or verifications cloud functions
 * to retrieve the required information from REST APIs in the external service. 
 * 
 * The main() will be run when you invoke this action.
 *
 * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
 *
 * @return The output of this action, which must be a JSON object.
 *
 */
 let rp = require('request-promise');

 function main(params) {
     console.log('Here are the parameters for the web hook', params);

     const cfEndpoint = 'https://<region>.functions.appdomain.cloud/api/v1/web/<workspace-name>/curam-rest/';
     const personCF = 'person.json';
     const verificationsCF = 'verifications.json';
     const referer = 'curam://app';
     const authorization = 'Bearer ' + params.__ow_headers.authorization;
     
     if (params.identificationID && params.identificationID !== undefined && params.identificationID !== null && params.identificationID !== 0) {
         const options = {
             uri: cfEndpoint + personCF + '?identificationID=' + encodeURIComponent(params.identificationID) + '&&identificationIDType=' + encodeURIComponent(params.identificationIDType) + '&&authorization=' + encodeURIComponent(authorization),
             headers: {
                 'Authorization': authorization,
                 'Referer': referer
             },
             json: true,
         };
         return rp(options).then((personResponse) => {
             // call to an external cloud function
             return personResponse;
         })
     } else if (params.personID && params.personID !== undefined && params.personID !== null && params.personID !== 0) {
         const personVerificationRequest = {
             uri: cfEndpoint + verificationsCF + '?personID=' + encodeURIComponent(params.personID) + '&&authorization=' + encodeURIComponent(authorization),
             headers: {
                 'Authorization': authorization,
                 'Referer': referer
             },
             json: true,
         };
         return rp(personVerificationRequest).then((personVerificationResponse) => {
             // call to an external cloud function
             return personVerificationResponse;
         })
     } else if (params.caseReference && params.caseReference !== undefined && params.caseReference !== null && params.caseReference !== 0) {
         const casePersonRequest = {
             uri: cfEndpoint + personCF + '?caseReference=' + encodeURIComponent(params.caseReference) + '&&authorization=' + encodeURIComponent(authorization),
             headers: {
                 'Authorization': authorization,
                 'Referer': referer
             },
             json: true,
         };
         return rp(casePersonRequest).then((casePersonResponse) => {
             // call to an external cloud function
             return casePersonResponse;
         })
     } else if (params.caseID && params.caseID !== undefined && params.caseID !== null && params.caseID !== 0) {
         const caseVerificationsRequest = {
             uri: cfEndpoint + verificationsCF + '?caseID=' + encodeURIComponent(params.caseID) + '&&authorization=' + encodeURIComponent(authorization),
             headers: {
                 'Authorization': authorization,
                 'Referer': referer
             },
             json: true,
         };
         return rp(caseVerificationsRequest).then((caseVerificationsResponse) => {
             // call to an external cloud function
             return caseVerificationsResponse;
         })
     } else {
         console.log('Please check the parameters passed in. ');
         return {
             data: {
                 params: JSON.stringify(params)
             }
         };
     }
 }