(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return m}),r.d(t,"pageQuery",function(){return u});var a=r(6),n=r.n(a),o=r(0),s=r(155),c=r(140),l=r(142),i=r(147),d=r(146),m=function(e){function t(){return e.apply(this,arguments)||this}n()(t,e);var r=t.prototype;return r.render=function(){return o.createElement(d.a,{allProjects:this.props.data.allProjects.edges.map(function(e){return e.node}),currentProject:this.props.data.project.edges[0].node,mainImage:this.props.data.mainImage.childImageSharp.fluid},o.createElement(c.i,null,o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"About the Company"),o.createElement("p",null,"The Liquor Control Board of Ontario (LCBO) is one of the world's largest purchaser of alcoholic beverages. It distributes and sells liquor throughout the province of Ontario in Canada. In 2016, an innovation lab, LCBO|next, was founded to design and develop new technologies that will enhance LCBO's technology initiatives."))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"My Roles"),o.createElement("p",null,"As a UX/UI designer at the lab, I met with stakeholders to discuss their problems and understand the user requirements and constraints. I designed a web portal that allows LCBO retail employees to place craft beer orders directly with brewers."))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"Background"),o.createElement("p",null,"Craft beer is usually produced by a small to medium size local breweries. This makes it impossible for the breweries to supply a sufficient amount of products to all LCBO warehouse at once. As a result, each LCBO retail store needs to contact local breweries directly to place orders and manage shipping logistics."))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"Problems"),o.createElement("p",{className:s.quote},"With many factors such as promotion and seasonal items, it is impossible for LCBO employees to order an accurate amount of craft beer by just relying on their experience and gut feeling. Without a reliable ordering system, the process will continue to be time-consuming and prone to error."),o.createElement("p",null,"A store manager and a beer ambassador are responsible for managing craft beer inventory and placing orders. Currently, the inventory is tracked with a spreadsheet and calculated by hand. To order the products, the employee needs to estimate the quantity before making phone calls to each craft brewer to place an order and arrange a delivery date. To modify, update or check orders, the staff has to make more phone calls during the week."),o.createElement("p",null,"This current process doesn't only cause a burden to LCBO staff, but also the craft brewers. Since there are about 660 LCBO stores across Ontario, each brewer can receive hundreds of phone calls during the week. In addition, the current process restricts order modification to be made only through phone calls. As a result, an unexpected quantity or products can show up on the delivery day if the brewer forgets to update with the store."))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"User Interview"),o.createElement("p",{className:s.quote},"I know the problems the users face. I also have a picture of the system that I want to design to solve the problems, but I can't just do that. Why?",o.createElement("br",null),"Because I'm not the user!",o.createElement("br",null),"It doesn't make sense to design a system that I love to use, but the real users hate to use."),o.createElement("p",null,"Although I already understand the problems that LCBO staff and craft brewers are facing, it's still crucial for me to sit and chat with the users to ask questions and discover what kind of system that they are looking for."),o.createElement("p",null,"From interview sessions with LCBO employees and craft brewers, I learn that"),o.createElement("ul",null,o.createElement("li",null,"LCBO employees look for a system that would tell the exact number of products needed to be ordered."),o.createElement("li",null,"LCBO employees would like to know an estimated delivery date from the craft brewers."),o.createElement("li",null,"After receiving orders from each LCBO store, craft brewers have to record order details to their system manually because LCBO doesn't provide any platform for them to track the order history."),o.createElement("li",null,"Craft brewers need an ability to modify orders as sometimes they can't keep up with production or they realize that the store orders too many or too less."),o.createElement("li",null,"Both parties want to be able to make requests or updates through the system.")))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"Work Breakdown Structure"),o.createElement("p",null,"I use the Work Breakdown Structure to make sure that all required components are included in the design. The system is mainly divided into two parts: a portal for LCBO store and a portal for craft brewers."))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"8"},o.createElement(i.a,{src:this.getImageUrl("wbs.png"),alt:"Work Breakdown Structure of Craft Beer Ordering System",className:"img-fluid"}))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"Wireframes"),o.createElement("p",null,"Based on my research on modern e-commerce systems, there are 3 keys elements that exist in most of the systems:"),o.createElement("ol",null,o.createElement("li",null,"Order summary/history section "),o.createElement("li",null,"Order details section"),o.createElement("li",null,"New order section")))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement(i.a,{src:this.getImageUrl("wireframes.png"),alt:"Wireframes of Craft Beer Ordering System",className:"img-fluid"}))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"Create Order "),o.createElement("p",{className:s.quote},"The main objective of this project is to build a system that helps determine the quantity of craft beer products LCBO employees should and allows them to place orders online."),o.createElement("p",null,'To place an order, the employees need to navigate to "New Order" on the menu bar. From there, they can search for craft beer vendors and see the list of products that each vendor carries. Once a vendor is selected, the employee will see product information as well as any promotion associated with the product (PROMO), Suggested Order Quantity (SOQ) and current store inventory (TSI). The unit number will be auto-filled based on the SOQ, but the users will be able to adjust the number as needed.'),o.createElement("p",null,'In a case that the employees decide not to order any product from a vendor to their store, they can check the "No Order Reminder" box, which will trigger the system to send an automatic email to notify the vendor.'))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement(i.a,{src:this.getImageUrl("lcbo.png"),alt:"Order Summary Page on LCBO Employee Web Portal",className:"img-fluid"}))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"Review & Confirm Order "),o.createElement("p",{className:s.quote},"From perspectives of craft brewers, the system should allow them to review the order submitted by the store and make any necessary adjustment before shipping the products to LCBO stores."),"Once the store employees submit the order, it will show up on the craft brewer's portal. From there, craft brewers can review products, their quantity, and store comments. They can modify the quantity of product in the order and provide comments to the store as appropriate. Before they can confirm the order, they have to select at least one possible delivery date. This piece of information will help the store to arrange a delivery schedule.",o.createElement("p",null))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement(i.a,{src:this.getImageUrl("craft.png"),alt:"Order Summary Page on LCBO Employee Web Portal",className:"img-fluid"}))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"10"},o.createElement("h3",null,"Order Details "),o.createElement("p",null,'From the order summary page, LCBO employees can take a quick glance on order status, which informs the number of products that have either been confirmed, modified, or delivered. On the order details page, the quantity of product in the original order is printed in black in the "Units" column. In a circumstance where the craft brewers decide to make an adjustment to the product quantity, the original quantity will get strikethrough, and the modified amount will be printed in red, put in a bracket and placed beside the original quantity There is also a button for the store employees to confirm delivery once they receive the products.'))),o.createElement(c.v,{className:"justify-content-center"},o.createElement(c.g,{lg:"5"},o.createElement(i.a,{src:this.getImageUrl("summary-lcbo.png"),alt:"Order Summary Page on LCBO Employee Web Portal",className:"img-fluid"})),o.createElement(c.g,{lg:"5"},o.createElement(i.a,{src:this.getImageUrl("detail-lcbo.png"),alt:"Order Summary Page on Craft Brewer Web Portal",className:"img-fluid"})))))},r.getImageUrl=function(e){return Object(l.withPrefix)("/images/"+this.props.data.project.edges[0].node.imageFolder+"/"+e)},t}(o.Component),u="3473976791"},143:function(e,t,r){e.exports={projectPage:"project-layout-module--project-page--1BrGb",btn:"project-layout-module--btn--1vOoT"}},144:function(e,t,r){e.exports={header:"project-header-module--header--3RLsB",subtitle:"project-header-module--subtitle--3Upkm",companyTerm:"project-header-module--company-term--1vFwQ"}},145:function(e,t,r){e.exports={smallDash:"protected-section-module--small-dash--1iPs7"}},146:function(e,t,r){"use strict";r(141);var a=r(6),n=r.n(a),o=r(0),s=r(143),c=r(149),l=r.n(c),i=r(150),d=r(140),m=(r(151),r(142)),u=function(e){function t(){return e.apply(this,arguments)||this}n()(t,e);var r=t.prototype;return r.render=function(){return o.createElement(d.v,null,o.createElement(d.g,{xs:"6"},this.getPreviousProjectLink()),o.createElement(d.g,{xs:"6",className:"text-right"},this.getNextProjectLink()))},r.getPreviousProjectLink=function(){var e=this,t=this.props.projects,r=t.findIndex(function(t){return t.name==e.props.currentProject.name});if(0===r)return null;var a=t[r-1];return o.createElement(m.Link,{to:a.url},o.createElement("i",{className:"fas fa-chevron-left"})," ",a.name)},r.getNextProjectLink=function(){var e=this,t=this.props.projects,r=t.findIndex(function(t){return t.name==e.props.currentProject.name});if(r===t.length-1)return null;var a=t[r+1];return o.createElement(m.Link,{to:a.url},a.name," ",o.createElement("i",{className:"fas fa-chevron-right"}))},t}(o.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return o.createElement(d.i,null,o.createElement(u,{projects:this.props.allProjects,currentProject:this.props.currentProject}))},t}(o.Component),p=r(144),f=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return o.createElement(d.i,{className:p.header},o.createElement(u,{projects:this.props.allProjects,currentProject:this.props.currentProject}),o.createElement(d.v,{className:"justify-content-center"},o.createElement(d.g,{lg:"10"},o.createElement("h1",null,this.props.currentProject.name),o.createElement("h4",{className:p.companyTerm},this.props.currentProject.company,", ",this.props.currentProject.term),o.createElement("h2",{className:p.subtitle},"— ",this.props.currentProject.description))))},t}(o.Component),g=r(46),b=r.n(g),y=r(152),E=r(145),w=r(154),v=r(153),j=r.n(v),P=["5b42389ef84139ae8643af2a1b369089a3e7298c47e590d18a201b87ebee51e8","83ac1f81c821f49dcd69ad10cce8b57c86ce0902e15776aadc2edbe26925bd33","e13aca4535aeb2e3e048bface0b25fac23d65e43b6f0c46c66cf38ba3bccdd0d","bca53ada79cb1febc267110d0d890bf862ddf31698e44835aa062b5db7e2404d","8d607a0cf2052c03e793bdbef576b17df8c7a99626d8c915f843143c033e4ed7","e24423c37fc0312c31af79fbdf5260e50f2e96c13c3c2a1dd218d12001fe39d1","b04da4304f0ff90bd7038990de132474654ebcb2ca119264da9327b02f162005","c0dcbf063af60b2e84613079d09be076979a91b8e03a237cc3c67753b7701eba","3841e6d4e4cbdaf8adffeeacc43911e00edad08bea26f62ecd77b25130173dd0","598427034543b344eacf5b60ac94d5a9c44f3dc6786ef7b1893e2dc8842dbccf","767c5ba5803c073d17815a2bdda729a8f0ba3c9d3c28f66f1f593c3349e10d31","a97d087a019c760196f813f851f6d8bafe3d1f9fcfa69229a04bde71ce339148","dc8e5ea02040747f4cf5d10ea7dc5c4b32aa44b71e7adea498421b69772f6bd4","3ad003a7823a1b94b7f0fc3d1c766473064adf77fcca0f6ac8ec3fd03f6585c4","7b8a9aba12189b67d5acfbc4bc3e30368b00cec3889d2e0ab8efe885a911dfae","7d8de942f2483e3fd3c0a412d166b50a882eeeb2f291a9099d2096778596f420","c9000d331c968e21288a961065842598ba5f476366b777049eab1f8780d9aa15","9f075e1469df2af1bd79447c7de3eda5d121f0644456afdefd156fa98e93d3e5","acb7b3b2eec3e44cdbc9fd3031d11affb356af1360d5049b69d406c203ae0059"],k=function(e){function t(t){var r;return(r=e.call(this,t)||this).handleFormSubmit=r.handleFormSubmit.bind(b()(b()(r))),r.handlePasswordChange=r.handlePasswordChange.bind(b()(b()(r))),r.cookies=new w.a,r.state={shouldShowContent:r.checkCookie(),isInvalidPassword:!1,password:""},r}n()(t,e);var r=t.prototype;return r.handlePasswordChange=function(e){this.setState({password:e.target.value})},r.handleFormSubmit=function(e){var t=this.checkPassword(this.state.password);this.setState({shouldShowContent:t,isInvalidPassword:!t}),e.preventDefault()},r.checkPassword=function(e){var t=y("sha256").update(e).digest("hex");return!!this.checkPasswordHash(t)&&(this.cookies.set("ProjectHash",t,{maxAge:10800,path:"/"}),!0)},r.checkCookie=function(){var e=this.cookies.get("ProjectHash");return this.checkPasswordHash(e)},r.checkPasswordHash=function(e){return!!e&&(window.ga&&window.ga("send","event",{eventCategory:"ProjectHash",eventAction:"check",eventLabel:e}),-1!==P.indexOf(e))},r.renderPasswordSection=function(){return o.createElement(d.i,{className:"mt-5 mb-5"},o.createElement(d.v,null,o.createElement(d.g,{className:"text-center"},o.createElement("h3",null,"Password Protected"),o.createElement("p",null,"This project is protected under a NDA. Please enter a password to access the project."))),o.createElement(d.v,{className:"justify-content-center"},o.createElement(d.g,null,o.createElement(d.j,{onSubmit:this.handleFormSubmit,autoComplete:"off",inline:!0,className:"justify-content-center"},o.createElement(d.m,{for:"password",hidden:!0},"Password"),o.createElement(d.l,{type:"password",name:"password",id:"password",placeholder:"Enter a password...",value:this.state.password,onChange:this.handlePasswordChange,autoComplete:"off",invalid:this.state.isInvalidPassword})," ",o.createElement(d.a,{type:"submit",color:"",className:"ml-2"},"Submit"),o.createElement(d.k,{className:"text-center"},"Incorrect password. Please try again.")))))},r.render=function(){return this.props.isProtected&&!this.state.shouldShowContent?this.renderPasswordSection():o.createElement(o.Fragment,null,o.createElement(d.i,null,o.createElement(d.v,{className:"justify-content-center"},o.createElement(d.g,{lg:"10"},o.createElement(j.a,{alt:"main project image",fluid:this.props.mainImage,className:"background-theme-color"}))),o.createElement(d.v,{className:"justify-content-center mt-3"},o.createElement(d.g,{lg:"10"},o.createElement("hr",{className:E.smallDash})))),this.props.children)},t}(o.Component);r.d(t,"a",function(){return C});var C=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return o.createElement(i.a,null,o.createElement(l.a,null,o.createElement("title",null,this.props.currentProject.name),o.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700",rel:"stylesheet"})),o.createElement("div",{className:s.projectPage},o.createElement(f,{allProjects:this.props.allProjects,currentProject:this.props.currentProject}),o.createElement(k,{mainImage:this.props.mainImage,isProtected:this.props.currentProject.isProtected},this.props.children),o.createElement(h,{allProjects:this.props.allProjects,currentProject:this.props.currentProject})))},t}(o.Component)},147:function(e,t,r){"use strict";r.d(t,"a",function(){return d});var a=r(6),n=r.n(a),o=r(46),s=r.n(o),c=r(0),l=r(140),i=r(148),d=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={isModalOpen:!1},r.toggleModal=r.toggleModal.bind(s()(s()(r))),r}n()(t,e);var r=t.prototype;return r.toggleModal=function(){this.setState({isModalOpen:!this.state.isModalOpen})},r.render=function(){return c.createElement(c.Fragment,null,c.createElement("img",{src:this.props.src,alt:this.props.alt,className:i.imageBox+" "+this.props.className,onClick:this.toggleModal}),c.createElement(l.n,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,centered:!0,fade:!1,className:i.modal},c.createElement(l.q,{toggle:this.toggleModal,charCode:"X"},this.props.alt),c.createElement(l.o,{className:"text-center"},c.createElement("img",{src:this.props.src,alt:this.props.alt,className:this.props.className})),c.createElement(l.p,null,c.createElement(l.a,{color:"primary",onClick:this.toggleModal},"Close"))))},t}(c.Component)},148:function(e,t,r){e.exports={imageBox:"image-box-module--image-box--1b_2B",modal:"image-box-module--modal--6kXAf"}},155:function(e,t,r){e.exports={imageTitle:"styles-module--image-title--16noi",quote:"styles-module--quote--2RFU9"}}}]);
//# sourceMappingURL=component---src-pages-projects-craft-beer-tsx-488e9be46b24f9036bc4.js.map