(window.webpackJsonpdice_app=window.webpackJsonpdice_app||[]).push([[0],{22:function(e,t,n){e.exports=n(35)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(13),l=n.n(o),r=(n(27),n(17)),c=n(5),s=n(14),d=n(15),u=n(20),m=n(16),g=n(21),h=(n(28),n(29),function(e){return i.a.createElement("i",{className:"Die fas fa-dice-".concat(e.num," ").concat(e.jiggling?"jiggling":"")})}),p=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={die1:"one",die2:"two",sides:6,rolling:!1},n.rollDice=function(){var e=n.props.dieSides[n.getRandomInt(n.props.dieSides.length)-1],t=n.props.dieSides[n.getRandomInt(n.props.dieSides.length)-1];n.setState({die1:e,die2:t,rolling:!0}),setTimeout(function(){n.setState({rolling:!1})},1e3)},n.getRandomInt=function(e){return Math.ceil(Math.random()*Math.ceil(e))},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e="Roll Dice";return this.state.rolling&&(e="Rolling..."),i.a.createElement("div",{className:"RollDice"},i.a.createElement("h1",{className:"header"},"No Dice!"),i.a.createElement("div",{className:"RollDice-container"},i.a.createElement(h,{num:this.state.die1,jiggling:this.state.rolling}),i.a.createElement(h,{num:this.state.die2,jiggling:this.state.rolling})),i.a.createElement("button",{onClick:this.rollDice,disabled:this.state.rolling},e))}}]),t}(a.Component);p.defaultProps={dieSides:["one","two","three","four","five","six"]};var f=p;var v=function(){return i.a.createElement("div",null,i.a.createElement(r.a,null,i.a.createElement(c.d,null,i.a.createElement(c.b,{path:"/",component:f}),i.a.createElement(c.a,{to:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.4c3864c4.chunk.js.map