"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[8176],{2296:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(7294),r=a(8650),i=a.n(r),l=a(1082),s=a(1025),o=a(1908),c=a(5900),d=a.n(c),m=function(e){var t,a=e.title,r=e.theme,i=e.tabs,l=void 0===i?[]:i;return n.createElement("div",{className:d()("PageHeader-module--page-header--36a7c",(t={},t["PageHeader-module--with-tabs--bdb43"]=l.length,t["PageHeader-module--dark-mode--58278"]="dark"===r,t))},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,r=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||r,s=i.baseUrl,o=i.subDirectory,c=s+"/edit/"+i.branch+o+"/src/pages"+t;return s?n.createElement("div",{className:"cds--row EditLink-module--row--04499"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--203ae",href:c},"Edit this page on GitHub"))):null},p=a(849),g=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,s=r.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===s,c=new RegExp(s+"/?(#.*)?$"),m=r.replace(c,a);return n.createElement("li",{key:e,className:d()((t={},t["PageTabs-module--selected-item--68107"]=o,t),"PageTabs-module--list-item--d36e2")},n.createElement(l.Link,{className:"PageTabs-module--link--2b3ff",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--c4bab"},o))))))},t}(n.Component),f=h,v=a(5391),b=a(5387),E=a(4389),w=function(e){var t=e.date,a=new Date(t);return t?n.createElement(E.X2,{className:"last-modified-date-module--row--5c9a1"},n.createElement(E.sg,null,n.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},k=function(e){var t=e.pageContext,a=e.children,r=e.location,c=e.Title,d=t.frontmatter,g=void 0===d?{}:d,h=t.relativePagePath,E=t.titleType,k=g.tabs,N=g.title,P=g.theme,y=g.description,T=g.keywords,x=g.date,M=(0,b.Z)().interiorTheme,Z=(0,l.useStaticQuery)("2456312558").site.pathPrefix,B=Z?r.pathname.replace(Z,""):r.pathname,C=k?B.split("/").filter(Boolean).slice(-1)[0]||i()(k[0],{lower:!0}):"",A=P||M;return n.createElement(o.Z,{tabs:k,homepage:!1,theme:A,pageTitle:N,pageDescription:y,pageKeywords:T,titleType:E},n.createElement(m,{title:c?n.createElement(c,null):N,label:"label",tabs:k,theme:A}),k&&n.createElement(f,{title:N,slug:B,tabs:k,currentTab:C}),n.createElement(v.Z,{padded:!0},a,n.createElement(u,{relativePagePath:h}),n.createElement(w,{date:x})),n.createElement(p.Z,{pageContext:t,location:r,slug:B,tabs:k,currentTab:C}),n.createElement(s.Z,null))}},6592:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return d}});var n=a(3366),r=(a(7294),a(4983)),i=a(2296),l=["components"],s={},o={_frontmatter:s},c=i.Z;function d(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)(c,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The natural-language processing for the IBM Watson Assistant service is defined in a ",(0,r.kt)("em",{parentName:"p"},"dialog skill"),", which is a container for all of the artifacts that define a conversation flow."),(0,r.kt)("p",null,"An ",(0,r.kt)("em",{parentName:"p"},"intent")," is a purpose or goal that is expressed in a caseworker’s input, such as answering a question on a particular topic.\nBy recognizing the intent expressed in the input, the Watson Assistant service can choose the correct dialog for responding to it."),(0,r.kt)("p",null,"The sample code provided contains a dialog skill which has been configured to recognise intents relating to outstanding verifications on a case or client or common caseworker procedures.\nA webhook has also been defined in the dialog skill which will trigger an IBM Cloud Functions action when a REST API call to SPM to retrieve data is required."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/spm-chatbot/architecture/arch-overview"},"Architecture overview")," for more details on how IBM Watson Assistant integrates with IBM Cloud Functions and Merative Social Program Management."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-skills-dialog-skills-overview-mdx-5d1dd9c2dbb47bac39a5.js.map