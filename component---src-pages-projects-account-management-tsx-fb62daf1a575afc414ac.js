(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{268:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c}),n.d(t,"pageQuery",function(){return m});var a=n(35),s=n(1),r=n(3),l=n(260),o=n(259),i=n(261);var c=function(e){var t,n;function c(){return e.apply(this,arguments)||this}n=e,(t=c).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var m=c.prototype;return m.render=function(){return s.createElement(o.a,{allProjects:this.props.data.allProjects.edges.map(function(e){return e.node}),currentProject:this.props.data.project.edges[0].node,mainImage:this.props.data.mainImage.childImageSharp.fluid},s.createElement(r.i,null,s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"8"},s.createElement("h3",null,"About The Company"),s.createElement("p",null,"PlanGrid has a primary objective to make intuitive and impactful technology for people in the construction industry. Its construction productivity software doesn’t only allow field workers to store, view, and share blueprints, but also enables stakeholders in a project to work together throughout the project life cycle."))),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"8"},s.createElement("h3",null,"Background"),s.createElement("p",null,"Admin Console is a part of PlanGrid web products that allows IT administrators to add, remove, and manage user accounts as well as to purchase PlanGrid licenses for users who are involved in organization projects."),s.createElement("p",null,"PlanGrid offers multiple types of licenses, and each comes with a different number of sheet storage limit. The licenses range from basic ones that come with limited sheet storage to the most expensive one that allows unlimited sheet storage."))),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"8"},s.createElement("h3",null,"My Roles & Project Goals"),s.createElement("p",null,"The main goals of this project were to enhance the user experience for the Admin Console and to introduce a new workflow that allowed the IT Admins to set up organization ownership of user accounts. As a designer, I designed the workflow that will give IT Admins an ability to manage user accounts and redesigned web interfaces using components from PlanGrid's design system."))),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"8"},s.createElement("h3",null,"Problems"),s.createElement("p",{className:i.quote},"The current system restricts IT Admins to only purchase licenses from a user log page. It also limits their capability to effectively monitor license usage as they are unable to access a list of projects that their users are working on."),s.createElement("p",null,"The first problem occurs when IT Admins finds out they don't have enough license when trying to add new users to the organization. The current process requires them to abandon their current task, navigate back to the user log page, purchase licenses, and repeat the process of adding new users."),s.createElement("p",null,"The second problem happens when employees request for a license upgrade once they run out of sheet storage. Since the IT Admins have no information about projects that the employees are working on, it's challenging to know if the extra storage is required for company work. It is possible that the employees use company license to work on their personal or freelance projects. As a result, the company has to unnecessarily pay extra to upgrade licenses for these employees."))),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"8"},s.createElement("h3",null,"The Current Admin Console"),s.createElement("p",null,'The current version of Admin Console consists of two major components: a license usage box and a table that displays a list of people involving in the company projects. The IT Admins can click "add license" button to buy more licenses and click "new users" button to add more people to the organization.'),s.createElement("p",null,"From a design perspective, not every part of the Admin Console is built using components from PlanGrid’s design system. For example, the “more options icon” at the end of the row of user log doesn’t exist in other parts of PlanGrid web app."),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"11"},s.createElement(l.a,{src:this.getImageUrl("current-AC.jpg"),alt:"Current Admin Console UI",className:"img-fluid"}))))),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"8"},s.createElement("h3",null,"User Flow"),s.createElement("p",null,"Workflow diagram was created to explore and identify different paths that the IT Admins could perform to complete their tasks."),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"11"},s.createElement(l.a,{src:this.getImageUrl("full-flow.png"),alt:"User flow for the new Admin Console",className:"img-fluid"}))),s.createElement("p",null,"To make it easier to understand the process, I created a simplified version of the user flow. In the diagram, IT Admins can add new users or manage existing users. If they decide to manage a user, they’ll send a request to manage the user account. If they just want the user to work on company projects, they’ll send an invitation to the user to join the organization. On the other end, the user can accept or reject the request or the invitation."),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"11"},s.createElement(l.a,{src:this.getImageUrl("flow.png"),alt:"Simplified user flow for the new Admin Console ",className:"img-fluid"}))))),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"10"},s.createElement("h3",null,"Design Process"),s.createElement("p",null,"At the beginning of the design process, I sketched wireframes to get a general idea of how components would look like in each step of the user flow."),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"11"},s.createElement(l.a,{src:this.getImageUrl("wireframes.png"),alt:"Hand-sketched wireframes",className:"img-fluid"}))),s.createElement("p",null,"Since the current version of Admin Console didn't comply with PlanGrid's design system, I designed a high fidelity prototype using most components from the design system library. Some designs were completely changed to minimize future design work. For example, license options were listed vertically in the original design. Although there is no problem with this design at the moment, the list can get longer if PlanGrid offers more license options in the future. Given the scenario, a new design would be required to prevent the users from scrolling through an endless list. Therefore, I decided to replace the original design with a dropdown. This pattern works with the current list of license options and will also work if additional items are added to the list."),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"11"},s.createElement(l.a,{src:this.getImageUrl("license.png"),alt:"Original design vs New design of the license list",className:"img-fluid"}))))),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"10"},s.createElement("h3",null,"Usability Testing"),s.createElement("p",{className:i.quote},"Usability testing was run to observe how users interact with the system when they don't have enough license to add new users to the organization. Information gained from usability testing sessions provides meaningful insights that lead to a new design that will enhance an overall user experience."),s.createElement("p",null,"The restriction to purchase license only from the user log page was one of the problems addressed at the beginning of project. In the design process, I thought it would be convenient if the users could purchase extra license without having to go back to the user log page. As a result, I added a helper text that says \"if you don't have enough license, you'll be able to purchase more later\" with a thought that the users would read it and know they can buy more license in after clicking next."),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"11"},s.createElement(l.a,{src:this.getImageUrl("usability.png"),alt:"Adding helper text to notify users about in-app license purchase",className:"img-fluid"}))),s.createElement("p",null,"However, I was not entirely sure if the helper text would be effective enough. This thought led me to run a usability test with an assumption that the users would read the helper text and proceed to buy licenses. In the usability testing session, I gave participants scenarios, asked them to perform tasks, observed their interaction, and gave the rating of either easy, difficult, or fail. The table below shows testing results of three participants."),s.createElement(r.w,null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,"User"),s.createElement("th",null,"Rating"),s.createElement("th",null,"Notes"))),s.createElement("tbody",null,s.createElement("tr",null,s.createElement("th",{scope:"row"},"1"),s.createElement("td",null,"Fail"),s.createElement("td",null,"User kept clicking next without even realizing that additional license were bought.")),s.createElement("tr",null,s.createElement("th",{scope:"row"},"2"),s.createElement("td",null,"Difficult"),s.createElement("td",null,"User looked confused when able to select license labelled 0 available. The user took a long time to complete the task.")),s.createElement("tr",null,s.createElement("th",{scope:"row"},"3"),s.createElement("td",null,"Easy"),s.createElement("td",null,"User read the helper text carefully and completed the task in a timely manner.")))),s.createElement("p",null,"In addition to the usability test, I also discussed with participants and learned that they typically didn't read helper text as they tried to complete the task as fast as they could. User 1 and User 2 commented that obvious visual cues would help signify that the action required special attention."))),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"10"},s.createElement("h3",null,"Final Design"),s.createElement("p",null,"By combining the testing result and feedback received from the user, I decided to add an additional step to display an alert message regarding to license purchase."),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"11"},s.createElement(l.a,{src:this.getImageUrl("new-design.png"),alt:"Adding an alert banner to notify users about insufficient licenses",className:"img-fluid"}))),s.createElement("p",null,"I completed the final designs, which are being implemented after I finished my internship at PlanGrid."),s.createElement(r.v,{className:"justify-content-center"},s.createElement(r.g,{lg:"12"},s.createElement(l.a,{src:this.getImageUrl("final-flow.png"),alt:"The final design of Admin Console",className:"img-fluid"})))))))},m.getImageUrl=function(e){return Object(a.b)("/images/"+this.props.data.project.edges[0].node.imageFolder+"/"+e)},c}(s.Component),m="2103706470"}}]);
//# sourceMappingURL=component---src-pages-projects-account-management-tsx-fb62daf1a575afc414ac.js.map