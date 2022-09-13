(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var i=a(8),n=a.n(i),r=a(2),s=a(3),l=a(5),c=a(4),o=a(1),m=a.n(o),u=(a(14),a(9)),h=a.n(u),p=(a(15),a(7)),b=a.n(p),d=a(0),f=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).gap=20,e.state={translate:0,leftDisable:!e.props.infinite,rightDisable:!1,frameSize:e.props.frameSize},e.newFrameSize=e.state.frameSize,e.moveNext=function(){var t=e.state.translate,a=e.props,i=a.step,n=a.itemWidth,r=a.infinite;if(!(i>10-e.newFrameSize)||r){var s=n+e.gap,l=t-i*s,c=-s*(10-e.newFrameSize);l>=c?e.setState({translate:l,rightDisable:l===c&&!r,leftDisable:!1}):t===c&&r?e.setState({translate:0,rightDisable:!r}):e.setState({translate:c,rightDisable:!r})}},e.moveBack=function(){var t=e.state.translate,a=e.props,i=a.step,n=a.itemWidth,r=a.infinite;if(!(i>10-e.newFrameSize)||r){var s=n+e.gap,l=t+i*s,c=-s*(10-e.newFrameSize);l<=0?e.setState({translate:l,leftDisable:0===l&&!r,rightDisable:!1}):0===t&&r?e.setState({translate:c,leftDisable:!r}):e.setState({translate:0,leftDisable:!r})}},e.setLeftButton=function(){var t=e.state.translate,a=e.props.infinite;return!(t<0)&&!a},e.setRightButton=function(){var t=e.state.translate,a=e.props,i=a.itemWidth,n=a.infinite,r=-(i+e.gap)*(10-e.newFrameSize);return t>=r?t===r&&!n:!n},e.calcWrapperWidth=function(){var t=e.props,a=t.itemWidth,i=t.frameSize,n=a+e.gap;return i*n-20>1300?(e.newFrameSize=Math.trunc(1300/n),e.newFrameSize*n-e.gap):(e.newFrameSize=i,i*n-e.gap)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.images,a=e.itemWidth,i=e.animationDuration,n=this.state,r=n.rightDisable,s=n.leftDisable,l={width:this.calcWrapperWidth()},c={width:a},o={transitionDuration:"".concat(i,"ms"),transform:"translateX(".concat(this.state.translate,"px)"),gap:this.gap};return s=this.setLeftButton(),r=this.setRightButton(),Object(d.jsx)("div",{className:"wrapper",style:l,children:Object(d.jsxs)("div",{className:"Carousel",children:[Object(d.jsx)("ul",{className:"Carousel__list",style:o,children:t.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)("img",{src:e,alt:String(t+1),style:c})},h()())}))}),Object(d.jsxs)("div",{className:"Carousel__controls",children:[Object(d.jsx)("button",{type:"button",className:b()("Carousel__button",{"Carousel__button--enabled":!s}),onClick:this.moveBack,children:"<"}),Object(d.jsx)("button",{type:"button","data-cy":"next",className:b()("Carousel__button",{"Carousel__button--enabled":!r}),onClick:this.moveNext,children:">"})]})]})})}}]),a}(m.a.Component),g=f,j=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},e.handleItemWidth=function(t){var a=Number(t.target.value);a<70&&(a=70),a>500&&(a=500),e.setState({itemWidth:a})},e.handleFrameSize=function(t){var a=Number(t.target.value);a<1&&(a=1),a>10&&(a=10),e.setState({frameSize:a})},e.handleStep=function(t){var a=Number(t.target.value);a<1&&(a=1),a>10&&(a=10),e.setState({step:a})},e.handleAnimationDuration=function(t){var a=Number(t.target.value);a<1&&(a=1),e.setState({animationDuration:a})},e.handleInfinite=function(t){e.setState({infinite:t.target.checked})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.step,i=e.frameSize,n=e.itemWidth,r=e.animationDuration,s=e.infinite;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",t.length," images"]}),Object(d.jsxs)("div",{className:"controls",children:[Object(d.jsxs)("label",{children:["ItemWidth: ",Object(d.jsx)("input",{type:"number",name:"itemWidth",id:"ItemWidth",min:"70",max:"500",defaultValue:n,onChange:this.handleItemWidth})]}),Object(d.jsxs)("label",{children:["FrameSize: ",Object(d.jsx)("input",{type:"number",name:"frameSize",id:"frameSize",min:"1",max:"10",defaultValue:i,onChange:this.handleFrameSize})]}),Object(d.jsxs)("label",{children:["Step: ",Object(d.jsx)("input",{type:"number",name:"step",id:"step",min:"1",max:"10",defaultValue:a,onChange:this.handleStep})]}),Object(d.jsxs)("label",{children:["AnimationDuration: ",Object(d.jsx)("input",{type:"number",name:"animationDuration",id:"animationDuration",min:"1",defaultValue:r,onChange:this.handleAnimationDuration})]}),Object(d.jsxs)("label",{children:["Infinite: ",Object(d.jsx)("input",{type:"checkbox",name:"infinite",id:"infinite",checked:s,onChange:this.handleInfinite})]})]}),Object(d.jsx)(g,{images:t,step:a,frameSize:i,itemWidth:n,animationDuration:r,infinite:s})]})}}]),a}(m.a.Component),S=j;n.a.render(Object(d.jsx)(S,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9db14aab.chunk.js.map