(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[7580],{41584:function(e,t){"use strict";var n=Math.PI,i=2*n,r=1e-6,o=i-r;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function l(){return new a}a.prototype=l.prototype={constructor:a,moveTo:function(e,t){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,t){this._+="L"+(this._x1=+e)+","+(this._y1=+t)},quadraticCurveTo:function(e,t,n,i){this._+="Q"+ +e+","+ +t+","+(this._x1=+n)+","+(this._y1=+i)},bezierCurveTo:function(e,t,n,i,r,o){this._+="C"+ +e+","+ +t+","+ +n+","+ +i+","+(this._x1=+r)+","+(this._y1=+o)},arcTo:function(e,t,i,o,a){e=+e,t=+t,i=+i,o=+o,a=+a;var l=this._x1,s=this._y1,u=i-e,c=o-t,d=l-e,f=s-t,p=d*d+f*f;if(a<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=e)+","+(this._y1=t);else if(p>r)if(Math.abs(f*u-c*d)>r&&a){var h=i-l,y=o-s,g=u*u+c*c,x=h*h+y*y,v=Math.sqrt(g),m=Math.sqrt(p),b=a*Math.tan((n-Math.acos((g+p-x)/(2*v*m)))/2),k=b/m,P=b/v;Math.abs(k-1)>r&&(this._+="L"+(e+k*d)+","+(t+k*f)),this._+="A"+a+","+a+",0,0,"+ +(f*h>d*y)+","+(this._x1=e+P*u)+","+(this._y1=t+P*c)}else this._+="L"+(this._x1=e)+","+(this._y1=t);else;},arc:function(e,t,a,l,s,u){e=+e,t=+t,u=!!u;var c=(a=+a)*Math.cos(l),d=a*Math.sin(l),f=e+c,p=t+d,h=1^u,y=u?l-s:s-l;if(a<0)throw new Error("negative radius: "+a);null===this._x1?this._+="M"+f+","+p:(Math.abs(this._x1-f)>r||Math.abs(this._y1-p)>r)&&(this._+="L"+f+","+p),a&&(y<0&&(y=y%i+i),y>o?this._+="A"+a+","+a+",0,1,"+h+","+(e-c)+","+(t-d)+"A"+a+","+a+",0,1,"+h+","+(this._x1=f)+","+(this._y1=p):y>r&&(this._+="A"+a+","+a+",0,"+ +(y>=n)+","+h+","+(this._x1=e+a*Math.cos(s))+","+(this._y1=t+a*Math.sin(s))))},rect:function(e,t,n,i){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)+"h"+ +n+"v"+ +i+"h"+-n+"Z"},toString:function(){return this._}},t.Z=l},94942:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(41584),r=n(3583),o=n(30964),a=n(18091),l=n(92519);function s(){var e=l.x,t=null,n=(0,r.Z)(0),s=l.y,u=(0,r.Z)(!0),c=null,d=o.Z,f=null;function p(r){var o,a,l,p,h,y=r.length,g=!1,x=new Array(y),v=new Array(y);for(null==c&&(f=d(h=(0,i.Z)())),o=0;o<=y;++o){if(!(o<y&&u(p=r[o],o,r))===g)if(g=!g)a=o,f.areaStart(),f.lineStart();else{for(f.lineEnd(),f.lineStart(),l=o-1;l>=a;--l)f.point(x[l],v[l]);f.lineEnd(),f.areaEnd()}g&&(x[o]=+e(p,o,r),v[o]=+n(p,o,r),f.point(t?+t(p,o,r):x[o],s?+s(p,o,r):v[o]))}if(h)return f=null,h+""||null}function h(){return(0,a.Z)().defined(u).curve(d).context(c)}return p.x=function(n){return arguments.length?(e="function"==typeof n?n:(0,r.Z)(+n),t=null,p):e},p.x0=function(t){return arguments.length?(e="function"==typeof t?t:(0,r.Z)(+t),p):e},p.x1=function(e){return arguments.length?(t=null==e?null:"function"==typeof e?e:(0,r.Z)(+e),p):t},p.y=function(e){return arguments.length?(n="function"==typeof e?e:(0,r.Z)(+e),s=null,p):n},p.y0=function(e){return arguments.length?(n="function"==typeof e?e:(0,r.Z)(+e),p):n},p.y1=function(e){return arguments.length?(s=null==e?null:"function"==typeof e?e:(0,r.Z)(+e),p):s},p.lineX0=p.lineY0=function(){return h().x(e).y(n)},p.lineY1=function(){return h().x(e).y(s)},p.lineX1=function(){return h().x(t).y(n)},p.defined=function(e){return arguments.length?(u="function"==typeof e?e:(0,r.Z)(!!e),p):u},p.curve=function(e){return arguments.length?(d=e,null!=c&&(f=d(c)),p):d},p.context=function(e){return arguments.length?(null==e?c=f=null:f=d(c=e),p):c},p}},3583:function(e,t,n){"use strict";function i(e){return function(){return e}}n.d(t,{Z:function(){return i}})},18091:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(41584),r=n(3583),o=n(30964),a=n(92519);function l(){var e=a.x,t=a.y,n=(0,r.Z)(!0),l=null,s=o.Z,u=null;function c(r){var o,a,c,d=r.length,f=!1;for(null==l&&(u=s(c=(0,i.Z)())),o=0;o<=d;++o)!(o<d&&n(a=r[o],o,r))===f&&((f=!f)?u.lineStart():u.lineEnd()),f&&u.point(+e(a,o,r),+t(a,o,r));if(c)return u=null,c+""||null}return c.x=function(t){return arguments.length?(e="function"==typeof t?t:(0,r.Z)(+t),c):e},c.y=function(e){return arguments.length?(t="function"==typeof e?e:(0,r.Z)(+e),c):t},c.defined=function(e){return arguments.length?(n="function"==typeof e?e:(0,r.Z)(!!e),c):n},c.curve=function(e){return arguments.length?(s=e,null!=l&&(u=s(l)),c):s},c.context=function(e){return arguments.length?(null==e?l=u=null:u=s(l=e),c):l},c}},92519:function(e,t,n){"use strict";function i(e){return e[0]}function r(e){return e[1]}n.d(t,{x:function(){return i},y:function(){return r}})},48972:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});n(27378);var i=n(4215),r=n.n(i),o=n(19193),a=n.n(o),l=n(25414),s=n(10536),u=n(22543),c=n(76182),d=n(80169),f=n(18907),p=["svg"],h=[{key:"data",group:"Base",type:"BumpSerie<Datum, ExtraProps>[]",help:"Chart data.",flavors:p,description:"\n            Chart data, which must conform to this structure:\n\n            ```\n            {\n                id:   string\n                data: {\n                    x: number | string\n                    y: number | null\n                }[]\n            }[]\n            ```\n\n            This component assumes that every serie contains all\n            x values sorted the same way they should appear on the chart.\n            \n            As this component is a TypeScript generic, it is possible to customize\n            the datum using the `Datum` arg, and it's also possible to add\n            some extra properties to the series by passing `ExtraProps`.\n        ",required:!0}].concat((0,f.nk)(p),[{key:"interpolation",group:"Base",type:"string",help:"Line interpolation.",required:!1,flavors:["svg"],defaultValue:s.A5.interpolation,control:{type:"radio",choices:[{label:"smooth",value:"smooth"},{label:"linear",value:"linear"}]}},{key:"xPadding",group:"Base",type:"number",help:"X padding.",defaultValue:s.A5.xPadding,flavors:["svg"],required:!1,control:{type:"range",min:0,max:1,step:.05}},{key:"xOuterPadding",group:"Base",type:"number",help:"X outer padding.",defaultValue:s.A5.xOuterPadding,flavors:["svg"],required:!1,control:{type:"range",min:0,max:1,step:.05}},{key:"yOuterPadding",group:"Base",type:"number",help:"Y outer padding.",defaultValue:s.A5.yOuterPadding,flavors:["svg"],required:!1,control:{type:"range",min:0,max:1,step:.05}},(0,d.JR)(["svg"]),(0,f.at)({flavors:p,defaultValue:s.A5.colors}),{key:"lineWidth",group:"Style",type:"number | (serie: Serie) => number",help:"Line width.",flavors:["svg"],required:!1,defaultValue:s.A5.lineWidth,control:{type:"lineWidth"}},{key:"activeLineWidth",group:"Style",type:"number | (serie: Serie) => number",help:"Line width for active series.",flavors:["svg"],required:!1,defaultValue:s.A5.activeLineWidth,control:{type:"lineWidth"}},{key:"inactiveLineWidth",group:"Style",type:"number | (serie: Serie) => number",help:"Line width for inactive series.",defaultValue:s.A5.inactiveLineWidth,flavors:["svg"],required:!1,control:{type:"lineWidth"}},{key:"opacity",group:"Style",type:"number | (serie: Serie) => number",help:"Opacity.",defaultValue:s.A5.opacity,flavors:["svg"],required:!1,control:{type:"opacity"}},{key:"activeOpacity",group:"Style",type:"number | (serie: Serie) => number",help:"Opacity for active series.",defaultValue:s.A5.activeOpacity,flavors:["svg"],required:!1,control:{type:"opacity"}},{key:"inactiveOpacity",group:"Style",type:"number | (serie: Serie) => number",help:"Opacity for inactive series.",defaultValue:s.A5.inactiveOpacity,flavors:["svg"],required:!1,control:{type:"opacity"}},{key:"startLabel",help:"Start label, use a boolean to enable/disable, or a function to customize its text.",group:"Labels",type:"boolean | (serie: BumpSerie) => string",defaultValue:s.A5.startLabel,flavors:["svg"],required:!1,control:{type:"switch"}},{key:"startLabelPadding",help:"Start label padding.",group:"Labels",type:"number",defaultValue:s.A5.startLabelPadding,flavors:["svg"],required:!1,control:{type:"range",min:0,max:30}},{key:"startLabelTextColor",help:"Method to compute start label text color, or a function to customize its text.",type:"InheritedColorConfig<BumpComputedSerie>",required:!1,flavors:["svg"],defaultValue:s.A5.startLabelTextColor,control:{type:"inheritedColor"},group:"Labels"},{key:"endLabel",help:"End label, use a boolean to enable/disable, or a function to customize its text.",group:"Labels",type:"boolean | (serie: BumpSerie) => string",defaultValue:s.A5.endLabel,flavors:["svg"],required:!1,control:{type:"switch"}},{key:"endLabelPadding",help:"End label padding.",group:"Labels",type:"number",defaultValue:s.A5.endLabelPadding,flavors:["svg"],required:!1,control:{type:"range",min:0,max:30}},{key:"endLabelTextColor",help:"Method to compute end label text color.",type:"InheritedColorConfig<BumpComputedSerie>",required:!1,defaultValue:s.A5.endLabelTextColor,flavors:["svg"],control:{type:"inheritedColor"},group:"Labels"},{key:"pointSize",group:"Points",help:"Point size.",type:"number | Function",defaultValue:s.A5.pointSize,flavors:["svg"],required:!1,control:{type:"range",min:0,max:24}},{key:"activePointSize",group:"Points",help:"Point size for active series.",type:"number | Function",defaultValue:s.A5.activePointSize,flavors:["svg"],required:!1,control:{type:"range",min:0,max:24}},{key:"inactivePointSize",group:"Points",help:"Point size for inactive series.",type:"number | Function",defaultValue:s.A5.inactivePointSize,flavors:["svg"],required:!1,control:{type:"range",min:0,max:24}},{key:"pointColor",group:"Points",type:"string | object | Function",help:"Method to compute point fill color.",defaultValue:s.A5.pointColor,flavors:["svg"],required:!1,control:{type:"inheritedColor",inheritableProperties:["serie.color"],defaultFrom:"serie.color"}},{key:"pointBorderWidth",group:"Points",help:"Point border width.",type:"number | Function",defaultValue:s.A5.pointBorderWidth,flavors:["svg"],required:!1,control:{type:"lineWidth"}},{key:"activePointBorderWidth",group:"Points",help:"Point border width for active series.",type:"number | Function",defaultValue:s.A5.activePointBorderWidth,flavors:["svg"],required:!1,control:{type:"lineWidth"}},{key:"inactivePointBorderWidth",group:"Points",help:"Point border width for inactive series.",type:"number | Function",defaultValue:s.A5.inactivePointBorderWidth,flavors:["svg"],required:!1,control:{type:"lineWidth"}},{key:"pointBorderColor",group:"Points",type:"string | object | Function",help:"Method to compute point border color.",defaultValue:s.A5.pointBorderColor,flavors:["svg"],required:!1,control:{type:"inheritedColor",inheritableProperties:["color","serie.color"],defaultFrom:"color"}}],(0,f.yW)({flavors:p,xDefault:s.A5.enableGridX,yDefault:s.A5.enableGridY}),(0,f.Do)({flavors:p}),[(0,f.y1)({flavors:["svg"],defaultValue:s.A5.isInteractive}),{key:"onMouseEnter",group:"Interactivity",type:"(serie: BumpComputedSerie, event: MouseEvent) => void",help:"onMouseEnter handler.",required:!1,flavors:["svg"]},{key:"onMouseMove",group:"Interactivity",type:"(serie: BumpComputedSerie, event: MouseEvent) => void",help:"onMouseMove handler.",required:!1,flavors:["svg"]},{key:"onMouseLeave",group:"Interactivity",type:"(serie: BumpComputedSerie, event: MouseEvent) => void",help:"onMouseLeave handler.",required:!1,flavors:["svg"]},{key:"onClick",group:"Interactivity",type:"(serie: BumpComputedSerie, event: MouseEvent) => void",help:"onClick handler.",required:!1,flavors:["svg"]},{key:"tooltip",group:"Interactivity",type:"Function",required:!1,help:"Custom tooltip component.",description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML\n            element and will receive the series's data.\n        ",flavors:["svg"]}],(0,d.$j)(["svg"],s.A5,"react-spring")),y=(0,d.R2)(h),g=n(62370),x=(0,g.h8)({axisTop:(0,g.h6)("top"),axisRight:(0,g.h6)("right"),axisBottom:(0,g.h6)("bottom"),axisLeft:(0,g.h6)("left")},{exclude:["enable axisTop","enable axisRight","enable axisBottom","enable axisLeft"]}),v=n(24246);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},m.apply(this,arguments)}var b=function(){var e=r()(2e3,2005),t=r()(1,13),n=t.map((function(e){return{id:"Serie "+e,data:[]}}));return e.forEach((function(e){a()(t).forEach((function(t,i){n[i].data.push({x:e,y:t})}))})),n},k=m({},s.A5,{margin:{top:40,right:100,bottom:40,left:60},colors:{scheme:"spectral"},lineWidth:3,activeLineWidth:6,inactiveLineWidth:3,inactiveOpacity:.15,pointSize:10,activePointSize:16,inactivePointSize:0,pointColor:{theme:"background"},pointBorderWidth:3,activePointBorderWidth:3,inactivePointBorderWidth:0,pointBorderColor:{from:"serie.color"},axisTop:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendPosition:"middle",legendOffset:-36},axisRight:{enable:!1,tickSize:5,tickPadding:5,tickRotation:0,format:function(e){return"#"+e},legend:"ranking",legendPosition:"middle",legendOffset:40},axisBottom:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendPosition:"middle",legendOffset:32},axisLeft:{enable:!0,tickSize:5,tickPadding:5,tickRotation:0,format:function(e){return"#"+e},legend:"ranking",legendPosition:"middle",legendOffset:-40}}),P=function(){var e=(0,l.useStaticQuery)("2486893420").image.childImageSharp.gatsbyImageData;return(0,v.jsx)(u.T,{name:"Bump",meta:c.j,icon:"chord",flavors:c.K,currentFlavor:"svg",properties:y,defaultProperties:s.A5,initialProperties:k,propertiesMapper:x,generateData:b,image:e,children:function(e,t,n,i){return(0,v.jsx)(s.W$,m({data:t},e,{theme:n,onClick:function(e){return i({type:"click",label:"[serie] "+e.id,color:e.color,data:e})}}))}})}},44365:function(e,t,n){"use strict";n.d(t,{dk:function(){return k},RD:function(){return x},rj:function(){return _},VT:function(){return m},DZ:function(){return C},RN:function(){return A},FA:function(){return M}});var i=n(27378),r=n(58493),o=n(45434),a=n(6164),l=n(16935),s=n(770),u=n(24246),c=n(23615),d=n.n(c);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},f.apply(this,arguments)}var p=function(e){var t,n=e.axis,i=e.scale,r=e.ticksPosition,a=e.tickValues,l=e.tickSize,u=e.tickPadding,c=e.tickRotation,d=e.engine,p=void 0===d?"svg":d,h=(0,s.xX)(i,a),y=o.a6[p],g="bandwidth"in i?(0,s.Gv)(i):i,x={lineX:0,lineY:0},v={textX:0,textY:0},m="object"==typeof document&&"rtl"===document.dir,b=y.align.center,k=y.baseline.center;return"x"===n?(t=function(e){var t;return{x:null!=(t=g(e))?t:0,y:0}},x.lineY=l*("after"===r?1:-1),v.textY=(l+u)*("after"===r?1:-1),k="after"===r?y.baseline.top:y.baseline.bottom,0===c?b=y.align.center:"after"===r&&c<0||"before"===r&&c>0?(b=y.align[m?"left":"right"],k=y.baseline.center):("after"===r&&c>0||"before"===r&&c<0)&&(b=y.align[m?"right":"left"],k=y.baseline.center)):(t=function(e){var t;return{x:0,y:null!=(t=g(e))?t:0}},x.lineX=l*("after"===r?1:-1),v.textX=(l+u)*("after"===r?1:-1),b="after"===r?y.align.left:y.align.right),{ticks:h.map((function(e){return f({key:"number"==typeof e||"string"==typeof e?e:""+e,value:e},t(e),x,v)})),textAlign:b,textBaseline:k}},h=function(e,t){if(void 0===e||"function"==typeof e)return e;if("time"===t.type){var n=(0,a.i$)(e);return function(e){return n(e instanceof Date?e:new Date(e))}}return(0,l.WU)(e)},y=function(e){var t,n=e.width,i=e.height,r=e.scale,o=e.axis,a=e.values,l=(t=a,(Array.isArray(t)?a:void 0)||(0,s.xX)(r,a)),u="bandwidth"in r?(0,s.Gv)(r):r,c="x"===o?l.map((function(e){var t,n;return{key:""+e,x1:null!=(t=u(e))?t:0,x2:null!=(n=u(e))?n:0,y1:0,y2:i}})):l.map((function(e){var t,i;return{key:""+e,x1:0,x2:n,y1:null!=(t=u(e))?t:0,y2:null!=(i=u(e))?i:0}}));return c},g=(0,i.memo)((function(e){var t,n=e.value,a=e.format,l=e.lineX,s=e.lineY,c=e.onClick,d=e.textBaseline,p=e.textAnchor,h=e.animatedProps,y=(0,o.Fg)(),g=null!=(t=null==a?void 0:a(n))?t:n,x=(0,i.useMemo)((function(){var e={opacity:h.opacity};return c?{style:f({},e,{cursor:"pointer"}),onClick:function(e){return c(e,g)}}:{style:e}}),[h.opacity,c,g]);return(0,u.jsxs)(r.q.g,f({transform:h.transform},x,{children:[(0,u.jsx)("line",{x1:0,x2:l,y1:0,y2:s,style:y.axis.ticks.line}),(0,u.jsx)(r.q.text,{dominantBaseline:d,textAnchor:p,transform:h.textTransform,style:y.axis.ticks.text,children:g})]}))})),x=(0,i.memo)((function(e){var t=e.axis,n=e.scale,a=e.x,l=void 0===a?0:a,s=e.y,c=void 0===s?0:s,d=e.length,y=e.ticksPosition,x=e.tickValues,v=e.tickSize,m=void 0===v?5:v,b=e.tickPadding,k=void 0===b?5:b,P=e.tickRotation,S=void 0===P?0:P,_=e.format,A=e.renderTick,C=void 0===A?g:A,M=e.legend,q=e.legendPosition,B=void 0===q?"end":q,L=e.legendOffset,T=void 0===L?0:L,W=e.onClick,w=e.ariaHidden,V=(0,o.Fg)(),O=(0,i.useMemo)((function(){return h(_,n)}),[_,n]),z=p({axis:t,scale:n,ticksPosition:y,tickValues:x,tickSize:m,tickPadding:k,tickRotation:S}),j=z.ticks,Z=z.textAlign,E=z.textBaseline,F=null;if(void 0!==M){var X,R=0,Y=0,D=0;"y"===t?(D=-90,R=T,"start"===B?(X="start",Y=d):"middle"===B?(X="middle",Y=d/2):"end"===B&&(X="end")):(Y=T,"start"===B?X="start":"middle"===B?(X="middle",R=d/2):"end"===B&&(X="end",R=d)),F=(0,u.jsx)("text",{transform:"translate("+R+", "+Y+") rotate("+D+")",textAnchor:X,style:f({dominantBaseline:"central"},V.axis.legend.text),children:M})}var I=(0,o.tf)(),H=I.animate,G=I.config,N=(0,r.useSpring)({transform:"translate("+l+","+c+")",lineX2:"x"===t?d:0,lineY2:"x"===t?0:d,config:G,immediate:!H}),$=(0,r.useTransition)(j,{keys:function(e){return e.key},initial:function(e){return{opacity:1,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+S+")"}},from:function(e){return{opacity:0,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+S+")"}},enter:function(e){return{opacity:1,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+S+")"}},update:function(e){return{opacity:1,transform:"translate("+e.x+","+e.y+")",textTransform:"translate("+e.textX+","+e.textY+") rotate("+S+")"}},leave:{opacity:0},config:G,immediate:!H});return(0,u.jsxs)(r.q.g,{transform:N.transform,"aria-hidden":w,children:[$((function(e,t,n,r){return i.createElement(C,f({tickIndex:r,format:O,rotate:S,textBaseline:E,textAnchor:Z,animatedProps:e},t,W?{onClick:W}:{}))})),(0,u.jsx)(r.q.line,{style:V.axis.domain.line,x1:0,x2:N.lineX2,y1:0,y2:N.lineY2}),F]})})),v={ticksPosition:d().oneOf(["before","after"]),tickValues:d().oneOfType([d().number,d().arrayOf(d().oneOfType([d().number,d().string,d().instanceOf(Date)])),d().string]),tickSize:d().number,tickPadding:d().number,tickRotation:d().number,format:d().oneOfType([d().func,d().string]),renderTick:d().func,legend:d().node,legendPosition:d().oneOf(["start","middle","end"]),legendOffset:d().number,ariaHidden:d().bool},m=d().shape(v),b=["top","right","bottom","left"],k=(0,i.memo)((function(e){var t=e.xScale,n=e.yScale,i=e.width,r=e.height,o={top:e.top,right:e.right,bottom:e.bottom,left:e.left};return(0,u.jsx)(u.Fragment,{children:b.map((function(e){var a=o[e];if(!a)return null;var l="top"===e||"bottom"===e;return(0,u.jsx)(x,f({},a,{axis:l?"x":"y",x:"right"===e?i:0,y:"bottom"===e?r:0,scale:l?t:n,length:l?i:r,ticksPosition:"top"===e||"left"===e?"before":"after"}),e)}))})})),P=(0,i.memo)((function(e){var t=e.animatedProps,n=(0,o.Fg)();return(0,u.jsx)(r.q.line,f({},t,n.grid.line))})),S=(0,i.memo)((function(e){var t=e.lines,n=(0,o.tf)(),a=n.animate,l=n.config,s=(0,r.useTransition)(t,{keys:function(e){return e.key},initial:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},from:function(e){return{opacity:0,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},enter:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},update:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},leave:{opacity:0},config:l,immediate:!a});return(0,u.jsx)("g",{children:s((function(e,t){return(0,i.createElement)(P,f({},t,{key:t.key,animatedProps:e}))}))})})),_=(0,i.memo)((function(e){var t=e.width,n=e.height,r=e.xScale,o=e.yScale,a=e.xValues,l=e.yValues,s=(0,i.useMemo)((function(){return!!r&&y({width:t,height:n,scale:r,axis:"x",values:a})}),[r,a,t,n]),c=(0,i.useMemo)((function(){return!!o&&y({width:t,height:n,scale:o,axis:"y",values:l})}),[n,t,o,l]);return(0,u.jsxs)(u.Fragment,{children:[s&&(0,u.jsx)(S,{lines:s}),c&&(0,u.jsx)(S,{lines:c})]})})),A=function(e,t){var n,i=t.axis,r=t.scale,a=t.x,l=void 0===a?0:a,s=t.y,u=void 0===s?0:s,c=t.length,d=t.ticksPosition,f=t.tickValues,h=t.tickSize,y=void 0===h?5:h,g=t.tickPadding,x=void 0===g?5:g,v=t.tickRotation,m=void 0===v?0:v,b=t.format,k=t.legend,P=t.legendPosition,S=void 0===P?"end":P,_=t.legendOffset,A=void 0===_?0:_,C=t.theme,M=p({axis:i,scale:r,ticksPosition:d,tickValues:f,tickSize:y,tickPadding:x,tickRotation:m,engine:"canvas"}),q=M.ticks,B=M.textAlign,L=M.textBaseline;e.save(),e.translate(l,u),e.textAlign=B,e.textBaseline=L,e.font=(C.axis.ticks.text.fontWeight?C.axis.ticks.text.fontWeight+" ":"")+C.axis.ticks.text.fontSize+"px "+C.axis.ticks.text.fontFamily,(null!=(n=C.axis.domain.line.strokeWidth)?n:0)>0&&(e.lineWidth=Number(C.axis.domain.line.strokeWidth),e.lineCap="square",C.axis.domain.line.stroke&&(e.strokeStyle=C.axis.domain.line.stroke),e.beginPath(),e.moveTo(0,0),e.lineTo("x"===i?c:0,"x"===i?0:c),e.stroke());var T="function"==typeof b?b:function(e){return""+e};if(q.forEach((function(t){var n;(null!=(n=C.axis.ticks.line.strokeWidth)?n:0)>0&&(e.lineWidth=Number(C.axis.ticks.line.strokeWidth),e.lineCap="square",C.axis.ticks.line.stroke&&(e.strokeStyle=C.axis.ticks.line.stroke),e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.x+t.lineX,t.y+t.lineY),e.stroke());var i=T(t.value);e.save(),e.translate(t.x+t.textX,t.y+t.textY),e.rotate((0,o.Ht)(m)),C.axis.ticks.text.fill&&(e.fillStyle=C.axis.ticks.text.fill),e.fillText(String(i),0,0),e.restore()})),void 0!==k){var W=0,w=0,V=0,O="center";"y"===i?(V=-90,W=A,"start"===S?(O="start",w=c):"middle"===S?(O="center",w=c/2):"end"===S&&(O="end")):(w=A,"start"===S?O="start":"middle"===S?(O="center",W=c/2):"end"===S&&(O="end",W=c)),e.translate(W,w),e.rotate((0,o.Ht)(V)),e.font=(C.axis.legend.text.fontWeight?C.axis.legend.text.fontWeight+" ":"")+C.axis.legend.text.fontSize+"px "+C.axis.legend.text.fontFamily,C.axis.legend.text.fill&&(e.fillStyle=C.axis.legend.text.fill),e.textAlign=O,e.textBaseline="middle",e.fillText(k,0,0)}e.restore()},C=function(e,t){var n=t.xScale,i=t.yScale,r=t.width,o=t.height,a=t.top,l=t.right,s=t.bottom,u=t.left,c=t.theme,d={top:a,right:l,bottom:s,left:u};b.forEach((function(t){var a=d[t];if(!a)return null;var l="top"===t||"bottom"===t,s="top"===t||"left"===t?"before":"after",u=l?n:i,p=h(a.format,u);A(e,f({},a,{axis:l?"x":"y",x:"right"===t?r:0,y:"bottom"===t?o:0,scale:u,format:p,length:l?r:o,ticksPosition:s,theme:c}))}))},M=function(e,t){var n=t.width,i=t.height,r=t.scale,o=t.axis,a=t.values;y({width:n,height:i,scale:r,axis:o,values:a}).forEach((function(t){e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.stroke()}))}},91573:function(e,t,n){var i=n(37561),r=n(74305);e.exports=function(e){return r(i(e))}},76418:function(e){var t=Math.floor,n=Math.random;e.exports=function(e,i){return e+t(n()*(i-e+1))}},16326:function(e,t,n){var i=n(74305),r=n(58185);e.exports=function(e){return i(r(e))}},42231:function(e,t,n){var i=n(66070);e.exports=function(e,t){return i(t,(function(t){return e[t]}))}},74305:function(e,t,n){var i=n(76418);e.exports=function(e,t){var n=-1,r=e.length,o=r-1;for(t=void 0===t?r:t;++n<t;){var a=i(n,o),l=e[a];e[a]=e[n],e[n]=l}return e.length=t,e}},19193:function(e,t,n){var i=n(91573),r=n(16326),o=n(19785);e.exports=function(e){return(o(e)?i:r)(e)}},58185:function(e,t,n){var i=n(42231),r=n(50098);e.exports=function(e){return null==e?[]:i(e,r(e))}}}]);
//# sourceMappingURL=component---src-pages-bump-index-tsx-9ce412732dbe5afef037.js.map