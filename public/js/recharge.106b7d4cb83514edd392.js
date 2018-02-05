/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_JSON@1.0.0@JSON/json2.js":
/***/ (function(module, exports) {

/*
    http://www.JSON.org/json2.js
    2011-02-23

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false, regexp: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

var JSON;
if (!JSON) {
    JSON = {};
}

(function () {
    "use strict";

    var global = Function('return this')()
      , JSON = global.JSON
      ;

    if (!JSON) {
      JSON = {};
    }

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                this.getUTCFullYear()     + '-' +
                f(this.getUTCMonth() + 1) + '-' +
                f(this.getUTCDate())      + 'T' +
                f(this.getUTCHours())     + ':' +
                f(this.getUTCMinutes())   + ':' +
                f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c :
                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' : gap ?
                '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
                '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }

    global.JSON = JSON;
    module.exports = JSON;
}());


/***/ }),

/***/ "./node_modules/_charenc@0.0.2@charenc/charenc.js":
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ "./node_modules/_crypt@0.0.2@crypt/crypt.js":
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ "./node_modules/_is-buffer@1.1.6@is-buffer/index.js":
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/_md5@2.2.1@md5/md5.js":
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__("./node_modules/_crypt@0.0.2@crypt/crypt.js"),
      utf8 = __webpack_require__("./node_modules/_charenc@0.0.2@charenc/charenc.js").utf8,
      isBuffer = __webpack_require__("./node_modules/_is-buffer@1.1.6@is-buffer/index.js"),
      bin = __webpack_require__("./node_modules/_charenc@0.0.2@charenc/charenc.js").bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ "./resources/assets/js/HomeMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_childLock__ = __webpack_require__("./resources/assets/js/app/childLock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_childMenu__ = __webpack_require__("./resources/assets/js/app/childMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_dialog__ = __webpack_require__("./resources/assets/js/app/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_loading__ = __webpack_require__("./resources/assets/js/app/loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_PageArgs__ = __webpack_require__("./resources/assets/js/app/PageArgs.js");








var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__toodo_keycodes__["b" /* getCodes */])();

function HomeMenu() {
    this.layout = document.createElement('div');
    document.body.appendChild(this.layout);
    this.layout.className = 'home-menu';
    this.layout.innerHTML = '<div id="menu-btn0" class="menu-btn"><img src=""></div>' + '<div id="menu-btn1" class="menu-btn"><img src=""></div>' + '<div id="menu-btn2" class="menu-btn"><img src=""></div>' + '<div id="menu-btn3" class="menu-btn"><img src=""></div>' + '<div id="menu-btn4" class="menu-btn"><img src=""></div>';
    this.items = [];
    for (var i = 0; i < 5; ++i) {
        var node = this.layout.querySelector('#menu-btn' + i);
        this.items.push(node);

        //setTimeout(function (i, node) {
        var img = node.querySelector('img');
        img.src = 'img/menu/nav_' + i + '_0.png';
        //}, 100 * i, i, node);
    }
}
HomeMenu.prototype = {
    /**
     * {int} current [0,3]
     */
    current: 0,
    onKeyDown: null,
    tdeUser: null,

    show: function show(current, onKeyDown, tdeUser) {
        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        this.tdeUser = tdeUser;
        var owner = this;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];
        node.className = focus ? 'menu-btn-focus' : 'menu-btn';
        var img = node.querySelector('img');
        if (focus) {
            img.src = 'img/menu/nav_' + current + '_1.png';
        } else {
            img.src = 'img/menu/nav_' + current + '_0.png';
        }
    },
    setSelected: function setSelected(current) {
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                if (owner.current > 0) {
                    owner.current--;
                    owner.setSelected(owner.current);
                }
                break;
            case keyCode.right:
                if (owner.current < 4) {
                    owner.current++;
                    owner.setSelected(owner.current);
                }
                break;
            case keyCode.ok:
                if (owner.current == 0) {
                    __WEBPACK_IMPORTED_MODULE_5__app_PageArgs__["b" /* appArgs */].onFirstPage();
                }
                if (owner.current == 1) {
                    __WEBPACK_IMPORTED_MODULE_5__app_PageArgs__["b" /* appArgs */].onHomePage();
                }
                if (owner.current == 3) {
                    if (owner.tdeUser) {
                        var oldLock = owner.tdeUser.childLock;
                        if (oldLock) {
                            __WEBPACK_IMPORTED_MODULE_1__app_childMenu__["a" /* childMenu */].show(function (btn) {
                                if (btn >= 0) {
                                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__app_childLock__["a" /* showChildLock */])(function (code, msg) {
                                        onValidLock(code, msg, owner, btn);
                                    }, 1, 0, '请输入旧的6位数字密码，按返回键关闭弹窗。');
                                } else {
                                    owner.show(owner.current, owner.onKeyDown, owner.tdeUser);
                                }
                            }, 2, 0, '选择需要的操作按确定键进行下一步，按返回键关闭弹窗。');
                        } else {
                            __WEBPACK_IMPORTED_MODULE_1__app_childMenu__["a" /* childMenu */].show(function (btn) {
                                //开启童锁
                                if (btn == 0) {
                                    resetChildLock(owner);
                                } else {
                                    owner.show(owner.current, owner.onKeyDown, owner.tdeUser);
                                }
                            }, 1, 0, '开启童锁后，每次付费订购需输入正确密码；按返回键关闭弹窗。');
                        }
                    }
                }
                if (owner.current == 4) {
                    __WEBPACK_IMPORTED_MODULE_5__app_PageArgs__["b" /* appArgs */].onTurntablePage();
                }
                break;
            case keyCode.esc:
                __WEBPACK_IMPORTED_MODULE_5__app_PageArgs__["b" /* appArgs */].onFirstPage();
                break;
        }

        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }
};

/**
 * @param code {int}
 * @param msg {string}
 * @param owner {HomeMenu}
 * @param btn {int} 0.关闭童锁 1.更改密码
 */
function onValidLock(code, msg, owner, btn) {
    if (code == 0) {
        var oldLock = owner.tdeUser.childLock;
        if (msg == oldLock) {
            if (btn == 0) {
                var stbcli = owner.tdeUser.stbcli;
                stbcli.tdeLock(oldLock, '', function (code, biz) {
                    var text = '童锁关闭成功';
                    onTdeLock(code, biz, owner, text);
                });
            } else {
                resetChildLock(owner);
            }
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_dialog__["a" /* showDialog */])(function (dlgBtn) {
                if (dlgBtn == 0) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__app_childLock__["a" /* showChildLock */])(function (code, msg) {
                        onValidLock(code, msg, owner, btn);
                    }, 1, 0, '请输入旧的6位数字密码，按返回键关闭弹窗。');
                } else {
                    owner.show(owner.current, owner.onKeyDown, owner.tdeUser);
                }
            }, 0, '提示', '童锁验证出错', '重试', '取消');
        }
    } else {
        owner.show(owner.current, owner.onKeyDown, owner.tdeUser);
    }
}

function resetChildLock(owner) {
    var oldLock = owner.tdeUser.childLock;
    var newLock;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__app_childLock__["a" /* showChildLock */])(function (code, msg) {
        if (code == 0) {
            newLock = msg;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__app_childLock__["a" /* showChildLock */])(function (code, msg) {
                if (code == 0) {
                    if (msg != newLock) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_dialog__["a" /* showDialog */])(function (btn) {
                            if (btn == 0) {
                                resetChildLock(owner);
                            } else {
                                owner.show(owner.current, owner.onKeyDown, owner.tdeUser);
                            }
                        }, 0, '提示', '两次输入不同', '重试', '取消');
                    } else {
                        var stbcli = owner.tdeUser.stbcli;
                        stbcli.tdeLock(oldLock, newLock, function (code, biz) {
                            var text = oldLock ? '童锁更改成功' : '童锁开启成功';
                            onTdeLock(code, biz, owner, text);
                        });
                    }
                } else {
                    owner.show(owner.current, owner.onKeyDown, owner.tdeUser);
                }
            }, 0, 1, '请再次输入新的6位数字密码，按返回键关闭弹窗。');
        } else {
            owner.show(owner.current, owner.onKeyDown, owner.tdeUser);
        }
    }, 0, 0, '请输入新的6位数字密码，按返回键关闭弹窗。');
}

function onTdeLock(code, biz, owner) {
    var text = arguments[3] ? arguments[3] : '童锁设置成功';
    if (code == 0) {
        owner.tdeUser.childLock = biz.childLock;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('提示', text);
    } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('提示' + '[' + code + ']', '网络异常' + '[' + biz + ']');
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["a" /* hideLoading */])(function () {
        owner.show(owner.current, owner.onKeyDown, owner.tdeUser);
    }, 2000);
}



/***/ }),

/***/ "./resources/assets/js/Java10Coin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return javaCoin; });
function Java10Coin() {}
Java10Coin.prototype = {
    coins: 0,
    show: function show(coins) {
        this.coins = coins;

        var layout = document.getElementById('java10-coin');
        if (!layout) {
            layout = document.createElement('div');
            layout.className = 'java10-coin';
            layout.id = 'java10-coin';
            layout.innerHTML = '<div class="coin-icon"></div>' + '<div class="coin-text">666666</div>';
            document.body.appendChild(layout);
        }

        var nodeText = layout.querySelector('.coin-text');
        nodeText.innerHTML = coins;
    }
};

var javaCoin = new Java10Coin();


/***/ }),

/***/ "./resources/assets/js/RechargePage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechargePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[264, 386], [264, 386], [264, 386], [264, 386]];
var images = ['10.png', '20.png', '50.png', '100.png'];

function RechargePage() {
    this.layout = document.getElementById('recharge-page');
    this.items = [];
    for (var i = 0; i < 4; ++i) {
        var node = this.layout.querySelector('#recharge-item' + i);
        this.items.push(node);

        setTimeout(function (i, node) {
            var img = node.querySelector('img');
            img.src = 'img/recharge/' + images[i];
        }, 100 * i, i, node);
    }
}
RechargePage.prototype = {
    /**
     * {int} current [0,3]
     */
    current: 3,
    onKeyDown: null,

    show: function show(current, onKeyDown) {
        this.setSelected(current);
        this.onKeyDown = onKeyDown;

        var owner = this;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];
        node.style.zIndex = focus ? 1 : 0;

        var size = itemSize[current];
        var div = node.querySelector('div');
        var img = node.querySelector('img');
        if (focus) {
            div.style.display = 'block';
            img.style.width = size[0] * 1.05 + 'px';
            img.style.height = size[1] * 1.05 + 'px';
            img.style.left = -size[0] * 0.025 + 'px';
            img.style.top = -size[1] * 0.025 + 'px';
        } else {
            div.style.display = 'none';
            img.style.width = size[0] + 'px';
            img.style.height = size[1] + 'px';
            img.style.left = 0 + 'px';
            img.style.top = 0 + 'px';
        }
    },
    setSelected: function setSelected(current) {
        this.current = current;
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 1:
                    case 2:
                    case 3:
                        owner.current--;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                    case 1:
                    case 2:
                        owner.current++;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }

        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }
};



/***/ }),

/***/ "./resources/assets/js/ShopBill.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shopBill; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_dialog__ = __webpack_require__("./resources/assets/js/app/dialog.js");



var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

// var callbackUrl = location.protocol + '//' + location.host + '/tdenter/callback.html';
var callbackUrl = "http://120.77.82.54/tdGameCenter/callback.html";
function ShopBill() {
    this.layout = document.createElement('div');
    document.body.appendChild(this.layout);
    this.layout.className = 'bill-btn';
    this.layout.innerHTML = '<div class="bill-btn-focus"></div>';

    this.items = [];
    var node = this.layout.querySelector('.bill-btn-focus');
    node.style.display = 'none';
    this.items.push(node);
}

ShopBill.prototype = {
    /**
     * {int} current [0,0]
     */
    current: 0,
    onKeyDown: null,
    tdeUser: null,

    show: function show(current, onKeyDown, tdeUser) {
        this.setSelected(current);
        this.onKeyDown = onKeyDown;
        this.tdeUser = tdeUser;
        var owner = this;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this._setFocus(this.current, false);
    },
    _setFocus: function _setFocus(current, focus) {
        var node = this.items[current];
        node.style.display = focus ? 'block' : 'none';
    },
    setSelected: function setSelected(current) {
        for (var i = 0; i < this.items.length; ++i) {
            this._setFocus(i, current == i);
        }
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.ok:
                if (bills) {
                    billTable.start(bills);
                    billTable.show(billTable.current, onTableKey);
                    break;
                }
                var stbcli = owner.tdeUser.stbcli;
                stbcli.bill(onBill);
                break;
        }

        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }
};

var pageSize = 5;
var itemSize = [75, 149, 224, 297, 374];
var itemsSizeLeft = [12, 25, 41, 54, 70];
function BillTable() {}
BillTable.prototype = {
    /**
     * {int} current [0,4]
     */
    current: 0,
    currentSize: 5,
    bills: [],
    page: 0,
    pageIndex: -1,
    onKeyDown: null,
    //getBill: function () {
    //    var index = this.pageIndex * pageSize;
    //    index += this.current;
    //    if (index < this.bills.length) {
    //        return this.bills[index];
    //    }
    //    return false;
    //},
    start: function start(bills) {
        var layout = document.getElementById('bill-layout');
        if (!layout) {
            layout = document.createElement('div');
            layout.className = 'bill-layout';
            layout.id = 'bill-layout';
            layout.innerHTML = '<div class="bill-bg">' + '    <div id="bill-select" class="bill-select">' + '      <div class="bill-outline"></div>' + '    </div>' + '    <div id="bill-line0" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name">跳舞毯民资很长长10个字呢</div><div class="bill-amount">98元</div></div>' + '    <div id="bill-line1" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name">跳舞毯民资很长长10个字呢</div><div class="bill-amount">98元</div></div>' + '    <div id="bill-line2" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name">跳舞毯民资很长长10个字呢</div><div class="bill-amount">98元</div></div>' + '    <div id="bill-line3" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name">跳舞毯民资很长长10个字呢</div><div class="bill-amount">98元</div></div>' + '    <div id="bill-line4" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name">跳舞毯民资很长长10个字呢</div><div class="bill-amount">98元</div></div>' + '    <div id="bill-line5" class="bill-line"><<< 第1页/共1页 >>></div>' + '</div>';
            document.body.appendChild(layout);
        }
        this.layout = layout;

        var bg = layout.querySelector('.bill-bg');
        this.selected = bg.querySelector('#bill-select');

        this.table = [];
        for (var i = 0; i < pageSize; ++i) {
            var tr = bg.querySelector('#bill-line' + i);
            this.table.push(tr);
        }
        this.titlePage = bg.querySelector('#bill-line5');

        this.bills = bills;
        this.showPage(0);
        this.hide();
    },
    showPage: function showPage(pageIndex) {
        var cnt = this.bills.length;
        var page = parseInt(cnt / pageSize);
        if (cnt > page * pageSize) {
            page++;
        }
        if (pageIndex >= page) {
            pageIndex = page - 1;
        }
        this.page = page;
        this.pageIndex = pageIndex;

        this.titlePage.innerHTML = '第' + (pageIndex + 1) + '页/共' + page + '页';
        ////创建圆点
        //for(var i=1;i<=page;i++){
        //    this.titlePage.innerHTML='<div class="bill-circle" id="bill-circle'+i+'"></div>';
        //}


        var cut0 = pageSize * pageIndex;
        this.currentSize = cnt - cut0 >= pageSize ? pageSize : cnt - cut0;
        var cut1 = this.currentSize + cut0;
        var cutInfos = this.bills.slice(cut0, cut1);
        this.showInfo(cutInfos);

        this.setSelected(0);
    },
    showInfo: function showInfo(infos) {
        var cnt = infos.length;
        this.table.forEach(function (row, index) {
            var tds = row.querySelectorAll('div');
            if (index >= cnt) {
                tds[0].innerHTML = '';
                tds[1].innerHTML = '';
                tds[2].innerHTML = '';
            } else {
                var info = infos[index];
                //setTimeout(function (tds, song) {
                tds[0].innerHTML = info.created_at;
                tds[1].innerHTML = info.subject;
                tds[2].innerHTML = parseInt(info.totalAmount / 100) + '元';
                //}, 100 * index, tds, song);
            }
        });
    },
    show: function show(current, onKeyDown) {
        this.layout.style.display = 'block';
        this.setSelected(current);
        this.onKeyDown = onKeyDown;

        var owner = this;
        document.onkeydown = function (e) {
            owner.handleKey(e);
        };
    },
    hide: function hide() {
        this.layout.style.display = 'none';
        this.selected.style.display = 'none';
    },
    setSelected: function setSelected(current) {
        this.current = current;
        this.selected.style.top = itemSize[current] + 'px';
        this.selected.style.left = itemsSizeLeft[current] + 'px';
        this.selected.style.display = 'block';
    },
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.up:
                if (owner.current > 0) {
                    owner.current--;
                    owner.setSelected(owner.current);
                } else if (owner.pageIndex > 0) {
                    owner.pageIndex--;
                    owner.showPage(owner.pageIndex);
                }
                break;
            case keyCode.down:
                if (owner.current < owner.currentSize - 1) {
                    owner.current++;
                    owner.setSelected(owner.current);
                } else if (owner.pageIndex < owner.page - 1) {
                    owner.pageIndex++;
                    owner.showPage(owner.pageIndex);
                }
                break;
            case keyCode.left:
                if (owner.pageIndex > 0) {
                    owner.pageIndex--;
                    owner.showPage(owner.pageIndex);
                }
                break;
            case keyCode.right:
                if (owner.pageIndex < owner.page - 1) {
                    owner.pageIndex++;
                    owner.showPage(owner.pageIndex);
                }
                break;
            case keyCode.ok:
                break;
        }
        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }
};

function onBill(code, biz) {
    if (code == 0) {
        if (biz && biz.length > 0) {
            bills = biz;
            billTable.start(bills);
            billTable.show(billTable.current, onTableKey);
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_dialog__["a" /* showDialog */])(function (btn) {
                shopBill.show(shopBill.current, shopBill.onKeyDown, shopBill.tdeUser);
            }, 0, '提示', '没有找到订单记录。', '确定', '返回');
        }
    } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_dialog__["a" /* showDialog */])(function (btn) {
            if (btn == 0) {
                var stbcli = shopBill.tdeUser.stbcli;
                stbcli.bill(onBill);
            } else {
                shopBill.show(shopBill.current, shopBill.onKeyDown, shopBill.tdeUser);
            }
        }, 0, '提示', '网络异常，没有找到订单记录。', '重试', '取消');
    }
}

function onTableKey(key) {
    switch (key) {
        case keyCode.back:
        case keyCode.num0:
            billTable.hide();
            shopBill.show(shopBill.current, shopBill.onKeyDown, shopBill.tdeUser);
            break;
    }
}

var shopBill = new ShopBill();
var billTable = new BillTable();
var bills;



/***/ }),

/***/ "./resources/assets/js/app/PageArgs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return shopArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return rechargeArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return callbackArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return turnTableArgs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_stbnull__ = __webpack_require__("./resources/assets/js/toodo/_stbnull.js");


function PageArgs(page) {
    this.prefix = page ? page + '.' : '';
}
PageArgs.prototype = {
    getValue: function getValue(k) {
        return __WEBPACK_IMPORTED_MODULE_0__toodo_stbnull__["a" /* stbNull */].getValue(this.prefix + k);
    },
    setValue: function setValue(k, v) {
        __WEBPACK_IMPORTED_MODULE_0__toodo_stbnull__["a" /* stbNull */].setValue(this.prefix + k, v);
    },
    getReturnUrl: function getReturnUrl() {
        return this.getValue('returnUrl');
    },
    setReturnUrl: function setReturnUrl(url) {
        this.setValue('returnUrl', url);
    },
    getRedirectUrl: function getRedirectUrl() {
        return this.getValue('redirectUrl');
    },
    setRedirectUrl: function setRedirectUrl(url) {
        this.setValue('redirectUrl', url);
    },
    setCallFlag: function setCallFlag(num) {
        this.setValue("callFlag", num);
    },
    getCallFlag: function getCallFlag() {
        return this.getValue("callFlag");
    },
    setSuccessCode: function setSuccessCode(successCode) {
        this.setValue("successCode", successCode);
    },
    getSuccessCode: function getSuccessCode() {
        return this.getValue("successCode");
    },
    setPrizeID: function setPrizeID(id) {
        this.setValue("PrizeID", id);
    },
    getPrizeID: function getPrizeID() {
        return this.getValue("PrizeID");
    },
    getTurntableUrl: function getTurntableUrl() {
        return this.getValue('TurntableUrl');
    },
    setTurntableUrl: function setTurntableUrl(url) {
        this.setValue('TurntableUrl', url);
    }
};

var shopArgs = new PageArgs('shop');
var rechargeArgs = new PageArgs('recharge');
var callbackArgs = new PageArgs('callback');
var turnTableArgs = new PageArgs('turntable');

var appArgs = new PageArgs('app');
appArgs.onFirstPage = function () {
    var firstUrl = appArgs.getRedirectUrl();
    if (firstUrl) {
        window.location.href = firstUrl;
    }
};

appArgs.onHomePage = function () {
    var homeUrl = appArgs.getReturnUrl();
    if (homeUrl) {
        window.location.href = homeUrl;
    }
};

appArgs.onTurntablePage = function () {
    var TurntableUrl = appArgs.getTurntableUrl();
    if (TurntableUrl) {
        window.location.href = TurntableUrl;
    }
};


/***/ }),

/***/ "./resources/assets/js/app/abc.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getJSON; });
/* unused harmony export baseUrl */
/* unused harmony export delayBackground */
function getJSON(url, cb) {
    var req = void 0;
    req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            var itemsArr = eval('[' + req.responseText + ']');
            cb(itemsArr[0]);
        }
    };
    req.send(null);
}

function baseUrl() {
    return location.protocol + '//' + location.host + '/tdenter';
}

function delayBackground(node, img, delay) {
    setTimeout(function () {
        node.style.backgroundImage = 'url(' + img + ')';
    }, delay);
}



/***/ }),

/***/ "./resources/assets/js/app/childLock.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showChildLock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");


/**
 * @param {function} callback
 * @param {int} callback.code 按键 0.输入完成 1.取消
 * @param {string} callback.msg 输入的字符串
 * @param title {int} 标题图片 0.设置铜锁 1.铜锁验证
 * @param label {int} 提示语 0.输入密码 1.再次输入
 */
function showChildLock(callback, title, label) {
    title = arguments[1] ? arguments[1] : 0;
    label = arguments[2] ? arguments[2] : 0;
    var tips = arguments[3] ? arguments[3] : '请输入6位数字密码，按返回键关闭弹窗。';

    var layoutId = 'lock-layout-003';
    var layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement('div');
        layout.className = 'lock-layout';
        layout.id = layoutId;
        layout.innerHTML = '' + '<div class="lock-bg">' + '  <div id="lock-title" class="lock-title-0"></div>' + '  <div class="lock-input">' + '    <div id="lock-label" class="lock-label-0"></div>' + '    <div id="lock-text" class="lock-text"></div>' + '  </div>' + '  <div id="lock-tips" class="lock-tips"></div>' + '</div>' + '<div class="lock-keyboard">' + '  <div class="lock-num-bg">' + '    <div id="lock-num-1" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>1</span></div></div>' + '    <div id="lock-num-2" class="lock-num"> <div class="lock-num-focus"></div>    <div class="lock-num-img"><span>2</span></div></div>' + '    <div id="lock-num-3" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>3</span></div></div>' + '    <div id="lock-num-4" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>4</span></div></div>' + '    <div id="lock-num-5" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>5</span></div></div>' + '    <div id="lock-num-6" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>6</span></div></div>' + '    <div id="lock-num-7" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>7</span></div></div>' + '    <div id="lock-num-8" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>8</span></div></div>' + '    <div id="lock-num-9" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"><span>9</span></div></div>' + '    <div id="lock-num-10" class="lock-num"> <div class="lock-num-focus"></div>     <div class="lock-num-img"></div></div>' + '    <div id="lock-num-0" class="lock-num"> <div class="lock-num-focus"></div> <div class="lock-num-img"><span>0</span></div></div>' + '    <div id="lock-num-11" class="lock-num">   <div class="lock-num-focus"></div>  <div class="lock-num-img"></div></div>' + '  </div>' + '</div>';
        document.body.appendChild(layout);
    }
    layout.style.display = "block";

    var lockText = document.getElementById("lock-text");
    var lockTitle = document.getElementById("lock-title");
    var lockLabel = document.getElementById('lock-label');
    var lockTips = document.getElementById('lock-tips');
    lockText.innerText = "";
    lockTitle.className = "lock-title-" + title;
    lockLabel.className = 'lock-label-' + label;
    lockTips.innerHTML = tips;

    var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
    var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();
    var itemNodes = [{ keyCode: keyCode.num1, id: "lock-num-1" }, { keyCode: keyCode.num2, id: "lock-num-2" }, { keyCode: keyCode.num3, id: "lock-num-3" }, { keyCode: keyCode.num4, id: "lock-num-4" }, { keyCode: keyCode.num5, id: "lock-num-5" }, { keyCode: keyCode.num6, id: "lock-num-6" }, { keyCode: keyCode.num7, id: "lock-num-7" }, { keyCode: keyCode.num8, id: "lock-num-8" }, { keyCode: keyCode.num9, id: "lock-num-9" }, { keyCode: keyCode.back, id: "lock-num-10" }, { keyCode: keyCode.num0, id: "lock-num-0" }, { keyCode: null, id: "lock-num-11" }];

    var inputText = '';
    var curIdx = 0;

    var setSelected = function setSelected(curIdx) {
        itemNodes.forEach(function (itemNode, index) {
            var node = document.getElementById(itemNode.id);
            // node.className = (index == curIdx ? 'lock-num-focus' : 'lock-num');
            node.querySelector('div').style.display = index == curIdx ? "block" : "none";
        });
    };
    var submit = function submit(code) {
        layout.style.display = "none";
        //document.body.removeChild(layout);
        document.onkeydown = null;
        if (typeof callback === 'function') callback(code, inputText);
    };
    var invisible = function invisible(text) {
        var star = '';
        for (var i = 0; i < text.length; ++i) {
            star += '*';
        }return star;
    };
    var clickNum = function clickNum(num) {
        inputText += String(num);
        lockText.innerText = invisible(inputText);
    };
    var backspace = function backspace() {
        inputText = inputText.substring(0, inputText.length - 1);
        lockText.innerText = invisible(inputText);
    };
    var handleOk = function handleOk() {
        var current = itemNodes[curIdx];
        if (current.keyCode == null) {
            backspace();
        } else {
            handleKey(current.keyCode);
        }
    };
    var handleKey = function handleKey(curKey) {
        switch (curKey) {
            case keyCode.left:
                if (curIdx % 3 != 0) {
                    curIdx--;
                }
                break;
            case keyCode.right:
                if (curIdx % 3 != 2) {
                    curIdx++;
                }
                break;
            case keyCode.up:
                if (curIdx > 2) {
                    curIdx -= 3;
                }
                break;
            case keyCode.down:
                if (curIdx < 9) {
                    curIdx += 3;
                }
                break;
            case keyCode.ok:
                handleOk();
                break;
            case keyCode.back:
                submit(1);
                break;
            case keyCode.num1:
            case keyCode.num2:
            case keyCode.num3:
            case keyCode.num4:
            case keyCode.num5:
            case keyCode.num6:
            case keyCode.num7:
            case keyCode.num8:
            case keyCode.num9:
            case keyCode.num0:
                var num = curKey - keyCode.num0;
                clickNum(num);
                break;
            default:
                break;
        }
    };

    setSelected(0);
    document.onkeydown = function (e) {
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();

        handleKey(curKey);
        setSelected(curIdx);

        if (inputText.length == 6) {
            submit(0);
        }
    };
}



/***/ }),

/***/ "./resources/assets/js/app/childMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return childMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");


function ChildMenu() {}
ChildMenu.prototype = {
    /**
     * @param callback {function}
     * @param callback.btn {int} 0.按钮1 1.按钮2 -1.取消操作
     * @param cnt {int} [1,2] 按钮数量
     * @param btn {int} [0,1] 默认选中
     * @param text {string} 提示文本
     */
    show: function show(callback, cnt, btn, text) {
        var layoutId = 'lock-menu-layout';
        var layout = document.getElementById(layoutId);
        if (!layout) {
            layout = document.createElement('div');
            layout.className = 'lock-layout';
            layout.id = layoutId;
            layout.innerHTML = '<div class="lock-menu-bg">' + '    <div id="lock-title" class="lock-title-0"></div>' + '    <div id="lock-btn0" class="lock-btn"><span>开启童锁</span></div>' + '    <div id="lock-btn1" class="lock-btn"><span>关闭童锁</span></div>' + '    <div id="lock-btn2" class="lock-btn"><span>更改密码</span></div>' + '    <div class="lock-tips">选择需要的操作按确定键进行下一步，按返回键关闭弹窗。</div>' + '</div>';
            document.body.appendChild(layout);
        }
        layout.style.display = 'block';

        var bg = layout.querySelector('.lock-menu-bg');
        var btnNodes = bg.querySelectorAll('.lock-btn');
        for (var i = 0; i < btnNodes.length; ++i) {
            var btnNode = btnNodes[i];
            btnNode.style.display = 'none';
        }

        var btnNode0, btnNode1;
        if (cnt == 1) {
            btnNode0 = btnNodes[0];
        } else {
            cnt = 2;
            btnNode0 = btnNodes[1];
            btnNode1 = btnNodes[2];
        }
        if (btnNode0) btnNode0.style.display = 'block';
        if (btnNode1) btnNode1.style.display = 'block';

        var tipNode = bg.querySelector('.lock-tips');
        tipNode.innerHTML = text;

        function focusBtn(btnIdx) {
            var focusNode;
            if (cnt == 1) {
                btnNode0.className = "lock-btn lock-btn-focus";
                // focusNode = btnNode0.querySelector('.lock-btn-focus');
                // focusNode.style.display = 'block';
            } else {
                if (btnIdx == 0) {
                    btnNode0.className = "lock-btn lock-btn-focus";
                    btnNode1.className = "lock-btn";
                    // focusNode = btnNode0.querySelector('.lock-btn-focus');
                    // focusNode.style.display = 'block';
                    // focusNode = btnNode1.querySelector('.lock-btn-focus');
                    // focusNode.style.display = 'none';
                } else {
                    btnNode0.className = "lock-btn";
                    btnNode1.className = "lock-btn lock-btn-focus";
                    // focusNode = btnNode0.querySelector('.lock-btn-focus');
                    // focusNode.style.display = 'none';
                    // focusNode = btnNode1.querySelector('.lock-btn-focus');
                    // focusNode.style.display = 'block';
                }
            }
            btn = btnIdx;
        }

        if (btn < 0 || btn > 1) btn = 0;
        focusBtn(btn);

        var submit = false;
        var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
        var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();
        document.onkeydown = function (e) {
            e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
            var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
            if (preCodes.indexOf(curKey) != -1) e.preventDefault();

            switch (curKey) {
                case keyCode.up:
                    focusBtn(0);
                    break;
                case keyCode.down:
                    focusBtn(cnt - 1);
                    break;
                case keyCode.ok:
                    //确定
                    submit = true;
                    break;
                case keyCode.back:
                case keyCode.num0:
                    //取消
                    btn = -1;
                    submit = true;
                    break;
            }
            if (submit) {
                layout.style.display = "none";

                document.onkeydown = null;
                if (typeof callback === 'function') callback(btn);
            }
        };
    }
};

var childMenu = new ChildMenu();


/***/ }),

/***/ "./resources/assets/js/app/dialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");


/**
 * @param {function} callback
 * @param {int} callback.btn 按键 0.确定 1.取消
 * @param {number} btn 默认焦点 0.确定 1.取消
 * @param {string} title 窗口标题
 * @param {string} text 窗口内容
 * @param {string} btn0 按钮1
 * @param {string} btn1 按钮2
 */
function showDialog() /*callback, btn, title, text, btn0, btn1*/{
    var layoutId = 'dialog-layout-001';
    var callback = void 0,
        btn = void 0,
        title = void 0,
        text = void 0,
        btn0 = void 0,
        btn1 = void 0;
    callback = arguments[0] ? arguments[0] : null;
    btn = arguments[1] ? arguments[1] : 0;
    title = arguments[2] ? arguments[2] : '提示';
    text = arguments[3] ? arguments[3] : '';
    btn0 = arguments[4] ? arguments[4] : '确定';
    btn1 = arguments[5] ? arguments[5] : '返回';
    var align = arguments[6] ? arguments[6] : 'center';

    var layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement("div");
        layout.className = 'dialog-layout';
        layout.id = layoutId;
        layout.innerHTML = '<div class="dialog-bg">' + '    <div class="dialog-title"></div>' + '    <div class="dialog-text"></div>' + '    <div id="dialog-btn0" style="left: 12%;top: 73%" class="dialog-btn dialog-btn0"></div>' + '    <div id="dialog-btn1" style="left: 57%;top: 73%" class="dialog-btn dialog-btn1"></div>' + '</div>';
        document.body.appendChild(layout);
    }
    layout.style.display = "block";

    var background = layout.querySelector('.dialog-bg');
    background.style.display = "block";

    var nodeTitle = background.querySelector('.dialog-title');
    nodeTitle.innerHTML = title;
    var nodeText = background.querySelector('.dialog-text');
    nodeText.innerHTML = text;
    nodeText.style.textAlign = align;

    var nodeBtn0 = background.querySelector('#dialog-btn0');
    nodeBtn0.innerHTML = btn0 + '<div></div>';
    var nodeBtn1 = background.querySelector('#dialog-btn1');
    nodeBtn1.innerHTML = btn1 + '<div></div>';

    var btn_006 = nodeBtn0.querySelector("div");
    var btn_006none = nodeBtn1.querySelector("div");

    var focusBtn = function focusBtn(btnIdx) {
        if (btnIdx == 0) {
            nodeBtn0.className = " " + "dialogBtn_1 dialog-Btn_focus";
            nodeBtn1.className = " " + "dialogBtn_0";
        }
        if (btnIdx == 1) {

            nodeBtn0.className = " " + "dialogBtn_0";
            nodeBtn1.className = " " + "dialogBtn_1 dialog-Btn_focus";
        }
        btn = btnIdx;
    };

    if (btn < 0 || btn > 1) btn = 0;
    focusBtn(btn);

    var submit = false;
    var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
    var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();
    document.onkeydown = function (e) {
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();

        switch (curKey) {
            case keyCode.left:
                focusBtn(0);
                break;
            case keyCode.right:
                focusBtn(1);
                break;
            case keyCode.ok:
                //确定
                submit = true;
                break;
            case keyCode.back:
            case keyCode.num0:
                //取消
                btn = 1;
                submit = true;
                break;
        }
        if (submit) {
            layout.style.display = "none";
            background.style.display = "none";

            document.onkeydown = null;
            if (typeof callback === 'function') callback(btn);
        }
    };
}



