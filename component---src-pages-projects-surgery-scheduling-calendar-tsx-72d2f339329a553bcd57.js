"use strict";(self.webpackChunkMudmie_com=self.webpackChunkMudmie_com||[]).push([[310],{8217:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var l=a(4578),n=a(7294),s=a(9277),r=a(450),i=a(4854),c=a(2373),o=a(8545);let m=function(e){function t(){return e.apply(this,arguments)||this}(0,l.Z)(t,e);var a=t.prototype;return a.render=function(){this.props.data.project.edges[0].node;return n.createElement(o.A,{allProjects:this.props.data.allProjects.edges.map((e=>e.node)),currentProject:this.props.data.project.edges[0].node,mainImage:this.props.data.mainImage,disableHeader:!1},n.createElement(r.W2,null,n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"7"},n.createElement("h4",{className:s.LA},"Users found the existing scheduling workflow confusing and struggled to complete their tasks"," ",n.createElement("span",{className:s.dE}," ","— they said “the tool slows me down”")," "))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:s.XJ},n.createElement("h6",{className:s.v8},"Research"),n.createElement("h3",{className:s.WB},"The Users"),n.createElement("p",null,n.createElement("u",null,"Clinic Schedulers are the primary users")," of this tool. They work with doctors, patients, and OR schedulers at hospitals to coordinate surgery appointments."," "),n.createElement("p",null,"I conducted ",n.createElement("u",null,"ethnographic research")," involving onsite shadowing and user interviews, leading to an identification of the following characteristics of this user group:"),n.createElement(r.X2,{className:"justify-content-between"},n.createElement(r.JX,{lg:"4",className:"mb-2 mb-lg-0"},n.createElement("div",{className:s.er},n.createElement("p",null,n.createElement("b",null,"Non-tech savvy")),n.createElement("p",null," ","Older demographics, less familiar with technology and digital interactions"))),n.createElement(r.JX,{lg:"4",className:"mb-2 mb-lg-0"},n.createElement("div",{className:s.er},n.createElement("p",null,n.createElement("b",null,"Busy and stressful job")),n.createElement("p",null," ","Work with many doctors and responsible for scheduling over 40 cases per week"))),n.createElement(r.JX,{lg:"4",className:"mb-2 mb-lg-0"},n.createElement("div",{className:s.er},n.createElement("p",null,n.createElement("b",null,"High turnover")),n.createElement("p",null," ","Schedulers come and go, requiring frequent training and support"))))))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"7"},n.createElement("h4",{className:s.LA},n.createElement("span",{className:s.dE}," Everyone said ")," ","“we need to improve the usability...”"," ",n.createElement("span",{className:s.dE}," ","— but why and how?"," ")," "))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:s.XJ},n.createElement("h6",{className:s.v8},"Research"),n.createElement("h3",{className:s.WB},"Problem 1 – Finding available time takes too long"," "),n.createElement("p",null,"On average, users spend almost 5 minutes to complete the task. They spent an average of"," ",n.createElement("u",null,"1.5 minutes just to select a desired appointment date.")),n.createElement("p",null,"From interviews, users typically schedule surgeries a month in advance. Having to ",n.createElement("u",null," navigate week by week ")," and"," ",n.createElement("u",null," waiting for the data to load ")," while trying to find availability ",n.createElement("u",null,"significantly slows them down"),"."),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:"text-center"},n.createElement(c.F,{src:this.getImageUrl("current-finding-time.gif"),alt:"Finding availability (blue block) in the existing experience",className:"img-fluid",showCaption:!0}))))))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:s.XJ},n.createElement("h6",{className:s.v8},"Research"),n.createElement("h3",{className:s.WB},"Problem 2 – Workflow/UI lacks clear guidance"," "),n.createElement("p",null,"Users struggled with the existing experience. During onsite visits, I observed many users staring at the screen and not knowing how to proceed. Some hesitated to click around and explore the tool due to fear of making mistakes."),n.createElement("p",null,"The workflow expects users to input search parameters to find available time before selecting the time type. However, the existing design requires users to process information right to left,"," ",n.createElement("u",null,"contradicting our natural inclination to read from left to right"),"."),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"12"},n.createElement("div",{className:"text-center"},n.createElement(c.F,{src:this.getImageUrl("messy-screen.png"),alt:"Cluttered UI and lack of structured workflow in the existing design",className:"img-fluid",showCaption:!0}))))))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:s.XJ},n.createElement("h6",{className:s.v8},"Research"),n.createElement("h3",{className:s.WB},"Problem 3 – Poor readability and visualization"," "),n.createElement("p",null,"Surgery schedules can be very chaotic, and the existing design"," ",n.createElement("u",null,"fails to provide easy access to the necessary information")," ","at a glance."),n.createElement("p",null,"Even though users can rely on hover interaction to view additional information, it"," ",n.createElement("u",null,"requires extra effort to accurately hover")," over the intended item because of its small size. The tooltip will also disappear when users move away from the focused item."),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:"text-center"},n.createElement(c.F,{src:this.getImageUrl("unreadable-blocks.png"),alt:"Poor readability and visualization of complex schedule",className:"img-fluid",showCaption:!0}))))))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"7"},n.createElement("h4",{className:s.LA},"The goals"," ",n.createElement("span",{className:s.dE}," ","— we want to streamline the scheduling workflow and achieve the following outcomes:"," ")," "))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"3"},n.createElement("div",{className:s.Ph},n.createElement("p",null,n.createElement("b",null,"Increase efficiency")),n.createElement("p",null,"Reduce task completion time from 5 minutes to 3 minutes"))),n.createElement(r.JX,{lg:"3"},n.createElement("div",{className:s.Ph},n.createElement("p",null,n.createElement("b",null,"Improve customer satisfaction")),n.createElement("p",null,"Reduce the number of support tickets by 50% "))),n.createElement(r.JX,{lg:"3"},n.createElement("div",{className:s.Ph},n.createElement("p",{className:"text-center"},n.createElement("b",null,"Reduce support cost")),n.createElement("p",{className:"text-center"},"Reduce the number of trips for in-person training by 25%")))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"7"},n.createElement("h4",{className:s.LA},"Displaying lots of information in the most simple way"," ",n.createElement("span",{className:s.dE}," ","was the biggest design challenge."," ")," "))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:s.XJ},n.createElement("h6",{className:s.v8},"Solving The Problems"),n.createElement("h3",{className:s.WB},"Reducing Cognitive Workload"," "),n.createElement("p",null,"Open time and block time are two common types of time allocation in surgery scheduling. Open time is first-come, first-served while block time is allocated to a specific individual or group."),n.createElement("div",{className:s.PK+" mt-4"},n.createElement("p",{className:s.OR},n.createElement("b",null,"Reducing information types and colors")),n.createElement("p",null,"The existing tool categorizes block times into individual, service line, and group blocks. Scheduled surgeries and a 'set alert' function are also visible."," ",n.createElement("u",null,"These visual clutters overwhelm users with cognitive load"),"."),n.createElement("p",null,"While users need to differentiate between individual and shared blocks,"," ",n.createElement("u",null,"they don't need to distinguish between the service line and group blocks"),". I combined service line and group blocks into one category and removed the set alert feature from this calendar to simplify the experience."),n.createElement(r.X2,{className:"justify-content-between"},n.createElement(r.JX,{lg:"6"},n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Before")),n.createElement(c.F,{src:this.getImageUrl("color-labels.png"),alt:"7 information types and colors in the UI",className:"img-fluid"})),n.createElement(r.JX,{lg:"6"},n.createElement("p",{className:"mb-0"},n.createElement("b",null,"After")),n.createElement(c.F,{src:this.getImageUrl("reduced-colors.png"),alt:"5 information types and colors in the UI",className:"img-fluid"})))),n.createElement("div",{className:s.PK+" mt-3"},n.createElement("p",{className:s.OR},n.createElement("b",null,"Eliminating unnecessary complexity")),n.createElement("p",null,"Academic and larger hospitals often reserve multiple OR rooms for shared blocks. While this room-specific information is crucial for hospital schedulers, clinic schedulers are more concerned with finding available time slots."),n.createElement("p",null,"However,"," ",n.createElement("u",null,"the existing system displays each block per OR room"),". Without knowing the room information, how are the clinic schedulers supposed to make a decision on which one of these blocks they should select?"),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"12"},n.createElement("div",{className:"text-center"},n.createElement(c.F,{src:this.getImageUrl("avaialbility-and-room.png"),alt:"Display of block per room in the existing system",className:"img-fluid",showCaption:!0})))),n.createElement("p",null,"I proposed and verified the feasibility of"," ",n.createElement("u",null,"consolidating the availability of blocks belonging to the same service line or group"),". This removes unnecessary complexity from the users and streamlines visualization in the calendar, making it easier to take appropriate actions."),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"12"},n.createElement("div",{className:"text-center"},n.createElement(c.F,{src:this.getImageUrl("consolidate-availability.png"),alt:"Removing complexity by consolidating availability of the same block",className:"img-fluid",showCaption:!0})))),n.createElement("p",null,"I further simplified the UI by"," ",n.createElement("u",null,"removing scheduled cases of other surgeons in the shared blocks")," ","from the calendar, as users mentioned they didn't need to see the information in this step."),n.createElement(r.X2,{className:"justify-content-between"},n.createElement(r.JX,{lg:"6"},n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Before")),n.createElement(c.F,{src:this.getImageUrl("color-labels.png"),alt:"Cluttered UI before the redesign",className:"img-fluid"})),n.createElement(r.JX,{lg:"6"},n.createElement("p",{className:"mb-0"},n.createElement("b",null,"After")),n.createElement(c.F,{src:this.getImageUrl("final-reduction.png"),alt:"Cleaner UI after the redesign",className:"img-fluid"}))))))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"7"},n.createElement("h4",{className:s.LA},n.createElement("span",{className:s.dE}," Some key")," design decisions"," ",n.createElement("span",{className:s.dE}," I made 🧐 ")," "))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:s.XJ},n.createElement("h6",{className:s.v8},"Solving The Problems"," "),n.createElement("h3",{className:s.WB},"Designing the right calendar"," "),n.createElement("p",null,"While the effort above helped simplify the complexity and the visualization, it still didn't solve all the identified Problems. Below are other design decisions I made to address those problems."," "),n.createElement("div",{className:s.PK+" mb-4"},n.createElement("p",{className:s.OR},n.createElement("b",null,"Weekly vs. Monthly Calendar")),n.createElement("p",null,"The existing week-view calendar cannot offer an immediate overview of availability, which prevents users from quickly achieving their goals."),n.createElement("p",null,"To address this issue, I designed a month-view calendar that would project a high-level availability to the users, enabling them to quickly select a surgery date and complete their task."),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"6"},n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Weekly Calendar")),n.createElement("div",{className:"text-left"},n.createElement(c.F,{src:this.getImageUrl("week-view-new.png"),alt:"Week-view Calendar",className:"img-fluid",showCaption:!1})),n.createElement("p",null,"I explored designs for weekly calendar but couldn't solve the existing Problems. After all, it"," ",n.createElement("u",null,"was not")," the best option for finding availability.")),n.createElement(r.JX,{lg:"6"},n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Monthly Calendar")),n.createElement("div",{className:"text-left"},n.createElement(c.F,{src:this.getImageUrl("month-view-new.png"),alt:"Month-view Calendar (proposal)",className:"img-fluid",showCaption:!1})),n.createElement("p",null,"✅ Monthly calendar addresses the Problems well and is ideal for projecting overall availability and showing minimal information.")))),n.createElement("div",{className:s.PK+" mb-4"},n.createElement("p",{className:s.OR},n.createElement("b",null,"Vertical vs. Horizontal Layout")),n.createElement("p",null,"After selecting a desired date, users will land on a day-view calendar where they can see their schedule and finalize the request. The existing design has many visualization and readability issues, which will be addressed in this step."," "),n.createElement("p",null,"I only considered a vertical layout in the first design iteration. I started exploring a horizontal layout after running into the readability issue with the vertical layout when the schedule got complex."),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"6"},n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Vertical Layout")),n.createElement("div",{className:"text-left"},n.createElement(c.F,{src:this.getImageUrl("vertical.png"),alt:"Verical Layout Day-view Calendar",className:"img-fluid",showCaption:!1})),n.createElement("p",null,"I refreshed the vertical layout design. Although many issues were already addressed previously, I still ran into readability issues with busy and complex schedules.")),n.createElement(r.JX,{lg:"6"},n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Horizontal Layout")),n.createElement("div",{className:"text-left"},n.createElement(c.F,{src:this.getImageUrl("horizontal.png"),alt:"Horizontal Layout Day-view Calendar",className:"img-fluid",showCaption:!1})),n.createElement("p",null,"✅ I designed the horizontal layout from scratch. This layout handles complex schedules well and improves readability."))))))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:s.XJ},n.createElement("h6",{className:s.v8},"Design"),n.createElement("h3",{className:s.WB},"Final Design "),n.createElement("p",null,"The project became complex and large due to all of the problems presented earlier. As a result, I collaborated closely with the product manager and engineers to finalize the scope for the first release."),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:"text-center"},n.createElement(c.F,{src:this.getImageUrl("calendar-final.gif"),alt:"Designs and Interactions in the Final Design",className:"img-fluid",showCaption:!0})))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"12",className:"mb-4"},n.createElement("div",{className:s.PK},n.createElement(r.X2,{className:"justify-content- center"},n.createElement(r.JX,{lg:"6"},n.createElement(c.F,{src:this.getImageUrl("final-month.png"),alt:"Average view and total case filter",className:"img-fluid",showCaption:!1})),n.createElement(r.JX,{lg:"6"},n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Month view availability")),n.createElement("p",{className:"mt-2"},"Month view provides a high-level availability, making it quicker for users to find available time. The screen also looks less cluttered, reducing information clutters and cognitive workload for the users."),n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Left to right workflow")),n.createElement("p",{className:"mt-2"},"The search drawer got moved to the left since it's the first item users interact with on this page. This workflow makes it more natural to our nature to process information from left to right.")))))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"12"},n.createElement("div",{className:s.PK},n.createElement(r.X2,{className:"justify-content- center"},n.createElement(r.JX,{lg:"6"},n.createElement(c.F,{src:this.getImageUrl("vertical-layout.png"),alt:"Integration with case form for scheduling workflow",showCaption:!1,className:"img-fluid"})),n.createElement(r.JX,{lg:"6"},n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Vertical layout")),n.createElement("p",{className:"mt-2"},"While horizontal layout could handle complex schedule better, it'll take a lot more effort for engineers to implement. Given the time constraint, we decided to proceed with the vertical layout."),n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Day-view visualization revamp")),n.createElement("p",{className:"mt-2"},"To avoid the readability issue, I worked very closely with the engineers to revamp the day view visualization."),n.createElement("p",null,"Each type of time is drawn into its column with the width divided equally using a number of the total columns. This approach ensures a clean UI that is easy for users to read and understand."," ",".                          ")))))))))))},a.getImageUrl=function(e){return(0,i.dq)("/images/"+this.props.data.project.edges[0].node.imageFolder+"/"+e)},t}(n.Component)},9277:function(e,t,a){a.d(t,{LA:function(){return u},OR:function(){return l},PK:function(){return i},Ph:function(){return c},Q6:function(){return g},Se:function(){return n},WB:function(){return p},XJ:function(){return E},bw:function(){return h},dE:function(){return m},ek:function(){return o},er:function(){return r},ji:function(){return d},v8:function(){return s}});var l="styles-module--almost-black-p--c96b4",n="styles-module--bold--46bb3",s="styles-module--category-text--6ec37",r="styles-module--content-container--eed5e",i="styles-module--content-container-left-align--26d62",c="styles-module--content-container-small--a5c9b",o="styles-module--green--61f8c",m="styles-module--grey-text--cb44d",u="styles-module--highlight-text--c8ebd",d="styles-module--list-left-align--e1d9e",h="styles-module--p-mt-mb-4--9a658",g="styles-module--red--1fe66",E="styles-module--section-container--d5901",p="styles-module--title-text--a550e"}}]);
//# sourceMappingURL=component---src-pages-projects-surgery-scheduling-calendar-tsx-72d2f339329a553bcd57.js.map