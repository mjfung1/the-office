(this["webpackJsonpmaterial-ui-tut"]=this["webpackJsonpmaterial-ui-tut"]||[]).push([[0],{104:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(12),s=a.n(r),i=(a(104),a(89)),c=a(39),l=a(55),h=a(13),d=a(160),j=a(150),u=a(153),b=a(155),m=a(180),p=a(156),y=a(158),O=a(34),g=a(159),x=a(157),f=a(176),v=a(4),w=Object(j.a)({timeago:{fontSize:"10px"},contact:{fontSize:"12px",fontWeight:"bolder"}});var k=function(e){var t=e.note,a=e.handleDelete,o=w(t);return Object(v.jsx)("div",{children:Object(v.jsxs)(u.a,{elevation:1,children:[Object(v.jsx)(b.a,{avatar:Object(v.jsx)(m.a,{src:"/avatars/".concat(t.person,".jpeg")}),action:Object(v.jsx)(p.a,{onClick:function(){return a(t.id)},children:Object(v.jsx)(x.a,{})}),title:t.title,subheader:Object(v.jsxs)(y.a,{container:!0,children:[Object(v.jsx)(y.a,{item:!0,children:Object(v.jsxs)(O.a,{variant:"p",className:o.contact,children:["@",t.person]})}),Object(v.jsx)(y.a,{item:!0,children:Object(v.jsx)(O.a,{variant:"p",className:o.timeago,children:Object(f.a)(new Date(t.createdAt),new Date,{addSuffix:!0})})})]})}),Object(v.jsx)(g.a,{children:Object(v.jsx)(O.a,{variant:"body2",color:"textSecondary",children:t.details})})]})})},T=a(88);function S(e){var t=e.handleDelete,a=e.notes;return Object(v.jsx)(d.a,{children:Object(v.jsx)(T.a,{breakpointCols:{default:4,1100:3,700:2,500:1},className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:a.map((function(e){return Object(v.jsx)("div",{xm:12,md:6,lg:4,children:Object(v.jsx)(k,{note:e,handleDelete:t})},e.id)}))})})}var I=a(86),N=a.n(I),A=a(175),M=a(161),D=a(162),W=a(181),C=a(164),Z=a(178),B=a(165),F=Object(j.a)({btn:{marginTop:20,marginBottom:20,display:"block"}});function K(e){var t=e.database,a=e.addNote,n=F(),r=Object(h.f)(),s=Object(o.useState)(""),i=Object(c.a)(s,2),l=i[0],j=i[1],u=Object(o.useState)(""),b=Object(c.a)(u,2),m=b[0],p=b[1],y=Object(o.useState)(!1),g=Object(c.a)(y,2),x=g[0],f=g[1],w=Object(o.useState)(!1),k=Object(c.a)(w,2),T=k[0],S=k[1],I=Object(o.useState)("todos"),K=Object(c.a)(I,2),P=K[0],z=K[1],G=new Date;return Object(v.jsxs)(d.a,{children:[Object(v.jsx)(O.a,{variant:"h6",color:"textSecondary",component:"h2",gutterBottom:!0,children:"Create a New Quote"}),Object(v.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),f(!1),S(!1),""===l&&f(!0),""===m&&S(!0),l&&m){var o=t.length+","+P;a({id:o,title:l,details:m,person:P,createdAt:G}),r.push("/")}},autoComplete:"off",noValidate:!0,children:[Object(v.jsx)(A.a,{onChange:function(e){return j(e.target.value)},className:n.btn,variant:"outlined",label:"Quote Title",error:x,fullWidth:!0,required:!0}),Object(v.jsx)(A.a,{onChange:function(e){return p(e.target.value)},className:n.btn,variant:"outlined",label:"Details",error:T,multiline:!0,rows:4,fullWidth:!0,required:!0}),Object(v.jsxs)(M.a,{className:n.btn,children:[Object(v.jsx)(D.a,{children:"Name"}),Object(v.jsxs)(W.a,{value:P,onChange:function(e){return z(e.target.value)},children:[Object(v.jsx)(C.a,{label:"Prison Mike",value:"prisonMike",control:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(C.a,{label:"Michael Scarn",value:"michaelScarn",control:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(C.a,{label:"Dwight Schrute",value:"dwightSchrute",control:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(C.a,{label:"Michael Scott",value:"michaelScott",control:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(C.a,{label:"Stanley Hudson",value:"stanleyHudson",control:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(C.a,{label:"Kevin Malone",value:"kevinMalone",control:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(C.a,{label:"Pam Beesly",value:"pamBeesly",control:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(C.a,{label:"Toby Flenderson",value:"tobyFlenderson",control:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(C.a,{label:"Angela Martin",value:"angelaMartin",control:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(C.a,{label:"Kelly Kapoor",value:"kellyKapoor",control:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(C.a,{label:"Oscar Martinez",value:"oscarMartinez",control:Object(v.jsx)(Z.a,{})}),Object(v.jsx)(C.a,{label:"Gabe",value:"gabeLewis",control:Object(v.jsx)(Z.a,{})})]})]}),Object(v.jsx)(B.a,{variant:"contained",color:"secondary",type:"submit",endIcon:Object(v.jsx)(N.a,{}),children:"Submit"})]})]})}var P=a(87),z=a(173),G=a(66),H=a(65),E=a(179),Q=a(163),L=a(170),Y=a(171),q=a(172),J=a(166),R=a(167),V=a(168),_=a(169),U=a(174),X=Object(j.a)((function(e){return{page:{background:"#f9f9f9",width:"100%",padding:e.spacing(3)},drawer:{width:240},drawerPaper:{width:240},root:{display:"flex"},active:{color:G.a[500]},title:{padding:e.spacing(2)},appbar:{width:"calc(100% - ".concat(240,"px)")},toolbar:e.mixins.toolbar,date:{flexGrow:1},avatar:{marginLeft:e.spacing(2)}}}));var $=function(e){var t=e.children,a=X(),o=Object(h.f)(),n=Object(h.g)(),r=[{text:"Fave Quotes",icon:Object(v.jsx)(J.a,{color:"secondary"}),path:"/"},{text:"Add Fave Quote",icon:Object(v.jsx)(R.a,{color:"secondary"}),path:"/create"}];return Object(v.jsxs)("div",{className:a.root,children:[Object(v.jsx)(V.a,{elevation:0,className:a.appbar,children:Object(v.jsxs)(_.a,{children:[Object(v.jsx)(O.a,{className:a.date,children:Object(U.a)(new Date,"eeee d")}),Object(v.jsx)(O.a,{children:"Mose"}),Object(v.jsx)(m.a,{className:a.avatar,src:"./avatars/mose.jpeg"})]})}),Object(v.jsxs)(E.a,{variant:"permanent",anchor:"left",className:a.drawer,classes:{paper:a.drawerPaper},children:[Object(v.jsx)(O.a,{variant:"h4",className:a.title,children:"the office"}),Object(v.jsx)(Q.a,{children:r.map((function(e){return Object(v.jsxs)(L.a,{onClick:function(){return o.push(e.path)},button:!0,className:n.pathname===e.path?a.active:null,children:[Object(v.jsx)(Y.a,{children:e.icon}),Object(v.jsx)(q.a,{primary:e.text})]},e.text)}))})]}),Object(v.jsxs)("div",{className:a.page,children:[Object(v.jsx)("div",{className:a.toolbar}),t]})]})},ee=Object(P.a)({palette:{primary:G.a,secondary:H.a},typography:{fontFamily:"Kaisei Tokumin",fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:700,fontWeightBold:800}}),te=[{title:"Food in prison",details:"Gruel sandwiches. Gruel omelets. Nothing but gruel. Plus, you can eat your own hair.",person:"prisonMike",createdAt:"2021-09-04T15:25:33.006Z",id:3},{title:"Chilli recipe",details:"At least once a year I like to bring in some of my Kevin's Famous Chili. The trick is to undercook the onions. Everybody is going to get to know each other in the pot. I'm serious about this stuff. I'm up the night before, pressing garlic, and dicing whole tomatoes. I toast my own ancho chiles. It's a recipe passed down from Malones for generations - it's probably the thing I do best.\"",person:"kevinMalone",createdAt:"2021-09-04T12:25:33.006Z",id:4},{title:"The Scarn",details:"You jump to the right and you shake a hand\nThen you jumpy to the left and you shake that hand\nMeet new friends\nTie some yarn\nAnd that\u2019s how you do the Scarn",person:"michaelScarn",createdAt:"2021-09-02T15:25:33.006Z",id:5},{title:"Heroes",details:"No, don\u2019t call me a hero. Do you know who the real heroes are? The guys who wake up every morning and go into their normal jobs and get a distress call from the Commissioner and take off their glasses and change into capes and fly around fighting crime. Those are the real heroes.",person:"dwightSchrute",createdAt:"2021-08-04T15:25:33.006Z",id:6},{title:"Pregnancy",details:"I do not like pregnant women in my workspace. They\u2019re always complaining. I have varicose veins, too. I have swollen ankles. I\u2019m constantly hungry. Do you think my nipples don\u2019t get sore too? Do you think I don\u2019t need to know the fastest way to the hospital?",person:"stanleyHudson",createdAt:"2021-08-04T15:25:33.006Z",id:7},{title:"Thoughts on friends...",details:"I have six roommates, which are better than friends because they have to give you one month's notice before they leave.",person:"tobyFlenderson",createdAt:"2021-09-02T15:25:33.006Z",id:8},{title:"Talking smack",details:"I don\u2019t talk trash, I talk smack. They\u2019re totally different. Trash talk is all hypothetical, like: \u2018Your mom is so fat she can eat the Internet.\u2019 But smack talk is happening like right now, like: \u2018You\u2019re ugly and I know it for a fact \u2019cause I got the evidence right there",person:"kellyKapoor",createdAt:"2021-09-01T15:25:33.006Z",id:9},{title:"Oops!...I Did It Again.",details:"It's Britney b*tch!",person:"michaelScott",createdAt:"2021-09-01T15:25:33.006Z",id:10},{title:"Bros before hoes. Why?",details:"Because your bros are always there for you. They got your back after your ho rips your heart out for no good reason. And you were nothing but great to your ho, and you told her that she was the only ho for you. And that she was better than all the other hoes in the world. And then suddenly... she's not yo' ho no mo'.",person:"michaelScott",createdAt:"2021-09-02T15:25:33.006Z",id:11},{title:"Prison is no joke",details:"The worst thing about prison was the Dementors. They were flying all over the place and they were scary and they\u2019d come down and they\u2019d suck the soul out of your body and it hurt!",person:"prisonMike",createdAt:"2021-09-03T15:25:33.006Z",id:12},{title:"Why is this(job search) so hard?",details:"That's what she said",person:"michaelScott",createdAt:"2021-09-01T15:25:33.006Z",id:13},{title:"What is the most important thing for a company? Is it the cash flow? Is it the inventory?",details:"Nuh-uh. It\u2019s the people. The people. My proudest moment here was not when I increased profits by 17%, or when I cut expenses without losing a single employee. No, no, no, no, no. It was a young Guatamalan guy. First job in the country, barely spoke English. Came to me and said, \u201cMr. Scott, would you be the godfather of my child?\u201d Wow. Wow. Wow. Didn\u2019t work out in the end. We had to let him go. He sucked",person:"michaelScott",createdAt:"2021-08-30T15:25:33.006Z",id:14},{title:"The Dundies!",details:"The Dundies are kind of like a kid's birthday party, and you go, and there's really nothing for you to do there, but the kid's having a really good time, so you're, you're kinda there, that's...that's kinda what it's like.",person:"oscarMartinez",createdAt:"2021-09-04T15:25:33.006Z",id:15}];var ae=function(){var e=Object(o.useState)([]),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(o.useEffect)((function(){n(te)}),[]),Object(v.jsx)(z.a,{theme:ee,children:Object(v.jsx)(l.a,{children:Object(v.jsx)($,{children:Object(v.jsxs)(h.c,{children:[Object(v.jsx)(h.a,{exact:!0,path:"/",children:Object(v.jsx)(S,{handleDelete:function(e){var t=a.filter((function(t){return t.id!==e}));n(t)},notes:a})}),Object(v.jsx)(h.a,{path:"/create",children:Object(v.jsx)(K,{addNote:function(e){n([].concat(Object(i.a)(a),[e]))},database:te})})]})})})})};s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(ae,{})}),document.getElementById("root"))}},[[115,1,2]]]);
//# sourceMappingURL=main.8f22398c.chunk.js.map