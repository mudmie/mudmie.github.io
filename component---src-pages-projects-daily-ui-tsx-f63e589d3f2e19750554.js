(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"38Ty":function(e,t,a){e.exports={imageBox:"image-box-module--image-box--3n3h7",modal:"image-box-module--modal--a--Wc",imgCaption:"image-box-module--img-caption--1ecPQ"}},FmUI:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),l=a("xkgm"),r=a("38Ty");var s=function(e){var t,a;function s(t){var a;return(a=e.call(this,t)||this).state={isModalOpen:!1},a.toggleModal=a.toggleModal.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=s).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=s.prototype;return c.toggleModal=function(){this.setState({isModalOpen:!this.state.isModalOpen})},c.render=function(){return n.createElement(n.Fragment,null,n.createElement("figure",null,n.createElement("img",{src:this.props.src,alt:this.props.alt,className:r.imageBox+" "+this.props.className,onClick:this.toggleModal}),!1===this.props.showCaption?null:n.createElement("figcaption",{className:"text-center "+r.imgCaption},this.props.alt)),n.createElement(l.n,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,centered:!0,fade:!1,className:r.modal},n.createElement(l.q,{toggle:this.toggleModal,charCode:"X"},this.props.alt),n.createElement(l.o,{className:"text-center"},n.createElement("img",{src:this.props.src,alt:this.props.alt,className:this.props.className})),n.createElement(l.p,null,n.createElement(l.a,{color:"primary",onClick:this.toggleModal},"Close"))))},s}(n.Component)},fR7q:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o})),a.d(t,"pageQuery",(function(){return i}));a("f3/d"),a("dRSK");var n=a("q1tI"),l=a("xkgm"),r=a("Wbzz"),s=a("FmUI"),c=a("ux68");var o=function(e){var t,a;function o(){return e.apply(this,arguments)||this}a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=o.prototype;return i.render=function(){var e=this;return n.createElement(c.a,{allProjects:this.props.data.allProjects.edges.map((function(e){return e.node})),currentProject:this.props.data.project.edges[0].node,currentProjectGroup:this.props.data.allProjectGroups.edges.find((function(t){return t.node.name==e.props.data.project.edges[0].node.projectGroup})).node,mainImage:this.props.data.mainImage.childImageSharp.fluid},n.createElement(l.i,null,n.createElement(l.v,{className:"justify-content-center"},n.createElement(l.g,{lg:"8"},n.createElement(l.v,{className:"justify-content-center"},n.createElement(l.g,{lg:"6"},n.createElement(s.a,{src:this.getImageUrl("001.png"),alt:"Sign up page",className:"img-fluid",showCaption:!1})),n.createElement(l.g,{lg:"5",className:"align-self-center"},n.createElement("h3",null,"Day 1: Sign Up Page"))),n.createElement(l.v,{className:"justify-content-center"},n.createElement(l.g,{lg:"6"},n.createElement(s.a,{src:this.getImageUrl("002.png"),alt:"Credit card check out page",className:"img-fluid",showCaption:!1})),n.createElement(l.g,{lg:"5",className:"align-self-center"},n.createElement("h3",null,"Day 2: Credit Card Checkout Page"))),n.createElement(l.v,{className:"justify-content-center"},n.createElement(l.g,{lg:"6"},n.createElement(s.a,{src:this.getImageUrl("003.png"),alt:"Landing page",className:"img-fluid",showCaption:!1})),n.createElement(l.g,{lg:"5",className:"align-self-center"},n.createElement("h3",null,"Day 3: Landing Page"))),n.createElement(l.v,{className:"justify-content-center"},n.createElement(l.g,{lg:"6"},n.createElement(s.a,{src:this.getImageUrl("004.png"),alt:"Calculator",className:"img-fluid",showCaption:!1})),n.createElement(l.g,{lg:"5",className:"align-self-center"},n.createElement("h3",null,"Day 4: Calculator"))),n.createElement(l.v,{className:"justify-content-center"},n.createElement(l.g,{lg:"6"},n.createElement(s.a,{src:this.getImageUrl("005.png"),alt:"App icon",className:"img-fluid",showCaption:!1})),n.createElement(l.g,{lg:"5",className:"align-self-center"},n.createElement("h3",null,"Day 5: App Icon"))),n.createElement(l.v,{className:"justify-content-center"},n.createElement(l.g,{lg:"6"},n.createElement(s.a,{src:this.getImageUrl("006.png"),alt:"User profile",className:"img-fluid",showCaption:!1})),n.createElement(l.g,{lg:"5",className:"align-self-center"},n.createElement("h3",null,"Day 6: User Profile"))),n.createElement(l.v,{className:"justify-content-center"},n.createElement(l.g,{lg:"6"},n.createElement(s.a,{src:this.getImageUrl("007.png"),alt:"Settings",className:"img-fluid",showCaption:!1})),n.createElement(l.g,{lg:"5",className:"align-self-center"},n.createElement("h3",null,"Day 7: Settings"))),n.createElement(l.v,{className:"justify-content-center"},n.createElement(l.g,{lg:"6"},n.createElement(s.a,{src:this.getImageUrl("008.png"),alt:"404 error page",className:"img-fluid",showCaption:!1})),n.createElement(l.g,{lg:"5",className:"align-self-center"},n.createElement("h3",null,"Day 8: 404 Error Page")))))))},i.getImageUrl=function(e){return Object(r.b)("/images/"+this.props.data.project.edges[0].node.imageFolder+"/"+e)},o}(n.Component),i="3575398636"}}]);
//# sourceMappingURL=component---src-pages-projects-daily-ui-tsx-f63e589d3f2e19750554.js.map