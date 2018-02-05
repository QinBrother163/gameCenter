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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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

/***/ "./resources/assets/js/TurntablePage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurntablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[264, 386], [264, 386], [264, 386], [264, 386]];
function TurntablePage() {
    document.body.style.background = 'url(img/turntable/bg.jpg) no-repeat';
    this.layout = document.getElementById('turntable-page');
    this.items = [];
    this.focusItems = [];
    //转盘
    for (var i = 0; i < 6; ++i) {
        var node = this.layout.querySelector('#turntable-item' + i);
        // this.items.push(node);
        var div = node.querySelector('div');
        this.focusItems.push(div);
        setTimeout(function (i, node) {
            var img = node.querySelector('img');
            img.src = 'img/turntable/prize' + i + '.png';
        }, 100 * i, i, node);
    }
    this.imglist = document.getElementById("turntable-pointer").querySelectorAll('img');
    this.imglist[0].src = 'img/turntable/btn.png';
    this.imglist[1].src = 'img/turntable/btn0.png';

    //focus
    this.items.push(this.imglist[0]);
    this.items.push(document.getElementById("prize-btn"));
}
TurntablePage.prototype = {
    /**
     * {int} current [0,3]
     */
    current: 0,
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
        if (focus) {
            switch (current) {
                case 0:
                    node.src = 'img/turntable/btn-focus.png';
                    break;
                case 1:
                    node.className = "prize-btn-focus";
                    break;
            }
        } else {
            switch (current) {
                case 0:
                    node.src = 'img/turntable/btn.png';
                    break;
                case 1:
                    node.className = "prize-btn";
                    break;
            }
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
                switch (owner.current) {}
                break;
            case keyCode.right:
                switch (owner.current) {}
                break;
            case keyCode.down:
                switch (owner.current) {
                    // case 0:
                    // case 1:
                    // case 2:
                    //     owner.current++;
                    //     owner.setSelected(owner.current);
                    //     break;
                    case 0:
                        owner.current++;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    // case 0:
                    // case 1:
                    // case 2:
                    //     owner.current++;
                    //     owner.setSelected(owner.current);
                    //     break;
                    case 1:
                        owner.current--;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
        }

        if (typeof owner.onKeyDown === 'function') owner.onKeyDown(curKey);
    }

};



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

/***/ "./resources/assets/js/app/againDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showAgainDialog; });
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
function showAgainDialog() /*callback, btn, title, text, btn0, btn1*/{
    var layoutId = 'dialog-layout';
    var callback = void 0,
        btn = void 0,
        title = void 0,
        text = void 0,
        btn0 = void 0,
        btn1 = void 0;
    callback = arguments[0] ? arguments[0] : null;
    btn = 0;
    btn0 = '再抽一次';
    var layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement("div");
        layout.className = 'dialog-layout';
        layout.id = layoutId;
        layout.innerHTML = '<div class="Againdialog-bg">' + '<div class="again-img"></div>' + '    <div class="Againdialog-text"><p>获得<span>\"再抽一次\"</span>机会!</p></div>' + '    <div id="dialog-btn0" style="left: 30%;top: 68%" class="OrderdialogBtn_1"></div>' + '</div>';
        document.body.appendChild(layout);
    }
    layout.style.display = "block";

    var background = layout.querySelector('.Againdialog-bg');
    background.style.display = "block";

    var nodeBtn0 = background.querySelector('#dialog-btn0');
    nodeBtn0.innerHTML = btn0 + '<div></div>';

    var btn_006 = nodeBtn0.querySelector("div");

    var focusBtn = function focusBtn(btnIdx) {
        if (btnIdx == 0) {
            nodeBtn0.className = " " + "OrderdialogBtn_1 Orderdialog-Btn_focus";
        }
        // if (btnIdx == 1) {
        //     nodeBtn0.className = " " + "OrderdialogBtn_0";
        // }
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
                // focusBtn(0);
                break;
            case keyCode.right:
                // focusBtn(1);
                break;
            case keyCode.ok:
                //确定
                submit = true;
                break;
            case keyCode.back:
            case keyCode.num0:
                //取消
                btn = 0;
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

/***/ "./resources/assets/js/app/dialogBigAd.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showAd16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showAd29; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");


function showAd16(callback, btn) {
    var layoutId = 'big-ad-16';

    var layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement("div");
        layout.className = 'big-ad-16';
        layout.id = layoutId;
        layout.innerHTML = '<div id="big-ad-16-btn-0"></div>' + '<div id="big-ad-16-btn-1"></div>';
        document.body.appendChild(layout);
    }
    layout.style.display = "block";

    var btn0 = layout.querySelector('#big-ad-16-btn-0');
    var btn1 = layout.querySelector('#big-ad-16-btn-1');

    var focusBtn = function focusBtn(btnIdx) {
        if (btnIdx == 0) {
            btn0.style.display = 'block';
            btn1.style.display = 'none';
        }
        if (btnIdx == 1) {
            btn0.style.display = 'none';
            btn1.style.display = 'block';
        }
        btn = btnIdx;
    };

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

            document.onkeydown = null;
            if (typeof callback === 'function') callback(btn);
        }
    };
}

function showAd29(callback, btn, ad) {
    var layoutId = 'big-ad-29';

    var layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement("div");
        layout.id = layoutId;
        layout.innerHTML = '<div id="big-ad-btn-0" class="big-ad-btn-0-focus"></div>' + '<div id="big-ad-btn-1" class="big-ad-btn-1"></div>';
        document.body.appendChild(layout);
    }
    layout.className = 'big-ad-' + ad;
    layout.style.display = "block";

    var btn0 = layout.querySelector('#big-ad-btn-0');
    var btn1 = layout.querySelector('#big-ad-btn-1');

    var focusBtn = function focusBtn(btnIdx) {
        if (btnIdx == 0) {
            btn0.className = 'big-ad-btn-0-focus';
            btn1.className = 'big-ad-btn-1';
        }
        if (btnIdx == 1) {
            btn0.className = 'big-ad-btn-0';
            btn1.className = 'big-ad-btn-1-focus';
        }
        btn = btnIdx;
    };

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

/***/ "./resources/assets/js/app/orderDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showOrderDialog; });
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
function showOrderDialog() /*callback, btn, title, text, btn0, btn1*/{
    var layoutId = 'dialog-layout';
    var callback = void 0,
        btn = void 0,
        title = void 0,
        text = void 0,
        btn0 = void 0,
        btn1 = void 0;
    callback = arguments[0] ? arguments[0] : null;
    btn = 0;
    btn0 = '确定';
    btn1 = '取消';
    var layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement("div");
        layout.className = 'dialog-layout';
        layout.id = layoutId;
        layout.innerHTML = '<div class="Orderdialog-bg">' + '    <div class="Orderdialog-text"><p>是否在线订购<span>\"体感热舞\"</span>包月?</p></div>' + '    <div id="dialog-btn0" style="left: 12%;top: 68%" class="OrderdialogBtn_1"></div>' + '    <div id="dialog-btn1" style="left: 57%;top: 68%" class="OrderdialogBtn_0"></div>' + '</div>';
        document.body.appendChild(layout);
    }
    layout.style.display = "block";

    var background = layout.querySelector('.Orderdialog-bg');
    background.style.display = "block";

    // var nodeTitle = background.querySelector('.dialog-title');
    // nodeTitle.innerHTML = title;
    // var nodeText = background.querySelector('.dialog-text');
    // nodeText.innerHTML = text;
    // nodeText.style.textAlign = align;

    var nodeBtn0 = background.querySelector('#dialog-btn0');
    nodeBtn0.innerHTML = btn0 + '<div></div>';
    var nodeBtn1 = background.querySelector('#dialog-btn1');
    nodeBtn1.innerHTML = btn1 + '<div></div>';

    var btn_006 = nodeBtn0.querySelector("div");
    var btn_006none = nodeBtn1.querySelector("div");

    var focusBtn = function focusBtn(btnIdx) {
        if (btnIdx == 0) {
            nodeBtn0.className = " " + "OrderdialogBtn_1 Orderdialog-Btn_focus";
            nodeBtn1.className = " " + "OrderdialogBtn_0";
        }
        if (btnIdx == 1) {

            nodeBtn0.className = " " + "OrderdialogBtn_0";
            nodeBtn1.className = " " + "OrderdialogBtn_1 Orderdialog-Btn_focus";
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

/***/ "./resources/assets/js/app/receiveDialog.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showReceiveDialog; });
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
function showReceiveDialog() /*callback, btn,, btn0, btn1, prize*/{
    var layoutId = 'dialog-layout';
    var callback = void 0,
        btn = void 0,
        title = void 0,
        text = void 0,
        btn0 = void 0,
        btn1 = void 0,
        prize = void 0,
        prizeImg = void 0,
        prizeName = void 0;
    callback = arguments[0] ? arguments[0] : null;
    // btn = arguments[1] ? arguments[1] : 0;
    // btn0 = arguments[2] ? arguments[2] : '领取奖品';
    // btn1 = arguments[3] ? arguments[3] : '跳过';
    prize = arguments[1] ? arguments[1] : 6;
    btn0 = '领取奖品';
    btn1 = '跳过';
    btn = 0;
    switch (prize) {
        case 0:
            prizeName = "经典游戏掌机";
            break;
        case 1:
            prizeName = "数码平板电脑";
            break;
        case 2:
            prizeName = "高清摄像头";
            break;
        case 3:
            prizeName = "游戏币50F";
            break;
        case 4:
            prizeName = "体感跳舞毯";
            break;
        case 5:
            prizeName = "数码摄像机";
            break;
        default:
            prizeName = "服务器出错啦！！！";
            break;
    }
    if (prize < 6) {
        prizeImg = "img/turntable/thing" + prize + ".png";
    }
    var align = arguments[6] ? arguments[6] : 'center';

    var layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement("div");
        layout.className = 'dialog-layout';
        layout.id = layoutId;
        layout.innerHTML = '<div class="receiveDialog-bg">' + '    <div class="receiveDialog-title"></div>' + '    <div class="receiveDialog-text"></div>' + '    <div id="dialog-btn0" class="receiveDialog-btn receiveDialog-btn0"></div>' + '    <div id="dialog-btn1" class="receiveDialog-btn receiveDialog-btn1"></div>' + '</div>';
        document.body.appendChild(layout);
    }
    layout.style.display = "block";

    var background = layout.querySelector('.receiveDialog-bg');
    background.style.display = "block";

    var nodeTitle = background.querySelector('.receiveDialog-title');
    nodeTitle.innerHTML = "<img src='img/turntable/dialogText.png' >";
    var nodeText = background.querySelector('.receiveDialog-text');
    nodeText.innerHTML = '<p class="prize-txt">抽中 "<span class="receiveDialog-prize"></span>"是否立即领取？</p>' + '<div class="prizeImg">' + '<img class="prize_Img" src="">' + '</div>';

    var nodePrize = background.querySelector('.receiveDialog-prize');
    nodePrize.innerHTML = prizeName;

    var prize_Img = background.querySelector('.prize_Img');
    prize_Img.src = prizeImg;

    var nodeBtn0 = background.querySelector('#dialog-btn0');
    nodeBtn0.innerHTML = btn0 + '<div></div>';
    var nodeBtn1 = background.querySelector('#dialog-btn1');
    nodeBtn1.innerHTML = btn1 + '<div></div>';

    var btn_006 = nodeBtn0.querySelector("div");
    var btn_006none = nodeBtn1.querySelector("div");

    nodeBtn0.style.color = "#000";
    nodeBtn1.style.color = "red";

    var focusBtn = function focusBtn(btnIdx) {
        if (btnIdx == 0) {
            nodeBtn0.style.color = "#000";
            nodeBtn1.style.color = "red";
            nodeBtn0.className = " " + "receiveDialogBtn_1";
            nodeBtn1.className = " " + "receiveDialogBtn_0";
            // btn_006.className = "dialogBtn_006";
            // btn_006none.className = "none";
        }
        if (btnIdx == 1) {
            nodeBtn0.style.color = "red";
            nodeBtn1.style.color = "#000";
            nodeBtn0.className = " " + "receiveDialogBtn_0";
            nodeBtn1.className = " " + "receiveDialogBtn_1";
            // btn_006.className = "none";
            // btn_006none.className = "dialogBtn_006";
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

/***/ "./resources/assets/js/roll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Roll; });
var config = {
    "pinIndex": 0, //滚动的起点
    "speed": 200, //滚动的速度
    "cycle": 0, //滚动的圈数
    "fastCycle": 5, //快速滚动圈数
    "rollResult": 4 //抽奖的结果
};
var Roll = function Roll() {
    var self = this;
    self.config = config;
    self.pinIndex = '';
    self.stopIndex = '';
    self.isRolling = false;
    self.timer = null;
    self.rollList = '';
    self.rollIndex = 0;
    self.callback = "";
};

Roll.prototype = {
    init: function init(rollResult, rollList) {
        var self = this;
        self.pinIndex = 0;
        self.speed = 300;
        self.cycle = 0;
        self.fastCycle = 2;
        self.rollList = rollList;
        self.rollResult = rollResult;
        self.stopIndex = self.rollResult;
    },
    start: function start(callback) {
        this.rollPre();
        this.callback = callback;
    },
    rollPre: function rollPre() {
        var self = this;
        if (!self.isRolling) {
            for (var i = 0; i < self.rollList.length; i++) {
                if (i == self.pinIndex) {
                    self.rollList[self.pinIndex].style.display = "block";
                } else {
                    self.rollList[i].style.display = "none";
                }
            }
            // self.rollList.eq(self.ops.pinIndex).show().siblings().hide();
            this.rollStart(self); // 开始启动转盘
        }
    },
    rollGoNext: function rollGoNext(self) {
        self.rollIndex += 1;
        if (self.rollIndex > self.rollList.length) {
            self.rollIndex = 0;
            self.cycle++;
        }
        // self.rollList.eq(self.rollIndex).show().siblings().hide();
        for (var i = 0; i < self.rollList.length; i++) {
            if (i == self.rollIndex) {
                self.rollList[self.rollIndex].style.display = "block";
            } else {
                self.rollList[i].style.display = "none";
            }
        }
    },
    rollStop: function rollStop(self) {
        clearInterval(self.timer);
        (function stopGoNext() {
            if (self.rollIndex !== self.stopIndex) {
                self.rollGoNext(self);
                setTimeout(function () {
                    stopGoNext();
                }, 300);
            } else {
                self.isRolling = false;
                self.cycle = 0;
                self.rollIndex = 0;
                if (self.callback != null) {
                    self.callback(self.rollResult);
                }
                document.getElementById("turntable-text").src = "img/turntable/btn1.png";
            }
        })();
    },
    rollStart: function rollStart(self) {
        self.isRolling = true;
        self.timer = setInterval(function () {
            self.rollGoNext(self);
            if (self.rollIndex == 5) {
                clearInterval(self.timer);
                self.speed = 20;
                self.timer = setInterval(function () {
                    self.rollGoNext(self);
                    if (self.cycle >= 5) {
                        clearInterval(self.timer);
                        self.speed = 200;
                        self.timer = setInterval(function () {
                            if (self.cycle === 6) {
                                self.rollStop(self);
                            } else {
                                self.rollGoNext(self);
                            }
                        }, self.speed);
                    }
                }, self.speed);
            }
        }, self.speed);
    }
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

/***/ "./resources/assets/js/turnTableBill.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillTable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_dialog__ = __webpack_require__("./resources/assets/js/app/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TurntablePage__ = __webpack_require__("./resources/assets/js/TurntablePage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_loading__ = __webpack_require__("./resources/assets/js/app/loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_receiveDialog__ = __webpack_require__("./resources/assets/js/app/receiveDialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_orderDialog__ = __webpack_require__("./resources/assets/js/app/orderDialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__turntable__ = __webpack_require__("./resources/assets/js/turntable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_PageArgs__ = __webpack_require__("./resources/assets/js/app/PageArgs.js");








var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var pageSize = 6;
var itemSize = [50, 117, 185, 253, 318, 383];
var itemsSizeLeft = [0, 0, 0, 0, 0, 0];
function BillTable() {}
BillTable.prototype = {
    /**
     * {int} current [0,4]
     */
    current: 0,
    currentSize: 6,
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
            layout.innerHTML = '<div class="turn-bill-bg">' + '    <div class="turnBillTable"><div class="turnBillDate">时间</div><div class="turnBillName">奖品</div><div class="turnBillType">状态</div></div>' + '    <div id="bill-select" class="turn-bill-select">' + '      <div class="bill-outline"></div>' + '    </div>' + '    <div id="turnBill-line0" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name1">跳舞毯民资很长长10个字呢</div><div class="bill-amount1">98元</div></div>' + '    <div id="turnBill-line1" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name1">跳舞毯民资很长长10个字呢</div><div class="bill-amount1">98元</div></div>' + '    <div id="turnBill-line2" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name1">跳舞毯民资很长长10个字呢</div><div class="bill-amount1">98元</div></div>' + '    <div id="turnBill-line3" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name1">跳舞毯民资很长长10个字呢</div><div class="bill-amount1">98元</div></div>' + '    <div id="turnBill-line4" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name1">跳舞毯民资很长长10个字呢</div><div class="bill-amount1">98元</div></div>' + '    <div id="turnBill-line5" class="bill-line"><div class="bill-time">2017-07-07 12:06:01</div><div class="bill-name1">跳舞毯民资很长长10个字呢</div><div class="bill-amount1">98元</div></div>' + '    <div id="turnBill-line6" class="bill-line"><<< 第1页/共1页 >>></div>' + '</div>';
            document.body.appendChild(layout);
        }
        this.layout = layout;

        var bg = layout.querySelector('.turn-bill-bg');
        this.selected = bg.querySelector('#bill-select');

        this.table = [];
        for (var i = 0; i < pageSize; ++i) {
            var tr = bg.querySelector('#turnBill-line' + i);
            this.table.push(tr);
        }
        this.titlePage = bg.querySelector('#turnBill-line6');

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
                tds[0].innerHTML = info.winningDate;
                tds[1].innerHTML = info.prizeName;
                var state;
                switch (info.state) {
                    case 1:
                        state = "等待领取";
                        break;
                    case 2:
                        state = "正在配送";
                        break;
                    case 3:
                        state = "已经过期";
                        break;
                }
                tds[2].innerHTML = state;
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
                var cur;
                if (owner.pageIndex == 0) {
                    cur = owner.current;
                } else {
                    cur = owner.pageIndex * 4 + owner.current + 1;
                }

                if (this.bills[cur].state == 1) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_receiveDialog__["a" /* showReceiveDialog */])(function (btn) {
                        if (btn == 0) {
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__app_orderDialog__["a" /* showOrderDialog */])(function (btn) {
                                if (btn == 0) {
                                    __WEBPACK_IMPORTED_MODULE_7__app_PageArgs__["a" /* turnTableArgs */].setCallFlag(1);
                                    __WEBPACK_IMPORTED_MODULE_7__app_PageArgs__["a" /* turnTableArgs */].setPrizeID(owner.bills[cur].id);
                                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__turntable__["onQueryProduct1"])();
                                } else {
                                    owner.show(owner.current, owner.onKeyDown);
                                }
                            });
                        } else {
                            owner.show(owner.current, owner.onKeyDown);
                        }
                    }, this.bills[cur].prizeID);
                } else if (this.bills[cur].state == 2) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('提示', '已经在配送哦，请留意手机快递电话。');
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["a" /* hideLoading */])(function () {
                        owner.show(owner.current, owner.onKeyDown);
                    }, 2000);
                } else if (this.bills[cur].state == 3) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('提示', '已经过期啦，奖品要在7天内领取哦。');
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["a" /* hideLoading */])(function () {
                        owner.show(owner.current, owner.onKeyDown);
                    }, 2000);
                }
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
                turntablePage.show(turntablePage.current, turntablePage.onKeyDown, turntablePage.tdeUser);
            }, 0, '提示', '没有找到订单记录。', '确定', '返回');
        }
    } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_dialog__["a" /* showDialog */])(function (btn) {
            if (btn == 0) {
                var stbcli = turntablePage.tdeUser.stbcli;
                stbcli.bill(onBill);
            } else {
                turntablePage.show(turntablePage.current, turntablePage.onKeyDown, turntablePage.tdeUser);
            }
        }, 0, '提示', '网络异常，没有找到订单记录。', '重试', '取消');
    }
}

function onTableKey(key) {
    switch (key) {
        case keyCode.back:
        case keyCode.num0:
            billTable.hide();
            turntablePage.show(turntablePage.current, turntablePage.onKeyDown, turntablePage.tdeUser);
            break;
    }
}

var turntablePage = new __WEBPACK_IMPORTED_MODULE_2__TurntablePage__["a" /* TurntablePage */]();
var billTable = new BillTable();
var bills;



/***/ }),

/***/ "./resources/assets/js/turntable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onQueryProduct1", function() { return onQueryProduct1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_stbcli__ = __webpack_require__("./resources/assets/js/toodo/_stbcli.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_loading__ = __webpack_require__("./resources/assets/js/app/loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_dialog__ = __webpack_require__("./resources/assets/js/app/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_abc__ = __webpack_require__("./resources/assets/js/app/abc.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HomeMenu__ = __webpack_require__("./resources/assets/js/HomeMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TurntablePage__ = __webpack_require__("./resources/assets/js/TurntablePage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__roll__ = __webpack_require__("./resources/assets/js/roll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__ = __webpack_require__("./resources/assets/js/app/PageArgs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_receiveDialog__ = __webpack_require__("./resources/assets/js/app/receiveDialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_orderDialog__ = __webpack_require__("./resources/assets/js/app/orderDialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_dialogBigAd__ = __webpack_require__("./resources/assets/js/app/dialogBigAd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_childLock__ = __webpack_require__("./resources/assets/js/app/childLock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__turnTableBill__ = __webpack_require__("./resources/assets/js/turnTableBill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_againDialog__ = __webpack_require__("./resources/assets/js/app/againDialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__toodo_retail__ = __webpack_require__("./resources/assets/js/toodo/_retail.js");
















var stbcli = new __WEBPACK_IMPORTED_MODULE_0__toodo_stbcli__["a" /* StbClient */]();
var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toodo_keycodes__["a" /* getKeyCodes */])();

// var callbackUrl = location.protocol + '//' + location.host + '/tdenter/callback.html';
var callbackUrl = "http://120.77.82.54/tdGameCenter/callback.html";
var winnerFlag = false;
var serveFlag = false;
var getFlag = false;
var rollFlag = true;
function onStart(code, biz) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["a" /* hideLoading */])(function () {
        if (code != 0) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_dialog__["a" /* showDialog */])(function (btn) {
                if (btn == 0) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])('自动登陆', '小双在使劲加载，请稍候...');
                    stbcli.start(onStart);
                } else {
                    turntablePage.show(currentIndex, onPageKey);
                }
            }, 1, '提示', '没有找到用户信息哦！', '重试', '取消');
        } else {
            tdeUser = biz;
            turntablePage.show(currentIndex, onPageKey);

            stbcli.winnerInfo(0, function (code, biz) {
                if (code == 0) {
                    stbcli.userWinner(1, function (code, biz) {
                        if (code == 0 && biz && biz.length > 0) {
                            winnerFlag = true;
                            userWinner(biz);
                            callBackInit();
                        } else {
                            callBackInit();
                        }
                    });
                    if (biz.info && biz.info.length > 0) {
                        showinfo(biz.info, -1);
                    } else {
                        document.getElementById("con1-li0").innerHTML = "<span>下一个幸运儿就是你哦！<span>";
                    }
                } else {
                    callBackInit();
                }
            });
        }
    });
}

function callBackInit() {
    var successCode = __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["a" /* turnTableArgs */].getSuccessCode();
    if (successCode == 1) {
        var winningId = __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["a" /* turnTableArgs */].getPrizeID();
        if (winningId != -1) {
            stbcli.getPrize(winningId, function () {
                stbcli.userWinner(1, function (code, biz) {
                    if (code == 0 && biz) {
                        userWinner(biz);
                    }
                });
            });
        };
        var flag = __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["a" /* turnTableArgs */].getCallFlag();
        if (flag == 1) {
            //增加额外机会
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__app_againDialog__["a" /* showAgainDialog */])(function (btn) {
                if (btn == 0) {
                    stbcli.addState();
                    initFocus();
                }
            });
        } else {
            //改变每日免费机会
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__app_againDialog__["a" /* showAgainDialog */])(function (btn) {
                if (btn == 0) {
                    stbcli.updataFreeState();
                    initFocus();
                }
            });
        }
        __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["a" /* turnTableArgs */].setSuccessCode(-1);
        __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["a" /* turnTableArgs */].setPrizeID(-1);
    }
}

function onMenuKey(key) {
    switch (key) {
        case keyCode.num0:
        case keyCode.back:
            window.location.href = "home.html";
            // window.location.href = rechargeArgs.getReturnUrl();
            break;
        case keyCode.esc:
            __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["b" /* appArgs */].onFirstPage();
            // window.location.href = "home.html";
            break;
        case keyCode.down:
            homeMenu.hide();
            turntablePage.show(currentIndex, onPageKey);
            break;
        case keyCode.ok:
            switch (homeMenu.current) {
                case 0:
                case 1:
                case 2:
                    window.location.href = "home.html";
                    break;
            }
            // if (homeMenu.current == 2) {
            //     window.location.href = rechargeArgs.getReturnUrl();
            // }
            break;
    }
}

function onPageKey(key) {
    switch (key) {
        case keyCode.num0:
        case keyCode.back:
            window.location.href = rechargeArgs.getReturnUrl();
            break;
        case keyCode.esc:
            __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["b" /* appArgs */].onFirstPage();
            break;
        case keyCode.ok:
            switch (currentIndex) {
                case 0:
                    // //抽奖
                    if (rollFlag) {
                        if (tdeUser) {
                            stbcli.turntableState(function (code, biz) {
                                switch (biz) {
                                    case 1:
                                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])('提示', '正在加载...');
                                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["a" /* hideLoading */])(function () {}, 1500);
                                        //免费次数，判断用户类型
                                        stbcli.queryServe1(3, onQueryServe1);
                                        rollFlag = false;
                                        break;
                                    case 2:
                                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])('提示', '正在加载...');
                                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["a" /* hideLoading */])(function () {}, 500);
                                        //额外 用户类型为5
                                        stbcli.turntablePro(5, rollPro);
                                        rollFlag = false;
                                        break;
                                    case 3:
                                        //包月获取机会
                                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__app_orderDialog__["a" /* showOrderDialog */])(function (btn) {
                                            if (btn == 0) {
                                                __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["a" /* turnTableArgs */].setCallFlag(2);
                                                onQueryProduct1();
                                            } else {
                                                initFocus();
                                            }
                                        });
                                        break;
                                }
                            });
                        } else {
                            setTimeout(function () {
                                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])();
                                stbcli.start(onStart);
                            }, 100);
                        }
                    }

                    break;
                case 1:
                    //打开用户奖品账单
                    stbcli.userWinner(4, onBill);
                    break;
            }
            break;
            break;
        case keyCode.up:
            switch (currentIndex) {
                case 0:
                    turntablePage.hide();
                    homeMenu.show(homeMenu.current, onMenuKey, tdeUser);
                    break;
            }
            break;
        case keyCode.down:
            break;
    }
    currentIndex = turntablePage.current;
}

function onBill(code, biz) {
    if (code == 0) {
        if (biz && biz.length > 0) {
            billTable.start(biz);
            billTable.show(billTable.current, onTableKey);
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_dialog__["a" /* showDialog */])(function (btn) {
                turntablePage.show(turntablePage.current, turntablePage.onKeyDown, turntablePage.tdeUser);
            }, 0, '提示', '没有找到订单记录。', '确定', '返回');
        }
    } else {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_dialog__["a" /* showDialog */])(function (btn) {
            if (btn == 0) {
                var stbcli = turntablePage.tdeUser.stbcli;
                stbcli.userWinner(4, onBill);
            } else {
                turntablePage.show(turntablePage.current, turntablePage.onKeyDown, turntablePage.tdeUser);
            }
        }, 0, '提示', '网络异常，没有找到订单记录。', '重试', '取消');
    }
}

var itemInfo;
function onQueryProduct1() {
    if (!itemInfo) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_abc__["a" /* getJSON */])("data/tde_shop_infos.json", function (data) {
            itemInfo = data[0];
        });
    }
    var cb = function cb(btn) {
        if (btn == 0) {
            if (tdeUser.childLock) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__app_childLock__["a" /* showChildLock */])(function (code, msg) {
                    onValidLock(code, msg, turntablePage, itemInfo);
                }, 1, 0);
            } else {
                sendOrder(itemInfo);
            }
        } else {
            if (document.getElementById("bill-layout")) {
                billTable.show(billTable.current, onTableKey);
            } else {
                turntablePage.show(turntablePage.current, onPageKey);
            }
        }
    };
    var price = 2900;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__app_dialogBigAd__["a" /* showAd29 */])(cb, 0, price / 100);
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
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__app_childLock__["a" /* showChildLock */])(function (code, msg) {
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
        "title": itemInfo.title,
        "gameId": itemInfo.gameId,
        "productId": itemInfo.productId,
        "prodId": itemInfo.prodId,
        "trial": itemInfo.trial,
        "complex": 0
    };
    var args = JSON.stringify(data);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])('提示', '正在处理，请稍候...');
    __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["c" /* callbackArgs */].setRedirectUrl(window.location.href);
    __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["c" /* callbackArgs */].setReturnUrl(window.location.href);
    stbcli.order1(itemInfo.prodId, callbackUrl, args, onOrder1);
}

function onOrder1(code, biz) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["a" /* hideLoading */])(function () {
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
                    turntablePage.show(currentIndex, onPageKey);
                }
            }, 0, '订单提示', '小双服务开小差啦，请稍后重试。', '重试', '返回');
        }
    });
}

var area;
var con1;
var time;
var _top;
var mytimer;
function showinfo(info, num) {
    //轮播
    if (num == -1) {
        area = document.getElementById('scrollBox');
        con1 = document.getElementById('con1');
        time = 50;
        _top = area.scrollTop;
        if (info.length > 30) {
            mytimer = setInterval(scrollUp, time);
        }
    }

    function scrollUp() {
        if (area.scrollTop >= con1.offsetHeight) {
            _top = 0;
            area.scrollTop = _top;
            stbcli.winnerInfo(num++, function (code, biz) {
                if (biz.flag) {
                    num == -1;
                }
                if (code == 0) {
                    if (biz.info && biz.info > 0) {
                        showinfo(biz.info, num++);
                    }
                }
            });
        } else {
            _top++;
            area.scrollTop = _top;
        }
    }

    for (var i = 0; i < info.length; i++) {
        var data = info[i];
        if (info.length < 15) {
            var li = document.getElementById("con1-li" + i);
        } else {
            if (i < info.length / 2) {
                var li = document.getElementById("con1-li" + i);
            } else {
                var li = document.getElementById("con2-li" + i);
            }
        }
        var dataUserName = data.userName.toString();
        dataUserName = dataUserName.substring(0, 2) + "***" + dataUserName.substring(dataUserName.length - 1, dataUserName.length);
        li.innerHTML = '<span>恭喜用户' + dataUserName + '<span><span>抽中</span>' + '<span>' + data.prizeName + '<span>';
    }
}

//个人中奖商品加载
function userWinner(biz) {
    var dataList = [];
    //奖品区
    var prize_node = document.getElementById("prize-content");
    for (var i = 0; i < biz.length; i++) {
        dataList.push(biz[i].prizeID);
    }
    //根据用户数据自动生成标签
    prize_Html(dataList);
    if (dataList.length <= 5) {
        prize_Html(dataList);
    } else {
        for (var i = 0; i < 5; i++) {
            var node = document.createElement('div');
            node.setAttribute("id", "prize-item" + i);
            node.setAttribute("class", "prize-item");
            node.innerHTML = '<img src="img/0.png">';
            prize_node.appendChild(node);
            // var node = this.layout.querySelector('#prize-item' + i);
            node.style.left = i * 65 + "px";
            setTimeout(function (i, node) {
                var img = node.querySelector('img');
                img.style.width = 65 + "px";
                img.src = 'img/turntable/thing' + dataList[i] + '.png';
            }, 100 * i, i, node);
        }
    }

    function prize_Html(dataList) {
        for (var i = 0; i < dataList.length; i++) {
            var node = document.createElement('div');
            node.setAttribute("id", "prize-item" + i);
            node.setAttribute("class", "prize-item");
            node.innerHTML = '<img src="img/0.png">';
            prize_node.appendChild(node);
            // var node = this.layout.querySelector('#prize-item' + i);
            node.style.left = i * 65 + "px";
            setTimeout(function (i, node) {
                var img = node.querySelector('img');
                img.style.width = 65 + "px";
                img.src = 'img/turntable/thing' + dataList[i] + '.png';
            }, 100 * i, i, node);
        }
    }
}

//prize code 是最终停留的code(中奖的奖品)
//callback  结束后回调的函数
function rollFun(prize_code, callback) {
    roll.init(prize_code, turntablePage.focusItems);
    roll.start(callback);
}

function rollCallBack(prizeCode) {
    //存入数据(状态为1)
    if (prizeCode != 3) {
        stbcli.addWinner(prizeCode, 1, function (code, biz) {
            if (code == 0 && biz) {
                __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["a" /* turnTableArgs */].setPrizeID(parseInt(biz));
            }
        });
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__app_receiveDialog__["a" /* showReceiveDialog */])(function (btn) {
        initFocus();
        if (btn == 0) {
            //领取
            if (prizeCode == 3) {
                //充值50F币
                stbcli.addCoins(50);
            } else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__app_orderDialog__["a" /* showOrderDialog */])(function (btn) {
                    if (btn == 0) {
                        __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["a" /* turnTableArgs */].setCallFlag(1);
                        onQueryProduct1();
                    } else {
                        initFocus();
                        stbcli.userWinner(1, function (code, biz) {
                            if (code == 0 && biz) {
                                userWinner(biz);
                            }
                        });
                    }
                });
            }
        } else {
            //跳过
            if (prizeCode == 3) {
                //充值50F币
                stbcli.addCoins(50);
            } else {
                stbcli.userWinner(1, function (code, biz) {
                    if (code == 0 && biz) {
                        userWinner(biz);
                    }
                });
            }
        }
    }, parseInt(prizeCode));
    rollFlag = true;
}
//判断包月==新老用户
function onQueryServe1(code, biz) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["a" /* hideLoading */])(function () {
        if (code == 0) {
            if (biz && biz.productId == 3) {
                serveFlag = true;
            } else {
                serveFlag = false;
            }
            ifGet();
        } else {
            stbcli.queryServe1(3, onQueryServe1);
        }
    });
}
//判断是否已经领取过奖品
function ifGet() {
    stbcli.userWinner(2, function (code, biz) {
        if (code == 0) {
            if (biz && biz.length > 0) {
                getFlag = true;
            } else {
                getFlag = false;
            }
            var type = userType();
            stbcli.turntablePro(type, rollPro);
        } else {
            ifGet();
        }
    });
}
function rollPro(code, biz) {
    if (code == 0 && biz) {
        var ifPro = function ifPro() {
            if (0 < res && res <= one) {
                prizeID = prizeItem[0];
                rollFun(prizeID, rollCallBack);
                return;
            } else if (one < res && res <= one + two) {
                prizeID = prizeItem[1];
                rollFun(prizeID, rollCallBack);
                return;
            } else if (one + two < res && res <= one + two + three) {
                prizeID = prizeItem[2];
                rollFun(prizeID, rollCallBack);
                return;
            } else if (one + two + three < res && res <= one + two + three + four) {
                prizeID = prizeItem[3];
                rollFun(prizeID, rollCallBack);
                return;
            } else if (one + two + three + four < res && res <= one + two + three + four + five) {
                prizeID = prizeItem[4];
                rollFun(prizeID, rollCallBack);
                return;
            } else if (one + two + three + four + five < res && res <= one + two + three + four + five + six || res <= 0 || res > 100) {
                prizeID = prizeItem[5];
                rollFun(prizeID, rollCallBack);
                return;
            }
        };

        var proItem = [biz[0].onePro, biz[0].twoPro, biz[0].threePro, biz[0].fourPro, biz[0].fivePro, biz[0].sixPro];
        var prizeItem = [1, 4, 5, 2, 0, 3];
        var one = parseInt(proItem[0] * 100);
        var two = parseInt(proItem[1] * 100);
        var three = parseInt(proItem[2] * 100);
        var four = parseInt(proItem[3] * 100);
        var five = parseInt(proItem[4] * 100);
        var six = parseInt(proItem[5] * 100);
        var res = parseInt(Math.random() * 100);
        var prizeID;

        stbcli.prizeNum(function (code, biz) {
            if (code == 0) {
                if (biz == undefined) {
                    ifPro();
                } else {
                    for (var i = 0; i < biz.length; i++) {
                        switch (biz[i].prizeID) {
                            case 0:
                                six = six + five;
                                five = 0;
                                break;
                            case 1:
                                six = six + one;
                                one = 0;
                                break;
                            case 2:
                                six = six + four;
                                four = 0;
                                break;
                            case 3:
                                break;
                            case 4:
                                six = six + two;
                                two = 0;
                                break;
                            case 5:
                                six = six + three;
                                three = 0;
                                break;
                        }
                    }
                    ifPro();
                }
            }
        });
    }
}
function userType() {
    var type = "";
    if (winnerFlag) {
        if (serveFlag) {
            if (getFlag) {
                //已中奖已领取老用户
                type = 4;
            } else {
                //已中奖未领取老用户
                type = 3;
            }
        } else {
            if (getFlag) {
                //已中奖已领取新用户(不成立)
            } else {
                //已中奖未领取新用户
                type = 2;
            }
        }
    } else {
        if (serveFlag) {
            //未中奖老用户
            type = 1;
        } else {
            //未中奖新用户
            type = 0;
        }
    }
    return type;
}

