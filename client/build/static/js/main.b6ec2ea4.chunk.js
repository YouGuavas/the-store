(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(t,n,e){t.exports=e(51)},50:function(t,n,e){},51:function(t,n,e){"use strict";e.r(n);var c,a=e(1),r=e.n(a),u=e(20),o=e.n(u),i=e(4),s=e(5),p=e(8),f=e(6),l=e(9),d=e(54),b=e(55),h=e(21),m=e.n(h);e(44).config();c="";var O=function(){var t="".concat(c,"/api/products");return m.a.get(t).then(function(t){return t.data})},j=function(t){function n(){var t;return Object(i.a)(this,n),(t=Object(p.a)(this,Object(f.a)(n).call(this))).getProducts=function(){O().then(function(n){t.setState({products:n})})},t.state={products:[]},t}return Object(l.a)(n,t),Object(s.a)(n,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.products.map(function(t){return JSON.stringify(t)}))}}]),n}(a.Component),v=function(t){function n(){return Object(i.a)(this,n),Object(p.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(l.a)(n,t),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(b.a,{exact:!0,path:"/",component:j}))}}]),n}(a.Component);e(50);o.a.render(r.a.createElement(v,null),document.getElementById("app"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b6ec2ea4.chunk.js.map