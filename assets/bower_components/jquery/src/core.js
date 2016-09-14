define(["./var/arr","./var/document","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/support"],function(t,e,n,i,r,o,s,a,l,u){function c(t){var e=!!t&&"length"in t&&t.length,n=f.type(t);return"function"===n||f.isWindow(t)?!1:"array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t}var d="@VERSION",f=function(t,e){return new f.fn.init(t,e)},h=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,g=/-([\da-z])/gi,m=function(t,e){return e.toUpperCase()};return f.fn=f.prototype={jquery:d,constructor:f,selector:"",length:0,toArray:function(){return n.call(this)},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:n.call(this)},pushStack:function(t){var e=f.merge(this.constructor(),t);return e.prevObject=this,e.context=this.context,e},each:function(t){return f.each(this,t)},map:function(t){return this.pushStack(f.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(n.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0);return this.pushStack(n>=0&&e>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:r,sort:t.sort,splice:t.splice},f.extend=f.fn.extend=function(){var t,e,n,i,r,o,s=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||f.isFunction(s)||(s={}),a===l&&(s=this,a--);l>a;a++)if(null!=(t=arguments[a]))for(e in t)n=s[e],i=t[e],s!==i&&(u&&i&&(f.isPlainObject(i)||(r=f.isArray(i)))?(r?(r=!1,o=n&&f.isArray(n)?n:[]):o=n&&f.isPlainObject(n)?n:{},s[e]=f.extend(u,o,i)):void 0!==i&&(s[e]=i));return s},f.extend({expando:"jQuery"+(d+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===f.type(t)},isArray:Array.isArray,isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){var e=t&&t.toString();return!f.isArray(t)&&e-parseFloat(e)+1>=0},isPlainObject:function(t){var e;if("object"!==f.type(t)||t.nodeType||f.isWindow(t))return!1;if(t.constructor&&!l.call(t,"constructor")&&!l.call(t.constructor.prototype||{},"isPrototypeOf"))return!1;for(e in t);return void 0===e||l.call(t,e)},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?s[a.call(t)]||"object":typeof t},globalEval:function(t){var n,i=eval;t=f.trim(t),t&&(1===t.indexOf("use strict")?(n=e.createElement("script"),n.text=t,e.head.appendChild(n).parentNode.removeChild(n)):i(t))},camelCase:function(t){return t.replace(p,"ms-").replace(g,m)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e){var n,i=0;if(c(t))for(n=t.length;n>i&&e.call(t[i],i,t[i])!==!1;i++);else for(i in t)if(e.call(t[i],i,t[i])===!1)break;return t},trim:function(t){return null==t?"":(t+"").replace(h,"")},makeArray:function(t,e){var n=e||[];return null!=t&&(c(Object(t))?f.merge(n,"string"==typeof t?[t]:t):r.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:o.call(e,t,n)},merge:function(t,e){for(var n=+e.length,i=0,r=t.length;n>i;i++)t[r++]=e[i];return t.length=r,t},grep:function(t,e,n){for(var i,r=[],o=0,s=t.length,a=!n;s>o;o++)i=!e(t[o],o),i!==a&&r.push(t[o]);return r},map:function(t,e,n){var r,o,s=0,a=[];if(c(t))for(r=t.length;r>s;s++)o=e(t[s],s,n),null!=o&&a.push(o);else for(s in t)o=e(t[s],s,n),null!=o&&a.push(o);return i.apply([],a)},guid:1,proxy:function(t,e){var i,r,o;return"string"==typeof e&&(i=t[e],e=t,t=i),f.isFunction(t)?(r=n.call(arguments,2),o=function(){return t.apply(e||this,r.concat(n.call(arguments)))},o.guid=t.guid=t.guid||f.guid++,o):void 0},now:Date.now,support:u}),"function"==typeof Symbol&&(f.fn[Symbol.iterator]=t[Symbol.iterator]),f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){s["[object "+e+"]"]=e.toLowerCase()}),f});