(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[8201],{41584:function(t,e){"use strict";var n=Math.PI,r=2*n,o=1e-6,i=r-o;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function l(){return new a}a.prototype=l.prototype={constructor:a,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,n,r){this._+="Q"+ +t+","+ +e+","+(this._x1=+n)+","+(this._y1=+r)},bezierCurveTo:function(t,e,n,r,o,i){this._+="C"+ +t+","+ +e+","+ +n+","+ +r+","+(this._x1=+o)+","+(this._y1=+i)},arcTo:function(t,e,r,i,a){t=+t,e=+e,r=+r,i=+i,a=+a;var l=this._x1,u=this._y1,c=r-t,s=i-e,d=l-t,f=u-e,h=d*d+f*f;if(a<0)throw new Error("negative radius: "+a);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=e);else if(h>o)if(Math.abs(f*c-s*d)>o&&a){var p=r-l,m=i-u,v=c*c+s*s,g=p*p+m*m,y=Math.sqrt(v),x=Math.sqrt(h),b=a*Math.tan((n-Math.acos((v+h-g)/(2*y*x)))/2),C=b/x,M=b/y;Math.abs(C-1)>o&&(this._+="L"+(t+C*d)+","+(e+C*f)),this._+="A"+a+","+a+",0,0,"+ +(f*p>d*m)+","+(this._x1=t+M*c)+","+(this._y1=e+M*s)}else this._+="L"+(this._x1=t)+","+(this._y1=e);else;},arc:function(t,e,a,l,u,c){t=+t,e=+e,c=!!c;var s=(a=+a)*Math.cos(l),d=a*Math.sin(l),f=t+s,h=e+d,p=1^c,m=c?l-u:u-l;if(a<0)throw new Error("negative radius: "+a);null===this._x1?this._+="M"+f+","+h:(Math.abs(this._x1-f)>o||Math.abs(this._y1-h)>o)&&(this._+="L"+f+","+h),a&&(m<0&&(m=m%r+r),m>i?this._+="A"+a+","+a+",0,1,"+p+","+(t-s)+","+(e-d)+"A"+a+","+a+",0,1,"+p+","+(this._x1=f)+","+(this._y1=h):m>o&&(this._+="A"+a+","+a+",0,"+ +(m>=n)+","+p+","+(this._x1=t+a*Math.cos(u))+","+(this._y1=e+a*Math.sin(u))))},rect:function(t,e,n,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +n+"v"+ +r+"h"+-n+"Z"},toString:function(){return this._}},e.Z=l},94942:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(41584),o=n(3583),i=n(30964),a=n(18091),l=n(92519);function u(){var t=l.x,e=null,n=(0,o.Z)(0),u=l.y,c=(0,o.Z)(!0),s=null,d=i.Z,f=null;function h(o){var i,a,l,h,p,m=o.length,v=!1,g=new Array(m),y=new Array(m);for(null==s&&(f=d(p=(0,r.Z)())),i=0;i<=m;++i){if(!(i<m&&c(h=o[i],i,o))===v)if(v=!v)a=i,f.areaStart(),f.lineStart();else{for(f.lineEnd(),f.lineStart(),l=i-1;l>=a;--l)f.point(g[l],y[l]);f.lineEnd(),f.areaEnd()}v&&(g[i]=+t(h,i,o),y[i]=+n(h,i,o),f.point(e?+e(h,i,o):g[i],u?+u(h,i,o):y[i]))}if(p)return f=null,p+""||null}function p(){return(0,a.Z)().defined(c).curve(d).context(s)}return h.x=function(n){return arguments.length?(t="function"==typeof n?n:(0,o.Z)(+n),e=null,h):t},h.x0=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.Z)(+e),h):t},h.x1=function(t){return arguments.length?(e=null==t?null:"function"==typeof t?t:(0,o.Z)(+t),h):e},h.y=function(t){return arguments.length?(n="function"==typeof t?t:(0,o.Z)(+t),u=null,h):n},h.y0=function(t){return arguments.length?(n="function"==typeof t?t:(0,o.Z)(+t),h):n},h.y1=function(t){return arguments.length?(u=null==t?null:"function"==typeof t?t:(0,o.Z)(+t),h):u},h.lineX0=h.lineY0=function(){return p().x(t).y(n)},h.lineY1=function(){return p().x(t).y(u)},h.lineX1=function(){return p().x(e).y(n)},h.defined=function(t){return arguments.length?(c="function"==typeof t?t:(0,o.Z)(!!t),h):c},h.curve=function(t){return arguments.length?(d=t,null!=s&&(f=d(s)),h):d},h.context=function(t){return arguments.length?(null==t?s=f=null:f=d(s=t),h):s},h}},3583:function(t,e,n){"use strict";function r(t){return function(){return t}}n.d(e,{Z:function(){return r}})},18091:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(41584),o=n(3583),i=n(30964),a=n(92519);function l(){var t=a.x,e=a.y,n=(0,o.Z)(!0),l=null,u=i.Z,c=null;function s(o){var i,a,s,d=o.length,f=!1;for(null==l&&(c=u(s=(0,r.Z)())),i=0;i<=d;++i)!(i<d&&n(a=o[i],i,o))===f&&((f=!f)?c.lineStart():c.lineEnd()),f&&c.point(+t(a,i,o),+e(a,i,o));if(s)return c=null,s+""||null}return s.x=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.Z)(+e),s):t},s.y=function(t){return arguments.length?(e="function"==typeof t?t:(0,o.Z)(+t),s):e},s.defined=function(t){return arguments.length?(n="function"==typeof t?t:(0,o.Z)(!!t),s):n},s.curve=function(t){return arguments.length?(u=t,null!=l&&(c=u(l)),s):u},s.context=function(t){return arguments.length?(null==t?l=c=null:c=u(l=t),s):l},s}},92519:function(t,e,n){"use strict";function r(t){return t[0]}function o(t){return t[1]}n.d(e,{x:function(){return r},y:function(){return o}})},18957:function(t,e,n){"use strict";n.d(e,{a:function(){return a}});var r=n(61904),o=n(15050),i=(0,r.Z)((function(t){t.setHours(0,0,0,0)}),(function(t,e){t.setDate(t.getDate()+e)}),(function(t,e){return(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*o.yB)/o.UD}),(function(t){return t.getDate()-1}));e.Z=i;var a=i.range},45395:function(t,e,n){"use strict";var r,o,i=n(91542),a=n(51302);function l(t,e){return e||(e=t.slice(0)),t.raw=e,t}e.Z=i.default.div.withConfig({displayName:"PageContent",componentId:"sc-5c9r0p-0"})(["margin:0 50px;position:relative;"," ",""],a.Z.tablet(r||(r=l(["\n        & {\n            margin: 0 30px;\n        }\n    "]))),a.Z.mobile(o||(o=l(["\n        & {\n            margin: 0 15px;\n        }\n    "]))))},80500:function(t,e,n){"use strict";n.d(e,{Xh:function(){return u},rm:function(){return c},Zb:function(){return s}});var r,o,i=n(91542),a=n(51302);function l(t,e){return e||(e=t.slice(0)),t.raw=e,t}var u=i.default.div.withConfig({displayName:"styled__FullWidthBanner",componentId:"sc-1aonzv1-0"})(["background:",";margin-bottom:40px;padding:20px;"],(function(t){return t.theme.colors.cardBackground})),c=i.default.div.withConfig({displayName:"styled__DescriptionBlock",componentId:"sc-1aonzv1-1"})(["max-width:800px;margin:0 auto 50px;"," ",""],a.Z.tablet(r||(r=l(["\n        & {\n            margin: 0 15px 50px;\n        }\n    "]))),a.Z.mobile(o||(o=l(["\n        & {\n            margin: 0 15px 50px;\n        }\n    "])))),s=i.default.div.withConfig({displayName:"styled__Card",componentId:"sc-1aonzv1-2"})(["background:",";box-shadow:",";"],(function(t){return t.theme.colors.cardBackground}),(function(t){return t.theme.cardShadow}))},11372:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return C}});var r=n(27378),o=n(25414),i=n(81739),a=n(95546),l=n(45395),u=n(91542),c=n(98383),s=n(74186),d=n(62443),f=n(46222),h=n(38681),p=n(80500),m=n(24246),v=function(){var t=(0,u.useTheme)();return(0,m.jsx)(p.Xh,{children:(0,m.jsxs)("div",{className:"guide__illustrations",children:[(0,m.jsx)("div",{className:"guide__illustrations__item",children:(0,m.jsx)(d.p_,{margin:{top:-2,right:-2,bottom:-2,left:-2},data:(0,h.aw)(["a","b","c"],{size:9}),indexBy:"country",keys:["a","b","c"],offsetType:"expand",axisLeft:null,axisBottom:null,enableGridX:!1,defs:[(0,c.c$)("example1A",[{offset:0,color:"#faed94"},{offset:30,color:"#faf047"},{offset:100,color:"#e4b400"}]),(0,c.c$)("example1B",[{offset:0,color:"#a8f9eb"},{offset:30,color:"#97e3d5"},{offset:100,color:"#458a7d"}]),(0,c.c$)("example1C",[{offset:0,color:"#f9804e"},{offset:30,color:"#f96a3d"},{offset:100,color:"#a84f35"}])],fill:[{match:{id:"a"},id:"example1A"},{match:{id:"b"},id:"example1B"},{match:{id:"c"},id:"example1C"}],isInteractive:!1,animate:!1,theme:t.nivo})}),(0,m.jsx)("div",{className:"guide__illustrations__item",children:(0,m.jsx)(s.jM,{margin:{top:15,right:10,bottom:-2,left:10},data:(0,h.aw)(["a","b","c"],{size:7}),indexBy:"country",keys:["a","b","c"],colors:{scheme:"spectral"},padding:.2,axisLeft:null,axisBottom:null,enableGridY:!1,enableLabel:!1,defs:[(0,c.c$)("example2",[{offset:0,color:"inherit"},{offset:40,color:"inherit"},{offset:100,color:"inherit",opacity:.6}])],fill:[{match:"*",id:"example2"}],borderWidth:1,borderColor:"inherit:darker(0.2)",isInteractive:!1,animate:!1,theme:t.nivo})}),(0,m.jsx)("div",{className:"guide__illustrations__item",children:(0,m.jsx)(f.R0,{margin:{top:-2,right:-2,bottom:-2,left:-2},data:{country:"root",children:(0,h.aw)(["value"],{size:9})},colors:{scheme:"spectral"},colorBy:"path",identity:"country",leavesOnly:!1,borderWidth:1,nodeOpacity:1,borderColor:{theme:"background"},outerPadding:10,innerPadding:4,enableParentLabel:!1,isInteractive:!1,animate:!1,enableLabel:!1,defs:[(0,c.c$)("example2",[{offset:0,color:"inherit"},{offset:40,color:"inherit"},{offset:100,color:"inherit",opacity:.3}])],fill:[{match:"*",id:"example2"}],theme:t.nivo})}),(0,m.jsx)("div",{className:"guide__illustrations__legend",children:"gradients applied to various nivo components."})]})})},g=n(80398),y="\nimport { linearGradientDef } from '@nivo/core'\nimport { Stream } from '@nivo/stream'\n\nconst MyChart = () => (\n    <Stream\n        data={[/*…*/]}\n        keys={['react', 'vue', 'elm']}\n        // 1. defining gradients\n        defs={[\n            // using helpers\n            // will inherit colors from current element\n            linearGradientDef('gradientA', [\n                { offset: 0, color: 'inherit' },\n                { offset: 100, color: 'inherit', opacity: 0 },\n            ]),\n            linearGradientDef('gradientB', [\n                { offset: 0, color: '#000' },\n                { offset: 100, color: 'inherit' },\n            ],\n            // you may specify transforms for your gradients, e.g. rotations and skews,\n            // following the transform attribute format.\n            // For instance here we rotate 90 degrees relative to the center of the object.\n            {\n                gradientTransform: 'rotate(90 0.5 0.5)'\n            }),\n            // using plain object\n            {\n                id: 'gradientC',\n                type: 'linearGradient',\n                colors: [\n                    { offset: 0, color: '#faf047' },\n                    { offset: 100, color: '#e4b400' },\n                ],\n            },\n        ]}\n        // 2. defining rules to apply those gradients\n        fill={[\n            // match using object query\n            { match: { id: 'react' }, id: 'gradientA' },\n            // match using function\n            { match: d => d.id === 'vue', id: 'gradientB' },\n            // match all, will only affect 'elm', because once a rule match,\n            // others are skipped, so now it acts as a fallback\n            { match: '*', id: 'gradientC' },\n        ]}\n    />\n)\n".trim(),x=function(){return(0,m.jsx)(g.y,{code:y,language:"jsx"})};function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}var C=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,b(e,n),r.prototype.render=function(){return(0,m.jsxs)(i.Z,{children:[(0,m.jsx)(a.p,{title:"Gradients Guide"}),(0,m.jsx)(l.Z,{children:(0,m.jsx)("div",{className:"guide__header",children:(0,m.jsx)("h1",{children:"Gradients"})})}),(0,m.jsxs)(p.rm,{children:[(0,m.jsx)("p",{children:"While gradients rarely add meaning to your data, it's an easy way to enhance the look of your charts."}),(0,m.jsx)("h2",{children:"Using gradients in nivo"}),(0,m.jsxs)("p",{children:["Defining gradients in nivo is a ",(0,m.jsx)("strong",{children:"2 steps process"}),", first you'll have to declare available definitions (the same goes for"," ",(0,m.jsx)(o.Link,{to:"/guides/patterns",children:"patterns"}),") using dedicated helpers or providing plain objects.",(0,m.jsx)("br",{}),"Then you must define the rules to apply those definitions using the"," ",(0,m.jsx)("code",{children:"fill"})," property."]})]}),(0,m.jsx)(v,{}),(0,m.jsxs)(p.rm,{children:[(0,m.jsxs)("p",{children:[(0,m.jsx)("strong",{children:"Separating gradient definitions from application"})," allows us to reuse those in various places, like fills and borders, and while maintaining a direct mapping for a bar chart with 5 items can be simple enough, when you're dealing with a complex heatmap with tens of nodes it can quickly become cumbersome. Doing so also provides the ability to"," ",(0,m.jsx)("strong",{children:"use a gradient depending on chart element value"}),". Last but not least, ",(0,m.jsx)("strong",{children:"gradient colors can be inherited"})," from current node ones."]}),(0,m.jsx)("h2",{children:"Example"}),(0,m.jsx)(x,{}),(0,m.jsx)("h2",{children:"Known limitations"}),(0,m.jsxs)("p",{children:["Please be aware that gradient usage has some limitations, it's"," ",(0,m.jsx)("strong",{children:"not supported for canvas"})," chart implementations for now, and tooltips involving colored chips will use plain element color."]})]})]})},r}(r.Component)},38681:function(t,e,n){"use strict";n.d(e,{j2:function(){return v},wQ:function(){return g},aw:function(){return N},x$:function(){return D},ak:function(){return O},UE:function(){return P},$j:function(){return y},BO:function(){return b},Tz:function(){return G},O$:function(){return B},B7:function(){return W},gq:function(){return w},zn:function(){return H},Ls:function(){return A},FQ:function(){return T},vQ:function(){return m}});var r=n(4215),o=n.n(r),i=n(91311),a=n.n(i),l=n(19193),u=n.n(l),c=n(18957),s=n(6164),d=function(){return"hsl("+Math.round(360*Math.random())+", 70%, 50%)"},f=["AD","AE","AF","AG","AI","AL","AM","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BQ","BQ","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","YE","YT","ZA","ZM","ZW"],h=["John","Raoul","Jane","Marcel","Ibrahim","Junko","Lyu","André","Maki","Véronique","Thibeau","Josiane","Raphaël","Mathéo","Margot","Hugo","Christian","Louis","Ella","Alton","Jimmy","Guillaume","Sébastien","Alfred","Bon","Solange","Kendrick","Jared","Satoko","Tomoko","Line","Delphine","Leonard","Alphonse","Lisa","Bart","Benjamin","Homer","Jack"],p=["php","make","javascript","go","erlang","elixir","lisp","haskell","python","ruby","hack","scala","java","rust","c","css","sass","stylus"],m=Object.freeze({__proto__:null,countryCodes:f,names:h,programmingLanguages:p}),v=function(t,e,n){var r=void 0===n?{}:n,i=r.title,l=r.subtitle,u=r.rangeCount,c=void 0===u?5:u,s=r.measureCount,d=void 0===s?1:s,f=r.markerCount,h=void 0===f?1:f,p=r.float,m=void 0!==p&&p;return{id:t,title:i,subtitle:l,ranges:o()(c-1).reduce((function(t){var n=e-t[0];return[a()(n,m)].concat(t)}),[e]),measures:o()(d).reduce((function(t){return 0===t.length?[a()(e,m)]:[a()(t[0],m)].concat(t)}),[]),markers:o()(h).map((function(){return.6*e+a()(.4*e)}))}},g=function(t){var e=void 0===t?{}:t,n=e.keys,r=void 0===n?h:n,i=e.size,l=void 0===i?7:i,u=e.minValue,c=void 0===u?0:u,s=e.maxValue,d=void 0===s?2e3:s,f=Math.min(r.length,l),p=r.slice(0,f);return{matrix:o()(f).map((function(){return o()(f).map((function(){return Math.random()<.66?a()(c,d/4):a()(c,d)}))})),keys:p}},y=function(t){var e=void 0===t?{}:t,n=e.rootSize,r=void 0===n?32:n,o=e.midSize,i=void 0===o?24:o,l=e.leafSize,u=void 0===l?12:l,c=e.minMidNodes,s=void 0===c?5:c,d=e.maxMidNodes,f=void 0===d?11:d,h=e.minLeaves,p=void 0===h?3:h,m=e.maxLeaves,v=void 0===m?9:m,g={id:"Node 0",height:2,size:r,color:"rgb(244, 117, 96)"},y=Array.from({length:a()(s,f)},(function(t,e){return{id:"Node "+(e+1),height:1,size:i,color:"rgb(97, 205, 187)"}})),x=[],b=[];return y.forEach((function(t){x.push({source:"Node 0",target:t.id,distance:80}),y.forEach((function(e){Math.random()<.04&&x.push({source:t.id,target:e.id,distance:80})})),Array.from({length:a()(p,v)},(function(e,n){return b.push({id:t.id+"."+n,height:0,size:u,color:"rgb(232, 193, 160)"}),x.push({source:t.id,target:t.id+"."+n,distance:50}),null}))})),y.push(g),{nodes:y=y.concat(b),links:x}};function x(){return x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},x.apply(this,arguments)}var b=function(t){var e=void 0===t?{}:t,n=e.size,r=void 0===n?26:n,i=e.keys,l=void 0===i?[{key:"temp",random:[-10,40]},{key:"cost",random:[200,4e5]},{key:"color",shuffle:["red","yellow","green"]},{key:"target",shuffle:["A","B","C","D","E"]},{key:"volume",random:[.2,7.6]}]:i;return o()(r).map((function(){return l.reduce((function(t,e){var n,r;return void 0!==e.random?r=a().apply(void 0,e.random):void 0!==e.shuffle&&(r=u()(e.shuffle)[0]),x({},t,((n={})[e.key]=r,n))}),{})}))},C=h.map((function(t){return{id:t}})),M=function t(e,n,r){var o=n.filter((function(t){return t.source===e})).map((function(t){var n=t.target;if(n===e)throw new Error("[sankey] a node cannot be linked on itself:\n  link: "+e+" —> "+e);if(null!=r&&r.includes(n))throw new Error("[sankey] found cyclic dependency:\n  link: "+r.join(" —> ")+" —> "+n);return n}));return o.reduce((function(o,i){return o.concat(t(i,n,r?[].concat(r,[i]):[e,i]))}),o)},_=function(t){return t.reduce((function(e,n){return e[n.source]||(e[n.source]=M(n.source,t)),e}),{})},B=function(t){var e=void 0===t?{}:t,n=e.nodeCount,r=e.maxIterations,i=void 0===r?3:r,l=C.slice(0,n).map((function(t){return Object.assign({},t,{nodeColor:d()})})),c=[];return u()(l).forEach((function(t){var e=t.id;o()(a()(1,i)).forEach((function(){var t=_(c),n=u()(l.filter((function(t){return t.id!==e})).map((function(t){return t.id})))[0];t[n]&&t[n].includes(e)||t[e]&&t[e].includes(n)||c.push({source:e,target:n,value:a()(5,200)})}))})),{nodes:l,links:c}},k=function(){return a()(0,500)},j=function(){return a()(4,20)},S=function(){return a()(3,17)},w=function(t,e){var n=e.min,r=void 0===n?60:n,i=e.max,l=void 0===i?100:i,u=e.categoryCount,c=void 0===u?0:u;return{groups:t,data:t.reduce((function(t,e,n){return[].concat(t,o()(a()(r,l)).map((function(){return k()})).map((function(t,r){var i={id:n+"."+r,group:e,price:t,volume:j()};return c>0&&(i.categories=o()(c).map(S)),i})))}),[])}},T=function(t){return{groups:t.groups,data:t.data.map((function(e){var n=x({},e,{group:u()(t.groups)[0],price:k(),volume:j()});return void 0!==e.categories&&(n.categories=o()(3).map(S)),n}))}},L=function(t){return"values"in t?function(e){return t.values[e]}:function(){var e=t.min+Math.random()*(t.max-t.min);return t.round&&(e=Math.round(e)),e}},A=function(t){var e=t.serieIds,n=t.x,r=t.y,o="length"in n?n.length:n.values.length,i=L(n),a=L(r);return e.map((function(t){return{id:t,data:Array.from({length:o}).map((function(t,e){return{x:i(e),y:a(e)}}))}}))},E=d,G=function(t,e){void 0===t&&(t=!0),void 0===e&&(e=-1);var n=p;return t&&(n=u()(n)),e<1&&(e=1+Math.round(Math.random()*(p.length-1))),n.slice(0,e).map((function(t){return{label:t,value:Math.round(600*Math.random()),color:E()}}))},Z=function(t){var e=[];return function(){var n;do{n=t.apply(void 0,arguments)}while(e.includes(n));return e.push(n),n}},I=function(){return u()(f)[0]},O=function(t){void 0===t&&(t=16);var e=["whisky","rhum","gin","vodka","cognac"],n=Z(I),r=e.map((function(t){return{id:t,color:E(),data:[]}}));return o()(t).forEach((function(){var t=n();e.forEach((function(e){var n;null==(n=r.find((function(t){return t.id===e})))||n.data.push({color:E(),x:t,y:a()(0,60)})}))})),r},W=function(t,e){return t.map((function(t){return{id:t,color:E(),data:e.map((function(t){return{x:t,y:Math.round(300*Math.random())}}))}}))},D=function(t,e,n){void 0===n&&(n=.9);var r=function(t,e){var n=(0,c.a)(t,e),r=(0,s.i$)("%Y-%m-%d");return n.map((function(t){return{value:Math.round(400*Math.random()),day:r(t)}}))}(t,e),o=Math.round(r.length*(.4*n))+Math.round(Math.random()*(r.length*(.6*n)));return u()(r).slice(0,o)},N=function(t,e){var n=void 0===e?{}:e,r=n.size,o=void 0===r?12:r,i=n.min,l=void 0===i?0:i,u=n.max,c=void 0===u?200:u,s=n.withColors,d=void 0===s||s;return f.slice(0,o).map((function(e){var n={country:e};return t.forEach((function(t){n[t]=a()(l,c),!0===d&&(n[t+"Color"]=E())})),n}))},z=[["viz",[["stack",[["cchart"],["xAxis"],["yAxis"],["layers"]]],["ppie",[["chart",[["pie",[["outline"],["slices"],["bbox"]]],["donut"],["gauge"]]],["legends"]]]]],["colors",[["rgb"],["hsl"]]],["utils",[["randomize"],["resetClock"],["noop"],["tick"],["forceGC"],["stackTrace"],["dbg"]]],["generators",[["address"],["city"],["animal"],["movie"],["user"]]],["set",[["clone"],["intersect"],["merge"],["reverse"],["toArray"],["toObject"],["fromCSV"],["slice"],["append"],["prepend"],["shuffle"],["pick"],["plouc"]]],["text",[["trim"],["slugify"],["snakeCase"],["camelCase"],["repeat"],["padLeft"],["padRight"],["sanitize"],["ploucify"]]],["misc",[["greetings",[["hey"],["HOWDY"],["aloha"],["AHOY"]]],["other"],["path",[["pathA"],["pathB",[["pathB1"],["pathB2"],["pathB3"],["pathB4"]]],["pathC",[["pathC1"],["pathC2"],["pathC3"],["pathC4"],["pathC5"],["pathC6"],["pathC7"],["pathC8"],["pathC9"]]]]]]]],P=function t(e,n,r){var i;void 0===e&&(e="nivo"),void 0===r&&(r=z),(n=n||r.length)>r.length&&(n=r.length);var a={name:e,color:E()};return(null==(i=r)?void 0:i.length)>0?a.children=o()(n).map((function(e,n){var o,i=r[n];return t(i[0],null,null!=(o=i[1])?o:[])})):a.loc=Math.round(2e5*Math.random()),a},F=["chardonay","carmenere","syrah"],R=["fruity","bitter","heavy","strong","sunny"],H=function(t){var e=void 0===t?{}:t,n=e.randMin,r=void 0===n?20:n,o=e.randMax,i=void 0===o?120:o;return{data:R.map((function(t){var e={taste:t};return F.forEach((function(t){e[t]=a()(r,i)})),e})),keys:F}}},62443:function(t,e,n){"use strict";n.d(e,{p_:function(){return S},F6:function(){return j},lG:function(){return M},XB:function(){return _}});var r=n(27378),o=n(98383),i=n(44365),a=n(47425),l=n(58493),u=n(89193),c=n(24246),s=n(94942),d=n(26681),f=n(46448),h=n(9841),p=n(14503);function m(){return m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},m.apply(this,arguments)}var v=function(t){var e=t.layer,n=t.fillOpacity,i=t.borderWidth,a=t.getBorderColor,s=t.isInteractive,d=t.tooltip,f=(0,u.lL)(),h=f.showTooltipFromEvent,p=f.hideTooltip,m=(0,r.useCallback)((function(t){h((0,r.createElement)(d,{layer:e}),t,"left")}),[h,e]),v=(0,o.tf)(),g=v.animate,y=v.config,x=(0,o.NS)(e.path),b=(0,l.useSpring)({color:e.color,config:y,immediate:!g});return(0,c.jsx)(l.q.path,{d:x,fill:e.fill?e.fill:b.color,fillOpacity:n,stroke:a(e),strokeWidth:i,onMouseMove:s?m:void 0,onMouseEnter:s?m:void 0,onMouseLeave:s?p:void 0})},g=function(t){var e=t.layers,n=t.fillOpacity,r=t.borderWidth,o=t.getBorderColor,i=t.isInteractive,a=t.tooltip;return(0,c.jsx)("g",{children:e.map((function(t,e){return(0,c.jsx)(v,{layer:t,getBorderColor:o,borderWidth:r,fillOpacity:n,isInteractive:i,tooltip:a},e)}))})},y=function(t,e){var n=t.y2;return"center"===e?n=t.y1+(t.y2-t.y1)/2:"start"===e&&(n=t.y1),n},x=function(t){var e=t.data,n=t.dotComponent,o=t.position,i=t.getSize,a=t.getColor,l=t.getBorderWidth,u=t.getBorderColor;return(0,c.jsx)(c.Fragment,{children:e.map((function(t,e){return(0,r.createElement)(n,{key:e,datum:t,x:t.x,y:y(t,o),size:i(t),color:a(t),borderWidth:l(t),borderColor:u(t)})}))})},b=function(t){var e=t.slice,n=t.height,o=t.tooltip,i=(0,r.useState)(!1),a=i[0],l=i[1],s=(0,u.lL)(),d=s.showTooltipFromEvent,f=s.hideTooltip,h=(0,r.useCallback)((function(t){l(!0),d((0,r.createElement)(o,{slice:e}),t,"left")}),[l,d,o,e]),p=(0,r.useCallback)((function(){l(!1),f()}),[l,f]);return(0,c.jsxs)("g",{transform:"translate("+e.x+", 0)",children:[a&&(0,c.jsx)("line",{x1:0,x2:0,y1:0,y2:n,stroke:"#000",strokeOpacity:.35,strokeWidth:1}),(0,c.jsx)("rect",{x:-20,width:40,height:n,fill:"#000",fillOpacity:0,onMouseEnter:h,onMouseMove:h,onMouseLeave:p})]})},C=function(t){var e=t.slices,n=t.height,r=t.tooltip;return(0,c.jsx)("g",{children:e.map((function(t){return(0,c.jsx)(b,{slice:t,height:n,tooltip:r},t.index)}))})},M={label:"id",order:"none",offsetType:"wiggle",curve:"catmullRom",axisBottom:{},axisLeft:{},enableGridX:!1,enableGridY:!0,colors:{scheme:"nivo"},fillOpacity:1,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},enableDots:!1,dotPosition:"center",dotComponent:function(t){var e=t.x,n=t.y,r=t.size,i=t.color,a=t.borderWidth,u=t.borderColor,s=(0,o.tf)(),d=s.animate,f=s.config,h=(0,l.useSpring)({x:e,y:n,radius:.5*r,color:i,config:f,immediate:!d});return(0,c.jsx)(l.q.circle,{cx:h.x,cy:h.y,r:h.radius,fill:h.color,strokeWidth:a,stroke:u})},dotSize:6,dotColor:{from:"color"},dotBorderWidth:0,dotBorderColor:{from:"color"},isInteractive:!0,tooltip:function(t){var e=t.layer;return(0,c.jsx)(u._5,{id:e.label,enableChip:!0,color:e.color})},enableStackTooltip:!0,stackTooltip:function(t){var e=t.slice,n=(0,r.useMemo)((function(){return e.stack.map((function(t){return[(0,c.jsx)(u.Af,{color:t.color},t.layerId),t.layerLabel,t.formattedValue]}))}),[e]);return(0,c.jsx)(u.zI,{rows:n})},legends:[],legendLabel:"id",role:"application"},_=m({},M,{layers:["grid","axes","layers","dots","slices","legends"],defs:[],fill:[],animate:!0,motionConfig:"default",role:"img",isFocusable:!1}),B=["isInteractive","animate","motionConfig","theme","renderWrapper"],k=function(t){var e=t.data,n=t.keys,l=t.label,u=t.valueFormat,v=t.offsetType,y=t.order,b=t.curve,B=t.layers,k=void 0===B?_.layers:B,j=t.width,S=t.height,w=t.margin,T=t.axisTop,L=t.axisRight,A=t.axisBottom,E=void 0===A?_.axisBottom:A,G=t.axisLeft,Z=void 0===G?_.axisLeft:G,I=t.enableGridX,O=void 0===I?_.enableGridX:I,W=t.enableGridY,D=void 0===W?_.enableGridY:W,N=t.colors,z=t.fillOpacity,P=void 0===z?_.fillOpacity:z,F=t.borderWidth,R=void 0===F?_.borderWidth:F,H=t.borderColor,K=t.defs,U=void 0===K?_.defs:K,Y=t.fill,V=void 0===Y?_.fill:Y,J=t.enableDots,X=void 0===J?_.enableDots:J,Q=t.dotPosition,$=void 0===Q?_.dotPosition:Q,q=t.dotComponent,tt=void 0===q?_.dotComponent:q,et=t.dotSize,nt=t.dotColor,rt=t.dotBorderWidth,ot=t.dotBorderColor,it=t.isInteractive,at=void 0===it?_.isInteractive:it,lt=t.tooltip,ut=void 0===lt?_.tooltip:lt,ct=t.enableStackTooltip,st=void 0===ct?_.enableStackTooltip:ct,dt=t.stackTooltip,ft=void 0===dt?_.stackTooltip:dt,ht=t.legends,pt=void 0===ht?_.legends:ht,mt=t.role,vt=t.ariaLabel,gt=t.ariaLabelledBy,yt=t.ariaDescribedBy,xt=(0,o.Bs)(j,S,w),bt=xt.margin,Ct=xt.innerWidth,Mt=xt.innerHeight,_t=xt.outerWidth,Bt=xt.outerHeight,kt=function(t){var e=t.width,n=t.height,i=t.data,a=t.keys,l=t.label,u=void 0===l?M.label:l,c=t.valueFormat,v=t.offsetType,g=void 0===v?M.offsetType:v,y=t.order,x=void 0===y?M.order:y,b=t.curve,C=void 0===b?M.curve:b,_=t.colors,B=void 0===_?M.colors:_,k=t.borderColor,j=void 0===k?M.borderColor:k,S=t.dotSize,w=void 0===S?M.dotSize:S,T=t.dotColor,L=void 0===T?M.dotColor:T,A=t.dotBorderWidth,E=void 0===A?M.dotBorderWidth:A,G=t.dotBorderColor,Z=void 0===G?M.dotBorderColor:G,I=(0,o.d4)(C),O=(0,r.useMemo)((function(){return(0,s.Z)().x((function(t){return t.x})).y0((function(t){return t.y1})).y1((function(t){return t.y2})).curve(I)}),[I]),W=(0,r.useMemo)((function(){return(0,d.Z)().keys(a).offset((0,o.kI)(g)).order((0,o.WC)(x))}),[a,g,x]),D=(0,r.useMemo)((function(){var t=[],r=[],o=W(i).map((function(e){return e.map((function(n){return t.push(n[0]),r.push(n[1]),m({},n,{value:n.data[e.key]})}))})),a=Math.min.apply(Math,t),l=Math.max.apply(Math,r);return[o,(0,f.x)().domain(Array.from({length:i.length},(function(t,e){return e}))).range([0,e]),(0,h.Z)().domain([a,l]).range([n,0])]}),[W,i,e,n]),N=D[0],z=D[1],P=D[2],F=(0,o.Fg)(),R=(0,p.U)(B,"id"),H=(0,p.Bf)(j,F),K=(0,r.useMemo)((function(){return"function"==typeof w?w:function(){return w}}),[w]),U=(0,p.Bf)(L,F),Y=(0,r.useMemo)((function(){return"function"==typeof E?E:function(){return E}}),[E]),V=(0,p.Bf)(Z,F),J=(0,o.LR)(u),X=(0,o.O_)(c),Q=(0,r.useMemo)((function(){return N.map((function(t,e){var n=t.map((function(t,n){return{layerId:a[e],layerLabel:"",index:n,color:"",x:z(n),value:t.value,formattedValue:X(t.value),y1:P(t[0]),y2:P(t[1])}})),r={id:a[e],path:O(n)},o=m({},r,{label:J(r),color:R(r)});return m({},o,{data:n.map((function(t){return t.layerLabel=o.label,t.color=o.color,t}))})}))}),[N,a,J,O,R,z,P,X]),$=(0,r.useMemo)((function(){return Array.from({length:i.length},(function(t,e){var n=Q.map((function(t){return t.data[e]})).sort((function(t,e){return t.y2-e.y2}));return{index:e,x:Q[0].data[e].x,stack:n}}))}),[i.length,Q]),q=(0,r.useMemo)((function(){return{xScale:z,yScale:P,layers:Q,slices:$}}),[z,P,Q,$]);return{xScale:z,yScale:P,layers:Q,slices:$,getBorderColor:H,getDotSize:K,getDotColor:U,getDotBorderWidth:Y,getDotBorderColor:V,layerContext:q}}({width:Ct,height:Mt,data:e,keys:n,label:l,valueFormat:u,offsetType:v,order:y,curve:b,colors:N,borderColor:H,dotSize:et,dotColor:nt,dotBorderWidth:rt,dotBorderColor:ot}),jt=kt.xScale,St=kt.yScale,wt=kt.layers,Tt=kt.slices,Lt=kt.getBorderColor,At=kt.getDotSize,Et=kt.getDotColor,Gt=kt.getDotBorderWidth,Zt=kt.getDotBorderColor,It=kt.layerContext,Ot=(0,o.yU)(U,wt,V),Wt={grid:null,axes:null,layers:null,dots:null,slices:null,legends:null};return k.includes("grid")&&(Wt.grid=(0,c.jsx)(i.rj,{width:Ct,height:Mt,xScale:O?jt:null,yScale:D?St:null},"grid")),k.includes("axes")&&(Wt.axes=(0,c.jsx)(i.dk,{xScale:jt,yScale:St,width:Ct,height:Mt,top:T,right:L,bottom:E,left:Z},"axes")),k.includes("layers")&&(Wt.layers=(0,c.jsx)(g,{layers:wt,fillOpacity:P,borderWidth:R,getBorderColor:Lt,isInteractive:at,tooltip:ut},"layers")),k.includes("dots")&&X&&(Wt.dots=(0,c.jsx)(r.Fragment,{children:wt.map((function(t){return(0,c.jsx)(x,{id:t.id,color:t.color,data:t.data,dotComponent:tt,position:$,getSize:At,getColor:Et,getBorderWidth:Gt,getBorderColor:Zt},t.id)}))},"dots")),k.includes("slices")&&at&&st&&(Wt.slices=(0,c.jsx)(C,{slices:Tt,height:Mt,tooltip:ft},"slices")),k.includes("legends")&&(Wt.legends=(0,c.jsx)(r.Fragment,{children:pt.map((function(t,e){var n=wt.map((function(t){return{id:t.id,label:t.label,color:t.color,fill:t.fill}})).reverse();return(0,c.jsx)(a.$6,m({},t,{containerWidth:Ct,containerHeight:Mt,data:n}),e)}))},"legends")),(0,c.jsx)(o.tM,{width:_t,height:Bt,margin:bt,defs:Ot,role:mt,ariaLabel:vt,ariaLabelledBy:gt,ariaDescribedBy:yt,children:k.map((function(t,e){var n;return"function"==typeof t?(0,c.jsx)(r.Fragment,{children:(0,r.createElement)(t,It)},e):null!=(n=null==Wt?void 0:Wt[t])?n:null}))})},j=function(t){var e=t.isInteractive,n=void 0===e?_.isInteractive:e,r=t.animate,i=void 0===r?_.animate:r,a=t.motionConfig,l=void 0===a?_.motionConfig:a,u=t.theme,s=t.renderWrapper,d=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,B);return(0,c.jsx)(o.W2,{animate:i,isInteractive:n,motionConfig:l,renderWrapper:s,theme:u,children:(0,c.jsx)(k,m({isInteractive:n},d))})},S=function(t){return(0,c.jsx)(o.d,{children:function(e){var n=e.width,r=e.height;return(0,c.jsx)(j,m({width:n,height:r},t))}})}},91573:function(t,e,n){var r=n(37561),o=n(74305);t.exports=function(t){return o(r(t))}},26194:function(t,e,n){var r=n(49819),o=n(50098);t.exports=function(t,e){return t&&r(t,e,o)}},76418:function(t){var e=Math.floor,n=Math.random;t.exports=function(t,r){return t+e(n()*(r-t+1))}},16326:function(t,e,n){var r=n(74305),o=n(58185);t.exports=function(t){return r(o(t))}},42231:function(t,e,n){var r=n(66070);t.exports=function(t,e){return r(e,(function(e){return t[e]}))}},74305:function(t,e,n){var r=n(76418);t.exports=function(t,e){var n=-1,o=t.length,i=o-1;for(e=void 0===e?o:e;++n<e;){var a=r(n,i),l=t[a];t[a]=t[n],t[n]=l}return t.length=e,t}},91311:function(t,e,n){var r=n(76418),o=n(57535),i=n(94919),a=parseFloat,l=Math.min,u=Math.random;t.exports=function(t,e,n){if(n&&"boolean"!=typeof n&&o(t,e,n)&&(e=n=void 0),void 0===n&&("boolean"==typeof e?(n=e,e=void 0):"boolean"==typeof t&&(n=t,t=void 0)),void 0===t&&void 0===e?(t=0,e=1):(t=i(t),void 0===e?(e=t,t=0):e=i(e)),t>e){var c=t;t=e,e=c}if(n||t%1||e%1){var s=u();return l(t+s*(e-t+a("1e-"+((s+"").length-1))),e)}return r(t,e)}},19193:function(t,e,n){var r=n(91573),o=n(16326),i=n(19785);t.exports=function(t){return(i(t)?r:o)(t)}},58185:function(t,e,n){var r=n(42231),o=n(50098);t.exports=function(t){return null==t?[]:r(t,o(t))}}}]);
//# sourceMappingURL=component---src-pages-guides-gradients-tsx-4647b8b5e1facbcfb059.js.map