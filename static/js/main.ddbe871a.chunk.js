(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a(82)},77:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(40),l=a.n(r),o=a(8),s=a(9),i=a(11),u=a(10),m=a(12),p=a(87),d=a(84),b=a(88),h=a(14),E=a(22),g=a.n(E),f="http://10.0.16.84:8080";function v(){var e=new Date;return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate())}var y=function(e){return function(t){e=Object(h.a)({},e,{created_at:v()}),t(N()),g.a.post("".concat(f,"/blogs"),e).then(function(e){return t({type:"ADD_BLOG",payload:e.data})}).then(function(){return t(O())}).catch(function(e){return console.log(e)})}},N=function(){return{type:"LOADING"}},O=function(){return{type:"DATA_DEFAULT"}},j=a(16),C=a(83),A=a(15),D=a.n(A),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={menuIsActive:!1},a.toggleMenu=function(){a.setState({menuIsActive:!a.state.menuIsActive})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar is-info"},c.a.createElement("div",{className:"navbar-brand"},c.a.createElement(C.a,{className:"navbar-item",to:"/"},"REACT ","<3"," REDUX"),c.a.createElement("button",{className:"navbar-burger burger button is-info",onClick:this.toggleMenu},c.a.createElement("span",{"aria-hidden":"true"}),c.a.createElement("span",{"aria-hidden":"true"}),c.a.createElement("span",{"aria-hidden":"true"}))),c.a.createElement("div",{className:D()("navbar-menu",{"is-active":this.state.menuIsActive})},c.a.createElement("div",{className:"navbar-end"},c.a.createElement(C.a,{className:"navbar-item",to:"/"},"Home"),c.a.createElement(C.a,{className:"navbar-item",to:"/about"},"About")))))}}]),t}(n.Component),w=["January","February","March","April","May","June","July","August","September","October","November","December"],L=function(e){var t=e.id,a=e.content,n=e.author,r=e.date,l=e.category,o=e.deleteEvent,s=e.process;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card-content"},c.a.createElement("div",{className:"content"},a)),c.a.createElement("div",{className:"card-footer"},c.a.createElement("div",{className:"card-footer-item"},c.a.createElement("button",{className:"button is-white"},c.a.createElement("p",{className:"control"},c.a.createElement("i",{className:"fa fa-user"})," "," ",n)),c.a.createElement("button",{className:"button is-white"},c.a.createElement("p",{className:"control"},c.a.createElement("i",{className:"fa fa-calendar"})," "," ",function(e){var t=new Date(e);return"".concat(w[t.getMonth()]," ").concat(t.getDate(),", ").concat(t.getFullYear())}(r))),c.a.createElement("button",{className:"button is-white"},c.a.createElement("p",{className:"control"},c.a.createElement("i",{className:"fa fa-list"})," "," ",l))),c.a.createElement("div",{className:"card-footer-item"},c.a.createElement("button",{className:"button is-info"},c.a.createElement(C.a,{to:"/blog/edit/".concat(t),className:"has-text-white"},c.a.createElement("p",{className:"control"},c.a.createElement("i",{className:"fa fa-pencil"})," "," Edit"))),c.a.createElement("button",{className:D()("button is-danger",{"is-loading":s.loading}),onClick:function(){return o(t)}},c.a.createElement("p",{className:"control"},c.a.createElement("i",{className:"fa fa-times"})," "," Delete")))))},k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={isContentActive:!1},a.toggleContent=function(){return a.setState({isContentActive:!a.state.isContentActive})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.blog,t=e.id,a=e.title,n=e.content,r=e.author,l=e.created_at,o=e.category;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("div",{className:"card-header-title"},a),c.a.createElement("div",{className:"card-header-icon"},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"fa fa-angle-down",onClick:this.toggleContent})))),this.state.isContentActive&&c.a.createElement(L,{id:t,content:n,author:r,date:l,category:o,deleteEvent:this.props.delete,process:this.props.process})))}}]),t}(n.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.blogs.blogs;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"box"},c.a.createElement("h1",{className:"title"},"Blogs"),c.a.createElement(C.a,{className:"button is-primary is-small",to:"/blog/create"},c.a.createElement("p",null,c.a.createElement("i",{className:"fa fa-plus"}),"Blog")),t.map(function(t){return c.a.createElement(k,{key:t.id,blog:t,delete:e.props.delete,process:e.props.process})}))))}}]),t}(n.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},"About Page")))}}]),t}(n.Component),T=(a(75),a(77),a(20)),B=function(e){var t=e.label,a=e.type,n=e.name,r=e.changeEvent,l=e.placeholder,o=e.readOnly,s=e.value;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"field is-horizontal"},c.a.createElement("div",{className:"field-label is-normal"},c.a.createElement("label",{htmlFor:n,className:"label"},t)),c.a.createElement("div",{className:"field-body"},c.a.createElement("div",{className:"field"},c.a.createElement("p",{className:"control"},c.a.createElement("input",{type:a,name:n,className:"input",placeholder:l,readOnly:o,onChange:r,value:s,autoComplete:"off"}))))))};B.defaultProps={type:"text"};var H=B,S=function(e){var t=e.label,a=e.name,n=e.changeEvent,r=e.placeholder,l=e.value;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"field is-horizontal"},c.a.createElement("div",{className:"field-label is-normal"},c.a.createElement("label",{htmlFor:a,className:"label"},t)),c.a.createElement("div",{className:"field-body"},c.a.createElement("div",{className:"field"},c.a.createElement("p",{className:"control"},c.a.createElement("textarea",{name:a,onChange:n,className:"textarea",placeholder:r,value:l}))))))},G=function(e){var t=e.name,a=e.label,n=e.changeEvent,r=e.options,l=e.defaultValue;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"field is-horizontal"},c.a.createElement("div",{className:"field-label is-normal"},c.a.createElement("label",{htmlFor:t,className:"label"},a)),c.a.createElement("div",{className:"field-body"},c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"select is-fullwidth"},c.a.createElement("select",{onChange:n,name:t},c.a.createElement("option",null,l),r.map(function(e,t){return e!==l&&c.a.createElement("option",{key:t,value:e},e)})))))))},R=a(86),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).submitForm=function(e){e.preventDefault(),a.props.add(a.state)},a.onChangeEventHandler=function(e){return a.setState(Object(T.a)({},e.target.name,e.target.value))},a.cancel=function(e){return a.props.history.push("/")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"box"},c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column is-three-fifths is-offset-one-fifth"},c.a.createElement("h2",{className:"title is-2 has-text-centered"},"Add Blog"),c.a.createElement("form",{onSubmit:this.submitForm},c.a.createElement(H,{label:"Title",name:"title",changeEvent:this.onChangeEventHandler,placeholder:"Enter Title..."}),c.a.createElement(H,{label:"Author",name:"author",changeEvent:this.onChangeEventHandler,placeholder:"Enter Author..."}),c.a.createElement(G,{label:"Category",name:"category",changeEvent:this.onChangeEventHandler,options:this.props.options}),c.a.createElement(S,{label:"Content",name:"content",changeEvent:this.onChangeEventHandler,placeholder:"Enter your blog content here..."}),c.a.createElement("div",{className:"buttons is-pulled-right"},c.a.createElement("button",{type:"button",className:"button",onClick:this.cancel},"Cancel"),c.a.createElement("button",{type:"submit",className:D()("button is-primary",{"is-loading":this.props.process.loading})},"Save"))))),this.props.process.success&&c.a.createElement(R.a,{to:"/"})))}}]),t}(n.Component),U=Object(j.b)(function(e){return{blog:e.blogReducer.blog,options:e.blogReducer.categoryOptions,process:e.blogReducer.process}},function(e){return{add:function(t){e(y(t))}}})(I),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={id:"",title:"",author:"",category:"",content:""},a.submitForm=function(e){e.preventDefault(),a.props.update(a.state)},a.onChangeEventHandler=function(e){return a.setState(Object(T.a)({},e.target.name,e.target.value))},a.cancel=function(e){return a.props.history.push("/")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){this.setState(e.blog)}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.show(e)}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.author,n=e.category,r=e.content;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"box"},c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column is-three-fifths is-offset-one-fifth"},c.a.createElement("h2",{className:"title is-2 has-text-centered"},"Edit Blog"),c.a.createElement("form",{onSubmit:this.submitForm},c.a.createElement(H,{label:"Title",name:"title",changeEvent:this.onChangeEventHandler,placeholder:"Enter Title...",value:t||""}),c.a.createElement(H,{label:"Author",name:"author",changeEvent:this.onChangeEventHandler,placeholder:"Enter Author...",value:a||""}),c.a.createElement(G,{label:"Category",name:"category",changeEvent:this.onChangeEventHandler,options:this.props.options,defaultValue:n||""}),c.a.createElement(S,{label:"Content",name:"content",changeEvent:this.onChangeEventHandler,placeholder:"Enter your blog content here...",value:r||""}),c.a.createElement("div",{className:"buttons is-pulled-right"},c.a.createElement("button",{type:"button",className:"button",onClick:this.cancel},"Cancel"),c.a.createElement("button",{type:"submit",className:D()("button is-primary",{"is-loading":this.props.process.loading})},"Update"))))),this.props.process.success&&c.a.createElement(R.a,{to:"/"})))}}]),t}(n.Component),P=Object(j.b)(function(e){return{blog:e.blogReducer.blog,options:e.blogReducer.categoryOptions,process:e.blogReducer.process}},function(e){return{update:function(t){e(function(e){return function(t){t(N()),g.a.put("".concat(f,"/blogs/").concat(e.id),e).then(function(e){return t({type:"UPDATE_BLOG",payload:e.data})}).then(function(){return t(O())}).catch(function(e){return console.log(e)})}}(t))},show:function(t){e(function(e){return function(t){g.a.get("".concat(f,"/blogs/").concat(e)).then(function(e){return t({type:"SHOW_BLOG",payload:e.data})})}}(t))}}})(M),J=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(F,null),c.a.createElement(p.a,null,c.a.createElement(d.a,{exact:!0,path:"/"},c.a.createElement(_,{blogs:this.props.blogs,process:this.props.process,delete:this.props.delete})),c.a.createElement(d.a,{exact:!0,path:"/about",component:x}),c.a.createElement(d.a,{exact:!0,path:"/blog/create",component:U}),c.a.createElement(d.a,{exact:!0,path:"/blog/edit/:id",component:P})))}}]),t}(n.Component),W=Object(b.a)(Object(j.b)(function(e){return{blogs:e.blogReducer,selectedBlog:e.blogReducer.blog,process:e.blogReducer.process}},function(e){return{add:function(t){e(y(t))},delete:function(t){e(function(e){return function(t){t(N()),g.a.delete("".concat(f,"/blogs/").concat(e)).then(function(a){return t(function(e){return{type:"DELETE_BLOG",payload:e}}(e))}).then(function(){return t(O())}).catch(function(e){return console.log(e)})}}(t))}}})(J)),Y=a(17),z=a(43),V=a(85),X=a(46),q={blogs:[],blog:{},categoryOptions:["Food","Travel","Photography","Education","Business","Politics"],process:{loading:!1,success:!1}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA_DEFAULT":return Object(h.a)({},e,{process:{success:!e.process.success}});case"GET_DATA_FULFILLED":return Object(h.a)({},e,{blogs:t.payload});case"SHOW_BLOG_ASYNC":return Object(h.a)({},e,{blog:t.payload});case"LOADING":return Object(h.a)({},e,{process:{loading:!e.process.loading}});case"ADD_BLOG":return Object(h.a)({},e,{blogs:[Object(h.a)({},t.payload)].concat(Object(X.a)(e.blogs)),process:{loading:!e.process.loading,success:!e.process.success}});case"UPDATE_BLOG":return Object(h.a)({},e,{blogs:e.blogs.map(function(e){return e.id===t.payload.id?t.payload:e}),process:{loading:!e.process.loading,success:!e.process.success}});case"DELETE_BLOG":return Object(h.a)({},e,{blogs:e.blogs.filter(function(e){return e.id!==t.payload}),process:{loading:!e.process.loading,success:!e.process.success}});default:return e}},Q=a(44),Z=a(45),$=a(23),ee=a.n($),te=a(32),ae=ee.a.mark(ce),ne=ee.a.mark(re);function ce(e){return ee.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(te.a)({type:"SHOW_BLOG_ASYNC",payload:e.payload});case 2:case"end":return t.stop()}},ae,this)}function re(){return ee.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.b)("SHOW_BLOG",ce);case 2:case"end":return e.stop()}},ne,this)}var le=Object(Z.a)(),oe=Object(Y.e)(Object(Y.c)({blogReducer:K}),{},Object(Y.a)(Object(z.createLogger)(),Q.a,le));le.run(re),oe.dispatch(function(e){g.a.get("".concat(f,"/blogs")).then(function(t){return e({type:"GET_DATA_FULFILLED",payload:t.data})})}),oe.subscribe(function(){}),l.a.render(c.a.createElement(j.a,{store:oe},c.a.createElement(V.a,null,c.a.createElement(W,null))),document.getElementById("root"))}},[[47,2,1]]]);
//# sourceMappingURL=main.ddbe871a.chunk.js.map