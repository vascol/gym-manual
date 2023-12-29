"use strict";(self.webpackChunkgym_manual=self.webpackChunkgym_manual||[]).push([[312],{126:function(s,e,t){t.r(e),t.d(e,{default:function(){return v}});var i=t(165),r=t(861),l=t(885),n=t(388),a=t(791),c=t(470),d=t(87),o=t(804),x=t(184),h=function(s){var e=s.isOpen,t=s.setOpen,i=s.children;return(0,x.jsx)("div",{className:"overlay animated".concat(e?"show":""),children:(0,x.jsxs)("div",{className:"modal",children:[(0,x.jsxs)("svg",{onClick:function(){return t(!1)},height:"200",viewBox:"0 0 200 200",width:"200",children:[(0,x.jsx)("title",{}),(0,x.jsx)("path",{d:"M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"})]}),i]})})},j=function(s){var e=s.title,t=s.variants,i=s.onClickVariant,r=(s.step,s.percentage);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"progress",children:(0,x.jsx)("div",{style:{width:"".concat(r,"%")},className:"progress__inner"})}),(0,x.jsx)("h1",{className:"game_title",children:e}),(0,x.jsx)("ul",{children:t.map((function(s,e){return(0,x.jsx)("li",{onClick:function(){return i(e)},children:s},s)}))})]})},m=t.p+"static/media/quizz.79ebb752cefd2c4fc407.png",p=function(s){var e=s.correct,t=s.questions;return(0,x.jsxs)("div",{className:"result",children:[(0,x.jsx)("img",{src:m,alt:"img"}),(0,x.jsxs)("h2",{children:["\u0423 \u0432\u0430\u0441 ",(0,x.jsx)("span",{children:e})," \u0456\u0437 ",(0,x.jsx)("span",{children:t.length})," \u043e\u0437\u043d\u0430\u043a \u043f\u0435\u0440\u0435\u0442\u0440\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u043e\u0441\u0442\u0456"]})]})},u=[{title:"\u0427\u0438 \u0432\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u0435 \u0432\u0438 \u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0443 \u0432\u0442\u043e\u043c\u043b\u0435\u043d\u0456\u0441\u0442\u044c?",variants:["\u0422\u0430\u043a","\u041d\u0456"],correct:0},{title:"\u0423 \u0432\u0430\u0441 \u0454 \u0432\u0442\u0440\u0430\u0442\u0430 \u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0430\u0446\u0456\u0457?",variants:["\u0422\u0430\u043a","\u041d\u0456"],correct:0},{title:"\u0410\u043f\u0430\u0442\u0456\u044f?",variants:["\u0422\u0430\u043a","\u041d\u0456"],correct:0},{title:"\u0411\u0435\u0437\u0441\u043e\u043d\u043d\u044f \u0447\u0438 \u043d\u0435\u0441\u043f\u043e\u043a\u0456\u0439\u043d\u0438\u0439 \u0441\u043e\u043d?",variants:["\u0422\u0430\u043a","\u041d\u0456"],correct:0},{title:"\u0414\u0440\u0430\u0442\u0456\u0432\u043b\u0438\u0432\u0456\u0441\u0442\u044c?",variants:["\u0422\u0430\u043a","\u041d\u0456"],correct:0},{title:"\u0417\u043d\u0438\u0436\u0435\u043d\u043d\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0456?",variants:["\u0422\u0430\u043a","\u041d\u0456"],correct:0},{title:"\u0417\u0431\u0456\u043b\u044c\u0448\u0435\u043d\u043d\u044f \u0447\u0430\u0441\u0443 \u0432\u0456\u0434\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0456\u0441\u043b\u044f \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u043d\u043d\u044f?",variants:["\u0422\u0430\u043a","\u041d\u0456"],correct:0},{title:"\u0417\u0431\u0456\u043b\u044c\u0448\u0435\u043d\u0438\u0439 \u0440\u0430\u043d\u043a\u043e\u0432\u0438\u0439 \u043f\u0443\u043b\u044c\u0441?",variants:["\u0422\u0430\u043a","\u041d\u0456"],correct:0},{title:"\u0425\u0440\u043e\u043d\u0456\u0447\u043d\u0456 \u043c\u2019\u044f\u0437\u043e\u0432\u0456 \u0431\u043e\u043b\u0456?",variants:["\u0422\u0430\u043a","\u041d\u0456"],correct:0},{title:"\u0412\u0442\u0440\u0430\u0442\u0430 \u0432\u0430\u0433\u0438?",variants:["\u0422\u0430\u043a","\u041d\u0456"],correct:0},{title:"\u0427\u0430\u0441\u0442\u0456\u0448\u0435 \u0445\u0432\u043e\u0440\u0456\u0454\u0442\u0435?",variants:["\u0422\u0430\u043a","\u041d\u0456"],correct:0},{title:"\u0412\u0442\u0440\u0430\u0442\u0430 \u0430\u043f\u0435\u0442\u0438\u0442\u0443?",variants:["\u0422\u0430\u043a","\u041d\u0456"],correct:0},{title:"\u0417\u043d\u0438\u0436\u0435\u043d\u043d\u044f \u0431\u0430\u0436\u0430\u043d\u043d\u044f \u0442\u0440\u0435\u043d\u0443\u0432\u0430\u0442\u0438\u0441\u044f?",variants:["\u0422\u0430\u043a","\u041d\u0456"],correct:0}],g=function(){var s=a.useState(0),e=(0,l.Z)(s,2),t=e[0],i=e[1],r=a.useState(0),n=(0,l.Z)(r,2),c=n[0],d=n[1],o=u[t],h=Math.round(t/u.length*100);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"quiz",children:t!==u.length?(0,x.jsx)(j,{title:o.title,variants:o.variants,onClickVariant:function(s){i(t+1),s===o.correct&&d(c+1)},step:t,percentage:h}):(0,x.jsx)(p,{correct:c,questions:u})})})},_={wrapper1:"FullPost_wrapper1__+nC45",wrapper2:"FullPost_wrapper2__HVhB1",wrapper3:"FullPost_wrapper3__WyjuJ",wrapper4:"FullPost_wrapper4__-AVPF",postText:"FullPost_postText__RtUnK",btn_wrapper:"FullPost_btn_wrapper__oaiM7",food_header:"FullPost_food_header__UhBDB",food_content:"FullPost_food_content__m3FJ3",food_info:"FullPost_food_info__YvLaq",food_info__list:"FullPost_food_info__list__K20S2",food_text:"FullPost_food_text__GsIyc",recomendation_wrapper:"FullPost_recomendation_wrapper__EHjtR",wrapper_modalBtn:"FullPost_wrapper_modalBtn__HwHnS"},v=function(){var s=a.useState(!1),e=(0,l.Z)(s,2),t=e[0],j=e[1],m=a.useState(),p=(0,l.Z)(m,2),u=p[0],v=p[1],f=(0,c.UO)().id,N=(0,c.s0)();return a.useEffect((function(){function s(){return(s=(0,r.Z)((0,i.Z)().mark((function s(){var e,t;return(0,i.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return"63948ccc4df9248eada596f8",s.prev=1,s.next=4,n.Z.get("https://".concat("63948ccc4df9248eada596f8",".mockapi.io/trainers/")+f);case 4:e=s.sent,t=e.data,v(t),s.next=13;break;case 9:s.prev=9,s.t0=s.catch(1),alert("\u0422\u0430\u043a\u043e\u0433\u043e \u043f\u043e\u0441\u0442\u0430 \u043d\u0435\u043c\u0430\u0454!"),N("/");case 13:case"end":return s.stop()}}),s,null,[[1,9]])})))).apply(this,arguments)}window.scrollTo(0,0),function(){s.apply(this,arguments)}()}),[]),u?(0,x.jsxs)(x.Fragment,{children:[1===u.category&&(0,x.jsxs)("div",{className:"container",children:[(0,x.jsxs)("div",{className:_.food_wrapper,children:[(0,x.jsxs)("div",{className:_.food_header,children:[(0,x.jsx)("img",{src:u.imageUrl,alt:"img"}),(0,x.jsxs)("div",{className:_.food_header__top,children:[(0,x.jsx)("h2",{children:u.name}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("h3",{children:"\u0425\u0430\u0440\u0447\u043e\u0432\u0430 \u0446\u0456\u043d\u043d\u0456\u0441\u0442\u044c \u043d\u0430 100\u0433:"}),(0,x.jsx)("li",{style:{fontWeight:700,color:"#1e4976"},children:u.list[0]}),(0,x.jsx)("li",{style:{color:"#388e3c",fontWeight:700},children:u.list[1]}),(0,x.jsx)("li",{style:{color:"blue",fontWeight:700},children:u.list[2]}),(0,x.jsx)("li",{style:{color:"red",fontWeight:700},children:u.list[3]}),(0,x.jsx)("li",{children:(0,x.jsx)("i",{children:u.list[4]})}),(0,x.jsx)("li",{children:(0,x.jsx)("i",{children:u.list[5]})}),(0,x.jsx)("li",{children:(0,x.jsx)("i",{children:u.list[6]})}),(0,x.jsx)("li",{children:(0,x.jsx)("i",{children:u.list[7]})})]})]})]}),(0,x.jsxs)("div",{className:_.food_content,children:[(0,x.jsxs)("div",{className:_.food_info,children:[(0,x.jsxs)("div",{className:_.food_info__list,children:[(0,x.jsx)("h3",{children:"\u041c\u0456\u0441\u0442\u0438\u0442\u044c \u0432\u0456\u0442\u0430\u043c\u0456\u043d\u0438:"}),(0,x.jsx)("ul",{children:u.listVitamins.map((function(s,e){return(0,x.jsx)("li",{children:s},e)}))})]}),(0,x.jsxs)("div",{className:_.food_info__list,children:[(0,x.jsx)("h3",{children:"\u041c\u0456\u0441\u0442\u0438\u0442\u044c \u043c\u0456\u043d\u0435\u0440\u0430\u043b\u0438:"}),(0,x.jsx)("ul",{children:u.listMinerals.map((function(s,e){return(0,x.jsx)("li",{children:s},e)}))})]})]}),(0,x.jsxs)("div",{className:_.food_text,children:[(0,x.jsx)("h3",{children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435:"}),u.textFood.map((function(s,e){return(0,x.jsx)("p",{children:s},e)}))]})]})]}),(0,x.jsx)(o.Z,{id:u.id,name:u.name,imageUrl:u.imageUrl}),(0,x.jsx)("div",{className:_.btn_wrapper,children:(0,x.jsx)(d.rU,{to:"/gym-manual/",children:(0,x.jsx)("button",{className:"button button--outline button--add",children:(0,x.jsx)("span",{children:"\u041d\u0430\u0437\u0430\u0434"})})})})]}),3===u.category&&(0,x.jsxs)("div",{className:"container",children:[(0,x.jsxs)("div",{className:_.recomendation_wrapper,children:[(0,x.jsx)("img",{src:u.imageUrl}),(0,x.jsxs)("p",{children:[(0,x.jsxs)("span",{children:[" ",u.list[0]]}),u.text]}),(0,x.jsxs)("div",{className:_.wrapper_modalBtn,children:[(0,x.jsx)("button",{className:"open-modal-btn",onClick:function(){return j(!0)},children:"\u2728 \u041f\u0420\u041e\u0419\u0422\u0418 \u0422\u0415\u0421\u0422 \u041d\u0410 \u041f\u0415\u0420\u0415\u0422\u0420\u0415\u041d\u041e\u0412\u0410\u041d\u0406\u0421\u0422\u042c"}),t&&(0,x.jsx)(h,{isOpen:t,setOpen:j,children:(0,x.jsx)(g,{})})]}),(0,x.jsx)("p",{children:u.text2}),(0,x.jsx)("p",{children:u.text3}),(0,x.jsx)("p",{children:u.text4}),(0,x.jsx)("p",{children:u.text5}),(0,x.jsx)("p",{children:u.text6}),(0,x.jsx)("p",{children:u.text7}),(0,x.jsxs)("p",{children:[(0,x.jsxs)("span",{children:[u.list[1]," "]}),u.text8]})]}),(0,x.jsx)(o.Z,{id:u.id,name:u.name,imageUrl:u.imageUrl}),(0,x.jsx)("div",{className:_.btn_wrapper,children:(0,x.jsx)(d.rU,{to:"/gym-manual/",children:(0,x.jsx)("button",{className:"button button--outline button--add",children:(0,x.jsx)("span",{children:"\u041d\u0430\u0437\u0430\u0434"})})})})]}),2===u.category&&(0,x.jsxs)("div",{className:"container",children:[(0,x.jsxs)("div",{className:_.wrapper1,children:[(0,x.jsxs)("div",{className:_.postText,children:[(0,x.jsx)("h2",{children:u.name}),(0,x.jsxs)("p",{children:[(0,x.jsxs)("span",{children:[u.list[0]," "]}),u.text]}),(0,x.jsx)("img",{src:u.imageUrl1,alt:"img"})]}),(0,x.jsxs)("div",{className:_.postText,children:[(0,x.jsxs)("p",{children:[(0,x.jsxs)("span",{children:[u.list[1]," "]}),u.text2]}),(0,x.jsx)("img",{src:u.imageUrl2,alt:"img"})]}),(0,x.jsxs)("div",{className:_.postText,children:[(0,x.jsxs)("p",{children:[(0,x.jsxs)("span",{children:[u.list[2]," "]}),u.text3]}),(0,x.jsx)("img",{src:u.imageUrl3,alt:"img"})]}),(0,x.jsxs)("div",{className:_.postText,children:[(0,x.jsxs)("p",{children:[(0,x.jsxs)("span",{children:[u.list[3]," "]}),u.text4]}),(0,x.jsx)("img",{src:u.imageUrl4,alt:"img"})]}),(0,x.jsxs)("div",{className:_.postText,children:[(0,x.jsxs)("p",{children:[(0,x.jsxs)("span",{children:[u.list[4]," "]}),u.text5]}),(0,x.jsx)("img",{src:u.imageUrl5,alt:"img"})]}),(0,x.jsxs)("div",{className:_.postText,children:[(0,x.jsxs)("p",{children:[(0,x.jsxs)("span",{children:[u.list[5]," "]}),u.text6]}),u.imageUrl6?(0,x.jsx)("img",{src:u.imageUrl6,alt:"img"}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("img",{src:u.imageUrlARRAY1[0],alt:"img"}),(0,x.jsx)("img",{src:u.imageUrlARRAY1[1],alt:"img"})]})]}),u.list[6]&&(0,x.jsxs)("div",{className:_.postText,children:[(0,x.jsxs)("p",{children:[(0,x.jsxs)("span",{children:[u.list[6]," "]}),u.text7]}),(0,x.jsx)("img",{src:u.imageUrl7,alt:"img"})]}),u.list[7]&&(0,x.jsxs)("div",{className:_.postText,children:[(0,x.jsxs)("p",{children:[(0,x.jsxs)("span",{children:[u.list[7]," "]}),u.text8]}),(0,x.jsx)("img",{src:u.imageUrl8,alt:"img"})]}),u.list[8]&&(0,x.jsxs)("div",{className:_.postText,children:[(0,x.jsxs)("p",{children:[(0,x.jsxs)("span",{children:[u.list[8]," "]}),u.text9]}),(0,x.jsx)("img",{src:u.imageUrl9,alt:"img"})]}),u.list[9]&&(0,x.jsxs)("div",{className:_.postText,children:[(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{children:u.list[9]}),u.text10]}),u.imageUrl10?(0,x.jsx)("img",{src:u.imageUrl10,alt:"img"}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("img",{src:u.imageUrlARRAY2[0],alt:"img"}),(0,x.jsx)("img",{src:u.imageUrlARRAY2[1],alt:"img"})]})]})]}),(0,x.jsx)(o.Z,{id:u.id,name:u.name,imageUrl:u.imageUrl}),(0,x.jsx)("div",{className:_.btn_wrapper,children:(0,x.jsx)(d.rU,{to:"/gym-manual/",children:(0,x.jsx)("button",{className:"button button--outline button--add",children:(0,x.jsx)("span",{children:"\u041d\u0430\u0437\u0430\u0434"})})})})]})]}):(0,x.jsx)("h1",{className:"preloader",children:"Loading..."})}}}]);
//# sourceMappingURL=FullPost.705bd757.chunk.js.map