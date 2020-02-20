!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("deck")):"function"==typeof define&&define.amd?define(["deck"],t):"object"==typeof exports?exports.deck=t(require("deck")):e.deck=t(e.deck)}(window,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){e.exports=r(6)},function(e,t,r){!function(e){"use strict";function t(e){if("next"===e.toLowerCase())return"next";var t=e&&e.match(/^(\d)\.(\d+)/);return t&&{major:parseInt(t[1],10),minor:parseInt(t[2],10)}}function r(e){return void 0===e&&(e="4.14"),"https://js.arcgis.com/"+e+"/"}function n(e){return!e||t(e)?function(e){void 0===e&&(e="4.14");var n=r(e),i=t(e);return"next"!==i&&3===i.major?n+(i.minor<=10?"js/":"")+"esri/css/esri.css":n+"esri/themes/light/main.css"}(e):e}function i(e,t){var r=n(e),i=function(e){return document.querySelector('link[href*="'+e+'"]')}(r);return i||function(e,t){if(t){var r=document.querySelector(t);r.parentNode.insertBefore(e,r)}else document.head.appendChild(e)}(i=function(e){var t=document.createElement("link");return t.rel="stylesheet",t.href=e,t}(r),t),i}var o={Promise:"undefined"!=typeof window?window.Promise:void 0},a={};function u(e,t,r){var n;r&&(n=function(e,t){var r=function(n){t(n.error||new Error("There was an error attempting to load "+e.src)),e.removeEventListener("error",r,!1)};return e.addEventListener("error",r,!1),r}(e,r));var i=function(){t(e),e.removeEventListener("load",i,!1),n&&e.removeEventListener("error",n,!1)};e.addEventListener("load",i,!1)}function c(e){void 0===e&&(e={}),a=e}function s(){return document.querySelector("script[data-esri-loader]")}function f(){var e=window.require;return e&&e.on}function d(e){void 0===e&&(e={});var t={};[a,e].forEach((function(e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}));var n=t.version,c=t.url||r(n);return new o.Promise((function(e,r){var o=s();if(o){var a=o.getAttribute("src");a!==c?r(new Error("The ArcGIS API for JavaScript is already loaded ("+a+").")):f()?e(o):u(o,e,r)}else if(f())r(new Error("The ArcGIS API for JavaScript is already loaded."));else{var d=t.css;d&&i(!0===d?n:d,t.insertCssBefore),t.dojoConfig&&(window.dojoConfig=t.dojoConfig),u(o=function(e){var t=document.createElement("script");return t.type="text/javascript",t.src=e,t.setAttribute("data-esri-loader","loading"),t}(c),(function(){o.setAttribute("data-esri-loader","loaded"),e(o)}),r),document.body.appendChild(o)}}))}function l(e){return new o.Promise((function(t,r){var n=window.require.on("error",r);window.require(e,(function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];n.remove(),t(e)}))}))}function h(e,t){if(void 0===t&&(t={}),f())return l(e);var r=s(),n=r&&r.getAttribute("src");return!t.url&&n&&(t.url=n),d(t).then((function(){return l(e)}))}var v={getScript:s,isLoaded:f,loadModules:h,loadScript:d,loadCss:i,setDefaultOptions:c,utils:o};e.getScript=s,e.isLoaded=f,e.loadModules=h,e.loadScript=d,e.loadCss=i,e.setDefaultOptions=c,e.utils=o,e.default=v,Object.defineProperty(e,"__esModule",{value:!0})}(t)},function(e,t,r){var n=r(7),i=r(8),o=r(9);e.exports=function(e,t){return n(e)||i(e,t)||o()}},function(e,t){function r(e,t,r,n,i,o,a){try{var u=e[o](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,i)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function u(e){r(a,i,o,u,c,"next",e)}function c(e){r(a,i,o,u,c,"throw",e)}u(void 0)}))}}},function(t,r){t.exports=e},function(e,t,r){var n=r(10),i=("undefined"==typeof window?global:window).deck||{};if(!i.Layer)throw new Error("@deck.gl/core is not found");e.exports=Object.assign(i,n)},function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(e,t,r,n){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),a=new L(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return S()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var u=g(a,r);if(u){if(u===s)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var f=c(e,t,r);if("normal"===f.type){if(n=r.done?"completed":"suspendedYield",f.arg===s)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(n="completed",r.method="throw",r.arg=f.arg)}}}(e,r,a),o}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var s={};function f(){}function d(){}function l(){}var h={};h[i]=function(){return this};var v=Object.getPrototypeOf,p=v&&v(v(k([])));p&&p!==t&&r.call(p,i)&&(h=p);var y=l.prototype=f.prototype=Object.create(h);function m(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function w(e){var t;this._invoke=function(n,i){function o(){return new Promise((function(t,o){!function t(n,i,o,a){var u=c(e[n],e,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then((function(e){t("next",e,o,a)}),(function(e){t("throw",e,o,a)})):Promise.resolve(f).then((function(e){s.value=e,o(s)}),(function(e){return t("throw",e,o,a)}))}a(u.arg)}(n,i,t,o)}))}return t=t?t.then(o,o):o()}}function g(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function k(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=y.constructor=l,l.constructor=d,l[a]=d.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},m(w.prototype),w.prototype[o]=function(){return this},e.AsyncIterator=w,e.async=function(t,r,n,i){var o=new w(u(t,r,n,i));return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},m(y),y[a]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),o=r(2),a=r.n(o),u=r(3),c=r.n(u);function s(e,t,r){return e.createSubclass({properties:{deckLayers:{type:t},effects:{},parameters:{}},constructor:function(){this.deckLayers=new t},createLayerView:function(e){return"2d"===e.type?new r({view:e,layer:this}):(console.error("ArcGISDeckLayer does not support SceneView at the moment. Use ArcGISDeckExternalRenderer instead."),null)}})}var f=r(4);function d(e){var t=e.createShader(35633);e.shaderSource(t,"\n  attribute vec2 a_pos;\n  varying vec2 v_texcoord;\n  void main(void) {\n      gl_Position = vec4(a_pos, 0.0, 1.0);\n      v_texcoord = (a_pos + 1.0) / 2.0;\n  }\n  "),e.compileShader(t);var r=e.createShader(35632);e.shaderSource(r,"\n  precision mediump float;\n  uniform sampler2D u_texture;\n  varying vec2 v_texcoord;\n  void main(void) {\n      vec4 rgba = texture2D(u_texture, v_texcoord);\n      rgba.rgb *= rgba.a;\n      gl_FragColor = rgba;\n  }\n  "),e.compileShader(r),this.program=e.createProgram(),e.attachShader(this.program,t),e.attachShader(this.program,r),e.linkProgram(this.program),e.deleteShader(t),e.deleteShader(r),this.uTexture=e.getUniformLocation(this.program,"u_texture"),this.vertexBuffer=e.createBuffer(),e.bindBuffer(34962,this.vertexBuffer),e.bufferData(34962,new Int8Array([-1,-1,1,-1,-1,1,1,1]),35044)}function l(e,t,r){this.deckFbo?this.fboWidth===t&&this.fboHeight===r||(this.destroyFramebuffer(e),this.createFramebuffer(e,t,r),this.deckgl.setProps({_framebuffer:this.deckFbo})):this.createFramebuffer(e,t,r)}function h(e,t,r){this.texture=e.createTexture(),e.bindTexture(3553,this.texture),this.fboWidth=t,this.fboHeight=r,e.texImage2D(3553,0,6408,this.fboWidth,this.fboHeight,0,6408,5121,new Uint8Array(this.fboWidth*this.fboHeight*4)),e.texParameteri(3553,10241,9728),e.texParameteri(3553,10240,9728),e.texParameteri(3553,10242,33071),e.texParameteri(3553,10243,33071),e.bindTexture(3553,null),this.deckFbo=e.createFramebuffer(),e.bindFramebuffer(36160,this.deckFbo),e.framebufferTexture2D(36160,36064,3553,this.texture,0),e.bindFramebuffer(36160,null)}function v(e){e.deleteFramebuffer(this.deckFbo),this.deckFbo=null,e.deleteTexture(this.texture),this.texture=null,this.fboWidth=null,this.fboHeight=null}function p(e){this.deckgl=new f.Deck({initialViewState:{},controller:!1,gl:e,_framebuffer:this.deckFbo})}function y(e){return e.createSubclass({properties:{handles:{},uTexture:{},vertexBuffer:{},indexBuffer:{},program:{},deckgl:{},fboWidth:{},fboHeight:{},texture:{},deckFbo:{}},initializeResources:d,createOrResizeFramebuffer:l,createFramebuffer:h,destroyFramebuffer:v,initializeDeckGL:p,attach:function(){var e=this,t=this.context;this.initializeResources(t);var r=window.devicePixelRatio;this.createFramebuffer(t,Math.round(this.view.state.size[0]*r),Math.round(this.view.state.size[1]*r)),this.initializeDeckGL(t),this.handles.add([this.layer.deckLayers.on("change",(function(){e.redraw()}))]),this.redraw()},redraw:function(){var e=this.layer.deckLayers.items;this.deckgl.setProps({layers:e.slice()}),this.requestRender()},detach:function(){this.handles.removeAll();var e=this.context;this.deckgl=null,this.deckFbo&&this.destroyFramebuffer(this.deckFbo),this.program&&(e.deleteProgram(this.program),this.program=null),this.vertexBuffer&&(e.deleteBuffer(this.vertexBuffer),this.vertexBuffer=null)},render:function(e){var t=e.context,r=t.getParameter(36006),n=window.devicePixelRatio;this.createOrResizeFramebuffer(t,Math.round(this.view.state.size[0]*n),Math.round(this.view.state.size[1]*n));var i=e.state;this.deckgl.setProps({viewState:{latitude:this.view.center.latitude,longitude:this.view.center.longitude,zoom:this.view.featuresTilingScheme.scaleToLevel(i.scale),bearing:-i.rotation,pitch:0}}),t.activeTexture(33984),t.bindTexture(3553,null),this.deckgl.redraw(!0),t.bindFramebuffer(36160,r),t.viewport(0,0,Math.round(this.view.state.size[0]*n),Math.round(this.view.state.size[1]*n)),t.bindBuffer(34962,this.vertexBuffer),t.vertexAttribPointer(0,2,5120,!1,2,0),t.bindBuffer(34962,null),t.useProgram(this.program),t.uniform1i(this.uTexture,0),t.activeTexture(33984),t.bindTexture(3553,this.texture),t.enable(3042),t.blendFunc(1,771),t.enableVertexAttribArray(0),t.drawArrays(5,0,4)}})}function m(e,t){function r(e,r){this.view=e,this.deckLayers=new t,this.deckLayers.addMany(r.deckLayers)}return r.prototype.initializeResources=d,r.prototype.createOrResizeFramebuffer=l,r.prototype.createFramebuffer=h,r.prototype.destroyFramebuffer=v,r.prototype.initializeDeckGL=p,r.prototype.setup=function(t){var r=this,n=t.gl;this.initializeResources(n);var i=window.devicePixelRatio;this.createFramebuffer(n,Math.round(this.view.size[0]*i),Math.round(this.view.size[1]*i)),this.initializeDeckGL(n),this.deckLayers.on("change",(function(){e.requestRender(r.view)}))},r.prototype.render=function(e){var t=e.gl,r=t.getParameter(36006),n=window.devicePixelRatio;this.createOrResizeFramebuffer(t,Math.round(this.view.size[0]*n),Math.round(this.view.size[1]*n)),this.deckgl.setProps({viewState:{latitude:this.view.center.latitude,longitude:this.view.center.longitude,zoom:this.view.zoom,bearing:this.view.camera.heading,pitch:this.view.camera.tilt,layers:this.deckLayers.items.slice()}}),t.activeTexture(33984),t.bindTexture(3553,null),this.deckgl.redraw(!0),t.bindFramebuffer(36160,r),t.viewport(0,0,Math.round(this.view.size[0]*n),Math.round(this.view.size[1]*n)),t.bindBuffer(34962,this.vertexBuffer),t.vertexAttribPointer(0,2,5120,!1,2,0),t.bindBuffer(34962,null),t.useProgram(this.program),t.uniform1i(this.uTexture,0),t.activeTexture(33984),t.bindTexture(3553,this.texture),t.enable(3042),t.blendFunc(1,771),t.enableVertexAttribArray(0),t.drawArrays(5,0,4)},r}var w=r(1);r.d(t,"arcGIS",(function(){return g})),r.d(t,"loadArcGISModules",(function(){return b})),r.d(t,"loadArcGISModule",(function(){return L}));var g={ArcGISDeckLayerView2D:void 0,ArcGISDeckLayer:void 0,ArcGISDeckExternalRenderer:void 0};function b(e,t){return x.apply(this,arguments)}function x(){return(x=c()(i.a.mark((function e(t,r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:return e.abrupt("return",Object(w.loadModules)(t,r).then((function(e){return e.unshift(g),e})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return e?new Promise((function(t){var r=e.layers.Layer,n=e.core.Collection,i=e.views["2d"].layers.BaseLayerViewGL2D,o=e.views["3d"].externalRenderers,a=y(i),u=s(r,n,a),c=m(o,n);g.ArcGISDeckLayerView2D=a,g.ArcGISDeckLayer=u,g.ArcGISDeckExternalRenderer=c,t(g)})):window.require&&window.require.on?new Promise((function(e){window.require(["esri/layers/Layer","esri/core/Collection","esri/views/2d/layers/BaseLayerViewGL2D","esri/views/3d/externalRenderers"],(function(t,r,n,i){var o=y(n),a=s(t,r,o),u=m(i,r);g.ArcGISDeckLayerView2D=o,g.ArcGISDeckLayer=a,g.ArcGISDeckExternalRenderer=u,e(g)}))})):Object(w.loadModules)(["esri/layers/Layer","esri/core/Collection","esri/views/2d/layers/BaseLayerViewGL2D","esri/views/3d/externalRenderers"]).then((function(e){var t=a()(e,4),r=t[0],n=t[1],i=t[2],o=t[3],u=y(i),c=s(r,n,u),f=m(o,n);return g.ArcGISDeckLayerView2D=u,g.ArcGISDeckLayer=c,g.ArcGISDeckExternalRenderer=f,g}))}}])}));