(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{189:function(e,s){},192:function(e,s,t){},193:function(e,s,t){"use strict";t.r(s);var n=t(1),a=t.n(n),i=t(68),c=t.n(i),r=(t(77),t(72)),o=t(4),l=t(5),u=t(7),h=t(6),j=t(69),p=t.n(j),d=t(0),m=function(e){Object(u.a)(t,e);var s=Object(h.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("li",{className:this.props.user?"message right appeared":"message left appeared",children:[Object(d.jsx)("div",{className:"avatar"}),Object(d.jsx)("div",{className:"text_wrapper",children:Object(d.jsx)("div",{className:"text",children:this.props.message})})]})}}]),t}(a.a.Component),b=function(e){Object(u.a)(t,e);var s=Object(h.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return Object(d.jsx)("ul",{className:"messages",children:this.props.messages.map((function(s){return Object(d.jsx)(m,{user:s.userId===e.props.user,message:s.message},s.id)}))})}}]),t}(a.a.Component),g=function(e){Object(u.a)(t,e);var s=Object(h.a)(t);function t(){return Object(o.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"checkEnter",value:function(e){console.log(e),13===e.keyCode&&this.props.sendMessage(this.refs.messageInput)}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"",children:Object(d.jsxs)("div",{className:"bottom_wrapper",children:[Object(d.jsx)("div",{className:"message_input_wrapper",children:Object(d.jsx)("input",{ref:"messageInput",type:"text",className:"message_input",placeholder:"Type your message here",onKeyUp:this.checkEnter.bind(this)})}),Object(d.jsxs)("div",{className:"send_message",onClick:function(){return e.props.sendMessage(e.refs.messageInput)},ref:"inputMessage",children:[Object(d.jsx)("div",{className:"icon"}),Object(d.jsx)("div",{className:"text",children:"Send"})]})]})})}}]),t}(a.a.Component),O=t(70),v=t.n(O),f=t(71),x=t.n(f),k=(t(192),function(e){Object(u.a)(t,e);var s=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=s.call(this,e)).state={messages:[],user:{id:"",name:""},userOnline:[]},n.socket=null,n}return Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;console.log(this.state.user),this.socket=x()("https://servernb2.herokuapp.com/"),this.socket.on("newMessage",(function(s){e.newMessage(s)})),this.socket.on("loginFail",(function(e){alert("T\xean \u0111\xe3 c\xf3 ng\u01b0\u1eddi s\u1eed d\u1ee5ng")})),this.socket.on("loginSuccess",(function(s){e.setState({user:{id:e.socket.id,name:s}})})),this.socket.on("updateUesrList",(function(s){e.setState({userOnline:s})}))}},{key:"newMessage",value:function(e){console.log(e);var s=this.state.messages,t=v()(s,"id"),n=Math.max.apply(Math,Object(r.a)(t));s.push({id:n+1,userId:e.user.id,message:e.data,userName:e.user.name});var a=p()(".messages");a[0].scrollHeight-a[0].scrollTop===a[0].clientHeight?(this.setState({messages:s}),a.animate({scrollTop:a.prop("scrollHeight")},300)):(this.setState({messages:s}),e.id===this.state.user&&a.animate({scrollTop:a.prop("scrollHeight")},300))}},{key:"sendnewMessage",value:function(e){e.value&&(this.socket.emit("newMessage",{data:e.value,user:this.state.user}),e.value="")}},{key:"login",value:function(){this.socket.emit("login",this.refs.name.value)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app__content",children:[Object(d.jsx)("h1",{children:"chat box"}),this.state.user.id&&this.state.user.name?Object(d.jsxs)("div",{className:"chat_window",children:[Object(d.jsx)("div",{className:"menu",children:Object(d.jsxs)("ul",{className:"user",children:[Object(d.jsx)("span",{className:"user-name",children:this.state.user.name}),Object(d.jsx)("p",{children:"Online"}),this.state.userOnline.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("span",{children:e.name})},e.id)}))]})}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)(b,{user:this.state.user,messages:this.state.messages,typing:this.state.typing}),Object(d.jsx)(g,{sendMessage:this.sendnewMessage.bind(this)})]})]}):Object(d.jsxs)("div",{className:"login_form",children:[Object(d.jsx)("input",{type:"text",name:"name",ref:"name"}),Object(d.jsx)("input",{type:"button",name:"",value:"Login",onClick:this.login.bind(this)})]})]})}}]),t}(a.a.Component)),y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,194)).then((function(s){var t=s.getCLS,n=s.getFID,a=s.getFCP,i=s.getLCP,c=s.getTTFB;t(e),n(e),a(e),i(e),c(e)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),y()},77:function(e,s,t){}},[[193,1,2]]]);
//# sourceMappingURL=main.e0bdbe66.chunk.js.map