"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[25],{2296:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(7294),i=a(8650),r=a.n(i),o=a(1082),s=a(1025),c=a(1908),l=a(5900),p=a.n(l),d=function(e){var t,a=e.title,i=e.theme,r=e.tabs,o=void 0===r?[]:r;return n.createElement("div",{className:p()("PageHeader-module--page-header--36a7c",(t={},t["PageHeader-module--with-tabs--bdb43"]=o.length,t["PageHeader-module--dark-mode--58278"]="dark"===i,t))},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,i=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||i,s=r.baseUrl,c=r.subDirectory,l=s+"/edit/"+r.branch+c+"/src/pages"+t;return s?n.createElement("div",{className:"cds--row EditLink-module--row--04499"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--203ae",href:l},"Edit this page on GitHub"))):null},h=a(849),u=a(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,s=i.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),c=a===s,l=new RegExp(s+"/?(#.*)?$"),d=i.replace(l,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--68107"]=c,t),"PageTabs-module--list-item--d36e2")},n.createElement(o.Link,{className:"PageTabs-module--link--2b3ff",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--c4bab"},c))))))},t}(n.Component),f=b,g=a(5391),k=a(5387),w=a(4389),A=function(e){var t=e.date,a=new Date(t);return t?n.createElement(w.X2,{className:"last-modified-date-module--row--5c9a1"},n.createElement(w.sg,null,n.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},N=function(e){var t=e.pageContext,a=e.children,i=e.location,l=e.Title,p=t.frontmatter,u=void 0===p?{}:p,b=t.relativePagePath,w=t.titleType,N=u.tabs,y=u.title,v=u.theme,C=u.description,I=u.keywords,x=u.date,P=(0,k.Z)().interiorTheme,z=(0,o.useStaticQuery)("2456312558").site.pathPrefix,S=z?i.pathname.replace(z,""):i.pathname,E=N?S.split("/").filter(Boolean).slice(-1)[0]||r()(N[0],{lower:!0}):"",B=v||P;return n.createElement(c.Z,{tabs:N,homepage:!1,theme:B,pageTitle:y,pageDescription:C,pageKeywords:I,titleType:w},n.createElement(d,{title:l?n.createElement(l,null):y,label:"label",tabs:N,theme:B}),N&&n.createElement(f,{title:y,slug:S,tabs:N,currentTab:E}),n.createElement(g.Z,{padded:!0},a,n.createElement(m,{relativePagePath:b}),n.createElement(A,{date:x})),n.createElement(h.Z,{pageContext:t,location:i,slug:S,tabs:N,currentTab:E}),n.createElement(s.Z,null))}},6716:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return m}});var n,i=a(3366),r=(a(7294),a(4983)),o=a(2296),s=["components"],c={},l=(n="Caption",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),p={_frontmatter:c},d=o.Z;function m(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)(d,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You might want to modify the existing sample Javascript code that is provided to call your own custom REST APIs or display different fields in the chatbot based on your own requirements.\nYou will then want to test that your action works as expected."),(0,r.kt)("p",null,"As part of the IBM Cloud Functions service, you can directly invoke each of the actions you created and view the expected JSON or HTML format that is returned from each request.\nAlthough the steps outlined on this page detail how to test one of the sample actions provided, the same concepts can be used to test your own Cloud Functions actions."),(0,r.kt)("h2",null,"Testing the sample actions"),(0,r.kt)("p",null,"Further details about the sample actions provided can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/spm-chatbot/functions/cloud-functions-overview"},"Cloud Function overview")," section."),(0,r.kt)("p",null,"The following list summarizes the steps to test an action using the IBM Cloud Functions service:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate a JWT in SPM and copy the value for use as an authorization parameter when invoking the action."),(0,r.kt)("li",{parentName:"ul"},"Retrieve values for the other parameters you want to send. Different flows will be invoked depending on the parameters used."),(0,r.kt)("li",{parentName:"ul"},"In the IBM Cloud Functions service, add all parameters to a JSON object."),(0,r.kt)("li",{parentName:"ul"},"Invoke the action and view the response.")),(0,r.kt)("p",null,"Further details for each of these steps are in the following sections."),(0,r.kt)("p",null,"You can test the ",(0,r.kt)("inlineCode",{parentName:"p"},"caseworker")," action, which will in turn invoke one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"person")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"verifications")," actions under the hood, or you can test either of the ",(0,r.kt)("inlineCode",{parentName:"p"},"person")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"verifications")," actions directly."),(0,r.kt)("h3",null,"How to generate an authorization token to use when invoking the action"),(0,r.kt)("p",null,"Before you invoke any of the actions, you need to get a valid JWT to add as an authorization parameter.\nThis is required for the action to be able to access the underlying REST API in the SPM server."),(0,r.kt)("p",null,"The following list outlines how to retrieve a valid JWT from SPM to use when invoking the actions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In your SPM application, log in with the user that you enabled to be displayed as the virtual assistant for example, ",(0,r.kt)("inlineCode",{parentName:"li"},"caseworker"),"."),(0,r.kt)("li",{parentName:"ol"},"From your browser > ",(0,r.kt)("inlineCode",{parentName:"li"},"Developer Tools"),", open the ",(0,r.kt)("inlineCode",{parentName:"li"},"Network")," section and select the clear icon."),(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"Virtual Assistant")," web chat and select ",(0,r.kt)("inlineCode",{parentName:"li"},"Outstanding verifications by case"),"."),(0,r.kt)("li",{parentName:"ol"},"By viewing the request headers in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Network")," section for the request to Watson Assistant, you can copy the value for the ",(0,r.kt)("inlineCode",{parentName:"li"},"authorization")," request header. You do not need to include the ‘Bearer’ scheme, just the value of the token.")),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB60lEQVQoz2XRu47TQBQGYD8Jb5CFhoYeAdsgXgTRbIOSLEKiggUtokc0SEQh2RbxGCxkld0Qxx7H4xnP/Wo7zqA4SCji0ylO85/iPxFCyBjTNE1d11VVWWOVkHw3QkglpPK+ct5b5533+91Xla9qY23EGJtMJqPRaDweT6ZTlOcwSSARlLI4yX7N41UC1rDIcggRhqiEBaZcYspyhKKyxACAoijKPULiNM0gTGGertfXq3QJ1mANUUkKXIL17kSWwwRkeYEipZQxxnactSVjAKx+g+SmSBAnPwocCxVC2HZCx3jra29sE+lDnAupjPO1c5WxrvGeUkEZU0oIwbWWWivvbNPUzvv/woJnaUoQoiXmhDBhZgvwcx4vAV4CnOQUEs1NI+xGu/YgrJQWUoLFAq9inKSB5x++0Xuv0ONzfP91efy2fHSGH7zBx+/IwzPy5D39F1ZaV04LwS9n86vrxewmpih5/gXeOinvviS9Ae718e0BujNERwN01Ee9flfYntHqKtEl02HbbkNo21033y/t04/ps0/JyWfU/8qHU3l6IU+ncjiVLy5k5L2vO5umXqGKCRvC31bD7kSLIeAEbTc+bOtwKKKUCiHatu1+0Vprm81m07b7qaoaFgWhTOndQ7W2ShuptLFOSPkHGctNX0agPyQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("picture",{parentName:"span"},"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/4c25ca0d5e42c8ad1a9e9bcb5d28569f/0eda2/authorization.webp 288w","/spm-chatbot/static/4c25ca0d5e42c8ad1a9e9bcb5d28569f/460e2/authorization.webp 576w","/spm-chatbot/static/4c25ca0d5e42c8ad1a9e9bcb5d28569f/e0ca3/authorization.webp 1152w","/spm-chatbot/static/4c25ca0d5e42c8ad1a9e9bcb5d28569f/d02be/authorization.webp 1728w","/spm-chatbot/static/4c25ca0d5e42c8ad1a9e9bcb5d28569f/c1f4c/authorization.webp 2304w","/spm-chatbot/static/4c25ca0d5e42c8ad1a9e9bcb5d28569f/790f4/authorization.webp 2460w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/4c25ca0d5e42c8ad1a9e9bcb5d28569f/7fc1e/authorization.png 288w","/spm-chatbot/static/4c25ca0d5e42c8ad1a9e9bcb5d28569f/a5df1/authorization.png 576w","/spm-chatbot/static/4c25ca0d5e42c8ad1a9e9bcb5d28569f/3cbba/authorization.png 1152w","/spm-chatbot/static/4c25ca0d5e42c8ad1a9e9bcb5d28569f/0b124/authorization.png 1728w","/spm-chatbot/static/4c25ca0d5e42c8ad1a9e9bcb5d28569f/4ea69/authorization.png 2304w","/spm-chatbot/static/4c25ca0d5e42c8ad1a9e9bcb5d28569f/43e82/authorization.png 2460w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",(0,r.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/spm-chatbot/static/4c25ca0d5e42c8ad1a9e9bcb5d28569f/3cbba/authorization.png",alt:"Authorization",title:"Authorization",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,r.kt)(l,{fullWidth:!0,mdxType:"Caption"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Figure 1: Authorization."))),(0,r.kt)("h3",null,"Determine parameters for the flow you want to test and add to a JSON object"),(0,r.kt)("p",null,"The Cloud Function action accepts parameters as a JSON object only. Determine the parameters you need to test the required action and flow. Add them, along with the appropriate authorization parameter, to a JSON object."),(0,r.kt)("h4",null,"Parameters and flows for the ",(0,r.kt)("inlineCode",{parentName:"h4"},"caseworker")," action"),(0,r.kt)("p",null,"The following table lists the possible flows through the ",(0,r.kt)("inlineCode",{parentName:"p"},"caseworker")," action that you can test and the parameters required to invoke the flow.\nIn addition, a ",(0,r.kt)("inlineCode",{parentName:"p"},"__ow_headers")," parameter containing a nested JSON object with a valid authorization token value (without the ‘Bearer’ scheme) is required."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Flow"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameters to invoke the flow"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter details"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example of parameters in JSON format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1. Retrieve a person’s details by using one of their identifiers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"identificationID",(0,r.kt)("br",null),"identificationIDType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"You can retrieve the ",(0,r.kt)("inlineCode",{parentName:"td"},"identificationID"),", which is also known as the ",(0,r.kt)("inlineCode",{parentName:"td"},"alternateID"),", from a person’s evidence page in SPM. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," The ",(0,r.kt)("inlineCode",{parentName:"td"},"identificationIDType")," parameter is an optional string parameter. Based on the sample code, the value must be one of ",(0,r.kt)("inlineCode",{parentName:"td"},"passport"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"drivers licence")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"SSN"),". Under the hood, the string gets mapped to a corresponding code from the ConcernRoleAlternateID codetable in SPM, which is required by the underlying REST API that the action invokes. Any other string value will get mapped to a default code of ",(0,r.kt)("inlineCode",{parentName:"td"},"CA7"),". If this parameter is not used, the default code of ",(0,r.kt)("inlineCode",{parentName:"td"},"CA7")," will be used."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"identificationID":20001, "identificationIDType":"Passport", "__ow_headers":{"authorization":"<token_value>"}}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2. Retrieve a case and primary client’s details by using the case reference number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"caseReference"),(0,r.kt)("td",{parentName:"tr",align:"left"},"You can retrieve the case reference number when you view the Integrated Case in SPM."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"personID" : "564543246789865439", "__ow_headers":{"authorization":"<token_value>"}}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3. Retrieve verification details for a person"),(0,r.kt)("td",{parentName:"tr",align:"left"},"personID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"You can retrieve the ",(0,r.kt)("inlineCode",{parentName:"td"},"personID"),", which is also known as the ",(0,r.kt)("inlineCode",{parentName:"td"},"concernRoleID"),", from the person home page in SPM if you have the SPM UI Inspector tool configured, or from the ",(0,r.kt)("inlineCode",{parentName:"td"},"ConcernRole")," database table."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"caseReference" : "55555", "__ow_headers":{"authorization":"<token_value>"}}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4. Retrieve verification details for a case"),(0,r.kt)("td",{parentName:"tr",align:"left"},"caseID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"You can retrieve the ",(0,r.kt)("inlineCode",{parentName:"td"},"caseID")," from the case home page if you have the SPM UI Inspector tool configured, or from the ",(0,r.kt)("inlineCode",{parentName:"td"},"CaseHeader")," database table."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"caseID" : "8362543246789865439", "__ow_headers":{"authorization":"<token_value>"}}'))))),(0,r.kt)("h4",null,"Parameters and flows for the ",(0,r.kt)("inlineCode",{parentName:"h4"},"person")," action"),(0,r.kt)("p",null,"The following table lists the flows through the ",(0,r.kt)("inlineCode",{parentName:"p"},"person")," action that you can test and the parameters required to invoke the flow. A valid ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," parameter is required in each action.\nNote that the format of this parameter differs slightly from the ",(0,r.kt)("inlineCode",{parentName:"p"},"caseworker")," action."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Flow"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameters to invoke the flow"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter details"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example of parameters in JSON format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1. Retrieve a person’s details by using one of their identifiers"),(0,r.kt)("td",{parentName:"tr",align:"left"},"identificationID",(0,r.kt)("br",null),"identificationIDType"),(0,r.kt)("td",{parentName:"tr",align:"left"},"You can retrieve the ",(0,r.kt)("inlineCode",{parentName:"td"},"identificationID"),", which is also known as the ",(0,r.kt)("inlineCode",{parentName:"td"},"alternateID"),", from a person’s evidence page in SPM. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," The ",(0,r.kt)("inlineCode",{parentName:"td"},"identificationIDType")," parameter is an optional string parameter. Based on the sample code, the value must be one of ",(0,r.kt)("inlineCode",{parentName:"td"},"passport"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"drivers licence")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"SSN"),". Under the hood, the string gets mapped to a corresponding code from the ConcernRoleAlternateID codetable in SPM, which is required by the underlying REST API that the action invokes. Any other string value will get mapped to a default code of ",(0,r.kt)("inlineCode",{parentName:"td"},"CA7"),". If this parameter is not used, the default code of ",(0,r.kt)("inlineCode",{parentName:"td"},"CA7")," will be used."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"identificationID":20001, "identificationIDType":"Passport", "authorization":"Bearer <token_value>"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2. Retrieve a case and primary client’s details by using the case reference number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"caseReference"),(0,r.kt)("td",{parentName:"tr",align:"left"},"You can retrieve the case reference number when you view the Integrated Case in SPM."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"personID" : "564543246789865439", "authorization":"Bearer <token_value>"}'))))),(0,r.kt)("h4",null,"Parameters and flows for the ",(0,r.kt)("inlineCode",{parentName:"h4"},"verifications")," action"),(0,r.kt)("p",null,"The following table lists the flows through the ",(0,r.kt)("inlineCode",{parentName:"p"},"verifications")," action that you can test and the parameters required to invoke the flow. A valid ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," parameter is required in each action.\nNote that the format of this parameter differs slightly from the ",(0,r.kt)("inlineCode",{parentName:"p"},"caseworker")," action."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Flow"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameters to invoke the flow"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter details"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example of parameters in JSON format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1. Retrieve verification details for a person"),(0,r.kt)("td",{parentName:"tr",align:"left"},"personID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"You can retrieve the ",(0,r.kt)("inlineCode",{parentName:"td"},"personID"),", which is also known as the ",(0,r.kt)("inlineCode",{parentName:"td"},"concernRoleID"),", from the person home page in SPM if you have the SPM UI Inspector tool configured, or from the ",(0,r.kt)("inlineCode",{parentName:"td"},"ConcernRole")," database table."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"caseReference" : "55555", ""authorization":"Bearer <token_value>"}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2. Retrieve verification details for a case"),(0,r.kt)("td",{parentName:"tr",align:"left"},"caseID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"You can retrieve the ",(0,r.kt)("inlineCode",{parentName:"td"},"caseID")," from the case home page if you have the SPM UI tool configured, or from the ",(0,r.kt)("inlineCode",{parentName:"td"},"CaseHeader")," database table."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"caseID" : "8362543246789865439", "authorization":"Bearer <token_value>"}'))))),(0,r.kt)("h2",null,"Invoke the Cloud Function action with parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From ",(0,r.kt)("inlineCode",{parentName:"li"},"Functions")," > ",(0,r.kt)("inlineCode",{parentName:"li"},"Actions")," > ",(0,r.kt)("inlineCode",{parentName:"li"},"curam-rest")," package, select the action to be tested."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Invoke with parameters")," button."),(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("inlineCode",{parentName:"li"},"Change Action Input")," window, enter a JSON object containing the parameters you want to send and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Apply"),".")),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAABYlAAAWJQFJUiTwAAABBklEQVQY04XPy0rDQBQG4AFva1/AB9BVpAFXeQjXDYL4iL6Al25sNSsxIITamelMkxpNGzP3M1IvtdKIP9/2Pz8H4dHoaTikhIwpoZRwPtZKWmOtMa201kopAMiyDPFJQXnOihLznOVTPqnmtVLatNLGeu8BwHtPKUWseKkbWdWiehPzRj6X4rUSjdStaqGtg59yOWuWx/6NcbAsM8YQm86UtkJqqYxURnyQ+ovQsKqWThkwdlHGmCKp1GL5zzFY8/0zwajfv0mS5PZuPYNBcn+duqvUr7pM/cUD9B79eY+gKIrCMAyC4PBXOp3gYP/oePdU7Jz4ja7bjOHTVgzbsUNdv3eG3wH1U6KCBv5PAQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("picture",{parentName:"span"},"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/b06c7ca744c8c6b61cee6b145aca5322/0eda2/Invoke-with-parameters.webp 288w","/spm-chatbot/static/b06c7ca744c8c6b61cee6b145aca5322/460e2/Invoke-with-parameters.webp 576w","/spm-chatbot/static/b06c7ca744c8c6b61cee6b145aca5322/e0ca3/Invoke-with-parameters.webp 1152w","/spm-chatbot/static/b06c7ca744c8c6b61cee6b145aca5322/59f7c/Invoke-with-parameters.webp 1622w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/b06c7ca744c8c6b61cee6b145aca5322/7fc1e/Invoke-with-parameters.png 288w","/spm-chatbot/static/b06c7ca744c8c6b61cee6b145aca5322/a5df1/Invoke-with-parameters.png 576w","/spm-chatbot/static/b06c7ca744c8c6b61cee6b145aca5322/3cbba/Invoke-with-parameters.png 1152w","/spm-chatbot/static/b06c7ca744c8c6b61cee6b145aca5322/a91d4/Invoke-with-parameters.png 1622w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",(0,r.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/spm-chatbot/static/b06c7ca744c8c6b61cee6b145aca5322/3cbba/Invoke-with-parameters.png",alt:"Invoke-with-parameters",title:"Invoke-with-parameters",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,r.kt)(l,{fullWidth:!0,mdxType:"Caption"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Figure 2: Invoke with parameters."))),"4. Click the `Invoke` button.",(0,r.kt)("h2",null,"Sample expected results"),(0,r.kt)("p",null,"The following figures include some sample results retrieved by invoking the different actions based on sample data that is configured in the application."),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1104px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"109.72222222222223%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAIAAABPIytRAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLElEQVQ4y5WTiY6rIBSG+/5v13Rxw7UqtCAiUK0scqM0mclMb5v5YowhfAjn/Ow4523bYkysXd7gloXdl6ZbZrX0csHDMs5m95gfQvBxHJ1zy1umedW0Wf1xXmZlds65irU9Z1LK3777P9bandaacTbwQUo5z/N74acspQQJyDcAAIQQIQRjDGPMOf8gT9N0u90opcaYZVmstWZDa+1H3slKKUpp3/fWWvcXVtk593g8yrK8XC5CCOfcNE33DSml78I72TknhPA+57zrusvl0m74HSmltNY/jrDKfohSut/v0zQ9Ho9xHEMIz+dzlmVN09zv95fn+pIJIfv9vm1bQggA4HQ6RVF02xiG4WXZnts2xkwbakNrPY6jMeZzwYwxSqnva/vvjzl79rmqKqWU+yPPPwsh+r7nnPs3pbTbUErxDSHENE0vqq2UyrLscDikaXo+nwEAQRAcNzDGQRBEUZQkSZqmWZYRQhhjCKFhGJxza7bDMIzjGADg5+V5HkXR6XQKw/BwOCRJ0rbt9Xqtqqosy6qqEEJ+I+utquu6LMumaYqiyPO8rmuMMYRwmiZKqU8+IcR3DkJIKfU1XuWiKOI4zvM8CIIwDIuiQAgBAIQQEMKqquq6FkL426K19u18nhkA4IN12kiSBCGUJImUsmmasiwhhBjjYYNuSHm3dtnN84wQul7R7Xr1k9Z6MOZrQynFGHddxxh71Sprf4dgeabFfU+OMfbrsVYb8w9Yq+zLXv4opwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("picture",{parentName:"span"},"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/fe6fc17392b29aa2344628e2b3cd6438/0eda2/Person-results-by-identification-id.webp 288w","/spm-chatbot/static/fe6fc17392b29aa2344628e2b3cd6438/460e2/Person-results-by-identification-id.webp 576w","/spm-chatbot/static/fe6fc17392b29aa2344628e2b3cd6438/305f7/Person-results-by-identification-id.webp 1104w"],sizes:"(max-width: 1104px) 100vw, 1104px",type:"image/webp"}),"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/fe6fc17392b29aa2344628e2b3cd6438/7fc1e/Person-results-by-identification-id.png 288w","/spm-chatbot/static/fe6fc17392b29aa2344628e2b3cd6438/a5df1/Person-results-by-identification-id.png 576w","/spm-chatbot/static/fe6fc17392b29aa2344628e2b3cd6438/242c1/Person-results-by-identification-id.png 1104w"],sizes:"(max-width: 1104px) 100vw, 1104px",type:"image/png"}),"\n          ",(0,r.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/spm-chatbot/static/fe6fc17392b29aa2344628e2b3cd6438/242c1/Person-results-by-identification-id.png",alt:"Person-results-by-identification-id",title:"Person-results-by-identification-id",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,r.kt)(l,{fullWidth:!0,mdxType:"Caption"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Figure 3: Person results by using the identification number."))),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1102px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"110.06944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAIAAABPIytRAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNklEQVQ4y5WU23KbMBBA+f8/y+TFD7EFljASyDIyN13ACAFSCyRpkiZ2ex4YNMPZ3dldFEgpz+dznufuLt470bm0dMa6unVcuK6fgsHatm37vvfe3/eNdermxsnZaXk34xx47zPBhJZa6b99f5egN6PWSinVtZ0x5qHwSS5rjeARQohWrtdr0zTlilLqgdzIjvO8LEtrrfd+nufpAw9kfbNKSaXUfxX8Khvr7DCkaRrHcVEUQgitddu227Pv+ztBg5uZvfdCiOfn58Ph8PLyAgBACFFK67rO87yqKrUipRzH8XO3B+fcXBQFxrheqarKWruNahzHvu/NG/M8f5GXc1XXlFIhhHPuvdtFUdxv+GvZXdcRQtI0JYRUVcU5Z4xdLhchhDFGr3xJ+0eu6/rp6QljHIbhbrdDCO12uyiKCCFSynblO3l4lSGEdV1rrcuyRAhxzrs3fmr4Ijs3v0f99ruf9jwQ6lZcr19mcCfQJ1m1gxDNR/nfVy3Q3VCWRZZll8slyzLGWFEUeZ4nSdI0zXmFMUYpTZIEY8wYi+OYc77IUhsIj2EYRVG03+8BAISQKIoAAGmabn8bhHBb3m342xZP0xSo1uDktN/vIYQAgCiKMMYQwjAMGWPH4zEMwziOwzAkhDDGyrKklEopt8w9wThJkjRNlxQIbkWeTqet+M1BCG11HQ4HAIDWy7UTtDdLaRbHcZZlp1MCEVrDV4wxa8emaThfrgel1ThO1lpjBmMGa+3vsn8BWsPpLwtIJBgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("picture",{parentName:"span"},"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/4f5f50c4091712717d6571c61643780f/0eda2/Person-results-by-case-reference.webp 288w","/spm-chatbot/static/4f5f50c4091712717d6571c61643780f/460e2/Person-results-by-case-reference.webp 576w","/spm-chatbot/static/4f5f50c4091712717d6571c61643780f/9f647/Person-results-by-case-reference.webp 1102w"],sizes:"(max-width: 1102px) 100vw, 1102px",type:"image/webp"}),"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/4f5f50c4091712717d6571c61643780f/7fc1e/Person-results-by-case-reference.png 288w","/spm-chatbot/static/4f5f50c4091712717d6571c61643780f/a5df1/Person-results-by-case-reference.png 576w","/spm-chatbot/static/4f5f50c4091712717d6571c61643780f/a1298/Person-results-by-case-reference.png 1102w"],sizes:"(max-width: 1102px) 100vw, 1102px",type:"image/png"}),"\n          ",(0,r.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/spm-chatbot/static/4f5f50c4091712717d6571c61643780f/a1298/Person-results-by-case-reference.png",alt:"Person-results-by-case-reference",title:"Person-results-by-case-reference",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,r.kt)(l,{fullWidth:!0,mdxType:"Caption"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Figure 4: Person results by using the case reference number."))),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsTAAALEwEAmpwYAAABU0lEQVQoz5XR2VLDIBQG4Lz/45kxITRAFpYOCEmU0NRwUqegF3qh9hsu2H5gDsU0LwBHjPCfBhG2d5g9vF3AX/Zifl3CGm6PA4DirJS1bl3XEAJAfCxs7QvAAQAxxuM4HgtPzimljDHTNHnv1+/yTAjBex+S3FnXdd/3wll7Op0451prpdSyLHPymiyJc27+MiUhhBhjQUj7XFV1XTPGCCHDMFBKWdJ1HWOMc15VVdu2jDFK6SnRWl+v16J8esIYI4RI0rZtXs6dpmkIIWVZYowJIU3TPCfDMNzDuGko/byzT/KFfd+fz2cppda673shhEo450IIa+09fAkhV2nf9+O4l/348ne1r9t2u91+35rPyt+Z5WEhBJdSCiGklMYYzvk4jpzzIRnHMRfZOee937btkuR8wRglhGKMKaVSSpwghMqyrOsaIdR1HaXUGBNj/PHsDxme3zi4HlJcAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("picture",{parentName:"span"},"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/d3ecf0e918d951586c3b96da6c75c534/0eda2/Verification-results-by-person-id.webp 288w","/spm-chatbot/static/d3ecf0e918d951586c3b96da6c75c534/460e2/Verification-results-by-person-id.webp 576w","/spm-chatbot/static/d3ecf0e918d951586c3b96da6c75c534/e0ca3/Verification-results-by-person-id.webp 1152w","/spm-chatbot/static/d3ecf0e918d951586c3b96da6c75c534/6a499/Verification-results-by-person-id.webp 1218w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/d3ecf0e918d951586c3b96da6c75c534/7fc1e/Verification-results-by-person-id.png 288w","/spm-chatbot/static/d3ecf0e918d951586c3b96da6c75c534/a5df1/Verification-results-by-person-id.png 576w","/spm-chatbot/static/d3ecf0e918d951586c3b96da6c75c534/3cbba/Verification-results-by-person-id.png 1152w","/spm-chatbot/static/d3ecf0e918d951586c3b96da6c75c534/e4e3d/Verification-results-by-person-id.png 1218w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",(0,r.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/spm-chatbot/static/d3ecf0e918d951586c3b96da6c75c534/3cbba/Verification-results-by-person-id.png",alt:"Verification-results-by-person-id",title:"Verification-results-by-person-id",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,r.kt)(l,{fullWidth:!0,mdxType:"Caption"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Figure 5: Verification results by using the person number."))),(0,r.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,r.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"87.15277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAAAsTAAALEwEAmpwYAAABwElEQVQ4y5WT227kIAyG8/7PNxeVNimdkIDD+RAOmQRmN2Hbi11Vmn7yhUH8Ntimc94DhW171FpLOcpJLfVb47b6WG2sLtbucexy1THGx+PxfIFSn/XTOusi4wshhAu+bVvOedu2WusrgTomPQA1xoQQYowppZzzq2Jlk5TCe18vnj+hC6mkGBBClNJlWYQQWusQQgv0Fe6f5ac415zTPJOGtbaU8mpm67eUIgBgjOd5llIqpRhjQgjOubhQSjV/WRallHNOSrmua2d8vjLPt9ut73tCCLrQWkspOedKKWMMY0xrLYQIIXh/ao7j6LTLMYZ5Jm9vb33fI4QwxsMwAABCaBxHjHHbbEzThDEGgH3fOyZc3/+apgkAxnFsDkLofoExppQCQHsFIaQ9BAC8950L+3HspZTjOOp/nLP6ff86ocO6+h+19yt0J03knAlx1oYxBgBaa2NMK3srdUNeKKVijH8zSxMRekfo436/I4SGYWhzwi8AgFLKLgCgTVHr0yk2fvtA7wDAOV+WZZomfbFcUEoJIdNFKzLnnNLzLzRxmjBWSllr22299zFG51zbMcZordsBa6333jmXUvoj/g0qQcrHOgcJ3wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,r.kt)("picture",{parentName:"span"},"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/c9cde137fbf38e03215b737c19ed380e/0eda2/Verification-results-by-case-id.webp 288w","/spm-chatbot/static/c9cde137fbf38e03215b737c19ed380e/460e2/Verification-results-by-case-id.webp 576w","/spm-chatbot/static/c9cde137fbf38e03215b737c19ed380e/e0ca3/Verification-results-by-case-id.webp 1152w","/spm-chatbot/static/c9cde137fbf38e03215b737c19ed380e/f414a/Verification-results-by-case-id.webp 1170w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,r.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/c9cde137fbf38e03215b737c19ed380e/7fc1e/Verification-results-by-case-id.png 288w","/spm-chatbot/static/c9cde137fbf38e03215b737c19ed380e/a5df1/Verification-results-by-case-id.png 576w","/spm-chatbot/static/c9cde137fbf38e03215b737c19ed380e/3cbba/Verification-results-by-case-id.png 1152w","/spm-chatbot/static/c9cde137fbf38e03215b737c19ed380e/64f98/Verification-results-by-case-id.png 1170w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",(0,r.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/spm-chatbot/static/c9cde137fbf38e03215b737c19ed380e/3cbba/Verification-results-by-case-id.png",alt:"Verification-results-by-case-id",title:"Verification-results-by-case-id",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,r.kt)(l,{fullWidth:!0,mdxType:"Caption"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Figure 6: Verification results by using the case number."))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-troubleshooting-invoke-a-function-mdx-49bb4b1b5b1e5c75f784.js.map