function initFocus() {
    turntablePage.show(currentIndex, onPageKey);
}

function onTableKey(key) {
    switch (key) {
        case keyCode.back:
        case keyCode.num0:
            billTable.hide();
            turntablePage.show(turntablePage.current, turntablePage.onKeyDown, turntablePage.tdeUser);
            break;
    }
}
if (__WEBPACK_IMPORTED_MODULE_15__toodo_retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_15__toodo_retail__["b" /* retail */].gxgd) {
    __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["b" /* appArgs */].setRedirectUrl('http://10.1.15.43/nn_cms/nn_cms_view/gxcatv20/go_idc_v2.1.php?page=linux_home_hd');
} else {
    __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["b" /* appArgs */].setRedirectUrl(window.location.href);
}
__WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["b" /* appArgs */].setReturnUrl(window.location.href);

var homeMenu;
var turntablePage;
var billTable;
var tdeUser;
var roll;
var currentIndex;
window.onload = function () {
    homeMenu = new __WEBPACK_IMPORTED_MODULE_5__HomeMenu__["a" /* HomeMenu */]();
    turntablePage = new __WEBPACK_IMPORTED_MODULE_6__TurntablePage__["a" /* TurntablePage */]();
    billTable = new __WEBPACK_IMPORTED_MODULE_13__turnTableBill__["a" /* BillTable */]();
    currentIndex = turntablePage.current;
    turntablePage.show(turntablePage.current, onPageKey);
    __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["b" /* appArgs */].setTurntableUrl(window.location.href);
    roll = new __WEBPACK_IMPORTED_MODULE_7__roll__["a" /* Roll */]();

    setTimeout(function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])();
        stbcli.start(onStart);
    }, 100);
};



