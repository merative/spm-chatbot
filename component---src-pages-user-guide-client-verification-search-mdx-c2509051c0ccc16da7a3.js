"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[8031],{2296:function(e,t,n){n.d(t,{Z:function(){return N}});var i=n(7294),a=n(8650),s=n.n(a),l=n(1082),r=n(1025),o=n(1908),c=n(5900),u=n.n(c),h=function(e){var t,n=e.title,a=e.theme,s=e.tabs,l=void 0===s?[]:s;return i.createElement("div",{className:u()("PageHeader-module--page-header--36a7c",(t={},t["PageHeader-module--with-tabs--bdb43"]=l.length,t["PageHeader-module--dark-mode--58278"]="dark"===a,t))},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},n)))))},d=function(e){var t=e.relativePagePath,n=e.repository,a=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,s=n||a,r=s.baseUrl,o=s.subDirectory,c=r+"/edit/"+s.branch+o+"/src/pages"+t;return r?i.createElement("div",{className:"cds--row EditLink-module--row--04499"},i.createElement("div",{className:"cds--col"},i.createElement("a",{className:"EditLink-module--link--203ae",href:c},"Edit this page on GitHub"))):null},p=n(849),m=n(1721),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,m.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=n.map((function(e){var t,n=s()(e,{lower:!0,strict:!0}),o=n===r,c=new RegExp(r+"/?(#.*)?$"),h=a.replace(c,n);return i.createElement("li",{key:e,className:u()((t={},t["PageTabs-module--selected-item--68107"]=o,t),"PageTabs-module--list-item--d36e2")},i.createElement(l.Link,{className:"PageTabs-module--link--2b3ff",to:""+h},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},i.createElement("nav",{"aria-label":t},i.createElement("ul",{className:"PageTabs-module--list--c4bab"},o))))))},t}(i.Component),k=f,g=n(5391),y=n(5387),b=n(4389),v=function(e){var t=e.date,n=new Date(t);return t?i.createElement(b.X2,{className:"last-modified-date-module--row--5c9a1"},i.createElement(b.sg,null,i.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},N=function(e){var t=e.pageContext,n=e.children,a=e.location,c=e.Title,u=t.frontmatter,m=void 0===u?{}:u,f=t.relativePagePath,b=t.titleType,N=m.tabs,w=m.title,E=m.theme,T=m.description,P=m.keywords,C=m.date,x=(0,y.Z)().interiorTheme,A=(0,l.useStaticQuery)("2456312558").site.pathPrefix,I=A?a.pathname.replace(A,""):a.pathname,S=N?I.split("/").filter(Boolean).slice(-1)[0]||s()(N[0],{lower:!0}):"",V=E||x;return i.createElement(o.Z,{tabs:N,homepage:!1,theme:V,pageTitle:w,pageDescription:T,pageKeywords:P,titleType:b},i.createElement(h,{title:c?i.createElement(c,null):w,label:"label",tabs:N,theme:V}),N&&i.createElement(k,{title:w,slug:I,tabs:N,currentTab:S}),i.createElement(g.Z,{padded:!0},n,i.createElement(d,{relativePagePath:f}),i.createElement(v,{date:C})),i.createElement(p.Z,{pageContext:t,location:a,slug:I,tabs:N,currentTab:S}),i.createElement(r.Z,null))}},5455:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return u}});var i=n(3366),a=(n(7294),n(4983)),s=n(2296),l=["components"],r={},o={_frontmatter:r},c=s.Z;function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Users can view outstanding verifications for a client in two ways."),(0,a.kt)("h2",null,"Free text a question, identification type or number into the text field"),(0,a.kt)("p",null,"In the example where a user is searching for a client by using a passport number, the user can type this information in the text field. The Virtual Assistant can recognize different variations of how this information is entered."),(0,a.kt)("p",null,"For example, the user might type it as ",(0,a.kt)("inlineCode",{parentName:"p"},"Passport 20001"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Pass 20001"),". Similarly, the user might type it as a question."),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"Show me outstanding verifications for Passport 20001"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"What needs to be verified for pass 20001?"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"Can I see verifications on Passport 20001?")," and many other variations of the question."),(0,a.kt)("p",null,"If the user is searching by using free text, the user must attempt another variation if the Virtual Assistant does not recognize the user’s input."),(0,a.kt)("p",null,"When the text is entered, the Virtual Assistant displays the client that it found by using the information that is provided and the user must then click whether it is the correct client."),(0,a.kt)("p",null,"If the user clicks ",(0,a.kt)("inlineCode",{parentName:"p"},"Yes, it's the right client"),", the outstanding verifications for this client are displayed in the chat window. In addition to listing the outstanding verifications for the client, the Virtual Assistant displays options the user can click."),(0,a.kt)("p",null,"The following list outlines the options that are displayed to the user:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"See client home."),(0,a.kt)("li",{parentName:"ul"},"See client notes.")),(0,a.kt)("p",null,"When the user clicks either option, the page opens in the application."),(0,a.kt)("p",null,"If the user wants to continue to use the Virtual Assistant, the user can type another question or entity type and number or else click one of the provided options."),(0,a.kt)("p",null,"The following list outlines the options that are displayed to the user:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Try another client."),(0,a.kt)("li",{parentName:"ul"},"Start again."),(0,a.kt)("li",{parentName:"ul"},"I’ve got what I need thanks.")),(0,a.kt)("p",null,"The three options are also provided if the client displayed by the Virtual Assistant is not the correct client."),(0,a.kt)("h2",null,"Click the Outstanding verifications by client option"),(0,a.kt)("p",null,"By clicking the ",(0,a.kt)("inlineCode",{parentName:"p"},"Outstanding verifications by client")," option, the Virtual Assistant is prompted to display ",(0,a.kt)("inlineCode",{parentName:"p"},"Which identification number do you want to use? SSN, Driver's license, Passport, Reference number"),"."),(0,a.kt)("p",null,"The user must then click or type the identification number that the user wants to use, which prompts the Virtual Assistant to request the number."),(0,a.kt)("p",null,"When the user enters the number, the Virtual Assistant displays the client that the Virtual Assistant found by using the information that the user provided."),(0,a.kt)("p",null,"The user must then click if it is the correct client. If the user clicks ",(0,a.kt)("inlineCode",{parentName:"p"},"Yes, it's the right client"),", the outstanding verifications for this client are displayed in the chat window."),(0,a.kt)("p",null,"In addition to listing the outstanding verifications for the client, the Virtual Assistant displays options the user can click to ",(0,a.kt)("inlineCode",{parentName:"p"},"See client home")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"See client notes"),". When the user clicks either option, the page opens in the application."),(0,a.kt)("p",null,"If the user wants to continue to use the Virtual Assistant, the user can type another question or entity type and number or else click one of the provided options."),(0,a.kt)("p",null,"The following list outlines the options that are displayed to the user:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Try another client."),(0,a.kt)("li",{parentName:"ul"},"Start again."),(0,a.kt)("li",{parentName:"ul"},"I’ve got what I need thanks.")),(0,a.kt)("p",null,"The three options are also provided if the client displayed by the Virtual Assistant is not the correct client."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-user-guide-client-verification-search-mdx-c2509051c0ccc16da7a3.js.map