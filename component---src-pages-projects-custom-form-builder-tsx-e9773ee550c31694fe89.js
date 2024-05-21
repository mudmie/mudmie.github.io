"use strict";(self.webpackChunkMudmie_com=self.webpackChunkMudmie_com||[]).push([[104],{4370:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var l=a(4578),n=a(7294),r=a(450),s=a(9277),c=a(8193),o=a(4854),m=a(2373),i=a(8545),u=a(8409);let d=function(e){function t(){return e.apply(this,arguments)||this}(0,l.Z)(t,e);var a=t.prototype;return a.render=function(){return n.createElement(i.A,{allProjects:this.props.data.allProjects.edges.map((e=>e.node)),currentProject:this.props.data.project.edges[0].node,mainImage:this.props.data.mainImage},n.createElement(r.W2,null,n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:s.XJ},n.createElement("h6",{className:s.v8},"Context"),n.createElement("h3",{className:s.WB},"Reports in Construction Projects"),n.createElement("p",null,"Because construction work is complex and high-risk, documentation of processes and progress is crucial. There are many types of forms, but Daily Report is the most used ones."),n.createElement("p",null,"Daily Report provides details of daily activities and events at a worksite. It contains information such as"),n.createElement("ul",null,n.createElement("li",null,"weather condition"),n.createElement("li",null,"work log"),n.createElement("li",null,"equipment & material"),n.createElement("li",null,"visitor records"))))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"7"},n.createElement("h4",{className:s.LA},n.createElement("span",{className:s.dE},"Many users expressed that ",""),"the existing report tool wasn't flexible enough for them."))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:s.XJ},n.createElement("h6",{className:s.v8},"Context"),n.createElement("h3",{className:s.WB},"The Problems & The Existing Tool"," "),n.createElement("p",null,"Currently, PlanGrid offers 2 ways to create reports — using a built-in daily report feature or upload your own PDF report."),n.createElement("p",null,"Through collaboration with a product manager and a researcher, I learned that customers found the existing tool not being flexible enough to support their desired workflow. They wanted to create custom forms directly on PlanGrid rather than having to upload PDFs."),n.createElement("div",{className:s.PK+" mb-4"},n.createElement("p",{className:s.OR},n.createElement("b",null,"Method 1: Built-in Daily Report")),n.createElement("p",null,"The first way to create a report is to use the Built-in Daily Report tool. In the first step, users would select sections, from a given list, they want include in the report. Next, they would finalize the report by adding other details before sharing it to field workers to fill out."),n.createElement(r.X2,{className:"justify-content-between"},n.createElement(r.JX,{lg:"6"},n.createElement(m.F,{src:this.getImageUrl("DR.png"),alt:"Step 1 - set up a report ",className:"img-fluid"})),n.createElement(r.JX,{lg:"6"},n.createElement(m.F,{src:this.getImageUrl("DR1.png"),alt:"Step 2 - finalize report",className:"img-fluid"})))),n.createElement("div",{className:s.PK+" mt-3"},n.createElement("p",{className:s.OR},n.createElement("b",null,"Method 2: Custom PDF Upload")),n.createElement("p",null,"The sencond way to create a report is to use the Custom PDF Upload tool. Users would have to prepare a PDF file outside PlanGrid and upload it to the system. Once uploaded, the system will generate a fillable PDF report that can be shared to field workers."),n.createElement(r.X2,{className:"justify-content-between"},n.createElement(r.JX,{lg:"6"},n.createElement(m.F,{src:this.getImageUrl("PDF.png"),alt:"Step 1 - drop a PDF file to upload ",className:"img-fluid"})),n.createElement(r.JX,{lg:"6"},n.createElement(m.F,{src:this.getImageUrl("PDF1.png"),alt:"Step 2 - Share the PDF generated by the system",className:"img-fluid"}))))))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"7"},n.createElement("h4",{className:s.LA},n.createElement("span",{className:s.dE},"Limited customizability, inefficient process, and lack of data aggregation were")," ","","the main frustration points."))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:s.XJ},n.createElement("h6",{className:s.v8},"Research"),n.createElement("h3",{className:s.WB},"Understanding Construction Form Creation Process"),n.createElement("p",null,"Learning about the problem from working wiht the product manager helped me grasp a big picture of the issue, but I still didn’t have enough understanding of the user mental models to start designing the solutions."),n.createElement("p",null,"The main research goal was to understand sequences of tasks & tools used to create forms. We also wanted to find out the satisfaction level & pain points of the current process."),n.createElement("p",{className:s.OR},n.createElement("b",null,"Recruiting Participants")),n.createElement("p",{className:"mt-2"},"I worked with"," ",n.createElement(u.MS,{href:"https://www.linkedin.com/in/kimberley-pita",target:"_blank"},"Kim Pita"),", a research intern, to recruit 10 companies (small, medium, large-sized & government-based) to participate in the user research."),n.createElement("p",{className:s.OR},n.createElement("b",null,"Research Methods")),n.createElement("p",{className:"mt-2"},"I adopted a user-centered design method of contextual inquiry to reveal the underlying work structure of the form creation process. I also applied a master-apprentice model, where the users (experts) walked me (a novice) through the form creation process step by step."," "),n.createElement("p",{className:s.OR},n.createElement("b",null,"Research Findings")),n.createElement("p",{className:"mt-2"},"Typically, project manager, project engineer, and IT Admin were the ones that created forms. Types of form included:"),n.createElement("ul",null,n.createElement("li",null,"Paper forms"),n.createElement("li",null,"Microsoft Excel forms"),n.createElement("li",null,"PDF forms"),n.createElement("li",null,"PlanGrid Native forms")),n.createElement("p",null,"Users expressed dissatisfaction with the current PlanGrid report tool primarily due to its limited customizability, which forced them to complete additional workflows outside PlanGrid before utilizing the report tool. Some users also highlighted frustrations from the tool's inadequate data aggregation capability."),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"8"},n.createElement("p",{className:"text-center"},n.createElement("b",null,"A summary of the current form creation workflow")),n.createElement(m.F,{src:this.getImageUrl("flow.png"),alt:"A summary of the current form creation workflow",className:"img-fluid",showCaption:!1}))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"6",className:"mb-2 mb-lg-0 mt-4"},n.createElement("div",{className:s.PK}," ",n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Paper Form")),n.createElement("p",{className:"mt-2"},"A traditional way to create forms. Companies try to move away from it, but they still use it to some extent."),n.createElement("p",null,n.createElement("span",{className:s.ek},n.createElement(c.KP3,null))," ","Comfort zone for most field workers"),n.createElement("p",null,n.createElement("span",{className:s.ek},n.createElement(c.KP3,null))," ","Full control of form content, design, and layout"),n.createElement("p",null,n.createElement("span",{className:s.Q6},n.createElement(c.SV5,null))," ","Time consuming to create, share, collect, review"),n.createElement("p",null,n.createElement("span",{className:s.Q6},n.createElement(c.SV5,null))," ","Costly to print"))),n.createElement(r.JX,{lg:"6",className:"mb-2 mb-lg-0 mt-4"},n.createElement("div",{className:s.PK}," ",n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Excel Form")),n.createElement("p",{className:"mt-2"},"Used by 80% of the companies. Can be filled out digitally or can require manual input of data from paper forms."),n.createElement("p",null,n.createElement("span",{className:s.ek},n.createElement(c.KP3,null))," ","Questions can be entered quickly and easily"),n.createElement("p",null,n.createElement("span",{className:s.ek},n.createElement(c.KP3,null))," ","Reliable for complex calculation & data analysis"),n.createElement("p",null,n.createElement("span",{className:s.Q6},n.createElement(c.SV5,null))," ","Manual, error prone, time consuming process"),n.createElement("p",null,n.createElement("span",{className:s.Q6},n.createElement(c.SV5,null))," ","High effort to transfer data from paper forms")))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"6",className:"mb-2 mb-lg-0 mt-4"},n.createElement("div",{className:s.PK}," ",n.createElement("p",{className:"mb-0"},n.createElement("b",null,"PDF Form")),n.createElement("p",{className:"mt-2"},"Every user uses this form type, but it has the worst creation process. Can be uploaded to PlanGrid and distributed digitally."),n.createElement("p",null,n.createElement("span",{className:s.ek},n.createElement(c.KP3,null))," ","Full control on content, design, and layout"),n.createElement("p",null,n.createElement("span",{className:s.ek},n.createElement(c.KP3,null))," ","Submitted forms can be exported as CSV files (Excel)"),n.createElement("p",null,n.createElement("span",{className:s.Q6},n.createElement(c.SV5,null))," ","Manual, time consuming, and tedious process"),n.createElement("p",null,n.createElement("span",{className:s.Q6},n.createElement(c.SV5,null))," ","Requires additional software to complete the process"))),n.createElement(r.JX,{lg:"6",className:"mb-2 mb-lg-0 mt-4"},n.createElement("div",{className:s.PK}," ",n.createElement("p",{className:"mb-0"},n.createElement("b",null,"PlanGrid Native Form (Built-in Daily Report)")),n.createElement("p",{className:"mt-2"},"Used by 80% of the companies. Can be filled out digitally or can require manual input of data from paper forms."),n.createElement("p",null,n.createElement("span",{className:s.ek},n.createElement(c.KP3,null))," ","Easy and quick process"),n.createElement("p",null,n.createElement("span",{className:s.ek},n.createElement(c.KP3,null))," ","Submitted forms can be exported to local computers"),n.createElement("p",null,n.createElement("span",{className:s.ek},n.createElement(c.KP3,null))," ","Access to some insights of the submitted report"),n.createElement("p",null,n.createElement("span",{className:s.Q6},n.createElement(c.SV5,null))," ","Lacks customizability and only works for Daily Report"))))))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"7"},n.createElement("h4",{className:s.LA},n.createElement("span",{className:s.dE}," ","Based on the research findings,"," ")," ","I prototyped 3 different design concepts and tested them with our users."))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:s.XJ},n.createElement("h6",{className:s.v8},"Design"),n.createElement("h3",{className:s.WB},"Designing and Prototyping Concepts"),n.createElement("p",null,"With learnings and findings from user research, I explored potential designs and prototyped 3 different concepts. I demonstrated these concepts to the same user groups and gather feedback from them."," "),n.createElement("p",null,n.createElement("b",null,"Note –")," these concepts were low-fidelity as they meant to provide users rough ideas of what the new potential custom form builder could look like."),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"12",className:"mb-4"},n.createElement("div",{className:s.PK},n.createElement(r.X2,{className:"justify-content- center"},n.createElement(r.JX,{lg:"6"},n.createElement(m.F,{src:this.getImageUrl("1.gif"),alt:"",className:"img-fluid"})),n.createElement(r.JX,{lg:"6"},n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Concept 1 - Condensed View")),n.createElement("p",{className:"mt-2"},"Inspired by the look and feel of Microsoft Excel as it's one of the tools used by many users."),n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Interaction Details")),n.createElement("ul",null,n.createElement("li",null,"Click the + icon or press the enter key on the keyboard to quickly add new questions"),n.createElement("li",null,"Select response type from a dropdown menu in the right column"),n.createElement("li",null,"Bulk select to delete multiple questions at once"))))))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"12",className:"mb-4"},n.createElement("div",{className:s.PK},n.createElement(r.X2,{className:"justify-content- center"},n.createElement(r.JX,{lg:"6"},n.createElement(m.F,{src:this.getImageUrl("2.gif"),alt:"",className:"img-fluid"})),n.createElement(r.JX,{lg:"6"},n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Concept 2 - Item by Item")),n.createElement("p",{className:"mt-2"},"Designed to improve the existing PlanGrid built-in report tool by providing more customizability to the users"),n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Interaction Details")),n.createElement("ul",null,n.createElement("li",null,"Use a dropdown menu to add sections or questions to the form"),n.createElement("li",null,"Chose a desired response type for each question"),n.createElement("li",null,"Preview the final look of the form before sharing to field workers"))))))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"12",className:"mb-2 mb-lg-0"},n.createElement("div",{className:s.PK},n.createElement(r.X2,{className:"justify-content- center"},n.createElement(r.JX,{lg:"6"},n.createElement(m.F,{src:this.getImageUrl("3.gif"),alt:"",className:"img-fluid"})),n.createElement(r.JX,{lg:"6"},n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Concept 3 - Smart PDF")),n.createElement("p",{className:"mt-2"},"Designed based on the existing PDF import feature on PlanGrid Field Reports. It was included in the concept testing because every research participant already worked with the PDF files."),n.createElement("p",{className:"mb-0"},n.createElement("b",null,"Interaction Details")),n.createElement("ul",null,n.createElement("li",null,"Upload an existing PDF file to PlanGrid"),n.createElement("li",null,"Mark input fields by drawing text fields or creating checkboxes directly on PlanGrid")))))))))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"7"},n.createElement("h4",{className:s.LA},"Concept 2 is favorable",n.createElement("span",{className:s.dE}," ","by most users as it offers most")," ","customizability to control layout and questions"))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:s.XJ},n.createElement("h6",{className:s.v8},"Testing"),n.createElement("h3",{className:s.WB},"Concept Testing Results"),n.createElement("p",null,"Overall, users found Concept 2 (Item-by-item) to suit their needs the most. The design of concept #2 provided customizability while also allowed the users to manage the layout of the template."),n.createElement("p",null,"Many users liked the idea of using the keyboard to quickly enter questions in Concept 1 (Condensed view). While they found the concept to be convenient and efficient, all of them mentioned the importance of organizing the form layout. Therefore, this concept wouldn't meet their needs."),n.createElement("p",null,"Users were excited by Concept 3 (Smart PDF). While they thought the concept was cool, they didn't feel it would solve their pain points. The concept still required PDF files to be created separately and the users also needed to manually draw each text field after uploading the PDF to PlanGrid. This concept would also require excessive development effort, making it the least feasible and desirable.")))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"7"},n.createElement("h4",{className:s.LA},n.createElement("span",{className:s.dE}," ","I revised and turned ",""),"Concept 2 into high-fidelity mockups."))),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"10"},n.createElement("div",{className:s.XJ},n.createElement("h6",{className:s.v8},"Design"),n.createElement("h3",{className:s.WB},"Final Designs "),n.createElement("p",null,"Based on the research findings, I started working on the details of the design, including form creation and submission experiences."),n.createElement("p",null,n.createElement("b",null,"Note –")," I created these designs as I wrapped up my last week of intership. Since they were the first iteration, another designer continued iterating the designs after I left and shipped the product later in early 2020."),n.createElement("div",{className:s.PK+" mb-4"},n.createElement("p",{className:s.OR},n.createElement("b",null,"Form Creation Experience")),n.createElement("p",null,"Form creation experience is only available through PlanGrid web app since users don't typically use mobile devices to perform this task. The design allows users to create sections, add questions, selct a response type for each question, and rearrange order of the question within the section. with various response types to it."),n.createElement(r.X2,{className:"justify-content-center"},n.createElement(r.JX,{lg:"8"},n.createElement(m.F,{src:this.getImageUrl("final-creator.png"),alt:"Form Creation Experience ",showCaption:!1,className:"img-fluid"})))),n.createElement("div",{className:s.PK+" mt-3"},n.createElement("p",{className:s.OR},n.createElement("b",null,"Form Submission Experience")),n.createElement("p",null,"Form submission experience was designed to support both web and mobile devices to ensure that field workers would be able to fill out the form."),n.createElement("p",null,"A person that has been assigned to a form will see a list of questions with a pre-defined response type specified by the form creator."),n.createElement(r.X2,{className:"justify-content-center text-center"},n.createElement(r.JX,{lg:"8"},n.createElement(m.F,{src:this.getImageUrl("ios.png"),alt:"Form Submission Experience for iOS",className:"img-fluid"}))),n.createElement(r.X2,{className:"justify-content-center text-center"},n.createElement(r.JX,{lg:"8"},n.createElement(m.F,{src:this.getImageUrl("Android.png"),alt:"Form Submission Experience for Android",className:"img-fluid"}))),n.createElement(r.X2,{className:"justify-content-center text-center"},n.createElement(r.JX,{lg:"8"},n.createElement(m.F,{src:this.getImageUrl("Windows.png"),alt:"Form Submission Experience for Windows/Web",className:"img-fluid"})))))))))},a.getImageUrl=function(e){return(0,o.dq)("/images/"+this.props.data.project.edges[0].node.imageFolder+"/"+e)},t}(n.Component)},9277:function(e,t,a){a.d(t,{LA:function(){return u},OR:function(){return l},PK:function(){return c},Ph:function(){return o},Q6:function(){return E},Se:function(){return n},WB:function(){return f},XJ:function(){return h},bw:function(){return p},dE:function(){return i},ek:function(){return m},er:function(){return s},ji:function(){return d},v8:function(){return r}});var l="styles-module--almost-black-p--c96b4",n="styles-module--bold--46bb3",r="styles-module--category-text--6ec37",s="styles-module--content-container--eed5e",c="styles-module--content-container-left-align--26d62",o="styles-module--content-container-small--a5c9b",m="styles-module--green--61f8c",i="styles-module--grey-text--cb44d",u="styles-module--highlight-text--c8ebd",d="styles-module--list-left-align--e1d9e",p="styles-module--p-mt-mb-4--9a658",E="styles-module--red--1fe66",h="styles-module--section-container--d5901",f="styles-module--title-text--a550e"}}]);
//# sourceMappingURL=component---src-pages-projects-custom-form-builder-tsx-e9773ee550c31694fe89.js.map