(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{172:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(189),r=n(174);var l=r.a.div.withConfig({displayName:"menu__IconContainer",componentId:"ffd45g-0"})(["width:1.75rem;height:100%;position:relative;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.5s ease-in-out;-moz-transition:.5s ease-in-out;-o-transition:.5s ease-in-out;transition:.5s ease-in-out;cursor:pointer;padding-bottom:1rem;& span{display:block;position:absolute;height:3px;width:100%;background:#1ca086;border-radius:4px;opacity:1;left:0;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:.25s ease-in-out;-moz-transition:.25s ease-in-out;-o-transition:.25s ease-in-out;transition:.25s ease-in-out;}& span:nth-child(1){top:0px;}& span:nth-child(2),& span:nth-child(3){top:9px;}& span:nth-child(4){top:18px;}&.open span:nth-child(1){top:32px;width:0%;left:50%;}&.open span:nth-child(2){-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);}&.open span:nth-child(3){-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);}&.open span:nth-child(4){top:32px;width:0%;left:50%;}"]),c=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement(l,this.props,o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null))},a}(o.a.Component),s=n(184),m=n(181),d=n(188);var p="600px",u=r.a.div.withConfig({displayName:"navbar__NavContainer",componentId:"sc-1jnfoh1-0"})(["z-index:999;width:100%;position:fixed;top:0;pointer-events:none;"]),h=r.a.nav.withConfig({displayName:"navbar__Nav",componentId:"sc-1jnfoh1-1"})(["\t background:rgba(255,255,255,.95);margin:0 auto;pointer-events:auto;"]),g=r.a.div.withConfig({displayName:"navbar__LeftMenu",componentId:"sc-1jnfoh1-2"})(["grid-column:1;align-self:center;@media only screen and (max-width:","){display:grid;grid-column:1 / 4;max-height:0;overflow:hidden;transition:max-height 1s cubic-bezier(0,1,0,1);&.show{height:auto;max-height:200px;transition:max-height 0.4s ease-in-out;box-shadow:0 4px 4px -2px gray;}}"],p),f=Object(r.a)(function(e){return o.a.createElement(s.Link,e)}).withConfig({displayName:"navbar__LogoLink",componentId:"sc-1jnfoh1-3"})(["display:none;grid-column:2;margin:auto;"]),w=Object(r.a)(function(e){return o.a.createElement(s.Link,e)}).withConfig({displayName:"navbar__MenuLink",componentId:"sc-1jnfoh1-4"})(["margin-left:1rem;display:inline-block;padding:0.5rem 0;cursor:pointer;&.active{box-shadow:0 4px 2px -2px #1ca086;@media only screen and (max-width:","){box-shadow:-0.25rem 0px 0px;margin-left:0.25rem;padding-left:0.75rem;}}@media only screen and (max-width:","){padding-left:0;margin-left:1rem;margin-bottom:0;padding:0.3rem 0;}"],p,p),E=r.a.a.withConfig({displayName:"navbar__DownloadLink",componentId:"sc-1jnfoh1-5"})(["margin:0 1rem;display:flex;align-items:center;padding:0.5rem 0;float:right;@media only screen and (max-width:","){padding-left:0;margin-left:1rem;margin-bottom:0;padding:0.3rem 0;}"],p),y=r.a.div.withConfig({displayName:"navbar__Hamburger",componentId:"sc-1jnfoh1-6"})(["display:none;@media only screen and (max-width:","){display:inline;align-self:center;}"],p),v=r.a.span.withConfig({displayName:"navbar__LinkText",componentId:"sc-1jnfoh1-7"})(["font-size:28px;"]),b=r.a.div.withConfig({displayName:"navbar__IconContainer",componentId:"sc-1jnfoh1-8"})(["\t padding:1rem;"]),_=Object(r.a)(function(e){return o.a.createElement(s.Link,e)}).withConfig({displayName:"navbar__TopButtonContainer",componentId:"sc-1jnfoh1-9"})(["pointer-events:auto;position:absolute;top:calc(100vh - 5rem);display:flex;opacity:0;width:10rem;flex-direction:column;align-items:center;cursor:pointer;&.viewed{animation:2s ",";}&.show{opacity:1;animation:2s ",";}@media only screen and (max-width:1024px){width:6.25rem;}@media only screen and (max-width:768px){width:3.75rem;}@media only screen and (max-width:480px){width:2.5rem;}"],Object(r.b)(["",""],d.fadeOutDown),Object(r.b)(["",""],d.fadeInUp)),x=r.a.div.withConfig({displayName:"navbar__GreyOut",componentId:"sc-1jnfoh1-10"})(["\t background:rgba(128,128,128,0);pointer-events:none;height:100vh;transition:all 1s;&.show{background:rgba(128,128,128,0.7);display:block;}"]),k=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleClickOutside=function(e){n.state.toggle&&n.navbar&&!n.navbar.current.contains(e.target)&&n.setState(function(e){return{toggle:!1}})},n.handleResize=function(e){n.setState(function(e){return{jumpOffset:n.navbar.current.parentNode.offsetHeight}})},n.handleScroll=function(e){var t=n.state.jumpOffset,a=window.scrollY>=t-5;a!==n.state.visible&&(n.setState(function(e){return{visible:a}}),n.state.viewedIntro||!0!==a||n.setState(function(e){return{viewedIntro:!0}}))},n.toggleMenu=function(e){"open"!==n.menu.current.props.className&&!0!==e||n.setState(function(e){return{toggle:!e.toggle}})},n.state={toggle:!1,jumpOffset:0,visible:!1,viewedIntro:!1},n.menu=o.a.createRef(),n.navbar=o.a.createRef(),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.componentDidMount=function(){var e=this;s.scrollSpy.update(),document.addEventListener("mousedown",this.handleClickOutside),window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll),this.setState(function(t){return{jumpOffset:e.navbar.current.parentNode.offsetHeight}})},i.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleClickOutside),window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)},i.render=function(){var e=this,t="";return this.state.visible&&(t+=" show"),this.state.viewedIntro&&(t+=" viewed"),o.a.createElement(u,null,o.a.createElement(h,{ref:this.navbar},o.a.createElement(o.a.Fragment,null,o.a.createElement(y,null,o.a.createElement(b,null,o.a.createElement(c,{className:this.state.toggle?"open":"",ref:this.menu,onClick:function(t){return e.toggleMenu(!0,t)}})))),o.a.createElement(g,{className:this.state.toggle?"show":""},o.a.createElement(w,{activeClass:"active",to:"about-section",onClick:this.toggleMenu,spy:!0,smooth:!0,duration:250},"About"),o.a.createElement(w,{activeClass:"active",to:"skills-section",onClick:this.toggleMenu,spy:!0,smooth:!0,duration:250},"Skills"),o.a.createElement(w,{activeClass:"active",to:"experience-section",onClick:this.toggleMenu,spy:!0,smooth:!0,duration:250},"Experience"),o.a.createElement(w,{activeClass:"active",to:"education-section",onClick:this.toggleMenu,spy:!0,smooth:!0,duration:250},"Education"),o.a.createElement(E,{target:"_self",href:"https://drive.google.com/open?id=0B-T6BmcG7oDeX25WcDhnaEY2eHFCUnlSSktDM29RX3prY3pv"},"Resume ",o.a.createElement(m.c,null))),o.a.createElement(f,{to:"/"},o.a.createElement(v,null,"MICHAEL"))),o.a.createElement(_,{className:t,to:"intro-section",smooth:!0},o.a.createElement(m.a,{style:{fontSize:"2rem"}}),o.a.createElement("span",null,o.a.createElement("strong",null,"Top"))),o.a.createElement(x,{className:this.state.toggle?"show":""}))},a}(o.a.Component),C=r.a.div.withConfig({displayName:"socialIcons__IconContainer",componentId:"sc-13hco4m-0"})(["padding:0.5rem;display:inline-block;"]),I=r.a.a.withConfig({displayName:"socialIcons__IconLink",componentId:"sc-13hco4m-1"})(["font-size:2.5rem;padding:0 0.5rem;& svg{transition:all 0.4s;}&:hover svg{transform:scale(0.8);}"]),N=function(){return o.a.createElement(C,null,o.a.createElement(I,{target:"_blank",href:"https://www.linkedin.com/in/michael-liu-78200213a/"},o.a.createElement(m.f,null)),o.a.createElement(I,{target:"_blank",href:"mailto:liu.michael.11@gmail.com"},o.a.createElement(m.d,null)),o.a.createElement(I,{target:"_blank",href:"https://github.com/mykou"},o.a.createElement(m.e,null)))};d.bounce["40%"].transform="translate3d(0, -0.25rem, 0)",d.bounce["43%"].transform="translate3d(0, -0.25rem, 0)",d.bounce["70%"].transform="translate3d(0, -0.65rem, 0)";var j=Object(r.a)(function(e){return o.a.createElement(s.Link,e)}).withConfig({displayName:"footer__FooterWrapper",componentId:"sc-1o233c3-0"})(["width:100%;text-align:center;position:absolute;bottom:0;cursor:pointer;font-size:1.5rem;"]),S=r.a.div.withConfig({displayName:"footer__ArrowContainer",componentId:"sc-1o233c3-1"})(["margin:0 auto;position:relative;bottom:0;animation:2.5s "," infinite;"],Object(r.b)(["",""],d.bounce)),z=function(e){return o.a.createElement(j,{to:e.to,smooth:!0,duration:500},o.a.createElement(S,null,o.a.createElement(m.b,null)))};var L=r.a.div.withConfig({displayName:"introduction__IntroductionContainer",componentId:"sc-2doqe0-0"})(["min-height:100vh;display:flex;flex-flow:column;height:100%;position:relative;"]),O=r.a.main.withConfig({displayName:"introduction__Main",componentId:"sc-2doqe0-1"})(["flex-grow:1;display:flex;align-items:center;justify-content:center;padding-top:2.5rem;"]),M=r.a.div.withConfig({displayName:"introduction__IntroWrapper",componentId:"sc-2doqe0-2"})(["text-align:center;margin-bottom:2rem;"]),q=r.a.img.withConfig({displayName:"introduction__Picture",componentId:"sc-2doqe0-3"})(["height:40vw;border-radius:50%;max-height:200px;margin:1rem 0;"]),A=r.a.h1.withConfig({displayName:"introduction__Greeting",componentId:"sc-2doqe0-4"})(["font-weight:500;margin:0;"]),T=r.a.div.withConfig({displayName:"introduction__TagContainer",componentId:"sc-2doqe0-5"})(["display:flex;align-items:center;justify-content:center;padding:.5rem 0;flex-wrap:wrap;"]),D=r.a.div.withConfig({displayName:"introduction__TagWrapper",componentId:"sc-2doqe0-6"})(["margin:0.5rem 0.5rem 0 0.5rem;background:#9cdfd2;"]),U=r.a.span.withConfig({displayName:"introduction__Tag",componentId:"sc-2doqe0-7"})(["padding:.065rem .375rem .125rem;"]);function R(){return o.a.createElement(T,null,o.a.createElement(D,null,o.a.createElement(U,null,"Full Stack Developer")),o.a.createElement(D,null,o.a.createElement(U,null,"Creator")),o.a.createElement(D,null,o.a.createElement(U,null,"Enthusiast")))}var H=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement(L,{id:"intro-section"},o.a.createElement(k,null),o.a.createElement(O,null,o.a.createElement(M,null,o.a.createElement(q,{src:"/blank-profile.png",alt:"Picture of me"}),o.a.createElement(A,null,"Hello, I'm Michael!"),o.a.createElement(R,null),o.a.createElement(N,null))),o.a.createElement(z,{to:"about-section"}))},a}(o.a.Component);n(82),n(12);var W=r.a.div.withConfig({displayName:"about__AboutContainer",componentId:"gjrupi-0"})(["min-height:100vh;display:flex;flex-flow:column;align-items:center;justify-content:center;"]),F=r.a.div.withConfig({displayName:"about__Content",componentId:"gjrupi-1"})(["\t\t height:100%;"]);function P(e){return o.a.createElement("span",{role:"img","aria-label":e.label},e.content)}var G=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).getYearsExperience=function(){var e=new Date(2017,3,4).getTime(),t=((new Date).getTime()-e)/315576e5,n=Math.floor(t),a=t-n,o=n<5?"approximately ":"";return o+=n<5&&a>.25&&a<.75?n.toString()+"½":n>=5&&a<.8?n.toString():Math.round(t)},t}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement(W,{id:"about-section",className:"section"},o.a.createElement(F,{className:"content"},o.a.createElement("h2",null,"About"),o.a.createElement("p",null,"I'm a full-stack developer with ",this.getYearsExperience()," years industry experience in software development."),o.a.createElement("p",null,"I enjoy designing responsive, user-friendly websites like this one I made for my portfolio. This site was built using React without any front-end framework. Styling was done using Styled Components and Typography.js for fonts."),o.a.createElement("p",null,"When I'm not working/coding you'll find playing sports or working out. I enjoy basketball ",o.a.createElement(P,{label:"basketball",content:"🏀"}),", volleyball ",o.a.createElement(P,{label:"volleyball",content:"🏐"}),", tennis ",o.a.createElement(P,{label:"volleyabll",content:"🎾"}),", and lifting ",o.a.createElement(P,{label:"weightlifting",content:"🏋"}),".")),o.a.createElement(z,{to:"skills-section"}))},a}(o.a.Component),B=r.a.div.withConfig({displayName:"skills__SkillsContainer",componentId:"ew7lwe-0"})(["min-height:100vh;display:flex;flex-flow:column;align-items:center;justify-content:center;"]),J=r.a.div.withConfig({displayName:"skills__Content",componentId:"ew7lwe-1"})(["\t\t height:100%;"]),Y=r.a.ul.withConfig({displayName:"skills__TagList",componentId:"ew7lwe-2"})(["list-style:none;margin-left:0;& > li{margin-right:0.25rem;margin-bottom:0;padding:0.05rem 0.5rem;display:inline-block;overflow:hidden;background-color:#d8d8d8;font-weight:300;text-transform:uppercase;:hover{background-color:#1ca086;color:white;}}"]),X=function(){return o.a.createElement(B,{id:"skills-section",className:"section"},o.a.createElement(J,{className:"content"},o.a.createElement("h2",null,"Skills"),o.a.createElement("h3",null,"Programming Languages"),o.a.createElement(Y,null,o.a.createElement("li",null,"Caché ObjectScript"),o.a.createElement("li",null,"C"),o.a.createElement("li",null,"C++"),o.a.createElement("li",null,"Java"),o.a.createElement("li",null,"SQL"),o.a.createElement("li",null,"Javascript"),o.a.createElement("li",null,"HTML"),o.a.createElement("li",null,"CSS"),o.a.createElement("li",null,"JSON"),o.a.createElement("li",null,"XML"),o.a.createElement("li",null,"Python")),o.a.createElement("h3",null,"Technologies"),o.a.createElement(Y,null,o.a.createElement("li",null,"Intersystems Ensemble"),o.a.createElement("li",null,"React"),o.a.createElement("li",null,"GatsbyJS"),o.a.createElement("li",null,"Bootstrap"),o.a.createElement("li",null,"Django"),o.a.createElement("li",null,"Microsoft Windows"),o.a.createElement("li",null,"Microsoft Office"))),o.a.createElement(z,{to:"experience-section"}))},Q="992px",K=r.a.div.withConfig({displayName:"event__EventWrapper",componentId:"fkzqkj-0"})(["box-shadow:0px 0px 5px black;margin-bottom:1.5rem;background:white;&.dark{background:#f8fefd;}"]),V=r.a.div.withConfig({displayName:"event__EventHeader",componentId:"fkzqkj-1"})(["\t border-bottom-style:solid;border-width:1px;border-color:#bbbbbb;display:grid;grid-template-columns:auto auto 1fr;"]),Z=r.a.a.withConfig({displayName:"event__LogoLink",componentId:"fkzqkj-2"})(["\t grid-column:1;@media only screen and (max-width:","){grid-column:1 / 4;}"],Q),$=r.a.img.withConfig({displayName:"event__EventLogo",componentId:"fkzqkj-3"})(["display:block;width:3rem;margin:0.75rem 1rem;@media only screen and (max-width:","){margin:0.25rem auto;}"],Q),ee=r.a.a.withConfig({displayName:"event__EventTitle",componentId:"fkzqkj-4"})(["grid-column:2;margin:auto 0;font-size:1.125rem;text-transform:uppercase;@media only screen and (max-width:","){grid-column:1 / 4;text-align:center;margin:0 0.5rem;}"],Q),te=r.a.span.withConfig({displayName:"event__Subtitle",componentId:"fkzqkj-5"})(["grid-column:3;text-align:right;margin:auto 1rem;@media only screen and (max-width:","){grid-column:1 / 4;text-align:center;margin:0 0.5rem;}"],Q),ne=r.a.div.withConfig({displayName:"event__EventDescription",componentId:"fkzqkj-6"})(["margin:1rem;font-size:0.8rem;&.contentless{margin:0;}"]),ae=r.a.div.withConfig({displayName:"event__EventFooter",componentId:"fkzqkj-7"})(["background:#f6f6f6;"]),oe=r.a.span.withConfig({displayName:"event__FooterText",componentId:"fkzqkj-8"})(["display:inline-block;margin:0.5rem 1rem;font-size:0.75rem;"]),ie=function(e){return o.a.createElement(K,{className:e.colorScheme},o.a.createElement(V,null,o.a.createElement(Z,{href:e.website},o.a.createElement($,{src:e.logoUrl,alt:"Event logo"})),o.a.createElement(ee,{target:"_blank",href:e.website},e.title),o.a.createElement(te,null,e.subtitle)),o.a.createElement(ne,{className:e.children?"":"contentless"},e.children),o.a.createElement(ae,null,o.a.createElement(oe,null,e.footer)))},re=r.a.div.withConfig({displayName:"experience__ExpContainer",componentId:"sc-15mlpzb-0"})(["min-height:100vh;display:flex;flex-flow:column;align-items:center;justify-content:center;"]),le=r.a.div.withConfig({displayName:"experience__Content",componentId:"sc-15mlpzb-1"})(["height:100%;"]),ce=r.a.div.withConfig({displayName:"experience__EventContainer",componentId:"sc-15mlpzb-2"})(["width:100%;margin-top:1.5rem;"]),se=r.a.span.withConfig({displayName:"experience__DescriptionHeading",componentId:"sc-15mlpzb-3"})(["letter-spacing:0.75px;text-transform:uppercase;"]),me=r.a.ul.withConfig({displayName:"experience__UnorderedList",componentId:"sc-15mlpzb-4"})(["margin-top:0.5rem;margin-bottom:1rem;list-style:circle;"]),de=r.a.li.withConfig({displayName:"experience__Item",componentId:"sc-15mlpzb-5"})(["margin-bottom:calc(0.5rem / 2);"]);function pe(e){return o.a.createElement(de,null,o.a.createElement("span",null,e.children))}var ue=function(){return o.a.createElement(re,{id:"experience-section",className:"section"},o.a.createElement(le,{className:"content"},o.a.createElement("h2",null,"Experience"),o.a.createElement(ce,null,o.a.createElement(ie,{logoUrl:"/iss.png",subtitle:"Application Programmer",title:"Integrated Software Solutions",website:"https://intsoftsol.com",footer:"Apr 2017 - Current | Sydney, AU",colorScheme:"dark"},o.a.createElement(se,null,"Role & Responsibilities"),o.a.createElement(me,null,o.a.createElement(pe,null,"Main engineer for all integration and interfacing projects/issues"),o.a.createElement(pe,null,"Develop new and improve functionality in our core applications"),o.a.createElement(pe,null,"Debugging through our application to patch defects within our product"),o.a.createElement(pe,null,"Working closely with our product specialists and QA teams to develop solutions suitable for new and existing users"),o.a.createElement(pe,null,"Communicating and working with clients to understand their issues, and to create a solution tailored to their needs"),o.a.createElement(pe,null,"Providing on-call support for clients")),o.a.createElement(se,null,"Achievements"),o.a.createElement(me,null,o.a.createElement(pe,null,"Designed and created the company’s on-call roster management system"),o.a.createElement(pe,null,"Became the main interface/integration engineer from having no experience"),o.a.createElement(pe,null,"Ensured smooth go-lives by resolving critical issues"))),o.a.createElement(ie,{logoUrl:"/cwh.png",subtitle:"Pharmacy Assistant",title:"Chemist Warehouse",website:"https://www.chemistwarehouse.com.au/",footer:"Jun 2011 - Apr 2017 | Sydney, AU",colorScheme:"dark"},o.a.createElement(se,null,"Role & Responsibilities"),o.a.createElement(me,null,o.a.createElement(pe,null,"Floor manager supervising all floor staff"),o.a.createElement(pe,null,"Point of escalation to remedy issues raised by customers"),o.a.createElement(pe,null,"Responsible for reviewing each aisle to ensure they were in a satisfactory condition")),o.a.createElement(se,null,"Achievements"),o.a.createElement(me,null,o.a.createElement(pe,null,"Successfully balanced part-time work with high school and a full-time study load at university"))))),o.a.createElement(z,{to:"education-section"}))},he=r.a.div.withConfig({displayName:"education__EduContainer",componentId:"sc-1s5g4jh-0"})(["min-height:100vh;display:flex;flex-flow:column;align-items:center;justify-content:center;"]),ge=r.a.div.withConfig({displayName:"education__Content",componentId:"sc-1s5g4jh-1"})(["height:100%;"]),fe=r.a.div.withConfig({displayName:"education__EventContainer",componentId:"sc-1s5g4jh-2"})(["width:100%;margin-top:1.5rem;"]),we=r.a.span.withConfig({displayName:"education__DescriptionHeading",componentId:"sc-1s5g4jh-3"})(["letter-spacing:0.75px;text-transform:uppercase;"]),Ee=r.a.ul.withConfig({displayName:"education__UnorderedList",componentId:"sc-1s5g4jh-4"})(["margin-top:0.5rem;margin-bottom:1rem;list-style:circle;"]),ye=r.a.li.withConfig({displayName:"education__Item",componentId:"sc-1s5g4jh-5"})(["margin-bottom:calc(0.5rem / 2);"]);function ve(e){return o.a.createElement(ye,null,o.a.createElement("span",null,e.children))}var be=function(){return o.a.createElement(he,{id:"education-section",className:"section"},o.a.createElement(ge,{className:"content"},o.a.createElement("h2",null,"Education"),o.a.createElement(fe,null,o.a.createElement(ie,{logoUrl:"/unsw.png",subtitle:"Undergraduate Education",title:"University of New South Wales",website:"https://www.unsw.edu.au/",footer:"2014 - 2018 | Sydney, AU"},o.a.createElement("h4",null,"Bachelor of Engineering (Software Engineering)"),o.a.createElement("p",null,"Learnt about the processes, methods and tools for the design and development of high quality, reliable software systems. It involved the study and application of software specification, design, implementation, testing and documentation. The degree also included a series of workshops that helped us work inteams and gain hands-on experience."),o.a.createElement(we,null,"Awards & Achievements"),o.a.createElement(Ee,null,o.a.createElement(ve,null,"Honours Class 2 Division 1"),o.a.createElement(ve,null,"The Macquarie SENG2020 Group Prize 2015",o.a.createElement("br",null),o.a.createElement("i",null,"For the best presentation by a group in SENG2020 Software Engineering Workshop 2B")))),o.a.createElement(ie,{logoUrl:"/trinity.png",subtitle:"High School",title:"Trinity Grammar School",website:"https://www.trinity.nsw.edu.au/",footer:"2008 - 2013 | Sydney, AU"}))))};var _e=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("meta",{"http-equiv":"cache-control",content:"public, max-age=0, must-revalidate"}),o.a.createElement("title",null,"Michael Liu")),o.a.createElement(H,null),o.a.createElement(G,null),o.a.createElement(X,null),o.a.createElement(ue,null),o.a.createElement(be,null))},a}(o.a.Component),xe=r.a.div.withConfig({displayName:"layout__Layout",componentId:"ap8slu-0"})(["& .content{width:calc(100% - 20rem);@media only screen and (max-width:1024px){width:calc(100% - 12.5rem);}@media only screen and (max-width:768px){width:calc(100% - 7.5rem);}@media only screen and (max-width:480px){width:calc(100% - 5rem);}}& p{margin-bottom:1rem;}& .section{padding-top:3rem;:not(:last-child){padding-bottom:2rem;position:relative;}}& > div:nth-child(odd){}& > div:nth-child(even){background:#f8fefd;}& a{text-decoration:none;background-image:none;transition:all 0.7s;text-shadow:none;}& a:hover{color:#198f78;text-shadow:-.25px 0,0 .25px,.25px 0,0 -.25px;}"]),ke=function(e){var t=e.children;return o.a.createElement(xe,null,t)};t.default=function(){return o.a.createElement(ke,null,o.a.createElement(_e,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-6f0eb8e68b62d59011ca.js.map