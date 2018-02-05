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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./resources/assets/js/Java20Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Java20Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[183, 176], //0
[183, 176], [194, 370], [313, 176], [147, 176], [147, 176], //5
[183, 176], [183, 176], [194, 370], [159, 123], [159, 230], //10
[213, 370], [330, 176], [155, 177], [156, 177], [182, 176], //15
[182, 176], [182, 176], [182, 176] //18
];
var pageSize = itemSize.length;

function Java20Page() {
    this.layout = document.getElementById('java20-page');
    this.items = [];
    for (var i = 0; i < pageSize; ++i) {
        var node = this.layout.querySelector('#java20-item' + i);
        this.items.push(node);
    }
}
Java20Page.prototype = {
    itemInfos: [],
    page: 0,
    pageIndex: 0,
    currentSize: 0,
    /**
     * {int} current [0,9]
     */
    current: 0,
    onKeyDown: null,
    leftNum: 0,
    start: function start(itemInfos, callback) {
        this.itemInfos = itemInfos;
        this._showInfo(itemInfos, callback);
        //this._showPage(0, callback);
    },
    _showInfo: function _showInfo(infos, callback) {
        var cnt = infos.length;
        var loadCnt = 0;
        this.items.forEach(function (node, index) {
            node.style.display = index < cnt ? 'block' : 'none';
            if (index >= cnt) {
                return;
            }
            var itemInfo = infos[index];
            var img = node.querySelector('img');
            img.onload = function () {
                loadCnt++;
                if (loadCnt === cnt) {
                    if (typeof callback === 'function') callback();
                }
            };

            setTimeout(function (img, itemInfo) {
                img.src = itemInfo.img;
            }, 100 * index, img, itemInfo);
        });
    },
    //_showPage: function (pageIndex, callback) {
    //    var cnt = this.itemInfos.length;//JSON数据的条数
    //    var page = parseInt(cnt / pageSize);//数据分的页数
    //    if (cnt > page * pageSize) {//翻去下一页
    //        page++;
    //    }
    //    if (pageIndex >= page) {//翻去上一页
    //        pageIndex = page - 1;
    //    }
    //    this.page = page;
    //    this.pageIndex = pageIndex;
    //
    //    //this.titleName.innerHTML = this.title;
    //    //this.titlePage.innerHTML = '第' + (pageIndex + 1) + '页/共' + page + '页';
    //
    //    var cut0 = pageSize * pageIndex;
    //    this.currentSize = (cnt - cut0) >= pageSize ? pageSize : cnt - cut0;//如果不是最后一页，就是填满了，如果是最后一页就获取有多少个
    //    var cut1 = this.currentSize + cut0;//
    //    var cutInfos = this.itemInfos.slice(cut0, cut1);//获取到当前页面展示的JSON
    //    this._showInfo(cutInfos, callback);
    //
    //    this.setSelected(0);
    //},
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
            img.style.width = size[0] * 1.1 + 'px';
            img.style.height = size[1] * 1.1 + 'px';
            img.style.left = -size[0] * 0.05 + 'px';
            img.style.top = -size[1] * 0.05 + 'px';
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
    setLeftMove: function setLeftMove(current) {
        if (this.items[12].offsetLeft > 880 && this.items[12].offsetLeft < 1000) {
            this.leftNum++;
            this.setLeft(this.leftNum);
        } else if (this.items[current].offsetLeft > 960 && this.items[current].offsetLeft < 1060 && current < 17) {
            this.leftNum++;
            this.setLeft(this.leftNum);
        }
    },
    setLeft: function setLeft(leftNum) {
        for (var i = 0; i < pageSize; ++i) {
            switch (leftNum) {
                case 1:
                    this.items[i].style.left = this.items[i].offsetLeft - itemSize[0][0] - 18 + "px";
                    break;
                case 2:
                    this.items[i].style.left = this.items[i].offsetLeft - itemSize[2][0] - 18 + "px";
                    break;
                case 3:
                    this.items[i].style.left = this.items[i].offsetLeft - itemSize[3][0] - 18 + "px";
                    break;
                case 4:
                    this.items[i].style.left = this.items[i].offsetLeft - itemSize[6][0] - 18 + "px";
                    break;
                case 5:
                    this.items[i].style.left = this.items[i].offsetLeft - itemSize[8][0] - 18 + "px";
                    break;
            }
        }
    },
    setRightMove: function setRightMove(current) {
        if (this.items[current].offsetLeft < 100 && current > 1) {
            this.setRight(this.leftNum);
            this.leftNum--;
        }
    },
    setRight: function setRight(leftNum) {
        for (var i = 0; i < pageSize; ++i) {
            switch (leftNum) {
                case 1:
                    this.items[i].style.left = this.items[i].offsetLeft + itemSize[0][0] + 18 + "px";
                    break;
                case 2:
                    this.items[i].style.left = this.items[i].offsetLeft + itemSize[2][0] + 18 + "px";
                    break;
                case 3:
                    this.items[i].style.left = this.items[i].offsetLeft + itemSize[3][0] + 18 + "px";
                    break;
                case 4:
                    this.items[i].style.left = this.items[i].offsetLeft + itemSize[6][0] + 18 + "px";
                    break;
                case 5:
                    this.items[i].style.left = this.items[i].offsetLeft + itemSize[8][0] + 18 + "px";
                    break;
            }
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
                    case 0:
                        break;
                    case 1:
                        break;
                    case 3:
                    case 5:
                    case 9:
                    case 12:
                    case 14:
                        owner.setRightMove(owner.current);
                        owner.current--;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                    case 4:
                    case 7:
                    case 8:
                    case 10:
                    case 11:
                    case 13:
                    case 16:
                    case 17:
                    case 18:
                        owner.setRightMove(owner.current);
                        owner.current = owner.current - 2;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                    case 15:
                        owner.setRightMove(owner.current);
                        owner.current = owner.current - 3;
                        owner.setSelected(owner.current);
                        break;
                    default:
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 1:
                    case 2:
                    case 4:
                    case 7:
                    case 8:
                    case 10:
                    case 11:
                    case 13:
                        owner.setLeftMove(owner.current);
                        owner.current++;
                        owner.setSelected(owner.current);
                        break;
                    case 0:
                    case 5:
                    case 6:
                    case 9:
                    case 14:
                    case 15:
                    case 16:
                        owner.setLeftMove(owner.current);
                        owner.current = owner.current + 2;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                    case 12:
                        owner.setLeftMove(owner.current);
                        owner.current = owner.current + 3;
                        owner.setSelected(owner.current);
                        break;
                    case 17:
                        break;
                    case 18:
                        break;
                    default:
                        break;
                }
                break;
            case keyCode.up:
                //if (owner.current % 2 != 0) {
                //    owner.current--;
                //    owner.setSelected(owner.current);
                //}
                switch (owner.current) {
                    case 1:
                    case 4:
                    case 7:
                    case 10:
                    case 13:
                    case 16:
                    case 18:
                        owner.current--;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                    case 14:
                        owner.current = owner.current - 2;
                        owner.setSelected(owner.current);
                        break;
                    default:
                        break;
                }

                break;
            case keyCode.down:
                //var current = owner.current;
                //if (current % 2 == 0) {
                //    current++;
                //    if (current >= owner.currentSize) {
                //        current = owner.currentSize - 1;
                //    }
                //    if (current != owner.current) {
                //        owner.setSelected(current);
                //    }
                //}
                switch (owner.current) {
                    case 0:
                    case 3:
                    case 6:
                    case 9:
                    case 12:
                    case 15:
                    case 17:
                        owner.current++;
                        owner.setSelected(owner.current);
                        break;
                    default:
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

/***/ "./resources/assets/js/java20.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_stbcli__ = __webpack_require__("./resources/assets/js/toodo/_stbcli.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_loading__ = __webpack_require__("./resources/assets/js/app/loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_dialog__ = __webpack_require__("./resources/assets/js/app/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_abc__ = __webpack_require__("./resources/assets/js/app/abc.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_childLock__ = __webpack_require__("./resources/assets/js/app/childLock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HomeMenu__ = __webpack_require__("./resources/assets/js/HomeMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Java20Page__ = __webpack_require__("./resources/assets/js/Java20Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_PageUrl__ = __webpack_require__("./resources/assets/js/app/PageUrl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_PageArgs__ = __webpack_require__("./resources/assets/js/app/PageArgs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_dialogBigAd__ = __webpack_require__("./resources/assets/js/app/dialogBigAd.js");













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
                    java20Page.show(currentIndex, onPageKey);
                }
            }, 1, '提示', '没有找到用户信息哦！', '重试', '取消');
        } else {
            tdeUser = biz;
            java20Page.show(currentIndex, onPageKey);
        }
    });
}

function onQueryServe1(code, biz) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["a" /* hideLoading */])(function () {
        var pageIndex = java20Page.pageIndex;
        var itemInfo = java20Page.itemInfos[pageIndex * 10 + currentIndex];
        if (code == 0 && biz && biz.productId == itemInfo.productId) {
            __WEBPACK_IMPORTED_MODULE_8__app_PageUrl__["a" /* pageUrl */].callGame(itemInfo, window.location.href);
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])('提示', '正在加载，请稍候...');
            stbcli.queryProduct1(itemInfo.prodId, onQueryProduct1);
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
        var pageIndex = java20Page.pageIndex;
        var itemInfo = java20Page.itemInfos[pageIndex * 10 + currentIndex];
        if (code == 0 && biz && biz.productId == itemInfo.prodId) {
            var cb = function cb(btn) {
                if (btn == 0) {
                    if (tdeUser.childLock) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__app_childLock__["a" /* showChildLock */])(function (code, msg) {
                            onValidLock(code, msg, java20Page, itemInfo);
                        }, 1, 0);
                    } else {
                        sendOrder(itemInfo);
                    }
                } else {
                    java20Page.show(currentIndex, onPageKey);
                }
            };

            //let text = '';
            //if (biz.category == 0) {
            //    text = '您将花费' + biz.price / 100 + '元/月订购' + biz.goodsName;
            //} else {
            //    text = '您将花费' + biz.price / 100 + '元购买' + biz.goodsName;
            //}
            //showDialog(cb, 0, '订购信息', text, '确认', '取消');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__app_dialogBigAd__["b" /* showAd16 */])(cb, 0);
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_dialog__["a" /* showDialog */])(function (btn) {
                if (btn == 0) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])('提示', '正在加载，请稍候...');
                    stbcli.queryProduct1(itemInfo.prodId, onQueryProduct1);
                } else {
                    java20Page.show(currentIndex, onPageKey);
                }
            }, 0, '提示', '没有找到产品信息哦！', '重试', '取消');
        }
    });
}

function onOrder1(code, biz) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["a" /* hideLoading */])(function () {
        var pageIndex = java20Page.pageIndex;
        var itemInfo = java20Page.itemInfos[pageIndex * 10 + currentIndex];
        if (code == 0 && biz) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])('提示', '正在处理，请稍候...');
            var callUrl = __WEBPACK_IMPORTED_MODULE_8__app_PageUrl__["a" /* pageUrl */].callUrl(itemInfo, window.location.href);
            __WEBPACK_IMPORTED_MODULE_9__app_PageArgs__["c" /* callbackArgs */].setRedirectUrl(callUrl);
            __WEBPACK_IMPORTED_MODULE_9__app_PageArgs__["c" /* callbackArgs */].setReturnUrl(window.location.href);
            stbcli.pay(biz.tradeNo);
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_dialog__["a" /* showDialog */])(function (btn) {
                if (btn == 0) {
                    sendOrder(itemInfo);
                } else {
                    java20Page.show(currentIndex, onPageKey);
                }
            }, 0, '订单提示', '小双服务开小差啦，请稍后重试。', '重试', '返回');
        }
    });
}

function onMenuKey(key) {
    switch (key) {
        case keyCode.down:
            homeMenu.hide();
            java20Page.show(java20Page.current, onPageKey);
            break;
        case keyCode.ok:
            if (homeMenu.current == 2) {
                __WEBPACK_IMPORTED_MODULE_9__app_PageArgs__["b" /* appArgs */].onHomePage();
            }
            break;
        case keyCode.num0:
        case keyCode.back:
            __WEBPACK_IMPORTED_MODULE_9__app_PageArgs__["b" /* appArgs */].onHomePage();
            break;
    }
}

