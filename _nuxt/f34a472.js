(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4,6],{241:function(t,e,r){var content=r(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("257306c7",content,!0,{sourceMap:!1})},242:function(t,e,r){var n=r(26),o=r(178);t.exports=n?o:function(t){return Set.prototype.values.call(t)}},243:function(t,e,r){"use strict";r.r(e);var n={name:"search-bar",props:["initialQuery"],data:function(t){var e;return{searchQuery:null!==(e=t.initialQuery)&&void 0!==e?e:""}},methods:{search:function(){this.$route.params.query!==this.searchQuery&&(this.searchQuery?this.$router.push({name:"search-query",params:{query:this.searchQuery},query:this.$route.query}):this.$router.push({name:"search-query",query:this.$route.query}))}}},o=(r(244),r(42)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-container"},[r("div",{staticClass:"relative"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"search-input",attrs:{type:"text"},domProps:{value:t.searchQuery},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t.searchQuery?t._e():r("svg",{staticClass:"search-icon",attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",fill:"currentColor"}})])])])}),[],!1,null,"f506a59e",null);e.default=component.exports},244:function(t,e,r){"use strict";r(241)},245:function(t,e,r){var n=r(51)(!1);n.push([t.i,".search-container[data-v-f506a59e]{display:flex;justify-content:center}.search-container .relative[data-v-f506a59e]{position:relative}.search-container .search-icon[data-v-f506a59e]{color:var(--color-secondary);height:80%;left:1em;margin:.4em 0;pointer-events:none;position:absolute;transition:opacity .15s,transform .15s}.search-container .search-input[data-v-f506a59e]{background-color:var(--color-background-light);border:none;border-radius:2.5em;color:var(--color-foreground);font-size:1.1em;line-height:1;max-width:calc(100vw - 4em);padding:.8em .7em .7em 1em}.search-container .search-input[data-v-f506a59e]:focus,.search-container .search-input[data-v-f506a59e]:hover{background-color:var(--color-background-lighter);outline:none}.search-container .search-input:focus+.search-icon[data-v-f506a59e]{opacity:0;transform:translateX(10px)}",""]),t.exports=n},246:function(t,e,r){var content=r(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("6bdf1938",content,!0,{sourceMap:!1})},247:function(t,e,r){var content=r(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("33fdfb61",content,!0,{sourceMap:!1})},248:function(t,e,r){var content=r(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("cabec0b6",content,!0,{sourceMap:!1})},249:function(t,e,r){var content=r(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("97d66632",content,!0,{sourceMap:!1})},250:function(t,e,r){"use strict";var n=r(2),o=r(55).findIndex,c=r(87),l="findIndex",f=!0;l in[]&&Array(1).findIndex((function(){f=!1})),n({target:"Array",proto:!0,forced:f},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},251:function(t,e,r){"use strict";r(246)},252:function(t,e,r){var n=r(51)(!1);n.push([t.i,"*[data-v-549dbb6e]{will-change:height;transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden;perspective:1000px}",""]),t.exports=n},253:function(t,e,r){"use strict";r(247)},254:function(t,e,r){var n=r(51)(!1);n.push([t.i,".expand-enter-active,.expand-leave-active{transition:height .2s cubic-bezier(.21,.97,.31,1);overflow:hidden}.expand-enter,.expand-leave-to{height:0}",""]),t.exports=n},255:function(t,e,r){"use strict";r(248)},256:function(t,e,r){var n=r(51)(!1);n.push([t.i,".ability-view[data-v-7b30be66]{height:2em;display:flex;align-items:center;position:relative;padding:.25em 1em;color:var(--color-foreground)}.ability-view.inline[data-v-7b30be66]{display:inline;height:1.5em;padding:0!important}.ability-view.inline .ability-icon[data-v-7b30be66]{height:1.7em;margin-right:.25em;vertical-align:middle;transform:translateY(-.2em)}.ability-view[data-v-7b30be66]:not(.inline):first-of-type{margin-top:.25em}.ability-view[data-v-7b30be66]:not(.inline):last-of-type{margin-bottom:.25em}.ability-view[data-v-7b30be66]:not(.inline):hover{background-color:var(--color-background-lighter)}.ability-icon[data-v-7b30be66]{margin-right:1em;height:100%}",""]),t.exports=n},257:function(t,e,r){"use strict";r(249)},258:function(t,e,r){var n=r(51)(!1);n.push([t.i,".close-button-svg[data-v-066a0f44]{height:1em;width:1em;vertical-align:middle}",""]),t.exports=n},259:function(t,e,r){"use strict";r.r(e);r(43),r(54);var n={name:"ability-view",props:{ability:String,inline:{type:Boolean,default:!1}},computed:{abilityDisplayString:function(){return this.ability.replace(/\b[a-z]/g,(function(t){return t.toUpperCase()}))}}},o=(r(255),r(42)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{staticClass:"ability-view",class:{inline:t.inline},attrs:{to:{name:"search-query",params:t.$route.params,query:{ability:t.ability}}}},[r("img",{staticClass:"ability-icon",attrs:{src:"/media/abilities/"+t.ability+".png",alt:t.ability}}),t._v("\n  "+t._s(t.abilityDisplayString)+"\n")])}),[],!1,null,"7b30be66",null);e.default=component.exports},260:function(t,e,r){"use strict";r.r(e);var n={name:"close-button"},o=(r(257),r(42)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{on:{click:function(e){return t.$emit("click")}}},[r("svg",{staticClass:"close-button-svg",attrs:{viewBox:"0 0 24 24"}},[r("path",{attrs:{fill:"currentColor",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}})])])}),[],!1,null,"066a0f44",null);e.default=component.exports},261:function(t,e,r){"use strict";r.r(e);var n={name:"expand-transition",functional:!0,render:function(t,e){return t("transition",{props:{name:"expand"},on:{afterEnter:function(element){element.style.height="auto"},enter:function(element){var t=getComputedStyle(element).width;element.style.width=t,element.style.position="absolute",element.style.visibility="hidden",element.style.height="auto";var e=getComputedStyle(element).height;element.style.width=null,element.style.position=null,element.style.visibility=null,element.style.height="0",getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height=e}))},leave:function(element){var t=getComputedStyle(element).height;element.style.height=t,getComputedStyle(element).height,requestAnimationFrame((function(){element.style.height="0"}))}}},e.children)}},o=(r(251),r(253),r(42)),component=Object(o.a)(n,undefined,undefined,!1,null,"549dbb6e",null);e.default=component.exports},262:function(t,e,r){var n=r(66),o=r(10),c=r(12),l=r(14).f,f=r(89),d=r(269),v=f("meta"),h=0,y=Object.isExtensible||function(){return!0},m=function(t){l(t,v,{value:{objectID:"O"+ ++h,weakData:{}}})},meta=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!c(t,v)){if(!y(t))return"F";if(!e)return"E";m(t)}return t[v].objectID},getWeakData:function(t,e){if(!c(t,v)){if(!y(t))return!0;if(!e)return!1;m(t)}return t[v].weakData},onFreeze:function(t){return d&&meta.REQUIRED&&y(t)&&!c(t,v)&&m(t),t}};n[v]=!0},263:function(t,e,r){var content=r(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("ff16e764",content,!0,{sourceMap:!1})},266:function(t,e,r){t.exports=r.p+"img/ori_shrug.b912c5c.png"},267:function(t,e,r){"use strict";var n=r(268),o=r(270);t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},268:function(t,e,r){"use strict";var n=r(2),o=r(4),c=r(91),l=r(15),f=r(262),d=r(177),v=r(88),h=r(10),y=r(6),m=r(123),x=r(45),_=r(180);t.exports=function(t,e,r){var S=-1!==t.indexOf("Map"),w=-1!==t.indexOf("Weak"),k=S?"set":"add",E=o[t],R=E&&E.prototype,C=E,I={},T=function(t){var e=R[t];l(R,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(w&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return w&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(w&&!h(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(c(t,"function"!=typeof E||!(w||R.forEach&&!y((function(){(new E).entries().next()})))))C=r.getConstructor(e,t,S,k),f.REQUIRED=!0;else if(c(t,!0)){var O=new C,A=O[k](w?{}:-0,1)!=O,$=y((function(){O.has(1)})),j=m((function(t){new E(t)})),D=!w&&y((function(){for(var t=new E,e=5;e--;)t[k](e,e);return!t.has(-0)}));j||((C=e((function(e,r){v(e,C,t);var n=_(new E,e,C);return null!=r&&d(r,n[k],{that:n,AS_ENTRIES:S}),n}))).prototype=R,R.constructor=C),($||D)&&(T("delete"),T("has"),S&&T("get")),(D||A)&&T(k),w&&R.clear&&delete R.clear}return I[t]=C,n({global:!0,forced:C!=E},I),x(C,t),w||r.setStrong(C,t,S),C}},269:function(t,e,r){var n=r(6);t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},270:function(t,e,r){"use strict";var n=r(14).f,o=r(67),c=r(125),l=r(53),f=r(88),d=r(177),v=r(124),h=r(126),y=r(11),m=r(262).fastKey,x=r(32),_=x.set,S=x.getterFor;t.exports={getConstructor:function(t,e,r,v){var h=t((function(t,n){f(t,h,e),_(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),y||(t.size=0),null!=n&&d(n,t[v],{that:t,AS_ENTRIES:r})})),x=S(e),w=function(t,e,r){var n,o,c=x(t),l=k(t,e);return l?l.value=r:(c.last=l={index:o=m(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),y?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},k=function(t,e){var r,n=x(t),o=m(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return c(h.prototype,{clear:function(){for(var t=x(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,y?t.size=0:this.size=0},delete:function(t){var e=this,r=x(e),n=k(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),y?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=x(this),n=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!k(this,t)}}),c(h.prototype,r?{get:function(t){var e=k(this,t);return e&&e.value},set:function(t,e){return w(this,0===t?0:t,e)}}:{add:function(t){return w(this,t=0===t?0:t,t)}}),y&&n(h.prototype,"size",{get:function(){return x(this).size}}),h},setStrong:function(t,e,r){var n=e+" Iterator",o=S(e),c=S(n);v(t,e,(function(t,e){_(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),h(e)}}},271:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(272);n({target:"Set",proto:!0,real:!0,forced:o},{addAll:function(){return c.apply(this,arguments)}})},272:function(t,e,r){"use strict";var n=r(7),o=r(65);t.exports=function(){for(var t=n(this),e=o(t.add),r=0,c=arguments.length;r<c;r++)e.call(t,arguments[r]);return t}},273:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(274);n({target:"Set",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},274:function(t,e,r){"use strict";var n=r(7),o=r(65);t.exports=function(){for(var t,e=n(this),r=o(e.delete),c=!0,l=0,f=arguments.length;l<f;l++)t=r.call(e,arguments[l]),c=c&&t;return!!c}},275:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(29),l=r(7),f=r(65),d=r(86),v=r(177);n({target:"Set",proto:!0,real:!0,forced:o},{difference:function(t){var e=l(this),r=new(d(e,c("Set")))(e),n=f(r.delete);return v(t,(function(t){n.call(r,t)})),r}})},276:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(7),l=r(53),f=r(242),d=r(177);n({target:"Set",proto:!0,real:!0,forced:o},{every:function(t){var e=c(this),r=f(e),n=l(t,arguments.length>1?arguments[1]:void 0,3);return!d(r,(function(t,r){if(!n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},277:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(29),l=r(7),f=r(65),d=r(53),v=r(86),h=r(242),y=r(177);n({target:"Set",proto:!0,real:!0,forced:o},{filter:function(t){var e=l(this),r=h(e),n=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(v(e,c("Set"))),m=f(o.add);return y(r,(function(t){n(t,t,e)&&m.call(o,t)}),{IS_ITERATOR:!0}),o}})},278:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(7),l=r(53),f=r(242),d=r(177);n({target:"Set",proto:!0,real:!0,forced:o},{find:function(t){var e=c(this),r=f(e),n=l(t,arguments.length>1?arguments[1]:void 0,3);return d(r,(function(t,r){if(n(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},279:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(29),l=r(7),f=r(65),d=r(86),v=r(177);n({target:"Set",proto:!0,real:!0,forced:o},{intersection:function(t){var e=l(this),r=new(d(e,c("Set"))),n=f(e.has),o=f(r.add);return v(t,(function(t){n.call(e,t)&&o.call(r,t)})),r}})},280:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(7),l=r(65),f=r(177);n({target:"Set",proto:!0,real:!0,forced:o},{isDisjointFrom:function(t){var e=c(this),r=l(e.has);return!f(t,(function(t,n){if(!0===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},281:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(29),l=r(7),f=r(65),d=r(178),v=r(177);n({target:"Set",proto:!0,real:!0,forced:o},{isSubsetOf:function(t){var e=d(this),r=l(t),n=r.has;return"function"!=typeof n&&(r=new(c("Set"))(t),n=f(r.has)),!v(e,(function(t,e){if(!1===n.call(r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},282:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(7),l=r(65),f=r(177);n({target:"Set",proto:!0,real:!0,forced:o},{isSupersetOf:function(t){var e=c(this),r=l(e.has);return!f(t,(function(t,n){if(!1===r.call(e,t))return n()}),{INTERRUPTED:!0}).stopped}})},283:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(7),l=r(242),f=r(177);n({target:"Set",proto:!0,real:!0,forced:o},{join:function(t){var e=c(this),r=l(e),n=void 0===t?",":String(t),o=[];return f(r,o.push,{that:o,IS_ITERATOR:!0}),o.join(n)}})},284:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(29),l=r(7),f=r(65),d=r(53),v=r(86),h=r(242),y=r(177);n({target:"Set",proto:!0,real:!0,forced:o},{map:function(t){var e=l(this),r=h(e),n=d(t,arguments.length>1?arguments[1]:void 0,3),o=new(v(e,c("Set"))),m=f(o.add);return y(r,(function(t){m.call(o,n(t,t,e))}),{IS_ITERATOR:!0}),o}})},285:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(7),l=r(65),f=r(242),d=r(177);n({target:"Set",proto:!0,real:!0,forced:o},{reduce:function(t){var e=c(this),r=f(e),n=arguments.length<2,o=n?void 0:arguments[1];if(l(t),d(r,(function(r){n?(n=!1,o=r):o=t(o,r,r,e)}),{IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty set with no initial value");return o}})},286:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(7),l=r(53),f=r(242),d=r(177);n({target:"Set",proto:!0,real:!0,forced:o},{some:function(t){var e=c(this),r=f(e),n=l(t,arguments.length>1?arguments[1]:void 0,3);return d(r,(function(t,r){if(n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},287:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(29),l=r(7),f=r(65),d=r(86),v=r(177);n({target:"Set",proto:!0,real:!0,forced:o},{symmetricDifference:function(t){var e=l(this),r=new(d(e,c("Set")))(e),n=f(r.delete),o=f(r.add);return v(t,(function(t){n.call(r,t)||o.call(r,t)})),r}})},288:function(t,e,r){"use strict";var n=r(2),o=r(26),c=r(29),l=r(7),f=r(65),d=r(86),v=r(177);n({target:"Set",proto:!0,real:!0,forced:o},{union:function(t){var e=l(this),r=new(d(e,c("Set")))(e);return v(t,f(r.add),{that:r}),r}})},289:function(t,e,r){"use strict";r(263)},290:function(t,e,r){var n=r(51)(!1);n.push([t.i,"[data-v-75f1ae3c]:export{breakpointSm:768px;breakpointMd:1200px}.no-results[data-v-75f1ae3c]{text-align:center;padding-top:2em}.no-results img[data-v-75f1ae3c]{width:4em;height:4em}.results[data-v-75f1ae3c]{display:flex;justify-content:center}.advanced-search[data-v-75f1ae3c]{border-radius:1em;background-color:var(--color-background-light);margin-top:1em;overflow:hidden;display:inline-block;text-align:left;min-width:20vw}.advanced-search .filter-heading[data-v-75f1ae3c]{padding:1em 1em 0}.advanced-search .abilities[data-v-75f1ae3c]{padding-bottom:.5em;display:grid;grid-template-columns:1fr 1fr}@media only screen and (max-width:768px){.advanced-search .abilities[data-v-75f1ae3c]{grid-template-columns:1fr}}",""]),t.exports=n},306:function(t,e,r){"use strict";r.r(e);var n=r(83),o=r(19),c=r(5),l=(r(30),r(43),r(122),r(127),r(34),r(9),r(13),r(20),r(68),r(36),r(250),r(267),r(271),r(273),r(275),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(288),r(44),r(56),r(243)),f=r(261),d=r(259),v={components:{CloseButton:r(260).default,AbilityView:d.default,ExpandTransition:f.default,SearchBar:l.default},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,l,f,d,v,h,y,m,x,_,S;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,t.query,l=[],f=r({deep:!0}),e.next=5,f.fetch();case 5:if(d=e.sent,!c.query){e.next=19;break}return v=c.query.split(" "),h=r({deep:!0}).search({query:{type:"bool",operator:"and",minimum_should_match:v.length,should:v.map((function(t){return{type:"match",field:"title",value:t,prefix_length:1,fuzziness:0,extended:!1}}))}}),y=r({deep:!0}).search({query:{type:"bool",operator:"and",minimum_should_match:v.length,should:v.map((function(t){return{type:"match",field:"text",value:t,prefix_length:1,fuzziness:0,extended:!1}}))}}),e.next=12,Promise.all([h.fetch(),y.fetch()]);case 12:m=e.sent,x=Object(o.a)(m,2),_=x[0],S=x[1],l=[].concat(Object(n.a)(_),Object(n.a)(S)),e.next=20;break;case 19:l=d.filter((function(a){return!!a.title})).sort((function(a,b){return a.title.localeCompare(b.title)}));case 20:return l=l.filter((function(article,t){return l.findIndex((function(a){return a.path===article.path}))===t})),e.abrupt("return",{articles:l,allAbilities:new Set(d.reduce((function(t,article){var e,r;return t.concat(null!==(e=null===(r=article.tags)||void 0===r?void 0:r.abilities)&&void 0!==e?e:[])}),[]))});case 22:case"end":return e.stop()}}),e)})))()},data:function(){return{visible:!0,advancedSearch:!1}},computed:{filteredArticles:function(){var t=this,e=this.articles;return this.$route.query.ability&&(e=e.filter((function(article){var e,r,n=null!==(e=null===(r=article.tags)||void 0===r?void 0:r.abilities)&&void 0!==e?e:null;return null!==n&&n.includes(t.$route.query.ability)}))),e}},head:function(){return{title:"Search"}}},h=(r(289),r(42)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("search-bar",{attrs:{"initial-query":t.$route.params.query}}),t._v(" "),n("expand-transition",[t.advancedSearch?n("div",{staticClass:"text-center"},[n("div",{staticClass:"advanced-search"},[n("div",{staticClass:"filter-heading"},[t._v("Filter by abilities:")]),t._v(" "),n("div",{staticClass:"abilities"},t._l(t.allAbilities,(function(t){return n("ability-view",{key:t,attrs:{ability:t}})})),1)])]):t._e()]),t._v(" "),n("a",{staticClass:"text-center d-block",on:{click:function(e){t.advancedSearch=!t.advancedSearch}}},[t._v("\n    "+t._s(t.advancedSearch?"Simple":"Advanced")+" search\n  ")]),t._v(" "),t.articles.length>0?n("div",{staticClass:"results"},[n("div",[n("h2",[t._v("Results:")]),t._v(" "),t.$route.query.ability?n("div",[t._v("\n        Only showing results related related to\n        "),n("ability-view",{attrs:{ability:t.$route.query.ability,inline:""}}),t._v(" "),n("close-button",{attrs:{title:"Remove filter"},on:{click:function(e){return t.$router.push({name:t.$route.name,params:t.$route.params})}}})],1):t._e(),t._v(" "),n("ul",t._l(t.filteredArticles,(function(article){return n("li",[n("nuxt-link",{attrs:{to:article.path}},[t._v(t._s(article.title))])],1)})),0)])]):n("div",{staticClass:"no-results"},[n("img",{attrs:{src:r(266)}}),t._v(" "),n("h2",[t._v("\n      No results\n      "),t.$route.query.ability?[t._v("\n        related to "),n("ability-view",{attrs:{ability:t.$route.query.ability,inline:""}}),t._v(" "),n("close-button",{attrs:{title:"Remove filter"},on:{click:function(e){return t.$router.push({name:t.$route.name,params:t.$route.params})}}})]:t._e()],2)])],1)}),[],!1,null,"75f1ae3c",null);e.default=component.exports;installComponents(component,{SearchBar:r(243).default,AbilityView:r(259).default,ExpandTransition:r(261).default,CloseButton:r(260).default})}}]);