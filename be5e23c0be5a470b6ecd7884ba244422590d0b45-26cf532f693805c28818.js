(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[8773],{4141:function(t,e,n){"use strict";n.d(e,{X:function(){return u}});var o=n(79201),i=n(88700),r=n(80169),a=[{key:"data",group:"Base",help:"Chart data.",description:"\n            Chart data, which must conform to this structure:\n            ```\n            Array<{\n                id:   string | number\n                data: Array<{\n                    x: number | string | Date\n                    y: number | string | Date\n                }>\n            }>\n            ```\n\n            Please note that you should adjust `xScale`\n            and `yScale` according to `x` and `y` type,\n            for example if you use dates, you should use\n            a `time` scale.\n        ",required:!0},{key:"xScale",type:"object",help:"X scale configuration.",group:"Base",controlType:"object",controlOptions:{props:[{key:"type",help:"Scale type, supports linear, point and time scales.",type:"string",controlType:"choices",controlOptions:{disabled:!0,choices:["linear"].map((function(t){return{label:t,value:t}}))}},{key:"min",help:"Minimum scale value.",required:!1,type:"number | 'auto'",controlType:"switchableRange",controlOptions:{disabledValue:"auto",defaultValue:0,min:-2e3,max:2e3}},{key:"max",help:"Maximum scale value.",required:!1,type:"number | 'auto'",controlType:"switchableRange",controlOptions:{disabledValue:"auto",defaultValue:1200,min:-2e3,max:2e3}}]}},{key:"xFormat",group:"Base",type:"string | Function",help:"Optional formatter for x values.",description:"\n            The formatted value can then be used for labels & tooltips.\n\n            If you use a time scale, you must provide a time format\n            as values are converted to Date objects.\n\n            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),\n            please have a look at it for available formats, you can also pass a function\n            which will receive the raw value and should return the formatted one.\n        ",controlType:"valueFormat"},{key:"yScale",group:"Base",type:"object",help:"Y scale configuration.",controlType:"object",controlOptions:{props:[{key:"type",help:"Scale type, supports linear, point and time scales.",type:"string",controlType:"choices",controlOptions:{disabled:!0,choices:["linear"].map((function(t){return{label:t,value:t}}))}},{key:"min",help:"Minimum scale value.",required:!1,type:"number | 'auto'",controlType:"switchableRange",controlOptions:{disabledValue:"auto",defaultValue:0,min:-2e3,max:2e3}},{key:"max",help:"Maximum scale value.",required:!1,type:"number | 'auto'",controlType:"switchableRange",controlOptions:{disabledValue:"auto",defaultValue:1200,min:-2e3,max:2e3}}]}},{key:"yFormat",group:"Base",type:"string | Function",help:"Optional formatter for y values.",description:"\n            The formatted value can then be used for labels & tooltips.\n\n            If you use a time scale, you must provide a time format\n            as values are converted to Date objects.\n\n            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),\n            please have a look at it for available formats, you can also pass a function\n            which will receive the raw value and should return the formatted one.\n        ",controlType:"valueFormat"},{key:"nodeId",group:"Base",defaultValue:"(d) => `${d.serieId}.${d.index}`",type:"string | (datum) => string",help:"ID accessor for the node.",description:"\n            Define how to determine the id of each node on the plot. This value\n            will impact animation. Nodes will transition from a previous state\n            at the same index, thus, it can be  useful to specify this property\n            if we want to establish some continuity between nodes at different\n            index.\n\n            By default nivo will join together the serie.id and datum index.\n        "},{key:"nodeSize",group:"Base",defaultValue:i.Pq.nodeSize,type:"number | object | Function",help:"How to compute node size, static or dynamic.",description:"\n            If you provide a **number**, all nodes will have the same\n            **fixed size**.\n\n            You can also use an object to define a varying size,\n            it must conform to the following interface:\n\n            ```\n            {\n                key:    string\n                values: [min: number, max: number]\n                sizes:  [min: number, max: number]\n            }\n            ```\n\n            Then the size of each node will **depend on the value\n            of `key` and `sizes`**.\n\n            If you use a **custom function**, it will receive the current\n            node and must **return a number**.\n        ",controlType:"range",controlOptions:{unit:"px",min:2,max:24}},{key:"width",enableControlForFlavors:["api"],description:"\n            Not required if using\n            `Responsive*` component.\n            Also note that width exclude left/right axes,\n            please add margin to make sure they're visible.\n        ",help:"Chart width.",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],description:"\n            Not required if using\n            `Responsive*` component.\n            Also note that width exclude top/bottom axes,\n            please add margin to make sure they're visible.\n        ",help:"Chart height.",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",required:!1,defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},(0,r.JR)(["svg","canvas"]),{key:"colors",group:"Style",help:"Defines color range.",type:"string | Function | string[]",required:!1,defaultValue:i.Pq.colors,controlType:"ordinalColors"},{key:"blendMode",group:"Style",flavors:["svg"],help:"Defines CSS mix-blend-mode property.",description:"\n            Defines CSS `mix-blend-mode` property for nodes,\n            see\n            [MDN documentation](https://developer.mozilla.org/fr/docs/Web/CSS/mix-blend-mode).\n        ",type:"string",required:!1,defaultValue:i.Pq.blendMode,controlType:"blendMode"},{key:"layers",flavors:["svg","canvas"],group:"Customization",help:"Defines the order of layers.",description:"\n            Defines the order of layers, available layers are:\n            `grid`, `axes`, `points`, `markers`,\n            `mesh`, `legends`.\n\n            You can also use this to insert extra layers\n            to the chart.\n\n            For `ScatterPlot`, the extra layer should be a component\n            and will receive current chart context as props.\n\n            If using `ScatterPlotCanvas`, the extra layer should be\n            a function and will receive canvas context as first argument\n            and current chart context object as second.\n        ",required:!1,defaultValue:i.XB.layers},{key:"nodeComponent",flavors:["svg"],group:"Customization",help:"Override default node rendering for SVG implementation.",type:"FunctionComponent<ScatterPlotNodeProps<RawDatum>>",description:"\n            When you override the default node component, you should use\n            an `animated` element if you wish to preserve transitions,\n            for example:\n            \n            ```\n            import { animated } from '@react-spring/web'\n            \n            export const MyCustomNode = (props) => (\n                <animated.circle\n                    cx={props.style.x}\n                    cy={props.style.y}\n                    r={props.style.size.to(size => size / 2)}\n                    fill={style.color}\n                    style={{ mixBlendMode: props.blendMode }}\n                />\n            )\n            ```\n            \n            The `style` property contains `react-spring` values, suitable\n            for `animated.*` elements.\n            \n            You can have a look at the [default node implementation](https://github.com/plouc/nivo/blob/master/packages/scatterplot/src/Node.tsx)\n            to see how props are used by default.\n        ",required:!1},{key:"renderNode",flavors:["canvas"],group:"Customization",help:"Override default node rendering for canvas implementation.",type:"(ctx: CanvasRenderingContext2D, props: ScatterPlotLayerProps<RawDatum>) => void",description:"\n            This is how the default rendering is done:\n            \n            ```\n            const renderNode = (ctx, node) => {\n                ctx.beginPath()\n                ctx.arc(node.x, node.y, node.size / 2, 0, 2 * Math.PI)\n                ctx.fillStyle = node.color\n                ctx.fill()\n            }\n            ```\n        ",required:!1},{key:"enableGridX",help:"Enable/disable x grid.",type:"boolean",required:!1,defaultValue:i.Pq.enableGridX,controlType:"switch",group:"Grid & Axes"},{key:"gridXValues",group:"Grid & Axes",help:"Specify values to use for vertical grid lines.",type:"Array<number | string | Date>",required:!1},{key:"enableGridY",group:"Grid & Axes",help:"Enable/disable y grid.",type:"boolean",required:!1,defaultValue:i.Pq.enableGridY,controlType:"switch"},{key:"gridYValues",group:"Grid & Axes",help:"Specify values to use for horizontal grid lines.",type:"Array<number | string | Date>",required:!1}].concat((0,o.Z)((0,r.uh)()),[{key:"isInteractive",help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:i.Pq.isInteractive,controlType:"switch",group:"Interactivity"},{key:"useMesh",group:"Interactivity",flavors:["svg"],help:"Use a mesh to detect mouse interactions.",type:"boolean",required:!1,defaultValue:i.Pq.useMesh,controlType:"switch"},{key:"debugMesh",help:"Display mesh used to detect mouse interactions (voronoi cells).",type:"boolean",required:!1,defaultValue:i.Pq.debugMesh,controlType:"switch",group:"Interactivity"},{key:"tooltip",flavors:["svg"],group:"Interactivity",type:"Function",required:!1,help:"Custom tooltip component",description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML element and will\n            receive the node as a property.\n\n            You can also customize the tooltip style\n            using the `theme.tooltip` object.\n        "},{key:"onMouseEnter",group:"Interactivity",help:"onMouseEnter handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"onMouseMove",group:"Interactivity",help:"onMouseMove handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"onMouseLeave",group:"Interactivity",help:"onMouseLeave handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"onClick",group:"Interactivity",help:"onClick handler, it receives target node data and mouse event.",type:"(node, event) => void",required:!1},{key:"legends",group:"Legends",flavors:["svg","canvas"],type:"object[]",help:"Optional chart's legends.",controlType:"array",controlOptions:{props:(0,r.y0)(["svg","canvas"]),shouldCreate:!0,addLabel:"add legend",shouldRemove:!0,getItemTitle:function(t,e){return"legend["+t+"]: "+e.anchor+", "+e.direction},defaults:{anchor:"top-left",direction:"column",justify:!1,translateX:0,translateY:0,itemWidth:100,itemHeight:20,itemsSpacing:0,symbolSize:20,itemDirection:"left-to-right",onClick:function(t){alert(JSON.stringify(t,null,"    "))}}}},{key:"annotations",group:"Annotations",help:"Extra annotations.",type:"object[]",required:!1},{key:"markers",group:"Annotations",help:"Extra markers.",type:"object[]",flavors:["svg"],required:!1}],(0,o.Z)((0,r.$j)(["svg"],i.XB,"react-spring"))),u=(0,r.R2)(a)},62370:function(t,e,n){"use strict";n.d(e,{h8:function(){return u},h6:function(){return s},Ld:function(){return l}});var o=n(48159),i=n.n(o),r=n(76744),a=n.n(r),u=function(t,e){var n=(void 0===e?{}:e).exclude,o=void 0===n?[]:n;return function(e,n){void 0===n&&(n={});var r={};return Object.keys(e).forEach((function(o){t[o]&&(r[o]=t[o](e[o],e,n))})),Object.assign({},i()(e,o),r)}},s=function(t){return function(e,n){return n["axis"+a()(t)].enable?i()(e,["enable"]):null}},l=function(t){var e=t.format;return t.enabled?e:void 0}},54358:function(t,e,n){"use strict";n.d(e,{q6:function(){return A},dS:function(){return V},O2:function(){return O},zs:function(){return M}});var o=n(27378),i=n(48159),r=n.n(i),a=n(78581),u=n.n(a),s=n(69238),l=n.n(s),c=n(52770),d=n(58679),f=n(24246);function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function g(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function x(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}function v(t){return function(t){if(Array.isArray(t))return m(t)}(t)||g(t)||x(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=4,k=120,T=8,w=function(t){return"circle"===t.type},j=function(t){return"dot"===t.type},C=function(t){return"rect"===t.type},S=function(t){var e,n,o=t.x,i=t.y,r=t.noteX,a=t.noteY,s=t.noteWidth,l=void 0===s?k:s,d=t.noteTextOffset,f=void 0===d?T:d;if(u()(r))e=o+r;else{if(void 0===r.abs)throw new Error("noteX should be either a number or an object containing an 'abs' property");e=r.abs}if(u()(a))n=i+a;else{if(void 0===a.abs)throw new Error("noteY should be either a number or an object containing an 'abs' property");n=a.abs}var h=o,p=i,y=function(t,e,n,o){var i=Math.atan2(o-e,n-t);return(0,c.bt)((0,c.vi)(i))}(o,i,e,n);if(w(t)){var m=(0,c.re)((0,c.Ht)(y),t.size/2);h+=m.x,p+=m.y}if(C(t)){var g=Math.round((y+90)/45)%8;0===g&&(p-=t.height/2),1===g&&(h+=t.width/2,p-=t.height/2),2===g&&(h+=t.width/2),3===g&&(h+=t.width/2,p+=t.height/2),4===g&&(p+=t.height/2),5===g&&(h-=t.width/2,p+=t.height/2),6===g&&(h-=t.width/2),7===g&&(h-=t.width/2,p-=t.height/2)}var x=e,v=e;return(y+90)%360>180?(x-=l,v-=l):v+=l,{points:[[h,p],[e,n],[v,n]],text:[x,n-f],angle:y+90}},O=function(t){var e=t.data,n=t.annotations,i=t.getPosition,a=t.getDimensions;return(0,o.useMemo)((function(){return function(t){var e=t.data,n=t.annotations,o=t.getPosition,i=t.getDimensions;return n.reduce((function(t,n){var a=n.offset||0;return[].concat(v(t),v(l()(e,n.match).map((function(t){var e=o(t),u=i(t);return(w(n)||C(n))&&(u.size=u.size+2*a,u.width=u.width+2*a,u.height=u.height+2*a),y(y(y(y({},r()(n,["match","offset"])),e),u),{},{size:n.size||u.size,datum:t})}))))}),[])}({data:e,annotations:n,getPosition:i,getDimensions:a})}),[e,n,i,a])},M=function(t){var e=t.annotations;return(0,o.useMemo)((function(){return e.map((function(t){return y(y({},t),{},{computed:S(y({},t))})}))}),[e])},P=function(t){var e=t.datum,n=t.x,i=t.y,a=t.note,u=(0,c.Fg)(),s=(0,c.tf)(),l=s.animate,h=s.config,p=(0,d.useSpring)({x:n,y:i,config:h,immediate:!l});return"function"==typeof a?(0,o.createElement)(a,{x:n,y:i,datum:e}):(0,f.jsxs)(f.Fragment,{children:[u.annotations.text.outlineWidth>0&&(0,f.jsx)(d.q.text,{x:p.x,y:p.y,style:y(y({},u.annotations.text),{},{strokeLinejoin:"round",strokeWidth:2*u.annotations.text.outlineWidth,stroke:u.annotations.text.outlineColor}),children:a}),(0,f.jsx)(d.q.text,{x:p.x,y:p.y,style:r()(u.annotations.text,["outlineWidth","outlineColor"]),children:a})]})};function F(t){if(Array.isArray(t))return t}function D(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function W(t,e){return F(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,i=!1,r=void 0;try{for(var a,u=t[Symbol.iterator]();!(o=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(s){i=!0,r=s}finally{try{o||null==u.return||u.return()}finally{if(i)throw r}}return n}}(t,e)||x(t,e)||D()}var q=function(t){var e=t.points,n=t.isOutline,i=void 0!==n&&n,r=(0,c.Fg)(),a=(0,o.useMemo)((function(){var t,n=F(t=e)||g(t)||x(t)||D(),o=n[0];return n.slice(1).reduce((function(t,e){var n=W(e,2),o=n[0],i=n[1];return"".concat(t," L").concat(o,",").concat(i)}),"M".concat(o[0],",").concat(o[1]))}),[e]),u=(0,c.NS)(a);if(i&&r.annotations.link.outlineWidth<=0)return null;var s=y({},r.annotations.link);return i&&(s.strokeLinecap="square",s.strokeWidth=r.annotations.link.strokeWidth+2*r.annotations.link.outlineWidth,s.stroke=r.annotations.link.outlineColor),(0,f.jsx)(d.q.path,{fill:"none",d:u,style:s})},z=function(t){var e=t.x,n=t.y,o=t.size,i=(0,c.Fg)(),r=(0,c.tf)(),a=r.animate,u=r.config,s=(0,d.useSpring)({x:e,y:n,radius:o/2,config:u,immediate:!a});return(0,f.jsxs)(f.Fragment,{children:[i.annotations.outline.outlineWidth>0&&(0,f.jsx)(d.q.circle,{cx:s.x,cy:s.y,r:s.radius,style:y(y({},i.annotations.outline),{},{fill:"none",strokeWidth:i.annotations.outline.strokeWidth+2*i.annotations.outline.outlineWidth,stroke:i.annotations.outline.outlineColor})}),(0,f.jsx)(d.q.circle,{cx:s.x,cy:s.y,r:s.radius,style:i.annotations.outline})]})},Y=function(t){var e=t.x,n=t.y,o=t.size,i=void 0===o?b:o,r=(0,c.Fg)(),a=(0,c.tf)(),u=a.animate,s=a.config,l=(0,d.useSpring)({x:e,y:n,radius:i/2,config:s,immediate:!u});return(0,f.jsxs)(f.Fragment,{children:[r.annotations.outline.outlineWidth>0&&(0,f.jsx)(d.q.circle,{cx:l.x,cy:l.y,r:l.radius,style:y(y({},r.annotations.outline),{},{fill:"none",strokeWidth:2*r.annotations.outline.outlineWidth,stroke:r.annotations.outline.outlineColor})}),(0,f.jsx)(d.q.circle,{cx:l.x,cy:l.y,r:l.radius,style:r.annotations.symbol})]})},U=function(t){var e=t.x,n=t.y,o=t.width,i=t.height,r=(0,c.Fg)(),a=(0,c.tf)(),u=a.animate,s=a.config,l=(0,d.useSpring)({x:e-o/2,y:n-i/2,width:o,height:i,config:s,immediate:!u});return(0,f.jsxs)(f.Fragment,{children:[r.annotations.outline.outlineWidth>0&&(0,f.jsx)(d.q.rect,{x:l.x,y:l.y,width:l.width,height:l.height,style:y(y({},r.annotations.outline),{},{fill:"none",strokeWidth:r.annotations.outline.strokeWidth+2*r.annotations.outline.outlineWidth,stroke:r.annotations.outline.outlineColor})}),(0,f.jsx)(d.q.rect,{x:l.x,y:l.y,width:l.width,height:l.height,style:r.annotations.outline})]})},A=function(t){var e=t.datum,n=t.x,i=t.y,r=t.note,a=function(t){return(0,o.useMemo)((function(){return S(t)}),[t])}(t);if(!function(t){var e=typeof t;return(0,o.isValidElement)(t)||"string"===e||"function"===e||"object"===e}(r))throw new Error("note should be a valid react element");return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(q,{points:a.points,isOutline:!0}),w(t)&&(0,f.jsx)(z,{x:n,y:i,size:t.size}),j(t)&&(0,f.jsx)(Y,{x:n,y:i,size:t.size}),C(t)&&(0,f.jsx)(U,{x:n,y:i,width:t.width,height:t.height}),(0,f.jsx)(q,{points:a.points}),(0,f.jsx)(P,{datum:e,x:a.text[0],y:a.text[1],note:r})]})},I=function(t,e){e.forEach((function(e,n){var o=W(e,2),i=o[0],r=o[1];0===n?t.moveTo(i,r):t.lineTo(i,r)}))},V=function(t,e){var n=e.annotations,o=e.theme;0!==n.length&&(t.save(),n.forEach((function(e){if(n=e.note,"string"!==(i=typeof n)&&"function"!==i)throw new Error("note is invalid for canvas implementation");var n,i;o.annotations.link.outlineWidth>0&&(t.lineCap="square",t.strokeStyle=o.annotations.link.outlineColor,t.lineWidth=o.annotations.link.strokeWidth+2*o.annotations.link.outlineWidth,t.beginPath(),I(t,e.computed.points),t.stroke(),t.lineCap="butt"),w(e)&&o.annotations.outline.outlineWidth>0&&(t.strokeStyle=o.annotations.outline.outlineColor,t.lineWidth=o.annotations.outline.strokeWidth+2*o.annotations.outline.outlineWidth,t.beginPath(),t.arc(e.x,e.y,e.size/2,0,2*Math.PI),t.stroke()),j(e)&&o.annotations.symbol.outlineWidth>0&&(t.strokeStyle=o.annotations.symbol.outlineColor,t.lineWidth=2*o.annotations.symbol.outlineWidth,t.beginPath(),t.arc(e.x,e.y,e.size/2,0,2*Math.PI),t.stroke()),C(e)&&o.annotations.outline.outlineWidth>0&&(t.strokeStyle=o.annotations.outline.outlineColor,t.lineWidth=o.annotations.outline.strokeWidth+2*o.annotations.outline.outlineWidth,t.beginPath(),t.rect(e.x-e.width/2,e.y-e.height/2,e.width,e.height),t.stroke()),t.strokeStyle=o.annotations.link.stroke,t.lineWidth=o.annotations.link.strokeWidth,t.beginPath(),I(t,e.computed.points),t.stroke(),w(e)&&(t.strokeStyle=o.annotations.outline.stroke,t.lineWidth=o.annotations.outline.strokeWidth,t.beginPath(),t.arc(e.x,e.y,e.size/2,0,2*Math.PI),t.stroke()),j(e)&&(t.fillStyle=o.annotations.symbol.fill,t.beginPath(),t.arc(e.x,e.y,e.size/2,0,2*Math.PI),t.fill()),C(e)&&(t.strokeStyle=o.annotations.outline.stroke,t.lineWidth=o.annotations.outline.strokeWidth,t.beginPath(),t.rect(e.x-e.width/2,e.y-e.height/2,e.width,e.height),t.stroke()),"function"==typeof e.note?e.note(t,{datum:e.datum,x:e.computed.text[0],y:e.computed.text[1],theme:o}):(t.font="".concat(o.annotations.text.fontSize,"px ").concat(o.annotations.text.fontFamily),t.fillStyle=o.annotations.text.fill,t.strokeStyle=o.annotations.text.outlineColor,t.lineWidth=2*o.annotations.text.outlineWidth,o.annotations.text.outlineWidth>0&&(t.lineJoin="round",t.strokeText(e.note,e.computed.text[0],e.computed.text[1]),t.lineJoin="miter"),t.fillText(e.note,e.computed.text[0],e.computed.text[1]))})),t.restore())}},44365:function(t,e,n){"use strict";n.d(e,{dk:function(){return C},RD:function(){return k},rj:function(){return M},VT:function(){return w},DZ:function(){return F},RN:function(){return P},FA:function(){return D}});var o=n(27378),i=n(58679),r=n(52770),a=n(18693),u=n(82171),s=n(6914),l=n(24246),c=n(23615),d=n.n(c);function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y=function(t){var e,n=t.axis,o=t.scale,i=t.ticksPosition,a=t.tickValues,u=t.tickSize,l=t.tickPadding,c=t.tickRotation,d=t.engine,f=void 0===d?"svg":d,h=(0,s.xX)(o,a),y=r.a6[f],m="bandwidth"in o?(0,s.Gv)(o):o,g={lineX:0,lineY:0},x={textX:0,textY:0},v="object"==typeof document&&"rtl"===document.dir,b=y.align.center,k=y.baseline.center;return"x"===n?(e=function(t){var e;return{x:null!==(e=m(t))&&void 0!==e?e:0,y:0}},g.lineY=u*("after"===i?1:-1),x.textY=(u+l)*("after"===i?1:-1),k="after"===i?y.baseline.top:y.baseline.bottom,0===c?b=y.align.center:"after"===i&&c<0||"before"===i&&c>0?(b=y.align[v?"left":"right"],k=y.baseline.center):("after"===i&&c>0||"before"===i&&c<0)&&(b=y.align[v?"right":"left"],k=y.baseline.center)):(e=function(t){var e;return{x:0,y:null!==(e=m(t))&&void 0!==e?e:0}},g.lineX=u*("after"===i?1:-1),x.textX=(u+l)*("after"===i?1:-1),b="after"===i?y.align.left:y.align.right),{ticks:h.map((function(t){return p(p(p({key:"number"==typeof t||"string"==typeof t?t:"".concat(t),value:t},e(t)),g),x)})),textAlign:b,textBaseline:k}},m=function(t,e){if(void 0===t||"function"==typeof t)return t;if("time"===e.type){var n=(0,a.i$)(t);return function(t){return n(t instanceof Date?t:new Date(t))}}return(0,u.WU)(t)},g=function(t){var e,n=t.width,o=t.height,i=t.scale,r=t.axis,a=t.values,u=(e=a,Array.isArray(e)?a:void 0)||(0,s.xX)(i,a),l="bandwidth"in i?(0,s.Gv)(i):i;return"x"===r?u.map((function(t){var e,n;return{key:"".concat(t),x1:null!==(e=l(t))&&void 0!==e?e:0,x2:null!==(n=l(t))&&void 0!==n?n:0,y1:0,y2:o}})):u.map((function(t){var e,o;return{key:"".concat(t),x1:0,x2:n,y1:null!==(e=l(t))&&void 0!==e?e:0,y2:null!==(o=l(t))&&void 0!==o?o:0}}))},x=function(t){var e,n=t.value,a=t.format,u=t.lineX,s=t.lineY,c=t.onClick,d=t.textBaseline,f=t.textAnchor,h=t.animatedProps,y=(0,r.Fg)(),m=null!==(e=null==a?void 0:a(n))&&void 0!==e?e:n,g=(0,o.useMemo)((function(){var t={opacity:h.opacity};return c?{style:p(p({},t),{},{cursor:"pointer"}),onClick:function(t){return c(t,m)}}:{style:t}}),[h.opacity,c,m]);return(0,l.jsxs)(i.q.g,p(p({transform:h.transform},g),{},{children:[(0,l.jsx)("line",{x1:0,x2:u,y1:0,y2:s,style:y.axis.ticks.line}),(0,l.jsx)(i.q.text,{dominantBaseline:d,textAnchor:f,transform:h.textTransform,style:y.axis.ticks.text,children:m})]}))},v=(0,o.memo)(x),b=function(t){var e=t.axis,n=t.scale,a=t.x,u=void 0===a?0:a,s=t.y,c=void 0===s?0:s,d=t.length,f=t.ticksPosition,h=t.tickValues,g=t.tickSize,x=void 0===g?5:g,b=t.tickPadding,k=void 0===b?5:b,T=t.tickRotation,w=void 0===T?0:T,j=t.format,C=t.renderTick,S=void 0===C?v:C,O=t.legend,M=t.legendPosition,P=void 0===M?"end":M,F=t.legendOffset,D=void 0===F?0:F,W=t.onClick,q=t.ariaHidden,z=(0,r.Fg)(),Y=(0,o.useMemo)((function(){return m(j,n)}),[j,n]),U=y({axis:e,scale:n,ticksPosition:f,tickValues:h,tickSize:x,tickPadding:k,tickRotation:w}),A=U.ticks,I=U.textAlign,V=U.textBaseline,E=null;if(void 0!==O){var B,X=0,R=0,H=0;"y"===e?(H=-90,X=D,"start"===P?(B="start",R=d):"middle"===P?(B="middle",R=d/2):"end"===P&&(B="end")):(R=D,"start"===P?B="start":"middle"===P?(B="middle",X=d/2):"end"===P&&(B="end",X=d)),E=(0,l.jsx)("text",{transform:"translate(".concat(X,", ").concat(R,") rotate(").concat(H,")"),textAnchor:B,style:p({dominantBaseline:"central"},z.axis.legend.text),children:O})}var N=(0,r.tf)(),L=N.animate,G=N.config,Z=(0,i.useSpring)({transform:"translate(".concat(u,",").concat(c,")"),lineX2:"x"===e?d:0,lineY2:"x"===e?0:d,config:G,immediate:!L}),J=(0,i.useTransition)(A,{keys:function(t){return t.key},initial:function(t){return{opacity:1,transform:"translate(".concat(t.x,",").concat(t.y,")"),textTransform:"translate(".concat(t.textX,",").concat(t.textY,") rotate(").concat(w,")")}},from:function(t){return{opacity:0,transform:"translate(".concat(t.x,",").concat(t.y,")"),textTransform:"translate(".concat(t.textX,",").concat(t.textY,") rotate(").concat(w,")")}},enter:function(t){return{opacity:1,transform:"translate(".concat(t.x,",").concat(t.y,")"),textTransform:"translate(".concat(t.textX,",").concat(t.textY,") rotate(").concat(w,")")}},update:function(t){return{opacity:1,transform:"translate(".concat(t.x,",").concat(t.y,")"),textTransform:"translate(".concat(t.textX,",").concat(t.textY,") rotate(").concat(w,")")}},leave:{opacity:0},config:G,immediate:!L});return(0,l.jsxs)(i.q.g,{transform:Z.transform,"aria-hidden":q,children:[J((function(t,e,n,i){return(0,o.createElement)(S,p(p({tickIndex:i,format:Y,rotate:w,textBaseline:V,textAnchor:I,animatedProps:t},e),W?{onClick:W}:{}))})),(0,l.jsx)(i.q.line,{style:z.axis.domain.line,x1:0,x2:Z.lineX2,y1:0,y2:Z.lineY2}),E]})},k=(0,o.memo)(b),T={ticksPosition:d().oneOf(["before","after"]),tickValues:d().oneOfType([d().number,d().arrayOf(d().oneOfType([d().number,d().string,d().instanceOf(Date)])),d().string]),tickSize:d().number,tickPadding:d().number,tickRotation:d().number,format:d().oneOfType([d().func,d().string]),renderTick:d().func,legend:d().node,legendPosition:d().oneOf(["start","middle","end"]),legendOffset:d().number,ariaHidden:d().bool},w=d().shape(T),j=["top","right","bottom","left"],C=(0,o.memo)((function(t){var e=t.xScale,n=t.yScale,o=t.width,i=t.height,r={top:t.top,right:t.right,bottom:t.bottom,left:t.left};return(0,l.jsx)(l.Fragment,{children:j.map((function(t){var a=r[t];if(!a)return null;var u="top"===t||"bottom"===t,s="top"===t||"left"===t?"before":"after";return(0,l.jsx)(k,p(p({},a),{},{axis:u?"x":"y",x:"right"===t?o:0,y:"bottom"===t?i:0,scale:u?e:n,length:u?o:i,ticksPosition:s}),t)}))})})),S=(0,o.memo)((function(t){var e=t.animatedProps,n=(0,r.Fg)();return(0,l.jsx)(i.q.line,p(p({},e),n.grid.line))})),O=(0,o.memo)((function(t){var e=t.lines,n=(0,r.tf)(),a=n.animate,u=n.config,s=(0,i.useTransition)(e,{keys:function(t){return t.key},initial:function(t){return{opacity:1,x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2}},from:function(t){return{opacity:0,x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2}},enter:function(t){return{opacity:1,x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2}},update:function(t){return{opacity:1,x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2}},leave:{opacity:0},config:u,immediate:!a});return(0,l.jsx)("g",{children:s((function(t,e){return(0,o.createElement)(S,p(p({},e),{},{key:e.key,animatedProps:t}))}))})})),M=(0,o.memo)((function(t){var e=t.width,n=t.height,i=t.xScale,r=t.yScale,a=t.xValues,u=t.yValues,s=(0,o.useMemo)((function(){return!!i&&g({width:e,height:n,scale:i,axis:"x",values:a})}),[i,a,e,n]),c=(0,o.useMemo)((function(){return!!r&&g({width:e,height:n,scale:r,axis:"y",values:u})}),[n,e,r,u]);return(0,l.jsxs)(l.Fragment,{children:[s&&(0,l.jsx)(O,{lines:s}),c&&(0,l.jsx)(O,{lines:c})]})})),P=function(t,e){var n,o=e.axis,i=e.scale,a=e.x,u=void 0===a?0:a,s=e.y,l=void 0===s?0:s,c=e.length,d=e.ticksPosition,f=e.tickValues,h=e.tickSize,p=void 0===h?5:h,m=e.tickPadding,g=void 0===m?5:m,x=e.tickRotation,v=void 0===x?0:x,b=e.format,k=e.legend,T=e.legendPosition,w=void 0===T?"end":T,j=e.legendOffset,C=void 0===j?0:j,S=e.theme,O=y({axis:o,scale:i,ticksPosition:d,tickValues:f,tickSize:p,tickPadding:g,tickRotation:v,engine:"canvas"}),M=O.ticks,P=O.textAlign,F=O.textBaseline;t.save(),t.translate(u,l),t.textAlign=P,t.textBaseline=F,t.font="".concat(S.axis.ticks.text.fontWeight?"".concat(S.axis.ticks.text.fontWeight," "):"").concat(S.axis.ticks.text.fontSize,"px ").concat(S.axis.ticks.text.fontFamily),(null!==(n=S.axis.domain.line.strokeWidth)&&void 0!==n?n:0)>0&&(t.lineWidth=Number(S.axis.domain.line.strokeWidth),t.lineCap="square",S.axis.domain.line.stroke&&(t.strokeStyle=S.axis.domain.line.stroke),t.beginPath(),t.moveTo(0,0),t.lineTo("x"===o?c:0,"x"===o?0:c),t.stroke());var D="function"==typeof b?b:function(t){return"".concat(t)};if(M.forEach((function(e){var n;(null!==(n=S.axis.ticks.line.strokeWidth)&&void 0!==n?n:0)>0&&(t.lineWidth=Number(S.axis.ticks.line.strokeWidth),t.lineCap="square",S.axis.ticks.line.stroke&&(t.strokeStyle=S.axis.ticks.line.stroke),t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(e.x+e.lineX,e.y+e.lineY),t.stroke());var o=D(e.value);t.save(),t.translate(e.x+e.textX,e.y+e.textY),t.rotate((0,r.Ht)(v)),S.axis.ticks.text.fill&&(t.fillStyle=S.axis.ticks.text.fill),t.fillText(String(o),0,0),t.restore()})),void 0!==k){var W=0,q=0,z=0,Y="center";"y"===o?(z=-90,W=C,"start"===w?(Y="start",q=c):"middle"===w?(Y="center",q=c/2):"end"===w&&(Y="end")):(q=C,"start"===w?Y="start":"middle"===w?(Y="center",W=c/2):"end"===w&&(Y="end",W=c)),t.translate(W,q),t.rotate((0,r.Ht)(z)),t.font="".concat(S.axis.legend.text.fontWeight?"".concat(S.axis.legend.text.fontWeight," "):"").concat(S.axis.legend.text.fontSize,"px ").concat(S.axis.legend.text.fontFamily),S.axis.legend.text.fill&&(t.fillStyle=S.axis.legend.text.fill),t.textAlign=Y,t.textBaseline="middle",t.fillText(k,0,0)}t.restore()},F=function(t,e){var n=e.xScale,o=e.yScale,i=e.width,r=e.height,a=e.top,u=e.right,s=e.bottom,l=e.left,c=e.theme,d={top:a,right:u,bottom:s,left:l};j.forEach((function(e){var a=d[e];if(!a)return null;var u="top"===e||"bottom"===e,s="top"===e||"left"===e?"before":"after",l=u?n:o,f=m(a.format,l);P(t,p(p({},a),{},{axis:u?"x":"y",x:"right"===e?i:0,y:"bottom"===e?r:0,scale:l,format:f,length:u?i:r,ticksPosition:s,theme:c}))}))},D=function(t,e){var n=e.width,o=e.height,i=e.scale,r=e.axis,a=e.values;g({width:n,height:o,scale:i,axis:r,values:a}).forEach((function(e){t.beginPath(),t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2),t.stroke()}))}},67153:function(t,e,n){"use strict";n.d(e,{i:function(){return d},g:function(){return f}});var o=n(4215),i=n.n(o),r=n(91311),a=n.n(r),u=["group A","group B","group C","group D","group E"],s=[0,100],l=[0,120],c=function(t){return u.map((function(e){return{id:e,data:i()(t).map((function(t){return{x:a()(s[0],s[1]),y:a()(l[0],l[1])}}))}}))},d=function(){return c(50)},f=function(){return c(800)}},54418:function(t,e,n){"use strict";n(27378);var o=n(62370);e.Z=(0,o.h8)({xFormat:o.Ld,yFormat:o.Ld,axisTop:(0,o.h6)("top"),axisRight:(0,o.h6)("right"),axisBottom:(0,o.h6)("bottom"),axisLeft:(0,o.h6)("left")},{exclude:["enable axisTop","enable axisRight","enable axisBottom","enable axisLeft"]})},30550:function(t,e,n){"use strict";n.d(e,{rr:function(){return b},Nu:function(){return k},y2:function(){return M},WQ:function(){return x},JZ:function(){return r},U8:function(){return u},Z_:function(){return m},Ox:function(){return j},F0:function(){return W},K_:function(){return q},Lq:function(){return P},S1:function(){return p},Zy:function(){return w},Ig:function(){return O},YD:function(){return C},EF:function(){return S},NG:function(){return w},EN:function(){return F},jB:function(){return Y},QQ:function(){return G},lM:function(){return V},GK:function(){return u},rz:function(){return A},l6:function(){return R},me:function(){return $},g4:function(){return Z},OL:function(){return p},pI:function(){return X},hB:function(){return L},J1:function(){return H},b3:function(){return N},YF:function(){return X},ol:function(){return Q}});var o=new Date,i=new Date;function r(t,e,n,a){function u(e){return t(e=new Date(+e)),e}return u.floor=u,u.ceil=function(n){return t(n=new Date(n-1)),e(n,1),t(n),n},u.round=function(t){var e=u(t),n=u.ceil(t);return t-e<n-t?e:n},u.offset=function(t,n){return e(t=new Date(+t),null==n?1:Math.floor(n)),t},u.range=function(n,o,i){var r,a=[];if(n=u.ceil(n),i=null==i?1:Math.floor(i),!(n<o&&i>0))return a;do{a.push(r=new Date(+n)),e(n,i),t(n)}while(r<n&&n<o);return a},u.filter=function(n){return r((function(e){if(e>=e)for(;t(e),!n(e);)e.setTime(e-1)}),(function(t,o){if(t>=t)if(o<0)for(;++o<=0;)for(;e(t,-1),!n(t););else for(;--o>=0;)for(;e(t,1),!n(t););}))},n&&(u.count=function(e,r){return o.setTime(+e),i.setTime(+r),t(o),t(i),Math.floor(n(o,i))},u.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?u.filter(a?function(e){return a(e)%t==0}:function(e){return u.count(0,e)%t==0}):u:null}),u}var a=r((function(){}),(function(t,e){t.setTime(+t+e)}),(function(t,e){return e-t}));a.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?r((function(e){e.setTime(Math.floor(e/t)*t)}),(function(e,n){e.setTime(+e+n*t)}),(function(e,n){return(n-e)/t})):a:null};var u=a,s=(a.range,1e3),l=6e4,c=36e5,d=864e5,f=6048e5,h=r((function(t){t.setTime(t-t.getMilliseconds())}),(function(t,e){t.setTime(+t+e*s)}),(function(t,e){return(e-t)/s}),(function(t){return t.getUTCSeconds()})),p=h,y=(h.range,r((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*s)}),(function(t,e){t.setTime(+t+e*l)}),(function(t,e){return(e-t)/l}),(function(t){return t.getMinutes()}))),m=y,g=(y.range,r((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*s-t.getMinutes()*l)}),(function(t,e){t.setTime(+t+e*c)}),(function(t,e){return(e-t)/c}),(function(t){return t.getHours()}))),x=g,v=(g.range,r((function(t){t.setHours(0,0,0,0)}),(function(t,e){t.setDate(t.getDate()+e)}),(function(t,e){return(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*l)/d}),(function(t){return t.getDate()-1}))),b=v,k=v.range;function T(t){return r((function(e){e.setDate(e.getDate()-(e.getDay()+7-t)%7),e.setHours(0,0,0,0)}),(function(t,e){t.setDate(t.getDate()+7*e)}),(function(t,e){return(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*l)/f}))}var w=T(0),j=T(1),C=T(2),S=T(3),O=T(4),M=T(5),P=T(6),F=w.range,D=(j.range,C.range,S.range,O.range,M.range,P.range,r((function(t){t.setDate(1),t.setHours(0,0,0,0)}),(function(t,e){t.setMonth(t.getMonth()+e)}),(function(t,e){return e.getMonth()-t.getMonth()+12*(e.getFullYear()-t.getFullYear())}),(function(t){return t.getMonth()}))),W=D,q=D.range,z=r((function(t){t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,e){t.setFullYear(t.getFullYear()+e)}),(function(t,e){return e.getFullYear()-t.getFullYear()}),(function(t){return t.getFullYear()}));z.every=function(t){return isFinite(t=Math.floor(t))&&t>0?r((function(e){e.setFullYear(Math.floor(e.getFullYear()/t)*t),e.setMonth(0,1),e.setHours(0,0,0,0)}),(function(e,n){e.setFullYear(e.getFullYear()+n*t)})):null};var Y=z,U=(z.range,r((function(t){t.setUTCSeconds(0,0)}),(function(t,e){t.setTime(+t+e*l)}),(function(t,e){return(e-t)/l}),(function(t){return t.getUTCMinutes()}))),A=U,I=(U.range,r((function(t){t.setUTCMinutes(0,0,0)}),(function(t,e){t.setTime(+t+e*c)}),(function(t,e){return(e-t)/c}),(function(t){return t.getUTCHours()}))),V=I,E=(I.range,r((function(t){t.setUTCHours(0,0,0,0)}),(function(t,e){t.setUTCDate(t.getUTCDate()+e)}),(function(t,e){return(e-t)/d}),(function(t){return t.getUTCDate()-1})));E.range;function B(t){return r((function(e){e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+7-t)%7),e.setUTCHours(0,0,0,0)}),(function(t,e){t.setUTCDate(t.getUTCDate()+7*e)}),(function(t,e){return(e-t)/f}))}var X=B(0),R=B(1),H=B(2),N=B(3),L=B(4),G=B(5),Z=B(6),J=(X.range,R.range,H.range,N.range,L.range,G.range,Z.range,r((function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),(function(t,e){t.setUTCMonth(t.getUTCMonth()+e)}),(function(t,e){return e.getUTCMonth()-t.getUTCMonth()+12*(e.getUTCFullYear()-t.getUTCFullYear())}),(function(t){return t.getUTCMonth()}))),$=J,_=(J.range,r((function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,e){t.setUTCFullYear(t.getUTCFullYear()+e)}),(function(t,e){return e.getUTCFullYear()-t.getUTCFullYear()}),(function(t){return t.getUTCFullYear()})));_.every=function(t){return isFinite(t=Math.floor(t))&&t>0?r((function(e){e.setUTCFullYear(Math.floor(e.getUTCFullYear()/t)*t),e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)}),(function(e,n){e.setUTCFullYear(e.getUTCFullYear()+n*t)})):null};var Q=_;_.range},98129:function(t,e,n){var o=n(52033);t.exports=function(t,e){var n=[];return o(t,(function(t,o,i){e(t,o,i)&&n.push(t)})),n}},76418:function(t){var e=Math.floor,n=Math.random;t.exports=function(t,o){return t+e(n()*(o-t+1))}},69238:function(t,e,n){var o=n(10263),i=n(98129),r=n(89278),a=n(19785);t.exports=function(t,e){return(a(t)?o:i)(t,r(e,3))}},91311:function(t,e,n){var o=n(76418),i=n(57535),r=n(94919),a=parseFloat,u=Math.min,s=Math.random;t.exports=function(t,e,n){if(n&&"boolean"!=typeof n&&i(t,e,n)&&(e=n=void 0),void 0===n&&("boolean"==typeof e?(n=e,e=void 0):"boolean"==typeof t&&(n=t,t=void 0)),void 0===t&&void 0===e?(t=0,e=1):(t=r(t),void 0===e?(e=t,t=0):e=r(e)),t>e){var l=t;t=e,e=l}if(n||t%1||e%1){var c=s();return u(t+c*(e-t+a("1e-"+((c+"").length-1))),e)}return o(t,e)}}}]);
//# sourceMappingURL=be5e23c0be5a470b6ecd7884ba244422590d0b45-26cf532f693805c28818.js.map