/***/ }),

/***/ "./resources/assets/js/app/loading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hideLoading; });
var loadTime = new Date().getTime();
var showTime = 1318;
var layoutId = 'loading-layout-002';

function showLoading() {
    loadTime = new Date().getTime();

    var title = arguments[0] ? arguments[0] : '提示';
    var text = arguments[1] ? arguments[1] : '正在加载，请稍候...';

    var layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement("div");
        layout.className = 'dialog-layout';
        layout.id = layoutId;
        layout.innerHTML = '<div class="dialog-bg">' + '    <div class="dialog-title"></div>' + '    <div class="dialog-text"></div>' + '</div>';
        document.body.appendChild(layout);
    }
    layout.style.display = "block";

    var nodeBg = layout.querySelector('.dialog-bg');
    nodeBg.style.display = "block";

    var nodeTitle = nodeBg.querySelector('.dialog-title');
    nodeTitle.innerHTML = title;
    var nodeText = nodeBg.querySelector('.dialog-text');
    nodeText.innerHTML = text;

    document.onkeydown = null;
}

function hideLoading(callback) {
    var delayTime = arguments[1] ? arguments[1] : showTime;
    var time = new Date().getTime();
    time = delayTime + loadTime - time;
    if (time < 0) time = 0;

    setTimeout(function () {
        var layout = document.getElementById(layoutId);
        if (layout) {
            layout.style.display = 'none';
            var background = layout.querySelector('.dialog-bg');
            background.style.display = "none";
        }
        if (typeof callback === 'function') callback();
    }, time);
}



/***/ }),

/***/ "./resources/assets/js/recharge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_stbcli__ = __webpack_require__("./resources/assets/js/toodo/_stbcli.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_loading__ = __webpack_require__("./resources/assets/js/app/loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_dialog__ = __webpack_require__("./resources/assets/js/app/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_abc__ = __webpack_require__("./resources/assets/js/app/abc.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HomeMenu__ = __webpack_require__("./resources/assets/js/HomeMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RechargePage__ = __webpack_require__("./resources/assets/js/RechargePage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Java10Coin__ = __webpack_require__("./resources/assets/js/Java10Coin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__ = __webpack_require__("./resources/assets/js/app/PageArgs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ShopBill__ = __webpack_require__("./resources/assets/js/ShopBill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_childLock__ = __webpack_require__("./resources/assets/js/app/childLock.js");













var stbcli = new __WEBPACK_IMPORTED_MODULE_0__toodo_stbcli__["a" /* StbClient */]();
var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toodo_keycodes__["a" /* getKeyCodes */])();

// var callbackUrl = location.protocol + '//' + location.host + '/tdenter/callback.html';
var callbackUrl = "http://120.77.82.54/tdGameCenter/callback.html";

function onStart(code, biz) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["a" /* hideLoading */])(function () {
        if (code != 0) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_dialog__["a" /* showDialog */])(function (btn) {
                if (btn == 0) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])('自动登陆', '小双在使劲加载，请稍候...');
                    stbcli.start(onStart);
                } else {
                    rechargePage.show(rechargePage.current, onPageKey);
                }
            }, 1, '提示', '没有找到用户信息哦！', '重试', '取消');
        } else {
            tdeUser = biz;
            __WEBPACK_IMPORTED_MODULE_7__Java10Coin__["a" /* javaCoin */].show(biz.coins);
            rechargePage.show(rechargePage.current, onPageKey);
        }
    });
}

/**
 * @param code
 * @param biz
 * @param biz.category
 * @param biz.productId
 * @param biz.price
 * @param biz.goodsName
 */
function onQueryProduct1(code, biz) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["a" /* hideLoading */])(function () {
        var itemInfo = itemInfos[rechargePage.current];
        if (code == 0 && biz && biz.productId == itemInfo.prodId) {
            var text = '';
            if (biz.category == 0) {
                text = '您将花费' + biz.price / 100 + '元/月订购' + biz.goodsName;
            } else {
                text = '您将花费' + biz.price / 100 + '元购买' + biz.goodsName;
            }

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_dialog__["a" /* showDialog */])(function (btn) {
                if (btn == 0) {
                    if (tdeUser.childLock) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__app_childLock__["a" /* showChildLock */])(function (code, msg) {
                            onValidLock(code, msg, rechargePage, itemInfo);
                        }, 1, 0);
                    } else {
                        sendOrder(itemInfo);
                    }
                } else {
                    rechargePage.show(rechargePage.current, onPageKey);
                }
            }, 0, '订购信息', text, '确认', '取消');
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_dialog__["a" /* showDialog */])(function (btn) {
                if (btn == 0) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])('提示', '正在加载，请稍候...');
                    stbcli.queryProduct1(itemInfo.prodId, onQueryProduct1);
                } else {
                    rechargePage.show(rechargePage.current, onPageKey);
                }
            }, 0, '提示', '没有找到产品信息哦！', '重试', '取消');
        }
    });
}

function onOrder1(code, biz) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["a" /* hideLoading */])(function () {
        var itemInfo = itemInfos[rechargePage.current];
        if (code == 0 && biz) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])('提示', '正在处理，请稍候...');
            __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["c" /* callbackArgs */].setRedirectUrl(window.location.href);
            __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["c" /* callbackArgs */].setReturnUrl(window.location.href);
            stbcli.pay(biz.tradeNo);
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_dialog__["a" /* showDialog */])(function (btn) {
                if (btn == 0) {
                    sendOrder(itemInfo);
                } else {
                    rechargePage.show(rechargePage.current, onPageKey);
                }
            }, 0, '订单提示', '小双服务开小差啦，请稍后重试。', '重试', '返回');
        }
    });
}

function onMenuKey(key) {
    switch (key) {
        case keyCode.num0:
        case keyCode.back:
            window.location.href = __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["e" /* rechargeArgs */].getReturnUrl();
            break;
        case keyCode.esc:
            __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["b" /* appArgs */].onFirstPage();
            break;
        case keyCode.down:
            homeMenu.hide();
            rechargePage.show(rechargePage.current, onPageKey);
            break;
        case keyCode.ok:
            if (homeMenu.current == 2) {
                window.location.href = __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["e" /* rechargeArgs */].getReturnUrl();
            }
            break;
    }
}

function onPageKey(key) {
    switch (key) {
        case keyCode.num0:
        case keyCode.back:
            window.location.href = __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["e" /* rechargeArgs */].getReturnUrl();
            break;
        case keyCode.esc:
            __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["b" /* appArgs */].onFirstPage();
            break;
        case keyCode.ok:
            //未登录
            if (!stbcli.isReady) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])('自动登陆', '小双在使劲加载，请稍候...');
                stbcli.start(onStart);
                break;
            }
            var itemInfo = itemInfos[rechargePage.current];
            //未开通
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])('提示', '正在加载，请稍候...');
            stbcli.queryProduct1(itemInfo.prodId, onQueryProduct1);
            break;
        case keyCode.up:
            rechargePage.hide();
            homeMenu.show(homeMenu.current, onMenuKey, tdeUser);
            break;
        case keyCode.down:
            rechargePage.hide();
            __WEBPACK_IMPORTED_MODULE_9__ShopBill__["a" /* shopBill */].show(__WEBPACK_IMPORTED_MODULE_9__ShopBill__["a" /* shopBill */].current, onBillKey, tdeUser);
            break;
    }
}

function onBillKey(key) {
    switch (key) {
        case keyCode.num0:
        case keyCode.back:
            window.location.href = __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["e" /* rechargeArgs */].getReturnUrl();
            break;
        case keyCode.esc:
            __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["b" /* appArgs */].onFirstPage();
            break;
        case keyCode.up:
            __WEBPACK_IMPORTED_MODULE_9__ShopBill__["a" /* shopBill */].hide();
            rechargePage.show(rechargePage.current, onPageKey);
            break;
    }
}

/**
 * @param code {int}
 * @param msg {string}
 * @param owner {HomeMenu}
 * @param itemInfo {Object}
 */
function onValidLock(code, msg, owner, itemInfo) {
    if (code == 0) {
        var oldLock = tdeUser.childLock;
        if (msg == oldLock) {
            sendOrder(itemInfo);
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_dialog__["a" /* showDialog */])(function (btn) {
                if (btn == 0) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__app_childLock__["a" /* showChildLock */])(function (code, msg) {
                        onValidLock(code, msg, owner, itemInfo);
                    }, 1, 0);
                } else {
                    owner.show(owner.current, onPageKey);
                }
            }, 0, '提示', '童锁验证出错', '重试', '取消');
        }
    } else {
        owner.show(owner.current, onPageKey);
    }
}

function sendOrder(itemInfo) {
    var data = {
        "id": itemInfo.id,
        "gameId": itemInfo.gameId,
        "productId": itemInfo.productId,
        "prodId": itemInfo.prodId,
        "trial": itemInfo.trial
    };
    var args = JSON.stringify(data);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])('提示', '正在处理，请稍候...');
    stbcli.order1(itemInfo.prodId, callbackUrl, args, onOrder1);
}

var homeMenu;
var rechargePage;
var itemInfos = [];
var tdeUser;

window.onload = function () {
    homeMenu = new __WEBPACK_IMPORTED_MODULE_5__HomeMenu__["a" /* HomeMenu */]();
    rechargePage = new __WEBPACK_IMPORTED_MODULE_6__RechargePage__["a" /* RechargePage */]();
    rechargePage.show(rechargePage.current, onPageKey);

    //showLoading('提示', '正在加载，请稍候...');
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_abc__["a" /* getJSON */])("data/tde_recharge_infos.json", function (data) {
        for (var i = 0; i < data.length; i++) {
            itemInfos.push(data[i]);
        }

        setTimeout(function () {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])();
            stbcli.start(onStart);
        }, 100);
    });
};

/***/ }),

/***/ "./resources/assets/js/toodo/_keycodes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getKeyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCodes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__retail__ = __webpack_require__("./resources/assets/js/toodo/_retail.js");


function getKeyCodes() {
    var keyMap = {};

    if (__WEBPACK_IMPORTED_MODULE_0__retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__retail__["b" /* retail */].gxgd) {
        keyMap = { // 广西广电
            up: 38, // 上
            down: 40, // 下
            left: 37, // 左
            right: 39, // 右
            ok: 13, // 确定
            f1: 400, // f1 //红
            f2: 401, // f2 //蓝
            f3: 403, // f3 //黄
            f4: 402, // f4 //绿
            num1: 49, // 数字1
            num2: 50, // 数字2
            num3: 51, // 数字3
            num4: 52, // 数字4
            num5: 53, // 数字5
            num6: 54, // 数字6
            num7: 55, // 数字7
            num8: 56, // 数字8
            num9: 57, // 数字9
            num0: 48, // 数字0
            mute: 518, // 静音
            back: 399, // 返回
            track: 406, // 声道？ //声道键
            volUp: 517, // 增大音量
            volDown: 516, // 减小音量
            fav: 404, // 喜欢
            playBack: 521, // 回放  //点播键
            pageUp: 33, // 上一页
            pageDown: 34, // 下一页
            menu: 515, // 菜单
            esc: 514, //退出
            home: 520
        };
    } else if (__WEBPACK_IMPORTED_MODULE_0__retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__retail__["b" /* retail */].hnyx) {
        //keyMap = { // 河南有线 linux
        //    up: 65362,
        //    down: 65364,
        //    left: 65361,
        //    right: 65363,
        //    ok: 65293,
        //    f1: 32,
        //    f2: 33,
        //    f3: 34,
        //    f4: 35,
        //    num1: 49,
        //    num2: 50,
        //    num3: 51,
        //    num4: 52,
        //    num5: 53,
        //    num6: 54,
        //    num7: 55,
        //    num8: 56,
        //    num9: 57,
        //    num0: 48,
        //    mute: 63563,
        //    back: 65367,
        //    track: 65307,
        //    volUp: 63561,
        //    volDown: 63562,
        //    fav: 36,
        //    playBack: 72,
        //    pageUp: 25,
        //    pageDown: 26,
        //    menu: 65360,
        //    esc: 27,
        //    home: 65360
        //};
        keyMap = { // 河南有线 android
            up: 38, // 上
            down: 40, // 下
            left: 37, // 左
            right: 39, // 右
            ok: 13, // 确定
            f1: 112, // f1
            f2: 113, // f2
            f3: 114, // f3
            f4: 115, // f4
            num1: 49, // 数字1
            num2: 50, // 数字2
            num3: 51, // 数字3
            num4: 52, // 数字4
            num5: 53, // 数字5
            num6: 54, // 数字6
            num7: 55, // 数字7
            num8: 56, // 数字8
            num9: 57, // 数字9
            num0: 48, // 数字0 //数字0 返回
            mute: 77, // 静音
            back: 8, // 返回
            track: 82, // 声道？
            volUp: 190, // 增大音量
            volDown: 188, // 减小音量
            fav: 84, // 喜欢
            playBack: 80, // 回放
            pageUp: 33, // 上一页
            pageDown: 34, // 下一页
            menu: 72, // 菜单
            esc: 27,
            home: 72
        };
    } else if (__WEBPACK_IMPORTED_MODULE_0__retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__retail__["b" /* retail */].gdgd) {
        keyMap = { // 广东广电
            up: 87, // 上 W键
            down: 83, // 下 S键
            left: 65, // 左 A键
            right: 68, // 右 D键
            ok: 13, // 确定
            f1: 400, // f1 //红
            f2: 401, // f2 //蓝
            f3: 402, // f3 //黄
            f4: 403, // f4 //绿
            num1: 49, // 数字1
            num2: 50, // 数字2
            num3: 51, // 数字3
            num4: 52, // 数字4
            num5: 53, // 数字5
            num6: 54, // 数字6
            num7: 55, // 数字7
            num8: 56, // 数字8
            num9: 57, // 数字9
            num0: 48, // 数字0
            mute: 67, // 静音
            back: 8, // 返回
            track: 86, // 声道？ //声道键
            volUp: 61, // 增大音量
            volDown: 45, // 减小音量
            fav: 76, // 喜欢
            playBack: 521, // 回放  //点播键
            pageUp: 306, // 上一页
            pageDown: 307, // 下一页
            menu: 72, // 菜单
            esc: 27,
            home: 72
        };
    } else {
        // windows 键码
        keyMap = {
            up: 38, // 上
            down: 40, // 下
            left: 37, // 左
            right: 39, // 右
            ok: 13, // 确定
            f1: 112, // f1
            f2: 113, // f2
            f3: 114, // f3
            f4: 115, // f4
            num1: 49, // 数字1
            num2: 50, // 数字2
            num3: 51, // 数字3
            num4: 52, // 数字4
            num5: 53, // 数字5
            num6: 54, // 数字6
            num7: 55, // 数字7
            num8: 56, // 数字8
            num9: 57, // 数字9
            num0: 48, // 数字0 //数字0 返回
            mute: 77, // 静音
            back: 8, // 返回
            track: 82, // 声道？
            volUp: 190, // 增大音量
            volDown: 188, // 减小音量
            fav: 84, // 喜欢
            playBack: 80, // 回放
            pageUp: 33, // 上一页
            pageDown: 34, // 下一页
            menu: 72, // 菜单
            esc: 27,
            home: 72
        };
    }
    return keyMap;
}

function getEvent(evt) {
    return evt || window.event;
}

function getKey(evt) {
    //支持IE、FF
    evt = getEvent(evt);
    return evt.keyCode || evt.which || evt.charCode;
}

function getCodes() {
    var keyMap = getKeyCodes();
    var codes = [];
    for (var code in keyMap) {
        if (keyMap.hasOwnProperty(code)) {
            codes.push(keyMap[code]);
        }
    }
    return codes;
}



/***/ }),

/***/ "./resources/assets/js/toodo/_retail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return retail; });
/* unused harmony export getRetailId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return retailId; });
var retail = {
    gxgd: '96335',
    hnyx: '96266',
    gdgd: '96956',
    none: '1000'
};

function getRetailId() {
    try {
        //广西广电
        if (guangxi && iPanel) {
            return retail.gxgd;
        }
    } catch (e) {}
    try {
        //河南有线
        var System = window.System;
        if (System && System.stbID) {
            return retail.hnyx;
        }
    } catch (e) {}
    try {
        //广东广电
        if (CA && StorageService && FileSystem) {
            return retail.gdgd;
        }
        //var storageList = StorageService.getStorageInfos();
        //if (storageList && storageList != 'undefined') {
        //    var partitionPathList = storageList[0].getPartitionsInfo()[0];
        //    var partitionPath = partitionPathList.path;
        //    var dir = FileSystem.getDirectory(partitionPath);
        //    var flist = dir.fileList;
        //
        //    for (var i in flist) {
        //        if (flist[i].name.substring(0, 6) == "cacard") {
        //            var cardNo = "96956" + flist[i].name.substring(6, 12);
        //        }
        //    }
        //}
    } catch (e) {}
    return retail.none;
}

var retailId = getRetailId();


/***/ }),

/***/ "./resources/assets/js/toodo/_stbcli.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StbClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return stbcli; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tdcli__ = __webpack_require__("./resources/assets/js/toodo/_tdcli.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__retail__ = __webpack_require__("./resources/assets/js/toodo/_retail.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stbnull__ = __webpack_require__("./resources/assets/js/toodo/_stbnull.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };




var _md = __webpack_require__("./node_modules/_md5@2.2.1@md5/md5.js");
var JSON = __webpack_require__("./node_modules/_JSON@1.0.0@JSON/json2.js");

function StbClient() {
    // this.originUrl = location.protocol + '//' + location.host + '/tdsrv';
    this.originUrl = "http://localhost/ToodoService/public/";
    this.appKey = '1000';
    this.appSecret = 'RcOFhtAYzwCGo91PGHdV';
    this._tdcli = null;
}
StbClient.prototype = {
    isReady: false,
    userId: '',
    token: '',

    md5: function md5(msg) {
        return _md(msg + this.appSecret);
    },
    /**
     * @param {function} callback
     * @param {number} callback.code
     * @param {string|Object} callback.biz
     */
    start: function start(callback) {

        if (!this._tdcli) {
            this._tdcli = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["a" /* ToodoClient */](this.appKey, this.appSecret, this.originUrl);
        }

        var token = __WEBPACK_IMPORTED_MODULE_2__stbnull__["a" /* stbNull */].getValue('toodo.token');
        var userId = __WEBPACK_IMPORTED_MODULE_2__stbnull__["a" /* stbNull */].getValue('toodo.userId');
        // if (token && userId) {
        //     this.token = token;
        //     this.userId = userId;
        //     this.isReady = true;
        //     if (callback) callback(0);
        //     return;
        // }

        var bizIn = {
            'retailId': __WEBPACK_IMPORTED_MODULE_1__retail__["a" /* retailId */],
            'regionCode': __WEBPACK_IMPORTED_MODULE_2__stbnull__["a" /* stbNull */].getRegionCode(),
            'cardTV': __WEBPACK_IMPORTED_MODULE_2__stbnull__["a" /* stbNull */].getCardTV()
        };

        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/user';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);

        var owner = this;
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo');
        this._tdcli.send(bodyIn, function (bodyOut) {
            if (bodyOut.code == 0) {
                var bizOut = JSON.parse(bodyOut.bizContent);
                owner.userId = bizOut.userId;
                owner.token = bodyOut.token;
                __WEBPACK_IMPORTED_MODULE_2__stbnull__["a" /* stbNull */].setValue('toodo.userId', owner.userId);
                __WEBPACK_IMPORTED_MODULE_2__stbnull__["a" /* stbNull */].setValue('toodo.token', owner.token);
                owner.isReady = true;

                //owner.tdeUser(callback);//返回大厅的账号信息
                owner.tdeUser(function (code, biz) {
                    if (code == 0) {
                        biz.bizUser = bizOut.bizUser;
                    }
                    if (callback) callback(code, biz);
                });
            } else {
                if (callback) callback(bodyOut.code, bodyOut.subCode);
            }
        });
    },
    bizUser: function bizUser(bizIn, callback) {
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/bizUser';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo');
        this.send(bodyIn, callback);
    },
    addWinner: function addWinner(prizeID, state, callback) {
        var bizIn = {
            'prizeID': prizeID,
            'state': state
        };
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tde/addWinner';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tde');
        this.send(bodyIn, callback);
    },
    addState: function addState() {
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tde/addState';
        bodyIn.appAuthToken = this.token;
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tde');
        this.send(bodyIn);
    },
    updataFreeState: function updataFreeState() {
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tde/updataFreeState';
        bodyIn.appAuthToken = this.token;
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tde');
        this.send(bodyIn);
    },
    getPrize: function getPrize(id, callback) {
        var bizIn = {
            'id': id
        };
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tde/getPrize';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tde');
        this.send(bodyIn, callback);
    },
    turntableState: function turntableState(callback) {
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tde/turntableState';
        bodyIn.appAuthToken = this.token;
        // bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tde');
        this.send(bodyIn, callback);
    },
    turntablePro: function turntablePro(type, callback) {
        var bizIn = {
            'type': type
        };
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tde/turntablePro';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tde');
        this.send(bodyIn, callback);
    },
    prizeNum: function prizeNum(callback) {
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tde/turntablePrizeNum';
        bodyIn.appAuthToken = this.token;
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tde');
        this.send(bodyIn, callback);
    },

    winnerInfo: function winnerInfo(num, callback) {
        var bizIn = {
            'num': num
        };
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tde/winnerInfo';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tde');
        this.send(bodyIn, callback);
    },
    /**
     * @param {number} type 1：未领取 2:已领取 3：已过期
     * @param {function} callback
     */
    userWinner: function userWinner(type, callback) {
        var bizIn = {
            'type': type
        };
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tde/userWinner';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tde');
        this.send(bodyIn, callback);
    },
    addCoins: function addCoins(addNum) {
        var bizIn = {
            'addNun': addNum
        };
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tde/addCoin';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tde');
        this.send(bodyIn);
    },
    /**
     * @param {number} productId 查询的产品统一编号
     * @param {function} callback
     * @param {number} callback.code
     * @param {string|Object} callback.biz
     */
    queryServe1: function queryServe1(productId, callback) {
        var bizIn = {
            'productId': productId
        };
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/serve/query1';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/serve');
        this.send(bodyIn, callback);
    },
    /**
     * @param {number} productId 查询的产品统一编号
     * @param {function} callback
     * @param {number} callback.code
     * @param {Object} callback.biz
     */
    queryProduct1: function queryProduct1(productId, callback) {
        var bizIn = {
            'productId': productId
        };
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/market/query1';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/market');
        this.send(bodyIn, callback);
    },
    /**
     * @param {number} productId 生成订单的产品统一编号
     * @param {string} callbackUrl 支付后回调地址
     * @param {string} data 原样传回给callbackUrl
     * @param {function} callback
     * @param {number} callback.code
     * @param {Object} callback.biz
     */
    order1: function order1(productId, callbackUrl, data, callback) {
        var bizIn = {
            'productId': productId,
            'userId': this.userId,
            'callbackUrl': callbackUrl,
            'data': data
        };
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/trade/order1';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/trade');
        this.send(bodyIn, callback);
    },
    /**
     * @param {string} tradeNo 请求支付订单号
     */
    pay: function pay(tradeNo) {
        var bizIn = {
            'tradeNo': tradeNo
        };
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/trade/pay';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/trade');
        this._tdcli.submit(bodyIn);
    },
    bill: function bill(callback) {
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/trade/bill';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = '';
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/trade');
        this.send(bodyIn, callback);
    },
    /**
     * @param {function} callback
     * @param {number} callback.code 返回码
     * @param {Object} callback.biz 返回账号信息
     */
    tdeUser: function tdeUser(callback) {
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tde/user';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = '';
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tde');
        this.send(bodyIn, callback);
    },
    tdeLock: function tdeLock(oldLock, newLock, callback) {
        var bizIn = {
            'childLock': oldLock,
            'newLock': newLock
        };
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tde/lock';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tde');
        this.send(bodyIn, callback);
    },
    /**
     * @param {number} page 页面编号
     * @param {function} callback
     * @param {number} callback.code 返回码
     * @param {Object} callback.biz 返回页面信息
     */
    tdePage: function tdePage(page, callback) {
        var bizIn = {
            'page': page
        };
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tde/page';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tde');
        this.send(bodyIn, callback);
    },
    /**
     * @param {number} category 歌曲分类
     * @param {function} callback
     * @param {number} callback.code 返回码
     * @param {Object} callback.biz 返回页面信息
     */
    tdaSong: function tdaSong(category, callback) {
        var bizIn = {
            'category': category
        };
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tda/song';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tda');
        this.send(bodyIn, callback);
    },
    tdaSong1: function tdaSong1(songId, callback) {
        var bizIn = {
            'songId': songId
        };
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tda/song1';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(bizIn);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tda');
        this.send(bodyIn, callback);
    },
    /**
     * @param {function} callback
     * @param {number} callback.code 返回码
     * @param {Object} callback.biz 返回页面信息
     */
    tdaMatch: function tdaMatch(callback) {
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tda/match';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = '';
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tda');
        this.send(bodyIn, callback);
    },
    /**
     * @param {function} callback
     * @param {number} callback.code 返回码
     * @param {Object} callback.biz 返回页面信息
     */
    tdaUser: function tdaUser(callback) {
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tda/user';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = '';
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tda');
        this.send(bodyIn, callback);
    },
    /**
     * @param {Object} record 记录
     * @param {function} callback
     * @param {number} callback.code 返回码
     * @param {Object} callback.biz 返回页面信息
     */
    tdaRecord: function tdaRecord(record, callback) {
        var bodyIn = new __WEBPACK_IMPORTED_MODULE_0__tdcli__["b" /* RequestBody */]();
        bodyIn.method = '/toodo/tda/record';
        bodyIn.appAuthToken = this.token;
        bodyIn.bizContent = JSON.stringify(record);
        this._tdcli.setApiUrl(this.originUrl + '/api/toodo/tda');
        this.send(bodyIn, callback);
    },
    /**
     * @param {RequestBody} bodyIn
     * @param {function} callback
     * @param {number} callback.code 返回码
     * @param {Object|number|string} callback.biz 返回数据
     */
    send: function send(bodyIn, callback) {
        var owner = this;
        this._tdcli.send(bodyIn, function (bodyOut) {
            if (bodyOut.code == 0) {
                var bizOut = JSON.parse(bodyOut.bizContent);
                if (bodyOut.token) {
                    owner.token = bodyOut.token;
                    __WEBPACK_IMPORTED_MODULE_2__stbnull__["a" /* stbNull */].setValue('toodo.token', owner.token);
                }
                /**
                 alert(typeof 1);                // 返回字符串"number"
                 alert(typeof "1");              // 返回字符串"string"
                 alert(typeof true);             // 返回字符串"boolean"
                 alert(typeof {});               // 返回字符串"object"
                 alert(typeof []);               // 返回字符串"object "
                 alert(typeof function(){});     // 返回字符串"function"
                 alert(typeof null);             // 返回字符串"object"
                 alert(typeof undefined);        // 返回字符串"undefined"
                 */
                if (bizOut && (typeof bizOut === "undefined" ? "undefined" : _typeof(bizOut)) === 'object') {
                    bizOut.stbcli = owner;
                }
                if (callback) callback(bodyOut.code, bizOut);
            } else {
                if (callback) callback(bodyOut.code, bodyOut.subCode);
            }
        });
    }
};

var stbcli = new StbClient();


/***/ }),

/***/ "./resources/assets/js/toodo/_stbnull.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StbNull */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stbNull; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__retail__ = __webpack_require__("./resources/assets/js/toodo/_retail.js");


function StbNull() {}
if (__WEBPACK_IMPORTED_MODULE_0__retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__retail__["b" /* retail */].gxgd) {
    // 广西广电 =====================================
    StbNull.prototype = {
        //获取机顶盒号字符串
        getCardTV: function getCardTV() {
            return guangxi.getStbNum();
        },
        //获取区域码常数
        getRegionCode: function getRegionCode() {
            return iPanel.getGlobalVar("GET_MEDIA_REGION_ID");
        },
        getValue: function getValue(keyName) {
            var result = null;
            try {
                result = iPanel.getGlobalVar(keyName);
            } catch (e) {
                var aCookie = document.cookie.split("; ");
                for (var i = 0; i < aCookie.length; i++) {
                    var aCrumb = aCookie[i].split("=");
                    if (escape(keyName) == aCrumb[0]) {
                        result = unescape(aCrumb[1]);
                        break;
                    }
                }
            }
            if (!result || result == "#" || result == "clearValue") {
                result = "";
            }
            return result;
        },
        setValue: function setValue(keyName, keyValue) {
            if (keyValue == "") {
                keyValue = "clearValue";
            }
            try {
                iPanel.setGlobalVar(keyName, keyValue);
            } catch (e) {
                document.cookie = escape(keyName) + "=" + escape(keyValue);
            }
        }
    };
} else if (__WEBPACK_IMPORTED_MODULE_0__retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__retail__["b" /* retail */].hnyx) {
    // 河南有线 =====================================
    var System = window.System;
    StbNull.prototype = {
        getCardTV: function getCardTV() {
            return System.stbID;
        },
        getRegionCode: function getRegionCode() {
            var region = 'hnyx';
            try {
                region = System.GetCARegionID();
            } catch (e) {}
            return region;
        },
        getValue: function getValue(keyName) {
            var g = null;
            if (!g) {
                try {
                    g = new Global(keyName);
                } catch (e) {}
            }
            if (!g) {
                try {
                    g = new Global2(keyName);
                } catch (e) {}
            }
            if (!g) {
                g = { value: null };
            }
            return g.value;
        },
        setValue: function setValue(keyName, keyValue) {
            var g = null;
            if (!g) {
                try {
                    g = new Global(keyName);
                } catch (e) {}
            }
            if (!g) {
                try {
                    g = new Global2(keyName);
                } catch (e) {}
            }
            if (!g) {
                return;
            }
            g.value = keyValue;
        }
    };
} else if (__WEBPACK_IMPORTED_MODULE_0__retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__retail__["b" /* retail */].gdgd) {
    // 广东广电 =====================================
    StbNull.prototype = {
        getCardTV: function getCardTV() {
            if (!CA.icNo) {
                return '9695610086';
            }
            return CA.icNo;
        },
        getRegionCode: function getRegionCode() {
            return CA.regionCode;
        },
        getValue: function getValue(keyName) {
            return SysSetting.getEnv(keyName);
        },
        setValue: function setValue(keyName, keyValue) {
            SysSetting.setEnv(keyName, keyValue);
        }
    };
} else {
    StbNull.prototype = {
        getCardTV: function getCardTV() {
            return '10086';
        },
        getRegionCode: function getRegionCode() {
            return '0';
        },
        getValue: function getValue(keyName) {
            var result = '';
            var aCookie = document.cookie.split("; ");
            for (var i = 0; i < aCookie.length; i++) {
                var aCrumb = aCookie[i].split("=");
                if (escape(keyName) == aCrumb[0]) {
                    result = unescape(aCrumb[1]);
                    break;
                }
            }
            return result;
        },
        setValue: function setValue(keyName, keyValue) {
            document.cookie = escape(keyName) + "=" + escape(keyValue);
        }
    };
}

var stbNull = new StbNull();


/***/ }),

/***/ "./resources/assets/js/toodo/_tdcli.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = RequestBody;
/* unused harmony export ResponseBody */
/* harmony export (immutable) */ __webpack_exports__["a"] = ToodoClient;
var md5 = __webpack_require__("./node_modules/_md5@2.2.1@md5/md5.js");
var JSON = __webpack_require__("./node_modules/_JSON@1.0.0@JSON/json2.js");

if (!Date.prototype.format) {
    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return fmt;
    };
}

function RequestBody() {
    this.appId = ''; // 分配给开发者的应用ID:1000
    this.method = ''; // 接口名称:toodo.trade.pay
    this.format = 'JSON'; // 仅支持JSON
    this.charset = 'utf-8'; // 请求使用的编码格式，如utf-8,gbk,gb2312等
    this.signType = 'MD5'; // 商户生成签名字符串所使用的签名算法类型:RSA、MD5
    this.signCode = ''; // 商户请求参数的签名串 32位小写
    this.timestamp = ''; // 发送请求的时间，格式"yyyy-MM-dd HH:mm:ss":2014-07-24 03:07:50
    this.version = '1.0'; // 调用的接口版本，固定为：1.0
    this.appAuthToken = ''; // 应用授权码
    this.bizContent = ''; // 业务参数集合，最大长度不限，除公共参数外所有请求参数都必须放在这个参数中传递，具体参照各产品快速接入文档
}
RequestBody.prototype = {
    parse: function parse(json) {
        var body = JSON.parse(json);
        this.appId = body.appId;
        this.method = body.method;
        this.format = body.format;
        this.charset = body.charset;
        this.signType = body.signType;
        this.signCode = body.signCode;
        this.timestamp = body.timestamp;
        this.version = body.version;
        this.appAuthToken = body.appAuthToken;
        this.bizContent = body.bizContent;
    }
};

