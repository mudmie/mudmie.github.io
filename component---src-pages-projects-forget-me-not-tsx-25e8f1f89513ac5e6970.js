webpackJsonp([0xdb49404eb1a5],{141:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(10),i=n(1),c=n(4),s=n(12),p=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return i.createElement(s.ProjectLayout,{allProjects:this.props.data.allProjects.edges.map(function(e){return e.node}),currentProject:this.props.data.project.edges[0].node,mainImage:this.props.data.mainImage.childImageSharp.sizes},i.createElement(c.Container,null,i.createElement(c.Row,{className:"justify-content-center"},i.createElement(c.Col,{lg:"10"},i.createElement("h3",null,"Overview."),i.createElement("p",null,"Forget Me Not is the first mobile interface I've ever designed. With belief that ",i.createElement("i",null,"important tasks cannot be forgotten"),", I designed the app to be as simple as possible. Its features include:"),i.createElement("ul",null,i.createElement("li",null,"Quick sign up through Facebook or Email"),i.createElement("li",null,"Simply create new event or a to-do by entering event title, add a personal note, select due date and attach the location."),i.createElement("li",null,"A build-in calendar for reference or adding some note as a reminder.")),i.createElement("img",{src:this.getImageUrl("1.png"),alt:"Forget Me Not Interface Set 1",className:"img-fluid"}))),i.createElement(c.Row,{className:"justify-content-center"},i.createElement(c.Col,{lg:"10"},i.createElement("h3",null,"Getting a bit extra."),i.createElement("p",null,"There are plenty of planner apps in the market, so I decided to create something new. The users can choose to attach location when they create event, and the system will remind them to complete the task if they happen to be around that location. With embedded Google Map, users can search for locations that might associate with their events."),i.createElement("img",{src:this.getImageUrl("2.png"),alt:"Forget Me Not Interface Set 2",className:"img-fluid"})))))},t.prototype.getImageUrl=function(e){return l.withPrefix("/images/"+this.props.data.project.edges[0].node.imageFolder+"/"+e)},t}(i.Component);t.default=p,t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-projects-forget-me-not-tsx-25e8f1f89513ac5e6970.js.map