(this.webpackJsonpwhatsapp=this.webpackJsonpwhatsapp||[]).push([[0],{58:function(e,a,t){e.exports=t(84)},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},76:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(24),l=t.n(r),o=(t(63),t(10)),s=(t(64),t(65),t(98)),m=t(96),i=t(35),u=t.n(i),d=t(36),p=t.n(d),h=t(37),E=t.n(h),f=t(50),v=t.n(f),b=t(26),g=t.n(b),_=g.a.initializeApp({apiKey:"AIzaSyAbEQvVVs4cQwvHELBYNkCfmMPcY_o3o3I",authDomain:"whatsappmern-e8c69.firebaseapp.com",databaseURL:"https://whatsappmern-e8c69.firebaseio.com",projectId:"whatsappmern-e8c69",storageBucket:"whatsappmern-e8c69.appspot.com",messagingSenderId:"390465313266",appId:"1:390465313266:web:819f7528a895e51908336b"}).firestore(),j=g.a.auth(),O=new g.a.auth.GoogleAuthProvider,N=_,w=(t(76),t(27));var S=function(e){var a,t=e.id,r=e.name,l=e.addNewChat,m=Object(n.useState)(""),i=Object(o.a)(m,2),u=i[0],d=i[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),E=h[0],f=h[1];return Object(n.useEffect)((function(){t&&N.collection("rooms").doc(t).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return f(e.docs.map((function(e){return e.data()})))}))}),[t]),Object(n.useEffect)((function(){d(Math.floor(5e3*Math.random()))}),[]),l?c.a.createElement("div",{onClick:function(){var e=prompt("Please enter name for chat room");e&&N.collection("rooms").add({name:e})},className:"sidebarChat"},c.a.createElement("h2",null,"Add new chat")):c.a.createElement(w.b,{to:"/rooms/".concat(t)},c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(u,".svg")}),c.a.createElement("div",{className:" sidebarChar__info"},c.a.createElement("h2",null," ",r," "),c.a.createElement("p",null,null===(a=E[0])||void 0===a?void 0:a.message))))},y=Object(n.createContext)(),C=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(y.Provider,{value:Object(n.useReducer)(a,t)},r)},I=function(){return Object(n.useContext)(y)};var k=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=I(),i=Object(o.a)(l,1)[0].user;return Object(n.useEffect)((function(){var e=N.collection("rooms").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(s.a,{src:null===i||void 0===i?void 0:i.photoURL}),c.a.createElement("div",{className:"sidebar__headerRight"},c.a.createElement(m.a,null,c.a.createElement(u.a,null)),c.a.createElement(m.a,null,c.a.createElement(p.a,null)),c.a.createElement(m.a,null,c.a.createElement(E.a,null)))),c.a.createElement("div",{className:"sidebar__search"},c.a.createElement("div",{className:"sidebar__searchContainer"},c.a.createElement(v.a,null),c.a.createElement("input",{placeholder:"Search or start new chats",type:"text"}))),c.a.createElement("div",{className:"sidebar__chats"},c.a.createElement(S,{addNewChat:!0}),t.map((function(e){return c.a.createElement(S,{key:e.id,id:e.id,name:e.data.name})}))))},A=(t(82),t(51)),P=t.n(A),x=t(52),B=t.n(x),D=t(5);var M=function(){var e,a,t=Object(n.useState)(""),r=Object(o.a)(t,2),l=r[0],i=r[1],d=Object(n.useState)(""),h=Object(o.a)(d,2),f=h[0],v=h[1],b=Object(D.f)().roomId,_=Object(n.useState)(""),j=Object(o.a)(_,2),O=j[0],w=j[1],S=Object(n.useState)([]),y=Object(o.a)(S,2),C=y[0],k=y[1],A=I(),x=Object(o.a)(A,1)[0].user;return Object(n.useEffect)((function(){b&&(N.collection("rooms").doc(b).onSnapshot((function(e){return w(e.data().name)})),N.collection("rooms").doc(b).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return k(e.docs.map((function(e){return e.data()})))})))}),[b]),Object(n.useEffect)((function(){i(Math.floor(5e3*Math.random()))}),[b]),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement(s.a,{src:"https://avatars.dicebear.com/api/human/".concat(l,".svg")}),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("h3",null," ",O),c.a.createElement("p",null,"last seen "," ",new Date(null===(e=C[C.length-1])||void 0===e||null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString())),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(m.a,null,c.a.createElement(u.a,null)),c.a.createElement(m.a,null,c.a.createElement(p.a,null)),c.a.createElement(m.a,null,c.a.createElement(E.a,null)))),c.a.createElement("div",{className:"chat__body"},C.map((function(e){var a;return c.a.createElement("p",{className:"chat__message ".concat(e.name===x.displayName&&"chat__reciever")},c.a.createElement("span",{className:"chat__name"},e.name),e.message,c.a.createElement("span",{className:"chat__timestamp"},new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString()))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement(P.a,null),c.a.createElement("form",null,c.a.createElement("input",{type:"text",value:f,onChange:function(e){return v(e.target.value)},placeholder:"type a message"}),c.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),N.collection("rooms").doc(b).collection("messages").add({message:f,name:x.displayName,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),v("")}},"Send a message")),c.a.createElement(B.a,null)))},R=t(53),T=t(97),W=(t(83),t(41)),U="SET_USER",G=function(e,a){switch(console.log(a),a.type){case U:return Object(W.a)(Object(W.a)({},e),{},{user:a.user});default:return e}};var L=function(){var e=I(),a=Object(o.a)(e,2);Object(R.a)(a[0]);var t=a[1];return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",alt:""}),c.a.createElement("div",{className:"login__text"},c.a.createElement("h1",null," SIGN IN TO WHATSAPP")),c.a.createElement(T.a,{onClick:function(){j.signInWithPopup(O).then((function(e){t({type:U,user:e.user})})).catch((function(e){return alert(e.message)}))}},"Sign In With Google")))};var V=function(){var e=I(),a=Object(o.a)(e,1)[0].user;return c.a.createElement("div",{className:"app"},a?c.a.createElement("div",{className:"app__body"},c.a.createElement(w.a,null,c.a.createElement(D.c,null,c.a.createElement(D.a,{path:"/rooms/:roomId"},c.a.createElement(k,null),c.a.createElement(M,null)),c.a.createElement(D.a,{path:"/"},c.a.createElement(k,null))))):c.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,{initialState:{user:null},reducer:G},c.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.0ff3b93b.chunk.js.map