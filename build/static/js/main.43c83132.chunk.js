(window["webpackJsonpfast-food-guru"]=window["webpackJsonpfast-food-guru"]||[]).push([[0],{19:function(e,t,a){e.exports=a(50)},24:function(e,t,a){},25:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(9),o=a.n(l),r=(a(24),a(1)),i=a(2),c=a(4),u=a(3),m=a(5),d=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e)))._handleUserName=function(e){console.log("hit"),a.setState({user:e.target.value}),console.log("".concat(a.state.user))},a._handlePassword=function(e){a.setState({pw:e.target.value})},a.closeModal=function(){a.setState({modalIsOpen:!1})},a._login=function(){var e={user:a.state.user,pw:a.state.pw};window.fetch("session/create",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){a.props.sendToBack(e.user)}).catch(function(e){return console.log(e)}),console.log("hit"),a.props.user(e),console.log()},a.state={user:null,pw:null,modalIsOpen:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("component did mount")}},{key:"render",value:function(){return console.log("login render"),s.a.createElement("div",{className:"login-wrapper"},s.a.createElement("div",{className:"login-div"},s.a.createElement("form",null,s.a.createElement("h2",{className:"input-header"},"User Name:"),s.a.createElement("input",{className:"login-input",onChange:this._handleUserName}),s.a.createElement("h2",{className:"input-header"},"Password:"),s.a.createElement("input",{type:"password",name:"pw",className:"login-input",onChange:this._handlePassword}),s.a.createElement("div",{className:"css-helper"},s.a.createElement("button",{id:"login-button",className:"button",onClick:this._login},"submit")))))}}]),t}(n.Component),p=(a(25),a(6)),h=a(7),v=a.n(h),g=a(14),f=a.n(g);f.a.setApiKey("AIzaSyDSZy_muaB5hzAf8NYwyuM3JCj0AT2tH4s");var b={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",width:"58%",height:"50%",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#2f2e2e",color:"white"}},w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e)))._handleAddress=function(e){a.setState({address:e.target.value})},a._handleRestaurant=function(e){a.setState({restaurant:e.target.value})},a._handleText=function(e){a.setState({review:e.target.value})},a._handleSubmit=function(e){f.a.fromAddress("".concat(a.state.address,", Toronto, ON, Canada")).then(function(e){console.log("hit geocode"),a.setState({lat:e.results[0].geometry.location.lat,lng:e.results[0].geometry.location.lng}),a.handleFetch()},function(e){console.error(e)})},a.handleFetch=function(){var e=parseInt(a.state.CS)+parseInt(a.state.cleanliness)+parseInt(a.state.freshness)+parseInt(a.state.quality)+parseInt(a.state.speed);console.log(e),e/=5,console.log("hit",e);var t={lat:a.state.lat,lng:a.state.lng,restaurant:a.state.restaurant,review:a.state.review,user:a.props.user,CS:a.state.CS,cleanliness:a.state.cleanliness,freshness:a.state.freshness,quality:a.state.quality,speed:a.state.speed,average:e};window.fetch("review/create",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){a.props.setReviews(e)}).catch(function(e){return console.log(e)}),a.props.confirmReview(t),a.props.modalIsClosed()},console.log("$$$$$$$$$$$$",e),a.state={restaurant:null,address:null,review:null,CS:10,cleanliness:10,freshness:10,quality:10,speed:10},a.afterOpenModal=a.afterOpenModal.bind(Object(p.a)(a)),a.closeModal=a.closeModal.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"afterOpenModal",value:function(){this.subtitle.style.color="#f00"}},{key:"closeModal",value:function(){this.props.modalIsClosed()}},{key:"componentWillMount",value:function(){v.a.setAppElement("body")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(v.a,{isOpen:this.props.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,style:b,contentLabel:"Example Modal"},s.a.createElement("div",{className:"modal-head-wrap"},s.a.createElement("h2",{className:"modal-title",ref:function(t){return e.subtitle=t}},"Write Review"),s.a.createElement("button",{className:"close",onClick:this.closeModal},"close")),s.a.createElement("form",{className:"modal-form"},s.a.createElement("input",{className:"reg-input",name:"restaurant",placeholder:"restaurant",onChange:this._handleRestaurant}),s.a.createElement("input",{className:"reg-input",name:"",placeholder:"Address",onChange:this._handleAddress}),s.a.createElement("div",{className:"ranger"},s.a.createElement("label",null,"Customer Service: ",this.state.CS),s.a.createElement("input",{className:"reg-range",name:"Customer Service",type:"range",min:"0",max:"10",onChange:function(t){e.setState({CS:t.target.value})}})),s.a.createElement("div",{className:"ranger"},s.a.createElement("label",null,"Cleanliness: ",this.state.cleanliness),s.a.createElement("input",{className:"reg-range",name:"Cleanliness",type:"range",min:"0",max:"10",onChange:function(t){e.setState({cleanliness:t.target.value})}})),s.a.createElement("div",{className:"ranger"},s.a.createElement("label",null,"Quality: ",this.state.quality),s.a.createElement("input",{className:"reg-range",name:"Quality",type:"range",min:"0",max:"10",onChange:function(t){e.setState({quality:t.target.value})}})),s.a.createElement("div",{className:"ranger"},s.a.createElement("label",null,"Freshness: ",this.state.freshness),s.a.createElement("input",{className:"reg-range",name:"Freshness",type:"range",min:"0",max:"10",onChange:function(t){e.setState({freshness:t.target.value})}})),s.a.createElement("div",{className:"ranger"},s.a.createElement("label",null,"Speed: ",this.state.speed),s.a.createElement("input",{className:"reg-range",name:"Speed",type:"range",min:"0",max:"10",onChange:function(t){e.setState({speed:t.target.value})}})),s.a.createElement("textarea",{className:"review-body",placeholder:"Review",onChange:this._handleText}),s.a.createElement("button",{id:"rev-submit",className:"button",onClick:this._handleSubmit},"Submit"))))}}]),t}(s.a.Component),E=a(11),y={content:{top:"50%",left:"50%",width:"58%",height:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#2f2e2e",color:"white"}},O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={address:null},a.afterOpenModal=a.afterOpenModal.bind(Object(p.a)(a)),a.closeModal=a.closeModal.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"openModal",value:function(){}},{key:"afterOpenModal",value:function(){this.subtitle.style.color="#f00"}},{key:"closeModal",value:function(){this.props.modalIsClosed()}},{key:"componentWillMount",value:function(){v.a.setAppElement("body")}},{key:"render",value:function(){var e=this;this.props.review.cs,this.props.review.speed,this.props.review.quality,this.props.review.freshness,this.props.review.cleanliness;return s.a.createElement("div",null,s.a.createElement(v.a,{isOpen:this.props.modalIsOpen,onRequestClose:this.closeModal,style:y,contentLabel:"Example Modal"},s.a.createElement("button",{className:"close",onClick:this.closeModal},"close"),s.a.createElement("h1",{classNam:"title",ref:function(t){return e.subtitle=t}},this.props.review.restaurant),s.a.createElement("div",null,s.a.createElement("label",null,"Cleanliness: "),s.a.createElement("span",null,this.props.review.cleanliness," "),s.a.createElement("label",null,"Freshness: "),s.a.createElement("span",null,this.props.review.freshness," "),s.a.createElement("label",null,"Quality: "),s.a.createElement("span",null,this.props.review.quality," "),s.a.createElement("label",null,"Speed: "),s.a.createElement("span",null,this.props.review.speed," "),s.a.createElement("label",null,"Customer Service: "),s.a.createElement("span",null,this.props.review.cs," "),s.a.createElement("label",null,"average: "),s.a.createElement("span",null,this.props.review.average),s.a.createElement("p",null,this.props.review.review))))}}]),t}(s.a.Component),C={width:"50%",height:"50%"},N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleMarkerModal=function(e){a.setState({modal:!1,currentReview:e}),console.log(e),a.setState({modal:!0})},a.state={reviews:[],currentReview:null,modal:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({reviews:this.props.reviews}),console.log(this.state.reviews)}},{key:"componentWillReceiveProps",value:function(e){this.setState({reviews:e.reviews})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"map-wrapper"},s.a.createElement("div",{className:"map-div"},s.a.createElement(E.Map,{google:this.props.google,zoom:8,style:C,initialCenter:{lat:43.65107,lng:-79.347015}},this.state.reviews.map(function(t){return s.a.createElement(E.Marker,{position:new google.maps.LatLng(t.lat,t.lng),onClick:e.handleMarkerModal.bind(e,t)})}))),this.state.modal?s.a.createElement(O,{modalIsOpen:this.state.modal,modalIsClosed:function(){e.setState({modal:!1})},review:this.state.currentReview}):s.a.createElement("h1",null," "))}}]),t}(n.Component),S=Object(E.GoogleApiWrapper)({apiKey:"AIzaSyDSZy_muaB5hzAf8NYwyuM3JCj0AT2tH4s"})(N),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={reviews:e.reviews,nums:[0,1,2,3,4]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(this.state.reviews)}},{key:"componentWillReceiveProps",value:function(e){this.setState({reviews:e.reviews})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"top-five"},s.a.createElement("div",{id:"title-holder-topfive"},s.a.createElement("h3",null,"Top Five restaurants by average:")),s.a.createElement("div",{className:"top-5-container"},this.state.nums.map(function(t){return s.a.createElement("div",{key:t,className:"top-five-buttons"},s.a.createElement("label",null,e.state.reviews[t].restaurant,": "),s.a.createElement("span",null," ",e.state.reviews[t].average," "))})))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e)))._createReview=function(){a.setState({modalIsOpen:!0})},a._confirmReview=function(e){console.log("user page",e),a.props.sendToBack(e)},a._closeModal=function(){console.log("clsoe modal"),a.setState({modalIsOpen:!1})},a._reviews=function(e){a.setState({reviews:e}),console.log(a.state.reviews)},console.log("#################&&&&^&^&^",e),a.state={modalIsOpen:!1,reviews:a.props.reviews},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"user-page"},s.a.createElement("button",{onClick:this._createReview,id:"create-review",className:"button"},"Write New Review"),s.a.createElement(S,{className:"map",reviews:this.state.reviews}),s.a.createElement(w,{modalIsOpen:this.state.modalIsOpen,modalIsClosed:this._closeModal,confirmReview:this._confirmReview,user:this.props.user,setReviews:this._reviews}),s.a.createElement(j,{reviews:this.state.reviews}))}}]),t}(n.Component),M={content:{top:"50%",left:"50%",width:"58%",height:"60%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#2f2e2e",color:"white"}},_=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e)))._addUserName=function(e){console.log(e.target.value),a.setState({userName:e.target.value})},a._addCity=function(e){console.log(e.target.value),a.setState({city:e.target.value})},a._addProvOrState=function(e){a.setState({provOrState:e.target.value})},a._addCountry=function(e){console.log(e.target.value),a.setState({country:e.target.value})},a._addPassword=function(e){console.log(e.target.value),a.setState({password:e.target.value})},a._confirmPassword=function(e){console.log(e.target.value),a.setState({confirmed:e.target.value})},a._handleSubmit=function(e){var t={user:a.state.userName,city:a.state.city,provOrState:a.state.provOrState,country:a.state.country,password:a.state.password,confirmed:a.state.confirmed};window.fetch("/user/new",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log(e)}).catch(function(e){return console.log(e)}),console.log("boop",t),a.props.register(t),a.props.modalIsClosed()},a.state={userName:null,email:null,password:null,confirmed:null,file:null,city:null,provOrState:null,country:null},a.afterOpenModal=a.afterOpenModal.bind(Object(p.a)(a)),a.closeModal=a.closeModal.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"afterOpenModal",value:function(){this.subtitle.style.color="#f00"}},{key:"closeModal",value:function(){this.props.modalIsClosed()}},{key:"componentWillMount",value:function(){v.a.setAppElement("body")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(v.a,{isOpen:this.props.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,style:M,contentLabel:"Example Modal"},s.a.createElement("div",{className:"modal-head-wrap"},s.a.createElement("h2",{className:"modal-title",ref:function(t){return e.subtitle=t}},"Register"),s.a.createElement("button",{className:"close",onClick:this.closeModal},"close")),s.a.createElement("form",{className:"modal-form"},s.a.createElement("input",{id:"top",className:"reg-input",placeholder:"User Name",onChange:this._addUserName}),s.a.createElement("input",{className:"reg-input",placeholder:"City",onChange:this._addCity}),s.a.createElement("input",{className:"reg-input",placeholder:"Province or State",onChange:this._addProvOrState}),s.a.createElement("input",{className:"reg-input",placeholder:"Country",onChange:this._addCountry}),s.a.createElement("input",{className:"reg-input",type:"password",placeholder:"Password",onChange:this._addPassword}),s.a.createElement("input",{className:"reg-input",type:"password",placeholder:"confirm Password",onChange:this._confirmPassword}),s.a.createElement("button",{id:"reg-submit",className:"button",onClick:this._handleSubmit},"submit"))))}}]),t}(s.a.Component),I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e)))._register=function(){console.log("hit"),a.setState({modalIsOpen:!0})},a.closeModal=function(){a.setState({modalIsOpen:!1})},a.user=function(e){console.log("app",e),a.setState({loggedIn:!0})},a._sendName=function(e){console.log("#######################"),console.log(e),console.log(),a.setState({user:e})},a._logout=function(){console.log("".concat(a.state.user))},a._sendReview=function(e){console.log("app",e)},a.fetchData=function(){fetch("/reviews/index").then(function(e){e.ok&&e.json().then(function(e){a.setState({reviews:e})})}).catch(function(e){return console.log("parsing failed",e)})},a.state={loggedIn:!1,user:null,reviews:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("div",{className:"header-css-help"},s.a.createElement("h1",{id:"header-title"},"Fast Food Guru"),this.state.loggedIn?s.a.createElement("button",{id:"header-reg",className:"button",onClick:this._logout},"Log Out"):s.a.createElement("button",{id:"header-reg",className:"button",onClick:this._register}," ",s.a.createElement("b",{id:"button-text"},"register")))),s.a.createElement("body",{className:"App-body"},this.state.loggedIn?s.a.createElement(k,{sendToBack:this._sendReview,user:this.state.user,reviews:this.state.reviews}):s.a.createElement(d,{user:this.user,sendToBack:this._sendName}),s.a.createElement(_,{modalIsOpen:this.state.modalIsOpen,modalIsClosed:this.closeModal,register:this.user})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.43c83132.chunk.js.map