(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8],{5448:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works/aivision",function(){return t(4182)}])},8646:function(e,r,t){"use strict";t.d(r,{Et:function(){return h},Pg:function(){return f}});var n=t(5893),i=t(1664),s=t.n(i),a=t(5675),o=t.n(a),l=t(3100),c=t(5931),d=t(9564),u=t(917);let h=e=>{let{children:r,id:t,title:i,thumbnail:a}=e;return(0,n.jsx)(l.xu,{w:"100%",textAlign:"center",children:(0,n.jsx)(s(),{href:"/works/".concat(t),children:(0,n.jsxs)(c.f,{cursor:"pointer",children:[(0,n.jsx)(o(),{src:a,alt:i,className:"grid-item-thumbnail",placeholder:"blur"}),(0,n.jsx)(c.A,{href:"/works/".concat(t),children:(0,n.jsx)(d.x,{mt:2,fontSize:20,children:i})}),(0,n.jsx)(d.x,{fontSize:14,children:r})]})})})},f=()=>(0,n.jsx)(u.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})},6556:function(e,r,t){"use strict";var n=t(5893),i=t(8419),s=t(9008),a=t.n(s),o=t(8646);let l={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};r.Z=e=>{let{children:r,title:t}=e;return(0,n.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:l,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)(a(),{children:(0,n.jsxs)("title",{children:[t," - Dylan"]})}),r,(0,n.jsx)(o.Pg,{})]})})}},1565:function(e,r,t){"use strict";var n=t(2729),i=t(166);function s(){let e=(0,n._)(["\n    text-align: justify;\n"]);return s=function(){return e},e}let a=i.Z.p(s());r.Z=a},3340:function(e,r,t){"use strict";t.d(r,{h_:function(){return b},Dx:function(){return y},WZ:function(){return g}});var n=t(5893),i=t(1664),s=t.n(i),a=t(3100),o=t(3838),l=t(4418),c=t(5059),d=(0,c.G)(function(e,r){let{htmlWidth:t,htmlHeight:i,alt:s,...a}=e;return(0,n.jsx)("img",{width:t,height:i,ref:r,alt:s,...a})});d.displayName="NativeImage";var u=t(6245),h=t(7294),f=(e,r)=>"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r,p=t(4232),x=(0,c.G)(function(e,r){let{fallbackSrc:t,fallback:i,src:s,srcSet:a,align:o,fit:l,loading:c,ignoreFallback:x,crossOrigin:m,fallbackStrategy:j="beforeLoadOrError",referrerPolicy:y,...g}=e,b=null!=c||x||!(void 0!==t||void 0!==i),v=function(e){let{loading:r,src:t,srcSet:n,onLoad:i,onError:s,crossOrigin:a,sizes:o,ignoreFallback:l}=e,[c,d]=(0,h.useState)("pending");(0,h.useEffect)(()=>{d(t?"loading":"pending")},[t]);let f=(0,h.useRef)(),p=(0,h.useCallback)(()=>{if(!t)return;x();let e=new Image;e.src=t,a&&(e.crossOrigin=a),n&&(e.srcset=n),o&&(e.sizes=o),r&&(e.loading=r),e.onload=e=>{x(),d("loaded"),null==i||i(e)},e.onerror=e=>{x(),d("failed"),null==s||s(e)},f.current=e},[t,a,n,o,i,s,r]),x=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,u.G)(()=>{if(!l)return"loading"===c&&p(),()=>{x()}},[c,p,l]),l?"loaded":c}({...e,crossOrigin:m,ignoreFallback:b}),_=f(v,j),w={ref:r,objectFit:l,objectPosition:o,...b?g:function(e,r=[]){let t=Object.assign({},e);for(let e of r)e in t&&delete t[e];return t}(g,["onError","onLoad"])};return _?i||(0,n.jsx)(p.m.img,{as:d,className:"chakra-image__placeholder",src:t,...w}):(0,n.jsx)(p.m.img,{as:d,src:s,srcSet:a,crossOrigin:m,loading:c,referrerPolicy:y,className:"chakra-image",...w})});x.displayName="Image";var m=t(1689),j=t(6864);let y=e=>{let{children:r}=e;return(0,n.jsxs)(a.xu,{children:[(0,n.jsx)(s(),{href:"/works",children:(0,n.jsx)(o.r,{children:"Works"})}),(0,n.jsxs)("span",{children:[" ",(0,n.jsx)(j.X,{})," "]}),(0,n.jsx)(l.X,{display:"inline-block",as:"h3",fontSize:20,mb:4,children:r})]})},g=e=>{let{src:r,alt:t}=e;return(0,n.jsx)(x,{borderRadius:"lg",w:"full",src:r,alt:t,mb:4})},b=e=>{let{children:r}=e;return(0,n.jsx)(m.C,{colorScheme:"green",mr:2,children:r})}},4182:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return x}});var n=t(5893),i=t(6979),s=t(1689),a=t(5197),o=t(3838),l=t(5555),c=t(3340),d=t(1565),u=t(6556);t(7294);var h=t(5697),f=t.n(h);let p=e=>{let{embedId:r}=e;return(0,n.jsx)("div",{className:"video-responsive",children:(0,n.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(r),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})};p.propTypes={embedId:f().string.isRequired};var x=()=>(0,n.jsx)(u.Z,{children:(0,n.jsxs)(i.W,{children:[(0,n.jsxs)(c.Dx,{children:["AI Vision - University of Huddersfield ",(0,n.jsx)(s.C,{children:"2020"})]}),(0,n.jsx)(c.WZ,{src:"/images/works/uoh-eyecatcher.png",alt:"University of Huddersfield"}),(0,n.jsxs)(d.Z,{children:["Part of my studies at the University of Huddersfield, this assignment was a self-guided module in which I chose to research and develop a software artefact for a lane keeping/predictive steering algorithm for motor vehicles",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"This was alongside a research paper detailing the actual process in which I came up with the software, as well as the development and challenges that I faced. It can be available on request"]}),(0,n.jsx)("br",{}),(0,n.jsxs)(a.aV,{children:[(0,n.jsxs)(a.HC,{children:[(0,n.jsx)(c.h_,{children:"Link"}),(0,n.jsx)(o.r,{href:"https://github.com/Aimireal/1920-SelfDrivingCar/",children:"https://github.com/Aimireal/1920-SelfDrivingCar/"})," ",(0,n.jsx)(l.h,{})]}),(0,n.jsxs)(a.HC,{children:[(0,n.jsx)(c.h_,{children:"Platform"}),(0,n.jsx)(o.r,{children:"Desktop"})]}),(0,n.jsxs)(a.HC,{children:[(0,n.jsx)(c.h_,{children:"Stack"}),(0,n.jsx)(o.r,{children:"Python | OpenCV"})]})]}),(0,n.jsx)("br",{}),(0,n.jsx)(p,{embedId:"b14ZnIqA5RI"}),(0,n.jsx)("br",{}),(0,n.jsx)(p,{embedId:"iehJxeO2o8c"}),(0,n.jsx)("br",{}),(0,n.jsx)(p,{embedId:"bNm_ECyLIbI"}),(0,n.jsx)("br",{})]})})},2703:function(e,r,t){"use strict";var n=t(414);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,r,t,i,s,a){if(a!==n){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:s,resetWarningCache:i};return t.PropTypes=t,t}},5697:function(e,r,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5555:function(e,r,t){"use strict";t.d(r,{h:function(){return s}});var n=t(78),i=t(5893),s=(0,n.I)({displayName:"ExternalLinkIcon",path:(0,i.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,i.jsx)("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),(0,i.jsx)("path",{d:"M15 3h6v6"}),(0,i.jsx)("path",{d:"M10 14L21 3"})]})})},6864:function(e,r,t){"use strict";t.d(r,{X:function(){return n}});var n=(0,t(78).I)({d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",displayName:"ChevronRightIcon"})},1689:function(e,r,t){"use strict";t.d(r,{C:function(){return c}});var n=t(5059),i=t(1639),s=t(3179),a=t(4232),o=t(5432),l=t(5893),c=(0,n.G)(function(e,r){let t=(0,i.mq)("Badge",e),{className:n,...c}=(0,s.Lr)(e);return(0,l.jsx)(a.m.span,{ref:r,className:(0,o.cx)("chakra-badge",e.className),...c,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...t}})});c.displayName="Badge"},5197:function(e,r,t){"use strict";t.d(r,{HC:function(){return p},aV:function(){return f}});var n=t(6877),i=t(5227),s=t(2495),a=t(5059),o=t(1639),l=t(3179),c=t(4232),d=t(5893),[u,h]=(0,i.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),f=(0,a.G)(function(e,r){let t=(0,o.jC)("List",e),{children:n,styleType:i="none",stylePosition:a,spacing:h,...f}=(0,l.Lr)(e),p=(0,s.W)(n);return(0,d.jsx)(u,{value:t,children:(0,d.jsx)(c.m.ul,{ref:r,listStyleType:i,listStylePosition:a,role:"list",__css:{...t.container,...h?{"& > *:not(style) ~ *:not(style)":{mt:h}}:{}},...f,children:p})})});f.displayName="List",(0,a.G)((e,r)=>{let{as:t,...n}=e;return(0,d.jsx)(f,{ref:r,as:"ol",styleType:"decimal",marginStart:"1em",...n})}).displayName="OrderedList",(0,a.G)(function(e,r){let{as:t,...n}=e;return(0,d.jsx)(f,{ref:r,as:"ul",styleType:"initial",marginStart:"1em",...n})}).displayName="UnorderedList";var p=(0,a.G)(function(e,r){let t=h();return(0,d.jsx)(c.m.li,{ref:r,...e,__css:t.item})});p.displayName="ListItem",(0,a.G)(function(e,r){let t=h();return(0,d.jsx)(n.J,{ref:r,role:"presentation",...e,__css:t.icon})}).displayName="ListIcon"}},function(e){e.O(0,[864,774,888,179],function(){return e(e.s=5448)}),_N_E=e.O()}]);