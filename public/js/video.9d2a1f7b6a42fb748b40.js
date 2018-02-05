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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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

/***/ "./resources/assets/js/app/PageUrl.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_stbnull__ = __webpack_require__("./resources/assets/js/toodo/_stbnull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toodo_stbcli__ = __webpack_require__("./resources/assets/js/toodo/_stbcli.js");



function PageUrl() {}
PageUrl.prototype = {
    parseQuery: function parseQuery(query) {
        var start = query.indexOf('?');
        if (start >= 0) {
            query = query.slice(start + 1);
        }
        var args = {};
        var arr = query.split('&');
        for (var m = 0; m < arr.length; m++) {
            var v = arr[m];
            var tmp = v.split('=');
            args[tmp[0]] = decodeURIComponent(tmp[1]);
        }
        return args;
    },
    parseArgs: function parseArgs(args) {
        var k = void 0,
            v = void 0;
        var arr = [];
        for (k in args) {
            //! js 会把'0'当作false args[k] => args[k] !== ''
            if (args.hasOwnProperty(k) && args[k] !== '') {
                v = encodeURIComponent(args[k]);
                arr.push(k + '=' + v);
            }
        }
        return arr.join('&');
    },
    baseUrl: function baseUrl() {
        return location.protocol + '//' + location.host + '/tdenter';
    },
    getUserId: function getUserId() {
        return __WEBPACK_IMPORTED_MODULE_0__toodo_stbnull__["a" /* stbNull */].getValue('toodo.userId');
    },
    getStbId: function getStbId() {
        return __WEBPACK_IMPORTED_MODULE_0__toodo_stbnull__["a" /* stbNull */].getCardTV();
    },
    getSignKey: function getSignKey() {
        var ts = new Date().getTime();
        var msg = this.getUserId() + ts;
        var md5 = __WEBPACK_IMPORTED_MODULE_1__toodo_stbcli__["b" /* stbcli */].md5(msg);
        return md5 + ts;
    },
    getChildLock: function getChildLock() {
        return '';
    },
    rechargeUrl: function rechargeUrl() {
        return location.protocol + '//' + location.host + '/tdsrv/api/coin';
    },
    callUrl: function callUrl(item, returnUrl) {
        var rechargeUrl = this.rechargeUrl();
        var args = {};
        args.gameid = item.gameId;
        args.key = this.getSignKey();
        args.dev = this.getStbId();
        args.fatherkey = this.getChildLock();
        args.userId = this.getUserId();
        args.userid = this.getUserId();
        args.ts = new Date().getTime();
        args.returnURL = returnUrl;

        var hostName = window.location.hostname; //不带端口
        var dstUrl = item.url;
        dstUrl = dstUrl.replace('192.168.200.100', hostName);

        var params = {};
        params.redirectUrl = dstUrl + '?' + this.parseArgs(args) + '&rechageURL=' + rechargeUrl;
        params.returnUrl = returnUrl;
        return this.baseUrl() + '/resize.html?' + this.parseArgs(params);
    },
    callUrlBase: function callUrlBase(item, returnUrl) {
        var rechargeUrl = this.rechargeUrl();
        var args = {};
        args.gameid = item.gameId;
        args.key = this.getSignKey();
        args.dev = this.getStbId();
        args.fatherkey = this.getChildLock();
        args.userId = this.getUserId();
        args.userid = this.getUserId();
        args.ts = new Date().getTime();
        args.returnURL = returnUrl;

        var hostName = window.location.hostname; //不带端口
        var dstUrl = item.url;
        dstUrl = dstUrl.replace('192.168.200.100', hostName);

        return dstUrl + '?' + this.parseArgs(args) + '&rechageURL=' + rechargeUrl;
    },
    callGame: function callGame(item, returnUrl) {
        window.location.href = this.callUrl(item, returnUrl);
    },
    callGameBase: function callGameBase(item, returnUrl) {
        window.location.href = this.callUrlBase(item, returnUrl);
    }
};

var pageUrl = new PageUrl();



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

/***/ "./resources/assets/js/video.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_PageUrl__ = __webpack_require__("./resources/assets/js/app/PageUrl.js");



var args = __WEBPACK_IMPORTED_MODULE_1__app_PageUrl__["a" /* pageUrl */].parseQuery(window.location.search);
document.getElementById('biz1').innerHTML = args.returnURL;

var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
document.onkeydown = function (e) {
    var key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
    switch (key) {
        case keyCode.num1:
            var url = "http://192.168.200.100/nn_vod.ts?id=4355e30ecbaad2bccdc332004f905675";
            iPanel.setGlobalVar("VOD_CTRL_LOCATION", "x=0&y=0&w=1280&h=720");
            iPanel.setGlobalVar("VOD_CTRL_ENABLE_MENU", "0");
            iPanel.setGlobalVar("VOD_CTRL_URL", url);
            iPanel.setGlobalVar("VOD_CTRL_PLAY", "1");
            break;
        case keyCode.num2:
            iPanel.setGlobalVar("VOD_CTRL_STOP", "0");
            break;
        case keyCode.num0:
            iPanel.setGlobalVar("VOD_CTRL_STOP", "1");
            window.location.href = args.returnURL;
            break;
    }
};

/**
 VOD_PLAY_STATUS 获取视频播放状态，获取成功，返回播放状态，失败， 返回#。
 播放状态：
 返回-3：网络连接异常；
 返回-2：资源繁忙，播放失败；
 返回-1：服务器异常，播放失败；
 返回 0：停止播放；
 返回 1：开始播放；
 返回 2：同步播放；
 返回 3：播放结束；
 */
