(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n(7),i=n.n(c),s=n(9),o=n(2),j=n(3),h=n(5),u=n(4),l=function(){return Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Job"}),Object(a.jsx)("th",{})]})})},b=function(t){var e=t.friends.map((function(e,n){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.job}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{onClick:function(){return t.removeCharacter(n)},children:"Delete"})})]},n)}));return Object(a.jsx)("tbody",{children:e})},d=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var t=this.props,e=t.friends,n=t.removeCharacter;return Object(a.jsxs)("table",{children:[Object(a.jsx)(l,{}),Object(a.jsx)(b,{friends:e,removeCharacter:n})]})}}]),n}(r.Component),m=n(8),O=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).initialState={name:"",job:""},t.state=t.initialState,t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(m.a)({},a,r))},t.submitForm=function(){t.props.handleSubmit(t.state),t.setState(t.initialState)},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.job;return Object(a.jsxs)("form",{children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",id:"name",value:e,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"job",children:"Job"}),Object(a.jsx)("input",{type:"text",name:"job",id:"job",value:n,onChange:this.handleChange}),Object(a.jsx)("input",{type:"button",value:"Submit",onClick:this.submitForm})]})}}]),n}(r.Component),f=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={characters:[]},t.removeCharacter=function(e){var n=t.state.characters;t.setState({characters:n.filter((function(t,n){return n!==e}))})},t.handleSubmit=function(e){t.setState({characters:[].concat(Object(s.a)(t.state.characters),[e])})},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(t){return t.map((function(t){return{name:t.name,job:"Works at ".concat(t.company.name)}}))})).then((function(e){t.setState({characters:e})}))}},{key:"render",value:function(){var t=this.state.characters;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("h1",{className:"text-center",children:"React Example"})}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(d,{friends:t,removeCharacter:this.removeCharacter}),Object(a.jsx)(O,{handleSubmit:this.handleSubmit})]})]})}}]),n}(r.Component);n(15);i.a.render(Object(a.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ec6d76bc.chunk.js.map