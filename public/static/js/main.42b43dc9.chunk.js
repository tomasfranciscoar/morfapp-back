(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo_transparent copy.8be93cc0.png"},39:function(e,t,a){e.exports=a(69)},44:function(e,t,a){},65:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),c=a.n(l),i=a(2),o=a(3),u=a(5),s=a(4),m=a(6),d=(a(44),a(13)),p=a(1),h=a(8),f=a.n(h),g="https://morfapp.herokuapp.com",E=function(e){return f.a.post("".concat(g,"/signup"),e).then(function(e){return e.data}).catch(function(e){throw e.response.data})},v=function(e){return f.a.post("".concat(g,"/login"),e).then(function(e){return e.data}).catch(function(e){throw e.response.data})},b=function(){localStorage.removeItem("TOKEN"),localStorage.removeItem("USER"),window.location.reload(),window.location.href="https://morfapp.herokuapp.com"},k=function(e){return f.a.patch("".concat(g,"/profile/").concat(JSON.parse(localStorage.getItem("USER"))._id),e,{headers:{Authorization:localStorage.getItem("TOKEN"),"Content-Type":"multipart/form-data"}}).then(function(e){return e.data.profile}).catch(function(e){return e})},y=function(){return f.a.get("".concat(g,"/profile/").concat(JSON.parse(localStorage.getItem("USER"))._id),{headers:{Authorization:localStorage.getItem("TOKEN")}}).then(function(e){return e.data.profile}).catch(function(e){return e})},N=function(e,t){return f.a.patch("".concat(g,"/profile/favs/").concat(t),{favs:e}).then(function(e){return e.data.profile}).catch(function(e){return console.log(e)})},S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={profile:{}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;y().then(function(t){e.setState({profile:t})}).catch(function(e){return e})}},{key:"render",value:function(){var e=this.props.location,t=this.state.profile,n=JSON.parse(localStorage.getItem("USER"))._id;return r.a.createElement("nav",{className:"uk-navbar-container","uk-navbar":"true","uk-sticky":"true"},r.a.createElement("div",{className:"uk-navbar-left"},r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",{className:"uk-active"},r.a.createElement(p.b,{to:"/","uk-icon":"icon: home"})),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/recipes","uk-icon":"icon: file-text"})),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/recipes/new","uk-icon":"icon: upload"})))),"/"===e.pathname?r.a.createElement("div",null):r.a.createElement("div",{className:"uk-navbar-center"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:a(19),alt:"morfapp-logo",style:{height:"50px"}}))),r.a.createElement("div",{className:"uk-navbar-right"},r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/user/".concat(n)},t.name)),r.a.createElement("li",{onClick:b},r.a.createElement(p.b,{to:"#"},"Logout")))))}}]),t}(n.Component),O=Object(d.f)(S),C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.location;return r.a.createElement("nav",{className:"uk-navbar-container","uk-navbar":"true","uk-sticky":"true"},r.a.createElement("div",{className:"uk-navbar-left"},r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",{className:"uk-active"},r.a.createElement(p.b,{to:"/","uk-icon":"icon: home"})),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/signup","uk-icon":"icon: upload"})))),"/"===e.pathname?r.a.createElement("div",null):r.a.createElement("div",{className:"uk-navbar-center"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:a(19),alt:"morfapp-logo",style:{height:"50px"}}))),r.a.createElement("div",{className:"uk-navbar-right"},r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",{className:"uk-active"},r.a.createElement(p.b,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/login"},"Login")))))}}]),t}(n.Component),w=Object(d.f)(C),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).checkIfUser=function(){return window.localStorage.TOKEN?r.a.createElement(O,null):r.a.createElement(w,null)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},this.checkIfUser())}}]),t}(n.Component),R=a(36),I="https://morfapp.herokuapp.com/recipe",x=function(e){return f.a.get("".concat("https://api.edamam.com/search?","q=").concat(e,"&app_id=").concat("97cb8be0","&app_key=").concat("3999bfc1be3cf4b776b07f2db54fd15b")).then(function(e){return e.data.hits}).catch(function(e){return console.log(e)})},U=function(e){return f.a.post("".concat(I,"/new"),e,{headers:{Authorization:localStorage.getItem("TOKEN"),"Content-Type":"multipart/form-data"}}).then(function(e){return e.data.recipe}).catch(function(e){return console.log(e)})},A=function(e){return f.a.delete("".concat(I,"/").concat(e),{headers:{Authorization:localStorage.getItem("TOKEN")}}).then(function(e){return e.data.recipe}).catch(function(e){return console.log(e)})},T=function(e,t,a){return f.a.post("".concat(I,"/comment"),{comment:e,author:t,recipe:a}).then(function(e){return e.data.comment}).catch(function(e){return console.log(e)})},D=function(e){return f.a.get("".concat(I,"/comment/").concat(e)).then(function(e){return e.data.comments}).catch(function(e){return console.log(e)})},P=function(e){return f.a.get("".concat(I,"/favs/").concat(e)).then(function(e){return e.data}).catch(function(e){return console.log(e)})},F=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.detailedRecipe;return r.a.createElement("div",null,r.a.createElement("div",{className:"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin","uk-grid":"true"},r.a.createElement("div",{className:"uk-card-media-left uk-cover-container"},r.a.createElement("img",{src:e.recipe.image,alt:e.recipe.label,"uk-cover":"true"}),r.a.createElement("canvas",{width:"600",height:"400"})),r.a.createElement("div",null,r.a.createElement("div",{className:"uk-card-body"},r.a.createElement("h3",{className:"uk-card-title"},e.recipe.label),r.a.createElement("ul",null,e.recipe.ingredientLines.map(function(e,t){return r.a.createElement("li",{key:t},e)}))))))}}]),t}(n.Component),L=function(e){var t=e.recipes,a=e.searchLabel,n=e.showDetailedRecipe,l=e.detailedRecipe;return r.a.createElement("div",{className:"Recipes main-container"},Object.keys(l).length?r.a.createElement(F,{detailedRecipe:l}):r.a.createElement("div",{className:"uk-child-width-1-3@m uk-grid-match","uk-grid":"true"},t.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"uk-card uk-card-default uk-card-hover uk-card-small"},r.a.createElement("div",{onClick:function(){return n(t)}},r.a.createElement("div",{className:"uk-card-media-top"},r.a.createElement("img",{src:e.recipe.image,alt:e.recipe.label})),r.a.createElement("div",{className:"uk-card-body"},r.a.createElement("h3",{className:"uk-card-title"},e.recipe.label),r.a.createElement("p",null,"Ingredients:"),r.a.createElement("ul",null,e.recipe.ingredientLines.slice(0,5).map(function(e,t){return r.a.createElement("li",{key:t},e.length<=30?e:e.substring(0,30)+"...")})))),r.a.createElement("div",{className:"uk-card-footer"},e.recipe.healthLabels.map(function(e,t){return r.a.createElement("button",{key:t,className:"uk-button uk-button-primary uk-button-small health-label",name:"label",value:e,onClick:a},"#",e.toUpperCase())}))))})))},_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={ingredient:"",foundRecipes:[],detailedRecipe:{}},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(R.a)({},n,r))},a.clearHome=function(){a.setState({ingredient:"",foundRecipes:[],detailedRecipe:{}})},a.handleSubmitSearch=function(e){e.preventDefault();var t=a.state,n=t.ingredient,r=t.foundRecipes;x(n).then(function(e){r=e}).then(function(){a.setState({foundRecipes:r})})},a.handleSearchLabels=function(e){var t=e.target.value,n=a.state.foundRecipes;x(t).then(function(e){n=e}).then(function(){a.setState({foundRecipes:n})})},a.handleShowDetailedRecipe=function(e){var t=a.state,n=t.detailedRecipe,r=t.foundRecipes;n=r[e],a.setState({foundRecipes:r,detailedRecipe:n})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.foundRecipes,n=e.detailedRecipe;return r.a.createElement("div",{className:"Home main-container small-site"},r.a.createElement("div",{className:"home-container"},r.a.createElement("img",{src:a(19),alt:"morfapp-logo",style:{width:"450px",marginBottom:"20px"}}),r.a.createElement("form",{onSubmit:this.handleSubmitSearch},r.a.createElement("input",{className:"uk-input uk-form-width-large",placeholder:"Type your available ingredients!",onChange:this.handleChange,type:"text",name:"ingredient",value:this.state.ingredient}),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-button uk-button-primary",type:"submit",value:"Search!"}),t.length?r.a.createElement("button",{onClick:this.clearHome,type:"button",className:"uk-button uk-button-secondary",style:{marginLeft:"5px"}},"CLEAR"):null)),t.length?r.a.createElement(L,{recipes:t,detailedRecipe:n,searchLabel:this.handleSearchLabels,showDetailedRecipe:this.handleShowDetailedRecipe}):null))}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={auth:{name:"",lastname:"",email:"",username:"",password:""}},a.handleFormSubmit=function(e){if(e.preventDefault(),!a.state.auth.email.length)return a.setState({error:"You must enter an email"});a.onSignup()},a.onSignup=function(){var e=a.state.auth;E(e).then(function(e){var t=e.token,n=e.user;localStorage.setItem("TOKEN",t),localStorage.setItem("USER",JSON.stringify(n)),a.props.getUser(n),a.props.history.push("/")}).catch(function(e){return a.setState({error:e.message})})},a.handleChange=function(e){var t=a.state.auth;t[e.target.name]=e.target.value,a.setState({auth:t})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.auth,a=t.name,n=t.lastname,l=t.email,c=t.username,i=t.password,o=this.state.error;return r.a.createElement("div",{className:"custom-form main-container small-site"},r.a.createElement("h5",null,"SIGN UP"),r.a.createElement("form",{className:"uk-form-stacked",onSubmit:this.handleFormSubmit},r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",placeholder:"First Name",type:"text",name:"name",value:a,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",placeholder:"Last Name",type:"text",name:"lastname",value:n,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",placeholder:"E-mail",type:"email",name:"email",value:l,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",placeholder:"Username",type:"text",name:"username",value:c,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",placeholder:"Password",type:"password",name:"password",value:i,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("p",{className:"uk-alert-danger"},"(Password must be at least 8 characters long)"),o&&r.a.createElement("div",{className:"uk-alert-danger","uk-alert":"true"},r.a.createElement("p",null,o)),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-button uk-button-primary",type:"submit",value:"Signup"}))),r.a.createElement("p",null,"Already have an account?",r.a.createElement(p.b,{to:"/login"}," Login")))}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={auth:{username:"",password:""}},a.handleFormSubmit=function(e){if(e.preventDefault(),0===a.state.auth.username.length)return a.setState({error:"You must enter a username"});a.onLogin()},a.onLogin=function(){var e=a.state.auth;v(e).then(function(e){var t=e.token,n=e.user;localStorage.setItem("TOKEN",t),localStorage.setItem("USER",JSON.stringify(n)),a.props.getUser(n),a.props.history.push("/")}).catch(function(e){return a.setState({error:e.message})})},a.handleChange=function(e){var t=a.state.auth;t[e.target.name]=e.target.value,a.setState({auth:t})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.auth,t=e.username,a=e.password,n=this.state.error;return r.a.createElement("div",{className:"custom-form main-container small-site"},r.a.createElement("h5",null,"LOG IN"),r.a.createElement("form",{className:"uk-form-stacked",onSubmit:this.handleFormSubmit},r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",placeholder:"Username",type:"text",name:"username",value:t,onChange:this.handleChange})),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",placeholder:"Password",type:"password",name:"password",value:a,onChange:this.handleChange})),n&&r.a.createElement("div",{className:"uk-alert-danger","uk-alert":"true"},r.a.createElement("p",null,n)),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-button uk-button-primary",type:"submit",value:"Login"}))),r.a.createElement("p",null,"Don't have an account?",r.a.createElement(p.b,{to:"/signup"}," Signup")))}}]),t}(n.Component),K=a(14),Y=a.n(K),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={recipe:{name:"",ingredient1:"",difficulty:"",images:[]},recipes:[]},a.handleChange=function(e){var t=a.state.recipe,n=e.target.name;if(e.target.files)return t.images=e.target.files,a.setState({recipe:t});t[n]=e.target.value,a.setState({recipe:t})},a.showSecondIngredient=function(){var e=document.getElementsByClassName("second");e[0].setAttribute("style","display: inline"),e[1].setAttribute("style","display: inline")},a.showThirdIngredient=function(){var e=document.getElementsByClassName("third");e[0].setAttribute("style","display: inline"),e[1].setAttribute("style","display: inline")},a.showFourthIngredient=function(){var e=document.getElementsByClassName("fourth");e[0].setAttribute("style","display: inline"),e[1].setAttribute("style","display: inline")},a.showFifthIngredient=function(){document.getElementsByClassName("fifth")[0].setAttribute("style","display: inline")},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.recipe;if(0===t.name.length||0===t.ingredient1.length||0===t.difficulty.length)return a.setState({error:"You must complete every field"});a.onUpload()},a.onUpload=function(){var e=a.state.recipe,t=new FormData;if(e.images){var n=!0,r=!1,l=void 0;try{for(var c,i=e.images[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var o=c.value;t.append("images",o)}}catch(s){r=!0,l=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}}for(var u in e)t.append(u,e[u]),console.log(u,e[u]);localStorage.length&&t.append("author",JSON.parse(localStorage.getItem("USER"))._id),U(t).then(function(e){console.log("recipe upload successful! ",e),Y.a.fire({title:"Success!",text:"Your recipe has been successfully uploaded",type:"success",confirmButtonText:"Cool"}),a.props.history.push("/recipe/".concat(e._id))}).catch(function(e){return a.setState({error:e.message})})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.recipe,t=e.name,a=e.instructions,n=e.ingredient1,l=e.ingredient2,c=e.ingredient3,i=e.ingredient4,o=e.ingredient5,u=this.state.error;return r.a.createElement("div",{className:"custom-form main-container small-site"},r.a.createElement("h5",null,"UPLOAD RECIPE"),r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"uk-form-stacked"},r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",name:"name",value:t,placeholder:"Title",onChange:this.handleChange})),r.a.createElement("p",null,r.a.createElement("div",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",name:"ingredient1",value:n,placeholder:"Ingredients",onChange:this.handleChange}),r.a.createElement("button",{className:"uk-button uk-button-primary",type:"button",onClick:this.showSecondIngredient},"+")),r.a.createElement("div",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium second",name:"ingredient2",value:l,placeholder:"Ingredients",onChange:this.handleChange,style:{display:"none"}}),r.a.createElement("button",{className:"uk-button uk-button-primary second",type:"button",onClick:this.showThirdIngredient,style:{display:"none"}},"+")),r.a.createElement("div",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium third",name:"ingredient3",value:c,placeholder:"Ingredients",onChange:this.handleChange,id:"ingredient3",style:{display:"none"}}),r.a.createElement("button",{className:"uk-button uk-button-primary third",type:"button",onClick:this.showFourthIngredient,style:{display:"none"}},"+")),r.a.createElement("div",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium fourth",name:"ingredient4",value:i,placeholder:"Ingredients",onChange:this.handleChange,id:"ingredient4",style:{display:"none"}}),r.a.createElement("button",{className:"uk-button uk-button-primary fourth",type:"button",onClick:this.showFifthIngredient,style:{display:"none"}},"+")),r.a.createElement("div",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium fifth",name:"ingredient5",value:o,placeholder:"Ingredients",onChange:this.handleChange,id:"ingredient5",style:{display:"none"}}))),r.a.createElement("p",null,r.a.createElement("textarea",{className:"uk-textarea uk-form-width-medium",name:"instructions",value:a,placeholder:"Instructions",onChange:this.handleChange})),r.a.createElement("p",null,r.a.createElement("select",{onChange:this.handleChange,name:"difficulty",className:"uk-select uk-form-width-medium"},r.a.createElement("option",{selected:!0,disabled:!0},"Difficulty level"),r.a.createElement("option",{value:"Beginner"},"Beginner"),r.a.createElement("option",{value:"Amateur"},"Amateur"),r.a.createElement("option",{value:"Semi-Pro"},"Semi-Pro"),r.a.createElement("option",{value:"Professional"},"Professional"),r.a.createElement("option",{value:"World Class"},"World Class"))),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-large",placeholder:"Images",type:"file",name:"images",onChange:this.handleChange})),u&&r.a.createElement("div",{className:"uk-alert-danger","uk-alert":"true"},r.a.createElement("p",null,u)),r.a.createElement("p",null,r.a.createElement("input",{type:"submit",className:"uk-button uk-button-primary"}))))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={customRecipes:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;f.a.get("".concat(I),{headers:{Authorization:localStorage.getItem("TOKEN")}}).then(function(e){return e.data.recipe}).catch(function(e){return console.log(e)}).then(function(t){e.setState({customRecipes:t.reverse()})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.customRecipes;return r.a.createElement("div",{className:"custom-recipes-container main-container"},r.a.createElement("h2",null,"USERS' RECIPES"),r.a.createElement("div",{className:"uk-child-width-1-3@m uk-grid-match","uk-grid":"true"},e.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"uk-card uk-card-default"},r.a.createElement("div",{className:"uk-card-media-top"},r.a.createElement("img",{src:e.images?e.images:null,alt:e.name})),r.a.createElement("div",{className:"uk-card-body"},r.a.createElement(p.b,{to:"/recipe/".concat(e._id)},r.a.createElement("h3",{className:"uk-card-title"},e.name)),r.a.createElement("div",{className:"custom-recipe-card-text"},r.a.createElement("h5",null,"INGREDIENTS:"),r.a.createElement("ul",null,r.a.createElement("li",null,e.ingredient1),e.ingredient2?r.a.createElement("li",null,e.ingredient2):null,e.ingredient3?r.a.createElement("li",null,e.ingredient3):null,e.ingredient4?r.a.createElement("li",null,e.ingredient4):null,e.ingredient5?r.a.createElement("li",null,e.ingredient5):null),r.a.createElement("h5",null,"INSTRUCTIONS:"),r.a.createElement("p",null,e.instructions))),r.a.createElement("div",{className:"uk-card-footer"},"Difficulty: ",e.difficulty)))})))}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={customRecipe:{comment:""},ingredients:"",comments:[],favs:[],userFaved:{},userId:JSON.parse(localStorage.getItem("USER"))._id},a.onDelete=function(){var e=a.props.match.params.id;A(e).then(function(){Y.a.fire({title:"Deleted!",text:"Your recipe has been successfully deleted",type:"warning",confirmButtonText:"Cool"}),a.props.history.push("/recipes")})},a.onFav=function(e){var t=a.props.match.params.id,n=e.target.value;N(n,t).then(function(){P(t).then(function(e){return a.setState({favs:e})}).catch(function(e){return console.log(e)})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=a.state.customRecipe;t[e.target.name]=e.target.value,a.setState({customRecipe:t})},a.handleSubmit=function(e){e.preventDefault(),a.handlePostComment()},a.handlePostComment=function(){var e=a.state.customRecipe,t=e.comment,n=e._id,r=JSON.parse(localStorage.getItem("USER"))._id;T(t,r,n).then(function(){D(a.props.match.params.id).then(function(e){a.setState({comments:e})})}).catch(function(e){return a.setState({error:e.message})})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;(function(e){return f.a.get("".concat(I,"/").concat(e),{headers:{Authorization:localStorage.getItem("TOKEN")}}).then(function(e){return e.data.recipe}).catch(function(e){return console.log(e)})})(t).then(function(t){return e.setState({customRecipe:t,ingredients:t.ingredients})}).catch(function(e){return console.log(e)}),D(t).then(function(t){return e.setState({comments:t})}).catch(function(e){return console.log(e)}),P(t).then(function(t){return e.setState({favs:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.customRecipe,a=e.userId,n=e.comments,l=e.favs,c=JSON.parse(localStorage.getItem("USER"))._id;return r.a.createElement("div",{className:"custom-recipe-detail-container main-container small-site"},r.a.createElement("div",{className:"uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin","uk-grid":"true"},r.a.createElement("div",{className:"uk-card-media-left uk-cover-container"},r.a.createElement("img",{src:t.images,alt:t.name,"uk-cover":"true"}),r.a.createElement("canvas",{width:"600",height:"400"})),r.a.createElement("div",null,r.a.createElement("div",{className:"uk-card-body"},r.a.createElement("h3",{className:"uk-card-title"},t.name),r.a.createElement("h5",null,"INGREDIENTS:"),r.a.createElement("ul",null,r.a.createElement("li",null,t.ingredient1),t.ingredient2?r.a.createElement("li",null,t.ingredient2):null,t.ingredient3?r.a.createElement("li",null,t.ingredient3):null,t.ingredient4?r.a.createElement("li",null,t.ingredient4):null,t.ingredient5?r.a.createElement("li",null,t.ingredient5):null),r.a.createElement("h5",null,"INSTRUCTIONS:"),r.a.createElement("p",null,t.instructions),r.a.createElement("button",{name:"favs",type:"submit",value:a,onClick:this.onFav,className:"uk-button uk-primary"},r.a.createElement("span",{"uk-icon":"icon: star"})," Favs:"," ",l.users?l.users.length:0),t.author&&t.author._id===c?r.a.createElement("button",{onClick:this.onDelete,className:"uk-button uk-danger"},r.a.createElement("span",{"uk-icon":"icon: trash"})," Delete"):null))),r.a.createElement("div",{className:"comment-input"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"comment-form"},r.a.createElement("input",{onChange:this.handleChange,className:"uk-input",placeholder:"Comment...",type:"text",name:"comment",value:t.comment}),r.a.createElement("button",{className:"uk-button uk-button-primary"},"Comment"))),r.a.createElement("div",{className:"comments"},n.map(function(e,t){return r.a.createElement("div",{key:t,className:"comment"},r.a.createElement("p",null,r.a.createElement("strong",null,e.author.username),": ",e.comment),r.a.createElement("p",{style:{fontSize:"8px"}},"Posted on ",e.createdAt.slice(0,10)," at ",e.createdAt.slice(11,19)))})))}}]),t}(n.Component),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={profile:{},myRecipes:[],myFavs:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;y().then(function(t){var a=t.favs;e.setState({profile:t,myFavs:a})}).catch(function(e){return e}),f.a.get("".concat(I,"/myrecipes/").concat(JSON.parse(localStorage.getItem("USER"))._id)).then(function(e){return e.data.recipes}).catch(function(e){return console.log(e)}).then(function(t){e.setState({myRecipes:t.reverse()})}).catch(function(e){return e})}},{key:"render",value:function(){var e=this.state.profile,t=this.state,a=t.myRecipes,n=t.myFavs;return r.a.createElement("div",{className:"profile-container main-container small-site"},r.a.createElement("a",{href:e.profilePicture,target:"_blank"},r.a.createElement("img",{src:e.profilePicture,alt:"".concat(e.name,"'s profile pic"),style:{width:"200px",borderRadius:"5px"},className:"profile-picture"})),r.a.createElement("div",{className:"edit-profile-button"},r.a.createElement(p.b,{to:"/user/edit/".concat(e._id)},r.a.createElement("button",{className:"uk-button uk-button-secondary uk-button-small"},"Edit Profile"))),r.a.createElement("div",{className:"profile-lists-main-container"},r.a.createElement("div",{className:"profile-list-container"},r.a.createElement("h5",{className:"profile-list-title"},"MY RECIPES"),r.a.createElement("ul",{className:"profile-list"},a.map(function(e,t){return r.a.createElement(p.b,{key:t,to:"/recipe/".concat(e._id)},r.a.createElement("li",{className:"profile-list-item"},r.a.createElement("div",{className:"profile-list-name"},e.name),r.a.createElement("img",{className:"profile-list-img",src:e.images,alt:e.name})))}))),r.a.createElement("div",{className:"profile-list-container"},r.a.createElement("h5",{className:"profile-list-title"},"MY FAVS"),r.a.createElement("ul",{className:"profile-list"},n.reverse().map(function(e,t){return r.a.createElement(p.b,{key:t,to:"/recipe/".concat(e._id)},r.a.createElement("li",{className:"profile-list-item"},r.a.createElement("div",{className:"profile-list-name"},e.name),r.a.createElement("img",{className:"profile-list-img",src:e.images,alt:e.name})))})))))}}]),t}(n.Component),H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={user:{name:JSON.parse(localStorage.getItem("USER")).name,lastname:JSON.parse(localStorage.getItem("USER")).lastname,username:JSON.parse(localStorage.getItem("USER")).username,id:JSON.parse(localStorage.getItem("USER"))._id,profilePicture:""}},a.handleFormSubmit=function(e){e.preventDefault(),a.onEdit()},a.handleChange=function(e){var t=a.state.user,n=e.target.name;if(e.target.files)return t.profilePicture=e.target.files,a.setState({user:t});t[n]=e.target.value,a.setState({user:t})},a.onEdit=function(){var e=a.state.user,t=new FormData;if(e.profilePicture){var n=!0,r=!1,l=void 0;try{for(var c,i=e.profilePicture[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var o=c.value;t.append("profilePicture",o)}}catch(s){r=!0,l=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}}for(var u in e)t.append(u,e[u]);if(""===e.profilePicture)return a.setState({error:"You must include a profile picture"});k(t).then(function(e){a.setState({user:e}),Y.a.fire({title:"Success!",text:"Your profile has been successfully updated",type:"success",confirmButtonText:"Cool"}),a.props.history.push("/user/".concat(e.id))}).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.user,a=t.name,n=t.lastname,l=t.username,c=t.id,i=this.state.error;return r.a.createElement("div",{className:"profile-edit-container main-container custom-form small-site"},r.a.createElement("h5",null,"EDIT PROFILE"),r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"uk-form-stacked"},r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",type:"text",name:"name",value:a,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",type:"text",name:"lastname",value:n,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",type:"text",name:"username",value:l,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-input uk-form-width-medium",type:"file",name:"profilePicture",onChange:function(t){return e.handleChange(t)}})),i&&r.a.createElement("div",{className:"uk-alert-danger","uk-alert":"true"},r.a.createElement("p",null,i)),r.a.createElement("p",null,r.a.createElement("input",{className:"uk-button uk-button-primary",type:"submit",value:"Edit"}),r.a.createElement(p.b,{to:"/user/".concat(c)},r.a.createElement("button",{type:"button",className:"uk-button uk-button-secondary",style:{marginLeft:"5px"}},"CANCEL")))))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).getTheUser=function(e){a.setState({loggedInUser:e})},a.state={loggedInUser:null,customRecipes:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.loggedInUser;return r.a.createElement("div",{className:"Router"},r.a.createElement(j,{isLogged:t}),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:_}),r.a.createElement(d.a,{exact:!0,path:"/recipe/:id",component:W}),r.a.createElement(d.a,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(J,Object.assign({},t,{getUser:e.getTheUser}))}}),r.a.createElement(d.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(B,Object.assign({},t,{getUser:e.getTheUser}))}}),r.a.createElement(d.a,{exact:!0,path:"/user/:id",component:G}),r.a.createElement(d.a,{exact:!0,path:"/user/edit/:id",render:function(e){return r.a.createElement(H,e)}}),r.a.createElement(d.a,{exact:!0,path:"/recipes/new",component:z}),r.a.createElement(d.a,{exact:!0,path:"/recipes",render:function(t){return r.a.createElement(M,Object.assign({},t,{getRecipe:e.getTheCustomRecipes}))}})))}}]),t}(r.a.Component),V=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(q,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(65);var $=a(37),Q=a.n($),X=a(38),Z=a.n(X);a(68);Q.a.use(Z.a);c.a.render(r.a.createElement(function(){return r.a.createElement(p.a,null,r.a.createElement(V,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.42b43dc9.chunk.js.map