function getStatus() {
    return iPanel.getGlobalVar("VOD_PLAY_STATUS");
}

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/video.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWM5ZGYyNTE1YTkxYWUzNmIyZjE/ODU5MSoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9fSlNPTkAxLjAuMEBKU09OL2pzb24yLmpzPzI5ZjkqKioqKioqIiwid2VicGFjazovLy8uL34vX2NoYXJlbmNAMC4wLjJAY2hhcmVuYy9jaGFyZW5jLmpzP2M4YzEqKioqKioqIiwid2VicGFjazovLy8uL34vX2NyeXB0QDAuMC4yQGNyeXB0L2NyeXB0LmpzP2Q5MzQqKioqKioqIiwid2VicGFjazovLy8uL34vX2lzLWJ1ZmZlckAxLjEuNkBpcy1idWZmZXIvaW5kZXguanM/NWViYSoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9fbWQ1QDIuMi4xQG1kNS9tZDUuanM/Nzk5NyoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUGFnZVVybC5qcz80NTQ5KioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19rZXljb2Rlcy5qcz9iOTA4KioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19yZXRhaWwuanM/MGViMyoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fc3RiY2xpLmpzP2YyNTkqKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3N0Ym51bGwuanM/NDdlNCoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fdGRjbGkuanM/MThlZioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92aWRlby5qcyJdLCJuYW1lcyI6WyJQYWdlVXJsIiwicHJvdG90eXBlIiwicGFyc2VRdWVyeSIsInF1ZXJ5Iiwic3RhcnQiLCJpbmRleE9mIiwic2xpY2UiLCJhcmdzIiwiYXJyIiwic3BsaXQiLCJtIiwibGVuZ3RoIiwidiIsInRtcCIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlQXJncyIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsImVuY29kZVVSSUNvbXBvbmVudCIsInB1c2giLCJqb2luIiwiYmFzZVVybCIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0IiwiZ2V0VXNlcklkIiwic3RiTnVsbCIsImdldFZhbHVlIiwiZ2V0U3RiSWQiLCJnZXRDYXJkVFYiLCJnZXRTaWduS2V5IiwidHMiLCJEYXRlIiwiZ2V0VGltZSIsIm1zZyIsIm1kNSIsInN0YmNsaSIsImdldENoaWxkTG9jayIsInJlY2hhcmdlVXJsIiwiY2FsbFVybCIsIml0ZW0iLCJyZXR1cm5VcmwiLCJnYW1laWQiLCJnYW1lSWQiLCJrZXkiLCJkZXYiLCJmYXRoZXJrZXkiLCJ1c2VySWQiLCJ1c2VyaWQiLCJyZXR1cm5VUkwiLCJob3N0TmFtZSIsIndpbmRvdyIsImhvc3RuYW1lIiwiZHN0VXJsIiwidXJsIiwicmVwbGFjZSIsInBhcmFtcyIsInJlZGlyZWN0VXJsIiwiY2FsbFVybEJhc2UiLCJjYWxsR2FtZSIsImhyZWYiLCJjYWxsR2FtZUJhc2UiLCJwYWdlVXJsIiwiZ2V0S2V5Q29kZXMiLCJrZXlNYXAiLCJyZXRhaWxJZCIsInJldGFpbCIsImd4Z2QiLCJ1cCIsImRvd24iLCJsZWZ0IiwicmlnaHQiLCJvayIsImYxIiwiZjIiLCJmMyIsImY0IiwibnVtMSIsIm51bTIiLCJudW0zIiwibnVtNCIsIm51bTUiLCJudW02IiwibnVtNyIsIm51bTgiLCJudW05IiwibnVtMCIsIm11dGUiLCJiYWNrIiwidHJhY2siLCJ2b2xVcCIsInZvbERvd24iLCJmYXYiLCJwbGF5QmFjayIsInBhZ2VVcCIsInBhZ2VEb3duIiwibWVudSIsImVzYyIsImhvbWUiLCJobnl4IiwiZ2RnZCIsImdldEV2ZW50IiwiZXZ0IiwiZXZlbnQiLCJnZXRLZXkiLCJrZXlDb2RlIiwid2hpY2giLCJjaGFyQ29kZSIsImdldENvZGVzIiwiY29kZXMiLCJjb2RlIiwibm9uZSIsImdldFJldGFpbElkIiwiZ3Vhbmd4aSIsImlQYW5lbCIsImUiLCJTeXN0ZW0iLCJzdGJJRCIsIkNBIiwiU3RvcmFnZVNlcnZpY2UiLCJGaWxlU3lzdGVtIiwicmVxdWlyZSIsIkpTT04iLCJTdGJDbGllbnQiLCJvcmlnaW5VcmwiLCJhcHBLZXkiLCJhcHBTZWNyZXQiLCJfdGRjbGkiLCJpc1JlYWR5IiwidG9rZW4iLCJjYWxsYmFjayIsImJpekluIiwiZ2V0UmVnaW9uQ29kZSIsImJvZHlJbiIsIm1ldGhvZCIsImFwcEF1dGhUb2tlbiIsImJpekNvbnRlbnQiLCJzdHJpbmdpZnkiLCJvd25lciIsInNldEFwaVVybCIsInNlbmQiLCJib2R5T3V0IiwiYml6T3V0IiwicGFyc2UiLCJzZXRWYWx1ZSIsInRkZVVzZXIiLCJiaXoiLCJiaXpVc2VyIiwic3ViQ29kZSIsImFkZFdpbm5lciIsInByaXplSUQiLCJzdGF0ZSIsImFkZFN0YXRlIiwidXBkYXRhRnJlZVN0YXRlIiwiZ2V0UHJpemUiLCJpZCIsInR1cm50YWJsZVN0YXRlIiwidHVybnRhYmxlUHJvIiwidHlwZSIsInByaXplTnVtIiwid2lubmVySW5mbyIsIm51bSIsInVzZXJXaW5uZXIiLCJhZGRDb2lucyIsImFkZE51bSIsInF1ZXJ5U2VydmUxIiwicHJvZHVjdElkIiwicXVlcnlQcm9kdWN0MSIsIm9yZGVyMSIsImNhbGxiYWNrVXJsIiwiZGF0YSIsInBheSIsInRyYWRlTm8iLCJzdWJtaXQiLCJiaWxsIiwidGRlTG9jayIsIm9sZExvY2siLCJuZXdMb2NrIiwidGRlUGFnZSIsInBhZ2UiLCJ0ZGFTb25nIiwiY2F0ZWdvcnkiLCJ0ZGFTb25nMSIsInNvbmdJZCIsInRkYU1hdGNoIiwidGRhVXNlciIsInRkYVJlY29yZCIsInJlY29yZCIsIlN0Yk51bGwiLCJnZXRTdGJOdW0iLCJnZXRHbG9iYWxWYXIiLCJrZXlOYW1lIiwicmVzdWx0IiwiYUNvb2tpZSIsImRvY3VtZW50IiwiY29va2llIiwiaSIsImFDcnVtYiIsImVzY2FwZSIsInVuZXNjYXBlIiwia2V5VmFsdWUiLCJzZXRHbG9iYWxWYXIiLCJyZWdpb24iLCJHZXRDQVJlZ2lvbklEIiwiZyIsIkdsb2JhbCIsIkdsb2JhbDIiLCJ2YWx1ZSIsImljTm8iLCJyZWdpb25Db2RlIiwiU3lzU2V0dGluZyIsImdldEVudiIsInNldEVudiIsImZvcm1hdCIsImZtdCIsIm8iLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiTWF0aCIsImZsb29yIiwiZ2V0TWlsbGlzZWNvbmRzIiwidGVzdCIsIlJlZ0V4cCIsIiQxIiwiZ2V0RnVsbFllYXIiLCJzdWJzdHIiLCJSZXF1ZXN0Qm9keSIsImFwcElkIiwiY2hhcnNldCIsInNpZ25UeXBlIiwic2lnbkNvZGUiLCJ0aW1lc3RhbXAiLCJ2ZXJzaW9uIiwianNvbiIsImJvZHkiLCJSZXNwb25zZUJvZHkiLCJzdWJNc2ciLCJzaWduIiwiVG9vZG9DbGllbnQiLCJhcGlVcmwiLCJpc0J1c3kiLCJzaWduQ29kZUluIiwic3RyIiwic2lnbkNvZGVPdXQiLCJ1bmRlZmluZWQiLCJYTUxIdHRwUmVxdWVzdCIsInhtbCIsImhhbmRsZVRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiYWJvcnQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiY2xlYXJUaW1lb3V0Iiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwiZXJyIiwidG9rZW5VcmwiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsImYiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJlaSIsIm5hbWUiLCJhY3Rpb24iLCJyZW1vdmVDaGlsZCIsInNlYXJjaCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwib25rZXlkb3duIiwiZ2V0U3RhdHVzIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5Q0FBeUMsaUJBQWlCO0FBQzFELDhCQUE4QixrQkFBa0I7OztBQUdoRCx5Q0FBeUMsaUJBQWlCO0FBQzFELHNDQUFzQyw2QkFBNkI7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFB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QUFQLENBQWdCdVAsTUFBbkMsQ0FBWDtBQUNBM0UsU0FBUzRFLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLFNBQWhDLEdBQTRDeFEsS0FBSzBDLFNBQWpEOztBQUVBLElBQUl3RCxVQUFVLDJGQUFBMUMsRUFBZDtBQUNBbUksU0FBUzhFLFNBQVQsR0FBcUIsVUFBVTdKLENBQVYsRUFBYTtBQUM5QixRQUFJdkUsTUFBTSxzRkFBQTRELENBQU9XLENBQVAsQ0FBVjtBQUNBLFlBQVF2RSxHQUFSO0FBQ0ksYUFBSzZELFFBQVE1QixJQUFiO0FBQ0ksZ0JBQUl2QixNQUFNLHNFQUFWO0FBQ0E0RCxtQkFBT3VGLFlBQVAsQ0FBb0IsbUJBQXBCLEVBQXlDLHNCQUF6QztBQUNBdkYsbUJBQU91RixZQUFQLENBQW9CLHNCQUFwQixFQUE0QyxHQUE1QztBQUNBdkYsbUJBQU91RixZQUFQLENBQW9CLGNBQXBCLEVBQW9DbkosR0FBcEM7QUFDQTRELG1CQUFPdUYsWUFBUCxDQUFvQixlQUFwQixFQUFxQyxHQUFyQztBQUNBO0FBQ0osYUFBS2hHLFFBQVEzQixJQUFiO0FBQ0lvQyxtQkFBT3VGLFlBQVAsQ0FBb0IsZUFBcEIsRUFBcUMsR0FBckM7QUFDQTtBQUNKLGFBQUtoRyxRQUFRbkIsSUFBYjtBQUNJNEIsbUJBQU91RixZQUFQLENBQW9CLGVBQXBCLEVBQXFDLEdBQXJDO0FBQ0F0SixtQkFBTzdCLFFBQVAsQ0FBZ0JzQyxJQUFoQixHQUF1QnJELEtBQUswQyxTQUE1QjtBQUNBO0FBZFI7QUFnQkgsQ0FsQkQ7O0FBb0JBOzs7Ozs7Ozs7OztBQVdBLFNBQVNnTyxTQUFULEdBQXFCO0FBQ2pCLFdBQU8vSixPQUFPNEUsWUFBUCxDQUFvQixpQkFBcEIsQ0FBUDtBQUNILEMiLCJmaWxlIjoianMvdmlkZW8uOWQyYTFmN2I2YTQyZmI3NDhiNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlYzlkZjI1MTVhOTFhZTM2YjJmMSIsIi8qXG4gICAgaHR0cDovL3d3dy5KU09OLm9yZy9qc29uMi5qc1xuICAgIDIwMTEtMDItMjNcblxuICAgIFB1YmxpYyBEb21haW4uXG5cbiAgICBOTyBXQVJSQU5UWSBFWFBSRVNTRUQgT1IgSU1QTElFRC4gVVNFIEFUIFlPVVIgT1dOIFJJU0suXG5cbiAgICBTZWUgaHR0cDovL3d3dy5KU09OLm9yZy9qcy5odG1sXG5cblxuICAgIFRoaXMgY29kZSBzaG91bGQgYmUgbWluaWZpZWQgYmVmb3JlIGRlcGxveW1lbnQuXG4gICAgU2VlIGh0dHA6Ly9qYXZhc2NyaXB0LmNyb2NrZm9yZC5jb20vanNtaW4uaHRtbFxuXG4gICAgVVNFIFlPVVIgT1dOIENPUFkuIElUIElTIEVYVFJFTUVMWSBVTldJU0UgVE8gTE9BRCBDT0RFIEZST00gU0VSVkVSUyBZT1UgRE9cbiAgICBOT1QgQ09OVFJPTC5cblxuXG4gICAgVGhpcyBmaWxlIGNyZWF0ZXMgYSBnbG9iYWwgSlNPTiBvYmplY3QgY29udGFpbmluZyB0d28gbWV0aG9kczogc3RyaW5naWZ5XG4gICAgYW5kIHBhcnNlLlxuXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHZhbHVlLCByZXBsYWNlciwgc3BhY2UpXG4gICAgICAgICAgICB2YWx1ZSAgICAgICBhbnkgSmF2YVNjcmlwdCB2YWx1ZSwgdXN1YWxseSBhbiBvYmplY3Qgb3IgYXJyYXkuXG5cbiAgICAgICAgICAgIHJlcGxhY2VyICAgIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IGRldGVybWluZXMgaG93IG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzIGFyZSBzdHJpbmdpZmllZCBmb3Igb2JqZWN0cy4gSXQgY2FuIGJlIGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MuXG5cbiAgICAgICAgICAgIHNwYWNlICAgICAgIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IHNwZWNpZmllcyB0aGUgaW5kZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9mIG5lc3RlZCBzdHJ1Y3R1cmVzLiBJZiBpdCBpcyBvbWl0dGVkLCB0aGUgdGV4dCB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBiZSBwYWNrZWQgd2l0aG91dCBleHRyYSB3aGl0ZXNwYWNlLiBJZiBpdCBpcyBhIG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0IHdpbGwgc3BlY2lmeSB0aGUgbnVtYmVyIG9mIHNwYWNlcyB0byBpbmRlbnQgYXQgZWFjaFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwuIElmIGl0IGlzIGEgc3RyaW5nIChzdWNoIGFzICdcXHQnIG9yICcmbmJzcDsnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0IGNvbnRhaW5zIHRoZSBjaGFyYWN0ZXJzIHVzZWQgdG8gaW5kZW50IGF0IGVhY2ggbGV2ZWwuXG5cbiAgICAgICAgICAgIFRoaXMgbWV0aG9kIHByb2R1Y2VzIGEgSlNPTiB0ZXh0IGZyb20gYSBKYXZhU2NyaXB0IHZhbHVlLlxuXG4gICAgICAgICAgICBXaGVuIGFuIG9iamVjdCB2YWx1ZSBpcyBmb3VuZCwgaWYgdGhlIG9iamVjdCBjb250YWlucyBhIHRvSlNPTlxuICAgICAgICAgICAgbWV0aG9kLCBpdHMgdG9KU09OIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBhbmQgdGhlIHJlc3VsdCB3aWxsIGJlXG4gICAgICAgICAgICBzdHJpbmdpZmllZC4gQSB0b0pTT04gbWV0aG9kIGRvZXMgbm90IHNlcmlhbGl6ZTogaXQgcmV0dXJucyB0aGVcbiAgICAgICAgICAgIHZhbHVlIHJlcHJlc2VudGVkIGJ5IHRoZSBuYW1lL3ZhbHVlIHBhaXIgdGhhdCBzaG91bGQgYmUgc2VyaWFsaXplZCxcbiAgICAgICAgICAgIG9yIHVuZGVmaW5lZCBpZiBub3RoaW5nIHNob3VsZCBiZSBzZXJpYWxpemVkLiBUaGUgdG9KU09OIG1ldGhvZFxuICAgICAgICAgICAgd2lsbCBiZSBwYXNzZWQgdGhlIGtleSBhc3NvY2lhdGVkIHdpdGggdGhlIHZhbHVlLCBhbmQgdGhpcyB3aWxsIGJlXG4gICAgICAgICAgICBib3VuZCB0byB0aGUgdmFsdWVcblxuICAgICAgICAgICAgRm9yIGV4YW1wbGUsIHRoaXMgd291bGQgc2VyaWFsaXplIERhdGVzIGFzIElTTyBzdHJpbmdzLlxuXG4gICAgICAgICAgICAgICAgRGF0ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBmKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvcm1hdCBpbnRlZ2VycyB0byBoYXZlIGF0IGxlYXN0IHR3byBkaWdpdHMuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiA8IDEwID8gJzAnICsgbiA6IG47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRVVENGdWxsWWVhcigpICAgKyAnLScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNb250aCgpICsgMSkgKyAnLScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENEYXRlKCkpICAgICAgKyAnVCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENIb3VycygpKSAgICAgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNaW51dGVzKCkpICAgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENTZWNvbmRzKCkpICAgKyAnWic7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsIHJlcGxhY2VyIG1ldGhvZC4gSXQgd2lsbCBiZSBwYXNzZWQgdGhlXG4gICAgICAgICAgICBrZXkgYW5kIHZhbHVlIG9mIGVhY2ggbWVtYmVyLCB3aXRoIHRoaXMgYm91bmQgdG8gdGhlIGNvbnRhaW5pbmdcbiAgICAgICAgICAgIG9iamVjdC4gVGhlIHZhbHVlIHRoYXQgaXMgcmV0dXJuZWQgZnJvbSB5b3VyIG1ldGhvZCB3aWxsIGJlXG4gICAgICAgICAgICBzZXJpYWxpemVkLiBJZiB5b3VyIG1ldGhvZCByZXR1cm5zIHVuZGVmaW5lZCwgdGhlbiB0aGUgbWVtYmVyIHdpbGxcbiAgICAgICAgICAgIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIHNlcmlhbGl6YXRpb24uXG5cbiAgICAgICAgICAgIElmIHRoZSByZXBsYWNlciBwYXJhbWV0ZXIgaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncywgdGhlbiBpdCB3aWxsIGJlXG4gICAgICAgICAgICB1c2VkIHRvIHNlbGVjdCB0aGUgbWVtYmVycyB0byBiZSBzZXJpYWxpemVkLiBJdCBmaWx0ZXJzIHRoZSByZXN1bHRzXG4gICAgICAgICAgICBzdWNoIHRoYXQgb25seSBtZW1iZXJzIHdpdGgga2V5cyBsaXN0ZWQgaW4gdGhlIHJlcGxhY2VyIGFycmF5IGFyZVxuICAgICAgICAgICAgc3RyaW5naWZpZWQuXG5cbiAgICAgICAgICAgIFZhbHVlcyB0aGF0IGRvIG5vdCBoYXZlIEpTT04gcmVwcmVzZW50YXRpb25zLCBzdWNoIGFzIHVuZGVmaW5lZCBvclxuICAgICAgICAgICAgZnVuY3Rpb25zLCB3aWxsIG5vdCBiZSBzZXJpYWxpemVkLiBTdWNoIHZhbHVlcyBpbiBvYmplY3RzIHdpbGwgYmVcbiAgICAgICAgICAgIGRyb3BwZWQ7IGluIGFycmF5cyB0aGV5IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBudWxsLiBZb3UgY2FuIHVzZVxuICAgICAgICAgICAgYSByZXBsYWNlciBmdW5jdGlvbiB0byByZXBsYWNlIHRob3NlIHdpdGggSlNPTiB2YWx1ZXMuXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh1bmRlZmluZWQpIHJldHVybnMgdW5kZWZpbmVkLlxuXG4gICAgICAgICAgICBUaGUgb3B0aW9uYWwgc3BhY2UgcGFyYW1ldGVyIHByb2R1Y2VzIGEgc3RyaW5naWZpY2F0aW9uIG9mIHRoZVxuICAgICAgICAgICAgdmFsdWUgdGhhdCBpcyBmaWxsZWQgd2l0aCBsaW5lIGJyZWFrcyBhbmQgaW5kZW50YXRpb24gdG8gbWFrZSBpdFxuICAgICAgICAgICAgZWFzaWVyIHRvIHJlYWQuXG5cbiAgICAgICAgICAgIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBub24tZW1wdHkgc3RyaW5nLCB0aGVuIHRoYXQgc3RyaW5nIHdpbGxcbiAgICAgICAgICAgIGJlIHVzZWQgZm9yIGluZGVudGF0aW9uLiBJZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGlzIGEgbnVtYmVyLCB0aGVuXG4gICAgICAgICAgICB0aGUgaW5kZW50YXRpb24gd2lsbCBiZSB0aGF0IG1hbnkgc3BhY2VzLlxuXG4gICAgICAgICAgICBFeGFtcGxlOlxuXG4gICAgICAgICAgICB0ZXh0ID0gSlNPTi5zdHJpbmdpZnkoWydlJywge3BsdXJpYnVzOiAndW51bSd9XSk7XG4gICAgICAgICAgICAvLyB0ZXh0IGlzICdbXCJlXCIse1wicGx1cmlidXNcIjpcInVudW1cIn1dJ1xuXG5cbiAgICAgICAgICAgIHRleHQgPSBKU09OLnN0cmluZ2lmeShbJ2UnLCB7cGx1cmlidXM6ICd1bnVtJ31dLCBudWxsLCAnXFx0Jyk7XG4gICAgICAgICAgICAvLyB0ZXh0IGlzICdbXFxuXFx0XCJlXCIsXFxuXFx0e1xcblxcdFxcdFwicGx1cmlidXNcIjogXCJ1bnVtXCJcXG5cXHR9XFxuXSdcblxuICAgICAgICAgICAgdGV4dCA9IEpTT04uc3RyaW5naWZ5KFtuZXcgRGF0ZSgpXSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldIGluc3RhbmNlb2YgRGF0ZSA/XG4gICAgICAgICAgICAgICAgICAgICdEYXRlKCcgKyB0aGlzW2tleV0gKyAnKScgOiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gdGV4dCBpcyAnW1wiRGF0ZSgtLS1jdXJyZW50IHRpbWUtLS0pXCJdJ1xuXG5cbiAgICAgICAgSlNPTi5wYXJzZSh0ZXh0LCByZXZpdmVyKVxuICAgICAgICAgICAgVGhpcyBtZXRob2QgcGFyc2VzIGEgSlNPTiB0ZXh0IHRvIHByb2R1Y2UgYW4gb2JqZWN0IG9yIGFycmF5LlxuICAgICAgICAgICAgSXQgY2FuIHRocm93IGEgU3ludGF4RXJyb3IgZXhjZXB0aW9uLlxuXG4gICAgICAgICAgICBUaGUgb3B0aW9uYWwgcmV2aXZlciBwYXJhbWV0ZXIgaXMgYSBmdW5jdGlvbiB0aGF0IGNhbiBmaWx0ZXIgYW5kXG4gICAgICAgICAgICB0cmFuc2Zvcm0gdGhlIHJlc3VsdHMuIEl0IHJlY2VpdmVzIGVhY2ggb2YgdGhlIGtleXMgYW5kIHZhbHVlcyxcbiAgICAgICAgICAgIGFuZCBpdHMgcmV0dXJuIHZhbHVlIGlzIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgdmFsdWUuXG4gICAgICAgICAgICBJZiBpdCByZXR1cm5zIHdoYXQgaXQgcmVjZWl2ZWQsIHRoZW4gdGhlIHN0cnVjdHVyZSBpcyBub3QgbW9kaWZpZWQuXG4gICAgICAgICAgICBJZiBpdCByZXR1cm5zIHVuZGVmaW5lZCB0aGVuIHRoZSBtZW1iZXIgaXMgZGVsZXRlZC5cblxuICAgICAgICAgICAgRXhhbXBsZTpcblxuICAgICAgICAgICAgLy8gUGFyc2UgdGhlIHRleHQuIFZhbHVlcyB0aGF0IGxvb2sgbGlrZSBJU08gZGF0ZSBzdHJpbmdzIHdpbGxcbiAgICAgICAgICAgIC8vIGJlIGNvbnZlcnRlZCB0byBEYXRlIG9iamVjdHMuXG5cbiAgICAgICAgICAgIG15RGF0YSA9IEpTT04ucGFyc2UodGV4dCwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBhID1cbi9eKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSlUKFxcZHsyfSk6KFxcZHsyfSk6KFxcZHsyfSg/OlxcLlxcZCopPylaJC8uZXhlYyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoK2FbMV0sICthWzJdIC0gMSwgK2FbM10sICthWzRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICthWzVdLCArYVs2XSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBteURhdGEgPSBKU09OLnBhcnNlKCdbXCJEYXRlKDA5LzA5LzIwMDEpXCJdJywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2xpY2UoMCwgNSkgPT09ICdEYXRlKCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNsaWNlKC0xKSA9PT0gJyknKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBuZXcgRGF0ZSh2YWx1ZS5zbGljZSg1LCAtMSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgIFRoaXMgaXMgYSByZWZlcmVuY2UgaW1wbGVtZW50YXRpb24uIFlvdSBhcmUgZnJlZSB0byBjb3B5LCBtb2RpZnksIG9yXG4gICAgcmVkaXN0cmlidXRlLlxuKi9cblxuLypqc2xpbnQgZXZpbDogdHJ1ZSwgc3RyaWN0OiBmYWxzZSwgcmVnZXhwOiBmYWxzZSAqL1xuXG4vKm1lbWJlcnMgXCJcIiwgXCJcXGJcIiwgXCJcXHRcIiwgXCJcXG5cIiwgXCJcXGZcIiwgXCJcXHJcIiwgXCJcXFwiXCIsIEpTT04sIFwiXFxcXFwiLCBhcHBseSxcbiAgICBjYWxsLCBjaGFyQ29kZUF0LCBnZXRVVENEYXRlLCBnZXRVVENGdWxsWWVhciwgZ2V0VVRDSG91cnMsXG4gICAgZ2V0VVRDTWludXRlcywgZ2V0VVRDTW9udGgsIGdldFVUQ1NlY29uZHMsIGhhc093blByb3BlcnR5LCBqb2luLFxuICAgIGxhc3RJbmRleCwgbGVuZ3RoLCBwYXJzZSwgcHJvdG90eXBlLCBwdXNoLCByZXBsYWNlLCBzbGljZSwgc3RyaW5naWZ5LFxuICAgIHRlc3QsIHRvSlNPTiwgdG9TdHJpbmcsIHZhbHVlT2ZcbiovXG5cblxuLy8gQ3JlYXRlIGEgSlNPTiBvYmplY3Qgb25seSBpZiBvbmUgZG9lcyBub3QgYWxyZWFkeSBleGlzdC4gV2UgY3JlYXRlIHRoZVxuLy8gbWV0aG9kcyBpbiBhIGNsb3N1cmUgdG8gYXZvaWQgY3JlYXRpbmcgZ2xvYmFsIHZhcmlhYmxlcy5cblxudmFyIEpTT047XG5pZiAoIUpTT04pIHtcbiAgICBKU09OID0ge307XG59XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgZ2xvYmFsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKVxuICAgICAgLCBKU09OID0gZ2xvYmFsLkpTT05cbiAgICAgIDtcblxuICAgIGlmICghSlNPTikge1xuICAgICAgSlNPTiA9IHt9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGYobikge1xuICAgICAgICAvLyBGb3JtYXQgaW50ZWdlcnMgdG8gaGF2ZSBhdCBsZWFzdCB0d28gZGlnaXRzLlxuICAgICAgICByZXR1cm4gbiA8IDEwID8gJzAnICsgbiA6IG47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBEYXRlLnByb3RvdHlwZS50b0pTT04gIT09ICdmdW5jdGlvbicpIHtcblxuICAgICAgICBEYXRlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoa2V5KSB7XG5cbiAgICAgICAgICAgIHJldHVybiBpc0Zpbml0ZSh0aGlzLnZhbHVlT2YoKSkgP1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VVRDRnVsbFllYXIoKSAgICAgKyAnLScgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNb250aCgpICsgMSkgKyAnLScgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENEYXRlKCkpICAgICAgKyAnVCcgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENIb3VycygpKSAgICAgKyAnOicgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNaW51dGVzKCkpICAgKyAnOicgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENTZWNvbmRzKCkpICAgKyAnWicgOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIFN0cmluZy5wcm90b3R5cGUudG9KU09OICAgICAgPVxuICAgICAgICAgICAgTnVtYmVyLnByb3RvdHlwZS50b0pTT04gID1cbiAgICAgICAgICAgIEJvb2xlYW4ucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBjeCA9IC9bXFx1MDAwMFxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nLFxuICAgICAgICBlc2NhcGFibGUgPSAvW1xcXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHg5ZlxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nLFxuICAgICAgICBnYXAsXG4gICAgICAgIGluZGVudCxcbiAgICAgICAgbWV0YSA9IHsgICAgLy8gdGFibGUgb2YgY2hhcmFjdGVyIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICAgICdcXGInOiAnXFxcXGInLFxuICAgICAgICAgICAgJ1xcdCc6ICdcXFxcdCcsXG4gICAgICAgICAgICAnXFxuJzogJ1xcXFxuJyxcbiAgICAgICAgICAgICdcXGYnOiAnXFxcXGYnLFxuICAgICAgICAgICAgJ1xccic6ICdcXFxccicsXG4gICAgICAgICAgICAnXCInIDogJ1xcXFxcIicsXG4gICAgICAgICAgICAnXFxcXCc6ICdcXFxcXFxcXCdcbiAgICAgICAgfSxcbiAgICAgICAgcmVwO1xuXG5cbiAgICBmdW5jdGlvbiBxdW90ZShzdHJpbmcpIHtcblxuLy8gSWYgdGhlIHN0cmluZyBjb250YWlucyBubyBjb250cm9sIGNoYXJhY3RlcnMsIG5vIHF1b3RlIGNoYXJhY3RlcnMsIGFuZCBub1xuLy8gYmFja3NsYXNoIGNoYXJhY3RlcnMsIHRoZW4gd2UgY2FuIHNhZmVseSBzbGFwIHNvbWUgcXVvdGVzIGFyb3VuZCBpdC5cbi8vIE90aGVyd2lzZSB3ZSBtdXN0IGFsc28gcmVwbGFjZSB0aGUgb2ZmZW5kaW5nIGNoYXJhY3RlcnMgd2l0aCBzYWZlIGVzY2FwZVxuLy8gc2VxdWVuY2VzLlxuXG4gICAgICAgIGVzY2FwYWJsZS5sYXN0SW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gZXNjYXBhYmxlLnRlc3Qoc3RyaW5nKSA/ICdcIicgKyBzdHJpbmcucmVwbGFjZShlc2NhcGFibGUsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICB2YXIgYyA9IG1ldGFbYV07XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGMgPT09ICdzdHJpbmcnID8gYyA6XG4gICAgICAgICAgICAgICAgJ1xcXFx1JyArICgnMDAwMCcgKyBhLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtNCk7XG4gICAgICAgIH0pICsgJ1wiJyA6ICdcIicgKyBzdHJpbmcgKyAnXCInO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc3RyKGtleSwgaG9sZGVyKSB7XG5cbi8vIFByb2R1Y2UgYSBzdHJpbmcgZnJvbSBob2xkZXJba2V5XS5cblxuICAgICAgICB2YXIgaSwgICAgICAgICAgLy8gVGhlIGxvb3AgY291bnRlci5cbiAgICAgICAgICAgIGssICAgICAgICAgIC8vIFRoZSBtZW1iZXIga2V5LlxuICAgICAgICAgICAgdiwgICAgICAgICAgLy8gVGhlIG1lbWJlciB2YWx1ZS5cbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIG1pbmQgPSBnYXAsXG4gICAgICAgICAgICBwYXJ0aWFsLFxuICAgICAgICAgICAgdmFsdWUgPSBob2xkZXJba2V5XTtcblxuLy8gSWYgdGhlIHZhbHVlIGhhcyBhIHRvSlNPTiBtZXRob2QsIGNhbGwgaXQgdG8gb2J0YWluIGEgcmVwbGFjZW1lbnQgdmFsdWUuXG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSlNPTihrZXkpO1xuICAgICAgICB9XG5cbi8vIElmIHdlIHdlcmUgY2FsbGVkIHdpdGggYSByZXBsYWNlciBmdW5jdGlvbiwgdGhlbiBjYWxsIHRoZSByZXBsYWNlciB0b1xuLy8gb2J0YWluIGEgcmVwbGFjZW1lbnQgdmFsdWUuXG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhbHVlID0gcmVwLmNhbGwoaG9sZGVyLCBrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuXG4vLyBXaGF0IGhhcHBlbnMgbmV4dCBkZXBlbmRzIG9uIHRoZSB2YWx1ZSdzIHR5cGUuXG5cbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHJldHVybiBxdW90ZSh2YWx1ZSk7XG5cbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcblxuLy8gSlNPTiBudW1iZXJzIG11c3QgYmUgZmluaXRlLiBFbmNvZGUgbm9uLWZpbml0ZSBudW1iZXJzIGFzIG51bGwuXG5cbiAgICAgICAgICAgIHJldHVybiBpc0Zpbml0ZSh2YWx1ZSkgPyBTdHJpbmcodmFsdWUpIDogJ251bGwnO1xuXG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBjYXNlICdudWxsJzpcblxuLy8gSWYgdGhlIHZhbHVlIGlzIGEgYm9vbGVhbiBvciBudWxsLCBjb252ZXJ0IGl0IHRvIGEgc3RyaW5nLiBOb3RlOlxuLy8gdHlwZW9mIG51bGwgZG9lcyBub3QgcHJvZHVjZSAnbnVsbCcuIFRoZSBjYXNlIGlzIGluY2x1ZGVkIGhlcmUgaW5cbi8vIHRoZSByZW1vdGUgY2hhbmNlIHRoYXQgdGhpcyBnZXRzIGZpeGVkIHNvbWVkYXkuXG5cbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuXG4vLyBJZiB0aGUgdHlwZSBpcyAnb2JqZWN0Jywgd2UgbWlnaHQgYmUgZGVhbGluZyB3aXRoIGFuIG9iamVjdCBvciBhbiBhcnJheSBvclxuLy8gbnVsbC5cblxuICAgICAgICBjYXNlICdvYmplY3QnOlxuXG4vLyBEdWUgdG8gYSBzcGVjaWZpY2F0aW9uIGJsdW5kZXIgaW4gRUNNQVNjcmlwdCwgdHlwZW9mIG51bGwgaXMgJ29iamVjdCcsXG4vLyBzbyB3YXRjaCBvdXQgZm9yIHRoYXQgY2FzZS5cblxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgICAgICB9XG5cbi8vIE1ha2UgYW4gYXJyYXkgdG8gaG9sZCB0aGUgcGFydGlhbCByZXN1bHRzIG9mIHN0cmluZ2lmeWluZyB0aGlzIG9iamVjdCB2YWx1ZS5cblxuICAgICAgICAgICAgZ2FwICs9IGluZGVudDtcbiAgICAgICAgICAgIHBhcnRpYWwgPSBbXTtcblxuLy8gSXMgdGhlIHZhbHVlIGFuIGFycmF5P1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcblxuLy8gVGhlIHZhbHVlIGlzIGFuIGFycmF5LiBTdHJpbmdpZnkgZXZlcnkgZWxlbWVudC4gVXNlIG51bGwgYXMgYSBwbGFjZWhvbGRlclxuLy8gZm9yIG5vbi1KU09OIHZhbHVlcy5cblxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGlhbFtpXSA9IHN0cihpLCB2YWx1ZSkgfHwgJ251bGwnO1xuICAgICAgICAgICAgICAgIH1cblxuLy8gSm9pbiBhbGwgb2YgdGhlIGVsZW1lbnRzIHRvZ2V0aGVyLCBzZXBhcmF0ZWQgd2l0aCBjb21tYXMsIGFuZCB3cmFwIHRoZW0gaW5cbi8vIGJyYWNrZXRzLlxuXG4gICAgICAgICAgICAgICAgdiA9IHBhcnRpYWwubGVuZ3RoID09PSAwID8gJ1tdJyA6IGdhcCA/XG4gICAgICAgICAgICAgICAgICAgICdbXFxuJyArIGdhcCArIHBhcnRpYWwuam9pbignLFxcbicgKyBnYXApICsgJ1xcbicgKyBtaW5kICsgJ10nIDpcbiAgICAgICAgICAgICAgICAgICAgJ1snICsgcGFydGlhbC5qb2luKCcsJykgKyAnXSc7XG4gICAgICAgICAgICAgICAgZ2FwID0gbWluZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH1cblxuLy8gSWYgdGhlIHJlcGxhY2VyIGlzIGFuIGFycmF5LCB1c2UgaXQgdG8gc2VsZWN0IHRoZSBtZW1iZXJzIHRvIGJlIHN0cmluZ2lmaWVkLlxuXG4gICAgICAgICAgICBpZiAocmVwICYmIHR5cGVvZiByZXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gcmVwLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXBbaV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gcmVwW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHN0cihrLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpYWwucHVzaChxdW90ZShrKSArIChnYXAgPyAnOiAnIDogJzonKSArIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuLy8gT3RoZXJ3aXNlLCBpdGVyYXRlIHRocm91Z2ggYWxsIG9mIHRoZSBrZXlzIGluIHRoZSBvYmplY3QuXG5cbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBzdHIoaywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsLnB1c2gocXVvdGUoaykgKyAoZ2FwID8gJzogJyA6ICc6JykgKyB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuLy8gSm9pbiBhbGwgb2YgdGhlIG1lbWJlciB0ZXh0cyB0b2dldGhlciwgc2VwYXJhdGVkIHdpdGggY29tbWFzLFxuLy8gYW5kIHdyYXAgdGhlbSBpbiBicmFjZXMuXG5cbiAgICAgICAgICAgIHYgPSBwYXJ0aWFsLmxlbmd0aCA9PT0gMCA/ICd7fScgOiBnYXAgP1xuICAgICAgICAgICAgICAgICd7XFxuJyArIGdhcCArIHBhcnRpYWwuam9pbignLFxcbicgKyBnYXApICsgJ1xcbicgKyBtaW5kICsgJ30nIDpcbiAgICAgICAgICAgICAgICAneycgKyBwYXJ0aWFsLmpvaW4oJywnKSArICd9JztcbiAgICAgICAgICAgIGdhcCA9IG1pbmQ7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuICAgIH1cblxuLy8gSWYgdGhlIEpTT04gb2JqZWN0IGRvZXMgbm90IHlldCBoYXZlIGEgc3RyaW5naWZ5IG1ldGhvZCwgZ2l2ZSBpdCBvbmUuXG5cbiAgICBpZiAodHlwZW9mIEpTT04uc3RyaW5naWZ5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIEpTT04uc3RyaW5naWZ5ID0gZnVuY3Rpb24gKHZhbHVlLCByZXBsYWNlciwgc3BhY2UpIHtcblxuLy8gVGhlIHN0cmluZ2lmeSBtZXRob2QgdGFrZXMgYSB2YWx1ZSBhbmQgYW4gb3B0aW9uYWwgcmVwbGFjZXIsIGFuZCBhbiBvcHRpb25hbFxuLy8gc3BhY2UgcGFyYW1ldGVyLCBhbmQgcmV0dXJucyBhIEpTT04gdGV4dC4gVGhlIHJlcGxhY2VyIGNhbiBiZSBhIGZ1bmN0aW9uXG4vLyB0aGF0IGNhbiByZXBsYWNlIHZhbHVlcywgb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncyB0aGF0IHdpbGwgc2VsZWN0IHRoZSBrZXlzLlxuLy8gQSBkZWZhdWx0IHJlcGxhY2VyIG1ldGhvZCBjYW4gYmUgcHJvdmlkZWQuIFVzZSBvZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGNhblxuLy8gcHJvZHVjZSB0ZXh0IHRoYXQgaXMgbW9yZSBlYXNpbHkgcmVhZGFibGUuXG5cbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgZ2FwID0gJyc7XG4gICAgICAgICAgICBpbmRlbnQgPSAnJztcblxuLy8gSWYgdGhlIHNwYWNlIHBhcmFtZXRlciBpcyBhIG51bWJlciwgbWFrZSBhbiBpbmRlbnQgc3RyaW5nIGNvbnRhaW5pbmcgdGhhdFxuLy8gbWFueSBzcGFjZXMuXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BhY2UgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNwYWNlOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50ICs9ICcgJztcbiAgICAgICAgICAgICAgICB9XG5cbi8vIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcsIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgaW5kZW50IHN0cmluZy5cblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaW5kZW50ID0gc3BhY2U7XG4gICAgICAgICAgICB9XG5cbi8vIElmIHRoZXJlIGlzIGEgcmVwbGFjZXIsIGl0IG11c3QgYmUgYSBmdW5jdGlvbiBvciBhbiBhcnJheS5cbi8vIE90aGVyd2lzZSwgdGhyb3cgYW4gZXJyb3IuXG5cbiAgICAgICAgICAgIHJlcCA9IHJlcGxhY2VyO1xuICAgICAgICAgICAgaWYgKHJlcGxhY2VyICYmIHR5cGVvZiByZXBsYWNlciAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgICAgICAgICAodHlwZW9mIHJlcGxhY2VyICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcmVwbGFjZXIubGVuZ3RoICE9PSAnbnVtYmVyJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pTT04uc3RyaW5naWZ5Jyk7XG4gICAgICAgICAgICB9XG5cbi8vIE1ha2UgYSBmYWtlIHJvb3Qgb2JqZWN0IGNvbnRhaW5pbmcgb3VyIHZhbHVlIHVuZGVyIHRoZSBrZXkgb2YgJycuXG4vLyBSZXR1cm4gdGhlIHJlc3VsdCBvZiBzdHJpbmdpZnlpbmcgdGhlIHZhbHVlLlxuXG4gICAgICAgICAgICByZXR1cm4gc3RyKCcnLCB7Jyc6IHZhbHVlfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG5cbi8vIElmIHRoZSBKU09OIG9iamVjdCBkb2VzIG5vdCB5ZXQgaGF2ZSBhIHBhcnNlIG1ldGhvZCwgZ2l2ZSBpdCBvbmUuXG5cbiAgICBpZiAodHlwZW9mIEpTT04ucGFyc2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgSlNPTi5wYXJzZSA9IGZ1bmN0aW9uICh0ZXh0LCByZXZpdmVyKSB7XG5cbi8vIFRoZSBwYXJzZSBtZXRob2QgdGFrZXMgYSB0ZXh0IGFuZCBhbiBvcHRpb25hbCByZXZpdmVyIGZ1bmN0aW9uLCBhbmQgcmV0dXJuc1xuLy8gYSBKYXZhU2NyaXB0IHZhbHVlIGlmIHRoZSB0ZXh0IGlzIGEgdmFsaWQgSlNPTiB0ZXh0LlxuXG4gICAgICAgICAgICB2YXIgajtcblxuICAgICAgICAgICAgZnVuY3Rpb24gd2Fsayhob2xkZXIsIGtleSkge1xuXG4vLyBUaGUgd2FsayBtZXRob2QgaXMgdXNlZCB0byByZWN1cnNpdmVseSB3YWxrIHRoZSByZXN1bHRpbmcgc3RydWN0dXJlIHNvXG4vLyB0aGF0IG1vZGlmaWNhdGlvbnMgY2FuIGJlIG1hZGUuXG5cbiAgICAgICAgICAgICAgICB2YXIgaywgdiwgdmFsdWUgPSBob2xkZXJba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHdhbGsodmFsdWUsIGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVba10gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldml2ZXIuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuXG5cbi8vIFBhcnNpbmcgaGFwcGVucyBpbiBmb3VyIHN0YWdlcy4gSW4gdGhlIGZpcnN0IHN0YWdlLCB3ZSByZXBsYWNlIGNlcnRhaW5cbi8vIFVuaWNvZGUgY2hhcmFjdGVycyB3aXRoIGVzY2FwZSBzZXF1ZW5jZXMuIEphdmFTY3JpcHQgaGFuZGxlcyBtYW55IGNoYXJhY3RlcnNcbi8vIGluY29ycmVjdGx5LCBlaXRoZXIgc2lsZW50bHkgZGVsZXRpbmcgdGhlbSwgb3IgdHJlYXRpbmcgdGhlbSBhcyBsaW5lIGVuZGluZ3MuXG5cbiAgICAgICAgICAgIHRleHQgPSBTdHJpbmcodGV4dCk7XG4gICAgICAgICAgICBjeC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgaWYgKGN4LnRlc3QodGV4dCkpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKGN4LCBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1xcXFx1JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAoJzAwMDAnICsgYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4vLyBJbiB0aGUgc2Vjb25kIHN0YWdlLCB3ZSBydW4gdGhlIHRleHQgYWdhaW5zdCByZWd1bGFyIGV4cHJlc3Npb25zIHRoYXQgbG9va1xuLy8gZm9yIG5vbi1KU09OIHBhdHRlcm5zLiBXZSBhcmUgZXNwZWNpYWxseSBjb25jZXJuZWQgd2l0aCAnKCknIGFuZCAnbmV3J1xuLy8gYmVjYXVzZSB0aGV5IGNhbiBjYXVzZSBpbnZvY2F0aW9uLCBhbmQgJz0nIGJlY2F1c2UgaXQgY2FuIGNhdXNlIG11dGF0aW9uLlxuLy8gQnV0IGp1c3QgdG8gYmUgc2FmZSwgd2Ugd2FudCB0byByZWplY3QgYWxsIHVuZXhwZWN0ZWQgZm9ybXMuXG5cbi8vIFdlIHNwbGl0IHRoZSBzZWNvbmQgc3RhZ2UgaW50byA0IHJlZ2V4cCBvcGVyYXRpb25zIGluIG9yZGVyIHRvIHdvcmsgYXJvdW5kXG4vLyBjcmlwcGxpbmcgaW5lZmZpY2llbmNpZXMgaW4gSUUncyBhbmQgU2FmYXJpJ3MgcmVnZXhwIGVuZ2luZXMuIEZpcnN0IHdlXG4vLyByZXBsYWNlIHRoZSBKU09OIGJhY2tzbGFzaCBwYWlycyB3aXRoICdAJyAoYSBub24tSlNPTiBjaGFyYWN0ZXIpLiBTZWNvbmQsIHdlXG4vLyByZXBsYWNlIGFsbCBzaW1wbGUgdmFsdWUgdG9rZW5zIHdpdGggJ10nIGNoYXJhY3RlcnMuIFRoaXJkLCB3ZSBkZWxldGUgYWxsXG4vLyBvcGVuIGJyYWNrZXRzIHRoYXQgZm9sbG93IGEgY29sb24gb3IgY29tbWEgb3IgdGhhdCBiZWdpbiB0aGUgdGV4dC4gRmluYWxseSxcbi8vIHdlIGxvb2sgdG8gc2VlIHRoYXQgdGhlIHJlbWFpbmluZyBjaGFyYWN0ZXJzIGFyZSBvbmx5IHdoaXRlc3BhY2Ugb3IgJ10nIG9yXG4vLyAnLCcgb3IgJzonIG9yICd7JyBvciAnfScuIElmIHRoYXQgaXMgc28sIHRoZW4gdGhlIHRleHQgaXMgc2FmZSBmb3IgZXZhbC5cblxuICAgICAgICAgICAgaWYgKC9eW1xcXSw6e31cXHNdKiQvXG4gICAgICAgICAgICAgICAgICAgIC50ZXN0KHRleHQucmVwbGFjZSgvXFxcXCg/OltcIlxcXFxcXC9iZm5ydF18dVswLTlhLWZBLUZdezR9KS9nLCAnQCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXCJbXlwiXFxcXFxcblxccl0qXCJ8dHJ1ZXxmYWxzZXxudWxsfC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/L2csICddJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oPzpefDp8LCkoPzpcXHMqXFxbKSsvZywgJycpKSkge1xuXG4vLyBJbiB0aGUgdGhpcmQgc3RhZ2Ugd2UgdXNlIHRoZSBldmFsIGZ1bmN0aW9uIHRvIGNvbXBpbGUgdGhlIHRleHQgaW50byBhXG4vLyBKYXZhU2NyaXB0IHN0cnVjdHVyZS4gVGhlICd7JyBvcGVyYXRvciBpcyBzdWJqZWN0IHRvIGEgc3ludGFjdGljIGFtYmlndWl0eVxuLy8gaW4gSmF2YVNjcmlwdDogaXQgY2FuIGJlZ2luIGEgYmxvY2sgb3IgYW4gb2JqZWN0IGxpdGVyYWwuIFdlIHdyYXAgdGhlIHRleHRcbi8vIGluIHBhcmVucyB0byBlbGltaW5hdGUgdGhlIGFtYmlndWl0eS5cblxuICAgICAgICAgICAgICAgIGogPSBldmFsKCcoJyArIHRleHQgKyAnKScpO1xuXG4vLyBJbiB0aGUgb3B0aW9uYWwgZm91cnRoIHN0YWdlLCB3ZSByZWN1cnNpdmVseSB3YWxrIHRoZSBuZXcgc3RydWN0dXJlLCBwYXNzaW5nXG4vLyBlYWNoIG5hbWUvdmFsdWUgcGFpciB0byBhIHJldml2ZXIgZnVuY3Rpb24gZm9yIHBvc3NpYmxlIHRyYW5zZm9ybWF0aW9uLlxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiByZXZpdmVyID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgICAgICAgICAgd2Fsayh7Jyc6IGp9LCAnJykgOiBqO1xuICAgICAgICAgICAgfVxuXG4vLyBJZiB0aGUgdGV4dCBpcyBub3QgSlNPTiBwYXJzZWFibGUsIHRoZW4gYSBTeW50YXhFcnJvciBpcyB0aHJvd24uXG5cbiAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignSlNPTi5wYXJzZScpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdsb2JhbC5KU09OID0gSlNPTjtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEpTT047XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19KU09OQDEuMC4wQEpTT04vanNvbjIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL19KU09OQDEuMC4wQEpTT04vanNvbjIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsInZhciBjaGFyZW5jID0ge1xuICAvLyBVVEYtOCBlbmNvZGluZ1xuICB1dGY4OiB7XG4gICAgLy8gQ29udmVydCBhIHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBzdHJpbmdUb0J5dGVzOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBjaGFyZW5jLmJpbi5zdHJpbmdUb0J5dGVzKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgc3RyaW5nXG4gICAgYnl0ZXNUb1N0cmluZzogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGNoYXJlbmMuYmluLmJ5dGVzVG9TdHJpbmcoYnl0ZXMpKSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEJpbmFyeSBlbmNvZGluZ1xuICBiaW46IHtcbiAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIHN0cmluZ1RvQnl0ZXM6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspXG4gICAgICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBzdHJpbmdcbiAgICBieXRlc1RvU3RyaW5nOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgc3RyID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHN0ci5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pKTtcbiAgICAgIHJldHVybiBzdHIuam9pbignJyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNoYXJlbmM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vX2NoYXJlbmNAMC4wLjJAY2hhcmVuYy9jaGFyZW5jLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9fY2hhcmVuY0AwLjAuMkBjaGFyZW5jL2NoYXJlbmMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIihmdW5jdGlvbigpIHtcbiAgdmFyIGJhc2U2NG1hcFxuICAgICAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLycsXG5cbiAgY3J5cHQgPSB7XG4gICAgLy8gQml0LXdpc2Ugcm90YXRpb24gbGVmdFxuICAgIHJvdGw6IGZ1bmN0aW9uKG4sIGIpIHtcbiAgICAgIHJldHVybiAobiA8PCBiKSB8IChuID4+PiAoMzIgLSBiKSk7XG4gICAgfSxcblxuICAgIC8vIEJpdC13aXNlIHJvdGF0aW9uIHJpZ2h0XG4gICAgcm90cjogZnVuY3Rpb24obiwgYikge1xuICAgICAgcmV0dXJuIChuIDw8ICgzMiAtIGIpKSB8IChuID4+PiBiKTtcbiAgICB9LFxuXG4gICAgLy8gU3dhcCBiaWctZW5kaWFuIHRvIGxpdHRsZS1lbmRpYW4gYW5kIHZpY2UgdmVyc2FcbiAgICBlbmRpYW46IGZ1bmN0aW9uKG4pIHtcbiAgICAgIC8vIElmIG51bWJlciBnaXZlbiwgc3dhcCBlbmRpYW5cbiAgICAgIGlmIChuLmNvbnN0cnVjdG9yID09IE51bWJlcikge1xuICAgICAgICByZXR1cm4gY3J5cHQucm90bChuLCA4KSAmIDB4MDBGRjAwRkYgfCBjcnlwdC5yb3RsKG4sIDI0KSAmIDB4RkYwMEZGMDA7XG4gICAgICB9XG5cbiAgICAgIC8vIEVsc2UsIGFzc3VtZSBhcnJheSBhbmQgc3dhcCBhbGwgaXRlbXNcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbi5sZW5ndGg7IGkrKylcbiAgICAgICAgbltpXSA9IGNyeXB0LmVuZGlhbihuW2ldKTtcbiAgICAgIHJldHVybiBuO1xuICAgIH0sXG5cbiAgICAvLyBHZW5lcmF0ZSBhbiBhcnJheSBvZiBhbnkgbGVuZ3RoIG9mIHJhbmRvbSBieXRlc1xuICAgIHJhbmRvbUJ5dGVzOiBmdW5jdGlvbihuKSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdOyBuID4gMDsgbi0tKVxuICAgICAgICBieXRlcy5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBiaWctZW5kaWFuIDMyLWJpdCB3b3Jkc1xuICAgIGJ5dGVzVG9Xb3JkczogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIHdvcmRzID0gW10sIGkgPSAwLCBiID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrLCBiICs9IDgpXG4gICAgICAgIHdvcmRzW2IgPj4+IDVdIHw9IGJ5dGVzW2ldIDw8ICgyNCAtIGIgJSAzMik7XG4gICAgICByZXR1cm4gd29yZHM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYmlnLWVuZGlhbiAzMi1iaXQgd29yZHMgdG8gYSBieXRlIGFycmF5XG4gICAgd29yZHNUb0J5dGVzOiBmdW5jdGlvbih3b3Jkcykge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgYiA9IDA7IGIgPCB3b3Jkcy5sZW5ndGggKiAzMjsgYiArPSA4KVxuICAgICAgICBieXRlcy5wdXNoKCh3b3Jkc1tiID4+PiA1XSA+Pj4gKDI0IC0gYiAlIDMyKSkgJiAweEZGKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBoZXggc3RyaW5nXG4gICAgYnl0ZXNUb0hleDogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIGhleCA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhleC5wdXNoKChieXRlc1tpXSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcbiAgICAgICAgaGV4LnB1c2goKGJ5dGVzW2ldICYgMHhGKS50b1N0cmluZygxNikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhleC5qb2luKCcnKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGhleCBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgaGV4VG9CeXRlczogZnVuY3Rpb24oaGV4KSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBjID0gMDsgYyA8IGhleC5sZW5ndGg7IGMgKz0gMilcbiAgICAgICAgYnl0ZXMucHVzaChwYXJzZUludChoZXguc3Vic3RyKGMsIDIpLCAxNikpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIGJhc2UtNjQgc3RyaW5nXG4gICAgYnl0ZXNUb0Jhc2U2NDogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIGJhc2U2NCA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIHZhciB0cmlwbGV0ID0gKGJ5dGVzW2ldIDw8IDE2KSB8IChieXRlc1tpICsgMV0gPDwgOCkgfCBieXRlc1tpICsgMl07XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKVxuICAgICAgICAgIGlmIChpICogOCArIGogKiA2IDw9IGJ5dGVzLmxlbmd0aCAqIDgpXG4gICAgICAgICAgICBiYXNlNjQucHVzaChiYXNlNjRtYXAuY2hhckF0KCh0cmlwbGV0ID4+PiA2ICogKDMgLSBqKSkgJiAweDNGKSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgYmFzZTY0LnB1c2goJz0nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYXNlNjQuam9pbignJyk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBiYXNlLTY0IHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBiYXNlNjRUb0J5dGVzOiBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICAgIC8vIFJlbW92ZSBub24tYmFzZS02NCBjaGFyYWN0ZXJzXG4gICAgICBiYXNlNjQgPSBiYXNlNjQucmVwbGFjZSgvW15BLVowLTkrXFwvXS9pZywgJycpO1xuXG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBpID0gMCwgaW1vZDQgPSAwOyBpIDwgYmFzZTY0Lmxlbmd0aDtcbiAgICAgICAgICBpbW9kNCA9ICsraSAlIDQpIHtcbiAgICAgICAgaWYgKGltb2Q0ID09IDApIGNvbnRpbnVlO1xuICAgICAgICBieXRlcy5wdXNoKCgoYmFzZTY0bWFwLmluZGV4T2YoYmFzZTY0LmNoYXJBdChpIC0gMSkpXG4gICAgICAgICAgICAmIChNYXRoLnBvdygyLCAtMiAqIGltb2Q0ICsgOCkgLSAxKSkgPDwgKGltb2Q0ICogMikpXG4gICAgICAgICAgICB8IChiYXNlNjRtYXAuaW5kZXhPZihiYXNlNjQuY2hhckF0KGkpKSA+Pj4gKDYgLSBpbW9kNCAqIDIpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gY3J5cHQ7XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19jcnlwdEAwLjAuMkBjcnlwdC9jcnlwdC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvX2NyeXB0QDAuMC4yQGNyeXB0L2NyeXB0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9faXMtYnVmZmVyQDEuMS42QGlzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvX2lzLWJ1ZmZlckAxLjEuNkBpcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIihmdW5jdGlvbigpe1xyXG4gIHZhciBjcnlwdCA9IHJlcXVpcmUoJ2NyeXB0JyksXHJcbiAgICAgIHV0ZjggPSByZXF1aXJlKCdjaGFyZW5jJykudXRmOCxcclxuICAgICAgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKSxcclxuICAgICAgYmluID0gcmVxdWlyZSgnY2hhcmVuYycpLmJpbixcclxuXHJcbiAgLy8gVGhlIGNvcmVcclxuICBtZDUgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgLy8gQ29udmVydCB0byBieXRlIGFycmF5XHJcbiAgICBpZiAobWVzc2FnZS5jb25zdHJ1Y3RvciA9PSBTdHJpbmcpXHJcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RpbmcgPT09ICdiaW5hcnknKVxyXG4gICAgICAgIG1lc3NhZ2UgPSBiaW4uc3RyaW5nVG9CeXRlcyhtZXNzYWdlKTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIG1lc3NhZ2UgPSB1dGY4LnN0cmluZ1RvQnl0ZXMobWVzc2FnZSk7XHJcbiAgICBlbHNlIGlmIChpc0J1ZmZlcihtZXNzYWdlKSlcclxuICAgICAgbWVzc2FnZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG1lc3NhZ2UsIDApO1xyXG4gICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZSkpXHJcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnRvU3RyaW5nKCk7XHJcbiAgICAvLyBlbHNlLCBhc3N1bWUgYnl0ZSBhcnJheSBhbHJlYWR5XHJcblxyXG4gICAgdmFyIG0gPSBjcnlwdC5ieXRlc1RvV29yZHMobWVzc2FnZSksXHJcbiAgICAgICAgbCA9IG1lc3NhZ2UubGVuZ3RoICogOCxcclxuICAgICAgICBhID0gIDE3MzI1ODQxOTMsXHJcbiAgICAgICAgYiA9IC0yNzE3MzM4NzksXHJcbiAgICAgICAgYyA9IC0xNzMyNTg0MTk0LFxyXG4gICAgICAgIGQgPSAgMjcxNzMzODc4O1xyXG5cclxuICAgIC8vIFN3YXAgZW5kaWFuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbVtpXSA9ICgobVtpXSA8PCAgOCkgfCAobVtpXSA+Pj4gMjQpKSAmIDB4MDBGRjAwRkYgfFxyXG4gICAgICAgICAgICAgKChtW2ldIDw8IDI0KSB8IChtW2ldID4+PiAgOCkpICYgMHhGRjAwRkYwMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYWRkaW5nXHJcbiAgICBtW2wgPj4+IDVdIHw9IDB4ODAgPDwgKGwgJSAzMik7XHJcbiAgICBtWygoKGwgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gbDtcclxuXHJcbiAgICAvLyBNZXRob2Qgc2hvcnRjdXRzXHJcbiAgICB2YXIgRkYgPSBtZDUuX2ZmLFxyXG4gICAgICAgIEdHID0gbWQ1Ll9nZyxcclxuICAgICAgICBISCA9IG1kNS5faGgsXHJcbiAgICAgICAgSUkgPSBtZDUuX2lpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5sZW5ndGg7IGkgKz0gMTYpIHtcclxuXHJcbiAgICAgIHZhciBhYSA9IGEsXHJcbiAgICAgICAgICBiYiA9IGIsXHJcbiAgICAgICAgICBjYyA9IGMsXHJcbiAgICAgICAgICBkZCA9IGQ7XHJcblxyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKyAwXSwgIDcsIC02ODA4NzY5MzYpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKyAyXSwgMTcsICA2MDYxMDU4MTkpO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsgNF0sICA3LCAtMTc2NDE4ODk3KTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsgNV0sIDEyLCAgMTIwMDA4MDQyNik7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKyA3XSwgMjIsIC00NTcwNTk4Myk7XHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krIDhdLCAgNywgIDE3NzAwMzU0MTYpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsxMF0sIDE3LCAtNDIwNjMpO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKzExXSwgMjIsIC0xOTkwNDA0MTYyKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsxMl0sICA3LCAgMTgwNDYwMzY4Mik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krMTNdLCAxMiwgLTQwMzQxMTAxKTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krMTVdLCAyMiwgIDEyMzY1MzUzMjkpO1xyXG5cclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgMV0sICA1LCAtMTY1Nzk2NTEwKTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsgNl0sICA5LCAtMTA2OTUwMTYzMik7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krMTFdLCAxNCwgIDY0MzcxNzcxMyk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krIDBdLCAyMCwgLTM3Mzg5NzMwMik7XHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krIDVdLCAgNSwgLTcwMTU1ODY5MSk7XHJcbiAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBtW2krMTBdLCAgOSwgIDM4MDE2MDgzKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsxNV0sIDE0LCAtNjYwNDc4MzM1KTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgOV0sICA1LCAgNTY4NDQ2NDM4KTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsxNF0sICA5LCAtMTAxOTgwMzY5MCk7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krIDhdLCAyMCwgIDExNjM1MzE1MDEpO1xyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKzEzXSwgIDUsIC0xNDQ0NjgxNDY3KTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsgMl0sICA5LCAtNTE0MDM3ODQpO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKyA3XSwgMTQsICAxNzM1MzI4NDczKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsxMl0sIDIwLCAtMTkyNjYwNzczNCk7XHJcblxyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyA1XSwgIDQsIC0zNzg1NTgpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsxMV0sIDE2LCAgMTgzOTAzMDU2Mik7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krMTRdLCAyMywgLTM1MzA5NTU2KTtcclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsgMV0sICA0LCAtMTUzMDk5MjA2MCk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krIDRdLCAxMSwgIDEyNzI4OTMzNTMpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKzEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsxM10sICA0LCAgNjgxMjc5MTc0KTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsgMF0sIDExLCAtMzU4NTM3MjIyKTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsgM10sIDE2LCAtNzIyNTIxOTc5KTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsgNl0sIDIzLCAgNzYwMjkxODkpO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyA5XSwgIDQsIC02NDAzNjQ0ODcpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKzEyXSwgMTEsIC00MjE4MTU4MzUpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKzE1XSwgMTYsICA1MzA3NDI1MjApO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xyXG5cclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsgMF0sICA2LCAtMTk4NjMwODQ0KTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsgN10sIDEwLCAgMTEyNjg5MTQxNSk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKyA1XSwgMjEsIC01NzQzNDA1NSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krMTJdLCAgNiwgIDE3MDA0ODU1NzEpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsxMF0sIDE1LCAtMTA1MTUyMyk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKyA4XSwgIDYsICAxODczMzEzMzU5KTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsxNV0sIDEwLCAtMzA2MTE3NDQpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsxM10sIDIxLCAgMTMwOTE1MTY0OSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krIDRdLCAgNiwgLTE0NTUyMzA3MCk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKyAyXSwgMTUsICA3MTg3ODcyNTkpO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xyXG5cclxuICAgICAgYSA9IChhICsgYWEpID4+PiAwO1xyXG4gICAgICBiID0gKGIgKyBiYikgPj4+IDA7XHJcbiAgICAgIGMgPSAoYyArIGNjKSA+Pj4gMDtcclxuICAgICAgZCA9IChkICsgZGQpID4+PiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjcnlwdC5lbmRpYW4oW2EsIGIsIGMsIGRdKTtcclxuICB9O1xyXG5cclxuICAvLyBBdXhpbGlhcnkgZnVuY3Rpb25zXHJcbiAgbWQ1Ll9mZiAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGIgJiBjIHwgfmIgJiBkKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9nZyAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGIgJiBkIHwgYyAmIH5kKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9oaCAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGIgXiBjIF4gZCkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG4gIG1kNS5faWkgID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuICAgIHZhciBuID0gYSArIChjIF4gKGIgfCB+ZCkpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuXHJcbiAgLy8gUGFja2FnZSBwcml2YXRlIGJsb2Nrc2l6ZVxyXG4gIG1kNS5fYmxvY2tzaXplID0gMTY7XHJcbiAgbWQ1Ll9kaWdlc3RzaXplID0gMTY7XHJcblxyXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuICAgIGlmIChtZXNzYWdlID09PSB1bmRlZmluZWQgfHwgbWVzc2FnZSA9PT0gbnVsbClcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGFyZ3VtZW50ICcgKyBtZXNzYWdlKTtcclxuXHJcbiAgICB2YXIgZGlnZXN0Ynl0ZXMgPSBjcnlwdC53b3Jkc1RvQnl0ZXMobWQ1KG1lc3NhZ2UsIG9wdGlvbnMpKTtcclxuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuYXNCeXRlcyA/IGRpZ2VzdGJ5dGVzIDpcclxuICAgICAgICBvcHRpb25zICYmIG9wdGlvbnMuYXNTdHJpbmcgPyBiaW4uYnl0ZXNUb1N0cmluZyhkaWdlc3RieXRlcykgOlxyXG4gICAgICAgIGNyeXB0LmJ5dGVzVG9IZXgoZGlnZXN0Ynl0ZXMpO1xyXG4gIH07XHJcblxyXG59KSgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vX21kNUAyLjIuMUBtZDUvbWQ1LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9fbWQ1QDIuMi4xQG1kNS9tZDUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsImltcG9ydCB7c3RiTnVsbH0gZnJvbSAnLi4vdG9vZG8vX3N0Ym51bGwnXHJcbmltcG9ydCB7c3RiY2xpfSBmcm9tICcuLi90b29kby9fc3RiY2xpJztcclxuXHJcbmZ1bmN0aW9uIFBhZ2VVcmwoKSB7XHJcbn1cclxuUGFnZVVybC5wcm90b3R5cGUgPSB7XHJcbiAgICBwYXJzZVF1ZXJ5OiBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgICAgICBjb25zdCBzdGFydCA9IHF1ZXJ5LmluZGV4T2YoJz8nKTtcclxuICAgICAgICBpZiAoc3RhcnQgPj0gMCkge1xyXG4gICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LnNsaWNlKHN0YXJ0ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFyZ3MgPSB7fTtcclxuICAgICAgICBjb25zdCBhcnIgPSBxdWVyeS5zcGxpdCgnJicpO1xyXG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgYXJyLmxlbmd0aDsgbSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSBhcnJbbV07XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcCA9IHYuc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgYXJnc1t0bXBbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KHRtcFsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcmdzO1xyXG4gICAgfSxcclxuICAgIHBhcnNlQXJnczogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICBsZXQgaywgdjtcclxuICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKGsgaW4gYXJncykge1xyXG4gICAgICAgICAgICAvLyEganMg5Lya5oqKJzAn5b2T5L2cZmFsc2UgYXJnc1trXSA9PiBhcmdzW2tdICE9PSAnJ1xyXG4gICAgICAgICAgICBpZiAoYXJncy5oYXNPd25Qcm9wZXJ0eShrKSAmJiBhcmdzW2tdICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdiA9IGVuY29kZVVSSUNvbXBvbmVudChhcmdzW2tdKTtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKGsgKyAnPScgKyB2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyLmpvaW4oJyYnKTtcclxuICAgIH0sXHJcbiAgICBiYXNlVXJsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnL3RkZW50ZXInO1xyXG4gICAgfSxcclxuICAgIGdldFVzZXJJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdGJOdWxsLmdldFZhbHVlKCd0b29kby51c2VySWQnKTtcclxuICAgIH0sXHJcbiAgICBnZXRTdGJJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdGJOdWxsLmdldENhcmRUVigpO1xyXG4gICAgfSxcclxuICAgIGdldFNpZ25LZXk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdHMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbXNnID0gdGhpcy5nZXRVc2VySWQoKSArIHRzO1xyXG4gICAgICAgIHZhciBtZDUgPSBzdGJjbGkubWQ1KG1zZyk7XHJcbiAgICAgICAgcmV0dXJuIG1kNSArIHRzO1xyXG4gICAgfSxcclxuICAgIGdldENoaWxkTG9jazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH0sXHJcbiAgICByZWNoYXJnZVVybDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy90ZHNydi9hcGkvY29pbic7XHJcbiAgICB9LFxyXG4gICAgY2FsbFVybDogZnVuY3Rpb24gKGl0ZW0sIHJldHVyblVybCkge1xyXG4gICAgICAgIGxldCByZWNoYXJnZVVybCA9IHRoaXMucmVjaGFyZ2VVcmwoKTtcclxuICAgICAgICBsZXQgYXJncyA9IHt9O1xyXG4gICAgICAgIGFyZ3MuZ2FtZWlkID0gaXRlbS5nYW1lSWQ7XHJcbiAgICAgICAgYXJncy5rZXkgPSB0aGlzLmdldFNpZ25LZXkoKTtcclxuICAgICAgICBhcmdzLmRldiA9IHRoaXMuZ2V0U3RiSWQoKTtcclxuICAgICAgICBhcmdzLmZhdGhlcmtleSA9IHRoaXMuZ2V0Q2hpbGRMb2NrKCk7XHJcbiAgICAgICAgYXJncy51c2VySWQgPSB0aGlzLmdldFVzZXJJZCgpO1xyXG4gICAgICAgIGFyZ3MudXNlcmlkID0gdGhpcy5nZXRVc2VySWQoKTtcclxuICAgICAgICBhcmdzLnRzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgYXJncy5yZXR1cm5VUkwgPSByZXR1cm5Vcmw7XHJcblxyXG4gICAgICAgIHZhciBob3N0TmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTsgLy/kuI3luKbnq6/lj6NcclxuICAgICAgICB2YXIgZHN0VXJsID0gaXRlbS51cmw7XHJcbiAgICAgICAgZHN0VXJsID0gZHN0VXJsLnJlcGxhY2UoJzE5Mi4xNjguMjAwLjEwMCcsIGhvc3ROYW1lKTtcclxuXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHt9O1xyXG4gICAgICAgIHBhcmFtcy5yZWRpcmVjdFVybCA9IGRzdFVybCArICc/JyArIHRoaXMucGFyc2VBcmdzKGFyZ3MpICsgJyZyZWNoYWdlVVJMPScgKyByZWNoYXJnZVVybDtcclxuICAgICAgICBwYXJhbXMucmV0dXJuVXJsID0gcmV0dXJuVXJsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmwoKSArICcvcmVzaXplLmh0bWw/JyArIHRoaXMucGFyc2VBcmdzKHBhcmFtcyk7XHJcbiAgICB9LFxyXG4gICAgY2FsbFVybEJhc2U6IGZ1bmN0aW9uIChpdGVtLCByZXR1cm5VcmwpIHtcclxuICAgICAgICBsZXQgcmVjaGFyZ2VVcmwgPSB0aGlzLnJlY2hhcmdlVXJsKCk7XHJcbiAgICAgICAgbGV0IGFyZ3MgPSB7fTtcclxuICAgICAgICBhcmdzLmdhbWVpZCA9IGl0ZW0uZ2FtZUlkO1xyXG4gICAgICAgIGFyZ3Mua2V5ID0gdGhpcy5nZXRTaWduS2V5KCk7XHJcbiAgICAgICAgYXJncy5kZXYgPSB0aGlzLmdldFN0YklkKCk7XHJcbiAgICAgICAgYXJncy5mYXRoZXJrZXkgPSB0aGlzLmdldENoaWxkTG9jaygpO1xyXG4gICAgICAgIGFyZ3MudXNlcklkID0gdGhpcy5nZXRVc2VySWQoKTtcclxuICAgICAgICBhcmdzLnVzZXJpZCA9IHRoaXMuZ2V0VXNlcklkKCk7XHJcbiAgICAgICAgYXJncy50cyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGFyZ3MucmV0dXJuVVJMID0gcmV0dXJuVXJsO1xyXG5cclxuICAgICAgICB2YXIgaG9zdE5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7IC8v5LiN5bim56uv5Y+jXHJcbiAgICAgICAgdmFyIGRzdFVybCA9IGl0ZW0udXJsO1xyXG4gICAgICAgIGRzdFVybCA9IGRzdFVybC5yZXBsYWNlKCcxOTIuMTY4LjIwMC4xMDAnLCBob3N0TmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkc3RVcmwgKyAnPycgKyB0aGlzLnBhcnNlQXJncyhhcmdzKSArICcmcmVjaGFnZVVSTD0nICsgcmVjaGFyZ2VVcmw7XHJcbiAgICB9LFxyXG4gICAgY2FsbEdhbWU6IGZ1bmN0aW9uIChpdGVtLCByZXR1cm5VcmwpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuY2FsbFVybChpdGVtLCByZXR1cm5VcmwpO1xyXG4gICAgfSxcclxuICAgIGNhbGxHYW1lQmFzZTogZnVuY3Rpb24gKGl0ZW0sIHJldHVyblVybCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5jYWxsVXJsQmFzZShpdGVtLCByZXR1cm5VcmwpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgcGFnZVVybCA9IG5ldyBQYWdlVXJsKCk7XHJcblxyXG5leHBvcnQge3BhZ2VVcmx9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUGFnZVVybC5qcyIsImltcG9ydCB7cmV0YWlsLHJldGFpbElkfSBmcm9tIFwiLi9fcmV0YWlsXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRLZXlDb2RlcygpIHtcclxuICAgIGxldCBrZXlNYXAgPSB7fTtcclxuXHJcbiAgICBpZiAocmV0YWlsSWQgPT0gcmV0YWlsLmd4Z2QpIHtcclxuICAgICAgICBrZXlNYXAgPSB7IC8vIOW5v+ilv+W5v+eUtVxyXG4gICAgICAgICAgICB1cDogMzgsICAgICAgICAvLyDkuIpcclxuICAgICAgICAgICAgZG93bjogNDAsICAgICAgLy8g5LiLXHJcbiAgICAgICAgICAgIGxlZnQ6IDM3LCAgICAgIC8vIOW3plxyXG4gICAgICAgICAgICByaWdodDogMzksICAgICAvLyDlj7NcclxuICAgICAgICAgICAgb2s6IDEzLCAgICAgICAgLy8g56Gu5a6aXHJcbiAgICAgICAgICAgIGYxOiA0MDAsICAgICAgIC8vIGYxIC8v57qiXHJcbiAgICAgICAgICAgIGYyOiA0MDEsICAgICAgIC8vIGYyIC8v6JOdXHJcbiAgICAgICAgICAgIGYzOiA0MDMsICAgICAgIC8vIGYzIC8v6buEXHJcbiAgICAgICAgICAgIGY0OiA0MDIsICAgICAgIC8vIGY0IC8v57u/XHJcbiAgICAgICAgICAgIG51bTE6IDQ5LCAgICAgIC8vIOaVsOWtlzFcclxuICAgICAgICAgICAgbnVtMjogNTAsICAgICAgLy8g5pWw5a2XMlxyXG4gICAgICAgICAgICBudW0zOiA1MSwgICAgICAvLyDmlbDlrZczXHJcbiAgICAgICAgICAgIG51bTQ6IDUyLCAgICAgIC8vIOaVsOWtlzRcclxuICAgICAgICAgICAgbnVtNTogNTMsICAgICAgLy8g5pWw5a2XNVxyXG4gICAgICAgICAgICBudW02OiA1NCwgICAgICAvLyDmlbDlrZc2XHJcbiAgICAgICAgICAgIG51bTc6IDU1LCAgICAgIC8vIOaVsOWtlzdcclxuICAgICAgICAgICAgbnVtODogNTYsICAgICAgLy8g5pWw5a2XOFxyXG4gICAgICAgICAgICBudW05OiA1NywgICAgICAvLyDmlbDlrZc5XHJcbiAgICAgICAgICAgIG51bTA6IDQ4LCAgICAgIC8vIOaVsOWtlzBcclxuICAgICAgICAgICAgbXV0ZTogNTE4LCAgICAgIC8vIOmdmemfs1xyXG4gICAgICAgICAgICBiYWNrOiAzOTksICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA0MDYsICAgICAvLyDlo7DpgZPvvJ8gLy/lo7DpgZPplK5cclxuICAgICAgICAgICAgdm9sVXA6IDUxNywgICAgLy8g5aKe5aSn6Z+z6YePXHJcbiAgICAgICAgICAgIHZvbERvd246IDUxNiwgIC8vIOWHj+Wwj+mfs+mHj1xyXG4gICAgICAgICAgICBmYXY6IDQwNCwgICAgICAgLy8g5Zac5qyiXHJcbiAgICAgICAgICAgIHBsYXlCYWNrOiA1MjEsICAvLyDlm57mlL4gIC8v54K55pKt6ZSuXHJcbiAgICAgICAgICAgIHBhZ2VVcDogMzMsICAgIC8vIOS4iuS4gOmhtVxyXG4gICAgICAgICAgICBwYWdlRG93bjogMzQsICAvLyDkuIvkuIDpobVcclxuICAgICAgICAgICAgbWVudTogNTE1LCAgICAgICAvLyDoj5zljZVcclxuICAgICAgICAgICAgZXNjOiA1MTQsICAgICAgICAvL+mAgOWHulxyXG4gICAgICAgICAgICBob21lOiA1MjBcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0gZWxzZSBpZiAocmV0YWlsSWQgPT0gcmV0YWlsLmhueXgpIHtcclxuICAgICAgICAvL2tleU1hcCA9IHsgLy8g5rKz5Y2X5pyJ57q/IGxpbnV4XHJcbiAgICAgICAgLy8gICAgdXA6IDY1MzYyLFxyXG4gICAgICAgIC8vICAgIGRvd246IDY1MzY0LFxyXG4gICAgICAgIC8vICAgIGxlZnQ6IDY1MzYxLFxyXG4gICAgICAgIC8vICAgIHJpZ2h0OiA2NTM2MyxcclxuICAgICAgICAvLyAgICBvazogNjUyOTMsXHJcbiAgICAgICAgLy8gICAgZjE6IDMyLFxyXG4gICAgICAgIC8vICAgIGYyOiAzMyxcclxuICAgICAgICAvLyAgICBmMzogMzQsXHJcbiAgICAgICAgLy8gICAgZjQ6IDM1LFxyXG4gICAgICAgIC8vICAgIG51bTE6IDQ5LFxyXG4gICAgICAgIC8vICAgIG51bTI6IDUwLFxyXG4gICAgICAgIC8vICAgIG51bTM6IDUxLFxyXG4gICAgICAgIC8vICAgIG51bTQ6IDUyLFxyXG4gICAgICAgIC8vICAgIG51bTU6IDUzLFxyXG4gICAgICAgIC8vICAgIG51bTY6IDU0LFxyXG4gICAgICAgIC8vICAgIG51bTc6IDU1LFxyXG4gICAgICAgIC8vICAgIG51bTg6IDU2LFxyXG4gICAgICAgIC8vICAgIG51bTk6IDU3LFxyXG4gICAgICAgIC8vICAgIG51bTA6IDQ4LFxyXG4gICAgICAgIC8vICAgIG11dGU6IDYzNTYzLFxyXG4gICAgICAgIC8vICAgIGJhY2s6IDY1MzY3LFxyXG4gICAgICAgIC8vICAgIHRyYWNrOiA2NTMwNyxcclxuICAgICAgICAvLyAgICB2b2xVcDogNjM1NjEsXHJcbiAgICAgICAgLy8gICAgdm9sRG93bjogNjM1NjIsXHJcbiAgICAgICAgLy8gICAgZmF2OiAzNixcclxuICAgICAgICAvLyAgICBwbGF5QmFjazogNzIsXHJcbiAgICAgICAgLy8gICAgcGFnZVVwOiAyNSxcclxuICAgICAgICAvLyAgICBwYWdlRG93bjogMjYsXHJcbiAgICAgICAgLy8gICAgbWVudTogNjUzNjAsXHJcbiAgICAgICAgLy8gICAgZXNjOiAyNyxcclxuICAgICAgICAvLyAgICBob21lOiA2NTM2MFxyXG4gICAgICAgIC8vfTtcclxuICAgICAgICBrZXlNYXAgPSB7IC8vIOays+WNl+aciee6vyBhbmRyb2lkXHJcbiAgICAgICAgICAgIHVwOiAzOCwgICAgICAgIC8vIOS4ilxyXG4gICAgICAgICAgICBkb3duOiA0MCwgICAgICAvLyDkuItcclxuICAgICAgICAgICAgbGVmdDogMzcsICAgICAgLy8g5bemXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzOSwgICAgIC8vIOWPs1xyXG4gICAgICAgICAgICBvazogMTMsICAgICAgICAvLyDnoa7lrppcclxuICAgICAgICAgICAgZjE6IDExMiwgICAgICAgLy8gZjFcclxuICAgICAgICAgICAgZjI6IDExMywgICAgICAgLy8gZjJcclxuICAgICAgICAgICAgZjM6IDExNCwgICAgICAgLy8gZjNcclxuICAgICAgICAgICAgZjQ6IDExNSwgICAgICAgLy8gZjRcclxuICAgICAgICAgICAgbnVtMTogNDksICAgICAgLy8g5pWw5a2XMVxyXG4gICAgICAgICAgICBudW0yOiA1MCwgICAgICAvLyDmlbDlrZcyXHJcbiAgICAgICAgICAgIG51bTM6IDUxLCAgICAgIC8vIOaVsOWtlzNcclxuICAgICAgICAgICAgbnVtNDogNTIsICAgICAgLy8g5pWw5a2XNFxyXG4gICAgICAgICAgICBudW01OiA1MywgICAgICAvLyDmlbDlrZc1XHJcbiAgICAgICAgICAgIG51bTY6IDU0LCAgICAgIC8vIOaVsOWtlzZcclxuICAgICAgICAgICAgbnVtNzogNTUsICAgICAgLy8g5pWw5a2XN1xyXG4gICAgICAgICAgICBudW04OiA1NiwgICAgICAvLyDmlbDlrZc4XHJcbiAgICAgICAgICAgIG51bTk6IDU3LCAgICAgIC8vIOaVsOWtlzlcclxuICAgICAgICAgICAgbnVtMDogNDgsICAgICAgLy8g5pWw5a2XMCAvL+aVsOWtlzAg6L+U5ZueXHJcbiAgICAgICAgICAgIG11dGU6IDc3LCAgICAgIC8vIOmdmemfs1xyXG4gICAgICAgICAgICBiYWNrOiA4LCAgICAgIC8vIOi/lOWbnlxyXG4gICAgICAgICAgICB0cmFjazogODIsICAgICAvLyDlo7DpgZPvvJ9cclxuICAgICAgICAgICAgdm9sVXA6IDE5MCwgICAgLy8g5aKe5aSn6Z+z6YePXHJcbiAgICAgICAgICAgIHZvbERvd246IDE4OCwgIC8vIOWHj+Wwj+mfs+mHj1xyXG4gICAgICAgICAgICBmYXY6IDg0LCAgICAgICAvLyDllpzmrKJcclxuICAgICAgICAgICAgcGxheUJhY2s6IDgwLCAgLy8g5Zue5pS+XHJcbiAgICAgICAgICAgIHBhZ2VVcDogMzMsICAgIC8vIOS4iuS4gOmhtVxyXG4gICAgICAgICAgICBwYWdlRG93bjogMzQsICAvLyDkuIvkuIDpobVcclxuICAgICAgICAgICAgbWVudTogNzIsICAgICAgIC8vIOiPnOWNlVxyXG4gICAgICAgICAgICBlc2M6IDI3LFxyXG4gICAgICAgICAgICBob21lOiA3MlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ2RnZCkge1xyXG4gICAgICAgIGtleU1hcCA9IHsgLy8g5bm/5Lic5bm/55S1XHJcbiAgICAgICAgICAgIHVwOiA4NywgICAgICAgIC8vIOS4iiBX6ZSuXHJcbiAgICAgICAgICAgIGRvd246IDgzLCAgICAgIC8vIOS4iyBT6ZSuXHJcbiAgICAgICAgICAgIGxlZnQ6IDY1LCAgICAgIC8vIOW3piBB6ZSuXHJcbiAgICAgICAgICAgIHJpZ2h0OiA2OCwgICAgIC8vIOWPsyBE6ZSuXHJcbiAgICAgICAgICAgIG9rOiAxMywgICAgICAgIC8vIOehruWumlxyXG4gICAgICAgICAgICBmMTogNDAwLCAgICAgICAvLyBmMSAvL+e6olxyXG4gICAgICAgICAgICBmMjogNDAxLCAgICAgICAvLyBmMiAvL+iTnVxyXG4gICAgICAgICAgICBmMzogNDAyLCAgICAgICAvLyBmMyAvL+m7hFxyXG4gICAgICAgICAgICBmNDogNDAzLCAgICAgICAvLyBmNCAvL+e7v1xyXG4gICAgICAgICAgICBudW0xOiA0OSwgICAgICAvLyDmlbDlrZcxXHJcbiAgICAgICAgICAgIG51bTI6IDUwLCAgICAgIC8vIOaVsOWtlzJcclxuICAgICAgICAgICAgbnVtMzogNTEsICAgICAgLy8g5pWw5a2XM1xyXG4gICAgICAgICAgICBudW00OiA1MiwgICAgICAvLyDmlbDlrZc0XHJcbiAgICAgICAgICAgIG51bTU6IDUzLCAgICAgIC8vIOaVsOWtlzVcclxuICAgICAgICAgICAgbnVtNjogNTQsICAgICAgLy8g5pWw5a2XNlxyXG4gICAgICAgICAgICBudW03OiA1NSwgICAgICAvLyDmlbDlrZc3XHJcbiAgICAgICAgICAgIG51bTg6IDU2LCAgICAgIC8vIOaVsOWtlzhcclxuICAgICAgICAgICAgbnVtOTogNTcsICAgICAgLy8g5pWw5a2XOVxyXG4gICAgICAgICAgICBudW0wOiA0OCwgICAgICAvLyDmlbDlrZcwXHJcbiAgICAgICAgICAgIG11dGU6IDY3LCAgICAgIC8vIOmdmemfs1xyXG4gICAgICAgICAgICBiYWNrOiA4LCAgICAgIC8vIOi/lOWbnlxyXG4gICAgICAgICAgICB0cmFjazogODYsICAgICAvLyDlo7DpgZPvvJ8gLy/lo7DpgZPplK5cclxuICAgICAgICAgICAgdm9sVXA6IDYxLCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogNDUsICAvLyDlh4/lsI/pn7Pph49cclxuICAgICAgICAgICAgZmF2OiA3NiwgICAgICAgLy8g5Zac5qyiXHJcbiAgICAgICAgICAgIHBsYXlCYWNrOiA1MjEsICAvLyDlm57mlL4gIC8v54K55pKt6ZSuXHJcbiAgICAgICAgICAgIHBhZ2VVcDogMzA2LCAgICAvLyDkuIrkuIDpobVcclxuICAgICAgICAgICAgcGFnZURvd246IDMwNywgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA3MiwgICAgICAgLy8g6I+c5Y2VXHJcbiAgICAgICAgICAgIGVzYzogMjcsXHJcbiAgICAgICAgICAgIGhvbWU6IDcyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9IGVsc2UgeyAvLyB3aW5kb3dzIOmUrueggVxyXG4gICAgICAgIGtleU1hcCA9IHtcclxuICAgICAgICAgICAgdXA6IDM4LCAgICAgICAgLy8g5LiKXHJcbiAgICAgICAgICAgIGRvd246IDQwLCAgICAgIC8vIOS4i1xyXG4gICAgICAgICAgICBsZWZ0OiAzNywgICAgICAvLyDlt6ZcclxuICAgICAgICAgICAgcmlnaHQ6IDM5LCAgICAgLy8g5Y+zXHJcbiAgICAgICAgICAgIG9rOiAxMywgICAgICAgIC8vIOehruWumlxyXG4gICAgICAgICAgICBmMTogMTEyLCAgICAgICAvLyBmMVxyXG4gICAgICAgICAgICBmMjogMTEzLCAgICAgICAvLyBmMlxyXG4gICAgICAgICAgICBmMzogMTE0LCAgICAgICAvLyBmM1xyXG4gICAgICAgICAgICBmNDogMTE1LCAgICAgICAvLyBmNFxyXG4gICAgICAgICAgICBudW0xOiA0OSwgICAgICAvLyDmlbDlrZcxXHJcbiAgICAgICAgICAgIG51bTI6IDUwLCAgICAgIC8vIOaVsOWtlzJcclxuICAgICAgICAgICAgbnVtMzogNTEsICAgICAgLy8g5pWw5a2XM1xyXG4gICAgICAgICAgICBudW00OiA1MiwgICAgICAvLyDmlbDlrZc0XHJcbiAgICAgICAgICAgIG51bTU6IDUzLCAgICAgIC8vIOaVsOWtlzVcclxuICAgICAgICAgICAgbnVtNjogNTQsICAgICAgLy8g5pWw5a2XNlxyXG4gICAgICAgICAgICBudW03OiA1NSwgICAgICAvLyDmlbDlrZc3XHJcbiAgICAgICAgICAgIG51bTg6IDU2LCAgICAgIC8vIOaVsOWtlzhcclxuICAgICAgICAgICAgbnVtOTogNTcsICAgICAgLy8g5pWw5a2XOVxyXG4gICAgICAgICAgICBudW0wOiA0OCwgICAgICAvLyDmlbDlrZcwIC8v5pWw5a2XMCDov5Tlm55cclxuICAgICAgICAgICAgbXV0ZTogNzcsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDgsICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA4MiwgICAgIC8vIOWjsOmBk++8n1xyXG4gICAgICAgICAgICB2b2xVcDogMTkwLCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogMTg4LCAgLy8g5YeP5bCP6Z+z6YePXHJcbiAgICAgICAgICAgIGZhdjogODQsICAgICAgIC8vIOWWnOasolxyXG4gICAgICAgICAgICBwbGF5QmFjazogODAsICAvLyDlm57mlL5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMywgICAgLy8g5LiK5LiA6aG1XHJcbiAgICAgICAgICAgIHBhZ2VEb3duOiAzNCwgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA3MiwgICAgICAgLy8g6I+c5Y2VXHJcbiAgICAgICAgICAgIGVzYzogMjcsXHJcbiAgICAgICAgICAgIGhvbWU6IDcyXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBrZXlNYXA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV2ZW50KGV2dCkge1xyXG4gICAgcmV0dXJuIGV2dCB8fCB3aW5kb3cuZXZlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEtleShldnQpIHtcclxuICAgIC8v5pSv5oyBSUXjgIFGRlxyXG4gICAgZXZ0ID0gZ2V0RXZlbnQoZXZ0KTtcclxuICAgIHJldHVybiBldnQua2V5Q29kZSB8fCBldnQud2hpY2ggfHwgZXZ0LmNoYXJDb2RlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb2RlcygpIHtcclxuICAgIGNvbnN0IGtleU1hcCA9IGdldEtleUNvZGVzKCk7XHJcbiAgICB2YXIgY29kZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGNvZGUgaW4ga2V5TWFwKSB7XHJcbiAgICAgICAgaWYgKGtleU1hcC5oYXNPd25Qcm9wZXJ0eShjb2RlKSkge1xyXG4gICAgICAgICAgICBjb2Rlcy5wdXNoKGtleU1hcFtjb2RlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvZGVzO1xyXG59XHJcblxyXG5leHBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19rZXljb2Rlcy5qcyIsImNvbnN0IHJldGFpbCA9IHtcclxuICAgIGd4Z2Q6ICc5NjMzNScsXHJcbiAgICBobnl4OiAnOTYyNjYnLFxyXG4gICAgZ2RnZDogJzk2OTU2JyxcclxuICAgIG5vbmU6ICcxMDAwJ1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0UmV0YWlsSWQoKSB7XHJcbiAgICB0cnkgey8v5bm/6KW/5bm/55S1XHJcbiAgICAgICAgaWYgKGd1YW5neGkgJiYgaVBhbmVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXRhaWwuZ3hnZDtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICB0cnkgey8v5rKz5Y2X5pyJ57q/XHJcbiAgICAgICAgdmFyIFN5c3RlbSA9IHdpbmRvdy5TeXN0ZW07XHJcbiAgICAgICAgaWYgKFN5c3RlbSAmJiBTeXN0ZW0uc3RiSUQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJldGFpbC5obnl4O1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHRyeSB7Ly/lub/kuJzlub/nlLVcclxuICAgICAgICBpZiAoQ0EgJiYgU3RvcmFnZVNlcnZpY2UgJiYgRmlsZVN5c3RlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0YWlsLmdkZ2Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdmFyIHN0b3JhZ2VMaXN0ID0gU3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZUluZm9zKCk7XHJcbiAgICAgICAgLy9pZiAoc3RvcmFnZUxpc3QgJiYgc3RvcmFnZUxpc3QgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvLyAgICB2YXIgcGFydGl0aW9uUGF0aExpc3QgPSBzdG9yYWdlTGlzdFswXS5nZXRQYXJ0aXRpb25zSW5mbygpWzBdO1xyXG4gICAgICAgIC8vICAgIHZhciBwYXJ0aXRpb25QYXRoID0gcGFydGl0aW9uUGF0aExpc3QucGF0aDtcclxuICAgICAgICAvLyAgICB2YXIgZGlyID0gRmlsZVN5c3RlbS5nZXREaXJlY3RvcnkocGFydGl0aW9uUGF0aCk7XHJcbiAgICAgICAgLy8gICAgdmFyIGZsaXN0ID0gZGlyLmZpbGVMaXN0O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgZm9yICh2YXIgaSBpbiBmbGlzdCkge1xyXG4gICAgICAgIC8vICAgICAgICBpZiAoZmxpc3RbaV0ubmFtZS5zdWJzdHJpbmcoMCwgNikgPT0gXCJjYWNhcmRcIikge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgdmFyIGNhcmRObyA9IFwiOTY5NTZcIiArIGZsaXN0W2ldLm5hbWUuc3Vic3RyaW5nKDYsIDEyKTtcclxuICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAvL31cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHJldHVybiByZXRhaWwubm9uZTtcclxufVxyXG5cclxudmFyIHJldGFpbElkID0gZ2V0UmV0YWlsSWQoKTtcclxuZXhwb3J0IHtyZXRhaWwsZ2V0UmV0YWlsSWQscmV0YWlsSWR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3JldGFpbC5qcyIsImltcG9ydCB7UmVxdWVzdEJvZHksIFRvb2RvQ2xpZW50fSBmcm9tIFwiLi9fdGRjbGlcIjtcclxuaW1wb3J0IHtyZXRhaWxJZCxyZXRhaWx9IGZyb20gXCIuL19yZXRhaWxcIjtcclxuaW1wb3J0IHtzdGJOdWxsfSBmcm9tIFwiLi9fc3RibnVsbFwiO1xyXG52YXIgbWQ1ID0gcmVxdWlyZSgnbWQ1Jyk7XHJcbnZhciBKU09OID0gcmVxdWlyZSgnSlNPTicpO1xyXG5cclxuZnVuY3Rpb24gU3RiQ2xpZW50KCkge1xyXG4gICAgLy8gdGhpcy5vcmlnaW5VcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy90ZHNydic7XHJcbiAgICB0aGlzLm9yaWdpblVybCA9IFwiaHR0cDovL2xvY2FsaG9zdC9Ub29kb1NlcnZpY2UvcHVibGljL1wiO1xyXG4gICAgdGhpcy5hcHBLZXkgPSAnMTAwMCc7XHJcbiAgICB0aGlzLmFwcFNlY3JldCA9ICdSY09GaHRBWXp3Q0dvOTFQR0hkVic7XHJcbiAgICB0aGlzLl90ZGNsaSA9IG51bGw7XHJcbn1cclxuU3RiQ2xpZW50LnByb3RvdHlwZSA9IHtcclxuICAgIGlzUmVhZHk6IGZhbHNlLFxyXG4gICAgdXNlcklkOiAnJyxcclxuICAgIHRva2VuOiAnJyxcclxuXHJcbiAgICBtZDU6IGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICByZXR1cm4gbWQ1KG1zZyArIHRoaXMuYXBwU2VjcmV0KTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBjYWxsYmFjay5iaXpcclxuICAgICAqL1xyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX3RkY2xpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RkY2xpID0gbmV3IFRvb2RvQ2xpZW50KHRoaXMuYXBwS2V5LCB0aGlzLmFwcFNlY3JldCwgdGhpcy5vcmlnaW5VcmwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRva2VuID0gc3RiTnVsbC5nZXRWYWx1ZSgndG9vZG8udG9rZW4nKTtcclxuICAgICAgICBsZXQgdXNlcklkID0gc3RiTnVsbC5nZXRWYWx1ZSgndG9vZG8udXNlcklkJyk7XHJcbiAgICAgICAgLy8gaWYgKHRva2VuICYmIHVzZXJJZCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRva2VuID0gdG9rZW47XHJcbiAgICAgICAgLy8gICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKDApO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ3JldGFpbElkJzogcmV0YWlsSWQsXHJcbiAgICAgICAgICAgICdyZWdpb25Db2RlJzogc3RiTnVsbC5nZXRSZWdpb25Db2RlKCksXHJcbiAgICAgICAgICAgICdjYXJkVFYnOiBzdGJOdWxsLmdldENhcmRUVigpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdXNlcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcblxyXG4gICAgICAgIGNvbnN0IG93bmVyID0gdGhpcztcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kbycpO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNlbmQoYm9keUluLCBmdW5jdGlvbiAoYm9keU91dCkge1xyXG4gICAgICAgICAgICBpZiAoYm9keU91dC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJpek91dCA9IEpTT04ucGFyc2UoYm9keU91dC5iaXpDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIG93bmVyLnVzZXJJZCA9IGJpek91dC51c2VySWQ7XHJcbiAgICAgICAgICAgICAgICBvd25lci50b2tlbiA9IGJvZHlPdXQudG9rZW47XHJcbiAgICAgICAgICAgICAgICBzdGJOdWxsLnNldFZhbHVlKCd0b29kby51c2VySWQnLCBvd25lci51c2VySWQpO1xyXG4gICAgICAgICAgICAgICAgc3RiTnVsbC5zZXRWYWx1ZSgndG9vZG8udG9rZW4nLCBvd25lci50b2tlbik7XHJcbiAgICAgICAgICAgICAgICBvd25lci5pc1JlYWR5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL293bmVyLnRkZVVzZXIoY2FsbGJhY2spOy8v6L+U5Zue5aSn5Y6F55qE6LSm5Y+35L+h5oGvXHJcbiAgICAgICAgICAgICAgICBvd25lci50ZGVVc2VyKGZ1bmN0aW9uIChjb2RlLCBiaXopIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpei5iaXpVc2VyID0gYml6T3V0LmJpelVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soY29kZSwgYml6KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0LmNvZGUsIGJvZHlPdXQuc3ViQ29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBiaXpVc2VyOiBmdW5jdGlvbiAoYml6SW4sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vYml6VXNlcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8nKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgYWRkV2lubmVyOiBmdW5jdGlvbiAocHJpemVJRCxzdGF0ZSxjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncHJpemVJRCc6cHJpemVJRCxcclxuICAgICAgICAgICAgJ3N0YXRlJzpzdGF0ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9hZGRXaW5uZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICBhZGRTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9hZGRTdGF0ZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0YUZyZWVTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS91cGRhdGFGcmVlU3RhdGUnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluKTtcclxuICAgIH0sXHJcbiAgICBnZXRQcml6ZTogZnVuY3Rpb24gKGlkLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdpZCc6aWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9nZXRQcml6ZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIHR1cm50YWJsZVN0YXRlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvdHVybnRhYmxlU3RhdGUnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIC8vIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgdHVybnRhYmxlUHJvOiBmdW5jdGlvbiAodHlwZSxjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgJ3R5cGUnOnR5cGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS90dXJudGFibGVQcm8nO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgcHJpemVOdW06ZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3R1cm50YWJsZVByaXplTnVtJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuXHJcbiAgICB3aW5uZXJJbmZvOiBmdW5jdGlvbiAobnVtLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdudW0nOiBudW1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS93aW5uZXJJbmZvJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgMe+8muacqumihuWPliAyOuW3sumihuWPliAz77ya5bey6L+H5pyfXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICB1c2VyV2lubmVyOiBmdW5jdGlvbiAodHlwZSxjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAndHlwZSc6IHR5cGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS91c2VyV2lubmVyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgYWRkQ29pbnM6IGZ1bmN0aW9uIChhZGROdW0pIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ2FkZE51bic6IGFkZE51bVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2FkZENvaW4nO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9kdWN0SWQg5p+l6K+i55qE5Lqn5ZOB57uf5LiA57yW5Y+3XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gY2FsbGJhY2suYml6XHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5U2VydmUxOiBmdW5jdGlvbiAocHJvZHVjdElkLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncHJvZHVjdElkJzogcHJvZHVjdElkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby9zZXJ2ZS9xdWVyeTEnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3NlcnZlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2R1Y3RJZCDmn6Xor6LnmoTkuqflk4Hnu5/kuIDnvJblj7dcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpelxyXG4gICAgICovXHJcbiAgICBxdWVyeVByb2R1Y3QxOiBmdW5jdGlvbiAocHJvZHVjdElkLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncHJvZHVjdElkJzogcHJvZHVjdElkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby9tYXJrZXQvcXVlcnkxJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby9tYXJrZXQnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvZHVjdElkIOeUn+aIkOiuouWNleeahOS6p+WTgee7n+S4gOe8luWPt1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNhbGxiYWNrVXJsIOaUr+S7mOWQjuWbnuiwg+WcsOWdgFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEg5Y6f5qC35Lyg5Zue57uZY2FsbGJhY2tVcmxcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpelxyXG4gICAgICovXHJcbiAgICBvcmRlcjE6IGZ1bmN0aW9uIChwcm9kdWN0SWQsIGNhbGxiYWNrVXJsLCBkYXRhLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncHJvZHVjdElkJzogcHJvZHVjdElkLFxyXG4gICAgICAgICAgICAndXNlcklkJzogdGhpcy51c2VySWQsXHJcbiAgICAgICAgICAgICdjYWxsYmFja1VybCc6IGNhbGxiYWNrVXJsLFxyXG4gICAgICAgICAgICAnZGF0YSc6IGRhdGFcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RyYWRlL29yZGVyMSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdHJhZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhZGVObyDor7fmsYLmlK/ku5jorqLljZXlj7dcclxuICAgICAqL1xyXG4gICAgcGF5OiBmdW5jdGlvbiAodHJhZGVObykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAndHJhZGVObyc6IHRyYWRlTm9cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RyYWRlL3BheSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdHJhZGUnKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zdWJtaXQoYm9keUluKTtcclxuICAgIH0sXHJcbiAgICBiaWxsOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90cmFkZS9iaWxsJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RyYWRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpeiDov5Tlm57otKblj7fkv6Hmga9cclxuICAgICAqL1xyXG4gICAgdGRlVXNlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3VzZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIHRkZUxvY2s6IGZ1bmN0aW9uIChvbGRMb2NrLCBuZXdMb2NrLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnY2hpbGRMb2NrJzogb2xkTG9jayxcclxuICAgICAgICAgICAgJ25ld0xvY2snOiBuZXdMb2NrXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvbG9jayc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2Ug6aG16Z2i57yW5Y+3XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnumhtemdouS/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGVQYWdlOiBmdW5jdGlvbiAocGFnZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ3BhZ2UnOiBwYWdlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvcGFnZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhdGVnb3J5IOatjOabsuWIhuexu1xyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpeiDov5Tlm57pobXpnaLkv6Hmga9cclxuICAgICAqL1xyXG4gICAgdGRhU29uZzogZnVuY3Rpb24gKGNhdGVnb3J5LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnY2F0ZWdvcnknOiBjYXRlZ29yeVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL3NvbmcnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICB0ZGFTb25nMTogZnVuY3Rpb24gKHNvbmdJZCwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ3NvbmdJZCc6IHNvbmdJZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL3NvbmcxJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGEnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnumhtemdouS/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGFNYXRjaDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL21hdGNoJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkYVVzZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkYS91c2VyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmQg6K6w5b2VXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnumhtemdouS/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGFSZWNvcmQ6IGZ1bmN0aW9uIChyZWNvcmQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL3JlY29yZCc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShyZWNvcmQpO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVxdWVzdEJvZHl9IGJvZHlJblxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R8bnVtYmVyfHN0cmluZ30gY2FsbGJhY2suYml6IOi/lOWbnuaVsOaNrlxyXG4gICAgICovXHJcbiAgICBzZW5kOiBmdW5jdGlvbiAoYm9keUluLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IG93bmVyID0gdGhpcztcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZW5kKGJvZHlJbiwgZnVuY3Rpb24gKGJvZHlPdXQpIHtcclxuICAgICAgICAgICAgaWYgKGJvZHlPdXQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYml6T3V0ID0gSlNPTi5wYXJzZShib2R5T3V0LmJpekNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvZHlPdXQudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci50b2tlbiA9IGJvZHlPdXQudG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgc3RiTnVsbC5zZXRWYWx1ZSgndG9vZG8udG9rZW4nLCBvd25lci50b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgMSk7ICAgICAgICAgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgXCIxXCIpOyAgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiB0cnVlKTsgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJib29sZWFuXCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2Yge30pOyAgICAgICAgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgW10pOyAgICAgICAgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwib2JqZWN0IFwiXHJcbiAgICAgICAgICAgICAgICAgYWxlcnQodHlwZW9mIGZ1bmN0aW9uKCl7fSk7ICAgICAvLyDov5Tlm57lrZfnrKbkuLJcImZ1bmN0aW9uXCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgbnVsbCk7ICAgICAgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgdW5kZWZpbmVkKTsgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaWYgKGJpek91dCAmJiB0eXBlb2YoYml6T3V0KSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBiaXpPdXQuc3RiY2xpID0gb3duZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQuY29kZSwgYml6T3V0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dC5jb2RlLCBib2R5T3V0LnN1YkNvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxudmFyIHN0YmNsaSA9IG5ldyBTdGJDbGllbnQoKTtcclxuZXhwb3J0IHtTdGJDbGllbnQsc3RiY2xpfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3N0YmNsaS5qcyIsImltcG9ydCB7cmV0YWlsSWQscmV0YWlsfSBmcm9tIFwiLi9fcmV0YWlsXCI7XHJcblxyXG5mdW5jdGlvbiBTdGJOdWxsKCkge1xyXG59XHJcbmlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ3hnZCkgey8vIOW5v+ilv+W5v+eUtSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBTdGJOdWxsLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAvL+iOt+WPluacuumhtuebkuWPt+Wtl+espuS4slxyXG4gICAgICAgIGdldENhcmRUVjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ3Vhbmd4aS5nZXRTdGJOdW0oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v6I635Y+W5Yy65Z+f56CB5bi45pWwXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaVBhbmVsLmdldEdsb2JhbFZhcihcIkdFVF9NRURJQV9SRUdJT05fSURcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpUGFuZWwuZ2V0R2xvYmFsVmFyKGtleU5hbWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYUNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhQ29va2llLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFDcnVtYiA9IGFDb29raWVbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlc2NhcGUoa2V5TmFtZSkgPT0gYUNydW1iWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHVuZXNjYXBlKGFDcnVtYlsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCB8fCByZXN1bHQgPT0gXCIjXCIgfHwgcmVzdWx0ID09IFwiY2xlYXJWYWx1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXlWYWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlWYWx1ZSA9IFwiY2xlYXJWYWx1ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpUGFuZWwuc2V0R2xvYmFsVmFyKGtleU5hbWUsIGtleVZhbHVlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gZXNjYXBlKGtleU5hbWUpICsgXCI9XCIgKyBlc2NhcGUoa2V5VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuaG55eCkgey8vIOays+WNl+aciee6vyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB2YXIgU3lzdGVtID0gd2luZG93LlN5c3RlbTtcclxuICAgIFN0Yk51bGwucHJvdG90eXBlID0ge1xyXG4gICAgICAgIGdldENhcmRUVjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gU3lzdGVtLnN0YklEO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVnaW9uID0gJ2hueXgnO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVnaW9uID0gU3lzdGVtLkdldENBUmVnaW9uSUQoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZWdpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgZyA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBnID0gbmV3IEdsb2JhbChrZXlOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IG5ldyBHbG9iYWwyKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgZyA9IHt2YWx1ZTogbnVsbH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGcudmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBnID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBuZXcgR2xvYmFsKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBnID0gbmV3IEdsb2JhbDIoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZy52YWx1ZSA9IGtleVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0gZWxzZSBpZiAocmV0YWlsSWQgPT0gcmV0YWlsLmdkZ2QpIHsvLyDlub/kuJzlub/nlLUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgU3RiTnVsbC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghQ0EuaWNObykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICc5Njk1NjEwMDg2JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gQ0EuaWNObztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFJlZ2lvbkNvZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIENBLnJlZ2lvbkNvZGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFN5c1NldHRpbmcuZ2V0RW52KGtleU5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lLCBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICBTeXNTZXR0aW5nLnNldEVudihrZXlOYW1lLCBrZXlWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSBlbHNlIHtcclxuICAgIFN0Yk51bGwucHJvdG90eXBlID0ge1xyXG4gICAgICAgIGdldENhcmRUVjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJzEwMDg2JztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFJlZ2lvbkNvZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcwJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGFDb29raWUgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhQ29va2llLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhQ3J1bWIgPSBhQ29va2llW2ldLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChlc2NhcGUoa2V5TmFtZSkgPT0gYUNydW1iWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdW5lc2NhcGUoYUNydW1iWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lLCBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBlc2NhcGUoa2V5TmFtZSkgKyBcIj1cIiArIGVzY2FwZShrZXlWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxudmFyIHN0Yk51bGwgPSBuZXcgU3RiTnVsbCgpO1xyXG5leHBvcnQge1N0Yk51bGwsc3RiTnVsbH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19zdGJudWxsLmpzIiwidmFyIG1kNSA9IHJlcXVpcmUoJ21kNScpO1xyXG52YXIgSlNPTiA9IHJlcXVpcmUoJ0pTT04nKTtcclxuXHJcbmlmICghRGF0ZS5wcm90b3R5cGUuZm9ybWF0KSB7XHJcbiAgICBEYXRlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoZm10KSB7XHJcbiAgICAgICAgY29uc3QgbyA9IHtcclxuICAgICAgICAgICAgXCJNK1wiOiB0aGlzLmdldE1vbnRoKCkgKyAxLCAgICAgICAgICAgICAgICAgLy/mnIjku71cclxuICAgICAgICAgICAgXCJkK1wiOiB0aGlzLmdldERhdGUoKSwgICAgICAgICAgICAgICAgICAgIC8v5pelXHJcbiAgICAgICAgICAgIFwiaCtcIjogdGhpcy5nZXRIb3VycygpLCAgICAgICAgICAgICAgICAgICAvL+Wwj+aXtlxyXG4gICAgICAgICAgICBcIm0rXCI6IHRoaXMuZ2V0TWludXRlcygpLCAgICAgICAgICAgICAgICAgLy/liIZcclxuICAgICAgICAgICAgXCJzK1wiOiB0aGlzLmdldFNlY29uZHMoKSwgICAgICAgICAgICAgICAgIC8v56eSXHJcbiAgICAgICAgICAgIFwicStcIjogTWF0aC5mbG9vcigodGhpcy5nZXRNb250aCgpICsgMykgLyAzKSwgLy/lraPluqZcclxuICAgICAgICAgICAgXCJTXCI6IHRoaXMuZ2V0TWlsbGlzZWNvbmRzKCkgICAgICAgICAgICAgLy/mr6vnp5JcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICgvKHkrKS8udGVzdChmbXQpKSB7XHJcbiAgICAgICAgICAgIGZtdCA9IGZtdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKHRoaXMuZ2V0RnVsbFllYXIoKSArIFwiXCIpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBrIGluIG8pIHtcclxuICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAoXCIoXCIgKyBrICsgXCIpXCIpLnRlc3QoZm10KSkge1xyXG4gICAgICAgICAgICAgICAgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoUmVnRXhwLiQxLmxlbmd0aCA9PSAxKSA/IChvW2tdKSA6ICgoXCIwMFwiICsgb1trXSkuc3Vic3RyKChcIlwiICsgb1trXSkubGVuZ3RoKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmbXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXF1ZXN0Qm9keSgpIHtcclxuICAgIHRoaXMuYXBwSWQgPSAnJzsgICAgICAgICAgICAgICAvLyDliIbphY3nu5nlvIDlj5HogIXnmoTlupTnlKhJRDoxMDAwXHJcbiAgICB0aGlzLm1ldGhvZCA9ICcnOyAgICAgICAgICAgICAgLy8g5o6l5Y+j5ZCN56ewOnRvb2RvLnRyYWRlLnBheVxyXG4gICAgdGhpcy5mb3JtYXQgPSAnSlNPTic7ICAgICAgICAgIC8vIOS7heaUr+aMgUpTT05cclxuICAgIHRoaXMuY2hhcnNldCA9ICd1dGYtOCc7ICAgICAgICAvLyDor7fmsYLkvb/nlKjnmoTnvJbnoIHmoLzlvI/vvIzlpoJ1dGYtOCxnYmssZ2IyMzEy562JXHJcbiAgICB0aGlzLnNpZ25UeXBlID0gJ01ENSc7ICAgICAgICAgLy8g5ZWG5oi355Sf5oiQ562+5ZCN5a2X56ym5Liy5omA5L2/55So55qE562+5ZCN566X5rOV57G75Z6LOlJTQeOAgU1ENVxyXG4gICAgdGhpcy5zaWduQ29kZSA9ICcnOyAgICAgICAgICAgIC8vIOWVhuaIt+ivt+axguWPguaVsOeahOetvuWQjeS4siAzMuS9jeWwj+WGmVxyXG4gICAgdGhpcy50aW1lc3RhbXAgPSAnJzsgICAgICAgICAgIC8vIOWPkemAgeivt+axgueahOaXtumXtO+8jOagvOW8j1wieXl5eS1NTS1kZCBISDptbTpzc1wiOjIwMTQtMDctMjQgMDM6MDc6NTBcclxuICAgIHRoaXMudmVyc2lvbiA9ICcxLjAnOyAgICAgICAgICAvLyDosIPnlKjnmoTmjqXlj6PniYjmnKzvvIzlm7rlrprkuLrvvJoxLjBcclxuICAgIHRoaXMuYXBwQXV0aFRva2VuID0gJyc7ICAgICAgICAvLyDlupTnlKjmjojmnYPnoIFcclxuICAgIHRoaXMuYml6Q29udGVudCA9ICcnOyAgICAgICAgICAvLyDkuJrliqHlj4LmlbDpm4blkIjvvIzmnIDlpKfplb/luqbkuI3pmZDvvIzpmaTlhazlhbHlj4LmlbDlpJbmiYDmnInor7fmsYLlj4LmlbDpg73lv4XpobvmlL7lnKjov5nkuKrlj4LmlbDkuK3kvKDpgJLvvIzlhbfkvZPlj4LnhaflkITkuqflk4Hlv6vpgJ/mjqXlhaXmlofmoaNcclxufVxyXG5SZXF1ZXN0Qm9keS5wcm90b3R5cGUgPSB7XHJcbiAgICBwYXJzZTogZnVuY3Rpb24gKGpzb24pIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5wYXJzZShqc29uKTtcclxuICAgICAgICB0aGlzLmFwcElkID0gYm9keS5hcHBJZDtcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IGJvZHkubWV0aG9kO1xyXG4gICAgICAgIHRoaXMuZm9ybWF0ID0gYm9keS5mb3JtYXQ7XHJcbiAgICAgICAgdGhpcy5jaGFyc2V0ID0gYm9keS5jaGFyc2V0O1xyXG4gICAgICAgIHRoaXMuc2lnblR5cGUgPSBib2R5LnNpZ25UeXBlO1xyXG4gICAgICAgIHRoaXMuc2lnbkNvZGUgPSBib2R5LnNpZ25Db2RlO1xyXG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gYm9keS50aW1lc3RhbXA7XHJcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gYm9keS52ZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuYXBwQXV0aFRva2VuID0gYm9keS5hcHBBdXRoVG9rZW47XHJcbiAgICAgICAgdGhpcy5iaXpDb250ZW50ID0gYm9keS5iaXpDb250ZW50O1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlc3BvbnNlQm9keSgpIHtcclxuICAgIHRoaXMuY29kZSA9IDA7ICAgICAgIC8vIOe9keWFs+i/lOWbnueggVxyXG4gICAgdGhpcy5tc2cgPSAn6LCD55So5oiQ5YqfJzsgLy8g572R5YWz6L+U5Zue56CB5o+P6L+wXHJcbiAgICB0aGlzLnN1YkNvZGUgPSAnJzsgICAvLyDkuJrliqHov5Tlm57noIEs6K+m6KeB5paH5qGjOnh4eHhcclxuICAgIHRoaXMuc3ViTXNnID0gJyc7ICAgIC8vIOS4muWKoei/lOWbnueggeaPj+i/sCzor6bop4HmlofmoaM65Lqk5piT5bey6KKr5pSv5LuYXHJcbiAgICB0aGlzLnRpbWVzdGFtcCA9ICcnOyAvLyDlupTnrZTnmoTml7bpl7RcclxuICAgIHRoaXMuc2lnbiA9ICcnOyAgICAgIC8vIOetvuWQjSzor6bop4HmlofmoaMgMzLkvY3lsI/lhplcclxuICAgIHRoaXMuYml6Q29udGVudCA9ICcnOy8vIOS4muWKoeWPguaVsOmbhuWQiO+8jOacgOWkp+mVv+W6puS4jemZkO+8jOmZpOWFrOWFseWPguaVsOWkluaJgOaciei/lOWbnuWPguaVsOmDveW/hemhu+aUvuWcqOi/meS4quWPguaVsOS4reS8oOmAku+8jOWFt+S9k+WPgueFp+WQhOS6p+WTgeW/q+mAn+aOpeWFpeaWh+aho1xyXG4gICAgdGhpcy50b2tlbiA9ICcnOyAgICAgLy8g5pu05paw5ZCO55qE5o6I5p2D56CBLOS4uuepuuWImeS4jeabtOaWsFxyXG59XHJcblJlc3BvbnNlQm9keS5wcm90b3R5cGUgPSB7XHJcbiAgICBwYXJzZTogZnVuY3Rpb24gKGpzb24pIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5wYXJzZShqc29uKTtcclxuICAgICAgICB0aGlzLmNvZGUgPSBib2R5LmNvZGU7XHJcbiAgICAgICAgdGhpcy5tc2cgPSBib2R5Lm1zZztcclxuICAgICAgICB0aGlzLnN1YkNvZGUgPSBib2R5LnN1YkNvZGU7XHJcbiAgICAgICAgdGhpcy5zdWJNc2cgPSBib2R5LnN1Yk1zZztcclxuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IGJvZHkudGltZXN0YW1wO1xyXG4gICAgICAgIHRoaXMuc2lnbiA9IGJvZHkuc2lnbjtcclxuICAgICAgICB0aGlzLmJpekNvbnRlbnQgPSBib2R5LmJpekNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy50b2tlbiA9IGJvZHkudG9rZW47XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVG9vZG9DbGllbnQoYXBwSWQsIGFwcFNlY3JldCwgYXBpVXJsKSB7XHJcbiAgICB0aGlzLnN0YXJ0KGFwcElkLCBhcHBTZWNyZXQsIGFwaVVybCk7XHJcbiAgICB0aGlzLmlzQnVzeSA9IGZhbHNlO1xyXG59XHJcblxyXG5Ub29kb0NsaWVudC5wcm90b3R5cGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBJZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcFNlY3JldFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwaVVybFxyXG4gICAgICovXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKGFwcElkLCBhcHBTZWNyZXQsIGFwaVVybCkge1xyXG4gICAgICAgIHRoaXMuYXBwSWQgPSBhcHBJZDtcclxuICAgICAgICB0aGlzLmFwcFNlY3JldCA9IGFwcFNlY3JldDtcclxuICAgICAgICB0aGlzLmFwaVVybCA9IGFwaVVybDtcclxuICAgICAgICB0aGlzLnRva2VuID0gJyc7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3RCb2R5fSBib2R5SW5cclxuICAgICAqL1xyXG4gICAgc2lnbkNvZGVJbjogZnVuY3Rpb24gKGJvZHlJbikge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9ICcnICtcclxuICAgICAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiArXHJcbiAgICAgICAgICAgIGJvZHlJbi5hcHBJZCArXHJcbiAgICAgICAgICAgIGJvZHlJbi5iaXpDb250ZW50ICtcclxuICAgICAgICAgICAgYm9keUluLmNoYXJzZXQgK1xyXG4gICAgICAgICAgICBib2R5SW4uZm9ybWF0ICtcclxuICAgICAgICAgICAgYm9keUluLm1ldGhvZCArXHJcbiAgICAgICAgICAgIGJvZHlJbi50aW1lc3RhbXAgK1xyXG4gICAgICAgICAgICBib2R5SW4udmVyc2lvbiArXHJcbiAgICAgICAgICAgIHRoaXMuYXBwU2VjcmV0O1xyXG4gICAgICAgIHJldHVybiBtZDUoc3RyKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2VCb2R5fSBib2R5T3V0XHJcbiAgICAgKi9cclxuICAgIHNpZ25Db2RlT3V0OiBmdW5jdGlvbiAoYm9keU91dCkge1xyXG4gICAgICAgIGlmKGJvZHlPdXQudG9rZW49PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGJvZHlPdXQudG9rZW49XCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RyID0gJycgK1xyXG4gICAgICAgICAgICBib2R5T3V0LmJpekNvbnRlbnQgK1xyXG4gICAgICAgICAgICBib2R5T3V0LmNvZGUgK1xyXG4gICAgICAgICAgICBib2R5T3V0Lm1zZyArXHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSArXHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnICtcclxuICAgICAgICAgICAgYm9keU91dC50aW1lc3RhbXAgK1xyXG4gICAgICAgICAgICBib2R5T3V0LnRva2VuICtcclxuICAgICAgICAgICAgdGhpcy5hcHBTZWNyZXQ7XHJcbiAgICAgICAgcmV0dXJuIG1kNShzdHIpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwaVVybFxyXG4gICAgICovXHJcbiAgICBzZXRBcGlVcmw6IGZ1bmN0aW9uIChhcGlVcmwpIHtcclxuICAgICAgICB0aGlzLmFwaVVybCA9IGFwaVVybDtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVxdWVzdEJvZHl9IGJvZHlJblxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2VCb2R5fSBjYWxsYmFjay5ib2R5T3V0XHJcbiAgICAgKi9cclxuICAgIHNlbmQ6IGZ1bmN0aW9uIChib2R5SW4sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keU91dCA9IG5ldyBSZXNwb25zZUJvZHkoKTtcclxuICAgICAgICBpZiAoIVhNTEh0dHBSZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICBib2R5T3V0Lm1zZyA9ICflrqLmiLfnq6/plJnor68nO1xyXG4gICAgICAgICAgICBib2R5T3V0LnN1YkNvZGUgPSAnMTA1JztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAnWE1MSHR0cFJlcXVlc3Tlr7nosaHkuI3lrZjlnKgnO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0J1c3kpIHtcclxuICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSA9ICc5OSc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnID0gJ+W+iOW/meWTpu+8jOivt+axgumYn+WIl+W3sua7oSc7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNCdXN5ID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIGlmIChib2R5SW4uYXBwQXV0aFRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSBib2R5SW4uYXBwQXV0aFRva2VuO1xyXG4gICAgICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBib2R5SW4uYXBwSWQgPSB0aGlzLmFwcElkO1xyXG4gICAgICAgIGJvZHlJbi50aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmZvcm1hdChcInl5eXktTU0tZGQgaGg6bW06c3NcIik7XHJcbiAgICAgICAgYm9keUluLnNpZ25Db2RlID0gdGhpcy5zaWduQ29kZUluKGJvZHlJbik7XHJcblxyXG4gICAgICAgIGNvbnN0IHhtbCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIGNvbnN0IG93bmVyID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB4bWwuYWJvcnQoKTtcclxuICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSA9ICcxMDMnO1xyXG4gICAgICAgICAgICBib2R5T3V0LnN1Yk1zZyA9ICfor7fmsYLotoXml7YnO1xyXG5cclxuICAgICAgICAgICAgb3duZXIuaXNCdXN5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dCk7XHJcbiAgICAgICAgfSwgMTAwMDApO1xyXG5cclxuICAgICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeG1sLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZVRpbWVvdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh4bWwuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQucGFyc2UoeG1sLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2R5T3V0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWQ1ID0gb3duZXIuc2lnbkNvZGVPdXQoYm9keU91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWQ1ICE9IGJvZHlPdXQuc2lnbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzEwMic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn6L+U5Zue57uT5p6c562+5ZCN5Ye66ZSZJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib2R5T3V0LnRpbWVzdGFtcCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuc2lnbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuYml6Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQudG9rZW4gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHlPdXQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keU91dC50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnRva2VuID0gYm9keU91dC50b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzEwMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnID0gJ+i/lOWbnue7k+aenOW8guW4uCBlcnI6JyArIGVycjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICBib2R5T3V0Lm1zZyA9ICflrqLmiLfnq6/plJnor68nO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSA9ICcxMDQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnID0gJ+ivt+axgui/lOWbnumUmeivryc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb3duZXIuaXNCdXN5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB0b2tlblVybCA9IHRoaXMuYXBpVXJsICsgJz90b2tlbj0nICsgdGhpcy50b2tlbjtcclxuICAgICAgICB4bWwub3BlbignUE9TVCcsIHRva2VuVXJsLCB0cnVlKTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnKTtcclxuICAgICAgICB4bWwuc2VuZChKU09OLnN0cmluZ2lmeShib2R5SW4pKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVxdWVzdEJvZHl9IGJvZHlJblxyXG4gICAgICovXHJcbiAgICBzdWJtaXQ6IGZ1bmN0aW9uIChib2R5SW4pIHtcclxuICAgICAgICBib2R5SW4uYXBwSWQgPSB0aGlzLmFwcElkO1xyXG4gICAgICAgIGJvZHlJbi50aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmZvcm1hdChcInl5eXktTU0tZGQgaGg6bW06c3NcIik7XHJcbiAgICAgICAgYm9keUluLnNpZ25Db2RlID0gdGhpcy5zaWduQ29kZUluKGJvZHlJbik7XHJcblxyXG4gICAgICAgIGNvbnN0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGYpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYm9keUluKSB7XHJcbiAgICAgICAgICAgIC8vbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGJvZHlJbltrZXldKSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBlaS50eXBlID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIGVpLm5hbWUgPSBrZXk7XHJcbiAgICAgICAgICAgIC8vbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxyXG4gICAgICAgICAgICBlaS52YWx1ZSA9IGJvZHlJbltrZXldO1xyXG4gICAgICAgICAgICBmLmFwcGVuZENoaWxkKGVpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGYubWV0aG9kID0gJ3Bvc3QnO1xyXG4gICAgICAgIGYuYWN0aW9uID0gdGhpcy5hcGlVcmw7XHJcbiAgICAgICAgZi5zdWJtaXQoKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGYpO1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL190ZGNsaS5qcyIsImltcG9ydCB7Z2V0RXZlbnQsZ2V0S2V5LGdldEtleUNvZGVzfSBmcm9tICcuL3Rvb2RvL19rZXljb2Rlcyc7XHJcbmltcG9ydCB7cGFnZVVybH0gZnJvbSAnLi9hcHAvUGFnZVVybCc7XHJcblxyXG5cclxudmFyIGFyZ3MgPSBwYWdlVXJsLnBhcnNlUXVlcnkod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaXoxJykuaW5uZXJIVE1MID0gYXJncy5yZXR1cm5VUkw7XHJcblxyXG52YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbmRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIga2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIGtleUNvZGUubnVtMTpcclxuICAgICAgICAgICAgdmFyIHVybCA9IFwiaHR0cDovLzE5Mi4xNjguMjAwLjEwMC9ubl92b2QudHM/aWQ9NDM1NWUzMGVjYmFhZDJiY2NkYzMzMjAwNGY5MDU2NzVcIjtcclxuICAgICAgICAgICAgaVBhbmVsLnNldEdsb2JhbFZhcihcIlZPRF9DVFJMX0xPQ0FUSU9OXCIsIFwieD0wJnk9MCZ3PTEyODAmaD03MjBcIik7XHJcbiAgICAgICAgICAgIGlQYW5lbC5zZXRHbG9iYWxWYXIoXCJWT0RfQ1RSTF9FTkFCTEVfTUVOVVwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgIGlQYW5lbC5zZXRHbG9iYWxWYXIoXCJWT0RfQ1RSTF9VUkxcIiwgdXJsKTtcclxuICAgICAgICAgICAgaVBhbmVsLnNldEdsb2JhbFZhcihcIlZPRF9DVFJMX1BMQVlcIiwgXCIxXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGtleUNvZGUubnVtMjpcclxuICAgICAgICAgICAgaVBhbmVsLnNldEdsb2JhbFZhcihcIlZPRF9DVFJMX1NUT1BcIiwgXCIwXCIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGtleUNvZGUubnVtMDpcclxuICAgICAgICAgICAgaVBhbmVsLnNldEdsb2JhbFZhcihcIlZPRF9DVFJMX1NUT1BcIiwgXCIxXCIpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFyZ3MucmV0dXJuVVJMO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gVk9EX1BMQVlfU1RBVFVTIOiOt+WPluinhumikeaSreaUvueKtuaAge+8jOiOt+WPluaIkOWKn++8jOi/lOWbnuaSreaUvueKtuaAge+8jOWksei0pe+8jCDov5Tlm54j44CCXHJcbiDmkq3mlL7nirbmgIHvvJpcclxuIOi/lOWbni0z77ya572R57uc6L+e5o6l5byC5bi477ybXHJcbiDov5Tlm54tMu+8mui1hOa6kOe5geW/me+8jOaSreaUvuWksei0pe+8m1xyXG4g6L+U5ZueLTHvvJrmnI3liqHlmajlvILluLjvvIzmkq3mlL7lpLHotKXvvJtcclxuIOi/lOWbniAw77ya5YGc5q2i5pKt5pS+77ybXHJcbiDov5Tlm54gMe+8muW8gOWni+aSreaUvu+8m1xyXG4g6L+U5ZueIDLvvJrlkIzmraXmkq3mlL7vvJtcclxuIOi/lOWbniAz77ya5pKt5pS+57uT5p2f77ybXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdGF0dXMoKSB7XHJcbiAgICByZXR1cm4gaVBhbmVsLmdldEdsb2JhbFZhcihcIlZPRF9QTEFZX1NUQVRVU1wiKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdmlkZW8uanMiXSwic291cmNlUm9vdCI6IiJ9