function onPageKey(key) {
    switch (key) {
        case keyCode.up:
            //if (currentIndex % 2 == 0) {
            //    java20Page.hide();
            //    homeMenu.show(homeMenu.current, onMenuKey, tdeUser);
            //    //homeMenu.show(homeMenu.current, onMenuKey);
            //}
            switch (currentIndex) {
                case 0:
                case 2:
                case 3:
                case 6:
                case 8:
                case 9:
                case 11:
                case 12:
                case 15:
                case 17:
                    java20Page.hide();
                    homeMenu.show(homeMenu.current, onMenuKey, tdeUser);
                    //homeMenu.show(homeMenu.current, onMenuKey);
                    break;
                default:
                    break;
            }
            break;
        case keyCode.ok:
            //未登录
            if (!stbcli.isReady) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])('自动登陆', '小双在使劲加载，请稍候...');
                stbcli.start(onStart);
                break;
            }
            var pageIndex = java20Page.pageIndex;
            var itemInfo = java20Page.itemInfos[pageIndex * 10 + currentIndex];
            if (itemInfo.trial == 1) {
                __WEBPACK_IMPORTED_MODULE_8__app_PageUrl__["a" /* pageUrl */].callGame(itemInfo, window.location.href);
                break;
            }
            if (itemInfo.trial == 2) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_dialog__["a" /* showDialog */])(function (btn) {
                    if (btn == 0) {}
                    java20Page.show(currentIndex, onPageKey);
                }, 1, '敬请期待', '服务暂未开通哦！', '确定', '取消');
                break;
            }
            //未开通
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_loading__["b" /* showLoading */])('提示', '正在加载，请稍候...');
            stbcli.queryServe1(itemInfo.productId, onQueryServe1);
            break;
        case keyCode.num0:
        case keyCode.back:
            __WEBPACK_IMPORTED_MODULE_9__app_PageArgs__["b" /* appArgs */].onHomePage();
            break;
        case keyCode.esc:
            __WEBPACK_IMPORTED_MODULE_9__app_PageArgs__["b" /* appArgs */].onFirstPage();
            break;
    }
    currentIndex = java20Page.current;
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
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__app_childLock__["a" /* showChildLock */])(function (code, msg) {
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

var tdeUser = null;
var homeMenu;
var java20Page;
var currentIndex;
window.onload = function () {
    homeMenu = new __WEBPACK_IMPORTED_MODULE_6__HomeMenu__["a" /* HomeMenu */]();

    java20Page = new __WEBPACK_IMPORTED_MODULE_7__Java20Page__["a" /* Java20Page */]();
    currentIndex = java20Page.current;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_abc__["a" /* getJSON */])('data/tde_java20_infos.json', function (itemInfos) {
        //如果给的数据不是整形，则转换一次
        for (var i = 0; i < itemInfos.length; ++i) {
            var itemInfo = itemInfos[i];
            itemInfo.id = parseInt(itemInfo.id);
            itemInfo.gameId = parseInt(itemInfo.gameId);
            itemInfo.productId = parseInt(itemInfo.productId);
            itemInfo.prodId = parseInt(itemInfo.prodId);
            itemInfo.trial = parseInt(itemInfo.trial);
        }
        java20Page.start(itemInfos, function () {
            //showLoading('自动登陆', '小双在使劲加载，请稍候...');
            //stbcli.start(onStart);
        });
        java20Page.show(java20Page.current, onPageKey);

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

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/java20.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWM5ZGYyNTE1YTkxYWUzNmIyZjE/ODU5MSoqIiwid2VicGFjazovLy8uL34vX0pTT05AMS4wLjBASlNPTi9qc29uMi5qcz8yOWY5KiIsIndlYnBhY2s6Ly8vLi9+L19jaGFyZW5jQDAuMC4yQGNoYXJlbmMvY2hhcmVuYy5qcz9jOGMxKiIsIndlYnBhY2s6Ly8vLi9+L19jcnlwdEAwLjAuMkBjcnlwdC9jcnlwdC5qcz9kOTM0KiIsIndlYnBhY2s6Ly8vLi9+L19pcy1idWZmZXJAMS4xLjZAaXMtYnVmZmVyL2luZGV4LmpzPzVlYmEqIiwid2VicGFjazovLy8uL34vX21kNUAyLjIuMUBtZDUvbWQ1LmpzPzc5OTcqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvSG9tZU1lbnUuanM/ZTM4YSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9KYXZhMjBQYWdlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL1BhZ2VBcmdzLmpzP2M3YTIqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL1BhZ2VVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvYWJjLmpzPzU3MjYqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2NoaWxkTG9jay5qcz9iZmUwKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9jaGlsZE1lbnUuanM/NDRjYSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvZGlhbG9nLmpzPzJjYmMqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2RpYWxvZ0JpZ0FkLmpzPzBmMGUqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2xvYWRpbmcuanM/OWEwNCoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9qYXZhMjAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fa2V5Y29kZXMuanM/YjkwOCoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fcmV0YWlsLmpzPzBlYjMqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19zdGJjbGkuanM/ZjI1OSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fc3RibnVsbC5qcz80N2U0KiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL190ZGNsaS5qcz8xOGVmKiJdLCJuYW1lcyI6WyJrZXlDb2RlIiwiZ2V0S2V5Q29kZXMiLCJwcmVDb2RlcyIsImdldENvZGVzIiwiSG9tZU1lbnUiLCJsYXlvdXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJpdGVtcyIsImkiLCJub2RlIiwicXVlcnlTZWxlY3RvciIsInB1c2giLCJpbWciLCJzcmMiLCJwcm90b3R5cGUiLCJjdXJyZW50Iiwib25LZXlEb3duIiwidGRlVXNlciIsInNob3ciLCJzZXRTZWxlY3RlZCIsIm93bmVyIiwib25rZXlkb3duIiwiZSIsImhhbmRsZUtleSIsImhpZGUiLCJfc2V0Rm9jdXMiLCJmb2N1cyIsImxlbmd0aCIsImdldEV2ZW50IiwiY3VyS2V5IiwiZ2V0S2V5IiwiaW5kZXhPZiIsInByZXZlbnREZWZhdWx0IiwibGVmdCIsInJpZ2h0Iiwib2siLCJhcHBBcmdzIiwib25GaXJzdFBhZ2UiLCJvbkhvbWVQYWdlIiwib2xkTG9jayIsImNoaWxkTG9jayIsImNoaWxkTWVudSIsImJ0biIsInNob3dDaGlsZExvY2siLCJjb2RlIiwibXNnIiwib25WYWxpZExvY2siLCJyZXNldENoaWxkTG9jayIsIm9uVHVybnRhYmxlUGFnZSIsImVzYyIsInN0YmNsaSIsInRkZUxvY2siLCJiaXoiLCJ0ZXh0Iiwib25UZGVMb2NrIiwic2hvd0RpYWxvZyIsImRsZ0J0biIsIm5ld0xvY2siLCJhcmd1bWVudHMiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwiaXRlbVNpemUiLCJwYWdlU2l6ZSIsIkphdmEyMFBhZ2UiLCJnZXRFbGVtZW50QnlJZCIsIml0ZW1JbmZvcyIsInBhZ2UiLCJwYWdlSW5kZXgiLCJjdXJyZW50U2l6ZSIsImxlZnROdW0iLCJzdGFydCIsImNhbGxiYWNrIiwiX3Nob3dJbmZvIiwiaW5mb3MiLCJjbnQiLCJsb2FkQ250IiwiZm9yRWFjaCIsImluZGV4Iiwic3R5bGUiLCJkaXNwbGF5IiwiaXRlbUluZm8iLCJvbmxvYWQiLCJzZXRUaW1lb3V0IiwiekluZGV4Iiwic2l6ZSIsImRpdiIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwic2V0TGVmdE1vdmUiLCJvZmZzZXRMZWZ0Iiwic2V0TGVmdCIsInNldFJpZ2h0TW92ZSIsInNldFJpZ2h0IiwidXAiLCJkb3duIiwiUGFnZUFyZ3MiLCJwcmVmaXgiLCJnZXRWYWx1ZSIsImsiLCJzdGJOdWxsIiwic2V0VmFsdWUiLCJ2IiwiZ2V0UmV0dXJuVXJsIiwic2V0UmV0dXJuVXJsIiwidXJsIiwiZ2V0UmVkaXJlY3RVcmwiLCJzZXRSZWRpcmVjdFVybCIsInNldENhbGxGbGFnIiwibnVtIiwiZ2V0Q2FsbEZsYWciLCJzZXRTdWNjZXNzQ29kZSIsInN1Y2Nlc3NDb2RlIiwiZ2V0U3VjY2Vzc0NvZGUiLCJzZXRQcml6ZUlEIiwiaWQiLCJnZXRQcml6ZUlEIiwiZ2V0VHVybnRhYmxlVXJsIiwic2V0VHVybnRhYmxlVXJsIiwic2hvcEFyZ3MiLCJyZWNoYXJnZUFyZ3MiLCJjYWxsYmFja0FyZ3MiLCJ0dXJuVGFibGVBcmdzIiwiZmlyc3RVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJob21lVXJsIiwiVHVybnRhYmxlVXJsIiwiUGFnZVVybCIsInBhcnNlUXVlcnkiLCJxdWVyeSIsInNsaWNlIiwiYXJncyIsImFyciIsInNwbGl0IiwibSIsInRtcCIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlQXJncyIsImhhc093blByb3BlcnR5IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsImJhc2VVcmwiLCJwcm90b2NvbCIsImhvc3QiLCJnZXRVc2VySWQiLCJnZXRTdGJJZCIsImdldENhcmRUViIsImdldFNpZ25LZXkiLCJ0cyIsIkRhdGUiLCJnZXRUaW1lIiwibWQ1IiwiZ2V0Q2hpbGRMb2NrIiwicmVjaGFyZ2VVcmwiLCJjYWxsVXJsIiwiaXRlbSIsInJldHVyblVybCIsImdhbWVpZCIsImdhbWVJZCIsImtleSIsImRldiIsImZhdGhlcmtleSIsInVzZXJJZCIsInVzZXJpZCIsInJldHVyblVSTCIsImhvc3ROYW1lIiwiaG9zdG5hbWUiLCJkc3RVcmwiLCJyZXBsYWNlIiwicGFyYW1zIiwicmVkaXJlY3RVcmwiLCJjYWxsVXJsQmFzZSIsImNhbGxHYW1lIiwiY2FsbEdhbWVCYXNlIiwicGFnZVVybCIsImdldEpTT04iLCJjYiIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJpdGVtc0FyciIsImV2YWwiLCJyZXNwb25zZVRleHQiLCJzZW5kIiwiZGVsYXlCYWNrZ3JvdW5kIiwiZGVsYXkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0aXRsZSIsImxhYmVsIiwidGlwcyIsImxheW91dElkIiwibG9ja1RleHQiLCJsb2NrVGl0bGUiLCJsb2NrTGFiZWwiLCJsb2NrVGlwcyIsImlubmVyVGV4dCIsIml0ZW1Ob2RlcyIsIm51bTEiLCJudW0yIiwibnVtMyIsIm51bTQiLCJudW01IiwibnVtNiIsIm51bTciLCJudW04IiwibnVtOSIsImJhY2siLCJudW0wIiwiaW5wdXRUZXh0IiwiY3VySWR4IiwiaXRlbU5vZGUiLCJzdWJtaXQiLCJpbnZpc2libGUiLCJzdGFyIiwiY2xpY2tOdW0iLCJTdHJpbmciLCJiYWNrc3BhY2UiLCJzdWJzdHJpbmciLCJoYW5kbGVPayIsIkNoaWxkTWVudSIsImJnIiwiYnRuTm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRuTm9kZSIsImJ0bk5vZGUwIiwiYnRuTm9kZTEiLCJ0aXBOb2RlIiwiZm9jdXNCdG4iLCJidG5JZHgiLCJmb2N1c05vZGUiLCJidG4wIiwiYnRuMSIsImFsaWduIiwiYmFja2dyb3VuZCIsIm5vZGVUaXRsZSIsIm5vZGVUZXh0IiwidGV4dEFsaWduIiwibm9kZUJ0bjAiLCJub2RlQnRuMSIsImJ0bl8wMDYiLCJidG5fMDA2bm9uZSIsInNob3dBZDE2Iiwic2hvd0FkMjkiLCJhZCIsImxvYWRUaW1lIiwic2hvd1RpbWUiLCJub2RlQmciLCJkZWxheVRpbWUiLCJ0aW1lIiwiY2FsbGJhY2tVcmwiLCJvblN0YXJ0IiwiamF2YTIwUGFnZSIsImN1cnJlbnRJbmRleCIsIm9uUGFnZUtleSIsIm9uUXVlcnlTZXJ2ZTEiLCJwcm9kdWN0SWQiLCJxdWVyeVByb2R1Y3QxIiwicHJvZElkIiwib25RdWVyeVByb2R1Y3QxIiwic2VuZE9yZGVyIiwib25PcmRlcjEiLCJwYXkiLCJ0cmFkZU5vIiwib25NZW51S2V5IiwiaG9tZU1lbnUiLCJpc1JlYWR5IiwidHJpYWwiLCJxdWVyeVNlcnZlMSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwib3JkZXIxIiwicGFyc2VJbnQiLCJrZXlNYXAiLCJyZXRhaWxJZCIsInJldGFpbCIsImd4Z2QiLCJmMSIsImYyIiwiZjMiLCJmNCIsIm11dGUiLCJ0cmFjayIsInZvbFVwIiwidm9sRG93biIsImZhdiIsInBsYXlCYWNrIiwicGFnZVVwIiwicGFnZURvd24iLCJtZW51IiwiaG9tZSIsImhueXgiLCJnZGdkIiwiZXZ0IiwiZXZlbnQiLCJ3aGljaCIsImNoYXJDb2RlIiwiY29kZXMiLCJub25lIiwiZ2V0UmV0YWlsSWQiLCJndWFuZ3hpIiwiaVBhbmVsIiwiU3lzdGVtIiwic3RiSUQiLCJDQSIsIlN0b3JhZ2VTZXJ2aWNlIiwiRmlsZVN5c3RlbSIsInJlcXVpcmUiLCJTdGJDbGllbnQiLCJvcmlnaW5VcmwiLCJhcHBLZXkiLCJhcHBTZWNyZXQiLCJfdGRjbGkiLCJ0b2tlbiIsImJpekluIiwiZ2V0UmVnaW9uQ29kZSIsImJvZHlJbiIsIm1ldGhvZCIsImFwcEF1dGhUb2tlbiIsImJpekNvbnRlbnQiLCJzZXRBcGlVcmwiLCJib2R5T3V0IiwiYml6T3V0IiwicGFyc2UiLCJiaXpVc2VyIiwic3ViQ29kZSIsImFkZFdpbm5lciIsInByaXplSUQiLCJzdGF0ZSIsImFkZFN0YXRlIiwidXBkYXRhRnJlZVN0YXRlIiwiZ2V0UHJpemUiLCJ0dXJudGFibGVTdGF0ZSIsInR1cm50YWJsZVBybyIsInR5cGUiLCJwcml6ZU51bSIsIndpbm5lckluZm8iLCJ1c2VyV2lubmVyIiwiYWRkQ29pbnMiLCJhZGROdW0iLCJiaWxsIiwidGRlUGFnZSIsInRkYVNvbmciLCJjYXRlZ29yeSIsInRkYVNvbmcxIiwic29uZ0lkIiwidGRhTWF0Y2giLCJ0ZGFVc2VyIiwidGRhUmVjb3JkIiwicmVjb3JkIiwiU3RiTnVsbCIsImdldFN0Yk51bSIsImdldEdsb2JhbFZhciIsImtleU5hbWUiLCJyZXN1bHQiLCJhQ29va2llIiwiY29va2llIiwiYUNydW1iIiwiZXNjYXBlIiwidW5lc2NhcGUiLCJrZXlWYWx1ZSIsInNldEdsb2JhbFZhciIsInJlZ2lvbiIsIkdldENBUmVnaW9uSUQiLCJnIiwiR2xvYmFsIiwiR2xvYmFsMiIsInZhbHVlIiwiaWNObyIsInJlZ2lvbkNvZGUiLCJTeXNTZXR0aW5nIiwiZ2V0RW52Iiwic2V0RW52IiwiZm9ybWF0IiwiZm10IiwibyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJnZXRNaWxsaXNlY29uZHMiLCJ0ZXN0IiwiUmVnRXhwIiwiJDEiLCJnZXRGdWxsWWVhciIsInN1YnN0ciIsIlJlcXVlc3RCb2R5IiwiYXBwSWQiLCJjaGFyc2V0Iiwic2lnblR5cGUiLCJzaWduQ29kZSIsInRpbWVzdGFtcCIsInZlcnNpb24iLCJqc29uIiwiUmVzcG9uc2VCb2R5Iiwic3ViTXNnIiwic2lnbiIsIlRvb2RvQ2xpZW50IiwiYXBpVXJsIiwiaXNCdXN5Iiwic2lnbkNvZGVJbiIsInN0ciIsInNpZ25Db2RlT3V0IiwidW5kZWZpbmVkIiwieG1sIiwiaGFuZGxlVGltZW91dCIsImFib3J0IiwiY2xlYXJUaW1lb3V0Iiwic3RhdHVzIiwiZXJyIiwidG9rZW5VcmwiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiZiIsImVpIiwibmFtZSIsImFjdGlvbiIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5Q0FBeUMsaUJBQWlCO0FBQzFELDhCQUE4QixrQkFBa0I7OztBQUdoRCx5Q0FBeUMsaUJBQWlCO0FBQzFELHNDQUFzQyw2QkFBNkI7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQ0FBMEM7QUFDMUMsa0JBQWtCLHdEQUF3RDtBQUMxRSxrQkFBa0IsMEJBQTBCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7O0FBRUE7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0QkFBNEIsVUFBVTtBQUN0QztBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTzs7QUFFMUIseUJBQXlCO0FBQ3pCLHVFQUF1RSxFQUFFO0FBQ3pFO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLE1BQU07QUFDaEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQzFlRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixjQUFjO0FBQ25DO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTztBQUNqQztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0Esd0NBQXdDLGtCQUFrQjtBQUMxRDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsaUNBQWlDLHVCQUF1QjtBQUN4RDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQ7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGtDQUFrQyxrQkFBa0I7QUFDcEQ7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7OztBQy9GRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixjQUFjOztBQUVqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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Q0FBMEJKLENBQTFCO0FBQ0g7QUFyTG1CLENBQXhCLEMiLCJmaWxlIjoianMvamF2YTIwLmNlMDRjYjY2MjE1ZTNkMTZmMWZhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlYzlkZjI1MTVhOTFhZTM2YjJmMSIsIi8qXG4gICAgaHR0cDovL3d3dy5KU09OLm9yZy9qc29uMi5qc1xuICAgIDIwMTEtMDItMjNcblxuICAgIFB1YmxpYyBEb21haW4uXG5cbiAgICBOTyBXQVJSQU5UWSBFWFBSRVNTRUQgT1IgSU1QTElFRC4gVVNFIEFUIFlPVVIgT1dOIFJJU0suXG5cbiAgICBTZWUgaHR0cDovL3d3dy5KU09OLm9yZy9qcy5odG1sXG5cblxuICAgIFRoaXMgY29kZSBzaG91bGQgYmUgbWluaWZpZWQgYmVmb3JlIGRlcGxveW1lbnQuXG4gICAgU2VlIGh0dHA6Ly9qYXZhc2NyaXB0LmNyb2NrZm9yZC5jb20vanNtaW4uaHRtbFxuXG4gICAgVVNFIFlPVVIgT1dOIENPUFkuIElUIElTIEVYVFJFTUVMWSBVTldJU0UgVE8gTE9BRCBDT0RFIEZST00gU0VSVkVSUyBZT1UgRE9cbiAgICBOT1QgQ09OVFJPTC5cblxuXG4gICAgVGhpcyBmaWxlIGNyZWF0ZXMgYSBnbG9iYWwgSlNPTiBvYmplY3QgY29udGFpbmluZyB0d28gbWV0aG9kczogc3RyaW5naWZ5XG4gICAgYW5kIHBhcnNlLlxuXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHZhbHVlLCByZXBsYWNlciwgc3BhY2UpXG4gICAgICAgICAgICB2YWx1ZSAgICAgICBhbnkgSmF2YVNjcmlwdCB2YWx1ZSwgdXN1YWxseSBhbiBvYmplY3Qgb3IgYXJyYXkuXG5cbiAgICAgICAgICAgIHJlcGxhY2VyICAgIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IGRldGVybWluZXMgaG93IG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzIGFyZSBzdHJpbmdpZmllZCBmb3Igb2JqZWN0cy4gSXQgY2FuIGJlIGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MuXG5cbiAgICAgICAgICAgIHNwYWNlICAgICAgIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IHNwZWNpZmllcyB0aGUgaW5kZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9mIG5lc3RlZCBzdHJ1Y3R1cmVzLiBJZiBpdCBpcyBvbWl0dGVkLCB0aGUgdGV4dCB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBiZSBwYWNrZWQgd2l0aG91dCBleHRyYSB3aGl0ZXNwYWNlLiBJZiBpdCBpcyBhIG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0IHdpbGwgc3BlY2lmeSB0aGUgbnVtYmVyIG9mIHNwYWNlcyB0byBpbmRlbnQgYXQgZWFjaFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwuIElmIGl0IGlzIGEgc3RyaW5nIChzdWNoIGFzICdcXHQnIG9yICcmbmJzcDsnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0IGNvbnRhaW5zIHRoZSBjaGFyYWN0ZXJzIHVzZWQgdG8gaW5kZW50IGF0IGVhY2ggbGV2ZWwuXG5cbiAgICAgICAgICAgIFRoaXMgbWV0aG9kIHByb2R1Y2VzIGEgSlNPTiB0ZXh0IGZyb20gYSBKYXZhU2NyaXB0IHZhbHVlLlxuXG4gICAgICAgICAgICBXaGVuIGFuIG9iamVjdCB2YWx1ZSBpcyBmb3VuZCwgaWYgdGhlIG9iamVjdCBjb250YWlucyBhIHRvSlNPTlxuICAgICAgICAgICAgbWV0aG9kLCBpdHMgdG9KU09OIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBhbmQgdGhlIHJlc3VsdCB3aWxsIGJlXG4gICAgICAgICAgICBzdHJpbmdpZmllZC4gQSB0b0pTT04gbWV0aG9kIGRvZXMgbm90IHNlcmlhbGl6ZTogaXQgcmV0dXJucyB0aGVcbiAgICAgICAgICAgIHZhbHVlIHJlcHJlc2VudGVkIGJ5IHRoZSBuYW1lL3ZhbHVlIHBhaXIgdGhhdCBzaG91bGQgYmUgc2VyaWFsaXplZCxcbiAgICAgICAgICAgIG9yIHVuZGVmaW5lZCBpZiBub3RoaW5nIHNob3VsZCBiZSBzZXJpYWxpemVkLiBUaGUgdG9KU09OIG1ldGhvZFxuICAgICAgICAgICAgd2lsbCBiZSBwYXNzZWQgdGhlIGtleSBhc3NvY2lhdGVkIHdpdGggdGhlIHZhbHVlLCBhbmQgdGhpcyB3aWxsIGJlXG4gICAgICAgICAgICBib3VuZCB0byB0aGUgdmFsdWVcblxuICAgICAgICAgICAgRm9yIGV4YW1wbGUsIHRoaXMgd291bGQgc2VyaWFsaXplIERhdGVzIGFzIElTTyBzdHJpbmdzLlxuXG4gICAgICAgICAgICAgICAgRGF0ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBmKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvcm1hdCBpbnRlZ2VycyB0byBoYXZlIGF0IGxlYXN0IHR3byBkaWdpdHMuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiA8IDEwID8gJzAnICsgbiA6IG47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRVVENGdWxsWWVhcigpICAgKyAnLScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNb250aCgpICsgMSkgKyAnLScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENEYXRlKCkpICAgICAgKyAnVCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENIb3VycygpKSAgICAgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNaW51dGVzKCkpICAgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENTZWNvbmRzKCkpICAgKyAnWic7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsIHJlcGxhY2VyIG1ldGhvZC4gSXQgd2lsbCBiZSBwYXNzZWQgdGhlXG4gICAgICAgICAgICBrZXkgYW5kIHZhbHVlIG9mIGVhY2ggbWVtYmVyLCB3aXRoIHRoaXMgYm91bmQgdG8gdGhlIGNvbnRhaW5pbmdcbiAgICAgICAgICAgIG9iamVjdC4gVGhlIHZhbHVlIHRoYXQgaXMgcmV0dXJuZWQgZnJvbSB5b3VyIG1ldGhvZCB3aWxsIGJlXG4gICAgICAgICAgICBzZXJpYWxpemVkLiBJZiB5b3VyIG1ldGhvZCByZXR1cm5zIHVuZGVmaW5lZCwgdGhlbiB0aGUgbWVtYmVyIHdpbGxcbiAgICAgICAgICAgIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIHNlcmlhbGl6YXRpb24uXG5cbiAgICAgICAgICAgIElmIHRoZSByZXBsYWNlciBwYXJhbWV0ZXIgaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncywgdGhlbiBpdCB3aWxsIGJlXG4gICAgICAgICAgICB1c2VkIHRvIHNlbGVjdCB0aGUgbWVtYmVycyB0byBiZSBzZXJpYWxpemVkLiBJdCBmaWx0ZXJzIHRoZSByZXN1bHRzXG4gICAgICAgICAgICBzdWNoIHRoYXQgb25seSBtZW1iZXJzIHdpdGgga2V5cyBsaXN0ZWQgaW4gdGhlIHJlcGxhY2VyIGFycmF5IGFyZVxuICAgICAgICAgICAgc3RyaW5naWZpZWQuXG5cbiAgICAgICAgICAgIFZhbHVlcyB0aGF0IGRvIG5vdCBoYXZlIEpTT04gcmVwcmVzZW50YXRpb25zLCBzdWNoIGFzIHVuZGVmaW5lZCBvclxuICAgICAgICAgICAgZnVuY3Rpb25zLCB3aWxsIG5vdCBiZSBzZXJpYWxpemVkLiBTdWNoIHZhbHVlcyBpbiBvYmplY3RzIHdpbGwgYmVcbiAgICAgICAgICAgIGRyb3BwZWQ7IGluIGFycmF5cyB0aGV5IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBudWxsLiBZb3UgY2FuIHVzZVxuICAgICAgICAgICAgYSByZXBsYWNlciBmdW5jdGlvbiB0byByZXBsYWNlIHRob3NlIHdpdGggSlNPTiB2YWx1ZXMuXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh1bmRlZmluZWQpIHJldHVybnMgdW5kZWZpbmVkLlxuXG4gICAgICAgICAgICBUaGUgb3B0aW9uYWwgc3BhY2UgcGFyYW1ldGVyIHByb2R1Y2VzIGEgc3RyaW5naWZpY2F0aW9uIG9mIHRoZVxuICAgICAgICAgICAgdmFsdWUgdGhhdCBpcyBmaWxsZWQgd2l0aCBsaW5lIGJyZWFrcyBhbmQgaW5kZW50YXRpb24gdG8gbWFrZSBpdFxuICAgICAgICAgICAgZWFzaWVyIHRvIHJlYWQuXG5cbiAgICAgICAgICAgIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBub24tZW1wdHkgc3RyaW5nLCB0aGVuIHRoYXQgc3RyaW5nIHdpbGxcbiAgICAgICAgICAgIGJlIHVzZWQgZm9yIGluZGVudGF0aW9uLiBJZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGlzIGEgbnVtYmVyLCB0aGVuXG4gICAgICAgICAgICB0aGUgaW5kZW50YXRpb24gd2lsbCBiZSB0aGF0IG1hbnkgc3BhY2VzLlxuXG4gICAgICAgICAgICBFeGFtcGxlOlxuXG4gICAgICAgICAgICB0ZXh0ID0gSlNPTi5zdHJpbmdpZnkoWydlJywge3BsdXJpYnVzOiAndW51bSd9XSk7XG4gICAgICAgICAgICAvLyB0ZXh0IGlzICdbXCJlXCIse1wicGx1cmlidXNcIjpcInVudW1cIn1dJ1xuXG5cbiAgICAgICAgICAgIHRleHQgPSBKU09OLnN0cmluZ2lmeShbJ2UnLCB7cGx1cmlidXM6ICd1bnVtJ31dLCBudWxsLCAnXFx0Jyk7XG4gICAgICAgICAgICAvLyB0ZXh0IGlzICdbXFxuXFx0XCJlXCIsXFxuXFx0e1xcblxcdFxcdFwicGx1cmlidXNcIjogXCJ1bnVtXCJcXG5cXHR9XFxuXSdcblxuICAgICAgICAgICAgdGV4dCA9IEpTT04uc3RyaW5naWZ5KFtuZXcgRGF0ZSgpXSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldIGluc3RhbmNlb2YgRGF0ZSA/XG4gICAgICAgICAgICAgICAgICAgICdEYXRlKCcgKyB0aGlzW2tleV0gKyAnKScgOiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gdGV4dCBpcyAnW1wiRGF0ZSgtLS1jdXJyZW50IHRpbWUtLS0pXCJdJ1xuXG5cbiAgICAgICAgSlNPTi5wYXJzZSh0ZXh0LCByZXZpdmVyKVxuICAgICAgICAgICAgVGhpcyBtZXRob2QgcGFyc2VzIGEgSlNPTiB0ZXh0IHRvIHByb2R1Y2UgYW4gb2JqZWN0IG9yIGFycmF5LlxuICAgICAgICAgICAgSXQgY2FuIHRocm93IGEgU3ludGF4RXJyb3IgZXhjZXB0aW9uLlxuXG4gICAgICAgICAgICBUaGUgb3B0aW9uYWwgcmV2aXZlciBwYXJhbWV0ZXIgaXMgYSBmdW5jdGlvbiB0aGF0IGNhbiBmaWx0ZXIgYW5kXG4gICAgICAgICAgICB0cmFuc2Zvcm0gdGhlIHJlc3VsdHMuIEl0IHJlY2VpdmVzIGVhY2ggb2YgdGhlIGtleXMgYW5kIHZhbHVlcyxcbiAgICAgICAgICAgIGFuZCBpdHMgcmV0dXJuIHZhbHVlIGlzIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgdmFsdWUuXG4gICAgICAgICAgICBJZiBpdCByZXR1cm5zIHdoYXQgaXQgcmVjZWl2ZWQsIHRoZW4gdGhlIHN0cnVjdHVyZSBpcyBub3QgbW9kaWZpZWQuXG4gICAgICAgICAgICBJZiBpdCByZXR1cm5zIHVuZGVmaW5lZCB0aGVuIHRoZSBtZW1iZXIgaXMgZGVsZXRlZC5cblxuICAgICAgICAgICAgRXhhbXBsZTpcblxuICAgICAgICAgICAgLy8gUGFyc2UgdGhlIHRleHQuIFZhbHVlcyB0aGF0IGxvb2sgbGlrZSBJU08gZGF0ZSBzdHJpbmdzIHdpbGxcbiAgICAgICAgICAgIC8vIGJlIGNvbnZlcnRlZCB0byBEYXRlIG9iamVjdHMuXG5cbiAgICAgICAgICAgIG15RGF0YSA9IEpTT04ucGFyc2UodGV4dCwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBhID1cbi9eKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSlUKFxcZHsyfSk6KFxcZHsyfSk6KFxcZHsyfSg/OlxcLlxcZCopPylaJC8uZXhlYyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoK2FbMV0sICthWzJdIC0gMSwgK2FbM10sICthWzRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICthWzVdLCArYVs2XSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBteURhdGEgPSBKU09OLnBhcnNlKCdbXCJEYXRlKDA5LzA5LzIwMDEpXCJdJywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2xpY2UoMCwgNSkgPT09ICdEYXRlKCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNsaWNlKC0xKSA9PT0gJyknKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBuZXcgRGF0ZSh2YWx1ZS5zbGljZSg1LCAtMSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgIFRoaXMgaXMgYSByZWZlcmVuY2UgaW1wbGVtZW50YXRpb24uIFlvdSBhcmUgZnJlZSB0byBjb3B5LCBtb2RpZnksIG9yXG4gICAgcmVkaXN0cmlidXRlLlxuKi9cblxuLypqc2xpbnQgZXZpbDogdHJ1ZSwgc3RyaWN0OiBmYWxzZSwgcmVnZXhwOiBmYWxzZSAqL1xuXG4vKm1lbWJlcnMgXCJcIiwgXCJcXGJcIiwgXCJcXHRcIiwgXCJcXG5cIiwgXCJcXGZcIiwgXCJcXHJcIiwgXCJcXFwiXCIsIEpTT04sIFwiXFxcXFwiLCBhcHBseSxcbiAgICBjYWxsLCBjaGFyQ29kZUF0LCBnZXRVVENEYXRlLCBnZXRVVENGdWxsWWVhciwgZ2V0VVRDSG91cnMsXG4gICAgZ2V0VVRDTWludXRlcywgZ2V0VVRDTW9udGgsIGdldFVUQ1NlY29uZHMsIGhhc093blByb3BlcnR5LCBqb2luLFxuICAgIGxhc3RJbmRleCwgbGVuZ3RoLCBwYXJzZSwgcHJvdG90eXBlLCBwdXNoLCByZXBsYWNlLCBzbGljZSwgc3RyaW5naWZ5LFxuICAgIHRlc3QsIHRvSlNPTiwgdG9TdHJpbmcsIHZhbHVlT2ZcbiovXG5cblxuLy8gQ3JlYXRlIGEgSlNPTiBvYmplY3Qgb25seSBpZiBvbmUgZG9lcyBub3QgYWxyZWFkeSBleGlzdC4gV2UgY3JlYXRlIHRoZVxuLy8gbWV0aG9kcyBpbiBhIGNsb3N1cmUgdG8gYXZvaWQgY3JlYXRpbmcgZ2xvYmFsIHZhcmlhYmxlcy5cblxudmFyIEpTT047XG5pZiAoIUpTT04pIHtcbiAgICBKU09OID0ge307XG59XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgZ2xvYmFsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKVxuICAgICAgLCBKU09OID0gZ2xvYmFsLkpTT05cbiAgICAgIDtcblxuICAgIGlmICghSlNPTikge1xuICAgICAgSlNPTiA9IHt9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGYobikge1xuICAgICAgICAvLyBGb3JtYXQgaW50ZWdlcnMgdG8gaGF2ZSBhdCBsZWFzdCB0d28gZGlnaXRzLlxuICAgICAgICByZXR1cm4gbiA8IDEwID8gJzAnICsgbiA6IG47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBEYXRlLnByb3RvdHlwZS50b0pTT04gIT09ICdmdW5jdGlvbicpIHtcblxuICAgICAgICBEYXRlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoa2V5KSB7XG5cbiAgICAgICAgICAgIHJldHVybiBpc0Zpbml0ZSh0aGlzLnZhbHVlT2YoKSkgP1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VVRDRnVsbFllYXIoKSAgICAgKyAnLScgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNb250aCgpICsgMSkgKyAnLScgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENEYXRlKCkpICAgICAgKyAnVCcgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENIb3VycygpKSAgICAgKyAnOicgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNaW51dGVzKCkpICAgKyAnOicgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENTZWNvbmRzKCkpICAgKyAnWicgOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIFN0cmluZy5wcm90b3R5cGUudG9KU09OICAgICAgPVxuICAgICAgICAgICAgTnVtYmVyLnByb3RvdHlwZS50b0pTT04gID1cbiAgICAgICAgICAgIEJvb2xlYW4ucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBjeCA9IC9bXFx1MDAwMFxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nLFxuICAgICAgICBlc2NhcGFibGUgPSAvW1xcXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHg5ZlxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nLFxuICAgICAgICBnYXAsXG4gICAgICAgIGluZGVudCxcbiAgICAgICAgbWV0YSA9IHsgICAgLy8gdGFibGUgb2YgY2hhcmFjdGVyIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICAgICdcXGInOiAnXFxcXGInLFxuICAgICAgICAgICAgJ1xcdCc6ICdcXFxcdCcsXG4gICAgICAgICAgICAnXFxuJzogJ1xcXFxuJyxcbiAgICAgICAgICAgICdcXGYnOiAnXFxcXGYnLFxuICAgICAgICAgICAgJ1xccic6ICdcXFxccicsXG4gICAgICAgICAgICAnXCInIDogJ1xcXFxcIicsXG4gICAgICAgICAgICAnXFxcXCc6ICdcXFxcXFxcXCdcbiAgICAgICAgfSxcbiAgICAgICAgcmVwO1xuXG5cbiAgICBmdW5jdGlvbiBxdW90ZShzdHJpbmcpIHtcblxuLy8gSWYgdGhlIHN0cmluZyBjb250YWlucyBubyBjb250cm9sIGNoYXJhY3RlcnMsIG5vIHF1b3RlIGNoYXJhY3RlcnMsIGFuZCBub1xuLy8gYmFja3NsYXNoIGNoYXJhY3RlcnMsIHRoZW4gd2UgY2FuIHNhZmVseSBzbGFwIHNvbWUgcXVvdGVzIGFyb3VuZCBpdC5cbi8vIE90aGVyd2lzZSB3ZSBtdXN0IGFsc28gcmVwbGFjZSB0aGUgb2ZmZW5kaW5nIGNoYXJhY3RlcnMgd2l0aCBzYWZlIGVzY2FwZVxuLy8gc2VxdWVuY2VzLlxuXG4gICAgICAgIGVzY2FwYWJsZS5sYXN0SW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gZXNjYXBhYmxlLnRlc3Qoc3RyaW5nKSA/ICdcIicgKyBzdHJpbmcucmVwbGFjZShlc2NhcGFibGUsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICB2YXIgYyA9IG1ldGFbYV07XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGMgPT09ICdzdHJpbmcnID8gYyA6XG4gICAgICAgICAgICAgICAgJ1xcXFx1JyArICgnMDAwMCcgKyBhLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtNCk7XG4gICAgICAgIH0pICsgJ1wiJyA6ICdcIicgKyBzdHJpbmcgKyAnXCInO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc3RyKGtleSwgaG9sZGVyKSB7XG5cbi8vIFByb2R1Y2UgYSBzdHJpbmcgZnJvbSBob2xkZXJba2V5XS5cblxuICAgICAgICB2YXIgaSwgICAgICAgICAgLy8gVGhlIGxvb3AgY291bnRlci5cbiAgICAgICAgICAgIGssICAgICAgICAgIC8vIFRoZSBtZW1iZXIga2V5LlxuICAgICAgICAgICAgdiwgICAgICAgICAgLy8gVGhlIG1lbWJlciB2YWx1ZS5cbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIG1pbmQgPSBnYXAsXG4gICAgICAgICAgICBwYXJ0aWFsLFxuICAgICAgICAgICAgdmFsdWUgPSBob2xkZXJba2V5XTtcblxuLy8gSWYgdGhlIHZhbHVlIGhhcyBhIHRvSlNPTiBtZXRob2QsIGNhbGwgaXQgdG8gb2J0YWluIGEgcmVwbGFjZW1lbnQgdmFsdWUuXG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSlNPTihrZXkpO1xuICAgICAgICB9XG5cbi8vIElmIHdlIHdlcmUgY2FsbGVkIHdpdGggYSByZXBsYWNlciBmdW5jdGlvbiwgdGhlbiBjYWxsIHRoZSByZXBsYWNlciB0b1xuLy8gb2J0YWluIGEgcmVwbGFjZW1lbnQgdmFsdWUuXG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhbHVlID0gcmVwLmNhbGwoaG9sZGVyLCBrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuXG4vLyBXaGF0IGhhcHBlbnMgbmV4dCBkZXBlbmRzIG9uIHRoZSB2YWx1ZSdzIHR5cGUuXG5cbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHJldHVybiBxdW90ZSh2YWx1ZSk7XG5cbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcblxuLy8gSlNPTiBudW1iZXJzIG11c3QgYmUgZmluaXRlLiBFbmNvZGUgbm9uLWZpbml0ZSBudW1iZXJzIGFzIG51bGwuXG5cbiAgICAgICAgICAgIHJldHVybiBpc0Zpbml0ZSh2YWx1ZSkgPyBTdHJpbmcodmFsdWUpIDogJ251bGwnO1xuXG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBjYXNlICdudWxsJzpcblxuLy8gSWYgdGhlIHZhbHVlIGlzIGEgYm9vbGVhbiBvciBudWxsLCBjb252ZXJ0IGl0IHRvIGEgc3RyaW5nLiBOb3RlOlxuLy8gdHlwZW9mIG51bGwgZG9lcyBub3QgcHJvZHVjZSAnbnVsbCcuIFRoZSBjYXNlIGlzIGluY2x1ZGVkIGhlcmUgaW5cbi8vIHRoZSByZW1vdGUgY2hhbmNlIHRoYXQgdGhpcyBnZXRzIGZpeGVkIHNvbWVkYXkuXG5cbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuXG4vLyBJZiB0aGUgdHlwZSBpcyAnb2JqZWN0Jywgd2UgbWlnaHQgYmUgZGVhbGluZyB3aXRoIGFuIG9iamVjdCBvciBhbiBhcnJheSBvclxuLy8gbnVsbC5cblxuICAgICAgICBjYXNlICdvYmplY3QnOlxuXG4vLyBEdWUgdG8gYSBzcGVjaWZpY2F0aW9uIGJsdW5kZXIgaW4gRUNNQVNjcmlwdCwgdHlwZW9mIG51bGwgaXMgJ29iamVjdCcsXG4vLyBzbyB3YXRjaCBvdXQgZm9yIHRoYXQgY2FzZS5cblxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgICAgICB9XG5cbi8vIE1ha2UgYW4gYXJyYXkgdG8gaG9sZCB0aGUgcGFydGlhbCByZXN1bHRzIG9mIHN0cmluZ2lmeWluZyB0aGlzIG9iamVjdCB2YWx1ZS5cblxuICAgICAgICAgICAgZ2FwICs9IGluZGVudDtcbiAgICAgICAgICAgIHBhcnRpYWwgPSBbXTtcblxuLy8gSXMgdGhlIHZhbHVlIGFuIGFycmF5P1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcblxuLy8gVGhlIHZhbHVlIGlzIGFuIGFycmF5LiBTdHJpbmdpZnkgZXZlcnkgZWxlbWVudC4gVXNlIG51bGwgYXMgYSBwbGFjZWhvbGRlclxuLy8gZm9yIG5vbi1KU09OIHZhbHVlcy5cblxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGlhbFtpXSA9IHN0cihpLCB2YWx1ZSkgfHwgJ251bGwnO1xuICAgICAgICAgICAgICAgIH1cblxuLy8gSm9pbiBhbGwgb2YgdGhlIGVsZW1lbnRzIHRvZ2V0aGVyLCBzZXBhcmF0ZWQgd2l0aCBjb21tYXMsIGFuZCB3cmFwIHRoZW0gaW5cbi8vIGJyYWNrZXRzLlxuXG4gICAgICAgICAgICAgICAgdiA9IHBhcnRpYWwubGVuZ3RoID09PSAwID8gJ1tdJyA6IGdhcCA/XG4gICAgICAgICAgICAgICAgICAgICdbXFxuJyArIGdhcCArIHBhcnRpYWwuam9pbignLFxcbicgKyBnYXApICsgJ1xcbicgKyBtaW5kICsgJ10nIDpcbiAgICAgICAgICAgICAgICAgICAgJ1snICsgcGFydGlhbC5qb2luKCcsJykgKyAnXSc7XG4gICAgICAgICAgICAgICAgZ2FwID0gbWluZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH1cblxuLy8gSWYgdGhlIHJlcGxhY2VyIGlzIGFuIGFycmF5LCB1c2UgaXQgdG8gc2VsZWN0IHRoZSBtZW1iZXJzIHRvIGJlIHN0cmluZ2lmaWVkLlxuXG4gICAgICAgICAgICBpZiAocmVwICYmIHR5cGVvZiByZXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gcmVwLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXBbaV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gcmVwW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHN0cihrLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpYWwucHVzaChxdW90ZShrKSArIChnYXAgPyAnOiAnIDogJzonKSArIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuLy8gT3RoZXJ3aXNlLCBpdGVyYXRlIHRocm91Z2ggYWxsIG9mIHRoZSBrZXlzIGluIHRoZSBvYmplY3QuXG5cbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBzdHIoaywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsLnB1c2gocXVvdGUoaykgKyAoZ2FwID8gJzogJyA6ICc6JykgKyB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuLy8gSm9pbiBhbGwgb2YgdGhlIG1lbWJlciB0ZXh0cyB0b2dldGhlciwgc2VwYXJhdGVkIHdpdGggY29tbWFzLFxuLy8gYW5kIHdyYXAgdGhlbSBpbiBicmFjZXMuXG5cbiAgICAgICAgICAgIHYgPSBwYXJ0aWFsLmxlbmd0aCA9PT0gMCA/ICd7fScgOiBnYXAgP1xuICAgICAgICAgICAgICAgICd7XFxuJyArIGdhcCArIHBhcnRpYWwuam9pbignLFxcbicgKyBnYXApICsgJ1xcbicgKyBtaW5kICsgJ30nIDpcbiAgICAgICAgICAgICAgICAneycgKyBwYXJ0aWFsLmpvaW4oJywnKSArICd9JztcbiAgICAgICAgICAgIGdhcCA9IG1pbmQ7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuICAgIH1cblxuLy8gSWYgdGhlIEpTT04gb2JqZWN0IGRvZXMgbm90IHlldCBoYXZlIGEgc3RyaW5naWZ5IG1ldGhvZCwgZ2l2ZSBpdCBvbmUuXG5cbiAgICBpZiAodHlwZW9mIEpTT04uc3RyaW5naWZ5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIEpTT04uc3RyaW5naWZ5ID0gZnVuY3Rpb24gKHZhbHVlLCByZXBsYWNlciwgc3BhY2UpIHtcblxuLy8gVGhlIHN0cmluZ2lmeSBtZXRob2QgdGFrZXMgYSB2YWx1ZSBhbmQgYW4gb3B0aW9uYWwgcmVwbGFjZXIsIGFuZCBhbiBvcHRpb25hbFxuLy8gc3BhY2UgcGFyYW1ldGVyLCBhbmQgcmV0dXJucyBhIEpTT04gdGV4dC4gVGhlIHJlcGxhY2VyIGNhbiBiZSBhIGZ1bmN0aW9uXG4vLyB0aGF0IGNhbiByZXBsYWNlIHZhbHVlcywgb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncyB0aGF0IHdpbGwgc2VsZWN0IHRoZSBrZXlzLlxuLy8gQSBkZWZhdWx0IHJlcGxhY2VyIG1ldGhvZCBjYW4gYmUgcHJvdmlkZWQuIFVzZSBvZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGNhblxuLy8gcHJvZHVjZSB0ZXh0IHRoYXQgaXMgbW9yZSBlYXNpbHkgcmVhZGFibGUuXG5cbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgZ2FwID0gJyc7XG4gICAgICAgICAgICBpbmRlbnQgPSAnJztcblxuLy8gSWYgdGhlIHNwYWNlIHBhcmFtZXRlciBpcyBhIG51bWJlciwgbWFrZSBhbiBpbmRlbnQgc3RyaW5nIGNvbnRhaW5pbmcgdGhhdFxuLy8gbWFueSBzcGFjZXMuXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BhY2UgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNwYWNlOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50ICs9ICcgJztcbiAgICAgICAgICAgICAgICB9XG5cbi8vIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcsIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgaW5kZW50IHN0cmluZy5cblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaW5kZW50ID0gc3BhY2U7XG4gICAgICAgICAgICB9XG5cbi8vIElmIHRoZXJlIGlzIGEgcmVwbGFjZXIsIGl0IG11c3QgYmUgYSBmdW5jdGlvbiBvciBhbiBhcnJheS5cbi8vIE90aGVyd2lzZSwgdGhyb3cgYW4gZXJyb3IuXG5cbiAgICAgICAgICAgIHJlcCA9IHJlcGxhY2VyO1xuICAgICAgICAgICAgaWYgKHJlcGxhY2VyICYmIHR5cGVvZiByZXBsYWNlciAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgICAgICAgICAodHlwZW9mIHJlcGxhY2VyICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcmVwbGFjZXIubGVuZ3RoICE9PSAnbnVtYmVyJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pTT04uc3RyaW5naWZ5Jyk7XG4gICAgICAgICAgICB9XG5cbi8vIE1ha2UgYSBmYWtlIHJvb3Qgb2JqZWN0IGNvbnRhaW5pbmcgb3VyIHZhbHVlIHVuZGVyIHRoZSBrZXkgb2YgJycuXG4vLyBSZXR1cm4gdGhlIHJlc3VsdCBvZiBzdHJpbmdpZnlpbmcgdGhlIHZhbHVlLlxuXG4gICAgICAgICAgICByZXR1cm4gc3RyKCcnLCB7Jyc6IHZhbHVlfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG5cbi8vIElmIHRoZSBKU09OIG9iamVjdCBkb2VzIG5vdCB5ZXQgaGF2ZSBhIHBhcnNlIG1ldGhvZCwgZ2l2ZSBpdCBvbmUuXG5cbiAgICBpZiAodHlwZW9mIEpTT04ucGFyc2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgSlNPTi5wYXJzZSA9IGZ1bmN0aW9uICh0ZXh0LCByZXZpdmVyKSB7XG5cbi8vIFRoZSBwYXJzZSBtZXRob2QgdGFrZXMgYSB0ZXh0IGFuZCBhbiBvcHRpb25hbCByZXZpdmVyIGZ1bmN0aW9uLCBhbmQgcmV0dXJuc1xuLy8gYSBKYXZhU2NyaXB0IHZhbHVlIGlmIHRoZSB0ZXh0IGlzIGEgdmFsaWQgSlNPTiB0ZXh0LlxuXG4gICAgICAgICAgICB2YXIgajtcblxuICAgICAgICAgICAgZnVuY3Rpb24gd2Fsayhob2xkZXIsIGtleSkge1xuXG4vLyBUaGUgd2FsayBtZXRob2QgaXMgdXNlZCB0byByZWN1cnNpdmVseSB3YWxrIHRoZSByZXN1bHRpbmcgc3RydWN0dXJlIHNvXG4vLyB0aGF0IG1vZGlmaWNhdGlvbnMgY2FuIGJlIG1hZGUuXG5cbiAgICAgICAgICAgICAgICB2YXIgaywgdiwgdmFsdWUgPSBob2xkZXJba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHdhbGsodmFsdWUsIGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVba10gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldml2ZXIuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuXG5cbi8vIFBhcnNpbmcgaGFwcGVucyBpbiBmb3VyIHN0YWdlcy4gSW4gdGhlIGZpcnN0IHN0YWdlLCB3ZSByZXBsYWNlIGNlcnRhaW5cbi8vIFVuaWNvZGUgY2hhcmFjdGVycyB3aXRoIGVzY2FwZSBzZXF1ZW5jZXMuIEphdmFTY3JpcHQgaGFuZGxlcyBtYW55IGNoYXJhY3RlcnNcbi8vIGluY29ycmVjdGx5LCBlaXRoZXIgc2lsZW50bHkgZGVsZXRpbmcgdGhlbSwgb3IgdHJlYXRpbmcgdGhlbSBhcyBsaW5lIGVuZGluZ3MuXG5cbiAgICAgICAgICAgIHRleHQgPSBTdHJpbmcodGV4dCk7XG4gICAgICAgICAgICBjeC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgaWYgKGN4LnRlc3QodGV4dCkpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKGN4LCBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1xcXFx1JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAoJzAwMDAnICsgYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4vLyBJbiB0aGUgc2Vjb25kIHN0YWdlLCB3ZSBydW4gdGhlIHRleHQgYWdhaW5zdCByZWd1bGFyIGV4cHJlc3Npb25zIHRoYXQgbG9va1xuLy8gZm9yIG5vbi1KU09OIHBhdHRlcm5zLiBXZSBhcmUgZXNwZWNpYWxseSBjb25jZXJuZWQgd2l0aCAnKCknIGFuZCAnbmV3J1xuLy8gYmVjYXVzZSB0aGV5IGNhbiBjYXVzZSBpbnZvY2F0aW9uLCBhbmQgJz0nIGJlY2F1c2UgaXQgY2FuIGNhdXNlIG11dGF0aW9uLlxuLy8gQnV0IGp1c3QgdG8gYmUgc2FmZSwgd2Ugd2FudCB0byByZWplY3QgYWxsIHVuZXhwZWN0ZWQgZm9ybXMuXG5cbi8vIFdlIHNwbGl0IHRoZSBzZWNvbmQgc3RhZ2UgaW50byA0IHJlZ2V4cCBvcGVyYXRpb25zIGluIG9yZGVyIHRvIHdvcmsgYXJvdW5kXG4vLyBjcmlwcGxpbmcgaW5lZmZpY2llbmNpZXMgaW4gSUUncyBhbmQgU2FmYXJpJ3MgcmVnZXhwIGVuZ2luZXMuIEZpcnN0IHdlXG4vLyByZXBsYWNlIHRoZSBKU09OIGJhY2tzbGFzaCBwYWlycyB3aXRoICdAJyAoYSBub24tSlNPTiBjaGFyYWN0ZXIpLiBTZWNvbmQsIHdlXG4vLyByZXBsYWNlIGFsbCBzaW1wbGUgdmFsdWUgdG9rZW5zIHdpdGggJ10nIGNoYXJhY3RlcnMuIFRoaXJkLCB3ZSBkZWxldGUgYWxsXG4vLyBvcGVuIGJyYWNrZXRzIHRoYXQgZm9sbG93IGEgY29sb24gb3IgY29tbWEgb3IgdGhhdCBiZWdpbiB0aGUgdGV4dC4gRmluYWxseSxcbi8vIHdlIGxvb2sgdG8gc2VlIHRoYXQgdGhlIHJlbWFpbmluZyBjaGFyYWN0ZXJzIGFyZSBvbmx5IHdoaXRlc3BhY2Ugb3IgJ10nIG9yXG4vLyAnLCcgb3IgJzonIG9yICd7JyBvciAnfScuIElmIHRoYXQgaXMgc28sIHRoZW4gdGhlIHRleHQgaXMgc2FmZSBmb3IgZXZhbC5cblxuICAgICAgICAgICAgaWYgKC9eW1xcXSw6e31cXHNdKiQvXG4gICAgICAgICAgICAgICAgICAgIC50ZXN0KHRleHQucmVwbGFjZSgvXFxcXCg/OltcIlxcXFxcXC9iZm5ydF18dVswLTlhLWZBLUZdezR9KS9nLCAnQCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXCJbXlwiXFxcXFxcblxccl0qXCJ8dHJ1ZXxmYWxzZXxudWxsfC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/L2csICddJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oPzpefDp8LCkoPzpcXHMqXFxbKSsvZywgJycpKSkge1xuXG4vLyBJbiB0aGUgdGhpcmQgc3RhZ2Ugd2UgdXNlIHRoZSBldmFsIGZ1bmN0aW9uIHRvIGNvbXBpbGUgdGhlIHRleHQgaW50byBhXG4vLyBKYXZhU2NyaXB0IHN0cnVjdHVyZS4gVGhlICd7JyBvcGVyYXRvciBpcyBzdWJqZWN0IHRvIGEgc3ludGFjdGljIGFtYmlndWl0eVxuLy8gaW4gSmF2YVNjcmlwdDogaXQgY2FuIGJlZ2luIGEgYmxvY2sgb3IgYW4gb2JqZWN0IGxpdGVyYWwuIFdlIHdyYXAgdGhlIHRleHRcbi8vIGluIHBhcmVucyB0byBlbGltaW5hdGUgdGhlIGFtYmlndWl0eS5cblxuICAgICAgICAgICAgICAgIGogPSBldmFsKCcoJyArIHRleHQgKyAnKScpO1xuXG4vLyBJbiB0aGUgb3B0aW9uYWwgZm91cnRoIHN0YWdlLCB3ZSByZWN1cnNpdmVseSB3YWxrIHRoZSBuZXcgc3RydWN0dXJlLCBwYXNzaW5nXG4vLyBlYWNoIG5hbWUvdmFsdWUgcGFpciB0byBhIHJldml2ZXIgZnVuY3Rpb24gZm9yIHBvc3NpYmxlIHRyYW5zZm9ybWF0aW9uLlxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiByZXZpdmVyID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgICAgICAgICAgd2Fsayh7Jyc6IGp9LCAnJykgOiBqO1xuICAgICAgICAgICAgfVxuXG4vLyBJZiB0aGUgdGV4dCBpcyBub3QgSlNPTiBwYXJzZWFibGUsIHRoZW4gYSBTeW50YXhFcnJvciBpcyB0aHJvd24uXG5cbiAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignSlNPTi5wYXJzZScpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdsb2JhbC5KU09OID0gSlNPTjtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEpTT047XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19KU09OQDEuMC4wQEpTT04vanNvbjIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL19KU09OQDEuMC4wQEpTT04vanNvbjIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsInZhciBjaGFyZW5jID0ge1xuICAvLyBVVEYtOCBlbmNvZGluZ1xuICB1dGY4OiB7XG4gICAgLy8gQ29udmVydCBhIHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBzdHJpbmdUb0J5dGVzOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBjaGFyZW5jLmJpbi5zdHJpbmdUb0J5dGVzKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgc3RyaW5nXG4gICAgYnl0ZXNUb1N0cmluZzogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGNoYXJlbmMuYmluLmJ5dGVzVG9TdHJpbmcoYnl0ZXMpKSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEJpbmFyeSBlbmNvZGluZ1xuICBiaW46IHtcbiAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIHN0cmluZ1RvQnl0ZXM6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspXG4gICAgICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBzdHJpbmdcbiAgICBieXRlc1RvU3RyaW5nOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgc3RyID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHN0ci5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pKTtcbiAgICAgIHJldHVybiBzdHIuam9pbignJyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNoYXJlbmM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vX2NoYXJlbmNAMC4wLjJAY2hhcmVuYy9jaGFyZW5jLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9fY2hhcmVuY0AwLjAuMkBjaGFyZW5jL2NoYXJlbmMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIihmdW5jdGlvbigpIHtcbiAgdmFyIGJhc2U2NG1hcFxuICAgICAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLycsXG5cbiAgY3J5cHQgPSB7XG4gICAgLy8gQml0LXdpc2Ugcm90YXRpb24gbGVmdFxuICAgIHJvdGw6IGZ1bmN0aW9uKG4sIGIpIHtcbiAgICAgIHJldHVybiAobiA8PCBiKSB8IChuID4+PiAoMzIgLSBiKSk7XG4gICAgfSxcblxuICAgIC8vIEJpdC13aXNlIHJvdGF0aW9uIHJpZ2h0XG4gICAgcm90cjogZnVuY3Rpb24obiwgYikge1xuICAgICAgcmV0dXJuIChuIDw8ICgzMiAtIGIpKSB8IChuID4+PiBiKTtcbiAgICB9LFxuXG4gICAgLy8gU3dhcCBiaWctZW5kaWFuIHRvIGxpdHRsZS1lbmRpYW4gYW5kIHZpY2UgdmVyc2FcbiAgICBlbmRpYW46IGZ1bmN0aW9uKG4pIHtcbiAgICAgIC8vIElmIG51bWJlciBnaXZlbiwgc3dhcCBlbmRpYW5cbiAgICAgIGlmIChuLmNvbnN0cnVjdG9yID09IE51bWJlcikge1xuICAgICAgICByZXR1cm4gY3J5cHQucm90bChuLCA4KSAmIDB4MDBGRjAwRkYgfCBjcnlwdC5yb3RsKG4sIDI0KSAmIDB4RkYwMEZGMDA7XG4gICAgICB9XG5cbiAgICAgIC8vIEVsc2UsIGFzc3VtZSBhcnJheSBhbmQgc3dhcCBhbGwgaXRlbXNcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbi5sZW5ndGg7IGkrKylcbiAgICAgICAgbltpXSA9IGNyeXB0LmVuZGlhbihuW2ldKTtcbiAgICAgIHJldHVybiBuO1xuICAgIH0sXG5cbiAgICAvLyBHZW5lcmF0ZSBhbiBhcnJheSBvZiBhbnkgbGVuZ3RoIG9mIHJhbmRvbSBieXRlc1xuICAgIHJhbmRvbUJ5dGVzOiBmdW5jdGlvbihuKSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdOyBuID4gMDsgbi0tKVxuICAgICAgICBieXRlcy5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBiaWctZW5kaWFuIDMyLWJpdCB3b3Jkc1xuICAgIGJ5dGVzVG9Xb3JkczogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIHdvcmRzID0gW10sIGkgPSAwLCBiID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrLCBiICs9IDgpXG4gICAgICAgIHdvcmRzW2IgPj4+IDVdIHw9IGJ5dGVzW2ldIDw8ICgyNCAtIGIgJSAzMik7XG4gICAgICByZXR1cm4gd29yZHM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYmlnLWVuZGlhbiAzMi1iaXQgd29yZHMgdG8gYSBieXRlIGFycmF5XG4gICAgd29yZHNUb0J5dGVzOiBmdW5jdGlvbih3b3Jkcykge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgYiA9IDA7IGIgPCB3b3Jkcy5sZW5ndGggKiAzMjsgYiArPSA4KVxuICAgICAgICBieXRlcy5wdXNoKCh3b3Jkc1tiID4+PiA1XSA+Pj4gKDI0IC0gYiAlIDMyKSkgJiAweEZGKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBoZXggc3RyaW5nXG4gICAgYnl0ZXNUb0hleDogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIGhleCA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhleC5wdXNoKChieXRlc1tpXSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcbiAgICAgICAgaGV4LnB1c2goKGJ5dGVzW2ldICYgMHhGKS50b1N0cmluZygxNikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhleC5qb2luKCcnKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGhleCBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgaGV4VG9CeXRlczogZnVuY3Rpb24oaGV4KSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBjID0gMDsgYyA8IGhleC5sZW5ndGg7IGMgKz0gMilcbiAgICAgICAgYnl0ZXMucHVzaChwYXJzZUludChoZXguc3Vic3RyKGMsIDIpLCAxNikpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIGJhc2UtNjQgc3RyaW5nXG4gICAgYnl0ZXNUb0Jhc2U2NDogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIGJhc2U2NCA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIHZhciB0cmlwbGV0ID0gKGJ5dGVzW2ldIDw8IDE2KSB8IChieXRlc1tpICsgMV0gPDwgOCkgfCBieXRlc1tpICsgMl07XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKVxuICAgICAgICAgIGlmIChpICogOCArIGogKiA2IDw9IGJ5dGVzLmxlbmd0aCAqIDgpXG4gICAgICAgICAgICBiYXNlNjQucHVzaChiYXNlNjRtYXAuY2hhckF0KCh0cmlwbGV0ID4+PiA2ICogKDMgLSBqKSkgJiAweDNGKSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgYmFzZTY0LnB1c2goJz0nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYXNlNjQuam9pbignJyk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBiYXNlLTY0IHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBiYXNlNjRUb0J5dGVzOiBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICAgIC8vIFJlbW92ZSBub24tYmFzZS02NCBjaGFyYWN0ZXJzXG4gICAgICBiYXNlNjQgPSBiYXNlNjQucmVwbGFjZSgvW15BLVowLTkrXFwvXS9pZywgJycpO1xuXG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBpID0gMCwgaW1vZDQgPSAwOyBpIDwgYmFzZTY0Lmxlbmd0aDtcbiAgICAgICAgICBpbW9kNCA9ICsraSAlIDQpIHtcbiAgICAgICAgaWYgKGltb2Q0ID09IDApIGNvbnRpbnVlO1xuICAgICAgICBieXRlcy5wdXNoKCgoYmFzZTY0bWFwLmluZGV4T2YoYmFzZTY0LmNoYXJBdChpIC0gMSkpXG4gICAgICAgICAgICAmIChNYXRoLnBvdygyLCAtMiAqIGltb2Q0ICsgOCkgLSAxKSkgPDwgKGltb2Q0ICogMikpXG4gICAgICAgICAgICB8IChiYXNlNjRtYXAuaW5kZXhPZihiYXNlNjQuY2hhckF0KGkpKSA+Pj4gKDYgLSBpbW9kNCAqIDIpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gY3J5cHQ7XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19jcnlwdEAwLjAuMkBjcnlwdC9jcnlwdC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvX2NyeXB0QDAuMC4yQGNyeXB0L2NyeXB0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9faXMtYnVmZmVyQDEuMS42QGlzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvX2lzLWJ1ZmZlckAxLjEuNkBpcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIihmdW5jdGlvbigpe1xyXG4gIHZhciBjcnlwdCA9IHJlcXVpcmUoJ2NyeXB0JyksXHJcbiAgICAgIHV0ZjggPSByZXF1aXJlKCdjaGFyZW5jJykudXRmOCxcclxuICAgICAgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKSxcclxuICAgICAgYmluID0gcmVxdWlyZSgnY2hhcmVuYycpLmJpbixcclxuXHJcbiAgLy8gVGhlIGNvcmVcclxuICBtZDUgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgLy8gQ29udmVydCB0byBieXRlIGFycmF5XHJcbiAgICBpZiAobWVzc2FnZS5jb25zdHJ1Y3RvciA9PSBTdHJpbmcpXHJcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RpbmcgPT09ICdiaW5hcnknKVxyXG4gICAgICAgIG1lc3NhZ2UgPSBiaW4uc3RyaW5nVG9CeXRlcyhtZXNzYWdlKTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIG1lc3NhZ2UgPSB1dGY4LnN0cmluZ1RvQnl0ZXMobWVzc2FnZSk7XHJcbiAgICBlbHNlIGlmIChpc0J1ZmZlcihtZXNzYWdlKSlcclxuICAgICAgbWVzc2FnZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG1lc3NhZ2UsIDApO1xyXG4gICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZSkpXHJcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnRvU3RyaW5nKCk7XHJcbiAgICAvLyBlbHNlLCBhc3N1bWUgYnl0ZSBhcnJheSBhbHJlYWR5XHJcblxyXG4gICAgdmFyIG0gPSBjcnlwdC5ieXRlc1RvV29yZHMobWVzc2FnZSksXHJcbiAgICAgICAgbCA9IG1lc3NhZ2UubGVuZ3RoICogOCxcclxuICAgICAgICBhID0gIDE3MzI1ODQxOTMsXHJcbiAgICAgICAgYiA9IC0yNzE3MzM4NzksXHJcbiAgICAgICAgYyA9IC0xNzMyNTg0MTk0LFxyXG4gICAgICAgIGQgPSAgMjcxNzMzODc4O1xyXG5cclxuICAgIC8vIFN3YXAgZW5kaWFuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbVtpXSA9ICgobVtpXSA8PCAgOCkgfCAobVtpXSA+Pj4gMjQpKSAmIDB4MDBGRjAwRkYgfFxyXG4gICAgICAgICAgICAgKChtW2ldIDw8IDI0KSB8IChtW2ldID4+PiAgOCkpICYgMHhGRjAwRkYwMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYWRkaW5nXHJcbiAgICBtW2wgPj4+IDVdIHw9IDB4ODAgPDwgKGwgJSAzMik7XHJcbiAgICBtWygoKGwgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gbDtcclxuXHJcbiAgICAvLyBNZXRob2Qgc2hvcnRjdXRzXHJcbiAgICB2YXIgRkYgPSBtZDUuX2ZmLFxyXG4gICAgICAgIEdHID0gbWQ1Ll9nZyxcclxuICAgICAgICBISCA9IG1kNS5faGgsXHJcbiAgICAgICAgSUkgPSBtZDUuX2lpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5sZW5ndGg7IGkgKz0gMTYpIHtcclxuXHJcbiAgICAgIHZhciBhYSA9IGEsXHJcbiAgICAgICAgICBiYiA9IGIsXHJcbiAgICAgICAgICBjYyA9IGMsXHJcbiAgICAgICAgICBkZCA9IGQ7XHJcblxyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKyAwXSwgIDcsIC02ODA4NzY5MzYpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKyAyXSwgMTcsICA2MDYxMDU4MTkpO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsgNF0sICA3LCAtMTc2NDE4ODk3KTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsgNV0sIDEyLCAgMTIwMDA4MDQyNik7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKyA3XSwgMjIsIC00NTcwNTk4Myk7XHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krIDhdLCAgNywgIDE3NzAwMzU0MTYpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsxMF0sIDE3LCAtNDIwNjMpO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKzExXSwgMjIsIC0xOTkwNDA0MTYyKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsxMl0sICA3LCAgMTgwNDYwMzY4Mik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krMTNdLCAxMiwgLTQwMzQxMTAxKTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krMTVdLCAyMiwgIDEyMzY1MzUzMjkpO1xyXG5cclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgMV0sICA1LCAtMTY1Nzk2NTEwKTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsgNl0sICA5LCAtMTA2OTUwMTYzMik7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krMTFdLCAxNCwgIDY0MzcxNzcxMyk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krIDBdLCAyMCwgLTM3Mzg5NzMwMik7XHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krIDVdLCAgNSwgLTcwMTU1ODY5MSk7XHJcbiAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBtW2krMTBdLCAgOSwgIDM4MDE2MDgzKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsxNV0sIDE0LCAtNjYwNDc4MzM1KTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgOV0sICA1LCAgNTY4NDQ2NDM4KTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsxNF0sICA5LCAtMTAxOTgwMzY5MCk7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krIDhdLCAyMCwgIDExNjM1MzE1MDEpO1xyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKzEzXSwgIDUsIC0xNDQ0NjgxNDY3KTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsgMl0sICA5LCAtNTE0MDM3ODQpO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKyA3XSwgMTQsICAxNzM1MzI4NDczKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsxMl0sIDIwLCAtMTkyNjYwNzczNCk7XHJcblxyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyA1XSwgIDQsIC0zNzg1NTgpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsxMV0sIDE2LCAgMTgzOTAzMDU2Mik7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krMTRdLCAyMywgLTM1MzA5NTU2KTtcclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsgMV0sICA0LCAtMTUzMDk5MjA2MCk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krIDRdLCAxMSwgIDEyNzI4OTMzNTMpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKzEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsxM10sICA0LCAgNjgxMjc5MTc0KTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsgMF0sIDExLCAtMzU4NTM3MjIyKTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsgM10sIDE2LCAtNzIyNTIxOTc5KTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsgNl0sIDIzLCAgNzYwMjkxODkpO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyA5XSwgIDQsIC02NDAzNjQ0ODcpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKzEyXSwgMTEsIC00MjE4MTU4MzUpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKzE1XSwgMTYsICA1MzA3NDI1MjApO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xyXG5cclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsgMF0sICA2LCAtMTk4NjMwODQ0KTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsgN10sIDEwLCAgMTEyNjg5MTQxNSk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKyA1XSwgMjEsIC01NzQzNDA1NSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krMTJdLCAgNiwgIDE3MDA0ODU1NzEpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsxMF0sIDE1LCAtMTA1MTUyMyk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKyA4XSwgIDYsICAxODczMzEzMzU5KTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsxNV0sIDEwLCAtMzA2MTE3NDQpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsxM10sIDIxLCAgMTMwOTE1MTY0OSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krIDRdLCAgNiwgLTE0NTUyMzA3MCk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKyAyXSwgMTUsICA3MTg3ODcyNTkpO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xyXG5cclxuICAgICAgYSA9IChhICsgYWEpID4+PiAwO1xyXG4gICAgICBiID0gKGIgKyBiYikgPj4+IDA7XHJcbiAgICAgIGMgPSAoYyArIGNjKSA+Pj4gMDtcclxuICAgICAgZCA9IChkICsgZGQpID4+PiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjcnlwdC5lbmRpYW4oW2EsIGIsIGMsIGRdKTtcclxuICB9O1xyXG5cclxuICAvLyBBdXhpbGlhcnkgZnVuY3Rpb25zXHJcbiAgbWQ1Ll9mZiAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGIgJiBjIHwgfmIgJiBkKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9nZyAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGIgJiBkIHwgYyAmIH5kKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9oaCAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGIgXiBjIF4gZCkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG4gIG1kNS5faWkgID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuICAgIHZhciBuID0gYSArIChjIF4gKGIgfCB+ZCkpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuXHJcbiAgLy8gUGFja2FnZSBwcml2YXRlIGJsb2Nrc2l6ZVxyXG4gIG1kNS5fYmxvY2tzaXplID0gMTY7XHJcbiAgbWQ1Ll9kaWdlc3RzaXplID0gMTY7XHJcblxyXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuICAgIGlmIChtZXNzYWdlID09PSB1bmRlZmluZWQgfHwgbWVzc2FnZSA9PT0gbnVsbClcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGFyZ3VtZW50ICcgKyBtZXNzYWdlKTtcclxuXHJcbiAgICB2YXIgZGlnZXN0Ynl0ZXMgPSBjcnlwdC53b3Jkc1RvQnl0ZXMobWQ1KG1lc3NhZ2UsIG9wdGlvbnMpKTtcclxuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuYXNCeXRlcyA/IGRpZ2VzdGJ5dGVzIDpcclxuICAgICAgICBvcHRpb25zICYmIG9wdGlvbnMuYXNTdHJpbmcgPyBiaW4uYnl0ZXNUb1N0cmluZyhkaWdlc3RieXRlcykgOlxyXG4gICAgICAgIGNyeXB0LmJ5dGVzVG9IZXgoZGlnZXN0Ynl0ZXMpO1xyXG4gIH07XHJcblxyXG59KSgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vX21kNUAyLjIuMUBtZDUvbWQ1LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9fbWQ1QDIuMi4xQG1kNS9tZDUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsImltcG9ydCB7c2hvd0NoaWxkTG9ja30gZnJvbSAnLi9hcHAvY2hpbGRMb2NrJztcclxuaW1wb3J0IHtjaGlsZE1lbnV9IGZyb20gJy4vYXBwL2NoaWxkTWVudSc7XHJcblxyXG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gXCIuL2FwcC9kaWFsb2dcIjtcclxuaW1wb3J0IHtzaG93TG9hZGluZyxoaWRlTG9hZGluZ30gZnJvbSBcIi4vYXBwL2xvYWRpbmdcIjtcclxuaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5pbXBvcnQge2FwcEFyZ3N9IGZyb20gJy4vYXBwL1BhZ2VBcmdzJztcclxuXHJcblxyXG52YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbnZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZU1lbnUoKSB7XHJcbiAgICB0aGlzLmxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmxheW91dCk7XHJcbiAgICB0aGlzLmxheW91dC5jbGFzc05hbWUgPSAnaG9tZS1tZW51JztcclxuICAgIHRoaXMubGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgJzxkaXYgaWQ9XCJtZW51LWJ0bjBcIiBjbGFzcz1cIm1lbnUtYnRuXCI+PGltZyBzcmM9XCJcIj48L2Rpdj4nICtcclxuICAgICAgICAnPGRpdiBpZD1cIm1lbnUtYnRuMVwiIGNsYXNzPVwibWVudS1idG5cIj48aW1nIHNyYz1cIlwiPjwvZGl2PicgK1xyXG4gICAgICAgICc8ZGl2IGlkPVwibWVudS1idG4yXCIgY2xhc3M9XCJtZW51LWJ0blwiPjxpbWcgc3JjPVwiXCI+PC9kaXY+JyArXHJcbiAgICAgICAgJzxkaXYgaWQ9XCJtZW51LWJ0bjNcIiBjbGFzcz1cIm1lbnUtYnRuXCI+PGltZyBzcmM9XCJcIj48L2Rpdj4nK1xyXG4gICAgICAgICc8ZGl2IGlkPVwibWVudS1idG40XCIgY2xhc3M9XCJtZW51LWJ0blwiPjxpbWcgc3JjPVwiXCI+PC9kaXY+JztcclxuICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgKytpKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmxheW91dC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idG4nICsgaSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICAvL3NldFRpbWVvdXQoZnVuY3Rpb24gKGksIG5vZGUpIHtcclxuICAgICAgICB2YXIgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICBpbWcuc3JjID0gJ2ltZy9tZW51L25hdl8nICsgaSArICdfMC5wbmcnO1xyXG4gICAgICAgIC8vfSwgMTAwICogaSwgaSwgbm9kZSk7XHJcbiAgICB9XHJcbn1cclxuSG9tZU1lbnUucHJvdG90eXBlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiB7aW50fSBjdXJyZW50IFswLDNdXHJcbiAgICAgKi9cclxuICAgIGN1cnJlbnQ6IDAsXHJcbiAgICBvbktleURvd246IG51bGwsXHJcbiAgICB0ZGVVc2VyOiBudWxsLFxyXG5cclxuICAgIHNob3c6IGZ1bmN0aW9uIChjdXJyZW50LCBvbktleURvd24sIHRkZVVzZXIpIHtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gb25LZXlEb3duO1xyXG4gICAgICAgIHRoaXMudGRlVXNlciA9IHRkZVVzZXI7XHJcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcztcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBvd25lci5oYW5kbGVLZXkoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zZXRGb2N1cyh0aGlzLmN1cnJlbnQsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfc2V0Rm9jdXM6IGZ1bmN0aW9uIChjdXJyZW50LCBmb2N1cykge1xyXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5pdGVtc1tjdXJyZW50XTtcclxuICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGZvY3VzID8gJ21lbnUtYnRuLWZvY3VzJyA6ICdtZW51LWJ0bic7XHJcbiAgICAgICAgdmFyIGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgaWYgKGZvY3VzKSB7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSAnaW1nL21lbnUvbmF2XycgKyBjdXJyZW50ICsgJ18xLnBuZyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW1nLnNyYyA9ICdpbWcvbWVudS9uYXZfJyArIGN1cnJlbnQgKyAnXzAucG5nJztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0U2VsZWN0ZWQ6IGZ1bmN0aW9uIChjdXJyZW50KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEZvY3VzKGksIGN1cnJlbnQgPT0gaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUtleTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQtLTtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA8IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm9rOlxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLmN1cnJlbnQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcEFyZ3Mub25GaXJzdFBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBBcmdzLm9uSG9tZVBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50ID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3duZXIudGRlVXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkTG9jayA9IG93bmVyLnRkZVVzZXIuY2hpbGRMb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkTG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRNZW51LnNob3coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG4gPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2hpbGRMb2NrKGZ1bmN0aW9uIChjb2RlLCBtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWRMb2NrKGNvZGUsIG1zZywgb3duZXIsIGJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEsIDAsICfor7fovpPlhaXml6fnmoQ25L2N5pWw5a2X5a+G56CB77yM5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIsIDAsICfpgInmi6npnIDopoHnmoTmk43kvZzmjInnoa7lrprplK7ov5vooYzkuIvkuIDmraXvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE1lbnUuc2hvdyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lvIDlkK/nq6XplIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRDaGlsZExvY2sob3duZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb3duZXIub25LZXlEb3duLCBvd25lci50ZGVVc2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxLCAwLCAn5byA5ZCv56ul6ZSB5ZCO77yM5q+P5qyh5LuY6LS56K6i6LSt6ZyA6L6T5YWl5q2j56Gu5a+G56CB77yb5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA9PSA0KXtcclxuICAgICAgICAgICAgICAgICAgICBhcHBBcmdzLm9uVHVybnRhYmxlUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5lc2M6XHJcbiAgICAgICAgICAgICAgICBhcHBBcmdzLm9uRmlyc3RQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Yob3duZXIub25LZXlEb3duKSA9PT0gJ2Z1bmN0aW9uJykgb3duZXIub25LZXlEb3duKGN1cktleSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIGNvZGUge2ludH1cclxuICogQHBhcmFtIG1zZyB7c3RyaW5nfVxyXG4gKiBAcGFyYW0gb3duZXIge0hvbWVNZW51fVxyXG4gKiBAcGFyYW0gYnRuIHtpbnR9IDAu5YWz6Zet56ul6ZSBIDEu5pu05pS55a+G56CBXHJcbiAqL1xyXG5mdW5jdGlvbiBvblZhbGlkTG9jayhjb2RlLCBtc2csIG93bmVyLCBidG4pIHtcclxuICAgIGlmIChjb2RlID09IDApIHtcclxuICAgICAgICB2YXIgb2xkTG9jayA9IG93bmVyLnRkZVVzZXIuY2hpbGRMb2NrO1xyXG4gICAgICAgIGlmIChtc2cgPT0gb2xkTG9jaykge1xyXG4gICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGJjbGkgPSBvd25lci50ZGVVc2VyLnN0YmNsaTtcclxuICAgICAgICAgICAgICAgIHN0YmNsaS50ZGVMb2NrKG9sZExvY2ssICcnLCBmdW5jdGlvbiAoY29kZSwgYml6KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSAn56ul6ZSB5YWz6Zet5oiQ5YqfJztcclxuICAgICAgICAgICAgICAgICAgICBvblRkZUxvY2soY29kZSwgYml6LCBvd25lciwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc2V0Q2hpbGRMb2NrKG93bmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGRsZ0J0bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRsZ0J0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NoaWxkTG9jayhmdW5jdGlvbiAoY29kZSwgbXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWRMb2NrKGNvZGUsIG1zZywgb3duZXIsIGJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMSwgMCwgJ+ivt+i+k+WFpeaXp+eahDbkvY3mlbDlrZflr4bnoIHvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwLCAn5o+Q56S6JywgJ+erpemUgemqjOivgeWHuumUmScsICfph43or5UnLCAn5Y+W5raIJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG93bmVyLm9uS2V5RG93biwgb3duZXIudGRlVXNlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Q2hpbGRMb2NrKG93bmVyKSB7XHJcbiAgICB2YXIgb2xkTG9jayA9IG93bmVyLnRkZVVzZXIuY2hpbGRMb2NrO1xyXG4gICAgdmFyIG5ld0xvY2s7XHJcbiAgICBzaG93Q2hpbGRMb2NrKGZ1bmN0aW9uIChjb2RlLCBtc2cpIHtcclxuICAgICAgICBpZiAoY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIG5ld0xvY2sgPSBtc2c7XHJcbiAgICAgICAgICAgIHNob3dDaGlsZExvY2soZnVuY3Rpb24gKGNvZGUsIG1zZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cgIT0gbmV3TG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Q2hpbGRMb2NrKG93bmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwLCAn5o+Q56S6JywgJ+S4pOasoei+k+WFpeS4jeWQjCcsICfph43or5UnLCAn5Y+W5raIJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YmNsaSA9IG93bmVyLnRkZVVzZXIuc3RiY2xpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGJjbGkudGRlTG9jayhvbGRMb2NrLCBuZXdMb2NrLCBmdW5jdGlvbiAoY29kZSwgYml6KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG9sZExvY2sgPyAn56ul6ZSB5pu05pS55oiQ5YqfJyA6ICfnq6XplIHlvIDlkK/miJDlip8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25UZGVMb2NrKGNvZGUsIGJpeiwgb3duZXIsIHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb3duZXIub25LZXlEb3duLCBvd25lci50ZGVVc2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCwgMSwgJ+ivt+WGjeasoei+k+WFpeaWsOeahDbkvY3mlbDlrZflr4bnoIHvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG93bmVyLm9uS2V5RG93biwgb3duZXIudGRlVXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgMCwgMCwgJ+ivt+i+k+WFpeaWsOeahDbkvY3mlbDlrZflr4bnoIHvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25UZGVMb2NrKGNvZGUsIGJpeiwgb3duZXIpIHtcclxuICAgIHZhciB0ZXh0ID0gYXJndW1lbnRzWzNdID8gYXJndW1lbnRzWzNdIDogJ+erpemUgeiuvue9ruaIkOWKnyc7XHJcbiAgICBpZiAoY29kZSA9PSAwKSB7XHJcbiAgICAgICAgb3duZXIudGRlVXNlci5jaGlsZExvY2sgPSBiaXouY2hpbGRMb2NrO1xyXG4gICAgICAgIHNob3dMb2FkaW5nKCfmj5DnpLonLCB0ZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd0xvYWRpbmcoJ+aPkOekuicgKyAnWycgKyBjb2RlICsgJ10nLCAn572R57uc5byC5bi4JyArICdbJyArIGJpeiArICddJyk7XHJcbiAgICB9XHJcbiAgICBoaWRlTG9hZGluZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgfSwgMjAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7SG9tZU1lbnV9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9Ib21lTWVudS5qcyIsImltcG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfSBmcm9tIFwiLi90b29kby9fa2V5Y29kZXNcIjtcclxuXHJcblxyXG52YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbnZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcblxyXG52YXIgaXRlbVNpemUgPSBbXHJcbiAgICBbMTgzLCAxNzZdLC8vMFxyXG4gICAgWzE4MywgMTc2XSxcclxuICAgIFsxOTQsIDM3MF0sXHJcbiAgICBbMzEzLCAxNzZdLFxyXG4gICAgWzE0NywgMTc2XSxcclxuICAgIFsxNDcsIDE3Nl0sLy81XHJcbiAgICBbMTgzLCAxNzZdLFxyXG4gICAgWzE4MywgMTc2XSxcclxuICAgIFsxOTQsIDM3MF0sXHJcbiAgICBbMTU5LCAxMjNdLFxyXG4gICAgWzE1OSwyMzBdLC8vMTBcclxuICAgIFsyMTMsMzcwXSxcclxuICAgIFszMzAsMTc2XSxcclxuICAgIFsxNTUsMTc3XSxcclxuICAgIFsxNTYsMTc3XSxcclxuICAgIFsxODIsMTc2XSwvLzE1XHJcbiAgICBbMTgyLDE3Nl0sXHJcbiAgICBbMTgyLDE3Nl0sXHJcbiAgICBbMTgyLDE3Nl0vLzE4XHJcbl07XHJcbnZhciBwYWdlU2l6ZSA9IGl0ZW1TaXplLmxlbmd0aDtcclxuXHJcbmZ1bmN0aW9uIEphdmEyMFBhZ2UoKSB7XHJcbiAgICB0aGlzLmxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqYXZhMjAtcGFnZScpO1xyXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlU2l6ZTsgKytpKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmxheW91dC5xdWVyeVNlbGVjdG9yKCcjamF2YTIwLWl0ZW0nICsgaSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5vZGUpO1xyXG4gICAgfVxyXG59XHJcbkphdmEyMFBhZ2UucHJvdG90eXBlID0ge1xyXG4gICAgaXRlbUluZm9zOiBbXSxcclxuICAgIHBhZ2U6IDAsXHJcbiAgICBwYWdlSW5kZXg6IDAsXHJcbiAgICBjdXJyZW50U2l6ZTogMCxcclxuICAgIC8qKlxyXG4gICAgICoge2ludH0gY3VycmVudCBbMCw5XVxyXG4gICAgICovXHJcbiAgICBjdXJyZW50OiAwLFxyXG4gICAgb25LZXlEb3duOiBudWxsLFxyXG4gICAgbGVmdE51bTowLFxyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChpdGVtSW5mb3MsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtSW5mb3MgPSBpdGVtSW5mb3M7XHJcbiAgICAgICAgdGhpcy5fc2hvd0luZm8oaXRlbUluZm9zLCBjYWxsYmFjayk7XHJcbiAgICAgICAgLy90aGlzLl9zaG93UGFnZSgwLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgX3Nob3dJbmZvOiBmdW5jdGlvbiAoaW5mb3MsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIGNudCA9IGluZm9zLmxlbmd0aDtcclxuICAgICAgICB2YXIgbG9hZENudCA9IDA7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlLCBpbmRleCkge1xyXG4gICAgICAgICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSBpbmRleCA8IGNudCA/ICdibG9jaycgOiAnbm9uZSc7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSBjbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaXRlbUluZm8gPSBpbmZvc1tpbmRleF07XHJcbiAgICAgICAgICAgIHZhciBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbG9hZENudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvYWRDbnQgPT09IGNudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoaW1nLCBpdGVtSW5mbykge1xyXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGl0ZW1JbmZvLmltZztcclxuICAgICAgICAgICAgfSwgMTAwICogaW5kZXgsIGltZywgaXRlbUluZm8pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8vX3Nob3dQYWdlOiBmdW5jdGlvbiAocGFnZUluZGV4LCBjYWxsYmFjaykge1xyXG4gICAgLy8gICAgdmFyIGNudCA9IHRoaXMuaXRlbUluZm9zLmxlbmd0aDsvL0pTT07mlbDmja7nmoTmnaHmlbBcclxuICAgIC8vICAgIHZhciBwYWdlID0gcGFyc2VJbnQoY250IC8gcGFnZVNpemUpOy8v5pWw5o2u5YiG55qE6aG15pWwXHJcbiAgICAvLyAgICBpZiAoY250ID4gcGFnZSAqIHBhZ2VTaXplKSB7Ly/nv7vljrvkuIvkuIDpobVcclxuICAgIC8vICAgICAgICBwYWdlKys7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgICBpZiAocGFnZUluZGV4ID49IHBhZ2UpIHsvL+e/u+WOu+S4iuS4gOmhtVxyXG4gICAgLy8gICAgICAgIHBhZ2VJbmRleCA9IHBhZ2UgLSAxO1xyXG4gICAgLy8gICAgfVxyXG4gICAgLy8gICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgIC8vICAgIHRoaXMucGFnZUluZGV4ID0gcGFnZUluZGV4O1xyXG4gICAgLy9cclxuICAgIC8vICAgIC8vdGhpcy50aXRsZU5hbWUuaW5uZXJIVE1MID0gdGhpcy50aXRsZTtcclxuICAgIC8vICAgIC8vdGhpcy50aXRsZVBhZ2UuaW5uZXJIVE1MID0gJ+esrCcgKyAocGFnZUluZGV4ICsgMSkgKyAn6aG1L+WFsScgKyBwYWdlICsgJ+mhtSc7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgdmFyIGN1dDAgPSBwYWdlU2l6ZSAqIHBhZ2VJbmRleDtcclxuICAgIC8vICAgIHRoaXMuY3VycmVudFNpemUgPSAoY250IC0gY3V0MCkgPj0gcGFnZVNpemUgPyBwYWdlU2l6ZSA6IGNudCAtIGN1dDA7Ly/lpoLmnpzkuI3mmK/mnIDlkI7kuIDpobXvvIzlsLHmmK/loavmu6HkuobvvIzlpoLmnpzmmK/mnIDlkI7kuIDpobXlsLHojrflj5bmnInlpJrlsJHkuKpcclxuICAgIC8vICAgIHZhciBjdXQxID0gdGhpcy5jdXJyZW50U2l6ZSArIGN1dDA7Ly9cclxuICAgIC8vICAgIHZhciBjdXRJbmZvcyA9IHRoaXMuaXRlbUluZm9zLnNsaWNlKGN1dDAsIGN1dDEpOy8v6I635Y+W5Yiw5b2T5YmN6aG16Z2i5bGV56S655qESlNPTlxyXG4gICAgLy8gICAgdGhpcy5fc2hvd0luZm8oY3V0SW5mb3MsIGNhbGxiYWNrKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICB0aGlzLnNldFNlbGVjdGVkKDApO1xyXG4gICAgLy99LFxyXG4gICAgc2hvdzogZnVuY3Rpb24gKGN1cnJlbnQsIG9uS2V5RG93bikge1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5vbktleURvd24gPSBvbktleURvd247XHJcblxyXG4gICAgICAgIHZhciBvd25lciA9IHRoaXM7XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgb3duZXIuaGFuZGxlS2V5KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXModGhpcy5jdXJyZW50LCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgX3NldEZvY3VzOiBmdW5jdGlvbiAoY3VycmVudCwgZm9jdXMpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuaXRlbXNbY3VycmVudF07XHJcbiAgICAgICAgbm9kZS5zdHlsZS56SW5kZXggPSBmb2N1cyA/IDEgOiAwO1xyXG5cclxuICAgICAgICB2YXIgc2l6ZSA9IGl0ZW1TaXplW2N1cnJlbnRdO1xyXG4gICAgICAgIHZhciBkaXYgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xyXG4gICAgICAgIHZhciBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgIGlmIChmb2N1cykge1xyXG4gICAgICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IHNpemVbMF0gKiAxLjEgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gc2l6ZVsxXSAqIDEuMSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gLXNpemVbMF0gKiAwLjA1ICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9IC1zaXplWzFdICogMC4wNSArICdweCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9IHNpemVbMF0gKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0ID0gc2l6ZVsxXSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gMCArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPSAwICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0U2VsZWN0ZWQ6IGZ1bmN0aW9uIChjdXJyZW50KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0Rm9jdXMoaSwgY3VycmVudCA9PSBpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0TGVmdE1vdmU6ZnVuY3Rpb24oY3VycmVudCl7XHJcbiAgICAgICAgaWYodGhpcy5pdGVtc1sxMl0ub2Zmc2V0TGVmdD44ODAmJnRoaXMuaXRlbXNbMTJdLm9mZnNldExlZnQ8MTAwMCl7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdE51bSsrO1xyXG4gICAgICAgICAgICB0aGlzLnNldExlZnQodGhpcy5sZWZ0TnVtKTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLml0ZW1zW2N1cnJlbnRdLm9mZnNldExlZnQ+OTYwJiZ0aGlzLml0ZW1zW2N1cnJlbnRdLm9mZnNldExlZnQ8MTA2MCYmY3VycmVudDwxNyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnROdW0rKztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TGVmdCh0aGlzLmxlZnROdW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRMZWZ0OiBmdW5jdGlvbiAobGVmdE51bSkge1xyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8cGFnZVNpemU7KytpKXtcclxuICAgICAgICAgICAgc3dpdGNoIChsZWZ0TnVtKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnN0eWxlLmxlZnQ9dGhpcy5pdGVtc1tpXS5vZmZzZXRMZWZ0LWl0ZW1TaXplWzBdWzBdLTE4K1wicHhcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnN0eWxlLmxlZnQ9dGhpcy5pdGVtc1tpXS5vZmZzZXRMZWZ0LWl0ZW1TaXplWzJdWzBdLTE4K1wicHhcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnN0eWxlLmxlZnQ9dGhpcy5pdGVtc1tpXS5vZmZzZXRMZWZ0LWl0ZW1TaXplWzNdWzBdLTE4K1wicHhcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnN0eWxlLmxlZnQ9dGhpcy5pdGVtc1tpXS5vZmZzZXRMZWZ0LWl0ZW1TaXplWzZdWzBdLTE4K1wicHhcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnN0eWxlLmxlZnQ9dGhpcy5pdGVtc1tpXS5vZmZzZXRMZWZ0LWl0ZW1TaXplWzhdWzBdLTE4K1wicHhcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRSaWdodE1vdmU6ZnVuY3Rpb24oY3VycmVudCl7XHJcbiAgICAgICAgaWYodGhpcy5pdGVtc1tjdXJyZW50XS5vZmZzZXRMZWZ0PDEwMCYmY3VycmVudD4xKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UmlnaHQodGhpcy5sZWZ0TnVtKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdE51bS0tO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRSaWdodChsZWZ0TnVtKXtcclxuICAgICAgICBmb3IodmFyIGk9MDtpPHBhZ2VTaXplOysraSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxlZnROdW0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnN0eWxlLmxlZnQgPSB0aGlzLml0ZW1zW2ldLm9mZnNldExlZnQgKyBpdGVtU2l6ZVswXVswXSArIDE4ICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uc3R5bGUubGVmdCA9IHRoaXMuaXRlbXNbaV0ub2Zmc2V0TGVmdCArIGl0ZW1TaXplWzJdWzBdICsgMTggKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5zdHlsZS5sZWZ0ID0gdGhpcy5pdGVtc1tpXS5vZmZzZXRMZWZ0ICsgaXRlbVNpemVbM11bMF0gKyAxOCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnN0eWxlLmxlZnQgPSB0aGlzLml0ZW1zW2ldLm9mZnNldExlZnQgKyBpdGVtU2l6ZVs2XVswXSArIDE4ICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uc3R5bGUubGVmdCA9IHRoaXMuaXRlbXNbaV0ub2Zmc2V0TGVmdCArIGl0ZW1TaXplWzhdWzBdICsgMTggKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlS2V5OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBvd25lciA9IHRoaXM7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIHZhciBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvd25lci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0UmlnaHRNb3ZlKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE3OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTg6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFJpZ2h0TW92ZShvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9b3duZXIuY3VycmVudC0yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFJpZ2h0TW92ZShvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCA9b3duZXIuY3VycmVudC0zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvd25lci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0TGVmdE1vdmUob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTU6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0TGVmdE1vdmUob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQ9b3duZXIuY3VycmVudCsyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldExlZnRNb3ZlKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ID1vd25lci5jdXJyZW50KzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgICAgICAvL2lmIChvd25lci5jdXJyZW50ICUgMiAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBvd25lci5jdXJyZW50LS07XHJcbiAgICAgICAgICAgICAgICAvLyAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvd25lci5jdXJyZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudD1vd25lci5jdXJyZW50LTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5kb3duOlxyXG4gICAgICAgICAgICAgICAgLy92YXIgY3VycmVudCA9IG93bmVyLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAvL2lmIChjdXJyZW50ICUgMiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBjdXJyZW50Kys7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBpZiAoY3VycmVudCA+PSBvd25lci5jdXJyZW50U2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIGN1cnJlbnQgPSBvd25lci5jdXJyZW50U2l6ZSAtIDE7XHJcbiAgICAgICAgICAgICAgICAvLyAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICBpZiAoY3VycmVudCAhPSBvd25lci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICB9XHJcbiAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAob3duZXIuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTU6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Yob3duZXIub25LZXlEb3duKSA9PT0gJ2Z1bmN0aW9uJykgb3duZXIub25LZXlEb3duKGN1cktleSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQge0phdmEyMFBhZ2V9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9KYXZhMjBQYWdlLmpzIiwiaW1wb3J0IHtzdGJOdWxsfSBmcm9tICcuLi90b29kby9fc3RibnVsbCc7XHJcblxyXG5cclxuZnVuY3Rpb24gUGFnZUFyZ3MocGFnZSkge1xyXG4gICAgdGhpcy5wcmVmaXggPSBwYWdlID8gcGFnZSArICcuJyA6ICcnO1xyXG59XHJcblBhZ2VBcmdzLnByb3RvdHlwZSA9IHtcclxuICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIHJldHVybiBzdGJOdWxsLmdldFZhbHVlKHRoaXMucHJlZml4ICsgayk7XHJcbiAgICB9LFxyXG4gICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrLCB2KSB7XHJcbiAgICAgICAgc3RiTnVsbC5zZXRWYWx1ZSh0aGlzLnByZWZpeCArIGssIHYpO1xyXG4gICAgfSxcclxuICAgIGdldFJldHVyblVybDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCdyZXR1cm5VcmwnKTtcclxuICAgIH0sXHJcbiAgICBzZXRSZXR1cm5Vcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKCdyZXR1cm5VcmwnLCB1cmwpO1xyXG4gICAgfSxcclxuICAgIGdldFJlZGlyZWN0VXJsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoJ3JlZGlyZWN0VXJsJyk7XHJcbiAgICB9LFxyXG4gICAgc2V0UmVkaXJlY3RVcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKCdyZWRpcmVjdFVybCcsIHVybCk7XHJcbiAgICB9LFxyXG4gICAgc2V0Q2FsbEZsYWc6ZnVuY3Rpb24gKG51bSkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJjYWxsRmxhZ1wiLG51bSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0Q2FsbEZsYWc6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiY2FsbEZsYWdcIik7XHJcbiAgICB9LFxyXG4gICAgc2V0U3VjY2Vzc0NvZGU6ZnVuY3Rpb24gKHN1Y2Nlc3NDb2RlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcInN1Y2Nlc3NDb2RlXCIsc3VjY2Vzc0NvZGUpO1xyXG4gICAgfSxcclxuICAgIGdldFN1Y2Nlc3NDb2RlOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcInN1Y2Nlc3NDb2RlXCIpO1xyXG4gICAgfSxcclxuICAgIHNldFByaXplSUQ6ZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcIlByaXplSURcIixpZCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJpemVJRDpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJQcml6ZUlEXCIpO1xyXG4gICAgfSxcclxuICAgIGdldFR1cm50YWJsZVVybDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCdUdXJudGFibGVVcmwnKTtcclxuICAgIH0sXHJcbiAgICBzZXRUdXJudGFibGVVcmw6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKCdUdXJudGFibGVVcmwnLCB1cmwpO1xyXG4gICAgfSxcclxufTtcclxuXHJcblxyXG52YXIgc2hvcEFyZ3MgPSBuZXcgUGFnZUFyZ3MoJ3Nob3AnKTtcclxudmFyIHJlY2hhcmdlQXJncyA9IG5ldyBQYWdlQXJncygncmVjaGFyZ2UnKTtcclxudmFyIGNhbGxiYWNrQXJncyA9IG5ldyBQYWdlQXJncygnY2FsbGJhY2snKTtcclxudmFyIHR1cm5UYWJsZUFyZ3MgPSBuZXcgUGFnZUFyZ3MoJ3R1cm50YWJsZScpO1xyXG5cclxudmFyIGFwcEFyZ3MgPSBuZXcgUGFnZUFyZ3MoJ2FwcCcpO1xyXG5hcHBBcmdzLm9uRmlyc3RQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZpcnN0VXJsID0gYXBwQXJncy5nZXRSZWRpcmVjdFVybCgpO1xyXG4gICAgaWYgKGZpcnN0VXJsKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmaXJzdFVybDtcclxuICAgIH1cclxufTtcclxuXHJcbmFwcEFyZ3Mub25Ib21lUGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBob21lVXJsID0gYXBwQXJncy5nZXRSZXR1cm5VcmwoKTtcclxuICAgIGlmIChob21lVXJsKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBob21lVXJsO1xyXG4gICAgfVxyXG59O1xyXG5cclxuYXBwQXJncy5vblR1cm50YWJsZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgVHVybnRhYmxlVXJsID0gYXBwQXJncy5nZXRUdXJudGFibGVVcmwoKTtcclxuICAgIGlmIChUdXJudGFibGVVcmwpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFR1cm50YWJsZVVybDtcclxuICAgIH1cclxufTtcclxuZXhwb3J0IHtzaG9wQXJncyxyZWNoYXJnZUFyZ3MsY2FsbGJhY2tBcmdzLGFwcEFyZ3MsdHVyblRhYmxlQXJnc31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9QYWdlQXJncy5qcyIsImltcG9ydCB7c3RiTnVsbH0gZnJvbSAnLi4vdG9vZG8vX3N0Ym51bGwnXHJcbmltcG9ydCB7c3RiY2xpfSBmcm9tICcuLi90b29kby9fc3RiY2xpJztcclxuXHJcbmZ1bmN0aW9uIFBhZ2VVcmwoKSB7XHJcbn1cclxuUGFnZVVybC5wcm90b3R5cGUgPSB7XHJcbiAgICBwYXJzZVF1ZXJ5OiBmdW5jdGlvbiAocXVlcnkpIHtcclxuICAgICAgICBjb25zdCBzdGFydCA9IHF1ZXJ5LmluZGV4T2YoJz8nKTtcclxuICAgICAgICBpZiAoc3RhcnQgPj0gMCkge1xyXG4gICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LnNsaWNlKHN0YXJ0ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFyZ3MgPSB7fTtcclxuICAgICAgICBjb25zdCBhcnIgPSBxdWVyeS5zcGxpdCgnJicpO1xyXG4gICAgICAgIGZvciAobGV0IG0gPSAwOyBtIDwgYXJyLmxlbmd0aDsgbSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSBhcnJbbV07XHJcbiAgICAgICAgICAgIGNvbnN0IHRtcCA9IHYuc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgYXJnc1t0bXBbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KHRtcFsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcmdzO1xyXG4gICAgfSxcclxuICAgIHBhcnNlQXJnczogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICBsZXQgaywgdjtcclxuICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKGsgaW4gYXJncykge1xyXG4gICAgICAgICAgICAvLyEganMg5Lya5oqKJzAn5b2T5L2cZmFsc2UgYXJnc1trXSA9PiBhcmdzW2tdICE9PSAnJ1xyXG4gICAgICAgICAgICBpZiAoYXJncy5oYXNPd25Qcm9wZXJ0eShrKSAmJiBhcmdzW2tdICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdiA9IGVuY29kZVVSSUNvbXBvbmVudChhcmdzW2tdKTtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKGsgKyAnPScgKyB2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyLmpvaW4oJyYnKTtcclxuICAgIH0sXHJcbiAgICBiYXNlVXJsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnL3RkZW50ZXInO1xyXG4gICAgfSxcclxuICAgIGdldFVzZXJJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdGJOdWxsLmdldFZhbHVlKCd0b29kby51c2VySWQnKTtcclxuICAgIH0sXHJcbiAgICBnZXRTdGJJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdGJOdWxsLmdldENhcmRUVigpO1xyXG4gICAgfSxcclxuICAgIGdldFNpZ25LZXk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdHMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbXNnID0gdGhpcy5nZXRVc2VySWQoKSArIHRzO1xyXG4gICAgICAgIHZhciBtZDUgPSBzdGJjbGkubWQ1KG1zZyk7XHJcbiAgICAgICAgcmV0dXJuIG1kNSArIHRzO1xyXG4gICAgfSxcclxuICAgIGdldENoaWxkTG9jazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH0sXHJcbiAgICByZWNoYXJnZVVybDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy90ZHNydi9hcGkvY29pbic7XHJcbiAgICB9LFxyXG4gICAgY2FsbFVybDogZnVuY3Rpb24gKGl0ZW0sIHJldHVyblVybCkge1xyXG4gICAgICAgIGxldCByZWNoYXJnZVVybCA9IHRoaXMucmVjaGFyZ2VVcmwoKTtcclxuICAgICAgICBsZXQgYXJncyA9IHt9O1xyXG4gICAgICAgIGFyZ3MuZ2FtZWlkID0gaXRlbS5nYW1lSWQ7XHJcbiAgICAgICAgYXJncy5rZXkgPSB0aGlzLmdldFNpZ25LZXkoKTtcclxuICAgICAgICBhcmdzLmRldiA9IHRoaXMuZ2V0U3RiSWQoKTtcclxuICAgICAgICBhcmdzLmZhdGhlcmtleSA9IHRoaXMuZ2V0Q2hpbGRMb2NrKCk7XHJcbiAgICAgICAgYXJncy51c2VySWQgPSB0aGlzLmdldFVzZXJJZCgpO1xyXG4gICAgICAgIGFyZ3MudXNlcmlkID0gdGhpcy5nZXRVc2VySWQoKTtcclxuICAgICAgICBhcmdzLnRzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgYXJncy5yZXR1cm5VUkwgPSByZXR1cm5Vcmw7XHJcblxyXG4gICAgICAgIHZhciBob3N0TmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTsgLy/kuI3luKbnq6/lj6NcclxuICAgICAgICB2YXIgZHN0VXJsID0gaXRlbS51cmw7XHJcbiAgICAgICAgZHN0VXJsID0gZHN0VXJsLnJlcGxhY2UoJzE5Mi4xNjguMjAwLjEwMCcsIGhvc3ROYW1lKTtcclxuXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHt9O1xyXG4gICAgICAgIHBhcmFtcy5yZWRpcmVjdFVybCA9IGRzdFVybCArICc/JyArIHRoaXMucGFyc2VBcmdzKGFyZ3MpICsgJyZyZWNoYWdlVVJMPScgKyByZWNoYXJnZVVybDtcclxuICAgICAgICBwYXJhbXMucmV0dXJuVXJsID0gcmV0dXJuVXJsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VVcmwoKSArICcvcmVzaXplLmh0bWw/JyArIHRoaXMucGFyc2VBcmdzKHBhcmFtcyk7XHJcbiAgICB9LFxyXG4gICAgY2FsbFVybEJhc2U6IGZ1bmN0aW9uIChpdGVtLCByZXR1cm5VcmwpIHtcclxuICAgICAgICBsZXQgcmVjaGFyZ2VVcmwgPSB0aGlzLnJlY2hhcmdlVXJsKCk7XHJcbiAgICAgICAgbGV0IGFyZ3MgPSB7fTtcclxuICAgICAgICBhcmdzLmdhbWVpZCA9IGl0ZW0uZ2FtZUlkO1xyXG4gICAgICAgIGFyZ3Mua2V5ID0gdGhpcy5nZXRTaWduS2V5KCk7XHJcbiAgICAgICAgYXJncy5kZXYgPSB0aGlzLmdldFN0YklkKCk7XHJcbiAgICAgICAgYXJncy5mYXRoZXJrZXkgPSB0aGlzLmdldENoaWxkTG9jaygpO1xyXG4gICAgICAgIGFyZ3MudXNlcklkID0gdGhpcy5nZXRVc2VySWQoKTtcclxuICAgICAgICBhcmdzLnVzZXJpZCA9IHRoaXMuZ2V0VXNlcklkKCk7XHJcbiAgICAgICAgYXJncy50cyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGFyZ3MucmV0dXJuVVJMID0gcmV0dXJuVXJsO1xyXG5cclxuICAgICAgICB2YXIgaG9zdE5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7IC8v5LiN5bim56uv5Y+jXHJcbiAgICAgICAgdmFyIGRzdFVybCA9IGl0ZW0udXJsO1xyXG4gICAgICAgIGRzdFVybCA9IGRzdFVybC5yZXBsYWNlKCcxOTIuMTY4LjIwMC4xMDAnLCBob3N0TmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkc3RVcmwgKyAnPycgKyB0aGlzLnBhcnNlQXJncyhhcmdzKSArICcmcmVjaGFnZVVSTD0nICsgcmVjaGFyZ2VVcmw7XHJcbiAgICB9LFxyXG4gICAgY2FsbEdhbWU6IGZ1bmN0aW9uIChpdGVtLCByZXR1cm5VcmwpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuY2FsbFVybChpdGVtLCByZXR1cm5VcmwpO1xyXG4gICAgfSxcclxuICAgIGNhbGxHYW1lQmFzZTogZnVuY3Rpb24gKGl0ZW0sIHJldHVyblVybCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5jYWxsVXJsQmFzZShpdGVtLCByZXR1cm5VcmwpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgcGFnZVVybCA9IG5ldyBQYWdlVXJsKCk7XHJcblxyXG5leHBvcnQge3BhZ2VVcmx9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUGFnZVVybC5qcyIsImZ1bmN0aW9uIGdldEpTT04odXJsLCBjYikge1xyXG4gICAgbGV0IHJlcTtcclxuICAgIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdDtcclxuICAgIHJlcS5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocmVxLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXNBcnIgPSBldmFsKCdbJyArIHJlcS5yZXNwb25zZVRleHQgKyAnXScpO1xyXG4gICAgICAgICAgICBjYihpdGVtc0FyclswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJlcS5zZW5kKG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYXNlVXJsKCkge1xyXG4gICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnL3RkZW50ZXInO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxheUJhY2tncm91bmQobm9kZSwgaW1nLCBkZWxheSkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbm9kZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBpbWcgKyAnKSdcclxuICAgIH0sIGRlbGF5KTtcclxufVxyXG5cclxuZXhwb3J0IHtnZXRKU09OLGJhc2VVcmwsZGVsYXlCYWNrZ3JvdW5kfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2FiYy5qcyIsImltcG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfSBmcm9tIFwiLi4vdG9vZG8vX2tleWNvZGVzXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSB7aW50fSBjYWxsYmFjay5jb2RlIOaMiemUriAwLui+k+WFpeWujOaIkCAxLuWPlua2iFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2subXNnIOi+k+WFpeeahOWtl+espuS4slxyXG4gKiBAcGFyYW0gdGl0bGUge2ludH0g5qCH6aKY5Zu+54mHIDAu6K6+572u6ZOc6ZSBIDEu6ZOc6ZSB6aqM6K+BXHJcbiAqIEBwYXJhbSBsYWJlbCB7aW50fSDmj5DnpLror60gMC7ovpPlhaXlr4bnoIEgMS7lho3mrKHovpPlhaVcclxuICovXHJcbmZ1bmN0aW9uIHNob3dDaGlsZExvY2soY2FsbGJhY2ssIHRpdGxlLCBsYWJlbCkge1xyXG4gICAgdGl0bGUgPSBhcmd1bWVudHNbMV0gPyBhcmd1bWVudHNbMV0gOiAwO1xyXG4gICAgbGFiZWwgPSBhcmd1bWVudHNbMl0gPyBhcmd1bWVudHNbMl0gOiAwO1xyXG4gICAgdmFyIHRpcHMgPSBhcmd1bWVudHNbM10gPyBhcmd1bWVudHNbM10gOiAn6K+36L6T5YWlNuS9jeaVsOWtl+Wvhuegge+8jOaMiei/lOWbnumUruWFs+mXreW8ueeql+OAgic7XHJcblxyXG4gICAgdmFyIGxheW91dElkID0gJ2xvY2stbGF5b3V0LTAwMyc7XHJcbiAgICB2YXIgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsYXlvdXQuY2xhc3NOYW1lID0gJ2xvY2stbGF5b3V0JztcclxuICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcclxuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID0gJycgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxvY2stYmdcIj4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBpZD1cImxvY2stdGl0bGVcIiBjbGFzcz1cImxvY2stdGl0bGUtMFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICA8ZGl2IGNsYXNzPVwibG9jay1pbnB1dFwiPicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLWxhYmVsXCIgY2xhc3M9XCJsb2NrLWxhYmVsLTBcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay10ZXh0XCIgY2xhc3M9XCJsb2NrLXRleHRcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgIDxkaXYgaWQ9XCJsb2NrLXRpcHNcIiBjbGFzcz1cImxvY2stdGlwc1wiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9jay1rZXlib2FyZFwiPicgK1xyXG4gICAgICAgICAgICAnICA8ZGl2IGNsYXNzPVwibG9jay1udW0tYmdcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tMVwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+MTwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tMlwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj4yPC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS0zXCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj4zPC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS00XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj40PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS01XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj41PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS02XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj42PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS03XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj43PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS04XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj44PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS05XCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj45PC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS0xMFwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTBcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+MDwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tMTFcIiBjbGFzcz1cImxvY2stbnVtXCI+ICAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheW91dCk7XHJcbiAgICB9XHJcbiAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgbG9ja1RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2stdGV4dFwiKTtcclxuICAgIHZhciBsb2NrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2stdGl0bGVcIik7XHJcbiAgICB2YXIgbG9ja0xhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2stbGFiZWwnKTtcclxuICAgIHZhciBsb2NrVGlwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NrLXRpcHMnKTtcclxuICAgIGxvY2tUZXh0LmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICBsb2NrVGl0bGUuY2xhc3NOYW1lID0gXCJsb2NrLXRpdGxlLVwiICsgdGl0bGU7XHJcbiAgICBsb2NrTGFiZWwuY2xhc3NOYW1lID0gJ2xvY2stbGFiZWwtJyArIGxhYmVsO1xyXG4gICAgbG9ja1RpcHMuaW5uZXJIVE1MID0gdGlwcztcclxuXHJcbiAgICB2YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbiAgICB2YXIgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG4gICAgdmFyIGl0ZW1Ob2RlcyA9IFtcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW0xLCBpZDogXCJsb2NrLW51bS0xXCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTIsIGlkOiBcImxvY2stbnVtLTJcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtMywgaWQ6IFwibG9jay1udW0tM1wifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW00LCBpZDogXCJsb2NrLW51bS00XCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTUsIGlkOiBcImxvY2stbnVtLTVcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtNiwgaWQ6IFwibG9jay1udW0tNlwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW03LCBpZDogXCJsb2NrLW51bS03XCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTgsIGlkOiBcImxvY2stbnVtLThcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtOSwgaWQ6IFwibG9jay1udW0tOVwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5iYWNrLCBpZDogXCJsb2NrLW51bS0xMFwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW0wLCBpZDogXCJsb2NrLW51bS0wXCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBudWxsLCBpZDogXCJsb2NrLW51bS0xMVwifVxyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgaW5wdXRUZXh0ID0gJyc7XHJcbiAgICB2YXIgY3VySWR4ID0gMDtcclxuXHJcbiAgICB2YXIgc2V0U2VsZWN0ZWQgPSBmdW5jdGlvbiAoY3VySWR4KSB7XHJcbiAgICAgICAgaXRlbU5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW1Ob2RlLCBpbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW1Ob2RlLmlkKTtcclxuICAgICAgICAgICAvLyBub2RlLmNsYXNzTmFtZSA9IChpbmRleCA9PSBjdXJJZHggPyAnbG9jay1udW0tZm9jdXMnIDogJ2xvY2stbnVtJyk7XHJcbiAgICAgICAgICAgIG5vZGUucXVlcnlTZWxlY3RvcignZGl2Jykuc3R5bGUuZGlzcGxheT1pbmRleCA9PSBjdXJJZHggPyBcImJsb2NrXCI6XCJub25lXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHN1Ym1pdCA9IGZ1bmN0aW9uIChjb2RlKSB7XHJcbiAgICAgICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAvL2RvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGF5b3V0KTtcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xyXG4gICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhjb2RlLCBpbnB1dFRleHQpO1xyXG4gICAgfTtcclxuICAgIHZhciBpbnZpc2libGUgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIHZhciBzdGFyID0gJyc7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKSBzdGFyICs9ICcqJztcclxuICAgICAgICByZXR1cm4gc3RhcjtcclxuICAgIH07XHJcbiAgICB2YXIgY2xpY2tOdW0gPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICAgICAgaW5wdXRUZXh0ICs9IFN0cmluZyhudW0pO1xyXG4gICAgICAgIGxvY2tUZXh0LmlubmVyVGV4dCA9IGludmlzaWJsZShpbnB1dFRleHQpO1xyXG4gICAgfTtcclxuICAgIHZhciBiYWNrc3BhY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaW5wdXRUZXh0ID0gaW5wdXRUZXh0LnN1YnN0cmluZygwLCBpbnB1dFRleHQubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgbG9ja1RleHQuaW5uZXJUZXh0ID0gaW52aXNpYmxlKGlucHV0VGV4dCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGhhbmRsZU9rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjdXJyZW50ID0gaXRlbU5vZGVzW2N1cklkeF07XHJcbiAgICAgICAgaWYgKGN1cnJlbnQua2V5Q29kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJhY2tzcGFjZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhhbmRsZUtleShjdXJyZW50LmtleUNvZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgaGFuZGxlS2V5ID0gZnVuY3Rpb24gKGN1cktleSkge1xyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJJZHggJSAzKSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VySWR4LS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgaWYgKChjdXJJZHggJSAzKSAhPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VySWR4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cklkeCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJJZHggLT0gMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuZG93bjpcclxuICAgICAgICAgICAgICAgIGlmIChjdXJJZHggPCA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VySWR4ICs9IDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm9rOlxyXG4gICAgICAgICAgICAgICAgaGFuZGxlT2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgICAgIHN1Ym1pdCgxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMTpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTI6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW0zOlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtNDpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTU6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW02OlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtNzpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTg6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW05OlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMDpcclxuICAgICAgICAgICAgICAgIHZhciBudW0gPSBjdXJLZXkgLSBrZXlDb2RlLm51bTA7XHJcbiAgICAgICAgICAgICAgICBjbGlja051bShudW0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHNldFNlbGVjdGVkKDApO1xyXG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgdmFyIGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGhhbmRsZUtleShjdXJLZXkpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkKGN1cklkeCk7XHJcblxyXG4gICAgICAgIGlmIChpbnB1dFRleHQubGVuZ3RoID09IDYpIHtcclxuICAgICAgICAgICAgc3VibWl0KDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7c2hvd0NoaWxkTG9ja31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9jaGlsZExvY2suanMiLCJpbXBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc30gZnJvbSBcIi4uL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIENoaWxkTWVudSgpIHtcclxufVxyXG5DaGlsZE1lbnUucHJvdG90eXBlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sge2Z1bmN0aW9ufVxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrLmJ0biB7aW50fSAwLuaMiemSrjEgMS7mjInpkq4yIC0xLuWPlua2iOaTjeS9nFxyXG4gICAgICogQHBhcmFtIGNudCB7aW50fSBbMSwyXSDmjInpkq7mlbDph49cclxuICAgICAqIEBwYXJhbSBidG4ge2ludH0gWzAsMV0g6buY6K6k6YCJ5LitXHJcbiAgICAgKiBAcGFyYW0gdGV4dCB7c3RyaW5nfSDmj5DnpLrmlofmnKxcclxuICAgICAqL1xyXG4gICAgc2hvdzogZnVuY3Rpb24gKGNhbGxiYWNrLCBjbnQsIGJ0biwgdGV4dCkge1xyXG4gICAgICAgIHZhciBsYXlvdXRJZCA9ICdsb2NrLW1lbnUtbGF5b3V0JztcclxuICAgICAgICB2YXIgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgICAgIGlmICghbGF5b3V0KSB7XHJcbiAgICAgICAgICAgIGxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBsYXlvdXQuY2xhc3NOYW1lID0gJ2xvY2stbGF5b3V0JztcclxuICAgICAgICAgICAgbGF5b3V0LmlkID0gbGF5b3V0SWQ7XHJcbiAgICAgICAgICAgIGxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsb2NrLW1lbnUtYmdcIj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stdGl0bGVcIiBjbGFzcz1cImxvY2stdGl0bGUtMFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1idG4wXCIgY2xhc3M9XCJsb2NrLWJ0blwiPjxzcGFuPuW8gOWQr+erpemUgTwvc3Bhbj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stYnRuMVwiIGNsYXNzPVwibG9jay1idG5cIj48c3Bhbj7lhbPpl63nq6XplIE8L3NwYW4+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLWJ0bjJcIiBjbGFzcz1cImxvY2stYnRuXCI+PHNwYW4+5pu05pS55a+G56CBPC9zcGFuPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwibG9jay10aXBzXCI+6YCJ5oup6ZyA6KaB55qE5pON5L2c5oyJ56Gu5a6a6ZSu6L+b6KGM5LiL5LiA5q2l77yM5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCPC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsYXlvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgIHZhciBiZyA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcubG9jay1tZW51LWJnJyk7XHJcbiAgICAgICAgdmFyIGJ0bk5vZGVzID0gYmcucXVlcnlTZWxlY3RvckFsbCgnLmxvY2stYnRuJyk7XHJcbiAgICAgICAgZm9yKHZhciBpPTA7aTxidG5Ob2Rlcy5sZW5ndGg7KytpKXtcclxuICAgICAgICAgICAgdmFyIGJ0bk5vZGUgPSBidG5Ob2Rlc1tpXTtcclxuICAgICAgICAgICAgYnRuTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGJ0bk5vZGUwLCBidG5Ob2RlMTtcclxuICAgICAgICBpZiAoY250ID09IDEpIHtcclxuICAgICAgICAgICAgYnRuTm9kZTAgPSBidG5Ob2Rlc1swXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbnQgPSAyO1xyXG4gICAgICAgICAgICBidG5Ob2RlMCA9IGJ0bk5vZGVzWzFdO1xyXG4gICAgICAgICAgICBidG5Ob2RlMSA9IGJ0bk5vZGVzWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnRuTm9kZTApIGJ0bk5vZGUwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGlmIChidG5Ob2RlMSkgYnRuTm9kZTEuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgIHZhciB0aXBOb2RlID0gYmcucXVlcnlTZWxlY3RvcignLmxvY2stdGlwcycpO1xyXG4gICAgICAgIHRpcE5vZGUuaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZm9jdXNCdG4oYnRuSWR4KSB7XHJcbiAgICAgICAgICAgIHZhciBmb2N1c05vZGU7XHJcbiAgICAgICAgICAgIGlmIChjbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgYnRuTm9kZTAuY2xhc3NOYW1lPVwibG9jay1idG4gbG9jay1idG4tZm9jdXNcIjtcclxuICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZSA9IGJ0bk5vZGUwLnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLWJ0bi1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgLy8gZm9jdXNOb2RlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0bklkeCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuTm9kZTAuY2xhc3NOYW1lPVwibG9jay1idG4gbG9jay1idG4tZm9jdXNcIjtcclxuICAgICAgICAgICAgICAgICAgICBidG5Ob2RlMS5jbGFzc05hbWU9XCJsb2NrLWJ0blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZSA9IGJ0bk5vZGUwLnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLWJ0bi1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUgPSBidG5Ob2RlMS5xdWVyeVNlbGVjdG9yKCcubG9jay1idG4tZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuTm9kZTAuY2xhc3NOYW1lPVwibG9jay1idG5cIjtcclxuICAgICAgICAgICAgICAgICAgICBidG5Ob2RlMS5jbGFzc05hbWU9XCJsb2NrLWJ0biBsb2NrLWJ0bi1mb2N1c1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZSA9IGJ0bk5vZGUwLnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLWJ0bi1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZSA9IGJ0bk5vZGUxLnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLWJ0bi1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidG4gPSBidG5JZHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYnRuIDwgMCB8fCBidG4gPiAxKSBidG4gPSAwO1xyXG4gICAgICAgIGZvY3VzQnRuKGJ0bik7XHJcblxyXG4gICAgICAgIGxldCBzdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICB2YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbiAgICAgICAgdmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgICAgIHZhciBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNCdG4oMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGtleUNvZGUuZG93bjpcclxuICAgICAgICAgICAgICAgICAgICBmb2N1c0J0bihjbnQgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazogICAgIC8v56Gu5a6aXHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6ICAgICAgLy/lj5bmtohcclxuICAgICAgICAgICAgICAgICAgICBidG4gPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzdWJtaXQpIHtcclxuICAgICAgICAgICAgICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGNoaWxkTWVudSA9IG5ldyBDaGlsZE1lbnUoKTtcclxuZXhwb3J0IHtjaGlsZE1lbnV9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvY2hpbGRNZW51LmpzIiwiaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuLi90b29kby9fa2V5Y29kZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge2ludH0gY2FsbGJhY2suYnRuIOaMiemUriAwLuehruWumiAxLuWPlua2iFxyXG4gKiBAcGFyYW0ge251bWJlcn0gYnRuIOm7mOiupOeEpueCuSAwLuehruWumiAxLuWPlua2iFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUg56qX5Y+j5qCH6aKYXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IOeql+WPo+WGheWuuVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYnRuMCDmjInpkq4xXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBidG4xIOaMiemSrjJcclxuICovXHJcbmZ1bmN0aW9uIHNob3dEaWFsb2coLypjYWxsYmFjaywgYnRuLCB0aXRsZSwgdGV4dCwgYnRuMCwgYnRuMSovKSB7XHJcbiAgICBjb25zdCBsYXlvdXRJZCA9ICdkaWFsb2ctbGF5b3V0LTAwMSc7XHJcbiAgICBsZXQgY2FsbGJhY2ssIGJ0biwgdGl0bGUsIHRleHQsIGJ0bjAsIGJ0bjE7XHJcbiAgICBjYWxsYmFjayA9IGFyZ3VtZW50c1swXSA/IGFyZ3VtZW50c1swXSA6IG51bGw7XHJcbiAgICBidG4gPSBhcmd1bWVudHNbMV0gPyBhcmd1bWVudHNbMV0gOiAwO1xyXG4gICAgdGl0bGUgPSBhcmd1bWVudHNbMl0gPyBhcmd1bWVudHNbMl0gOiAn5o+Q56S6JztcclxuICAgIHRleHQgPSBhcmd1bWVudHNbM10gPyBhcmd1bWVudHNbM10gOiAnJztcclxuICAgIGJ0bjAgPSBhcmd1bWVudHNbNF0gPyBhcmd1bWVudHNbNF0gOiAn56Gu5a6aJztcclxuICAgIGJ0bjEgPSBhcmd1bWVudHNbNV0gPyBhcmd1bWVudHNbNV0gOiAn6L+U5ZueJztcclxuICAgIHZhciBhbGlnbiA9IGFyZ3VtZW50c1s2XSA/IGFyZ3VtZW50c1s2XSA6ICdjZW50ZXInO1xyXG5cclxuICAgIGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYXlvdXRJZCk7XHJcbiAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICAgIGxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGF5b3V0LmNsYXNzTmFtZSA9ICdkaWFsb2ctbGF5b3V0JztcclxuICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcclxuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkaWFsb2ctYmdcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLXRpdGxlXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImRpYWxvZy10ZXh0XCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImRpYWxvZy1idG4wXCIgc3R5bGU9XCJsZWZ0OiAxMiU7dG9wOiA3MyVcIiBjbGFzcz1cImRpYWxvZy1idG4gZGlhbG9nLWJ0bjBcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwiZGlhbG9nLWJ0bjFcIiBzdHlsZT1cImxlZnQ6IDU3JTt0b3A6IDczJVwiIGNsYXNzPVwiZGlhbG9nLWJ0biBkaWFsb2ctYnRuMVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheW91dCk7XHJcbiAgICB9XHJcbiAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgYmFja2dyb3VuZCA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWJnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgdmFyIG5vZGVUaXRsZSA9IGJhY2tncm91bmQucXVlcnlTZWxlY3RvcignLmRpYWxvZy10aXRsZScpO1xyXG4gICAgbm9kZVRpdGxlLmlubmVySFRNTCA9IHRpdGxlO1xyXG4gICAgdmFyIG5vZGVUZXh0ID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLXRleHQnKTtcclxuICAgIG5vZGVUZXh0LmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICBub2RlVGV4dC5zdHlsZS50ZXh0QWxpZ24gPSBhbGlnbjtcclxuXHJcbiAgICB2YXIgbm9kZUJ0bjAgPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2ctYnRuMCcpO1xyXG4gICAgbm9kZUJ0bjAuaW5uZXJIVE1MID0gYnRuMCArICc8ZGl2PjwvZGl2Pic7XHJcbiAgICB2YXIgbm9kZUJ0bjEgPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJyNkaWFsb2ctYnRuMScpO1xyXG4gICAgbm9kZUJ0bjEuaW5uZXJIVE1MID0gYnRuMSArICc8ZGl2PjwvZGl2Pic7XHJcblxyXG4gICAgdmFyIGJ0bl8wMDYgPSBub2RlQnRuMC5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xyXG4gICAgdmFyIGJ0bl8wMDZub25lID0gbm9kZUJ0bjEucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGZvY3VzQnRuID0gZnVuY3Rpb24gKGJ0bklkeCkge1xyXG4gICAgICAgIGlmIChidG5JZHggPT0gMCkge1xyXG4gICAgICAgICAgICBub2RlQnRuMC5jbGFzc05hbWUgPSBcIiBcIiArIFwiZGlhbG9nQnRuXzEgZGlhbG9nLUJ0bl9mb2N1c1wiO1xyXG4gICAgICAgICAgICBub2RlQnRuMS5jbGFzc05hbWUgPSBcIiBcIiArIFwiZGlhbG9nQnRuXzBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ0bklkeCA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICBub2RlQnRuMC5jbGFzc05hbWUgPSBcIiBcIiArIFwiZGlhbG9nQnRuXzBcIjtcclxuICAgICAgICAgICAgbm9kZUJ0bjEuY2xhc3NOYW1lID0gXCIgXCIgKyBcImRpYWxvZ0J0bl8xIGRpYWxvZy1CdG5fZm9jdXNcIjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0biA9IGJ0bklkeDtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGJ0biA8IDAgfHwgYnRuID4gMSkgYnRuID0gMDtcclxuICAgIGZvY3VzQnRuKGJ0bik7XHJcblxyXG4gICAgbGV0IHN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgdmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG4gICAgdmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIHZhciBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazogICAgIC8v56Gu5a6aXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMDogICAgICAvL+WPlua2iFxyXG4gICAgICAgICAgICAgICAgYnRuID0gMTtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1Ym1pdCkge1xyXG4gICAgICAgICAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhidG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtzaG93RGlhbG9nfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2RpYWxvZy5qcyIsImltcG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfSBmcm9tIFwiLi4vdG9vZG8vX2tleWNvZGVzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd0FkMTYoY2FsbGJhY2ssIGJ0bikge1xyXG4gICAgY29uc3QgbGF5b3V0SWQgPSAnYmlnLWFkLTE2JztcclxuXHJcbiAgICBsZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxheW91dC5jbGFzc05hbWUgPSAnYmlnLWFkLTE2JztcclxuICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcclxuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJiaWctYWQtMTYtYnRuLTBcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJiaWctYWQtMTYtYnRuLTFcIj48L2Rpdj4nO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcclxuICAgIH1cclxuICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIHZhciBidG4wID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNiaWctYWQtMTYtYnRuLTAnKTtcclxuICAgIHZhciBidG4xID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNiaWctYWQtMTYtYnRuLTEnKTtcclxuXHJcbiAgICBjb25zdCBmb2N1c0J0biA9IGZ1bmN0aW9uIChidG5JZHgpIHtcclxuICAgICAgICBpZiAoYnRuSWR4ID09IDApIHtcclxuICAgICAgICAgICAgYnRuMC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgYnRuMS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnRuSWR4ID09IDEpIHtcclxuICAgICAgICAgICAgYnRuMC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBidG4xLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidG4gPSBidG5JZHg7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvY3VzQnRuKGJ0bik7XHJcblxyXG4gICAgbGV0IHN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgdmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG4gICAgdmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIHZhciBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazogICAgIC8v56Gu5a6aXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMDogICAgICAvL+WPlua2iFxyXG4gICAgICAgICAgICAgICAgYnRuID0gMTtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1Ym1pdCkge1xyXG4gICAgICAgICAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKGJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93QWQyOShjYWxsYmFjaywgYnRuLCBhZCkge1xyXG4gICAgY29uc3QgbGF5b3V0SWQgPSAnYmlnLWFkLTI5JztcclxuXHJcbiAgICBsZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxheW91dC5pZCA9IGxheW91dElkO1xyXG4gICAgICAgIGxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImJpZy1hZC1idG4tMFwiIGNsYXNzPVwiYmlnLWFkLWJ0bi0wLWZvY3VzXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiYmlnLWFkLWJ0bi0xXCIgY2xhc3M9XCJiaWctYWQtYnRuLTFcIj48L2Rpdj4nO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcclxuICAgIH1cclxuICAgIGxheW91dC5jbGFzc05hbWUgPSAnYmlnLWFkLScgKyBhZDtcclxuICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIHZhciBidG4wID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNiaWctYWQtYnRuLTAnKTtcclxuICAgIHZhciBidG4xID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNiaWctYWQtYnRuLTEnKTtcclxuXHJcbiAgICBjb25zdCBmb2N1c0J0biA9IGZ1bmN0aW9uIChidG5JZHgpIHtcclxuICAgICAgICBpZiAoYnRuSWR4ID09IDApIHtcclxuICAgICAgICAgICAgYnRuMC5jbGFzc05hbWUgPSAnYmlnLWFkLWJ0bi0wLWZvY3VzJztcclxuICAgICAgICAgICAgYnRuMS5jbGFzc05hbWUgPSAnYmlnLWFkLWJ0bi0xJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ0bklkeCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGJ0bjAuY2xhc3NOYW1lID0gJ2JpZy1hZC1idG4tMCc7XHJcbiAgICAgICAgICAgIGJ0bjEuY2xhc3NOYW1lID0gJ2JpZy1hZC1idG4tMS1mb2N1cyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0biA9IGJ0bklkeDtcclxuICAgIH07XHJcblxyXG4gICAgZm9jdXNCdG4oYnRuKTtcclxuXHJcbiAgICBsZXQgc3VibWl0ID0gZmFsc2U7XHJcbiAgICB2YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbiAgICB2YXIgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgdmFyIGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgZm9jdXNCdG4oMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgZm9jdXNCdG4oMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm9rOiAgICAgLy/noa7lrppcclxuICAgICAgICAgICAgICAgIHN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW0wOiAgICAgIC8v5Y+W5raIXHJcbiAgICAgICAgICAgICAgICBidG4gPSAxO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3VibWl0KSB7XHJcbiAgICAgICAgICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soYnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2hvd0FkMTYsc2hvd0FkMjl9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvZGlhbG9nQmlnQWQuanMiLCJ2YXIgbG9hZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxudmFyIHNob3dUaW1lID0gMTMxODtcclxudmFyIGxheW91dElkID0gJ2xvYWRpbmctbGF5b3V0LTAwMic7XHJcblxyXG5mdW5jdGlvbiBzaG93TG9hZGluZygpIHtcclxuICAgIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblxyXG4gICAgdmFyIHRpdGxlID0gYXJndW1lbnRzWzBdID8gYXJndW1lbnRzWzBdIDogJ+aPkOekuic7XHJcbiAgICB2YXIgdGV4dCA9IGFyZ3VtZW50c1sxXSA/IGFyZ3VtZW50c1sxXSA6ICfmraPlnKjliqDovb3vvIzor7fnqI3lgJkuLi4nO1xyXG5cclxuICAgIGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYXlvdXRJZCk7XHJcbiAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICAgIGxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGF5b3V0LmNsYXNzTmFtZSA9ICdkaWFsb2ctbGF5b3V0JztcclxuICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcclxuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkaWFsb2ctYmdcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLXRpdGxlXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImRpYWxvZy10ZXh0XCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcclxuICAgIH1cclxuICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIHZhciBub2RlQmcgPSBsYXlvdXQucXVlcnlTZWxlY3RvcignLmRpYWxvZy1iZycpO1xyXG4gICAgbm9kZUJnLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgdmFyIG5vZGVUaXRsZSA9IG5vZGVCZy5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLXRpdGxlJyk7XHJcbiAgICBub2RlVGl0bGUuaW5uZXJIVE1MID0gdGl0bGU7XHJcbiAgICB2YXIgbm9kZVRleHQgPSBub2RlQmcucXVlcnlTZWxlY3RvcignLmRpYWxvZy10ZXh0Jyk7XHJcbiAgICBub2RlVGV4dC5pbm5lckhUTUwgPSB0ZXh0O1xyXG5cclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVMb2FkaW5nKGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgZGVsYXlUaW1lID0gYXJndW1lbnRzWzFdID8gYXJndW1lbnRzWzFdIDogc2hvd1RpbWU7XHJcbiAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgdGltZSA9IChkZWxheVRpbWUgKyBsb2FkVGltZSkgLSB0aW1lO1xyXG4gICAgaWYgKHRpbWUgPCAwKSB0aW1lID0gMDtcclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgICAgIGlmIChsYXlvdXQpIHtcclxuICAgICAgICAgICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGxldCBiYWNrZ3JvdW5kID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctYmcnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xyXG4gICAgfSwgdGltZSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7c2hvd0xvYWRpbmcsaGlkZUxvYWRpbmd9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvbG9hZGluZy5qcyIsImltcG9ydCB7U3RiQ2xpZW50fSBmcm9tIFwiLi90b29kby9fc3RiY2xpXCI7XHJcbmltcG9ydCB7Z2V0S2V5Q29kZXN9IGZyb20gJy4vdG9vZG8vX2tleWNvZGVzJztcclxuaW1wb3J0IHtoaWRlTG9hZGluZywgc2hvd0xvYWRpbmd9IGZyb20gXCIuL2FwcC9sb2FkaW5nXCI7XHJcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSBcIi4vYXBwL2RpYWxvZ1wiO1xyXG5pbXBvcnQge2dldEpTT059IGZyb20gXCIuL2FwcC9hYmNcIjtcclxuaW1wb3J0IHtzaG93Q2hpbGRMb2NrfSBmcm9tIFwiLi9hcHAvY2hpbGRMb2NrXCI7XHJcblxyXG5pbXBvcnQge0hvbWVNZW51fSBmcm9tICcuL0hvbWVNZW51JztcclxuaW1wb3J0IHtKYXZhMjBQYWdlfSBmcm9tICcuL0phdmEyMFBhZ2UnO1xyXG5pbXBvcnQge3BhZ2VVcmx9IGZyb20gJy4vYXBwL1BhZ2VVcmwnO1xyXG5pbXBvcnQge2NhbGxiYWNrQXJncyxhcHBBcmdzfSBmcm9tICcuL2FwcC9QYWdlQXJncyc7XHJcbmltcG9ydCB7c2hvd0FkMTZ9IGZyb20gJy4vYXBwL2RpYWxvZ0JpZ0FkJztcclxuXHJcblxyXG52YXIgc3RiY2xpID0gbmV3IFN0YkNsaWVudCgpO1xyXG52YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcblxyXG4vLyB2YXIgY2FsbGJhY2tVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy90ZGVudGVyL2NhbGxiYWNrLmh0bWwnO1xyXG52YXIgY2FsbGJhY2tVcmwgPSBcImh0dHA6Ly8xMjAuNzcuODIuNTQvdGRHYW1lQ2VudGVyL2NhbGxiYWNrLmh0bWxcIjtcclxuXHJcbmZ1bmN0aW9uIG9uU3RhcnQoY29kZSwgYml6KSB7XHJcbiAgICBoaWRlTG9hZGluZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGNvZGUgIT0gMCkge1xyXG4gICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dMb2FkaW5nKCfoh6rliqjnmbvpmYYnLCAn5bCP5Y+M5Zyo5L2/5Yqy5Yqg6L2977yM6K+356iN5YCZLi4uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RiY2xpLnN0YXJ0KG9uU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBqYXZhMjBQYWdlLnNob3coY3VycmVudEluZGV4LCBvblBhZ2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxLCAn5o+Q56S6JywgJ+ayoeacieaJvuWIsOeUqOaIt+S/oeaBr+WTpu+8gScsICfph43or5UnLCAn5Y+W5raIJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGRlVXNlciA9IGJpejtcclxuICAgICAgICAgICAgamF2YTIwUGFnZS5zaG93KGN1cnJlbnRJbmRleCwgb25QYWdlS2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25RdWVyeVNlcnZlMShjb2RlLCBiaXopIHtcclxuICAgIGhpZGVMb2FkaW5nKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFnZUluZGV4ID0gamF2YTIwUGFnZS5wYWdlSW5kZXg7XHJcbiAgICAgICAgdmFyIGl0ZW1JbmZvID0gamF2YTIwUGFnZS5pdGVtSW5mb3NbcGFnZUluZGV4ICogMTAgKyBjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgIGlmIChjb2RlID09IDAgJiYgYml6ICYmIGJpei5wcm9kdWN0SWQgPT0gaXRlbUluZm8ucHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgIHBhZ2VVcmwuY2FsbEdhbWUoaXRlbUluZm8sIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93TG9hZGluZygn5o+Q56S6JywgJ+ato+WcqOWKoOi9ve+8jOivt+eojeWAmS4uLicpO1xyXG4gICAgICAgICAgICBzdGJjbGkucXVlcnlQcm9kdWN0MShpdGVtSW5mby5wcm9kSWQsIG9uUXVlcnlQcm9kdWN0MSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gY29kZVxyXG4gKiBAcGFyYW0gYml6XHJcbiAqIEBwYXJhbSBiaXouY2F0ZWdvcnlcclxuICogQHBhcmFtIGJpei5wcm9kdWN0SWRcclxuICogQHBhcmFtIGJpei5wcmljZVxyXG4gKiBAcGFyYW0gYml6Lmdvb2RzTmFtZVxyXG4gKi9cclxuZnVuY3Rpb24gb25RdWVyeVByb2R1Y3QxKGNvZGUsIGJpeikge1xyXG4gICAgaGlkZUxvYWRpbmcoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwYWdlSW5kZXggPSBqYXZhMjBQYWdlLnBhZ2VJbmRleDtcclxuICAgICAgICB2YXIgaXRlbUluZm8gPSBqYXZhMjBQYWdlLml0ZW1JbmZvc1twYWdlSW5kZXggKiAxMCArIGN1cnJlbnRJbmRleF07XHJcbiAgICAgICAgaWYgKGNvZGUgPT0gMCAmJiBiaXogJiYgYml6LnByb2R1Y3RJZCA9PSBpdGVtSW5mby5wcm9kSWQpIHtcclxuICAgICAgICAgICAgdmFyIGNiID0gZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRkZVVzZXIuY2hpbGRMb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDaGlsZExvY2soZnVuY3Rpb24gKGNvZGUsIG1zZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25WYWxpZExvY2soY29kZSwgbXNnLCBqYXZhMjBQYWdlLCBpdGVtSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRPcmRlcihpdGVtSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBqYXZhMjBQYWdlLnNob3coY3VycmVudEluZGV4LCBvblBhZ2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy9sZXQgdGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAvL2lmIChiaXouY2F0ZWdvcnkgPT0gMCkge1xyXG4gICAgICAgICAgICAvLyAgICB0ZXh0ID0gJ+aCqOWwhuiKsei0uScgKyBiaXoucHJpY2UgLyAxMDAgKyAn5YWDL+aciOiuoui0rScgKyBiaXouZ29vZHNOYW1lO1xyXG4gICAgICAgICAgICAvL30gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgIHRleHQgPSAn5oKo5bCG6Iqx6LS5JyArIGJpei5wcmljZSAvIDEwMCArICflhYPotK3kubAnICsgYml6Lmdvb2RzTmFtZTtcclxuICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgIC8vc2hvd0RpYWxvZyhjYiwgMCwgJ+iuoui0reS/oeaBrycsIHRleHQsICfnoa7orqQnLCAn5Y+W5raIJyk7XHJcbiAgICAgICAgICAgIHNob3dBZDE2KGNiLCAwKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0RpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93TG9hZGluZygn5o+Q56S6JywgJ+ato+WcqOWKoOi9ve+8jOivt+eojeWAmS4uLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YmNsaS5xdWVyeVByb2R1Y3QxKGl0ZW1JbmZvLnByb2RJZCwgb25RdWVyeVByb2R1Y3QxKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgamF2YTIwUGFnZS5zaG93KGN1cnJlbnRJbmRleCwgb25QYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCwgJ+aPkOekuicsICfmsqHmnInmib7liLDkuqflk4Hkv6Hmga/lk6bvvIEnLCAn6YeN6K+VJywgJ+WPlua2iCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbk9yZGVyMShjb2RlLCBiaXopIHtcclxuICAgIGhpZGVMb2FkaW5nKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFnZUluZGV4ID0gamF2YTIwUGFnZS5wYWdlSW5kZXg7XHJcbiAgICAgICAgdmFyIGl0ZW1JbmZvID0gamF2YTIwUGFnZS5pdGVtSW5mb3NbcGFnZUluZGV4ICogMTAgKyBjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgIGlmIChjb2RlID09IDAgJiYgYml6KSB7XHJcbiAgICAgICAgICAgIHNob3dMb2FkaW5nKCfmj5DnpLonLCAn5q2j5Zyo5aSE55CG77yM6K+356iN5YCZLi4uJyk7XHJcbiAgICAgICAgICAgIHZhciBjYWxsVXJsID0gcGFnZVVybC5jYWxsVXJsKGl0ZW1JbmZvLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrQXJncy5zZXRSZWRpcmVjdFVybChjYWxsVXJsKTtcclxuICAgICAgICAgICAgY2FsbGJhY2tBcmdzLnNldFJldHVyblVybCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgIHN0YmNsaS5wYXkoYml6LnRyYWRlTm8pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZE9yZGVyKGl0ZW1JbmZvKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgamF2YTIwUGFnZS5zaG93KGN1cnJlbnRJbmRleCwgb25QYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCwgJ+iuouWNleaPkOekuicsICflsI/lj4zmnI3liqHlvIDlsI/lt67llabvvIzor7fnqI3lkI7ph43or5XjgIInLCAn6YeN6K+VJywgJ+i/lOWbnicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbk1lbnVLZXkoa2V5KSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5kb3duOlxyXG4gICAgICAgICAgICBob21lTWVudS5oaWRlKCk7XHJcbiAgICAgICAgICAgIGphdmEyMFBhZ2Uuc2hvdyhqYXZhMjBQYWdlLmN1cnJlbnQsIG9uUGFnZUtleSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5vazpcclxuICAgICAgICAgICAgaWYgKGhvbWVNZW51LmN1cnJlbnQgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgYXBwQXJncy5vbkhvbWVQYWdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XHJcbiAgICAgICAgICAgIGFwcEFyZ3Mub25Ib21lUGFnZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25QYWdlS2V5KGtleSkge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgIC8vaWYgKGN1cnJlbnRJbmRleCAlIDIgPT0gMCkge1xyXG4gICAgICAgICAgICAvLyAgICBqYXZhMjBQYWdlLmhpZGUoKTtcclxuICAgICAgICAgICAgLy8gICAgaG9tZU1lbnUuc2hvdyhob21lTWVudS5jdXJyZW50LCBvbk1lbnVLZXksIHRkZVVzZXIpO1xyXG4gICAgICAgICAgICAvLyAgICAvL2hvbWVNZW51LnNob3coaG9tZU1lbnUuY3VycmVudCwgb25NZW51S2V5KTtcclxuICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudEluZGV4KXtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEyOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAxNTpcclxuICAgICAgICAgICAgICAgIGNhc2UgMTc6XHJcbiAgICAgICAgICAgICAgICAgICAgamF2YTIwUGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaG9tZU1lbnUuc2hvdyhob21lTWVudS5jdXJyZW50LCBvbk1lbnVLZXksIHRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgLy9ob21lTWVudS5zaG93KGhvbWVNZW51LmN1cnJlbnQsIG9uTWVudUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5vazpcclxuICAgICAgICAgICAgLy/mnKrnmbvlvZVcclxuICAgICAgICAgICAgaWYgKCFzdGJjbGkuaXNSZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgc2hvd0xvYWRpbmcoJ+iHquWKqOeZu+mZhicsICflsI/lj4zlnKjkvb/lirLliqDovb3vvIzor7fnqI3lgJkuLi4nKTtcclxuICAgICAgICAgICAgICAgIHN0YmNsaS5zdGFydChvblN0YXJ0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBwYWdlSW5kZXggPSBqYXZhMjBQYWdlLnBhZ2VJbmRleDtcclxuICAgICAgICAgICAgdmFyIGl0ZW1JbmZvID0gamF2YTIwUGFnZS5pdGVtSW5mb3NbcGFnZUluZGV4ICogMTAgKyBjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoaXRlbUluZm8udHJpYWwgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcGFnZVVybC5jYWxsR2FtZShpdGVtSW5mbywgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0ZW1JbmZvLnRyaWFsID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBqYXZhMjBQYWdlLnNob3coY3VycmVudEluZGV4LCBvblBhZ2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgfSwgMSwgJ+aVrOivt+acn+W+hScsICfmnI3liqHmmoLmnKrlvIDpgJrlk6bvvIEnLCAn56Gu5a6aJywgJ+WPlua2iCcpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/mnKrlvIDpgJpcclxuICAgICAgICAgICAgc2hvd0xvYWRpbmcoJ+aPkOekuicsICfmraPlnKjliqDovb3vvIzor7fnqI3lgJkuLi4nKTtcclxuICAgICAgICAgICAgc3RiY2xpLnF1ZXJ5U2VydmUxKGl0ZW1JbmZvLnByb2R1Y3RJZCwgb25RdWVyeVNlcnZlMSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5udW0wOlxyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxyXG4gICAgICAgICAgICBhcHBBcmdzLm9uSG9tZVBhZ2UoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmVzYzpcclxuICAgICAgICAgICAgYXBwQXJncy5vbkZpcnN0UGFnZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGN1cnJlbnRJbmRleCA9IGphdmEyMFBhZ2UuY3VycmVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBjb2RlIHtpbnR9XHJcbiAqIEBwYXJhbSBtc2cge3N0cmluZ31cclxuICogQHBhcmFtIG93bmVyIHtIb21lTWVudX1cclxuICogQHBhcmFtIGl0ZW1JbmZvIHtPYmplY3R9XHJcbiAqL1xyXG5mdW5jdGlvbiBvblZhbGlkTG9jayhjb2RlLCBtc2csIG93bmVyLCBpdGVtSW5mbykge1xyXG4gICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgIHZhciBvbGRMb2NrID0gdGRlVXNlci5jaGlsZExvY2s7XHJcbiAgICAgICAgaWYgKG1zZyA9PSBvbGRMb2NrKSB7XHJcbiAgICAgICAgICAgIHNlbmRPcmRlcihpdGVtSW5mbyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0RpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2hpbGRMb2NrKGZ1bmN0aW9uIChjb2RlLCBtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25WYWxpZExvY2soY29kZSwgbXNnLCBvd25lciwgaXRlbUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEsIDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG9uUGFnZUtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDAsICfmj5DnpLonLCAn56ul6ZSB6aqM6K+B5Ye66ZSZJywgJ+mHjeivlScsICflj5bmtognKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb25QYWdlS2V5KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZE9yZGVyKGl0ZW1JbmZvKSB7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICBcImlkXCI6IGl0ZW1JbmZvLmlkLFxyXG4gICAgICAgIFwiZ2FtZUlkXCI6IGl0ZW1JbmZvLmdhbWVJZCxcclxuICAgICAgICBcInByb2R1Y3RJZFwiOiBpdGVtSW5mby5wcm9kdWN0SWQsXHJcbiAgICAgICAgXCJwcm9kSWRcIjogaXRlbUluZm8ucHJvZElkLFxyXG4gICAgICAgIFwidHJpYWxcIjogaXRlbUluZm8udHJpYWxcclxuICAgIH07XHJcbiAgICB2YXIgYXJncyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgc2hvd0xvYWRpbmcoJ+aPkOekuicsICfmraPlnKjlpITnkIbvvIzor7fnqI3lgJkuLi4nKTtcclxuICAgIHN0YmNsaS5vcmRlcjEoaXRlbUluZm8ucHJvZElkLCBjYWxsYmFja1VybCwgYXJncywgb25PcmRlcjEpO1xyXG59XHJcblxyXG5cclxudmFyIHRkZVVzZXIgPSBudWxsO1xyXG52YXIgaG9tZU1lbnU7XHJcbnZhciBqYXZhMjBQYWdlO1xyXG52YXIgY3VycmVudEluZGV4O1xyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaG9tZU1lbnUgPSBuZXcgSG9tZU1lbnUoKTtcclxuXHJcbiAgICBqYXZhMjBQYWdlID0gbmV3IEphdmEyMFBhZ2UoKTtcclxuICAgIGN1cnJlbnRJbmRleCA9IGphdmEyMFBhZ2UuY3VycmVudDtcclxuXHJcbiAgICBnZXRKU09OKCdkYXRhL3RkZV9qYXZhMjBfaW5mb3MuanNvbicsIGZ1bmN0aW9uIChpdGVtSW5mb3MpIHtcclxuICAgICAgICAvL+WmguaenOe7meeahOaVsOaNruS4jeaYr+aVtOW9ou+8jOWImei9rOaNouS4gOasoVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbUluZm9zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtSW5mbyA9IGl0ZW1JbmZvc1tpXTtcclxuICAgICAgICAgICAgaXRlbUluZm8uaWQgPSBwYXJzZUludChpdGVtSW5mby5pZCk7XHJcbiAgICAgICAgICAgIGl0ZW1JbmZvLmdhbWVJZCA9IHBhcnNlSW50KGl0ZW1JbmZvLmdhbWVJZCk7XHJcbiAgICAgICAgICAgIGl0ZW1JbmZvLnByb2R1Y3RJZCA9IHBhcnNlSW50KGl0ZW1JbmZvLnByb2R1Y3RJZCk7XHJcbiAgICAgICAgICAgIGl0ZW1JbmZvLnByb2RJZCA9IHBhcnNlSW50KGl0ZW1JbmZvLnByb2RJZCk7XHJcbiAgICAgICAgICAgIGl0ZW1JbmZvLnRyaWFsID0gcGFyc2VJbnQoaXRlbUluZm8udHJpYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBqYXZhMjBQYWdlLnN0YXJ0KGl0ZW1JbmZvcywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL3Nob3dMb2FkaW5nKCfoh6rliqjnmbvpmYYnLCAn5bCP5Y+M5Zyo5L2/5Yqy5Yqg6L2977yM6K+356iN5YCZLi4uJyk7XHJcbiAgICAgICAgICAgIC8vc3RiY2xpLnN0YXJ0KG9uU3RhcnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGphdmEyMFBhZ2Uuc2hvdyhqYXZhMjBQYWdlLmN1cnJlbnQsIG9uUGFnZUtleSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzaG93TG9hZGluZygpO1xyXG4gICAgICAgICAgICBzdGJjbGkuc3RhcnQob25TdGFydCk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH0pO1xyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvamF2YTIwLmpzIiwiaW1wb3J0IHtyZXRhaWwscmV0YWlsSWR9IGZyb20gXCIuL19yZXRhaWxcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEtleUNvZGVzKCkge1xyXG4gICAgbGV0IGtleU1hcCA9IHt9O1xyXG5cclxuICAgIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ3hnZCkge1xyXG4gICAgICAgIGtleU1hcCA9IHsgLy8g5bm/6KW/5bm/55S1XHJcbiAgICAgICAgICAgIHVwOiAzOCwgICAgICAgIC8vIOS4ilxyXG4gICAgICAgICAgICBkb3duOiA0MCwgICAgICAvLyDkuItcclxuICAgICAgICAgICAgbGVmdDogMzcsICAgICAgLy8g5bemXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzOSwgICAgIC8vIOWPs1xyXG4gICAgICAgICAgICBvazogMTMsICAgICAgICAvLyDnoa7lrppcclxuICAgICAgICAgICAgZjE6IDQwMCwgICAgICAgLy8gZjEgLy/nuqJcclxuICAgICAgICAgICAgZjI6IDQwMSwgICAgICAgLy8gZjIgLy/ok51cclxuICAgICAgICAgICAgZjM6IDQwMywgICAgICAgLy8gZjMgLy/pu4RcclxuICAgICAgICAgICAgZjQ6IDQwMiwgICAgICAgLy8gZjQgLy/nu79cclxuICAgICAgICAgICAgbnVtMTogNDksICAgICAgLy8g5pWw5a2XMVxyXG4gICAgICAgICAgICBudW0yOiA1MCwgICAgICAvLyDmlbDlrZcyXHJcbiAgICAgICAgICAgIG51bTM6IDUxLCAgICAgIC8vIOaVsOWtlzNcclxuICAgICAgICAgICAgbnVtNDogNTIsICAgICAgLy8g5pWw5a2XNFxyXG4gICAgICAgICAgICBudW01OiA1MywgICAgICAvLyDmlbDlrZc1XHJcbiAgICAgICAgICAgIG51bTY6IDU0LCAgICAgIC8vIOaVsOWtlzZcclxuICAgICAgICAgICAgbnVtNzogNTUsICAgICAgLy8g5pWw5a2XN1xyXG4gICAgICAgICAgICBudW04OiA1NiwgICAgICAvLyDmlbDlrZc4XHJcbiAgICAgICAgICAgIG51bTk6IDU3LCAgICAgIC8vIOaVsOWtlzlcclxuICAgICAgICAgICAgbnVtMDogNDgsICAgICAgLy8g5pWw5a2XMFxyXG4gICAgICAgICAgICBtdXRlOiA1MTgsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDM5OSwgICAgICAvLyDov5Tlm55cclxuICAgICAgICAgICAgdHJhY2s6IDQwNiwgICAgIC8vIOWjsOmBk++8nyAvL+WjsOmBk+mUrlxyXG4gICAgICAgICAgICB2b2xVcDogNTE3LCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogNTE2LCAgLy8g5YeP5bCP6Z+z6YePXHJcbiAgICAgICAgICAgIGZhdjogNDA0LCAgICAgICAvLyDllpzmrKJcclxuICAgICAgICAgICAgcGxheUJhY2s6IDUyMSwgIC8vIOWbnuaUviAgLy/ngrnmkq3plK5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMywgICAgLy8g5LiK5LiA6aG1XHJcbiAgICAgICAgICAgIHBhZ2VEb3duOiAzNCwgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA1MTUsICAgICAgIC8vIOiPnOWNlVxyXG4gICAgICAgICAgICBlc2M6IDUxNCwgICAgICAgIC8v6YCA5Ye6XHJcbiAgICAgICAgICAgIGhvbWU6IDUyMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuaG55eCkge1xyXG4gICAgICAgIC8va2V5TWFwID0geyAvLyDmsrPljZfmnInnur8gbGludXhcclxuICAgICAgICAvLyAgICB1cDogNjUzNjIsXHJcbiAgICAgICAgLy8gICAgZG93bjogNjUzNjQsXHJcbiAgICAgICAgLy8gICAgbGVmdDogNjUzNjEsXHJcbiAgICAgICAgLy8gICAgcmlnaHQ6IDY1MzYzLFxyXG4gICAgICAgIC8vICAgIG9rOiA2NTI5MyxcclxuICAgICAgICAvLyAgICBmMTogMzIsXHJcbiAgICAgICAgLy8gICAgZjI6IDMzLFxyXG4gICAgICAgIC8vICAgIGYzOiAzNCxcclxuICAgICAgICAvLyAgICBmNDogMzUsXHJcbiAgICAgICAgLy8gICAgbnVtMTogNDksXHJcbiAgICAgICAgLy8gICAgbnVtMjogNTAsXHJcbiAgICAgICAgLy8gICAgbnVtMzogNTEsXHJcbiAgICAgICAgLy8gICAgbnVtNDogNTIsXHJcbiAgICAgICAgLy8gICAgbnVtNTogNTMsXHJcbiAgICAgICAgLy8gICAgbnVtNjogNTQsXHJcbiAgICAgICAgLy8gICAgbnVtNzogNTUsXHJcbiAgICAgICAgLy8gICAgbnVtODogNTYsXHJcbiAgICAgICAgLy8gICAgbnVtOTogNTcsXHJcbiAgICAgICAgLy8gICAgbnVtMDogNDgsXHJcbiAgICAgICAgLy8gICAgbXV0ZTogNjM1NjMsXHJcbiAgICAgICAgLy8gICAgYmFjazogNjUzNjcsXHJcbiAgICAgICAgLy8gICAgdHJhY2s6IDY1MzA3LFxyXG4gICAgICAgIC8vICAgIHZvbFVwOiA2MzU2MSxcclxuICAgICAgICAvLyAgICB2b2xEb3duOiA2MzU2MixcclxuICAgICAgICAvLyAgICBmYXY6IDM2LFxyXG4gICAgICAgIC8vICAgIHBsYXlCYWNrOiA3MixcclxuICAgICAgICAvLyAgICBwYWdlVXA6IDI1LFxyXG4gICAgICAgIC8vICAgIHBhZ2VEb3duOiAyNixcclxuICAgICAgICAvLyAgICBtZW51OiA2NTM2MCxcclxuICAgICAgICAvLyAgICBlc2M6IDI3LFxyXG4gICAgICAgIC8vICAgIGhvbWU6IDY1MzYwXHJcbiAgICAgICAgLy99O1xyXG4gICAgICAgIGtleU1hcCA9IHsgLy8g5rKz5Y2X5pyJ57q/IGFuZHJvaWRcclxuICAgICAgICAgICAgdXA6IDM4LCAgICAgICAgLy8g5LiKXHJcbiAgICAgICAgICAgIGRvd246IDQwLCAgICAgIC8vIOS4i1xyXG4gICAgICAgICAgICBsZWZ0OiAzNywgICAgICAvLyDlt6ZcclxuICAgICAgICAgICAgcmlnaHQ6IDM5LCAgICAgLy8g5Y+zXHJcbiAgICAgICAgICAgIG9rOiAxMywgICAgICAgIC8vIOehruWumlxyXG4gICAgICAgICAgICBmMTogMTEyLCAgICAgICAvLyBmMVxyXG4gICAgICAgICAgICBmMjogMTEzLCAgICAgICAvLyBmMlxyXG4gICAgICAgICAgICBmMzogMTE0LCAgICAgICAvLyBmM1xyXG4gICAgICAgICAgICBmNDogMTE1LCAgICAgICAvLyBmNFxyXG4gICAgICAgICAgICBudW0xOiA0OSwgICAgICAvLyDmlbDlrZcxXHJcbiAgICAgICAgICAgIG51bTI6IDUwLCAgICAgIC8vIOaVsOWtlzJcclxuICAgICAgICAgICAgbnVtMzogNTEsICAgICAgLy8g5pWw5a2XM1xyXG4gICAgICAgICAgICBudW00OiA1MiwgICAgICAvLyDmlbDlrZc0XHJcbiAgICAgICAgICAgIG51bTU6IDUzLCAgICAgIC8vIOaVsOWtlzVcclxuICAgICAgICAgICAgbnVtNjogNTQsICAgICAgLy8g5pWw5a2XNlxyXG4gICAgICAgICAgICBudW03OiA1NSwgICAgICAvLyDmlbDlrZc3XHJcbiAgICAgICAgICAgIG51bTg6IDU2LCAgICAgIC8vIOaVsOWtlzhcclxuICAgICAgICAgICAgbnVtOTogNTcsICAgICAgLy8g5pWw5a2XOVxyXG4gICAgICAgICAgICBudW0wOiA0OCwgICAgICAvLyDmlbDlrZcwIC8v5pWw5a2XMCDov5Tlm55cclxuICAgICAgICAgICAgbXV0ZTogNzcsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDgsICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA4MiwgICAgIC8vIOWjsOmBk++8n1xyXG4gICAgICAgICAgICB2b2xVcDogMTkwLCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogMTg4LCAgLy8g5YeP5bCP6Z+z6YePXHJcbiAgICAgICAgICAgIGZhdjogODQsICAgICAgIC8vIOWWnOasolxyXG4gICAgICAgICAgICBwbGF5QmFjazogODAsICAvLyDlm57mlL5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMywgICAgLy8g5LiK5LiA6aG1XHJcbiAgICAgICAgICAgIHBhZ2VEb3duOiAzNCwgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA3MiwgICAgICAgLy8g6I+c5Y2VXHJcbiAgICAgICAgICAgIGVzYzogMjcsXHJcbiAgICAgICAgICAgIGhvbWU6IDcyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHJldGFpbElkID09IHJldGFpbC5nZGdkKSB7XHJcbiAgICAgICAga2V5TWFwID0geyAvLyDlub/kuJzlub/nlLVcclxuICAgICAgICAgICAgdXA6IDg3LCAgICAgICAgLy8g5LiKIFfplK5cclxuICAgICAgICAgICAgZG93bjogODMsICAgICAgLy8g5LiLIFPplK5cclxuICAgICAgICAgICAgbGVmdDogNjUsICAgICAgLy8g5bemIEHplK5cclxuICAgICAgICAgICAgcmlnaHQ6IDY4LCAgICAgLy8g5Y+zIETplK5cclxuICAgICAgICAgICAgb2s6IDEzLCAgICAgICAgLy8g56Gu5a6aXHJcbiAgICAgICAgICAgIGYxOiA0MDAsICAgICAgIC8vIGYxIC8v57qiXHJcbiAgICAgICAgICAgIGYyOiA0MDEsICAgICAgIC8vIGYyIC8v6JOdXHJcbiAgICAgICAgICAgIGYzOiA0MDIsICAgICAgIC8vIGYzIC8v6buEXHJcbiAgICAgICAgICAgIGY0OiA0MDMsICAgICAgIC8vIGY0IC8v57u/XHJcbiAgICAgICAgICAgIG51bTE6IDQ5LCAgICAgIC8vIOaVsOWtlzFcclxuICAgICAgICAgICAgbnVtMjogNTAsICAgICAgLy8g5pWw5a2XMlxyXG4gICAgICAgICAgICBudW0zOiA1MSwgICAgICAvLyDmlbDlrZczXHJcbiAgICAgICAgICAgIG51bTQ6IDUyLCAgICAgIC8vIOaVsOWtlzRcclxuICAgICAgICAgICAgbnVtNTogNTMsICAgICAgLy8g5pWw5a2XNVxyXG4gICAgICAgICAgICBudW02OiA1NCwgICAgICAvLyDmlbDlrZc2XHJcbiAgICAgICAgICAgIG51bTc6IDU1LCAgICAgIC8vIOaVsOWtlzdcclxuICAgICAgICAgICAgbnVtODogNTYsICAgICAgLy8g5pWw5a2XOFxyXG4gICAgICAgICAgICBudW05OiA1NywgICAgICAvLyDmlbDlrZc5XHJcbiAgICAgICAgICAgIG51bTA6IDQ4LCAgICAgIC8vIOaVsOWtlzBcclxuICAgICAgICAgICAgbXV0ZTogNjcsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDgsICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA4NiwgICAgIC8vIOWjsOmBk++8nyAvL+WjsOmBk+mUrlxyXG4gICAgICAgICAgICB2b2xVcDogNjEsICAgIC8vIOWinuWkp+mfs+mHj1xyXG4gICAgICAgICAgICB2b2xEb3duOiA0NSwgIC8vIOWHj+Wwj+mfs+mHj1xyXG4gICAgICAgICAgICBmYXY6IDc2LCAgICAgICAvLyDllpzmrKJcclxuICAgICAgICAgICAgcGxheUJhY2s6IDUyMSwgIC8vIOWbnuaUviAgLy/ngrnmkq3plK5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMDYsICAgIC8vIOS4iuS4gOmhtVxyXG4gICAgICAgICAgICBwYWdlRG93bjogMzA3LCAgLy8g5LiL5LiA6aG1XHJcbiAgICAgICAgICAgIG1lbnU6IDcyLCAgICAgICAvLyDoj5zljZVcclxuICAgICAgICAgICAgZXNjOiAyNyxcclxuICAgICAgICAgICAgaG9tZTogNzJcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0gZWxzZSB7IC8vIHdpbmRvd3Mg6ZSu56CBXHJcbiAgICAgICAga2V5TWFwID0ge1xyXG4gICAgICAgICAgICB1cDogMzgsICAgICAgICAvLyDkuIpcclxuICAgICAgICAgICAgZG93bjogNDAsICAgICAgLy8g5LiLXHJcbiAgICAgICAgICAgIGxlZnQ6IDM3LCAgICAgIC8vIOW3plxyXG4gICAgICAgICAgICByaWdodDogMzksICAgICAvLyDlj7NcclxuICAgICAgICAgICAgb2s6IDEzLCAgICAgICAgLy8g56Gu5a6aXHJcbiAgICAgICAgICAgIGYxOiAxMTIsICAgICAgIC8vIGYxXHJcbiAgICAgICAgICAgIGYyOiAxMTMsICAgICAgIC8vIGYyXHJcbiAgICAgICAgICAgIGYzOiAxMTQsICAgICAgIC8vIGYzXHJcbiAgICAgICAgICAgIGY0OiAxMTUsICAgICAgIC8vIGY0XHJcbiAgICAgICAgICAgIG51bTE6IDQ5LCAgICAgIC8vIOaVsOWtlzFcclxuICAgICAgICAgICAgbnVtMjogNTAsICAgICAgLy8g5pWw5a2XMlxyXG4gICAgICAgICAgICBudW0zOiA1MSwgICAgICAvLyDmlbDlrZczXHJcbiAgICAgICAgICAgIG51bTQ6IDUyLCAgICAgIC8vIOaVsOWtlzRcclxuICAgICAgICAgICAgbnVtNTogNTMsICAgICAgLy8g5pWw5a2XNVxyXG4gICAgICAgICAgICBudW02OiA1NCwgICAgICAvLyDmlbDlrZc2XHJcbiAgICAgICAgICAgIG51bTc6IDU1LCAgICAgIC8vIOaVsOWtlzdcclxuICAgICAgICAgICAgbnVtODogNTYsICAgICAgLy8g5pWw5a2XOFxyXG4gICAgICAgICAgICBudW05OiA1NywgICAgICAvLyDmlbDlrZc5XHJcbiAgICAgICAgICAgIG51bTA6IDQ4LCAgICAgIC8vIOaVsOWtlzAgLy/mlbDlrZcwIOi/lOWbnlxyXG4gICAgICAgICAgICBtdXRlOiA3NywgICAgICAvLyDpnZnpn7NcclxuICAgICAgICAgICAgYmFjazogOCwgICAgICAvLyDov5Tlm55cclxuICAgICAgICAgICAgdHJhY2s6IDgyLCAgICAgLy8g5aOw6YGT77yfXHJcbiAgICAgICAgICAgIHZvbFVwOiAxOTAsICAgIC8vIOWinuWkp+mfs+mHj1xyXG4gICAgICAgICAgICB2b2xEb3duOiAxODgsICAvLyDlh4/lsI/pn7Pph49cclxuICAgICAgICAgICAgZmF2OiA4NCwgICAgICAgLy8g5Zac5qyiXHJcbiAgICAgICAgICAgIHBsYXlCYWNrOiA4MCwgIC8vIOWbnuaUvlxyXG4gICAgICAgICAgICBwYWdlVXA6IDMzLCAgICAvLyDkuIrkuIDpobVcclxuICAgICAgICAgICAgcGFnZURvd246IDM0LCAgLy8g5LiL5LiA6aG1XHJcbiAgICAgICAgICAgIG1lbnU6IDcyLCAgICAgICAvLyDoj5zljZVcclxuICAgICAgICAgICAgZXNjOiAyNyxcclxuICAgICAgICAgICAgaG9tZTogNzJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleU1hcDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXZlbnQoZXZ0KSB7XHJcbiAgICByZXR1cm4gZXZ0IHx8IHdpbmRvdy5ldmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0S2V5KGV2dCkge1xyXG4gICAgLy/mlK/mjIFJReOAgUZGXHJcbiAgICBldnQgPSBnZXRFdmVudChldnQpO1xyXG4gICAgcmV0dXJuIGV2dC5rZXlDb2RlIHx8IGV2dC53aGljaCB8fCBldnQuY2hhckNvZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvZGVzKCkge1xyXG4gICAgY29uc3Qga2V5TWFwID0gZ2V0S2V5Q29kZXMoKTtcclxuICAgIHZhciBjb2RlcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgY29kZSBpbiBrZXlNYXApIHtcclxuICAgICAgICBpZiAoa2V5TWFwLmhhc093blByb3BlcnR5KGNvZGUpKSB7XHJcbiAgICAgICAgICAgIGNvZGVzLnB1c2goa2V5TWFwW2NvZGVdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29kZXM7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX2tleWNvZGVzLmpzIiwiY29uc3QgcmV0YWlsID0ge1xyXG4gICAgZ3hnZDogJzk2MzM1JyxcclxuICAgIGhueXg6ICc5NjI2NicsXHJcbiAgICBnZGdkOiAnOTY5NTYnLFxyXG4gICAgbm9uZTogJzEwMDAnXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRSZXRhaWxJZCgpIHtcclxuICAgIHRyeSB7Ly/lub/opb/lub/nlLVcclxuICAgICAgICBpZiAoZ3Vhbmd4aSAmJiBpUGFuZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJldGFpbC5neGdkO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHRyeSB7Ly/msrPljZfmnInnur9cclxuICAgICAgICB2YXIgU3lzdGVtID0gd2luZG93LlN5c3RlbTtcclxuICAgICAgICBpZiAoU3lzdGVtICYmIFN5c3RlbS5zdGJJRCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0YWlsLmhueXg7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgdHJ5IHsvL+W5v+S4nOW5v+eUtVxyXG4gICAgICAgIGlmIChDQSAmJiBTdG9yYWdlU2VydmljZSAmJiBGaWxlU3lzdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXRhaWwuZ2RnZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy92YXIgc3RvcmFnZUxpc3QgPSBTdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlSW5mb3MoKTtcclxuICAgICAgICAvL2lmIChzdG9yYWdlTGlzdCAmJiBzdG9yYWdlTGlzdCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vICAgIHZhciBwYXJ0aXRpb25QYXRoTGlzdCA9IHN0b3JhZ2VMaXN0WzBdLmdldFBhcnRpdGlvbnNJbmZvKClbMF07XHJcbiAgICAgICAgLy8gICAgdmFyIHBhcnRpdGlvblBhdGggPSBwYXJ0aXRpb25QYXRoTGlzdC5wYXRoO1xyXG4gICAgICAgIC8vICAgIHZhciBkaXIgPSBGaWxlU3lzdGVtLmdldERpcmVjdG9yeShwYXJ0aXRpb25QYXRoKTtcclxuICAgICAgICAvLyAgICB2YXIgZmxpc3QgPSBkaXIuZmlsZUxpc3Q7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICBmb3IgKHZhciBpIGluIGZsaXN0KSB7XHJcbiAgICAgICAgLy8gICAgICAgIGlmIChmbGlzdFtpXS5uYW1lLnN1YnN0cmluZygwLCA2KSA9PSBcImNhY2FyZFwiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICB2YXIgY2FyZE5vID0gXCI5Njk1NlwiICsgZmxpc3RbaV0ubmFtZS5zdWJzdHJpbmcoNiwgMTIpO1xyXG4gICAgICAgIC8vICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgfVxyXG4gICAgICAgIC8vfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldGFpbC5ub25lO1xyXG59XHJcblxyXG52YXIgcmV0YWlsSWQgPSBnZXRSZXRhaWxJZCgpO1xyXG5leHBvcnQge3JldGFpbCxnZXRSZXRhaWxJZCxyZXRhaWxJZH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fcmV0YWlsLmpzIiwiaW1wb3J0IHtSZXF1ZXN0Qm9keSwgVG9vZG9DbGllbnR9IGZyb20gXCIuL190ZGNsaVwiO1xyXG5pbXBvcnQge3JldGFpbElkLHJldGFpbH0gZnJvbSBcIi4vX3JldGFpbFwiO1xyXG5pbXBvcnQge3N0Yk51bGx9IGZyb20gXCIuL19zdGJudWxsXCI7XHJcbnZhciBtZDUgPSByZXF1aXJlKCdtZDUnKTtcclxudmFyIEpTT04gPSByZXF1aXJlKCdKU09OJyk7XHJcblxyXG5mdW5jdGlvbiBTdGJDbGllbnQoKSB7XHJcbiAgICAvLyB0aGlzLm9yaWdpblVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnL3Rkc3J2JztcclxuICAgIHRoaXMub3JpZ2luVXJsID0gXCJodHRwOi8vbG9jYWxob3N0L1Rvb2RvU2VydmljZS9wdWJsaWMvXCI7XHJcbiAgICB0aGlzLmFwcEtleSA9ICcxMDAwJztcclxuICAgIHRoaXMuYXBwU2VjcmV0ID0gJ1JjT0ZodEFZendDR285MVBHSGRWJztcclxuICAgIHRoaXMuX3RkY2xpID0gbnVsbDtcclxufVxyXG5TdGJDbGllbnQucHJvdG90eXBlID0ge1xyXG4gICAgaXNSZWFkeTogZmFsc2UsXHJcbiAgICB1c2VySWQ6ICcnLFxyXG4gICAgdG9rZW46ICcnLFxyXG5cclxuICAgIG1kNTogZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgIHJldHVybiBtZDUobXNnICsgdGhpcy5hcHBTZWNyZXQpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGNhbGxiYWNrLmJpelxyXG4gICAgICovXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fdGRjbGkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGRjbGkgPSBuZXcgVG9vZG9DbGllbnQodGhpcy5hcHBLZXksIHRoaXMuYXBwU2VjcmV0LCB0aGlzLm9yaWdpblVybCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdG9rZW4gPSBzdGJOdWxsLmdldFZhbHVlKCd0b29kby50b2tlbicpO1xyXG4gICAgICAgIGxldCB1c2VySWQgPSBzdGJOdWxsLmdldFZhbHVlKCd0b29kby51c2VySWQnKTtcclxuICAgICAgICAvLyBpZiAodG9rZW4gJiYgdXNlcklkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcclxuICAgICAgICAvLyAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soMCk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncmV0YWlsSWQnOiByZXRhaWxJZCxcclxuICAgICAgICAgICAgJ3JlZ2lvbkNvZGUnOiBzdGJOdWxsLmdldFJlZ2lvbkNvZGUoKSxcclxuICAgICAgICAgICAgJ2NhcmRUVic6IHN0Yk51bGwuZ2V0Q2FyZFRWKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby91c2VyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvJyk7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2VuZChib2R5SW4sIGZ1bmN0aW9uIChib2R5T3V0KSB7XHJcbiAgICAgICAgICAgIGlmIChib2R5T3V0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYml6T3V0ID0gSlNPTi5wYXJzZShib2R5T3V0LmJpekNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgb3duZXIudXNlcklkID0gYml6T3V0LnVzZXJJZDtcclxuICAgICAgICAgICAgICAgIG93bmVyLnRva2VuID0gYm9keU91dC50b2tlbjtcclxuICAgICAgICAgICAgICAgIHN0Yk51bGwuc2V0VmFsdWUoJ3Rvb2RvLnVzZXJJZCcsIG93bmVyLnVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBzdGJOdWxsLnNldFZhbHVlKCd0b29kby50b2tlbicsIG93bmVyLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIG93bmVyLmlzUmVhZHkgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vb3duZXIudGRlVXNlcihjYWxsYmFjayk7Ly/ov5Tlm57lpKfljoXnmoTotKblj7fkv6Hmga9cclxuICAgICAgICAgICAgICAgIG93bmVyLnRkZVVzZXIoZnVuY3Rpb24gKGNvZGUsIGJpeikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYml6LmJpelVzZXIgPSBiaXpPdXQuYml6VXNlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhjb2RlLCBiaXopO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQuY29kZSwgYm9keU91dC5zdWJDb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGJpelVzZXI6IGZ1bmN0aW9uIChiaXpJbiwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby9iaXpVc2VyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kbycpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICBhZGRXaW5uZXI6IGZ1bmN0aW9uIChwcml6ZUlELHN0YXRlLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcml6ZUlEJzpwcml6ZUlELFxyXG4gICAgICAgICAgICAnc3RhdGUnOnN0YXRlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2FkZFdpbm5lcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIGFkZFN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2FkZFN0YXRlJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbik7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRhRnJlZVN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3VwZGF0YUZyZWVTdGF0ZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4pO1xyXG4gICAgfSxcclxuICAgIGdldFByaXplOiBmdW5jdGlvbiAoaWQsY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ2lkJzppZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2dldFByaXplJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbixjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgdHVybnRhYmxlU3RhdGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS90dXJudGFibGVTdGF0ZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgLy8gYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICB0dXJudGFibGVQcm86IGZ1bmN0aW9uICh0eXBlLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAndHlwZSc6dHlwZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3R1cm50YWJsZVBybyc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICBwcml6ZU51bTpmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvdHVybnRhYmxlUHJpemVOdW0nO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG5cclxuICAgIHdpbm5lckluZm86IGZ1bmN0aW9uIChudW0sY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ251bSc6IG51bVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3dpbm5lckluZm8nO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHlwZSAx77ya5pyq6aKG5Y+WIDI65bey6aKG5Y+WIDPvvJrlt7Lov4fmnJ9cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHVzZXJXaW5uZXI6IGZ1bmN0aW9uICh0eXBlLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICd0eXBlJzogdHlwZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3VzZXJXaW5uZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICBhZGRDb2luczogZnVuY3Rpb24gKGFkZE51bSkge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnYWRkTnVuJzogYWRkTnVtXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvYWRkQ29pbic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4pO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2R1Y3RJZCDmn6Xor6LnmoTkuqflk4Hnu5/kuIDnvJblj7dcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBjYWxsYmFjay5iaXpcclxuICAgICAqL1xyXG4gICAgcXVlcnlTZXJ2ZTE6IGZ1bmN0aW9uIChwcm9kdWN0SWQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcm9kdWN0SWQnOiBwcm9kdWN0SWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3NlcnZlL3F1ZXJ5MSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vc2VydmUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvZHVjdElkIOafpeivoueahOS6p+WTgee7n+S4gOe8luWPt1xyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6XHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5UHJvZHVjdDE6IGZ1bmN0aW9uIChwcm9kdWN0SWQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcm9kdWN0SWQnOiBwcm9kdWN0SWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL21hcmtldC9xdWVyeTEnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL21hcmtldCcpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9kdWN0SWQg55Sf5oiQ6K6i5Y2V55qE5Lqn5ZOB57uf5LiA57yW5Y+3XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2tVcmwg5pSv5LuY5ZCO5Zue6LCD5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSDljp/moLfkvKDlm57nu5ljYWxsYmFja1VybFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6XHJcbiAgICAgKi9cclxuICAgIG9yZGVyMTogZnVuY3Rpb24gKHByb2R1Y3RJZCwgY2FsbGJhY2tVcmwsIGRhdGEsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcm9kdWN0SWQnOiBwcm9kdWN0SWQsXHJcbiAgICAgICAgICAgICd1c2VySWQnOiB0aGlzLnVzZXJJZCxcclxuICAgICAgICAgICAgJ2NhbGxiYWNrVXJsJzogY2FsbGJhY2tVcmwsXHJcbiAgICAgICAgICAgICdkYXRhJzogZGF0YVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdHJhZGUvb3JkZXIxJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90cmFkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFkZU5vIOivt+axguaUr+S7mOiuouWNleWPt1xyXG4gICAgICovXHJcbiAgICBwYXk6IGZ1bmN0aW9uICh0cmFkZU5vKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICd0cmFkZU5vJzogdHJhZGVOb1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdHJhZGUvcGF5JztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90cmFkZScpO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnN1Ym1pdChib2R5SW4pO1xyXG4gICAgfSxcclxuICAgIGJpbGw6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RyYWRlL2JpbGwnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdHJhZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnui0puWPt+S/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGVVc2VyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvdXNlcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSAnJztcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgdGRlTG9jazogZnVuY3Rpb24gKG9sZExvY2ssIG5ld0xvY2ssIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdjaGlsZExvY2snOiBvbGRMb2NrLFxyXG4gICAgICAgICAgICAnbmV3TG9jayc6IG5ld0xvY2tcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9sb2NrJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSDpobXpnaLnvJblj7dcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkZVBhZ2U6IGZ1bmN0aW9uIChwYWdlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncGFnZSc6IHBhZ2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9wYWdlJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2F0ZWdvcnkg5q2M5puy5YiG57G7XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnumhtemdouS/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGFTb25nOiBmdW5jdGlvbiAoY2F0ZWdvcnksIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdjYXRlZ29yeSc6IGNhdGVnb3J5XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvc29uZyc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIHRkYVNvbmcxOiBmdW5jdGlvbiAoc29uZ0lkLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnc29uZ0lkJzogc29uZ0lkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvc29uZzEnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkYU1hdGNoOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvbWF0Y2gnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpeiDov5Tlm57pobXpnaLkv6Hmga9cclxuICAgICAqL1xyXG4gICAgdGRhVXNlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL3VzZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZCDorrDlvZVcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkYVJlY29yZDogZnVuY3Rpb24gKHJlY29yZCwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvcmVjb3JkJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHJlY29yZCk7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0Qm9keX0gYm9keUluXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxudW1iZXJ8c3RyaW5nfSBjYWxsYmFjay5iaXog6L+U5Zue5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHNlbmQ6IGZ1bmN0aW9uIChib2R5SW4sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3Qgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNlbmQoYm9keUluLCBmdW5jdGlvbiAoYm9keU91dCkge1xyXG4gICAgICAgICAgICBpZiAoYm9keU91dC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBiaXpPdXQgPSBKU09OLnBhcnNlKGJvZHlPdXQuYml6Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9keU91dC50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnRva2VuID0gYm9keU91dC50b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICBzdGJOdWxsLnNldFZhbHVlKCd0b29kby50b2tlbicsIG93bmVyLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiAxKTsgICAgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiBcIjFcIik7ICAgICAgICAgICAgICAvLyDov5Tlm57lrZfnrKbkuLJcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgYWxlcnQodHlwZW9mIHRydWUpOyAgICAgICAgICAgICAvLyDov5Tlm57lrZfnrKbkuLJcImJvb2xlYW5cIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiB7fSk7ICAgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiBbXSk7ICAgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJvYmplY3QgXCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgZnVuY3Rpb24oKXt9KTsgICAgIC8vIOi/lOWbnuWtl+espuS4slwiZnVuY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiBudWxsKTsgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiB1bmRlZmluZWQpOyAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpZiAoYml6T3V0ICYmIHR5cGVvZihiaXpPdXQpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpek91dC5zdGJjbGkgPSBvd25lcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dC5jb2RlLCBiaXpPdXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0LmNvZGUsIGJvZHlPdXQuc3ViQ29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG52YXIgc3RiY2xpID0gbmV3IFN0YkNsaWVudCgpO1xyXG5leHBvcnQge1N0YkNsaWVudCxzdGJjbGl9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fc3RiY2xpLmpzIiwiaW1wb3J0IHtyZXRhaWxJZCxyZXRhaWx9IGZyb20gXCIuL19yZXRhaWxcIjtcclxuXHJcbmZ1bmN0aW9uIFN0Yk51bGwoKSB7XHJcbn1cclxuaWYgKHJldGFpbElkID09IHJldGFpbC5neGdkKSB7Ly8g5bm/6KW/5bm/55S1ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFN0Yk51bGwucHJvdG90eXBlID0ge1xyXG4gICAgICAgIC8v6I635Y+W5py66aG255uS5Y+35a2X56ym5LiyXHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBndWFuZ3hpLmdldFN0Yk51bSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/ojrflj5bljLrln5/noIHluLjmlbBcclxuICAgICAgICBnZXRSZWdpb25Db2RlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpUGFuZWwuZ2V0R2xvYmFsVmFyKFwiR0VUX01FRElBX1JFR0lPTl9JRFwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlQYW5lbC5nZXRHbG9iYWxWYXIoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhQ29va2llID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFDb29raWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYUNydW1iID0gYUNvb2tpZVtpXS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVzY2FwZShrZXlOYW1lKSA9PSBhQ3J1bWJbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdW5lc2NhcGUoYUNydW1iWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0IHx8IHJlc3VsdCA9PSBcIiNcIiB8fCByZXN1bHQgPT0gXCJjbGVhclZhbHVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSwga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGtleVZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGtleVZhbHVlID0gXCJjbGVhclZhbHVlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlQYW5lbC5zZXRHbG9iYWxWYXIoa2V5TmFtZSwga2V5VmFsdWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBlc2NhcGUoa2V5TmFtZSkgKyBcIj1cIiArIGVzY2FwZShrZXlWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IGVsc2UgaWYgKHJldGFpbElkID09IHJldGFpbC5obnl4KSB7Ly8g5rKz5Y2X5pyJ57q/ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHZhciBTeXN0ZW0gPSB3aW5kb3cuU3lzdGVtO1xyXG4gICAgU3RiTnVsbC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTeXN0ZW0uc3RiSUQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRSZWdpb25Db2RlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZWdpb24gPSAnaG55eCc7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZWdpb24gPSBTeXN0ZW0uR2V0Q0FSZWdpb25JRCgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlZ2lvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBnID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBuZXcgR2xvYmFsKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBnID0gbmV3IEdsb2JhbDIoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICBnID0ge3ZhbHVlOiBudWxsfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZy52YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSwga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIGcgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IG5ldyBHbG9iYWwoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBuZXcgR2xvYmFsMihrZXlOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnLnZhbHVlID0ga2V5VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ2RnZCkgey8vIOW5v+S4nOW5v+eUtSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBTdGJOdWxsLnByb3RvdHlwZSA9IHtcclxuICAgICAgICBnZXRDYXJkVFY6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFDQS5pY05vKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJzk2OTU2MTAwODYnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBDQS5pY05vO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ0EucmVnaW9uQ29kZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gU3lzU2V0dGluZy5nZXRFbnYoa2V5TmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIFN5c1NldHRpbmcuc2V0RW52KGtleU5hbWUsIGtleVZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IGVsc2Uge1xyXG4gICAgU3RiTnVsbC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnMTAwODYnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJzAnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgICAgICAgICAgY29uc3QgYUNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFDb29raWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFDcnVtYiA9IGFDb29raWVbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVzY2FwZShrZXlOYW1lKSA9PSBhQ3J1bWJbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB1bmVzY2FwZShhQ3J1bWJbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGVzY2FwZShrZXlOYW1lKSArIFwiPVwiICsgZXNjYXBlKGtleVZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG52YXIgc3RiTnVsbCA9IG5ldyBTdGJOdWxsKCk7XHJcbmV4cG9ydCB7U3RiTnVsbCxzdGJOdWxsfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3N0Ym51bGwuanMiLCJ2YXIgbWQ1ID0gcmVxdWlyZSgnbWQ1Jyk7XHJcbnZhciBKU09OID0gcmVxdWlyZSgnSlNPTicpO1xyXG5cclxuaWYgKCFEYXRlLnByb3RvdHlwZS5mb3JtYXQpIHtcclxuICAgIERhdGUucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIChmbXQpIHtcclxuICAgICAgICBjb25zdCBvID0ge1xyXG4gICAgICAgICAgICBcIk0rXCI6IHRoaXMuZ2V0TW9udGgoKSArIDEsICAgICAgICAgICAgICAgICAvL+aciOS7vVxyXG4gICAgICAgICAgICBcImQrXCI6IHRoaXMuZ2V0RGF0ZSgpLCAgICAgICAgICAgICAgICAgICAgLy/ml6VcclxuICAgICAgICAgICAgXCJoK1wiOiB0aGlzLmdldEhvdXJzKCksICAgICAgICAgICAgICAgICAgIC8v5bCP5pe2XHJcbiAgICAgICAgICAgIFwibStcIjogdGhpcy5nZXRNaW51dGVzKCksICAgICAgICAgICAgICAgICAvL+WIhlxyXG4gICAgICAgICAgICBcInMrXCI6IHRoaXMuZ2V0U2Vjb25kcygpLCAgICAgICAgICAgICAgICAgLy/np5JcclxuICAgICAgICAgICAgXCJxK1wiOiBNYXRoLmZsb29yKCh0aGlzLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6plxyXG4gICAgICAgICAgICBcIlNcIjogdGhpcy5nZXRNaWxsaXNlY29uZHMoKSAgICAgICAgICAgICAvL+avq+enklxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKC8oeSspLy50ZXN0KGZtdCkpIHtcclxuICAgICAgICAgICAgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAodGhpcy5nZXRGdWxsWWVhcigpICsgXCJcIikuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGsgaW4gbykge1xyXG4gICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChcIihcIiArIGsgKyBcIilcIikudGVzdChmbXQpKSB7XHJcbiAgICAgICAgICAgICAgICBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsIChSZWdFeHAuJDEubGVuZ3RoID09IDEpID8gKG9ba10pIDogKChcIjAwXCIgKyBvW2tdKS5zdWJzdHIoKFwiXCIgKyBvW2tdKS5sZW5ndGgpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZtdDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlcXVlc3RCb2R5KCkge1xyXG4gICAgdGhpcy5hcHBJZCA9ICcnOyAgICAgICAgICAgICAgIC8vIOWIhumFjee7meW8gOWPkeiAheeahOW6lOeUqElEOjEwMDBcclxuICAgIHRoaXMubWV0aG9kID0gJyc7ICAgICAgICAgICAgICAvLyDmjqXlj6PlkI3np7A6dG9vZG8udHJhZGUucGF5XHJcbiAgICB0aGlzLmZvcm1hdCA9ICdKU09OJzsgICAgICAgICAgLy8g5LuF5pSv5oyBSlNPTlxyXG4gICAgdGhpcy5jaGFyc2V0ID0gJ3V0Zi04JzsgICAgICAgIC8vIOivt+axguS9v+eUqOeahOe8lueggeagvOW8j++8jOWmgnV0Zi04LGdiayxnYjIzMTLnrYlcclxuICAgIHRoaXMuc2lnblR5cGUgPSAnTUQ1JzsgICAgICAgICAvLyDllYbmiLfnlJ/miJDnrb7lkI3lrZfnrKbkuLLmiYDkvb/nlKjnmoTnrb7lkI3nrpfms5Xnsbvlnos6UlNB44CBTUQ1XHJcbiAgICB0aGlzLnNpZ25Db2RlID0gJyc7ICAgICAgICAgICAgLy8g5ZWG5oi36K+35rGC5Y+C5pWw55qE562+5ZCN5LiyIDMy5L2N5bCP5YaZXHJcbiAgICB0aGlzLnRpbWVzdGFtcCA9ICcnOyAgICAgICAgICAgLy8g5Y+R6YCB6K+35rGC55qE5pe26Ze077yM5qC85byPXCJ5eXl5LU1NLWRkIEhIOm1tOnNzXCI6MjAxNC0wNy0yNCAwMzowNzo1MFxyXG4gICAgdGhpcy52ZXJzaW9uID0gJzEuMCc7ICAgICAgICAgIC8vIOiwg+eUqOeahOaOpeWPo+eJiOacrO+8jOWbuuWumuS4uu+8mjEuMFxyXG4gICAgdGhpcy5hcHBBdXRoVG9rZW4gPSAnJzsgICAgICAgIC8vIOW6lOeUqOaOiOadg+eggVxyXG4gICAgdGhpcy5iaXpDb250ZW50ID0gJyc7ICAgICAgICAgIC8vIOS4muWKoeWPguaVsOmbhuWQiO+8jOacgOWkp+mVv+W6puS4jemZkO+8jOmZpOWFrOWFseWPguaVsOWkluaJgOacieivt+axguWPguaVsOmDveW/hemhu+aUvuWcqOi/meS4quWPguaVsOS4reS8oOmAku+8jOWFt+S9k+WPgueFp+WQhOS6p+WTgeW/q+mAn+aOpeWFpeaWh+aho1xyXG59XHJcblJlcXVlc3RCb2R5LnByb3RvdHlwZSA9IHtcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgICAgIHRoaXMuYXBwSWQgPSBib2R5LmFwcElkO1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gYm9keS5tZXRob2Q7XHJcbiAgICAgICAgdGhpcy5mb3JtYXQgPSBib2R5LmZvcm1hdDtcclxuICAgICAgICB0aGlzLmNoYXJzZXQgPSBib2R5LmNoYXJzZXQ7XHJcbiAgICAgICAgdGhpcy5zaWduVHlwZSA9IGJvZHkuc2lnblR5cGU7XHJcbiAgICAgICAgdGhpcy5zaWduQ29kZSA9IGJvZHkuc2lnbkNvZGU7XHJcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBib2R5LnRpbWVzdGFtcDtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBib2R5LnZlcnNpb247XHJcbiAgICAgICAgdGhpcy5hcHBBdXRoVG9rZW4gPSBib2R5LmFwcEF1dGhUb2tlbjtcclxuICAgICAgICB0aGlzLmJpekNvbnRlbnQgPSBib2R5LmJpekNvbnRlbnQ7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVzcG9uc2VCb2R5KCkge1xyXG4gICAgdGhpcy5jb2RlID0gMDsgICAgICAgLy8g572R5YWz6L+U5Zue56CBXHJcbiAgICB0aGlzLm1zZyA9ICfosIPnlKjmiJDlip8nOyAvLyDnvZHlhbPov5Tlm57noIHmj4/ov7BcclxuICAgIHRoaXMuc3ViQ29kZSA9ICcnOyAgIC8vIOS4muWKoei/lOWbnueggSzor6bop4HmlofmoaM6eHh4eFxyXG4gICAgdGhpcy5zdWJNc2cgPSAnJzsgICAgLy8g5Lia5Yqh6L+U5Zue56CB5o+P6L+wLOivpuingeaWh+ahozrkuqTmmJPlt7LooqvmlK/ku5hcclxuICAgIHRoaXMudGltZXN0YW1wID0gJyc7IC8vIOW6lOetlOeahOaXtumXtFxyXG4gICAgdGhpcy5zaWduID0gJyc7ICAgICAgLy8g562+5ZCNLOivpuingeaWh+ahoyAzMuS9jeWwj+WGmVxyXG4gICAgdGhpcy5iaXpDb250ZW50ID0gJyc7Ly8g5Lia5Yqh5Y+C5pWw6ZuG5ZCI77yM5pyA5aSn6ZW/5bqm5LiN6ZmQ77yM6Zmk5YWs5YWx5Y+C5pWw5aSW5omA5pyJ6L+U5Zue5Y+C5pWw6YO95b+F6aG75pS+5Zyo6L+Z5Liq5Y+C5pWw5Lit5Lyg6YCS77yM5YW35L2T5Y+C54Wn5ZCE5Lqn5ZOB5b+r6YCf5o6l5YWl5paH5qGjXHJcbiAgICB0aGlzLnRva2VuID0gJyc7ICAgICAvLyDmm7TmlrDlkI7nmoTmjojmnYPnoIEs5Li656m65YiZ5LiN5pu05pawXHJcbn1cclxuUmVzcG9uc2VCb2R5LnByb3RvdHlwZSA9IHtcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGJvZHkuY29kZTtcclxuICAgICAgICB0aGlzLm1zZyA9IGJvZHkubXNnO1xyXG4gICAgICAgIHRoaXMuc3ViQ29kZSA9IGJvZHkuc3ViQ29kZTtcclxuICAgICAgICB0aGlzLnN1Yk1zZyA9IGJvZHkuc3ViTXNnO1xyXG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gYm9keS50aW1lc3RhbXA7XHJcbiAgICAgICAgdGhpcy5zaWduID0gYm9keS5zaWduO1xyXG4gICAgICAgIHRoaXMuYml6Q29udGVudCA9IGJvZHkuYml6Q29udGVudDtcclxuICAgICAgICB0aGlzLnRva2VuID0gYm9keS50b2tlbjtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUb29kb0NsaWVudChhcHBJZCwgYXBwU2VjcmV0LCBhcGlVcmwpIHtcclxuICAgIHRoaXMuc3RhcnQoYXBwSWQsIGFwcFNlY3JldCwgYXBpVXJsKTtcclxuICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XHJcbn1cclxuXHJcblRvb2RvQ2xpZW50LnByb3RvdHlwZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcElkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwU2VjcmV0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBpVXJsXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoYXBwSWQsIGFwcFNlY3JldCwgYXBpVXJsKSB7XHJcbiAgICAgICAgdGhpcy5hcHBJZCA9IGFwcElkO1xyXG4gICAgICAgIHRoaXMuYXBwU2VjcmV0ID0gYXBwU2VjcmV0O1xyXG4gICAgICAgIHRoaXMuYXBpVXJsID0gYXBpVXJsO1xyXG4gICAgICAgIHRoaXMudG9rZW4gPSAnJztcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVxdWVzdEJvZHl9IGJvZHlJblxyXG4gICAgICovXHJcbiAgICBzaWduQ29kZUluOiBmdW5jdGlvbiAoYm9keUluKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gJycgK1xyXG4gICAgICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuICtcclxuICAgICAgICAgICAgYm9keUluLmFwcElkICtcclxuICAgICAgICAgICAgYm9keUluLmJpekNvbnRlbnQgK1xyXG4gICAgICAgICAgICBib2R5SW4uY2hhcnNldCArXHJcbiAgICAgICAgICAgIGJvZHlJbi5mb3JtYXQgK1xyXG4gICAgICAgICAgICBib2R5SW4ubWV0aG9kICtcclxuICAgICAgICAgICAgYm9keUluLnRpbWVzdGFtcCArXHJcbiAgICAgICAgICAgIGJvZHlJbi52ZXJzaW9uICtcclxuICAgICAgICAgICAgdGhpcy5hcHBTZWNyZXQ7XHJcbiAgICAgICAgcmV0dXJuIG1kNShzdHIpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXNwb25zZUJvZHl9IGJvZHlPdXRcclxuICAgICAqL1xyXG4gICAgc2lnbkNvZGVPdXQ6IGZ1bmN0aW9uIChib2R5T3V0KSB7XHJcbiAgICAgICAgaWYoYm9keU91dC50b2tlbj09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgYm9keU91dC50b2tlbj1cIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdHIgPSAnJyArXHJcbiAgICAgICAgICAgIGJvZHlPdXQuYml6Q29udGVudCArXHJcbiAgICAgICAgICAgIGJvZHlPdXQuY29kZSArXHJcbiAgICAgICAgICAgIGJvZHlPdXQubXNnICtcclxuICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlICtcclxuICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgK1xyXG4gICAgICAgICAgICBib2R5T3V0LnRpbWVzdGFtcCArXHJcbiAgICAgICAgICAgIGJvZHlPdXQudG9rZW4gK1xyXG4gICAgICAgICAgICB0aGlzLmFwcFNlY3JldDtcclxuICAgICAgICByZXR1cm4gbWQ1KHN0cik7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBpVXJsXHJcbiAgICAgKi9cclxuICAgIHNldEFwaVVybDogZnVuY3Rpb24gKGFwaVVybCkge1xyXG4gICAgICAgIHRoaXMuYXBpVXJsID0gYXBpVXJsO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0Qm9keX0gYm9keUluXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtSZXNwb25zZUJvZHl9IGNhbGxiYWNrLmJvZHlPdXRcclxuICAgICAqL1xyXG4gICAgc2VuZDogZnVuY3Rpb24gKGJvZHlJbiwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5T3V0ID0gbmV3IFJlc3BvbnNlQm9keSgpO1xyXG4gICAgICAgIGlmICghWE1MSHR0cFJlcXVlc3QpIHtcclxuICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSA9ICcxMDUnO1xyXG4gICAgICAgICAgICBib2R5T3V0LnN1Yk1zZyA9ICdYTUxIdHRwUmVxdWVzdOWvueixoeS4jeWtmOWcqCc7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzQnVzeSkge1xyXG4gICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzk5JztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn5b6I5b+Z5ZOm77yM6K+35rGC6Zif5YiX5bey5ruhJztcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc0J1c3kgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGJvZHlJbi5hcHBBdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IGJvZHlJbi5hcHBBdXRoVG9rZW47XHJcbiAgICAgICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvZHlJbi5hcHBJZCA9IHRoaXMuYXBwSWQ7XHJcbiAgICAgICAgYm9keUluLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZm9ybWF0KFwieXl5eS1NTS1kZCBoaDptbTpzc1wiKTtcclxuICAgICAgICBib2R5SW4uc2lnbkNvZGUgPSB0aGlzLnNpZ25Db2RlSW4oYm9keUluKTtcclxuXHJcbiAgICAgICAgY29uc3QgeG1sID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgY29uc3Qgb3duZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHhtbC5hYm9ydCgpO1xyXG4gICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzEwMyc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnID0gJ+ivt+axgui2heaXtic7XHJcblxyXG4gICAgICAgICAgICBvd25lci5pc0J1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0KTtcclxuICAgICAgICB9LCAxMDAwMCk7XHJcblxyXG4gICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlVGltZW91dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHhtbC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5wYXJzZSh4bWwucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHlPdXQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZDUgPSBvd25lci5zaWduQ29kZU91dChib2R5T3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZDUgIT0gYm9keU91dC5zaWduKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnN1YkNvZGUgPSAnMTAyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnN1Yk1zZyA9ICfov5Tlm57nu5Pmnpznrb7lkI3lh7rplJknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvZHlPdXQudGltZXN0YW1wID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zaWduID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC50b2tlbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keU91dC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2R5T3V0LnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIudG9rZW4gPSBib2R5T3V0LnRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0Lm1zZyA9ICflrqLmiLfnq6/plJnor68nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnN1YkNvZGUgPSAnMTAxJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn6L+U5Zue57uT5p6c5byC5bi4IGVycjonICsgZXJyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzEwNCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn6K+35rGC6L+U5Zue6ZSZ6K+vJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvd25lci5pc0J1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHRva2VuVXJsID0gdGhpcy5hcGlVcmwgKyAnP3Rva2VuPScgKyB0aGlzLnRva2VuO1xyXG4gICAgICAgIHhtbC5vcGVuKCdQT1NUJywgdG9rZW5VcmwsIHRydWUpO1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcpO1xyXG4gICAgICAgIHhtbC5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHlJbikpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0Qm9keX0gYm9keUluXHJcbiAgICAgKi9cclxuICAgIHN1Ym1pdDogZnVuY3Rpb24gKGJvZHlJbikge1xyXG4gICAgICAgIGJvZHlJbi5hcHBJZCA9IHRoaXMuYXBwSWQ7XHJcbiAgICAgICAgYm9keUluLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZm9ybWF0KFwieXl5eS1NTS1kZCBoaDptbTpzc1wiKTtcclxuICAgICAgICBib2R5SW4uc2lnbkNvZGUgPSB0aGlzLnNpZ25Db2RlSW4oYm9keUluKTtcclxuXHJcbiAgICAgICAgY29uc3QgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBib2R5SW4pIHtcclxuICAgICAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYm9keUluW2tleV0pID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGVpLnR5cGUgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgZWkubmFtZSA9IGtleTtcclxuICAgICAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXHJcbiAgICAgICAgICAgIGVpLnZhbHVlID0gYm9keUluW2tleV07XHJcbiAgICAgICAgICAgIGYuYXBwZW5kQ2hpbGQoZWkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZi5tZXRob2QgPSAncG9zdCc7XHJcbiAgICAgICAgZi5hY3Rpb24gPSB0aGlzLmFwaVVybDtcclxuICAgICAgICBmLnN1Ym1pdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZik7XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3RkY2xpLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==