function ResponseBody() {
    this.code = 0; // 网关返回码
    this.msg = '调用成功'; // 网关返回码描述
    this.subCode = ''; // 业务返回码,详见文档:xxxx
    this.subMsg = ''; // 业务返回码描述,详见文档:交易已被支付
    this.timestamp = ''; // 应答的时间
    this.sign = ''; // 签名,详见文档 32位小写
    this.bizContent = ''; // 业务参数集合，最大长度不限，除公共参数外所有返回参数都必须放在这个参数中传递，具体参照各产品快速接入文档
    this.token = ''; // 更新后的授权码,为空则不更新
}
ResponseBody.prototype = {
    parse: function parse(json) {
        var body = JSON.parse(json);
        this.code = body.code;
        this.msg = body.msg;
        this.subCode = body.subCode;
        this.subMsg = body.subMsg;
        this.timestamp = body.timestamp;
        this.sign = body.sign;
        this.bizContent = body.bizContent;
        this.token = body.token;
    }
};

function ToodoClient(appId, appSecret, apiUrl) {
    this.start(appId, appSecret, apiUrl);
    this.isBusy = false;
}

ToodoClient.prototype = {
    /**
     * @param {string} appId
     * @param {string} appSecret
     * @param {string} apiUrl
     */
    start: function start(appId, appSecret, apiUrl) {
        this.appId = appId;
        this.appSecret = appSecret;
        this.apiUrl = apiUrl;
        this.token = '';
    },
    /**
     * @param {RequestBody} bodyIn
     */
    signCodeIn: function signCodeIn(bodyIn) {
        var str = '' + bodyIn.appAuthToken + bodyIn.appId + bodyIn.bizContent + bodyIn.charset + bodyIn.format + bodyIn.method + bodyIn.timestamp + bodyIn.version + this.appSecret;
        return md5(str);
    },
    /**
     * @param {ResponseBody} bodyOut
     */
    signCodeOut: function signCodeOut(bodyOut) {
        if (bodyOut.token == undefined) {
            bodyOut.token = "";
        }
        var str = '' + bodyOut.bizContent + bodyOut.code + bodyOut.msg + bodyOut.subCode + bodyOut.subMsg + bodyOut.timestamp + bodyOut.token + this.appSecret;
        return md5(str);
    },
    /**
     * @param {string} apiUrl
     */
    setApiUrl: function setApiUrl(apiUrl) {
        this.apiUrl = apiUrl;
    },
    /**
     * @param {RequestBody} bodyIn
     * @param {function} callback
     * @param {ResponseBody} callback.bodyOut
     */
    send: function send(bodyIn, callback) {
        var bodyOut = new ResponseBody();
        if (!XMLHttpRequest) {
            bodyOut.code = 10000;
            bodyOut.msg = '客户端错误';
            bodyOut.subCode = '105';
            bodyOut.subMsg = 'XMLHttpRequest对象不存在';
            if (callback) callback(bodyOut);
            return;
        }

        if (this.isBusy) {
            bodyOut.code = 10000;
            bodyOut.msg = '客户端错误';
            bodyOut.subCode = '99';
            bodyOut.subMsg = '很忙哦，请求队列已满';
            if (callback) callback(bodyOut);
            return;
        }

        this.isBusy = true;

        if (bodyIn.appAuthToken) {
            this.token = bodyIn.appAuthToken;
            bodyIn.appAuthToken = '';
        }

        bodyIn.appId = this.appId;
        bodyIn.timestamp = new Date().format("yyyy-MM-dd hh:mm:ss");
        bodyIn.signCode = this.signCodeIn(bodyIn);

        var xml = new XMLHttpRequest();
        var owner = this;

        var handleTimeout = setTimeout(function () {
            xml.abort();
            bodyOut.code = 10000;
            bodyOut.msg = '客户端错误';
            bodyOut.subCode = '103';
            bodyOut.subMsg = '请求超时';

            owner.isBusy = false;
            if (callback) callback(bodyOut);
        }, 10000);

        xml.onreadystatechange = function () {
            if (xml.readyState == 4) {
                clearTimeout(handleTimeout);

                if (xml.status == 200) {
                    try {
                        bodyOut.parse(xml.responseText);
                        if (bodyOut.code == 0) {
                            var _md = owner.signCodeOut(bodyOut);
                            if (_md != bodyOut.sign) {
                                bodyOut.code = 10000;
                                bodyOut.msg = '客户端错误';
                                bodyOut.subCode = '102';
                                bodyOut.subMsg = '返回结果签名出错';
                                // bodyOut.timestamp = '';
                                bodyOut.sign = '';
                                bodyOut.bizContent = '';
                                bodyOut.token = '';
                            }
                        }

                        if (bodyOut.code == 0) {
                            if (bodyOut.token) {
                                owner.token = bodyOut.token;
                            }
                        }
                    } catch (err) {
                        bodyOut.code = 10000;
                        bodyOut.msg = '客户端错误';
                        bodyOut.subCode = '101';
                        bodyOut.subMsg = '返回结果异常 err:' + err;
                    }
                } else {
                    bodyOut.code = 10000;
                    bodyOut.msg = '客户端错误';
                    bodyOut.subCode = '104';
                    bodyOut.subMsg = '请求返回错误';
                }

                owner.isBusy = false;
                if (callback) callback(bodyOut);
            }
        };
        var tokenUrl = this.apiUrl + '?token=' + this.token;
        xml.open('POST', tokenUrl, true);
        xml.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
        xml.send(JSON.stringify(bodyIn));
    },
    /**
     * @param {RequestBody} bodyIn
     */
    submit: function submit(bodyIn) {
        bodyIn.appId = this.appId;
        bodyIn.timestamp = new Date().format("yyyy-MM-dd hh:mm:ss");
        bodyIn.signCode = this.signCodeIn(bodyIn);

        var f = document.createElement("form");
        document.body.appendChild(f);

        for (var key in bodyIn) {
            //noinspection JSUnfilteredForInLoop
            if (typeof bodyIn[key] == 'function') {
                continue;
            }

            var ei = document.createElement('input');
            ei.type = 'hidden';
            ei.name = key;
            //noinspection JSUnfilteredForInLoop
            ei.value = bodyIn[key];
            f.appendChild(ei);
        }

        f.method = 'post';
        f.action = this.apiUrl;
        f.submit();
        document.body.removeChild(f);
    }
};

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/recharge.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWM5ZGYyNTE1YTkxYWUzNmIyZjE/ODU5MSoqKiIsIndlYnBhY2s6Ly8vLi9+L19KU09OQDEuMC4wQEpTT04vanNvbjIuanM/MjlmOSoqIiwid2VicGFjazovLy8uL34vX2NoYXJlbmNAMC4wLjJAY2hhcmVuYy9jaGFyZW5jLmpzP2M4YzEqKiIsIndlYnBhY2s6Ly8vLi9+L19jcnlwdEAwLjAuMkBjcnlwdC9jcnlwdC5qcz9kOTM0KioiLCJ3ZWJwYWNrOi8vLy4vfi9faXMtYnVmZmVyQDEuMS42QGlzLWJ1ZmZlci9pbmRleC5qcz81ZWJhKioiLCJ3ZWJwYWNrOi8vLy4vfi9fbWQ1QDIuMi4xQG1kNS9tZDUuanM/Nzk5NyoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvSG9tZU1lbnUuanM/ZTM4YSoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvSmF2YTEwQ29pbi5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1JlY2hhcmdlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1Nob3BCaWxsLmpzP2Y5NzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUGFnZUFyZ3MuanM/YzdhMioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2FiYy5qcz81NzI2KioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvY2hpbGRMb2NrLmpzP2JmZTAqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9jaGlsZE1lbnUuanM/NDRjYSoqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2RpYWxvZy5qcz8yY2JjKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvbG9hZGluZy5qcz85YTA0KioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yZWNoYXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19rZXljb2Rlcy5qcz9iOTA4KioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fcmV0YWlsLmpzPzBlYjMqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fc3RiY2xpLmpzP2YyNTkqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19zdGJudWxsLmpzPzQ3ZTQqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL190ZGNsaS5qcz8xOGVmKioiXSwibmFtZXMiOlsia2V5Q29kZSIsImdldEtleUNvZGVzIiwicHJlQ29kZXMiLCJnZXRDb2RlcyIsIkhvbWVNZW51IiwibGF5b3V0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiaXRlbXMiLCJpIiwibm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJwdXNoIiwiaW1nIiwic3JjIiwicHJvdG90eXBlIiwiY3VycmVudCIsIm9uS2V5RG93biIsInRkZVVzZXIiLCJzaG93Iiwic2V0U2VsZWN0ZWQiLCJvd25lciIsIm9ua2V5ZG93biIsImUiLCJoYW5kbGVLZXkiLCJoaWRlIiwiX3NldEZvY3VzIiwiZm9jdXMiLCJsZW5ndGgiLCJnZXRFdmVudCIsImN1cktleSIsImdldEtleSIsImluZGV4T2YiLCJwcmV2ZW50RGVmYXVsdCIsImxlZnQiLCJyaWdodCIsIm9rIiwiYXBwQXJncyIsIm9uRmlyc3RQYWdlIiwib25Ib21lUGFnZSIsIm9sZExvY2siLCJjaGlsZExvY2siLCJjaGlsZE1lbnUiLCJidG4iLCJzaG93Q2hpbGRMb2NrIiwiY29kZSIsIm1zZyIsIm9uVmFsaWRMb2NrIiwicmVzZXRDaGlsZExvY2siLCJvblR1cm50YWJsZVBhZ2UiLCJlc2MiLCJzdGJjbGkiLCJ0ZGVMb2NrIiwiYml6IiwidGV4dCIsIm9uVGRlTG9jayIsInNob3dEaWFsb2ciLCJkbGdCdG4iLCJuZXdMb2NrIiwiYXJndW1lbnRzIiwic2hvd0xvYWRpbmciLCJoaWRlTG9hZGluZyIsIkphdmExMENvaW4iLCJjb2lucyIsImdldEVsZW1lbnRCeUlkIiwiaWQiLCJub2RlVGV4dCIsImphdmFDb2luIiwiaXRlbVNpemUiLCJpbWFnZXMiLCJSZWNoYXJnZVBhZ2UiLCJzZXRUaW1lb3V0Iiwic3R5bGUiLCJ6SW5kZXgiLCJzaXplIiwiZGl2IiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwiY2FsbGJhY2tVcmwiLCJTaG9wQmlsbCIsImJpbGxzIiwiYmlsbFRhYmxlIiwic3RhcnQiLCJvblRhYmxlS2V5IiwiYmlsbCIsIm9uQmlsbCIsInBhZ2VTaXplIiwiaXRlbXNTaXplTGVmdCIsIkJpbGxUYWJsZSIsImN1cnJlbnRTaXplIiwicGFnZSIsInBhZ2VJbmRleCIsImJnIiwic2VsZWN0ZWQiLCJ0YWJsZSIsInRyIiwidGl0bGVQYWdlIiwic2hvd1BhZ2UiLCJjbnQiLCJwYXJzZUludCIsImN1dDAiLCJjdXQxIiwiY3V0SW5mb3MiLCJzbGljZSIsInNob3dJbmZvIiwiaW5mb3MiLCJmb3JFYWNoIiwicm93IiwiaW5kZXgiLCJ0ZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5mbyIsImNyZWF0ZWRfYXQiLCJzdWJqZWN0IiwidG90YWxBbW91bnQiLCJ1cCIsImRvd24iLCJzaG9wQmlsbCIsImtleSIsImJhY2siLCJudW0wIiwiUGFnZUFyZ3MiLCJwcmVmaXgiLCJnZXRWYWx1ZSIsImsiLCJzdGJOdWxsIiwic2V0VmFsdWUiLCJ2IiwiZ2V0UmV0dXJuVXJsIiwic2V0UmV0dXJuVXJsIiwidXJsIiwiZ2V0UmVkaXJlY3RVcmwiLCJzZXRSZWRpcmVjdFVybCIsInNldENhbGxGbGFnIiwibnVtIiwiZ2V0Q2FsbEZsYWciLCJzZXRTdWNjZXNzQ29kZSIsInN1Y2Nlc3NDb2RlIiwiZ2V0U3VjY2Vzc0NvZGUiLCJzZXRQcml6ZUlEIiwiZ2V0UHJpemVJRCIsImdldFR1cm50YWJsZVVybCIsInNldFR1cm50YWJsZVVybCIsInNob3BBcmdzIiwicmVjaGFyZ2VBcmdzIiwiY2FsbGJhY2tBcmdzIiwidHVyblRhYmxlQXJncyIsImZpcnN0VXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaG9tZVVybCIsIlR1cm50YWJsZVVybCIsImdldEpTT04iLCJjYiIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJpdGVtc0FyciIsImV2YWwiLCJyZXNwb25zZVRleHQiLCJzZW5kIiwiYmFzZVVybCIsInByb3RvY29sIiwiaG9zdCIsImRlbGF5QmFja2dyb3VuZCIsImRlbGF5IiwiYmFja2dyb3VuZEltYWdlIiwiY2FsbGJhY2siLCJ0aXRsZSIsImxhYmVsIiwidGlwcyIsImxheW91dElkIiwibG9ja1RleHQiLCJsb2NrVGl0bGUiLCJsb2NrTGFiZWwiLCJsb2NrVGlwcyIsImlubmVyVGV4dCIsIml0ZW1Ob2RlcyIsIm51bTEiLCJudW0yIiwibnVtMyIsIm51bTQiLCJudW01IiwibnVtNiIsIm51bTciLCJudW04IiwibnVtOSIsImlucHV0VGV4dCIsImN1cklkeCIsIml0ZW1Ob2RlIiwic3VibWl0IiwiaW52aXNpYmxlIiwic3RhciIsImNsaWNrTnVtIiwiU3RyaW5nIiwiYmFja3NwYWNlIiwic3Vic3RyaW5nIiwiaGFuZGxlT2siLCJDaGlsZE1lbnUiLCJidG5Ob2RlcyIsImJ0bk5vZGUiLCJidG5Ob2RlMCIsImJ0bk5vZGUxIiwidGlwTm9kZSIsImZvY3VzQnRuIiwiYnRuSWR4IiwiZm9jdXNOb2RlIiwiYnRuMCIsImJ0bjEiLCJhbGlnbiIsImJhY2tncm91bmQiLCJub2RlVGl0bGUiLCJ0ZXh0QWxpZ24iLCJub2RlQnRuMCIsIm5vZGVCdG4xIiwiYnRuXzAwNiIsImJ0bl8wMDZub25lIiwibG9hZFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInNob3dUaW1lIiwibm9kZUJnIiwiZGVsYXlUaW1lIiwidGltZSIsIm9uU3RhcnQiLCJyZWNoYXJnZVBhZ2UiLCJvblBhZ2VLZXkiLCJvblF1ZXJ5UHJvZHVjdDEiLCJpdGVtSW5mbyIsIml0ZW1JbmZvcyIsInByb2R1Y3RJZCIsInByb2RJZCIsImNhdGVnb3J5IiwicHJpY2UiLCJnb29kc05hbWUiLCJzZW5kT3JkZXIiLCJxdWVyeVByb2R1Y3QxIiwib25PcmRlcjEiLCJwYXkiLCJ0cmFkZU5vIiwib25NZW51S2V5IiwiaG9tZU1lbnUiLCJpc1JlYWR5Iiwib25CaWxsS2V5IiwiZGF0YSIsImdhbWVJZCIsInRyaWFsIiwiYXJncyIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcmRlcjEiLCJvbmxvYWQiLCJrZXlNYXAiLCJyZXRhaWxJZCIsInJldGFpbCIsImd4Z2QiLCJmMSIsImYyIiwiZjMiLCJmNCIsIm11dGUiLCJ0cmFjayIsInZvbFVwIiwidm9sRG93biIsImZhdiIsInBsYXlCYWNrIiwicGFnZVVwIiwicGFnZURvd24iLCJtZW51IiwiaG9tZSIsImhueXgiLCJnZGdkIiwiZXZ0IiwiZXZlbnQiLCJ3aGljaCIsImNoYXJDb2RlIiwiY29kZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm5vbmUiLCJnZXRSZXRhaWxJZCIsImd1YW5neGkiLCJpUGFuZWwiLCJTeXN0ZW0iLCJzdGJJRCIsIkNBIiwiU3RvcmFnZVNlcnZpY2UiLCJGaWxlU3lzdGVtIiwibWQ1IiwicmVxdWlyZSIsIlN0YkNsaWVudCIsIm9yaWdpblVybCIsImFwcEtleSIsImFwcFNlY3JldCIsIl90ZGNsaSIsInVzZXJJZCIsInRva2VuIiwiYml6SW4iLCJnZXRSZWdpb25Db2RlIiwiZ2V0Q2FyZFRWIiwiYm9keUluIiwibWV0aG9kIiwiYXBwQXV0aFRva2VuIiwiYml6Q29udGVudCIsInNldEFwaVVybCIsImJvZHlPdXQiLCJiaXpPdXQiLCJwYXJzZSIsImJpelVzZXIiLCJzdWJDb2RlIiwiYWRkV2lubmVyIiwicHJpemVJRCIsInN0YXRlIiwiYWRkU3RhdGUiLCJ1cGRhdGFGcmVlU3RhdGUiLCJnZXRQcml6ZSIsInR1cm50YWJsZVN0YXRlIiwidHVybnRhYmxlUHJvIiwidHlwZSIsInByaXplTnVtIiwid2lubmVySW5mbyIsInVzZXJXaW5uZXIiLCJhZGRDb2lucyIsImFkZE51bSIsInF1ZXJ5U2VydmUxIiwidGRlUGFnZSIsInRkYVNvbmciLCJ0ZGFTb25nMSIsInNvbmdJZCIsInRkYU1hdGNoIiwidGRhVXNlciIsInRkYVJlY29yZCIsInJlY29yZCIsIlN0Yk51bGwiLCJnZXRTdGJOdW0iLCJnZXRHbG9iYWxWYXIiLCJrZXlOYW1lIiwicmVzdWx0IiwiYUNvb2tpZSIsImNvb2tpZSIsInNwbGl0IiwiYUNydW1iIiwiZXNjYXBlIiwidW5lc2NhcGUiLCJrZXlWYWx1ZSIsInNldEdsb2JhbFZhciIsInJlZ2lvbiIsIkdldENBUmVnaW9uSUQiLCJnIiwiR2xvYmFsIiwiR2xvYmFsMiIsInZhbHVlIiwiaWNObyIsInJlZ2lvbkNvZGUiLCJTeXNTZXR0aW5nIiwiZ2V0RW52Iiwic2V0RW52IiwiZm9ybWF0IiwiZm10IiwibyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJnZXRNaWxsaXNlY29uZHMiLCJ0ZXN0IiwicmVwbGFjZSIsIlJlZ0V4cCIsIiQxIiwiZ2V0RnVsbFllYXIiLCJzdWJzdHIiLCJSZXF1ZXN0Qm9keSIsImFwcElkIiwiY2hhcnNldCIsInNpZ25UeXBlIiwic2lnbkNvZGUiLCJ0aW1lc3RhbXAiLCJ2ZXJzaW9uIiwianNvbiIsIlJlc3BvbnNlQm9keSIsInN1Yk1zZyIsInNpZ24iLCJUb29kb0NsaWVudCIsImFwaVVybCIsImlzQnVzeSIsInNpZ25Db2RlSW4iLCJzdHIiLCJzaWduQ29kZU91dCIsInVuZGVmaW5lZCIsInhtbCIsImhhbmRsZVRpbWVvdXQiLCJhYm9ydCIsImNsZWFyVGltZW91dCIsInN0YXR1cyIsImVyciIsInRva2VuVXJsIiwic2V0UmVxdWVzdEhlYWRlciIsImYiLCJlaSIsIm5hbWUiLCJhY3Rpb24iLCJyZW1vdmVDaGlsZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTtBQUN6RTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEseUNBQXlDLGlCQUFpQjtBQUMxRCw4QkFBOEIsa0JBQWtCOzs7QUFHaEQseUNBQXlDLGlCQUFpQjtBQUMxRCxzQ0FBc0MsNkJBQTZCOztBQUVuRTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7QUFHYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFD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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsY0FBYzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJ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RCxLQUFILEdBQVduRCxPQUFPeEwsR0FBUCxDQUFYO0FBQ0E0UixjQUFFL1ksV0FBRixDQUFjZ1osRUFBZDtBQUNIOztBQUVERCxVQUFFbkcsTUFBRixHQUFXLE1BQVg7QUFDQW1HLFVBQUVHLE1BQUYsR0FBVyxLQUFLakIsTUFBaEI7QUFDQWMsVUFBRWpOLE1BQUY7QUFDQWpNLGlCQUFTRSxJQUFULENBQWNvWixXQUFkLENBQTBCSixDQUExQjtBQUNIO0FBckxtQixDQUF4QixDIiwiZmlsZSI6ImpzL3JlY2hhcmdlLjEwNmI3ZDRjYjgzNTE0ZWRkMzkyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlYzlkZjI1MTVhOTFhZTM2YjJmMSIsIi8qXG4gICAgaHR0cDovL3d3dy5KU09OLm9yZy9qc29uMi5qc1xuICAgIDIwMTEtMDItMjNcblxuICAgIFB1YmxpYyBEb21haW4uXG5cbiAgICBOTyBXQVJSQU5UWSBFWFBSRVNTRUQgT1IgSU1QTElFRC4gVVNFIEFUIFlPVVIgT1dOIFJJU0suXG5cbiAgICBTZWUgaHR0cDovL3d3dy5KU09OLm9yZy9qcy5odG1sXG5cblxuICAgIFRoaXMgY29kZSBzaG91bGQgYmUgbWluaWZpZWQgYmVmb3JlIGRlcGxveW1lbnQuXG4gICAgU2VlIGh0dHA6Ly9qYXZhc2NyaXB0LmNyb2NrZm9yZC5jb20vanNtaW4uaHRtbFxuXG4gICAgVVNFIFlPVVIgT1dOIENPUFkuIElUIElTIEVYVFJFTUVMWSBVTldJU0UgVE8gTE9BRCBDT0RFIEZST00gU0VSVkVSUyBZT1UgRE9cbiAgICBOT1QgQ09OVFJPTC5cblxuXG4gICAgVGhpcyBmaWxlIGNyZWF0ZXMgYSBnbG9iYWwgSlNPTiBvYmplY3QgY29udGFpbmluZyB0d28gbWV0aG9kczogc3RyaW5naWZ5XG4gICAgYW5kIHBhcnNlLlxuXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHZhbHVlLCByZXBsYWNlciwgc3BhY2UpXG4gICAgICAgICAgICB2YWx1ZSAgICAgICBhbnkgSmF2YVNjcmlwdCB2YWx1ZSwgdXN1YWxseSBhbiBvYmplY3Qgb3IgYXJyYXkuXG5cbiAgICAgICAgICAgIHJlcGxhY2VyICAgIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IGRldGVybWluZXMgaG93IG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzIGFyZSBzdHJpbmdpZmllZCBmb3Igb2JqZWN0cy4gSXQgY2FuIGJlIGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MuXG5cbiAgICAgICAgICAgIHNwYWNlICAgICAgIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IHNwZWNpZmllcyB0aGUgaW5kZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9mIG5lc3RlZCBzdHJ1Y3R1cmVzLiBJZiBpdCBpcyBvbWl0dGVkLCB0aGUgdGV4dCB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBiZSBwYWNrZWQgd2l0aG91dCBleHRyYSB3aGl0ZXNwYWNlLiBJZiBpdCBpcyBhIG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0IHdpbGwgc3BlY2lmeSB0aGUgbnVtYmVyIG9mIHNwYWNlcyB0byBpbmRlbnQgYXQgZWFjaFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwuIElmIGl0IGlzIGEgc3RyaW5nIChzdWNoIGFzICdcXHQnIG9yICcmbmJzcDsnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0IGNvbnRhaW5zIHRoZSBjaGFyYWN0ZXJzIHVzZWQgdG8gaW5kZW50IGF0IGVhY2ggbGV2ZWwuXG5cbiAgICAgICAgICAgIFRoaXMgbWV0aG9kIHByb2R1Y2VzIGEgSlNPTiB0ZXh0IGZyb20gYSBKYXZhU2NyaXB0IHZhbHVlLlxuXG4gICAgICAgICAgICBXaGVuIGFuIG9iamVjdCB2YWx1ZSBpcyBmb3VuZCwgaWYgdGhlIG9iamVjdCBjb250YWlucyBhIHRvSlNPTlxuICAgICAgICAgICAgbWV0aG9kLCBpdHMgdG9KU09OIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBhbmQgdGhlIHJlc3VsdCB3aWxsIGJlXG4gICAgICAgICAgICBzdHJpbmdpZmllZC4gQSB0b0pTT04gbWV0aG9kIGRvZXMgbm90IHNlcmlhbGl6ZTogaXQgcmV0dXJucyB0aGVcbiAgICAgICAgICAgIHZhbHVlIHJlcHJlc2VudGVkIGJ5IHRoZSBuYW1lL3ZhbHVlIHBhaXIgdGhhdCBzaG91bGQgYmUgc2VyaWFsaXplZCxcbiAgICAgICAgICAgIG9yIHVuZGVmaW5lZCBpZiBub3RoaW5nIHNob3VsZCBiZSBzZXJpYWxpemVkLiBUaGUgdG9KU09OIG1ldGhvZFxuICAgICAgICAgICAgd2lsbCBiZSBwYXNzZWQgdGhlIGtleSBhc3NvY2lhdGVkIHdpdGggdGhlIHZhbHVlLCBhbmQgdGhpcyB3aWxsIGJlXG4gICAgICAgICAgICBib3VuZCB0byB0aGUgdmFsdWVcblxuICAgICAgICAgICAgRm9yIGV4YW1wbGUsIHRoaXMgd291bGQgc2VyaWFsaXplIERhdGVzIGFzIElTTyBzdHJpbmdzLlxuXG4gICAgICAgICAgICAgICAgRGF0ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBmKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvcm1hdCBpbnRlZ2VycyB0byBoYXZlIGF0IGxlYXN0IHR3byBkaWdpdHMuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiA8IDEwID8gJzAnICsgbiA6IG47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRVVENGdWxsWWVhcigpICAgKyAnLScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNb250aCgpICsgMSkgKyAnLScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENEYXRlKCkpICAgICAgKyAnVCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENIb3VycygpKSAgICAgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNaW51dGVzKCkpICAgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENTZWNvbmRzKCkpICAgKyAnWic7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsIHJlcGxhY2VyIG1ldGhvZC4gSXQgd2lsbCBiZSBwYXNzZWQgdGhlXG4gICAgICAgICAgICBrZXkgYW5kIHZhbHVlIG9mIGVhY2ggbWVtYmVyLCB3aXRoIHRoaXMgYm91bmQgdG8gdGhlIGNvbnRhaW5pbmdcbiAgICAgICAgICAgIG9iamVjdC4gVGhlIHZhbHVlIHRoYXQgaXMgcmV0dXJuZWQgZnJvbSB5b3VyIG1ldGhvZCB3aWxsIGJlXG4gICAgICAgICAgICBzZXJpYWxpemVkLiBJZiB5b3VyIG1ldGhvZCByZXR1cm5zIHVuZGVmaW5lZCwgdGhlbiB0aGUgbWVtYmVyIHdpbGxcbiAgICAgICAgICAgIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIHNlcmlhbGl6YXRpb24uXG5cbiAgICAgICAgICAgIElmIHRoZSByZXBsYWNlciBwYXJhbWV0ZXIgaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncywgdGhlbiBpdCB3aWxsIGJlXG4gICAgICAgICAgICB1c2VkIHRvIHNlbGVjdCB0aGUgbWVtYmVycyB0byBiZSBzZXJpYWxpemVkLiBJdCBmaWx0ZXJzIHRoZSByZXN1bHRzXG4gICAgICAgICAgICBzdWNoIHRoYXQgb25seSBtZW1iZXJzIHdpdGgga2V5cyBsaXN0ZWQgaW4gdGhlIHJlcGxhY2VyIGFycmF5IGFyZVxuICAgICAgICAgICAgc3RyaW5naWZpZWQuXG5cbiAgICAgICAgICAgIFZhbHVlcyB0aGF0IGRvIG5vdCBoYXZlIEpTT04gcmVwcmVzZW50YXRpb25zLCBzdWNoIGFzIHVuZGVmaW5lZCBvclxuICAgICAgICAgICAgZnVuY3Rpb25zLCB3aWxsIG5vdCBiZSBzZXJpYWxpemVkLiBTdWNoIHZhbHVlcyBpbiBvYmplY3RzIHdpbGwgYmVcbiAgICAgICAgICAgIGRyb3BwZWQ7IGluIGFycmF5cyB0aGV5IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBudWxsLiBZb3UgY2FuIHVzZVxuICAgICAgICAgICAgYSByZXBsYWNlciBmdW5jdGlvbiB0byByZXBsYWNlIHRob3NlIHdpdGggSlNPTiB2YWx1ZXMuXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh1bmRlZmluZWQpIHJldHVybnMgdW5kZWZpbmVkLlxuXG4gICAgICAgICAgICBUaGUgb3B0aW9uYWwgc3BhY2UgcGFyYW1ldGVyIHByb2R1Y2VzIGEgc3RyaW5naWZpY2F0aW9uIG9mIHRoZVxuICAgICAgICAgICAgdmFsdWUgdGhhdCBpcyBmaWxsZWQgd2l0aCBsaW5lIGJyZWFrcyBhbmQgaW5kZW50YXRpb24gdG8gbWFrZSBpdFxuICAgICAgICAgICAgZWFzaWVyIHRvIHJlYWQuXG5cbiAgICAgICAgICAgIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBub24tZW1wdHkgc3RyaW5nLCB0aGVuIHRoYXQgc3RyaW5nIHdpbGxcbiAgICAgICAgICAgIGJlIHVzZWQgZm9yIGluZGVudGF0aW9uLiBJZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGlzIGEgbnVtYmVyLCB0aGVuXG4gICAgICAgICAgICB0aGUgaW5kZW50YXRpb24gd2lsbCBiZSB0aGF0IG1hbnkgc3BhY2VzLlxuXG4gICAgICAgICAgICBFeGFtcGxlOlxuXG4gICAgICAgICAgICB0ZXh0ID0gSlNPTi5zdHJpbmdpZnkoWydlJywge3BsdXJpYnVzOiAndW51bSd9XSk7XG4gICAgICAgICAgICAvLyB0ZXh0IGlzICdbXCJlXCIse1wicGx1cmlidXNcIjpcInVudW1cIn1dJ1xuXG5cbiAgICAgICAgICAgIHRleHQgPSBKU09OLnN0cmluZ2lmeShbJ2UnLCB7cGx1cmlidXM6ICd1bnVtJ31dLCBudWxsLCAnXFx0Jyk7XG4gICAgICAgICAgICAvLyB0ZXh0IGlzICdbXFxuXFx0XCJlXCIsXFxuXFx0e1xcblxcdFxcdFwicGx1cmlidXNcIjogXCJ1bnVtXCJcXG5cXHR9XFxuXSdcblxuICAgICAgICAgICAgdGV4dCA9IEpTT04uc3RyaW5naWZ5KFtuZXcgRGF0ZSgpXSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldIGluc3RhbmNlb2YgRGF0ZSA/XG4gICAgICAgICAgICAgICAgICAgICdEYXRlKCcgKyB0aGlzW2tleV0gKyAnKScgOiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gdGV4dCBpcyAnW1wiRGF0ZSgtLS1jdXJyZW50IHRpbWUtLS0pXCJdJ1xuXG5cbiAgICAgICAgSlNPTi5wYXJzZSh0ZXh0LCByZXZpdmVyKVxuICAgICAgICAgICAgVGhpcyBtZXRob2QgcGFyc2VzIGEgSlNPTiB0ZXh0IHRvIHByb2R1Y2UgYW4gb2JqZWN0IG9yIGFycmF5LlxuICAgICAgICAgICAgSXQgY2FuIHRocm93IGEgU3ludGF4RXJyb3IgZXhjZXB0aW9uLlxuXG4gICAgICAgICAgICBUaGUgb3B0aW9uYWwgcmV2aXZlciBwYXJhbWV0ZXIgaXMgYSBmdW5jdGlvbiB0aGF0IGNhbiBmaWx0ZXIgYW5kXG4gICAgICAgICAgICB0cmFuc2Zvcm0gdGhlIHJlc3VsdHMuIEl0IHJlY2VpdmVzIGVhY2ggb2YgdGhlIGtleXMgYW5kIHZhbHVlcyxcbiAgICAgICAgICAgIGFuZCBpdHMgcmV0dXJuIHZhbHVlIGlzIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgdmFsdWUuXG4gICAgICAgICAgICBJZiBpdCByZXR1cm5zIHdoYXQgaXQgcmVjZWl2ZWQsIHRoZW4gdGhlIHN0cnVjdHVyZSBpcyBub3QgbW9kaWZpZWQuXG4gICAgICAgICAgICBJZiBpdCByZXR1cm5zIHVuZGVmaW5lZCB0aGVuIHRoZSBtZW1iZXIgaXMgZGVsZXRlZC5cblxuICAgICAgICAgICAgRXhhbXBsZTpcblxuICAgICAgICAgICAgLy8gUGFyc2UgdGhlIHRleHQuIFZhbHVlcyB0aGF0IGxvb2sgbGlrZSBJU08gZGF0ZSBzdHJpbmdzIHdpbGxcbiAgICAgICAgICAgIC8vIGJlIGNvbnZlcnRlZCB0byBEYXRlIG9iamVjdHMuXG5cbiAgICAgICAgICAgIG15RGF0YSA9IEpTT04ucGFyc2UodGV4dCwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBhID1cbi9eKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSlUKFxcZHsyfSk6KFxcZHsyfSk6KFxcZHsyfSg/OlxcLlxcZCopPylaJC8uZXhlYyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoK2FbMV0sICthWzJdIC0gMSwgK2FbM10sICthWzRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICthWzVdLCArYVs2XSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBteURhdGEgPSBKU09OLnBhcnNlKCdbXCJEYXRlKDA5LzA5LzIwMDEpXCJdJywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2xpY2UoMCwgNSkgPT09ICdEYXRlKCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNsaWNlKC0xKSA9PT0gJyknKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBuZXcgRGF0ZSh2YWx1ZS5zbGljZSg1LCAtMSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgIFRoaXMgaXMgYSByZWZlcmVuY2UgaW1wbGVtZW50YXRpb24uIFlvdSBhcmUgZnJlZSB0byBjb3B5LCBtb2RpZnksIG9yXG4gICAgcmVkaXN0cmlidXRlLlxuKi9cblxuLypqc2xpbnQgZXZpbDogdHJ1ZSwgc3RyaWN0OiBmYWxzZSwgcmVnZXhwOiBmYWxzZSAqL1xuXG4vKm1lbWJlcnMgXCJcIiwgXCJcXGJcIiwgXCJcXHRcIiwgXCJcXG5cIiwgXCJcXGZcIiwgXCJcXHJcIiwgXCJcXFwiXCIsIEpTT04sIFwiXFxcXFwiLCBhcHBseSxcbiAgICBjYWxsLCBjaGFyQ29kZUF0LCBnZXRVVENEYXRlLCBnZXRVVENGdWxsWWVhciwgZ2V0VVRDSG91cnMsXG4gICAgZ2V0VVRDTWludXRlcywgZ2V0VVRDTW9udGgsIGdldFVUQ1NlY29uZHMsIGhhc093blByb3BlcnR5LCBqb2luLFxuICAgIGxhc3RJbmRleCwgbGVuZ3RoLCBwYXJzZSwgcHJvdG90eXBlLCBwdXNoLCByZXBsYWNlLCBzbGljZSwgc3RyaW5naWZ5LFxuICAgIHRlc3QsIHRvSlNPTiwgdG9TdHJpbmcsIHZhbHVlT2ZcbiovXG5cblxuLy8gQ3JlYXRlIGEgSlNPTiBvYmplY3Qgb25seSBpZiBvbmUgZG9lcyBub3QgYWxyZWFkeSBleGlzdC4gV2UgY3JlYXRlIHRoZVxuLy8gbWV0aG9kcyBpbiBhIGNsb3N1cmUgdG8gYXZvaWQgY3JlYXRpbmcgZ2xvYmFsIHZhcmlhYmxlcy5cblxudmFyIEpTT047XG5pZiAoIUpTT04pIHtcbiAgICBKU09OID0ge307XG59XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgZ2xvYmFsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKVxuICAgICAgLCBKU09OID0gZ2xvYmFsLkpTT05cbiAgICAgIDtcblxuICAgIGlmICghSlNPTikge1xuICAgICAgSlNPTiA9IHt9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGYobikge1xuICAgICAgICAvLyBGb3JtYXQgaW50ZWdlcnMgdG8gaGF2ZSBhdCBsZWFzdCB0d28gZGlnaXRzLlxuICAgICAgICByZXR1cm4gbiA8IDEwID8gJzAnICsgbiA6IG47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBEYXRlLnByb3RvdHlwZS50b0pTT04gIT09ICdmdW5jdGlvbicpIHtcblxuICAgICAgICBEYXRlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoa2V5KSB7XG5cbiAgICAgICAgICAgIHJldHVybiBpc0Zpbml0ZSh0aGlzLnZhbHVlT2YoKSkgP1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VVRDRnVsbFllYXIoKSAgICAgKyAnLScgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNb250aCgpICsgMSkgKyAnLScgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENEYXRlKCkpICAgICAgKyAnVCcgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENIb3VycygpKSAgICAgKyAnOicgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNaW51dGVzKCkpICAgKyAnOicgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENTZWNvbmRzKCkpICAgKyAnWicgOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIFN0cmluZy5wcm90b3R5cGUudG9KU09OICAgICAgPVxuICAgICAgICAgICAgTnVtYmVyLnByb3RvdHlwZS50b0pTT04gID1cbiAgICAgICAgICAgIEJvb2xlYW4ucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBjeCA9IC9bXFx1MDAwMFxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nLFxuICAgICAgICBlc2NhcGFibGUgPSAvW1xcXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHg5ZlxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nLFxuICAgICAgICBnYXAsXG4gICAgICAgIGluZGVudCxcbiAgICAgICAgbWV0YSA9IHsgICAgLy8gdGFibGUgb2YgY2hhcmFjdGVyIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICAgICdcXGInOiAnXFxcXGInLFxuICAgICAgICAgICAgJ1xcdCc6ICdcXFxcdCcsXG4gICAgICAgICAgICAnXFxuJzogJ1xcXFxuJyxcbiAgICAgICAgICAgICdcXGYnOiAnXFxcXGYnLFxuICAgICAgICAgICAgJ1xccic6ICdcXFxccicsXG4gICAgICAgICAgICAnXCInIDogJ1xcXFxcIicsXG4gICAgICAgICAgICAnXFxcXCc6ICdcXFxcXFxcXCdcbiAgICAgICAgfSxcbiAgICAgICAgcmVwO1xuXG5cbiAgICBmdW5jdGlvbiBxdW90ZShzdHJpbmcpIHtcblxuLy8gSWYgdGhlIHN0cmluZyBjb250YWlucyBubyBjb250cm9sIGNoYXJhY3RlcnMsIG5vIHF1b3RlIGNoYXJhY3RlcnMsIGFuZCBub1xuLy8gYmFja3NsYXNoIGNoYXJhY3RlcnMsIHRoZW4gd2UgY2FuIHNhZmVseSBzbGFwIHNvbWUgcXVvdGVzIGFyb3VuZCBpdC5cbi8vIE90aGVyd2lzZSB3ZSBtdXN0IGFsc28gcmVwbGFjZSB0aGUgb2ZmZW5kaW5nIGNoYXJhY3RlcnMgd2l0aCBzYWZlIGVzY2FwZVxuLy8gc2VxdWVuY2VzLlxuXG4gICAgICAgIGVzY2FwYWJsZS5sYXN0SW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gZXNjYXBhYmxlLnRlc3Qoc3RyaW5nKSA/ICdcIicgKyBzdHJpbmcucmVwbGFjZShlc2NhcGFibGUsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICB2YXIgYyA9IG1ldGFbYV07XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGMgPT09ICdzdHJpbmcnID8gYyA6XG4gICAgICAgICAgICAgICAgJ1xcXFx1JyArICgnMDAwMCcgKyBhLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtNCk7XG4gICAgICAgIH0pICsgJ1wiJyA6ICdcIicgKyBzdHJpbmcgKyAnXCInO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc3RyKGtleSwgaG9sZGVyKSB7XG5cbi8vIFByb2R1Y2UgYSBzdHJpbmcgZnJvbSBob2xkZXJba2V5XS5cblxuICAgICAgICB2YXIgaSwgICAgICAgICAgLy8gVGhlIGxvb3AgY291bnRlci5cbiAgICAgICAgICAgIGssICAgICAgICAgIC8vIFRoZSBtZW1iZXIga2V5LlxuICAgICAgICAgICAgdiwgICAgICAgICAgLy8gVGhlIG1lbWJlciB2YWx1ZS5cbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIG1pbmQgPSBnYXAsXG4gICAgICAgICAgICBwYXJ0aWFsLFxuICAgICAgICAgICAgdmFsdWUgPSBob2xkZXJba2V5XTtcblxuLy8gSWYgdGhlIHZhbHVlIGhhcyBhIHRvSlNPTiBtZXRob2QsIGNhbGwgaXQgdG8gb2J0YWluIGEgcmVwbGFjZW1lbnQgdmFsdWUuXG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSlNPTihrZXkpO1xuICAgICAgICB9XG5cbi8vIElmIHdlIHdlcmUgY2FsbGVkIHdpdGggYSByZXBsYWNlciBmdW5jdGlvbiwgdGhlbiBjYWxsIHRoZSByZXBsYWNlciB0b1xuLy8gb2J0YWluIGEgcmVwbGFjZW1lbnQgdmFsdWUuXG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhbHVlID0gcmVwLmNhbGwoaG9sZGVyLCBrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuXG4vLyBXaGF0IGhhcHBlbnMgbmV4dCBkZXBlbmRzIG9uIHRoZSB2YWx1ZSdzIHR5cGUuXG5cbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHJldHVybiBxdW90ZSh2YWx1ZSk7XG5cbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcblxuLy8gSlNPTiBudW1iZXJzIG11c3QgYmUgZmluaXRlLiBFbmNvZGUgbm9uLWZpbml0ZSBudW1iZXJzIGFzIG51bGwuXG5cbiAgICAgICAgICAgIHJldHVybiBpc0Zpbml0ZSh2YWx1ZSkgPyBTdHJpbmcodmFsdWUpIDogJ251bGwnO1xuXG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBjYXNlICdudWxsJzpcblxuLy8gSWYgdGhlIHZhbHVlIGlzIGEgYm9vbGVhbiBvciBudWxsLCBjb252ZXJ0IGl0IHRvIGEgc3RyaW5nLiBOb3RlOlxuLy8gdHlwZW9mIG51bGwgZG9lcyBub3QgcHJvZHVjZSAnbnVsbCcuIFRoZSBjYXNlIGlzIGluY2x1ZGVkIGhlcmUgaW5cbi8vIHRoZSByZW1vdGUgY2hhbmNlIHRoYXQgdGhpcyBnZXRzIGZpeGVkIHNvbWVkYXkuXG5cbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuXG4vLyBJZiB0aGUgdHlwZSBpcyAnb2JqZWN0Jywgd2UgbWlnaHQgYmUgZGVhbGluZyB3aXRoIGFuIG9iamVjdCBvciBhbiBhcnJheSBvclxuLy8gbnVsbC5cblxuICAgICAgICBjYXNlICdvYmplY3QnOlxuXG4vLyBEdWUgdG8gYSBzcGVjaWZpY2F0aW9uIGJsdW5kZXIgaW4gRUNNQVNjcmlwdCwgdHlwZW9mIG51bGwgaXMgJ29iamVjdCcsXG4vLyBzbyB3YXRjaCBvdXQgZm9yIHRoYXQgY2FzZS5cblxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgICAgICB9XG5cbi8vIE1ha2UgYW4gYXJyYXkgdG8gaG9sZCB0aGUgcGFydGlhbCByZXN1bHRzIG9mIHN0cmluZ2lmeWluZyB0aGlzIG9iamVjdCB2YWx1ZS5cblxuICAgICAgICAgICAgZ2FwICs9IGluZGVudDtcbiAgICAgICAgICAgIHBhcnRpYWwgPSBbXTtcblxuLy8gSXMgdGhlIHZhbHVlIGFuIGFycmF5P1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcblxuLy8gVGhlIHZhbHVlIGlzIGFuIGFycmF5LiBTdHJpbmdpZnkgZXZlcnkgZWxlbWVudC4gVXNlIG51bGwgYXMgYSBwbGFjZWhvbGRlclxuLy8gZm9yIG5vbi1KU09OIHZhbHVlcy5cblxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGlhbFtpXSA9IHN0cihpLCB2YWx1ZSkgfHwgJ251bGwnO1xuICAgICAgICAgICAgICAgIH1cblxuLy8gSm9pbiBhbGwgb2YgdGhlIGVsZW1lbnRzIHRvZ2V0aGVyLCBzZXBhcmF0ZWQgd2l0aCBjb21tYXMsIGFuZCB3cmFwIHRoZW0gaW5cbi8vIGJyYWNrZXRzLlxuXG4gICAgICAgICAgICAgICAgdiA9IHBhcnRpYWwubGVuZ3RoID09PSAwID8gJ1tdJyA6IGdhcCA/XG4gICAgICAgICAgICAgICAgICAgICdbXFxuJyArIGdhcCArIHBhcnRpYWwuam9pbignLFxcbicgKyBnYXApICsgJ1xcbicgKyBtaW5kICsgJ10nIDpcbiAgICAgICAgICAgICAgICAgICAgJ1snICsgcGFydGlhbC5qb2luKCcsJykgKyAnXSc7XG4gICAgICAgICAgICAgICAgZ2FwID0gbWluZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH1cblxuLy8gSWYgdGhlIHJlcGxhY2VyIGlzIGFuIGFycmF5LCB1c2UgaXQgdG8gc2VsZWN0IHRoZSBtZW1iZXJzIHRvIGJlIHN0cmluZ2lmaWVkLlxuXG4gICAgICAgICAgICBpZiAocmVwICYmIHR5cGVvZiByZXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gcmVwLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXBbaV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gcmVwW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHN0cihrLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpYWwucHVzaChxdW90ZShrKSArIChnYXAgPyAnOiAnIDogJzonKSArIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuLy8gT3RoZXJ3aXNlLCBpdGVyYXRlIHRocm91Z2ggYWxsIG9mIHRoZSBrZXlzIGluIHRoZSBvYmplY3QuXG5cbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBzdHIoaywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsLnB1c2gocXVvdGUoaykgKyAoZ2FwID8gJzogJyA6ICc6JykgKyB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuLy8gSm9pbiBhbGwgb2YgdGhlIG1lbWJlciB0ZXh0cyB0b2dldGhlciwgc2VwYXJhdGVkIHdpdGggY29tbWFzLFxuLy8gYW5kIHdyYXAgdGhlbSBpbiBicmFjZXMuXG5cbiAgICAgICAgICAgIHYgPSBwYXJ0aWFsLmxlbmd0aCA9PT0gMCA/ICd7fScgOiBnYXAgP1xuICAgICAgICAgICAgICAgICd7XFxuJyArIGdhcCArIHBhcnRpYWwuam9pbignLFxcbicgKyBnYXApICsgJ1xcbicgKyBtaW5kICsgJ30nIDpcbiAgICAgICAgICAgICAgICAneycgKyBwYXJ0aWFsLmpvaW4oJywnKSArICd9JztcbiAgICAgICAgICAgIGdhcCA9IG1pbmQ7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuICAgIH1cblxuLy8gSWYgdGhlIEpTT04gb2JqZWN0IGRvZXMgbm90IHlldCBoYXZlIGEgc3RyaW5naWZ5IG1ldGhvZCwgZ2l2ZSBpdCBvbmUuXG5cbiAgICBpZiAodHlwZW9mIEpTT04uc3RyaW5naWZ5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIEpTT04uc3RyaW5naWZ5ID0gZnVuY3Rpb24gKHZhbHVlLCByZXBsYWNlciwgc3BhY2UpIHtcblxuLy8gVGhlIHN0cmluZ2lmeSBtZXRob2QgdGFrZXMgYSB2YWx1ZSBhbmQgYW4gb3B0aW9uYWwgcmVwbGFjZXIsIGFuZCBhbiBvcHRpb25hbFxuLy8gc3BhY2UgcGFyYW1ldGVyLCBhbmQgcmV0dXJucyBhIEpTT04gdGV4dC4gVGhlIHJlcGxhY2VyIGNhbiBiZSBhIGZ1bmN0aW9uXG4vLyB0aGF0IGNhbiByZXBsYWNlIHZhbHVlcywgb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncyB0aGF0IHdpbGwgc2VsZWN0IHRoZSBrZXlzLlxuLy8gQSBkZWZhdWx0IHJlcGxhY2VyIG1ldGhvZCBjYW4gYmUgcHJvdmlkZWQuIFVzZSBvZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGNhblxuLy8gcHJvZHVjZSB0ZXh0IHRoYXQgaXMgbW9yZSBlYXNpbHkgcmVhZGFibGUuXG5cbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgZ2FwID0gJyc7XG4gICAgICAgICAgICBpbmRlbnQgPSAnJztcblxuLy8gSWYgdGhlIHNwYWNlIHBhcmFtZXRlciBpcyBhIG51bWJlciwgbWFrZSBhbiBpbmRlbnQgc3RyaW5nIGNvbnRhaW5pbmcgdGhhdFxuLy8gbWFueSBzcGFjZXMuXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BhY2UgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNwYWNlOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50ICs9ICcgJztcbiAgICAgICAgICAgICAgICB9XG5cbi8vIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcsIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgaW5kZW50IHN0cmluZy5cblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaW5kZW50ID0gc3BhY2U7XG4gICAgICAgICAgICB9XG5cbi8vIElmIHRoZXJlIGlzIGEgcmVwbGFjZXIsIGl0IG11c3QgYmUgYSBmdW5jdGlvbiBvciBhbiBhcnJheS5cbi8vIE90aGVyd2lzZSwgdGhyb3cgYW4gZXJyb3IuXG5cbiAgICAgICAgICAgIHJlcCA9IHJlcGxhY2VyO1xuICAgICAgICAgICAgaWYgKHJlcGxhY2VyICYmIHR5cGVvZiByZXBsYWNlciAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgICAgICAgICAodHlwZW9mIHJlcGxhY2VyICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcmVwbGFjZXIubGVuZ3RoICE9PSAnbnVtYmVyJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pTT04uc3RyaW5naWZ5Jyk7XG4gICAgICAgICAgICB9XG5cbi8vIE1ha2UgYSBmYWtlIHJvb3Qgb2JqZWN0IGNvbnRhaW5pbmcgb3VyIHZhbHVlIHVuZGVyIHRoZSBrZXkgb2YgJycuXG4vLyBSZXR1cm4gdGhlIHJlc3VsdCBvZiBzdHJpbmdpZnlpbmcgdGhlIHZhbHVlLlxuXG4gICAgICAgICAgICByZXR1cm4gc3RyKCcnLCB7Jyc6IHZhbHVlfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG5cbi8vIElmIHRoZSBKU09OIG9iamVjdCBkb2VzIG5vdCB5ZXQgaGF2ZSBhIHBhcnNlIG1ldGhvZCwgZ2l2ZSBpdCBvbmUuXG5cbiAgICBpZiAodHlwZW9mIEpTT04ucGFyc2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgSlNPTi5wYXJzZSA9IGZ1bmN0aW9uICh0ZXh0LCByZXZpdmVyKSB7XG5cbi8vIFRoZSBwYXJzZSBtZXRob2QgdGFrZXMgYSB0ZXh0IGFuZCBhbiBvcHRpb25hbCByZXZpdmVyIGZ1bmN0aW9uLCBhbmQgcmV0dXJuc1xuLy8gYSBKYXZhU2NyaXB0IHZhbHVlIGlmIHRoZSB0ZXh0IGlzIGEgdmFsaWQgSlNPTiB0ZXh0LlxuXG4gICAgICAgICAgICB2YXIgajtcblxuICAgICAgICAgICAgZnVuY3Rpb24gd2Fsayhob2xkZXIsIGtleSkge1xuXG4vLyBUaGUgd2FsayBtZXRob2QgaXMgdXNlZCB0byByZWN1cnNpdmVseSB3YWxrIHRoZSByZXN1bHRpbmcgc3RydWN0dXJlIHNvXG4vLyB0aGF0IG1vZGlmaWNhdGlvbnMgY2FuIGJlIG1hZGUuXG5cbiAgICAgICAgICAgICAgICB2YXIgaywgdiwgdmFsdWUgPSBob2xkZXJba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHdhbGsodmFsdWUsIGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVba10gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldml2ZXIuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuXG5cbi8vIFBhcnNpbmcgaGFwcGVucyBpbiBmb3VyIHN0YWdlcy4gSW4gdGhlIGZpcnN0IHN0YWdlLCB3ZSByZXBsYWNlIGNlcnRhaW5cbi8vIFVuaWNvZGUgY2hhcmFjdGVycyB3aXRoIGVzY2FwZSBzZXF1ZW5jZXMuIEphdmFTY3JpcHQgaGFuZGxlcyBtYW55IGNoYXJhY3RlcnNcbi8vIGluY29ycmVjdGx5LCBlaXRoZXIgc2lsZW50bHkgZGVsZXRpbmcgdGhlbSwgb3IgdHJlYXRpbmcgdGhlbSBhcyBsaW5lIGVuZGluZ3MuXG5cbiAgICAgICAgICAgIHRleHQgPSBTdHJpbmcodGV4dCk7XG4gICAgICAgICAgICBjeC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgaWYgKGN4LnRlc3QodGV4dCkpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKGN4LCBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1xcXFx1JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAoJzAwMDAnICsgYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4vLyBJbiB0aGUgc2Vjb25kIHN0YWdlLCB3ZSBydW4gdGhlIHRleHQgYWdhaW5zdCByZWd1bGFyIGV4cHJlc3Npb25zIHRoYXQgbG9va1xuLy8gZm9yIG5vbi1KU09OIHBhdHRlcm5zLiBXZSBhcmUgZXNwZWNpYWxseSBjb25jZXJuZWQgd2l0aCAnKCknIGFuZCAnbmV3J1xuLy8gYmVjYXVzZSB0aGV5IGNhbiBjYXVzZSBpbnZvY2F0aW9uLCBhbmQgJz0nIGJlY2F1c2UgaXQgY2FuIGNhdXNlIG11dGF0aW9uLlxuLy8gQnV0IGp1c3QgdG8gYmUgc2FmZSwgd2Ugd2FudCB0byByZWplY3QgYWxsIHVuZXhwZWN0ZWQgZm9ybXMuXG5cbi8vIFdlIHNwbGl0IHRoZSBzZWNvbmQgc3RhZ2UgaW50byA0IHJlZ2V4cCBvcGVyYXRpb25zIGluIG9yZGVyIHRvIHdvcmsgYXJvdW5kXG4vLyBjcmlwcGxpbmcgaW5lZmZpY2llbmNpZXMgaW4gSUUncyBhbmQgU2FmYXJpJ3MgcmVnZXhwIGVuZ2luZXMuIEZpcnN0IHdlXG4vLyByZXBsYWNlIHRoZSBKU09OIGJhY2tzbGFzaCBwYWlycyB3aXRoICdAJyAoYSBub24tSlNPTiBjaGFyYWN0ZXIpLiBTZWNvbmQsIHdlXG4vLyByZXBsYWNlIGFsbCBzaW1wbGUgdmFsdWUgdG9rZW5zIHdpdGggJ10nIGNoYXJhY3RlcnMuIFRoaXJkLCB3ZSBkZWxldGUgYWxsXG4vLyBvcGVuIGJyYWNrZXRzIHRoYXQgZm9sbG93IGEgY29sb24gb3IgY29tbWEgb3IgdGhhdCBiZWdpbiB0aGUgdGV4dC4gRmluYWxseSxcbi8vIHdlIGxvb2sgdG8gc2VlIHRoYXQgdGhlIHJlbWFpbmluZyBjaGFyYWN0ZXJzIGFyZSBvbmx5IHdoaXRlc3BhY2Ugb3IgJ10nIG9yXG4vLyAnLCcgb3IgJzonIG9yICd7JyBvciAnfScuIElmIHRoYXQgaXMgc28sIHRoZW4gdGhlIHRleHQgaXMgc2FmZSBmb3IgZXZhbC5cblxuICAgICAgICAgICAgaWYgKC9eW1xcXSw6e31cXHNdKiQvXG4gICAgICAgICAgICAgICAgICAgIC50ZXN0KHRleHQucmVwbGFjZSgvXFxcXCg/OltcIlxcXFxcXC9iZm5ydF18dVswLTlhLWZBLUZdezR9KS9nLCAnQCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXCJbXlwiXFxcXFxcblxccl0qXCJ8dHJ1ZXxmYWxzZXxudWxsfC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/L2csICddJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oPzpefDp8LCkoPzpcXHMqXFxbKSsvZywgJycpKSkge1xuXG4vLyBJbiB0aGUgdGhpcmQgc3RhZ2Ugd2UgdXNlIHRoZSBldmFsIGZ1bmN0aW9uIHRvIGNvbXBpbGUgdGhlIHRleHQgaW50byBhXG4vLyBKYXZhU2NyaXB0IHN0cnVjdHVyZS4gVGhlICd7JyBvcGVyYXRvciBpcyBzdWJqZWN0IHRvIGEgc3ludGFjdGljIGFtYmlndWl0eVxuLy8gaW4gSmF2YVNjcmlwdDogaXQgY2FuIGJlZ2luIGEgYmxvY2sgb3IgYW4gb2JqZWN0IGxpdGVyYWwuIFdlIHdyYXAgdGhlIHRleHRcbi8vIGluIHBhcmVucyB0byBlbGltaW5hdGUgdGhlIGFtYmlndWl0eS5cblxuICAgICAgICAgICAgICAgIGogPSBldmFsKCcoJyArIHRleHQgKyAnKScpO1xuXG4vLyBJbiB0aGUgb3B0aW9uYWwgZm91cnRoIHN0YWdlLCB3ZSByZWN1cnNpdmVseSB3YWxrIHRoZSBuZXcgc3RydWN0dXJlLCBwYXNzaW5nXG4vLyBlYWNoIG5hbWUvdmFsdWUgcGFpciB0byBhIHJldml2ZXIgZnVuY3Rpb24gZm9yIHBvc3NpYmxlIHRyYW5zZm9ybWF0aW9uLlxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiByZXZpdmVyID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgICAgICAgICAgd2Fsayh7Jyc6IGp9LCAnJykgOiBqO1xuICAgICAgICAgICAgfVxuXG4vLyBJZiB0aGUgdGV4dCBpcyBub3QgSlNPTiBwYXJzZWFibGUsIHRoZW4gYSBTeW50YXhFcnJvciBpcyB0aHJvd24uXG5cbiAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignSlNPTi5wYXJzZScpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdsb2JhbC5KU09OID0gSlNPTjtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEpTT047XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19KU09OQDEuMC4wQEpTT04vanNvbjIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL19KU09OQDEuMC4wQEpTT04vanNvbjIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsInZhciBjaGFyZW5jID0ge1xuICAvLyBVVEYtOCBlbmNvZGluZ1xuICB1dGY4OiB7XG4gICAgLy8gQ29udmVydCBhIHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBzdHJpbmdUb0J5dGVzOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBjaGFyZW5jLmJpbi5zdHJpbmdUb0J5dGVzKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgc3RyaW5nXG4gICAgYnl0ZXNUb1N0cmluZzogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGNoYXJlbmMuYmluLmJ5dGVzVG9TdHJpbmcoYnl0ZXMpKSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEJpbmFyeSBlbmNvZGluZ1xuICBiaW46IHtcbiAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIHN0cmluZ1RvQnl0ZXM6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspXG4gICAgICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBzdHJpbmdcbiAgICBieXRlc1RvU3RyaW5nOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgc3RyID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHN0ci5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pKTtcbiAgICAgIHJldHVybiBzdHIuam9pbignJyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNoYXJlbmM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vX2NoYXJlbmNAMC4wLjJAY2hhcmVuYy9jaGFyZW5jLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9fY2hhcmVuY0AwLjAuMkBjaGFyZW5jL2NoYXJlbmMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIihmdW5jdGlvbigpIHtcbiAgdmFyIGJhc2U2NG1hcFxuICAgICAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLycsXG5cbiAgY3J5cHQgPSB7XG4gICAgLy8gQml0LXdpc2Ugcm90YXRpb24gbGVmdFxuICAgIHJvdGw6IGZ1bmN0aW9uKG4sIGIpIHtcbiAgICAgIHJldHVybiAobiA8PCBiKSB8IChuID4+PiAoMzIgLSBiKSk7XG4gICAgfSxcblxuICAgIC8vIEJpdC13aXNlIHJvdGF0aW9uIHJpZ2h0XG4gICAgcm90cjogZnVuY3Rpb24obiwgYikge1xuICAgICAgcmV0dXJuIChuIDw8ICgzMiAtIGIpKSB8IChuID4+PiBiKTtcbiAgICB9LFxuXG4gICAgLy8gU3dhcCBiaWctZW5kaWFuIHRvIGxpdHRsZS1lbmRpYW4gYW5kIHZpY2UgdmVyc2FcbiAgICBlbmRpYW46IGZ1bmN0aW9uKG4pIHtcbiAgICAgIC8vIElmIG51bWJlciBnaXZlbiwgc3dhcCBlbmRpYW5cbiAgICAgIGlmIChuLmNvbnN0cnVjdG9yID09IE51bWJlcikge1xuICAgICAgICByZXR1cm4gY3J5cHQucm90bChuLCA4KSAmIDB4MDBGRjAwRkYgfCBjcnlwdC5yb3RsKG4sIDI0KSAmIDB4RkYwMEZGMDA7XG4gICAgICB9XG5cbiAgICAgIC8vIEVsc2UsIGFzc3VtZSBhcnJheSBhbmQgc3dhcCBhbGwgaXRlbXNcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbi5sZW5ndGg7IGkrKylcbiAgICAgICAgbltpXSA9IGNyeXB0LmVuZGlhbihuW2ldKTtcbiAgICAgIHJldHVybiBuO1xuICAgIH0sXG5cbiAgICAvLyBHZW5lcmF0ZSBhbiBhcnJheSBvZiBhbnkgbGVuZ3RoIG9mIHJhbmRvbSBieXRlc1xuICAgIHJhbmRvbUJ5dGVzOiBmdW5jdGlvbihuKSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdOyBuID4gMDsgbi0tKVxuICAgICAgICBieXRlcy5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBiaWctZW5kaWFuIDMyLWJpdCB3b3Jkc1xuICAgIGJ5dGVzVG9Xb3JkczogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIHdvcmRzID0gW10sIGkgPSAwLCBiID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrLCBiICs9IDgpXG4gICAgICAgIHdvcmRzW2IgPj4+IDVdIHw9IGJ5dGVzW2ldIDw8ICgyNCAtIGIgJSAzMik7XG4gICAgICByZXR1cm4gd29yZHM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYmlnLWVuZGlhbiAzMi1iaXQgd29yZHMgdG8gYSBieXRlIGFycmF5XG4gICAgd29yZHNUb0J5dGVzOiBmdW5jdGlvbih3b3Jkcykge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgYiA9IDA7IGIgPCB3b3Jkcy5sZW5ndGggKiAzMjsgYiArPSA4KVxuICAgICAgICBieXRlcy5wdXNoKCh3b3Jkc1tiID4+PiA1XSA+Pj4gKDI0IC0gYiAlIDMyKSkgJiAweEZGKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBoZXggc3RyaW5nXG4gICAgYnl0ZXNUb0hleDogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIGhleCA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhleC5wdXNoKChieXRlc1tpXSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcbiAgICAgICAgaGV4LnB1c2goKGJ5dGVzW2ldICYgMHhGKS50b1N0cmluZygxNikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhleC5qb2luKCcnKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGhleCBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgaGV4VG9CeXRlczogZnVuY3Rpb24oaGV4KSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBjID0gMDsgYyA8IGhleC5sZW5ndGg7IGMgKz0gMilcbiAgICAgICAgYnl0ZXMucHVzaChwYXJzZUludChoZXguc3Vic3RyKGMsIDIpLCAxNikpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIGJhc2UtNjQgc3RyaW5nXG4gICAgYnl0ZXNUb0Jhc2U2NDogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIGJhc2U2NCA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIHZhciB0cmlwbGV0ID0gKGJ5dGVzW2ldIDw8IDE2KSB8IChieXRlc1tpICsgMV0gPDwgOCkgfCBieXRlc1tpICsgMl07XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKVxuICAgICAgICAgIGlmIChpICogOCArIGogKiA2IDw9IGJ5dGVzLmxlbmd0aCAqIDgpXG4gICAgICAgICAgICBiYXNlNjQucHVzaChiYXNlNjRtYXAuY2hhckF0KCh0cmlwbGV0ID4+PiA2ICogKDMgLSBqKSkgJiAweDNGKSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgYmFzZTY0LnB1c2goJz0nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYXNlNjQuam9pbignJyk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBiYXNlLTY0IHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBiYXNlNjRUb0J5dGVzOiBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICAgIC8vIFJlbW92ZSBub24tYmFzZS02NCBjaGFyYWN0ZXJzXG4gICAgICBiYXNlNjQgPSBiYXNlNjQucmVwbGFjZSgvW15BLVowLTkrXFwvXS9pZywgJycpO1xuXG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBpID0gMCwgaW1vZDQgPSAwOyBpIDwgYmFzZTY0Lmxlbmd0aDtcbiAgICAgICAgICBpbW9kNCA9ICsraSAlIDQpIHtcbiAgICAgICAgaWYgKGltb2Q0ID09IDApIGNvbnRpbnVlO1xuICAgICAgICBieXRlcy5wdXNoKCgoYmFzZTY0bWFwLmluZGV4T2YoYmFzZTY0LmNoYXJBdChpIC0gMSkpXG4gICAgICAgICAgICAmIChNYXRoLnBvdygyLCAtMiAqIGltb2Q0ICsgOCkgLSAxKSkgPDwgKGltb2Q0ICogMikpXG4gICAgICAgICAgICB8IChiYXNlNjRtYXAuaW5kZXhPZihiYXNlNjQuY2hhckF0KGkpKSA+Pj4gKDYgLSBpbW9kNCAqIDIpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gY3J5cHQ7XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19jcnlwdEAwLjAuMkBjcnlwdC9jcnlwdC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvX2NyeXB0QDAuMC4yQGNyeXB0L2NyeXB0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9faXMtYnVmZmVyQDEuMS42QGlzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvX2lzLWJ1ZmZlckAxLjEuNkBpcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIihmdW5jdGlvbigpe1xyXG4gIHZhciBjcnlwdCA9IHJlcXVpcmUoJ2NyeXB0JyksXHJcbiAgICAgIHV0ZjggPSByZXF1aXJlKCdjaGFyZW5jJykudXRmOCxcclxuICAgICAgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKSxcclxuICAgICAgYmluID0gcmVxdWlyZSgnY2hhcmVuYycpLmJpbixcclxuXHJcbiAgLy8gVGhlIGNvcmVcclxuICBtZDUgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgLy8gQ29udmVydCB0byBieXRlIGFycmF5XHJcbiAgICBpZiAobWVzc2FnZS5jb25zdHJ1Y3RvciA9PSBTdHJpbmcpXHJcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RpbmcgPT09ICdiaW5hcnknKVxyXG4gICAgICAgIG1lc3NhZ2UgPSBiaW4uc3RyaW5nVG9CeXRlcyhtZXNzYWdlKTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIG1lc3NhZ2UgPSB1dGY4LnN0cmluZ1RvQnl0ZXMobWVzc2FnZSk7XHJcbiAgICBlbHNlIGlmIChpc0J1ZmZlcihtZXNzYWdlKSlcclxuICAgICAgbWVzc2FnZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG1lc3NhZ2UsIDApO1xyXG4gICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZSkpXHJcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnRvU3RyaW5nKCk7XHJcbiAgICAvLyBlbHNlLCBhc3N1bWUgYnl0ZSBhcnJheSBhbHJlYWR5XHJcblxyXG4gICAgdmFyIG0gPSBjcnlwdC5ieXRlc1RvV29yZHMobWVzc2FnZSksXHJcbiAgICAgICAgbCA9IG1lc3NhZ2UubGVuZ3RoICogOCxcclxuICAgICAgICBhID0gIDE3MzI1ODQxOTMsXHJcbiAgICAgICAgYiA9IC0yNzE3MzM4NzksXHJcbiAgICAgICAgYyA9IC0xNzMyNTg0MTk0LFxyXG4gICAgICAgIGQgPSAgMjcxNzMzODc4O1xyXG5cclxuICAgIC8vIFN3YXAgZW5kaWFuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbVtpXSA9ICgobVtpXSA8PCAgOCkgfCAobVtpXSA+Pj4gMjQpKSAmIDB4MDBGRjAwRkYgfFxyXG4gICAgICAgICAgICAgKChtW2ldIDw8IDI0KSB8IChtW2ldID4+PiAgOCkpICYgMHhGRjAwRkYwMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYWRkaW5nXHJcbiAgICBtW2wgPj4+IDVdIHw9IDB4ODAgPDwgKGwgJSAzMik7XHJcbiAgICBtWygoKGwgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gbDtcclxuXHJcbiAgICAvLyBNZXRob2Qgc2hvcnRjdXRzXHJcbiAgICB2YXIgRkYgPSBtZDUuX2ZmLFxyXG4gICAgICAgIEdHID0gbWQ1Ll9nZyxcclxuICAgICAgICBISCA9IG1kNS5faGgsXHJcbiAgICAgICAgSUkgPSBtZDUuX2lpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5sZW5ndGg7IGkgKz0gMTYpIHtcclxuXHJcbiAgICAgIHZhciBhYSA9IGEsXHJcbiAgICAgICAgICBiYiA9IGIsXHJcbiAgICAgICAgICBjYyA9IGMsXHJcbiAgICAgICAgICBkZCA9IGQ7XHJcblxyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKyAwXSwgIDcsIC02ODA4NzY5MzYpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKyAyXSwgMTcsICA2MDYxMDU4MTkpO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsgNF0sICA3LCAtMTc2NDE4ODk3KTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsgNV0sIDEyLCAgMTIwMDA4MDQyNik7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKyA3XSwgMjIsIC00NTcwNTk4Myk7XHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krIDhdLCAgNywgIDE3NzAwMzU0MTYpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsxMF0sIDE3LCAtNDIwNjMpO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKzExXSwgMjIsIC0xOTkwNDA0MTYyKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsxMl0sICA3LCAgMTgwNDYwMzY4Mik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krMTNdLCAxMiwgLTQwMzQxMTAxKTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krMTVdLCAyMiwgIDEyMzY1MzUzMjkpO1xyXG5cclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgMV0sICA1LCAtMTY1Nzk2NTEwKTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsgNl0sICA5LCAtMTA2OTUwMTYzMik7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krMTFdLCAxNCwgIDY0MzcxNzcxMyk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krIDBdLCAyMCwgLTM3Mzg5NzMwMik7XHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krIDVdLCAgNSwgLTcwMTU1ODY5MSk7XHJcbiAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBtW2krMTBdLCAgOSwgIDM4MDE2MDgzKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsxNV0sIDE0LCAtNjYwNDc4MzM1KTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgOV0sICA1LCAgNTY4NDQ2NDM4KTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsxNF0sICA5LCAtMTAxOTgwMzY5MCk7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krIDhdLCAyMCwgIDExNjM1MzE1MDEpO1xyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKzEzXSwgIDUsIC0xNDQ0NjgxNDY3KTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsgMl0sICA5LCAtNTE0MDM3ODQpO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKyA3XSwgMTQsICAxNzM1MzI4NDczKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsxMl0sIDIwLCAtMTkyNjYwNzczNCk7XHJcblxyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyA1XSwgIDQsIC0zNzg1NTgpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsxMV0sIDE2LCAgMTgzOTAzMDU2Mik7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krMTRdLCAyMywgLTM1MzA5NTU2KTtcclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsgMV0sICA0LCAtMTUzMDk5MjA2MCk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krIDRdLCAxMSwgIDEyNzI4OTMzNTMpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKzEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsxM10sICA0LCAgNjgxMjc5MTc0KTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsgMF0sIDExLCAtMzU4NTM3MjIyKTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsgM10sIDE2LCAtNzIyNTIxOTc5KTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsgNl0sIDIzLCAgNzYwMjkxODkpO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyA5XSwgIDQsIC02NDAzNjQ0ODcpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKzEyXSwgMTEsIC00MjE4MTU4MzUpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKzE1XSwgMTYsICA1MzA3NDI1MjApO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xyXG5cclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsgMF0sICA2LCAtMTk4NjMwODQ0KTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsgN10sIDEwLCAgMTEyNjg5MTQxNSk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKyA1XSwgMjEsIC01NzQzNDA1NSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krMTJdLCAgNiwgIDE3MDA0ODU1NzEpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsxMF0sIDE1LCAtMTA1MTUyMyk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKyA4XSwgIDYsICAxODczMzEzMzU5KTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsxNV0sIDEwLCAtMzA2MTE3NDQpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsxM10sIDIxLCAgMTMwOTE1MTY0OSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krIDRdLCAgNiwgLTE0NTUyMzA3MCk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKyAyXSwgMTUsICA3MTg3ODcyNTkpO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xyXG5cclxuICAgICAgYSA9IChhICsgYWEpID4+PiAwO1xyXG4gICAgICBiID0gKGIgKyBiYikgPj4+IDA7XHJcbiAgICAgIGMgPSAoYyArIGNjKSA+Pj4gMDtcclxuICAgICAgZCA9IChkICsgZGQpID4+PiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjcnlwdC5lbmRpYW4oW2EsIGIsIGMsIGRdKTtcclxuICB9O1xyXG5cclxuICAvLyBBdXhpbGlhcnkgZnVuY3Rpb25zXHJcbiAgbWQ1Ll9mZiAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGIgJiBjIHwgfmIgJiBkKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9nZyAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGIgJiBkIHwgYyAmIH5kKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9oaCAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGIgXiBjIF4gZCkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG4gIG1kNS5faWkgID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuICAgIHZhciBuID0gYSArIChjIF4gKGIgfCB+ZCkpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuXHJcbiAgLy8gUGFja2FnZSBwcml2YXRlIGJsb2Nrc2l6ZVxyXG4gIG1kNS5fYmxvY2tzaXplID0gMTY7XHJcbiAgbWQ1Ll9kaWdlc3RzaXplID0gMTY7XHJcblxyXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuICAgIGlmIChtZXNzYWdlID09PSB1bmRlZmluZWQgfHwgbWVzc2FnZSA9PT0gbnVsbClcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGFyZ3VtZW50ICcgKyBtZXNzYWdlKTtcclxuXHJcbiAgICB2YXIgZGlnZXN0Ynl0ZXMgPSBjcnlwdC53b3Jkc1RvQnl0ZXMobWQ1KG1lc3NhZ2UsIG9wdGlvbnMpKTtcclxuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuYXNCeXRlcyA/IGRpZ2VzdGJ5dGVzIDpcclxuICAgICAgICBvcHRpb25zICYmIG9wdGlvbnMuYXNTdHJpbmcgPyBiaW4uYnl0ZXNUb1N0cmluZyhkaWdlc3RieXRlcykgOlxyXG4gICAgICAgIGNyeXB0LmJ5dGVzVG9IZXgoZGlnZXN0Ynl0ZXMpO1xyXG4gIH07XHJcblxyXG59KSgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vX21kNUAyLjIuMUBtZDUvbWQ1LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9fbWQ1QDIuMi4xQG1kNS9tZDUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsImltcG9ydCB7c2hvd0NoaWxkTG9ja30gZnJvbSAnLi9hcHAvY2hpbGRMb2NrJztcclxuaW1wb3J0IHtjaGlsZE1lbnV9IGZyb20gJy4vYXBwL2NoaWxkTWVudSc7XHJcblxyXG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gXCIuL2FwcC9kaWFsb2dcIjtcclxuaW1wb3J0IHtzaG93TG9hZGluZyxoaWRlTG9hZGluZ30gZnJvbSBcIi4vYXBwL2xvYWRpbmdcIjtcclxuaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5pbXBvcnQge2FwcEFyZ3N9IGZyb20gJy4vYXBwL1BhZ2VBcmdzJztcclxuXHJcblxyXG52YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbnZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZU1lbnUoKSB7XHJcbiAgICB0aGlzLmxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmxheW91dCk7XHJcbiAgICB0aGlzLmxheW91dC5jbGFzc05hbWUgPSAnaG9tZS1tZW51JztcclxuICAgIHRoaXMubGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgJzxkaXYgaWQ9XCJtZW51LWJ0bjBcIiBjbGFzcz1cIm1lbnUtYnRuXCI+PGltZyBzcmM9XCJcIj48L2Rpdj4nICtcclxuICAgICAgICAnPGRpdiBpZD1cIm1lbnUtYnRuMVwiIGNsYXNzPVwibWVudS1idG5cIj48aW1nIHNyYz1cIlwiPjwvZGl2PicgK1xyXG4gICAgICAgICc8ZGl2IGlkPVwibWVudS1idG4yXCIgY2xhc3M9XCJtZW51LWJ0blwiPjxpbWcgc3JjPVwiXCI+PC9kaXY+JyArXHJcbiAgICAgICAgJzxkaXYgaWQ9XCJtZW51LWJ0bjNcIiBjbGFzcz1cIm1lbnUtYnRuXCI+PGltZyBzcmM9XCJcIj48L2Rpdj4nK1xyXG4gICAgICAgICc8ZGl2IGlkPVwibWVudS1idG40XCIgY2xhc3M9XCJtZW51LWJ0blwiPjxpbWcgc3JjPVwiXCI+PC9kaXY+JztcclxuICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgKytpKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmxheW91dC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idG4nICsgaSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICAvL3NldFRpbWVvdXQoZnVuY3Rpb24gKGksIG5vZGUpIHtcclxuICAgICAgICB2YXIgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICBpbWcuc3JjID0gJ2ltZy9tZW51L25hdl8nICsgaSArICdfMC5wbmcnO1xyXG4gICAgICAgIC8vfSwgMTAwICogaSwgaSwgbm9kZSk7XHJcbiAgICB9XHJcbn1cclxuSG9tZU1lbnUucHJvdG90eXBlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiB7aW50fSBjdXJyZW50IFswLDNdXHJcbiAgICAgKi9cclxuICAgIGN1cnJlbnQ6IDAsXHJcbiAgICBvbktleURvd246IG51bGwsXHJcbiAgICB0ZGVVc2VyOiBudWxsLFxyXG5cclxuICAgIHNob3c6IGZ1bmN0aW9uIChjdXJyZW50LCBvbktleURvd24sIHRkZVVzZXIpIHtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gb25LZXlEb3duO1xyXG4gICAgICAgIHRoaXMudGRlVXNlciA9IHRkZVVzZXI7XHJcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcztcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBvd25lci5oYW5kbGVLZXkoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zZXRGb2N1cyh0aGlzLmN1cnJlbnQsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfc2V0Rm9jdXM6IGZ1bmN0aW9uIChjdXJyZW50LCBmb2N1cykge1xyXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5pdGVtc1tjdXJyZW50XTtcclxuICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGZvY3VzID8gJ21lbnUtYnRuLWZvY3VzJyA6ICdtZW51LWJ0bic7XHJcbiAgICAgICAgdmFyIGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgaWYgKGZvY3VzKSB7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSAnaW1nL21lbnUvbmF2XycgKyBjdXJyZW50ICsgJ18xLnBuZyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW1nLnNyYyA9ICdpbWcvbWVudS9uYXZfJyArIGN1cnJlbnQgKyAnXzAucG5nJztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0U2VsZWN0ZWQ6IGZ1bmN0aW9uIChjdXJyZW50KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEZvY3VzKGksIGN1cnJlbnQgPT0gaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUtleTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQtLTtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA8IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm9rOlxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLmN1cnJlbnQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcEFyZ3Mub25GaXJzdFBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBBcmdzLm9uSG9tZVBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50ID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3duZXIudGRlVXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkTG9jayA9IG93bmVyLnRkZVVzZXIuY2hpbGRMb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkTG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRNZW51LnNob3coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG4gPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2hpbGRMb2NrKGZ1bmN0aW9uIChjb2RlLCBtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWRMb2NrKGNvZGUsIG1zZywgb3duZXIsIGJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEsIDAsICfor7fovpPlhaXml6fnmoQ25L2N5pWw5a2X5a+G56CB77yM5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIsIDAsICfpgInmi6npnIDopoHnmoTmk43kvZzmjInnoa7lrprplK7ov5vooYzkuIvkuIDmraXvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE1lbnUuc2hvdyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lvIDlkK/nq6XplIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRDaGlsZExvY2sob3duZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb3duZXIub25LZXlEb3duLCBvd25lci50ZGVVc2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxLCAwLCAn5byA5ZCv56ul6ZSB5ZCO77yM5q+P5qyh5LuY6LS56K6i6LSt6ZyA6L6T5YWl5q2j56Gu5a+G56CB77yb5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA9PSA0KXtcclxuICAgICAgICAgICAgICAgICAgICBhcHBBcmdzLm9uVHVybnRhYmxlUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5lc2M6XHJcbiAgICAgICAgICAgICAgICBhcHBBcmdzLm9uRmlyc3RQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Yob3duZXIub25LZXlEb3duKSA9PT0gJ2Z1bmN0aW9uJykgb3duZXIub25LZXlEb3duKGN1cktleSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIGNvZGUge2ludH1cclxuICogQHBhcmFtIG1zZyB7c3RyaW5nfVxyXG4gKiBAcGFyYW0gb3duZXIge0hvbWVNZW51fVxyXG4gKiBAcGFyYW0gYnRuIHtpbnR9IDAu5YWz6Zet56ul6ZSBIDEu5pu05pS55a+G56CBXHJcbiAqL1xyXG5mdW5jdGlvbiBvblZhbGlkTG9jayhjb2RlLCBtc2csIG93bmVyLCBidG4pIHtcclxuICAgIGlmIChjb2RlID09IDApIHtcclxuICAgICAgICB2YXIgb2xkTG9jayA9IG93bmVyLnRkZVVzZXIuY2hpbGRMb2NrO1xyXG4gICAgICAgIGlmIChtc2cgPT0gb2xkTG9jaykge1xyXG4gICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGJjbGkgPSBvd25lci50ZGVVc2VyLnN0YmNsaTtcclxuICAgICAgICAgICAgICAgIHN0YmNsaS50ZGVMb2NrKG9sZExvY2ssICcnLCBmdW5jdGlvbiAoY29kZSwgYml6KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSAn56ul6ZSB5YWz6Zet5oiQ5YqfJztcclxuICAgICAgICAgICAgICAgICAgICBvblRkZUxvY2soY29kZSwgYml6LCBvd25lciwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc2V0Q2hpbGRMb2NrKG93bmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGRsZ0J0bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRsZ0J0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NoaWxkTG9jayhmdW5jdGlvbiAoY29kZSwgbXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWRMb2NrKGNvZGUsIG1zZywgb3duZXIsIGJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMSwgMCwgJ+ivt+i+k+WFpeaXp+eahDbkvY3mlbDlrZflr4bnoIHvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwLCAn5o+Q56S6JywgJ+erpemUgemqjOivgeWHuumUmScsICfph43or5UnLCAn5Y+W5raIJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG93bmVyLm9uS2V5RG93biwgb3duZXIudGRlVXNlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Q2hpbGRMb2NrKG93bmVyKSB7XHJcbiAgICB2YXIgb2xkTG9jayA9IG93bmVyLnRkZVVzZXIuY2hpbGRMb2NrO1xyXG4gICAgdmFyIG5ld0xvY2s7XHJcbiAgICBzaG93Q2hpbGRMb2NrKGZ1bmN0aW9uIChjb2RlLCBtc2cpIHtcclxuICAgICAgICBpZiAoY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIG5ld0xvY2sgPSBtc2c7XHJcbiAgICAgICAgICAgIHNob3dDaGlsZExvY2soZnVuY3Rpb24gKGNvZGUsIG1zZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cgIT0gbmV3TG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Q2hpbGRMb2NrKG93bmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwLCAn5o+Q56S6JywgJ+S4pOasoei+k+WFpeS4jeWQjCcsICfph43or5UnLCAn5Y+W5raIJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YmNsaSA9IG93bmVyLnRkZVVzZXIuc3RiY2xpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGJjbGkudGRlTG9jayhvbGRMb2NrLCBuZXdMb2NrLCBmdW5jdGlvbiAoY29kZSwgYml6KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG9sZExvY2sgPyAn56ul6ZSB5pu05pS55oiQ5YqfJyA6ICfnq6XplIHlvIDlkK/miJDlip8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25UZGVMb2NrKGNvZGUsIGJpeiwgb3duZXIsIHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb3duZXIub25LZXlEb3duLCBvd25lci50ZGVVc2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCwgMSwgJ+ivt+WGjeasoei+k+WFpeaWsOeahDbkvY3mlbDlrZflr4bnoIHvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG93bmVyLm9uS2V5RG93biwgb3duZXIudGRlVXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgMCwgMCwgJ+ivt+i+k+WFpeaWsOeahDbkvY3mlbDlrZflr4bnoIHvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25UZGVMb2NrKGNvZGUsIGJpeiwgb3duZXIpIHtcclxuICAgIHZhciB0ZXh0ID0gYXJndW1lbnRzWzNdID8gYXJndW1lbnRzWzNdIDogJ+erpemUgeiuvue9ruaIkOWKnyc7XHJcbiAgICBpZiAoY29kZSA9PSAwKSB7XHJcbiAgICAgICAgb3duZXIudGRlVXNlci5jaGlsZExvY2sgPSBiaXouY2hpbGRMb2NrO1xyXG4gICAgICAgIHNob3dMb2FkaW5nKCfmj5DnpLonLCB0ZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd0xvYWRpbmcoJ+aPkOekuicgKyAnWycgKyBjb2RlICsgJ10nLCAn572R57uc5byC5bi4JyArICdbJyArIGJpeiArICddJyk7XHJcbiAgICB9XHJcbiAgICBoaWRlTG9hZGluZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgfSwgMjAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7SG9tZU1lbnV9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9Ib21lTWVudS5qcyIsImZ1bmN0aW9uIEphdmExMENvaW4oKSB7XHJcblxyXG59XHJcbkphdmExMENvaW4ucHJvdG90eXBlID0ge1xyXG4gICAgY29pbnM6IDAsXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoY29pbnMpIHtcclxuICAgICAgICB0aGlzLmNvaW5zID0gY29pbnM7XHJcblxyXG4gICAgICAgIHZhciBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnamF2YTEwLWNvaW4nKTtcclxuICAgICAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbGF5b3V0LmNsYXNzTmFtZSA9ICdqYXZhMTAtY29pbic7XHJcbiAgICAgICAgICAgIGxheW91dC5pZCA9ICdqYXZhMTAtY29pbic7XHJcbiAgICAgICAgICAgIGxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb2luLWljb25cIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY29pbi10ZXh0XCI+NjY2NjY2PC9kaXY+JztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsYXlvdXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5vZGVUZXh0ID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJy5jb2luLXRleHQnKTtcclxuICAgICAgICBub2RlVGV4dC5pbm5lckhUTUwgPSBjb2lucztcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBqYXZhQ29pbiA9IG5ldyBKYXZhMTBDb2luKCk7XHJcbmV4cG9ydCB7amF2YUNvaW59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9KYXZhMTBDb2luLmpzIiwiaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5cclxuXHJcbnZhciBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxudmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuXHJcbnZhciBpdGVtU2l6ZSA9IFtcclxuICAgIFsyNjQsIDM4Nl0sXHJcbiAgICBbMjY0LCAzODZdLFxyXG4gICAgWzI2NCwgMzg2XSxcclxuICAgIFsyNjQsIDM4Nl1cclxuXTtcclxudmFyIGltYWdlcyA9IFtcclxuICAgICcxMC5wbmcnLFxyXG4gICAgJzIwLnBuZycsXHJcbiAgICAnNTAucG5nJyxcclxuICAgICcxMDAucG5nJ1xyXG5dO1xyXG5cclxuZnVuY3Rpb24gUmVjaGFyZ2VQYWdlKCkge1xyXG4gICAgdGhpcy5sYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjaGFyZ2UtcGFnZScpO1xyXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMubGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNyZWNoYXJnZS1pdGVtJyArIGkpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChub2RlKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoaSwgbm9kZSkge1xyXG4gICAgICAgICAgICB2YXIgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9ICdpbWcvcmVjaGFyZ2UvJyArIGltYWdlc1tpXTtcclxuICAgICAgICB9LCAxMDAgKiBpLCBpLCBub2RlKTtcclxuICAgIH1cclxufVxyXG5SZWNoYXJnZVBhZ2UucHJvdG90eXBlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiB7aW50fSBjdXJyZW50IFswLDNdXHJcbiAgICAgKi9cclxuICAgIGN1cnJlbnQ6IDMsXHJcbiAgICBvbktleURvd246IG51bGwsXHJcblxyXG4gICAgc2hvdzogZnVuY3Rpb24gKGN1cnJlbnQsIG9uS2V5RG93bikge1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5vbktleURvd24gPSBvbktleURvd247XHJcblxyXG4gICAgICAgIHZhciBvd25lciA9IHRoaXM7XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgb3duZXIuaGFuZGxlS2V5KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXModGhpcy5jdXJyZW50LCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgX3NldEZvY3VzOiBmdW5jdGlvbiAoY3VycmVudCwgZm9jdXMpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuaXRlbXNbY3VycmVudF07XHJcbiAgICAgICAgbm9kZS5zdHlsZS56SW5kZXggPSBmb2N1cyA/IDEgOiAwO1xyXG5cclxuICAgICAgICB2YXIgc2l6ZSA9IGl0ZW1TaXplW2N1cnJlbnRdO1xyXG4gICAgICAgIHZhciBkaXYgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xyXG4gICAgICAgIHZhciBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgIGlmIChmb2N1cykge1xyXG4gICAgICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IHNpemVbMF0gKiAxLjA1ICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IHNpemVbMV0gKiAxLjA1ICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSAtc2l6ZVswXSAqIDAuMDI1ICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9IC1zaXplWzFdICogMC4wMjUgKyAncHgnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBzaXplWzBdICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9IHNpemVbMV0gKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUubGVmdCA9IDAgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gMCArICdweCc7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkOiBmdW5jdGlvbiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEZvY3VzKGksIGN1cnJlbnQgPT0gaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUtleTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAob3duZXIuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Yob3duZXIub25LZXlEb3duKSA9PT0gJ2Z1bmN0aW9uJykgb3duZXIub25LZXlEb3duKGN1cktleSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQge1JlY2hhcmdlUGFnZX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1JlY2hhcmdlUGFnZS5qcyIsImltcG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfSBmcm9tIFwiLi90b29kby9fa2V5Y29kZXNcIjtcclxuaW1wb3J0IHtzaG93RGlhbG9nfSBmcm9tICcuL2FwcC9kaWFsb2cnO1xyXG5cclxudmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG52YXIgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG5cclxuLy8gdmFyIGNhbGxiYWNrVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArICcvdGRlbnRlci9jYWxsYmFjay5odG1sJztcclxudmFyIGNhbGxiYWNrVXJsID0gXCJodHRwOi8vMTIwLjc3LjgyLjU0L3RkR2FtZUNlbnRlci9jYWxsYmFjay5odG1sXCI7XHJcbmZ1bmN0aW9uIFNob3BCaWxsKCkge1xyXG4gICAgdGhpcy5sYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5sYXlvdXQpO1xyXG4gICAgdGhpcy5sYXlvdXQuY2xhc3NOYW1lID0gJ2JpbGwtYnRuJztcclxuICAgIHRoaXMubGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJiaWxsLWJ0bi1mb2N1c1wiPjwvZGl2Pic7XHJcblxyXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgdmFyIG5vZGUgPSB0aGlzLmxheW91dC5xdWVyeVNlbGVjdG9yKCcuYmlsbC1idG4tZm9jdXMnKTtcclxuICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHRoaXMuaXRlbXMucHVzaChub2RlKTtcclxufVxyXG5cclxuU2hvcEJpbGwucHJvdG90eXBlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiB7aW50fSBjdXJyZW50IFswLDBdXHJcbiAgICAgKi9cclxuICAgIGN1cnJlbnQ6IDAsXHJcbiAgICBvbktleURvd246IG51bGwsXHJcbiAgICB0ZGVVc2VyOiBudWxsLFxyXG5cclxuICAgIHNob3c6IGZ1bmN0aW9uIChjdXJyZW50LCBvbktleURvd24sIHRkZVVzZXIpIHtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gb25LZXlEb3duO1xyXG4gICAgICAgIHRoaXMudGRlVXNlciA9IHRkZVVzZXI7XHJcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcztcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBvd25lci5oYW5kbGVLZXkoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zZXRGb2N1cyh0aGlzLmN1cnJlbnQsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfc2V0Rm9jdXM6IGZ1bmN0aW9uIChjdXJyZW50LCBmb2N1cykge1xyXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5pdGVtc1tjdXJyZW50XTtcclxuICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSBmb2N1cyA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgICB9LFxyXG4gICAgc2V0U2VsZWN0ZWQ6IGZ1bmN0aW9uIChjdXJyZW50KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEZvY3VzKGksIGN1cnJlbnQgPT0gaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUtleTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUub2s6XHJcbiAgICAgICAgICAgICAgICBpZiAoYmlsbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBiaWxsVGFibGUuc3RhcnQoYmlsbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbGxUYWJsZS5zaG93KGJpbGxUYWJsZS5jdXJyZW50LCBvblRhYmxlS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBzdGJjbGkgPSBvd25lci50ZGVVc2VyLnN0YmNsaTtcclxuICAgICAgICAgICAgICAgIHN0YmNsaS5iaWxsKG9uQmlsbCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Yob3duZXIub25LZXlEb3duKSA9PT0gJ2Z1bmN0aW9uJykgb3duZXIub25LZXlEb3duKGN1cktleSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgcGFnZVNpemUgPSA1O1xyXG52YXIgaXRlbVNpemUgPSBbNzUsIDE0OSwgMjI0LCAyOTcsIDM3NF07XHJcbnZhciBpdGVtc1NpemVMZWZ0PVsxMiwyNSw0MSw1NCw3MF07XHJcbmZ1bmN0aW9uIEJpbGxUYWJsZSgpIHtcclxufVxyXG5CaWxsVGFibGUucHJvdG90eXBlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiB7aW50fSBjdXJyZW50IFswLDRdXHJcbiAgICAgKi9cclxuICAgIGN1cnJlbnQ6IDAsXHJcbiAgICBjdXJyZW50U2l6ZTogNSxcclxuICAgIGJpbGxzOiBbXSxcclxuICAgIHBhZ2U6IDAsXHJcbiAgICBwYWdlSW5kZXg6IC0xLFxyXG4gICAgb25LZXlEb3duOiBudWxsLFxyXG4gICAgLy9nZXRCaWxsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICB2YXIgaW5kZXggPSB0aGlzLnBhZ2VJbmRleCAqIHBhZ2VTaXplO1xyXG4gICAgLy8gICAgaW5kZXggKz0gdGhpcy5jdXJyZW50O1xyXG4gICAgLy8gICAgaWYgKGluZGV4IDwgdGhpcy5iaWxscy5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICByZXR1cm4gdGhpcy5iaWxsc1tpbmRleF07XHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvL30sXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKGJpbGxzKSB7XHJcbiAgICAgICAgdmFyIGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWxsLWxheW91dCcpO1xyXG4gICAgICAgIGlmICghbGF5b3V0KSB7XHJcbiAgICAgICAgICAgIGxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBsYXlvdXQuY2xhc3NOYW1lID0gJ2JpbGwtbGF5b3V0JztcclxuICAgICAgICAgICAgbGF5b3V0LmlkID0gJ2JpbGwtbGF5b3V0JztcclxuICAgICAgICAgICAgbGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImJpbGwtYmdcIj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImJpbGwtc2VsZWN0XCIgY2xhc3M9XCJiaWxsLXNlbGVjdFwiPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICAgIDxkaXYgY2xhc3M9XCJiaWxsLW91dGxpbmVcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJiaWxsLWxpbmUwXCIgY2xhc3M9XCJiaWxsLWxpbmVcIj48ZGl2IGNsYXNzPVwiYmlsbC10aW1lXCI+MjAxNy0wNy0wNyAxMjowNjowMTwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLW5hbWVcIj7ot7PoiJ7mr6/msJHotYTlvojplb/plb8xMOS4quWtl+WRojwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLWFtb3VudFwiPjk45YWDPC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJiaWxsLWxpbmUxXCIgY2xhc3M9XCJiaWxsLWxpbmVcIj48ZGl2IGNsYXNzPVwiYmlsbC10aW1lXCI+MjAxNy0wNy0wNyAxMjowNjowMTwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLW5hbWVcIj7ot7PoiJ7mr6/msJHotYTlvojplb/plb8xMOS4quWtl+WRojwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLWFtb3VudFwiPjk45YWDPC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJiaWxsLWxpbmUyXCIgY2xhc3M9XCJiaWxsLWxpbmVcIj48ZGl2IGNsYXNzPVwiYmlsbC10aW1lXCI+MjAxNy0wNy0wNyAxMjowNjowMTwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLW5hbWVcIj7ot7PoiJ7mr6/msJHotYTlvojplb/plb8xMOS4quWtl+WRojwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLWFtb3VudFwiPjk45YWDPC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJiaWxsLWxpbmUzXCIgY2xhc3M9XCJiaWxsLWxpbmVcIj48ZGl2IGNsYXNzPVwiYmlsbC10aW1lXCI+MjAxNy0wNy0wNyAxMjowNjowMTwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLW5hbWVcIj7ot7PoiJ7mr6/msJHotYTlvojplb/plb8xMOS4quWtl+WRojwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLWFtb3VudFwiPjk45YWDPC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJiaWxsLWxpbmU0XCIgY2xhc3M9XCJiaWxsLWxpbmVcIj48ZGl2IGNsYXNzPVwiYmlsbC10aW1lXCI+MjAxNy0wNy0wNyAxMjowNjowMTwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLW5hbWVcIj7ot7PoiJ7mr6/msJHotYTlvojplb/plb8xMOS4quWtl+WRojwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLWFtb3VudFwiPjk45YWDPC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJiaWxsLWxpbmU1XCIgY2xhc3M9XCJiaWxsLWxpbmVcIj48PDwg56ysMemhtS/lhbEx6aG1ID4+PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXlvdXQgPSBsYXlvdXQ7XHJcblxyXG4gICAgICAgIHZhciBiZyA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcuYmlsbC1iZycpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBiZy5xdWVyeVNlbGVjdG9yKCcjYmlsbC1zZWxlY3QnKTtcclxuXHJcbiAgICAgICAgdGhpcy50YWJsZSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZVNpemU7ICsraSkge1xyXG4gICAgICAgICAgICB2YXIgdHIgPSBiZy5xdWVyeVNlbGVjdG9yKCcjYmlsbC1saW5lJyArIGkpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlLnB1c2godHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpdGxlUGFnZSA9IGJnLnF1ZXJ5U2VsZWN0b3IoJyNiaWxsLWxpbmU1Jyk7XHJcblxyXG4gICAgICAgIHRoaXMuYmlsbHMgPSBiaWxscztcclxuICAgICAgICB0aGlzLnNob3dQYWdlKDApO1xyXG4gICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfSxcclxuICAgIHNob3dQYWdlOiBmdW5jdGlvbiAocGFnZUluZGV4KSB7XHJcbiAgICAgICAgdmFyIGNudCA9IHRoaXMuYmlsbHMubGVuZ3RoO1xyXG4gICAgICAgIHZhciBwYWdlID0gcGFyc2VJbnQoY250IC8gcGFnZVNpemUpO1xyXG4gICAgICAgIGlmIChjbnQgPiBwYWdlICogcGFnZVNpemUpIHtcclxuICAgICAgICAgICAgcGFnZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFnZUluZGV4ID49IHBhZ2UpIHtcclxuICAgICAgICAgICAgcGFnZUluZGV4ID0gcGFnZSAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgdGhpcy5wYWdlSW5kZXggPSBwYWdlSW5kZXg7XHJcblxyXG4gICAgICAgIHRoaXMudGl0bGVQYWdlLmlubmVySFRNTCA9ICfnrKwnICsgKHBhZ2VJbmRleCArIDEpICsgJ+mhtS/lhbEnICsgcGFnZSArICfpobUnO1xyXG4gICAgICAgIC8vLy/liJvlu7rlnIbngrlcclxuICAgICAgICAvL2Zvcih2YXIgaT0xO2k8PXBhZ2U7aSsrKXtcclxuICAgICAgICAvLyAgICB0aGlzLnRpdGxlUGFnZS5pbm5lckhUTUw9JzxkaXYgY2xhc3M9XCJiaWxsLWNpcmNsZVwiIGlkPVwiYmlsbC1jaXJjbGUnK2krJ1wiPjwvZGl2Pic7XHJcbiAgICAgICAgLy99XHJcblxyXG5cclxuICAgICAgICB2YXIgY3V0MCA9IHBhZ2VTaXplICogcGFnZUluZGV4O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNpemUgPSAoY250IC0gY3V0MCkgPj0gcGFnZVNpemUgPyBwYWdlU2l6ZSA6IGNudCAtIGN1dDA7XHJcbiAgICAgICAgdmFyIGN1dDEgPSB0aGlzLmN1cnJlbnRTaXplICsgY3V0MDtcclxuICAgICAgICB2YXIgY3V0SW5mb3MgPSB0aGlzLmJpbGxzLnNsaWNlKGN1dDAsIGN1dDEpO1xyXG4gICAgICAgIHRoaXMuc2hvd0luZm8oY3V0SW5mb3MpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKDApO1xyXG4gICAgfSxcclxuICAgIHNob3dJbmZvOiBmdW5jdGlvbiAoaW5mb3MpIHtcclxuICAgICAgICB2YXIgY250ID0gaW5mb3MubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMudGFibGUuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgdGRzID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gY250KSB7XHJcbiAgICAgICAgICAgICAgICB0ZHNbMF0uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0ZHNbMV0uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0ZHNbMl0uaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IGluZm9zW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIC8vc2V0VGltZW91dChmdW5jdGlvbiAodGRzLCBzb25nKSB7XHJcbiAgICAgICAgICAgICAgICB0ZHNbMF0uaW5uZXJIVE1MID0gaW5mby5jcmVhdGVkX2F0O1xyXG4gICAgICAgICAgICAgICAgdGRzWzFdLmlubmVySFRNTCA9IGluZm8uc3ViamVjdDtcclxuICAgICAgICAgICAgICAgIHRkc1syXS5pbm5lckhUTUwgPSBwYXJzZUludChpbmZvLnRvdGFsQW1vdW50IC8gMTAwKSArICflhYMnO1xyXG4gICAgICAgICAgICAgICAgLy99LCAxMDAgKiBpbmRleCwgdGRzLCBzb25nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNob3c6IGZ1bmN0aW9uIChjdXJyZW50LCBvbktleURvd24pIHtcclxuICAgICAgICB0aGlzLmxheW91dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gb25LZXlEb3duO1xyXG5cclxuICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG93bmVyLmhhbmRsZUtleShlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGF5b3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkOiBmdW5jdGlvbiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5zdHlsZS50b3AgPSBpdGVtU2l6ZVtjdXJyZW50XSArICdweCc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5zdHlsZS5sZWZ0ID0gaXRlbXNTaXplTGVmdFtjdXJyZW50XSArICdweCc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0sXHJcbiAgICBoYW5kbGVLZXk6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcztcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgdmFyIGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLmN1cnJlbnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvd25lci5wYWdlSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIucGFnZUluZGV4LS07XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvd1BhZ2Uob3duZXIucGFnZUluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuZG93bjpcclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50IDwgb3duZXIuY3VycmVudFNpemUgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvd25lci5wYWdlSW5kZXggPCBvd25lci5wYWdlIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnBhZ2VJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNob3dQYWdlKG93bmVyLnBhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIucGFnZUluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnBhZ2VJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNob3dQYWdlKG93bmVyLnBhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLnBhZ2VJbmRleCA8IG93bmVyLnBhZ2UgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIucGFnZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvd1BhZ2Uob3duZXIucGFnZUluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUub2s6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZihvd25lci5vbktleURvd24pID09PSAnZnVuY3Rpb24nKSBvd25lci5vbktleURvd24oY3VyS2V5KTtcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uQmlsbChjb2RlLCBiaXopIHtcclxuICAgIGlmIChjb2RlID09IDApIHtcclxuICAgICAgICBpZiAoYml6ICYmIGJpei5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGJpbGxzID0gYml6O1xyXG4gICAgICAgICAgICBiaWxsVGFibGUuc3RhcnQoYmlsbHMpO1xyXG4gICAgICAgICAgICBiaWxsVGFibGUuc2hvdyhiaWxsVGFibGUuY3VycmVudCwgb25UYWJsZUtleSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0RpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICBzaG9wQmlsbC5zaG93KHNob3BCaWxsLmN1cnJlbnQsIHNob3BCaWxsLm9uS2V5RG93biwgc2hvcEJpbGwudGRlVXNlcik7XHJcbiAgICAgICAgICAgIH0sIDAsICfmj5DnpLonLCAn5rKh5pyJ5om+5Yiw6K6i5Y2V6K6w5b2V44CCJywgJ+ehruWumicsICfov5Tlm54nKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGJjbGkgPSBzaG9wQmlsbC50ZGVVc2VyLnN0YmNsaTtcclxuICAgICAgICAgICAgICAgIHN0YmNsaS5iaWxsKG9uQmlsbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzaG9wQmlsbC5zaG93KHNob3BCaWxsLmN1cnJlbnQsIHNob3BCaWxsLm9uS2V5RG93biwgc2hvcEJpbGwudGRlVXNlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwLCAn5o+Q56S6JywgJ+e9kee7nOW8guW4uO+8jOayoeacieaJvuWIsOiuouWNleiusOW9leOAgicsICfph43or5UnLCAn5Y+W5raIJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uVGFibGVLZXkoa2V5KSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5udW0wOlxyXG4gICAgICAgICAgICBiaWxsVGFibGUuaGlkZSgpO1xyXG4gICAgICAgICAgICBzaG9wQmlsbC5zaG93KHNob3BCaWxsLmN1cnJlbnQsIHNob3BCaWxsLm9uS2V5RG93biwgc2hvcEJpbGwudGRlVXNlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgc2hvcEJpbGwgPSBuZXcgU2hvcEJpbGwoKTtcclxudmFyIGJpbGxUYWJsZSA9IG5ldyBCaWxsVGFibGUoKTtcclxudmFyIGJpbGxzO1xyXG5cclxuZXhwb3J0IHtzaG9wQmlsbH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1Nob3BCaWxsLmpzIiwiaW1wb3J0IHtzdGJOdWxsfSBmcm9tICcuLi90b29kby9fc3RibnVsbCc7XHJcblxyXG5cclxuZnVuY3Rpb24gUGFnZUFyZ3MocGFnZSkge1xyXG4gICAgdGhpcy5wcmVmaXggPSBwYWdlID8gcGFnZSArICcuJyA6ICcnO1xyXG59XHJcblBhZ2VBcmdzLnByb3RvdHlwZSA9IHtcclxuICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIHJldHVybiBzdGJOdWxsLmdldFZhbHVlKHRoaXMucHJlZml4ICsgayk7XHJcbiAgICB9LFxyXG4gICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICAgICAgc3RiTnVsbC5zZXRWYWx1ZSh0aGlzLnByZWZpeCArIGssIHYpO1xyXG4gICAgfSxcclxuICAgIGdldFJldHVyblVybDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCdyZXR1cm5VcmwnKTtcclxuICAgIH0sXHJcbiAgICBzZXRSZXR1cm5Vcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKCdyZXR1cm5VcmwnLCB1cmwpO1xyXG4gICAgfSxcclxuICAgIGdldFJlZGlyZWN0VXJsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoJ3JlZGlyZWN0VXJsJyk7XHJcbiAgICB9LFxyXG4gICAgc2V0UmVkaXJlY3RVcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKCdyZWRpcmVjdFVybCcsIHVybCk7XHJcbiAgICB9LFxyXG4gICAgc2V0Q2FsbEZsYWc6ZnVuY3Rpb24gKG51bSkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJjYWxsRmxhZ1wiLG51bSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0Q2FsbEZsYWc6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiY2FsbEZsYWdcIik7XHJcbiAgICB9LFxyXG4gICAgc2V0U3VjY2Vzc0NvZGU6ZnVuY3Rpb24gKHN1Y2Nlc3NDb2RlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcInN1Y2Nlc3NDb2RlXCIsc3VjY2Vzc0NvZGUpO1xyXG4gICAgfSxcclxuICAgIGdldFN1Y2Nlc3NDb2RlOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcInN1Y2Nlc3NDb2RlXCIpO1xyXG4gICAgfSxcclxuICAgIHNldFByaXplSUQ6ZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcIlByaXplSURcIixpZCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJpemVJRDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJQcml6ZUlEXCIpO1xyXG4gICAgfSxcclxuICAgIGdldFR1cm50YWJsZVVybDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCdUdXJudGFibGVVcmwnKTtcclxuICAgIH0sXHJcbiAgICBzZXRUdXJudGFibGVVcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKCdUdXJudGFibGVVcmwnLCB1cmwpO1xyXG4gICAgfSxcclxufTtcclxuXHJcblxyXG52YXIgc2hvcEFyZ3MgPSBuZXcgUGFnZUFyZ3MoJ3Nob3AnKTtcclxudmFyIHJlY2hhcmdlQXJncyA9IG5ldyBQYWdlQXJncygncmVjaGFyZ2UnKTtcclxudmFyIGNhbGxiYWNrQXJncyA9IG5ldyBQYWdlQXJncygnY2FsbGJhY2snKTtcclxudmFyIHR1cm5UYWJsZUFyZ3MgPSBuZXcgUGFnZUFyZ3MoJ3R1cm50YWJsZScpO1xyXG5cclxudmFyIGFwcEFyZ3MgPSBuZXcgUGFnZUFyZ3MoJ2FwcCcpO1xyXG5hcHBBcmdzLm9uRmlyc3RQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZpcnN0VXJsID0gYXBwQXJncy5nZXRSZWRpcmVjdFVybCgpO1xyXG4gICAgaWYgKGZpcnN0VXJsKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmaXJzdFVybDtcclxuICAgIH1cclxufTtcclxuXHJcbmFwcEFyZ3Mub25Ib21lUGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBob21lVXJsID0gYXBwQXJncy5nZXRSZXR1cm5VcmwoKTtcclxuICAgIGlmIChob21lVXJsKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBob21lVXJsO1xyXG4gICAgfVxyXG59O1xyXG5cclxuYXBwQXJncy5vblR1cm50YWJsZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgVHVybnRhYmxlVXJsID0gYXBwQXJncy5nZXRUdXJudGFibGVVcmwoKTtcclxuICAgIGlmIChUdXJudGFibGVVcmwpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFR1cm50YWJsZVVybDtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IHtzaG9wQXJncyxyZWNoYXJnZUFyZ3MsY2FsbGJhY2tBcmdzLGFwcEFyZ3MsdHVyblRhYmxlQXJnc31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9QYWdlQXJncy5qcyIsImZ1bmN0aW9uIGdldEpTT04odXJsLCBjYikge1xyXG4gICAgbGV0IHJlcTtcclxuICAgIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdDtcclxuICAgIHJlcS5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXNBcnIgPSBldmFsKCdbJyArIHJlcS5yZXNwb25zZVRleHQgKyAnXScpO1xyXG4gICAgICAgICAgICBjYihpdGVtc0FyclswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJlcS5zZW5kKG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYXNlVXJsKCkge1xyXG4gICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnL3RkZW50ZXInO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxheUJhY2tncm91bmQobm9kZSwgaW1nLCBkZWxheSkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBpbWcgKyAnKSdcclxuICAgIH0sIGRlbGF5KTtcclxufVxyXG5cclxuZXhwb3J0IHtnZXRKU09OLGJhc2VVcmwsZGVsYXlCYWNrZ3JvdW5kfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2FiYy5qcyIsImltcG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfSBmcm9tIFwiLi4vdG9vZG8vX2tleWNvZGVzXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSB7aW50fSBjYWxsYmFjay5jb2RlIOaMiemUriAwLui+k+WFpeWujOaIkCAxLuWPlua2iFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2subXNnIOi+k+WFpeeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gdGl0bGUge2ludH0g5qCH6aKY5Zu+54mHIDAu6K6+572u6ZOc6ZSBIDEu6ZOc6ZSB6aqM6K+BXHJcbiAqIEBwYXJhbSBsYWJlbCB7aW50fSDmj5DnpLror60gMC7ovpPlhaXlr4bnoIEgMS7lho3mrKHovpPlhaVcclxuICovXHJcbmZ1bmN0aW9uIHNob3dDaGlsZExvY2soY2FsbGJhY2ssIHRpdGxlLCBsYWJlbCkge1xyXG4gICAgdGl0bGUgPSBhcmd1bWVudHNbMV0gPyBhcmd1bWVudHNbMV0gOiAwO1xyXG4gICAgbGFiZWwgPSBhcmd1bWVudHNbMl0gPyBhcmd1bWVudHNbMl0gOiAwO1xyXG4gICAgdmFyIHRpcHMgPSBhcmd1bWVudHNbM10gPyBhcmd1bWVudHNbM10gOiAn6K+36L6T5YWlNuS9jeaVsOWtl+Wvhuegge+8jOaMiei/lOWbnumUruWFs+mXreW8ueeql+OAgic7XHJcblxyXG4gICAgdmFyIGxheW91dElkID0gJ2xvY2stbGF5b3V0LTAwMyc7XHJcbiAgICB2YXIgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsYXlvdXQuY2xhc3NOYW1lID0gJ2xvY2stbGF5b3V0JztcclxuICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcclxuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID0gJycgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxvY2stYmdcIj4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBpZD1cImxvY2stdGl0bGVcIiBjbGFzcz1cImxvY2stdGl0bGUtMFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICA8ZGl2IGNsYXNzPVwibG9jay1pbnB1dFwiPicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLWxhYmVsXCIgY2xhc3M9XCJsb2NrLWxhYmVsLTBcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay10ZXh0XCIgY2xhc3M9XCJsb2NrLXRleHRcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgIDxkaXYgaWQ9XCJsb2NrLXRpcHNcIiBjbGFzcz1cImxvY2stdGlwc1wiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9jay1rZXlib2FyZFwiPicgK1xyXG4gICAgICAgICAgICAnICA8ZGl2IGNsYXNzPVwibG9jay1udW0tYmdcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tMVwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+MTwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tMlwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj4yPC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS0zXCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj4zPC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS00XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj40PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS01XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj41PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS02XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj42PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS03XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj43PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS04XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj44PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS05XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj45PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS0xMFwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTBcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+MDwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tMTFcIiBjbGFzcz1cImxvY2stbnVtXCI+ICAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheW91dCk7XHJcbiAgICB9XHJcbiAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgbG9ja1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2stdGV4dFwiKTtcclxuICAgIHZhciBsb2NrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2stdGl0bGVcIik7XHJcbiAgICB2YXIgbG9ja0xhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2stbGFiZWwnKTtcclxuICAgIHZhciBsb2NrVGlwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NrLXRpcHMnKTtcclxuICAgIGxvY2tUZXh0LmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICBsb2NrVGl0bGUuY2xhc3NOYW1lID0gXCJsb2NrLXRpdGxlLVwiICsgdGl0bGU7XHJcbiAgICBsb2NrTGFiZWwuY2xhc3NOYW1lID0gJ2xvY2stbGFiZWwtJyArIGxhYmVsO1xyXG4gICAgbG9ja1RpcHMuaW5uZXJIVE1MID0gdGlwcztcclxuXHJcbiAgICB2YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbiAgICB2YXIgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG4gICAgdmFyIGl0ZW1Ob2RlcyA9IFtcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW0xLCBpZDogXCJsb2NrLW51bS0xXCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTIsIGlkOiBcImxvY2stbnVtLTJcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtMywgaWQ6IFwibG9jay1udW0tM1wifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW00LCBpZDogXCJsb2NrLW51bS00XCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTUsIGlkOiBcImxvY2stbnVtLTVcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtNiwgaWQ6IFwibG9jay1udW0tNlwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW03LCBpZDogXCJsb2NrLW51bS03XCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTgsIGlkOiBcImxvY2stbnVtLThcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtOSwgaWQ6IFwibG9jay1udW0tOVwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5iYWNrLCBpZDogXCJsb2NrLW51bS0xMFwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW0wLCBpZDogXCJsb2NrLW51bS0wXCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBudWxsLCBpZDogXCJsb2NrLW51bS0xMVwifVxyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgaW5wdXRUZXh0ID0gJyc7XHJcbiAgICB2YXIgY3VySWR4ID0gMDtcclxuXHJcbiAgICB2YXIgc2V0U2VsZWN0ZWQgPSBmdW5jdGlvbiAoY3VySWR4KSB7XHJcbiAgICAgICAgaXRlbU5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW1Ob2RlLCBpbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW1Ob2RlLmlkKTtcclxuICAgICAgICAgICAvLyBub2RlLmNsYXNzTmFtZSA9IChpbmRleCA9PSBjdXJJZHggPyAnbG9jay1udW0tZm9jdXMnIDogJ2xvY2stbnVtJyk7XHJcbiAgICAgICAgICAgIG5vZGUucXVlcnlTZWxlY3RvcignZGl2Jykuc3R5bGUuZGlzcGxheT1pbmRleCA9PSBjdXJJZHggPyBcImJsb2NrXCI6XCJub25lXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHN1Ym1pdCA9IGZ1bmN0aW9uIChjb2RlKSB7XHJcbiAgICAgICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAvL2RvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGF5b3V0KTtcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xyXG4gICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhjb2RlLCBpbnB1dFRleHQpO1xyXG4gICAgfTtcclxuICAgIHZhciBpbnZpc2libGUgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIHZhciBzdGFyID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKSBzdGFyICs9ICcqJztcclxuICAgICAgICByZXR1cm4gc3RhcjtcclxuICAgIH07XHJcbiAgICB2YXIgY2xpY2tOdW0gPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICAgICAgaW5wdXRUZXh0ICs9IFN0cmluZyhudW0pO1xyXG4gICAgICAgIGxvY2tUZXh0LmlubmVyVGV4dCA9IGludmlzaWJsZShpbnB1dFRleHQpO1xyXG4gICAgfTtcclxuICAgIHZhciBiYWNrc3BhY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaW5wdXRUZXh0ID0gaW5wdXRUZXh0LnN1YnN0cmluZygwLCBpbnB1dFRleHQubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgbG9ja1RleHQuaW5uZXJUZXh0ID0gaW52aXNpYmxlKGlucHV0VGV4dCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGhhbmRsZU9rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjdXJyZW50ID0gaXRlbU5vZGVzW2N1cklkeF07XHJcbiAgICAgICAgaWYgKGN1cnJlbnQua2V5Q29kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJhY2tzcGFjZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUtleShjdXJyZW50LmtleUNvZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgaGFuZGxlS2V5ID0gZnVuY3Rpb24gKGN1cktleSkge1xyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJJZHggJSAzKSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VySWR4LS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJJZHggJSAzKSAhPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VySWR4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cklkeCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJJZHggLT0gMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuZG93bjpcclxuICAgICAgICAgICAgICAgIGlmIChjdXJJZHggPCA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VySWR4ICs9IDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm9rOlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlT2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgICAgIHN1Ym1pdCgxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMTpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTI6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW0zOlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtNDpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTU6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW02OlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtNzpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTg6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW05OlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMDpcclxuICAgICAgICAgICAgICAgIHZhciBudW0gPSBjdXJLZXkgLSBrZXlDb2RlLm51bTA7XHJcbiAgICAgICAgICAgICAgICBjbGlja051bShudW0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHNldFNlbGVjdGVkKDApO1xyXG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgdmFyIGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGhhbmRsZUtleShjdXJLZXkpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKGN1cklkeCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dFRleHQubGVuZ3RoID09IDYpIHtcclxuICAgICAgICAgICAgc3VibWl0KDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7c2hvd0NoaWxkTG9ja31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9jaGlsZExvY2suanMiLCJpbXBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc30gZnJvbSBcIi4uL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENoaWxkTWVudSgpIHtcclxufVxyXG5DaGlsZE1lbnUucHJvdG90eXBlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sge2Z1bmN0aW9ufVxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrLmJ0biB7aW50fSAwLuaMiemSrjEgMS7mjInpkq4yIC0xLuWPlua2iOaTjeS9nFxyXG4gICAgICogQHBhcmFtIGNudCB7aW50fSBbMSwyXSDmjInpkq7mlbDph49cclxuICAgICAqIEBwYXJhbSBidG4ge2ludH0gWzAsMV0g6buY6K6k6YCJ5LitXHJcbiAgICAgKiBAcGFyYW0gdGV4dCB7c3RyaW5nfSDmj5DnpLrmlofmnKxcclxuICAgICAqL1xyXG4gICAgc2hvdzogZnVuY3Rpb24gKGNhbGxiYWNrLCBjbnQsIGJ0biwgdGV4dCkge1xyXG4gICAgICAgIHZhciBsYXlvdXRJZCA9ICdsb2NrLW1lbnUtbGF5b3V0JztcclxuICAgICAgICB2YXIgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgICAgIGlmICghbGF5b3V0KSB7XHJcbiAgICAgICAgICAgIGxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBsYXlvdXQuY2xhc3NOYW1lID0gJ2xvY2stbGF5b3V0JztcclxuICAgICAgICAgICAgbGF5b3V0LmlkID0gbGF5b3V0SWQ7XHJcbiAgICAgICAgICAgIGxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsb2NrLW1lbnUtYmdcIj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stdGl0bGVcIiBjbGFzcz1cImxvY2stdGl0bGUtMFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1idG4wXCIgY2xhc3M9XCJsb2NrLWJ0blwiPjxzcGFuPuW8gOWQr+erpemUgTwvc3Bhbj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stYnRuMVwiIGNsYXNzPVwibG9jay1idG5cIj48c3Bhbj7lhbPpl63nq6XplIE8L3NwYW4+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLWJ0bjJcIiBjbGFzcz1cImxvY2stYnRuXCI+PHNwYW4+5pu05pS55a+G56CBPC9zcGFuPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwibG9jay10aXBzXCI+6YCJ5oup6ZyA6KaB55qE5pON5L2c5oyJ56Gu5a6a6ZSu6L+b6KGM5LiL5LiA5q2l77yM5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsYXlvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgIHZhciBiZyA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcubG9jay1tZW51LWJnJyk7XHJcbiAgICAgICAgdmFyIGJ0bk5vZGVzID0gYmcucXVlcnlTZWxlY3RvckFsbCgnLmxvY2stYnRuJyk7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7aTxidG5Ob2Rlcy5sZW5ndGg7KytpKXtcclxuICAgICAgICAgICAgdmFyIGJ0bk5vZGUgPSBidG5Ob2Rlc1tpXTtcclxuICAgICAgICAgICAgYnRuTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGJ0bk5vZGUwLCBidG5Ob2RlMTtcclxuICAgICAgICBpZiAoY250ID09IDEpIHtcclxuICAgICAgICAgICAgYnRuTm9kZTAgPSBidG5Ob2Rlc1swXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbnQgPSAyO1xyXG4gICAgICAgICAgICBidG5Ob2RlMCA9IGJ0bk5vZGVzWzFdO1xyXG4gICAgICAgICAgICBidG5Ob2RlMSA9IGJ0bk5vZGVzWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnRuTm9kZTApIGJ0bk5vZGUwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGlmIChidG5Ob2RlMSkgYnRuTm9kZTEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgIHZhciB0aXBOb2RlID0gYmcucXVlcnlTZWxlY3RvcignLmxvY2stdGlwcycpO1xyXG4gICAgICAgIHRpcE5vZGUuaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZm9jdXNCdG4oYnRuSWR4KSB7XHJcbiAgICAgICAgICAgIHZhciBmb2N1c05vZGU7XHJcbiAgICAgICAgICAgIGlmIChjbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgYnRuTm9kZTAuY2xhc3NOYW1lPVwibG9jay1idG4gbG9jay1idG4tZm9jdXNcIjtcclxuICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZSA9IGJ0bk5vZGUwLnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLWJ0bi1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgLy8gZm9jdXNOb2RlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0bklkeCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuTm9kZTAuY2xhc3NOYW1lPVwibG9jay1idG4gbG9jay1idG4tZm9jdXNcIjtcclxuICAgICAgICAgICAgICAgICAgICBidG5Ob2RlMS5jbGFzc05hbWU9XCJsb2NrLWJ0blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZSA9IGJ0bk5vZGUwLnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLWJ0bi1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUgPSBidG5Ob2RlMS5xdWVyeVNlbGVjdG9yKCcubG9jay1idG4tZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuTm9kZTAuY2xhc3NOYW1lPVwibG9jay1idG5cIjtcclxuICAgICAgICAgICAgICAgICAgICBidG5Ob2RlMS5jbGFzc05hbWU9XCJsb2NrLWJ0biBsb2NrLWJ0bi1mb2N1c1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZSA9IGJ0bk5vZGUwLnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLWJ0bi1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZSA9IGJ0bk5vZGUxLnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLWJ0bi1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidG4gPSBidG5JZHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYnRuIDwgMCB8fCBidG4gPiAxKSBidG4gPSAwO1xyXG4gICAgICAgIGZvY3VzQnRuKGJ0bik7XHJcblxyXG4gICAgICAgIGxldCBzdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICB2YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbiAgICAgICAgdmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgICAgIHZhciBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNCdG4oMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGtleUNvZGUuZG93bjpcclxuICAgICAgICAgICAgICAgICAgICBmb2N1c0J0bihjbnQgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazogICAgIC8v56Gu5a6aXHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6ICAgICAgLy/lj5bmtohcclxuICAgICAgICAgICAgICAgICAgICBidG4gPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGNoaWxkTWVudSA9IG5ldyBDaGlsZE1lbnUoKTtcclxuZXhwb3J0IHtjaGlsZE1lbnV9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvY2hpbGRNZW51LmpzIiwiaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuLi90b29kby9fa2V5Y29kZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge2ludH0gY2FsbGJhY2suYnRuIOaMiemUriAwLuehruWumiAxLuWPlua2iFxyXG4gKiBAcGFyYW0ge251bWJlcn0gYnRuIOm7mOiupOeEpueCuSAwLuehruWumiAxLuWPlua2iFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUg56qX5Y+j5qCH6aKYXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IOeql+WPo+WGheWuuVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYnRuMCDmjInpkq4xXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBidG4xIOaMiemSrjJcclxuICovXHJcbmZ1bmN0aW9uIHNob3dEaWFsb2coLypjYWxsYmFjaywgYnRuLCB0aXRsZSwgdGV4dCwgYnRuMCwgYnRuMSovKSB7XHJcbiAgICBjb25zdCBsYXlvdXRJZCA9ICdkaWFsb2ctbGF5b3V0LTAwMSc7XHJcbiAgICBsZXQgY2FsbGJhY2ssIGJ0biwgdGl0bGUsIHRleHQsIGJ0bjAsIGJ0bjE7XHJcbiAgICBjYWxsYmFjayA9IGFyZ3VtZW50c1swXSA/IGFyZ3VtZW50c1swXSA6IG51bGw7XHJcbiAgICBidG4gPSBhcmd1bWVudHNbMV0gPyBhcmd1bWVudHNbMV0gOiAwO1xyXG4gICAgdGl0bGUgPSBhcmd1bWVudHNbMl0gPyBhcmd1bWVudHNbMl0gOiAn5o+Q56S6JztcclxuICAgIHRleHQgPSBhcmd1bWVudHNbM10gPyBhcmd1bWVudHNbM10gOiAnJztcclxuICAgIGJ0bjAgPSBhcmd1bWVudHNbNF0gPyBhcmd1bWVudHNbNF0gOiAn56Gu5a6aJztcclxuICAgIGJ0bjEgPSBhcmd1bWVudHNbNV0gPyBhcmd1bWVudHNbNV0gOiAn6L+U5ZueJztcclxuICAgIHZhciBhbGlnbiA9IGFyZ3VtZW50c1s2XSA/IGFyZ3VtZW50c1s2XSA6ICdjZW50ZXInO1xyXG5cclxuICAgIGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYXlvdXRJZCk7XHJcbiAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICAgIGxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGF5b3V0LmNsYXNzTmFtZSA9ICdkaWFsb2ctbGF5b3V0JztcclxuICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcclxuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkaWFsb2ctYmdcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLXRpdGxlXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImRpYWxvZy10ZXh0XCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImRpYWxvZy1idG4wXCIgc3R5bGU9XCJsZWZ0OiAxMiU7dG9wOiA3MyVcIiBjbGFzcz1cImRpYWxvZy1idG4gZGlhbG9nLWJ0bjBcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwiZGlhbG9nLWJ0bjFcIiBzdHlsZT1cImxlZnQ6IDU3JTt0b3A6IDczJVwiIGNsYXNzPVwiZGlhbG9nLWJ0biBkaWFsb2ctYnRuMVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheW91dCk7XHJcbiAgICB9XHJcbiAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgYmFja2dyb3VuZCA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWJnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgdmFyIG5vZGVUaXRsZSA9IGJhY2tncm91bmQucXVlcnlTZWxlY3RvcignLmRpYWxvZy10aXRsZScpO1xyXG4gICAgbm9kZVRpdGxlLmlubmVySFRNTCA9IHRpdGxlO1xyXG4gICAgdmFyIG5vZGVUZXh0ID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLXRleHQnKTtcclxuICAgIG5vZGVUZXh0LmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICBub2RlVGV4dC5zdHlsZS50ZXh0QWxpZ24gPSBhbGlnbjtcclxuXHJcbiAgICB2YXIgbm9kZUJ0bjAgPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2ctYnRuMCcpO1xyXG4gICAgbm9kZUJ0bjAuaW5uZXJIVE1MID0gYnRuMCArICc8ZGl2PjwvZGl2Pic7XHJcbiAgICB2YXIgbm9kZUJ0bjEgPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2ctYnRuMScpO1xyXG4gICAgbm9kZUJ0bjEuaW5uZXJIVE1MID0gYnRuMSArICc8ZGl2PjwvZGl2Pic7XHJcblxyXG4gICAgdmFyIGJ0bl8wMDYgPSBub2RlQnRuMC5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xyXG4gICAgdmFyIGJ0bl8wMDZub25lID0gbm9kZUJ0bjEucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGZvY3VzQnRuID0gZnVuY3Rpb24gKGJ0bklkeCkge1xyXG4gICAgICAgIGlmIChidG5JZHggPT0gMCkge1xyXG4gICAgICAgICAgICBub2RlQnRuMC5jbGFzc05hbWUgPSBcIiBcIiArIFwiZGlhbG9nQnRuXzEgZGlhbG9nLUJ0bl9mb2N1c1wiO1xyXG4gICAgICAgICAgICBub2RlQnRuMS5jbGFzc05hbWUgPSBcIiBcIiArIFwiZGlhbG9nQnRuXzBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ0bklkeCA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICBub2RlQnRuMC5jbGFzc05hbWUgPSBcIiBcIiArIFwiZGlhbG9nQnRuXzBcIjtcclxuICAgICAgICAgICAgbm9kZUJ0bjEuY2xhc3NOYW1lID0gXCIgXCIgKyBcImRpYWxvZ0J0bl8xIGRpYWxvZy1CdG5fZm9jdXNcIjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0biA9IGJ0bklkeDtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGJ0biA8IDAgfHwgYnRuID4gMSkgYnRuID0gMDtcclxuICAgIGZvY3VzQnRuKGJ0bik7XHJcblxyXG4gICAgbGV0IHN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgdmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG4gICAgdmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIHZhciBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazogICAgIC8v56Gu5a6aXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMDogICAgICAvL+WPlua2iFxyXG4gICAgICAgICAgICAgICAgYnRuID0gMTtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1Ym1pdCkge1xyXG4gICAgICAgICAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhidG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtzaG93RGlhbG9nfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2RpYWxvZy5qcyIsInZhciBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG52YXIgc2hvd1RpbWUgPSAxMzE4O1xyXG52YXIgbGF5b3V0SWQgPSAnbG9hZGluZy1sYXlvdXQtMDAyJztcclxuXHJcbmZ1bmN0aW9uIHNob3dMb2FkaW5nKCkge1xyXG4gICAgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICB2YXIgdGl0bGUgPSBhcmd1bWVudHNbMF0gPyBhcmd1bWVudHNbMF0gOiAn5o+Q56S6JztcclxuICAgIHZhciB0ZXh0ID0gYXJndW1lbnRzWzFdID8gYXJndW1lbnRzWzFdIDogJ+ato+WcqOWKoOi9ve+8jOivt+eojeWAmS4uLic7XHJcblxyXG4gICAgbGV0IGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheW91dElkKTtcclxuICAgIGlmICghbGF5b3V0KSB7XHJcbiAgICAgICAgbGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsYXlvdXQuY2xhc3NOYW1lID0gJ2RpYWxvZy1sYXlvdXQnO1xyXG4gICAgICAgIGxheW91dC5pZCA9IGxheW91dElkO1xyXG4gICAgICAgIGxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImRpYWxvZy1iZ1wiPicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctdGl0bGVcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLXRleHRcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsYXlvdXQpO1xyXG4gICAgfVxyXG4gICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgdmFyIG5vZGVCZyA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWJnJyk7XHJcbiAgICBub2RlQmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgbm9kZVRpdGxlID0gbm9kZUJnLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctdGl0bGUnKTtcclxuICAgIG5vZGVUaXRsZS5pbm5lckhUTUwgPSB0aXRsZTtcclxuICAgIHZhciBub2RlVGV4dCA9IG5vZGVCZy5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLXRleHQnKTtcclxuICAgIG5vZGVUZXh0LmlubmVySFRNTCA9IHRleHQ7XHJcblxyXG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUxvYWRpbmcoY2FsbGJhY2spIHtcclxuICAgIHZhciBkZWxheVRpbWUgPSBhcmd1bWVudHNbMV0gPyBhcmd1bWVudHNbMV0gOiBzaG93VGltZTtcclxuICAgIHZhciB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB0aW1lID0gKGRlbGF5VGltZSArIGxvYWRUaW1lKSAtIHRpbWU7XHJcbiAgICBpZiAodGltZSA8IDApIHRpbWUgPSAwO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYXlvdXRJZCk7XHJcbiAgICAgICAgaWYgKGxheW91dCkge1xyXG4gICAgICAgICAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgbGV0IGJhY2tncm91bmQgPSBsYXlvdXQucXVlcnlTZWxlY3RvcignLmRpYWxvZy1iZycpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XHJcbiAgICB9LCB0aW1lKTtcclxufVxyXG5cclxuZXhwb3J0IHtzaG93TG9hZGluZyxoaWRlTG9hZGluZ31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9sb2FkaW5nLmpzIiwiaW1wb3J0IHtTdGJDbGllbnR9IGZyb20gXCIuL3Rvb2RvL19zdGJjbGlcIjtcclxuaW1wb3J0IHtnZXRLZXlDb2Rlc30gZnJvbSAnLi90b29kby9fa2V5Y29kZXMnO1xyXG5pbXBvcnQge2hpZGVMb2FkaW5nLCBzaG93TG9hZGluZ30gZnJvbSBcIi4vYXBwL2xvYWRpbmdcIjtcclxuaW1wb3J0IHtzaG93RGlhbG9nfSBmcm9tIFwiLi9hcHAvZGlhbG9nXCI7XHJcbmltcG9ydCB7Z2V0SlNPTn0gZnJvbSBcIi4vYXBwL2FiY1wiO1xyXG5cclxuaW1wb3J0IHtIb21lTWVudX0gZnJvbSAnLi9Ib21lTWVudSc7XHJcbmltcG9ydCB7UmVjaGFyZ2VQYWdlfSBmcm9tICcuL1JlY2hhcmdlUGFnZSc7XHJcbmltcG9ydCB7amF2YUNvaW59IGZyb20gJy4vSmF2YTEwQ29pbic7XHJcbmltcG9ydCB7cmVjaGFyZ2VBcmdzLGNhbGxiYWNrQXJncyxhcHBBcmdzfSBmcm9tICcuL2FwcC9QYWdlQXJncyc7XHJcbmltcG9ydCB7c2hvcEJpbGx9IGZyb20gJy4vU2hvcEJpbGwnO1xyXG5pbXBvcnQge3Nob3dDaGlsZExvY2t9IGZyb20gXCIuL2FwcC9jaGlsZExvY2tcIjtcclxuXHJcblxyXG52YXIgc3RiY2xpID0gbmV3IFN0YkNsaWVudCgpO1xyXG52YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcblxyXG4vLyB2YXIgY2FsbGJhY2tVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy90ZGVudGVyL2NhbGxiYWNrLmh0bWwnO1xyXG52YXIgY2FsbGJhY2tVcmwgPSBcImh0dHA6Ly8xMjAuNzcuODIuNTQvdGRHYW1lQ2VudGVyL2NhbGxiYWNrLmh0bWxcIjtcclxuXHJcbmZ1bmN0aW9uIG9uU3RhcnQoY29kZSwgYml6KSB7XHJcbiAgICBoaWRlTG9hZGluZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGNvZGUgIT0gMCkge1xyXG4gICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dMb2FkaW5nKCfoh6rliqjnmbvpmYYnLCAn5bCP5Y+M5Zyo5L2/5Yqy5Yqg6L2977yM6K+356iN5YCZLi4uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RiY2xpLnN0YXJ0KG9uU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWNoYXJnZVBhZ2Uuc2hvdyhyZWNoYXJnZVBhZ2UuY3VycmVudCwgb25QYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMSwgJ+aPkOekuicsICfmsqHmnInmib7liLDnlKjmiLfkv6Hmga/lk6bvvIEnLCAn6YeN6K+VJywgJ+WPlua2iCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRkZVVzZXIgPSBiaXo7XHJcbiAgICAgICAgICAgIGphdmFDb2luLnNob3coYml6LmNvaW5zKTtcclxuICAgICAgICAgICAgcmVjaGFyZ2VQYWdlLnNob3cocmVjaGFyZ2VQYWdlLmN1cnJlbnQsIG9uUGFnZUtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gY29kZVxyXG4gKiBAcGFyYW0gYml6XHJcbiAqIEBwYXJhbSBiaXouY2F0ZWdvcnlcclxuICogQHBhcmFtIGJpei5wcm9kdWN0SWRcclxuICogQHBhcmFtIGJpei5wcmljZVxyXG4gKiBAcGFyYW0gYml6Lmdvb2RzTmFtZVxyXG4gKi9cclxuZnVuY3Rpb24gb25RdWVyeVByb2R1Y3QxKGNvZGUsIGJpeikge1xyXG4gICAgaGlkZUxvYWRpbmcoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpdGVtSW5mbyA9IGl0ZW1JbmZvc1tyZWNoYXJnZVBhZ2UuY3VycmVudF07XHJcbiAgICAgICAgaWYgKGNvZGUgPT0gMCAmJiBiaXogJiYgYml6LnByb2R1Y3RJZCA9PSBpdGVtSW5mby5wcm9kSWQpIHtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSAnJztcclxuICAgICAgICAgICAgaWYgKGJpei5jYXRlZ29yeSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gJ+aCqOWwhuiKsei0uScgKyBiaXoucHJpY2UgLyAxMDAgKyAn5YWDL+aciOiuoui0rScgKyBiaXouZ29vZHNOYW1lO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGV4dCA9ICfmgqjlsIboirHotLknICsgYml6LnByaWNlIC8gMTAwICsgJ+WFg+i0reS5sCcgKyBiaXouZ29vZHNOYW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZGVVc2VyLmNoaWxkTG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2hpbGRMb2NrKGZ1bmN0aW9uIChjb2RlLCBtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWRMb2NrKGNvZGUsIG1zZywgcmVjaGFyZ2VQYWdlLCBpdGVtSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRPcmRlcihpdGVtSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWNoYXJnZVBhZ2Uuc2hvdyhyZWNoYXJnZVBhZ2UuY3VycmVudCwgb25QYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCwgJ+iuoui0reS/oeaBrycsIHRleHQsICfnoa7orqQnLCAn5Y+W5raIJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0RpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93TG9hZGluZygn5o+Q56S6JywgJ+ato+WcqOWKoOi9ve+8jOivt+eojeWAmS4uLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YmNsaS5xdWVyeVByb2R1Y3QxKGl0ZW1JbmZvLnByb2RJZCwgb25RdWVyeVByb2R1Y3QxKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVjaGFyZ2VQYWdlLnNob3cocmVjaGFyZ2VQYWdlLmN1cnJlbnQsIG9uUGFnZUtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDAsICfmj5DnpLonLCAn5rKh5pyJ5om+5Yiw5Lqn5ZOB5L+h5oGv5ZOm77yBJywgJ+mHjeivlScsICflj5bmtognKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25PcmRlcjEoY29kZSwgYml6KSB7XHJcbiAgICBoaWRlTG9hZGluZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGl0ZW1JbmZvID0gaXRlbUluZm9zW3JlY2hhcmdlUGFnZS5jdXJyZW50XTtcclxuICAgICAgICBpZiAoY29kZSA9PSAwICYmIGJpeikge1xyXG4gICAgICAgICAgICBzaG93TG9hZGluZygn5o+Q56S6JywgJ+ato+WcqOWkhOeQhu+8jOivt+eojeWAmS4uLicpO1xyXG4gICAgICAgICAgICBjYWxsYmFja0FyZ3Muc2V0UmVkaXJlY3RVcmwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICBjYWxsYmFja0FyZ3Muc2V0UmV0dXJuVXJsKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgc3RiY2xpLnBheShiaXoudHJhZGVObyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0RpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZW5kT3JkZXIoaXRlbUluZm8pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWNoYXJnZVBhZ2Uuc2hvdyhyZWNoYXJnZVBhZ2UuY3VycmVudCwgb25QYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCwgJ+iuouWNleaPkOekuicsICflsI/lj4zmnI3liqHlvIDlsI/lt67llabvvIzor7fnqI3lkI7ph43or5XjgIInLCAn6YeN6K+VJywgJ+i/lOWbnicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbk1lbnVLZXkoa2V5KSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5udW0wOlxyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlY2hhcmdlQXJncy5nZXRSZXR1cm5VcmwoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmVzYzpcclxuICAgICAgICAgICAgYXBwQXJncy5vbkZpcnN0UGFnZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGtleUNvZGUuZG93bjpcclxuICAgICAgICAgICAgaG9tZU1lbnUuaGlkZSgpO1xyXG4gICAgICAgICAgICByZWNoYXJnZVBhZ2Uuc2hvdyhyZWNoYXJnZVBhZ2UuY3VycmVudCwgb25QYWdlS2V5KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLm9rOlxyXG4gICAgICAgICAgICBpZiAoaG9tZU1lbnUuY3VycmVudCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlY2hhcmdlQXJncy5nZXRSZXR1cm5VcmwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25QYWdlS2V5KGtleSkge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIGtleUNvZGUubnVtMDpcclxuICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWNoYXJnZUFyZ3MuZ2V0UmV0dXJuVXJsKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5lc2M6XHJcbiAgICAgICAgICAgIGFwcEFyZ3Mub25GaXJzdFBhZ2UoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLm9rOlxyXG4gICAgICAgICAgICAvL+acqueZu+W9lVxyXG4gICAgICAgICAgICBpZiAoIXN0YmNsaS5pc1JlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBzaG93TG9hZGluZygn6Ieq5Yqo55m76ZmGJywgJ+Wwj+WPjOWcqOS9v+WKsuWKoOi9ve+8jOivt+eojeWAmS4uLicpO1xyXG4gICAgICAgICAgICAgICAgc3RiY2xpLnN0YXJ0KG9uU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGl0ZW1JbmZvID0gaXRlbUluZm9zW3JlY2hhcmdlUGFnZS5jdXJyZW50XTtcclxuICAgICAgICAgICAgLy/mnKrlvIDpgJpcclxuICAgICAgICAgICAgc2hvd0xvYWRpbmcoJ+aPkOekuicsICfmraPlnKjliqDovb3vvIzor7fnqI3lgJkuLi4nKTtcclxuICAgICAgICAgICAgc3RiY2xpLnF1ZXJ5UHJvZHVjdDEoaXRlbUluZm8ucHJvZElkLCBvblF1ZXJ5UHJvZHVjdDEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgIHJlY2hhcmdlUGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgIGhvbWVNZW51LnNob3coaG9tZU1lbnUuY3VycmVudCwgb25NZW51S2V5LCB0ZGVVc2VyKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmRvd246XHJcbiAgICAgICAgICAgIHJlY2hhcmdlUGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHNob3BCaWxsLnNob3coc2hvcEJpbGwuY3VycmVudCwgb25CaWxsS2V5LCB0ZGVVc2VyKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQmlsbEtleShrZXkpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVjaGFyZ2VBcmdzLmdldFJldHVyblVybCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGtleUNvZGUuZXNjOlxyXG4gICAgICAgICAgICBhcHBBcmdzLm9uRmlyc3RQYWdlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS51cDpcclxuICAgICAgICAgICAgc2hvcEJpbGwuaGlkZSgpO1xyXG4gICAgICAgICAgICByZWNoYXJnZVBhZ2Uuc2hvdyhyZWNoYXJnZVBhZ2UuY3VycmVudCwgb25QYWdlS2V5KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gY29kZSB7aW50fVxyXG4gKiBAcGFyYW0gbXNnIHtzdHJpbmd9XHJcbiAqIEBwYXJhbSBvd25lciB7SG9tZU1lbnV9XHJcbiAqIEBwYXJhbSBpdGVtSW5mbyB7T2JqZWN0fVxyXG4gKi9cclxuZnVuY3Rpb24gb25WYWxpZExvY2soY29kZSwgbXNnLCBvd25lciwgaXRlbUluZm8pIHtcclxuICAgIGlmIChjb2RlID09IDApIHtcclxuICAgICAgICB2YXIgb2xkTG9jayA9IHRkZVVzZXIuY2hpbGRMb2NrO1xyXG4gICAgICAgIGlmIChtc2cgPT0gb2xkTG9jaykge1xyXG4gICAgICAgICAgICBzZW5kT3JkZXIoaXRlbUluZm8pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgIHNob3dDaGlsZExvY2soZnVuY3Rpb24gKGNvZGUsIG1zZykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uVmFsaWRMb2NrKGNvZGUsIG1zZywgb3duZXIsIGl0ZW1JbmZvKTtcclxuICAgICAgICAgICAgICAgIH0sIDEsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvblBhZ2VLZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMCwgJ+aPkOekuicsICfnq6XplIHpqozor4Hlh7rplJknLCAn6YeN6K+VJywgJ+WPlua2iCcpO1xyXG4gICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG9uUGFnZUtleSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRPcmRlcihpdGVtSW5mbykge1xyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgXCJpZFwiOiBpdGVtSW5mby5pZCxcclxuICAgICAgICBcImdhbWVJZFwiOiBpdGVtSW5mby5nYW1lSWQsXHJcbiAgICAgICAgXCJwcm9kdWN0SWRcIjogaXRlbUluZm8ucHJvZHVjdElkLFxyXG4gICAgICAgIFwicHJvZElkXCI6IGl0ZW1JbmZvLnByb2RJZCxcclxuICAgICAgICBcInRyaWFsXCI6IGl0ZW1JbmZvLnRyaWFsXHJcbiAgICB9O1xyXG4gICAgdmFyIGFyZ3MgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgIHNob3dMb2FkaW5nKCfmj5DnpLonLCAn5q2j5Zyo5aSE55CG77yM6K+356iN5YCZLi4uJyk7XHJcbiAgICBzdGJjbGkub3JkZXIxKGl0ZW1JbmZvLnByb2RJZCwgY2FsbGJhY2tVcmwsIGFyZ3MsIG9uT3JkZXIxKTtcclxufVxyXG5cclxuXHJcbnZhciBob21lTWVudTtcclxudmFyIHJlY2hhcmdlUGFnZTtcclxudmFyIGl0ZW1JbmZvcyA9IFtdO1xyXG52YXIgdGRlVXNlcjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBob21lTWVudSA9IG5ldyBIb21lTWVudSgpO1xyXG4gICAgcmVjaGFyZ2VQYWdlID0gbmV3IFJlY2hhcmdlUGFnZSgpO1xyXG4gICAgcmVjaGFyZ2VQYWdlLnNob3cocmVjaGFyZ2VQYWdlLmN1cnJlbnQsIG9uUGFnZUtleSk7XHJcblxyXG4gICAgLy9zaG93TG9hZGluZygn5o+Q56S6JywgJ+ato+WcqOWKoOi9ve+8jOivt+eojeWAmS4uLicpO1xyXG4gICAgZ2V0SlNPTihcImRhdGEvdGRlX3JlY2hhcmdlX2luZm9zLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaXRlbUluZm9zLnB1c2goZGF0YVtpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2hvd0xvYWRpbmcoKTtcclxuICAgICAgICAgICAgc3RiY2xpLnN0YXJ0KG9uU3RhcnQpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9KTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3JlY2hhcmdlLmpzIiwiaW1wb3J0IHtyZXRhaWwscmV0YWlsSWR9IGZyb20gXCIuL19yZXRhaWxcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEtleUNvZGVzKCkge1xyXG4gICAgbGV0IGtleU1hcCA9IHt9O1xyXG5cclxuICAgIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ3hnZCkge1xyXG4gICAgICAgIGtleU1hcCA9IHsgLy8g5bm/6KW/5bm/55S1XHJcbiAgICAgICAgICAgIHVwOiAzOCwgICAgICAgIC8vIOS4ilxyXG4gICAgICAgICAgICBkb3duOiA0MCwgICAgICAvLyDkuItcclxuICAgICAgICAgICAgbGVmdDogMzcsICAgICAgLy8g5bemXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzOSwgICAgIC8vIOWPs1xyXG4gICAgICAgICAgICBvazogMTMsICAgICAgICAvLyDnoa7lrppcclxuICAgICAgICAgICAgZjE6IDQwMCwgICAgICAgLy8gZjEgLy/nuqJcclxuICAgICAgICAgICAgZjI6IDQwMSwgICAgICAgLy8gZjIgLy/ok51cclxuICAgICAgICAgICAgZjM6IDQwMywgICAgICAgLy8gZjMgLy/pu4RcclxuICAgICAgICAgICAgZjQ6IDQwMiwgICAgICAgLy8gZjQgLy/nu79cclxuICAgICAgICAgICAgbnVtMTogNDksICAgICAgLy8g5pWw5a2XMVxyXG4gICAgICAgICAgICBudW0yOiA1MCwgICAgICAvLyDmlbDlrZcyXHJcbiAgICAgICAgICAgIG51bTM6IDUxLCAgICAgIC8vIOaVsOWtlzNcclxuICAgICAgICAgICAgbnVtNDogNTIsICAgICAgLy8g5pWw5a2XNFxyXG4gICAgICAgICAgICBudW01OiA1MywgICAgICAvLyDmlbDlrZc1XHJcbiAgICAgICAgICAgIG51bTY6IDU0LCAgICAgIC8vIOaVsOWtlzZcclxuICAgICAgICAgICAgbnVtNzogNTUsICAgICAgLy8g5pWw5a2XN1xyXG4gICAgICAgICAgICBudW04OiA1NiwgICAgICAvLyDmlbDlrZc4XHJcbiAgICAgICAgICAgIG51bTk6IDU3LCAgICAgIC8vIOaVsOWtlzlcclxuICAgICAgICAgICAgbnVtMDogNDgsICAgICAgLy8g5pWw5a2XMFxyXG4gICAgICAgICAgICBtdXRlOiA1MTgsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDM5OSwgICAgICAvLyDov5Tlm55cclxuICAgICAgICAgICAgdHJhY2s6IDQwNiwgICAgIC8vIOWjsOmBk++8nyAvL+WjsOmBk+mUrlxyXG4gICAgICAgICAgICB2b2xVcDogNTE3LCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogNTE2LCAgLy8g5YeP5bCP6Z+z6YePXHJcbiAgICAgICAgICAgIGZhdjogNDA0LCAgICAgICAvLyDllpzmrKJcclxuICAgICAgICAgICAgcGxheUJhY2s6IDUyMSwgIC8vIOWbnuaUviAgLy/ngrnmkq3plK5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMywgICAgLy8g5LiK5LiA6aG1XHJcbiAgICAgICAgICAgIHBhZ2VEb3duOiAzNCwgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA1MTUsICAgICAgIC8vIOiPnOWNlVxyXG4gICAgICAgICAgICBlc2M6IDUxNCwgICAgICAgIC8v6YCA5Ye6XHJcbiAgICAgICAgICAgIGhvbWU6IDUyMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuaG55eCkge1xyXG4gICAgICAgIC8va2V5TWFwID0geyAvLyDmsrPljZfmnInnur8gbGludXhcclxuICAgICAgICAvLyAgICB1cDogNjUzNjIsXHJcbiAgICAgICAgLy8gICAgZG93bjogNjUzNjQsXHJcbiAgICAgICAgLy8gICAgbGVmdDogNjUzNjEsXHJcbiAgICAgICAgLy8gICAgcmlnaHQ6IDY1MzYzLFxyXG4gICAgICAgIC8vICAgIG9rOiA2NTI5MyxcclxuICAgICAgICAvLyAgICBmMTogMzIsXHJcbiAgICAgICAgLy8gICAgZjI6IDMzLFxyXG4gICAgICAgIC8vICAgIGYzOiAzNCxcclxuICAgICAgICAvLyAgICBmNDogMzUsXHJcbiAgICAgICAgLy8gICAgbnVtMTogNDksXHJcbiAgICAgICAgLy8gICAgbnVtMjogNTAsXHJcbiAgICAgICAgLy8gICAgbnVtMzogNTEsXHJcbiAgICAgICAgLy8gICAgbnVtNDogNTIsXHJcbiAgICAgICAgLy8gICAgbnVtNTogNTMsXHJcbiAgICAgICAgLy8gICAgbnVtNjogNTQsXHJcbiAgICAgICAgLy8gICAgbnVtNzogNTUsXHJcbiAgICAgICAgLy8gICAgbnVtODogNTYsXHJcbiAgICAgICAgLy8gICAgbnVtOTogNTcsXHJcbiAgICAgICAgLy8gICAgbnVtMDogNDgsXHJcbiAgICAgICAgLy8gICAgbXV0ZTogNjM1NjMsXHJcbiAgICAgICAgLy8gICAgYmFjazogNjUzNjcsXHJcbiAgICAgICAgLy8gICAgdHJhY2s6IDY1MzA3LFxyXG4gICAgICAgIC8vICAgIHZvbFVwOiA2MzU2MSxcclxuICAgICAgICAvLyAgICB2b2xEb3duOiA2MzU2MixcclxuICAgICAgICAvLyAgICBmYXY6IDM2LFxyXG4gICAgICAgIC8vICAgIHBsYXlCYWNrOiA3MixcclxuICAgICAgICAvLyAgICBwYWdlVXA6IDI1LFxyXG4gICAgICAgIC8vICAgIHBhZ2VEb3duOiAyNixcclxuICAgICAgICAvLyAgICBtZW51OiA2NTM2MCxcclxuICAgICAgICAvLyAgICBlc2M6IDI3LFxyXG4gICAgICAgIC8vICAgIGhvbWU6IDY1MzYwXHJcbiAgICAgICAgLy99O1xyXG4gICAgICAgIGtleU1hcCA9IHsgLy8g5rKz5Y2X5pyJ57q/IGFuZHJvaWRcclxuICAgICAgICAgICAgdXA6IDM4LCAgICAgICAgLy8g5LiKXHJcbiAgICAgICAgICAgIGRvd246IDQwLCAgICAgIC8vIOS4i1xyXG4gICAgICAgICAgICBsZWZ0OiAzNywgICAgICAvLyDlt6ZcclxuICAgICAgICAgICAgcmlnaHQ6IDM5LCAgICAgLy8g5Y+zXHJcbiAgICAgICAgICAgIG9rOiAxMywgICAgICAgIC8vIOehruWumlxyXG4gICAgICAgICAgICBmMTogMTEyLCAgICAgICAvLyBmMVxyXG4gICAgICAgICAgICBmMjogMTEzLCAgICAgICAvLyBmMlxyXG4gICAgICAgICAgICBmMzogMTE0LCAgICAgICAvLyBmM1xyXG4gICAgICAgICAgICBmNDogMTE1LCAgICAgICAvLyBmNFxyXG4gICAgICAgICAgICBudW0xOiA0OSwgICAgICAvLyDmlbDlrZcxXHJcbiAgICAgICAgICAgIG51bTI6IDUwLCAgICAgIC8vIOaVsOWtlzJcclxuICAgICAgICAgICAgbnVtMzogNTEsICAgICAgLy8g5pWw5a2XM1xyXG4gICAgICAgICAgICBudW00OiA1MiwgICAgICAvLyDmlbDlrZc0XHJcbiAgICAgICAgICAgIG51bTU6IDUzLCAgICAgIC8vIOaVsOWtlzVcclxuICAgICAgICAgICAgbnVtNjogNTQsICAgICAgLy8g5pWw5a2XNlxyXG4gICAgICAgICAgICBudW03OiA1NSwgICAgICAvLyDmlbDlrZc3XHJcbiAgICAgICAgICAgIG51bTg6IDU2LCAgICAgIC8vIOaVsOWtlzhcclxuICAgICAgICAgICAgbnVtOTogNTcsICAgICAgLy8g5pWw5a2XOVxyXG4gICAgICAgICAgICBudW0wOiA0OCwgICAgICAvLyDmlbDlrZcwIC8v5pWw5a2XMCDov5Tlm55cclxuICAgICAgICAgICAgbXV0ZTogNzcsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDgsICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA4MiwgICAgIC8vIOWjsOmBk++8n1xyXG4gICAgICAgICAgICB2b2xVcDogMTkwLCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogMTg4LCAgLy8g5YeP5bCP6Z+z6YePXHJcbiAgICAgICAgICAgIGZhdjogODQsICAgICAgIC8vIOWWnOasolxyXG4gICAgICAgICAgICBwbGF5QmFjazogODAsICAvLyDlm57mlL5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMywgICAgLy8g5LiK5LiA6aG1XHJcbiAgICAgICAgICAgIHBhZ2VEb3duOiAzNCwgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA3MiwgICAgICAgLy8g6I+c5Y2VXHJcbiAgICAgICAgICAgIGVzYzogMjcsXHJcbiAgICAgICAgICAgIGhvbWU6IDcyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHJldGFpbElkID09IHJldGFpbC5nZGdkKSB7XHJcbiAgICAgICAga2V5TWFwID0geyAvLyDlub/kuJzlub/nlLVcclxuICAgICAgICAgICAgdXA6IDg3LCAgICAgICAgLy8g5LiKIFfplK5cclxuICAgICAgICAgICAgZG93bjogODMsICAgICAgLy8g5LiLIFPplK5cclxuICAgICAgICAgICAgbGVmdDogNjUsICAgICAgLy8g5bemIEHplK5cclxuICAgICAgICAgICAgcmlnaHQ6IDY4LCAgICAgLy8g5Y+zIETplK5cclxuICAgICAgICAgICAgb2s6IDEzLCAgICAgICAgLy8g56Gu5a6aXHJcbiAgICAgICAgICAgIGYxOiA0MDAsICAgICAgIC8vIGYxIC8v57qiXHJcbiAgICAgICAgICAgIGYyOiA0MDEsICAgICAgIC8vIGYyIC8v6JOdXHJcbiAgICAgICAgICAgIGYzOiA0MDIsICAgICAgIC8vIGYzIC8v6buEXHJcbiAgICAgICAgICAgIGY0OiA0MDMsICAgICAgIC8vIGY0IC8v57u/XHJcbiAgICAgICAgICAgIG51bTE6IDQ5LCAgICAgIC8vIOaVsOWtlzFcclxuICAgICAgICAgICAgbnVtMjogNTAsICAgICAgLy8g5pWw5a2XMlxyXG4gICAgICAgICAgICBudW0zOiA1MSwgICAgICAvLyDmlbDlrZczXHJcbiAgICAgICAgICAgIG51bTQ6IDUyLCAgICAgIC8vIOaVsOWtlzRcclxuICAgICAgICAgICAgbnVtNTogNTMsICAgICAgLy8g5pWw5a2XNVxyXG4gICAgICAgICAgICBudW02OiA1NCwgICAgICAvLyDmlbDlrZc2XHJcbiAgICAgICAgICAgIG51bTc6IDU1LCAgICAgIC8vIOaVsOWtlzdcclxuICAgICAgICAgICAgbnVtODogNTYsICAgICAgLy8g5pWw5a2XOFxyXG4gICAgICAgICAgICBudW05OiA1NywgICAgICAvLyDmlbDlrZc5XHJcbiAgICAgICAgICAgIG51bTA6IDQ4LCAgICAgIC8vIOaVsOWtlzBcclxuICAgICAgICAgICAgbXV0ZTogNjcsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDgsICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA4NiwgICAgIC8vIOWjsOmBk++8nyAvL+WjsOmBk+mUrlxyXG4gICAgICAgICAgICB2b2xVcDogNjEsICAgIC8vIOWinuWkp+mfs+mHj1xyXG4gICAgICAgICAgICB2b2xEb3duOiA0NSwgIC8vIOWHj+Wwj+mfs+mHj1xyXG4gICAgICAgICAgICBmYXY6IDc2LCAgICAgICAvLyDllpzmrKJcclxuICAgICAgICAgICAgcGxheUJhY2s6IDUyMSwgIC8vIOWbnuaUviAgLy/ngrnmkq3plK5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMDYsICAgIC8vIOS4iuS4gOmhtVxyXG4gICAgICAgICAgICBwYWdlRG93bjogMzA3LCAgLy8g5LiL5LiA6aG1XHJcbiAgICAgICAgICAgIG1lbnU6IDcyLCAgICAgICAvLyDoj5zljZVcclxuICAgICAgICAgICAgZXNjOiAyNyxcclxuICAgICAgICAgICAgaG9tZTogNzJcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0gZWxzZSB7IC8vIHdpbmRvd3Mg6ZSu56CBXHJcbiAgICAgICAga2V5TWFwID0ge1xyXG4gICAgICAgICAgICB1cDogMzgsICAgICAgICAvLyDkuIpcclxuICAgICAgICAgICAgZG93bjogNDAsICAgICAgLy8g5LiLXHJcbiAgICAgICAgICAgIGxlZnQ6IDM3LCAgICAgIC8vIOW3plxyXG4gICAgICAgICAgICByaWdodDogMzksICAgICAvLyDlj7NcclxuICAgICAgICAgICAgb2s6IDEzLCAgICAgICAgLy8g56Gu5a6aXHJcbiAgICAgICAgICAgIGYxOiAxMTIsICAgICAgIC8vIGYxXHJcbiAgICAgICAgICAgIGYyOiAxMTMsICAgICAgIC8vIGYyXHJcbiAgICAgICAgICAgIGYzOiAxMTQsICAgICAgIC8vIGYzXHJcbiAgICAgICAgICAgIGY0OiAxMTUsICAgICAgIC8vIGY0XHJcbiAgICAgICAgICAgIG51bTE6IDQ5LCAgICAgIC8vIOaVsOWtlzFcclxuICAgICAgICAgICAgbnVtMjogNTAsICAgICAgLy8g5pWw5a2XMlxyXG4gICAgICAgICAgICBudW0zOiA1MSwgICAgICAvLyDmlbDlrZczXHJcbiAgICAgICAgICAgIG51bTQ6IDUyLCAgICAgIC8vIOaVsOWtlzRcclxuICAgICAgICAgICAgbnVtNTogNTMsICAgICAgLy8g5pWw5a2XNVxyXG4gICAgICAgICAgICBudW02OiA1NCwgICAgICAvLyDmlbDlrZc2XHJcbiAgICAgICAgICAgIG51bTc6IDU1LCAgICAgIC8vIOaVsOWtlzdcclxuICAgICAgICAgICAgbnVtODogNTYsICAgICAgLy8g5pWw5a2XOFxyXG4gICAgICAgICAgICBudW05OiA1NywgICAgICAvLyDmlbDlrZc5XHJcbiAgICAgICAgICAgIG51bTA6IDQ4LCAgICAgIC8vIOaVsOWtlzAgLy/mlbDlrZcwIOi/lOWbnlxyXG4gICAgICAgICAgICBtdXRlOiA3NywgICAgICAvLyDpnZnpn7NcclxuICAgICAgICAgICAgYmFjazogOCwgICAgICAvLyDov5Tlm55cclxuICAgICAgICAgICAgdHJhY2s6IDgyLCAgICAgLy8g5aOw6YGT77yfXHJcbiAgICAgICAgICAgIHZvbFVwOiAxOTAsICAgIC8vIOWinuWkp+mfs+mHj1xyXG4gICAgICAgICAgICB2b2xEb3duOiAxODgsICAvLyDlh4/lsI/pn7Pph49cclxuICAgICAgICAgICAgZmF2OiA4NCwgICAgICAgLy8g5Zac5qyiXHJcbiAgICAgICAgICAgIHBsYXlCYWNrOiA4MCwgIC8vIOWbnuaUvlxyXG4gICAgICAgICAgICBwYWdlVXA6IDMzLCAgICAvLyDkuIrkuIDpobVcclxuICAgICAgICAgICAgcGFnZURvd246IDM0LCAgLy8g5LiL5LiA6aG1XHJcbiAgICAgICAgICAgIG1lbnU6IDcyLCAgICAgICAvLyDoj5zljZVcclxuICAgICAgICAgICAgZXNjOiAyNyxcclxuICAgICAgICAgICAgaG9tZTogNzJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleU1hcDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXZlbnQoZXZ0KSB7XHJcbiAgICByZXR1cm4gZXZ0IHx8IHdpbmRvdy5ldmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0S2V5KGV2dCkge1xyXG4gICAgLy/mlK/mjIFJReOAgUZGXHJcbiAgICBldnQgPSBnZXRFdmVudChldnQpO1xyXG4gICAgcmV0dXJuIGV2dC5rZXlDb2RlIHx8IGV2dC53aGljaCB8fCBldnQuY2hhckNvZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvZGVzKCkge1xyXG4gICAgY29uc3Qga2V5TWFwID0gZ2V0S2V5Q29kZXMoKTtcclxuICAgIHZhciBjb2RlcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgY29kZSBpbiBrZXlNYXApIHtcclxuICAgICAgICBpZiAoa2V5TWFwLmhhc093blByb3BlcnR5KGNvZGUpKSB7XHJcbiAgICAgICAgICAgIGNvZGVzLnB1c2goa2V5TWFwW2NvZGVdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29kZXM7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX2tleWNvZGVzLmpzIiwiY29uc3QgcmV0YWlsID0ge1xyXG4gICAgZ3hnZDogJzk2MzM1JyxcclxuICAgIGhueXg6ICc5NjI2NicsXHJcbiAgICBnZGdkOiAnOTY5NTYnLFxyXG4gICAgbm9uZTogJzEwMDAnXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRSZXRhaWxJZCgpIHtcclxuICAgIHRyeSB7Ly/lub/opb/lub/nlLVcclxuICAgICAgICBpZiAoZ3Vhbmd4aSAmJiBpUGFuZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJldGFpbC5neGdkO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHRyeSB7Ly/msrPljZfmnInnur9cclxuICAgICAgICB2YXIgU3lzdGVtID0gd2luZG93LlN5c3RlbTtcclxuICAgICAgICBpZiAoU3lzdGVtICYmIFN5c3RlbS5zdGJJRCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0YWlsLmhueXg7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgdHJ5IHsvL+W5v+S4nOW5v+eUtVxyXG4gICAgICAgIGlmIChDQSAmJiBTdG9yYWdlU2VydmljZSAmJiBGaWxlU3lzdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXRhaWwuZ2RnZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy92YXIgc3RvcmFnZUxpc3QgPSBTdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlSW5mb3MoKTtcclxuICAgICAgICAvL2lmIChzdG9yYWdlTGlzdCAmJiBzdG9yYWdlTGlzdCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vICAgIHZhciBwYXJ0aXRpb25QYXRoTGlzdCA9IHN0b3JhZ2VMaXN0WzBdLmdldFBhcnRpdGlvbnNJbmZvKClbMF07XHJcbiAgICAgICAgLy8gICAgdmFyIHBhcnRpdGlvblBhdGggPSBwYXJ0aXRpb25QYXRoTGlzdC5wYXRoO1xyXG4gICAgICAgIC8vICAgIHZhciBkaXIgPSBGaWxlU3lzdGVtLmdldERpcmVjdG9yeShwYXJ0aXRpb25QYXRoKTtcclxuICAgICAgICAvLyAgICB2YXIgZmxpc3QgPSBkaXIuZmlsZUxpc3Q7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICBmb3IgKHZhciBpIGluIGZsaXN0KSB7XHJcbiAgICAgICAgLy8gICAgICAgIGlmIChmbGlzdFtpXS5uYW1lLnN1YnN0cmluZygwLCA2KSA9PSBcImNhY2FyZFwiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICB2YXIgY2FyZE5vID0gXCI5Njk1NlwiICsgZmxpc3RbaV0ubmFtZS5zdWJzdHJpbmcoNiwgMTIpO1xyXG4gICAgICAgIC8vICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgfVxyXG4gICAgICAgIC8vfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldGFpbC5ub25lO1xyXG59XHJcblxyXG52YXIgcmV0YWlsSWQgPSBnZXRSZXRhaWxJZCgpO1xyXG5leHBvcnQge3JldGFpbCxnZXRSZXRhaWxJZCxyZXRhaWxJZH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fcmV0YWlsLmpzIiwiaW1wb3J0IHtSZXF1ZXN0Qm9keSwgVG9vZG9DbGllbnR9IGZyb20gXCIuL190ZGNsaVwiO1xyXG5pbXBvcnQge3JldGFpbElkLHJldGFpbH0gZnJvbSBcIi4vX3JldGFpbFwiO1xyXG5pbXBvcnQge3N0Yk51bGx9IGZyb20gXCIuL19zdGJudWxsXCI7XHJcbnZhciBtZDUgPSByZXF1aXJlKCdtZDUnKTtcclxudmFyIEpTT04gPSByZXF1aXJlKCdKU09OJyk7XHJcblxyXG5mdW5jdGlvbiBTdGJDbGllbnQoKSB7XHJcbiAgICAvLyB0aGlzLm9yaWdpblVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnL3Rkc3J2JztcclxuICAgIHRoaXMub3JpZ2luVXJsID0gXCJodHRwOi8vbG9jYWxob3N0L1Rvb2RvU2VydmljZS9wdWJsaWMvXCI7XHJcbiAgICB0aGlzLmFwcEtleSA9ICcxMDAwJztcclxuICAgIHRoaXMuYXBwU2VjcmV0ID0gJ1JjT0ZodEFZendDR285MVBHSGRWJztcclxuICAgIHRoaXMuX3RkY2xpID0gbnVsbDtcclxufVxyXG5TdGJDbGllbnQucHJvdG90eXBlID0ge1xyXG4gICAgaXNSZWFkeTogZmFsc2UsXHJcbiAgICB1c2VySWQ6ICcnLFxyXG4gICAgdG9rZW46ICcnLFxyXG5cclxuICAgIG1kNTogZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgIHJldHVybiBtZDUobXNnICsgdGhpcy5hcHBTZWNyZXQpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGNhbGxiYWNrLmJpelxyXG4gICAgICovXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fdGRjbGkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGRjbGkgPSBuZXcgVG9vZG9DbGllbnQodGhpcy5hcHBLZXksIHRoaXMuYXBwU2VjcmV0LCB0aGlzLm9yaWdpblVybCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdG9rZW4gPSBzdGJOdWxsLmdldFZhbHVlKCd0b29kby50b2tlbicpO1xyXG4gICAgICAgIGxldCB1c2VySWQgPSBzdGJOdWxsLmdldFZhbHVlKCd0b29kby51c2VySWQnKTtcclxuICAgICAgICAvLyBpZiAodG9rZW4gJiYgdXNlcklkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcclxuICAgICAgICAvLyAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soMCk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncmV0YWlsSWQnOiByZXRhaWxJZCxcclxuICAgICAgICAgICAgJ3JlZ2lvbkNvZGUnOiBzdGJOdWxsLmdldFJlZ2lvbkNvZGUoKSxcclxuICAgICAgICAgICAgJ2NhcmRUVic6IHN0Yk51bGwuZ2V0Q2FyZFRWKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby91c2VyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvJyk7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2VuZChib2R5SW4sIGZ1bmN0aW9uIChib2R5T3V0KSB7XHJcbiAgICAgICAgICAgIGlmIChib2R5T3V0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYml6T3V0ID0gSlNPTi5wYXJzZShib2R5T3V0LmJpekNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgb3duZXIudXNlcklkID0gYml6T3V0LnVzZXJJZDtcclxuICAgICAgICAgICAgICAgIG93bmVyLnRva2VuID0gYm9keU91dC50b2tlbjtcclxuICAgICAgICAgICAgICAgIHN0Yk51bGwuc2V0VmFsdWUoJ3Rvb2RvLnVzZXJJZCcsIG93bmVyLnVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBzdGJOdWxsLnNldFZhbHVlKCd0b29kby50b2tlbicsIG93bmVyLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIG93bmVyLmlzUmVhZHkgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vb3duZXIudGRlVXNlcihjYWxsYmFjayk7Ly/ov5Tlm57lpKfljoXnmoTotKblj7fkv6Hmga9cclxuICAgICAgICAgICAgICAgIG93bmVyLnRkZVVzZXIoZnVuY3Rpb24gKGNvZGUsIGJpeikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYml6LmJpelVzZXIgPSBiaXpPdXQuYml6VXNlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhjb2RlLCBiaXopO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQuY29kZSwgYm9keU91dC5zdWJDb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGJpelVzZXI6IGZ1bmN0aW9uIChiaXpJbiwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby9iaXpVc2VyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kbycpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICBhZGRXaW5uZXI6IGZ1bmN0aW9uIChwcml6ZUlELHN0YXRlLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcml6ZUlEJzpwcml6ZUlELFxyXG4gICAgICAgICAgICAnc3RhdGUnOnN0YXRlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2FkZFdpbm5lcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIGFkZFN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2FkZFN0YXRlJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbik7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRhRnJlZVN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3VwZGF0YUZyZWVTdGF0ZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4pO1xyXG4gICAgfSxcclxuICAgIGdldFByaXplOiBmdW5jdGlvbiAoaWQsY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ2lkJzppZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2dldFByaXplJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbixjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgdHVybnRhYmxlU3RhdGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS90dXJudGFibGVTdGF0ZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgLy8gYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICB0dXJudGFibGVQcm86IGZ1bmN0aW9uICh0eXBlLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAndHlwZSc6dHlwZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3R1cm50YWJsZVBybyc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICBwcml6ZU51bTpmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvdHVybnRhYmxlUHJpemVOdW0nO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG5cclxuICAgIHdpbm5lckluZm86IGZ1bmN0aW9uIChudW0sY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ251bSc6IG51bVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3dpbm5lckluZm8nO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHlwZSAx77ya5pyq6aKG5Y+WIDI65bey6aKG5Y+WIDPvvJrlt7Lov4fmnJ9cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHVzZXJXaW5uZXI6IGZ1bmN0aW9uICh0eXBlLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICd0eXBlJzogdHlwZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3VzZXJXaW5uZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICBhZGRDb2luczogZnVuY3Rpb24gKGFkZE51bSkge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnYWRkTnVuJzogYWRkTnVtXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvYWRkQ29pbic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4pO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2R1Y3RJZCDmn6Xor6LnmoTkuqflk4Hnu5/kuIDnvJblj7dcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBjYWxsYmFjay5iaXpcclxuICAgICAqL1xyXG4gICAgcXVlcnlTZXJ2ZTE6IGZ1bmN0aW9uIChwcm9kdWN0SWQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcm9kdWN0SWQnOiBwcm9kdWN0SWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3NlcnZlL3F1ZXJ5MSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vc2VydmUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvZHVjdElkIOafpeivoueahOS6p+WTgee7n+S4gOe8luWPt1xyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6XHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5UHJvZHVjdDE6IGZ1bmN0aW9uIChwcm9kdWN0SWQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcm9kdWN0SWQnOiBwcm9kdWN0SWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL21hcmtldC9xdWVyeTEnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL21hcmtldCcpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9kdWN0SWQg55Sf5oiQ6K6i5Y2V55qE5Lqn5ZOB57uf5LiA57yW5Y+3XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2tVcmwg5pSv5LuY5ZCO5Zue6LCD5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSDljp/moLfkvKDlm57nu5ljYWxsYmFja1VybFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6XHJcbiAgICAgKi9cclxuICAgIG9yZGVyMTogZnVuY3Rpb24gKHByb2R1Y3RJZCwgY2FsbGJhY2tVcmwsIGRhdGEsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcm9kdWN0SWQnOiBwcm9kdWN0SWQsXHJcbiAgICAgICAgICAgICd1c2VySWQnOiB0aGlzLnVzZXJJZCxcclxuICAgICAgICAgICAgJ2NhbGxiYWNrVXJsJzogY2FsbGJhY2tVcmwsXHJcbiAgICAgICAgICAgICdkYXRhJzogZGF0YVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdHJhZGUvb3JkZXIxJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90cmFkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFkZU5vIOivt+axguaUr+S7mOiuouWNleWPt1xyXG4gICAgICovXHJcbiAgICBwYXk6IGZ1bmN0aW9uICh0cmFkZU5vKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICd0cmFkZU5vJzogdHJhZGVOb1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdHJhZGUvcGF5JztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90cmFkZScpO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnN1Ym1pdChib2R5SW4pO1xyXG4gICAgfSxcclxuICAgIGJpbGw6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RyYWRlL2JpbGwnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdHJhZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnui0puWPt+S/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGVVc2VyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvdXNlcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSAnJztcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgdGRlTG9jazogZnVuY3Rpb24gKG9sZExvY2ssIG5ld0xvY2ssIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdjaGlsZExvY2snOiBvbGRMb2NrLFxyXG4gICAgICAgICAgICAnbmV3TG9jayc6IG5ld0xvY2tcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9sb2NrJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSDpobXpnaLnvJblj7dcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkZVBhZ2U6IGZ1bmN0aW9uIChwYWdlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncGFnZSc6IHBhZ2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9wYWdlJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2F0ZWdvcnkg5q2M5puy5YiG57G7XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnumhtemdouS/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGFTb25nOiBmdW5jdGlvbiAoY2F0ZWdvcnksIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdjYXRlZ29yeSc6IGNhdGVnb3J5XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvc29uZyc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIHRkYVNvbmcxOiBmdW5jdGlvbiAoc29uZ0lkLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnc29uZ0lkJzogc29uZ0lkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvc29uZzEnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkYU1hdGNoOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvbWF0Y2gnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpeiDov5Tlm57pobXpnaLkv6Hmga9cclxuICAgICAqL1xyXG4gICAgdGRhVXNlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL3VzZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZCDorrDlvZVcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkYVJlY29yZDogZnVuY3Rpb24gKHJlY29yZCwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvcmVjb3JkJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHJlY29yZCk7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0Qm9keX0gYm9keUluXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxudW1iZXJ8c3RyaW5nfSBjYWxsYmFjay5iaXog6L+U5Zue5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHNlbmQ6IGZ1bmN0aW9uIChib2R5SW4sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3Qgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNlbmQoYm9keUluLCBmdW5jdGlvbiAoYm9keU91dCkge1xyXG4gICAgICAgICAgICBpZiAoYm9keU91dC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBiaXpPdXQgPSBKU09OLnBhcnNlKGJvZHlPdXQuYml6Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9keU91dC50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnRva2VuID0gYm9keU91dC50b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICBzdGJOdWxsLnNldFZhbHVlKCd0b29kby50b2tlbicsIG93bmVyLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiAxKTsgICAgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiBcIjFcIik7ICAgICAgICAgICAgICAvLyDov5Tlm57lrZfnrKbkuLJcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgYWxlcnQodHlwZW9mIHRydWUpOyAgICAgICAgICAgICAvLyDov5Tlm57lrZfnrKbkuLJcImJvb2xlYW5cIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiB7fSk7ICAgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiBbXSk7ICAgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJvYmplY3QgXCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgZnVuY3Rpb24oKXt9KTsgICAgIC8vIOi/lOWbnuWtl+espuS4slwiZnVuY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiBudWxsKTsgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiB1bmRlZmluZWQpOyAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpZiAoYml6T3V0ICYmIHR5cGVvZihiaXpPdXQpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpek91dC5zdGJjbGkgPSBvd25lcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dC5jb2RlLCBiaXpPdXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0LmNvZGUsIGJvZHlPdXQuc3ViQ29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG52YXIgc3RiY2xpID0gbmV3IFN0YkNsaWVudCgpO1xyXG5leHBvcnQge1N0YkNsaWVudCxzdGJjbGl9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fc3RiY2xpLmpzIiwiaW1wb3J0IHtyZXRhaWxJZCxyZXRhaWx9IGZyb20gXCIuL19yZXRhaWxcIjtcclxuXHJcbmZ1bmN0aW9uIFN0Yk51bGwoKSB7XHJcbn1cclxuaWYgKHJldGFpbElkID09IHJldGFpbC5neGdkKSB7Ly8g5bm/6KW/5bm/55S1ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFN0Yk51bGwucHJvdG90eXBlID0ge1xyXG4gICAgICAgIC8v6I635Y+W5py66aG255uS5Y+35a2X56ym5LiyXHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBndWFuZ3hpLmdldFN0Yk51bSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/ojrflj5bljLrln5/noIHluLjmlbBcclxuICAgICAgICBnZXRSZWdpb25Db2RlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpUGFuZWwuZ2V0R2xvYmFsVmFyKFwiR0VUX01FRElBX1JFR0lPTl9JRFwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlQYW5lbC5nZXRHbG9iYWxWYXIoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhQ29va2llID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFDb29raWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYUNydW1iID0gYUNvb2tpZVtpXS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVzY2FwZShrZXlOYW1lKSA9PSBhQ3J1bWJbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdW5lc2NhcGUoYUNydW1iWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0IHx8IHJlc3VsdCA9PSBcIiNcIiB8fCByZXN1bHQgPT0gXCJjbGVhclZhbHVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSwga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGtleVZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGtleVZhbHVlID0gXCJjbGVhclZhbHVlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlQYW5lbC5zZXRHbG9iYWxWYXIoa2V5TmFtZSwga2V5VmFsdWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBlc2NhcGUoa2V5TmFtZSkgKyBcIj1cIiArIGVzY2FwZShrZXlWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IGVsc2UgaWYgKHJldGFpbElkID09IHJldGFpbC5obnl4KSB7Ly8g5rKz5Y2X5pyJ57q/ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHZhciBTeXN0ZW0gPSB3aW5kb3cuU3lzdGVtO1xyXG4gICAgU3RiTnVsbC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTeXN0ZW0uc3RiSUQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRSZWdpb25Db2RlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZWdpb24gPSAnaG55eCc7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZWdpb24gPSBTeXN0ZW0uR2V0Q0FSZWdpb25JRCgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlZ2lvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBnID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBuZXcgR2xvYmFsKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBnID0gbmV3IEdsb2JhbDIoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICBnID0ge3ZhbHVlOiBudWxsfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZy52YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSwga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIGcgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IG5ldyBHbG9iYWwoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBuZXcgR2xvYmFsMihrZXlOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnLnZhbHVlID0ga2V5VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ2RnZCkgey8vIOW5v+S4nOW5v+eUtSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBTdGJOdWxsLnByb3RvdHlwZSA9IHtcclxuICAgICAgICBnZXRDYXJkVFY6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFDQS5pY05vKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJzk2OTU2MTAwODYnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBDQS5pY05vO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ0EucmVnaW9uQ29kZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gU3lzU2V0dGluZy5nZXRFbnYoa2V5TmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIFN5c1NldHRpbmcuc2V0RW52KGtleU5hbWUsIGtleVZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IGVsc2Uge1xyXG4gICAgU3RiTnVsbC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnMTAwODYnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJzAnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgICAgICAgICAgY29uc3QgYUNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFDb29raWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFDcnVtYiA9IGFDb29raWVbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVzY2FwZShrZXlOYW1lKSA9PSBhQ3J1bWJbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB1bmVzY2FwZShhQ3J1bWJbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGVzY2FwZShrZXlOYW1lKSArIFwiPVwiICsgZXNjYXBlKGtleVZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG52YXIgc3RiTnVsbCA9IG5ldyBTdGJOdWxsKCk7XHJcbmV4cG9ydCB7U3RiTnVsbCxzdGJOdWxsfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3N0Ym51bGwuanMiLCJ2YXIgbWQ1ID0gcmVxdWlyZSgnbWQ1Jyk7XHJcbnZhciBKU09OID0gcmVxdWlyZSgnSlNPTicpO1xyXG5cclxuaWYgKCFEYXRlLnByb3RvdHlwZS5mb3JtYXQpIHtcclxuICAgIERhdGUucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIChmbXQpIHtcclxuICAgICAgICBjb25zdCBvID0ge1xyXG4gICAgICAgICAgICBcIk0rXCI6IHRoaXMuZ2V0TW9udGgoKSArIDEsICAgICAgICAgICAgICAgICAvL+aciOS7vVxyXG4gICAgICAgICAgICBcImQrXCI6IHRoaXMuZ2V0RGF0ZSgpLCAgICAgICAgICAgICAgICAgICAgLy/ml6VcclxuICAgICAgICAgICAgXCJoK1wiOiB0aGlzLmdldEhvdXJzKCksICAgICAgICAgICAgICAgICAgIC8v5bCP5pe2XHJcbiAgICAgICAgICAgIFwibStcIjogdGhpcy5nZXRNaW51dGVzKCksICAgICAgICAgICAgICAgICAvL+WIhlxyXG4gICAgICAgICAgICBcInMrXCI6IHRoaXMuZ2V0U2Vjb25kcygpLCAgICAgICAgICAgICAgICAgLy/np5JcclxuICAgICAgICAgICAgXCJxK1wiOiBNYXRoLmZsb29yKCh0aGlzLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6plxyXG4gICAgICAgICAgICBcIlNcIjogdGhpcy5nZXRNaWxsaXNlY29uZHMoKSAgICAgICAgICAgICAvL+avq+enklxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKC8oeSspLy50ZXN0KGZtdCkpIHtcclxuICAgICAgICAgICAgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAodGhpcy5nZXRGdWxsWWVhcigpICsgXCJcIikuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGsgaW4gbykge1xyXG4gICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChcIihcIiArIGsgKyBcIilcIikudGVzdChmbXQpKSB7XHJcbiAgICAgICAgICAgICAgICBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsIChSZWdFeHAuJDEubGVuZ3RoID09IDEpID8gKG9ba10pIDogKChcIjAwXCIgKyBvW2tdKS5zdWJzdHIoKFwiXCIgKyBvW2tdKS5sZW5ndGgpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZtdDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlcXVlc3RCb2R5KCkge1xyXG4gICAgdGhpcy5hcHBJZCA9ICcnOyAgICAgICAgICAgICAgIC8vIOWIhumFjee7meW8gOWPkeiAheeahOW6lOeUqElEOjEwMDBcclxuICAgIHRoaXMubWV0aG9kID0gJyc7ICAgICAgICAgICAgICAvLyDmjqXlj6PlkI3np7A6dG9vZG8udHJhZGUucGF5XHJcbiAgICB0aGlzLmZvcm1hdCA9ICdKU09OJzsgICAgICAgICAgLy8g5LuF5pSv5oyBSlNPTlxyXG4gICAgdGhpcy5jaGFyc2V0ID0gJ3V0Zi04JzsgICAgICAgIC8vIOivt+axguS9v+eUqOeahOe8lueggeagvOW8j++8jOWmgnV0Zi04LGdiayxnYjIzMTLnrYlcclxuICAgIHRoaXMuc2lnblR5cGUgPSAnTUQ1JzsgICAgICAgICAvLyDllYbmiLfnlJ/miJDnrb7lkI3lrZfnrKbkuLLmiYDkvb/nlKjnmoTnrb7lkI3nrpfms5Xnsbvlnos6UlNB44CBTUQ1XHJcbiAgICB0aGlzLnNpZ25Db2RlID0gJyc7ICAgICAgICAgICAgLy8g5ZWG5oi36K+35rGC5Y+C5pWw55qE562+5ZCN5LiyIDMy5L2N5bCP5YaZXHJcbiAgICB0aGlzLnRpbWVzdGFtcCA9ICcnOyAgICAgICAgICAgLy8g5Y+R6YCB6K+35rGC55qE5pe26Ze077yM5qC85byPXCJ5eXl5LU1NLWRkIEhIOm1tOnNzXCI6MjAxNC0wNy0yNCAwMzowNzo1MFxyXG4gICAgdGhpcy52ZXJzaW9uID0gJzEuMCc7ICAgICAgICAgIC8vIOiwg+eUqOeahOaOpeWPo+eJiOacrO+8jOWbuuWumuS4uu+8mjEuMFxyXG4gICAgdGhpcy5hcHBBdXRoVG9rZW4gPSAnJzsgICAgICAgIC8vIOW6lOeUqOaOiOadg+eggVxyXG4gICAgdGhpcy5iaXpDb250ZW50ID0gJyc7ICAgICAgICAgIC8vIOS4muWKoeWPguaVsOmbhuWQiO+8jOacgOWkp+mVv+W6puS4jemZkO+8jOmZpOWFrOWFseWPguaVsOWkluaJgOacieivt+axguWPguaVsOmDveW/hemhu+aUvuWcqOi/meS4quWPguaVsOS4reS8oOmAku+8jOWFt+S9k+WPgueFp+WQhOS6p+WTgeW/q+mAn+aOpeWFpeaWh+aho1xyXG59XHJcblJlcXVlc3RCb2R5LnByb3RvdHlwZSA9IHtcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgICAgIHRoaXMuYXBwSWQgPSBib2R5LmFwcElkO1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gYm9keS5tZXRob2Q7XHJcbiAgICAgICAgdGhpcy5mb3JtYXQgPSBib2R5LmZvcm1hdDtcclxuICAgICAgICB0aGlzLmNoYXJzZXQgPSBib2R5LmNoYXJzZXQ7XHJcbiAgICAgICAgdGhpcy5zaWduVHlwZSA9IGJvZHkuc2lnblR5cGU7XHJcbiAgICAgICAgdGhpcy5zaWduQ29kZSA9IGJvZHkuc2lnbkNvZGU7XHJcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBib2R5LnRpbWVzdGFtcDtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBib2R5LnZlcnNpb247XHJcbiAgICAgICAgdGhpcy5hcHBBdXRoVG9rZW4gPSBib2R5LmFwcEF1dGhUb2tlbjtcclxuICAgICAgICB0aGlzLmJpekNvbnRlbnQgPSBib2R5LmJpekNvbnRlbnQ7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVzcG9uc2VCb2R5KCkge1xyXG4gICAgdGhpcy5jb2RlID0gMDsgICAgICAgLy8g572R5YWz6L+U5Zue56CBXHJcbiAgICB0aGlzLm1zZyA9ICfosIPnlKjmiJDlip8nOyAvLyDnvZHlhbPov5Tlm57noIHmj4/ov7BcclxuICAgIHRoaXMuc3ViQ29kZSA9ICcnOyAgIC8vIOS4muWKoei/lOWbnueggSzor6bop4HmlofmoaM6eHh4eFxyXG4gICAgdGhpcy5zdWJNc2cgPSAnJzsgICAgLy8g5Lia5Yqh6L+U5Zue56CB5o+P6L+wLOivpuingeaWh+ahozrkuqTmmJPlt7LooqvmlK/ku5hcclxuICAgIHRoaXMudGltZXN0YW1wID0gJyc7IC8vIOW6lOetlOeahOaXtumXtFxyXG4gICAgdGhpcy5zaWduID0gJyc7ICAgICAgLy8g562+5ZCNLOivpuingeaWh+ahoyAzMuS9jeWwj+WGmVxyXG4gICAgdGhpcy5iaXpDb250ZW50ID0gJyc7Ly8g5Lia5Yqh5Y+C5pWw6ZuG5ZCI77yM5pyA5aSn6ZW/5bqm5LiN6ZmQ77yM6Zmk5YWs5YWx5Y+C5pWw5aSW5omA5pyJ6L+U5Zue5Y+C5pWw6YO95b+F6aG75pS+5Zyo6L+Z5Liq5Y+C5pWw5Lit5Lyg6YCS77yM5YW35L2T5Y+C54Wn5ZCE5Lqn5ZOB5b+r6YCf5o6l5YWl5paH5qGjXHJcbiAgICB0aGlzLnRva2VuID0gJyc7ICAgICAvLyDmm7TmlrDlkI7nmoTmjojmnYPnoIEs5Li656m65YiZ5LiN5pu05pawXHJcbn1cclxuUmVzcG9uc2VCb2R5LnByb3RvdHlwZSA9IHtcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGJvZHkuY29kZTtcclxuICAgICAgICB0aGlzLm1zZyA9IGJvZHkubXNnO1xyXG4gICAgICAgIHRoaXMuc3ViQ29kZSA9IGJvZHkuc3ViQ29kZTtcclxuICAgICAgICB0aGlzLnN1Yk1zZyA9IGJvZHkuc3ViTXNnO1xyXG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gYm9keS50aW1lc3RhbXA7XHJcbiAgICAgICAgdGhpcy5zaWduID0gYm9keS5zaWduO1xyXG4gICAgICAgIHRoaXMuYml6Q29udGVudCA9IGJvZHkuYml6Q29udGVudDtcclxuICAgICAgICB0aGlzLnRva2VuID0gYm9keS50b2tlbjtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUb29kb0NsaWVudChhcHBJZCwgYXBwU2VjcmV0LCBhcGlVcmwpIHtcclxuICAgIHRoaXMuc3RhcnQoYXBwSWQsIGFwcFNlY3JldCwgYXBpVXJsKTtcclxuICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XHJcbn1cclxuXHJcblRvb2RvQ2xpZW50LnByb3RvdHlwZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcElkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwU2VjcmV0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBpVXJsXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoYXBwSWQsIGFwcFNlY3JldCwgYXBpVXJsKSB7XHJcbiAgICAgICAgdGhpcy5hcHBJZCA9IGFwcElkO1xyXG4gICAgICAgIHRoaXMuYXBwU2VjcmV0ID0gYXBwU2VjcmV0O1xyXG4gICAgICAgIHRoaXMuYXBpVXJsID0gYXBpVXJsO1xyXG4gICAgICAgIHRoaXMudG9rZW4gPSAnJztcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVxdWVzdEJvZHl9IGJvZHlJblxyXG4gICAgICovXHJcbiAgICBzaWduQ29kZUluOiBmdW5jdGlvbiAoYm9keUluKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gJycgK1xyXG4gICAgICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuICtcclxuICAgICAgICAgICAgYm9keUluLmFwcElkICtcclxuICAgICAgICAgICAgYm9keUluLmJpekNvbnRlbnQgK1xyXG4gICAgICAgICAgICBib2R5SW4uY2hhcnNldCArXHJcbiAgICAgICAgICAgIGJvZHlJbi5mb3JtYXQgK1xyXG4gICAgICAgICAgICBib2R5SW4ubWV0aG9kICtcclxuICAgICAgICAgICAgYm9keUluLnRpbWVzdGFtcCArXHJcbiAgICAgICAgICAgIGJvZHlJbi52ZXJzaW9uICtcclxuICAgICAgICAgICAgdGhpcy5hcHBTZWNyZXQ7XHJcbiAgICAgICAgcmV0dXJuIG1kNShzdHIpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXNwb25zZUJvZHl9IGJvZHlPdXRcclxuICAgICAqL1xyXG4gICAgc2lnbkNvZGVPdXQ6IGZ1bmN0aW9uIChib2R5T3V0KSB7XHJcbiAgICAgICAgaWYoYm9keU91dC50b2tlbj09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgYm9keU91dC50b2tlbj1cIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdHIgPSAnJyArXHJcbiAgICAgICAgICAgIGJvZHlPdXQuYml6Q29udGVudCArXHJcbiAgICAgICAgICAgIGJvZHlPdXQuY29kZSArXHJcbiAgICAgICAgICAgIGJvZHlPdXQubXNnICtcclxuICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlICtcclxuICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgK1xyXG4gICAgICAgICAgICBib2R5T3V0LnRpbWVzdGFtcCArXHJcbiAgICAgICAgICAgIGJvZHlPdXQudG9rZW4gK1xyXG4gICAgICAgICAgICB0aGlzLmFwcFNlY3JldDtcclxuICAgICAgICByZXR1cm4gbWQ1KHN0cik7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBpVXJsXHJcbiAgICAgKi9cclxuICAgIHNldEFwaVVybDogZnVuY3Rpb24gKGFwaVVybCkge1xyXG4gICAgICAgIHRoaXMuYXBpVXJsID0gYXBpVXJsO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0Qm9keX0gYm9keUluXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtSZXNwb25zZUJvZHl9IGNhbGxiYWNrLmJvZHlPdXRcclxuICAgICAqL1xyXG4gICAgc2VuZDogZnVuY3Rpb24gKGJvZHlJbiwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5T3V0ID0gbmV3IFJlc3BvbnNlQm9keSgpO1xyXG4gICAgICAgIGlmICghWE1MSHR0cFJlcXVlc3QpIHtcclxuICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSA9ICcxMDUnO1xyXG4gICAgICAgICAgICBib2R5T3V0LnN1Yk1zZyA9ICdYTUxIdHRwUmVxdWVzdOWvueixoeS4jeWtmOWcqCc7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzQnVzeSkge1xyXG4gICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzk5JztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn5b6I5b+Z5ZOm77yM6K+35rGC6Zif5YiX5bey5ruhJztcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc0J1c3kgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGJvZHlJbi5hcHBBdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IGJvZHlJbi5hcHBBdXRoVG9rZW47XHJcbiAgICAgICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvZHlJbi5hcHBJZCA9IHRoaXMuYXBwSWQ7XHJcbiAgICAgICAgYm9keUluLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZm9ybWF0KFwieXl5eS1NTS1kZCBoaDptbTpzc1wiKTtcclxuICAgICAgICBib2R5SW4uc2lnbkNvZGUgPSB0aGlzLnNpZ25Db2RlSW4oYm9keUluKTtcclxuXHJcbiAgICAgICAgY29uc3QgeG1sID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgY29uc3Qgb3duZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHhtbC5hYm9ydCgpO1xyXG4gICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzEwMyc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnID0gJ+ivt+axgui2heaXtic7XHJcblxyXG4gICAgICAgICAgICBvd25lci5pc0J1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0KTtcclxuICAgICAgICB9LCAxMDAwMCk7XHJcblxyXG4gICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlVGltZW91dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHhtbC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5wYXJzZSh4bWwucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHlPdXQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZDUgPSBvd25lci5zaWduQ29kZU91dChib2R5T3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZDUgIT0gYm9keU91dC5zaWduKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnN1YkNvZGUgPSAnMTAyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnN1Yk1zZyA9ICfov5Tlm57nu5Pmnpznrb7lkI3lh7rplJknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvZHlPdXQudGltZXN0YW1wID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zaWduID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC50b2tlbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keU91dC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2R5T3V0LnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIudG9rZW4gPSBib2R5T3V0LnRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0Lm1zZyA9ICflrqLmiLfnq6/plJnor68nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnN1YkNvZGUgPSAnMTAxJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn6L+U5Zue57uT5p6c5byC5bi4IGVycjonICsgZXJyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzEwNCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn6K+35rGC6L+U5Zue6ZSZ6K+vJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvd25lci5pc0J1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHRva2VuVXJsID0gdGhpcy5hcGlVcmwgKyAnP3Rva2VuPScgKyB0aGlzLnRva2VuO1xyXG4gICAgICAgIHhtbC5vcGVuKCdQT1NUJywgdG9rZW5VcmwsIHRydWUpO1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcpO1xyXG4gICAgICAgIHhtbC5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHlJbikpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0Qm9keX0gYm9keUluXHJcbiAgICAgKi9cclxuICAgIHN1Ym1pdDogZnVuY3Rpb24gKGJvZHlJbikge1xyXG4gICAgICAgIGJvZHlJbi5hcHBJZCA9IHRoaXMuYXBwSWQ7XHJcbiAgICAgICAgYm9keUluLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZm9ybWF0KFwieXl5eS1NTS1kZCBoaDptbTpzc1wiKTtcclxuICAgICAgICBib2R5SW4uc2lnbkNvZGUgPSB0aGlzLnNpZ25Db2RlSW4oYm9keUluKTtcclxuXHJcbiAgICAgICAgY29uc3QgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBib2R5SW4pIHtcclxuICAgICAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYm9keUluW2tleV0pID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGVpLnR5cGUgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgZWkubmFtZSA9IGtleTtcclxuICAgICAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXHJcbiAgICAgICAgICAgIGVpLnZhbHVlID0gYm9keUluW2tleV07XHJcbiAgICAgICAgICAgIGYuYXBwZW5kQ2hpbGQoZWkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZi5tZXRob2QgPSAncG9zdCc7XHJcbiAgICAgICAgZi5hY3Rpb24gPSB0aGlzLmFwaVVybDtcclxuICAgICAgICBmLnN1Ym1pdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZik7XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3RkY2xpLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==