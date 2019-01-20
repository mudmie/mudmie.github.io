(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),o=n(0),i=n(153),l=n(163),c=n(141),s=n(182),u=n(166),m=n(149),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.createElement(c.i,{fluid:!0},o.createElement("a",{id:this.props.id,className:u.sectionAnchor}),o.createElement(c.v,{className:s.rowAbout},o.createElement(c.i,null,o.createElement(c.v,null,o.createElement(c.g,{md:"8",sm:"10",className:s.colAbout},o.createElement("h1",{className:s.aboutHeading},"Mudmie Chuthamsatid"),o.createElement("h2",{className:s.aboutHeading},"design intern @ PlanGrid —"),o.createElement("h2",{className:s.aboutHeading},"engineering student @ UWaterloo"),o.createElement("div",{className:s.socialMedia},o.createElement(m.OutboundLink,{className:s.linkedIn,href:"https://www.linkedin.com/in/mudmie",target:"_blank"},o.createElement("i",{className:"fab fa-linkedin fa-lg"}))," ",o.createElement(m.OutboundLink,{className:s.instagram,href:"https://www.instagram.com/mudmiemee",target:"_blank"},o.createElement("i",{className:"fab fa-instagram fa-lg"})))),o.createElement(c.g,{lg:{size:6,offset:2},md:"8",sm:"10"},o.createElement("p",null,"I believe that a good design communicates clearly and solves problems well. My mission as a product designer is not to just design beautiful stuff, but to design an entire product experience that sparks people’s joy and simplifies people’s lives."),o.createElement("p",null,"In my free time, I like to travel, find food spots, and wander around city. and hunt for inspiration; a cup of matcha and some sushi will make me smile."))))))},t}(o.Component),p=(n(155),n(144)),g=n(183),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.createElement(c.i,null,o.createElement("a",{id:this.props.id,className:u.sectionAnchor}),o.createElement(c.v,null,o.createElement(c.g,null,o.createElement("h2",{className:g.sectionHeading},"Projects"))),o.createElement(c.v,null,this.props.projects.map(function(e){return o.createElement(c.g,{lg:"4",sm:"12",className:g.projectCell,key:e.name},o.createElement(c.b,{className:g.projectCard},o.createElement(c.c,{className:g.cardHeader},o.createElement(c.f,{className:g.cardTitle},e.isProtected?o.createElement("span",null,o.createElement("i",{className:"fas fa-lock fa-xs"})," "):null,o.createElement(p.Link,{to:e.url},e.name)," "),o.createElement(c.e,{className:g.cardSubtitle},e.company,o.createElement("br",null),e.term)),o.createElement(p.Link,{to:e.url},o.createElement(c.d,{src:Object(p.withPrefix)("/images/"+e.imageFolder+"/thumbnail.png"),alt:"project "+e.name+" image",className:g.cardImage}))))})))},t}(o.Component);n.d(t,"default",function(){return h}),n.d(t,"pageQuery",function(){return b});var h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.createElement(l.a,null,o.createElement(i.Helmet,{titleTemplate:""},o.createElement("title",null,"Mudmie Chuthamsatid - A designer with engineering thoughts")),o.createElement(d,{id:"about"}),o.createElement(f,{id:"projects",projects:this.props.data.allProjectsJson.edges.map(function(e){return e.node})}))},t}(o.Component),b="288053805"},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(145),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(152),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(29);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,n){var a;e.exports=(a=n(158))&&a.default||a},156:function(e,t,n){e.exports={footer:"footer-module--footer--R2bpz"}},158:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(50),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},159:function(e,t,n){e.exports={navbar:"header-module--navbar--222N5",scroll:"header-module--scroll--fdVYk",navLink:"header-module--nav-link--34c7C",logo:"header-module--logo--dkMqu"}},160:function(e,t){e.exports="data:image/png;base64,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"},161:function(e,t,n){e.exports={topBorder:"page-border-module--top-border--9VZyZ",rightBorder:"page-border-module--right-border--3zdtj",bottomBorder:"page-border-module--bottom-border--z7HPI",leftBorder:"page-border-module--left-border--23Wgj"}},162:function(e,t,n){},163:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n(153),l=n.n(i),c=n(141),s=n(156),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.createElement("footer",null,o.createElement(c.i,null,o.createElement(c.v,null,o.createElement(c.g,{className:"text-center "+s.footer},"- made with love & lots of matcha -",o.createElement("br",null),"Mudmie © ",(new Date).getFullYear()))))},t}(o.Component),m=n(46),d=n.n(m),p=n(144),g=n(149),f=n(159),h=n(160),b=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isOpen:!1,isTop:!0},n.toggle=n.toggle.bind(d()(d()(n))),n.collapseNav=n.collapseNav.bind(d()(d()(n))),n}r()(t,e);var n=t.prototype;return n.toggle=function(){this.setState({isOpen:!this.state.isOpen})},n.collapseNav=function(){this.setState({isOpen:!1})},n.componentDidMount=function(){var e=this;document.addEventListener("scroll",function(){var t=window.scrollY<10;t!==e.state.isTop&&e.setState({isTop:t})})},n.render=function(){var e=this;return o.createElement("header",null,o.createElement(c.t,{className:f.navbar+" "+(this.state.isTop?"":f.scroll),color:"light",light:!0,expand:"md",fixed:"top"},o.createElement(p.Link,{to:"/",className:"navbar-brand",onClick:function(){e.collapseNav()}},o.createElement("img",{src:h,alt:"Mudmie",className:f.logo})),o.createElement(c.u,{onClick:this.toggle}),o.createElement(c.h,{isOpen:this.state.isOpen,navbar:!0},o.createElement(c.r,{className:"ml-auto",navbar:!0},o.createElement(c.s,null,o.createElement(p.Link,{className:"nav-link "+f.navLink,to:"/#about",onClick:function(){e.collapseNav()}},"about")),o.createElement(c.s,null,o.createElement(p.Link,{className:"nav-link "+f.navLink,to:"/#projects",onClick:function(){e.collapseNav()}},"projects")),o.createElement(c.s,null,o.createElement(g.OutboundLink,{href:Object(p.withPrefix)("/cchutham.pdf"),className:"nav-link "+f.navLink,target:"_blank",onClick:function(){e.collapseNav()}},"résumé"))))))},t}(o.Component),v=n(161),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.createElement(o.Fragment,null,o.createElement("div",{className:v.topBorder}),o.createElement("div",{className:v.rightBorder}),o.createElement("div",{className:v.bottomBorder}),o.createElement("div",{className:v.leftBorder}))},t}(o.Component);n(162);n.d(t,"a",function(){return A});var A=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.createElement(o.Fragment,null,o.createElement(l.a,{titleTemplate:"%s - Projects - Mudmie Chuthamsatid - A designer with engineering thoughts"},o.createElement("html",{lang:"en"}),o.createElement("meta",{charSet:"utf-8"}),o.createElement("meta",{name:"description",content:""}),o.createElement("meta",{name:"keywords",content:""}),o.createElement("link",{href:"https://fonts.googleapis.com/css?family=Karla:400,700|Poppins:400,700|PT+Serif:400i",rel:"stylesheet"}),o.createElement("script",{src:"https://use.fontawesome.com/releases/v5.0.7/js/all.js",defer:!0}),o.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),o.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),o.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),o.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),o.createElement("meta",{name:"msapplication-TileColor",content:"#da532c"}),o.createElement("meta",{name:"theme-color",content:"#ffffff"})),o.createElement(E,null),o.createElement(b,null),o.createElement("main",null,this.props.children),o.createElement(u,null))},t}(o.Component)},166:function(e,t,n){e.exports={sectionAnchor:"sections-module--section-anchor--2kGqy"}},182:function(e,t,n){e.exports={rowAbout:"about-section-module--row-about--Szvis",colAbout:"about-section-module--col-about--1L3EO",aboutHeading:"about-section-module--about-heading--8iMPQ",aboutPara:"about-section-module--about-para--3HvTd",socialMedia:"about-section-module--social-media--3KKao",instagram:"about-section-module--instagram--3RIlI",linkedIn:"about-section-module--linked-in--3-u4F"}},183:function(e,t,n){e.exports={sectionHeading:"projects-section-module--section-heading--zTP4S",projectCell:"projects-section-module--project-cell--1pG8U",projectCard:"projects-section-module--project-card--1pCfH",cardHeader:"projects-section-module--card-header--1JUzG",cardTitle:"projects-section-module--card-title--1RXUo",cardSubtitle:"projects-section-module--card-subtitle--1GUyR"}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e5a0a4e35e2f911a30fe.js.map