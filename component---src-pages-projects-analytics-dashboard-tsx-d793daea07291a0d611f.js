"use strict";(self.webpackChunkMudmie_com=self.webpackChunkMudmie_com||[]).push([[676],{9698:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(4578),l=a(7294),s=a(9277),r=a(450),c=a(4854),i=a(2373),m=a(8545);let o=function(e){function t(){return e.apply(this,arguments)||this}(0,n.Z)(t,e);var a=t.prototype;return a.render=function(){return l.createElement(m.A,{allProjects:this.props.data.allProjects.edges.map((e=>e.node)),currentProject:this.props.data.project.edges[0].node,mainImage:this.props.data.mainImage},l.createElement(r.W2,null,l.createElement(r.X2,{className:"justify-content-center"},l.createElement(r.JX,{lg:"7"},l.createElement("h4",{className:s.LA},l.createElement("span",{className:s.dE},"The existing dashboard ",""),"lacks detailed visualization",l.createElement("span",{className:s.dE},""," for surgery time accuracy."," ")))),l.createElement(r.X2,{className:"justify-content-center"},l.createElement(r.JX,{lg:"10"},l.createElement("div",{className:s.XJ},l.createElement("h6",{className:s.v8},"Context"),l.createElement("h3",{className:s.WB},"High-Level Planning"),l.createElement("p",null,"Increasing operating room (OR) efficiency is crucial for maximizing hospital revenue. While scheduling too much time leads to missed revenue opportunities, not scheduling enough time incurs additional costs and inefficiencies."),l.createElement("p",null,"The existing dashboard"," ",l.createElement("u",null,"only shows an overall percentage of accurate cases"),". Having visibility into inaccurate scheduled minutes will help operating room directors manage OR capacity more effectively."),l.createElement(r.X2,{className:"justify-content-center"},l.createElement(r.JX,{lg:"10"},l.createElement("div",{className:"text-center"},l.createElement(i.F,{src:this.getImageUrl("existing-dashboard.png"),alt:"The existing dashboard for case length accuracy",className:"img-fluid",showCaption:!0}))))))),l.createElement(r.X2,{className:"justify-content-center"},l.createElement(r.JX,{lg:"7"},l.createElement("h4",{className:s.LA},l.createElement("span",{className:s.dE},"Our users want to know ",""),"“how much time a surgery needs”"))),l.createElement(r.X2,{className:"justify-content-center"},l.createElement(r.JX,{lg:"5",className:"mb-2 mb-lg-0"},l.createElement("div",{className:s.Ph},l.createElement("p",null,l.createElement("b",null,"Operating Room Leadership")),l.createElement("p",null,"Our primary users — they want to know which surgeons tend to schedule under or over time so that they can take appropriate actions"," "))),l.createElement(r.JX,{lg:"5",className:"mb-2 mb-lg-0"},l.createElement("div",{className:s.Ph},l.createElement("p",null,l.createElement("b",null,"Scheduling Staff (Clinic and Hospital)")),l.createElement("p",null,"Our secondary users — they are unlikely to access this dashboard directly, but having this data can help them determine an accurate surgery time."," ")))),l.createElement(r.X2,{className:"justify-content-center mt-4"},l.createElement(r.JX,{lg:"10"},l.createElement("div",{className:s.XJ},l.createElement("h6",{className:s.v8},"Design"),l.createElement("h3",{className:s.WB},"Visualizing The Data"),l.createElement("p",null,"The data team already prepared the data outlining the procedure names, scheduled minutes, and actual minutes. My task was to translate this data set into a visualization for the analytics dashboard."),l.createElement(r.X2,{className:"justify-content-center"},l.createElement(r.JX,{lg:"10"},l.createElement("div",{className:"text-center"},l.createElement(i.F,{src:this.getImageUrl("raw-data.png"),alt:"Example of the dataset",className:"img-fluid",showCaption:!0})))),l.createElement("p",{className:s.OR},l.createElement("b",null,"Exploring chart patterns")),l.createElement("p",{className:"mt-2"},"The existing dashboard visualization includes line charts, vertical and horizontal bar charts, as well as grouped bar charts. I started exploring the visualization using those types of graphs first."),l.createElement("div",{className:s.PK+" mb-4"},l.createElement("p",{className:s.OR},l.createElement("b",null,"Bar and grouped bar charts")),l.createElement("p",null,"While these graphs are simple, they don’t represent negative values well. For this application, users perceive “under-scheduled time” negatively, given its association with insufficient surgery time, whereas “over-scheduled time” is perceived positively as leftover time."),l.createElement(r.X2,{className:"justify-content-between mb-3"},l.createElement(r.JX,{lg:"6"},l.createElement("p",{className:s.bw}," ","✅ Simple and versatile"),l.createElement("p",{className:s.bw},"✅ Good for comparing values (Y",l.createElement("sub",null,"1"),",Y",l.createElement("sub",null,"2"),",...) that belongs in the same category (X",l.createElement("sub",null,"1"),")")),l.createElement(r.JX,{lg:"6"},l.createElement("p",{className:s.bw},"❌ Not represent negative values well"," "),l.createElement("p",{className:s.bw},"❌ Requires lots of space for a large set of data"),l.createElement("p",{className:s.bw},"❌ Difficult to observe overall data trend"))),l.createElement(r.X2,{className:"justify-content-center text-center"},l.createElement(r.JX,{lg:"8"},l.createElement(i.F,{src:this.getImageUrl("bar-1.png"),alt:"Grouped vertical bar charts ",className:"img-fluid",showCaption:!0})),l.createElement(r.JX,{lg:"8"},l.createElement(i.F,{src:this.getImageUrl("bar-2.png"),alt:"Grouped horizontal bar charts",className:"img-fluid",showCaption:!0})),l.createElement(r.JX,{lg:"8"},l.createElement(i.F,{src:this.getImageUrl("bar-3.png"),alt:"Horizontal bar charts in a table",className:"img-fluid",showCaption:!0})))),l.createElement("div",{className:s.PK+" mb-4"},l.createElement("p",{className:s.OR},l.createElement("b",null,"Tornado (Butterfly) chart")),l.createElement("p",null,"This chart can effectively visualize both negative and positive valued data, aligning with user’s mental model of the under and over-scheduled surgery time."," "),l.createElement(r.X2,{className:"justify-content-between mb-3"},l.createElement(r.JX,{lg:"6"},l.createElement("p",{className:s.bw}," ","✅ Easy for a quick glance (overall data trend)"),l.createElement("p",{className:s.bw},"✅ Great visual comparison between positive and negative values")),l.createElement(r.JX,{lg:"6"},l.createElement("p",{className:s.bw}," ","❌ Rely on user's knowledge to interpret the charts"))),l.createElement(r.X2,{className:"justify-content-center text-center"},l.createElement(r.JX,{lg:"8"},l.createElement(i.F,{src:this.getImageUrl("tornado.png"),alt:"Tornado chart illustrating under and over-scheduled time for each surgeon",className:"img-fluid",showCaption:!0}))))))),l.createElement(r.X2,{className:"justify-content-center"},l.createElement(r.JX,{lg:"7"},l.createElement("h4",{className:s.LA},l.createElement("span",{className:s.dE},"With the Tornado chart, users can"," ")," ","quickly identify where to pay attention."))),l.createElement(r.X2,{className:"justify-content-center"},l.createElement(r.JX,{lg:"10"},l.createElement("div",{className:s.XJ},l.createElement("h6",{className:s.v8},"Design"),l.createElement("h3",{className:s.WB},"Final Design "),l.createElement("p",null,"I tested the prototype with OR managers/directors and some surgeons who regularly look at these metrics. The results were very positive as users were excited to have access to this type of information and the visualization helped them interpret the information faster."),l.createElement(r.X2,{className:"justify-content-center"},l.createElement(r.JX,{lg:"10"},l.createElement("div",{className:"text-center"},l.createElement(i.F,{src:this.getImageUrl("analyze-final.gif"),alt:"Designs and Interactions in the Final Design",className:"img-fluid",showCaption:!0})))),l.createElement(r.X2,{className:"justify-content-center"},l.createElement(r.JX,{lg:"12",className:"mb-4"},l.createElement("div",{className:s.PK},l.createElement(r.X2,{className:"justify-content- center"},l.createElement(r.JX,{lg:"6"},l.createElement(i.F,{src:this.getImageUrl("avg-filter.png"),alt:"Average view and total case filter",className:"img-fluid",showCaption:!1})),l.createElement(r.JX,{lg:"6"},l.createElement("p",{className:"mb-0"},l.createElement("b",null,"Average view")),l.createElement("p",{className:"mt-2"},"Having an average view helps users understand the inaccuracy per case.",l.createElement("br",null),'"On average, this surgeon tends to go over time by... "'),l.createElement("p",{className:"mb-0"},l.createElement("b",null,"Filter by total cases")),l.createElement("p",{className:"mt-2"},"Being able to filter by the number of total cases helps reduce noise and allow users to focus on what they care about.",l.createElement("br",null))))))),l.createElement(r.X2,{className:"justify-content-center"},l.createElement(r.JX,{lg:"12",className:"mb-4"},l.createElement("div",{className:s.PK},l.createElement(r.X2,{className:"justify-content- center"},l.createElement(r.JX,{lg:"6"},l.createElement(i.F,{src:this.getImageUrl("export.png"),alt:"Image, PDF, and CSV files",className:"img-fluid",showCaption:!1})),l.createElement(r.JX,{lg:"6"},l.createElement("p",{className:"mb-0"},l.createElement("b",null,"Share and download")),l.createElement("p",{className:"mt-2"},"Users can export, share, or download the report from the dashboard in various formats, including image, PDF, and CSV.")))))),l.createElement(r.X2,{className:"justify-content-center"},l.createElement(r.JX,{lg:"12"},l.createElement("div",{className:s.PK},l.createElement(r.X2,{className:"justify-content- center"},l.createElement(r.JX,{lg:"6"},l.createElement(i.F,{src:this.getImageUrl("case-form.png"),alt:"Integration with case form for scheduling workflow",showCaption:!1,className:"img-fluid"})),l.createElement(r.JX,{lg:"6"},l.createElement("p",{className:"mb-0"},l.createElement("b",null,"Integrating with scheduling workflow ")),l.createElement("p",{className:"mt-2"},"Leveraging case length accuracy data to make a recommendation for a specific procedure when clinic schedulers work on scheduling the surgery.")))))))))))},a.getImageUrl=function(e){return(0,c.dq)("/images/"+this.props.data.project.edges[0].node.imageFolder+"/"+e)},t}(l.Component)},9277:function(e,t,a){a.d(t,{LA:function(){return u},OR:function(){return n},PK:function(){return c},Ph:function(){return i},Q6:function(){return h},Se:function(){return l},WB:function(){return p},XJ:function(){return E},bw:function(){return g},dE:function(){return o},ek:function(){return m},er:function(){return r},ji:function(){return d},v8:function(){return s}});var n="styles-module--almost-black-p--c96b4",l="styles-module--bold--46bb3",s="styles-module--category-text--6ec37",r="styles-module--content-container--eed5e",c="styles-module--content-container-left-align--26d62",i="styles-module--content-container-small--a5c9b",m="styles-module--green--61f8c",o="styles-module--grey-text--cb44d",u="styles-module--highlight-text--c8ebd",d="styles-module--list-left-align--e1d9e",g="styles-module--p-mt-mb-4--9a658",h="styles-module--red--1fe66",E="styles-module--section-container--d5901",p="styles-module--title-text--a550e"}}]);
//# sourceMappingURL=component---src-pages-projects-analytics-dashboard-tsx-d793daea07291a0d611f.js.map