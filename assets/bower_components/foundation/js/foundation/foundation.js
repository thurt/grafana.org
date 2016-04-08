/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(e,t,n,r){"use strict";function i(e){return("string"==typeof e||e instanceof String)&&(e=e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),e}var o=function(t){for(var n=t.length,r=e("head");n--;)0===r.has("."+t[n]).length&&r.append('<meta class="'+t[n]+'" />')};o(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),e(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof n.body&&FastClick.attach(n.body)});var a=function(t,r){if("string"==typeof t){if(r){var i;if(r.jquery){if(i=r[0],!i)return r}else i=r;return e(i.querySelectorAll(t))}return e(n.querySelectorAll(t))}return e(t,r)},s=function(e){var t=[];return e||t.push("data"),this.namespace.length>0&&t.push(this.namespace),t.push(this.name),t.join("-")},u=function(e){for(var t=e.split("-"),n=t.length,r=[];n--;)0!==n?r.push(t[n]):this.namespace.length>0?r.push(this.namespace,t[n]):r.push(t[n]);return r.reverse().join("-")},c=function(t,n){var r=this,i=!a(this).data(this.attr_name(!0));return a(this.scope).is("["+this.attr_name()+"]")?(a(this.scope).data(this.attr_name(!0)+"-init",e.extend({},this.settings,n||t,this.data_options(a(this.scope)))),i&&this.events(this.scope)):a("["+this.attr_name()+"]",this.scope).each(function(){var i=!a(this).data(r.attr_name(!0)+"-init");a(this).data(r.attr_name(!0)+"-init",e.extend({},r.settings,n||t,r.data_options(a(this)))),i&&r.events(this)}),"string"==typeof t?this[t].call(this,n):void 0},l=function(e,t){function n(){t(e[0])}function r(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var e=this.attr("src"),t=e.match(/\?/)?"&":"?";t+="random="+(new Date).getTime(),this.attr("src",e+t)}}return e.attr("src")?void(e[0].complete||4===e[0].readyState?n():r.call(e)):void n()};t.matchMedia=t.matchMedia||function(e){var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,i=e.createElement("body"),o=e.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(o),function(e){return o.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(i,r),t=42===o.offsetWidth,n.removeChild(i),{matches:t,media:e}}}(n),/*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
function(e){function n(){r&&(a(n),u&&jQuery.fx.tick())}for(var r,i=0,o=["webkit","moz"],a=t.requestAnimationFrame,s=t.cancelAnimationFrame,u="undefined"!=typeof jQuery.fx;i<o.length&&!a;i++)a=t[o[i]+"RequestAnimationFrame"],s=s||t[o[i]+"CancelAnimationFrame"]||t[o[i]+"CancelRequestAnimationFrame"];a?(t.requestAnimationFrame=a,t.cancelAnimationFrame=s,u&&(jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&!r&&(r=!0,n())},jQuery.fx.stop=function(){r=!1})):(t.requestAnimationFrame=function(e){var n=(new Date).getTime(),r=Math.max(0,16-(n-i)),o=t.setTimeout(function(){e(n+r)},r);return i=n+r,o},t.cancelAnimationFrame=function(e){clearTimeout(e)})}(jQuery),t.Foundation={name:"Foundation",version:"5.4.7",media_queries:{small:a(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:a(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:a(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:a(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:a(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,global:{namespace:r},init:function(e,n,r,i,o){var s=[e,r,i,o],u=[];if(this.rtl=/rtl/i.test(a("html").attr("dir")),this.scope=e||this.scope,this.set_namespace(),n&&"string"==typeof n&&!/reflow/i.test(n))this.libs.hasOwnProperty(n)&&u.push(this.init_lib(n,s));else for(var c in this.libs)u.push(this.init_lib(c,n));return a(t).load(function(){a(t).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),e},init_lib:function(t,n){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),n&&n.hasOwnProperty(t)?("undefined"!=typeof this.libs[t].settings?e.extend(!0,this.libs[t].settings,n[t]):"undefined"!=typeof this.libs[t].defaults&&e.extend(!0,this.libs[t].defaults,n[t]),this.libs[t].init.apply(this.libs[t],[this.scope,n[t]])):(n=n instanceof Array?n:new Array(n),this.libs[t].init.apply(this.libs[t],n))):function(){}},patch:function(e){e.scope=this.scope,e.namespace=this.global.namespace,e.rtl=this.rtl,e.data_options=this.utils.data_options,e.attr_name=s,e.add_namespace=u,e.bindings=c,e.S=this.utils.S},inherit:function(e,t){for(var n=t.split(" "),r=n.length;r--;)this.utils.hasOwnProperty(n[r])&&(e[n[r]]=this.utils[n[r]])},set_namespace:function(){var t=this.global.namespace===r?e(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===r||/false/i.test(t)?"":t},libs:{},utils:{S:a,throttle:function(e,t){var n=null;return function(){var r=this,i=arguments;null==n&&(n=setTimeout(function(){e.apply(r,i),n=null},t))}},debounce:function(e,t,n){var r,i;return function(){var o=this,a=arguments,s=function(){r=null,n||(i=e.apply(o,a))},u=n&&!r;return clearTimeout(r),r=setTimeout(s,t),u&&(i=e.apply(o,a)),i}},data_options:function(t,n){function r(e){return!isNaN(e-0)&&null!==e&&""!==e&&e!==!1&&e!==!0}function i(t){return"string"==typeof t?e.trim(t):t}n=n||"options";var o,a,s,u={},c=function(e){var t=Foundation.global.namespace;return t.length>0?e.data(t+"-"+n):e.data(n)},l=c(t);if("object"==typeof l)return l;for(s=(l||":").split(";"),o=s.length;o--;)a=s[o].split(":"),a=[a[0],a.slice(1).join(":")],/true/i.test(a[1])&&(a[1]=!0),/false/i.test(a[1])&&(a[1]=!1),r(a[1])&&(-1===a[1].indexOf(".")?a[1]=parseInt(a[1],10):a[1]=parseFloat(a[1])),2===a.length&&a[0].length>0&&(u[i(a[0])]=i(a[1]));return u},register_media:function(t,n){Foundation.media_queries[t]===r&&(e("head").append('<meta class="'+n+'"/>'),Foundation.media_queries[t]=i(e("."+n).css("font-family")))},add_custom_rule:function(e,t){if(t===r&&Foundation.stylesheet)Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[t];n!==r&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+e+" }")}},image_loaded:function(e,t){var n=this,r=e.length;0===r&&t(e),e.each(function(){l(n.S(this),function(){r-=1,0===r&&t(e)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)}}},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}}(jQuery,window,window.document);