(self.AMP=self.AMP||[]).push({n:"amp-ad-exit",v:"1902081532110",f:(function(AMP,_){
var h="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},l;if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var n={a:!0},q={};try{q.__proto__=n;m=q.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=l;
function u(a,b){a.prototype=h(b.prototype);a.prototype.constructor=a;if(t)t(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.P=b.prototype}function v(a,b){this.name=a;this.type=b}v.prototype.filter=function(){};v.prototype.onLayoutMeasure=function(){};function w(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var x=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function y(a){var b=Object.create(null);if(!a)return b;for(var c;c=x.exec(a);){var d=w(c[1],c[1]),e=c[2]?w(c[2],c[2]):"";b[d]=e}return b};var z="";
function A(){var a,b=a||self;if(b.AMP_MODE)var c=b.AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!1,f=y(c.location.originalHash||c.location.hash);d=d.spt;var k=y(c.location.search);z||(z=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"011902081532110");c=b.AMP_MODE={localDev:!1,development:!("1"!=f.development&&!c.AMP_DEV_MODE),examiner:"2"==f.development,filter:f.filter,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=k.amp_lite,test:e,log:f.log,version:"1902081532110",rtvVersion:z,
singlePassType:d}}return c};var aa=Object.prototype.toString;self.log=self.log||{user:null,dev:null,userForEmbed:null};var B=self.log;function C(){if(!B.user)throw Error("failed to call initLogConstructor");return B.user}function D(){if(B.dev)return B.dev;throw Error("failed to call initLogConstructor");}function E(a,b,c,d){C().assert(a,b,c,d,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};var F;function ba(a,b){var c=void 0,d=a,e=b;var f=function(a){try{return e(a)}catch(p){throw self.reportError(p),p;}};var k=ca(),g=!1;c&&(g=c.capture);d.addEventListener("message",f,k?c:g);return function(){d&&d.removeEventListener("message",f,k?c:g);f=d=e=null}}function ca(){if(void 0!==F)return F;F=!1;try{var a={get capture(){F=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return F};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function da(a,b,c){var d;try{var e=a.open(b,c,d)}catch(f){D().error("DOM","Failed to open url on target: ",c,f)}e||"_top"==c||a.open(b,"_top")};function ea(a,b){return ba(a,b)};function fa(a){var b,c=a.ownerDocument.defaultView,d=c!=G(c);if(d){if(H(c,"url-replace")){var e=I(c,"url-replace");if(e)return e}if(!b)return null}a=J(a);a=J(a);a=a.isSingleDoc()?a.win:a;return H(a,"url-replace")?I(a,"url-replace"):null}function G(a){return a.__AMP_TOP||a}function J(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=G(b);a=I(b,"ampdoc").getAmpDoc(a)}return a}
function I(a,b){H(a,b);var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function H(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};var ga={bg:"https://tpc.googlesyndication.com/b4a/b4a-runner.html",moat:"https://z.moatads.com/ampanalytics093284/iframe.html"};function ha(a){E("object"==typeof a);if(a.filters){var b=a.filters,c=["clickDelay","clickLocation","inactiveElement"],d;for(d in b)E("object"==typeof b[d],"Filter specification '%s' is malformed",d),E(-1!=c.indexOf(b[d].type),"Supported filters: "+c.join(", "))}else a.filters={};if(a.transport){b=a.transport;for(var e in b)E("beacon"==e||"image"==e,"Unknown transport option: '"+e+"'"),E("boolean"==typeof b[e])}else a.transport={};e=a.targets;E("object"==typeof e,"'targets' must be an object");for(var f in e)ia(f,
e[f],a);return a}function ia(a,b,c){E("string"==typeof b.finalUrl,"finalUrl of target '%s' must be a string",a);b.filters&&b.filters.forEach(function(a){E(c.filters[a],"filter '%s' not defined",a)});if(b.vars){a=/^_[a-zA-Z0-9_-]+$/;for(var d in b.vars)E(a.test(d),"'%s' must match the pattern '%s'",d,a)}}function K(a){return C().assertString(ga[a],"Unknown or invalid vendor "+a+", note that vendor must use transport: iframe")};function L(a,b,c){v.call(this,a,b.type);E("clickDelay"==b.type&&"number"==typeof b.delay&&0<b.delay,"Invalid ClickDelay spec");this.spec=b;this.intervalStart=Date.now();b.startTimingEvent&&(c.performance&&c.performance.timing?void 0==c.performance.timing[b.startTimingEvent]?D().warn("amp-ad-exit","Invalid performance timing event type "+b.startTimingEvent+", falling back to now"):this.intervalStart=c.performance.timing[b.startTimingEvent]:D().warn("amp-ad-exit","Browser does not support performance timing, falling back to now"))}
u(L,v);L.prototype.filter=function(){return Date.now()-this.intervalStart>=this.spec.delay};function M(a){var b=1E3;return{type:"clickDelay",delay:b,startTimingEvent:a}};function N(a,b,c){v.call(this,a,b.type);E("clickLocation"==b.type&&("undefined"===typeof b.left||"number"===typeof b.left)&&("undefined"===typeof b.right||"number"===typeof b.right)&&("undefined"===typeof b.top||"number"===typeof b.top)&&("undefined"===typeof b.bottom||"number"===typeof b.bottom)&&("undefined"===typeof b.relativeTo||"string"===typeof b.relativeTo),"Invaid ClickLocation spec");this.L=b.left||0;this.M=b.right||0;this.O=b.top||0;this.J=b.bottom||0;this.D=b.relativeTo;this.G=c;this.h=
{}}u(N,v);N.prototype.filter=function(a){return a.clientX>=this.h.left&&a.clientX<=this.h.right&&a.clientY>=this.h.top&&a.clientY<=this.h.bottom?!0:!1};
N.prototype.onLayoutMeasure=function(){var a=this;this.G.getVsync().measure(function(){var b=a.G.win;if(a.D){var c=b.document.querySelector(a.D);E(c,"relativeTo element "+a.D+" not found.");var d=c.getBoundingClientRect();a.h.left=d.left;a.h.top=d.top;a.h.bottom=d.bottom;a.h.right=d.right}else a.h.left=0,a.h.top=0,a.h.bottom=b.innerHeight,a.h.right=b.innerWidth;a.h.left+=a.L;a.h.top+=a.O;a.h.right-=a.M;a.h.bottom-=a.J})};function O(a,b){v.call(this,a,b.type);E("inactiveElement"==b.type&&"string"==typeof b.selector,"Invalid InactiveElementspec");this.N=b.selector}u(O,v);O.prototype.filter=function(a){a=a.target;var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return!(b&&b.call(a,this.N))};function P(a,b,c){switch(b.type){case "clickDelay":return new L(a,b,c.win);case "clickLocation":return new N(a,b,c);case "inactiveElement":return new O(a,b)}};function ja(a,b){try{a:{var c=(a.ownerDocument||a).defaultView;if(c&&c!=b&&G(c)==b)try{var d=c.frameElement;break a}catch(f){}d=null}var e=d.parentElement;if("AMP-AD"==e.nodeName)return String(e.getResourceId())}catch(f){}return null};function Q(){var a=100;this.K=a;this.B=this.F=0;this.l=Object.create(null)}Q.prototype.has=function(a){return!!this.l[a]};Q.prototype.get=function(a){var b=this.l[a];if(b)return b.access=++this.B,b.payload};Q.prototype.put=function(a,b){this.has(a)||this.F++;this.l[a]={payload:b,access:this.B};if(!(this.F<=this.K)){D().warn("lru-cache","Trimming LRU cache");a=this.l;var c=this.B+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.F--)}};(function(a){return a||{}})({c:!0,v:!0,a:!0,ad:!0});var R,V;
function W(a){var b;R||(R=self.document.createElement("a"),V=self.UrlCache||(self.UrlCache=new Q));var c=b?null:V,d=R;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=e.hostname;e.origin=
d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}return a};function X(a){a=AMP.BaseElement.call(this,a)||this;a.H={};a.m=[];a.o={beacon:!0,image:!0};a.A={};a.registerAction("exit",a.exit.bind(a));a.I={};a.w=null;a.j=null;a.C={};return a}u(X,AMP.BaseElement);
X.prototype.exit=function(a){var b=this,c=a,d=c.args;c=c.event;var e=this.H[d.target];E(e,"Exit target not found: '"+d.target+"'");E(c,"Unexpected null event");c.preventDefault();if(Y(this.m,c)&&Y(e.filters,c)){var f=ka(this,d,c,e);e.trackingUrls&&e.trackingUrls.map(f).forEach(function(a){b.o.beacon&&b.win.navigator.sendBeacon&&b.win.navigator.sendBeacon(a,"")||!b.o.image||(b.win.document.createElement("img").src=a)});var k=e.behaviors&&e.behaviors.clickTarget&&"_top"==e.behaviors.clickTarget?"_top":
"_blank";da(this.win,f(e.finalUrl),k)}};
function ka(a,b,c,d){var e={CLICK_X:function(){return c.clientX},CLICK_Y:function(){return c.clientY}},f=fa(a.element),k={RANDOM:!0,CLICK_X:!0,CLICK_Y:!0};if(d.vars){var g={},r;for(r in d.vars)g.customVarName=r,"_"==g.customVarName[0]&&(g.customVar=d.vars[g.customVarName],g.customVar&&(e[g.customVarName]=function(c){return function(){if(c.customVar.iframeTransportSignal){var d=f.expandStringSync(c.customVar.iframeTransportSignal,{IFRAME_TRANSPORT_SIGNAL:function(b,c){if(!b||!c)return"";var d=a.I[b];
if(d&&c in d)return d[c]}});if(c.customVar.iframeTransportSignal=="IFRAME_TRANSPORT_SIGNAL"+d)D().error("amp-ad-exit","Invalid IFRAME_TRANSPORT_SIGNAL format:"+d+" (perhaps there is a space after a comma?)");else if(""!=d)return d}return c.customVarName in b?b[c.customVarName]:c.customVar.defaultValue}}(g),k[g.customVarName]=!0,g={customVar:g.customVar,customVarName:g.customVarName}))}return function(a){return f.expandUrlSync(a,e,void 0,k)}}
function Y(a,b){return a.every(function(a){var c=a.filter(b);C().info("amp-ad-exit","Filter '"+a.name+"': "+(c?"pass":"fail"));return c})}
X.prototype.buildCallback=function(){var a=this;this.element.setAttribute("aria-hidden","true");this.m.push(P("minDelay",M(),this));this.m.push(P("carouselBtns",{type:"inactiveElement",selector:".amp-carousel-button"},this));var b=this.element.children;E(1==b.length,"The tag should contain exactly one <script> child.");b=b[0];E("SCRIPT"==b.tagName&&b.hasAttribute("type")&&"APPLICATION/JSON"==b.getAttribute("type").toUpperCase(),'The amp-ad-exit config should be inside a <script> tag with type="application/json"');
try{var c=ha(JSON.parse(b.textContent));if("[object Object]"===aa.call(c.options)&&"string"===typeof c.options.startTimingEvent){var d=c.options.startTimingEvent;this.m.splice(0,1,P("minDelay",M(c.options.startTimingEvent),this))}for(var e in c.filters){var f=c.filters[e];"clickDelay"==f.type&&(f.startTimingEvent=f.startTimingEvent||d);this.A[e]=P(e,f,this)}for(var k in c.targets){var g=c.targets[k];this.H[k]={finalUrl:g.finalUrl,trackingUrls:g.trackingUrls||[],vars:g.vars||{},filters:(g.filters||
[]).map(function(b){return a.A[b]}).filter(function(a){return a}),behaviors:g.behaviors||{}};for(var r in g.vars)if(g.vars[r].iframeTransportSignal){var p=g.vars[r].iframeTransportSignal.match(/IFRAME_TRANSPORT_SIGNAL\(([^,]+)/);if(p&&!(2>p.length)){var U=p[1],S=W(K(U)).origin;this.C[S]=this.C[S]||U}}}this.o.beacon=!1!==c.transport.beacon;this.o.image=!1!==c.transport.image}catch(T){throw this.user().error("amp-ad-exit","Invalid JSON config",T),T;}Z(this)};X.prototype.resumeCallback=function(){Z(this)};
X.prototype.unlayoutCallback=function(){this.w&&(this.w(),this.w=null);return AMP.BaseElement.prototype.unlayoutCallback.call(this)};
function Z(a){"inabox"!=A().runtime&&(a.j=a.j||ja(a.element,G(a.win)),a.j?a.w=ea(a.getAmpDoc().win,function(b){if(a.C[b.origin]){var c=b.data;if("string"==typeof c&&0==c.indexOf("amp-")&&-1!=c.indexOf("{")){var d=c.indexOf("{");try{var e=JSON.parse(c.substr(d))}catch(k){D().error("MESSAGING","Failed to parse message: "+c,k),e=null}}else e=null;var f=e;f&&"iframe-transport-response"==f.type&&(e=f,b=b.origin,E(e.message,"Received empty response from 3p analytics frame"),E(e.creativeId,"Received malformed message from 3p analytics frame: creativeId missing"),
E(e.vendor,"Received malformed message from 3p analytics frame: vendor missing"),c=W(K(e.vendor)),E(c&&c.origin==b,"Invalid origin for vendor "+(e.vendor+": "+b)),f.creativeId==a.j&&(a.I[f.vendor]=f.message))}}):C().warn("amp-ad-exit","No friendly parent amp-ad element was found for amp-ad-exit; not in inabox case."))}X.prototype.isLayoutSupported=function(){return!0};X.prototype.onLayoutMeasure=function(){for(var a in this.A)this.A[a].onLayoutMeasure()};
(function(a){a.registerElement("amp-ad-exit",X)})(self.AMP);
})});
//# sourceMappingURL=amp-ad-exit-0.1.js.map

