/*!
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */

(function(d){function n(a,b,e,c){c={data:c||0===c||!1===c?c:b?b.data:{},_wrap:b?b._wrap:null,tmpl:null,parent:b||null,nodes:[],calls:C,nest:D,wrap:E,html:F,update:G};a&&d.extend(c,a,{nodes:[],parent:b});e&&(c.tmpl=e,c._ctnt=c._ctnt||c.tmpl(d,c),c.key=++p,(u.length?q:j)[p]=c);return c}function r(a,b,e){var c,e=e?d.map(e,function(b){return"string"===typeof b?a.key?b.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+m+'="'+a.key+'" $2'):b:r(b,a,b._ctnt)}):a;if(b)return e;e=e.join("");e.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,
function(b,a,e,i){c=d(e).get();w(c);a&&(c=v(a).concat(c));i&&(c=c.concat(v(i)))});return c?c:v(e)}function v(a){var b=document.createElement("div");b.innerHTML=a;return d.makeArray(b.childNodes)}function x(a){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+d.trim(a).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,
function(a,e,c,g,h,f,i){a=d.tmpl.tag[c];if(!a)throw"Unknown template tag: "+c;c=a._default||[];f&&!/\w$/.test(h)&&(h+=f,f="");h?(h=s(h),i=i?","+s(i)+")":f?")":"",i=f?-1<h.indexOf(".")?h+s(f):"("+h+").call($item"+i:h,f=f?i:"(typeof("+h+")==='function'?("+h+").call($item):("+h+"))"):f=i=c.$1||"null";g=s(g);return"');"+a[e?"close":"open"].split("$notnull_1").join(h?"typeof("+h+")!=='undefined' && ("+h+")!=null":"true").split("$1a").join(f).split("$1").join(i).split("$2").join(g||c.$2||"")+"__.push('"})+
"');}return __;")}function y(a,b){a._wrap=r(a,!0,d.isArray(b)?b:[z.test(b)?b:d(b).html()]).join("")}function s(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function w(a){function b(a){function b(a){a+=e;f=h[a]=h[a]||n(f,j[f.parent.key+e]||f.parent)}var c,g=a,f,i;if(i=a.getAttribute(m)){for(;g.parentNode&&1===(g=g.parentNode).nodeType&&!(c=g.getAttribute(m)););if(c!==i){g=g.parentNode?11===g.nodeType?0:g.getAttribute(m)||0:0;if(!(f=j[i]))f=q[i],f=n(f,j[g]||q[g]),f.key=++p,j[p]=f;k&&
b(i)}a.removeAttribute(m)}else if(k&&(f=d.data(a,"tmplItem")))b(f.key),j[f.key]=f,g=(g=d.data(a.parentNode,"tmplItem"))?g.key:0;if(f){for(c=f;c&&c.key!=g;)c.nodes.push(a),c=c.parent;delete f._ctnt;delete f._wrap;d.data(a,"tmplItem",f)}}var e="_"+k,c,g,h={},f,i,l;f=0;for(i=a.length;f<i;f++)if(1===(c=a[f]).nodeType){g=c.getElementsByTagName("*");for(l=g.length-1;0<=l;l--)b(g[l]);b(c)}}function C(a,b,d,c){if(!a)return u.pop();u.push({_:a,tmpl:b,item:this,data:d,options:c})}function D(a,b,e){return d.tmpl(d.template(a),
b,e,this)}function E(a,b){var e=a.options||{};e.wrapped=b;return d.tmpl(d.template(a.tmpl),a.data,e,a.item)}function F(a,b){var e=this._wrap;return d.map(d(d.isArray(e)?e.join(""):e).filter(a||"*"),function(a){if(b)a=a.innerText||a.textContent;else{var d;if(!(d=a.outerHTML))d=document.createElement("div"),d.appendChild(a.cloneNode(!0)),d=d.innerHTML;a=d}return a})}function G(){var a=this.nodes;d.tmpl(null,null,null,this).insertBefore(a[0]);d(a).remove()}var A=d.fn.domManip,m="_tmplitem",z=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
j={},q={},t,B={key:0,data:{}},p=0,k=0,u=[];d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(e){var c=[],e=d(e),g,h,f;g=1===this.length&&this[0].parentNode;t=j||{};if(g&&11===g.nodeType&&1===g.childNodes.length&&1===e.length)e[b](this[0]),c=this;else{h=0;for(f=e.length;h<f;h++)k=h,g=(0<h?this.clone(!0):this).get(),d(e[h])[b](g),c=c.concat(g);k=0;c=this.pushStack(c,a,e.selector)}e=t;t=null;d.tmpl.complete(e);
return c}});d.fn.extend({tmpl:function(a,b,e){return d.tmpl(this[0],a,b,e)},tmplItem:function(){return d.tmplItem(this[0])},template:function(a){return d.template(a,this[0])},domManip:function(a,b,e,c){if(a[0]&&d.isArray(a[0])){for(var g=d.makeArray(arguments),h=a[0],f=h.length,i=0,l;i<f&&!(l=d.data(h[i++],"tmplItem")););l&&k&&(g[2]=function(a){d.tmpl.afterManip(this,a,e)});A.apply(this,g)}else A.apply(this,arguments);k=0;t||d.tmpl.complete(j);return this}});d.extend({tmpl:function(a,b,e,c){var g=
!c;if(g)c=B,a=d.template[a]||d.template(null,a),q={};else if(!a)return a=c.tmpl,j[c.key]=c,c.nodes=[],c.wrapped&&y(c,c.wrapped),d(r(c,null,c.tmpl(d,c)));if(!a)return[];"function"===typeof b&&(b=b.call(c||{}));e&&e.wrapped&&y(e,e.wrapped);b=d.isArray(b)?d.map(b,function(b){return b?n(e,c,a,b):null}):[n(e,c,a,b)];return g?d(r(c,null,b)):b},tmplItem:function(a){var b;for(a instanceof d&&(a=a[0]);a&&1===a.nodeType&&!(b=d.data(a,"tmplItem"))&&(a=a.parentNode););return b||B},template:function(a,b){return b?
("string"===typeof b?b=x(b):b instanceof d&&(b=b[0]||{}),b.nodeType&&(b=d.data(b,"tmpl")||d.data(b,"tmpl",x(b.innerHTML))),"string"===typeof a?d.template[a]=b:b):a?"string"!==typeof a?d.template(null,a):d.template[a]||d.template(null,z.test(a)?a:d(a)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});d.extend(d.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},
open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){j={}},afterManip:function(a,
b,e){var c=11===b.nodeType?d.makeArray(b.childNodes):1===b.nodeType?[b]:[];e.call(a,b);w(c);k++}})})(jQuery);
