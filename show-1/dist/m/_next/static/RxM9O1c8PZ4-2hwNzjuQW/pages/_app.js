(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},1:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r=u(n("q1tI")),o=u(n("Xuae")),a=n("lwAK"),i=n("FYa8"),c=n("/0+H");function u(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var l=f[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var s=o.props[l],d=r[l]||new Set;d.has(s)?a=!1:(d.add(s),r[l]=d)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var p=(0,o.default)();function m(e){var t=e.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:(0,c.isInAmpMode)(e)},t)}))})))}m.rewind=p.rewind;var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),c=n("a1gu"),u=n("Nsbk"),l=n("RIqP");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){i(l,c);var u=s(l);function l(e){var a;return r(this,l),a=u.call(this,e),d&&(t.add(o(a)),n(o(a))),a}return a(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component))}},hUgY:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),c=n("wx14"),u=(n("17x9"),n("H2TA")),l={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},s=function(e){return Object(c.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};var f=Object(u.a)((function(e){return{"@global":{html:l,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(c.a)({margin:0},s(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,r.createElement(r.Fragment,null,n)})),d=n("rePB"),p=n("edxh"),m=n("viY9"),h=n("OKji"),y=n("aXM8"),v=n("hfi/");var b=function(e){var t=e.children,n=e.theme,r=Object(y.a)(),a=o.a.useMemo((function(){var e=null===r?n:function(e,t){return"function"===typeof t?t(e):Object(c.a)(Object(c.a)({},e),t)}(r,n);return null!=e&&(e[v.a]=null!==r),e}),[n,r]);return o.a.createElement(h.a.Provider,{value:a},t)},g=o.a.createElement;function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=Object(m.a)({palette:{primary:{main:"#263BE0",light:p.a[50]},secondary:{main:"#D70D26"},common:{black:"#131313"}},spacing:8,overrides:{MuiPaper:{elevation1:{boxShadow:"0px 30px 81px rgba(33, 33, 33, 0.11)"},rounded:{borderRadius:"2px"}},MuiSnackbar:{anchorOriginTopRight:{"@media (min-width: 600px)":{top:"60px",left:"200px"}}},MuiButton:{root:{textTransform:"inherit",borderRadius:24}}}}),x={charts:{color:"#008AFF3D",series:{color:"#008AFF"},colors:{orange:{main:"#FFA200",light:"#FFB33A3D"},skyBlue:{main:"#23B4FF",light:"#23B4FF3D"},purple:{main:"#B134FF",light:"#B134FF3D"},blue:{main:"#4278FF",light:"#4278FF3D"},cyan:{main:"#00CDF0",light:"#3BFFE33D"}}},colors:{blue:"#0062FF",skyBlue:"#00D2FF",deepSkyBlue:"#009DBE",green:"#0CC73B",red:"#D70D26",orange:"#FFA200",deepOrange:"#C67E00",grey:"#BDBDBD",deepGrey:"#757575",purple:"#B134FF",cyan:"#00CDF0"}},O=function(e){var t=e.children;return g(b,{theme:F(F({},k),x)},g(f,null),t)},S=o.a.createElement,C=function(e){var t=e.children;return S(O,null,t)},E=n("XwMy"),D=o.a.createElement;function j(e){var t=e.Component,n=e.pageProps;return o.a.useEffect((function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement&&e.parentElement.removeChild(e)}),[]),D(o.a.Fragment,null,D(i.a,null,D("title",null,"KeyPool: Get Filecoin with Ease"),D("meta",{name:"keywords",content:"KeyPool,\u4e91\u7b97\u529b,filecoin,ipfs,filecoin\u6316\u77ff,\u533a\u5757\u94fe,\u4e91\u5b58\u50a8,\u4e91\u8ba1\u7b97,\u53bb\u4e2d\u5fc3\u5316,\u65b9\u5757\u4e91\u5b58\u50a8,\u8d44\u4ea7\u5b58\u7ba1"}),D("meta",{name:"description",content:"KeyPool\u662fKeystore\u65d7\u4e0b\u7684\u57fa\u4e8eFilecoin\u7f51\u7edc\u7684\u6280\u672f\u670d\u52a1\u5e73\u53f0,\u7531\u8d44\u6df1\u533a\u5757\u94fe\u7814\u53d1\u5de5\u7a0b\u5e08\uff0c\u8fb9\u7f18\u8ba1\u7b97\u53ca\u5206\u5e03\u5f0f\u5b58\u50a8\u4e13\u5bb6\u503e\u529b\u6253\u9020\uff0c\u521b\u59cb\u56e2\u961f\u6765\u81eaIntel,\u5206\u5e03\u5f0f\u8d44\u672c\uff0c\u5947\u864e360\u7b49\u4f01\u4e1a"}),D("link",{rel:"canonical",href:"https://www.faycz.com"}),D("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"}),D("link",{rel:"manifest",href:"".concat(E.a,"/manifest.json?v=1")}),D("link",{rel:"icon",type:"image/x-icon",href:"".concat(E.a,"/favicon.ico")}),D("link",{rel:"apple-touch-icon",href:"".concat(E.a,"/static/pwa.png")}),D("meta",{name:"viewport",content:"width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,minimal-ui"}),D("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),D("meta",{name:"full-screen",content:"yes"}),D("meta",{name:"x5-fullscreen",content:"true"}),D("meta",{content:"telephone=no",name:"format-detection"}),D("meta",{content:"email=no",name:"format-detection"}),D("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"})),D(C,null,D(f,null),D(t,n)))}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o}},[[1,0,1,3,2]]]);