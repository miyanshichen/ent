(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4af5dffe"],{"1da1":function(t,e,r){"use strict";function n(t,e,r,n,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function c(t){n(a,i,o,c,s,"next",t)}function s(t){n(a,i,o,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return i}))},"7abe":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("public-header"),n("el-row",[n("el-col",[n("el-carousel",t._l(t.newsList,(function(t,e){return n("el-carousel-item",{key:e},[n("router-link",{attrs:{to:"/news/details?id="+t.id}},[n("el-image",{attrs:{fit:"cover",src:t.index_pic?t.index_pic:r("af01")}})],1)],1)})),1)],1)],1),n("div",{staticClass:"container"},[n("div",{staticClass:"asset white-bg mc-mtb-20"},[n("el-row",{staticClass:"mc-flex mc-flex-wrap",attrs:{gutter:20}},[n("el-col",{staticClass:"mc-mb-20",attrs:{xs:24,span:12}},[n("el-card",[n("div",{staticClass:"mc-flex mc-flex-justify-between"},[n("div",[n("div",[t._v("USDT")]),n("div",{staticClass:"mc-size24"},[t._v(t._s(t.USDTassets.over_num))])]),n("div",{staticClass:"mc-flex mc-flex-direction-column"},[n("el-button",{staticClass:"mc-ml-10 mc-mb-5",attrs:{type:"primary",size:"mini"}},[t._v("充币")]),n("el-button",{attrs:{type:"warning",size:"mini"}},[t._v("提币")])],1)])])],1),n("el-col",{staticClass:"mc-mb-20",attrs:{xs:24,span:12}},[n("el-card",{staticClass:"mc-h-100"},[n("div",[t._v("ENT")]),n("div",{staticClass:"mc-size24"},[t._v(t._s(t.ENTassets.over_num))])])],1)],1)],1)]),n("div",{staticClass:"container video mc-w-100"},[n("video",{staticClass:"mc-w-100 mc-h-100",attrs:{controls:""}},[n("source",{attrs:{src:r("b3f9"),type:"video/mp4"}}),n("source",{attrs:{src:r("b3f9"),type:"video/ogg"}}),t._v("您的浏览器不支持该功能。\n    ")])])],1)},i=[],o=(r("7f7f"),r("ac6a"),r("96cf"),r("1da1")),a={data:function(){return{newsList:[],USDTassets:{},ENTassets:{}}},components:{},computed:{},mounted:function(){this.getNews(),this.getCoin()},methods:{getNews:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get(this.$https.api+"/news?page=1&page_size=5").then((function(t){1===t.status?e.newsList=t.data:e.newsList=[]}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getCoin:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(this.$https.api),t.next=3,this.$axios.get(this.$https.api+"/wallet?type=1").then((function(t){1===t.status?t.data.forEach((function(t){"USDT"===t.name?e.USDTassets=t:"ENT"===t.name&&(e.ENTassets=t)})):(e.USDTassets="",e.ENTassets="")}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},c=a,s=(r("f581"),r("2877")),u=Object(s["a"])(c,n,i,!1,null,"3516763a",null);e["default"]=u.exports},"7f7f":function(t,e,r){var n=r("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,a="name";a in i||r("9e1e")&&n(i,a,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"87c6":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(G){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),a=new C(n||[]);return o._invoke=T(t,r,a),o}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=u;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function m(){}function y(){}function g(){}var w={};w[o]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(O([])));b&&b!==r&&n.call(b,o)&&(w=b);var L=g.prototype=m.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(i,o,a,c){var s=f(t[i],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;function o(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function T(t,e,r){var n=l;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===i)throw o;return S()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var c=N(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=f(t,e,r);if("normal"===s.type){if(n=r.done?v:h,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}function N(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=f(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return y.prototype=L.constructor=g,g.constructor=y,y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},_(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new E(u(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(L),s(L,c,"Generator"),L[o]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},af01:function(t,e,r){t.exports=r.p+"img/login-bg.6066298c.png"},b3f9:function(t,e,r){t.exports=r.p+"media/movie.3cf571d4.mp4"},f581:function(t,e,r){"use strict";r("87c6")}}]);
//# sourceMappingURL=chunk-4af5dffe.dca393d4.js.map