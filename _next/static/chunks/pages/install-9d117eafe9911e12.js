(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[768],{9530:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/install",function(){return n(4147)}])},1641:function(e,t,n){"use strict";var r=n(5893),a=n(5152),o=(0,a.default)(Promise.all([n.e(929),n.e(969)]).then(n.bind(n,8969)),{loadableGenerated:{webpack:function(){return[8969]},modules:["../components/Layout.tsx -> ./Header"]}}),u=(0,a.default)(n.e(276).then(n.bind(n,4276)),{loadableGenerated:{webpack:function(){return[4276]},modules:["../components/Layout.tsx -> ./Navbar"]}});t.Z=function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{title:e.title,des:e.des,image:e.image}),(0,r.jsx)("header",{children:(0,r.jsx)(u,{})}),(0,r.jsx)("main",{children:e.children})]})}},638:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=o.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};u=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](u):u instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a({},r,e));var u,l;var s=r=a({},r,t);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return n(s);r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,i(n,r);delete r.ssr}return n(r)};u(n(7294));var o=u(n(4302));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i=(u=n(7294))&&u.__esModule?u:{default:u},l=n(7161),s=n(6319);var c=[],d=[],f=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,a;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this,t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var n=this._res,r=this._opts;if(n.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var a=this;this._delay=setTimeout((function(){a._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(e){t._update({}),t._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),a&&r(t,a),e}();function m(e){return function(e,t){var n=function(){if(!a){var t=new h(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=i.default.lazy(r.loader));var a=null;if(!f&&"function"===typeof r.webpack&&!r.suspense){var u=r.webpack();d.push((function(e){var t=!0,r=!1,a=void 0;try{for(var o,i=u[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var l=o.value;if(-1!==e.indexOf(l))return n()}}catch(s){r=!0,a=s}finally{try{t||null==i.return||i.return()}finally{if(r)throw a}}}))}var c=r.suspense?function(e,t){return i.default.createElement(r.lazy,o({},e,{ref:t}))}:function(e,t){n();var o=i.default.useContext(s.LoadableContext),u=l.useSubscription(a);return i.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),i.default.useMemo((function(){return u.loading||u.error?i.default.createElement(r.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:a.retry}):u.loaded?i.default.createElement(function(e){return e&&e.__esModule?e.default:e}(u.loaded),e):null}),[e,u])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",i.default.forwardRef(c)}(p,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}m.preloadAll=function(){return new Promise((function(e,t){y(c).then(e,t)}))},m.preloadReady=function(e){var t=void 0===e?[]:e;return new Promise((function(e){var n=function(){return f=!0,e()};y(d,t).then(n,n)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var b=m;t.default=b},4147:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(1641);t.default=function(){return(0,r.jsx)(a.Z,{title:"Browser extension turn to dark mode - Scura Mode",children:(0,r.jsx)("div",{className:"flex h-screen",children:(0,r.jsxs)("div",{className:"m-auto text-center",children:[(0,r.jsx)("h1",{className:"text-6xl text-blod",children:"Scura Mode"}),(0,r.jsx)("p",{className:"text-mute",children:"Browser extension (Chrome) that helps you quickly turn the screen (browser) to dark at night time."})]})})})}},5152:function(e,t,n){e.exports=n(638)}},function(e){e.O(0,[774,888,179],(function(){return t=9530,e(e.s=t);var t}));var t=e.O();_N_E=t}]);