(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[6190],{69997:function(e,t,n){"use strict";function o(e){return null==e?null:i(e)}function i(e){if("function"!=typeof e)throw new Error;return e}n.d(t,{j:function(){return o},C:function(){return i}})},45228:function(e,t,n){"use strict";function o(){return 0}function i(e){return function(){return e}}n.d(t,{G:function(){return o},Z:function(){return i}})},65591:function(e,t,n){"use strict";function o(e){var t=0,n=e.children,o=n&&n.length;if(o)for(;--o>=0;)t+=n[o].value;else t=1;e.value=t}function i(e,t){var n,o,i,a,u,c=new d(e),s=+e.value&&(c.value=e.value),h=[c];for(null==t&&(t=r);n=h.pop();)if(s&&(n.value=+n.data.value),(i=t(n.data))&&(u=i.length))for(n.children=new Array(u),a=u-1;a>=0;--a)h.push(o=n.children[a]=new d(i[a])),o.parent=n,o.depth=n.depth+1;return c.eachBefore(l)}function r(e){return e.children}function a(e){e.data=e.data.data}function l(e){var t=0;do{e.height=t}while((e=e.parent)&&e.height<++t)}function d(e){this.data=e,this.depth=this.height=0,this.parent=null}n.d(t,{ZP:function(){return i}}),d.prototype=i.prototype={constructor:d,count:function(){return this.eachAfter(o)},each:function(e){var t,n,o,i,r=this,a=[r];do{for(t=a.reverse(),a=[];r=t.pop();)if(e(r),n=r.children)for(o=0,i=n.length;o<i;++o)a.push(n[o])}while(a.length);return this},eachAfter:function(e){for(var t,n,o,i=this,r=[i],a=[];i=r.pop();)if(a.push(i),t=i.children)for(n=0,o=t.length;n<o;++n)r.push(t[n]);for(;i=a.pop();)e(i);return this},eachBefore:function(e){for(var t,n,o=this,i=[o];o=i.pop();)if(e(o),t=o.children)for(n=t.length-1;n>=0;--n)i.push(t[n]);return this},sum:function(e){return this.eachAfter((function(t){for(var n=+e(t.data)||0,o=t.children,i=o&&o.length;--i>=0;)n+=o[i].value;t.value=n}))},sort:function(e){return this.eachBefore((function(t){t.children&&t.children.sort(e)}))},path:function(e){for(var t=this,n=function(e,t){if(e===t)return e;var n=e.ancestors(),o=t.ancestors(),i=null;e=n.pop(),t=o.pop();for(;e===t;)i=e,e=n.pop(),t=o.pop();return i}(t,e),o=[t];t!==n;)t=t.parent,o.push(t);for(var i=o.length;e!==n;)o.splice(i,0,e),e=e.parent;return o},ancestors:function(){for(var e=this,t=[e];e=e.parent;)t.push(e);return t},descendants:function(){var e=[];return this.each((function(t){e.push(t)})),e},leaves:function(){var e=[];return this.eachBefore((function(t){t.children||e.push(t)})),e},links:function(){var e=this,t=[];return e.each((function(n){n!==e&&t.push({source:n.parent,target:n})})),t},copy:function(){return i(this).eachBefore(a)}}},30955:function(e,t,n){"use strict";function o(e,t,n,o,i){for(var r,a=e.children,l=-1,d=a.length,u=e.value&&(o-t)/e.value;++l<d;)(r=a[l]).y0=n,r.y1=i,r.x0=t,r.x1=t+=r.value*u}n.d(t,{Z:function(){return o}})},66118:function(e,t,n){"use strict";function o(e){e.x0=Math.round(e.x0),e.y0=Math.round(e.y0),e.x1=Math.round(e.x1),e.y1=Math.round(e.y1)}n.d(t,{Z:function(){return o}})},46222:function(e,t,n){"use strict";n.d(t,{R0:function(){return J},gv:function(){return ie},bk:function(){return $},SY:function(){return U},mX:function(){return E},Pq:function(){return I},rE:function(){return z},XB:function(){return R},wR:function(){return F}});var o=n(27378),i=n(98383),r=n(48159),a=n.n(r),l=n(30454),d=n.n(l),u=n(34981),c=n.n(u);function s(e,t,n,o,i){for(var r,a=e.children,l=-1,d=a.length,u=e.value&&(i-n)/e.value;++l<d;)(r=a[l]).x0=t,r.x1=o,r.y0=n,r.y1=n+=r.value*u}var h=n(30955);var p=function e(t){function n(e,n,o,i,r){!function(e,t,n,o,i,r){for(var a,l,d,u,c,p,b,v,f,g,L,y=[],m=t.children,x=0,C=0,P=m.length,M=t.value;x<P;){d=i-n,u=r-o;do{c=m[C++].value}while(!c&&C<P);for(p=b=c,L=c*c*(g=Math.max(u/d,d/u)/(M*e)),f=Math.max(b/L,L/p);C<P;++C){if(c+=l=m[C].value,l<p&&(p=l),l>b&&(b=l),L=c*c*g,(v=Math.max(b/L,L/p))>f){c-=l;break}f=v}y.push(a={value:c,dice:d<u,children:m.slice(x,C)}),a.dice?(0,h.Z)(a,n,o,i,M?o+=u*c/M:r):s(a,n,o,M?n+=d*c/M:i,r),M-=c,x=C}}(t,e,n,o,i,r)}return n.ratio=function(t){return e((t=+t)>1?t:1)},n}((1+Math.sqrt(5))/2),b=n(66118),v=n(69997),f=n(45228);var g=n(65591),L=n(14503),y=n(89193),m=n(58493),x=n(24246);function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},C.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}var M=function(e,t,n){return(0,m.to)([e,t,n],(function(e,t,n){return"translate("+e+","+t+") rotate("+n+")"}))},w=function(e,t,n){return(0,m.to)([e,t,n],(function(e,t,n){return"translate("+e+"px,"+t+"px) rotate("+n+"deg)"}))},k=function(e,t,n){return(0,m.to)([e,t,n],(function(e,t,n){return"translate("+(e-(0===n?0:5))+"px,"+(t-(0===n?5:0))+"px) rotate("+n+"deg)"}))},O=function(e){var t,n,o=e.node,r=e.animatedProps,a=e.borderWidth,l=e.enableLabel,d=e.enableParentLabel,u=e.labelSkipSize,c=(0,i.Fg)(),s=l&&o.isLeaf&&(0===u||Math.min(o.width,o.height)>u),h=d&&o.isParent;return(0,x.jsxs)(m.q.g,{transform:(t=r.x,n=r.y,(0,m.to)([t,n],(function(e,t){return"translate("+e+","+t+")"}))),children:[(0,x.jsx)(m.q.rect,{"data-testid":"node."+o.id,width:(0,m.to)(r.width,(function(e){return Math.max(e,0)})),height:(0,m.to)(r.height,(function(e){return Math.max(e,0)})),fill:o.fill?o.fill:r.color,strokeWidth:a,stroke:o.borderColor,fillOpacity:o.opacity,onMouseEnter:o.onMouseEnter,onMouseMove:o.onMouseMove,onMouseLeave:o.onMouseLeave,onClick:o.onClick}),s&&(0,x.jsx)(m.q.text,{"data-testid":"label."+o.id,textAnchor:"middle",dominantBaseline:"central",style:C({},c.labels.text,{fill:o.labelTextColor,pointerEvents:"none"}),fillOpacity:r.labelOpacity,transform:M(r.labelX,r.labelY,r.labelRotation),children:o.label}),h&&(0,x.jsx)(m.q.text,{"data-testid":"parentLabel."+o.id,dominantBaseline:"central",style:C({},c.labels.text,{fill:o.parentLabelTextColor,pointerEvents:"none"}),fillOpacity:r.parentLabelOpacity,transform:M(r.parentLabelX,r.parentLabelY,r.parentLabelRotation),children:o.parentLabel})]})},S=(0,o.memo)(O),B=function(e){var t=e.node;return(0,x.jsx)(y._5,{id:t.id,value:t.formattedValue,enableChip:!0,color:t.color})},j=(0,o.memo)(B),T=function(e){var t,n,o=e.node,r=e.animatedProps,a=e.borderWidth,l=e.enableLabel,d=e.enableParentLabel,u=e.labelSkipSize,c=(0,i.Fg)(),s=l&&o.isLeaf&&(0===u||Math.min(o.width,o.height)>u),h=d&&o.isParent;return(0,x.jsxs)(m.q.div,{"data-testid":"node."+o.id,id:o.path.replace(/[^\w]/gi,"-"),style:{boxSizing:"border-box",position:"absolute",top:0,left:0,transform:(t=r.x,n=r.y,(0,m.to)([t,n],(function(e,t){return"translate("+e+"px, "+t+"px)"}))),width:r.width,height:r.height,borderWidth:a,borderStyle:"solid",borderColor:o.borderColor,overflow:"hidden"},children:[(0,x.jsx)(m.q.div,{style:{boxSizing:"border-box",position:"absolute",top:0,left:0,opacity:o.opacity,width:r.width,height:r.height,background:r.color},onMouseEnter:o.onMouseEnter,onMouseMove:o.onMouseMove,onMouseLeave:o.onMouseLeave,onClick:o.onClick}),s&&(0,x.jsx)(m.q.span,{"data-testid":"label."+o.id,style:C({},c.labels.text,{position:"absolute",display:"flex",top:-5,left:-5,width:10,height:10,justifyContent:"center",alignItems:"center",whiteSpace:"nowrap",color:o.labelTextColor,transformOrigin:"center center",transform:w(r.labelX,r.labelY,r.labelRotation),opacity:r.labelOpacity,pointerEvents:"none"}),children:o.label}),h&&(0,x.jsx)(m.q.span,{"data-testid":"parentLabel."+o.id,style:C({},c.labels.text,{position:"absolute",display:"flex",justifyContent:"flex-start",alignItems:"center",whiteSpace:"nowrap",width:10,height:10,color:o.parentLabelTextColor,transformOrigin:"top left",transform:k(r.parentLabelX,r.parentLabelY,r.parentLabelRotation),opacity:r.parentLabelOpacity,pointerEvents:"none"}),children:o.parentLabel})]})},W=(0,o.memo)(T),I={layers:["nodes"],identity:"id",value:"value",tile:"squarify",leavesOnly:!1,innerPadding:0,outerPadding:0,colors:{scheme:"nivo"},colorBy:"pathComponents.1",nodeOpacity:.33,enableLabel:!0,label:"formattedValue",labelSkipSize:0,labelTextColor:{from:"color",modifiers:[["darker",1]]},orientLabel:!0,enableParentLabel:!0,parentLabel:"id",parentLabelSize:20,parentLabelPosition:"top",parentLabelPadding:6,parentLabelTextColor:{from:"color",modifiers:[["darker",1]]},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",1]]},isInteractive:!0,tooltip:j,role:"img",animate:!0,motionConfig:"gentle"},R=C({},I,{nodeComponent:S,defs:[],fill:[]}),z=C({},I,{nodeComponent:W}),E=C({},I,{pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1}),F={binary:function(e,t,n,o,i){var r,a,l=e.children,d=l.length,u=new Array(d+1);for(u[0]=a=r=0;r<d;++r)u[r+1]=a+=l[r].value;!function e(t,n,o,i,r,a,d){if(t>=n-1){var c=l[t];return c.x0=i,c.y0=r,c.x1=a,void(c.y1=d)}var s=u[t],h=o/2+s,p=t+1,b=n-1;for(;p<b;){var v=p+b>>>1;u[v]<h?p=v+1:b=v}h-u[p-1]<u[p]-h&&t+1<p&&--p;var f=u[p]-s,g=o-f;if(a-i>d-r){var L=(i*g+a*f)/o;e(t,p,f,i,r,L,d),e(p,n,g,L,r,a,d)}else{var y=(r*g+d*f)/o;e(t,p,f,i,r,a,y),e(p,n,g,i,y,a,d)}}(0,d,e.value,t,n,o,i)},dice:h.Z,slice:s,sliceDice:function(e,t,n,o,i){(1&e.depth?s:h.Z)(e,t,n,o,i)},squarify:p},X=function(e){var t=e.width,n=e.height,i=e.tile,r=e.innerPadding,a=e.outerPadding,l=e.enableParentLabel,d=e.parentLabelSize,u=e.parentLabelPosition,s=e.leavesOnly;return(0,o.useMemo)((function(){var e=function(){var e=p,t=!1,n=1,o=1,i=[0],r=f.G,a=f.G,l=f.G,d=f.G,u=f.G;function c(e){return e.x0=e.y0=0,e.x1=n,e.y1=o,e.eachBefore(s),i=[0],t&&e.eachBefore(b.Z),e}function s(t){var n=i[t.depth],o=t.x0+n,c=t.y0+n,s=t.x1-n,h=t.y1-n;s<o&&(o=s=(o+s)/2),h<c&&(c=h=(c+h)/2),t.x0=o,t.y0=c,t.x1=s,t.y1=h,t.children&&(n=i[t.depth+1]=r(t)/2,o+=u(t)-n,c+=a(t)-n,(s-=l(t)-n)<o&&(o=s=(o+s)/2),(h-=d(t)-n)<c&&(c=h=(c+h)/2),e(t,o,c,s,h))}return c.round=function(e){return arguments.length?(t=!!e,c):t},c.size=function(e){return arguments.length?(n=+e[0],o=+e[1],c):[n,o]},c.tile=function(t){return arguments.length?(e=(0,v.C)(t),c):e},c.padding=function(e){return arguments.length?c.paddingInner(e).paddingOuter(e):c.paddingInner()},c.paddingInner=function(e){return arguments.length?(r="function"==typeof e?e:(0,f.Z)(+e),c):r},c.paddingOuter=function(e){return arguments.length?c.paddingTop(e).paddingRight(e).paddingBottom(e).paddingLeft(e):c.paddingTop()},c.paddingTop=function(e){return arguments.length?(a="function"==typeof e?e:(0,f.Z)(+e),c):a},c.paddingRight=function(e){return arguments.length?(l="function"==typeof e?e:(0,f.Z)(+e),c):l},c.paddingBottom=function(e){return arguments.length?(d="function"==typeof e?e:(0,f.Z)(+e),c):d},c.paddingLeft=function(e){return arguments.length?(u="function"==typeof e?e:(0,f.Z)(+e),c):u},c}().size([t,n]).tile(F[i]).round(!0).paddingInner(r).paddingOuter(a);if(l&&!s){var o=d+2*a;e["padding"+c()(u)](o)}return e}),[t,n,i,r,a,l,d,u,s])},Y=function(e){var t=e.root,n=e.getValue;return(0,o.useMemo)((function(){return(0,g.ZP)(t).sum(n)}),[t,n])},Z=function(e){var t=e.data,n=e.width,r=e.height,l=e.identity,u=void 0===l?I.identity:l,c=e.value,s=void 0===c?I.value:c,h=e.valueFormat,p=e.leavesOnly,b=void 0===p?I.leavesOnly:p,v=e.tile,f=void 0===v?I.tile:v,g=e.innerPadding,y=void 0===g?I.innerPadding:g,m=e.outerPadding,x=void 0===m?I.outerPadding:m,P=e.label,M=void 0===P?I.label:P,w=e.orientLabel,k=void 0===w?I.orientLabel:w,O=e.enableParentLabel,S=void 0===O?I.enableParentLabel:O,B=e.parentLabel,j=void 0===B?I.parentLabel:B,T=e.parentLabelSize,W=void 0===T?I.parentLabelSize:T,R=e.parentLabelPosition,z=void 0===R?I.parentLabelPosition:R,E=e.parentLabelPadding,F=void 0===E?I.parentLabelPadding:E,Z=e.colors,q=void 0===Z?I.colors:Z,H=e.colorBy,A=void 0===H?I.colorBy:H,D=e.nodeOpacity,G=void 0===D?I.nodeOpacity:D,V=e.borderColor,_=void 0===V?I.borderColor:V,U=e.labelTextColor,J=void 0===U?I.labelTextColor:U,K=e.parentLabelTextColor,N=void 0===K?I.parentLabelTextColor:K,Q=(0,i.LR)(u),$=(0,i.LR)(s),ee=(0,i.O_)(h),te=(0,i.LR)(M),ne=(0,i.LR)(j),oe=X({width:n,height:r,tile:f,innerPadding:y,outerPadding:x,enableParentLabel:S,parentLabelSize:W,parentLabelPosition:z,leavesOnly:b}),ie=Y({root:t,getValue:$}),re=(0,o.useMemo)((function(){var e=d()(ie);return oe(e),b?e.leaves():e.descendants()}),[ie,oe,b]),ae=(0,o.useMemo)((function(){return re.map((function(e){var t=function(e,t){var n=e.ancestors().map((function(e){return t(e.data)})).reverse();return{path:n.join("."),pathComponents:n}}(e,Q),n=t.path,o=t.pathComponents,i={id:Q(e.data),path:n,pathComponents:o,data:a()(e.data,"children"),x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,value:e.value,formattedValue:ee(e.value),treeDepth:e.depth,treeHeight:e.height,isParent:e.height>0,isLeaf:0===e.height,parentLabelX:0,parentLabelY:0,parentLabelRotation:0};return i.labelRotation=k&&i.height>i.width?-90:0,"top"===z&&(i.parentLabelX=x+F,i.parentLabelY=x+W/2),"right"===z&&(i.parentLabelX=i.width-x-W/2,i.parentLabelY=i.height-x-F,i.parentLabelRotation=-90),"bottom"===z&&(i.parentLabelX=x+F,i.parentLabelY=i.height-x-W/2),"left"===z&&(i.parentLabelX=x+W/2,i.parentLabelY=i.height-x-F,i.parentLabelRotation=-90),i.label=te(i),i.parentLabel=ne(i),i}))}),[re,Q,ee,te,k,ne,W,z,F,x]),le=(0,i.Fg)(),de=(0,L.U)(q,A),ue=(0,L.Bf)(_,le),ce=(0,L.Bf)(J,le),se=(0,L.Bf)(N,le),he=(0,o.useMemo)((function(){return ae.map((function(e){var t=C({},e,{color:de(e),opacity:G});return t.borderColor=ue(t),t.labelTextColor=ce(t),t.parentLabelTextColor=se(t),t}))}),[ae,de,G,ue,ce,se]);return{hierarchy:ie,nodes:he,layout:oe}},q=function(e){var t=e.nodes;return(0,o.useMemo)((function(){return{nodes:t}}),[t])},H=function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,labelX:e.width/2,labelY:e.height/2,labelRotation:e.labelRotation,labelOpacity:1,parentLabelX:e.parentLabelX,parentLabelY:e.parentLabelY,parentLabelRotation:e.parentLabelRotation,parentLabelOpacity:1}},A=function(e){return{x:e.x+e.width/2,y:e.y+e.height/2,width:0,height:0,color:e.color,labelX:0,labelY:0,labelRotation:e.labelRotation,labelOpacity:0,parentLabelX:0,parentLabelY:0,parentLabelRotation:e.parentLabelRotation,parentLabelOpacity:0}},D=function(e){var t=e.nodes,n=e.nodeComponent,r=e.borderWidth,a=e.enableLabel,l=e.labelSkipSize,d=e.enableParentLabel,u=function(e,t){var n=t.isInteractive,i=t.onMouseEnter,r=t.onMouseMove,a=t.onMouseLeave,l=t.onClick,d=t.tooltip,u=(0,y.lL)(),c=u.showTooltipFromEvent,s=u.hideTooltip,h=(0,o.useCallback)((function(e,t){c((0,o.createElement)(d,{node:e}),t,"left")}),[c,d]),p=(0,o.useCallback)((function(e,t){h(e,t),null==i||i(e,t)}),[i,h]),b=(0,o.useCallback)((function(e,t){h(e,t),null==r||r(e,t)}),[r,h]),v=(0,o.useCallback)((function(e,t){s(),null==a||a(e,t)}),[a,s]),f=(0,o.useCallback)((function(e,t){null==l||l(e,t)}),[l]);return(0,o.useMemo)((function(){return e.map((function(e){return n?C({},e,{onMouseEnter:function(t){return p(e,t)},onMouseMove:function(t){return b(e,t)},onMouseLeave:function(t){return v(e,t)},onClick:function(t){return f(e,t)}}):e}))}),[n,e,p,b,v,f])}(t,{isInteractive:e.isInteractive,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,tooltip:e.tooltip}),c=(0,i.tf)(),s=c.animate,h=c.config,p=(0,m.useTransition)(u,{keys:function(e){return e.path},initial:H,from:A,enter:H,update:H,leave:A,config:h,immediate:!s});return(0,x.jsx)(x.Fragment,{children:p((function(e,t){return(0,o.createElement)(n,{key:t.path,node:t,animatedProps:e,borderWidth:r,enableLabel:a,labelSkipSize:l,enableParentLabel:d})}))})},G=(0,o.memo)(D),V=["isInteractive","animate","motionConfig","theme","renderWrapper"],_=function(e){var t=e.data,n=e.identity,r=void 0===n?R.identity:n,a=e.value,l=void 0===a?R.value:a,d=e.valueFormat,u=e.tile,c=void 0===u?R.tile:u,s=e.nodeComponent,h=void 0===s?R.nodeComponent:s,p=e.innerPadding,b=void 0===p?R.innerPadding:p,v=e.outerPadding,f=void 0===v?R.outerPadding:v,g=e.leavesOnly,L=void 0===g?R.leavesOnly:g,y=e.width,m=e.height,C=e.margin,P=e.layers,M=void 0===P?R.layers:P,w=e.colors,k=void 0===w?R.colors:w,O=e.colorBy,S=void 0===O?R.colorBy:O,B=e.nodeOpacity,j=void 0===B?R.nodeOpacity:B,T=e.borderWidth,W=void 0===T?R.borderWidth:T,I=e.borderColor,z=void 0===I?R.borderColor:I,E=e.defs,F=void 0===E?R.defs:E,X=e.fill,Y=void 0===X?R.fill:X,H=e.enableLabel,A=void 0===H?R.enableLabel:H,D=e.label,V=void 0===D?R.label:D,_=e.labelTextColor,U=void 0===_?R.labelTextColor:_,J=e.orientLabel,K=void 0===J?R.orientLabel:J,N=e.labelSkipSize,Q=void 0===N?R.labelSkipSize:N,$=e.enableParentLabel,ee=void 0===$?R.enableParentLabel:$,te=e.parentLabel,ne=void 0===te?R.parentLabel:te,oe=e.parentLabelSize,ie=void 0===oe?R.parentLabelSize:oe,re=e.parentLabelPosition,ae=void 0===re?R.parentLabelPosition:re,le=e.parentLabelPadding,de=void 0===le?R.parentLabelPadding:le,ue=e.parentLabelTextColor,ce=void 0===ue?R.parentLabelTextColor:ue,se=e.isInteractive,he=void 0===se?R.isInteractive:se,pe=e.onMouseEnter,be=e.onMouseMove,ve=e.onMouseLeave,fe=e.onClick,ge=e.tooltip,Le=void 0===ge?R.tooltip:ge,ye=e.role,me=e.ariaLabel,xe=e.ariaLabelledBy,Ce=e.ariaDescribedBy,Pe=(0,i.Bs)(y,m,C),Me=Pe.margin,we=Pe.innerWidth,ke=Pe.innerHeight,Oe=Pe.outerWidth,Se=Pe.outerHeight,Be=Z({data:t,identity:r,value:l,valueFormat:d,leavesOnly:L,width:we,height:ke,tile:c,innerPadding:b,outerPadding:f,colors:k,colorBy:S,nodeOpacity:j,borderColor:z,label:V,labelTextColor:U,orientLabel:K,enableParentLabel:ee,parentLabel:ne,parentLabelSize:ie,parentLabelPosition:ae,parentLabelPadding:de,parentLabelTextColor:ce}).nodes,je={nodes:null};M.includes("nodes")&&(je.nodes=(0,x.jsx)(G,{nodes:Be,nodeComponent:h,borderWidth:W,enableLabel:A,labelSkipSize:Q,enableParentLabel:ee,isInteractive:he,onMouseEnter:pe,onMouseMove:be,onMouseLeave:ve,onClick:fe,tooltip:Le},"nodes"));var Te=q({nodes:Be}),We=(0,i.yU)(F,Be,Y);return(0,x.jsx)(i.tM,{width:Oe,height:Se,margin:Me,defs:We,role:ye,ariaLabel:me,ariaLabelledBy:xe,ariaDescribedBy:Ce,children:M.map((function(e,t){var n;return"function"==typeof e?(0,x.jsx)(o.Fragment,{children:(0,o.createElement)(e,Te)},t):null!=(n=null==je?void 0:je[e])?n:null}))})},U=function(e){var t=e.isInteractive,n=void 0===t?R.isInteractive:t,o=e.animate,r=void 0===o?R.animate:o,a=e.motionConfig,l=void 0===a?R.motionConfig:a,d=e.theme,u=e.renderWrapper,c=P(e,V);return(0,x.jsx)(i.W2,{animate:r,isInteractive:n,motionConfig:l,renderWrapper:u,theme:d,children:(0,x.jsx)(_,C({isInteractive:n},c))})},J=function(e){return(0,x.jsx)(i.d,{children:function(t){var n=t.width,o=t.height;return(0,x.jsx)(U,C({width:n,height:o},e))}})},K=["isInteractive","animate","motionConfig","theme","renderWrapper"],N=function(e){var t=e.data,n=e.identity,r=void 0===n?z.identity:n,a=e.value,l=void 0===a?z.value:a,d=e.tile,u=void 0===d?z.tile:d,c=e.nodeComponent,s=void 0===c?z.nodeComponent:c,h=e.valueFormat,p=e.innerPadding,b=void 0===p?z.innerPadding:p,v=e.outerPadding,f=void 0===v?z.outerPadding:v,g=e.leavesOnly,L=void 0===g?z.leavesOnly:g,y=e.width,m=e.height,C=e.margin,P=e.layers,M=void 0===P?R.layers:P,w=e.colors,k=void 0===w?z.colors:w,O=e.colorBy,S=void 0===O?z.colorBy:O,B=e.nodeOpacity,j=void 0===B?z.nodeOpacity:B,T=e.borderWidth,W=void 0===T?z.borderWidth:T,I=e.borderColor,E=void 0===I?z.borderColor:I,F=e.enableLabel,X=void 0===F?z.enableLabel:F,Y=e.label,H=void 0===Y?z.label:Y,A=e.labelTextColor,D=void 0===A?z.labelTextColor:A,V=e.orientLabel,_=void 0===V?z.orientLabel:V,U=e.labelSkipSize,J=void 0===U?z.labelSkipSize:U,K=e.enableParentLabel,N=void 0===K?z.enableParentLabel:K,Q=e.parentLabel,$=void 0===Q?z.parentLabel:Q,ee=e.parentLabelSize,te=void 0===ee?z.parentLabelSize:ee,ne=e.parentLabelPosition,oe=void 0===ne?z.parentLabelPosition:ne,ie=e.parentLabelPadding,re=void 0===ie?z.parentLabelPadding:ie,ae=e.parentLabelTextColor,le=void 0===ae?z.parentLabelTextColor:ae,de=e.isInteractive,ue=void 0===de?z.isInteractive:de,ce=e.onMouseEnter,se=e.onMouseMove,he=e.onMouseLeave,pe=e.onClick,be=e.tooltip,ve=void 0===be?z.tooltip:be,fe=e.role,ge=e.ariaLabel,Le=e.ariaLabelledBy,ye=e.ariaDescribedBy,me=(0,i.Bs)(y,m,C),xe=me.margin,Ce=me.innerWidth,Pe=me.innerHeight,Me=me.outerWidth,we=me.outerHeight,ke=Z({data:t,identity:r,value:l,valueFormat:h,leavesOnly:L,width:Ce,height:Pe,tile:u,innerPadding:b,outerPadding:f,colors:k,colorBy:S,nodeOpacity:j,borderColor:E,label:H,labelTextColor:D,orientLabel:_,enableParentLabel:N,parentLabel:$,parentLabelSize:te,parentLabelPosition:oe,parentLabelPadding:re,parentLabelTextColor:le}).nodes,Oe={nodes:null};M.includes("nodes")&&(Oe.nodes=(0,x.jsx)(G,{nodes:ke,nodeComponent:s,borderWidth:W,enableLabel:X,labelSkipSize:J,enableParentLabel:N,isInteractive:ue,onMouseEnter:ce,onMouseMove:se,onMouseLeave:he,onClick:pe,tooltip:ve},"nodes"));var Se=q({nodes:ke});return(0,x.jsx)("div",{role:fe,"aria-label":ge,"aria-labelledby":Le,"aria-describedby":ye,style:{position:"relative",width:Me,height:we},children:(0,x.jsx)("div",{style:{position:"absolute",top:xe.top,left:xe.left},children:M.map((function(e,t){var n;return"function"==typeof e?(0,x.jsx)(o.Fragment,{children:(0,o.createElement)(e,Se)},t):null!=(n=null==Oe?void 0:Oe[e])?n:null}))})})},Q=function(e){var t=e.isInteractive,n=void 0===t?z.isInteractive:t,o=e.animate,r=void 0===o?z.animate:o,a=e.motionConfig,l=void 0===a?z.motionConfig:a,d=e.theme,u=e.renderWrapper,c=P(e,K);return(0,x.jsx)(i.W2,{animate:r,isInteractive:n,motionConfig:l,renderWrapper:u,theme:d,children:(0,x.jsx)(N,C({isInteractive:n},c))})},$=function(e){return(0,x.jsx)(i.d,{children:function(t){var n=t.width,o=t.height;return(0,x.jsx)(Q,C({width:n,height:o},e))}})},ee=["theme","isInteractive","animate","motionConfig","renderWrapper"],te=function(e,t,n,o){return e.find((function(e){return(0,i.zn)(e.x+t.left,e.y+t.top,e.width,e.height,n,o)}))},ne=function(e){var t=e.data,n=e.identity,r=void 0===n?E.identity:n,a=e.value,l=void 0===a?E.identity:a,d=e.tile,u=void 0===d?E.tile:d,c=e.valueFormat,s=e.innerPadding,h=void 0===s?E.innerPadding:s,p=e.outerPadding,b=void 0===p?E.outerPadding:p,v=e.leavesOnly,f=void 0===v?E.leavesOnly:v,g=e.width,L=e.height,m=e.margin,C=e.colors,P=void 0===C?E.colors:C,M=e.colorBy,w=void 0===M?E.colorBy:M,k=e.nodeOpacity,O=void 0===k?E.nodeOpacity:k,S=e.borderWidth,B=void 0===S?E.borderWidth:S,j=e.borderColor,T=void 0===j?E.borderColor:j,W=e.enableLabel,I=void 0===W?E.enableLabel:W,R=e.label,z=void 0===R?E.label:R,F=e.labelTextColor,X=void 0===F?E.labelTextColor:F,Y=e.orientLabel,q=void 0===Y?E.orientLabel:Y,H=e.labelSkipSize,A=void 0===H?E.labelSkipSize:H,D=e.isInteractive,G=void 0===D?E.isInteractive:D,V=e.onMouseMove,_=e.onClick,U=e.tooltip,J=void 0===U?E.tooltip:U,K=e.pixelRatio,N=void 0===K?E.pixelRatio:K,Q=e.role,$=e.ariaLabel,ee=e.ariaLabelledBy,ne=e.ariaDescribedBy,oe=(0,o.useRef)(null),ie=(0,i.Bs)(g,L,m),re=ie.margin,ae=ie.innerWidth,le=ie.innerHeight,de=ie.outerWidth,ue=ie.outerHeight,ce=Z({data:t,identity:r,value:l,valueFormat:c,leavesOnly:f,width:ae,height:le,tile:u,innerPadding:h,outerPadding:b,colors:P,colorBy:w,nodeOpacity:O,borderColor:T,label:z,labelTextColor:X,orientLabel:q,enableParentLabel:!1}).nodes,se=(0,i.Fg)();(0,o.useEffect)((function(){if(null!==oe.current){var e=oe.current.getContext("2d");null!==e&&(oe.current.width=de*N,oe.current.height=ue*N,e.scale(N,N),e.fillStyle=se.background,e.fillRect(0,0,de,ue),e.translate(re.left,re.top),ce.forEach((function(t){e.fillStyle=t.color,e.fillRect(t.x,t.y,t.width,t.height),B>0&&(e.strokeStyle=t.borderColor,e.lineWidth=B,e.strokeRect(t.x,t.y,t.width,t.height))})),I&&(e.textAlign="center",e.textBaseline="middle",e.font=se.labels.text.fontSize+"px "+se.labels.text.fontFamily,ce.forEach((function(t){if(t.isLeaf&&(0===A||Math.min(t.width,t.height)>A)){var n=q&&t.height>t.width;e.save(),e.translate(t.x+t.width/2,t.y+t.height/2),e.rotate((0,i.Ht)(n?-90:0)),e.fillStyle=t.labelTextColor,e.fillText(""+t.label,0,0),e.restore()}}))))}}),[oe,ce,de,ue,ae,le,re,B,I,q,A,se,N]);var he=(0,y.lL)(),pe=he.showTooltipFromEvent,be=he.hideTooltip,ve=(0,o.useCallback)((function(e){if(null!==oe.current){var t=(0,i.P6)(oe.current,e),n=t[0],r=t[1],a=te(ce,re,n,r);void 0!==a?(pe((0,o.createElement)(J,{node:a}),e,"left"),null==V||V(a,e)):be()}}),[oe,ce,re,pe,be,J,V]),fe=(0,o.useCallback)((function(){be()}),[be]),ge=(0,o.useCallback)((function(e){if(null!==oe.current){var t=(0,i.P6)(oe.current,e),n=t[0],o=t[1],r=te(ce,re,n,o);void 0!==r&&(null==_||_(r,e))}}),[oe,ce,re,_]);return(0,x.jsx)("canvas",{ref:oe,width:de*N,height:ue*N,style:{width:de,height:ue},onMouseEnter:G?ve:void 0,onMouseMove:G?ve:void 0,onMouseLeave:G?fe:void 0,onClick:G?ge:void 0,role:Q,"aria-label":$,"aria-labelledby":ee,"aria-describedby":ne})},oe=function(e){var t=e.theme,n=e.isInteractive,o=void 0===n?E.isInteractive:n,r=e.animate,a=void 0===r?E.animate:r,l=e.motionConfig,d=void 0===l?E.motionConfig:l,u=e.renderWrapper,c=P(e,ee);return(0,x.jsx)(i.W2,{isInteractive:o,animate:a,motionConfig:d,theme:t,renderWrapper:u,children:(0,x.jsx)(ne,C({isInteractive:o},c))})},ie=function(e){return(0,x.jsx)(i.d,{children:function(t){var n=t.width,o=t.height;return(0,x.jsx)(oe,C({width:n,height:o},e))}})}},30454:function(e,t,n){var o=n(40699);e.exports=function(e){return o(e,5)}}}]);
//# sourceMappingURL=23f4a609726e3cbc1b7446dae4823d7f061dce94-76516e6d02a5170cee4c.js.map