/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/turntable.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWM5ZGYyNTE1YTkxYWUzNmIyZjE/ODU5MSIsIndlYnBhY2s6Ly8vLi9+L19KU09OQDEuMC4wQEpTT04vanNvbjIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9fY2hhcmVuY0AwLjAuMkBjaGFyZW5jL2NoYXJlbmMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9fY3J5cHRAMC4wLjJAY3J5cHQvY3J5cHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9faXMtYnVmZmVyQDEuMS42QGlzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L19tZDVAMi4yLjFAbWQ1L21kNS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0hvbWVNZW51LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvVHVybnRhYmxlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9QYWdlQXJncy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9hYmMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvYWdhaW5EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvY2hpbGRMb2NrLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2NoaWxkTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvZGlhbG9nQmlnQWQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvbG9hZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9vcmRlckRpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9yZWNlaXZlRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19rZXljb2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19yZXRhaWwuanM/MGViMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19zdGJjbGkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fc3RibnVsbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL190ZGNsaS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3R1cm5UYWJsZUJpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90dXJudGFibGUuanMiXSwibmFtZXMiOlsia2V5Q29kZSIsImdldEtleUNvZGVzIiwicHJlQ29kZXMiLCJnZXRDb2RlcyIsIkhvbWVNZW51IiwibGF5b3V0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiaXRlbXMiLCJpIiwibm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJwdXNoIiwiaW1nIiwic3JjIiwicHJvdG90eXBlIiwiY3VycmVudCIsIm9uS2V5RG93biIsInRkZVVzZXIiLCJzaG93Iiwic2V0U2VsZWN0ZWQiLCJvd25lciIsIm9ua2V5ZG93biIsImUiLCJoYW5kbGVLZXkiLCJoaWRlIiwiX3NldEZvY3VzIiwiZm9jdXMiLCJsZW5ndGgiLCJnZXRFdmVudCIsImN1cktleSIsImdldEtleSIsImluZGV4T2YiLCJwcmV2ZW50RGVmYXVsdCIsImxlZnQiLCJyaWdodCIsIm9rIiwiYXBwQXJncyIsIm9uRmlyc3RQYWdlIiwib25Ib21lUGFnZSIsIm9sZExvY2siLCJjaGlsZExvY2siLCJjaGlsZE1lbnUiLCJidG4iLCJzaG93Q2hpbGRMb2NrIiwiY29kZSIsIm1zZyIsIm9uVmFsaWRMb2NrIiwicmVzZXRDaGlsZExvY2siLCJvblR1cm50YWJsZVBhZ2UiLCJlc2MiLCJzdGJjbGkiLCJ0ZGVMb2NrIiwiYml6IiwidGV4dCIsIm9uVGRlTG9jayIsInNob3dEaWFsb2ciLCJkbGdCdG4iLCJuZXdMb2NrIiwiYXJndW1lbnRzIiwic2hvd0xvYWRpbmciLCJoaWRlTG9hZGluZyIsIml0ZW1TaXplIiwiVHVybnRhYmxlUGFnZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXNJdGVtcyIsImRpdiIsInNldFRpbWVvdXQiLCJpbWdsaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImRvd24iLCJ1cCIsIlBhZ2VBcmdzIiwicGFnZSIsInByZWZpeCIsImdldFZhbHVlIiwiayIsInN0Yk51bGwiLCJzZXRWYWx1ZSIsInYiLCJnZXRSZXR1cm5VcmwiLCJzZXRSZXR1cm5VcmwiLCJ1cmwiLCJnZXRSZWRpcmVjdFVybCIsInNldFJlZGlyZWN0VXJsIiwic2V0Q2FsbEZsYWciLCJudW0iLCJnZXRDYWxsRmxhZyIsInNldFN1Y2Nlc3NDb2RlIiwic3VjY2Vzc0NvZGUiLCJnZXRTdWNjZXNzQ29kZSIsInNldFByaXplSUQiLCJpZCIsImdldFByaXplSUQiLCJnZXRUdXJudGFibGVVcmwiLCJzZXRUdXJudGFibGVVcmwiLCJzaG9wQXJncyIsInJlY2hhcmdlQXJncyIsImNhbGxiYWNrQXJncyIsInR1cm5UYWJsZUFyZ3MiLCJmaXJzdFVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImhvbWVVcmwiLCJUdXJudGFibGVVcmwiLCJnZXRKU09OIiwiY2IiLCJyZXEiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiaXRlbXNBcnIiLCJldmFsIiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsImJhc2VVcmwiLCJwcm90b2NvbCIsImhvc3QiLCJkZWxheUJhY2tncm91bmQiLCJkZWxheSIsImJhY2tncm91bmRJbWFnZSIsInNob3dBZ2FpbkRpYWxvZyIsImxheW91dElkIiwiY2FsbGJhY2siLCJ0aXRsZSIsImJ0bjAiLCJidG4xIiwiZGlzcGxheSIsIm5vZGVCdG4wIiwiYnRuXzAwNiIsImZvY3VzQnRuIiwiYnRuSWR4Iiwic3VibWl0IiwiYmFjayIsIm51bTAiLCJsYWJlbCIsInRpcHMiLCJsb2NrVGV4dCIsImxvY2tUaXRsZSIsImxvY2tMYWJlbCIsImxvY2tUaXBzIiwiaW5uZXJUZXh0IiwiaXRlbU5vZGVzIiwibnVtMSIsIm51bTIiLCJudW0zIiwibnVtNCIsIm51bTUiLCJudW02IiwibnVtNyIsIm51bTgiLCJudW05IiwiaW5wdXRUZXh0IiwiY3VySWR4IiwiZm9yRWFjaCIsIml0ZW1Ob2RlIiwiaW5kZXgiLCJpbnZpc2libGUiLCJzdGFyIiwiY2xpY2tOdW0iLCJTdHJpbmciLCJiYWNrc3BhY2UiLCJzdWJzdHJpbmciLCJoYW5kbGVPayIsIkNoaWxkTWVudSIsImNudCIsImJnIiwiYnRuTm9kZXMiLCJidG5Ob2RlIiwiYnRuTm9kZTAiLCJidG5Ob2RlMSIsInRpcE5vZGUiLCJmb2N1c05vZGUiLCJhbGlnbiIsIm5vZGVUaXRsZSIsIm5vZGVUZXh0IiwidGV4dEFsaWduIiwibm9kZUJ0bjEiLCJidG5fMDA2bm9uZSIsInNob3dBZDE2Iiwic2hvd0FkMjkiLCJhZCIsImxvYWRUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJzaG93VGltZSIsIm5vZGVCZyIsImRlbGF5VGltZSIsInRpbWUiLCJzaG93T3JkZXJEaWFsb2ciLCJzaG93UmVjZWl2ZURpYWxvZyIsInByaXplIiwicHJpemVJbWciLCJwcml6ZU5hbWUiLCJub2RlUHJpemUiLCJwcml6ZV9JbWciLCJjb2xvciIsImNvbmZpZyIsIlJvbGwiLCJzZWxmIiwicGluSW5kZXgiLCJzdG9wSW5kZXgiLCJpc1JvbGxpbmciLCJ0aW1lciIsInJvbGxMaXN0Iiwicm9sbEluZGV4IiwiaW5pdCIsInJvbGxSZXN1bHQiLCJzcGVlZCIsImN5Y2xlIiwiZmFzdEN5Y2xlIiwic3RhcnQiLCJyb2xsUHJlIiwicm9sbFN0YXJ0Iiwicm9sbEdvTmV4dCIsInJvbGxTdG9wIiwiY2xlYXJJbnRlcnZhbCIsInN0b3BHb05leHQiLCJzZXRJbnRlcnZhbCIsImtleU1hcCIsInJldGFpbElkIiwicmV0YWlsIiwiZ3hnZCIsImYxIiwiZjIiLCJmMyIsImY0IiwibXV0ZSIsInRyYWNrIiwidm9sVXAiLCJ2b2xEb3duIiwiZmF2IiwicGxheUJhY2siLCJwYWdlVXAiLCJwYWdlRG93biIsIm1lbnUiLCJob21lIiwiaG55eCIsImdkZ2QiLCJldnQiLCJldmVudCIsIndoaWNoIiwiY2hhckNvZGUiLCJjb2RlcyIsImhhc093blByb3BlcnR5Iiwibm9uZSIsImdldFJldGFpbElkIiwiZ3Vhbmd4aSIsImlQYW5lbCIsIlN5c3RlbSIsInN0YklEIiwiQ0EiLCJTdG9yYWdlU2VydmljZSIsIkZpbGVTeXN0ZW0iLCJtZDUiLCJyZXF1aXJlIiwiSlNPTiIsIlN0YkNsaWVudCIsIm9yaWdpblVybCIsImFwcEtleSIsImFwcFNlY3JldCIsIl90ZGNsaSIsImlzUmVhZHkiLCJ1c2VySWQiLCJ0b2tlbiIsImJpekluIiwiZ2V0UmVnaW9uQ29kZSIsImdldENhcmRUViIsImJvZHlJbiIsIm1ldGhvZCIsImFwcEF1dGhUb2tlbiIsImJpekNvbnRlbnQiLCJzdHJpbmdpZnkiLCJzZXRBcGlVcmwiLCJib2R5T3V0IiwiYml6T3V0IiwicGFyc2UiLCJiaXpVc2VyIiwic3ViQ29kZSIsImFkZFdpbm5lciIsInByaXplSUQiLCJzdGF0ZSIsImFkZFN0YXRlIiwidXBkYXRhRnJlZVN0YXRlIiwiZ2V0UHJpemUiLCJ0dXJudGFibGVTdGF0ZSIsInR1cm50YWJsZVBybyIsInR5cGUiLCJwcml6ZU51bSIsIndpbm5lckluZm8iLCJ1c2VyV2lubmVyIiwiYWRkQ29pbnMiLCJhZGROdW0iLCJxdWVyeVNlcnZlMSIsInByb2R1Y3RJZCIsInF1ZXJ5UHJvZHVjdDEiLCJvcmRlcjEiLCJjYWxsYmFja1VybCIsImRhdGEiLCJwYXkiLCJ0cmFkZU5vIiwiYmlsbCIsInRkZVBhZ2UiLCJ0ZGFTb25nIiwiY2F0ZWdvcnkiLCJ0ZGFTb25nMSIsInNvbmdJZCIsInRkYU1hdGNoIiwidGRhVXNlciIsInRkYVJlY29yZCIsInJlY29yZCIsIlN0Yk51bGwiLCJnZXRTdGJOdW0iLCJnZXRHbG9iYWxWYXIiLCJrZXlOYW1lIiwicmVzdWx0IiwiYUNvb2tpZSIsImNvb2tpZSIsInNwbGl0IiwiYUNydW1iIiwiZXNjYXBlIiwidW5lc2NhcGUiLCJrZXlWYWx1ZSIsInNldEdsb2JhbFZhciIsInJlZ2lvbiIsIkdldENBUmVnaW9uSUQiLCJnIiwiR2xvYmFsIiwiR2xvYmFsMiIsInZhbHVlIiwiaWNObyIsInJlZ2lvbkNvZGUiLCJTeXNTZXR0aW5nIiwiZ2V0RW52Iiwic2V0RW52IiwiZm9ybWF0IiwiZm10IiwibyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJnZXRNaWxsaXNlY29uZHMiLCJ0ZXN0IiwicmVwbGFjZSIsIlJlZ0V4cCIsIiQxIiwiZ2V0RnVsbFllYXIiLCJzdWJzdHIiLCJSZXF1ZXN0Qm9keSIsImFwcElkIiwiY2hhcnNldCIsInNpZ25UeXBlIiwic2lnbkNvZGUiLCJ0aW1lc3RhbXAiLCJ2ZXJzaW9uIiwianNvbiIsIlJlc3BvbnNlQm9keSIsInN1Yk1zZyIsInNpZ24iLCJUb29kb0NsaWVudCIsImFwaVVybCIsImlzQnVzeSIsInNpZ25Db2RlSW4iLCJzdHIiLCJzaWduQ29kZU91dCIsInVuZGVmaW5lZCIsInhtbCIsImhhbmRsZVRpbWVvdXQiLCJhYm9ydCIsImNsZWFyVGltZW91dCIsInN0YXR1cyIsImVyciIsInRva2VuVXJsIiwic2V0UmVxdWVzdEhlYWRlciIsImYiLCJrZXkiLCJlaSIsIm5hbWUiLCJhY3Rpb24iLCJyZW1vdmVDaGlsZCIsInBhZ2VTaXplIiwiaXRlbXNTaXplTGVmdCIsIkJpbGxUYWJsZSIsImN1cnJlbnRTaXplIiwiYmlsbHMiLCJwYWdlSW5kZXgiLCJzZWxlY3RlZCIsInRhYmxlIiwidHIiLCJ0aXRsZVBhZ2UiLCJzaG93UGFnZSIsInBhcnNlSW50IiwiY3V0MCIsImN1dDEiLCJjdXRJbmZvcyIsInNsaWNlIiwic2hvd0luZm8iLCJpbmZvcyIsInJvdyIsInRkcyIsImluZm8iLCJ3aW5uaW5nRGF0ZSIsInRvcCIsImN1ciIsIm9uUXVlcnlQcm9kdWN0MSIsIm9uQmlsbCIsImJpbGxUYWJsZSIsIm9uVGFibGVLZXkiLCJ0dXJudGFibGVQYWdlIiwid2lubmVyRmxhZyIsInNlcnZlRmxhZyIsImdldEZsYWciLCJyb2xsRmxhZyIsIm9uU3RhcnQiLCJjdXJyZW50SW5kZXgiLCJvblBhZ2VLZXkiLCJjYWxsQmFja0luaXQiLCJzaG93aW5mbyIsIndpbm5pbmdJZCIsImZsYWciLCJpbml0Rm9jdXMiLCJvbk1lbnVLZXkiLCJob21lTWVudSIsIm9uUXVlcnlTZXJ2ZTEiLCJyb2xsUHJvIiwiaXRlbUluZm8iLCJzZW5kT3JkZXIiLCJwcmljZSIsImdhbWVJZCIsInByb2RJZCIsInRyaWFsIiwiYXJncyIsIm9uT3JkZXIxIiwiYXJlYSIsImNvbjEiLCJfdG9wIiwibXl0aW1lciIsInNjcm9sbFRvcCIsInNjcm9sbFVwIiwib2Zmc2V0SGVpZ2h0IiwibGkiLCJkYXRhVXNlck5hbWUiLCJ1c2VyTmFtZSIsInRvU3RyaW5nIiwiZGF0YUxpc3QiLCJwcml6ZV9ub2RlIiwicHJpemVfSHRtbCIsInNldEF0dHJpYnV0ZSIsIndpZHRoIiwicm9sbEZ1biIsInByaXplX2NvZGUiLCJyb2xsIiwicm9sbENhbGxCYWNrIiwicHJpemVDb2RlIiwiaWZHZXQiLCJ1c2VyVHlwZSIsImlmUHJvIiwicmVzIiwib25lIiwicHJpemVJdGVtIiwidHdvIiwidGhyZWUiLCJmb3VyIiwiZml2ZSIsInNpeCIsInByb0l0ZW0iLCJvbmVQcm8iLCJ0d29Qcm8iLCJ0aHJlZVBybyIsImZvdXJQcm8iLCJmaXZlUHJvIiwic2l4UHJvIiwicmFuZG9tIiwib25sb2FkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5Q0FBeUMsaUJBQWlCO0FBQzFELDhCQUE4QixrQkFBa0I7OztBQUdoRCx5Q0FBeUMsaUJBQWlCO0FBQzFELHNDQUFzQyw2QkFBNkI7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixjQUFjOztBQUVqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQy9KRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQUlBLFVBQVUsMkZBQUFDLEVBQWQ7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SUFBQSw4REFBQUEsQ0FBUWlELGNBQVIsQ0FBdUJpQixPQUFPQyxRQUFQLENBQWdCQyxJQUF2QztBQUNIO0FBQ0QsOERBQUFwRSxDQUFROEMsWUFBUixDQUFxQm9CLE9BQU9DLFFBQVAsQ0FBZ0JDLElBQXJDOztBQUVBLElBQUlxVSxRQUFKO0FBQ0EsSUFBSWQsYUFBSjtBQUNBLElBQUlGLFNBQUo7QUFDQSxJQUFJNVksT0FBSjtBQUNBLElBQUl5YixJQUFKO0FBQ0EsSUFBSXJDLFlBQUo7QUFDQS9ULE9BQU8wWCxNQUFQLEdBQWdCLFlBQVk7QUFDeEJuRCxlQUFXLElBQUksMkRBQUosRUFBWDtBQUNBZCxvQkFBZ0IsSUFBSSxxRUFBSixFQUFoQjtBQUNBRixnQkFBVSxJQUFJLGtFQUFKLEVBQVY7QUFDQVEsbUJBQWVOLGNBQWNoWixPQUE3QjtBQUNBZ1osa0JBQWM3WSxJQUFkLENBQW1CNlksY0FBY2haLE9BQWpDLEVBQTBDdVosU0FBMUM7QUFDQWxZLElBQUEsOERBQUFBLENBQVE0RCxlQUFSLENBQXdCTSxPQUFPQyxRQUFQLENBQWdCQyxJQUF4QztBQUNBa1csV0FBTyxJQUFJLG1EQUFKLEVBQVA7O0FBRUF0WSxlQUFXLFlBQVk7QUFDbkJULFFBQUEsd0ZBQUFBO0FBQ0FULGVBQU9vSyxLQUFQLENBQWE4TSxPQUFiO0FBQ0gsS0FIRCxFQUdHLEdBSEg7QUFJSCxDQWJEIiwiZmlsZSI6ImpzL3R1cm50YWJsZS4yMmExZmQ0OGZkZWFlMDgzMjc4My5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWM5ZGYyNTE1YTkxYWUzNmIyZjEiLCIvKlxuICAgIGh0dHA6Ly93d3cuSlNPTi5vcmcvanNvbjIuanNcbiAgICAyMDExLTAyLTIzXG5cbiAgICBQdWJsaWMgRG9tYWluLlxuXG4gICAgTk8gV0FSUkFOVFkgRVhQUkVTU0VEIE9SIElNUExJRUQuIFVTRSBBVCBZT1VSIE9XTiBSSVNLLlxuXG4gICAgU2VlIGh0dHA6Ly93d3cuSlNPTi5vcmcvanMuaHRtbFxuXG5cbiAgICBUaGlzIGNvZGUgc2hvdWxkIGJlIG1pbmlmaWVkIGJlZm9yZSBkZXBsb3ltZW50LlxuICAgIFNlZSBodHRwOi8vamF2YXNjcmlwdC5jcm9ja2ZvcmQuY29tL2pzbWluLmh0bWxcblxuICAgIFVTRSBZT1VSIE9XTiBDT1BZLiBJVCBJUyBFWFRSRU1FTFkgVU5XSVNFIFRPIExPQUQgQ09ERSBGUk9NIFNFUlZFUlMgWU9VIERPXG4gICAgTk9UIENPTlRST0wuXG5cblxuICAgIFRoaXMgZmlsZSBjcmVhdGVzIGEgZ2xvYmFsIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgdHdvIG1ldGhvZHM6IHN0cmluZ2lmeVxuICAgIGFuZCBwYXJzZS5cblxuICAgICAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKVxuICAgICAgICAgICAgdmFsdWUgICAgICAgYW55IEphdmFTY3JpcHQgdmFsdWUsIHVzdWFsbHkgYW4gb2JqZWN0IG9yIGFycmF5LlxuXG4gICAgICAgICAgICByZXBsYWNlciAgICBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBkZXRlcm1pbmVzIGhvdyBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyBhcmUgc3RyaW5naWZpZWQgZm9yIG9iamVjdHMuIEl0IGNhbiBiZSBhXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBvciBhbiBhcnJheSBvZiBzdHJpbmdzLlxuXG4gICAgICAgICAgICBzcGFjZSAgICAgICBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBzcGVjaWZpZXMgdGhlIGluZGVudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvZiBuZXN0ZWQgc3RydWN0dXJlcy4gSWYgaXQgaXMgb21pdHRlZCwgdGhlIHRleHQgd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgYmUgcGFja2VkIHdpdGhvdXQgZXh0cmEgd2hpdGVzcGFjZS4gSWYgaXQgaXMgYSBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdCB3aWxsIHNwZWNpZnkgdGhlIG51bWJlciBvZiBzcGFjZXMgdG8gaW5kZW50IGF0IGVhY2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsLiBJZiBpdCBpcyBhIHN0cmluZyAoc3VjaCBhcyAnXFx0JyBvciAnJm5ic3A7JyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpdCBjb250YWlucyB0aGUgY2hhcmFjdGVycyB1c2VkIHRvIGluZGVudCBhdCBlYWNoIGxldmVsLlxuXG4gICAgICAgICAgICBUaGlzIG1ldGhvZCBwcm9kdWNlcyBhIEpTT04gdGV4dCBmcm9tIGEgSmF2YVNjcmlwdCB2YWx1ZS5cblxuICAgICAgICAgICAgV2hlbiBhbiBvYmplY3QgdmFsdWUgaXMgZm91bmQsIGlmIHRoZSBvYmplY3QgY29udGFpbnMgYSB0b0pTT05cbiAgICAgICAgICAgIG1ldGhvZCwgaXRzIHRvSlNPTiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgYW5kIHRoZSByZXN1bHQgd2lsbCBiZVxuICAgICAgICAgICAgc3RyaW5naWZpZWQuIEEgdG9KU09OIG1ldGhvZCBkb2VzIG5vdCBzZXJpYWxpemU6IGl0IHJldHVybnMgdGhlXG4gICAgICAgICAgICB2YWx1ZSByZXByZXNlbnRlZCBieSB0aGUgbmFtZS92YWx1ZSBwYWlyIHRoYXQgc2hvdWxkIGJlIHNlcmlhbGl6ZWQsXG4gICAgICAgICAgICBvciB1bmRlZmluZWQgaWYgbm90aGluZyBzaG91bGQgYmUgc2VyaWFsaXplZC4gVGhlIHRvSlNPTiBtZXRob2RcbiAgICAgICAgICAgIHdpbGwgYmUgcGFzc2VkIHRoZSBrZXkgYXNzb2NpYXRlZCB3aXRoIHRoZSB2YWx1ZSwgYW5kIHRoaXMgd2lsbCBiZVxuICAgICAgICAgICAgYm91bmQgdG8gdGhlIHZhbHVlXG5cbiAgICAgICAgICAgIEZvciBleGFtcGxlLCB0aGlzIHdvdWxkIHNlcmlhbGl6ZSBEYXRlcyBhcyBJU08gc3RyaW5ncy5cblxuICAgICAgICAgICAgICAgIERhdGUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZihuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3JtYXQgaW50ZWdlcnMgdG8gaGF2ZSBhdCBsZWFzdCB0d28gZGlnaXRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4gOiBuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VVRDRnVsbFllYXIoKSAgICsgJy0nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDTW9udGgoKSArIDEpICsgJy0nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDRGF0ZSgpKSAgICAgICsgJ1QnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDSG91cnMoKSkgICAgICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDTWludXRlcygpKSAgICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDU2Vjb25kcygpKSAgICsgJ1onO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbCByZXBsYWNlciBtZXRob2QuIEl0IHdpbGwgYmUgcGFzc2VkIHRoZVxuICAgICAgICAgICAga2V5IGFuZCB2YWx1ZSBvZiBlYWNoIG1lbWJlciwgd2l0aCB0aGlzIGJvdW5kIHRvIHRoZSBjb250YWluaW5nXG4gICAgICAgICAgICBvYmplY3QuIFRoZSB2YWx1ZSB0aGF0IGlzIHJldHVybmVkIGZyb20geW91ciBtZXRob2Qgd2lsbCBiZVxuICAgICAgICAgICAgc2VyaWFsaXplZC4gSWYgeW91ciBtZXRob2QgcmV0dXJucyB1bmRlZmluZWQsIHRoZW4gdGhlIG1lbWJlciB3aWxsXG4gICAgICAgICAgICBiZSBleGNsdWRlZCBmcm9tIHRoZSBzZXJpYWxpemF0aW9uLlxuXG4gICAgICAgICAgICBJZiB0aGUgcmVwbGFjZXIgcGFyYW1ldGVyIGlzIGFuIGFycmF5IG9mIHN0cmluZ3MsIHRoZW4gaXQgd2lsbCBiZVxuICAgICAgICAgICAgdXNlZCB0byBzZWxlY3QgdGhlIG1lbWJlcnMgdG8gYmUgc2VyaWFsaXplZC4gSXQgZmlsdGVycyB0aGUgcmVzdWx0c1xuICAgICAgICAgICAgc3VjaCB0aGF0IG9ubHkgbWVtYmVycyB3aXRoIGtleXMgbGlzdGVkIGluIHRoZSByZXBsYWNlciBhcnJheSBhcmVcbiAgICAgICAgICAgIHN0cmluZ2lmaWVkLlxuXG4gICAgICAgICAgICBWYWx1ZXMgdGhhdCBkbyBub3QgaGF2ZSBKU09OIHJlcHJlc2VudGF0aW9ucywgc3VjaCBhcyB1bmRlZmluZWQgb3JcbiAgICAgICAgICAgIGZ1bmN0aW9ucywgd2lsbCBub3QgYmUgc2VyaWFsaXplZC4gU3VjaCB2YWx1ZXMgaW4gb2JqZWN0cyB3aWxsIGJlXG4gICAgICAgICAgICBkcm9wcGVkOyBpbiBhcnJheXMgdGhleSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggbnVsbC4gWW91IGNhbiB1c2VcbiAgICAgICAgICAgIGEgcmVwbGFjZXIgZnVuY3Rpb24gdG8gcmVwbGFjZSB0aG9zZSB3aXRoIEpTT04gdmFsdWVzLlxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodW5kZWZpbmVkKSByZXR1cm5zIHVuZGVmaW5lZC5cblxuICAgICAgICAgICAgVGhlIG9wdGlvbmFsIHNwYWNlIHBhcmFtZXRlciBwcm9kdWNlcyBhIHN0cmluZ2lmaWNhdGlvbiBvZiB0aGVcbiAgICAgICAgICAgIHZhbHVlIHRoYXQgaXMgZmlsbGVkIHdpdGggbGluZSBicmVha3MgYW5kIGluZGVudGF0aW9uIHRvIG1ha2UgaXRcbiAgICAgICAgICAgIGVhc2llciB0byByZWFkLlxuXG4gICAgICAgICAgICBJZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGlzIGEgbm9uLWVtcHR5IHN0cmluZywgdGhlbiB0aGF0IHN0cmluZyB3aWxsXG4gICAgICAgICAgICBiZSB1c2VkIGZvciBpbmRlbnRhdGlvbi4gSWYgdGhlIHNwYWNlIHBhcmFtZXRlciBpcyBhIG51bWJlciwgdGhlblxuICAgICAgICAgICAgdGhlIGluZGVudGF0aW9uIHdpbGwgYmUgdGhhdCBtYW55IHNwYWNlcy5cblxuICAgICAgICAgICAgRXhhbXBsZTpcblxuICAgICAgICAgICAgdGV4dCA9IEpTT04uc3RyaW5naWZ5KFsnZScsIHtwbHVyaWJ1czogJ3VudW0nfV0pO1xuICAgICAgICAgICAgLy8gdGV4dCBpcyAnW1wiZVwiLHtcInBsdXJpYnVzXCI6XCJ1bnVtXCJ9XSdcblxuXG4gICAgICAgICAgICB0ZXh0ID0gSlNPTi5zdHJpbmdpZnkoWydlJywge3BsdXJpYnVzOiAndW51bSd9XSwgbnVsbCwgJ1xcdCcpO1xuICAgICAgICAgICAgLy8gdGV4dCBpcyAnW1xcblxcdFwiZVwiLFxcblxcdHtcXG5cXHRcXHRcInBsdXJpYnVzXCI6IFwidW51bVwiXFxuXFx0fVxcbl0nXG5cbiAgICAgICAgICAgIHRleHQgPSBKU09OLnN0cmluZ2lmeShbbmV3IERhdGUoKV0sIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba2V5XSBpbnN0YW5jZW9mIERhdGUgP1xuICAgICAgICAgICAgICAgICAgICAnRGF0ZSgnICsgdGhpc1trZXldICsgJyknIDogdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHRleHQgaXMgJ1tcIkRhdGUoLS0tY3VycmVudCB0aW1lLS0tKVwiXSdcblxuXG4gICAgICAgIEpTT04ucGFyc2UodGV4dCwgcmV2aXZlcilcbiAgICAgICAgICAgIFRoaXMgbWV0aG9kIHBhcnNlcyBhIEpTT04gdGV4dCB0byBwcm9kdWNlIGFuIG9iamVjdCBvciBhcnJheS5cbiAgICAgICAgICAgIEl0IGNhbiB0aHJvdyBhIFN5bnRheEVycm9yIGV4Y2VwdGlvbi5cblxuICAgICAgICAgICAgVGhlIG9wdGlvbmFsIHJldml2ZXIgcGFyYW1ldGVyIGlzIGEgZnVuY3Rpb24gdGhhdCBjYW4gZmlsdGVyIGFuZFxuICAgICAgICAgICAgdHJhbnNmb3JtIHRoZSByZXN1bHRzLiBJdCByZWNlaXZlcyBlYWNoIG9mIHRoZSBrZXlzIGFuZCB2YWx1ZXMsXG4gICAgICAgICAgICBhbmQgaXRzIHJldHVybiB2YWx1ZSBpcyB1c2VkIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIHZhbHVlLlxuICAgICAgICAgICAgSWYgaXQgcmV0dXJucyB3aGF0IGl0IHJlY2VpdmVkLCB0aGVuIHRoZSBzdHJ1Y3R1cmUgaXMgbm90IG1vZGlmaWVkLlxuICAgICAgICAgICAgSWYgaXQgcmV0dXJucyB1bmRlZmluZWQgdGhlbiB0aGUgbWVtYmVyIGlzIGRlbGV0ZWQuXG5cbiAgICAgICAgICAgIEV4YW1wbGU6XG5cbiAgICAgICAgICAgIC8vIFBhcnNlIHRoZSB0ZXh0LiBWYWx1ZXMgdGhhdCBsb29rIGxpa2UgSVNPIGRhdGUgc3RyaW5ncyB3aWxsXG4gICAgICAgICAgICAvLyBiZSBjb252ZXJ0ZWQgdG8gRGF0ZSBvYmplY3RzLlxuXG4gICAgICAgICAgICBteURhdGEgPSBKU09OLnBhcnNlKHRleHQsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9XG4vXihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pVChcXGR7Mn0pOihcXGR7Mn0pOihcXGR7Mn0oPzpcXC5cXGQqKT8pWiQvLmV4ZWModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKCthWzFdLCArYVsyXSAtIDEsICthWzNdLCArYVs0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArYVs1XSwgK2FbNl0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbXlEYXRhID0gSlNPTi5wYXJzZSgnW1wiRGF0ZSgwOS8wOS8yMDAxKVwiXScsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGQ7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNsaWNlKDAsIDUpID09PSAnRGF0ZSgnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zbGljZSgtMSkgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBkID0gbmV3IERhdGUodmFsdWUuc2xpY2UoNSwgLTEpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICBUaGlzIGlzIGEgcmVmZXJlbmNlIGltcGxlbWVudGF0aW9uLiBZb3UgYXJlIGZyZWUgdG8gY29weSwgbW9kaWZ5LCBvclxuICAgIHJlZGlzdHJpYnV0ZS5cbiovXG5cbi8qanNsaW50IGV2aWw6IHRydWUsIHN0cmljdDogZmFsc2UsIHJlZ2V4cDogZmFsc2UgKi9cblxuLyptZW1iZXJzIFwiXCIsIFwiXFxiXCIsIFwiXFx0XCIsIFwiXFxuXCIsIFwiXFxmXCIsIFwiXFxyXCIsIFwiXFxcIlwiLCBKU09OLCBcIlxcXFxcIiwgYXBwbHksXG4gICAgY2FsbCwgY2hhckNvZGVBdCwgZ2V0VVRDRGF0ZSwgZ2V0VVRDRnVsbFllYXIsIGdldFVUQ0hvdXJzLFxuICAgIGdldFVUQ01pbnV0ZXMsIGdldFVUQ01vbnRoLCBnZXRVVENTZWNvbmRzLCBoYXNPd25Qcm9wZXJ0eSwgam9pbixcbiAgICBsYXN0SW5kZXgsIGxlbmd0aCwgcGFyc2UsIHByb3RvdHlwZSwgcHVzaCwgcmVwbGFjZSwgc2xpY2UsIHN0cmluZ2lmeSxcbiAgICB0ZXN0LCB0b0pTT04sIHRvU3RyaW5nLCB2YWx1ZU9mXG4qL1xuXG5cbi8vIENyZWF0ZSBhIEpTT04gb2JqZWN0IG9ubHkgaWYgb25lIGRvZXMgbm90IGFscmVhZHkgZXhpc3QuIFdlIGNyZWF0ZSB0aGVcbi8vIG1ldGhvZHMgaW4gYSBjbG9zdXJlIHRvIGF2b2lkIGNyZWF0aW5nIGdsb2JhbCB2YXJpYWJsZXMuXG5cbnZhciBKU09OO1xuaWYgKCFKU09OKSB7XG4gICAgSlNPTiA9IHt9O1xufVxuXG4oZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIGdsb2JhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClcbiAgICAgICwgSlNPTiA9IGdsb2JhbC5KU09OXG4gICAgICA7XG5cbiAgICBpZiAoIUpTT04pIHtcbiAgICAgIEpTT04gPSB7fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmKG4pIHtcbiAgICAgICAgLy8gRm9ybWF0IGludGVnZXJzIHRvIGhhdmUgYXQgbGVhc3QgdHdvIGRpZ2l0cy5cbiAgICAgICAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4gOiBuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgRGF0ZS5wcm90b3R5cGUudG9KU09OICE9PSAnZnVuY3Rpb24nKSB7XG5cbiAgICAgICAgRGF0ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKGtleSkge1xuXG4gICAgICAgICAgICByZXR1cm4gaXNGaW5pdGUodGhpcy52YWx1ZU9mKCkpID9cbiAgICAgICAgICAgICAgICB0aGlzLmdldFVUQ0Z1bGxZZWFyKCkgICAgICsgJy0nICtcbiAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDTW9udGgoKSArIDEpICsgJy0nICtcbiAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDRGF0ZSgpKSAgICAgICsgJ1QnICtcbiAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDSG91cnMoKSkgICAgICsgJzonICtcbiAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDTWludXRlcygpKSAgICsgJzonICtcbiAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDU2Vjb25kcygpKSAgICsgJ1onIDogbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICBTdHJpbmcucHJvdG90eXBlLnRvSlNPTiAgICAgID1cbiAgICAgICAgICAgIE51bWJlci5wcm90b3R5cGUudG9KU09OICA9XG4gICAgICAgICAgICBCb29sZWFuLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgY3ggPSAvW1xcdTAwMDBcXHUwMGFkXFx1MDYwMC1cXHUwNjA0XFx1MDcwZlxcdTE3YjRcXHUxN2I1XFx1MjAwYy1cXHUyMDBmXFx1MjAyOC1cXHUyMDJmXFx1MjA2MC1cXHUyMDZmXFx1ZmVmZlxcdWZmZjAtXFx1ZmZmZl0vZyxcbiAgICAgICAgZXNjYXBhYmxlID0gL1tcXFxcXFxcIlxceDAwLVxceDFmXFx4N2YtXFx4OWZcXHUwMGFkXFx1MDYwMC1cXHUwNjA0XFx1MDcwZlxcdTE3YjRcXHUxN2I1XFx1MjAwYy1cXHUyMDBmXFx1MjAyOC1cXHUyMDJmXFx1MjA2MC1cXHUyMDZmXFx1ZmVmZlxcdWZmZjAtXFx1ZmZmZl0vZyxcbiAgICAgICAgZ2FwLFxuICAgICAgICBpbmRlbnQsXG4gICAgICAgIG1ldGEgPSB7ICAgIC8vIHRhYmxlIG9mIGNoYXJhY3RlciBzdWJzdGl0dXRpb25zXG4gICAgICAgICAgICAnXFxiJzogJ1xcXFxiJyxcbiAgICAgICAgICAgICdcXHQnOiAnXFxcXHQnLFxuICAgICAgICAgICAgJ1xcbic6ICdcXFxcbicsXG4gICAgICAgICAgICAnXFxmJzogJ1xcXFxmJyxcbiAgICAgICAgICAgICdcXHInOiAnXFxcXHInLFxuICAgICAgICAgICAgJ1wiJyA6ICdcXFxcXCInLFxuICAgICAgICAgICAgJ1xcXFwnOiAnXFxcXFxcXFwnXG4gICAgICAgIH0sXG4gICAgICAgIHJlcDtcblxuXG4gICAgZnVuY3Rpb24gcXVvdGUoc3RyaW5nKSB7XG5cbi8vIElmIHRoZSBzdHJpbmcgY29udGFpbnMgbm8gY29udHJvbCBjaGFyYWN0ZXJzLCBubyBxdW90ZSBjaGFyYWN0ZXJzLCBhbmQgbm9cbi8vIGJhY2tzbGFzaCBjaGFyYWN0ZXJzLCB0aGVuIHdlIGNhbiBzYWZlbHkgc2xhcCBzb21lIHF1b3RlcyBhcm91bmQgaXQuXG4vLyBPdGhlcndpc2Ugd2UgbXVzdCBhbHNvIHJlcGxhY2UgdGhlIG9mZmVuZGluZyBjaGFyYWN0ZXJzIHdpdGggc2FmZSBlc2NhcGVcbi8vIHNlcXVlbmNlcy5cblxuICAgICAgICBlc2NhcGFibGUubGFzdEluZGV4ID0gMDtcbiAgICAgICAgcmV0dXJuIGVzY2FwYWJsZS50ZXN0KHN0cmluZykgPyAnXCInICsgc3RyaW5nLnJlcGxhY2UoZXNjYXBhYmxlLCBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgdmFyIGMgPSBtZXRhW2FdO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBjID09PSAnc3RyaW5nJyA/IGMgOlxuICAgICAgICAgICAgICAgICdcXFxcdScgKyAoJzAwMDAnICsgYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpO1xuICAgICAgICB9KSArICdcIicgOiAnXCInICsgc3RyaW5nICsgJ1wiJztcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHN0cihrZXksIGhvbGRlcikge1xuXG4vLyBQcm9kdWNlIGEgc3RyaW5nIGZyb20gaG9sZGVyW2tleV0uXG5cbiAgICAgICAgdmFyIGksICAgICAgICAgIC8vIFRoZSBsb29wIGNvdW50ZXIuXG4gICAgICAgICAgICBrLCAgICAgICAgICAvLyBUaGUgbWVtYmVyIGtleS5cbiAgICAgICAgICAgIHYsICAgICAgICAgIC8vIFRoZSBtZW1iZXIgdmFsdWUuXG4gICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICBtaW5kID0gZ2FwLFxuICAgICAgICAgICAgcGFydGlhbCxcbiAgICAgICAgICAgIHZhbHVlID0gaG9sZGVyW2tleV07XG5cbi8vIElmIHRoZSB2YWx1ZSBoYXMgYSB0b0pTT04gbWV0aG9kLCBjYWxsIGl0IHRvIG9idGFpbiBhIHJlcGxhY2VtZW50IHZhbHVlLlxuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIHZhbHVlLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0pTT04oa2V5KTtcbiAgICAgICAgfVxuXG4vLyBJZiB3ZSB3ZXJlIGNhbGxlZCB3aXRoIGEgcmVwbGFjZXIgZnVuY3Rpb24sIHRoZW4gY2FsbCB0aGUgcmVwbGFjZXIgdG9cbi8vIG9idGFpbiBhIHJlcGxhY2VtZW50IHZhbHVlLlxuXG4gICAgICAgIGlmICh0eXBlb2YgcmVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHJlcC5jYWxsKGhvbGRlciwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cblxuLy8gV2hhdCBoYXBwZW5zIG5leHQgZGVwZW5kcyBvbiB0aGUgdmFsdWUncyB0eXBlLlxuXG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICByZXR1cm4gcXVvdGUodmFsdWUpO1xuXG4gICAgICAgIGNhc2UgJ251bWJlcic6XG5cbi8vIEpTT04gbnVtYmVycyBtdXN0IGJlIGZpbml0ZS4gRW5jb2RlIG5vbi1maW5pdGUgbnVtYmVycyBhcyBudWxsLlxuXG4gICAgICAgICAgICByZXR1cm4gaXNGaW5pdGUodmFsdWUpID8gU3RyaW5nKHZhbHVlKSA6ICdudWxsJztcblxuICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgY2FzZSAnbnVsbCc6XG5cbi8vIElmIHRoZSB2YWx1ZSBpcyBhIGJvb2xlYW4gb3IgbnVsbCwgY29udmVydCBpdCB0byBhIHN0cmluZy4gTm90ZTpcbi8vIHR5cGVvZiBudWxsIGRvZXMgbm90IHByb2R1Y2UgJ251bGwnLiBUaGUgY2FzZSBpcyBpbmNsdWRlZCBoZXJlIGluXG4vLyB0aGUgcmVtb3RlIGNoYW5jZSB0aGF0IHRoaXMgZ2V0cyBmaXhlZCBzb21lZGF5LlxuXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcblxuLy8gSWYgdGhlIHR5cGUgaXMgJ29iamVjdCcsIHdlIG1pZ2h0IGJlIGRlYWxpbmcgd2l0aCBhbiBvYmplY3Qgb3IgYW4gYXJyYXkgb3Jcbi8vIG51bGwuXG5cbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcblxuLy8gRHVlIHRvIGEgc3BlY2lmaWNhdGlvbiBibHVuZGVyIGluIEVDTUFTY3JpcHQsIHR5cGVvZiBudWxsIGlzICdvYmplY3QnLFxuLy8gc28gd2F0Y2ggb3V0IGZvciB0aGF0IGNhc2UuXG5cbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgICAgICAgfVxuXG4vLyBNYWtlIGFuIGFycmF5IHRvIGhvbGQgdGhlIHBhcnRpYWwgcmVzdWx0cyBvZiBzdHJpbmdpZnlpbmcgdGhpcyBvYmplY3QgdmFsdWUuXG5cbiAgICAgICAgICAgIGdhcCArPSBpbmRlbnQ7XG4gICAgICAgICAgICBwYXJ0aWFsID0gW107XG5cbi8vIElzIHRoZSB2YWx1ZSBhbiBhcnJheT9cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG5cbi8vIFRoZSB2YWx1ZSBpcyBhbiBhcnJheS4gU3RyaW5naWZ5IGV2ZXJ5IGVsZW1lbnQuIFVzZSBudWxsIGFzIGEgcGxhY2Vob2xkZXJcbi8vIGZvciBub24tSlNPTiB2YWx1ZXMuXG5cbiAgICAgICAgICAgICAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpYWxbaV0gPSBzdHIoaSwgdmFsdWUpIHx8ICdudWxsJztcbiAgICAgICAgICAgICAgICB9XG5cbi8vIEpvaW4gYWxsIG9mIHRoZSBlbGVtZW50cyB0b2dldGhlciwgc2VwYXJhdGVkIHdpdGggY29tbWFzLCBhbmQgd3JhcCB0aGVtIGluXG4vLyBicmFja2V0cy5cblxuICAgICAgICAgICAgICAgIHYgPSBwYXJ0aWFsLmxlbmd0aCA9PT0gMCA/ICdbXScgOiBnYXAgP1xuICAgICAgICAgICAgICAgICAgICAnW1xcbicgKyBnYXAgKyBwYXJ0aWFsLmpvaW4oJyxcXG4nICsgZ2FwKSArICdcXG4nICsgbWluZCArICddJyA6XG4gICAgICAgICAgICAgICAgICAgICdbJyArIHBhcnRpYWwuam9pbignLCcpICsgJ10nO1xuICAgICAgICAgICAgICAgIGdhcCA9IG1pbmQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9XG5cbi8vIElmIHRoZSByZXBsYWNlciBpcyBhbiBhcnJheSwgdXNlIGl0IHRvIHNlbGVjdCB0aGUgbWVtYmVycyB0byBiZSBzdHJpbmdpZmllZC5cblxuICAgICAgICAgICAgaWYgKHJlcCAmJiB0eXBlb2YgcmVwID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHJlcC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVwW2ldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgayA9IHJlcFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBzdHIoaywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsLnB1c2gocXVvdGUoaykgKyAoZ2FwID8gJzogJyA6ICc6JykgKyB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbi8vIE90aGVyd2lzZSwgaXRlcmF0ZSB0aHJvdWdoIGFsbCBvZiB0aGUga2V5cyBpbiB0aGUgb2JqZWN0LlxuXG4gICAgICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gc3RyKGssIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGlhbC5wdXNoKHF1b3RlKGspICsgKGdhcCA/ICc6ICcgOiAnOicpICsgdik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbi8vIEpvaW4gYWxsIG9mIHRoZSBtZW1iZXIgdGV4dHMgdG9nZXRoZXIsIHNlcGFyYXRlZCB3aXRoIGNvbW1hcyxcbi8vIGFuZCB3cmFwIHRoZW0gaW4gYnJhY2VzLlxuXG4gICAgICAgICAgICB2ID0gcGFydGlhbC5sZW5ndGggPT09IDAgPyAne30nIDogZ2FwID9cbiAgICAgICAgICAgICAgICAne1xcbicgKyBnYXAgKyBwYXJ0aWFsLmpvaW4oJyxcXG4nICsgZ2FwKSArICdcXG4nICsgbWluZCArICd9JyA6XG4gICAgICAgICAgICAgICAgJ3snICsgcGFydGlhbC5qb2luKCcsJykgKyAnfSc7XG4gICAgICAgICAgICBnYXAgPSBtaW5kO1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cbiAgICB9XG5cbi8vIElmIHRoZSBKU09OIG9iamVjdCBkb2VzIG5vdCB5ZXQgaGF2ZSBhIHN0cmluZ2lmeSBtZXRob2QsIGdpdmUgaXQgb25lLlxuXG4gICAgaWYgKHR5cGVvZiBKU09OLnN0cmluZ2lmeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBKU09OLnN0cmluZ2lmeSA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKSB7XG5cbi8vIFRoZSBzdHJpbmdpZnkgbWV0aG9kIHRha2VzIGEgdmFsdWUgYW5kIGFuIG9wdGlvbmFsIHJlcGxhY2VyLCBhbmQgYW4gb3B0aW9uYWxcbi8vIHNwYWNlIHBhcmFtZXRlciwgYW5kIHJldHVybnMgYSBKU09OIHRleHQuIFRoZSByZXBsYWNlciBjYW4gYmUgYSBmdW5jdGlvblxuLy8gdGhhdCBjYW4gcmVwbGFjZSB2YWx1ZXMsIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCB3aWxsIHNlbGVjdCB0aGUga2V5cy5cbi8vIEEgZGVmYXVsdCByZXBsYWNlciBtZXRob2QgY2FuIGJlIHByb3ZpZGVkLiBVc2Ugb2YgdGhlIHNwYWNlIHBhcmFtZXRlciBjYW5cbi8vIHByb2R1Y2UgdGV4dCB0aGF0IGlzIG1vcmUgZWFzaWx5IHJlYWRhYmxlLlxuXG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIGdhcCA9ICcnO1xuICAgICAgICAgICAgaW5kZW50ID0gJyc7XG5cbi8vIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBudW1iZXIsIG1ha2UgYW4gaW5kZW50IHN0cmluZyBjb250YWluaW5nIHRoYXRcbi8vIG1hbnkgc3BhY2VzLlxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNwYWNlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzcGFjZTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGVudCArPSAnICc7XG4gICAgICAgICAgICAgICAgfVxuXG4vLyBJZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGlzIGEgc3RyaW5nLCBpdCB3aWxsIGJlIHVzZWQgYXMgdGhlIGluZGVudCBzdHJpbmcuXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGluZGVudCA9IHNwYWNlO1xuICAgICAgICAgICAgfVxuXG4vLyBJZiB0aGVyZSBpcyBhIHJlcGxhY2VyLCBpdCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXkuXG4vLyBPdGhlcndpc2UsIHRocm93IGFuIGVycm9yLlxuXG4gICAgICAgICAgICByZXAgPSByZXBsYWNlcjtcbiAgICAgICAgICAgIGlmIChyZXBsYWNlciAmJiB0eXBlb2YgcmVwbGFjZXIgIT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiByZXBsYWNlciAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHJlcGxhY2VyLmxlbmd0aCAhPT0gJ251bWJlcicpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdKU09OLnN0cmluZ2lmeScpO1xuICAgICAgICAgICAgfVxuXG4vLyBNYWtlIGEgZmFrZSByb290IG9iamVjdCBjb250YWluaW5nIG91ciB2YWx1ZSB1bmRlciB0aGUga2V5IG9mICcnLlxuLy8gUmV0dXJuIHRoZSByZXN1bHQgb2Ygc3RyaW5naWZ5aW5nIHRoZSB2YWx1ZS5cblxuICAgICAgICAgICAgcmV0dXJuIHN0cignJywgeycnOiB2YWx1ZX0pO1xuICAgICAgICB9O1xuICAgIH1cblxuXG4vLyBJZiB0aGUgSlNPTiBvYmplY3QgZG9lcyBub3QgeWV0IGhhdmUgYSBwYXJzZSBtZXRob2QsIGdpdmUgaXQgb25lLlxuXG4gICAgaWYgKHR5cGVvZiBKU09OLnBhcnNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIEpTT04ucGFyc2UgPSBmdW5jdGlvbiAodGV4dCwgcmV2aXZlcikge1xuXG4vLyBUaGUgcGFyc2UgbWV0aG9kIHRha2VzIGEgdGV4dCBhbmQgYW4gb3B0aW9uYWwgcmV2aXZlciBmdW5jdGlvbiwgYW5kIHJldHVybnNcbi8vIGEgSmF2YVNjcmlwdCB2YWx1ZSBpZiB0aGUgdGV4dCBpcyBhIHZhbGlkIEpTT04gdGV4dC5cblxuICAgICAgICAgICAgdmFyIGo7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHdhbGsoaG9sZGVyLCBrZXkpIHtcblxuLy8gVGhlIHdhbGsgbWV0aG9kIGlzIHVzZWQgdG8gcmVjdXJzaXZlbHkgd2FsayB0aGUgcmVzdWx0aW5nIHN0cnVjdHVyZSBzb1xuLy8gdGhhdCBtb2RpZmljYXRpb25zIGNhbiBiZSBtYWRlLlxuXG4gICAgICAgICAgICAgICAgdmFyIGssIHYsIHZhbHVlID0gaG9sZGVyW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSB3YWxrKHZhbHVlLCBrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2tdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsdWVba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXZpdmVyLmNhbGwoaG9sZGVyLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuXG4vLyBQYXJzaW5nIGhhcHBlbnMgaW4gZm91ciBzdGFnZXMuIEluIHRoZSBmaXJzdCBzdGFnZSwgd2UgcmVwbGFjZSBjZXJ0YWluXG4vLyBVbmljb2RlIGNoYXJhY3RlcnMgd2l0aCBlc2NhcGUgc2VxdWVuY2VzLiBKYXZhU2NyaXB0IGhhbmRsZXMgbWFueSBjaGFyYWN0ZXJzXG4vLyBpbmNvcnJlY3RseSwgZWl0aGVyIHNpbGVudGx5IGRlbGV0aW5nIHRoZW0sIG9yIHRyZWF0aW5nIHRoZW0gYXMgbGluZSBlbmRpbmdzLlxuXG4gICAgICAgICAgICB0ZXh0ID0gU3RyaW5nKHRleHQpO1xuICAgICAgICAgICAgY3gubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIGlmIChjeC50ZXN0KHRleHQpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShjeCwgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdcXFxcdScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKCcwMDAwJyArIGEuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC00KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuLy8gSW4gdGhlIHNlY29uZCBzdGFnZSwgd2UgcnVuIHRoZSB0ZXh0IGFnYWluc3QgcmVndWxhciBleHByZXNzaW9ucyB0aGF0IGxvb2tcbi8vIGZvciBub24tSlNPTiBwYXR0ZXJucy4gV2UgYXJlIGVzcGVjaWFsbHkgY29uY2VybmVkIHdpdGggJygpJyBhbmQgJ25ldydcbi8vIGJlY2F1c2UgdGhleSBjYW4gY2F1c2UgaW52b2NhdGlvbiwgYW5kICc9JyBiZWNhdXNlIGl0IGNhbiBjYXVzZSBtdXRhdGlvbi5cbi8vIEJ1dCBqdXN0IHRvIGJlIHNhZmUsIHdlIHdhbnQgdG8gcmVqZWN0IGFsbCB1bmV4cGVjdGVkIGZvcm1zLlxuXG4vLyBXZSBzcGxpdCB0aGUgc2Vjb25kIHN0YWdlIGludG8gNCByZWdleHAgb3BlcmF0aW9ucyBpbiBvcmRlciB0byB3b3JrIGFyb3VuZFxuLy8gY3JpcHBsaW5nIGluZWZmaWNpZW5jaWVzIGluIElFJ3MgYW5kIFNhZmFyaSdzIHJlZ2V4cCBlbmdpbmVzLiBGaXJzdCB3ZVxuLy8gcmVwbGFjZSB0aGUgSlNPTiBiYWNrc2xhc2ggcGFpcnMgd2l0aCAnQCcgKGEgbm9uLUpTT04gY2hhcmFjdGVyKS4gU2Vjb25kLCB3ZVxuLy8gcmVwbGFjZSBhbGwgc2ltcGxlIHZhbHVlIHRva2VucyB3aXRoICddJyBjaGFyYWN0ZXJzLiBUaGlyZCwgd2UgZGVsZXRlIGFsbFxuLy8gb3BlbiBicmFja2V0cyB0aGF0IGZvbGxvdyBhIGNvbG9uIG9yIGNvbW1hIG9yIHRoYXQgYmVnaW4gdGhlIHRleHQuIEZpbmFsbHksXG4vLyB3ZSBsb29rIHRvIHNlZSB0aGF0IHRoZSByZW1haW5pbmcgY2hhcmFjdGVycyBhcmUgb25seSB3aGl0ZXNwYWNlIG9yICddJyBvclxuLy8gJywnIG9yICc6JyBvciAneycgb3IgJ30nLiBJZiB0aGF0IGlzIHNvLCB0aGVuIHRoZSB0ZXh0IGlzIHNhZmUgZm9yIGV2YWwuXG5cbiAgICAgICAgICAgIGlmICgvXltcXF0sOnt9XFxzXSokL1xuICAgICAgICAgICAgICAgICAgICAudGVzdCh0ZXh0LnJlcGxhY2UoL1xcXFwoPzpbXCJcXFxcXFwvYmZucnRdfHVbMC05YS1mQS1GXXs0fSkvZywgJ0AnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiW15cIlxcXFxcXG5cXHJdKlwifHRydWV8ZmFsc2V8bnVsbHwtP1xcZCsoPzpcXC5cXGQqKT8oPzpbZUVdWytcXC1dP1xcZCspPy9nLCAnXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKD86Xnw6fCwpKD86XFxzKlxcWykrL2csICcnKSkpIHtcblxuLy8gSW4gdGhlIHRoaXJkIHN0YWdlIHdlIHVzZSB0aGUgZXZhbCBmdW5jdGlvbiB0byBjb21waWxlIHRoZSB0ZXh0IGludG8gYVxuLy8gSmF2YVNjcmlwdCBzdHJ1Y3R1cmUuIFRoZSAneycgb3BlcmF0b3IgaXMgc3ViamVjdCB0byBhIHN5bnRhY3RpYyBhbWJpZ3VpdHlcbi8vIGluIEphdmFTY3JpcHQ6IGl0IGNhbiBiZWdpbiBhIGJsb2NrIG9yIGFuIG9iamVjdCBsaXRlcmFsLiBXZSB3cmFwIHRoZSB0ZXh0XG4vLyBpbiBwYXJlbnMgdG8gZWxpbWluYXRlIHRoZSBhbWJpZ3VpdHkuXG5cbiAgICAgICAgICAgICAgICBqID0gZXZhbCgnKCcgKyB0ZXh0ICsgJyknKTtcblxuLy8gSW4gdGhlIG9wdGlvbmFsIGZvdXJ0aCBzdGFnZSwgd2UgcmVjdXJzaXZlbHkgd2FsayB0aGUgbmV3IHN0cnVjdHVyZSwgcGFzc2luZ1xuLy8gZWFjaCBuYW1lL3ZhbHVlIHBhaXIgdG8gYSByZXZpdmVyIGZ1bmN0aW9uIGZvciBwb3NzaWJsZSB0cmFuc2Zvcm1hdGlvbi5cblxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgcmV2aXZlciA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgICAgICAgICAgIHdhbGsoeycnOiBqfSwgJycpIDogajtcbiAgICAgICAgICAgIH1cblxuLy8gSWYgdGhlIHRleHQgaXMgbm90IEpTT04gcGFyc2VhYmxlLCB0aGVuIGEgU3ludGF4RXJyb3IgaXMgdGhyb3duLlxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0pTT04ucGFyc2UnKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnbG9iYWwuSlNPTiA9IEpTT047XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBKU09OO1xufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9fSlNPTkAxLjAuMEBKU09OL2pzb24yLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9fSlNPTkAxLjAuMEBKU09OL2pzb24yLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJ2YXIgY2hhcmVuYyA9IHtcbiAgLy8gVVRGLTggZW5jb2RpbmdcbiAgdXRmODoge1xuICAgIC8vIENvbnZlcnQgYSBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgc3RyaW5nVG9CeXRlczogZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gY2hhcmVuYy5iaW4uc3RyaW5nVG9CeXRlcyh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSkpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIHN0cmluZ1xuICAgIGJ5dGVzVG9TdHJpbmc6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShjaGFyZW5jLmJpbi5ieXRlc1RvU3RyaW5nKGJ5dGVzKSkpO1xuICAgIH1cbiAgfSxcblxuICAvLyBCaW5hcnkgZW5jb2RpbmdcbiAgYmluOiB7XG4gICAgLy8gQ29udmVydCBhIHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBzdHJpbmdUb0J5dGVzOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKVxuICAgICAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRik7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgc3RyaW5nXG4gICAgYnl0ZXNUb1N0cmluZzogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIHN0ciA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICBzdHIucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKSk7XG4gICAgICByZXR1cm4gc3RyLmpvaW4oJycpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjaGFyZW5jO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19jaGFyZW5jQDAuMC4yQGNoYXJlbmMvY2hhcmVuYy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvX2NoYXJlbmNAMC4wLjJAY2hhcmVuYy9jaGFyZW5jLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBiYXNlNjRtYXBcbiAgICAgID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nLFxuXG4gIGNyeXB0ID0ge1xuICAgIC8vIEJpdC13aXNlIHJvdGF0aW9uIGxlZnRcbiAgICByb3RsOiBmdW5jdGlvbihuLCBiKSB7XG4gICAgICByZXR1cm4gKG4gPDwgYikgfCAobiA+Pj4gKDMyIC0gYikpO1xuICAgIH0sXG5cbiAgICAvLyBCaXQtd2lzZSByb3RhdGlvbiByaWdodFxuICAgIHJvdHI6IGZ1bmN0aW9uKG4sIGIpIHtcbiAgICAgIHJldHVybiAobiA8PCAoMzIgLSBiKSkgfCAobiA+Pj4gYik7XG4gICAgfSxcblxuICAgIC8vIFN3YXAgYmlnLWVuZGlhbiB0byBsaXR0bGUtZW5kaWFuIGFuZCB2aWNlIHZlcnNhXG4gICAgZW5kaWFuOiBmdW5jdGlvbihuKSB7XG4gICAgICAvLyBJZiBudW1iZXIgZ2l2ZW4sIHN3YXAgZW5kaWFuXG4gICAgICBpZiAobi5jb25zdHJ1Y3RvciA9PSBOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGNyeXB0LnJvdGwobiwgOCkgJiAweDAwRkYwMEZGIHwgY3J5cHQucm90bChuLCAyNCkgJiAweEZGMDBGRjAwO1xuICAgICAgfVxuXG4gICAgICAvLyBFbHNlLCBhc3N1bWUgYXJyYXkgYW5kIHN3YXAgYWxsIGl0ZW1zXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG4ubGVuZ3RoOyBpKyspXG4gICAgICAgIG5baV0gPSBjcnlwdC5lbmRpYW4obltpXSk7XG4gICAgICByZXR1cm4gbjtcbiAgICB9LFxuXG4gICAgLy8gR2VuZXJhdGUgYW4gYXJyYXkgb2YgYW55IGxlbmd0aCBvZiByYW5kb20gYnl0ZXNcbiAgICByYW5kb21CeXRlczogZnVuY3Rpb24obikge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXTsgbiA+IDA7IG4tLSlcbiAgICAgICAgYnl0ZXMucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYmlnLWVuZGlhbiAzMi1iaXQgd29yZHNcbiAgICBieXRlc1RvV29yZHM6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciB3b3JkcyA9IFtdLCBpID0gMCwgYiA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKywgYiArPSA4KVxuICAgICAgICB3b3Jkc1tiID4+PiA1XSB8PSBieXRlc1tpXSA8PCAoMjQgLSBiICUgMzIpO1xuICAgICAgcmV0dXJuIHdvcmRzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGJpZy1lbmRpYW4gMzItYml0IHdvcmRzIHRvIGEgYnl0ZSBhcnJheVxuICAgIHdvcmRzVG9CeXRlczogZnVuY3Rpb24od29yZHMpIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGIgPSAwOyBiIDwgd29yZHMubGVuZ3RoICogMzI7IGIgKz0gOClcbiAgICAgICAgYnl0ZXMucHVzaCgod29yZHNbYiA+Pj4gNV0gPj4+ICgyNCAtIGIgJSAzMikpICYgMHhGRik7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgaGV4IHN0cmluZ1xuICAgIGJ5dGVzVG9IZXg6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciBoZXggPSBbXSwgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBoZXgucHVzaCgoYnl0ZXNbaV0gPj4+IDQpLnRvU3RyaW5nKDE2KSk7XG4gICAgICAgIGhleC5wdXNoKChieXRlc1tpXSAmIDB4RikudG9TdHJpbmcoMTYpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoZXguam9pbignJyk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBoZXggc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIGhleFRvQnl0ZXM6IGZ1bmN0aW9uKGhleCkge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgYyA9IDA7IGMgPCBoZXgubGVuZ3RoOyBjICs9IDIpXG4gICAgICAgIGJ5dGVzLnB1c2gocGFyc2VJbnQoaGV4LnN1YnN0cihjLCAyKSwgMTYpKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBiYXNlLTY0IHN0cmluZ1xuICAgIGJ5dGVzVG9CYXNlNjQ6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciBiYXNlNjQgPSBbXSwgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICB2YXIgdHJpcGxldCA9IChieXRlc1tpXSA8PCAxNikgfCAoYnl0ZXNbaSArIDFdIDw8IDgpIHwgYnl0ZXNbaSArIDJdO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKylcbiAgICAgICAgICBpZiAoaSAqIDggKyBqICogNiA8PSBieXRlcy5sZW5ndGggKiA4KVxuICAgICAgICAgICAgYmFzZTY0LnB1c2goYmFzZTY0bWFwLmNoYXJBdCgodHJpcGxldCA+Pj4gNiAqICgzIC0gaikpICYgMHgzRikpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGJhc2U2NC5wdXNoKCc9Jyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYmFzZTY0LmpvaW4oJycpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYmFzZS02NCBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgYmFzZTY0VG9CeXRlczogZnVuY3Rpb24oYmFzZTY0KSB7XG4gICAgICAvLyBSZW1vdmUgbm9uLWJhc2UtNjQgY2hhcmFjdGVyc1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnJlcGxhY2UoL1teQS1aMC05K1xcL10vaWcsICcnKTtcblxuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgaSA9IDAsIGltb2Q0ID0gMDsgaSA8IGJhc2U2NC5sZW5ndGg7XG4gICAgICAgICAgaW1vZDQgPSArK2kgJSA0KSB7XG4gICAgICAgIGlmIChpbW9kNCA9PSAwKSBjb250aW51ZTtcbiAgICAgICAgYnl0ZXMucHVzaCgoKGJhc2U2NG1hcC5pbmRleE9mKGJhc2U2NC5jaGFyQXQoaSAtIDEpKVxuICAgICAgICAgICAgJiAoTWF0aC5wb3coMiwgLTIgKiBpbW9kNCArIDgpIC0gMSkpIDw8IChpbW9kNCAqIDIpKVxuICAgICAgICAgICAgfCAoYmFzZTY0bWFwLmluZGV4T2YoYmFzZTY0LmNoYXJBdChpKSkgPj4+ICg2IC0gaW1vZDQgKiAyKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGNyeXB0O1xufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9fY3J5cHRAMC4wLjJAY3J5cHQvY3J5cHQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL19jcnlwdEAwLjAuMkBjcnlwdC9jcnlwdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vX2lzLWJ1ZmZlckAxLjEuNkBpcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL19pcy1idWZmZXJAMS4xLjZAaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCIoZnVuY3Rpb24oKXtcclxuICB2YXIgY3J5cHQgPSByZXF1aXJlKCdjcnlwdCcpLFxyXG4gICAgICB1dGY4ID0gcmVxdWlyZSgnY2hhcmVuYycpLnV0ZjgsXHJcbiAgICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyksXHJcbiAgICAgIGJpbiA9IHJlcXVpcmUoJ2NoYXJlbmMnKS5iaW4sXHJcblxyXG4gIC8vIFRoZSBjb3JlXHJcbiAgbWQ1ID0gZnVuY3Rpb24gKG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuICAgIC8vIENvbnZlcnQgdG8gYnl0ZSBhcnJheVxyXG4gICAgaWYgKG1lc3NhZ2UuY29uc3RydWN0b3IgPT0gU3RyaW5nKVxyXG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmVuY29kaW5nID09PSAnYmluYXJ5JylcclxuICAgICAgICBtZXNzYWdlID0gYmluLnN0cmluZ1RvQnl0ZXMobWVzc2FnZSk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBtZXNzYWdlID0gdXRmOC5zdHJpbmdUb0J5dGVzKG1lc3NhZ2UpO1xyXG4gICAgZWxzZSBpZiAoaXNCdWZmZXIobWVzc2FnZSkpXHJcbiAgICAgIG1lc3NhZ2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChtZXNzYWdlLCAwKTtcclxuICAgIGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KG1lc3NhZ2UpKVxyXG4gICAgICBtZXNzYWdlID0gbWVzc2FnZS50b1N0cmluZygpO1xyXG4gICAgLy8gZWxzZSwgYXNzdW1lIGJ5dGUgYXJyYXkgYWxyZWFkeVxyXG5cclxuICAgIHZhciBtID0gY3J5cHQuYnl0ZXNUb1dvcmRzKG1lc3NhZ2UpLFxyXG4gICAgICAgIGwgPSBtZXNzYWdlLmxlbmd0aCAqIDgsXHJcbiAgICAgICAgYSA9ICAxNzMyNTg0MTkzLFxyXG4gICAgICAgIGIgPSAtMjcxNzMzODc5LFxyXG4gICAgICAgIGMgPSAtMTczMjU4NDE5NCxcclxuICAgICAgICBkID0gIDI3MTczMzg3ODtcclxuXHJcbiAgICAvLyBTd2FwIGVuZGlhblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1baV0gPSAoKG1baV0gPDwgIDgpIHwgKG1baV0gPj4+IDI0KSkgJiAweDAwRkYwMEZGIHxcclxuICAgICAgICAgICAgICgobVtpXSA8PCAyNCkgfCAobVtpXSA+Pj4gIDgpKSAmIDB4RkYwMEZGMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFkZGluZ1xyXG4gICAgbVtsID4+PiA1XSB8PSAweDgwIDw8IChsICUgMzIpO1xyXG4gICAgbVsoKChsICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IGw7XHJcblxyXG4gICAgLy8gTWV0aG9kIHNob3J0Y3V0c1xyXG4gICAgdmFyIEZGID0gbWQ1Ll9mZixcclxuICAgICAgICBHRyA9IG1kNS5fZ2csXHJcbiAgICAgICAgSEggPSBtZDUuX2hoLFxyXG4gICAgICAgIElJID0gbWQ1Ll9paTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG0ubGVuZ3RoOyBpICs9IDE2KSB7XHJcblxyXG4gICAgICB2YXIgYWEgPSBhLFxyXG4gICAgICAgICAgYmIgPSBiLFxyXG4gICAgICAgICAgY2MgPSBjLFxyXG4gICAgICAgICAgZGQgPSBkO1xyXG5cclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsgMF0sICA3LCAtNjgwODc2OTM2KTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsgMl0sIDE3LCAgNjA2MTA1ODE5KTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krIDRdLCAgNywgLTE3NjQxODg5Nyk7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDVdLCAxMiwgIDEyMDAwODA0MjYpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsgN10sIDIyLCAtNDU3MDU5ODMpO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKyA4XSwgIDcsICAxNzcwMDM1NDE2KTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krMTBdLCAxNywgLTQyMDYzKTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krMTJdLCAgNywgIDE4MDQ2MDM2ODIpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKzEzXSwgMTIsIC00MDM0MTEwMSk7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krMTRdLCAxNywgLTE1MDIwMDIyOTApO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKzE1XSwgMjIsICAxMjM2NTM1MzI5KTtcclxuXHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krIDFdLCAgNSwgLTE2NTc5NjUxMCk7XHJcbiAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBtW2krIDZdLCAgOSwgLTEwNjk1MDE2MzIpO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKzExXSwgMTQsICA2NDM3MTc3MTMpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKyAwXSwgMjAsIC0zNzM4OTczMDIpO1xyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyA1XSwgIDUsIC03MDE1NTg2OTEpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKzEwXSwgIDksICAzODAxNjA4Myk7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krIDRdLCAyMCwgLTQwNTUzNzg0OCk7XHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krIDldLCAgNSwgIDU2ODQ0NjQzOCk7XHJcbiAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBtW2krMTRdLCAgOSwgLTEwMTk4MDM2OTApO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKyAzXSwgMTQsIC0xODczNjM5NjEpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKyA4XSwgMjAsICAxMTYzNTMxNTAxKTtcclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsxM10sICA1LCAtMTQ0NDY4MTQ2Nyk7XHJcbiAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBtW2krIDJdLCAgOSwgLTUxNDAzNzg0KTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsgN10sIDE0LCAgMTczNTMyODQ3Myk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xyXG5cclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsgNV0sICA0LCAtMzc4NTU4KTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krMTFdLCAxNiwgIDE4MzkwMzA1NjIpO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKzE0XSwgMjMsIC0zNTMwOTU1Nik7XHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDFdLCAgNCwgLTE1MzA5OTIwNjApO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKyA0XSwgMTEsICAxMjcyODkzMzUzKTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsgN10sIDE2LCAtMTU1NDk3NjMyKTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsxMF0sIDIzLCAtMTA5NDczMDY0MCk7XHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krMTNdLCAgNCwgIDY4MTI3OTE3NCk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krIDBdLCAxMSwgLTM1ODUzNzIyMik7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krIDNdLCAxNiwgLTcyMjUyMTk3OSk7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krIDZdLCAyMywgIDc2MDI5MTg5KTtcclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsgOV0sICA0LCAtNjQwMzY0NDg3KTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsxMl0sIDExLCAtNDIxODE1ODM1KTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsxNV0sIDE2LCAgNTMwNzQyNTIwKTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcclxuXHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krIDBdLCAgNiwgLTE5ODYzMDg0NCk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krIDddLCAxMCwgIDExMjY4OTE0MTUpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKzE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsgNV0sIDIxLCAtNTc0MzQwNTUpO1xyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKzEyXSwgIDYsICAxNzAwNDg1NTcxKTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsgM10sIDEwLCAtMTg5NDk4NjYwNik7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krMTBdLCAxNSwgLTEwNTE1MjMpO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsgOF0sICA2LCAgMTg3MzMxMzM1OSk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krMTVdLCAxMCwgLTMwNjExNzQ0KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krMTNdLCAyMSwgIDEzMDkxNTE2NDkpO1xyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKyA0XSwgIDYsIC0xNDU1MjMwNzApO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKzExXSwgMTAsIC0xMTIwMjEwMzc5KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsgMl0sIDE1LCAgNzE4Nzg3MjU5KTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcclxuXHJcbiAgICAgIGEgPSAoYSArIGFhKSA+Pj4gMDtcclxuICAgICAgYiA9IChiICsgYmIpID4+PiAwO1xyXG4gICAgICBjID0gKGMgKyBjYykgPj4+IDA7XHJcbiAgICAgIGQgPSAoZCArIGRkKSA+Pj4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3J5cHQuZW5kaWFuKFthLCBiLCBjLCBkXSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gQXV4aWxpYXJ5IGZ1bmN0aW9uc1xyXG4gIG1kNS5fZmYgID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuICAgIHZhciBuID0gYSArIChiICYgYyB8IH5iICYgZCkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG4gIG1kNS5fZ2cgID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuICAgIHZhciBuID0gYSArIChiICYgZCB8IGMgJiB+ZCkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG4gIG1kNS5faGggID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuICAgIHZhciBuID0gYSArIChiIF4gYyBeIGQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2lpICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYyBeIChiIHwgfmQpKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcblxyXG4gIC8vIFBhY2thZ2UgcHJpdmF0ZSBibG9ja3NpemVcclxuICBtZDUuX2Jsb2Nrc2l6ZSA9IDE2O1xyXG4gIG1kNS5fZGlnZXN0c2l6ZSA9IDE2O1xyXG5cclxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICBpZiAobWVzc2FnZSA9PT0gdW5kZWZpbmVkIHx8IG1lc3NhZ2UgPT09IG51bGwpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBhcmd1bWVudCAnICsgbWVzc2FnZSk7XHJcblxyXG4gICAgdmFyIGRpZ2VzdGJ5dGVzID0gY3J5cHQud29yZHNUb0J5dGVzKG1kNShtZXNzYWdlLCBvcHRpb25zKSk7XHJcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLmFzQnl0ZXMgPyBkaWdlc3RieXRlcyA6XHJcbiAgICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLmFzU3RyaW5nID8gYmluLmJ5dGVzVG9TdHJpbmcoZGlnZXN0Ynl0ZXMpIDpcclxuICAgICAgICBjcnlwdC5ieXRlc1RvSGV4KGRpZ2VzdGJ5dGVzKTtcclxuICB9O1xyXG5cclxufSkoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19tZDVAMi4yLjFAbWQ1L21kNS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvX21kNUAyLjIuMUBtZDUvbWQ1LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJpbXBvcnQge3Nob3dDaGlsZExvY2t9IGZyb20gJy4vYXBwL2NoaWxkTG9jayc7XHJcbmltcG9ydCB7Y2hpbGRNZW51fSBmcm9tICcuL2FwcC9jaGlsZE1lbnUnO1xyXG5cclxuaW1wb3J0IHtzaG93RGlhbG9nfSBmcm9tIFwiLi9hcHAvZGlhbG9nXCI7XHJcbmltcG9ydCB7c2hvd0xvYWRpbmcsaGlkZUxvYWRpbmd9IGZyb20gXCIuL2FwcC9sb2FkaW5nXCI7XHJcbmltcG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfSBmcm9tIFwiLi90b29kby9fa2V5Y29kZXNcIjtcclxuaW1wb3J0IHthcHBBcmdzfSBmcm9tICcuL2FwcC9QYWdlQXJncyc7XHJcblxyXG5cclxudmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG52YXIgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWVNZW51KCkge1xyXG4gICAgdGhpcy5sYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5sYXlvdXQpO1xyXG4gICAgdGhpcy5sYXlvdXQuY2xhc3NOYW1lID0gJ2hvbWUtbWVudSc7XHJcbiAgICB0aGlzLmxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICc8ZGl2IGlkPVwibWVudS1idG4wXCIgY2xhc3M9XCJtZW51LWJ0blwiPjxpbWcgc3JjPVwiXCI+PC9kaXY+JyArXHJcbiAgICAgICAgJzxkaXYgaWQ9XCJtZW51LWJ0bjFcIiBjbGFzcz1cIm1lbnUtYnRuXCI+PGltZyBzcmM9XCJcIj48L2Rpdj4nICtcclxuICAgICAgICAnPGRpdiBpZD1cIm1lbnUtYnRuMlwiIGNsYXNzPVwibWVudS1idG5cIj48aW1nIHNyYz1cIlwiPjwvZGl2PicgK1xyXG4gICAgICAgICc8ZGl2IGlkPVwibWVudS1idG4zXCIgY2xhc3M9XCJtZW51LWJ0blwiPjxpbWcgc3JjPVwiXCI+PC9kaXY+JytcclxuICAgICAgICAnPGRpdiBpZD1cIm1lbnUtYnRuNFwiIGNsYXNzPVwibWVudS1idG5cIj48aW1nIHNyYz1cIlwiPjwvZGl2Pic7XHJcbiAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU7ICsraSkge1xyXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5sYXlvdXQucXVlcnlTZWxlY3RvcignI21lbnUtYnRuJyArIGkpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChub2RlKTtcclxuXHJcbiAgICAgICAgLy9zZXRUaW1lb3V0KGZ1bmN0aW9uIChpLCBub2RlKSB7XHJcbiAgICAgICAgdmFyIGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgaW1nLnNyYyA9ICdpbWcvbWVudS9uYXZfJyArIGkgKyAnXzAucG5nJztcclxuICAgICAgICAvL30sIDEwMCAqIGksIGksIG5vZGUpO1xyXG4gICAgfVxyXG59XHJcbkhvbWVNZW51LnByb3RvdHlwZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICoge2ludH0gY3VycmVudCBbMCwzXVxyXG4gICAgICovXHJcbiAgICBjdXJyZW50OiAwLFxyXG4gICAgb25LZXlEb3duOiBudWxsLFxyXG4gICAgdGRlVXNlcjogbnVsbCxcclxuXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoY3VycmVudCwgb25LZXlEb3duLCB0ZGVVc2VyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZChjdXJyZW50KTtcclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IG9uS2V5RG93bjtcclxuICAgICAgICB0aGlzLnRkZVVzZXIgPSB0ZGVVc2VyO1xyXG4gICAgICAgIHZhciBvd25lciA9IHRoaXM7XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgb3duZXIuaGFuZGxlS2V5KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXModGhpcy5jdXJyZW50LCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgX3NldEZvY3VzOiBmdW5jdGlvbiAoY3VycmVudCwgZm9jdXMpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuaXRlbXNbY3VycmVudF07XHJcbiAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBmb2N1cyA/ICdtZW51LWJ0bi1mb2N1cycgOiAnbWVudS1idG4nO1xyXG4gICAgICAgIHZhciBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgIGlmIChmb2N1cykge1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gJ2ltZy9tZW51L25hdl8nICsgY3VycmVudCArICdfMS5wbmcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSAnaW1nL21lbnUvbmF2XycgKyBjdXJyZW50ICsgJ18wLnBuZyc7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkOiBmdW5jdGlvbiAoY3VycmVudCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRGb2N1cyhpLCBjdXJyZW50ID09IGkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoYW5kbGVLZXk6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcztcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgdmFyIGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLmN1cnJlbnQgPCA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazpcclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBBcmdzLm9uRmlyc3RQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwQXJncy5vbkhvbWVQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG93bmVyLnRkZVVzZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9sZExvY2sgPSBvd25lci50ZGVVc2VyLmNoaWxkTG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZExvY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTWVudS5zaG93KGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NoaWxkTG9jayhmdW5jdGlvbiAoY29kZSwgbXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZhbGlkTG9jayhjb2RlLCBtc2csIG93bmVyLCBidG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxLCAwLCAn6K+36L6T5YWl5pen55qENuS9jeaVsOWtl+Wvhuegge+8jOaMiei/lOWbnumUruWFs+mXreW8ueeql+OAgicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb3duZXIub25LZXlEb3duLCBvd25lci50ZGVVc2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyLCAwLCAn6YCJ5oup6ZyA6KaB55qE5pON5L2c5oyJ56Gu5a6a6ZSu6L+b6KGM5LiL5LiA5q2l77yM5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRNZW51LnNob3coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5byA5ZCv56ul6ZSBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Q2hpbGRMb2NrKG93bmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG93bmVyLm9uS2V5RG93biwgb3duZXIudGRlVXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMSwgMCwgJ+W8gOWQr+erpemUgeWQju+8jOavj+asoeS7mOi0ueiuoui0remcgOi+k+WFpeato+ehruWvhuegge+8m+aMiei/lOWbnumUruWFs+mXreW8ueeql+OAgicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLmN1cnJlbnQgPT0gNCl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwQXJncy5vblR1cm50YWJsZVBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuZXNjOlxyXG4gICAgICAgICAgICAgICAgYXBwQXJncy5vbkZpcnN0UGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mKG93bmVyLm9uS2V5RG93bikgPT09ICdmdW5jdGlvbicpIG93bmVyLm9uS2V5RG93bihjdXJLZXkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBjb2RlIHtpbnR9XHJcbiAqIEBwYXJhbSBtc2cge3N0cmluZ31cclxuICogQHBhcmFtIG93bmVyIHtIb21lTWVudX1cclxuICogQHBhcmFtIGJ0biB7aW50fSAwLuWFs+mXreerpemUgSAxLuabtOaUueWvhueggVxyXG4gKi9cclxuZnVuY3Rpb24gb25WYWxpZExvY2soY29kZSwgbXNnLCBvd25lciwgYnRuKSB7XHJcbiAgICBpZiAoY29kZSA9PSAwKSB7XHJcbiAgICAgICAgdmFyIG9sZExvY2sgPSBvd25lci50ZGVVc2VyLmNoaWxkTG9jaztcclxuICAgICAgICBpZiAobXNnID09IG9sZExvY2spIHtcclxuICAgICAgICAgICAgaWYgKGJ0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RiY2xpID0gb3duZXIudGRlVXNlci5zdGJjbGk7XHJcbiAgICAgICAgICAgICAgICBzdGJjbGkudGRlTG9jayhvbGRMb2NrLCAnJywgZnVuY3Rpb24gKGNvZGUsIGJpeikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gJ+erpemUgeWFs+mXreaIkOWKnyc7XHJcbiAgICAgICAgICAgICAgICAgICAgb25UZGVMb2NrKGNvZGUsIGJpeiwgb3duZXIsIHRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNldENoaWxkTG9jayhvd25lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChkbGdCdG4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChkbGdCdG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dDaGlsZExvY2soZnVuY3Rpb24gKGNvZGUsIG1zZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblZhbGlkTG9jayhjb2RlLCBtc2csIG93bmVyLCBidG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEsIDAsICfor7fovpPlhaXml6fnmoQ25L2N5pWw5a2X5a+G56CB77yM5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb3duZXIub25LZXlEb3duLCBvd25lci50ZGVVc2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCwgJ+aPkOekuicsICfnq6XplIHpqozor4Hlh7rplJknLCAn6YeN6K+VJywgJ+WPlua2iCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldENoaWxkTG9jayhvd25lcikge1xyXG4gICAgdmFyIG9sZExvY2sgPSBvd25lci50ZGVVc2VyLmNoaWxkTG9jaztcclxuICAgIHZhciBuZXdMb2NrO1xyXG4gICAgc2hvd0NoaWxkTG9jayhmdW5jdGlvbiAoY29kZSwgbXNnKSB7XHJcbiAgICAgICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICBuZXdMb2NrID0gbXNnO1xyXG4gICAgICAgICAgICBzaG93Q2hpbGRMb2NrKGZ1bmN0aW9uIChjb2RlLCBtc2cpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobXNnICE9IG5ld0xvY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0RpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldENoaWxkTG9jayhvd25lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb3duZXIub25LZXlEb3duLCBvd25lci50ZGVVc2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCwgJ+aPkOekuicsICfkuKTmrKHovpPlhaXkuI3lkIwnLCAn6YeN6K+VJywgJ+WPlua2iCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGJjbGkgPSBvd25lci50ZGVVc2VyLnN0YmNsaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RiY2xpLnRkZUxvY2sob2xkTG9jaywgbmV3TG9jaywgZnVuY3Rpb24gKGNvZGUsIGJpeikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSBvbGRMb2NrID8gJ+erpemUgeabtOaUueaIkOWKnycgOiAn56ul6ZSB5byA5ZCv5oiQ5YqfJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGRlTG9jayhjb2RlLCBiaXosIG93bmVyLCB0ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG93bmVyLm9uS2V5RG93biwgb3duZXIudGRlVXNlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDAsIDEsICfor7flho3mrKHovpPlhaXmlrDnmoQ25L2N5pWw5a2X5a+G56CB77yM5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDAsIDAsICfor7fovpPlhaXmlrDnmoQ25L2N5pWw5a2X5a+G56CB77yM5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uVGRlTG9jayhjb2RlLCBiaXosIG93bmVyKSB7XHJcbiAgICB2YXIgdGV4dCA9IGFyZ3VtZW50c1szXSA/IGFyZ3VtZW50c1szXSA6ICfnq6XplIHorr7nva7miJDlip8nO1xyXG4gICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgIG93bmVyLnRkZVVzZXIuY2hpbGRMb2NrID0gYml6LmNoaWxkTG9jaztcclxuICAgICAgICBzaG93TG9hZGluZygn5o+Q56S6JywgdGV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dMb2FkaW5nKCfmj5DnpLonICsgJ1snICsgY29kZSArICddJywgJ+e9kee7nOW8guW4uCcgKyAnWycgKyBiaXogKyAnXScpO1xyXG4gICAgfVxyXG4gICAgaGlkZUxvYWRpbmcoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb3duZXIub25LZXlEb3duLCBvd25lci50ZGVVc2VyKTtcclxuICAgIH0sIDIwMDApO1xyXG59XHJcblxyXG5leHBvcnQge0hvbWVNZW51fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvSG9tZU1lbnUuanMiLCJpbXBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc30gZnJvbSBcIi4vdG9vZG8vX2tleWNvZGVzXCI7XHJcblxyXG5cclxudmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG52YXIgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG5cclxudmFyIGl0ZW1TaXplID0gW1xyXG4gICAgWzI2NCwgMzg2XSxcclxuICAgIFsyNjQsIDM4Nl0sXHJcbiAgICBbMjY0LCAzODZdLFxyXG4gICAgWzI2NCwgMzg2XVxyXG5dO1xyXG5mdW5jdGlvbiBUdXJudGFibGVQYWdlKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3VybChpbWcvdHVybnRhYmxlL2JnLmpwZykgbm8tcmVwZWF0JztcclxuICAgIHRoaXMubGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm50YWJsZS1wYWdlJyk7XHJcbiAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICB0aGlzLmZvY3VzSXRlbXM9W107XHJcbiAgICAvL+i9rOebmFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyArK2kpIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmxheW91dC5xdWVyeVNlbGVjdG9yKCcjdHVybnRhYmxlLWl0ZW0nICsgaSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaXRlbXMucHVzaChub2RlKTtcclxuICAgICAgICAgICAgdmFyIGRpdj1ub2RlLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzSXRlbXMucHVzaChkaXYpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIChpLCBub2RlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSAnaW1nL3R1cm50YWJsZS9wcml6ZScraSsnLnBuZyc7XHJcbiAgICAgICAgICAgIH0sIDEwMCAqIGksIGksIG5vZGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pbWdsaXN0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHVybnRhYmxlLXBvaW50ZXJcIikucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XHJcbiAgICB0aGlzLmltZ2xpc3RbMF0uc3JjPSdpbWcvdHVybnRhYmxlL2J0bi5wbmcnO1xyXG4gICAgdGhpcy5pbWdsaXN0WzFdLnNyYz0naW1nL3R1cm50YWJsZS9idG4wLnBuZyc7XHJcblxyXG5cclxuICAgIC8vZm9jdXNcclxuICAgIHRoaXMuaXRlbXMucHVzaCh0aGlzLmltZ2xpc3RbMF0pO1xyXG4gICAgdGhpcy5pdGVtcy5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpemUtYnRuXCIpKTtcclxuXHJcbn1cclxuVHVybnRhYmxlUGFnZS5wcm90b3R5cGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIHtpbnR9IGN1cnJlbnQgWzAsM11cclxuICAgICAqL1xyXG4gICAgY3VycmVudDogMCxcclxuICAgIG9uS2V5RG93bjogbnVsbCxcclxuXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoY3VycmVudCwgb25LZXlEb3duKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZChjdXJyZW50KTtcclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IG9uS2V5RG93bjtcclxuXHJcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcztcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBvd25lci5oYW5kbGVLZXkoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zZXRGb2N1cyh0aGlzLmN1cnJlbnQsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfc2V0Rm9jdXM6IGZ1bmN0aW9uIChjdXJyZW50LCBmb2N1cykge1xyXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5pdGVtc1tjdXJyZW50XTtcclxuICAgICAgICBpZihmb2N1cyl7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zcmM9J2ltZy90dXJudGFibGUvYnRuLWZvY3VzLnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jbGFzc05hbWU9XCJwcml6ZS1idG4tZm9jdXNcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudCl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zcmM9J2ltZy90dXJudGFibGUvYnRuLnBuZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jbGFzc05hbWU9XCJwcml6ZS1idG5cIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkOiBmdW5jdGlvbiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEZvY3VzKGksIGN1cnJlbnQgPT0gaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUtleTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAob3duZXIuY3VycmVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmRvd246XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3duZXIuY3VycmVudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3duZXIuY3VycmVudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZihvd25lci5vbktleURvd24pID09PSAnZnVuY3Rpb24nKSBvd25lci5vbktleURvd24oY3VyS2V5KTtcclxuICAgIH0sXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHtUdXJudGFibGVQYWdlfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvVHVybnRhYmxlUGFnZS5qcyIsImltcG9ydCB7c3RiTnVsbH0gZnJvbSAnLi4vdG9vZG8vX3N0Ym51bGwnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFBhZ2VBcmdzKHBhZ2UpIHtcclxuICAgIHRoaXMucHJlZml4ID0gcGFnZSA/IHBhZ2UgKyAnLicgOiAnJztcclxufVxyXG5QYWdlQXJncy5wcm90b3R5cGUgPSB7XHJcbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICByZXR1cm4gc3RiTnVsbC5nZXRWYWx1ZSh0aGlzLnByZWZpeCArIGspO1xyXG4gICAgfSxcclxuICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgICAgIHN0Yk51bGwuc2V0VmFsdWUodGhpcy5wcmVmaXggKyBrLCB2KTtcclxuICAgIH0sXHJcbiAgICBnZXRSZXR1cm5Vcmw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgncmV0dXJuVXJsJyk7XHJcbiAgICB9LFxyXG4gICAgc2V0UmV0dXJuVXJsOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgncmV0dXJuVXJsJywgdXJsKTtcclxuICAgIH0sXHJcbiAgICBnZXRSZWRpcmVjdFVybDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCdyZWRpcmVjdFVybCcpO1xyXG4gICAgfSxcclxuICAgIHNldFJlZGlyZWN0VXJsOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgncmVkaXJlY3RVcmwnLCB1cmwpO1xyXG4gICAgfSxcclxuICAgIHNldENhbGxGbGFnOmZ1bmN0aW9uIChudW0pIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKFwiY2FsbEZsYWdcIixudW0pO1xyXG4gICAgfSxcclxuICAgIGdldENhbGxGbGFnOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcImNhbGxGbGFnXCIpO1xyXG4gICAgfSxcclxuICAgIHNldFN1Y2Nlc3NDb2RlOmZ1bmN0aW9uIChzdWNjZXNzQ29kZSkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJzdWNjZXNzQ29kZVwiLHN1Y2Nlc3NDb2RlKTtcclxuICAgIH0sXHJcbiAgICBnZXRTdWNjZXNzQ29kZTpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJzdWNjZXNzQ29kZVwiKTtcclxuICAgIH0sXHJcbiAgICBzZXRQcml6ZUlEOmZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJQcml6ZUlEXCIsaWQpO1xyXG4gICAgfSxcclxuICAgIGdldFByaXplSUQ6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiUHJpemVJRFwiKTtcclxuICAgIH0sXHJcbiAgICBnZXRUdXJudGFibGVVcmw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgnVHVybnRhYmxlVXJsJyk7XHJcbiAgICB9LFxyXG4gICAgc2V0VHVybnRhYmxlVXJsOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgnVHVybnRhYmxlVXJsJywgdXJsKTtcclxuICAgIH0sXHJcbn07XHJcblxyXG5cclxudmFyIHNob3BBcmdzID0gbmV3IFBhZ2VBcmdzKCdzaG9wJyk7XHJcbnZhciByZWNoYXJnZUFyZ3MgPSBuZXcgUGFnZUFyZ3MoJ3JlY2hhcmdlJyk7XHJcbnZhciBjYWxsYmFja0FyZ3MgPSBuZXcgUGFnZUFyZ3MoJ2NhbGxiYWNrJyk7XHJcbnZhciB0dXJuVGFibGVBcmdzID0gbmV3IFBhZ2VBcmdzKCd0dXJudGFibGUnKTtcclxuXHJcbnZhciBhcHBBcmdzID0gbmV3IFBhZ2VBcmdzKCdhcHAnKTtcclxuYXBwQXJncy5vbkZpcnN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBmaXJzdFVybCA9IGFwcEFyZ3MuZ2V0UmVkaXJlY3RVcmwoKTtcclxuICAgIGlmIChmaXJzdFVybCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZmlyc3RVcmw7XHJcbiAgICB9XHJcbn07XHJcblxyXG5hcHBBcmdzLm9uSG9tZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaG9tZVVybCA9IGFwcEFyZ3MuZ2V0UmV0dXJuVXJsKCk7XHJcbiAgICBpZiAoaG9tZVVybCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaG9tZVVybDtcclxuICAgIH1cclxufTtcclxuXHJcbmFwcEFyZ3Mub25UdXJudGFibGVQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIFR1cm50YWJsZVVybCA9IGFwcEFyZ3MuZ2V0VHVybnRhYmxlVXJsKCk7XHJcbiAgICBpZiAoVHVybnRhYmxlVXJsKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBUdXJudGFibGVVcmw7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB7c2hvcEFyZ3MscmVjaGFyZ2VBcmdzLGNhbGxiYWNrQXJncyxhcHBBcmdzLHR1cm5UYWJsZUFyZ3N9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUGFnZUFyZ3MuanMiLCJmdW5jdGlvbiBnZXRKU09OKHVybCwgY2IpIHtcclxuICAgIGxldCByZXE7XHJcbiAgICByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3Q7XHJcbiAgICByZXEub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zQXJyID0gZXZhbCgnWycgKyByZXEucmVzcG9uc2VUZXh0ICsgJ10nKTtcclxuICAgICAgICAgICAgY2IoaXRlbXNBcnJbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXEuc2VuZChudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmFzZVVybCgpIHtcclxuICAgIHJldHVybiBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy90ZGVudGVyJztcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsYXlCYWNrZ3JvdW5kKG5vZGUsIGltZywgZGVsYXkpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgaW1nICsgJyknXHJcbiAgICB9LCBkZWxheSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0SlNPTixiYXNlVXJsLGRlbGF5QmFja2dyb3VuZH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9hYmMuanMiLCJpbXBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc30gZnJvbSBcIi4uL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSB7aW50fSBjYWxsYmFjay5idG4g5oyJ6ZSuIDAu56Gu5a6aIDEu5Y+W5raIXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBidG4g6buY6K6k54Sm54K5IDAu56Gu5a6aIDEu5Y+W5raIXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSDnqpflj6PmoIfpophcclxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQg56qX5Y+j5YaF5a65XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBidG4wIOaMiemSrjFcclxuICogQHBhcmFtIHtzdHJpbmd9IGJ0bjEg5oyJ6ZKuMlxyXG4gKi9cclxuZnVuY3Rpb24gc2hvd0FnYWluRGlhbG9nKC8qY2FsbGJhY2ssIGJ0biwgdGl0bGUsIHRleHQsIGJ0bjAsIGJ0bjEqLykge1xyXG4gICAgY29uc3QgbGF5b3V0SWQgPSAnZGlhbG9nLWxheW91dCc7XHJcbiAgICBsZXQgY2FsbGJhY2ssIGJ0biwgdGl0bGUsIHRleHQsIGJ0bjAsIGJ0bjE7XHJcbiAgICBjYWxsYmFjayA9IGFyZ3VtZW50c1swXSA/IGFyZ3VtZW50c1swXSA6IG51bGw7XHJcbiAgICBidG49MDtcclxuICAgIGJ0bjAgPSAn5YaN5oq95LiA5qyhJztcclxuICAgIGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYXlvdXRJZCk7XHJcbiAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICAgIGxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGF5b3V0LmNsYXNzTmFtZSA9ICdkaWFsb2ctbGF5b3V0JztcclxuICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcclxuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJBZ2FpbmRpYWxvZy1iZ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImFnYWluLWltZ1wiPjwvZGl2PicrXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cIkFnYWluZGlhbG9nLXRleHRcIj48cD7ojrflvpc8c3Bhbj5cXFwi5YaN5oq95LiA5qyhXFxcIjwvc3Bhbj7mnLrkvJohPC9wPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJkaWFsb2ctYnRuMFwiIHN0eWxlPVwibGVmdDogMzAlO3RvcDogNjglXCIgY2xhc3M9XCJPcmRlcmRpYWxvZ0J0bl8xXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcclxuICAgIH1cclxuICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIHZhciBiYWNrZ3JvdW5kID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJy5BZ2FpbmRpYWxvZy1iZycpO1xyXG4gICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuXHJcbiAgICB2YXIgbm9kZUJ0bjAgPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2ctYnRuMCcpO1xyXG4gICAgbm9kZUJ0bjAuaW5uZXJIVE1MID0gYnRuMCArICc8ZGl2PjwvZGl2Pic7XHJcblxyXG4gICAgdmFyIGJ0bl8wMDYgPSBub2RlQnRuMC5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xyXG5cclxuXHJcbiAgICBjb25zdCBmb2N1c0J0biA9IGZ1bmN0aW9uIChidG5JZHgpIHtcclxuICAgICAgICBpZiAoYnRuSWR4ID09IDApIHtcclxuICAgICAgICAgICAgbm9kZUJ0bjAuY2xhc3NOYW1lID0gXCIgXCIgKyBcIk9yZGVyZGlhbG9nQnRuXzEgT3JkZXJkaWFsb2ctQnRuX2ZvY3VzXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIChidG5JZHggPT0gMSkge1xyXG4gICAgICAgIC8vICAgICBub2RlQnRuMC5jbGFzc05hbWUgPSBcIiBcIiArIFwiT3JkZXJkaWFsb2dCdG5fMFwiO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBidG4gPSBidG5JZHg7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChidG4gPCAwIHx8IGJ0biA+IDEpIGJ0biA9IDA7XHJcbiAgICBmb2N1c0J0bihidG4pO1xyXG5cclxuICAgIGxldCBzdWJtaXQgPSBmYWxzZTtcclxuICAgIHZhciBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxuICAgIHZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICAvLyBmb2N1c0J0bigwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBmb2N1c0J0bigxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUub2s6ICAgICAvL+ehruWumlxyXG4gICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6ICAgICAgLy/lj5bmtohcclxuICAgICAgICAgICAgICAgIGJ0biA9IDA7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdWJtaXQpIHtcclxuICAgICAgICAgICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soYnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2hvd0FnYWluRGlhbG9nfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9hZ2FpbkRpYWxvZy5qcyIsImltcG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfSBmcm9tIFwiLi4vdG9vZG8vX2tleWNvZGVzXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSB7aW50fSBjYWxsYmFjay5jb2RlIOaMiemUriAwLui+k+WFpeWujOaIkCAxLuWPlua2iFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2subXNnIOi+k+WFpeeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gdGl0bGUge2ludH0g5qCH6aKY5Zu+54mHIDAu6K6+572u6ZOc6ZSBIDEu6ZOc6ZSB6aqM6K+BXHJcbiAqIEBwYXJhbSBsYWJlbCB7aW50fSDmj5DnpLror60gMC7ovpPlhaXlr4bnoIEgMS7lho3mrKHovpPlhaVcclxuICovXHJcbmZ1bmN0aW9uIHNob3dDaGlsZExvY2soY2FsbGJhY2ssIHRpdGxlLCBsYWJlbCkge1xyXG4gICAgdGl0bGUgPSBhcmd1bWVudHNbMV0gPyBhcmd1bWVudHNbMV0gOiAwO1xyXG4gICAgbGFiZWwgPSBhcmd1bWVudHNbMl0gPyBhcmd1bWVudHNbMl0gOiAwO1xyXG4gICAgdmFyIHRpcHMgPSBhcmd1bWVudHNbM10gPyBhcmd1bWVudHNbM10gOiAn6K+36L6T5YWlNuS9jeaVsOWtl+Wvhuegge+8jOaMiei/lOWbnumUruWFs+mXreW8ueeql+OAgic7XHJcblxyXG4gICAgdmFyIGxheW91dElkID0gJ2xvY2stbGF5b3V0LTAwMyc7XHJcbiAgICB2YXIgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsYXlvdXQuY2xhc3NOYW1lID0gJ2xvY2stbGF5b3V0JztcclxuICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcclxuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID0gJycgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxvY2stYmdcIj4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBpZD1cImxvY2stdGl0bGVcIiBjbGFzcz1cImxvY2stdGl0bGUtMFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICA8ZGl2IGNsYXNzPVwibG9jay1pbnB1dFwiPicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLWxhYmVsXCIgY2xhc3M9XCJsb2NrLWxhYmVsLTBcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay10ZXh0XCIgY2xhc3M9XCJsb2NrLXRleHRcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgIDxkaXYgaWQ9XCJsb2NrLXRpcHNcIiBjbGFzcz1cImxvY2stdGlwc1wiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9jay1rZXlib2FyZFwiPicgK1xyXG4gICAgICAgICAgICAnICA8ZGl2IGNsYXNzPVwibG9jay1udW0tYmdcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tMVwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+MTwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tMlwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj4yPC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS0zXCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj4zPC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS00XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj40PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS01XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj41PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS02XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj42PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS03XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj43PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS04XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj44PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS05XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj45PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS0xMFwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTBcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+MDwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tMTFcIiBjbGFzcz1cImxvY2stbnVtXCI+ICAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheW91dCk7XHJcbiAgICB9XHJcbiAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgbG9ja1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2stdGV4dFwiKTtcclxuICAgIHZhciBsb2NrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2stdGl0bGVcIik7XHJcbiAgICB2YXIgbG9ja0xhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2stbGFiZWwnKTtcclxuICAgIHZhciBsb2NrVGlwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NrLXRpcHMnKTtcclxuICAgIGxvY2tUZXh0LmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICBsb2NrVGl0bGUuY2xhc3NOYW1lID0gXCJsb2NrLXRpdGxlLVwiICsgdGl0bGU7XHJcbiAgICBsb2NrTGFiZWwuY2xhc3NOYW1lID0gJ2xvY2stbGFiZWwtJyArIGxhYmVsO1xyXG4gICAgbG9ja1RpcHMuaW5uZXJIVE1MID0gdGlwcztcclxuXHJcbiAgICB2YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbiAgICB2YXIgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG4gICAgdmFyIGl0ZW1Ob2RlcyA9IFtcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW0xLCBpZDogXCJsb2NrLW51bS0xXCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTIsIGlkOiBcImxvY2stbnVtLTJcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtMywgaWQ6IFwibG9jay1udW0tM1wifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW00LCBpZDogXCJsb2NrLW51bS00XCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTUsIGlkOiBcImxvY2stbnVtLTVcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtNiwgaWQ6IFwibG9jay1udW0tNlwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW03LCBpZDogXCJsb2NrLW51bS03XCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTgsIGlkOiBcImxvY2stbnVtLThcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtOSwgaWQ6IFwibG9jay1udW0tOVwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5iYWNrLCBpZDogXCJsb2NrLW51bS0xMFwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW0wLCBpZDogXCJsb2NrLW51bS0wXCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBudWxsLCBpZDogXCJsb2NrLW51bS0xMVwifVxyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgaW5wdXRUZXh0ID0gJyc7XHJcbiAgICB2YXIgY3VySWR4ID0gMDtcclxuXHJcbiAgICB2YXIgc2V0U2VsZWN0ZWQgPSBmdW5jdGlvbiAoY3VySWR4KSB7XHJcbiAgICAgICAgaXRlbU5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW1Ob2RlLCBpbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW1Ob2RlLmlkKTtcclxuICAgICAgICAgICAvLyBub2RlLmNsYXNzTmFtZSA9IChpbmRleCA9PSBjdXJJZHggPyAnbG9jay1udW0tZm9jdXMnIDogJ2xvY2stbnVtJyk7XHJcbiAgICAgICAgICAgIG5vZGUucXVlcnlTZWxlY3RvcignZGl2Jykuc3R5bGUuZGlzcGxheT1pbmRleCA9PSBjdXJJZHggPyBcImJsb2NrXCI6XCJub25lXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHN1Ym1pdCA9IGZ1bmN0aW9uIChjb2RlKSB7XHJcbiAgICAgICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAvL2RvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGF5b3V0KTtcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xyXG4gICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhjb2RlLCBpbnB1dFRleHQpO1xyXG4gICAgfTtcclxuICAgIHZhciBpbnZpc2libGUgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIHZhciBzdGFyID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKSBzdGFyICs9ICcqJztcclxuICAgICAgICByZXR1cm4gc3RhcjtcclxuICAgIH07XHJcbiAgICB2YXIgY2xpY2tOdW0gPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICAgICAgaW5wdXRUZXh0ICs9IFN0cmluZyhudW0pO1xyXG4gICAgICAgIGxvY2tUZXh0LmlubmVyVGV4dCA9IGludmlzaWJsZShpbnB1dFRleHQpO1xyXG4gICAgfTtcclxuICAgIHZhciBiYWNrc3BhY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaW5wdXRUZXh0ID0gaW5wdXRUZXh0LnN1YnN0cmluZygwLCBpbnB1dFRleHQubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgbG9ja1RleHQuaW5uZXJUZXh0ID0gaW52aXNpYmxlKGlucHV0VGV4dCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGhhbmRsZU9rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjdXJyZW50ID0gaXRlbU5vZGVzW2N1cklkeF07XHJcbiAgICAgICAgaWYgKGN1cnJlbnQua2V5Q29kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJhY2tzcGFjZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUtleShjdXJyZW50LmtleUNvZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgaGFuZGxlS2V5ID0gZnVuY3Rpb24gKGN1cktleSkge1xyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJJZHggJSAzKSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VySWR4LS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJJZHggJSAzKSAhPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VySWR4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cklkeCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJJZHggLT0gMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuZG93bjpcclxuICAgICAgICAgICAgICAgIGlmIChjdXJJZHggPCA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VySWR4ICs9IDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm9rOlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlT2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgICAgIHN1Ym1pdCgxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMTpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTI6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW0zOlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtNDpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTU6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW02OlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtNzpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTg6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW05OlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMDpcclxuICAgICAgICAgICAgICAgIHZhciBudW0gPSBjdXJLZXkgLSBrZXlDb2RlLm51bTA7XHJcbiAgICAgICAgICAgICAgICBjbGlja051bShudW0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHNldFNlbGVjdGVkKDApO1xyXG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgdmFyIGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGhhbmRsZUtleShjdXJLZXkpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKGN1cklkeCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dFRleHQubGVuZ3RoID09IDYpIHtcclxuICAgICAgICAgICAgc3VibWl0KDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7c2hvd0NoaWxkTG9ja31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9jaGlsZExvY2suanMiLCJpbXBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc30gZnJvbSBcIi4uL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENoaWxkTWVudSgpIHtcclxufVxyXG5DaGlsZE1lbnUucHJvdG90eXBlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sge2Z1bmN0aW9ufVxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrLmJ0biB7aW50fSAwLuaMiemSrjEgMS7mjInpkq4yIC0xLuWPlua2iOaTjeS9nFxyXG4gICAgICogQHBhcmFtIGNudCB7aW50fSBbMSwyXSDmjInpkq7mlbDph49cclxuICAgICAqIEBwYXJhbSBidG4ge2ludH0gWzAsMV0g6buY6K6k6YCJ5LitXHJcbiAgICAgKiBAcGFyYW0gdGV4dCB7c3RyaW5nfSDmj5DnpLrmlofmnKxcclxuICAgICAqL1xyXG4gICAgc2hvdzogZnVuY3Rpb24gKGNhbGxiYWNrLCBjbnQsIGJ0biwgdGV4dCkge1xyXG4gICAgICAgIHZhciBsYXlvdXRJZCA9ICdsb2NrLW1lbnUtbGF5b3V0JztcclxuICAgICAgICB2YXIgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgICAgIGlmICghbGF5b3V0KSB7XHJcbiAgICAgICAgICAgIGxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBsYXlvdXQuY2xhc3NOYW1lID0gJ2xvY2stbGF5b3V0JztcclxuICAgICAgICAgICAgbGF5b3V0LmlkID0gbGF5b3V0SWQ7XHJcbiAgICAgICAgICAgIGxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsb2NrLW1lbnUtYmdcIj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stdGl0bGVcIiBjbGFzcz1cImxvY2stdGl0bGUtMFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1idG4wXCIgY2xhc3M9XCJsb2NrLWJ0blwiPjxzcGFuPuW8gOWQr+erpemUgTwvc3Bhbj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stYnRuMVwiIGNsYXNzPVwibG9jay1idG5cIj48c3Bhbj7lhbPpl63nq6XplIE8L3NwYW4+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLWJ0bjJcIiBjbGFzcz1cImxvY2stYnRuXCI+PHNwYW4+5pu05pS55a+G56CBPC9zcGFuPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwibG9jay10aXBzXCI+6YCJ5oup6ZyA6KaB55qE5pON5L2c5oyJ56Gu5a6a6ZSu6L+b6KGM5LiL5LiA5q2l77yM5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsYXlvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgIHZhciBiZyA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcubG9jay1tZW51LWJnJyk7XHJcbiAgICAgICAgdmFyIGJ0bk5vZGVzID0gYmcucXVlcnlTZWxlY3RvckFsbCgnLmxvY2stYnRuJyk7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7aTxidG5Ob2Rlcy5sZW5ndGg7KytpKXtcclxuICAgICAgICAgICAgdmFyIGJ0bk5vZGUgPSBidG5Ob2Rlc1tpXTtcclxuICAgICAgICAgICAgYnRuTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGJ0bk5vZGUwLCBidG5Ob2RlMTtcclxuICAgICAgICBpZiAoY250ID09IDEpIHtcclxuICAgICAgICAgICAgYnRuTm9kZTAgPSBidG5Ob2Rlc1swXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbnQgPSAyO1xyXG4gICAgICAgICAgICBidG5Ob2RlMCA9IGJ0bk5vZGVzWzFdO1xyXG4gICAgICAgICAgICBidG5Ob2RlMSA9IGJ0bk5vZGVzWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnRuTm9kZTApIGJ0bk5vZGUwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGlmIChidG5Ob2RlMSkgYnRuTm9kZTEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgIHZhciB0aXBOb2RlID0gYmcucXVlcnlTZWxlY3RvcignLmxvY2stdGlwcycpO1xyXG4gICAgICAgIHRpcE5vZGUuaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZm9jdXNCdG4oYnRuSWR4KSB7XHJcbiAgICAgICAgICAgIHZhciBmb2N1c05vZGU7XHJcbiAgICAgICAgICAgIGlmIChjbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgYnRuTm9kZTAuY2xhc3NOYW1lPVwibG9jay1idG4gbG9jay1idG4tZm9jdXNcIjtcclxuICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZSA9IGJ0bk5vZGUwLnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLWJ0bi1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgLy8gZm9jdXNOb2RlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0bklkeCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuTm9kZTAuY2xhc3NOYW1lPVwibG9jay1idG4gbG9jay1idG4tZm9jdXNcIjtcclxuICAgICAgICAgICAgICAgICAgICBidG5Ob2RlMS5jbGFzc05hbWU9XCJsb2NrLWJ0blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZSA9IGJ0bk5vZGUwLnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLWJ0bi1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUgPSBidG5Ob2RlMS5xdWVyeVNlbGVjdG9yKCcubG9jay1idG4tZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuTm9kZTAuY2xhc3NOYW1lPVwibG9jay1idG5cIjtcclxuICAgICAgICAgICAgICAgICAgICBidG5Ob2RlMS5jbGFzc05hbWU9XCJsb2NrLWJ0biBsb2NrLWJ0bi1mb2N1c1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZSA9IGJ0bk5vZGUwLnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLWJ0bi1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZSA9IGJ0bk5vZGUxLnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLWJ0bi1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidG4gPSBidG5JZHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYnRuIDwgMCB8fCBidG4gPiAxKSBidG4gPSAwO1xyXG4gICAgICAgIGZvY3VzQnRuKGJ0bik7XHJcblxyXG4gICAgICAgIGxldCBzdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICB2YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbiAgICAgICAgdmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgICAgIHZhciBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNCdG4oMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGtleUNvZGUuZG93bjpcclxuICAgICAgICAgICAgICAgICAgICBmb2N1c0J0bihjbnQgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazogICAgIC8v56Gu5a6aXHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6ICAgICAgLy/lj5bmtohcclxuICAgICAgICAgICAgICAgICAgICBidG4gPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGNoaWxkTWVudSA9IG5ldyBDaGlsZE1lbnUoKTtcclxuZXhwb3J0IHtjaGlsZE1lbnV9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvY2hpbGRNZW51LmpzIiwiaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuLi90b29kby9fa2V5Y29kZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge2ludH0gY2FsbGJhY2suYnRuIOaMiemUriAwLuehruWumiAxLuWPlua2iFxyXG4gKiBAcGFyYW0ge251bWJlcn0gYnRuIOm7mOiupOeEpueCuSAwLuehruWumiAxLuWPlua2iFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUg56qX5Y+j5qCH6aKYXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IOeql+WPo+WGheWuuVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYnRuMCDmjInpkq4xXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBidG4xIOaMiemSrjJcclxuICovXHJcbmZ1bmN0aW9uIHNob3dEaWFsb2coLypjYWxsYmFjaywgYnRuLCB0aXRsZSwgdGV4dCwgYnRuMCwgYnRuMSovKSB7XHJcbiAgICBjb25zdCBsYXlvdXRJZCA9ICdkaWFsb2ctbGF5b3V0LTAwMSc7XHJcbiAgICBsZXQgY2FsbGJhY2ssIGJ0biwgdGl0bGUsIHRleHQsIGJ0bjAsIGJ0bjE7XHJcbiAgICBjYWxsYmFjayA9IGFyZ3VtZW50c1swXSA/IGFyZ3VtZW50c1swXSA6IG51bGw7XHJcbiAgICBidG4gPSBhcmd1bWVudHNbMV0gPyBhcmd1bWVudHNbMV0gOiAwO1xyXG4gICAgdGl0bGUgPSBhcmd1bWVudHNbMl0gPyBhcmd1bWVudHNbMl0gOiAn5o+Q56S6JztcclxuICAgIHRleHQgPSBhcmd1bWVudHNbM10gPyBhcmd1bWVudHNbM10gOiAnJztcclxuICAgIGJ0bjAgPSBhcmd1bWVudHNbNF0gPyBhcmd1bWVudHNbNF0gOiAn56Gu5a6aJztcclxuICAgIGJ0bjEgPSBhcmd1bWVudHNbNV0gPyBhcmd1bWVudHNbNV0gOiAn6L+U5ZueJztcclxuICAgIHZhciBhbGlnbiA9IGFyZ3VtZW50c1s2XSA/IGFyZ3VtZW50c1s2XSA6ICdjZW50ZXInO1xyXG5cclxuICAgIGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYXlvdXRJZCk7XHJcbiAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICAgIGxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGF5b3V0LmNsYXNzTmFtZSA9ICdkaWFsb2ctbGF5b3V0JztcclxuICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcclxuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkaWFsb2ctYmdcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLXRpdGxlXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImRpYWxvZy10ZXh0XCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImRpYWxvZy1idG4wXCIgc3R5bGU9XCJsZWZ0OiAxMiU7dG9wOiA3MyVcIiBjbGFzcz1cImRpYWxvZy1idG4gZGlhbG9nLWJ0bjBcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwiZGlhbG9nLWJ0bjFcIiBzdHlsZT1cImxlZnQ6IDU3JTt0b3A6IDczJVwiIGNsYXNzPVwiZGlhbG9nLWJ0biBkaWFsb2ctYnRuMVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheW91dCk7XHJcbiAgICB9XHJcbiAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgYmFja2dyb3VuZCA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWJnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgdmFyIG5vZGVUaXRsZSA9IGJhY2tncm91bmQucXVlcnlTZWxlY3RvcignLmRpYWxvZy10aXRsZScpO1xyXG4gICAgbm9kZVRpdGxlLmlubmVySFRNTCA9IHRpdGxlO1xyXG4gICAgdmFyIG5vZGVUZXh0ID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLXRleHQnKTtcclxuICAgIG5vZGVUZXh0LmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICBub2RlVGV4dC5zdHlsZS50ZXh0QWxpZ24gPSBhbGlnbjtcclxuXHJcbiAgICB2YXIgbm9kZUJ0bjAgPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2ctYnRuMCcpO1xyXG4gICAgbm9kZUJ0bjAuaW5uZXJIVE1MID0gYnRuMCArICc8ZGl2PjwvZGl2Pic7XHJcbiAgICB2YXIgbm9kZUJ0bjEgPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2ctYnRuMScpO1xyXG4gICAgbm9kZUJ0bjEuaW5uZXJIVE1MID0gYnRuMSArICc8ZGl2PjwvZGl2Pic7XHJcblxyXG4gICAgdmFyIGJ0bl8wMDYgPSBub2RlQnRuMC5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xyXG4gICAgdmFyIGJ0bl8wMDZub25lID0gbm9kZUJ0bjEucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGZvY3VzQnRuID0gZnVuY3Rpb24gKGJ0bklkeCkge1xyXG4gICAgICAgIGlmIChidG5JZHggPT0gMCkge1xyXG4gICAgICAgICAgICBub2RlQnRuMC5jbGFzc05hbWUgPSBcIiBcIiArIFwiZGlhbG9nQnRuXzEgZGlhbG9nLUJ0bl9mb2N1c1wiO1xyXG4gICAgICAgICAgICBub2RlQnRuMS5jbGFzc05hbWUgPSBcIiBcIiArIFwiZGlhbG9nQnRuXzBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ0bklkeCA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICBub2RlQnRuMC5jbGFzc05hbWUgPSBcIiBcIiArIFwiZGlhbG9nQnRuXzBcIjtcclxuICAgICAgICAgICAgbm9kZUJ0bjEuY2xhc3NOYW1lID0gXCIgXCIgKyBcImRpYWxvZ0J0bl8xIGRpYWxvZy1CdG5fZm9jdXNcIjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0biA9IGJ0bklkeDtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGJ0biA8IDAgfHwgYnRuID4gMSkgYnRuID0gMDtcclxuICAgIGZvY3VzQnRuKGJ0bik7XHJcblxyXG4gICAgbGV0IHN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgdmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG4gICAgdmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIHZhciBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazogICAgIC8v56Gu5a6aXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMDogICAgICAvL+WPlua2iFxyXG4gICAgICAgICAgICAgICAgYnRuID0gMTtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1Ym1pdCkge1xyXG4gICAgICAgICAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhidG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtzaG93RGlhbG9nfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2RpYWxvZy5qcyIsImltcG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfSBmcm9tIFwiLi4vdG9vZG8vX2tleWNvZGVzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd0FkMTYoY2FsbGJhY2ssIGJ0bikge1xyXG4gICAgY29uc3QgbGF5b3V0SWQgPSAnYmlnLWFkLTE2JztcclxuXHJcbiAgICBsZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxheW91dC5jbGFzc05hbWUgPSAnYmlnLWFkLTE2JztcclxuICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcclxuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJiaWctYWQtMTYtYnRuLTBcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJiaWctYWQtMTYtYnRuLTFcIj48L2Rpdj4nO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcclxuICAgIH1cclxuICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIHZhciBidG4wID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNiaWctYWQtMTYtYnRuLTAnKTtcclxuICAgIHZhciBidG4xID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNiaWctYWQtMTYtYnRuLTEnKTtcclxuXHJcbiAgICBjb25zdCBmb2N1c0J0biA9IGZ1bmN0aW9uIChidG5JZHgpIHtcclxuICAgICAgICBpZiAoYnRuSWR4ID09IDApIHtcclxuICAgICAgICAgICAgYnRuMC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgYnRuMS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnRuSWR4ID09IDEpIHtcclxuICAgICAgICAgICAgYnRuMC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBidG4xLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidG4gPSBidG5JZHg7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvY3VzQnRuKGJ0bik7XHJcblxyXG4gICAgbGV0IHN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgdmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG4gICAgdmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIHZhciBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazogICAgIC8v56Gu5a6aXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMDogICAgICAvL+WPlua2iFxyXG4gICAgICAgICAgICAgICAgYnRuID0gMTtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1Ym1pdCkge1xyXG4gICAgICAgICAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKGJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QWQyOShjYWxsYmFjaywgYnRuLCBhZCkge1xyXG4gICAgY29uc3QgbGF5b3V0SWQgPSAnYmlnLWFkLTI5JztcclxuXHJcbiAgICBsZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxheW91dC5pZCA9IGxheW91dElkO1xyXG4gICAgICAgIGxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImJpZy1hZC1idG4tMFwiIGNsYXNzPVwiYmlnLWFkLWJ0bi0wLWZvY3VzXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiYmlnLWFkLWJ0bi0xXCIgY2xhc3M9XCJiaWctYWQtYnRuLTFcIj48L2Rpdj4nO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcclxuICAgIH1cclxuICAgIGxheW91dC5jbGFzc05hbWUgPSAnYmlnLWFkLScgKyBhZDtcclxuICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIHZhciBidG4wID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNiaWctYWQtYnRuLTAnKTtcclxuICAgIHZhciBidG4xID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNiaWctYWQtYnRuLTEnKTtcclxuXHJcbiAgICBjb25zdCBmb2N1c0J0biA9IGZ1bmN0aW9uIChidG5JZHgpIHtcclxuICAgICAgICBpZiAoYnRuSWR4ID09IDApIHtcclxuICAgICAgICAgICAgYnRuMC5jbGFzc05hbWUgPSAnYmlnLWFkLWJ0bi0wLWZvY3VzJztcclxuICAgICAgICAgICAgYnRuMS5jbGFzc05hbWUgPSAnYmlnLWFkLWJ0bi0xJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ0bklkeCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGJ0bjAuY2xhc3NOYW1lID0gJ2JpZy1hZC1idG4tMCc7XHJcbiAgICAgICAgICAgIGJ0bjEuY2xhc3NOYW1lID0gJ2JpZy1hZC1idG4tMS1mb2N1cyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0biA9IGJ0bklkeDtcclxuICAgIH07XHJcblxyXG4gICAgZm9jdXNCdG4oYnRuKTtcclxuXHJcbiAgICBsZXQgc3VibWl0ID0gZmFsc2U7XHJcbiAgICB2YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbiAgICB2YXIgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgdmFyIGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgZm9jdXNCdG4oMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgZm9jdXNCdG4oMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm9rOiAgICAgLy/noa7lrppcclxuICAgICAgICAgICAgICAgIHN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW0wOiAgICAgIC8v5Y+W5raIXHJcbiAgICAgICAgICAgICAgICBidG4gPSAxO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3VibWl0KSB7XHJcbiAgICAgICAgICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soYnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2hvd0FkMTYsc2hvd0FkMjl9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvZGlhbG9nQmlnQWQuanMiLCJ2YXIgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxudmFyIHNob3dUaW1lID0gMTMxODtcclxudmFyIGxheW91dElkID0gJ2xvYWRpbmctbGF5b3V0LTAwMic7XHJcblxyXG5mdW5jdGlvbiBzaG93TG9hZGluZygpIHtcclxuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgdmFyIHRpdGxlID0gYXJndW1lbnRzWzBdID8gYXJndW1lbnRzWzBdIDogJ+aPkOekuic7XHJcbiAgICB2YXIgdGV4dCA9IGFyZ3VtZW50c1sxXSA/IGFyZ3VtZW50c1sxXSA6ICfmraPlnKjliqDovb3vvIzor7fnqI3lgJkuLi4nO1xyXG5cclxuICAgIGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYXlvdXRJZCk7XHJcbiAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICAgIGxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGF5b3V0LmNsYXNzTmFtZSA9ICdkaWFsb2ctbGF5b3V0JztcclxuICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcclxuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkaWFsb2ctYmdcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLXRpdGxlXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImRpYWxvZy10ZXh0XCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcclxuICAgIH1cclxuICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIHZhciBub2RlQmcgPSBsYXlvdXQucXVlcnlTZWxlY3RvcignLmRpYWxvZy1iZycpO1xyXG4gICAgbm9kZUJnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgdmFyIG5vZGVUaXRsZSA9IG5vZGVCZy5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLXRpdGxlJyk7XHJcbiAgICBub2RlVGl0bGUuaW5uZXJIVE1MID0gdGl0bGU7XHJcbiAgICB2YXIgbm9kZVRleHQgPSBub2RlQmcucXVlcnlTZWxlY3RvcignLmRpYWxvZy10ZXh0Jyk7XHJcbiAgICBub2RlVGV4dC5pbm5lckhUTUwgPSB0ZXh0O1xyXG5cclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVMb2FkaW5nKGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgZGVsYXlUaW1lID0gYXJndW1lbnRzWzFdID8gYXJndW1lbnRzWzFdIDogc2hvd1RpbWU7XHJcbiAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgdGltZSA9IChkZWxheVRpbWUgKyBsb2FkVGltZSkgLSB0aW1lO1xyXG4gICAgaWYgKHRpbWUgPCAwKSB0aW1lID0gMDtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgICAgIGlmIChsYXlvdXQpIHtcclxuICAgICAgICAgICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGxldCBiYWNrZ3JvdW5kID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctYmcnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xyXG4gICAgfSwgdGltZSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7c2hvd0xvYWRpbmcsaGlkZUxvYWRpbmd9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvbG9hZGluZy5qcyIsImltcG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfSBmcm9tIFwiLi4vdG9vZG8vX2tleWNvZGVzXCI7XG5cbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7aW50fSBjYWxsYmFjay5idG4g5oyJ6ZSuIDAu56Gu5a6aIDEu5Y+W5raIXG4gKiBAcGFyYW0ge251bWJlcn0gYnRuIOm7mOiupOeEpueCuSAwLuehruWumiAxLuWPlua2iFxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIOeql+WPo+agh+mimFxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQg56qX5Y+j5YaF5a65XG4gKiBAcGFyYW0ge3N0cmluZ30gYnRuMCDmjInpkq4xXG4gKiBAcGFyYW0ge3N0cmluZ30gYnRuMSDmjInpkq4yXG4gKi9cbmZ1bmN0aW9uIHNob3dPcmRlckRpYWxvZygvKmNhbGxiYWNrLCBidG4sIHRpdGxlLCB0ZXh0LCBidG4wLCBidG4xKi8pIHtcbiAgICBjb25zdCBsYXlvdXRJZCA9ICdkaWFsb2ctbGF5b3V0JztcbiAgICBsZXQgY2FsbGJhY2ssIGJ0biwgdGl0bGUsIHRleHQsIGJ0bjAsIGJ0bjE7XG4gICAgY2FsbGJhY2sgPSBhcmd1bWVudHNbMF0gPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuICAgIGJ0bj0wO1xuICAgIGJ0bjAgPSAn56Gu5a6aJztcbiAgICBidG4xID0n5Y+W5raIJztcbiAgICBsZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xuICAgIGlmICghbGF5b3V0KSB7XG4gICAgICAgIGxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxheW91dC5jbGFzc05hbWUgPSAnZGlhbG9nLWxheW91dCc7XG4gICAgICAgIGxheW91dC5pZCA9IGxheW91dElkO1xuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiT3JkZXJkaWFsb2ctYmdcIj4nICtcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cIk9yZGVyZGlhbG9nLXRleHRcIj48cD7mmK/lkKblnKjnur/orqLotK08c3Bhbj5cXFwi5L2T5oSf54Ot6IieXFxcIjwvc3Bhbj7ljIXmnIg/PC9wPjwvZGl2PicgK1xuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwiZGlhbG9nLWJ0bjBcIiBzdHlsZT1cImxlZnQ6IDEyJTt0b3A6IDY4JVwiIGNsYXNzPVwiT3JkZXJkaWFsb2dCdG5fMVwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwiZGlhbG9nLWJ0bjFcIiBzdHlsZT1cImxlZnQ6IDU3JTt0b3A6IDY4JVwiIGNsYXNzPVwiT3JkZXJkaWFsb2dCdG5fMFwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2Pic7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcbiAgICB9XG4gICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICB2YXIgYmFja2dyb3VuZCA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcuT3JkZXJkaWFsb2ctYmcnKTtcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAvLyB2YXIgbm9kZVRpdGxlID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLXRpdGxlJyk7XG4gICAgLy8gbm9kZVRpdGxlLmlubmVySFRNTCA9IHRpdGxlO1xuICAgIC8vIHZhciBub2RlVGV4dCA9IGJhY2tncm91bmQucXVlcnlTZWxlY3RvcignLmRpYWxvZy10ZXh0Jyk7XG4gICAgLy8gbm9kZVRleHQuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAvLyBub2RlVGV4dC5zdHlsZS50ZXh0QWxpZ24gPSBhbGlnbjtcblxuICAgIHZhciBub2RlQnRuMCA9IGJhY2tncm91bmQucXVlcnlTZWxlY3RvcignI2RpYWxvZy1idG4wJyk7XG4gICAgbm9kZUJ0bjAuaW5uZXJIVE1MID0gYnRuMCArICc8ZGl2PjwvZGl2Pic7XG4gICAgdmFyIG5vZGVCdG4xID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9nLWJ0bjEnKTtcbiAgICBub2RlQnRuMS5pbm5lckhUTUwgPSBidG4xICsgJzxkaXY+PC9kaXY+JztcblxuICAgIHZhciBidG5fMDA2ID0gbm9kZUJ0bjAucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcbiAgICB2YXIgYnRuXzAwNm5vbmUgPSBub2RlQnRuMS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xuXG5cblxuICAgIGNvbnN0IGZvY3VzQnRuID0gZnVuY3Rpb24gKGJ0bklkeCkge1xuICAgICAgICBpZiAoYnRuSWR4ID09IDApIHtcbiAgICAgICAgICAgIG5vZGVCdG4wLmNsYXNzTmFtZSA9IFwiIFwiICsgXCJPcmRlcmRpYWxvZ0J0bl8xIE9yZGVyZGlhbG9nLUJ0bl9mb2N1c1wiO1xuICAgICAgICAgICAgbm9kZUJ0bjEuY2xhc3NOYW1lID0gXCIgXCIgKyBcIk9yZGVyZGlhbG9nQnRuXzBcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYnRuSWR4ID09IDEpIHtcblxuICAgICAgICAgICAgbm9kZUJ0bjAuY2xhc3NOYW1lID0gXCIgXCIgKyBcIk9yZGVyZGlhbG9nQnRuXzBcIjtcbiAgICAgICAgICAgIG5vZGVCdG4xLmNsYXNzTmFtZSA9IFwiIFwiICsgXCJPcmRlcmRpYWxvZ0J0bl8xIE9yZGVyZGlhbG9nLUJ0bl9mb2N1c1wiO1xuXG4gICAgICAgIH1cbiAgICAgICAgYnRuID0gYnRuSWR4O1xuICAgIH07XG5cbiAgICBpZiAoYnRuIDwgMCB8fCBidG4gPiAxKSBidG4gPSAwO1xuICAgIGZvY3VzQnRuKGJ0bik7XG5cbiAgICBsZXQgc3VibWl0ID0gZmFsc2U7XG4gICAgdmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xuICAgIHZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnJpZ2h0OlxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm9rOiAgICAgLy/noa7lrppcbiAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMDogICAgICAvL+WPlua2iFxuICAgICAgICAgICAgICAgIGJ0biA9IDE7XG4gICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3VibWl0KSB7XG4gICAgICAgICAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XG4gICAgICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soYnRuKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtzaG93T3JkZXJEaWFsb2d9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvb3JkZXJEaWFsb2cuanMiLCJpbXBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc30gZnJvbSBcIi4uL3Rvb2RvL19rZXljb2Rlc1wiO1xuXG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcGFyYW0ge2ludH0gY2FsbGJhY2suYnRuIOaMiemUriAwLuehruWumiAxLuWPlua2iFxuICogQHBhcmFtIHtudW1iZXJ9IGJ0biDpu5jorqTnhKbngrkgMC7noa7lrpogMS7lj5bmtohcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSDnqpflj6PmoIfpophcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IOeql+WPo+WGheWuuVxuICogQHBhcmFtIHtzdHJpbmd9IGJ0bjAg5oyJ6ZKuMVxuICogQHBhcmFtIHtzdHJpbmd9IGJ0bjEg5oyJ6ZKuMlxuICovXG5mdW5jdGlvbiBzaG93UmVjZWl2ZURpYWxvZygvKmNhbGxiYWNrLCBidG4sLCBidG4wLCBidG4xLCBwcml6ZSovKSB7XG4gICAgY29uc3QgbGF5b3V0SWQgPSAnZGlhbG9nLWxheW91dCc7XG4gICAgbGV0IGNhbGxiYWNrLCBidG4sIHRpdGxlLCB0ZXh0LCBidG4wLCBidG4xLCBwcml6ZSwgcHJpemVJbWcscHJpemVOYW1lO1xuICAgIGNhbGxiYWNrID0gYXJndW1lbnRzWzBdID8gYXJndW1lbnRzWzBdIDogbnVsbDtcbiAgICAvLyBidG4gPSBhcmd1bWVudHNbMV0gPyBhcmd1bWVudHNbMV0gOiAwO1xuICAgIC8vIGJ0bjAgPSBhcmd1bWVudHNbMl0gPyBhcmd1bWVudHNbMl0gOiAn6aKG5Y+W5aWW5ZOBJztcbiAgICAvLyBidG4xID0gYXJndW1lbnRzWzNdID8gYXJndW1lbnRzWzNdIDogJ+i3s+i/hyc7XG4gICAgcHJpemUgPSBhcmd1bWVudHNbMV0gPyBhcmd1bWVudHNbMV0gOiA2O1xuICAgIGJ0bjA9J+mihuWPluWlluWTgSc7XG4gICAgYnRuMT0n6Lez6L+HJztcbiAgICBidG49MDtcbiAgICBzd2l0Y2ggKHByaXplKXtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcHJpemVOYW1lPVwi57uP5YW45ri45oiP5o6M5py6XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcHJpemVOYW1lPVwi5pWw56CB5bmz5p2/55S16ISRXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcHJpemVOYW1lPVwi6auY5riF5pGE5YOP5aS0XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcHJpemVOYW1lPVwi5ri45oiP5biBNTBGXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcHJpemVOYW1lPVwi5L2T5oSf6Lez6Iie5q+vXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgcHJpemVOYW1lPVwi5pWw56CB5pGE5YOP5py6XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHByaXplTmFtZT1cIuacjeWKoeWZqOWHuumUmeWVpu+8ge+8ge+8gVwiO1xuICAgICAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYocHJpemU8Nil7XG4gICAgICAgIHByaXplSW1nID0gXCJpbWcvdHVybnRhYmxlL3RoaW5nXCIrcHJpemUrXCIucG5nXCI7XG4gICAgfVxuICAgIGxldCBhbGlnbiA9IGFyZ3VtZW50c1s2XSA/IGFyZ3VtZW50c1s2XSA6ICdjZW50ZXInO1xuXG4gICAgbGV0IGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheW91dElkKTtcbiAgICBpZiAoIWxheW91dCkge1xuICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsYXlvdXQuY2xhc3NOYW1lID0gJ2RpYWxvZy1sYXlvdXQnO1xuICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcbiAgICAgICAgbGF5b3V0LmlubmVySFRNTCA9XG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInJlY2VpdmVEaWFsb2ctYmdcIj4nICtcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cInJlY2VpdmVEaWFsb2ctdGl0bGVcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cInJlY2VpdmVEaWFsb2ctdGV4dFwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwiZGlhbG9nLWJ0bjBcIiBjbGFzcz1cInJlY2VpdmVEaWFsb2ctYnRuIHJlY2VpdmVEaWFsb2ctYnRuMFwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwiZGlhbG9nLWJ0bjFcIiBjbGFzcz1cInJlY2VpdmVEaWFsb2ctYnRuIHJlY2VpdmVEaWFsb2ctYnRuMVwiPjwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2Pic7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcbiAgICB9XG4gICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICBsZXQgYmFja2dyb3VuZCA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcucmVjZWl2ZURpYWxvZy1iZycpO1xuICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIGxldCBub2RlVGl0bGUgPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJy5yZWNlaXZlRGlhbG9nLXRpdGxlJyk7XG4gICAgbm9kZVRpdGxlLmlubmVySFRNTCA9IFwiPGltZyBzcmM9J2ltZy90dXJudGFibGUvZGlhbG9nVGV4dC5wbmcnID5cIjtcbiAgICBsZXQgbm9kZVRleHQgPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJy5yZWNlaXZlRGlhbG9nLXRleHQnKTtcbiAgICBub2RlVGV4dC5pbm5lckhUTUwgPSAnPHAgY2xhc3M9XCJwcml6ZS10eHRcIj7mir3kuK0gXCI8c3BhbiBjbGFzcz1cInJlY2VpdmVEaWFsb2ctcHJpemVcIj48L3NwYW4+XCLmmK/lkKbnq4vljbPpooblj5bvvJ88L3A+JyArXG4gICAgICAgICc8ZGl2IGNsYXNzPVwicHJpemVJbWdcIj4nICtcbiAgICAgICAgJzxpbWcgY2xhc3M9XCJwcml6ZV9JbWdcIiBzcmM9XCJcIj4nICtcbiAgICAgICAgJzwvZGl2Pic7XG5cbiAgICBsZXQgbm9kZVByaXplID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcucmVjZWl2ZURpYWxvZy1wcml6ZScpO1xuICAgIG5vZGVQcml6ZS5pbm5lckhUTUwgPSBwcml6ZU5hbWU7XG5cbiAgICBsZXQgcHJpemVfSW1nID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcucHJpemVfSW1nJyk7XG4gICAgcHJpemVfSW1nLnNyYyA9IHByaXplSW1nO1xuXG4gICAgbGV0IG5vZGVCdG4wID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9nLWJ0bjAnKTtcbiAgICBub2RlQnRuMC5pbm5lckhUTUwgPSBidG4wICsgJzxkaXY+PC9kaXY+JztcbiAgICBsZXQgbm9kZUJ0bjEgPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2ctYnRuMScpO1xuICAgIG5vZGVCdG4xLmlubmVySFRNTCA9IGJ0bjEgKyAnPGRpdj48L2Rpdj4nO1xuXG4gICAgbGV0IGJ0bl8wMDYgPSBub2RlQnRuMC5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xuICAgIGxldCBidG5fMDA2bm9uZSA9IG5vZGVCdG4xLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik7XG5cbiAgICBub2RlQnRuMC5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xuICAgIG5vZGVCdG4xLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcblxuICAgIGNvbnN0IGZvY3VzQnRuID0gZnVuY3Rpb24gKGJ0bklkeCkge1xuICAgICAgICBpZiAoYnRuSWR4ID09IDApIHtcbiAgICAgICAgICAgIG5vZGVCdG4wLnN0eWxlLmNvbG9yID0gXCIjMDAwXCI7XG4gICAgICAgICAgICBub2RlQnRuMS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICBub2RlQnRuMC5jbGFzc05hbWUgPSBcIiBcIiArIFwicmVjZWl2ZURpYWxvZ0J0bl8xXCI7XG4gICAgICAgICAgICBub2RlQnRuMS5jbGFzc05hbWUgPSBcIiBcIiArIFwicmVjZWl2ZURpYWxvZ0J0bl8wXCI7XG4gICAgICAgICAgICAvLyBidG5fMDA2LmNsYXNzTmFtZSA9IFwiZGlhbG9nQnRuXzAwNlwiO1xuICAgICAgICAgICAgLy8gYnRuXzAwNm5vbmUuY2xhc3NOYW1lID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ0bklkeCA9PSAxKSB7XG4gICAgICAgICAgICBub2RlQnRuMC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICBub2RlQnRuMS5zdHlsZS5jb2xvciA9IFwiIzAwMFwiO1xuICAgICAgICAgICAgbm9kZUJ0bjAuY2xhc3NOYW1lID0gXCIgXCIgKyBcInJlY2VpdmVEaWFsb2dCdG5fMFwiO1xuICAgICAgICAgICAgbm9kZUJ0bjEuY2xhc3NOYW1lID0gXCIgXCIgKyBcInJlY2VpdmVEaWFsb2dCdG5fMVwiO1xuICAgICAgICAgICAgLy8gYnRuXzAwNi5jbGFzc05hbWUgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIC8vIGJ0bl8wMDZub25lLmNsYXNzTmFtZSA9IFwiZGlhbG9nQnRuXzAwNlwiO1xuICAgICAgICB9XG4gICAgICAgIGJ0biA9IGJ0bklkeDtcbiAgICB9O1xuXG4gICAgaWYgKGJ0biA8IDAgfHwgYnRuID4gMSkgYnRuID0gMDtcbiAgICBmb2N1c0J0bihidG4pO1xuXG4gICAgbGV0IHN1Ym1pdCA9IGZhbHNlO1xuICAgIHZhciBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcbiAgICB2YXIgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcbiAgICAgICAgdmFyIGN1cktleSA9IGdldEtleShlKTtcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcbiAgICAgICAgICAgICAgICBmb2N1c0J0bigwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcbiAgICAgICAgICAgICAgICBmb2N1c0J0bigxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazogICAgIC8v56Gu5a6aXG4gICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6ICAgICAgLy/lj5bmtohcbiAgICAgICAgICAgICAgICBidG4gPSAxO1xuICAgICAgICAgICAgICAgIHN1Ym1pdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1Ym1pdCkge1xuICAgICAgICAgICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xuICAgICAgICAgICAgaWYgKHR5cGVvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKGJ0bik7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQge3Nob3dSZWNlaXZlRGlhbG9nfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL3JlY2VpdmVEaWFsb2cuanMiLCJ2YXIgY29uZmlnID0ge1xyXG4gICAgXCJwaW5JbmRleFwiOiAwLCAvL+a7muWKqOeahOi1t+eCuVxyXG4gICAgXCJzcGVlZFwiOiAyMDAsIC8v5rua5Yqo55qE6YCf5bqmXHJcbiAgICBcImN5Y2xlXCI6IDAsIC8v5rua5Yqo55qE5ZyI5pWwXHJcbiAgICBcImZhc3RDeWNsZVwiOiA1LCAvL+W/q+mAn+a7muWKqOWciOaVsFxyXG4gICAgXCJyb2xsUmVzdWx0XCI6IDQgLy/mir3lpZbnmoTnu5PmnpxcclxufTtcclxudmFyIFJvbGwgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHNlbGYuY29uZmlnID0gY29uZmlnO1xyXG4gICAgc2VsZi5waW5JbmRleD0nJztcclxuICAgIHNlbGYuc3RvcEluZGV4ID0gJyc7XHJcbiAgICBzZWxmLmlzUm9sbGluZyA9IGZhbHNlO1xyXG4gICAgc2VsZi50aW1lciA9IG51bGw7XHJcbiAgICBzZWxmLnJvbGxMaXN0ID0gJyc7XHJcbiAgICBzZWxmLnJvbGxJbmRleCA9IDA7XHJcbiAgICBzZWxmLmNhbGxiYWNrPVwiXCI7XHJcbn07XHJcblxyXG5Sb2xsLnByb3RvdHlwZSA9IHtcclxuICAgIGluaXQ6ZnVuY3Rpb24gKHJvbGxSZXN1bHQscm9sbExpc3QpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5waW5JbmRleD0wO1xyXG4gICAgICAgIHNlbGYuc3BlZWQ9MzAwO1xyXG4gICAgICAgIHNlbGYuY3ljbGU9MDtcclxuICAgICAgICBzZWxmLmZhc3RDeWNsZT0yO1xyXG4gICAgICAgIHNlbGYucm9sbExpc3Q9cm9sbExpc3Q7XHJcbiAgICAgICAgc2VsZi5yb2xsUmVzdWx0PXJvbGxSZXN1bHQ7XHJcbiAgICAgICAgc2VsZi5zdG9wSW5kZXggPSBzZWxmLnJvbGxSZXN1bHQ7XHJcbiAgICB9LFxyXG4gICAgc3RhcnQ6ZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5yb2xsUHJlKCk7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjaz1jYWxsYmFjaztcclxuICAgIH0sXHJcbiAgICByb2xsUHJlOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCFzZWxmLmlzUm9sbGluZykge1xyXG4gICAgICAgICAgICBmb3IodmFyIGk9MDtpPHNlbGYucm9sbExpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBpZihpPT1zZWxmLnBpbkluZGV4KXtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJvbGxMaXN0W3NlbGYucGluSW5kZXhdLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yb2xsTGlzdFtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHNlbGYucm9sbExpc3QuZXEoc2VsZi5vcHMucGluSW5kZXgpLnNob3coKS5zaWJsaW5ncygpLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5yb2xsU3RhcnQoc2VsZik7IC8vIOW8gOWni+WQr+WKqOi9rOebmFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByb2xsR29OZXh0OmZ1bmN0aW9uIChzZWxmKSB7XHJcbiAgICAgICAgc2VsZi5yb2xsSW5kZXggKz0gMTtcclxuICAgICAgICBpZiAoc2VsZi5yb2xsSW5kZXggPiBzZWxmLnJvbGxMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxmLnJvbGxJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHNlbGYuY3ljbGUrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2VsZi5yb2xsTGlzdC5lcShzZWxmLnJvbGxJbmRleCkuc2hvdygpLnNpYmxpbmdzKCkuaGlkZSgpO1xyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8c2VsZi5yb2xsTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYoaT09c2VsZi5yb2xsSW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yb2xsTGlzdFtzZWxmLnJvbGxJbmRleF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yb2xsTGlzdFtpXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJvbGxTdG9wOmZ1bmN0aW9uIChzZWxmKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzZWxmLnRpbWVyKTtcclxuICAgICAgICAoZnVuY3Rpb24gc3RvcEdvTmV4dCgpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYucm9sbEluZGV4ICE9PSBzZWxmLnN0b3BJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yb2xsR29OZXh0KHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9wR29OZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5pc1JvbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNlbGYuY3ljbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yb2xsSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYoc2VsZi5jYWxsYmFjayE9bnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYWxsYmFjayhzZWxmLnJvbGxSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0dXJudGFibGUtdGV4dFwiKS5zcmM9XCJpbWcvdHVybnRhYmxlL2J0bjEucG5nXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKCk7XHJcbiAgICB9LFxyXG4gICAgcm9sbFN0YXJ0OmZ1bmN0aW9uIChzZWxmKSB7XHJcbiAgICAgICAgc2VsZi5pc1JvbGxpbmcgPSB0cnVlO1xyXG4gICAgICAgIHNlbGYudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2VsZi5yb2xsR29OZXh0KHNlbGYpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5yb2xsSW5kZXggPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzZWxmLnRpbWVyKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuc3BlZWQgPSAyMDtcclxuICAgICAgICAgICAgICAgIHNlbGYudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJvbGxHb05leHQoc2VsZik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuY3ljbGUgPj0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHNlbGYudGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNwZWVkID0gMjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5jeWNsZSA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucm9sbFN0b3Aoc2VsZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucm9sbEdvTmV4dChzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgc2VsZi5zcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgc2VsZi5zcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBzZWxmLnNwZWVkKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQge1JvbGx9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9yb2xsLmpzIiwiaW1wb3J0IHtyZXRhaWwscmV0YWlsSWR9IGZyb20gXCIuL19yZXRhaWxcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEtleUNvZGVzKCkge1xyXG4gICAgbGV0IGtleU1hcCA9IHt9O1xyXG5cclxuICAgIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ3hnZCkge1xyXG4gICAgICAgIGtleU1hcCA9IHsgLy8g5bm/6KW/5bm/55S1XHJcbiAgICAgICAgICAgIHVwOiAzOCwgICAgICAgIC8vIOS4ilxyXG4gICAgICAgICAgICBkb3duOiA0MCwgICAgICAvLyDkuItcclxuICAgICAgICAgICAgbGVmdDogMzcsICAgICAgLy8g5bemXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzOSwgICAgIC8vIOWPs1xyXG4gICAgICAgICAgICBvazogMTMsICAgICAgICAvLyDnoa7lrppcclxuICAgICAgICAgICAgZjE6IDQwMCwgICAgICAgLy8gZjEgLy/nuqJcclxuICAgICAgICAgICAgZjI6IDQwMSwgICAgICAgLy8gZjIgLy/ok51cclxuICAgICAgICAgICAgZjM6IDQwMywgICAgICAgLy8gZjMgLy/pu4RcclxuICAgICAgICAgICAgZjQ6IDQwMiwgICAgICAgLy8gZjQgLy/nu79cclxuICAgICAgICAgICAgbnVtMTogNDksICAgICAgLy8g5pWw5a2XMVxyXG4gICAgICAgICAgICBudW0yOiA1MCwgICAgICAvLyDmlbDlrZcyXHJcbiAgICAgICAgICAgIG51bTM6IDUxLCAgICAgIC8vIOaVsOWtlzNcclxuICAgICAgICAgICAgbnVtNDogNTIsICAgICAgLy8g5pWw5a2XNFxyXG4gICAgICAgICAgICBudW01OiA1MywgICAgICAvLyDmlbDlrZc1XHJcbiAgICAgICAgICAgIG51bTY6IDU0LCAgICAgIC8vIOaVsOWtlzZcclxuICAgICAgICAgICAgbnVtNzogNTUsICAgICAgLy8g5pWw5a2XN1xyXG4gICAgICAgICAgICBudW04OiA1NiwgICAgICAvLyDmlbDlrZc4XHJcbiAgICAgICAgICAgIG51bTk6IDU3LCAgICAgIC8vIOaVsOWtlzlcclxuICAgICAgICAgICAgbnVtMDogNDgsICAgICAgLy8g5pWw5a2XMFxyXG4gICAgICAgICAgICBtdXRlOiA1MTgsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDM5OSwgICAgICAvLyDov5Tlm55cclxuICAgICAgICAgICAgdHJhY2s6IDQwNiwgICAgIC8vIOWjsOmBk++8nyAvL+WjsOmBk+mUrlxyXG4gICAgICAgICAgICB2b2xVcDogNTE3LCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogNTE2LCAgLy8g5YeP5bCP6Z+z6YePXHJcbiAgICAgICAgICAgIGZhdjogNDA0LCAgICAgICAvLyDllpzmrKJcclxuICAgICAgICAgICAgcGxheUJhY2s6IDUyMSwgIC8vIOWbnuaUviAgLy/ngrnmkq3plK5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMywgICAgLy8g5LiK5LiA6aG1XHJcbiAgICAgICAgICAgIHBhZ2VEb3duOiAzNCwgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA1MTUsICAgICAgIC8vIOiPnOWNlVxyXG4gICAgICAgICAgICBlc2M6IDUxNCwgICAgICAgIC8v6YCA5Ye6XHJcbiAgICAgICAgICAgIGhvbWU6IDUyMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuaG55eCkge1xyXG4gICAgICAgIC8va2V5TWFwID0geyAvLyDmsrPljZfmnInnur8gbGludXhcclxuICAgICAgICAvLyAgICB1cDogNjUzNjIsXHJcbiAgICAgICAgLy8gICAgZG93bjogNjUzNjQsXHJcbiAgICAgICAgLy8gICAgbGVmdDogNjUzNjEsXHJcbiAgICAgICAgLy8gICAgcmlnaHQ6IDY1MzYzLFxyXG4gICAgICAgIC8vICAgIG9rOiA2NTI5MyxcclxuICAgICAgICAvLyAgICBmMTogMzIsXHJcbiAgICAgICAgLy8gICAgZjI6IDMzLFxyXG4gICAgICAgIC8vICAgIGYzOiAzNCxcclxuICAgICAgICAvLyAgICBmNDogMzUsXHJcbiAgICAgICAgLy8gICAgbnVtMTogNDksXHJcbiAgICAgICAgLy8gICAgbnVtMjogNTAsXHJcbiAgICAgICAgLy8gICAgbnVtMzogNTEsXHJcbiAgICAgICAgLy8gICAgbnVtNDogNTIsXHJcbiAgICAgICAgLy8gICAgbnVtNTogNTMsXHJcbiAgICAgICAgLy8gICAgbnVtNjogNTQsXHJcbiAgICAgICAgLy8gICAgbnVtNzogNTUsXHJcbiAgICAgICAgLy8gICAgbnVtODogNTYsXHJcbiAgICAgICAgLy8gICAgbnVtOTogNTcsXHJcbiAgICAgICAgLy8gICAgbnVtMDogNDgsXHJcbiAgICAgICAgLy8gICAgbXV0ZTogNjM1NjMsXHJcbiAgICAgICAgLy8gICAgYmFjazogNjUzNjcsXHJcbiAgICAgICAgLy8gICAgdHJhY2s6IDY1MzA3LFxyXG4gICAgICAgIC8vICAgIHZvbFVwOiA2MzU2MSxcclxuICAgICAgICAvLyAgICB2b2xEb3duOiA2MzU2MixcclxuICAgICAgICAvLyAgICBmYXY6IDM2LFxyXG4gICAgICAgIC8vICAgIHBsYXlCYWNrOiA3MixcclxuICAgICAgICAvLyAgICBwYWdlVXA6IDI1LFxyXG4gICAgICAgIC8vICAgIHBhZ2VEb3duOiAyNixcclxuICAgICAgICAvLyAgICBtZW51OiA2NTM2MCxcclxuICAgICAgICAvLyAgICBlc2M6IDI3LFxyXG4gICAgICAgIC8vICAgIGhvbWU6IDY1MzYwXHJcbiAgICAgICAgLy99O1xyXG4gICAgICAgIGtleU1hcCA9IHsgLy8g5rKz5Y2X5pyJ57q/IGFuZHJvaWRcclxuICAgICAgICAgICAgdXA6IDM4LCAgICAgICAgLy8g5LiKXHJcbiAgICAgICAgICAgIGRvd246IDQwLCAgICAgIC8vIOS4i1xyXG4gICAgICAgICAgICBsZWZ0OiAzNywgICAgICAvLyDlt6ZcclxuICAgICAgICAgICAgcmlnaHQ6IDM5LCAgICAgLy8g5Y+zXHJcbiAgICAgICAgICAgIG9rOiAxMywgICAgICAgIC8vIOehruWumlxyXG4gICAgICAgICAgICBmMTogMTEyLCAgICAgICAvLyBmMVxyXG4gICAgICAgICAgICBmMjogMTEzLCAgICAgICAvLyBmMlxyXG4gICAgICAgICAgICBmMzogMTE0LCAgICAgICAvLyBmM1xyXG4gICAgICAgICAgICBmNDogMTE1LCAgICAgICAvLyBmNFxyXG4gICAgICAgICAgICBudW0xOiA0OSwgICAgICAvLyDmlbDlrZcxXHJcbiAgICAgICAgICAgIG51bTI6IDUwLCAgICAgIC8vIOaVsOWtlzJcclxuICAgICAgICAgICAgbnVtMzogNTEsICAgICAgLy8g5pWw5a2XM1xyXG4gICAgICAgICAgICBudW00OiA1MiwgICAgICAvLyDmlbDlrZc0XHJcbiAgICAgICAgICAgIG51bTU6IDUzLCAgICAgIC8vIOaVsOWtlzVcclxuICAgICAgICAgICAgbnVtNjogNTQsICAgICAgLy8g5pWw5a2XNlxyXG4gICAgICAgICAgICBudW03OiA1NSwgICAgICAvLyDmlbDlrZc3XHJcbiAgICAgICAgICAgIG51bTg6IDU2LCAgICAgIC8vIOaVsOWtlzhcclxuICAgICAgICAgICAgbnVtOTogNTcsICAgICAgLy8g5pWw5a2XOVxyXG4gICAgICAgICAgICBudW0wOiA0OCwgICAgICAvLyDmlbDlrZcwIC8v5pWw5a2XMCDov5Tlm55cclxuICAgICAgICAgICAgbXV0ZTogNzcsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDgsICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA4MiwgICAgIC8vIOWjsOmBk++8n1xyXG4gICAgICAgICAgICB2b2xVcDogMTkwLCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogMTg4LCAgLy8g5YeP5bCP6Z+z6YePXHJcbiAgICAgICAgICAgIGZhdjogODQsICAgICAgIC8vIOWWnOasolxyXG4gICAgICAgICAgICBwbGF5QmFjazogODAsICAvLyDlm57mlL5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMywgICAgLy8g5LiK5LiA6aG1XHJcbiAgICAgICAgICAgIHBhZ2VEb3duOiAzNCwgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA3MiwgICAgICAgLy8g6I+c5Y2VXHJcbiAgICAgICAgICAgIGVzYzogMjcsXHJcbiAgICAgICAgICAgIGhvbWU6IDcyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHJldGFpbElkID09IHJldGFpbC5nZGdkKSB7XHJcbiAgICAgICAga2V5TWFwID0geyAvLyDlub/kuJzlub/nlLVcclxuICAgICAgICAgICAgdXA6IDg3LCAgICAgICAgLy8g5LiKIFfplK5cclxuICAgICAgICAgICAgZG93bjogODMsICAgICAgLy8g5LiLIFPplK5cclxuICAgICAgICAgICAgbGVmdDogNjUsICAgICAgLy8g5bemIEHplK5cclxuICAgICAgICAgICAgcmlnaHQ6IDY4LCAgICAgLy8g5Y+zIETplK5cclxuICAgICAgICAgICAgb2s6IDEzLCAgICAgICAgLy8g56Gu5a6aXHJcbiAgICAgICAgICAgIGYxOiA0MDAsICAgICAgIC8vIGYxIC8v57qiXHJcbiAgICAgICAgICAgIGYyOiA0MDEsICAgICAgIC8vIGYyIC8v6JOdXHJcbiAgICAgICAgICAgIGYzOiA0MDIsICAgICAgIC8vIGYzIC8v6buEXHJcbiAgICAgICAgICAgIGY0OiA0MDMsICAgICAgIC8vIGY0IC8v57u/XHJcbiAgICAgICAgICAgIG51bTE6IDQ5LCAgICAgIC8vIOaVsOWtlzFcclxuICAgICAgICAgICAgbnVtMjogNTAsICAgICAgLy8g5pWw5a2XMlxyXG4gICAgICAgICAgICBudW0zOiA1MSwgICAgICAvLyDmlbDlrZczXHJcbiAgICAgICAgICAgIG51bTQ6IDUyLCAgICAgIC8vIOaVsOWtlzRcclxuICAgICAgICAgICAgbnVtNTogNTMsICAgICAgLy8g5pWw5a2XNVxyXG4gICAgICAgICAgICBudW02OiA1NCwgICAgICAvLyDmlbDlrZc2XHJcbiAgICAgICAgICAgIG51bTc6IDU1LCAgICAgIC8vIOaVsOWtlzdcclxuICAgICAgICAgICAgbnVtODogNTYsICAgICAgLy8g5pWw5a2XOFxyXG4gICAgICAgICAgICBudW05OiA1NywgICAgICAvLyDmlbDlrZc5XHJcbiAgICAgICAgICAgIG51bTA6IDQ4LCAgICAgIC8vIOaVsOWtlzBcclxuICAgICAgICAgICAgbXV0ZTogNjcsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDgsICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA4NiwgICAgIC8vIOWjsOmBk++8nyAvL+WjsOmBk+mUrlxyXG4gICAgICAgICAgICB2b2xVcDogNjEsICAgIC8vIOWinuWkp+mfs+mHj1xyXG4gICAgICAgICAgICB2b2xEb3duOiA0NSwgIC8vIOWHj+Wwj+mfs+mHj1xyXG4gICAgICAgICAgICBmYXY6IDc2LCAgICAgICAvLyDllpzmrKJcclxuICAgICAgICAgICAgcGxheUJhY2s6IDUyMSwgIC8vIOWbnuaUviAgLy/ngrnmkq3plK5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMDYsICAgIC8vIOS4iuS4gOmhtVxyXG4gICAgICAgICAgICBwYWdlRG93bjogMzA3LCAgLy8g5LiL5LiA6aG1XHJcbiAgICAgICAgICAgIG1lbnU6IDcyLCAgICAgICAvLyDoj5zljZVcclxuICAgICAgICAgICAgZXNjOiAyNyxcclxuICAgICAgICAgICAgaG9tZTogNzJcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0gZWxzZSB7IC8vIHdpbmRvd3Mg6ZSu56CBXHJcbiAgICAgICAga2V5TWFwID0ge1xyXG4gICAgICAgICAgICB1cDogMzgsICAgICAgICAvLyDkuIpcclxuICAgICAgICAgICAgZG93bjogNDAsICAgICAgLy8g5LiLXHJcbiAgICAgICAgICAgIGxlZnQ6IDM3LCAgICAgIC8vIOW3plxyXG4gICAgICAgICAgICByaWdodDogMzksICAgICAvLyDlj7NcclxuICAgICAgICAgICAgb2s6IDEzLCAgICAgICAgLy8g56Gu5a6aXHJcbiAgICAgICAgICAgIGYxOiAxMTIsICAgICAgIC8vIGYxXHJcbiAgICAgICAgICAgIGYyOiAxMTMsICAgICAgIC8vIGYyXHJcbiAgICAgICAgICAgIGYzOiAxMTQsICAgICAgIC8vIGYzXHJcbiAgICAgICAgICAgIGY0OiAxMTUsICAgICAgIC8vIGY0XHJcbiAgICAgICAgICAgIG51bTE6IDQ5LCAgICAgIC8vIOaVsOWtlzFcclxuICAgICAgICAgICAgbnVtMjogNTAsICAgICAgLy8g5pWw5a2XMlxyXG4gICAgICAgICAgICBudW0zOiA1MSwgICAgICAvLyDmlbDlrZczXHJcbiAgICAgICAgICAgIG51bTQ6IDUyLCAgICAgIC8vIOaVsOWtlzRcclxuICAgICAgICAgICAgbnVtNTogNTMsICAgICAgLy8g5pWw5a2XNVxyXG4gICAgICAgICAgICBudW02OiA1NCwgICAgICAvLyDmlbDlrZc2XHJcbiAgICAgICAgICAgIG51bTc6IDU1LCAgICAgIC8vIOaVsOWtlzdcclxuICAgICAgICAgICAgbnVtODogNTYsICAgICAgLy8g5pWw5a2XOFxyXG4gICAgICAgICAgICBudW05OiA1NywgICAgICAvLyDmlbDlrZc5XHJcbiAgICAgICAgICAgIG51bTA6IDQ4LCAgICAgIC8vIOaVsOWtlzAgLy/mlbDlrZcwIOi/lOWbnlxyXG4gICAgICAgICAgICBtdXRlOiA3NywgICAgICAvLyDpnZnpn7NcclxuICAgICAgICAgICAgYmFjazogOCwgICAgICAvLyDov5Tlm55cclxuICAgICAgICAgICAgdHJhY2s6IDgyLCAgICAgLy8g5aOw6YGT77yfXHJcbiAgICAgICAgICAgIHZvbFVwOiAxOTAsICAgIC8vIOWinuWkp+mfs+mHj1xyXG4gICAgICAgICAgICB2b2xEb3duOiAxODgsICAvLyDlh4/lsI/pn7Pph49cclxuICAgICAgICAgICAgZmF2OiA4NCwgICAgICAgLy8g5Zac5qyiXHJcbiAgICAgICAgICAgIHBsYXlCYWNrOiA4MCwgIC8vIOWbnuaUvlxyXG4gICAgICAgICAgICBwYWdlVXA6IDMzLCAgICAvLyDkuIrkuIDpobVcclxuICAgICAgICAgICAgcGFnZURvd246IDM0LCAgLy8g5LiL5LiA6aG1XHJcbiAgICAgICAgICAgIG1lbnU6IDcyLCAgICAgICAvLyDoj5zljZVcclxuICAgICAgICAgICAgZXNjOiAyNyxcclxuICAgICAgICAgICAgaG9tZTogNzJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleU1hcDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXZlbnQoZXZ0KSB7XHJcbiAgICByZXR1cm4gZXZ0IHx8IHdpbmRvdy5ldmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0S2V5KGV2dCkge1xyXG4gICAgLy/mlK/mjIFJReOAgUZGXHJcbiAgICBldnQgPSBnZXRFdmVudChldnQpO1xyXG4gICAgcmV0dXJuIGV2dC5rZXlDb2RlIHx8IGV2dC53aGljaCB8fCBldnQuY2hhckNvZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvZGVzKCkge1xyXG4gICAgY29uc3Qga2V5TWFwID0gZ2V0S2V5Q29kZXMoKTtcclxuICAgIHZhciBjb2RlcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgY29kZSBpbiBrZXlNYXApIHtcclxuICAgICAgICBpZiAoa2V5TWFwLmhhc093blByb3BlcnR5KGNvZGUpKSB7XHJcbiAgICAgICAgICAgIGNvZGVzLnB1c2goa2V5TWFwW2NvZGVdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29kZXM7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX2tleWNvZGVzLmpzIiwiY29uc3QgcmV0YWlsID0ge1xyXG4gICAgZ3hnZDogJzk2MzM1JyxcclxuICAgIGhueXg6ICc5NjI2NicsXHJcbiAgICBnZGdkOiAnOTY5NTYnLFxyXG4gICAgbm9uZTogJzEwMDAnXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRSZXRhaWxJZCgpIHtcclxuICAgIHRyeSB7Ly/lub/opb/lub/nlLVcclxuICAgICAgICBpZiAoZ3Vhbmd4aSAmJiBpUGFuZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJldGFpbC5neGdkO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHRyeSB7Ly/msrPljZfmnInnur9cclxuICAgICAgICB2YXIgU3lzdGVtID0gd2luZG93LlN5c3RlbTtcclxuICAgICAgICBpZiAoU3lzdGVtICYmIFN5c3RlbS5zdGJJRCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0YWlsLmhueXg7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgdHJ5IHsvL+W5v+S4nOW5v+eUtVxyXG4gICAgICAgIGlmIChDQSAmJiBTdG9yYWdlU2VydmljZSAmJiBGaWxlU3lzdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXRhaWwuZ2RnZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy92YXIgc3RvcmFnZUxpc3QgPSBTdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlSW5mb3MoKTtcclxuICAgICAgICAvL2lmIChzdG9yYWdlTGlzdCAmJiBzdG9yYWdlTGlzdCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vICAgIHZhciBwYXJ0aXRpb25QYXRoTGlzdCA9IHN0b3JhZ2VMaXN0WzBdLmdldFBhcnRpdGlvbnNJbmZvKClbMF07XHJcbiAgICAgICAgLy8gICAgdmFyIHBhcnRpdGlvblBhdGggPSBwYXJ0aXRpb25QYXRoTGlzdC5wYXRoO1xyXG4gICAgICAgIC8vICAgIHZhciBkaXIgPSBGaWxlU3lzdGVtLmdldERpcmVjdG9yeShwYXJ0aXRpb25QYXRoKTtcclxuICAgICAgICAvLyAgICB2YXIgZmxpc3QgPSBkaXIuZmlsZUxpc3Q7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICBmb3IgKHZhciBpIGluIGZsaXN0KSB7XHJcbiAgICAgICAgLy8gICAgICAgIGlmIChmbGlzdFtpXS5uYW1lLnN1YnN0cmluZygwLCA2KSA9PSBcImNhY2FyZFwiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICB2YXIgY2FyZE5vID0gXCI5Njk1NlwiICsgZmxpc3RbaV0ubmFtZS5zdWJzdHJpbmcoNiwgMTIpO1xyXG4gICAgICAgIC8vICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgfVxyXG4gICAgICAgIC8vfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldGFpbC5ub25lO1xyXG59XHJcblxyXG52YXIgcmV0YWlsSWQgPSBnZXRSZXRhaWxJZCgpO1xyXG5leHBvcnQge3JldGFpbCxnZXRSZXRhaWxJZCxyZXRhaWxJZH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fcmV0YWlsLmpzIiwiaW1wb3J0IHtSZXF1ZXN0Qm9keSwgVG9vZG9DbGllbnR9IGZyb20gXCIuL190ZGNsaVwiO1xyXG5pbXBvcnQge3JldGFpbElkLHJldGFpbH0gZnJvbSBcIi4vX3JldGFpbFwiO1xyXG5pbXBvcnQge3N0Yk51bGx9IGZyb20gXCIuL19zdGJudWxsXCI7XHJcbnZhciBtZDUgPSByZXF1aXJlKCdtZDUnKTtcclxudmFyIEpTT04gPSByZXF1aXJlKCdKU09OJyk7XHJcblxyXG5mdW5jdGlvbiBTdGJDbGllbnQoKSB7XHJcbiAgICAvLyB0aGlzLm9yaWdpblVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnL3Rkc3J2JztcclxuICAgIHRoaXMub3JpZ2luVXJsID0gXCJodHRwOi8vbG9jYWxob3N0L1Rvb2RvU2VydmljZS9wdWJsaWMvXCI7XHJcbiAgICB0aGlzLmFwcEtleSA9ICcxMDAwJztcclxuICAgIHRoaXMuYXBwU2VjcmV0ID0gJ1JjT0ZodEFZendDR285MVBHSGRWJztcclxuICAgIHRoaXMuX3RkY2xpID0gbnVsbDtcclxufVxyXG5TdGJDbGllbnQucHJvdG90eXBlID0ge1xyXG4gICAgaXNSZWFkeTogZmFsc2UsXHJcbiAgICB1c2VySWQ6ICcnLFxyXG4gICAgdG9rZW46ICcnLFxyXG5cclxuICAgIG1kNTogZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgIHJldHVybiBtZDUobXNnICsgdGhpcy5hcHBTZWNyZXQpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGNhbGxiYWNrLmJpelxyXG4gICAgICovXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fdGRjbGkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGRjbGkgPSBuZXcgVG9vZG9DbGllbnQodGhpcy5hcHBLZXksIHRoaXMuYXBwU2VjcmV0LCB0aGlzLm9yaWdpblVybCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdG9rZW4gPSBzdGJOdWxsLmdldFZhbHVlKCd0b29kby50b2tlbicpO1xyXG4gICAgICAgIGxldCB1c2VySWQgPSBzdGJOdWxsLmdldFZhbHVlKCd0b29kby51c2VySWQnKTtcclxuICAgICAgICAvLyBpZiAodG9rZW4gJiYgdXNlcklkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcclxuICAgICAgICAvLyAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soMCk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncmV0YWlsSWQnOiByZXRhaWxJZCxcclxuICAgICAgICAgICAgJ3JlZ2lvbkNvZGUnOiBzdGJOdWxsLmdldFJlZ2lvbkNvZGUoKSxcclxuICAgICAgICAgICAgJ2NhcmRUVic6IHN0Yk51bGwuZ2V0Q2FyZFRWKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby91c2VyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvJyk7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2VuZChib2R5SW4sIGZ1bmN0aW9uIChib2R5T3V0KSB7XHJcbiAgICAgICAgICAgIGlmIChib2R5T3V0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYml6T3V0ID0gSlNPTi5wYXJzZShib2R5T3V0LmJpekNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgb3duZXIudXNlcklkID0gYml6T3V0LnVzZXJJZDtcclxuICAgICAgICAgICAgICAgIG93bmVyLnRva2VuID0gYm9keU91dC50b2tlbjtcclxuICAgICAgICAgICAgICAgIHN0Yk51bGwuc2V0VmFsdWUoJ3Rvb2RvLnVzZXJJZCcsIG93bmVyLnVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBzdGJOdWxsLnNldFZhbHVlKCd0b29kby50b2tlbicsIG93bmVyLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIG93bmVyLmlzUmVhZHkgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vb3duZXIudGRlVXNlcihjYWxsYmFjayk7Ly/ov5Tlm57lpKfljoXnmoTotKblj7fkv6Hmga9cclxuICAgICAgICAgICAgICAgIG93bmVyLnRkZVVzZXIoZnVuY3Rpb24gKGNvZGUsIGJpeikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYml6LmJpelVzZXIgPSBiaXpPdXQuYml6VXNlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhjb2RlLCBiaXopO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQuY29kZSwgYm9keU91dC5zdWJDb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGJpelVzZXI6IGZ1bmN0aW9uIChiaXpJbiwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby9iaXpVc2VyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kbycpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICBhZGRXaW5uZXI6IGZ1bmN0aW9uIChwcml6ZUlELHN0YXRlLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcml6ZUlEJzpwcml6ZUlELFxyXG4gICAgICAgICAgICAnc3RhdGUnOnN0YXRlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2FkZFdpbm5lcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIGFkZFN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2FkZFN0YXRlJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbik7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRhRnJlZVN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3VwZGF0YUZyZWVTdGF0ZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4pO1xyXG4gICAgfSxcclxuICAgIGdldFByaXplOiBmdW5jdGlvbiAoaWQsY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ2lkJzppZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2dldFByaXplJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbixjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgdHVybnRhYmxlU3RhdGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS90dXJudGFibGVTdGF0ZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgLy8gYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICB0dXJudGFibGVQcm86IGZ1bmN0aW9uICh0eXBlLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAndHlwZSc6dHlwZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3R1cm50YWJsZVBybyc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICBwcml6ZU51bTpmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvdHVybnRhYmxlUHJpemVOdW0nO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG5cclxuICAgIHdpbm5lckluZm86IGZ1bmN0aW9uIChudW0sY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ251bSc6IG51bVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3dpbm5lckluZm8nO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHlwZSAx77ya5pyq6aKG5Y+WIDI65bey6aKG5Y+WIDPvvJrlt7Lov4fmnJ9cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHVzZXJXaW5uZXI6IGZ1bmN0aW9uICh0eXBlLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICd0eXBlJzogdHlwZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3VzZXJXaW5uZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICBhZGRDb2luczogZnVuY3Rpb24gKGFkZE51bSkge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnYWRkTnVuJzogYWRkTnVtXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvYWRkQ29pbic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4pO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2R1Y3RJZCDmn6Xor6LnmoTkuqflk4Hnu5/kuIDnvJblj7dcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBjYWxsYmFjay5iaXpcclxuICAgICAqL1xyXG4gICAgcXVlcnlTZXJ2ZTE6IGZ1bmN0aW9uIChwcm9kdWN0SWQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcm9kdWN0SWQnOiBwcm9kdWN0SWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3NlcnZlL3F1ZXJ5MSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vc2VydmUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvZHVjdElkIOafpeivoueahOS6p+WTgee7n+S4gOe8luWPt1xyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6XHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5UHJvZHVjdDE6IGZ1bmN0aW9uIChwcm9kdWN0SWQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcm9kdWN0SWQnOiBwcm9kdWN0SWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL21hcmtldC9xdWVyeTEnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL21hcmtldCcpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9kdWN0SWQg55Sf5oiQ6K6i5Y2V55qE5Lqn5ZOB57uf5LiA57yW5Y+3XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2tVcmwg5pSv5LuY5ZCO5Zue6LCD5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSDljp/moLfkvKDlm57nu5ljYWxsYmFja1VybFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6XHJcbiAgICAgKi9cclxuICAgIG9yZGVyMTogZnVuY3Rpb24gKHByb2R1Y3RJZCwgY2FsbGJhY2tVcmwsIGRhdGEsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcm9kdWN0SWQnOiBwcm9kdWN0SWQsXHJcbiAgICAgICAgICAgICd1c2VySWQnOiB0aGlzLnVzZXJJZCxcclxuICAgICAgICAgICAgJ2NhbGxiYWNrVXJsJzogY2FsbGJhY2tVcmwsXHJcbiAgICAgICAgICAgICdkYXRhJzogZGF0YVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdHJhZGUvb3JkZXIxJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90cmFkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFkZU5vIOivt+axguaUr+S7mOiuouWNleWPt1xyXG4gICAgICovXHJcbiAgICBwYXk6IGZ1bmN0aW9uICh0cmFkZU5vKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICd0cmFkZU5vJzogdHJhZGVOb1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdHJhZGUvcGF5JztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90cmFkZScpO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnN1Ym1pdChib2R5SW4pO1xyXG4gICAgfSxcclxuICAgIGJpbGw6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RyYWRlL2JpbGwnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdHJhZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnui0puWPt+S/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGVVc2VyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvdXNlcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSAnJztcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgdGRlTG9jazogZnVuY3Rpb24gKG9sZExvY2ssIG5ld0xvY2ssIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdjaGlsZExvY2snOiBvbGRMb2NrLFxyXG4gICAgICAgICAgICAnbmV3TG9jayc6IG5ld0xvY2tcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9sb2NrJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSDpobXpnaLnvJblj7dcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkZVBhZ2U6IGZ1bmN0aW9uIChwYWdlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncGFnZSc6IHBhZ2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9wYWdlJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2F0ZWdvcnkg5q2M5puy5YiG57G7XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnumhtemdouS/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGFTb25nOiBmdW5jdGlvbiAoY2F0ZWdvcnksIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdjYXRlZ29yeSc6IGNhdGVnb3J5XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvc29uZyc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIHRkYVNvbmcxOiBmdW5jdGlvbiAoc29uZ0lkLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnc29uZ0lkJzogc29uZ0lkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvc29uZzEnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkYU1hdGNoOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvbWF0Y2gnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpeiDov5Tlm57pobXpnaLkv6Hmga9cclxuICAgICAqL1xyXG4gICAgdGRhVXNlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL3VzZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZCDorrDlvZVcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkYVJlY29yZDogZnVuY3Rpb24gKHJlY29yZCwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvcmVjb3JkJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHJlY29yZCk7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0Qm9keX0gYm9keUluXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxudW1iZXJ8c3RyaW5nfSBjYWxsYmFjay5iaXog6L+U5Zue5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHNlbmQ6IGZ1bmN0aW9uIChib2R5SW4sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3Qgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNlbmQoYm9keUluLCBmdW5jdGlvbiAoYm9keU91dCkge1xyXG4gICAgICAgICAgICBpZiAoYm9keU91dC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBiaXpPdXQgPSBKU09OLnBhcnNlKGJvZHlPdXQuYml6Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9keU91dC50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnRva2VuID0gYm9keU91dC50b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICBzdGJOdWxsLnNldFZhbHVlKCd0b29kby50b2tlbicsIG93bmVyLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiAxKTsgICAgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiBcIjFcIik7ICAgICAgICAgICAgICAvLyDov5Tlm57lrZfnrKbkuLJcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgYWxlcnQodHlwZW9mIHRydWUpOyAgICAgICAgICAgICAvLyDov5Tlm57lrZfnrKbkuLJcImJvb2xlYW5cIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiB7fSk7ICAgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiBbXSk7ICAgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJvYmplY3QgXCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgZnVuY3Rpb24oKXt9KTsgICAgIC8vIOi/lOWbnuWtl+espuS4slwiZnVuY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiBudWxsKTsgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiB1bmRlZmluZWQpOyAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpZiAoYml6T3V0ICYmIHR5cGVvZihiaXpPdXQpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpek91dC5zdGJjbGkgPSBvd25lcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dC5jb2RlLCBiaXpPdXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0LmNvZGUsIGJvZHlPdXQuc3ViQ29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG52YXIgc3RiY2xpID0gbmV3IFN0YkNsaWVudCgpO1xyXG5leHBvcnQge1N0YkNsaWVudCxzdGJjbGl9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fc3RiY2xpLmpzIiwiaW1wb3J0IHtyZXRhaWxJZCxyZXRhaWx9IGZyb20gXCIuL19yZXRhaWxcIjtcclxuXHJcbmZ1bmN0aW9uIFN0Yk51bGwoKSB7XHJcbn1cclxuaWYgKHJldGFpbElkID09IHJldGFpbC5neGdkKSB7Ly8g5bm/6KW/5bm/55S1ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFN0Yk51bGwucHJvdG90eXBlID0ge1xyXG4gICAgICAgIC8v6I635Y+W5py66aG255uS5Y+35a2X56ym5LiyXHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBndWFuZ3hpLmdldFN0Yk51bSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/ojrflj5bljLrln5/noIHluLjmlbBcclxuICAgICAgICBnZXRSZWdpb25Db2RlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpUGFuZWwuZ2V0R2xvYmFsVmFyKFwiR0VUX01FRElBX1JFR0lPTl9JRFwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlQYW5lbC5nZXRHbG9iYWxWYXIoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhQ29va2llID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFDb29raWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYUNydW1iID0gYUNvb2tpZVtpXS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVzY2FwZShrZXlOYW1lKSA9PSBhQ3J1bWJbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdW5lc2NhcGUoYUNydW1iWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0IHx8IHJlc3VsdCA9PSBcIiNcIiB8fCByZXN1bHQgPT0gXCJjbGVhclZhbHVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSwga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGtleVZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGtleVZhbHVlID0gXCJjbGVhclZhbHVlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlQYW5lbC5zZXRHbG9iYWxWYXIoa2V5TmFtZSwga2V5VmFsdWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBlc2NhcGUoa2V5TmFtZSkgKyBcIj1cIiArIGVzY2FwZShrZXlWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IGVsc2UgaWYgKHJldGFpbElkID09IHJldGFpbC5obnl4KSB7Ly8g5rKz5Y2X5pyJ57q/ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHZhciBTeXN0ZW0gPSB3aW5kb3cuU3lzdGVtO1xyXG4gICAgU3RiTnVsbC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTeXN0ZW0uc3RiSUQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRSZWdpb25Db2RlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZWdpb24gPSAnaG55eCc7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZWdpb24gPSBTeXN0ZW0uR2V0Q0FSZWdpb25JRCgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlZ2lvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBnID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBuZXcgR2xvYmFsKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBnID0gbmV3IEdsb2JhbDIoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICBnID0ge3ZhbHVlOiBudWxsfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZy52YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSwga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIGcgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IG5ldyBHbG9iYWwoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBuZXcgR2xvYmFsMihrZXlOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnLnZhbHVlID0ga2V5VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ2RnZCkgey8vIOW5v+S4nOW5v+eUtSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBTdGJOdWxsLnByb3RvdHlwZSA9IHtcclxuICAgICAgICBnZXRDYXJkVFY6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFDQS5pY05vKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJzk2OTU2MTAwODYnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBDQS5pY05vO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ0EucmVnaW9uQ29kZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gU3lzU2V0dGluZy5nZXRFbnYoa2V5TmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIFN5c1NldHRpbmcuc2V0RW52KGtleU5hbWUsIGtleVZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IGVsc2Uge1xyXG4gICAgU3RiTnVsbC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnMTAwODYnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJzAnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgICAgICAgICAgY29uc3QgYUNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFDb29raWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFDcnVtYiA9IGFDb29raWVbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVzY2FwZShrZXlOYW1lKSA9PSBhQ3J1bWJbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB1bmVzY2FwZShhQ3J1bWJbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGVzY2FwZShrZXlOYW1lKSArIFwiPVwiICsgZXNjYXBlKGtleVZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG52YXIgc3RiTnVsbCA9IG5ldyBTdGJOdWxsKCk7XHJcbmV4cG9ydCB7U3RiTnVsbCxzdGJOdWxsfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3N0Ym51bGwuanMiLCJ2YXIgbWQ1ID0gcmVxdWlyZSgnbWQ1Jyk7XHJcbnZhciBKU09OID0gcmVxdWlyZSgnSlNPTicpO1xyXG5cclxuaWYgKCFEYXRlLnByb3RvdHlwZS5mb3JtYXQpIHtcclxuICAgIERhdGUucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIChmbXQpIHtcclxuICAgICAgICBjb25zdCBvID0ge1xyXG4gICAgICAgICAgICBcIk0rXCI6IHRoaXMuZ2V0TW9udGgoKSArIDEsICAgICAgICAgICAgICAgICAvL+aciOS7vVxyXG4gICAgICAgICAgICBcImQrXCI6IHRoaXMuZ2V0RGF0ZSgpLCAgICAgICAgICAgICAgICAgICAgLy/ml6VcclxuICAgICAgICAgICAgXCJoK1wiOiB0aGlzLmdldEhvdXJzKCksICAgICAgICAgICAgICAgICAgIC8v5bCP5pe2XHJcbiAgICAgICAgICAgIFwibStcIjogdGhpcy5nZXRNaW51dGVzKCksICAgICAgICAgICAgICAgICAvL+WIhlxyXG4gICAgICAgICAgICBcInMrXCI6IHRoaXMuZ2V0U2Vjb25kcygpLCAgICAgICAgICAgICAgICAgLy/np5JcclxuICAgICAgICAgICAgXCJxK1wiOiBNYXRoLmZsb29yKCh0aGlzLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6plxyXG4gICAgICAgICAgICBcIlNcIjogdGhpcy5nZXRNaWxsaXNlY29uZHMoKSAgICAgICAgICAgICAvL+avq+enklxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKC8oeSspLy50ZXN0KGZtdCkpIHtcclxuICAgICAgICAgICAgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAodGhpcy5nZXRGdWxsWWVhcigpICsgXCJcIikuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGsgaW4gbykge1xyXG4gICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChcIihcIiArIGsgKyBcIilcIikudGVzdChmbXQpKSB7XHJcbiAgICAgICAgICAgICAgICBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsIChSZWdFeHAuJDEubGVuZ3RoID09IDEpID8gKG9ba10pIDogKChcIjAwXCIgKyBvW2tdKS5zdWJzdHIoKFwiXCIgKyBvW2tdKS5sZW5ndGgpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZtdDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlcXVlc3RCb2R5KCkge1xyXG4gICAgdGhpcy5hcHBJZCA9ICcnOyAgICAgICAgICAgICAgIC8vIOWIhumFjee7meW8gOWPkeiAheeahOW6lOeUqElEOjEwMDBcclxuICAgIHRoaXMubWV0aG9kID0gJyc7ICAgICAgICAgICAgICAvLyDmjqXlj6PlkI3np7A6dG9vZG8udHJhZGUucGF5XHJcbiAgICB0aGlzLmZvcm1hdCA9ICdKU09OJzsgICAgICAgICAgLy8g5LuF5pSv5oyBSlNPTlxyXG4gICAgdGhpcy5jaGFyc2V0ID0gJ3V0Zi04JzsgICAgICAgIC8vIOivt+axguS9v+eUqOeahOe8lueggeagvOW8j++8jOWmgnV0Zi04LGdiayxnYjIzMTLnrYlcclxuICAgIHRoaXMuc2lnblR5cGUgPSAnTUQ1JzsgICAgICAgICAvLyDllYbmiLfnlJ/miJDnrb7lkI3lrZfnrKbkuLLmiYDkvb/nlKjnmoTnrb7lkI3nrpfms5Xnsbvlnos6UlNB44CBTUQ1XHJcbiAgICB0aGlzLnNpZ25Db2RlID0gJyc7ICAgICAgICAgICAgLy8g5ZWG5oi36K+35rGC5Y+C5pWw55qE562+5ZCN5LiyIDMy5L2N5bCP5YaZXHJcbiAgICB0aGlzLnRpbWVzdGFtcCA9ICcnOyAgICAgICAgICAgLy8g5Y+R6YCB6K+35rGC55qE5pe26Ze077yM5qC85byPXCJ5eXl5LU1NLWRkIEhIOm1tOnNzXCI6MjAxNC0wNy0yNCAwMzowNzo1MFxyXG4gICAgdGhpcy52ZXJzaW9uID0gJzEuMCc7ICAgICAgICAgIC8vIOiwg+eUqOeahOaOpeWPo+eJiOacrO+8jOWbuuWumuS4uu+8mjEuMFxyXG4gICAgdGhpcy5hcHBBdXRoVG9rZW4gPSAnJzsgICAgICAgIC8vIOW6lOeUqOaOiOadg+eggVxyXG4gICAgdGhpcy5iaXpDb250ZW50ID0gJyc7ICAgICAgICAgIC8vIOS4muWKoeWPguaVsOmbhuWQiO+8jOacgOWkp+mVv+W6puS4jemZkO+8jOmZpOWFrOWFseWPguaVsOWkluaJgOacieivt+axguWPguaVsOmDveW/hemhu+aUvuWcqOi/meS4quWPguaVsOS4reS8oOmAku+8jOWFt+S9k+WPgueFp+WQhOS6p+WTgeW/q+mAn+aOpeWFpeaWh+aho1xyXG59XHJcblJlcXVlc3RCb2R5LnByb3RvdHlwZSA9IHtcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgICAgIHRoaXMuYXBwSWQgPSBib2R5LmFwcElkO1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gYm9keS5tZXRob2Q7XHJcbiAgICAgICAgdGhpcy5mb3JtYXQgPSBib2R5LmZvcm1hdDtcclxuICAgICAgICB0aGlzLmNoYXJzZXQgPSBib2R5LmNoYXJzZXQ7XHJcbiAgICAgICAgdGhpcy5zaWduVHlwZSA9IGJvZHkuc2lnblR5cGU7XHJcbiAgICAgICAgdGhpcy5zaWduQ29kZSA9IGJvZHkuc2lnbkNvZGU7XHJcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBib2R5LnRpbWVzdGFtcDtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBib2R5LnZlcnNpb247XHJcbiAgICAgICAgdGhpcy5hcHBBdXRoVG9rZW4gPSBib2R5LmFwcEF1dGhUb2tlbjtcclxuICAgICAgICB0aGlzLmJpekNvbnRlbnQgPSBib2R5LmJpekNvbnRlbnQ7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVzcG9uc2VCb2R5KCkge1xyXG4gICAgdGhpcy5jb2RlID0gMDsgICAgICAgLy8g572R5YWz6L+U5Zue56CBXHJcbiAgICB0aGlzLm1zZyA9ICfosIPnlKjmiJDlip8nOyAvLyDnvZHlhbPov5Tlm57noIHmj4/ov7BcclxuICAgIHRoaXMuc3ViQ29kZSA9ICcnOyAgIC8vIOS4muWKoei/lOWbnueggSzor6bop4HmlofmoaM6eHh4eFxyXG4gICAgdGhpcy5zdWJNc2cgPSAnJzsgICAgLy8g5Lia5Yqh6L+U5Zue56CB5o+P6L+wLOivpuingeaWh+ahozrkuqTmmJPlt7LooqvmlK/ku5hcclxuICAgIHRoaXMudGltZXN0YW1wID0gJyc7IC8vIOW6lOetlOeahOaXtumXtFxyXG4gICAgdGhpcy5zaWduID0gJyc7ICAgICAgLy8g562+5ZCNLOivpuingeaWh+ahoyAzMuS9jeWwj+WGmVxyXG4gICAgdGhpcy5iaXpDb250ZW50ID0gJyc7Ly8g5Lia5Yqh5Y+C5pWw6ZuG5ZCI77yM5pyA5aSn6ZW/5bqm5LiN6ZmQ77yM6Zmk5YWs5YWx5Y+C5pWw5aSW5omA5pyJ6L+U5Zue5Y+C5pWw6YO95b+F6aG75pS+5Zyo6L+Z5Liq5Y+C5pWw5Lit5Lyg6YCS77yM5YW35L2T5Y+C54Wn5ZCE5Lqn5ZOB5b+r6YCf5o6l5YWl5paH5qGjXHJcbiAgICB0aGlzLnRva2VuID0gJyc7ICAgICAvLyDmm7TmlrDlkI7nmoTmjojmnYPnoIEs5Li656m65YiZ5LiN5pu05pawXHJcbn1cclxuUmVzcG9uc2VCb2R5LnByb3RvdHlwZSA9IHtcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGJvZHkuY29kZTtcclxuICAgICAgICB0aGlzLm1zZyA9IGJvZHkubXNnO1xyXG4gICAgICAgIHRoaXMuc3ViQ29kZSA9IGJvZHkuc3ViQ29kZTtcclxuICAgICAgICB0aGlzLnN1Yk1zZyA9IGJvZHkuc3ViTXNnO1xyXG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gYm9keS50aW1lc3RhbXA7XHJcbiAgICAgICAgdGhpcy5zaWduID0gYm9keS5zaWduO1xyXG4gICAgICAgIHRoaXMuYml6Q29udGVudCA9IGJvZHkuYml6Q29udGVudDtcclxuICAgICAgICB0aGlzLnRva2VuID0gYm9keS50b2tlbjtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUb29kb0NsaWVudChhcHBJZCwgYXBwU2VjcmV0LCBhcGlVcmwpIHtcclxuICAgIHRoaXMuc3RhcnQoYXBwSWQsIGFwcFNlY3JldCwgYXBpVXJsKTtcclxuICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XHJcbn1cclxuXHJcblRvb2RvQ2xpZW50LnByb3RvdHlwZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcElkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwU2VjcmV0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBpVXJsXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoYXBwSWQsIGFwcFNlY3JldCwgYXBpVXJsKSB7XHJcbiAgICAgICAgdGhpcy5hcHBJZCA9IGFwcElkO1xyXG4gICAgICAgIHRoaXMuYXBwU2VjcmV0ID0gYXBwU2VjcmV0O1xyXG4gICAgICAgIHRoaXMuYXBpVXJsID0gYXBpVXJsO1xyXG4gICAgICAgIHRoaXMudG9rZW4gPSAnJztcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVxdWVzdEJvZHl9IGJvZHlJblxyXG4gICAgICovXHJcbiAgICBzaWduQ29kZUluOiBmdW5jdGlvbiAoYm9keUluKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gJycgK1xyXG4gICAgICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuICtcclxuICAgICAgICAgICAgYm9keUluLmFwcElkICtcclxuICAgICAgICAgICAgYm9keUluLmJpekNvbnRlbnQgK1xyXG4gICAgICAgICAgICBib2R5SW4uY2hhcnNldCArXHJcbiAgICAgICAgICAgIGJvZHlJbi5mb3JtYXQgK1xyXG4gICAgICAgICAgICBib2R5SW4ubWV0aG9kICtcclxuICAgICAgICAgICAgYm9keUluLnRpbWVzdGFtcCArXHJcbiAgICAgICAgICAgIGJvZHlJbi52ZXJzaW9uICtcclxuICAgICAgICAgICAgdGhpcy5hcHBTZWNyZXQ7XHJcbiAgICAgICAgcmV0dXJuIG1kNShzdHIpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXNwb25zZUJvZHl9IGJvZHlPdXRcclxuICAgICAqL1xyXG4gICAgc2lnbkNvZGVPdXQ6IGZ1bmN0aW9uIChib2R5T3V0KSB7XHJcbiAgICAgICAgaWYoYm9keU91dC50b2tlbj09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgYm9keU91dC50b2tlbj1cIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdHIgPSAnJyArXHJcbiAgICAgICAgICAgIGJvZHlPdXQuYml6Q29udGVudCArXHJcbiAgICAgICAgICAgIGJvZHlPdXQuY29kZSArXHJcbiAgICAgICAgICAgIGJvZHlPdXQubXNnICtcclxuICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlICtcclxuICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgK1xyXG4gICAgICAgICAgICBib2R5T3V0LnRpbWVzdGFtcCArXHJcbiAgICAgICAgICAgIGJvZHlPdXQudG9rZW4gK1xyXG4gICAgICAgICAgICB0aGlzLmFwcFNlY3JldDtcclxuICAgICAgICByZXR1cm4gbWQ1KHN0cik7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBpVXJsXHJcbiAgICAgKi9cclxuICAgIHNldEFwaVVybDogZnVuY3Rpb24gKGFwaVVybCkge1xyXG4gICAgICAgIHRoaXMuYXBpVXJsID0gYXBpVXJsO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0Qm9keX0gYm9keUluXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtSZXNwb25zZUJvZHl9IGNhbGxiYWNrLmJvZHlPdXRcclxuICAgICAqL1xyXG4gICAgc2VuZDogZnVuY3Rpb24gKGJvZHlJbiwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5T3V0ID0gbmV3IFJlc3BvbnNlQm9keSgpO1xyXG4gICAgICAgIGlmICghWE1MSHR0cFJlcXVlc3QpIHtcclxuICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSA9ICcxMDUnO1xyXG4gICAgICAgICAgICBib2R5T3V0LnN1Yk1zZyA9ICdYTUxIdHRwUmVxdWVzdOWvueixoeS4jeWtmOWcqCc7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzQnVzeSkge1xyXG4gICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzk5JztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn5b6I5b+Z5ZOm77yM6K+35rGC6Zif5YiX5bey5ruhJztcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc0J1c3kgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGJvZHlJbi5hcHBBdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IGJvZHlJbi5hcHBBdXRoVG9rZW47XHJcbiAgICAgICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvZHlJbi5hcHBJZCA9IHRoaXMuYXBwSWQ7XHJcbiAgICAgICAgYm9keUluLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZm9ybWF0KFwieXl5eS1NTS1kZCBoaDptbTpzc1wiKTtcclxuICAgICAgICBib2R5SW4uc2lnbkNvZGUgPSB0aGlzLnNpZ25Db2RlSW4oYm9keUluKTtcclxuXHJcbiAgICAgICAgY29uc3QgeG1sID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgY29uc3Qgb3duZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHhtbC5hYm9ydCgpO1xyXG4gICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzEwMyc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnID0gJ+ivt+axgui2heaXtic7XHJcblxyXG4gICAgICAgICAgICBvd25lci5pc0J1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0KTtcclxuICAgICAgICB9LCAxMDAwMCk7XHJcblxyXG4gICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlVGltZW91dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHhtbC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5wYXJzZSh4bWwucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHlPdXQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZDUgPSBvd25lci5zaWduQ29kZU91dChib2R5T3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZDUgIT0gYm9keU91dC5zaWduKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnN1YkNvZGUgPSAnMTAyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnN1Yk1zZyA9ICfov5Tlm57nu5Pmnpznrb7lkI3lh7rplJknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvZHlPdXQudGltZXN0YW1wID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zaWduID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC50b2tlbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keU91dC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2R5T3V0LnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIudG9rZW4gPSBib2R5T3V0LnRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0Lm1zZyA9ICflrqLmiLfnq6/plJnor68nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnN1YkNvZGUgPSAnMTAxJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn6L+U5Zue57uT5p6c5byC5bi4IGVycjonICsgZXJyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzEwNCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn6K+35rGC6L+U5Zue6ZSZ6K+vJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvd25lci5pc0J1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHRva2VuVXJsID0gdGhpcy5hcGlVcmwgKyAnP3Rva2VuPScgKyB0aGlzLnRva2VuO1xyXG4gICAgICAgIHhtbC5vcGVuKCdQT1NUJywgdG9rZW5VcmwsIHRydWUpO1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcpO1xyXG4gICAgICAgIHhtbC5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHlJbikpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0Qm9keX0gYm9keUluXHJcbiAgICAgKi9cclxuICAgIHN1Ym1pdDogZnVuY3Rpb24gKGJvZHlJbikge1xyXG4gICAgICAgIGJvZHlJbi5hcHBJZCA9IHRoaXMuYXBwSWQ7XHJcbiAgICAgICAgYm9keUluLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZm9ybWF0KFwieXl5eS1NTS1kZCBoaDptbTpzc1wiKTtcclxuICAgICAgICBib2R5SW4uc2lnbkNvZGUgPSB0aGlzLnNpZ25Db2RlSW4oYm9keUluKTtcclxuXHJcbiAgICAgICAgY29uc3QgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBib2R5SW4pIHtcclxuICAgICAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYm9keUluW2tleV0pID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGVpLnR5cGUgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgZWkubmFtZSA9IGtleTtcclxuICAgICAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXHJcbiAgICAgICAgICAgIGVpLnZhbHVlID0gYm9keUluW2tleV07XHJcbiAgICAgICAgICAgIGYuYXBwZW5kQ2hpbGQoZWkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZi5tZXRob2QgPSAncG9zdCc7XHJcbiAgICAgICAgZi5hY3Rpb24gPSB0aGlzLmFwaVVybDtcclxuICAgICAgICBmLnN1Ym1pdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZik7XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3RkY2xpLmpzIiwiaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gJy4vYXBwL2RpYWxvZyc7XHJcbmltcG9ydCB7VHVybnRhYmxlUGFnZX0gZnJvbSAnLi9UdXJudGFibGVQYWdlJztcclxuaW1wb3J0IHtoaWRlTG9hZGluZywgc2hvd0xvYWRpbmd9IGZyb20gXCIuL2FwcC9sb2FkaW5nXCI7XHJcbmltcG9ydCB7c2hvd1JlY2VpdmVEaWFsb2d9IGZyb20gJy4vYXBwL3JlY2VpdmVEaWFsb2cnO1xyXG5pbXBvcnQge3Nob3dPcmRlckRpYWxvZ30gZnJvbSAnLi9hcHAvb3JkZXJEaWFsb2cnO1xyXG5pbXBvcnQge29uUXVlcnlQcm9kdWN0MX0gZnJvbSAnLi90dXJudGFibGUnO1xyXG5pbXBvcnQge3R1cm5UYWJsZUFyZ3N9IGZyb20gJy4vYXBwL1BhZ2VBcmdzJztcclxudmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG52YXIgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG5cclxuXHJcbnZhciBwYWdlU2l6ZSA9IDY7XHJcbnZhciBpdGVtU2l6ZSA9IFs1MCwgMTE3LCAxODUsIDI1MywgMzE4LCAzODNdO1xyXG52YXIgaXRlbXNTaXplTGVmdD1bMCwwLDAsMCwwLDBdO1xyXG5mdW5jdGlvbiBCaWxsVGFibGUoKSB7XHJcbn1cclxuQmlsbFRhYmxlLnByb3RvdHlwZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICoge2ludH0gY3VycmVudCBbMCw0XVxyXG4gICAgICovXHJcbiAgICBjdXJyZW50OiAwLFxyXG4gICAgY3VycmVudFNpemU6IDYsXHJcbiAgICBiaWxsczogW10sXHJcbiAgICBwYWdlOiAwLFxyXG4gICAgcGFnZUluZGV4OiAtMSxcclxuICAgIG9uS2V5RG93bjogbnVsbCxcclxuICAgIC8vZ2V0QmlsbDogZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgdmFyIGluZGV4ID0gdGhpcy5wYWdlSW5kZXggKiBwYWdlU2l6ZTtcclxuICAgIC8vICAgIGluZGV4ICs9IHRoaXMuY3VycmVudDtcclxuICAgIC8vICAgIGlmIChpbmRleCA8IHRoaXMuYmlsbHMubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgICAgcmV0dXJuIHRoaXMuYmlsbHNbaW5kZXhdO1xyXG4gICAgLy8gICAgfVxyXG4gICAgLy8gICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy99LFxyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChiaWxscykge1xyXG4gICAgICAgIHZhciBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlsbC1sYXlvdXQnKTtcclxuICAgICAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbGF5b3V0LmNsYXNzTmFtZSA9ICdiaWxsLWxheW91dCc7XHJcbiAgICAgICAgICAgIGxheW91dC5pZCA9ICdiaWxsLWxheW91dCc7XHJcbiAgICAgICAgICAgIGxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0dXJuLWJpbGwtYmdcIj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cInR1cm5CaWxsVGFibGVcIj48ZGl2IGNsYXNzPVwidHVybkJpbGxEYXRlXCI+5pe26Ze0PC9kaXY+PGRpdiBjbGFzcz1cInR1cm5CaWxsTmFtZVwiPuWlluWTgTwvZGl2PjxkaXYgY2xhc3M9XCJ0dXJuQmlsbFR5cGVcIj7nirbmgIE8L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImJpbGwtc2VsZWN0XCIgY2xhc3M9XCJ0dXJuLWJpbGwtc2VsZWN0XCI+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgPGRpdiBjbGFzcz1cImJpbGwtb3V0bGluZVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cInR1cm5CaWxsLWxpbmUwXCIgY2xhc3M9XCJiaWxsLWxpbmVcIj48ZGl2IGNsYXNzPVwiYmlsbC10aW1lXCI+MjAxNy0wNy0wNyAxMjowNjowMTwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLW5hbWUxXCI+6Lez6Iie5q+v5rCR6LWE5b6I6ZW/6ZW/MTDkuKrlrZflkaI8L2Rpdj48ZGl2IGNsYXNzPVwiYmlsbC1hbW91bnQxXCI+OTjlhYM8L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cInR1cm5CaWxsLWxpbmUxXCIgY2xhc3M9XCJiaWxsLWxpbmVcIj48ZGl2IGNsYXNzPVwiYmlsbC10aW1lXCI+MjAxNy0wNy0wNyAxMjowNjowMTwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLW5hbWUxXCI+6Lez6Iie5q+v5rCR6LWE5b6I6ZW/6ZW/MTDkuKrlrZflkaI8L2Rpdj48ZGl2IGNsYXNzPVwiYmlsbC1hbW91bnQxXCI+OTjlhYM8L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cInR1cm5CaWxsLWxpbmUyXCIgY2xhc3M9XCJiaWxsLWxpbmVcIj48ZGl2IGNsYXNzPVwiYmlsbC10aW1lXCI+MjAxNy0wNy0wNyAxMjowNjowMTwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLW5hbWUxXCI+6Lez6Iie5q+v5rCR6LWE5b6I6ZW/6ZW/MTDkuKrlrZflkaI8L2Rpdj48ZGl2IGNsYXNzPVwiYmlsbC1hbW91bnQxXCI+OTjlhYM8L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cInR1cm5CaWxsLWxpbmUzXCIgY2xhc3M9XCJiaWxsLWxpbmVcIj48ZGl2IGNsYXNzPVwiYmlsbC10aW1lXCI+MjAxNy0wNy0wNyAxMjowNjowMTwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLW5hbWUxXCI+6Lez6Iie5q+v5rCR6LWE5b6I6ZW/6ZW/MTDkuKrlrZflkaI8L2Rpdj48ZGl2IGNsYXNzPVwiYmlsbC1hbW91bnQxXCI+OTjlhYM8L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cInR1cm5CaWxsLWxpbmU0XCIgY2xhc3M9XCJiaWxsLWxpbmVcIj48ZGl2IGNsYXNzPVwiYmlsbC10aW1lXCI+MjAxNy0wNy0wNyAxMjowNjowMTwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLW5hbWUxXCI+6Lez6Iie5q+v5rCR6LWE5b6I6ZW/6ZW/MTDkuKrlrZflkaI8L2Rpdj48ZGl2IGNsYXNzPVwiYmlsbC1hbW91bnQxXCI+OTjlhYM8L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cInR1cm5CaWxsLWxpbmU1XCIgY2xhc3M9XCJiaWxsLWxpbmVcIj48ZGl2IGNsYXNzPVwiYmlsbC10aW1lXCI+MjAxNy0wNy0wNyAxMjowNjowMTwvZGl2PjxkaXYgY2xhc3M9XCJiaWxsLW5hbWUxXCI+6Lez6Iie5q+v5rCR6LWE5b6I6ZW/6ZW/MTDkuKrlrZflkaI8L2Rpdj48ZGl2IGNsYXNzPVwiYmlsbC1hbW91bnQxXCI+OTjlhYM8L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cInR1cm5CaWxsLWxpbmU2XCIgY2xhc3M9XCJiaWxsLWxpbmVcIj48PDwg56ysMemhtS/lhbEx6aG1ID4+PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXlvdXQgPSBsYXlvdXQ7XHJcblxyXG4gICAgICAgIHZhciBiZyA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcudHVybi1iaWxsLWJnJyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGJnLnF1ZXJ5U2VsZWN0b3IoJyNiaWxsLXNlbGVjdCcpO1xyXG5cclxuICAgICAgICB0aGlzLnRhYmxlID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlU2l6ZTsgKytpKSB7XHJcbiAgICAgICAgICAgIHZhciB0ciA9IGJnLnF1ZXJ5U2VsZWN0b3IoJyN0dXJuQmlsbC1saW5lJyArIGkpO1xyXG4gICAgICAgICAgICB0aGlzLnRhYmxlLnB1c2godHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpdGxlUGFnZSA9IGJnLnF1ZXJ5U2VsZWN0b3IoJyN0dXJuQmlsbC1saW5lNicpO1xyXG5cclxuICAgICAgICB0aGlzLmJpbGxzID0gYmlsbHM7XHJcbiAgICAgICAgdGhpcy5zaG93UGFnZSgwKTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH0sXHJcbiAgICBzaG93UGFnZTogZnVuY3Rpb24gKHBhZ2VJbmRleCkge1xyXG4gICAgICAgIHZhciBjbnQgPSB0aGlzLmJpbGxzLmxlbmd0aDtcclxuICAgICAgICB2YXIgcGFnZSA9IHBhcnNlSW50KGNudCAvIHBhZ2VTaXplKTtcclxuICAgICAgICBpZiAoY250ID4gcGFnZSAqIHBhZ2VTaXplKSB7XHJcbiAgICAgICAgICAgIHBhZ2UrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhZ2VJbmRleCA+PSBwYWdlKSB7XHJcbiAgICAgICAgICAgIHBhZ2VJbmRleCA9IHBhZ2UgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xyXG4gICAgICAgIHRoaXMucGFnZUluZGV4ID0gcGFnZUluZGV4O1xyXG5cclxuICAgICAgICB0aGlzLnRpdGxlUGFnZS5pbm5lckhUTUwgPSAn56ysJyArIChwYWdlSW5kZXggKyAxKSArICfpobUv5YWxJyArIHBhZ2UgKyAn6aG1JztcclxuICAgICAgICAvLy8v5Yib5bu65ZyG54K5XHJcbiAgICAgICAgLy9mb3IodmFyIGk9MTtpPD1wYWdlO2krKyl7XHJcbiAgICAgICAgLy8gICAgdGhpcy50aXRsZVBhZ2UuaW5uZXJIVE1MPSc8ZGl2IGNsYXNzPVwiYmlsbC1jaXJjbGVcIiBpZD1cImJpbGwtY2lyY2xlJytpKydcIj48L2Rpdj4nO1xyXG4gICAgICAgIC8vfVxyXG5cclxuXHJcbiAgICAgICAgdmFyIGN1dDAgPSBwYWdlU2l6ZSAqIHBhZ2VJbmRleDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTaXplID0gKGNudCAtIGN1dDApID49IHBhZ2VTaXplID8gcGFnZVNpemUgOiBjbnQgLSBjdXQwO1xyXG4gICAgICAgIHZhciBjdXQxID0gdGhpcy5jdXJyZW50U2l6ZSArIGN1dDA7XHJcbiAgICAgICAgdmFyIGN1dEluZm9zID0gdGhpcy5iaWxscy5zbGljZShjdXQwLCBjdXQxKTtcclxuICAgICAgICB0aGlzLnNob3dJbmZvKGN1dEluZm9zKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZCgwKTtcclxuICAgIH0sXHJcbiAgICBzaG93SW5mbzogZnVuY3Rpb24gKGluZm9zKSB7XHJcbiAgICAgICAgdmFyIGNudCA9IGluZm9zLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnRhYmxlLmZvckVhY2goZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcclxuICAgICAgICAgICAgdmFyIHRkcyA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IGNudCkge1xyXG4gICAgICAgICAgICAgICAgdGRzWzBdLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGRzWzFdLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGRzWzJdLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZm8gPSBpbmZvc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAvL3NldFRpbWVvdXQoZnVuY3Rpb24gKHRkcywgc29uZykge1xyXG4gICAgICAgICAgICAgICAgdGRzWzBdLmlubmVySFRNTCA9IGluZm8ud2lubmluZ0RhdGU7XHJcbiAgICAgICAgICAgICAgICB0ZHNbMV0uaW5uZXJIVE1MID0gaW5mby5wcml6ZU5hbWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGluZm8uc3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU9XCLnrYnlvoXpooblj5ZcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT1cIuato+WcqOmFjemAgVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPVwi5bey57uP6L+H5pyfXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGRzWzJdLmlubmVySFRNTCA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgLy99LCAxMDAgKiBpbmRleCwgdGRzLCBzb25nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNob3c6IGZ1bmN0aW9uIChjdXJyZW50LCBvbktleURvd24pIHtcclxuICAgICAgICB0aGlzLmxheW91dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gb25LZXlEb3duO1xyXG5cclxuICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG93bmVyLmhhbmRsZUtleShlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubGF5b3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkOiBmdW5jdGlvbiAoY3VycmVudCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5zdHlsZS50b3AgPSBpdGVtU2l6ZVtjdXJyZW50XSArICdweCc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5zdHlsZS5sZWZ0ID0gaXRlbXNTaXplTGVmdFtjdXJyZW50XSArICdweCc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0sXHJcbiAgICBoYW5kbGVLZXk6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcztcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgdmFyIGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLmN1cnJlbnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvd25lci5wYWdlSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIucGFnZUluZGV4LS07XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvd1BhZ2Uob3duZXIucGFnZUluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuZG93bjpcclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50IDwgb3duZXIuY3VycmVudFNpemUgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvd25lci5wYWdlSW5kZXggPCBvd25lci5wYWdlIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnBhZ2VJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNob3dQYWdlKG93bmVyLnBhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIucGFnZUluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnBhZ2VJbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNob3dQYWdlKG93bmVyLnBhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLnBhZ2VJbmRleCA8IG93bmVyLnBhZ2UgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIucGFnZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvd1BhZ2Uob3duZXIucGFnZUluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUub2s6XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VyO1xyXG4gICAgICAgICAgICAgICAgaWYob3duZXIucGFnZUluZGV4PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICBjdXI9b3duZXIuY3VycmVudDtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cj1vd25lci5wYWdlSW5kZXgqNCtvd25lci5jdXJyZW50KzE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5iaWxsc1tjdXJdLnN0YXRlPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICBzaG93UmVjZWl2ZURpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihidG49PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dPcmRlckRpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJ0bj09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dXJuVGFibGVBcmdzLnNldENhbGxGbGFnKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHVyblRhYmxlQXJncy5zZXRQcml6ZUlEKG93bmVyLmJpbGxzW2N1cl0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25RdWVyeVByb2R1Y3QxKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LG93bmVyLm9uS2V5RG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LG93bmVyLm9uS2V5RG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSx0aGlzLmJpbGxzW2N1cl0ucHJpemVJRCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSAgaWYodGhpcy5iaWxsc1tjdXJdLnN0YXRlPT0yKXtcclxuICAgICAgICAgICAgICAgICAgICBzaG93TG9hZGluZygn5o+Q56S6JywgJ+W3sue7j+WcqOmFjemAgeWTpu+8jOivt+eVmeaEj+aJi+acuuW/q+mAkueUteivneOAgicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVMb2FkaW5nKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LG93bmVyLm9uS2V5RG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwyMDAwKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlICBpZih0aGlzLmJpbGxzW2N1cl0uc3RhdGU9PTMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dMb2FkaW5nKCfmj5DnpLonLCAn5bey57uP6L+H5pyf5ZWm77yM5aWW5ZOB6KaB5ZyoN+WkqeWGhemihuWPluWTpuOAgicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVMb2FkaW5nKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LG93bmVyLm9uS2V5RG93bik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwyMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mKG93bmVyLm9uS2V5RG93bikgPT09ICdmdW5jdGlvbicpIG93bmVyLm9uS2V5RG93bihjdXJLZXkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25CaWxsKGNvZGUsIGJpeikge1xyXG4gICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgIGlmIChiaXogJiYgYml6Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYmlsbHMgPSBiaXo7XHJcbiAgICAgICAgICAgIGJpbGxUYWJsZS5zdGFydChiaWxscyk7XHJcbiAgICAgICAgICAgIGJpbGxUYWJsZS5zaG93KGJpbGxUYWJsZS5jdXJyZW50LCBvblRhYmxlS2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgIHR1cm50YWJsZVBhZ2Uuc2hvdyh0dXJudGFibGVQYWdlLmN1cnJlbnQsIHR1cm50YWJsZVBhZ2Uub25LZXlEb3duLCB0dXJudGFibGVQYWdlLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICB9LCAwLCAn5o+Q56S6JywgJ+ayoeacieaJvuWIsOiuouWNleiusOW9leOAgicsICfnoa7lrponLCAn6L+U5ZueJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgaWYgKGJ0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RiY2xpID0gdHVybnRhYmxlUGFnZS50ZGVVc2VyLnN0YmNsaTtcclxuICAgICAgICAgICAgICAgIHN0YmNsaS5iaWxsKG9uQmlsbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0dXJudGFibGVQYWdlLnNob3codHVybnRhYmxlUGFnZS5jdXJyZW50LCB0dXJudGFibGVQYWdlLm9uS2V5RG93biwgdHVybnRhYmxlUGFnZS50ZGVVc2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAsICfmj5DnpLonLCAn572R57uc5byC5bi477yM5rKh5pyJ5om+5Yiw6K6i5Y2V6K6w5b2V44CCJywgJ+mHjeivlScsICflj5bmtognKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25UYWJsZUtleShrZXkpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6XHJcbiAgICAgICAgICAgIGJpbGxUYWJsZS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHR1cm50YWJsZVBhZ2Uuc2hvdyh0dXJudGFibGVQYWdlLmN1cnJlbnQsIHR1cm50YWJsZVBhZ2Uub25LZXlEb3duLCB0dXJudGFibGVQYWdlLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxudmFyIHR1cm50YWJsZVBhZ2UgPSBuZXcgVHVybnRhYmxlUGFnZSgpO1xyXG52YXIgYmlsbFRhYmxlID0gbmV3IEJpbGxUYWJsZSgpO1xyXG52YXIgYmlsbHM7XHJcblxyXG5leHBvcnQge0JpbGxUYWJsZX1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90dXJuVGFibGVCaWxsLmpzIiwiaW1wb3J0IHtTdGJDbGllbnR9IGZyb20gXCIuL3Rvb2RvL19zdGJjbGlcIjtcclxuaW1wb3J0IHtnZXRLZXlDb2Rlc30gZnJvbSAnLi90b29kby9fa2V5Y29kZXMnO1xyXG5pbXBvcnQge2hpZGVMb2FkaW5nLCBzaG93TG9hZGluZ30gZnJvbSBcIi4vYXBwL2xvYWRpbmdcIjtcclxuaW1wb3J0IHtzaG93RGlhbG9nfSBmcm9tIFwiLi9hcHAvZGlhbG9nXCI7XHJcbmltcG9ydCB7Z2V0SlNPTn0gZnJvbSBcIi4vYXBwL2FiY1wiO1xyXG5pbXBvcnQge0hvbWVNZW51fSBmcm9tICcuL0hvbWVNZW51JztcclxuaW1wb3J0IHtUdXJudGFibGVQYWdlfSBmcm9tICcuL1R1cm50YWJsZVBhZ2UnO1xyXG5pbXBvcnQge1JvbGx9IGZyb20gJy4vcm9sbCc7XHJcbmltcG9ydCB7IGNhbGxiYWNrQXJncywgYXBwQXJncyx0dXJuVGFibGVBcmdzfSBmcm9tICcuL2FwcC9QYWdlQXJncyc7XHJcbmltcG9ydCB7c2hvd1JlY2VpdmVEaWFsb2d9IGZyb20gJy4vYXBwL3JlY2VpdmVEaWFsb2cnO1xyXG5pbXBvcnQge3Nob3dPcmRlckRpYWxvZ30gZnJvbSAnLi9hcHAvb3JkZXJEaWFsb2cnO1xyXG5pbXBvcnQge3Nob3dBZDI5fSBmcm9tICcuL2FwcC9kaWFsb2dCaWdBZCc7XHJcbmltcG9ydCB7c2hvd0NoaWxkTG9ja30gZnJvbSBcIi4vYXBwL2NoaWxkTG9ja1wiO1xyXG5pbXBvcnQge0JpbGxUYWJsZX0gZnJvbSBcIi4vdHVyblRhYmxlQmlsbFwiO1xyXG5pbXBvcnQge3Nob3dBZ2FpbkRpYWxvZ30gZnJvbSAnLi9hcHAvYWdhaW5EaWFsb2cnXHJcbmltcG9ydCB7cmV0YWlsLHJldGFpbElkfSBmcm9tICcuL3Rvb2RvL19yZXRhaWwnO1xyXG52YXIgc3RiY2xpID0gbmV3IFN0YkNsaWVudCgpO1xyXG52YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcblxyXG4vLyB2YXIgY2FsbGJhY2tVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy90ZGVudGVyL2NhbGxiYWNrLmh0bWwnO1xyXG52YXIgY2FsbGJhY2tVcmwgPSBcImh0dHA6Ly8xMjAuNzcuODIuNTQvdGRHYW1lQ2VudGVyL2NhbGxiYWNrLmh0bWxcIjtcclxudmFyIHdpbm5lckZsYWcgPSBmYWxzZTtcclxudmFyIHNlcnZlRmxhZyA9IGZhbHNlO1xyXG52YXIgZ2V0RmxhZyA9IGZhbHNlO1xyXG52YXIgcm9sbEZsYWc9dHJ1ZTtcclxuZnVuY3Rpb24gb25TdGFydChjb2RlLCBiaXopIHtcclxuICAgIGhpZGVMb2FkaW5nKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoY29kZSAhPSAwKSB7XHJcbiAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0xvYWRpbmcoJ+iHquWKqOeZu+mZhicsICflsI/lj4zlnKjkvb/lirLliqDovb3vvIzor7fnqI3lgJkuLi4nKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGJjbGkuc3RhcnQob25TdGFydCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHR1cm50YWJsZVBhZ2Uuc2hvdyhjdXJyZW50SW5kZXgsIG9uUGFnZUtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEsICfmj5DnpLonLCAn5rKh5pyJ5om+5Yiw55So5oi35L+h5oGv5ZOm77yBJywgJ+mHjeivlScsICflj5bmtognKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZGVVc2VyID0gYml6O1xyXG4gICAgICAgICAgICB0dXJudGFibGVQYWdlLnNob3coY3VycmVudEluZGV4LCBvblBhZ2VLZXkpO1xyXG5cclxuICAgICAgICAgICAgc3RiY2xpLndpbm5lckluZm8oMCwgZnVuY3Rpb24gKGNvZGUsIGJpeikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YmNsaS51c2VyV2lubmVyKDEsIGZ1bmN0aW9uIChjb2RlLCBiaXopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gMCAmJiBiaXogJiYgYml6Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbm5lckZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcldpbm5lcihiaXopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbEJhY2tJbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbEJhY2tJbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYml6LmluZm8gJiYgYml6LmluZm8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93aW5mbyhiaXouaW5mbywgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uMS1saTBcIikuaW5uZXJIVE1MID0gXCI8c3Bhbj7kuIvkuIDkuKrlubjov5DlhL/lsLHmmK/kvaDlk6bvvIE8c3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsQmFja0luaXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGxCYWNrSW5pdCgpIHtcclxuICAgIHZhciBzdWNjZXNzQ29kZT10dXJuVGFibGVBcmdzLmdldFN1Y2Nlc3NDb2RlKCk7XHJcbiAgICBpZihzdWNjZXNzQ29kZT09MSl7XHJcbiAgICAgICAgdmFyIHdpbm5pbmdJZD10dXJuVGFibGVBcmdzLmdldFByaXplSUQoKTtcclxuICAgICAgICBpZih3aW5uaW5nSWQhPS0xKXtcclxuICAgICAgICAgICAgc3RiY2xpLmdldFByaXplKHdpbm5pbmdJZCxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGJjbGkudXNlcldpbm5lcigxLCBmdW5jdGlvbiAoY29kZSwgYml6KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29kZT09MCYmYml6KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcldpbm5lcihiaXopO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBmbGFnPXR1cm5UYWJsZUFyZ3MuZ2V0Q2FsbEZsYWcoKTtcclxuICAgICAgICBpZihmbGFnPT0xKXtcclxuICAgICAgICAgICAgLy/lop7liqDpop3lpJbmnLrkvJpcclxuICAgICAgICAgICAgc2hvd0FnYWluRGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgIGlmKGJ0bj09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RiY2xpLmFkZFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdEZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvL+aUueWPmOavj+aXpeWFjei0ueacuuS8mlxyXG4gICAgICAgICAgICBzaG93QWdhaW5EaWFsb2coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgaWYoYnRuPT0wKXtcclxuICAgICAgICAgICAgICAgICAgICBzdGJjbGkudXBkYXRhRnJlZVN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdEZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0dXJuVGFibGVBcmdzLnNldFN1Y2Nlc3NDb2RlKC0xKTtcclxuICAgICAgICB0dXJuVGFibGVBcmdzLnNldFByaXplSUQoLTEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25NZW51S2V5KGtleSkge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIGtleUNvZGUubnVtMDpcclxuICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImhvbWUuaHRtbFwiO1xyXG4gICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlY2hhcmdlQXJncy5nZXRSZXR1cm5VcmwoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmVzYzpcclxuICAgICAgICAgICAgYXBwQXJncy5vbkZpcnN0UGFnZSgpO1xyXG4gICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaG9tZS5odG1sXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5kb3duOlxyXG4gICAgICAgICAgICBob21lTWVudS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHR1cm50YWJsZVBhZ2Uuc2hvdyhjdXJyZW50SW5kZXgsIG9uUGFnZUtleSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5vazpcclxuICAgICAgICAgICAgc3dpdGNoIChob21lTWVudS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImhvbWUuaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChob21lTWVudS5jdXJyZW50ID09IDIpIHtcclxuICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVjaGFyZ2VBcmdzLmdldFJldHVyblVybCgpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvblBhZ2VLZXkoa2V5KSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5udW0wOlxyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlY2hhcmdlQXJncy5nZXRSZXR1cm5VcmwoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmVzYzpcclxuICAgICAgICAgICAgYXBwQXJncy5vbkZpcnN0UGFnZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGtleUNvZGUub2s6XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy/mir3lpZZcclxuICAgICAgICAgICAgICAgICAgICBpZihyb2xsRmxhZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZGVVc2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGJjbGkudHVybnRhYmxlU3RhdGUoZnVuY3Rpb24gKGNvZGUsIGJpeikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYml6KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMb2FkaW5nKCfmj5DnpLonLCAn5q2j5Zyo5Yqg6L29Li4uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTG9hZGluZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDE1MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lhY3otLnmrKHmlbDvvIzliKTmlq3nlKjmiLfnsbvlnotcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YmNsaS5xdWVyeVNlcnZlMSgzLCBvblF1ZXJ5U2VydmUxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGxGbGFnPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMb2FkaW5nKCfmj5DnpLonLCAn5q2j5Zyo5Yqg6L29Li4uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlTG9hZGluZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+mineWkliDnlKjmiLfnsbvlnovkuLo1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGJjbGkudHVybnRhYmxlUHJvKDUsIHJvbGxQcm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sbEZsYWc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ljIXmnIjojrflj5bmnLrkvJpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dPcmRlckRpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYnRuPT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHVyblRhYmxlQXJncy5zZXRDYWxsRmxhZygyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25RdWVyeVByb2R1Y3QxKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRGb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGJjbGkuc3RhcnQob25TdGFydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAvL+aJk+W8gOeUqOaIt+WlluWTgei0puWNlVxyXG4gICAgICAgICAgICAgICAgICAgIHN0YmNsaS51c2VyV2lubmVyKDQsb25CaWxsKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHR1cm50YWJsZVBhZ2UuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhvbWVNZW51LnNob3coaG9tZU1lbnUuY3VycmVudCwgb25NZW51S2V5LCB0ZGVVc2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGtleUNvZGUuZG93bjpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50SW5kZXggPSB0dXJudGFibGVQYWdlLmN1cnJlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQmlsbChjb2RlLGJpeikge1xyXG4gICAgaWYoY29kZT09MCl7XHJcbiAgICAgICAgaWYoYml6ICYmIGJpei5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIGJpbGxUYWJsZS5zdGFydChiaXopO1xyXG4gICAgICAgICAgICBiaWxsVGFibGUuc2hvdyhiaWxsVGFibGUuY3VycmVudCwgb25UYWJsZUtleSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgIHR1cm50YWJsZVBhZ2Uuc2hvdyh0dXJudGFibGVQYWdlLmN1cnJlbnQsIHR1cm50YWJsZVBhZ2Uub25LZXlEb3duLCB0dXJudGFibGVQYWdlLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICB9LCAwLCAn5o+Q56S6JywgJ+ayoeacieaJvuWIsOiuouWNleiusOW9leOAgicsICfnoa7lrponLCAn6L+U5ZueJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgc2hvd0RpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YmNsaSA9IHR1cm50YWJsZVBhZ2UudGRlVXNlci5zdGJjbGk7XHJcbiAgICAgICAgICAgICAgICBzdGJjbGkudXNlcldpbm5lcig0LG9uQmlsbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0dXJudGFibGVQYWdlLnNob3codHVybnRhYmxlUGFnZS5jdXJyZW50LCB0dXJudGFibGVQYWdlLm9uS2V5RG93biwgdHVybnRhYmxlUGFnZS50ZGVVc2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAsICfmj5DnpLonLCAn572R57uc5byC5bi477yM5rKh5pyJ5om+5Yiw6K6i5Y2V6K6w5b2V44CCJywgJ+mHjeivlScsICflj5bmtognKTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGl0ZW1JbmZvO1xyXG5mdW5jdGlvbiBvblF1ZXJ5UHJvZHVjdDEoKSB7XHJcbiAgICAgICAgICAgIGlmKCFpdGVtSW5mbyl7XHJcbiAgICAgICAgICAgICAgICBnZXRKU09OKFwiZGF0YS90ZGVfc2hvcF9pbmZvcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUluZm89ZGF0YVswXTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjYiA9IGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZGVVc2VyLmNoaWxkTG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2hpbGRMb2NrKGZ1bmN0aW9uIChjb2RlLCBtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWRMb2NrKGNvZGUsIG1zZywgdHVybnRhYmxlUGFnZSwgaXRlbUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kT3JkZXIoaXRlbUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiaWxsLWxheW91dFwiKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbGxUYWJsZS5zaG93KGJpbGxUYWJsZS5jdXJyZW50LG9uVGFibGVLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0dXJudGFibGVQYWdlLnNob3codHVybnRhYmxlUGFnZS5jdXJyZW50LCBvblBhZ2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciBwcmljZSA9IDI5MDA7XHJcbiAgICAgICAgICAgIHNob3dBZDI5KGNiLCAwLCBwcmljZSAvIDEwMCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gY29kZSB7aW50fVxyXG4gKiBAcGFyYW0gbXNnIHtzdHJpbmd9XHJcbiAqIEBwYXJhbSBvd25lciB7SG9tZU1lbnV9XHJcbiAqIEBwYXJhbSBpdGVtSW5mbyB7T2JqZWN0fVxyXG4gKi9cclxuZnVuY3Rpb24gb25WYWxpZExvY2soY29kZSwgbXNnLCBvd25lciwgaXRlbUluZm8pIHtcclxuICAgIGlmIChjb2RlID09IDApIHtcclxuICAgICAgICB2YXIgb2xkTG9jayA9IHRkZVVzZXIuY2hpbGRMb2NrO1xyXG4gICAgICAgIGlmIChtc2cgPT0gb2xkTG9jaykge1xyXG4gICAgICAgICAgICBzZW5kT3JkZXIoaXRlbUluZm8pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NoaWxkTG9jayhmdW5jdGlvbiAoY29kZSwgbXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWRMb2NrKGNvZGUsIG1zZywgb3duZXIsIGl0ZW1JbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxLCAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvblBhZ2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwLCAn5o+Q56S6JywgJ+erpemUgemqjOivgeWHuumUmScsICfph43or5UnLCAn5Y+W5raIJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG9uUGFnZUtleSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbmRPcmRlcihpdGVtSW5mbykge1xyXG4gICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgXCJpZFwiOiBpdGVtSW5mby5pZCxcclxuICAgICAgICBcInRpdGxlXCI6IGl0ZW1JbmZvLnRpdGxlLFxyXG4gICAgICAgIFwiZ2FtZUlkXCI6IGl0ZW1JbmZvLmdhbWVJZCxcclxuICAgICAgICBcInByb2R1Y3RJZFwiOiBpdGVtSW5mby5wcm9kdWN0SWQsXHJcbiAgICAgICAgXCJwcm9kSWRcIjogaXRlbUluZm8ucHJvZElkLFxyXG4gICAgICAgIFwidHJpYWxcIjogaXRlbUluZm8udHJpYWwsXHJcbiAgICAgICAgXCJjb21wbGV4XCI6IDBcclxuICAgIH07XHJcbiAgICB2YXIgYXJncyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgc2hvd0xvYWRpbmcoJ+aPkOekuicsICfmraPlnKjlpITnkIbvvIzor7fnqI3lgJkuLi4nKTtcclxuICAgIGNhbGxiYWNrQXJncy5zZXRSZWRpcmVjdFVybCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICBjYWxsYmFja0FyZ3Muc2V0UmV0dXJuVXJsKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIHN0YmNsaS5vcmRlcjEoaXRlbUluZm8ucHJvZElkLCBjYWxsYmFja1VybCwgYXJncywgb25PcmRlcjEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gb25PcmRlcjEoY29kZSwgYml6KSB7XHJcbiAgICBoaWRlTG9hZGluZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGNvZGUgPT0gMCAmJiBiaXopIHtcclxuICAgICAgICAgICAgc2hvd0xvYWRpbmcoJ+aPkOekuicsICfmraPlnKjlpITnkIbvvIzor7fnqI3lgJkuLi4nKTtcclxuICAgICAgICAgICAgY2FsbGJhY2tBcmdzLnNldFJlZGlyZWN0VXJsKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgY2FsbGJhY2tBcmdzLnNldFJldHVyblVybCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgIHN0YmNsaS5wYXkoYml6LnRyYWRlTm8pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZE9yZGVyKGl0ZW1JbmZvKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHVybnRhYmxlUGFnZS5zaG93KGN1cnJlbnRJbmRleCwgb25QYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCwgJ+iuouWNleaPkOekuicsICflsI/lj4zmnI3liqHlvIDlsI/lt67llabvvIzor7fnqI3lkI7ph43or5XjgIInLCAn6YeN6K+VJywgJ+i/lOWbnicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxudmFyIGFyZWE7XHJcbnZhciBjb24xO1xyXG52YXIgdGltZTtcclxudmFyIF90b3A7XHJcbnZhciBteXRpbWVyO1xyXG5mdW5jdGlvbiBzaG93aW5mbyhpbmZvLCBudW0pIHtcclxuICAgIC8v6L2u5pKtXHJcbiAgICBpZiAobnVtID09IC0xKSB7XHJcbiAgICAgICAgYXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGxCb3gnKTtcclxuICAgICAgICBjb24xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbjEnKTtcclxuICAgICAgICB0aW1lID0gNTA7XHJcbiAgICAgICAgX3RvcCA9IGFyZWEuc2Nyb2xsVG9wO1xyXG4gICAgICAgIGlmIChpbmZvLmxlbmd0aCA+IDMwKSB7XHJcbiAgICAgICAgICAgIG15dGltZXIgPSBzZXRJbnRlcnZhbChzY3JvbGxVcCwgdGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbFVwKCkge1xyXG4gICAgICAgIGlmIChhcmVhLnNjcm9sbFRvcCA+PSBjb24xLm9mZnNldEhlaWdodCkge1xyXG4gICAgICAgICAgICBfdG9wID0gMDtcclxuICAgICAgICAgICAgYXJlYS5zY3JvbGxUb3AgPSBfdG9wO1xyXG4gICAgICAgICAgICBzdGJjbGkud2lubmVySW5mbyhudW0rKywgZnVuY3Rpb24gKGNvZGUsIGJpeikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJpei5mbGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtID09IC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiaXouaW5mbyAmJiBiaXouaW5mbyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd2luZm8oYml6LmluZm8sIG51bSsrKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF90b3ArKztcclxuICAgICAgICAgICAgYXJlYS5zY3JvbGxUb3AgPSBfdG9wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluZm8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgZGF0YSA9IGluZm9baV07XHJcbiAgICAgICAgaWYgKGluZm8ubGVuZ3RoIDwgMTUpIHtcclxuICAgICAgICAgICAgdmFyIGxpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb24xLWxpXCIgKyBpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaSA8IGluZm8ubGVuZ3RoIC8gMikge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb24xLWxpXCIgKyBpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uMi1saVwiICsgaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRhdGFVc2VyTmFtZSA9IChkYXRhLnVzZXJOYW1lKS50b1N0cmluZygpO1xyXG4gICAgICAgIGRhdGFVc2VyTmFtZSA9IGRhdGFVc2VyTmFtZS5zdWJzdHJpbmcoMCwgMikgKyBcIioqKlwiICsgZGF0YVVzZXJOYW1lLnN1YnN0cmluZyhkYXRhVXNlck5hbWUubGVuZ3RoIC0gMSwgZGF0YVVzZXJOYW1lLmxlbmd0aCk7XHJcbiAgICAgICAgbGkuaW5uZXJIVE1MID0gJzxzcGFuPuaBreWWnOeUqOaItycgKyBkYXRhVXNlck5hbWUgKyAnPHNwYW4+PHNwYW4+5oq95LitPC9zcGFuPicgKyAnPHNwYW4+JyArIGRhdGEucHJpemVOYW1lICsgJzxzcGFuPic7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v5Liq5Lq65Lit5aWW5ZWG5ZOB5Yqg6L29XHJcbmZ1bmN0aW9uIHVzZXJXaW5uZXIoYml6KSB7XHJcbiAgICB2YXIgZGF0YUxpc3QgPSBbXTtcclxuICAgIC8v5aWW5ZOB5Yy6XHJcbiAgICB2YXIgcHJpemVfbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpemUtY29udGVudFwiKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYml6Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZGF0YUxpc3QucHVzaChiaXpbaV0ucHJpemVJRCk7XHJcbiAgICB9XHJcbiAgICAvL+agueaNrueUqOaIt+aVsOaNruiHquWKqOeUn+aIkOagh+etvlxyXG4gICAgcHJpemVfSHRtbChkYXRhTGlzdCk7XHJcbiAgICBpZihkYXRhTGlzdC5sZW5ndGg8PTUpe1xyXG4gICAgICAgIHByaXplX0h0bWwoZGF0YUxpc3QpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaXplLWl0ZW1cIiArIGkpO1xyXG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJpemUtaXRlbVwiKTtcclxuICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCJpbWcvMC5wbmdcIj4nO1xyXG4gICAgICAgICAgICBwcml6ZV9ub2RlLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAvLyB2YXIgbm9kZSA9IHRoaXMubGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNwcml6ZS1pdGVtJyArIGkpO1xyXG4gICAgICAgICAgICBub2RlLnN0eWxlLmxlZnQgPSBpICogNjUgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKGksIG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gNjUgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gJ2ltZy90dXJudGFibGUvdGhpbmcnICsgZGF0YUxpc3RbaV0gKyAnLnBuZyc7XHJcbiAgICAgICAgICAgIH0sIDEwMCAqIGksIGksIG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcml6ZV9IdG1sKGRhdGFMaXN0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpemUtaXRlbVwiICsgaSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcml6ZS1pdGVtXCIpO1xyXG4gICAgICAgICAgICBub2RlLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cImltZy8wLnBuZ1wiPic7XHJcbiAgICAgICAgICAgIHByaXplX25vZGUuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIC8vIHZhciBub2RlID0gdGhpcy5sYXlvdXQucXVlcnlTZWxlY3RvcignI3ByaXplLWl0ZW0nICsgaSk7XHJcbiAgICAgICAgICAgIG5vZGUuc3R5bGUubGVmdCA9IGkgKiA2NSArIFwicHhcIjtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoaSwgbm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSA2NSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSAnaW1nL3R1cm50YWJsZS90aGluZycgKyBkYXRhTGlzdFtpXSArICcucG5nJztcclxuICAgICAgICAgICAgfSwgMTAwICogaSwgaSwgbm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vcHJpemUgY29kZSDmmK/mnIDnu4jlgZznlZnnmoRjb2RlKOS4reWllueahOWlluWTgSlcclxuLy9jYWxsYmFjayAg57uT5p2f5ZCO5Zue6LCD55qE5Ye95pWwXHJcbmZ1bmN0aW9uIHJvbGxGdW4ocHJpemVfY29kZSwgY2FsbGJhY2spIHtcclxuICAgIHJvbGwuaW5pdChwcml6ZV9jb2RlLCB0dXJudGFibGVQYWdlLmZvY3VzSXRlbXMpO1xyXG4gICAgcm9sbC5zdGFydChjYWxsYmFjayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvbGxDYWxsQmFjayhwcml6ZUNvZGUpIHtcclxuICAgIC8v5a2Y5YWl5pWw5o2uKOeKtuaAgeS4ujEpXHJcbiAgICBpZihwcml6ZUNvZGUhPTMpe1xyXG4gICAgICAgIHN0YmNsaS5hZGRXaW5uZXIocHJpemVDb2RlLDEsZnVuY3Rpb24gKGNvZGUsYml6KSB7XHJcbiAgICAgICAgICAgIGlmKGNvZGU9PTAgJiYgYml6KXtcclxuICAgICAgICAgICAgICAgIHR1cm5UYWJsZUFyZ3Muc2V0UHJpemVJRChwYXJzZUludChiaXopKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2hvd1JlY2VpdmVEaWFsb2coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgIGluaXRGb2N1cygpO1xyXG4gICAgICAgIGlmKGJ0bj09MCl7XHJcbiAgICAgICAgICAgIC8v6aKG5Y+WXHJcbiAgICAgICAgICAgaWYocHJpemVDb2RlPT0zKXtcclxuICAgICAgICAgICAgICAgIC8v5YWF5YC8NTBG5biBXHJcbiAgICAgICAgICAgICAgIHN0YmNsaS5hZGRDb2lucyg1MCk7XHJcbiAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgIHNob3dPcmRlckRpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICBpZihidG49PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHR1cm5UYWJsZUFyZ3Muc2V0Q2FsbEZsYWcoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25RdWVyeVByb2R1Y3QxKCk7XHJcbiAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICBpbml0Rm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICBzdGJjbGkudXNlcldpbm5lcigxLCBmdW5jdGlvbiAoY29kZSwgYml6KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihjb2RlPT0wJiZiaXope1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJXaW5uZXIoYml6KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy/ot7Pov4dcclxuICAgICAgICAgICAgaWYocHJpemVDb2RlPT0zKXtcclxuICAgICAgICAgICAgICAgIC8v5YWF5YC8NTBG5biBXHJcbiAgICAgICAgICAgICAgICBzdGJjbGkuYWRkQ29pbnMoNTApO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHN0YmNsaS51c2VyV2lubmVyKDEsIGZ1bmN0aW9uIChjb2RlLCBiaXopIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb2RlPT0wJiZiaXope1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyV2lubmVyKGJpeik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LHBhcnNlSW50KHByaXplQ29kZSkpO1xyXG4gICAgcm9sbEZsYWc9dHJ1ZTtcclxufVxyXG4vL+WIpOaWreWMheaciD095paw6ICB55So5oi3XHJcbmZ1bmN0aW9uIG9uUXVlcnlTZXJ2ZTEoY29kZSwgYml6KSB7XHJcbiAgICBoaWRlTG9hZGluZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoYml6ICYmIGJpei5wcm9kdWN0SWQgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgc2VydmVGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlcnZlRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmR2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RiY2xpLnF1ZXJ5U2VydmUxKDMsIG9uUXVlcnlTZXJ2ZTEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8v5Yik5pat5piv5ZCm5bey57uP6aKG5Y+W6L+H5aWW5ZOBXHJcbmZ1bmN0aW9uIGlmR2V0KCkge1xyXG4gICAgc3RiY2xpLnVzZXJXaW5uZXIoMiwgZnVuY3Rpb24gKGNvZGUsIGJpeikge1xyXG4gICAgICAgIGlmIChjb2RlID09IDApIHtcclxuICAgICAgICAgICAgaWYgKGJpeiAmJiBiaXoubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZ2V0RmxhZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ2V0RmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0eXBlID0gdXNlclR5cGUoKTtcclxuICAgICAgICAgICAgc3RiY2xpLnR1cm50YWJsZVBybyh0eXBlLCByb2xsUHJvKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZkdldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJvbGxQcm8oY29kZSwgYml6KSB7XHJcbiAgICBpZiAoY29kZSA9PSAwICYmIGJpeikge1xyXG4gICAgICAgIHZhciBwcm9JdGVtID0gW2JpelswXS5vbmVQcm8sIGJpelswXS50d29Qcm8sIGJpelswXS50aHJlZVBybywgYml6WzBdLmZvdXJQcm8sIGJpelswXS5maXZlUHJvLCBiaXpbMF0uc2l4UHJvXTtcclxuICAgICAgICB2YXIgcHJpemVJdGVtID0gWzEsIDQsIDUsIDIsIDAsIDNdO1xyXG4gICAgICAgIHZhciBvbmUgPSBwYXJzZUludChwcm9JdGVtWzBdICogMTAwKTtcclxuICAgICAgICB2YXIgdHdvID0gcGFyc2VJbnQocHJvSXRlbVsxXSAqIDEwMCk7XHJcbiAgICAgICAgdmFyIHRocmVlID0gcGFyc2VJbnQocHJvSXRlbVsyXSAqIDEwMCk7XHJcbiAgICAgICAgdmFyIGZvdXIgPSBwYXJzZUludChwcm9JdGVtWzNdICogMTAwKTtcclxuICAgICAgICB2YXIgZml2ZSA9IHBhcnNlSW50KHByb0l0ZW1bNF0gKiAxMDApO1xyXG4gICAgICAgIHZhciBzaXggPSBwYXJzZUludChwcm9JdGVtWzVdICogMTAwKTtcclxuICAgICAgICB2YXIgcmVzID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICAgICAgdmFyIHByaXplSUQ7XHJcblxyXG4gICAgICAgIHN0YmNsaS5wcml6ZU51bShmdW5jdGlvbiAoY29kZSxiaXopIHtcclxuICAgICAgICAgICAgaWYoY29kZT09MCl7XHJcbiAgICAgICAgICAgICAgICBpZihiaXo9PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWZQcm8oKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wO2k8Yml6Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGJpeltpXS5wcml6ZUlEKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXg9c2l4K2ZpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZml2ZT0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpeD1zaXgrb25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uZT0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpeD1zaXgrZm91cjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VyPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l4PXNpeCt0d287XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHdvPTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l4PXNpeCt0aHJlZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlZT0wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmUHJvKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGlmUHJvKCkge1xyXG4gICAgICAgICAgICBpZiAoMCA8IHJlcyAmJiByZXMgPD0gb25lKSB7XHJcbiAgICAgICAgICAgICAgICBwcml6ZUlEID0gcHJpemVJdGVtWzBdO1xyXG4gICAgICAgICAgICAgICAgcm9sbEZ1bihwcml6ZUlELCByb2xsQ2FsbEJhY2spO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9uZSA8IHJlcyAmJiByZXMgPD0gb25lICsgdHdvKSB7XHJcbiAgICAgICAgICAgICAgICBwcml6ZUlEID0gcHJpemVJdGVtWzFdO1xyXG4gICAgICAgICAgICAgICAgcm9sbEZ1bihwcml6ZUlELCByb2xsQ2FsbEJhY2spO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9uZSArIHR3byA8IHJlcyAmJiByZXMgPD0gb25lICsgdHdvICsgdGhyZWUpIHtcclxuICAgICAgICAgICAgICAgIHByaXplSUQgPSBwcml6ZUl0ZW1bMl07XHJcbiAgICAgICAgICAgICAgICByb2xsRnVuKHByaXplSUQsIHJvbGxDYWxsQmFjayk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob25lICsgdHdvICsgdGhyZWUgPCByZXMgJiYgIHJlcyA8PSBvbmUgKyB0d28gKyB0aHJlZSArIGZvdXIpIHtcclxuICAgICAgICAgICAgICAgIHByaXplSUQgPSBwcml6ZUl0ZW1bM107XHJcbiAgICAgICAgICAgICAgICByb2xsRnVuKHByaXplSUQsIHJvbGxDYWxsQmFjayk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob25lICsgdHdvICsgdGhyZWUgKyBmb3VyIDwgcmVzICYmIHJlcyA8PSBvbmUgKyB0d28gKyB0aHJlZSArIGZvdXIgKyBmaXZlKSB7XHJcbiAgICAgICAgICAgICAgICBwcml6ZUlEID0gcHJpemVJdGVtWzRdO1xyXG4gICAgICAgICAgICAgICAgcm9sbEZ1bihwcml6ZUlELCByb2xsQ2FsbEJhY2spO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9uZSArIHR3byArIHRocmVlICsgZm91ciArIGZpdmUgPCByZXMgJiYgcmVzIDw9IG9uZSArIHR3byArIHRocmVlICsgZm91ciArIGZpdmUgKyBzaXh8fHJlczw9MHx8cmVzPjEwMCkge1xyXG4gICAgICAgICAgICAgICAgcHJpemVJRCA9IHByaXplSXRlbVs1XTtcclxuICAgICAgICAgICAgICAgIHJvbGxGdW4ocHJpemVJRCwgcm9sbENhbGxCYWNrKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB1c2VyVHlwZSgpIHtcclxuICAgIHZhciB0eXBlID0gXCJcIjtcclxuICAgIGlmICh3aW5uZXJGbGFnKSB7XHJcbiAgICAgICAgaWYgKHNlcnZlRmxhZykge1xyXG4gICAgICAgICAgICBpZiAoZ2V0RmxhZykge1xyXG4gICAgICAgICAgICAgICAgLy/lt7LkuK3lpZblt7Lpooblj5bogIHnlKjmiLdcclxuICAgICAgICAgICAgICAgIHR5cGUgPSA0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/lt7LkuK3lpZbmnKrpooblj5bogIHnlKjmiLdcclxuICAgICAgICAgICAgICAgIHR5cGUgPSAzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGdldEZsYWcpIHtcclxuICAgICAgICAgICAgICAgIC8v5bey5Lit5aWW5bey6aKG5Y+W5paw55So5oi3KOS4jeaIkOeriylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5bey5Lit5aWW5pyq6aKG5Y+W5paw55So5oi3XHJcbiAgICAgICAgICAgICAgICB0eXBlID0gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHNlcnZlRmxhZykge1xyXG4gICAgICAgICAgICAvL+acquS4reWlluiAgeeUqOaIt1xyXG4gICAgICAgICAgICB0eXBlID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+acquS4reWlluaWsOeUqOaIt1xyXG4gICAgICAgICAgICB0eXBlID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHlwZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEZvY3VzKCkge1xyXG4gICAgdHVybnRhYmxlUGFnZS5zaG93KGN1cnJlbnRJbmRleCwgb25QYWdlS2V5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25UYWJsZUtleShrZXkpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6XHJcbiAgICAgICAgICAgIGJpbGxUYWJsZS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHR1cm50YWJsZVBhZ2Uuc2hvdyh0dXJudGFibGVQYWdlLmN1cnJlbnQsIHR1cm50YWJsZVBhZ2Uub25LZXlEb3duLCB0dXJudGFibGVQYWdlLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5pZiAocmV0YWlsSWQgPT0gcmV0YWlsLmd4Z2QpIHtcclxuICAgIGFwcEFyZ3Muc2V0UmVkaXJlY3RVcmwoJ2h0dHA6Ly8xMC4xLjE1LjQzL25uX2Ntcy9ubl9jbXNfdmlldy9neGNhdHYyMC9nb19pZGNfdjIuMS5waHA/cGFnZT1saW51eF9ob21lX2hkJyk7XHJcbn0gZWxzZSB7XHJcbiAgICBhcHBBcmdzLnNldFJlZGlyZWN0VXJsKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxufVxyXG5hcHBBcmdzLnNldFJldHVyblVybCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblxyXG52YXIgaG9tZU1lbnU7XHJcbnZhciB0dXJudGFibGVQYWdlO1xyXG52YXIgYmlsbFRhYmxlO1xyXG52YXIgdGRlVXNlcjtcclxudmFyIHJvbGw7XHJcbnZhciBjdXJyZW50SW5kZXg7XHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBob21lTWVudSA9IG5ldyBIb21lTWVudSgpO1xyXG4gICAgdHVybnRhYmxlUGFnZSA9IG5ldyBUdXJudGFibGVQYWdlKCk7XHJcbiAgICBiaWxsVGFibGU9bmV3IEJpbGxUYWJsZSgpO1xyXG4gICAgY3VycmVudEluZGV4ID0gdHVybnRhYmxlUGFnZS5jdXJyZW50O1xyXG4gICAgdHVybnRhYmxlUGFnZS5zaG93KHR1cm50YWJsZVBhZ2UuY3VycmVudCwgb25QYWdlS2V5KTtcclxuICAgIGFwcEFyZ3Muc2V0VHVybnRhYmxlVXJsKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIHJvbGwgPSBuZXcgUm9sbCgpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgc3RiY2xpLnN0YXJ0KG9uU3RhcnQpO1xyXG4gICAgfSwgMTAwKTtcclxufTtcclxuXHJcbmV4cG9ydCB7b25RdWVyeVByb2R1Y3QxfVxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdHVybnRhYmxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==