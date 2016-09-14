/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
!function(t,e,n,i){"use strict";function r(t){return("string"==typeof t||t instanceof String)&&(t=t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),t}var o=function(e){for(var n=e.length,i=t("head");n--;)0===i.has("."+e[n]).length&&i.append('<meta class="'+e[n]+'" />')};o(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),t(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof n.body&&FastClick.attach(n.body)});var s=function(e,i){if("string"==typeof e){if(i){var r;if(i.jquery){if(r=i[0],!r)return i}else r=i;return t(r.querySelectorAll(e))}return t(n.querySelectorAll(e))}return t(e,i)},a=function(t){var e=[];return t||e.push("data"),this.namespace.length>0&&e.push(this.namespace),e.push(this.name),e.join("-")},l=function(t){for(var e=t.split("-"),n=e.length,i=[];n--;)0!==n?i.push(e[n]):this.namespace.length>0?i.push(this.namespace,e[n]):i.push(e[n]);return i.reverse().join("-")},u=function(e,n){var i=this,r=!s(this).data(this.attr_name(!0));return s(this.scope).is("["+this.attr_name()+"]")?(s(this.scope).data(this.attr_name(!0)+"-init",t.extend({},this.settings,n||e,this.data_options(s(this.scope)))),r&&this.events(this.scope)):s("["+this.attr_name()+"]",this.scope).each(function(){var r=!s(this).data(i.attr_name(!0)+"-init");s(this).data(i.attr_name(!0)+"-init",t.extend({},i.settings,n||e,i.data_options(s(this)))),r&&i.events(this)}),"string"==typeof e?this[e].call(this,n):void 0},c=function(t,e){function n(){e(t[0])}function i(){if(this.one("load",n),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var t=this.attr("src"),e=t.match(/\?/)?"&":"?";e+="random="+(new Date).getTime(),this.attr("src",t+e)}}return t.attr("src")?void(t[0].complete||4===t[0].readyState?n():i.call(t)):void n()};e.matchMedia=e.matchMedia||function(t){var e,n=t.documentElement,i=n.firstElementChild||n.firstChild,r=t.createElement("body"),o=t.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",r.style.background="none",r.appendChild(o),function(t){return o.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(r,i),e=42===o.offsetWidth,n.removeChild(r),{matches:e,media:t}}}(n),/*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */
function(t){function n(){i&&(s(n),l&&jQuery.fx.tick())}for(var i,r=0,o=["webkit","moz"],s=e.requestAnimationFrame,a=e.cancelAnimationFrame,l="undefined"!=typeof jQuery.fx;r<o.length&&!s;r++)s=e[o[r]+"RequestAnimationFrame"],a=a||e[o[r]+"CancelAnimationFrame"]||e[o[r]+"CancelRequestAnimationFrame"];s?(e.requestAnimationFrame=s,e.cancelAnimationFrame=a,l&&(jQuery.fx.timer=function(t){t()&&jQuery.timers.push(t)&&!i&&(i=!0,n())},jQuery.fx.stop=function(){i=!1})):(e.requestAnimationFrame=function(t){var n=(new Date).getTime(),i=Math.max(0,16-(n-r)),o=e.setTimeout(function(){t(n+i)},i);return r=n+i,o},e.cancelAnimationFrame=function(t){clearTimeout(t)})}(jQuery),e.Foundation={name:"Foundation",version:"5.4.7",media_queries:{small:s(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:s(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:s(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:s(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:s(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:t("<style></style>").appendTo("head")[0].sheet,global:{namespace:i},init:function(t,n,i,r,o){var a=[t,i,r,o],l=[];if(this.rtl=/rtl/i.test(s("html").attr("dir")),this.scope=t||this.scope,this.set_namespace(),n&&"string"==typeof n&&!/reflow/i.test(n))this.libs.hasOwnProperty(n)&&l.push(this.init_lib(n,a));else for(var u in this.libs)l.push(this.init_lib(u,n));return s(e).load(function(){s(e).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),t},init_lib:function(e,n){return this.libs.hasOwnProperty(e)?(this.patch(this.libs[e]),n&&n.hasOwnProperty(e)?("undefined"!=typeof this.libs[e].settings?t.extend(!0,this.libs[e].settings,n[e]):"undefined"!=typeof this.libs[e].defaults&&t.extend(!0,this.libs[e].defaults,n[e]),this.libs[e].init.apply(this.libs[e],[this.scope,n[e]])):(n=n instanceof Array?n:new Array(n),this.libs[e].init.apply(this.libs[e],n))):function(){}},patch:function(t){t.scope=this.scope,t.namespace=this.global.namespace,t.rtl=this.rtl,t.data_options=this.utils.data_options,t.attr_name=a,t.add_namespace=l,t.bindings=u,t.S=this.utils.S},inherit:function(t,e){for(var n=e.split(" "),i=n.length;i--;)this.utils.hasOwnProperty(n[i])&&(t[n[i]]=this.utils[n[i]])},set_namespace:function(){var e=this.global.namespace===i?t(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=e===i||/false/i.test(e)?"":e},libs:{},utils:{S:s,throttle:function(t,e){var n=null;return function(){var i=this,r=arguments;null==n&&(n=setTimeout(function(){t.apply(i,r),n=null},e))}},debounce:function(t,e,n){var i,r;return function(){var o=this,s=arguments,a=function(){i=null,n||(r=t.apply(o,s))},l=n&&!i;return clearTimeout(i),i=setTimeout(a,e),l&&(r=t.apply(o,s)),r}},data_options:function(e,n){function i(t){return!isNaN(t-0)&&null!==t&&""!==t&&t!==!1&&t!==!0}function r(e){return"string"==typeof e?t.trim(e):e}n=n||"options";var o,s,a,l={},u=function(t){var e=Foundation.global.namespace;return e.length>0?t.data(e+"-"+n):t.data(n)},c=u(e);if("object"==typeof c)return c;for(a=(c||":").split(";"),o=a.length;o--;)s=a[o].split(":"),s=[s[0],s.slice(1).join(":")],/true/i.test(s[1])&&(s[1]=!0),/false/i.test(s[1])&&(s[1]=!1),i(s[1])&&(-1===s[1].indexOf(".")?s[1]=parseInt(s[1],10):s[1]=parseFloat(s[1])),2===s.length&&s[0].length>0&&(l[r(s[0])]=r(s[1]));return l},register_media:function(e,n){Foundation.media_queries[e]===i&&(t("head").append('<meta class="'+n+'"/>'),Foundation.media_queries[e]=r(t("."+n).css("font-family")))},add_custom_rule:function(t,e){if(e===i&&Foundation.stylesheet)Foundation.stylesheet.insertRule(t,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[e];n!==i&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[e]+"{ "+t+" }")}},image_loaded:function(t,e){var n=this,i=t.length;0===i&&e(t),t.each(function(){c(n.S(this),function(){i-=1,0===i&&e(t)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)}}},t.fn.foundation=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(t)),this})}}(jQuery,window,window.document);