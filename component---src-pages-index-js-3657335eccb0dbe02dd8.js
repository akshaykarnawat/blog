(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{189:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return u}),n(106);var r=n(0),o=n.n(r),a=n(195),i=n(223);e.default=function(t){var e=t.data;return o.a.createElement("div",null,o.a.createElement(i.a,null,o.a.createElement("br",null),e.allMarkdownRemark.edges.map(function(t){var e=t.node;return o.a.createElement("div",{key:e.id},o.a.createElement(a.Link,{to:e.fields.slug,style:{textDecoration:"none",color:"black"}},o.a.createElement("h3",null,e.frontmatter.title," ",o.a.createElement("span",null,"— ",e.frontmatter.date)),o.a.createElement("p",null,e.excerpt)))})))};var u="2068765159"},191:function(t,e,n){"use strict";var r=n(29);e.__esModule=!0,e.withPrefix=d,e.navigateTo=e.replace=e.push=e.navigate=e.default=void 0;var o=r(n(201)),a=r(n(217)),i=r(n(12)),u=r(n(61)),c=r(n(62)),s=r(n(8)),f=r(n(0)),l=n(26),p=n(195);function d(t){return function(t){return t.replace(/\/+/g,"/")}("/"+t)}var h={activeClassName:s.default.string,activeStyle:s.default.object},v=function(t){function e(e){var n;n=t.call(this)||this,(0,c.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(t){return t.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,a.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0);var o=e.location;return n.state={IOSupported:r,location:o},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(e,t);var n=e.prototype;return n.componentDidUpdate=function(t,e){this.props.to===t.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(t){var e,n,r,o=this;this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(e=t,n=function(){___loader.enqueue((0,p.parsePath)(o.props.to).pathname)},(r=new window.IntersectionObserver(function(t){t.forEach(function(t){e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(r.unobserve(e),r.disconnect(),n())})})).observe(e))},n.render=function(){var t=this,e=this.props,n=e.to,r=e.getProps,i=void 0===r?this.defaultGetProps:r,u=e.onClick,c=e.onMouseEnter,s=e.location,h=(e.activeClassName,e.activeStyle,e.ref,e.innerRef,e.state),v=(0,o.default)(e,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state"]),y=d(n);return f.default.createElement(l.Link,(0,a.default)({to:y,state:h,getProps:i,innerRef:this.handleRef,onMouseEnter:function(t){c&&c(t),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(e){if(u&&u(e),!(0!==e.button||t.props.target||e.defaultPrevented||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)){e.preventDefault();var n=(0,p.parsePath)(y),r=n.pathname,o=n.hash;if(r===s.pathname||!r){var a=o?document.getElementById(o.substr(1)):null;null!==a?a.scrollIntoView():window.scrollTo(0,0)}b(y,{state:h})}return!0}},v))},e}(f.default.Component);v.propTypes=(0,a.default)({},h,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired});var y,m=(y=v,function(t){return f.default.createElement(l.Location,null,function(e){var n=e.location;return f.default.createElement(y,(0,a.default)({location:n},t))})});e.default=m;var b=function(t,e){window.___navigate(t,e)};e.navigate=b;var g=function(t){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(t)};e.push=g,e.replace=function(t){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(t)},e.navigateTo=function(t){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),g(t)}},192:function(t,e){e.f={}.propertyIsEnumerable},193:function(t,e,n){var r=n(98)("wks"),o=n(94),a=n(28).Symbol,i="function"==typeof a;(t.exports=function(t){return r[t]||(r[t]=i&&a[t]||(i?a:o)("Symbol."+t))}).store=r},194:function(t,e){e.f=Object.getOwnPropertySymbols},195:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return h}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return d});var r=n(0),o=n.n(r),a=n(8),i=n.n(a),u=n(191),c=n.n(u);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var s=n(199),f=n.n(s);n.d(e,"PageRenderer",function(){return f.a});var l=n(37);n.d(e,"parsePath",function(){return l.a});var p=o.a.createContext({}),d=function(t){return o.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},196:function(t,e,n){e.f=n(193)},197:function(t,e,n){var r=n(102),o=n(60).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},198:function(t,e,n){var r=n(105);t.exports=function(t){return Object(r(t))}},199:function(t,e,n){var r;t.exports=(r=n(222))&&r.default||r},200:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(195),i=n(224),u=n.n(i);e.a=function(){return o.a.createElement(a.Link,{to:"/",className:u.a.header},o.a.createElement("h1",null,"akshay karnawat | blog"))}},201:function(t,e,n){var r=n(202),o=n(213);t.exports=function(t,e){if(null==t)return{};var n,a,i={},u=o(t);for(a=0;a<u.length;a++)n=u[a],e.indexOf(n)>=0||(i[n]=t[n]);if(r){var c=r(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},202:function(t,e,n){t.exports=n(203)},203:function(t,e,n){n(204),t.exports=n(17).Object.getOwnPropertySymbols},204:function(t,e,n){"use strict";var r=n(28),o=n(57),a=n(18),i=n(58),u=n(205),c=n(206).KEY,s=n(56),f=n(98),l=n(207),p=n(94),d=n(193),h=n(196),v=n(208),y=n(209),m=n(210),b=n(38),g=n(36),w=n(59),O=n(96),S=n(97),E=n(101),x=n(211),P=n(212),j=n(35),k=n(93),_=P.f,R=j.f,N=x.f,q=r.Symbol,T=r.JSON,C=T&&T.stringify,I=d("_hidden"),F=d("toPrimitive"),G={}.propertyIsEnumerable,M=f("symbol-registry"),D=f("symbols"),K=f("op-symbols"),J=Object.prototype,L="function"==typeof q,A=r.QObject,Q=!A||!A.prototype||!A.prototype.findChild,U=a&&s(function(){return 7!=E(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=_(J,e);r&&delete J[e],R(t,e,n),r&&t!==J&&R(J,e,r)}:R,W=function(t){var e=D[t]=E(q.prototype);return e._k=t,e},B=L&&"symbol"==typeof q.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof q},V=function(t,e,n){return t===J&&V(K,e,n),b(t),e=O(e,!0),b(n),o(D,e)?(n.enumerable?(o(t,I)&&t[I][e]&&(t[I][e]=!1),n=E(n,{enumerable:S(0,!1)})):(o(t,I)||R(t,I,S(1,{})),t[I][e]=!0),U(t,e,n)):R(t,e,n)},Y=function(t,e){b(t);for(var n,r=y(e=w(e)),o=0,a=r.length;a>o;)V(t,n=r[o++],e[n]);return t},z=function(t){var e=G.call(this,t=O(t,!0));return!(this===J&&o(D,t)&&!o(K,t))&&(!(e||!o(this,t)||!o(D,t)||o(this,I)&&this[I][t])||e)},H=function(t,e){if(t=w(t),e=O(e,!0),t!==J||!o(D,e)||o(K,e)){var n=_(t,e);return!n||!o(D,e)||o(t,I)&&t[I][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=N(w(t)),r=[],a=0;n.length>a;)o(D,e=n[a++])||e==I||e==c||r.push(e);return r},Z=function(t){for(var e,n=t===J,r=N(n?K:w(t)),a=[],i=0;r.length>i;)!o(D,e=r[i++])||n&&!o(J,e)||a.push(D[e]);return a};L||(u((q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===J&&e.call(K,n),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),U(this,t,S(1,n))};return a&&Q&&U(J,t,{configurable:!0,set:e}),W(t)}).prototype,"toString",function(){return this._k}),P.f=H,j.f=V,n(197).f=x.f=X,n(192).f=z,n(194).f=Z,a&&!n(99)&&u(J,"propertyIsEnumerable",z,!0),h.f=function(t){return W(d(t))}),i(i.G+i.W+i.F*!L,{Symbol:q});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)d($[tt++]);for(var et=k(d.store),nt=0;et.length>nt;)v(et[nt++]);i(i.S+i.F*!L,"Symbol",{for:function(t){return o(M,t+="")?M[t]:M[t]=q(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in M)if(M[e]===t)return e},useSetter:function(){Q=!0},useSimple:function(){Q=!1}}),i(i.S+i.F*!L,"Object",{create:function(t,e){return void 0===e?E(t):Y(E(t),e)},defineProperty:V,defineProperties:Y,getOwnPropertyDescriptor:H,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),T&&i(i.S+i.F*(!L||s(function(){var t=q();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!B(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!B(e))return e}),r[1]=e,C.apply(T,r)}}),q.prototype[F]||n(95)(q.prototype,F,q.prototype.valueOf),l(q,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},205:function(t,e,n){t.exports=n(95)},206:function(t,e,n){var r=n(94)("meta"),o=n(36),a=n(57),i=n(35).f,u=0,c=Object.isExtensible||function(){return!0},s=!n(56)(function(){return c(Object.preventExtensions({}))}),f=function(t){i(t,r,{value:{i:"O"+ ++u,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,r)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[r].i},getWeak:function(t,e){if(!a(t,r)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[r].w},onFreeze:function(t){return s&&l.NEED&&c(t)&&!a(t,r)&&f(t),t}}},207:function(t,e,n){var r=n(35).f,o=n(57),a=n(193)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,a)&&r(t,a,{configurable:!0,value:e})}},208:function(t,e,n){var r=n(28),o=n(17),a=n(99),i=n(196),u=n(35).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=a?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:i.f(t)})}},209:function(t,e,n){var r=n(93),o=n(194),a=n(192);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var i,u=n(t),c=a.f,s=0;u.length>s;)c.call(t,i=u[s++])&&e.push(i);return e}},210:function(t,e,n){var r=n(104);t.exports=Array.isArray||function(t){return"Array"==r(t)}},211:function(t,e,n){var r=n(59),o=n(197).f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return i&&"[object Window]"==a.call(t)?function(t){try{return o(t)}catch(t){return i.slice()}}(t):o(r(t))}},212:function(t,e,n){var r=n(192),o=n(97),a=n(59),i=n(96),u=n(57),c=n(100),s=Object.getOwnPropertyDescriptor;e.f=n(18)?s:function(t,e){if(t=a(t),e=i(e,!0),c)try{return s(t,e)}catch(t){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},213:function(t,e,n){t.exports=n(214)},214:function(t,e,n){n(215),t.exports=n(17).Object.keys},215:function(t,e,n){var r=n(198),o=n(93);n(216)("keys",function(){return function(t){return o(r(t))}})},216:function(t,e,n){var r=n(58),o=n(17),a=n(56);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*a(function(){n(1)}),"Object",i)}},217:function(t,e,n){var r=n(218);function o(){return t.exports=o=r||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}t.exports=o},218:function(t,e,n){t.exports=n(219)},219:function(t,e,n){n(220),t.exports=n(17).Object.assign},220:function(t,e,n){var r=n(58);r(r.S+r.F,"Object",{assign:n(221)})},221:function(t,e,n){"use strict";var r=n(93),o=n(194),a=n(192),i=n(198),u=n(103),c=Object.assign;t.exports=!c||n(56)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=i(t),c=arguments.length,s=1,f=o.f,l=a.f;c>s;)for(var p,d=u(arguments[s++]),h=f?r(d).concat(f(d)):r(d),v=h.length,y=0;v>y;)l.call(d,p=h[y++])&&(n[p]=d[p]);return n}:c},222:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(8),i=n.n(a),u=n(39),c=n(1),s=function(t){var e=t.location,n=c.a.getResourcesForPathname(e.pathname);return o.a.createElement(u.a,{location:e,pageResources:n})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},223:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(200),i=n(226),u=n.n(i);e.a=function(t){var e=t.children;return o.a.createElement("div",{className:u.a.container},o.a.createElement(a.a,null),e)}},224:function(t,e,n){t.exports={header:"header-module--header--MVsbu"}},226:function(t,e,n){t.exports={container:"container-module--container--38ti0"}}}]);
//# sourceMappingURL=component---src-pages-index-js-3657335eccb0dbe02dd8.js.map