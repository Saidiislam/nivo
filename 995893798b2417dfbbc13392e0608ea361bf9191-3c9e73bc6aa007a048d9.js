"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[2899],{55177:function(e,t,i){i(27378);var o=i(91542),n=i(62370),r=i(24246);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},l.apply(this,arguments)}var a=o.default.div.withConfig({displayName:"mapper__TooltipWrapper",componentId:"sc-14q5tfo-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;font-size:13px;background:",";padding:10px 20px;color:",";border:2px solid ",";box-shadow:9px 16px 0 rgba(0,0,0,0.15);"],(function(e){return e.theme.colors.cardBackground}),(function(e){return e.color}),(function(e){return e.color})),s=o.default.span.withConfig({displayName:"mapper__TooltipKey",componentId:"sc-14q5tfo-1"})(["font-weight:600;"]),c=o.default.span.withConfig({displayName:"mapper__TooltipValue",componentId:"sc-14q5tfo-2"})([""]),d=function(e){var t=e.feature;return(0,r.jsxs)(a,{color:t.color,children:[(0,r.jsx)(s,{children:"Custom tooltip"}),(0,r.jsx)("span",{}),(0,r.jsx)(s,{children:"id"}),(0,r.jsx)(c,{children:t.id}),(0,r.jsx)(s,{children:"value"}),(0,r.jsx)(c,{children:t.value}),(0,r.jsx)(s,{children:"color"}),(0,r.jsx)(c,{children:t.color})]})};t.Z=(0,n.h8)({theme:function(e,t){return t["custom tooltip example"]?l({},t.theme,{tooltip:{container:l({},t.theme.tooltip.container,{background:"#333"})}}):e},tooltip:function(e,t){if(t["custom tooltip example"])return d}},{exclude:["custom tooltip example"]})},34453:function(e,t,i){i.d(t,{N:function(){return l}});var o=i(89039),n=i(80169),r=i(3759),l=[].concat((0,r.nk)(["svg","canvas"]),[{key:"projectionType",flavors:["svg","canvas"],help:"Defines the projection to use.",type:"string",required:!1,defaultValue:o.xB.projectionType,group:"Projection",control:{type:"choices",choices:[{label:"azimuthalEqualArea",value:"azimuthalEqualArea"},{label:"azimuthalEquidistant",value:"azimuthalEquidistant"},{label:"gnomonic",value:"gnomonic"},{label:"orthographic",value:"orthographic"},{label:"stereographic",value:"stereographic"},{label:"equalEarth",value:"equalEarth"},{label:"equirectangular",value:"equirectangular"},{label:"mercator",value:"mercator"},{label:"transverseMercator",value:"transverseMercator"},{label:"naturalEarth1",value:"naturalEarth1"}]}},{key:"projectionScale",flavors:["svg","canvas"],help:"Projection scale.",required:!1,defaultValue:o.xB.projectionScale,type:"number",group:"Projection",control:{type:"range",min:0,max:400}},{key:"projectionTranslation",flavors:["svg","canvas"],type:"[number, number]",help:"Projection x/y translation.",required:!1,defaultValue:o.xB.projectionTranslation,group:"Projection",control:{type:"numberArray",unit:"px",items:[{label:"x",min:-1,max:1,step:.05},{label:"y",min:-1,max:1,step:.05}]}},{key:"projectionRotation",flavors:["svg","canvas"],type:"[number, number, number]",help:"Projection rotation.",required:!1,defaultValue:o.xB.projectionRotation,group:"Projection",control:{type:"numberArray",items:[{label:"lambda (λ)",min:-360,max:360},{label:"phi (φ)",min:-360,max:360},{label:"gamma (γ)",min:-360,max:360}]}},(0,n.JR)(["svg","canvas"]),{key:"borderWidth",flavors:["svg","canvas"],help:"Control border width.",type:"number",required:!1,defaultValue:o.xB.borderWidth,group:"Style",control:{type:"lineWidth",step:.5}},{key:"borderColor",flavors:["svg","canvas"],help:"Method to compute border color.",type:"string | object | Function",required:!1,defaultValue:o.xB.borderColor,control:{type:"inheritedColor"},group:"Style"},{key:"enableGraticule",flavors:["svg","canvas"],help:"Enable meridians and parallels, useful for showing projection distortion.",type:"boolean",required:!1,defaultValue:o.xB.enableGraticule,control:{type:"switch"},group:"Graticule"},{key:"graticuleLineWidth",flavors:["svg","canvas"],help:"Control meridians and parallel lines width.",type:"number",required:!1,defaultValue:o.xB.graticuleLineWidth,group:"Graticule",control:{type:"lineWidth",step:.5}},{key:"graticuleLineColor",flavors:["svg","canvas"],help:"Control meridians and parallel lines color.",type:"string",required:!1,defaultValue:o.xB.graticuleLineColor,control:{type:"colorPicker"},group:"Graticule"}],(0,n.uE)("Style",["svg"]),[(0,r.y1)({flavors:["svg","canvas"],defaultValue:o.xB.isInteractive}),{key:"onClick",flavors:["svg","canvas"],help:"onClick handler, it receives clicked node data and style plus mouse event.",type:"Function",required:!1,group:"Interactivity"}])},62370:function(e,t,i){i.d(t,{h8:function(){return s},h6:function(){return c},Ld:function(){return d}});var o=i(48159),n=i.n(o),r=i(76744),l=i.n(r);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},a.apply(this,arguments)}var s=function(e,t){var i=(void 0===t?{}:t).exclude,o=void 0===i?[]:i;return function(t,i){void 0===i&&(i={});var r={};return Object.keys(t).forEach((function(o){e[o]&&(r[o]=e[o](t[o],t,i))})),a({},n()(t,o),r)}},c=function(e){return function(t,i){return i["axis"+l()(e)].enable?n()(t,["enable"]):null}},d=function(e){var t=e.format;return e.enabled?t:void 0}},47425:function(e,t,i){i.d(t,{Bo:function(){return j},$6:function(){return w},iQ:function(){return q},Ae:function(){return E},aJ:function(){return z},as:function(){return B},_i:function(){return V}});var o=i(64253),n=i(9841),r=i(98383),l=i(14503),a=i(27378),s=i(23615),c=i.n(s),d="/Users/raph/projects/plouc/nivo/packages/legends/src/svg/symbols/SymbolDiamond.tsx",u="/Users/raph/projects/plouc/nivo/packages/legends/src/svg/symbols/SymbolTriangle.tsx";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},m.apply(this,arguments)}var g={length:200,thickness:16,direction:"row",tickPosition:"after",tickSize:4,tickSpacing:3,tickOverlap:!1,tickFormat:function(e){return""+e},titleAlign:"start",titleOffset:4},h={top:0,right:0,bottom:0,left:0},v=function(e){var t,i=e.direction,o=e.itemsSpacing,n=e.padding,r=e.itemCount,l=e.itemWidth,a=e.itemHeight;if("number"!=typeof n&&("object"!=typeof(t=n)||Array.isArray(t)||null===t))throw new Error("Invalid property padding, must be one of: number, object");var s="number"==typeof n?{top:n,right:n,bottom:n,left:n}:m({},h,n),c=s.left+s.right,d=s.top+s.bottom,u=l+c,g=a+d,v=(r-1)*o;return"row"===i?u=l*r+v+c:"column"===i&&(g=a*r+v+d),{width:u,height:g,padding:s}},f=function(e){var t=e.anchor,i=e.translateX,o=e.translateY,n=e.containerWidth,r=e.containerHeight,l=e.width,a=e.height,s=i,c=o;switch(t){case"top":s+=(n-l)/2;break;case"top-right":s+=n-l;break;case"right":s+=n-l,c+=(r-a)/2;break;case"bottom-right":s+=n-l,c+=r-a;break;case"bottom":s+=(n-l)/2,c+=r-a;break;case"bottom-left":c+=r-a;break;case"left":c+=(r-a)/2;break;case"center":s+=(n-l)/2,c+=(r-a)/2}return{x:s,y:c}},p=function(e){var t,i,o,n,r,l,a=e.direction,s=e.justify,c=e.symbolSize,d=e.symbolSpacing,u=e.width,m=e.height;switch(a){case"left-to-right":t=0,i=(m-c)/2,n=m/2,l="central",s?(o=u,r="end"):(o=c+d,r="start");break;case"right-to-left":t=u-c,i=(m-c)/2,n=m/2,l="central",s?(o=0,r="start"):(o=u-c-d,r="end");break;case"top-to-bottom":t=(u-c)/2,i=0,o=u/2,r="middle",s?(n=m,l="alphabetic"):(n=c+d,l="text-before-edge");break;case"bottom-to-top":t=(u-c)/2,i=m-c,o=u/2,r="middle",s?(n=0,l="text-before-edge"):(n=m-c-d,l="alphabetic")}return{symbolX:t,symbolY:i,labelX:o,labelY:n,labelAnchor:r,labelAlignment:l}},b=function(e){var t,i=e.scale,o=e.ticks,a=e.length,s=void 0===a?g.length:a,c=e.thickness,d=void 0===c?g.thickness:c,u=e.direction,m=void 0===u?g.direction:u,h=e.tickPosition,v=void 0===h?g.tickPosition:h,f=e.tickSize,p=void 0===f?g.tickSize:f,b=e.tickSpacing,y=void 0===b?g.tickSpacing:b,x=e.tickOverlap,k=void 0===x?g.tickOverlap:x,S=e.tickFormat,j=void 0===S?g.tickFormat:S,N=e.title,C=e.titleAlign,E=void 0===C?g.titleAlign:C,A=e.titleOffset,W=void 0===A?g.titleOffset:A,w="column"===m?[].concat(i.domain()).reverse():i.domain(),O=(0,n.Z)().domain(w);2===w.length?O.range([0,s]):3===w.length&&O.range([0,s/2,s]),t="thresholds"in i?[w[0]].concat(i.thresholds(),[w[1]]):Array.isArray(o)?o:i.ticks(o);var B,z,V,q,D,X,Y,H,L,T,P,M,F,R,_=(0,l.TO)(i,32),U=(0,r.kZ)(j),G=[],I=0,Z=0;"row"===m?(B=s,z=d,Z=1,D=0,V="start"===E?0:"middle"===E?s/2:s,"before"===v?(Y=-p,H=k?d:0,L=-p-y,T="alphabetic",q=d+W,X="hanging"):(Y=k?0:d,L=(H=d+p)+y,T="hanging",q=-W,X="alphabetic"),t.forEach((function(e){var t=O(e);G.push({x1:t,y1:Y,x2:t,y2:H,text:U(e),textX:t,textY:L,textHorizontalAlign:"middle",textVerticalAlign:T})}))):(B=d,z=s,I=1,D=-90,q="start"===E?s:"middle"===E?s/2:0,"before"===v?(M=k?d:0,F=(P=-p)-y,R="end",V=d+W,X="hanging"):(P=k?0:d,F=(M=d+p)+y,R="start",V=-W,X="alphabetic"),t.forEach((function(e){var t=O(e);G.push({x1:P,y1:t,x2:M,y2:t,text:U(e),textX:F,textY:t,textHorizontalAlign:R,textVerticalAlign:"central"})})));return{width:B,height:z,gradientX1:0,gradientY1:I,gradientX2:Z,gradientY2:0,colorStops:_,ticks:G,titleText:N,titleX:V,titleY:q,titleRotation:D,titleHorizontalAlign:E,titleVerticalAlign:X}},y="/Users/raph/projects/plouc/nivo/packages/legends/src/svg/ContinuousColorsLegendSvg.tsx",x=function(e){var t=e.scale,i=e.ticks,n=e.length,l=void 0===n?g.length:n,s=e.thickness,c=void 0===s?g.thickness:s,d=e.direction,u=void 0===d?g.direction:d,h=e.tickPosition,v=void 0===h?g.tickPosition:h,f=e.tickSize,p=void 0===f?g.tickSize:f,x=e.tickSpacing,k=void 0===x?g.tickSpacing:x,S=e.tickOverlap,j=void 0===S?g.tickOverlap:S,N=e.tickFormat,C=void 0===N?g.tickFormat:N,E=e.title,A=e.titleAlign,W=void 0===A?g.titleAlign:A,w=e.titleOffset,O=b({scale:t,ticks:i,length:l,thickness:c,direction:u,tickPosition:v,tickSize:p,tickSpacing:k,tickOverlap:j,tickFormat:C,title:E,titleAlign:W,titleOffset:void 0===w?g.titleOffset:w}),B=O.width,z=O.height,V=O.gradientX1,q=O.gradientY1,D=O.gradientX2,X=O.gradientY2,Y=O.ticks,H=O.colorStops,L=O.titleText,T=O.titleX,P=O.titleY,M=O.titleRotation,F=O.titleVerticalAlign,R=O.titleHorizontalAlign,_=(0,r.Fg)(),U="ContinuousColorsLegendSvgGradient."+u+"."+H.map((function(e){return e.offset})).join("_");return(0,o.jsxDEV)("g",{children:[(0,o.jsxDEV)("defs",{children:(0,o.jsxDEV)("linearGradient",{id:U,x1:V,y1:q,x2:D,y2:X,children:H.map((function(e){return(0,o.jsxDEV)("stop",m({},e),void 0,!1,{fileName:y,lineNumber:70,columnNumber:25},void 0)}))},void 0,!1,{fileName:y,lineNumber:62,columnNumber:17},void 0)},void 0,!1,{fileName:y,lineNumber:61,columnNumber:13},void 0),L&&(0,o.jsxDEV)("text",{transform:"translate("+T+", "+P+") rotate("+M+")",textAnchor:R,dominantBaseline:F,style:_.legends.title.text,children:L},void 0,!1,{fileName:y,lineNumber:75,columnNumber:17},void 0),(0,o.jsxDEV)("rect",{width:B,height:z,fill:"url(#"+U},void 0,!1,{fileName:y,lineNumber:84,columnNumber:13},void 0),Y.map((function(e,t){return(0,o.jsxDEV)(a.Fragment,{children:[(0,o.jsxDEV)("line",{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,style:_.legends.ticks.line},void 0,!1,{fileName:y,lineNumber:87,columnNumber:21},void 0),(0,o.jsxDEV)("text",{x:e.textX,y:e.textY,textAnchor:e.textHorizontalAlign,dominantBaseline:e.textVerticalAlign,style:_.legends.ticks.text,children:e.text},void 0,!1,{fileName:y,lineNumber:94,columnNumber:21},void 0)]},t,!0,{fileName:y,lineNumber:86,columnNumber:17},void 0)}))]},void 0,!0,{fileName:y,lineNumber:60,columnNumber:9},void 0)},k=["containerWidth","containerHeight","anchor","translateX","translateY","length","thickness","direction"],S="/Users/raph/projects/plouc/nivo/packages/legends/src/svg/AnchoredContinuousColorsLegendSvg.tsx",j=function(e){var t,i,n=e.containerWidth,r=e.containerHeight,l=e.anchor,a=e.translateX,s=void 0===a?0:a,c=e.translateY,d=void 0===c?0:c,u=e.length,h=void 0===u?g.length:u,v=e.thickness,p=void 0===v?g.thickness:v,b=e.direction,y=void 0===b?g.direction:b,j=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,k);"row"===y?(t=h,i=p):(t=p,i=h);var N=f({anchor:l,translateX:s,translateY:d,containerWidth:n,containerHeight:r,width:t,height:i}),C=N.x,E=N.y;return(0,o.jsxDEV)("g",{transform:"translate("+C+", "+E+")",children:(0,o.jsxDEV)(x,m({length:h,thickness:p,direction:y},j),void 0,!1,{fileName:S,lineNumber:39,columnNumber:13},void 0)},void 0,!1,{fileName:S,lineNumber:38,columnNumber:9},void 0)},N="/Users/raph/projects/plouc/nivo/packages/legends/src/svg/LegendSvgItem.tsx",C={circle:function(e){var t=e.x,i=e.y,n=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,c=void 0===s?0:s,d=e.borderColor;return(0,o.jsxDEV)("circle",{r:n/2,cx:t+n/2,cy:i+n/2,fill:r,opacity:a,strokeWidth:c,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}},void 0,!1,{fileName:"/Users/raph/projects/plouc/nivo/packages/legends/src/svg/symbols/SymbolCircle.tsx",lineNumber:13,columnNumber:9},void 0)},diamond:function(e){var t=e.x,i=e.y,n=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,c=void 0===s?0:s,u=e.borderColor;return(0,o.jsxDEV)("g",{transform:"translate("+t+","+i+")",children:(0,o.jsxDEV)("path",{d:"\n                    M"+n/2+" 0\n                    L"+.8*n+" "+n/2+"\n                    L"+n/2+" "+n+"\n                    L"+.2*n+" "+n/2+"\n                    L"+n/2+" 0\n                ",fill:r,opacity:a,strokeWidth:c,stroke:void 0===u?"transparent":u,style:{pointerEvents:"none"}},void 0,!1,{fileName:d,lineNumber:14,columnNumber:13},void 0)},void 0,!1,{fileName:d,lineNumber:13,columnNumber:9},void 0)},square:function(e){var t=e.x,i=e.y,n=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,c=void 0===s?0:s,d=e.borderColor;return(0,o.jsxDEV)("rect",{x:t,y:i,fill:r,opacity:a,strokeWidth:c,stroke:void 0===d?"transparent":d,width:n,height:n,style:{pointerEvents:"none"}},void 0,!1,{fileName:"/Users/raph/projects/plouc/nivo/packages/legends/src/svg/symbols/SymbolSquare.tsx",lineNumber:13,columnNumber:9},void 0)},triangle:function(e){var t=e.x,i=e.y,n=e.size,r=e.fill,l=e.opacity,a=void 0===l?1:l,s=e.borderWidth,c=void 0===s?0:s,d=e.borderColor;return(0,o.jsxDEV)("g",{transform:"translate("+t+","+i+")",children:(0,o.jsxDEV)("path",{d:"\n                M"+n/2+" 0\n                L"+n+" "+n+"\n                L0 "+n+"\n                L"+n/2+" 0\n            ",fill:r,opacity:a,strokeWidth:c,stroke:void 0===d?"transparent":d,style:{pointerEvents:"none"}},void 0,!1,{fileName:u,lineNumber:14,columnNumber:13},void 0)},void 0,!1,{fileName:u,lineNumber:13,columnNumber:9},void 0)}},E=function(e){var t,i,n,l,s,c,d,u,g,h,v,f=e.x,b=e.y,y=e.width,x=e.height,k=e.data,S=e.direction,j=void 0===S?"left-to-right":S,E=e.justify,A=void 0!==E&&E,W=e.textColor,w=e.background,O=void 0===w?"transparent":w,B=e.opacity,z=void 0===B?1:B,V=e.symbolShape,q=void 0===V?"square":V,D=e.symbolSize,X=void 0===D?16:D,Y=e.symbolSpacing,H=void 0===Y?8:Y,L=e.symbolBorderWidth,T=void 0===L?0:L,P=e.symbolBorderColor,M=void 0===P?"transparent":P,F=e.onClick,R=e.onMouseEnter,_=e.onMouseLeave,U=e.toggleSerie,G=e.effects,I=(0,a.useState)({}),Z=I[0],J=I[1],K=(0,r.Fg)(),Q=(0,a.useCallback)((function(e){if(G){var t=G.filter((function(e){return"hover"===e.on})).reduce((function(e,t){return m({},e,t.style)}),{});J(t)}null==R||R(k,e)}),[R,k,G]),$=(0,a.useCallback)((function(e){if(G){var t=G.filter((function(e){return"hover"!==e.on})).reduce((function(e,t){return m({},e,t.style)}),{});J(t)}null==_||_(k,e)}),[_,k,G]),ee=p({direction:j,justify:A,symbolSize:null!=(t=Z.symbolSize)?t:X,symbolSpacing:H,width:y,height:x}),te=ee.symbolX,ie=ee.symbolY,oe=ee.labelX,ne=ee.labelY,re=ee.labelAnchor,le=ee.labelAlignment,ae=[F,R,_,U].some((function(e){return void 0!==e})),se="function"==typeof q?q:C[q];return(0,o.jsxDEV)("g",{transform:"translate("+f+","+b+")",style:{opacity:null!=(i=Z.itemOpacity)?i:z},children:[(0,o.jsxDEV)("rect",{width:y,height:x,fill:null!=(n=Z.itemBackground)?n:O,style:{cursor:ae?"pointer":"auto"},onClick:function(e){null==F||F(k,e),null==U||U(k.id)},onMouseEnter:Q,onMouseLeave:$},void 0,!1,{fileName:N,lineNumber:111,columnNumber:13},void 0),a.createElement(se,m({id:k.id,x:te,y:ie,size:null!=(l=Z.symbolSize)?l:X,fill:null!=(s=null!=(c=k.fill)?c:k.color)?s:"black",borderWidth:null!=(d=Z.symbolBorderWidth)?d:T,borderColor:null!=(u=Z.symbolBorderColor)?u:M},k.hidden?K.legends.hidden.symbol:void 0)),(0,o.jsxDEV)("text",{textAnchor:re,style:m({},K.legends.text,{fill:null!=(g=null!=(h=null!=(v=Z.itemTextColor)?v:W)?h:K.legends.text.fill)?g:"black",dominantBaseline:le,pointerEvents:"none",userSelect:"none"},k.hidden?K.legends.hidden.text:void 0),x:oe,y:ne,children:k.label},void 0,!1,{fileName:N,lineNumber:135,columnNumber:13},void 0)]},void 0,!0,{fileName:N,lineNumber:105,columnNumber:9},void 0)},A="/Users/raph/projects/plouc/nivo/packages/legends/src/svg/LegendSvg.tsx",W=function(e){var t=e.data,i=e.x,n=e.y,r=e.direction,l=e.padding,a=void 0===l?0:l,s=e.justify,c=e.effects,d=e.itemWidth,u=e.itemHeight,m=e.itemDirection,g=void 0===m?"left-to-right":m,h=e.itemsSpacing,f=void 0===h?0:h,p=e.itemTextColor,b=e.itemBackground,y=void 0===b?"transparent":b,x=e.itemOpacity,k=void 0===x?1:x,S=e.symbolShape,j=e.symbolSize,N=e.symbolSpacing,C=e.symbolBorderWidth,W=e.symbolBorderColor,w=e.onClick,O=e.onMouseEnter,B=e.onMouseLeave,z=e.toggleSerie,V=v({itemCount:t.length,itemWidth:d,itemHeight:u,itemsSpacing:f,direction:r,padding:a}).padding,q="row"===r?d+f:0,D="column"===r?u+f:0;return(0,o.jsxDEV)("g",{transform:"translate("+i+","+n+")",children:t.map((function(e,t){return(0,o.jsxDEV)(E,{data:e,x:t*q+V.left,y:t*D+V.top,width:d,height:u,direction:g,justify:s,effects:c,textColor:p,background:y,opacity:k,symbolShape:S,symbolSize:j,symbolSpacing:N,symbolBorderWidth:C,symbolBorderColor:W,onClick:w,onMouseEnter:O,onMouseLeave:B,toggleSerie:z},t,!1,{fileName:A,lineNumber:49,columnNumber:17},void 0)}))},void 0,!1,{fileName:A,lineNumber:47,columnNumber:9},void 0)},w=function(e){var t=e.data,i=e.containerWidth,n=e.containerHeight,r=e.translateX,l=void 0===r?0:r,a=e.translateY,s=void 0===a?0:a,c=e.anchor,d=e.direction,u=e.padding,m=void 0===u?0:u,g=e.justify,h=e.itemsSpacing,p=void 0===h?0:h,b=e.itemWidth,y=e.itemHeight,x=e.itemDirection,k=e.itemTextColor,S=e.itemBackground,j=e.itemOpacity,N=e.symbolShape,C=e.symbolSize,E=e.symbolSpacing,A=e.symbolBorderWidth,w=e.symbolBorderColor,O=e.onClick,B=e.onMouseEnter,z=e.onMouseLeave,V=e.toggleSerie,q=e.effects,D=v({itemCount:t.length,itemsSpacing:p,itemWidth:b,itemHeight:y,direction:d,padding:m}),X=D.width,Y=D.height,H=f({anchor:c,translateX:l,translateY:s,containerWidth:i,containerHeight:n,width:X,height:Y}),L=H.x,T=H.y;return(0,o.jsxDEV)(W,{data:t,x:L,y:T,direction:d,padding:m,justify:g,effects:q,itemsSpacing:p,itemWidth:b,itemHeight:y,itemDirection:x,itemTextColor:k,itemBackground:S,itemOpacity:j,symbolShape:N,symbolSize:C,symbolSpacing:E,symbolBorderWidth:A,symbolBorderColor:w,onClick:O,onMouseEnter:B,onMouseLeave:z,toggleSerie:"boolean"==typeof V?void 0:V},void 0,!1,{fileName:"/Users/raph/projects/plouc/nivo/packages/legends/src/svg/BoxLegendSvg.tsx",lineNumber:58,columnNumber:9},void 0)},O={start:"left",middle:"center",end:"right"},B=function(e,t){var i=t.data,o=t.containerWidth,n=t.containerHeight,r=t.translateX,l=void 0===r?0:r,a=t.translateY,s=void 0===a?0:a,c=t.anchor,d=t.direction,u=t.padding,m=void 0===u?0:u,g=t.justify,h=void 0!==g&&g,b=t.itemsSpacing,y=void 0===b?0:b,x=t.itemWidth,k=t.itemHeight,S=t.itemDirection,j=void 0===S?"left-to-right":S,N=t.itemTextColor,C=t.symbolSize,E=void 0===C?16:C,A=t.symbolSpacing,W=void 0===A?8:A,w=t.theme,B=v({itemCount:i.length,itemWidth:x,itemHeight:k,itemsSpacing:y,direction:d,padding:m}),z=B.width,V=B.height,q=B.padding,D=f({anchor:c,translateX:l,translateY:s,containerWidth:o,containerHeight:n,width:z,height:V}),X=D.x,Y=D.y,H="row"===d?x+y:0,L="column"===d?k+y:0;e.save(),e.translate(X,Y),e.font=w.legends.text.fontSize+"px "+(w.legends.text.fontFamily||"sans-serif"),i.forEach((function(t,i){var o,n,r=i*H+q.left,l=i*L+q.top,a=p({direction:j,justify:h,symbolSize:E,symbolSpacing:W,width:x,height:k}),s=a.symbolX,c=a.symbolY,d=a.labelX,u=a.labelY,m=a.labelAnchor,g=a.labelAlignment;e.fillStyle=null!=(o=t.color)?o:"black",e.fillRect(r+s,l+c,E,E),e.textAlign=O[m],"central"===g&&(e.textBaseline="middle"),e.fillStyle=null!=(n=null!=N?N:w.legends.text.fill)?n:"black",e.fillText(String(t.label),r+d,l+u)})),e.restore()},z=function(e,t){var i=t.containerWidth,o=t.containerHeight,n=t.anchor,l=t.translateX,a=void 0===l?0:l,s=t.translateY,c=void 0===s?0:s,d=t.scale,u=t.length,m=void 0===u?g.length:u,h=t.thickness,v=void 0===h?g.thickness:h,p=t.direction,y=void 0===p?g.direction:p,x=t.ticks,k=t.tickPosition,S=void 0===k?g.tickPosition:k,j=t.tickSize,N=void 0===j?g.tickSize:j,C=t.tickSpacing,E=void 0===C?g.tickSpacing:C,A=t.tickOverlap,W=void 0===A?g.tickOverlap:A,w=t.tickFormat,O=void 0===w?g.tickFormat:w,B=t.title,z=t.titleAlign,V=void 0===z?g.titleAlign:z,q=t.titleOffset,D=void 0===q?g.titleOffset:q,X=t.theme,Y=b({scale:d,ticks:x,length:m,thickness:v,direction:y,tickPosition:S,tickSize:N,tickSpacing:E,tickOverlap:W,tickFormat:O,title:B,titleAlign:V,titleOffset:D}),H=Y.width,L=Y.height,T=Y.gradientX1,P=Y.gradientY1,M=Y.gradientX2,F=Y.gradientY2,R=Y.colorStops,_=Y.ticks,U=Y.titleText,G=Y.titleX,I=Y.titleY,Z=Y.titleRotation,J=Y.titleVerticalAlign,K=Y.titleHorizontalAlign,Q=f({anchor:n,translateX:a,translateY:c,containerWidth:i,containerHeight:o,width:H,height:L}),$=Q.x,ee=Q.y,te={font:e.font,textAlign:e.textAlign,textBaseline:e.textBaseline};e.save(),e.translate($,ee);var ie=e.createLinearGradient(T*H,P*L,M*H,F*L);R.forEach((function(e){ie.addColorStop(e.offset,e.stopColor)})),e.fillStyle=ie,e.fillRect(0,0,H,L),e.font=(X.legends.ticks.text.fontWeight?X.legends.ticks.text.fontWeight+" ":"")+X.legends.ticks.text.fontSize+"px "+X.legends.ticks.text.fontFamily,_.forEach((function(t){var i;(null!=(i=X.legends.ticks.line.strokeWidth)?i:0)>0&&(e.lineWidth=Number(X.axis.ticks.line.strokeWidth),X.axis.ticks.line.stroke&&(e.strokeStyle=X.axis.ticks.line.stroke),e.lineCap="square",e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.stroke()),X.legends.ticks.text.fill&&(e.fillStyle=X.legends.ticks.text.fill),e.textAlign="middle"===t.textHorizontalAlign?"center":t.textHorizontalAlign,e.textBaseline="central"===t.textVerticalAlign?"middle":t.textVerticalAlign,e.fillText(t.text,t.textX,t.textY)})),U&&(e.save(),e.translate(G,I),e.rotate((0,r.Ht)(Z)),e.font=(X.legends.title.text.fontWeight?X.legends.title.text.fontWeight+" ":"")+X.legends.title.text.fontSize+"px "+X.legends.title.text.fontFamily,X.legends.title.text.fill&&(e.fillStyle=X.legends.title.text.fill),e.textAlign="middle"===K?"center":K,e.textBaseline=J,e.fillText(U,0,0),e.restore()),e.restore(),e.font=te.font,e.textAlign=te.textAlign,e.textBaseline=te.textBaseline},V=function(e){var t=e.scale,i=e.domain,o=e.reverse,n=void 0!==o&&o,r=e.valueFormat,l=void 0===r?function(e){return e}:r,s=e.separator,c=void 0===s?" - ":s;return(0,a.useMemo)((function(){var e=(null!=i?i:t.range()).map((function(e,i){var o=t.invertExtent(e),n=o[0],r=o[1];return{id:e,index:i,extent:[n,r],label:""+l(n)+c+l(r),value:t(n),color:e}}));return n&&e.reverse(),e}),[i,t,n,c,l])},q={data:c().arrayOf(c().object),anchor:c().oneOf(["top","top-right","right","bottom-right","bottom","bottom-left","left","top-left","center"]).isRequired,translateX:c().number,translateY:c().number,direction:c().oneOf(["row","column"]).isRequired,itemsSpacing:c().number,itemWidth:c().number.isRequired,itemHeight:c().number.isRequired,itemDirection:c().oneOf(["left-to-right","right-to-left","top-to-bottom","bottom-to-top"]),itemTextColor:c().string,itemBackground:c().string,itemOpacity:c().number,symbolShape:c().oneOfType([c().oneOf(["circle","diamond","square","triangle"]),c().func]),symbolSize:c().number,symbolSpacing:c().number,symbolBorderWidth:c().number,symbolBorderColor:c().string,onClick:c().func,onMouseEnter:c().func,onMouseLeave:c().func,effects:c().arrayOf(c().shape({on:c().oneOfType([c().oneOf(["hover"])]).isRequired,style:c().shape({itemTextColor:c().string,itemBackground:c().string,itemOpacity:c().number,symbolSize:c().number,symbolBorderWidth:c().number,symbolBorderColor:c().string}).isRequired}))}}}]);
//# sourceMappingURL=995893798b2417dfbbc13392e0608ea361bf9191-3c9e73bc6aa007a048d9.js.map