"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[9247],{2296:function(e,t,a){a.d(t,{Z:function(){return E}});var i=a(7294),s=a(8650),n=a.n(s),r=a(1082),o=a(1025),l=a(1908),d=a(5900),c=a.n(d),m=function(e){var t,a=e.title,s=e.theme,n=e.tabs,r=void 0===n?[]:n;return i.createElement("div",{className:c()("PageHeader-module--page-header--36a7c",(t={},t["PageHeader-module--with-tabs--bdb43"]=r.length,t["PageHeader-module--dark-mode--58278"]="dark"===s,t))},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},a)))))},p=function(e){var t=e.relativePagePath,a=e.repository,s=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||s,o=n.baseUrl,l=n.subDirectory,d=o+"/edit/"+n.branch+l+"/src/pages"+t;return o?i.createElement("div",{className:"cds--row EditLink-module--row--04499"},i.createElement("div",{className:"cds--col"},i.createElement("a",{className:"EditLink-module--link--203ae",href:d},"Edit this page on GitHub"))):null},u=a(849),g=a(1721),b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,s=e.slug,o=s.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),l=a===o,d=new RegExp(o+"/?(#.*)?$"),m=s.replace(d,a);return i.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--68107"]=l,t),"PageTabs-module--list-item--d36e2")},i.createElement(r.Link,{className:"PageTabs-module--link--2b3ff",to:""+m},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},i.createElement("nav",{"aria-label":t},i.createElement("ul",{className:"PageTabs-module--list--c4bab"},l))))))},t}(i.Component),h=b,f=a(5391),y=a(5387),w=a(4389),k=function(e){var t=e.date,a=new Date(t);return t?i.createElement(w.X2,{className:"last-modified-date-module--row--5c9a1"},i.createElement(w.sg,null,i.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},E=function(e){var t=e.pageContext,a=e.children,s=e.location,d=e.Title,c=t.frontmatter,g=void 0===c?{}:c,b=t.relativePagePath,w=t.titleType,E=g.tabs,v=g.title,A=g.theme,N=g.description,T=g.keywords,x=g.date,P=(0,y.Z)().interiorTheme,C=(0,r.useStaticQuery)("2456312558").site.pathPrefix,Z=C?s.pathname.replace(C,""):s.pathname,B=E?Z.split("/").filter(Boolean).slice(-1)[0]||n()(E[0],{lower:!0}):"",D=A||P;return i.createElement(l.Z,{tabs:E,homepage:!1,theme:D,pageTitle:v,pageDescription:N,pageKeywords:T,titleType:w},i.createElement(m,{title:d?i.createElement(d,null):v,label:"label",tabs:E,theme:D}),E&&i.createElement(h,{title:v,slug:Z,tabs:E,currentTab:B}),i.createElement(f.Z,{padded:!0},a,i.createElement(p,{relativePagePath:b}),i.createElement(k,{date:x})),i.createElement(u.Z,{pageContext:t,location:s,slug:Z,tabs:E,currentTab:B}),i.createElement(o.Z,null))}},4151:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return p}});var i,s=a(3366),n=(a(7294),a(4983)),r=a(2296),o=["components"],l={},d=(i="Caption",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)}),c={_frontmatter:l},m=r.Z;function p(e){var t=e.components,a=(0,s.Z)(e,o);return(0,n.kt)(m,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"After you determine the high-level purpose of your chatbot, define the bots Minimum Viable Knowledge (MVK).\nWhen you are designing your first chatbot, it’s best to keep this simple and try not to be overly ambitious.\nThe MVK lists the topics that need to be covered (topic breadth) and the depth of information in each of these topic (topic depth)."),(0,n.kt)("p",null,"Based on your research, list  the topics that you think your bot should cover. You can run these as Design Thinking workshops by bringing your team together to ideate, cluster, and prioritize the topics that should be included."),(0,n.kt)("p",null,"For example, if you design a chatbot for a grocery store you might cover topics such as locations, opening hours, this week’s deals, and so on. The fewer and more focused your topics, the more likely that your chatbot succeeds."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAABRklEQVQY01WOXW/aQBBF+f//qS/tUyulD0hBTYBA4hgbTFjver0731OZSFF7H++cqzOrazdDETeHou3LZGZE5K4CG5xrjq7UwrhFkHEMOc9KPcNW6OLuq0uTxwH6Y663NLz06bUR4XOT9uvNn4eu3c9K3XhYQ0EiZGKqb5AfCTozX5Uk4wVULO8OFG6xeSfCWmSOFyE1pdD9YEJEijECIM6HHB7KdFzM11ONAza7GG81bjYCyGZ4PZ8ev6VQ3D3tn7ku3lIKsygHwVY4LOahgXY/Pf0eQl/m84cykwiEmE7Pquaurp2qLMqciXhOT2X8RfV1Mava+y7WmftjzondjZnPb+Nx/f3aBXdttz+xAhGVuRCSCDGDKpvZyv+PmSERVwzdVCZy9/jBRIKI97f5X3gZq1oI4fNgZl9EzgkA7oB+lemez/Ffx/jKgWK+19EAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("picture",{parentName:"span"},"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/2bdd06a5fd426c47e07e8e9190409db0/0eda2/design-team-essentials-for-ai.webp 288w","/spm-chatbot/static/2bdd06a5fd426c47e07e8e9190409db0/460e2/design-team-essentials-for-ai.webp 576w","/spm-chatbot/static/2bdd06a5fd426c47e07e8e9190409db0/e0ca3/design-team-essentials-for-ai.webp 1152w","/spm-chatbot/static/2bdd06a5fd426c47e07e8e9190409db0/dfde0/design-team-essentials-for-ai.webp 1408w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/webp"}),"\n          ",(0,n.kt)("source",{parentName:"picture",srcSet:["/spm-chatbot/static/2bdd06a5fd426c47e07e8e9190409db0/7fc1e/design-team-essentials-for-ai.png 288w","/spm-chatbot/static/2bdd06a5fd426c47e07e8e9190409db0/a5df1/design-team-essentials-for-ai.png 576w","/spm-chatbot/static/2bdd06a5fd426c47e07e8e9190409db0/3cbba/design-team-essentials-for-ai.png 1152w","/spm-chatbot/static/2bdd06a5fd426c47e07e8e9190409db0/0d4af/design-team-essentials-for-ai.png 1408w"],sizes:"(max-width: 1152px) 100vw, 1152px",type:"image/png"}),"\n          ",(0,n.kt)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/spm-chatbot/static/2bdd06a5fd426c47e07e8e9190409db0/3cbba/design-team-essentials-for-ai.png",alt:"design-team-essentials-for-ai",title:"design-team-essentials-for-ai",loading:"lazy",decoding:"async",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"}}),"\n        "),"\n    "),(0,n.kt)(d,{fullWidth:!0,mdxType:"Caption"},(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Figure 1: Team Essential for AI – Enterprise Design Thinking."))),(0,n.kt)("p",null,"Team Essential for AI – Enterprise Design Thinking ",(0,n.kt)("a",{parentName:"p",href:"https://www.ibm.com/design/thinking/page/badges/ai"},"https://www.ibm.com/design/thinking/page/badges/ai")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-designing-chatbots-topic-breadth-mdx-aac63bac2e5e21c5fdd6.js.map