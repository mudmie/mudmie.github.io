webpackJsonp([44528898543266],{139:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=r(10),s=r(1),c=r(4),i=r(12),m=function(e){function t(){return a(this,t),n(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return s.createElement(i.ProjectLayout,{allProjects:this.props.data.allProjects.edges.map(function(e){return e.node}),currentProject:this.props.data.project.edges[0].node,mainImage:this.props.data.mainImage.childImageSharp.sizes},s.createElement(c.Container,null,s.createElement(c.Row,{className:"justify-content-center"},s.createElement(c.Col,{lg:"10"},s.createElement("h3",null,"Background."),s.createElement("p",null,"Craft beer is usually produced locally in small quantity by a small to medium-sized breweries, making it impossible for the breweries to supply sufficient quantity of products to LCBO warehouses all at once. As a result, each LCBO retail store needs to contact local breweries directly to place orders and manage shipping logistics."),s.createElement("p",null,"A store manager or beer ambassador is responsible for managing craft beer inventory and placing orders. Currently, the inventory is tracked with a spreadsheet and calculated by hand. Once the quantities are determined, the staff makes phone calls to each craft brewers to place order and arrange delivery date. To modify, update or check on orders, the staff has to make more phone calls during the week."))),s.createElement(c.Row,{className:"justify-content-center"},s.createElement(c.Col,{lg:"10"},s.createElement("h3",null,"Problems."),s.createElement("p",null,"LCBO employees usually rely on"," ",s.createElement("i",null," gut's feeling and experience ")," to decide what products and how many of them to order. There are other factors such as promotion and seasonal items that can affect their estimation. Without a proper guidance, it is almost",s.createElement("i",null," impossible to order accurate amount of products.")),s.createElement("p",null,"Making phone calls back and forth is also very time consuming, and it doesn't only cause burden to LCBO staff. There are about 660 LCBO across Ontario, so each brewer can receive",s.createElement("i",null," hundreds of phone calls")," on Monday and the following days."),s.createElement("p",null,"The current process restricts order modification to be made only through phone calls. As a result,",s.createElement("i",null," unexpected quantity or products ")," can show up on the delivery day if the brewer forgets to update with the store."))),s.createElement(c.Row,{className:"justify-content-center"},s.createElement(c.Col,{lg:"10"},s.createElement("h3",null,"User Interview."),s.createElement("p",null,"Although I, as a designer, already understand the problems that LCBO staff and craft brewers are facing, it's still valuable for me to sit and chat with the users to ask questions and discover what kind of system that they are looking for."),s.createElement("p",null,"From sessions, held to capture extra pieces of information from LCBO store employees and craft brewers, I learnt that",s.createElement("ul",null,s.createElement("li",null,"LCBO employees looked for a system that would tell them exact number of product quantity needed to be ordered."),s.createElement("li",null,"LCBO staff would like to know an estimated delivery date from the craft brewers."),s.createElement("li",null,"After receiving orders from each LCBO store, craft brewers had to record order details to their system manually because LCBO didn't provide any platform for them to track the order history."),s.createElement("li",null,"Craft brewers needs an ability to modify orders as sometimes they couldn't keep up with production or they realized that the store ordered too many or too less."),s.createElement("li",null,"Both parties wanted to be able to communicate requests or updates through the system."))))),s.createElement(c.Row,{className:"justify-content-center"},s.createElement(c.Col,{lg:"10"},s.createElement("h3",null,"Work Breakdown Structure."),s.createElement("p",null,"I use the Work Breakdown Structure to make sure that all required components are included in the design. The system is mainly divided into two parts: portal for LCBO store and portal for craft brewers."))),s.createElement(c.Row,{className:"justify-content-center"},s.createElement(c.Col,{lg:"8"},s.createElement("img",{src:l.withPrefix("/images/"+this.props.data.project.edges[0].node.imageFolder+"/wbs.png"),alt:"Work Breakdown Structure of Craft Beer Ordering System",className:"img-fluid"}))),s.createElement(c.Row,{className:"justify-content-center"},s.createElement(c.Col,{lg:"10"},s.createElement("h3",null,"First Glance."),s.createElement("p",null,"Based on my research on modern e-commerce systems, there are 3 keys elements that exist in most of the systems:",s.createElement("ol",null,s.createElement("li",null,"Order summary/history section "),s.createElement("li",null,"Order details section"),s.createElement("li",null,"New order section"))))),s.createElement(c.Row,{className:"justify-content-center"},s.createElement(c.Col,{lg:"10"},s.createElement("img",{src:this.getImageUrl("wireframes.png"),alt:"Wireframes of Craft Beer Ordering System",className:"img-fluid"}))),s.createElement(c.Row,{className:"justify-content-center"},s.createElement(c.Col,{lg:"10"},s.createElement("h3",null,"Final Design."),s.createElement("p",null,"Here we have the portal for LCBO employees and the portal for craft brewers."))),s.createElement(c.Row,{className:"justify-content-center mb-5"},s.createElement(c.Col,{lg:"10"},s.createElement("img",{src:this.getImageUrl("full.png"),alt:"Complete design of Craft Beer Ordering System",className:"img-fluid"})))))},t.prototype.getImageUrl=function(e){return l.withPrefix("/images/"+this.props.data.project.edges[0].node.imageFolder+"/"+e)},t}(s.Component);t.default=m,t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-projects-craft-beer-tsx-87472670073a3cd42971.js.map