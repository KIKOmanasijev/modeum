(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),o=a.n(l),c=(a(73),a(67)),i=a(6),s=a(7),m=a(10),u=a(8),p=a(11),h=(a(74),a(47),a(17)),d=a(21),g=a(109),E=a(121),b=a(110),f=a(111),v=a(112),y=a(113),O=a(114),C=a(115),A=a(116),j=a(117),N=a(9),I=a(28),w=a.n(I),S=function(){return{type:"CLEAR_ERRORS"}},k=a(15),T=a.n(k),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,fullName:"",username:"",password:"",msg:null},a.toggle=function(){a.props.clearErrors(),a.setState({modal:!a.state.modal})},a.onChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.fullName,r=t.username,l=t.password,o={fullName:n,username:r,password:l};r.length<5?T.a.fire({icon:"warning",title:"Username should be greater than 5 characters",showConfirmButton:!1,timer:1500}):l.length<8?T.a.fire({icon:"warning",title:"Password should contain more than 8 characters",showConfirmButton:!1,timer:1500}):n.length<2?T.a.fire({icon:"warning",title:"Full name should contain more than 2 characters",showConfirmButton:!1,timer:1500}):a.props.register(o)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.error,n=t.isAuth;a!==e.error&&("REGISTER_FAIL"===a.id?this.setState({msg:a.msg.msg}):this.setState({msg:null})),this.state.modal&&n&&this.toggle()}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{className:"mr-2",onClick:this.toggle,href:"#"},"Register"),r.a.createElement(E.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(b.a,{toggle:this.toggle},"Register"),r.a.createElement(f.a,null,this.state.msg?r.a.createElement(v.a,{color:"danger"},this.state.msg):null,r.a.createElement(y.a,{onSubmit:this.onSubmit},r.a.createElement(O.a,null,r.a.createElement(C.a,{for:"name"},"Name"),r.a.createElement(A.a,{type:"text",name:"fullName",id:"fullName",placeholder:"Full Name",className:"mb-3",onChange:this.onChange}),r.a.createElement(C.a,{for:"username"},"Username"),r.a.createElement(A.a,{type:"text",name:"username",id:"username",placeholder:"Username",className:"mb-3",onChange:this.onChange}),r.a.createElement(C.a,{for:"password"},"Password"),r.a.createElement(A.a,{type:"password",name:"password",id:"password",placeholder:"Password",className:"mb-3",onChange:this.onChange}),r.a.createElement(j.a,{color:"dark",style:{marginTop:"2rem"},block:!0},"Register"))))))}}]),t}(n.Component),L=Object(N.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,error:e.error}}),{register:function(e){var t=e.fullName,a=e.username,n=e.password;return function(e){var r=JSON.stringify({fullName:t,username:a,password:n});w.a.post("http://localhost:8080/api/authors",r,{headers:{"Content-Type":"application/json"}}).then((function(t){e({type:"REGISTER_SUCCESS",payload:t.data})})).catch((function(t){e({type:"REGISTER_FAIL"})}))}},clearErrors:S})(R),U=a(26),_=a(60),B=a(19),G={articles:[{id:1,title:"initial",content:"initial"}],singleArticle:{}},D=a(61),F=a.n(D),W={token:localStorage.getItem("token"),isAuth:!1,isLoading:!1,user:null},x={msg:{},status:null,id:null},P=Object(U.combineReducers)({articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARTICLES":return Object(B.a)({},e,{articles:t.payload.reverse()});case"GET_ARTICLE":return Object(B.a)({},e,{singleArticle:t.payload});case"GET_ARTICLES_BY_AUTHOR":return Object(B.a)({},e,{articles:t.payload.reverse()});case"EDIT_ARTICLE":return Object(B.a)({},e,{},t.payload);case"DELETE_ARTICLE":return Object(B.a)({},e);case"WRITE_COMMENT":return Object(B.a)({},e,{singleArticle:t.payload});case"GET_ARTICLES_BY_CATEGORY":return Object(B.a)({},e,{articles:t.payload});default:return e}},authors:F.a,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOADING":return Object(B.a)({},e,{isLoading:!0});case"USER_LOADED":return Object(B.a)({},e,{isAuth:!0,isLoading:!1,user:t.payload});case"LOGIN_SUCCESS":case"REGISTER_SUCCESS":return localStorage.setItem("token",t.payload.token),localStorage.setItem("user",JSON.stringify(t.payload)),Object(B.a)({},e,{isAuth:!0,isLoading:!1,token:t.payload.token,user:t.payload});case"AUTH_ERROR":case"LOGIN_ERROR":case"REGISTER_FAIL":case"LOGOUT_SUCCESS":return localStorage.removeItem("token"),localStorage.removeItem("user"),Object(B.a)({},e,{token:null,user:null,isAuth:!1,isLoading:!1});case"LOGIN_WITH_STORAGE":return{isAuth:!0,token:t.payload.token,isLoading:!1,user:t.payload};default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return{msg:t.payload.msg,status:t.payload.status,id:t.payload.id};case"CLEAR_ERRORS":return{msg:{},state:null,id:null};default:return e}}}),H=a(62),J=[_.a],M=Object(U.createStore)(P,{},Object(H.composeWithDevTools)(U.applyMiddleware.apply(void 0,J))),Y=M.getState().auth.token,V={"Access-Control-Allow-Origin":"*","Content-Type":"application/json"};Y&&(V.Authorization="Bearer ".concat(Y));var z=w.a.create({baseURL:"http://localhost:8080",headers:V}),X={fetchArticles:function(){return z.get("/api/articles")},fetchArticle:function(e){return z.get("/api/articles/".concat(e))},login:function(e){return z.post("/api/auth",e)},incViews:function(e){z.post("/api/incViews/".concat(e))},getArticlesByAuthor:function(e){var t=localStorage.getItem("token");if(t){var a={headers:{Authorization:"Bearer ".concat(t)}};return z.get("/api/articlesByAuthor/".concat(e),a)}return z.get("/api/articlesByAuthor/".concat(e))},saveArticle:function(e,t){return z.post("/api/save/".concat(e),t)},deleteArticle:function(e){return z.delete("/api/articles/".concat(e))},createArticle:function(e){return z.post("/api/articles",e)},postComment:function(e){var t={params:{postId:e.postId,authorId:e.authorId,content:e.content}};return z.post("/api/comment",e,t)},getArticlesByCategory:function(e){return z.get("/api/category/".concat(e))}},$=function(){return function(e){return X.fetchArticles().then((function(t){e({type:"GET_ARTICLES",payload:t.data})}))}},q=function(e){return function(t){return X.fetchArticle(e).then((function(e){t({type:"GET_ARTICLE",payload:e.data})}))}},K=function(e){return function(t){return X.getArticlesByAuthor(e).then((function(e){t({type:"GET_ARTICLES_BY_AUTHOR",payload:e.data})}))}},Q=function(e){return function(t){X.deleteArticle(e).then((function(e){t({type:"DELETE_ARTICLE"}),$()}))}},Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={modal:!1,username:"",password:"",msg:null},a.toggle=function(){a.props.clearErrors(),a.setState({modal:!a.state.modal})},a.onChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n={username:t.username,password:t.password};a.props.login(n)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.error,n=t.isAuth;a!==e.error&&("LOGIN_FAIL"===a.id?this.setState({msg:a.msg.msg}):this.setState({msg:null})),this.state.modal&&n&&this.toggle()}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{onClick:this.toggle,href:"#"},"Login"),r.a.createElement(E.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(b.a,{toggle:this.toggle},"Login"),r.a.createElement(f.a,null,this.state.msg?r.a.createElement(v.a,{color:"danger"},this.state.msg):null,r.a.createElement(y.a,{onSubmit:this.onSubmit},r.a.createElement(O.a,null,r.a.createElement(C.a,{for:"username"},"Username"),r.a.createElement(A.a,{type:"text",name:"username",id:"username",placeholder:"Username",className:"mb-3",onChange:this.onChange}),r.a.createElement(C.a,{for:"password"},"Password"),r.a.createElement(A.a,{type:"password",name:"password",id:"password",placeholder:"Password",className:"mb-3",onChange:this.onChange}),r.a.createElement(j.a,{color:"dark",style:{marginTop:"2rem"},block:!0},"Login"))))))}}]),t}(n.Component),ee=Object(N.b)((function(e){return{isAuth:e.auth.isAuth,error:e.error}}),{login:function(e){var t=e.username,a=e.password;return function(e,n){var r=JSON.stringify({username:t,password:a}),l=n().auth.token,o={headers:{Authorization:null,"Content-Type":"application/json"}};l&&(o.headers.Authorization=l),w.a.post("http://localhost:8080/api/auth",r,o).then((function(t){e({type:"LOGIN_SUCCESS",payload:t.data})})).catch((function(t){e({type:"LOGIN_ERROR"})}))}},clearErrors:S,getItems:$})(Z),te=a(119),ae=a(118),ne=a(120),re=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{onClick:this.props.logout,href:"#"},"Logout"))}}]),t}(n.Component),le=Object(N.b)(null,{logout:function(){return{type:"LOGOUT_SUCCESS"}}})(re),oe=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.auth,t=e.isAuth,a=e.user,l=r.a.createElement(n.Fragment,null,r.a.createElement("strong",{className:"nav-link mr-2"},a&&"Welcome ".concat(a.fullName)),r.a.createElement(le,null)),o=r.a.createElement(n.Fragment,null,r.a.createElement(L,null),r.a.createElement(ee,null));return r.a.createElement(te.a,{collapseOnSelect:!0,expand:"lg"},r.a.createElement(ae.a,null,r.a.createElement(te.a.Brand,null,r.a.createElement(h.b,{to:"/"},"MODEUM")),r.a.createElement(te.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(te.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(ne.a,{className:"mr-auto"},t&&r.a.createElement(n.Fragment,null,r.a.createElement(h.b,{to:"/profile/".concat(a.id,"/articles"),className:"nav-link"},"My Articles"),r.a.createElement(h.b,{to:"/writeArticle",className:"nav-link"},"Write Article"))),r.a.createElement(ne.a,null,r.a.createElement("div",{className:"ml-auto d-flex"},t?l:o)))))}}]),t}(n.Component),ce=Object(N.b)((function(e){return{auth:e.auth}}),null)(oe),ie=a(31),se=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).deleteThisArticle=a.deleteThisArticle.bind(Object(ie.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"deleteThisArticle",value:function(e,t){var a=this;T.a.fire({icon:"warning",title:"Article is about to be deleten",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"Delete",cancelButtonText:"Cancel"}).then((function(n){n.value&&(a.props.deleteArticle(e),a.props.getItemsByAuthor(t.id),window.location.reload())}))}},{key:"render",value:function(){var e=this,t=this.props.article,a=t.title,l=t.content,o=t.author,c=t.imageUrl,i=t.id;return r.a.createElement("div",{className:"singleArticle mb-5"},this.props.article&&r.a.createElement(n.Fragment,null,r.a.createElement("img",{className:"img-rounded",src:null!=c?c:"/logo192.png",alt:"post thumbnail"}),r.a.createElement("div",null,r.a.createElement(h.b,{to:"/articles/".concat(i)},r.a.createElement("h2",null,a),r.a.createElement("p",null,l.substring(0,150),l.length>150&&"...")),this.props.ownership&&r.a.createElement(n.Fragment,null,r.a.createElement(h.b,{to:"/edit/".concat(i)},r.a.createElement("button",{className:"btn btn-primary mr-2"},"Edit")),r.a.createElement("button",{onClick:function(){e.deleteThisArticle(i,o)},className:"btn btn-danger"},"Delete")),!this.props.ownership&&r.a.createElement("p",{className:"singleArticleAuthorName"},"Author: ",null!=o?o.fullName:"Unknown"))))}}]),t}(n.Component),me=Object(N.b)((function(e){return{articles:e.articles}}),{getItems:$,getItemsByAuthor:K,deleteArticle:Q})(se),ue=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).categoryHandle=function(e){a.props.getArticlesByCategory(e.target.value)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"categoryList"},r.a.createElement("h2",{className:"my-3"},"Categories"),r.a.createElement("button",{className:"btn btn-dark mt-1 mr-1",value:"UX",onClick:this.categoryHandle},"User Experience"),r.a.createElement("button",{className:"btn btn-dark mt-1",value:"UI",onClick:this.categoryHandle},"UI Design"),r.a.createElement("button",{className:"btn btn-dark mt-1 mr-1",value:"WD",onClick:this.categoryHandle},"Web Design"),r.a.createElement("button",{className:"btn btn-dark mt-1",value:"WB",onClick:this.categoryHandle},"Web Dev"),r.a.createElement("button",{className:"btn btn-dark mt-1 mr-1",value:"INT",onClick:this.categoryHandle},"Interview"),r.a.createElement("button",{className:"btn btn-dark mt-1",value:"TAT",onClick:this.categoryHandle},"Tutorials"),r.a.createElement("button",{className:"btn btn-dark mt-1 mr-1",value:"INSP",onClick:this.categoryHandle},"Inspiration"),r.a.createElement("button",{className:"btn btn-dark mt-1 ",value:"CA",onClick:this.categoryHandle},"Career Advice"),r.a.createElement("button",{className:"btn btn-dark mt-1",value:"JS",onClick:this.categoryHandle},"Javascript"),r.a.createElement("button",{className:"btn btn-dark mt-1",value:"PROG",onClick:this.categoryHandle},"General Programming"))}}]),t}(n.Component),pe=Object(N.b)(null,{getArticlesByCategory:function(e){return function(t){X.getArticlesByCategory(e).then((function(e){t({type:"GET_ARTICLES_BY_CATEGORY",payload:e.data})}))}}})(ue),he=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getItems()}},{key:"findTopViewed",value:function(){var e=this.props.articles.articles,t=e[0];return e.forEach((function(e){e.views>t.views&&(t=e)})),t}},{key:"render",value:function(){var e=this.props.articles.articles,t=this.findTopViewed();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9 mt-3"},e&&e.map((function(e){return r.a.createElement(me,{key:e.id,article:e})}))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("h2",{className:"my-3"},"Top article"),t&&r.a.createElement(h.b,{to:"/articles/".concat(t.id)},r.a.createElement("div",{className:"topviewed"},r.a.createElement("img",{src:t.imageUrl,alt:"top viewed article"}),r.a.createElement("p",{className:"topviewedTitle mt-3 text-bold"},t.title))),r.a.createElement(pe,null))))}}]),t}(n.Component),de=Object(N.b)((function(e){return{articles:e.articles}}),{getItems:$})(he),ge=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col-md-1"},r.a.createElement("img",{className:"commentImg",src:this.props.author.imageUrl})),r.a.createElement("div",{className:"col-md-11"},r.a.createElement("p",{className:"commentAuthor"},this.props.author.fullName),r.a.createElement("p",{className:"commentContent"},this.props.content)))}}]),t}(n.Component),Ee=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=a.state,t=e.authorId,n=e.postId,r=e.content,l={authorId:t,postId:n,content:r};""!==r?(a.props.writeComment(l),a.setState({content:""}),T.a.fire({icon:"success",title:"Comment sent successfully",showConfirmButton:!1,timer:1500})):T.a.fire({icon:"warning",title:"You can not leave an empty comment!",showConfirmButton:!1,timer:1500})};var n=JSON.parse(localStorage.getItem("user"));return null!==n&&(a.state={authorId:n.id,postId:a.props.id,content:""}),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=M.getState().auth.isAuth;return r.a.createElement(n.Fragment,null,e&&r.a.createElement("div",{className:"commentWrite"},r.a.createElement("form",null,r.a.createElement("textarea",{type:"text",onChange:this.onChange,name:"content",value:this.state.content,placeholder:"Comment...",className:"form-control mb-2 commentInput"}),r.a.createElement("input",{type:"hidden",name:"articleId",value:this.state.articleId}),r.a.createElement("input",{type:"hidden",name:"authorId",value:this.state.authorId}),r.a.createElement("button",{onClick:this.onSubmit,type:"button",className:"commentButton btn btn-primary"},"Write comment"))))}}]),t}(n.Component),be=Object(N.b)(null,{writeComment:function(e){return function(t){X.postComment(e).then((function(e){t({type:"WRITE_COMMENT",payload:e.data})}))}},getArticle:q})(Ee),fe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).submitComment=function(e){X.postComment(e),a.props.getArticle(a.id)},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.id=this.props.match.params.id,this.props.getArticle(this.id),X.incViews(this.id)}},{key:"render",value:function(){var e=this.props.singleArticle,t=e.commentList;return r.a.createElement(n.Fragment,null,void 0!==e&&void 0!==e.author&&r.a.createElement("div",{className:"container articleContainer"},r.a.createElement("h1",{className:"singleArticleTitle"},e.title),r.a.createElement("img",{src:e.imageUrl,className:"singlePageThumbnail",alt:"article main thumb"}),r.a.createElement("div",{className:"authorDetails"},r.a.createElement("img",{src:e.author.imageUrl?e.author.imageUrl:"/account.png",className:"singleArticleUserImg",alt:"user profile"}),r.a.createElement("div",null,r.a.createElement("p",null,e.author.fullName),r.a.createElement("div",{className:"stats"},r.a.createElement("img",{className:"singleArticleViewsIcon",src:"/views.png",alt:""})," ",e.views," views"))),r.a.createElement("p",{className:"singleArticleParagraph"},e.content),r.a.createElement("div",{className:"comments"},r.a.createElement("h3",null,"Comments:   "),t.map((function(e){return r.a.createElement(ge,{key:e.id,content:e.content,author:e.author})})),r.a.createElement(be,{submitComment:this.submitComment,id:e.id}))))}}]),t}(n.Component),ve=Object(N.b)((function(e){return{singleArticle:e.articles.singleArticle}}),{getArticle:q})(fe),ye=a(29),Oe=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getItemsByAuthor(e)}},{key:"render",value:function(){var e=this,t=this.props.articles.articles;return r.a.createElement("div",{className:"container"},t&&t.map((function(t){return r.a.createElement(me,{key:t.id,article:t,ownership:!0,deleteArticle:e.props.deleteArticle})})))}}]),t}(n.Component),Ce=Object(N.b)((function(e){return{articles:e.articles}}),{getItems:$,getItemsByAuthor:K,deleteArticle:Q})(Oe),Ae=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(ie.a)(a)),a.saveEdit=a.saveEdit.bind(Object(ie.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getArticle(e)}},{key:"handleChange",value:function(e){var t=this.props.match.params.id,a=document.getElementsByName("title")[0].value,n=document.getElementsByName("content")[0].value,r=document.getElementsByName("category")[0].value;this.props.editArticle(t,{singleArticle:{title:a,content:n,category:r}})}},{key:"saveEdit",value:function(e){e.preventDefault(),e.stopPropagation();var t=this.props.match.params.id;this.props.saveEdit(t,JSON.stringify(this.props.singleArticle)),T.a.fire({icon:"success",title:"Your article has been saved",showConfirmButton:!1,timer:1500})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container editForm"},this.props.singleArticle&&r.a.createElement(n.Fragment,null,r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{onChange:this.handleChange,name:"title",type:"text",className:"form-control mb-3",value:this.props.singleArticle.title}),r.a.createElement("label",{htmlFor:"content"},"Content:"),r.a.createElement("textarea",{onChange:this.handleChange,rows:5,name:"content",type:"textarea",className:"form-control",value:this.props.singleArticle.content}),r.a.createElement("label",{for:"category"},"Choose a category:"),r.a.createElement("select",{id:"category",name:"category",className:"form-control",onChange:this.handleChange},r.a.createElement("option",{value:"PROG"},"Programming General"),r.a.createElement("option",{value:"UX"},"User Experience"),r.a.createElement("option",{value:"WB"},"Web Development"),r.a.createElement("option",{value:"WD"},"Web Design"),r.a.createElement("option",{value:"INT"},"Interview"),r.a.createElement("option",{value:"CA"},"Career Advice"),r.a.createElement("option",{value:"INSP"},"Inspiration"),r.a.createElement("option",{value:"JS"},"Javasript")),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary mt-3",onClick:this.saveEdit},"Save"))))}}]),t}(n.Component),je=Object(N.b)((function(e){return{singleArticle:e.articles.singleArticle}}),{getArticle:q,editArticle:function(e,t){return function(e){e({type:"EDIT_ARTICLE",payload:t})}},saveEdit:function(e,t){return X.saveArticle(e,t).then((function(e){})).catch((function(e){return console.log(e,"err")})),function(e){e({type:"EDIT_ARTICLE",payload:t})}}})(Ae),Ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:"",imageUrl:"",category:"",id:""},a.onChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.submitArticle=function(){var e=a.state,t=e.title,n=e.content,r=e.category,l=e.imageUrl,o=Object(d.a)({title:t,content:n,imageUrl:l,category:r,id:a.props.user.id},"category","UX");""===t||""===n||""===l?T.a.fire({icon:"warning",title:"Some fields are empty, check again",showConfirmButton:!1,timer:2e3}):""!==o.id&&(a.props.createArticle2(o),T.a.fire({icon:"success",title:"Your article has been created",showConfirmButton:!1,timer:2500,onClose:function(){a.props.history.push("/")}}))},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{onChange:this.onChange,type:"text",className:"form-control mb-3",name:"title",placeholder:"Title",value:this.state.title}),r.a.createElement("label",{htmlFor:"content"},"Content:"),r.a.createElement("textarea",{onChange:this.onChange,className:"form-control mb-3",name:"content",placeholder:"Content",rows:"5",value:this.state.content}),r.a.createElement("label",{htmlFor:"imageUrl"},"Thumbnail link:"),r.a.createElement("input",{onChange:this.onChange,type:"text",className:"form-control mb-3",name:"imageUrl",placeholder:"URL Image",value:this.state.imageUrl}),r.a.createElement("label",{htmlFor:"category"},"Choose a category:"),r.a.createElement("select",{id:"category",name:"category",className:"form-control",onChange:this.onChange},r.a.createElement("option",{value:"PROG"},"Programming General"),r.a.createElement("option",{value:"UX"},"User Experience"),r.a.createElement("option",{value:"WB"},"Web Development"),r.a.createElement("option",{value:"WD"},"Web Design"),r.a.createElement("option",{value:"INT"},"Interview"),r.a.createElement("option",{value:"CA"},"Career Advice"),r.a.createElement("option",{value:"INSP"},"Inspiration"),r.a.createElement("option",{value:"JS"},"Javasript")),r.a.createElement("br",null),r.a.createElement("input",{type:"hidden",value:null!==this.props.user&&this.props.user.id,name:"id"}),r.a.createElement("input",{type:"hidden",value:"",name:"category"}),r.a.createElement("button",{type:"button",onClick:this.submitArticle,className:"btn btn-primary"},"Submit article")))}}]),t}(n.Component),Ie=Object(N.b)((function(e){return{user:e.auth.user}}),{createArticle2:function(e){return function(t){var a={headers:{Authorization:localStorage.getItem("token"),"Content-Type":"application/json"}};return w.a.post("http://localhost:8080/api/articles",e,a)}}})(Ne),we=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){if(null!==localStorage.getItem("user")){var e=JSON.parse(localStorage.getItem("user"));this.props.loginWithStorage(e)}}},{key:"render",value:function(){var e=M.getState().auth.isAuth;return r.a.createElement(n.Fragment,null,r.a.createElement(ce,null),r.a.createElement(ye.b,{path:"/",exact:!0,component:de}),r.a.createElement(ye.b,{path:"/articles/:id",component:ve}),r.a.createElement(Se,{auth:e,path:"/profile/:id/articles",component:Ce}),r.a.createElement(Se,{auth:e,path:"/edit/:id/",component:je}),r.a.createElement(Se,{auth:e,path:"/writeArticle",component:Ie}))}}]),t}(n.Component),Se=function(e){var t=e.auth,a=e.component,n=Object(c.a)(e,["auth","component"]);return r.a.createElement(ye.b,Object.assign({},n,{render:function(e){return t?r.a.createElement(a,e):r.a.createElement(ye.a,{to:"/"})}}))},ke=Object(N.b)((function(e){return{auth:e.auth}}),{loginWithStorage:function(e){return{type:"LOGIN_WITH_STORAGE",payload:e}}})(we);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h.a,null,r.a.createElement(N.a,{store:M},r.a.createElement(ke,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t){},68:function(e,t,a){e.exports=a(106)},73:function(e,t,a){},74:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.7184e6b3.chunk.js.map