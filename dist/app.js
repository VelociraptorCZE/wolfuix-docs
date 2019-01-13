!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"exceptions",get:function(){var e="[WolfuixWarn]:";return{DOM_Exception:function(t){return e+" Invalid operation with the DOM: "+t+" is the invalid selector!"},onAttrGetFail:function(t){return e+" Cannot get attributes from the "+t.type+"\n\n"+t.ex},handlerException:function(t){return e+" Error occured while running a handler on "+t.e+"\n\n"+t.ex},nativeFunctionIsNotDefined:function(t){return e+" Cannot run this function or constructor, because "+t.target+" does not exist in your version of ES.\n\n"+t.ex}}}}]),e}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(4)),i=u(n(0));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=t,this.allow=Array.isArray(n)?n:[],this.inputs=this.__inputs,this.inputs instanceof NodeList&&0===this.inputs.length&&(this.inputs=[]),this.vals=[]}return r(e,[{key:"append",value:function(e,t){this.vals.push({name:e,value:t})}},{key:"deserialize",value:function(t){return e.deserialize(t)}},{key:"entries",value:function(){return this.formInputs().map(function(e){return[e.name,/radio|checkbox/.test(e.type)?e.checked:e.value]})}},{key:"formInputs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this,t=e.inputs,n=e.vals;return[].concat(a(t),a(n))}},{key:"keys",value:function(){return this.values(0)}},{key:"serialize",value:function(){return this.entries().map(function(e){return encodeURIComponent(e[0])+"="+encodeURIComponent(e[1])+"&"}).join("").slice(0,-1)}},{key:"toJSON",value:function(){return JSON.stringify(this.valuesAsObject())}},{key:"values",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.entries().map(function(t){return t[e]})}},{key:"valuesAsFormData",value:function(){var e={};try{e=new FormData,this.entries().forEach(function(t){e.append(t[0],t[1])})}catch(e){window.FormData||console.warn(i.default.exceptions.nativeFunctionIsNotDefined({target:"FormData",ex:e}))}return e}},{key:"valuesAsObject",value:function(){return this.entries().toObject()}},{key:"__inputs",get:function(){var e=this,t=["button","hidden","submit","radio","checkbox","reset"].filter(function(t){return!e.allow.includes(t)});return Array.from(o.default.getElem("#"+this.id+" input")).filter(function(e){return!t.includes(e.type)})}}],[{key:"deserialize",value:function(e){return e.split("&").map(function(e){return e.split("=").map(function(e){return decodeURIComponent(e)})})}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(4)),i=a(n(11)),u=a(n(12));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=o.default,this.elem=this.el.getElems(t),this.props=n instanceof Object?n:{},this.listeners=u.default,this._appendListener()}return r(e,[{key:"_appendListener",value:function(e){var t=this,n=e||this.elem;n instanceof Element&&this.listeners.forEach(function(e){n.addEventListener(e,function(n){i.default.handler(t,e,n)})})}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(6),n(9);var o=c(n(1)),i=c(n(10)),u=c(n(13)),a=c(n(14)),l=c(n(15));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"component",get:function(){return{get tabLayout(){return i.default},get listBox(){return u.default},get button(){return a.default}}}}],[{key:"formData",value:function(e,t){return new o.default(e,t)}},{key:"createElement",value:function(e,t,n,r){return l.default.createElement(e,t,n,r)}}]),e}();t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),a=(r=u)&&r.__esModule?r:{default:r};var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"getElems",value:function(t){var n=this,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if("object"===(void 0===t?"undefined":o(t)))Object.keys(t).forEach(function(i){if("object"===o(t[i]))Object.keys(t[i]).forEach(function(e){t[i][e]=n.getElems(t[i][e])});else{var u=t[i];t[i]=n.getElem(t[i]),e.throwException(t[i],u,r)}});else{var i=t;t=this.getElem(t),e.throwException(t,i,r)}return t}},{key:"getElem",value:function(e){return e instanceof Element?e:/[.#\[\]=,* ]/.test(e)?document.querySelectorAll(e):document.getElementById(e)}},{key:"throwException",value:function(e,t,n){(!e||e instanceof NodeList&&0===e.length)&&n&&console.warn(a.default.exceptions.DOM_Exception(t||e))}}]),e}();t.default=l},function(e,t,n){"use strict";var r=a(n(3)),o=a(n(16)),i=a(n(1)),u=a(n(18));function a(e){return e&&e.__esModule?e:{default:e}}var l=new r.default;new o.default,new u.default,new l.component.tabLayout([{toggle:"tab1-btn-counter",container:"tab1-container-counter"},{toggle:"tab1-btn-array_to_object",container:"tab1-container-array_to_object"},{toggle:"tab1-btn-form-data",container:"tab1-container-form-data"}],{classOnActive:"active"});var c=new l.component.button("add-btn");c.props={value:0,target:c.el.getElem("test-counter"),clickHandler:function(){c.props.value++,c.props.target.innerText=c.props.value}};var f=document.getElementById("form-data-test");f.onsubmit=function(e){return e.preventDefault()};var s=new l.component.button("form-data-submit");s.props={output:s.el.getElem("form-data-output"),clickHandler:function(){var e=new i.default(f.id),t=s.props.output;t.innerHTML=e.serialize()+"<br>",t.innerHTML+=e.toJSON()+"<br>",t.innerHTML+="["+e.values().map(function(e){return'"'+e+'"'})+"]"}}},function(e,t,n){"use strict";n(7),n(8)},function(e,t,n){"use strict";Object.entries||(Object.entries=function(e){return e instanceof Object?Object.keys(e).map(function(t){return[t,e[t]]}):[]}),Object.values||(Object.values=function(e){return Object.entries(e).map(function(e){return e[1]})})},function(e,t,n){"use strict";Array.from||(Array.from=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n]);return t}),Array.prototype.includes||(Array.prototype.includes=function(e){var t=this,n=t.map(function(e){return e.toString()}).indexOf("NaN"),r="string"!=typeof t[n],o="string"!=typeof e;return-1!==t.indexOf(e)||!!isNaN(e)&&(-1!==n&&r&&o)}),Array.prototype.fill||(Array.prototype.fill=function(e){for(var t=0;t<this.length;t++)this[t]=e;return this})},function(e,t,n){"use strict";Array.prototype.copy||(Array.prototype.copy=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return this.push.apply(this,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e.splice(t,n))),this}),Array.prototype.intersect||(Array.prototype.intersect=function(e){return this.filter(function(t){return e.includes(t)})}),Array.prototype.toObject||(Array.prototype.toObject=function(){var e={};return this.forEach(function(t){e[t[0]]=t[1]}),e})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),u=(r=i)&&r.__esModule?r:{default:r};var a=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.props.classOnActive||(r.props.classOnActive="active"),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default),o(t,[{key:"_appendListener",value:function(){var e=this,n=this.elem;n.forEach(function(n){n.toggle.addEventListener("click",function(){e.toggleContainer(n)}),function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var u=o.get;return void 0!==u?u.call(r):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_appendListener",e).call(e,n.toggle)}),this.toggleContainer(n[0])}},{key:"toggleContainer",value:function(e){var t=this.elem,n=this.props;t.forEach(function(e){e.container.style.display="none",e.toggle.classList.remove(n.classOnActive)}),e&&(e.container.style.display="block",e.toggle.classList.add(n.classOnActive))}}]),t}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),u=(r=i)&&r.__esModule?r:{default:r};var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,null,[{key:"handler",value:function(e,t,n){var r=void 0;if(e.props instanceof Object&&(r=e.props[t+"Handler"]),r)try{"function"==typeof r&&r(n)}catch(e){console.warn(u.default.exceptions.handlerException({e:n,ex:e}))}}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=["click","blur","focusin","focusout","mouseenter","mouseleave","mousemove","mouseover","mouseout","mouseup","keydown","keypress","keyup","change","input","submit","select"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),u=(r=i)&&r.__esModule?r:{default:r};var a=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r._activeElem=0,r.elem=r.elem.children,r.props.classOnActive=n.classOnActive?n.classOnActive:"active",r._appendListener(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default),o(t,[{key:"_appendListener",value:function(){for(var e=this,n=this.elem,r=function(r){n[r].addEventListener("click",function(t){e._activeElem=r,e.setActive(r)}),function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var u=o.get;return void 0!==u?u.call(r):void 0}(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"_appendListener",e).call(e,e.elem[r])},o=0;o<n.length;o++)r(o)}},{key:"setActive",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._activeElem,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,n=t.elem,r=t.props;this._activeElem=e;for(var o=0;o<n.length;o++)n[o].classList.remove(r.classOnActive);n[e].classList.add(r.classOnActive)}},{key:"value",get:function(){return this.elem[this._activeElem].innerText}}]),t}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),i=(r=o)&&r.__esModule?r:{default:r};var u=function(e){function t(e,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default),t}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),a=(r=u)&&r.__esModule?r:{default:r};var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"createElement",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=document.createElement(e);try{Object.keys(t).forEach(function(e){i.setAttribute(e,t[e])})}catch(e){console.warn(a.default.exceptions.onAttrGetFail({type:void 0===t?"undefined":o(t),ex:e}))}return Array.isArray(n)||n instanceof NodeList||(r=String(n),n=[]),i.innerHTML=r,n.forEach(function(e){i.appendChild(e)}),i}}]),e}();t.default=l,Node.prototype.insertAfter||(Node.prototype.insertAfter=function(e,t){this.insertBefore(e,t.nextSibling)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(17),u=(r=i)&&r.__esModule?r:{default:r};var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.snippetElems=Object.keys(u.default).map(function(e){return document.getElementById("code__"+e)}),this.snippets=Object.values(u.default),this.appendSnippets()}return o(e,[{key:"appendSnippets",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this,t=e.snippetElems,n=e.snippets,r=0;r<t.length;r++)t[r].innerText=n[r]}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={counter_app:'import Wolfuix from "wolfuix/Wolfuix";\n\nconst wolfuix = new Wolfuix();\n                \nconst button = new wolfuix.component.button("button-id");\n\nbutton.props = {\n    value: 0,\n    target: button.el.getElem("elem-to-print"),\n    clickHandler: () => {\n        button.props.value++;\n        button.props.target.innerText = button.props.value;\n    }\n};\n// Lower on this page this example is available',array_prototype_toObject:'const array = [\n    ["prop", 664],\n    ["anotherProp", "anotherValue"]\n];\n\nconst obj = array.toObject(); // returns {prop: 664, anotherProp: "anotherValue"}',form_data:'import WolfuixFormData from "wolfuix/js/lib/WolfuixFormData";\n\nconst formData = new WolfuixFormData(); // init the instance without any data\nformData.append("name", "value");\nformData.append("hours", 16);\n\nlet serialized = formData.serialize(); // name=value&hours=16\nlet data = formData.valuesAsFormData(); // returns the instance of FormData\nlet json = formData.toJSON(); // {"name":"value","hours":16}\nlet deserialized = formData.deserialize("name=%24value&surname=!%26%24content"); // [["name", "$value"], ["surname", "!&$content"]]\n\nconsole.log(serialized, data, json, deserialized);'};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(1)),i=a(n(3)),u=a(n(19));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wolfuix=new i.default,this.rnd=new u.default;var n=new this.wolfuix.component.button("deserialize-string-btn");n.props={deserialized:n.el.getElem("deserialized-string"),deserialize:n.el.getElem("deserialize-string"),clickHandler:function(){n.props.deserialize.value=t.generator();var e=o.default.deserialize(n.props.deserialize.value).map(function(e){return"["+e.map(function(e){return'"'+e+'"'})+"]"});n.props.deserialized.innerText="Array("+e.length+"): ["+e+"]"}}}return r(e,[{key:"getRandomValue",value:function(e,t,n){var r=this;return encodeURIComponent(Array(e).fill().map(function(e){return String.fromCharCode(r.rnd.next(t,n)).toLowerCase()}).join(""))}},{key:"generator",value:function(){for(var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this).rnd,t=[],n=e.next(2,4),r=0;r<n;r++){var o=this.getRandomValue(e.next(5,9),65,90),i=this.getRandomValue(e.next(3,7),50,126);t.push(o+"="+i+"&")}return t.join("").slice(0,-1).replace(/%5B|%5D/,String.fromCharCode(e.next(65,90)))}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"next",value:function(e,t){return Math.round(this.nextFloat(e,t))}},{key:"nextFloat",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._bounds.min,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._bounds.max;return Math.random()*(t-e)+e}},{key:"_bounds",get:function(){return{min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER}},set:function(e){console.warn("Bounds can't be rewritten!")}}]),e}();t.default=o}]);