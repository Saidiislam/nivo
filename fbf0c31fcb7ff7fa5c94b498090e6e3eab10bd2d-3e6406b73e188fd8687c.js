"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[4592],{73855:function(e,n,t){t.d(n,{Gm:function(){return O},W_:function(){return W},XB:function(){return G}});var r=t(89193),a=t(24246),i=t(27378),o=t(98383),l=t(30042),s=t(47425),u=t(58493),d=t(770);function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}var g=function(e){var n=e.label,t=e.animated,r=(0,o.Fg)();return(0,a.jsxs)(u.q.g,{opacity:t.opacity,children:[(0,a.jsx)(u.q.line,{x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,style:r.axis.ticks.line}),(0,a.jsx)(u.q.text,{dx:t.textX,dy:t.textY,dominantBaseline:"central",style:r.axis.ticks.text,textAnchor:"middle",children:n})]})},f=function(e,n,t){var r=(0,o.re)((0,o.Ht)(e),n),a=(0,o.re)((0,o.Ht)(e),t);return{x1:r.x,y1:r.y,x2:a.x,y2:a.y}},p=function(e,n){var t=(0,o.re)((0,o.Ht)(e),n);return{textX:t.x,textY:t.y}},v=function(e){var n=e.type,t=e.center,r=void 0===t?[0,0]:t,s=e.radius,v=e.startAngle,m=e.endAngle,x=e.scale,h=e.tickSize,b=void 0===h?5:h,y=e.tickPadding,A=void 0===y?12:y,k=e.tickComponent,M=void 0===k?g:k,j=v-90,R=m-90,C=(0,o.Fg)(),G=(0,o.tf)(),S=G.animate,w=G.config,I=(0,u.useSpring)({radius:s,startAngle:j,endAngle:R,opacity:1,immediate:!S,config:w}),E=(0,i.useMemo)((function(){return(0,d.xX)(x).map((function(e,n){return{key:n,label:e,angle:x(e)-90}}))}),[x]),O="inner"===n?s-b:s+b,W="inner"===n?O-A:O+A,X=(0,u.useTransition)(E,{keys:function(e){return e.key},initial:function(e){return c({},f(e.angle,s,O),p(e.angle,W),{opacity:1})},from:function(e){return c({},f(e.angle,s,O),p(e.angle,W),{opacity:0})},enter:function(e){return c({},f(e.angle,s,O),p(e.angle,W),{opacity:1})},update:function(e){return c({},f(e.angle,s,O),p(e.angle,W),{opacity:1})},leave:function(e){return c({},f(e.angle,s,O),p(e.angle,W),{opacity:0})},immediate:!S,config:w});return(0,a.jsxs)("g",{transform:"translate("+r[0]+", "+r[1]+")",children:[(0,a.jsx)(l.Ju,c({animated:I},C.axis.domain.line,{fill:"none"})),X((function(e,n){return(0,i.createElement)(M,{key:n.key,label:n.label,animated:e})}))]})},m=function(e){var n=e.scale,t=e.innerRadius,r=e.outerRadius,l=(0,o.Fg)(),s=(0,i.useMemo)((function(){return(0,d.xX)(n).map((function(e,t){return{id:t,angle:n(e)-90}}))}),[n]),g=(0,o.tf)(),f=g.animate,p=g.config,v=(0,u.useTransition)(s,{keys:function(e){return e.id},initial:function(e){return{angle:e.angle,opacity:1}},from:function(e){return{angle:e.angle,opacity:0}},enter:function(e){return{angle:e.angle,opacity:1}},update:function(e){return{angle:e.angle,opacity:1}},leave:function(e){return{angle:e.angle,opacity:0}},config:p,immediate:!f});return(0,a.jsx)(a.Fragment,{children:v((function(e,n){return(0,a.jsx)(u.q.g,{transform:e.angle.to((function(e){return"rotate("+e+")"})),opacity:e.opacity,children:(0,a.jsx)("line",c({x1:t,x2:r},l.grid.line))},n.id)}))})},x=function(e){var n=e.scale,t=e.startAngle,r=e.endAngle,s=(0,o.Fg)(),g=t-90,f=r-90,p=(0,i.useMemo)((function(){return(0,d.xX)(n).map((function(e,t){var r=n(e);return"bandwidth"in n&&(r+=n.bandwidth()/2),{id:t,radius:r}}))}),[n]),v=(0,o.tf)(),m=v.animate,x=v.config,h=(0,u.useTransition)(p,{keys:function(e){return e.id},initial:function(e){return{radius:e.radius,startAngle:g,endAngle:f,opacity:1}},from:function(e){return{radius:e.radius,startAngle:g,endAngle:f,opacity:0}},enter:function(e){return{radius:e.radius,startAngle:g,endAngle:f,opacity:1}},update:function(e){return{radius:e.radius,startAngle:g,endAngle:f,opacity:1}},leave:function(e){return{radius:e.radius,startAngle:g,endAngle:f,opacity:0}},config:x,immediate:!m});return(0,a.jsx)(a.Fragment,{children:h((function(e,n){return(0,a.jsx)(l.Ju,c({animated:e},s.grid.line,{strokeOpacity:e.opacity,fill:"none"}),n.id)}))})},h=function(e){var n=e.center,t=e.enableRadialGrid,r=e.enableCircularGrid,i=e.angleScale,o=e.radiusScale,l=e.startAngle,s=e.endAngle,u=Math.min.apply(Math,o.range()),d=Math.max.apply(Math,o.range());return(0,a.jsxs)("g",{transform:"translate("+n[0]+","+n[1]+")",children:[t&&(0,a.jsx)(m,{scale:i,innerRadius:u,outerRadius:d}),r&&(0,a.jsx)(x,{scale:o,startAngle:l,endAngle:s})]})},b=function(e){var n=e.label,t=e.textAnchor,r=e.animated,i=(0,o.Fg)();return(0,a.jsxs)(u.q.g,{opacity:r.opacity,transform:(0,u.to)([r.y,r.rotation],(function(e,n){return"translate("+e+", 0) rotate("+n+")"})),children:[(0,a.jsx)(u.q.line,{x2:r.length,style:i.axis.ticks.line}),(0,a.jsx)(u.q.text,{dx:r.textX,textAnchor:t,dominantBaseline:"central",style:i.axis.ticks.text,children:n})]})},y=function(e){var n,t,r,l,s=e.type,c=e.center,g=e.angle,f=e.scale,p=e.tickSize,v=void 0===p?5:p,m=e.tickPadding,x=void 0===m?5:m,h=e.tickRotation,y=void 0===h?0:h,A=e.tickComponent,k=void 0===A?b:A,M=(0,o.LW)(g);"start"===s?(l=90+y,M<=90?(r=(t=-v)-x,n="end"):M<270?(r=(t=v)+x,n="start",l-=180):(r=(t=-v)-x,n="end")):(l=90+y,M<90?(r=(t=v)+x,n="start"):M<270?(r=(t=-v)-x,n="end",l-=180):(r=(t=v)+x,n="start"));var j=(0,i.useMemo)((function(){return(0,d.xX)(f).map((function(e,n){var t=f(e);return"bandwidth"in f&&(t+=f.bandwidth()/2),{key:n,label:e,position:t}}))}),[f]),R=(0,o.tf)(),C=R.animate,G=R.config,S=(0,u.useSpring)({rotation:g-90,immediate:!C,config:G}),w=(0,u.useTransition)(j,{keys:function(e){return e.key},initial:function(e){return{y:e.position,textX:r,rotation:l,length:t,opacity:1}},from:function(e){return{y:e.position,textX:r,rotation:l,length:t,opacity:0}},enter:function(e){return{y:e.position,textX:r,rotation:l,length:t,opacity:1}},update:function(e){return{y:e.position,textX:r,rotation:l,length:t,opacity:1}},leave:function(e){return{y:e.position,textX:r,rotation:l,length:t,opacity:0}},immediate:!C,config:G});return(0,a.jsx)("g",{transform:"translate("+c[0]+", "+c[1]+")",children:(0,a.jsx)(u.q.g,{transform:S.rotation.to((function(e){return"rotate("+e+")"})),children:w((function(e,a){return(0,i.createElement)(k,{key:a.key,label:a.label,y:a.position,textX:r,rotation:l,length:t,textAnchor:n,animated:e})}))})})},A=t(9841),k=t(46448),M=t(29140),j=t(14503);function R(){return R=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},R.apply(this,arguments)}var C={maxValue:"auto",layers:["grid","tracks","bars","labels","legends"],startAngle:0,endAngle:270,innerRadius:.3,padding:.2,padAngle:0,cornerRadius:0,enableTracks:!0,tracksColor:"rgba(0, 0, 0, .15)",enableRadialGrid:!0,enableCircularGrid:!0,radialAxisStart:{},radialAxisEnd:null,circularAxisInner:null,circularAxisOuter:{},colors:{scheme:"nivo"},borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},enableLabels:!1,label:"formattedValue",labelsSkipAngle:10,labelsRadiusOffset:.5,labelsTextColor:{theme:"labels.text.fill"},isInteractive:!0,tooltip:function(e){var n=e.bar;return(0,a.jsx)(r._5,{enableChip:!0,id:(0,a.jsxs)("span",{children:[n.category," - ",n.groupId]}),value:n.formattedValue,color:n.color})},legends:[],animate:!0,motionConfig:"gentle",transitionMode:"centerRadius",renderWrapper:!0},G=R({},C),S=function(e){var n=e.center,t=e.bars,o=e.borderWidth,s=e.borderColor,u=e.arcGenerator,d=e.isInteractive,c=e.tooltip,g=e.onClick,f=e.onMouseEnter,p=e.onMouseMove,v=e.onMouseLeave,m=e.transitionMode,x=(0,r.lL)(),h=x.showTooltipFromEvent,b=x.hideTooltip,y=(0,i.useCallback)((function(e,n){null==g||g(e,n)}),[g]),A=(0,i.useCallback)((function(e,n){h((0,i.createElement)(c,{bar:e}),n),null==f||f(e,n)}),[h,c,f]),k=(0,i.useCallback)((function(e,n){h((0,i.createElement)(c,{bar:e}),n),null==p||p(e,n)}),[h,c,p]),M=(0,i.useCallback)((function(e,n){b(),null==v||v(e,n)}),[b,v]);return(0,a.jsx)(l.Bs,{center:n,data:t,arcGenerator:u,borderWidth:o,borderColor:s,transitionMode:m,onClick:d?y:void 0,onMouseEnter:d?A:void 0,onMouseMove:d?k:void 0,onMouseLeave:d?M:void 0})},w=function(e){var n=e.center,t=e.tracks,r=e.arcGenerator,i=e.transitionMode;return(0,a.jsx)(l.Bs,{center:n,data:t,arcGenerator:r,borderWidth:0,borderColor:"none",transitionMode:i})},I=["isInteractive","animate","motionConfig","theme","renderWrapper"],E=function(e){var n=e.data,t=e.maxValue,r=void 0===t?G.maxValue:t,u=e.valueFormat,c=e.startAngle,g=void 0===c?G.startAngle:c,f=e.endAngle,p=void 0===f?G.endAngle:f,m=e.innerRadius,x=void 0===m?G.innerRadius:m,b=e.padding,I=void 0===b?G.padding:b,E=e.padAngle,O=void 0===E?G.padAngle:E,W=e.cornerRadius,X=void 0===W?G.cornerRadius:W,L=e.width,F=e.height,V=e.margin,T=e.layers,B=void 0===T?G.layers:T,H=e.enableTracks,q=void 0===H?G.enableTracks:H,_=e.tracksColor,P=void 0===_?G.tracksColor:_,D=e.enableRadialGrid,z=void 0===D?G.enableRadialGrid:D,Z=e.enableCircularGrid,J=void 0===Z?G.enableCircularGrid:Z,Y=e.radialAxisStart,N=void 0===Y?G.radialAxisStart:Y,U=e.radialAxisEnd,$=void 0===U?G.radialAxisEnd:U,K=e.circularAxisInner,Q=void 0===K?G.circularAxisInner:K,ee=e.circularAxisOuter,ne=void 0===ee?G.circularAxisOuter:ee,te=e.colors,re=void 0===te?G.colors:te,ae=e.borderWidth,ie=void 0===ae?G.borderWidth:ae,oe=e.borderColor,le=void 0===oe?G.borderColor:oe,se=e.enableLabels,ue=void 0===se?G.enableLabels:se,de=e.label,ce=void 0===de?G.label:de,ge=e.labelsSkipAngle,fe=void 0===ge?G.labelsSkipAngle:ge,pe=e.labelsRadiusOffset,ve=void 0===pe?G.labelsRadiusOffset:pe,me=e.labelsTextColor,xe=void 0===me?G.labelsTextColor:me,he=e.isInteractive,be=void 0===he?G.isInteractive:he,ye=e.tooltip,Ae=void 0===ye?G.tooltip:ye,ke=e.onClick,Me=e.onMouseEnter,je=e.onMouseMove,Re=e.onMouseLeave,Ce=e.transitionMode,Ge=void 0===Ce?G.transitionMode:Ce,Se=e.legends,we=void 0===Se?G.legends:Se,Ie=e.role,Ee=e.ariaLabel,Oe=e.ariaLabelledBy,We=e.ariaDescribedBy,Xe=(0,o.Bs)(L,F,V),Le=Xe.margin,Fe=Xe.innerWidth,Ve=Xe.innerHeight,Te=Xe.outerWidth,Be=Xe.outerHeight,He=(0,o.zm)(g,p),qe=He[0],_e=He[1],Pe=function(e){var n=e.data,t=e.maxValue,r=void 0===t?G.maxValue:t,a=e.valueFormat,l=e.startAngle,s=void 0===l?C.startAngle:l,u=e.endAngle,c=void 0===u?C.endAngle:u,g=e.innerRadiusRatio,f=void 0===g?C.innerRadius:g,p=e.padding,v=void 0===p?C.padding:p,m=e.padAngle,x=void 0===m?C.padAngle:m,h=e.cornerRadius,b=void 0===h?C.cornerRadius:h,y=e.width,R=e.height,S=e.colors,w=void 0===S?C.colors:S,I=e.tracksColor,E=void 0===I?C.tracksColor:I,O=(0,i.useMemo)((function(){return[y/2,R/2]}),[y,R]),W=Math.min.apply(Math,O),X=W*Math.min(f,1),L=(0,j.U)(w,"category"),F=(0,i.useMemo)((function(){var e={serieIds:[],categories:[],groups:[],maxValue:0};return n.forEach((function(n){e.serieIds.push(n.id);var t=0;n.data.forEach((function(n){e.categories.includes(n.x)||e.categories.push(n.x),t+=n.y})),e.groups.push({id:n.id,total:t,data:n.data})})),e.maxValue="auto"===r?Math.max.apply(Math,e.groups.map((function(e){return e.total}))):r,e}),[n,r]),V=F.serieIds,T=F.categories,B=F.groups,H=F.maxValue,q=(0,i.useMemo)((function(){return(0,d.__)((0,A.Z)().domain([0,H]).range([s,c]))}),[H,s,c]),_=(0,i.useMemo)((function(){return(0,d.NB)((0,k.Z)().domain(V).range([X,W]).padding(v))}),[V,W,X,v]),P=(0,i.useMemo)((function(){return(0,M.Z)().startAngle((function(e){return e.startAngle})).endAngle((function(e){return e.endAngle})).innerRadius((function(e){return e.innerRadius})).outerRadius((function(e){return e.outerRadius})).cornerRadius(b).padAngle((0,o.Ht)(x))}),[b,x]),D=(0,o.O_)(a),z=(0,i.useMemo)((function(){var e=[];return B.forEach((function(n){var t=0,r=_(n.id),a=r+_.bandwidth();n.data.forEach((function(i){var l=t+i.y,s={id:n.id+"."+i.x,data:i,groupId:n.id,category:i.x,value:i.y,formattedValue:D(i.y),color:"",stackedValue:l,arc:{startAngle:(0,o.Ht)(q(t)),endAngle:(0,o.Ht)(q(l)),innerRadius:r,outerRadius:a}};s.color=L(s),t+=i.y,e.push(s)}))})),e}),[B,_,q,L,D]),Z=(0,o.Ht)(s),J=(0,o.Ht)(c),Y=(0,i.useMemo)((function(){return(0,d.xX)(_).map((function(e){var n=_(e);return{id:e,color:E,arc:{startAngle:Z,endAngle:J,innerRadius:n,outerRadius:n+_.bandwidth()}}}))}),[_,Z,J,E]),N=(0,i.useMemo)((function(){return T.map((function(e){var n=z.find((function(n){return n.category===e})),t=n?n.color:void 0;return{id:e,label:e,color:t}}))}),[T,z]),U=(0,i.useMemo)((function(){return{center:O,outerRadius:W,innerRadius:X,bars:z,arcGenerator:P,radiusScale:_,valueScale:q}}),[O,W,X,z,P,_,q]);return{center:O,outerRadius:W,innerRadius:X,bars:z,arcGenerator:P,radiusScale:_,valueScale:q,tracks:Y,legendData:N,customLayerProps:U}}({data:n,maxValue:r,valueFormat:u,startAngle:qe,endAngle:_e,innerRadiusRatio:x,padding:I,padAngle:O,cornerRadius:X,width:Fe,height:Ve,colors:re,tracksColor:P}),De=Pe.center,ze=Pe.innerRadius,Ze=Pe.outerRadius,Je=Pe.bars,Ye=Pe.arcGenerator,Ne=Pe.radiusScale,Ue=Pe.valueScale,$e=Pe.tracks,Ke=Pe.legendData,Qe=Pe.customLayerProps,en={grid:null,tracks:null,bars:null,labels:null,legends:null};return B.includes("grid")&&(en.grid=(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(h,{center:De,enableRadialGrid:z,enableCircularGrid:J,angleScale:Ue,radiusScale:Ne,startAngle:qe,endAngle:_e}),N&&(0,a.jsx)(y,R({type:"start",center:De,angle:Math.min(qe,_e),scale:Ne},N)),$&&(0,a.jsx)(y,R({type:"end",center:De,angle:Math.max(qe,_e),scale:Ne},$)),Q&&(0,a.jsx)(v,R({type:"inner",center:De,radius:ze,startAngle:qe,endAngle:_e,scale:Ue},Q)),ne&&(0,a.jsx)(v,R({type:"outer",center:De,radius:Ze,startAngle:qe,endAngle:_e,scale:Ue},ne))]},"grid")),B.includes("tracks")&&q&&(en.tracks=(0,a.jsx)(w,{center:De,tracks:$e,arcGenerator:Ye,transitionMode:Ge},"tracks")),B.includes("bars")&&(en.bars=(0,a.jsx)(S,{center:De,bars:Je,borderWidth:ie,borderColor:le,arcGenerator:Ye,isInteractive:be,tooltip:Ae,onClick:ke,onMouseEnter:Me,onMouseMove:je,onMouseLeave:Re,transitionMode:Ge},"bars")),B.includes("labels")&&ue&&(en.labels=(0,a.jsx)(l.Xr,{center:De,data:Je,label:ce,radiusOffset:ve,skipAngle:fe,textColor:xe,transitionMode:Ge},"labels")),B.includes("legends")&&we.length>0&&(en.legends=(0,a.jsx)(i.Fragment,{children:we.map((function(e,n){return(0,a.jsx)(s.$6,R({},e,{containerWidth:Fe,containerHeight:Ve,data:Ke}),n)}))},"legends")),(0,a.jsx)(o.tM,{width:Te,height:Be,margin:Le,role:Ie,ariaLabel:Ee,ariaLabelledBy:Oe,ariaDescribedBy:We,children:B.map((function(e,n){var t;return"function"==typeof e?(0,a.jsx)(i.Fragment,{children:(0,i.createElement)(e,Qe)},n):null!=(t=null==en?void 0:en[e])?t:null}))})},O=function(e){var n=e.isInteractive,t=void 0===n?G.isInteractive:n,r=e.animate,i=void 0===r?G.animate:r,l=e.motionConfig,s=void 0===l?G.motionConfig:l,u=e.theme,d=e.renderWrapper,c=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,I);return(0,a.jsx)(o.W2,{animate:i,isInteractive:t,motionConfig:s,renderWrapper:d,theme:u,children:(0,a.jsx)(E,R({isInteractive:t},c))})},W=function(e){return(0,a.jsx)(o.d,{children:function(n){var t=n.width,r=n.height;return(0,a.jsx)(O,R({width:t,height:r},e))}})}}}]);
//# sourceMappingURL=fbf0c31fcb7ff7fa5c94b498090e6e3eab10bd2d-3e6406b73e188fd8687c.js.map