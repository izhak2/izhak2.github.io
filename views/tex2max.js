/*!
 * 
 * tex2max v1.3.0       Sat Sep 21 2019 18:12:40 GMT+0200 (Central European Summer Time)
 * by André Storhaug    andr3.storhaug@gmail.com
 * https://github.com/KQMATH/tex2max
 * 
 * Copyright: 2019 NTNU
 * License: GPL-3.0-or-later
 * 
 * Build: e48fe2d106b8a0a69493
 * 
 */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.tex2max=n():e.tex2max=n()}(window,function(){return function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=1)}([function(e,n,r){"use strict";var t={},o={onlySingleVariables:!1,handleEquation:!1,addTimesSign:!0,onlyGreekName:!1,onlyGreekSymbol:!1,debugging:!1};function a(){!function(e){for(var n=0,r=0;r<e.length;r++)if(!0===o[e[r]]&&n++,n>1)throw new Error('Only one of the options: "'+e.join('", "')+'" can be set to "true"')}(["onlyGreekName","onlyGreekSymbol"])}function i(e){t={},t=Object.assign(o,e),a()}function u(){return 0===Object.keys(t).length&&t.constructor===Object&&i(),Object.assign({},t)}var l=function(e){u().debugging&&console.debug(e)};var s={WHITESPACE:{name:"WHITESPACE",symbol:" ",regex:/^\s+/},BACKSLASH:{name:"BACKSLASH",symbol:"\\",regex:/^[\\\\]$/},AMPERSAND:{name:"AMPERSAND",symbol:"&",regex:/^[&]$/},OPENING_BRACE:{name:"OPENING_BRACE",symbol:"{",regex:/^[\{]$/},CLOSING_BRACE:{name:"CLOSING_BRACE",symbol:"}",regex:/^[\}]$/},OPENING_PARENTHESES:{name:"OPENING_PARENTHESES",symbol:"(",regex:/^[\(]$/},CLOSING_PARENTHESES:{name:"CLOSING_PARENTHESES",symbol:")",regex:/^[\)]$/},OPENING_BRACKET:{name:"BRACKET",symbol:"[",regex:/^[\[]$/},CLOSING_BRACKET:{name:"BRACKET",symbol:"]",regex:/^[\]]$/},VERTICAL_BAR:{name:"VERTICAL_BAR",symbol:"|",regex:/^[|]$/},NUMBER_LITERAL:{name:"NUMBER_LITERAL",symbol:null,regex:/^[0-9]+$/i},PERIOD:{name:"PERIOD",symbol:".",regex:/^[.]$/},STRING_LITERAL:{name:"STRING_LITERAL",symbol:null,regex:/^[a-zA-Zα-ωΑ-Ω]+$/i},OPERATOR:{name:"OPERATOR",symbol:null,regex:/^[+\-*\/=^_!]$/i}};var c=function e(n,r){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.value=r,this.type=n};var f=new Map([["begin",null],["end",null],["to",null],["cdot",null],["times",null],["ast",null],["div",null],["mod",null],["pm",null],["frac",null],["infty","inf"],["operatorname",null]]),v=[],p=new Map([["cdot",{type:"operator",operatorType:"infix",value:"*"}],["times",{type:"operator",operatorType:"infix",value:"*"}],["ast",{type:"operator",operatorType:"infix",value:"*"}],["div",{type:"operator",operatorType:"infix",value:"/"}],["mod",{type:"operator",operatorType:"infix",value:"%"}],["pm",{type:"operator",operatorType:"infix",value:"+-"}]]);function m(e){var n=!1;return void 0!==f.get(e)&&(n=!0),n}var y=new Map([["lg",null],["log",null],["ln",null],["sqrt",null],["max",null],["min",null],["sum",null],["lim",null],["int","integral"],["binom",null],["abs",null],["arccos","acos"],["arccosh","acosh"],["arccot","acot"],["arccoth","acoth"],["arccsc","acsc"],["arccsch","acsch"],["arcsec","asec"],["arcsech","asech"],["arcsin","asin"],["arcsinh","asinh"],["arctan","atan"],["arctanh","atanh"]]),d=[{name:"cos",inverse:"acos"},{name:"cosh",inverse:"acosh"},{name:"cot",inverse:"acot"},{name:"coth",inverse:"acoth"},{name:"csc",inverse:"acsc"},{name:"csch",inverse:"acsch"},{name:"sec",inverse:"asec"},{name:"sech",inverse:"asech"},{name:"sin",inverse:"asin"},{name:"sinh",inverse:"asinh"},{name:"tan",inverse:"atan"},{name:"tanh",inverse:"atanh"}];function g(e){var n;if(b(e))n=e;else if(null===(n=y.get(e)))n=e;else if(void 0===n)throw new Error("Not recognised function: "+n);return n}function b(e){var n=d.find(function(n){return n.name===e}),r=d.find(function(n){return n.inverse===e});return void 0!==n||void 0!==r}var h=["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","smallmatrix"],E={INTEGRATION_END:{name:"INTEGRATION_END",symbol:null,regex:/(d)[A-z]/,type:"integral_end"}},w=[{name:"alpha",symbol:"α"},{name:"beta",symbol:"β"},{name:"gamma",symbol:"γ"},{name:"delta",symbol:"δ"},{name:"epsilon",symbol:"ϵ"},{name:"zeta",symbol:"ζ"},{name:"eta",symbol:"η"},{name:"theta",symbol:"θ"},{name:"iota",symbol:"ι"},{name:"kappa",symbol:"κ"},{name:"lambda",symbol:"λ"},{name:"mu",symbol:"μ"},{name:"nu",symbol:"ν"},{name:"omicron",symbol:"ο"},{name:"pi",symbol:"π"},{name:"rho",symbol:"ρ"},{name:"sigma",symbol:"σ"},{name:"tau",symbol:"τ"},{name:"upsilon",symbol:"υ"},{name:"phi",symbol:"ϕ"},{name:"chi",symbol:"χ"},{name:"psi",symbol:"ψ"},{name:"omega",symbol:"ω"}];function A(e){return e.charAt(0).toUpperCase()+e.slice(1)}function S(e){return e.charAt(0).toUpperCase()===e.charAt(0)}function x(e){var n=w.find(function(n){return n.name===e.toLowerCase()});return void 0===n?null:(n=n.symbol,S(e)&&(n=A(n)),n)}function N(e){var n=w.find(function(n){return n.symbol===e.toLowerCase()});return void 0===n?null:(n=n.name,S(e)&&(n=A(n)),n)}function T(e){var n=w.find(function(n){return n.name===e.toLowerCase()}),r=w.find(function(n){return n.symbol===e.toLowerCase()});return void 0!==n||void 0!==r}var R=new Map([["left","right"],["right","left"]]);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e){return function(e){if(Array.isArray(e)){for(var n=0,r=new Array(e.length);n<e.length;n++)r[n]=e[n];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function I(e){var n=u();l("\n------------------ PARSING -> -------------------");var r=0,t=[];function o(e){var n;(n=e)&&"object"===L(n)&&n.constructor===Array?t.push.apply(t,O(e)):t.push(e)}function a(){return l("Consuming position: "+r),e[r++].value}function i(){return l("Skip token at position: "+r),e[r++].value}function c(){return e[r]?e[r].value:void 0}function f(){return e[r].type.symbol}function d(){return e[r+1]?e[r+1].type.name:null}function w(e){var n=t[t.length-e];return n?n.type:null}function A(){return l("- Single number"),{type:"number",value:a()}}function S(){l("Parsing number: "+e[r].value);var n,t=d(),o=(n=e[r-1])?n.value:null,a=w(1);return"^"!==o&&"_"!==o&&"function"!==a&&null!==t&&t===s.NUMBER_LITERAL.name?(l('- Found another number "'+e[r+1].value+'", continuing parsing'),{type:"number",value:A().value+F().value}):A()}function x(){l('- Found letter "'+c()+'"');var e="";return d()===s.STRING_LITERAL.name?(l(", Continuing parsing"),e=a()+x(s.STRING_LITERAL.name),l("Current word: "+e)):e=a(),l("Current sequence: "+e),e}function N(){l("Parsing variable: "+e[r].value);var t="",o=r;if(t=x(),l("Current word: "+t),function(e){var n=!1;for(var r in l("Checking "+e+" for reserved word"),E)E.hasOwnProperty(r)&&E[r].regex.test(e)&&(n=!0);return n}(t)){var i;l("Variable contains reserved words");var u=function(e){var n="",r="";for(var t in E)if(E.hasOwnProperty(t)){var o=E[t].regex;if(null!==e.match(o)){n=E[t].type,r=o.exec(e);break}}return{type:n,value:r}}(t).value;if(i=u[0].length,l("reserved word: "+u[0]+", length: "+i+", index "+u.index),u.index>0)if(r=o+u.index,t=t.substr(0,u.index),!0===n.onlySingleVariables&&!1===n.addTimesSign){if(t.length>1)throw new Error("The current options only allow for single variables")}else n.onlySingleVariables&&(r=o,t=a());else r=o+i,t=u[0]}else if(!0===n.onlySingleVariables&&!1===n.addTimesSign){if(t.length>1)throw new Error("The current options only allow for single variables")}else n.onlySingleVariables&&(r=o,t=a());return{type:"variable",value:t}}function I(){var e=function(e){var n="";switch(e){case s.OPENING_BRACE.symbol:case s.CLOSING_BRACE.symbol:n="curly";break;case s.OPENING_PARENTHESES.symbol:case s.CLOSING_PARENTHESES.symbol:n="normal";break;case s.OPENING_BRACKET.symbol:case s.CLOSING_BRACKET.symbol:n="square"}return n}(f());return{type:function(e){var n="";switch(e){case s.OPENING_BRACE.symbol:case s.OPENING_PARENTHESES.symbol:case s.OPENING_BRACKET.symbol:n="opening_bracket";break;case s.CLOSING_BRACE.symbol:case s.CLOSING_PARENTHESES.symbol:case s.CLOSING_BRACKET.symbol:n="closing_bracket"}return n}(f()),symbol:e,value:a()}}function k(e){var n=null,r=m(e),t=T(e);if(r)void 0===(n=p.get(e))&&(n={type:"token",value:e});else if(t)n={type:"token",value:e};else{if(!function(e){for(var n=!1,r=0;!n&&r<v.length;)e===v[r]&&(n=!0),r++;return n}(e))throw new Error("Encountered an unsupported macro: "+e);n=null}return n}function _(e){if(c()!==s.OPENING_BRACKET.symbol)throw new Error("No argument for environments are present.");i();var n=x();if(i(),function(e){var n=h.reduce(function(n,r){return n||r===e},!1);return l("Is acknowledged environment?: "+n),n}(n)){if("begin"===e||"end"===e)return{type:"environment",state:e,value:n};throw new Error("environment state "+e+" is not valid")}throw new Error("Environment type "+n+" is not supported")}function C(){l("Found backslash");var e=null;if(d()===s.BACKSLASH.name)return{type:"DOUBLE_BACKSLASH",value:a()+a()};if(r++,void 0===c())return null;if(function(e){var n=!1;return[" ","{","}","\\"].forEach(function(r){e===r&&(n=!0,l(e+" is special char"))}),n}(c()))return e=function(e){var n=null;switch(e){case" ":n=null;break;case"{":case"}":n=I();break;case"\\":n={type:"DOUBLE_BACKSLASH",value:a()+a()};break;default:return!1}return n}(c());var n,t,o=x();return"begin"===o?e=_("begin"):"end"===o?e=_("end"):"operatorname"===o?e=function(){var e;return i(),e=P(x()),i(),e}():(t=!1,b(n=o)?t=!0:void 0!==y.get(n)&&(t=!0),e=t?P(o):function(e){var n=!1;return void 0!==R.get(e)&&(n=!0),n}(o)?{type:"delimiter",value:o}:k(o)),e}function P(e){return{type:"function",value:g(e)}}function F(){var n=null;switch(e[r].type){case s.NUMBER_LITERAL:l('Found NUMBER_LITERAL "'+c()+'"'),n=S();break;case s.PERIOD:l('Found PERIOD"'+c()+'"'),n=function(){if(l("Parsing decimal number: "+c()),d(),"number"!==w(1))throw new Error("Leading decimal separators are not allowed");return{type:"decimal_separator",value:a()}}();break;case s.BACKSLASH:l('Found BACKSLASH "'+c()+'"'),n=C();break;case s.OPERATOR:l('Found OPERATOR "'+c()+'"'),n=function(){l("Found operator");var n=e[r];return/^[+\-*\/=^_]$/i.test(n.value)?{type:"operator",operatorType:"infix",value:a()}:/^[]$/i.test(n.value)?{type:"operator",operatorType:"prefix",value:a()}:/^[!]$/i.test(n.value)?{type:"operator",operatorType:"postfix",value:a()}:void 0}();break;case s.STRING_LITERAL:l('Found STRING_LITERAL "'+c()+'"'),n=N();break;case s.OPENING_BRACE:case s.CLOSING_BRACE:l('Found BRACKET "'+c()+'"'),n=I();break;case s.OPENING_PARENTHESES:case s.CLOSING_PARENTHESES:l('Found BRACKET "'+c()+'"'),n=I();break;case s.OPENING_BRACKET:case s.CLOSING_BRACKET:l('Found BRACKET "'+c()+'"'),n=I();break;case s.VERTICAL_BAR:l('Found VERTICAL_BAR "'+c()+'"'),n=function(){if("delimiter"!==w(1))throw new Error('Pipe symbols may only be used with "left" / "right" delimiters.');return{type:"vertical_bar",value:a()}}();break;default:r++}return n}return function(){for(var n=0;r<e.length;){l("--------- Parsing next token. While loop run: "+n+" ---------");var a=F();if(null!==a){if(void 0===a)throw r=e.length,new Error("node is undefined");if(o(a),l("Parsed result type: "+a.type),++n>1e3)throw new Error("Max count reached, infinite loop encountered.")}}return l("--------- End of while loop. Tokens position: "+(r-1)+" of "+(e.length-1)+" ---------"),t}()}function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e){l("Checking expression "+JSON.stringify(e)+" for variable");var n=!1;if(Array.isArray(e))for(var r=0;r<e.length;r++){if("group"===e[r].type)_(e[r].value)&&(n=!0);else"variable"===e[r].type&&(n=!0)}else n="variable"===e.type;return n}function C(e,n){var r="";r+=e+"("+n;for(var t=arguments.length,o=new Array(t>2?t-2:0),a=2;a<t;a++)o[a-2]=arguments[a];return o.forEach(function(e){!1!==e&&null!=e&&(r+=","+e)}),r+=")"}function P(e){return Array.isArray(e)?e:"object"===k(e)&&"string"!=typeof e?[e]:void 0}function F(e){var n=e.charAt(0),r=e.charAt(-1);return n.match(/[({\[]/)||r.match(/[)}\]]/)?e.substr(1,e.length-2):e}function G(e,n){if(void 0===e)throw new Error(n)}function B(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=0,o=null,a=null;return"group"===e[0].type&&1===e.length?t=1:function(){for(var i=0,u=!1;i<e.length&&!u;)null!=n&&n.forEach(function(n){e[i].type===n&&(t=i,u=!0,o="type",a=n)}),null==r||u||r.forEach(function(n){e[i].value===n&&(t=i,u=!0,o="value",a=n)}),i++;u||(t=e.length)}(),{expressionLength:t,condition:o,conditionValue:a}}function M(e){if(!_(e[0]))throw new Error('Limit: "From" argument must be a symbol');if(!function e(n,r,t,o){var a=!1,i=!1,u=[];if(Array.isArray(n))for(var l=0;l<n.length;l++)if("group"===n[l].type&&o){var s=void 0;"type"===r?i=(s=e(n[l].type,"type",t,!0)).isPresent:"value"===r&&(i=(s=e(n[l].value,"value",t,!0)).isPresent),i&&(u.push(s.position),a=!0)}else"type"===r?n[l].type===t&&(a=!0,u.push(l)):"value"===r&&n[l].value===t&&(a=!0,u.push(l));else"type"===r?n.type===t&&(a=!0,u=0):"value"===r?n.value===t&&(a=!0,u=null):a=!1;return{isPresent:a,position:u}}(e[1],"value","to",!1).isPresent)throw new Error('Limit: no "to" token provided');if(void 0===e[2])throw new Error('Limit: "To" argument missing');var n="";return{variable:e[0].value,value:n+=j(P(e.slice(2))),direction:function e(n){l("Checking if limit is one sided");var r=!1;var t="";var o="";for(var a=0;a<n.length;a++){if("group"===n[a].type){var i=e(n[a].value);!1!==i&&(r=!0,o=i)}("+"===n[a].value||"-"===n[a].value)&&a+1>=n.length&&(r=!0,t=n[a].value)}l(r?"- Limit is one-sided from the "+(o="+"===t?"plus":"minus")+" side":"- Limit is not one-sided");return!!r&&o}(e.slice(2))}}function j(e){l("\n------------------ TRANSPILING -> -------------------");var n=u(),r="",t=0;r+="(";for(var o=function(){var o=e[t];switch(o.type){case"operator":!function(){var n=e[t-1];if(0===t&&"+"===o.value)l("Structure starts with +, ignoring");else{if(0===t&&"prefix"!==o.operatorType&&"-"!==o.value)throw new Error("Operator "+o.value+" is not an prefix operator");if("+"===o.value||"-"===o.value)r+=o.value;else if("postfix"===o.operatorType){if("operator"===n.type)throw new Error("Operator "+o.value+" has to be an postfix operator");r+=o.value}else if("prefix"===o.operatorType);else if("infix"===o.operatorType){if("operator"===n.type||"operator"===n.type)throw new Error("Operator "+o.value+" has to be an infix operator");r+=o.value}}if(("infix"===o.operatorType||"prefix"===o.operatorType)&&t===e.length-1)throw new Error("Operator "+o.value+" is an invalid end character.")}();break;case"number":a(t,{type:"number"},{type:"operator",operatorType:"infix"}),r+=o.value;break;case"variable":!function(){var e="";if(a(t,{type:"operator",operatorType:"infix"}),null!==N(o.value)){var i=N(o.value);n.onlyGreekSymbol&&(i=x(i)),l("greek letter "+i),e+=i}else e+=o.value;r+=e}();break;case"group":!function(){var e="";a(t,{type:"function"},{type:"operator"}),e+=j(o.value),"vertical_bar"===o.symbol&&(e=F(e));r+=e}();break;case"token":!function(){l("Handling token: "+o.value);var i="",u=t;if(null!==x(o.value)){var s=o.value;n.onlyGreekSymbol&&(s=x(s)),l("greek letter "+s),i+=s}if(null!==N(o.value)){var c=o.value;n.onlyGreekName&&(c=N(c)),l("greek letter "+c),i+=c}if(m(o.value)){var v=f.get(o.value);null===v?l("Skipping macro "+o.value):void 0!==v&&(l("Adding macro "+v),i+=v)}if("frac"===o.value){if("group"!==e[t+1].type||"group"!==e[t+2].type)throw new Error("Fraction must have 2 following parameters");l("Found fraction"),i+="(",i+=j(e[t+1].value)+"/"+j(e[t+2].value),i+=")",t+=2}u>0&&""!==i&&(m(o.value)||T(o.value))&&a(u,{type:"operator"});r+=i}();break;case"function":!function(){a(t,{type:"operator"});e[t+1];if("sqrt"===o.value){if("group"!==e[t+1].type)throw new Error("Square root must be followed by [] or {}");var n="";if("square"===e[t+1].symbol&&"group"===e[t+2].type){l("Found function nth-square root");var i=j(e[t+1].value);n+=j(e[t+2].value),n+="^(1/"+i+")",t++}else r+=o.value,l("Found function square root"),n+=j(e[t+1].value);r+=n,t++}else"lim"===o.value?(l('Found function "limit"'),function(){var n="",o="";if("_"!==e[t+1].value||"group"!==e[t+2].type)throw new Error('Limit must have a "from" and "to" value');var a=e[t+2].value;if(a=M(a),void 0===e[t+3])throw new Error("Missing argument in limit");var i=B(e.slice(t+3),[],["+","-","+-"]),u=i.expressionLength;o+=j(e.slice(t+3,t+3+u)),t+=u-1,n=C("limit",o,a.variable,a.value,a.direction),t+=3;r+=n}()):"binom"===o.value?(l('Found function "binomial"'),function(){var n="",o="",a="",i=e[t+1].type,u=e[t+2].type;if("group"!==i||"group"!==u)throw new Error("Binomial must have 2 following groups");o+=j(e[t+1].value),a+=j(e[t+2].value);n+=C("binomial",o,a),r+=n,t+=2}()):"sum"===o.value?(l('Found function "sum"'),function(){var n,o,a="",i="",u="";if("_"!==e[t+1].value&&"^"!==e[t+1].value)throw new Error("Sum does not contain the correct number of arguments");var s=function(e){for(var n,r,t=0,o=0;o<2;o++)if("_"===e[t+o].value)n=e[++t+o];else{if("^"!==e[t+o].value)throw new Error("Finite integral must have both upper and lover limits");r=j(P(e[++t+o]))}return{lowerLimit:n,upperLimit:r}}(e.slice(t+1)),c=s.lowerLimit.value;o=s.upperLimit,t+=4,c=function(e){G(e[0],"Missing index");var n=e[0];G(e[1],"Index must be assigned. Missing equal sign");var r=e[1].value;if(!_(n))throw new Error("Index must be a variable");if("="!==r)throw new Error("Index must be assigned. Missing equal sign");var t="";return t+=j(P(e.slice(2))),{variable:n.value,value:t}}(c),u=c.variable,n=c.value,l("Sum: arguments are form "+n+" to "+o);if(void 0===e[t+1])throw new Error("Missing argument in sum");var f=B(e.slice(t+1),[],["+","-","+-"]),v=f.expressionLength;i+=j(e.slice(t+1,t+1+v)),t+=v;a+=C("sum",i,u,n,o),r+=a}()):"integral"===o.value?(l('Found function "integral"'),function(){var n,o,a,i="",u="",s="",c=!1;if(G(e[t+1],"Missing argument in integral"),"_"!==e[t+1].value&&"^"!==e[t+1].value)l("Integral is symbolic"),c=!0,t++;else{var f=e.slice(t+1,t+5),v=function(e){for(var n,r,t=0,o=0;o<2;o++)if("_"===e[t+o].value)n=j(P(e[++t+o]));else{if("^"!==e[t+o].value)throw new Error("Finite integral must have both upper and lower limits");r=j(P(e[++t+o]))}return{lowerLimit:n,upperLimit:r}}(f);n=v.lowerLimit,o=v.upperLimit,l("Integration limits are from "+n+" to "+o),t+=5}var p=function(e){l("Finding end of integral");for(var n=1,r="",t=0;t<e.length;t++){var o=e[t].value;if(l("-- Char:"+o),"function"===e[t].type&&"integral"===e[t].value)l("-- Found starting integral, depth "+ ++n);else if("variable"===e[t].type&&"d"===o[0]){var a=o.match(/(d)[A-z]/g);if(null!==a&&a.length>=1){if(1===n)return r=o.substring(1),l("-- Found end of original integral at position "+t),{length:t,variable:r};l("-- Found integral end, depth "+--n)}}}throw new Error("No end of integral located")}(e.slice(t));s+=p.variable,a=p.length;var m=e.slice(t,t+a);G(m[m.length-1],"Missing argument in integral"),"*"===m[m.length-1].value&&m.splice(-1,1);u+=j(m),t+=a,i+=c?C("integrate",u,s):C("integrate",u,s,n,o);r+=i}()):"abs"===o.value?(l('Found function "abs"'),u="",s=o.value,u+=s,u+=j(P(e[t+1])),t++,r+=u):b(o.value)?(l('Found trigonometric function "'+o.value+'"'),function(){var n,a="",i=!1,u=o.value;if(G(e[t+1],"Missing argument in function: "+u),"^"===e[t+1].value){if(i=!0,G(e[t+2],"Missing argument in function: "+u+"^"),n=F(n=j(P(e[t+2]))),"-1"===n.replace(/[()]/g,"")){l("Function is inverse"),i=!1;var s=function(e){var n;for(var r in l('Getting the inverse of the function "'+e+'"'),d)d[r].name===e?n=d[r].inverse:d[r].inverse===e&&(n=d[r].name);return void 0===n?null:(l("- Found the inverse: "+n),n)}(u);if(null===s)throw new Error("No inverse trigonometric function found for "+u);u=s}t+=2}a+=u,G(e[t+1],i?"Missing argument in function: "+u+"^"+j(P(e[t])):"Missing argument in function: "+u);if("group"===e[t+1].type)a+=j(e[t+1].value),t++;else if("function"===e[t+1].type){var c=B(e.slice(t+2),["function"],["+","-","+-"]),f=c.expressionLength;f+=1,a+=j(P(e.slice(t+1,t+1+f))),t+=f-1}else{var v=B(e.slice(t+1),["function"],["+","-","+-"]),p=v.expressionLength;a+=j(P(e.slice(t+1,t+1+p))),t+=p-1}i&&(a="("+a+")^"+n);t++,r+=a}()):(l('Found normal "function"'),function(){var n="",a=o.value;if(G(e[t+1],"Missing argument in function: "+a),n+=a,"group"===e[++t].type)n+=j(e[t].value),t++;else if("function"===e[t].type){var i=B(e.slice(t+1),["function"],["+","-","+-"]),u=i.expressionLength;u+=1,n+=j(P(e.slice(t,t+u))),t+=u-1}else{var l,s=e.slice(t);for(l=0;l<s.length&&("variable"===s[l].type||"number"===s[l].type);l++);var c=l;n+=j(P(e.slice(t,t+c))),t+=c-1}r+=n}());var u,s}();break;case"environment":!function(){if("begin"===o.state){a(t,{type:"operator"});var n="",i=function(e){for(var n=0,r=0;r<e.length;r++)if("environment"===e[r].type&&"begin"===e[r].state)l('-- Found new "begin" environment, depth '+ ++n);else if("environment"===e[r].type&&"end"===e[r].state){if(1===n)return l("-- Found original environment end at position "+r),r-1;l('-- Found environment "end", depth '+--n)}throw new Error('Environments "begin" and "end" doesn\'t match up')}(e.slice(t));"matrix"===o.value&&(l("Found matrix environment"),n+=function(e){var n="";n+="matrix(";for(var r=[],t=[],o=0;o<e.length;o++)G(e[o],"Missing argument in matrix"),"DOUBLE_BACKSLASH"===e[o].type?(r.push(t),t=[]):t.push(j(P(e[o])));r.push(t);for(var a=r[0].length,i=0;i<r.length;i++){if(r[i].length!==a)throw new Error("All rows in matrix must be the same length");0!==i&&(n+=","),n+="["+r[i].toString()+"]"}return n+=")"}(e.slice(t+1,t+1+i))),t+=i+1,r+=n}else"end"===o.state&&t++}()}function a(t){var a=e[t-1],i=!0;if(t>0){for(var u=arguments.length,s=new Array(u>1?u-1:0),c=1;c<u;c++)s[c-1]=arguments[c];s.forEach(function(e){var n=!0;for(var r in e)e.hasOwnProperty(r)&&a[r]!==e[r]&&(n=!1);!0===n&&(i=!1)}),n.addTimesSign&&i&&(l("Adding * before "+o.type+": "+o.value+", previous item: "+e[t-1].type),r+="*")}}};t<e.length;t++)o();if(/(\([ ]*\))/.test(r+=")"))throw new Error("Syntax error");if(""===r)throw new Error("EMPTY");return r}function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e){return function(e){if(Array.isArray(e)){for(var n=0,r=new Array(e.length);n<e.length;n++)r[n]=e[n];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function $(e){l("\n------------------ POST PARSING -> -------------------");u();for(var n=0,r=[];n<e.length;n++){e[n];l("--------- Parsing next token' ---------");var t=a();if(null!==t){if(void 0===t)throw n=e.length,new Error("node is undefined");i(t);var o="";s(t)?(t.forEach(function(e){o+=e.type+" + "}),o=o.substr(0,o.length-3)):o=t.type,l("Parsed result type(s): "+o+".")}}function a(){var r=null,t=c(),o=f();switch(e[n].type){case"delimiter":l('Found delimiter "'+o+'"'),r=function(){c();var r,t,o=f();switch(v(1)){case"vertical_bar":l('Found vertical_bar "'+o+'"'),a=g("abs"),r={type:"function",value:a}}var a;return t=function(){var r=f(),t=v(1),o=p(1),a=function(r,t,o){l("Finding matching symbols");var a,i=0,u=t,s=R.get(t),c=v(1),f=p(1),y=void 0===e[n+(a=1)]?null:e[n+a];if("opening_bracket"===c)return m(r,t,y.symbol);for(var d=0;d<r.length;d++){var g=r[d];if(c=r[d+1]?r[d+1].type:"",f=r[d+1]?r[d+1].value:"",l("-- Item:"+g.value),"delimiter"===g.type&&g.value===u&&f===o)l("-- Found starting point, depth "+ ++i);else if("delimiter"===g.type&&g.value===s&&f===o){if(1===i)return l("-- Found end of symbol group at position "+d),d;l("-- Found closing point, depth "+--i)}}throw new Error('"'+t+o+'" symbols does not match up')}(e.slice(n),r,o);if(a instanceof Error)return a;var i=e.slice(n+2,n+a);return l("New group created"),n+=a,{type:"group",symbol:t,value:$(i)}}(),[r,t].filter(function(e){return null!=e})}();break;case"opening_bracket":l('Found bracket "'+o+'"'),r=function(){var r=c().symbol,t=m(e.slice(n),null,r);if(t instanceof Error)return t;var o=e.slice(n+1,n+t);return l("New group created2"),n+=t,{type:"group",symbol:r,value:$(o)}}();break;case"number":l('Found number  "'+o+'"'),r=function(){var e;e="decimal_separator"===v(1)?function(){var e;if(function(){var e=0,n=!0,r=0;for(;n;)"decimal_separator"===v(e)?r++:"number"!==v(e)&&(n=!1),e++;return r}()>1)throw new Error("Only one decimal separator is allowed");if("number"!==v(2))throw new Error("Trailing decimal separator isn't allowed");l('- Found fractional part decimal part"'+f()+'", continuing parsing');var r=p(1);e=f()+r+p(2);return n+=2,{type:"number",value:e}}():c();return e}();break;default:r=t}return r}function i(e){s(e)?r.push.apply(r,H(e)):r.push(e)}function s(e){return e&&"object"===K(e)&&e.constructor===Array}function c(){return e[n]?e[n]:void 0}function f(){return e[n]?e[n].value:void 0}function v(r){return void 0===e[n+r]?null:e[n+r].type}function p(r){return void 0===e[n+r]?null:e[n+r].value}function m(e,n,r){l("Finding matching bracket");var t="",o="",a=n,i=R.get(n),u=(v(1),p(1));switch(r){case"normal":t="(",o=")";break;case"curly":t="{",o="}";break;case"square":t="[",o="]"}var s=0;if(n)for(var c=0;c<e.length;c++){var f=e[c];if(e[c+1]?e[c+1].type:"",u=e[c+1]?e[c+1].value:"",l("-- Char:"+f.value),"delimiter"===f.type&&f.value===a&&u===t)l("-- Found starting bracket, depth "+ ++s);else if("delimiter"===f.type&&f.value===i&&u===o){if(1===s)return l("-- Found original closing bracket at position "+c),c;l("-- Found closing bracket, depth "+--s)}}else for(var m=0;m<e.length;m++){var y=e[m];if(l("-- Char:"+y.value),y.value===t)l("-- Found starting bracket, depth "+ ++s);else if(y.value===o){if(1===s)return l("-- Found original closing bracket at position "+m),m;l("-- Found closing bracket, depth "+--s)}}throw new Error("Brackets do not match up")}return r}function q(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var V=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),i(n),this.options=u(),this.lastInput="",this.lastResult=""}var n,r,t;return n=e,(r=[{key:"getLastInput",value:function(){return this.lastInput()}},{key:"getLastResult",value:function(){return this.lastResult}},{key:"updateOptions",value:function(e){i(e),this.options=u()}},{key:"toMaxima",value:function(e){var n;i(this.options),this.lastInput=e;var r=function(e){var n=[];l("\n------------------ SCANNER -> -------------------");for(var r,t=0;t<e.length;){var o=!1;for(var a in s)s.hasOwnProperty(a)&&e[t].match(s[a].regex)&&(r=e[t],n.push(r),o=!0);if(!o)throw new Error("Encountered unsupported character: "+e[t]);t++}return n}(e);l(r);var t=function(e){var n=0,r=[],t=function(e){return r.push(e)},o=function(){return r};function a(e){if(void 0===e)return null;for(var n in s)if(s.hasOwnProperty(n)){var r=s[n],t=r.regex;if(e.match(t))return r}return null}return function(){for(l("\n------------------ LEXICAL ANALYSIS -> -------------------");n<e.length;){var r,i="",u=a(e[n]);l("Consuming position: "+n+", char: "+e[n]),i=e[n++],void 0!==(r=new c(u,i))&&t(r)}return o()}()}(r);l(t);var o=I(t);return l(o),this.structure=$(o),l(this.structure),n=F(j(this.structure)),this.options.handleEquation&&function(e){var n=0;if(e.forEach(function(e){"operator"===e.type&&"="===e.value&&n++}),1===n)return!0;if(n>1)throw new Error("Expression contains more than one equal signs");return!1}(this.structure)&&(n="solve("+n+")"),this.lastResult=n,n}}])&&q(n.prototype,r),t&&q(n,t),e}();n.a=V},function(e,n,r){"use strict";r.r(n),function(e){var n=r(0);e.exports=n.a}.call(this,r(2)(e))},function(e,n){e.exports=function(e){if(!e.webpackPolyfill){var n=Object.create(e);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}}])});