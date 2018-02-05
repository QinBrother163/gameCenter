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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./resources/assets/js/Java10Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Java10Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[159, 123], [159, 230], [213, 370], [330, 176], [155, 177], [156, 177], [182, 176], [182, 176], [182, 176], [182, 176]];

function Java10Page() {
    this.layout = document.getElementById('java10-page');
    this.items = [];
    for (var i = 0; i < itemSize.length; ++i) {
        var node = this.layout.querySelector('#java10-item' + i);
        this.items.push(node);
    }
}
Java10Page.prototype = {
    itemInfos: [],
    /**
     * {int} current [0,9]
     */
    current: 3,
    onKeyDown: null,
    start: function start(itemInfos, callback) {
        var itemCnt = this.items.length;
        if (itemInfos.length != itemCnt) {
            return;
        }
        this.itemInfos = itemInfos;

        var loadCnt = 0;
        for (var i = 0; i < itemCnt; i++) {
            var itemInfo = itemInfos[i];
            var node = this.items[i];
            var img = node.querySelector('img');
            img.onload = function () {
                loadCnt++;
                if (loadCnt === itemCnt) {
                    if (typeof callback === 'function') callback();
                }
            };

            setTimeout(function (img, itemInfo) {
                img.src = itemInfo.img;
            }, 100 * i, img, itemInfo);
        }
    },
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
    handleKey: function handleKey(e) {
        var owner = this;
        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["c" /* getEvent */])(e);
        var curKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["d" /* getKey */])(e);
        if (preCodes.indexOf(curKey) != -1) e.preventDefault();
        switch (curKey) {
            case keyCode.left:
                switch (owner.current) {
                    case 2:
                    case 4:
                    case 7:
                    case 8:
                    case 9:
                        owner.current -= 2;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                    case 5:
                        owner.current--;
                        owner.setSelected(owner.current);
                        break;
                    case 6:
                        owner.current -= 3;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                    case 5:
                    case 6:
                    case 7:
                        owner.current += 2;
                        owner.setSelected(owner.current);
                        break;
                    case 1:
                    case 2:
                    case 4:
                        owner.current++;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current += 3;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 1:
                    case 4:
                    case 7:
                    case 9:
                        owner.current--;
                        owner.setSelected(owner.current);
                        break;
                    case 5:
                        owner.current -= 2;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
                    case 0:
                    case 3:
                    case 6:
                    case 8:
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

/***/ "./resources/assets/js/java10.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_stbcli__ = __webpack_require__("./resources/assets/js/toodo/_stbcli.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_dialog__ = __webpack_require__("./resources/assets/js/app/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_loading__ = __webpack_require__("./resources/assets/js/app/loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_abc__ = __webpack_require__("./resources/assets/js/app/abc.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HomeMenu__ = __webpack_require__("./resources/assets/js/HomeMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Java10Page__ = __webpack_require__("./resources/assets/js/Java10Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Java10Coin__ = __webpack_require__("./resources/assets/js/Java10Coin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_PageUrl__ = __webpack_require__("./resources/assets/js/app/PageUrl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_PageArgs__ = __webpack_require__("./resources/assets/js/app/PageArgs.js");












var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toodo_keycodes__["a" /* getKeyCodes */])();
var stbcli = new __WEBPACK_IMPORTED_MODULE_0__toodo_stbcli__["a" /* StbClient */]();

function onStart(code, biz) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["a" /* hideLoading */])(function () {
        if (code != 0) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_dialog__["a" /* showDialog */])(function (btn) {
                if (btn == 0) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('自动登陆', '小双在使劲加载，请稍候...');
                    stbcli.start(onStart);
                } else {
                    java10Page.show(currentIndex, onPageKey);
                }
            }, 1, '提示', '没有找到用户信息哦！', '重试', '取消');
        } else {
            tdeUser = biz;
            __WEBPACK_IMPORTED_MODULE_7__Java10Coin__["a" /* javaCoin */].show(biz.coins);
            java10Page.show(currentIndex, onPageKey);
        }
    });
}

function onMenuKey(key) {
    switch (key) {
        case keyCode.down:
            homeMenu.hide();
            java10Page.show(java10Page.current, onPageKey);
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
            switch (currentIndex) {
                case 0:
                case 2:
                case 3:
                case 6:
                case 8:
                    java10Page.hide();
                    homeMenu.show(homeMenu.current, onMenuKey, tdeUser);
                    //homeMenu.show(homeMenu.current, onMenuKey);
                    break;
            }
            break;
        case keyCode.ok:
            //未登录
            if (!tdeUser) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('自动登陆', '小双在使劲加载，请稍候...');
                stbcli.start(onStart);
                break;
            }
            var itemInfo = java10Page.itemInfos[currentIndex];
            if (tdeUser.coins <= 0) {
                var callUrl = __WEBPACK_IMPORTED_MODULE_8__app_PageUrl__["a" /* pageUrl */].callUrl(itemInfo, window.location.href);
                __WEBPACK_IMPORTED_MODULE_9__app_PageArgs__["e" /* rechargeArgs */].setReturnUrl(callUrl);
                window.location.href = 'recharge.html';
                break;
            }
            if (itemInfo.trial == 1) {
                __WEBPACK_IMPORTED_MODULE_8__app_PageUrl__["a" /* pageUrl */].callGame(itemInfo, window.location.href);
                break;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_dialog__["a" /* showDialog */])(function (btn) {
                if (btn == 0) {}
                java10Page.show(currentIndex, onPageKey);
            }, 1, '敬请期待', '服务暂未开通哦！', '确定', '取消');
            break;
        case keyCode.num0:
        case keyCode.back:
            __WEBPACK_IMPORTED_MODULE_9__app_PageArgs__["b" /* appArgs */].onHomePage();
            break;
        case keyCode.esc:
            __WEBPACK_IMPORTED_MODULE_9__app_PageArgs__["b" /* appArgs */].onFirstPage();
            break;
    }
    currentIndex = java10Page.current;
}

var homeMenu;
var java10Page;
var currentIndex;
var tdeUser = null;

window.onload = function () {
    homeMenu = new __WEBPACK_IMPORTED_MODULE_5__HomeMenu__["a" /* HomeMenu */]();

    java10Page = new __WEBPACK_IMPORTED_MODULE_6__Java10Page__["a" /* Java10Page */]();
    currentIndex = java10Page.current;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_abc__["a" /* getJSON */])('data/tde_java10_infos.json', function (itemInfos) {
        //如果给的数据不是整形，则转换一次
        for (var i = 0; i < itemInfos.length; ++i) {
            var info = itemInfos[i];
            info.id = parseInt(info.id);
            info.gameId = parseInt(info.gameId);
            info.productId = parseInt(info.productId);
            info.prodId = parseInt(info.prodId);
            info.trial = parseInt(info.trial);
        }
        java10Page.start(itemInfos, function () {
            //showLoading('自动登陆', '小双在使劲加载，请稍候...');
            //stbcli.start(onStart);
        });
        java10Page.show(java10Page.current, onPageKey);

        setTimeout(function () {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])();
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/java10.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWM5ZGYyNTE1YTkxYWUzNmIyZjE/ODU5MSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9fSlNPTkAxLjAuMEBKU09OL2pzb24yLmpzPzI5ZjkqKioiLCJ3ZWJwYWNrOi8vLy4vfi9fY2hhcmVuY0AwLjAuMkBjaGFyZW5jL2NoYXJlbmMuanM/YzhjMSoqKiIsIndlYnBhY2s6Ly8vLi9+L19jcnlwdEAwLjAuMkBjcnlwdC9jcnlwdC5qcz9kOTM0KioqIiwid2VicGFjazovLy8uL34vX2lzLWJ1ZmZlckAxLjEuNkBpcy1idWZmZXIvaW5kZXguanM/NWViYSoqKiIsIndlYnBhY2s6Ly8vLi9+L19tZDVAMi4yLjFAbWQ1L21kNS5qcz83OTk3KioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvSG9tZU1lbnUuanM/ZTM4YSoqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0phdmExMENvaW4uanM/ZDM5NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0phdmExMFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUGFnZUFyZ3MuanM/YzdhMioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9QYWdlVXJsLmpzPzQ1NDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvYWJjLmpzPzU3MjYqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvY2hpbGRMb2NrLmpzP2JmZTAqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvY2hpbGRNZW51LmpzPzQ0Y2EqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvZGlhbG9nLmpzPzJjYmMqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvbG9hZGluZy5qcz85YTA0KioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvamF2YTEwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX2tleWNvZGVzLmpzP2I5MDgqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fcmV0YWlsLmpzPzBlYjMqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3N0YmNsaS5qcz9mMjU5KioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3N0Ym51bGwuanM/NDdlNCoqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL190ZGNsaS5qcz8xOGVmKioqIl0sIm5hbWVzIjpbImtleUNvZGUiLCJnZXRLZXlDb2RlcyIsInByZUNvZGVzIiwiZ2V0Q29kZXMiLCJIb21lTWVudSIsImxheW91dCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsIml0ZW1zIiwiaSIsIm5vZGUiLCJxdWVyeVNlbGVjdG9yIiwicHVzaCIsImltZyIsInNyYyIsInByb3RvdHlwZSIsImN1cnJlbnQiLCJvbktleURvd24iLCJ0ZGVVc2VyIiwic2hvdyIsInNldFNlbGVjdGVkIiwib3duZXIiLCJvbmtleWRvd24iLCJlIiwiaGFuZGxlS2V5IiwiaGlkZSIsIl9zZXRGb2N1cyIsImZvY3VzIiwibGVuZ3RoIiwiZ2V0RXZlbnQiLCJjdXJLZXkiLCJnZXRLZXkiLCJpbmRleE9mIiwicHJldmVudERlZmF1bHQiLCJsZWZ0IiwicmlnaHQiLCJvayIsImFwcEFyZ3MiLCJvbkZpcnN0UGFnZSIsIm9uSG9tZVBhZ2UiLCJvbGRMb2NrIiwiY2hpbGRMb2NrIiwiY2hpbGRNZW51IiwiYnRuIiwic2hvd0NoaWxkTG9jayIsImNvZGUiLCJtc2ciLCJvblZhbGlkTG9jayIsInJlc2V0Q2hpbGRMb2NrIiwib25UdXJudGFibGVQYWdlIiwiZXNjIiwic3RiY2xpIiwidGRlTG9jayIsImJpeiIsInRleHQiLCJvblRkZUxvY2siLCJzaG93RGlhbG9nIiwiZGxnQnRuIiwibmV3TG9jayIsImFyZ3VtZW50cyIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJKYXZhMTBDb2luIiwiY29pbnMiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwibm9kZVRleHQiLCJqYXZhQ29pbiIsIml0ZW1TaXplIiwiSmF2YTEwUGFnZSIsIml0ZW1JbmZvcyIsInN0YXJ0IiwiY2FsbGJhY2siLCJpdGVtQ250IiwibG9hZENudCIsIml0ZW1JbmZvIiwib25sb2FkIiwic2V0VGltZW91dCIsInN0eWxlIiwiekluZGV4Iiwic2l6ZSIsImRpdiIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsInVwIiwiZG93biIsIlBhZ2VBcmdzIiwicGFnZSIsInByZWZpeCIsImdldFZhbHVlIiwiayIsInN0Yk51bGwiLCJzZXRWYWx1ZSIsInYiLCJnZXRSZXR1cm5VcmwiLCJzZXRSZXR1cm5VcmwiLCJ1cmwiLCJnZXRSZWRpcmVjdFVybCIsInNldFJlZGlyZWN0VXJsIiwic2V0Q2FsbEZsYWciLCJudW0iLCJnZXRDYWxsRmxhZyIsInNldFN1Y2Nlc3NDb2RlIiwic3VjY2Vzc0NvZGUiLCJnZXRTdWNjZXNzQ29kZSIsInNldFByaXplSUQiLCJnZXRQcml6ZUlEIiwiZ2V0VHVybnRhYmxlVXJsIiwic2V0VHVybnRhYmxlVXJsIiwic2hvcEFyZ3MiLCJyZWNoYXJnZUFyZ3MiLCJjYWxsYmFja0FyZ3MiLCJ0dXJuVGFibGVBcmdzIiwiZmlyc3RVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJob21lVXJsIiwiVHVybnRhYmxlVXJsIiwiUGFnZVVybCIsInBhcnNlUXVlcnkiLCJxdWVyeSIsInNsaWNlIiwiYXJncyIsImFyciIsInNwbGl0IiwibSIsInRtcCIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlQXJncyIsImhhc093blByb3BlcnR5IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsImJhc2VVcmwiLCJwcm90b2NvbCIsImhvc3QiLCJnZXRVc2VySWQiLCJnZXRTdGJJZCIsImdldENhcmRUViIsImdldFNpZ25LZXkiLCJ0cyIsIkRhdGUiLCJnZXRUaW1lIiwibWQ1IiwiZ2V0Q2hpbGRMb2NrIiwicmVjaGFyZ2VVcmwiLCJjYWxsVXJsIiwiaXRlbSIsInJldHVyblVybCIsImdhbWVpZCIsImdhbWVJZCIsImtleSIsImRldiIsImZhdGhlcmtleSIsInVzZXJJZCIsInVzZXJpZCIsInJldHVyblVSTCIsImhvc3ROYW1lIiwiaG9zdG5hbWUiLCJkc3RVcmwiLCJyZXBsYWNlIiwicGFyYW1zIiwicmVkaXJlY3RVcmwiLCJjYWxsVXJsQmFzZSIsImNhbGxHYW1lIiwiY2FsbEdhbWVCYXNlIiwicGFnZVVybCIsImdldEpTT04iLCJjYiIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJpdGVtc0FyciIsImV2YWwiLCJyZXNwb25zZVRleHQiLCJzZW5kIiwiZGVsYXlCYWNrZ3JvdW5kIiwiZGVsYXkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0aXRsZSIsImxhYmVsIiwidGlwcyIsImxheW91dElkIiwibG9ja1RleHQiLCJsb2NrVGl0bGUiLCJsb2NrTGFiZWwiLCJsb2NrVGlwcyIsImlubmVyVGV4dCIsIml0ZW1Ob2RlcyIsIm51bTEiLCJudW0yIiwibnVtMyIsIm51bTQiLCJudW01IiwibnVtNiIsIm51bTciLCJudW04IiwibnVtOSIsImJhY2siLCJudW0wIiwiaW5wdXRUZXh0IiwiY3VySWR4IiwiZm9yRWFjaCIsIml0ZW1Ob2RlIiwiaW5kZXgiLCJzdWJtaXQiLCJpbnZpc2libGUiLCJzdGFyIiwiY2xpY2tOdW0iLCJTdHJpbmciLCJiYWNrc3BhY2UiLCJzdWJzdHJpbmciLCJoYW5kbGVPayIsIkNoaWxkTWVudSIsImNudCIsImJnIiwiYnRuTm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRuTm9kZSIsImJ0bk5vZGUwIiwiYnRuTm9kZTEiLCJ0aXBOb2RlIiwiZm9jdXNCdG4iLCJidG5JZHgiLCJmb2N1c05vZGUiLCJidG4wIiwiYnRuMSIsImFsaWduIiwiYmFja2dyb3VuZCIsIm5vZGVUaXRsZSIsInRleHRBbGlnbiIsIm5vZGVCdG4wIiwibm9kZUJ0bjEiLCJidG5fMDA2IiwiYnRuXzAwNm5vbmUiLCJsb2FkVGltZSIsInNob3dUaW1lIiwibm9kZUJnIiwiZGVsYXlUaW1lIiwidGltZSIsIm9uU3RhcnQiLCJqYXZhMTBQYWdlIiwiY3VycmVudEluZGV4Iiwib25QYWdlS2V5Iiwib25NZW51S2V5IiwiaG9tZU1lbnUiLCJ0cmlhbCIsImluZm8iLCJwYXJzZUludCIsInByb2R1Y3RJZCIsInByb2RJZCIsImtleU1hcCIsInJldGFpbElkIiwicmV0YWlsIiwiZ3hnZCIsImYxIiwiZjIiLCJmMyIsImY0IiwibXV0ZSIsInRyYWNrIiwidm9sVXAiLCJ2b2xEb3duIiwiZmF2IiwicGxheUJhY2siLCJwYWdlVXAiLCJwYWdlRG93biIsIm1lbnUiLCJob21lIiwiaG55eCIsImdkZ2QiLCJldnQiLCJldmVudCIsIndoaWNoIiwiY2hhckNvZGUiLCJjb2RlcyIsIm5vbmUiLCJnZXRSZXRhaWxJZCIsImd1YW5neGkiLCJpUGFuZWwiLCJTeXN0ZW0iLCJzdGJJRCIsIkNBIiwiU3RvcmFnZVNlcnZpY2UiLCJGaWxlU3lzdGVtIiwicmVxdWlyZSIsIkpTT04iLCJTdGJDbGllbnQiLCJvcmlnaW5VcmwiLCJhcHBLZXkiLCJhcHBTZWNyZXQiLCJfdGRjbGkiLCJpc1JlYWR5IiwidG9rZW4iLCJiaXpJbiIsImdldFJlZ2lvbkNvZGUiLCJib2R5SW4iLCJtZXRob2QiLCJhcHBBdXRoVG9rZW4iLCJiaXpDb250ZW50Iiwic3RyaW5naWZ5Iiwic2V0QXBpVXJsIiwiYm9keU91dCIsImJpek91dCIsInBhcnNlIiwiYml6VXNlciIsInN1YkNvZGUiLCJhZGRXaW5uZXIiLCJwcml6ZUlEIiwic3RhdGUiLCJhZGRTdGF0ZSIsInVwZGF0YUZyZWVTdGF0ZSIsImdldFByaXplIiwidHVybnRhYmxlU3RhdGUiLCJ0dXJudGFibGVQcm8iLCJ0eXBlIiwicHJpemVOdW0iLCJ3aW5uZXJJbmZvIiwidXNlcldpbm5lciIsImFkZENvaW5zIiwiYWRkTnVtIiwicXVlcnlTZXJ2ZTEiLCJxdWVyeVByb2R1Y3QxIiwib3JkZXIxIiwiY2FsbGJhY2tVcmwiLCJkYXRhIiwicGF5IiwidHJhZGVObyIsImJpbGwiLCJ0ZGVQYWdlIiwidGRhU29uZyIsImNhdGVnb3J5IiwidGRhU29uZzEiLCJzb25nSWQiLCJ0ZGFNYXRjaCIsInRkYVVzZXIiLCJ0ZGFSZWNvcmQiLCJyZWNvcmQiLCJTdGJOdWxsIiwiZ2V0U3RiTnVtIiwiZ2V0R2xvYmFsVmFyIiwia2V5TmFtZSIsInJlc3VsdCIsImFDb29raWUiLCJjb29raWUiLCJhQ3J1bWIiLCJlc2NhcGUiLCJ1bmVzY2FwZSIsImtleVZhbHVlIiwic2V0R2xvYmFsVmFyIiwicmVnaW9uIiwiR2V0Q0FSZWdpb25JRCIsImciLCJHbG9iYWwiLCJHbG9iYWwyIiwidmFsdWUiLCJpY05vIiwicmVnaW9uQ29kZSIsIlN5c1NldHRpbmciLCJnZXRFbnYiLCJzZXRFbnYiLCJmb3JtYXQiLCJmbXQiLCJvIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImdldE1pbGxpc2Vjb25kcyIsInRlc3QiLCJSZWdFeHAiLCIkMSIsImdldEZ1bGxZZWFyIiwic3Vic3RyIiwiUmVxdWVzdEJvZHkiLCJhcHBJZCIsImNoYXJzZXQiLCJzaWduVHlwZSIsInNpZ25Db2RlIiwidGltZXN0YW1wIiwidmVyc2lvbiIsImpzb24iLCJSZXNwb25zZUJvZHkiLCJzdWJNc2ciLCJzaWduIiwiVG9vZG9DbGllbnQiLCJhcGlVcmwiLCJpc0J1c3kiLCJzaWduQ29kZUluIiwic3RyIiwic2lnbkNvZGVPdXQiLCJ1bmRlZmluZWQiLCJ4bWwiLCJoYW5kbGVUaW1lb3V0IiwiYWJvcnQiLCJjbGVhclRpbWVvdXQiLCJzdGF0dXMiLCJlcnIiLCJ0b2tlblVybCIsInNldFJlcXVlc3RIZWFkZXIiLCJmIiwiZWkiLCJuYW1lIiwiYWN0aW9uIiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlDQUF5QyxpQkFBaUI7QUFDMUQsOEJB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7O0FDL0ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGNBQWM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUFuQjtBQUNBakUsZUFBT3FGLFFBQVAsR0FBa0IsS0FBS1UsVUFBTCxDQUFnQi9GLE1BQWhCLENBQWxCOztBQUVBLFlBQU0yRyxJQUFJclosU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUFWO0FBQ0FELGlCQUFTRSxJQUFULENBQWNDLFdBQWQsQ0FBMEJrWixDQUExQjs7QUFFQSxhQUFLLElBQUk5UCxHQUFULElBQWdCbUosTUFBaEIsRUFBd0I7QUFDcEI7QUFDQSxnQkFBSSxPQUFPQSxPQUFPbkosR0FBUCxDQUFQLElBQXVCLFVBQTNCLEVBQXVDO0FBQ25DO0FBQ0g7O0FBRUQsZ0JBQU0rUCxLQUFLdFosU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFYO0FBQ0FxWixlQUFHekYsSUFBSCxHQUFVLFFBQVY7QUFDQXlGLGVBQUdDLElBQUgsR0FBVWhRLEdBQVY7QUFDQTtBQUNBK1AsZUFBR2pELEtBQUgsR0FBVzNELE9BQU9uSixHQUFQLENBQVg7QUFDQThQLGNBQUVsWixXQUFGLENBQWNtWixFQUFkO0FBQ0g7O0FBRURELFVBQUUxRyxNQUFGLEdBQVcsTUFBWDtBQUNBMEcsVUFBRUcsTUFBRixHQUFXLEtBQUtqQixNQUFoQjtBQUNBYyxVQUFFdE0sTUFBRjtBQUNBL00saUJBQVNFLElBQVQsQ0FBY3VaLFdBQWQsQ0FBMEJKLENBQTFCO0FBQ0g7QUFyTG1CLENBQXhCLEMiLCJmaWxlIjoianMvamF2YTEwLjQxMDczZjg5NTg4MmU2ZWViNzVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlYzlkZjI1MTVhOTFhZTM2YjJmMSIsIi8qXG4gICAgaHR0cDovL3d3dy5KU09OLm9yZy9qc29uMi5qc1xuICAgIDIwMTEtMDItMjNcblxuICAgIFB1YmxpYyBEb21haW4uXG5cbiAgICBOTyBXQVJSQU5UWSBFWFBSRVNTRUQgT1IgSU1QTElFRC4gVVNFIEFUIFlPVVIgT1dOIFJJU0suXG5cbiAgICBTZWUgaHR0cDovL3d3dy5KU09OLm9yZy9qcy5odG1sXG5cblxuICAgIFRoaXMgY29kZSBzaG91bGQgYmUgbWluaWZpZWQgYmVmb3JlIGRlcGxveW1lbnQuXG4gICAgU2VlIGh0dHA6Ly9qYXZhc2NyaXB0LmNyb2NrZm9yZC5jb20vanNtaW4uaHRtbFxuXG4gICAgVVNFIFlPVVIgT1dOIENPUFkuIElUIElTIEVYVFJFTUVMWSBVTldJU0UgVE8gTE9BRCBDT0RFIEZST00gU0VSVkVSUyBZT1UgRE9cbiAgICBOT1QgQ09OVFJPTC5cblxuXG4gICAgVGhpcyBmaWxlIGNyZWF0ZXMgYSBnbG9iYWwgSlNPTiBvYmplY3QgY29udGFpbmluZyB0d28gbWV0aG9kczogc3RyaW5naWZ5XG4gICAgYW5kIHBhcnNlLlxuXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHZhbHVlLCByZXBsYWNlciwgc3BhY2UpXG4gICAgICAgICAgICB2YWx1ZSAgICAgICBhbnkgSmF2YVNjcmlwdCB2YWx1ZSwgdXN1YWxseSBhbiBvYmplY3Qgb3IgYXJyYXkuXG5cbiAgICAgICAgICAgIHJlcGxhY2VyICAgIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IGRldGVybWluZXMgaG93IG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzIGFyZSBzdHJpbmdpZmllZCBmb3Igb2JqZWN0cy4gSXQgY2FuIGJlIGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MuXG5cbiAgICAgICAgICAgIHNwYWNlICAgICAgIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IHNwZWNpZmllcyB0aGUgaW5kZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9mIG5lc3RlZCBzdHJ1Y3R1cmVzLiBJZiBpdCBpcyBvbWl0dGVkLCB0aGUgdGV4dCB3aWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBiZSBwYWNrZWQgd2l0aG91dCBleHRyYSB3aGl0ZXNwYWNlLiBJZiBpdCBpcyBhIG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0IHdpbGwgc3BlY2lmeSB0aGUgbnVtYmVyIG9mIHNwYWNlcyB0byBpbmRlbnQgYXQgZWFjaFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwuIElmIGl0IGlzIGEgc3RyaW5nIChzdWNoIGFzICdcXHQnIG9yICcmbmJzcDsnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0IGNvbnRhaW5zIHRoZSBjaGFyYWN0ZXJzIHVzZWQgdG8gaW5kZW50IGF0IGVhY2ggbGV2ZWwuXG5cbiAgICAgICAgICAgIFRoaXMgbWV0aG9kIHByb2R1Y2VzIGEgSlNPTiB0ZXh0IGZyb20gYSBKYXZhU2NyaXB0IHZhbHVlLlxuXG4gICAgICAgICAgICBXaGVuIGFuIG9iamVjdCB2YWx1ZSBpcyBmb3VuZCwgaWYgdGhlIG9iamVjdCBjb250YWlucyBhIHRvSlNPTlxuICAgICAgICAgICAgbWV0aG9kLCBpdHMgdG9KU09OIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBhbmQgdGhlIHJlc3VsdCB3aWxsIGJlXG4gICAgICAgICAgICBzdHJpbmdpZmllZC4gQSB0b0pTT04gbWV0aG9kIGRvZXMgbm90IHNlcmlhbGl6ZTogaXQgcmV0dXJucyB0aGVcbiAgICAgICAgICAgIHZhbHVlIHJlcHJlc2VudGVkIGJ5IHRoZSBuYW1lL3ZhbHVlIHBhaXIgdGhhdCBzaG91bGQgYmUgc2VyaWFsaXplZCxcbiAgICAgICAgICAgIG9yIHVuZGVmaW5lZCBpZiBub3RoaW5nIHNob3VsZCBiZSBzZXJpYWxpemVkLiBUaGUgdG9KU09OIG1ldGhvZFxuICAgICAgICAgICAgd2lsbCBiZSBwYXNzZWQgdGhlIGtleSBhc3NvY2lhdGVkIHdpdGggdGhlIHZhbHVlLCBhbmQgdGhpcyB3aWxsIGJlXG4gICAgICAgICAgICBib3VuZCB0byB0aGUgdmFsdWVcblxuICAgICAgICAgICAgRm9yIGV4YW1wbGUsIHRoaXMgd291bGQgc2VyaWFsaXplIERhdGVzIGFzIElTTyBzdHJpbmdzLlxuXG4gICAgICAgICAgICAgICAgRGF0ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBmKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvcm1hdCBpbnRlZ2VycyB0byBoYXZlIGF0IGxlYXN0IHR3byBkaWdpdHMuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbiA8IDEwID8gJzAnICsgbiA6IG47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRVVENGdWxsWWVhcigpICAgKyAnLScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNb250aCgpICsgMSkgKyAnLScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENEYXRlKCkpICAgICAgKyAnVCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENIb3VycygpKSAgICAgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNaW51dGVzKCkpICAgKyAnOicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENTZWNvbmRzKCkpICAgKyAnWic7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsIHJlcGxhY2VyIG1ldGhvZC4gSXQgd2lsbCBiZSBwYXNzZWQgdGhlXG4gICAgICAgICAgICBrZXkgYW5kIHZhbHVlIG9mIGVhY2ggbWVtYmVyLCB3aXRoIHRoaXMgYm91bmQgdG8gdGhlIGNvbnRhaW5pbmdcbiAgICAgICAgICAgIG9iamVjdC4gVGhlIHZhbHVlIHRoYXQgaXMgcmV0dXJuZWQgZnJvbSB5b3VyIG1ldGhvZCB3aWxsIGJlXG4gICAgICAgICAgICBzZXJpYWxpemVkLiBJZiB5b3VyIG1ldGhvZCByZXR1cm5zIHVuZGVmaW5lZCwgdGhlbiB0aGUgbWVtYmVyIHdpbGxcbiAgICAgICAgICAgIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIHNlcmlhbGl6YXRpb24uXG5cbiAgICAgICAgICAgIElmIHRoZSByZXBsYWNlciBwYXJhbWV0ZXIgaXMgYW4gYXJyYXkgb2Ygc3RyaW5ncywgdGhlbiBpdCB3aWxsIGJlXG4gICAgICAgICAgICB1c2VkIHRvIHNlbGVjdCB0aGUgbWVtYmVycyB0byBiZSBzZXJpYWxpemVkLiBJdCBmaWx0ZXJzIHRoZSByZXN1bHRzXG4gICAgICAgICAgICBzdWNoIHRoYXQgb25seSBtZW1iZXJzIHdpdGgga2V5cyBsaXN0ZWQgaW4gdGhlIHJlcGxhY2VyIGFycmF5IGFyZVxuICAgICAgICAgICAgc3RyaW5naWZpZWQuXG5cbiAgICAgICAgICAgIFZhbHVlcyB0aGF0IGRvIG5vdCBoYXZlIEpTT04gcmVwcmVzZW50YXRpb25zLCBzdWNoIGFzIHVuZGVmaW5lZCBvclxuICAgICAgICAgICAgZnVuY3Rpb25zLCB3aWxsIG5vdCBiZSBzZXJpYWxpemVkLiBTdWNoIHZhbHVlcyBpbiBvYmplY3RzIHdpbGwgYmVcbiAgICAgICAgICAgIGRyb3BwZWQ7IGluIGFycmF5cyB0aGV5IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBudWxsLiBZb3UgY2FuIHVzZVxuICAgICAgICAgICAgYSByZXBsYWNlciBmdW5jdGlvbiB0byByZXBsYWNlIHRob3NlIHdpdGggSlNPTiB2YWx1ZXMuXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh1bmRlZmluZWQpIHJldHVybnMgdW5kZWZpbmVkLlxuXG4gICAgICAgICAgICBUaGUgb3B0aW9uYWwgc3BhY2UgcGFyYW1ldGVyIHByb2R1Y2VzIGEgc3RyaW5naWZpY2F0aW9uIG9mIHRoZVxuICAgICAgICAgICAgdmFsdWUgdGhhdCBpcyBmaWxsZWQgd2l0aCBsaW5lIGJyZWFrcyBhbmQgaW5kZW50YXRpb24gdG8gbWFrZSBpdFxuICAgICAgICAgICAgZWFzaWVyIHRvIHJlYWQuXG5cbiAgICAgICAgICAgIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBub24tZW1wdHkgc3RyaW5nLCB0aGVuIHRoYXQgc3RyaW5nIHdpbGxcbiAgICAgICAgICAgIGJlIHVzZWQgZm9yIGluZGVudGF0aW9uLiBJZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGlzIGEgbnVtYmVyLCB0aGVuXG4gICAgICAgICAgICB0aGUgaW5kZW50YXRpb24gd2lsbCBiZSB0aGF0IG1hbnkgc3BhY2VzLlxuXG4gICAgICAgICAgICBFeGFtcGxlOlxuXG4gICAgICAgICAgICB0ZXh0ID0gSlNPTi5zdHJpbmdpZnkoWydlJywge3BsdXJpYnVzOiAndW51bSd9XSk7XG4gICAgICAgICAgICAvLyB0ZXh0IGlzICdbXCJlXCIse1wicGx1cmlidXNcIjpcInVudW1cIn1dJ1xuXG5cbiAgICAgICAgICAgIHRleHQgPSBKU09OLnN0cmluZ2lmeShbJ2UnLCB7cGx1cmlidXM6ICd1bnVtJ31dLCBudWxsLCAnXFx0Jyk7XG4gICAgICAgICAgICAvLyB0ZXh0IGlzICdbXFxuXFx0XCJlXCIsXFxuXFx0e1xcblxcdFxcdFwicGx1cmlidXNcIjogXCJ1bnVtXCJcXG5cXHR9XFxuXSdcblxuICAgICAgICAgICAgdGV4dCA9IEpTT04uc3RyaW5naWZ5KFtuZXcgRGF0ZSgpXSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1trZXldIGluc3RhbmNlb2YgRGF0ZSA/XG4gICAgICAgICAgICAgICAgICAgICdEYXRlKCcgKyB0aGlzW2tleV0gKyAnKScgOiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gdGV4dCBpcyAnW1wiRGF0ZSgtLS1jdXJyZW50IHRpbWUtLS0pXCJdJ1xuXG5cbiAgICAgICAgSlNPTi5wYXJzZSh0ZXh0LCByZXZpdmVyKVxuICAgICAgICAgICAgVGhpcyBtZXRob2QgcGFyc2VzIGEgSlNPTiB0ZXh0IHRvIHByb2R1Y2UgYW4gb2JqZWN0IG9yIGFycmF5LlxuICAgICAgICAgICAgSXQgY2FuIHRocm93IGEgU3ludGF4RXJyb3IgZXhjZXB0aW9uLlxuXG4gICAgICAgICAgICBUaGUgb3B0aW9uYWwgcmV2aXZlciBwYXJhbWV0ZXIgaXMgYSBmdW5jdGlvbiB0aGF0IGNhbiBmaWx0ZXIgYW5kXG4gICAgICAgICAgICB0cmFuc2Zvcm0gdGhlIHJlc3VsdHMuIEl0IHJlY2VpdmVzIGVhY2ggb2YgdGhlIGtleXMgYW5kIHZhbHVlcyxcbiAgICAgICAgICAgIGFuZCBpdHMgcmV0dXJuIHZhbHVlIGlzIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgdmFsdWUuXG4gICAgICAgICAgICBJZiBpdCByZXR1cm5zIHdoYXQgaXQgcmVjZWl2ZWQsIHRoZW4gdGhlIHN0cnVjdHVyZSBpcyBub3QgbW9kaWZpZWQuXG4gICAgICAgICAgICBJZiBpdCByZXR1cm5zIHVuZGVmaW5lZCB0aGVuIHRoZSBtZW1iZXIgaXMgZGVsZXRlZC5cblxuICAgICAgICAgICAgRXhhbXBsZTpcblxuICAgICAgICAgICAgLy8gUGFyc2UgdGhlIHRleHQuIFZhbHVlcyB0aGF0IGxvb2sgbGlrZSBJU08gZGF0ZSBzdHJpbmdzIHdpbGxcbiAgICAgICAgICAgIC8vIGJlIGNvbnZlcnRlZCB0byBEYXRlIG9iamVjdHMuXG5cbiAgICAgICAgICAgIG15RGF0YSA9IEpTT04ucGFyc2UodGV4dCwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgYTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBhID1cbi9eKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSlUKFxcZHsyfSk6KFxcZHsyfSk6KFxcZHsyfSg/OlxcLlxcZCopPylaJC8uZXhlYyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoK2FbMV0sICthWzJdIC0gMSwgK2FbM10sICthWzRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICthWzVdLCArYVs2XSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBteURhdGEgPSBKU09OLnBhcnNlKCdbXCJEYXRlKDA5LzA5LzIwMDEpXCJdJywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2xpY2UoMCwgNSkgPT09ICdEYXRlKCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNsaWNlKC0xKSA9PT0gJyknKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSBuZXcgRGF0ZSh2YWx1ZS5zbGljZSg1LCAtMSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgIFRoaXMgaXMgYSByZWZlcmVuY2UgaW1wbGVtZW50YXRpb24uIFlvdSBhcmUgZnJlZSB0byBjb3B5LCBtb2RpZnksIG9yXG4gICAgcmVkaXN0cmlidXRlLlxuKi9cblxuLypqc2xpbnQgZXZpbDogdHJ1ZSwgc3RyaWN0OiBmYWxzZSwgcmVnZXhwOiBmYWxzZSAqL1xuXG4vKm1lbWJlcnMgXCJcIiwgXCJcXGJcIiwgXCJcXHRcIiwgXCJcXG5cIiwgXCJcXGZcIiwgXCJcXHJcIiwgXCJcXFwiXCIsIEpTT04sIFwiXFxcXFwiLCBhcHBseSxcbiAgICBjYWxsLCBjaGFyQ29kZUF0LCBnZXRVVENEYXRlLCBnZXRVVENGdWxsWWVhciwgZ2V0VVRDSG91cnMsXG4gICAgZ2V0VVRDTWludXRlcywgZ2V0VVRDTW9udGgsIGdldFVUQ1NlY29uZHMsIGhhc093blByb3BlcnR5LCBqb2luLFxuICAgIGxhc3RJbmRleCwgbGVuZ3RoLCBwYXJzZSwgcHJvdG90eXBlLCBwdXNoLCByZXBsYWNlLCBzbGljZSwgc3RyaW5naWZ5LFxuICAgIHRlc3QsIHRvSlNPTiwgdG9TdHJpbmcsIHZhbHVlT2ZcbiovXG5cblxuLy8gQ3JlYXRlIGEgSlNPTiBvYmplY3Qgb25seSBpZiBvbmUgZG9lcyBub3QgYWxyZWFkeSBleGlzdC4gV2UgY3JlYXRlIHRoZVxuLy8gbWV0aG9kcyBpbiBhIGNsb3N1cmUgdG8gYXZvaWQgY3JlYXRpbmcgZ2xvYmFsIHZhcmlhYmxlcy5cblxudmFyIEpTT047XG5pZiAoIUpTT04pIHtcbiAgICBKU09OID0ge307XG59XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgZ2xvYmFsID0gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKVxuICAgICAgLCBKU09OID0gZ2xvYmFsLkpTT05cbiAgICAgIDtcblxuICAgIGlmICghSlNPTikge1xuICAgICAgSlNPTiA9IHt9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGYobikge1xuICAgICAgICAvLyBGb3JtYXQgaW50ZWdlcnMgdG8gaGF2ZSBhdCBsZWFzdCB0d28gZGlnaXRzLlxuICAgICAgICByZXR1cm4gbiA8IDEwID8gJzAnICsgbiA6IG47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBEYXRlLnByb3RvdHlwZS50b0pTT04gIT09ICdmdW5jdGlvbicpIHtcblxuICAgICAgICBEYXRlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoa2V5KSB7XG5cbiAgICAgICAgICAgIHJldHVybiBpc0Zpbml0ZSh0aGlzLnZhbHVlT2YoKSkgP1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VVRDRnVsbFllYXIoKSAgICAgKyAnLScgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNb250aCgpICsgMSkgKyAnLScgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENEYXRlKCkpICAgICAgKyAnVCcgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENIb3VycygpKSAgICAgKyAnOicgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENNaW51dGVzKCkpICAgKyAnOicgK1xuICAgICAgICAgICAgICAgIGYodGhpcy5nZXRVVENTZWNvbmRzKCkpICAgKyAnWicgOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIFN0cmluZy5wcm90b3R5cGUudG9KU09OICAgICAgPVxuICAgICAgICAgICAgTnVtYmVyLnByb3RvdHlwZS50b0pTT04gID1cbiAgICAgICAgICAgIEJvb2xlYW4ucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZU9mKCk7XG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBjeCA9IC9bXFx1MDAwMFxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nLFxuICAgICAgICBlc2NhcGFibGUgPSAvW1xcXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHg5ZlxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nLFxuICAgICAgICBnYXAsXG4gICAgICAgIGluZGVudCxcbiAgICAgICAgbWV0YSA9IHsgICAgLy8gdGFibGUgb2YgY2hhcmFjdGVyIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICAgICdcXGInOiAnXFxcXGInLFxuICAgICAgICAgICAgJ1xcdCc6ICdcXFxcdCcsXG4gICAgICAgICAgICAnXFxuJzogJ1xcXFxuJyxcbiAgICAgICAgICAgICdcXGYnOiAnXFxcXGYnLFxuICAgICAgICAgICAgJ1xccic6ICdcXFxccicsXG4gICAgICAgICAgICAnXCInIDogJ1xcXFxcIicsXG4gICAgICAgICAgICAnXFxcXCc6ICdcXFxcXFxcXCdcbiAgICAgICAgfSxcbiAgICAgICAgcmVwO1xuXG5cbiAgICBmdW5jdGlvbiBxdW90ZShzdHJpbmcpIHtcblxuLy8gSWYgdGhlIHN0cmluZyBjb250YWlucyBubyBjb250cm9sIGNoYXJhY3RlcnMsIG5vIHF1b3RlIGNoYXJhY3RlcnMsIGFuZCBub1xuLy8gYmFja3NsYXNoIGNoYXJhY3RlcnMsIHRoZW4gd2UgY2FuIHNhZmVseSBzbGFwIHNvbWUgcXVvdGVzIGFyb3VuZCBpdC5cbi8vIE90aGVyd2lzZSB3ZSBtdXN0IGFsc28gcmVwbGFjZSB0aGUgb2ZmZW5kaW5nIGNoYXJhY3RlcnMgd2l0aCBzYWZlIGVzY2FwZVxuLy8gc2VxdWVuY2VzLlxuXG4gICAgICAgIGVzY2FwYWJsZS5sYXN0SW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gZXNjYXBhYmxlLnRlc3Qoc3RyaW5nKSA/ICdcIicgKyBzdHJpbmcucmVwbGFjZShlc2NhcGFibGUsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICB2YXIgYyA9IG1ldGFbYV07XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGMgPT09ICdzdHJpbmcnID8gYyA6XG4gICAgICAgICAgICAgICAgJ1xcXFx1JyArICgnMDAwMCcgKyBhLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtNCk7XG4gICAgICAgIH0pICsgJ1wiJyA6ICdcIicgKyBzdHJpbmcgKyAnXCInO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc3RyKGtleSwgaG9sZGVyKSB7XG5cbi8vIFByb2R1Y2UgYSBzdHJpbmcgZnJvbSBob2xkZXJba2V5XS5cblxuICAgICAgICB2YXIgaSwgICAgICAgICAgLy8gVGhlIGxvb3AgY291bnRlci5cbiAgICAgICAgICAgIGssICAgICAgICAgIC8vIFRoZSBtZW1iZXIga2V5LlxuICAgICAgICAgICAgdiwgICAgICAgICAgLy8gVGhlIG1lbWJlciB2YWx1ZS5cbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIG1pbmQgPSBnYXAsXG4gICAgICAgICAgICBwYXJ0aWFsLFxuICAgICAgICAgICAgdmFsdWUgPSBob2xkZXJba2V5XTtcblxuLy8gSWYgdGhlIHZhbHVlIGhhcyBhIHRvSlNPTiBtZXRob2QsIGNhbGwgaXQgdG8gb2J0YWluIGEgcmVwbGFjZW1lbnQgdmFsdWUuXG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgdmFsdWUudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSlNPTihrZXkpO1xuICAgICAgICB9XG5cbi8vIElmIHdlIHdlcmUgY2FsbGVkIHdpdGggYSByZXBsYWNlciBmdW5jdGlvbiwgdGhlbiBjYWxsIHRoZSByZXBsYWNlciB0b1xuLy8gb2J0YWluIGEgcmVwbGFjZW1lbnQgdmFsdWUuXG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhbHVlID0gcmVwLmNhbGwoaG9sZGVyLCBrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuXG4vLyBXaGF0IGhhcHBlbnMgbmV4dCBkZXBlbmRzIG9uIHRoZSB2YWx1ZSdzIHR5cGUuXG5cbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHJldHVybiBxdW90ZSh2YWx1ZSk7XG5cbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcblxuLy8gSlNPTiBudW1iZXJzIG11c3QgYmUgZmluaXRlLiBFbmNvZGUgbm9uLWZpbml0ZSBudW1iZXJzIGFzIG51bGwuXG5cbiAgICAgICAgICAgIHJldHVybiBpc0Zpbml0ZSh2YWx1ZSkgPyBTdHJpbmcodmFsdWUpIDogJ251bGwnO1xuXG4gICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICBjYXNlICdudWxsJzpcblxuLy8gSWYgdGhlIHZhbHVlIGlzIGEgYm9vbGVhbiBvciBudWxsLCBjb252ZXJ0IGl0IHRvIGEgc3RyaW5nLiBOb3RlOlxuLy8gdHlwZW9mIG51bGwgZG9lcyBub3QgcHJvZHVjZSAnbnVsbCcuIFRoZSBjYXNlIGlzIGluY2x1ZGVkIGhlcmUgaW5cbi8vIHRoZSByZW1vdGUgY2hhbmNlIHRoYXQgdGhpcyBnZXRzIGZpeGVkIHNvbWVkYXkuXG5cbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuXG4vLyBJZiB0aGUgdHlwZSBpcyAnb2JqZWN0Jywgd2UgbWlnaHQgYmUgZGVhbGluZyB3aXRoIGFuIG9iamVjdCBvciBhbiBhcnJheSBvclxuLy8gbnVsbC5cblxuICAgICAgICBjYXNlICdvYmplY3QnOlxuXG4vLyBEdWUgdG8gYSBzcGVjaWZpY2F0aW9uIGJsdW5kZXIgaW4gRUNNQVNjcmlwdCwgdHlwZW9mIG51bGwgaXMgJ29iamVjdCcsXG4vLyBzbyB3YXRjaCBvdXQgZm9yIHRoYXQgY2FzZS5cblxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgICAgICB9XG5cbi8vIE1ha2UgYW4gYXJyYXkgdG8gaG9sZCB0aGUgcGFydGlhbCByZXN1bHRzIG9mIHN0cmluZ2lmeWluZyB0aGlzIG9iamVjdCB2YWx1ZS5cblxuICAgICAgICAgICAgZ2FwICs9IGluZGVudDtcbiAgICAgICAgICAgIHBhcnRpYWwgPSBbXTtcblxuLy8gSXMgdGhlIHZhbHVlIGFuIGFycmF5P1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcblxuLy8gVGhlIHZhbHVlIGlzIGFuIGFycmF5LiBTdHJpbmdpZnkgZXZlcnkgZWxlbWVudC4gVXNlIG51bGwgYXMgYSBwbGFjZWhvbGRlclxuLy8gZm9yIG5vbi1KU09OIHZhbHVlcy5cblxuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGlhbFtpXSA9IHN0cihpLCB2YWx1ZSkgfHwgJ251bGwnO1xuICAgICAgICAgICAgICAgIH1cblxuLy8gSm9pbiBhbGwgb2YgdGhlIGVsZW1lbnRzIHRvZ2V0aGVyLCBzZXBhcmF0ZWQgd2l0aCBjb21tYXMsIGFuZCB3cmFwIHRoZW0gaW5cbi8vIGJyYWNrZXRzLlxuXG4gICAgICAgICAgICAgICAgdiA9IHBhcnRpYWwubGVuZ3RoID09PSAwID8gJ1tdJyA6IGdhcCA/XG4gICAgICAgICAgICAgICAgICAgICdbXFxuJyArIGdhcCArIHBhcnRpYWwuam9pbignLFxcbicgKyBnYXApICsgJ1xcbicgKyBtaW5kICsgJ10nIDpcbiAgICAgICAgICAgICAgICAgICAgJ1snICsgcGFydGlhbC5qb2luKCcsJykgKyAnXSc7XG4gICAgICAgICAgICAgICAgZ2FwID0gbWluZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgIH1cblxuLy8gSWYgdGhlIHJlcGxhY2VyIGlzIGFuIGFycmF5LCB1c2UgaXQgdG8gc2VsZWN0IHRoZSBtZW1iZXJzIHRvIGJlIHN0cmluZ2lmaWVkLlxuXG4gICAgICAgICAgICBpZiAocmVwICYmIHR5cGVvZiByZXAgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gcmVwLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXBbaV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrID0gcmVwW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHN0cihrLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpYWwucHVzaChxdW90ZShrKSArIChnYXAgPyAnOiAnIDogJzonKSArIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcblxuLy8gT3RoZXJ3aXNlLCBpdGVyYXRlIHRocm91Z2ggYWxsIG9mIHRoZSBrZXlzIGluIHRoZSBvYmplY3QuXG5cbiAgICAgICAgICAgICAgICBmb3IgKGsgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBzdHIoaywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsLnB1c2gocXVvdGUoaykgKyAoZ2FwID8gJzogJyA6ICc6JykgKyB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuLy8gSm9pbiBhbGwgb2YgdGhlIG1lbWJlciB0ZXh0cyB0b2dldGhlciwgc2VwYXJhdGVkIHdpdGggY29tbWFzLFxuLy8gYW5kIHdyYXAgdGhlbSBpbiBicmFjZXMuXG5cbiAgICAgICAgICAgIHYgPSBwYXJ0aWFsLmxlbmd0aCA9PT0gMCA/ICd7fScgOiBnYXAgP1xuICAgICAgICAgICAgICAgICd7XFxuJyArIGdhcCArIHBhcnRpYWwuam9pbignLFxcbicgKyBnYXApICsgJ1xcbicgKyBtaW5kICsgJ30nIDpcbiAgICAgICAgICAgICAgICAneycgKyBwYXJ0aWFsLmpvaW4oJywnKSArICd9JztcbiAgICAgICAgICAgIGdhcCA9IG1pbmQ7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuICAgIH1cblxuLy8gSWYgdGhlIEpTT04gb2JqZWN0IGRvZXMgbm90IHlldCBoYXZlIGEgc3RyaW5naWZ5IG1ldGhvZCwgZ2l2ZSBpdCBvbmUuXG5cbiAgICBpZiAodHlwZW9mIEpTT04uc3RyaW5naWZ5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIEpTT04uc3RyaW5naWZ5ID0gZnVuY3Rpb24gKHZhbHVlLCByZXBsYWNlciwgc3BhY2UpIHtcblxuLy8gVGhlIHN0cmluZ2lmeSBtZXRob2QgdGFrZXMgYSB2YWx1ZSBhbmQgYW4gb3B0aW9uYWwgcmVwbGFjZXIsIGFuZCBhbiBvcHRpb25hbFxuLy8gc3BhY2UgcGFyYW1ldGVyLCBhbmQgcmV0dXJucyBhIEpTT04gdGV4dC4gVGhlIHJlcGxhY2VyIGNhbiBiZSBhIGZ1bmN0aW9uXG4vLyB0aGF0IGNhbiByZXBsYWNlIHZhbHVlcywgb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncyB0aGF0IHdpbGwgc2VsZWN0IHRoZSBrZXlzLlxuLy8gQSBkZWZhdWx0IHJlcGxhY2VyIG1ldGhvZCBjYW4gYmUgcHJvdmlkZWQuIFVzZSBvZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGNhblxuLy8gcHJvZHVjZSB0ZXh0IHRoYXQgaXMgbW9yZSBlYXNpbHkgcmVhZGFibGUuXG5cbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgZ2FwID0gJyc7XG4gICAgICAgICAgICBpbmRlbnQgPSAnJztcblxuLy8gSWYgdGhlIHNwYWNlIHBhcmFtZXRlciBpcyBhIG51bWJlciwgbWFrZSBhbiBpbmRlbnQgc3RyaW5nIGNvbnRhaW5pbmcgdGhhdFxuLy8gbWFueSBzcGFjZXMuXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3BhY2UgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNwYWNlOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50ICs9ICcgJztcbiAgICAgICAgICAgICAgICB9XG5cbi8vIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBzdHJpbmcsIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgaW5kZW50IHN0cmluZy5cblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaW5kZW50ID0gc3BhY2U7XG4gICAgICAgICAgICB9XG5cbi8vIElmIHRoZXJlIGlzIGEgcmVwbGFjZXIsIGl0IG11c3QgYmUgYSBmdW5jdGlvbiBvciBhbiBhcnJheS5cbi8vIE90aGVyd2lzZSwgdGhyb3cgYW4gZXJyb3IuXG5cbiAgICAgICAgICAgIHJlcCA9IHJlcGxhY2VyO1xuICAgICAgICAgICAgaWYgKHJlcGxhY2VyICYmIHR5cGVvZiByZXBsYWNlciAhPT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgICAgICAgICAgICAodHlwZW9mIHJlcGxhY2VyICE9PSAnb2JqZWN0JyB8fFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcmVwbGFjZXIubGVuZ3RoICE9PSAnbnVtYmVyJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pTT04uc3RyaW5naWZ5Jyk7XG4gICAgICAgICAgICB9XG5cbi8vIE1ha2UgYSBmYWtlIHJvb3Qgb2JqZWN0IGNvbnRhaW5pbmcgb3VyIHZhbHVlIHVuZGVyIHRoZSBrZXkgb2YgJycuXG4vLyBSZXR1cm4gdGhlIHJlc3VsdCBvZiBzdHJpbmdpZnlpbmcgdGhlIHZhbHVlLlxuXG4gICAgICAgICAgICByZXR1cm4gc3RyKCcnLCB7Jyc6IHZhbHVlfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG5cbi8vIElmIHRoZSBKU09OIG9iamVjdCBkb2VzIG5vdCB5ZXQgaGF2ZSBhIHBhcnNlIG1ldGhvZCwgZ2l2ZSBpdCBvbmUuXG5cbiAgICBpZiAodHlwZW9mIEpTT04ucGFyc2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgSlNPTi5wYXJzZSA9IGZ1bmN0aW9uICh0ZXh0LCByZXZpdmVyKSB7XG5cbi8vIFRoZSBwYXJzZSBtZXRob2QgdGFrZXMgYSB0ZXh0IGFuZCBhbiBvcHRpb25hbCByZXZpdmVyIGZ1bmN0aW9uLCBhbmQgcmV0dXJuc1xuLy8gYSBKYXZhU2NyaXB0IHZhbHVlIGlmIHRoZSB0ZXh0IGlzIGEgdmFsaWQgSlNPTiB0ZXh0LlxuXG4gICAgICAgICAgICB2YXIgajtcblxuICAgICAgICAgICAgZnVuY3Rpb24gd2Fsayhob2xkZXIsIGtleSkge1xuXG4vLyBUaGUgd2FsayBtZXRob2QgaXMgdXNlZCB0byByZWN1cnNpdmVseSB3YWxrIHRoZSByZXN1bHRpbmcgc3RydWN0dXJlIHNvXG4vLyB0aGF0IG1vZGlmaWNhdGlvbnMgY2FuIGJlIG1hZGUuXG5cbiAgICAgICAgICAgICAgICB2YXIgaywgdiwgdmFsdWUgPSBob2xkZXJba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHdhbGsodmFsdWUsIGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVba10gPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB2YWx1ZVtrXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldml2ZXIuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuXG5cbi8vIFBhcnNpbmcgaGFwcGVucyBpbiBmb3VyIHN0YWdlcy4gSW4gdGhlIGZpcnN0IHN0YWdlLCB3ZSByZXBsYWNlIGNlcnRhaW5cbi8vIFVuaWNvZGUgY2hhcmFjdGVycyB3aXRoIGVzY2FwZSBzZXF1ZW5jZXMuIEphdmFTY3JpcHQgaGFuZGxlcyBtYW55IGNoYXJhY3RlcnNcbi8vIGluY29ycmVjdGx5LCBlaXRoZXIgc2lsZW50bHkgZGVsZXRpbmcgdGhlbSwgb3IgdHJlYXRpbmcgdGhlbSBhcyBsaW5lIGVuZGluZ3MuXG5cbiAgICAgICAgICAgIHRleHQgPSBTdHJpbmcodGV4dCk7XG4gICAgICAgICAgICBjeC5sYXN0SW5kZXggPSAwO1xuICAgICAgICAgICAgaWYgKGN4LnRlc3QodGV4dCkpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKGN4LCBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1xcXFx1JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAoJzAwMDAnICsgYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4vLyBJbiB0aGUgc2Vjb25kIHN0YWdlLCB3ZSBydW4gdGhlIHRleHQgYWdhaW5zdCByZWd1bGFyIGV4cHJlc3Npb25zIHRoYXQgbG9va1xuLy8gZm9yIG5vbi1KU09OIHBhdHRlcm5zLiBXZSBhcmUgZXNwZWNpYWxseSBjb25jZXJuZWQgd2l0aCAnKCknIGFuZCAnbmV3J1xuLy8gYmVjYXVzZSB0aGV5IGNhbiBjYXVzZSBpbnZvY2F0aW9uLCBhbmQgJz0nIGJlY2F1c2UgaXQgY2FuIGNhdXNlIG11dGF0aW9uLlxuLy8gQnV0IGp1c3QgdG8gYmUgc2FmZSwgd2Ugd2FudCB0byByZWplY3QgYWxsIHVuZXhwZWN0ZWQgZm9ybXMuXG5cbi8vIFdlIHNwbGl0IHRoZSBzZWNvbmQgc3RhZ2UgaW50byA0IHJlZ2V4cCBvcGVyYXRpb25zIGluIG9yZGVyIHRvIHdvcmsgYXJvdW5kXG4vLyBjcmlwcGxpbmcgaW5lZmZpY2llbmNpZXMgaW4gSUUncyBhbmQgU2FmYXJpJ3MgcmVnZXhwIGVuZ2luZXMuIEZpcnN0IHdlXG4vLyByZXBsYWNlIHRoZSBKU09OIGJhY2tzbGFzaCBwYWlycyB3aXRoICdAJyAoYSBub24tSlNPTiBjaGFyYWN0ZXIpLiBTZWNvbmQsIHdlXG4vLyByZXBsYWNlIGFsbCBzaW1wbGUgdmFsdWUgdG9rZW5zIHdpdGggJ10nIGNoYXJhY3RlcnMuIFRoaXJkLCB3ZSBkZWxldGUgYWxsXG4vLyBvcGVuIGJyYWNrZXRzIHRoYXQgZm9sbG93IGEgY29sb24gb3IgY29tbWEgb3IgdGhhdCBiZWdpbiB0aGUgdGV4dC4gRmluYWxseSxcbi8vIHdlIGxvb2sgdG8gc2VlIHRoYXQgdGhlIHJlbWFpbmluZyBjaGFyYWN0ZXJzIGFyZSBvbmx5IHdoaXRlc3BhY2Ugb3IgJ10nIG9yXG4vLyAnLCcgb3IgJzonIG9yICd7JyBvciAnfScuIElmIHRoYXQgaXMgc28sIHRoZW4gdGhlIHRleHQgaXMgc2FmZSBmb3IgZXZhbC5cblxuICAgICAgICAgICAgaWYgKC9eW1xcXSw6e31cXHNdKiQvXG4gICAgICAgICAgICAgICAgICAgIC50ZXN0KHRleHQucmVwbGFjZSgvXFxcXCg/OltcIlxcXFxcXC9iZm5ydF18dVswLTlhLWZBLUZdezR9KS9nLCAnQCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXCJbXlwiXFxcXFxcblxccl0qXCJ8dHJ1ZXxmYWxzZXxudWxsfC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/L2csICddJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oPzpefDp8LCkoPzpcXHMqXFxbKSsvZywgJycpKSkge1xuXG4vLyBJbiB0aGUgdGhpcmQgc3RhZ2Ugd2UgdXNlIHRoZSBldmFsIGZ1bmN0aW9uIHRvIGNvbXBpbGUgdGhlIHRleHQgaW50byBhXG4vLyBKYXZhU2NyaXB0IHN0cnVjdHVyZS4gVGhlICd7JyBvcGVyYXRvciBpcyBzdWJqZWN0IHRvIGEgc3ludGFjdGljIGFtYmlndWl0eVxuLy8gaW4gSmF2YVNjcmlwdDogaXQgY2FuIGJlZ2luIGEgYmxvY2sgb3IgYW4gb2JqZWN0IGxpdGVyYWwuIFdlIHdyYXAgdGhlIHRleHRcbi8vIGluIHBhcmVucyB0byBlbGltaW5hdGUgdGhlIGFtYmlndWl0eS5cblxuICAgICAgICAgICAgICAgIGogPSBldmFsKCcoJyArIHRleHQgKyAnKScpO1xuXG4vLyBJbiB0aGUgb3B0aW9uYWwgZm91cnRoIHN0YWdlLCB3ZSByZWN1cnNpdmVseSB3YWxrIHRoZSBuZXcgc3RydWN0dXJlLCBwYXNzaW5nXG4vLyBlYWNoIG5hbWUvdmFsdWUgcGFpciB0byBhIHJldml2ZXIgZnVuY3Rpb24gZm9yIHBvc3NpYmxlIHRyYW5zZm9ybWF0aW9uLlxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiByZXZpdmVyID09PSAnZnVuY3Rpb24nID9cbiAgICAgICAgICAgICAgICAgICAgd2Fsayh7Jyc6IGp9LCAnJykgOiBqO1xuICAgICAgICAgICAgfVxuXG4vLyBJZiB0aGUgdGV4dCBpcyBub3QgSlNPTiBwYXJzZWFibGUsIHRoZW4gYSBTeW50YXhFcnJvciBpcyB0aHJvd24uXG5cbiAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignSlNPTi5wYXJzZScpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdsb2JhbC5KU09OID0gSlNPTjtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IEpTT047XG59KCkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19KU09OQDEuMC4wQEpTT04vanNvbjIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL19KU09OQDEuMC4wQEpTT04vanNvbjIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsInZhciBjaGFyZW5jID0ge1xuICAvLyBVVEYtOCBlbmNvZGluZ1xuICB1dGY4OiB7XG4gICAgLy8gQ29udmVydCBhIHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBzdHJpbmdUb0J5dGVzOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBjaGFyZW5jLmJpbi5zdHJpbmdUb0J5dGVzKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKSk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgc3RyaW5nXG4gICAgYnl0ZXNUb1N0cmluZzogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGNoYXJlbmMuYmluLmJ5dGVzVG9TdHJpbmcoYnl0ZXMpKSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEJpbmFyeSBlbmNvZGluZ1xuICBiaW46IHtcbiAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIHN0cmluZ1RvQnl0ZXM6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspXG4gICAgICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBzdHJpbmdcbiAgICBieXRlc1RvU3RyaW5nOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgc3RyID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHN0ci5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pKTtcbiAgICAgIHJldHVybiBzdHIuam9pbignJyk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNoYXJlbmM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vX2NoYXJlbmNAMC4wLjJAY2hhcmVuYy9jaGFyZW5jLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9fY2hhcmVuY0AwLjAuMkBjaGFyZW5jL2NoYXJlbmMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIihmdW5jdGlvbigpIHtcbiAgdmFyIGJhc2U2NG1hcFxuICAgICAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLycsXG5cbiAgY3J5cHQgPSB7XG4gICAgLy8gQml0LXdpc2Ugcm90YXRpb24gbGVmdFxuICAgIHJvdGw6IGZ1bmN0aW9uKG4sIGIpIHtcbiAgICAgIHJldHVybiAobiA8PCBiKSB8IChuID4+PiAoMzIgLSBiKSk7XG4gICAgfSxcblxuICAgIC8vIEJpdC13aXNlIHJvdGF0aW9uIHJpZ2h0XG4gICAgcm90cjogZnVuY3Rpb24obiwgYikge1xuICAgICAgcmV0dXJuIChuIDw8ICgzMiAtIGIpKSB8IChuID4+PiBiKTtcbiAgICB9LFxuXG4gICAgLy8gU3dhcCBiaWctZW5kaWFuIHRvIGxpdHRsZS1lbmRpYW4gYW5kIHZpY2UgdmVyc2FcbiAgICBlbmRpYW46IGZ1bmN0aW9uKG4pIHtcbiAgICAgIC8vIElmIG51bWJlciBnaXZlbiwgc3dhcCBlbmRpYW5cbiAgICAgIGlmIChuLmNvbnN0cnVjdG9yID09IE51bWJlcikge1xuICAgICAgICByZXR1cm4gY3J5cHQucm90bChuLCA4KSAmIDB4MDBGRjAwRkYgfCBjcnlwdC5yb3RsKG4sIDI0KSAmIDB4RkYwMEZGMDA7XG4gICAgICB9XG5cbiAgICAgIC8vIEVsc2UsIGFzc3VtZSBhcnJheSBhbmQgc3dhcCBhbGwgaXRlbXNcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbi5sZW5ndGg7IGkrKylcbiAgICAgICAgbltpXSA9IGNyeXB0LmVuZGlhbihuW2ldKTtcbiAgICAgIHJldHVybiBuO1xuICAgIH0sXG5cbiAgICAvLyBHZW5lcmF0ZSBhbiBhcnJheSBvZiBhbnkgbGVuZ3RoIG9mIHJhbmRvbSBieXRlc1xuICAgIHJhbmRvbUJ5dGVzOiBmdW5jdGlvbihuKSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdOyBuID4gMDsgbi0tKVxuICAgICAgICBieXRlcy5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBiaWctZW5kaWFuIDMyLWJpdCB3b3Jkc1xuICAgIGJ5dGVzVG9Xb3JkczogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIHdvcmRzID0gW10sIGkgPSAwLCBiID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrLCBiICs9IDgpXG4gICAgICAgIHdvcmRzW2IgPj4+IDVdIHw9IGJ5dGVzW2ldIDw8ICgyNCAtIGIgJSAzMik7XG4gICAgICByZXR1cm4gd29yZHM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYmlnLWVuZGlhbiAzMi1iaXQgd29yZHMgdG8gYSBieXRlIGFycmF5XG4gICAgd29yZHNUb0J5dGVzOiBmdW5jdGlvbih3b3Jkcykge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgYiA9IDA7IGIgPCB3b3Jkcy5sZW5ndGggKiAzMjsgYiArPSA4KVxuICAgICAgICBieXRlcy5wdXNoKCh3b3Jkc1tiID4+PiA1XSA+Pj4gKDI0IC0gYiAlIDMyKSkgJiAweEZGKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBoZXggc3RyaW5nXG4gICAgYnl0ZXNUb0hleDogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIGhleCA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGhleC5wdXNoKChieXRlc1tpXSA+Pj4gNCkudG9TdHJpbmcoMTYpKTtcbiAgICAgICAgaGV4LnB1c2goKGJ5dGVzW2ldICYgMHhGKS50b1N0cmluZygxNikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhleC5qb2luKCcnKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGhleCBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgaGV4VG9CeXRlczogZnVuY3Rpb24oaGV4KSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBjID0gMDsgYyA8IGhleC5sZW5ndGg7IGMgKz0gMilcbiAgICAgICAgYnl0ZXMucHVzaChwYXJzZUludChoZXguc3Vic3RyKGMsIDIpLCAxNikpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIGJhc2UtNjQgc3RyaW5nXG4gICAgYnl0ZXNUb0Jhc2U2NDogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIGJhc2U2NCA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIHZhciB0cmlwbGV0ID0gKGJ5dGVzW2ldIDw8IDE2KSB8IChieXRlc1tpICsgMV0gPDwgOCkgfCBieXRlc1tpICsgMl07XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNDsgaisrKVxuICAgICAgICAgIGlmIChpICogOCArIGogKiA2IDw9IGJ5dGVzLmxlbmd0aCAqIDgpXG4gICAgICAgICAgICBiYXNlNjQucHVzaChiYXNlNjRtYXAuY2hhckF0KCh0cmlwbGV0ID4+PiA2ICogKDMgLSBqKSkgJiAweDNGKSk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgYmFzZTY0LnB1c2goJz0nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBiYXNlNjQuam9pbignJyk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBiYXNlLTY0IHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBiYXNlNjRUb0J5dGVzOiBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICAgIC8vIFJlbW92ZSBub24tYmFzZS02NCBjaGFyYWN0ZXJzXG4gICAgICBiYXNlNjQgPSBiYXNlNjQucmVwbGFjZSgvW15BLVowLTkrXFwvXS9pZywgJycpO1xuXG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBpID0gMCwgaW1vZDQgPSAwOyBpIDwgYmFzZTY0Lmxlbmd0aDtcbiAgICAgICAgICBpbW9kNCA9ICsraSAlIDQpIHtcbiAgICAgICAgaWYgKGltb2Q0ID09IDApIGNvbnRpbnVlO1xuICAgICAgICBieXRlcy5wdXNoKCgoYmFzZTY0bWFwLmluZGV4T2YoYmFzZTY0LmNoYXJBdChpIC0gMSkpXG4gICAgICAgICAgICAmIChNYXRoLnBvdygyLCAtMiAqIGltb2Q0ICsgOCkgLSAxKSkgPDwgKGltb2Q0ICogMikpXG4gICAgICAgICAgICB8IChiYXNlNjRtYXAuaW5kZXhPZihiYXNlNjQuY2hhckF0KGkpKSA+Pj4gKDYgLSBpbW9kNCAqIDIpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gY3J5cHQ7XG59KSgpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19jcnlwdEAwLjAuMkBjcnlwdC9jcnlwdC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvX2NyeXB0QDAuMC4yQGNyeXB0L2NyeXB0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9faXMtYnVmZmVyQDEuMS42QGlzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvX2lzLWJ1ZmZlckAxLjEuNkBpcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIihmdW5jdGlvbigpe1xyXG4gIHZhciBjcnlwdCA9IHJlcXVpcmUoJ2NyeXB0JyksXHJcbiAgICAgIHV0ZjggPSByZXF1aXJlKCdjaGFyZW5jJykudXRmOCxcclxuICAgICAgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKSxcclxuICAgICAgYmluID0gcmVxdWlyZSgnY2hhcmVuYycpLmJpbixcclxuXHJcbiAgLy8gVGhlIGNvcmVcclxuICBtZDUgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgLy8gQ29udmVydCB0byBieXRlIGFycmF5XHJcbiAgICBpZiAobWVzc2FnZS5jb25zdHJ1Y3RvciA9PSBTdHJpbmcpXHJcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZW5jb2RpbmcgPT09ICdiaW5hcnknKVxyXG4gICAgICAgIG1lc3NhZ2UgPSBiaW4uc3RyaW5nVG9CeXRlcyhtZXNzYWdlKTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIG1lc3NhZ2UgPSB1dGY4LnN0cmluZ1RvQnl0ZXMobWVzc2FnZSk7XHJcbiAgICBlbHNlIGlmIChpc0J1ZmZlcihtZXNzYWdlKSlcclxuICAgICAgbWVzc2FnZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG1lc3NhZ2UsIDApO1xyXG4gICAgZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkobWVzc2FnZSkpXHJcbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnRvU3RyaW5nKCk7XHJcbiAgICAvLyBlbHNlLCBhc3N1bWUgYnl0ZSBhcnJheSBhbHJlYWR5XHJcblxyXG4gICAgdmFyIG0gPSBjcnlwdC5ieXRlc1RvV29yZHMobWVzc2FnZSksXHJcbiAgICAgICAgbCA9IG1lc3NhZ2UubGVuZ3RoICogOCxcclxuICAgICAgICBhID0gIDE3MzI1ODQxOTMsXHJcbiAgICAgICAgYiA9IC0yNzE3MzM4NzksXHJcbiAgICAgICAgYyA9IC0xNzMyNTg0MTk0LFxyXG4gICAgICAgIGQgPSAgMjcxNzMzODc4O1xyXG5cclxuICAgIC8vIFN3YXAgZW5kaWFuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbVtpXSA9ICgobVtpXSA8PCAgOCkgfCAobVtpXSA+Pj4gMjQpKSAmIDB4MDBGRjAwRkYgfFxyXG4gICAgICAgICAgICAgKChtW2ldIDw8IDI0KSB8IChtW2ldID4+PiAgOCkpICYgMHhGRjAwRkYwMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQYWRkaW5nXHJcbiAgICBtW2wgPj4+IDVdIHw9IDB4ODAgPDwgKGwgJSAzMik7XHJcbiAgICBtWygoKGwgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gbDtcclxuXHJcbiAgICAvLyBNZXRob2Qgc2hvcnRjdXRzXHJcbiAgICB2YXIgRkYgPSBtZDUuX2ZmLFxyXG4gICAgICAgIEdHID0gbWQ1Ll9nZyxcclxuICAgICAgICBISCA9IG1kNS5faGgsXHJcbiAgICAgICAgSUkgPSBtZDUuX2lpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5sZW5ndGg7IGkgKz0gMTYpIHtcclxuXHJcbiAgICAgIHZhciBhYSA9IGEsXHJcbiAgICAgICAgICBiYiA9IGIsXHJcbiAgICAgICAgICBjYyA9IGMsXHJcbiAgICAgICAgICBkZCA9IGQ7XHJcblxyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKyAwXSwgIDcsIC02ODA4NzY5MzYpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKyAyXSwgMTcsICA2MDYxMDU4MTkpO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsgNF0sICA3LCAtMTc2NDE4ODk3KTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsgNV0sIDEyLCAgMTIwMDA4MDQyNik7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKyA3XSwgMjIsIC00NTcwNTk4Myk7XHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krIDhdLCAgNywgIDE3NzAwMzU0MTYpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsxMF0sIDE3LCAtNDIwNjMpO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKzExXSwgMjIsIC0xOTkwNDA0MTYyKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsxMl0sICA3LCAgMTgwNDYwMzY4Mik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krMTNdLCAxMiwgLTQwMzQxMTAxKTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krMTVdLCAyMiwgIDEyMzY1MzUzMjkpO1xyXG5cclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgMV0sICA1LCAtMTY1Nzk2NTEwKTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsgNl0sICA5LCAtMTA2OTUwMTYzMik7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krMTFdLCAxNCwgIDY0MzcxNzcxMyk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krIDBdLCAyMCwgLTM3Mzg5NzMwMik7XHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krIDVdLCAgNSwgLTcwMTU1ODY5MSk7XHJcbiAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBtW2krMTBdLCAgOSwgIDM4MDE2MDgzKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsxNV0sIDE0LCAtNjYwNDc4MzM1KTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgOV0sICA1LCAgNTY4NDQ2NDM4KTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsxNF0sICA5LCAtMTAxOTgwMzY5MCk7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krIDhdLCAyMCwgIDExNjM1MzE1MDEpO1xyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKzEzXSwgIDUsIC0xNDQ0NjgxNDY3KTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsgMl0sICA5LCAtNTE0MDM3ODQpO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKyA3XSwgMTQsICAxNzM1MzI4NDczKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsxMl0sIDIwLCAtMTkyNjYwNzczNCk7XHJcblxyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyA1XSwgIDQsIC0zNzg1NTgpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsxMV0sIDE2LCAgMTgzOTAzMDU2Mik7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krMTRdLCAyMywgLTM1MzA5NTU2KTtcclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsgMV0sICA0LCAtMTUzMDk5MjA2MCk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krIDRdLCAxMSwgIDEyNzI4OTMzNTMpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKzEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsxM10sICA0LCAgNjgxMjc5MTc0KTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsgMF0sIDExLCAtMzU4NTM3MjIyKTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsgM10sIDE2LCAtNzIyNTIxOTc5KTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsgNl0sIDIzLCAgNzYwMjkxODkpO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyA5XSwgIDQsIC02NDAzNjQ0ODcpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKzEyXSwgMTEsIC00MjE4MTU4MzUpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKzE1XSwgMTYsICA1MzA3NDI1MjApO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xyXG5cclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsgMF0sICA2LCAtMTk4NjMwODQ0KTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsgN10sIDEwLCAgMTEyNjg5MTQxNSk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKyA1XSwgMjEsIC01NzQzNDA1NSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krMTJdLCAgNiwgIDE3MDA0ODU1NzEpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsxMF0sIDE1LCAtMTA1MTUyMyk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKyA4XSwgIDYsICAxODczMzEzMzU5KTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsxNV0sIDEwLCAtMzA2MTE3NDQpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsxM10sIDIxLCAgMTMwOTE1MTY0OSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krIDRdLCAgNiwgLTE0NTUyMzA3MCk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKyAyXSwgMTUsICA3MTg3ODcyNTkpO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xyXG5cclxuICAgICAgYSA9IChhICsgYWEpID4+PiAwO1xyXG4gICAgICBiID0gKGIgKyBiYikgPj4+IDA7XHJcbiAgICAgIGMgPSAoYyArIGNjKSA+Pj4gMDtcclxuICAgICAgZCA9IChkICsgZGQpID4+PiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjcnlwdC5lbmRpYW4oW2EsIGIsIGMsIGRdKTtcclxuICB9O1xyXG5cclxuICAvLyBBdXhpbGlhcnkgZnVuY3Rpb25zXHJcbiAgbWQ1Ll9mZiAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGIgJiBjIHwgfmIgJiBkKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9nZyAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGIgJiBkIHwgYyAmIH5kKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9oaCAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGIgXiBjIF4gZCkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG4gIG1kNS5faWkgID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuICAgIHZhciBuID0gYSArIChjIF4gKGIgfCB+ZCkpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuXHJcbiAgLy8gUGFja2FnZSBwcml2YXRlIGJsb2Nrc2l6ZVxyXG4gIG1kNS5fYmxvY2tzaXplID0gMTY7XHJcbiAgbWQ1Ll9kaWdlc3RzaXplID0gMTY7XHJcblxyXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuICAgIGlmIChtZXNzYWdlID09PSB1bmRlZmluZWQgfHwgbWVzc2FnZSA9PT0gbnVsbClcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGFyZ3VtZW50ICcgKyBtZXNzYWdlKTtcclxuXHJcbiAgICB2YXIgZGlnZXN0Ynl0ZXMgPSBjcnlwdC53b3Jkc1RvQnl0ZXMobWQ1KG1lc3NhZ2UsIG9wdGlvbnMpKTtcclxuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuYXNCeXRlcyA/IGRpZ2VzdGJ5dGVzIDpcclxuICAgICAgICBvcHRpb25zICYmIG9wdGlvbnMuYXNTdHJpbmcgPyBiaW4uYnl0ZXNUb1N0cmluZyhkaWdlc3RieXRlcykgOlxyXG4gICAgICAgIGNyeXB0LmJ5dGVzVG9IZXgoZGlnZXN0Ynl0ZXMpO1xyXG4gIH07XHJcblxyXG59KSgpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vX21kNUAyLjIuMUBtZDUvbWQ1LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9fbWQ1QDIuMi4xQG1kNS9tZDUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsImltcG9ydCB7c2hvd0NoaWxkTG9ja30gZnJvbSAnLi9hcHAvY2hpbGRMb2NrJztcclxuaW1wb3J0IHtjaGlsZE1lbnV9IGZyb20gJy4vYXBwL2NoaWxkTWVudSc7XHJcblxyXG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gXCIuL2FwcC9kaWFsb2dcIjtcclxuaW1wb3J0IHtzaG93TG9hZGluZyxoaWRlTG9hZGluZ30gZnJvbSBcIi4vYXBwL2xvYWRpbmdcIjtcclxuaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5pbXBvcnQge2FwcEFyZ3N9IGZyb20gJy4vYXBwL1BhZ2VBcmdzJztcclxuXHJcblxyXG52YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbnZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZU1lbnUoKSB7XHJcbiAgICB0aGlzLmxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmxheW91dCk7XHJcbiAgICB0aGlzLmxheW91dC5jbGFzc05hbWUgPSAnaG9tZS1tZW51JztcclxuICAgIHRoaXMubGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgJzxkaXYgaWQ9XCJtZW51LWJ0bjBcIiBjbGFzcz1cIm1lbnUtYnRuXCI+PGltZyBzcmM9XCJcIj48L2Rpdj4nICtcclxuICAgICAgICAnPGRpdiBpZD1cIm1lbnUtYnRuMVwiIGNsYXNzPVwibWVudS1idG5cIj48aW1nIHNyYz1cIlwiPjwvZGl2PicgK1xyXG4gICAgICAgICc8ZGl2IGlkPVwibWVudS1idG4yXCIgY2xhc3M9XCJtZW51LWJ0blwiPjxpbWcgc3JjPVwiXCI+PC9kaXY+JyArXHJcbiAgICAgICAgJzxkaXYgaWQ9XCJtZW51LWJ0bjNcIiBjbGFzcz1cIm1lbnUtYnRuXCI+PGltZyBzcmM9XCJcIj48L2Rpdj4nK1xyXG4gICAgICAgICc8ZGl2IGlkPVwibWVudS1idG40XCIgY2xhc3M9XCJtZW51LWJ0blwiPjxpbWcgc3JjPVwiXCI+PC9kaXY+JztcclxuICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgKytpKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmxheW91dC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idG4nICsgaSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICAvL3NldFRpbWVvdXQoZnVuY3Rpb24gKGksIG5vZGUpIHtcclxuICAgICAgICB2YXIgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICBpbWcuc3JjID0gJ2ltZy9tZW51L25hdl8nICsgaSArICdfMC5wbmcnO1xyXG4gICAgICAgIC8vfSwgMTAwICogaSwgaSwgbm9kZSk7XHJcbiAgICB9XHJcbn1cclxuSG9tZU1lbnUucHJvdG90eXBlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiB7aW50fSBjdXJyZW50IFswLDNdXHJcbiAgICAgKi9cclxuICAgIGN1cnJlbnQ6IDAsXHJcbiAgICBvbktleURvd246IG51bGwsXHJcbiAgICB0ZGVVc2VyOiBudWxsLFxyXG5cclxuICAgIHNob3c6IGZ1bmN0aW9uIChjdXJyZW50LCBvbktleURvd24sIHRkZVVzZXIpIHtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gb25LZXlEb3duO1xyXG4gICAgICAgIHRoaXMudGRlVXNlciA9IHRkZVVzZXI7XHJcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcztcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBvd25lci5oYW5kbGVLZXkoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zZXRGb2N1cyh0aGlzLmN1cnJlbnQsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfc2V0Rm9jdXM6IGZ1bmN0aW9uIChjdXJyZW50LCBmb2N1cykge1xyXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5pdGVtc1tjdXJyZW50XTtcclxuICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGZvY3VzID8gJ21lbnUtYnRuLWZvY3VzJyA6ICdtZW51LWJ0bic7XHJcbiAgICAgICAgdmFyIGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgaWYgKGZvY3VzKSB7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSAnaW1nL21lbnUvbmF2XycgKyBjdXJyZW50ICsgJ18xLnBuZyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW1nLnNyYyA9ICdpbWcvbWVudS9uYXZfJyArIGN1cnJlbnQgKyAnXzAucG5nJztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0U2VsZWN0ZWQ6IGZ1bmN0aW9uIChjdXJyZW50KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEZvY3VzKGksIGN1cnJlbnQgPT0gaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUtleTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQtLTtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA8IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm9rOlxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLmN1cnJlbnQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcEFyZ3Mub25GaXJzdFBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBBcmdzLm9uSG9tZVBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50ID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3duZXIudGRlVXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkTG9jayA9IG93bmVyLnRkZVVzZXIuY2hpbGRMb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkTG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRNZW51LnNob3coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG4gPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2hpbGRMb2NrKGZ1bmN0aW9uIChjb2RlLCBtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWRMb2NrKGNvZGUsIG1zZywgb3duZXIsIGJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEsIDAsICfor7fovpPlhaXml6fnmoQ25L2N5pWw5a2X5a+G56CB77yM5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIsIDAsICfpgInmi6npnIDopoHnmoTmk43kvZzmjInnoa7lrprplK7ov5vooYzkuIvkuIDmraXvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE1lbnUuc2hvdyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lvIDlkK/nq6XplIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRDaGlsZExvY2sob3duZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb3duZXIub25LZXlEb3duLCBvd25lci50ZGVVc2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxLCAwLCAn5byA5ZCv56ul6ZSB5ZCO77yM5q+P5qyh5LuY6LS56K6i6LSt6ZyA6L6T5YWl5q2j56Gu5a+G56CB77yb5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA9PSA0KXtcclxuICAgICAgICAgICAgICAgICAgICBhcHBBcmdzLm9uVHVybnRhYmxlUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5lc2M6XHJcbiAgICAgICAgICAgICAgICBhcHBBcmdzLm9uRmlyc3RQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Yob3duZXIub25LZXlEb3duKSA9PT0gJ2Z1bmN0aW9uJykgb3duZXIub25LZXlEb3duKGN1cktleSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIGNvZGUge2ludH1cclxuICogQHBhcmFtIG1zZyB7c3RyaW5nfVxyXG4gKiBAcGFyYW0gb3duZXIge0hvbWVNZW51fVxyXG4gKiBAcGFyYW0gYnRuIHtpbnR9IDAu5YWz6Zet56ul6ZSBIDEu5pu05pS55a+G56CBXHJcbiAqL1xyXG5mdW5jdGlvbiBvblZhbGlkTG9jayhjb2RlLCBtc2csIG93bmVyLCBidG4pIHtcclxuICAgIGlmIChjb2RlID09IDApIHtcclxuICAgICAgICB2YXIgb2xkTG9jayA9IG93bmVyLnRkZVVzZXIuY2hpbGRMb2NrO1xyXG4gICAgICAgIGlmIChtc2cgPT0gb2xkTG9jaykge1xyXG4gICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGJjbGkgPSBvd25lci50ZGVVc2VyLnN0YmNsaTtcclxuICAgICAgICAgICAgICAgIHN0YmNsaS50ZGVMb2NrKG9sZExvY2ssICcnLCBmdW5jdGlvbiAoY29kZSwgYml6KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSAn56ul6ZSB5YWz6Zet5oiQ5YqfJztcclxuICAgICAgICAgICAgICAgICAgICBvblRkZUxvY2soY29kZSwgYml6LCBvd25lciwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc2V0Q2hpbGRMb2NrKG93bmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGRsZ0J0bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRsZ0J0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NoaWxkTG9jayhmdW5jdGlvbiAoY29kZSwgbXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWRMb2NrKGNvZGUsIG1zZywgb3duZXIsIGJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMSwgMCwgJ+ivt+i+k+WFpeaXp+eahDbkvY3mlbDlrZflr4bnoIHvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwLCAn5o+Q56S6JywgJ+erpemUgemqjOivgeWHuumUmScsICfph43or5UnLCAn5Y+W5raIJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG93bmVyLm9uS2V5RG93biwgb3duZXIudGRlVXNlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Q2hpbGRMb2NrKG93bmVyKSB7XHJcbiAgICB2YXIgb2xkTG9jayA9IG93bmVyLnRkZVVzZXIuY2hpbGRMb2NrO1xyXG4gICAgdmFyIG5ld0xvY2s7XHJcbiAgICBzaG93Q2hpbGRMb2NrKGZ1bmN0aW9uIChjb2RlLCBtc2cpIHtcclxuICAgICAgICBpZiAoY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIG5ld0xvY2sgPSBtc2c7XHJcbiAgICAgICAgICAgIHNob3dDaGlsZExvY2soZnVuY3Rpb24gKGNvZGUsIG1zZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cgIT0gbmV3TG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Q2hpbGRMb2NrKG93bmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwLCAn5o+Q56S6JywgJ+S4pOasoei+k+WFpeS4jeWQjCcsICfph43or5UnLCAn5Y+W5raIJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YmNsaSA9IG93bmVyLnRkZVVzZXIuc3RiY2xpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGJjbGkudGRlTG9jayhvbGRMb2NrLCBuZXdMb2NrLCBmdW5jdGlvbiAoY29kZSwgYml6KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG9sZExvY2sgPyAn56ul6ZSB5pu05pS55oiQ5YqfJyA6ICfnq6XplIHlvIDlkK/miJDlip8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25UZGVMb2NrKGNvZGUsIGJpeiwgb3duZXIsIHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb3duZXIub25LZXlEb3duLCBvd25lci50ZGVVc2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCwgMSwgJ+ivt+WGjeasoei+k+WFpeaWsOeahDbkvY3mlbDlrZflr4bnoIHvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG93bmVyLm9uS2V5RG93biwgb3duZXIudGRlVXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgMCwgMCwgJ+ivt+i+k+WFpeaWsOeahDbkvY3mlbDlrZflr4bnoIHvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25UZGVMb2NrKGNvZGUsIGJpeiwgb3duZXIpIHtcclxuICAgIHZhciB0ZXh0ID0gYXJndW1lbnRzWzNdID8gYXJndW1lbnRzWzNdIDogJ+erpemUgeiuvue9ruaIkOWKnyc7XHJcbiAgICBpZiAoY29kZSA9PSAwKSB7XHJcbiAgICAgICAgb3duZXIudGRlVXNlci5jaGlsZExvY2sgPSBiaXouY2hpbGRMb2NrO1xyXG4gICAgICAgIHNob3dMb2FkaW5nKCfmj5DnpLonLCB0ZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd0xvYWRpbmcoJ+aPkOekuicgKyAnWycgKyBjb2RlICsgJ10nLCAn572R57uc5byC5bi4JyArICdbJyArIGJpeiArICddJyk7XHJcbiAgICB9XHJcbiAgICBoaWRlTG9hZGluZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgfSwgMjAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7SG9tZU1lbnV9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9Ib21lTWVudS5qcyIsImZ1bmN0aW9uIEphdmExMENvaW4oKSB7XHJcblxyXG59XHJcbkphdmExMENvaW4ucHJvdG90eXBlID0ge1xyXG4gICAgY29pbnM6IDAsXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoY29pbnMpIHtcclxuICAgICAgICB0aGlzLmNvaW5zID0gY29pbnM7XHJcblxyXG4gICAgICAgIHZhciBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnamF2YTEwLWNvaW4nKTtcclxuICAgICAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbGF5b3V0LmNsYXNzTmFtZSA9ICdqYXZhMTAtY29pbic7XHJcbiAgICAgICAgICAgIGxheW91dC5pZCA9ICdqYXZhMTAtY29pbic7XHJcbiAgICAgICAgICAgIGxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjb2luLWljb25cIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY29pbi10ZXh0XCI+NjY2NjY2PC9kaXY+JztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsYXlvdXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5vZGVUZXh0ID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJy5jb2luLXRleHQnKTtcclxuICAgICAgICBub2RlVGV4dC5pbm5lckhUTUwgPSBjb2lucztcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBqYXZhQ29pbiA9IG5ldyBKYXZhMTBDb2luKCk7XHJcbmV4cG9ydCB7amF2YUNvaW59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9KYXZhMTBDb2luLmpzIiwiaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5cclxuXHJcbnZhciBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxudmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuXHJcbnZhciBpdGVtU2l6ZSA9IFtcclxuICAgIFsxNTksIDEyM10sXHJcbiAgICBbMTU5LCAyMzBdLFxyXG4gICAgWzIxMywgMzcwXSxcclxuICAgIFszMzAsIDE3Nl0sXHJcbiAgICBbMTU1LCAxNzddLFxyXG4gICAgWzE1NiwgMTc3XSxcclxuICAgIFsxODIsIDE3Nl0sXHJcbiAgICBbMTgyLCAxNzZdLFxyXG4gICAgWzE4MiwgMTc2XSxcclxuICAgIFsxODIsIDE3Nl1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIEphdmExMFBhZ2UoKSB7XHJcbiAgICB0aGlzLmxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqYXZhMTAtcGFnZScpO1xyXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtU2l6ZS5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5sYXlvdXQucXVlcnlTZWxlY3RvcignI2phdmExMC1pdGVtJyArIGkpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChub2RlKTtcclxuICAgIH1cclxufVxyXG5KYXZhMTBQYWdlLnByb3RvdHlwZSA9IHtcclxuICAgIGl0ZW1JbmZvczogW10sXHJcbiAgICAvKipcclxuICAgICAqIHtpbnR9IGN1cnJlbnQgWzAsOV1cclxuICAgICAqL1xyXG4gICAgY3VycmVudDogMyxcclxuICAgIG9uS2V5RG93bjogbnVsbCxcclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoaXRlbUluZm9zLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBpdGVtQ250ID0gdGhpcy5pdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGl0ZW1JbmZvcy5sZW5ndGggIT0gaXRlbUNudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXRlbUluZm9zID0gaXRlbUluZm9zO1xyXG5cclxuICAgICAgICB2YXIgbG9hZENudCA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtQ250OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW1JbmZvID0gaXRlbUluZm9zW2ldO1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IHRoaXMuaXRlbXNbaV07XHJcbiAgICAgICAgICAgIHZhciBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbG9hZENudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvYWRDbnQgPT09IGl0ZW1DbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKGltZywgaXRlbUluZm8pIHtcclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpdGVtSW5mby5pbWc7XHJcbiAgICAgICAgICAgIH0sIDEwMCAqIGksIGltZywgaXRlbUluZm8pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoY3VycmVudCwgb25LZXlEb3duKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZChjdXJyZW50KTtcclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IG9uS2V5RG93bjtcclxuXHJcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcztcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBvd25lci5oYW5kbGVLZXkoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zZXRGb2N1cyh0aGlzLmN1cnJlbnQsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfc2V0Rm9jdXM6IGZ1bmN0aW9uIChjdXJyZW50LCBmb2N1cykge1xyXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5pdGVtc1tjdXJyZW50XTtcclxuICAgICAgICBub2RlLnN0eWxlLnpJbmRleCA9IGZvY3VzID8gMSA6IDA7XHJcblxyXG4gICAgICAgIHZhciBzaXplID0gaXRlbVNpemVbY3VycmVudF07XHJcbiAgICAgICAgdmFyIGRpdiA9IG5vZGUucXVlcnlTZWxlY3RvcignZGl2Jyk7XHJcbiAgICAgICAgdmFyIGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgaWYgKGZvY3VzKSB7XHJcbiAgICAgICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gc2l6ZVswXSAqIDEuMSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplWzFdICogMS4xICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSAtc2l6ZVswXSAqIDAuMDUgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gLXNpemVbMV0gKiAwLjA1ICsgJ3B4JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gc2l6ZVswXSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplWzFdICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSAwICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9IDAgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRGb2N1cyhpLCBjdXJyZW50ID09IGkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoYW5kbGVLZXk6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcztcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgdmFyIGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50IC09IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgLT0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAob3duZXIuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCArPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCArPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvd25lci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQgLT0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5kb3duOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvd25lci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZihvd25lci5vbktleURvd24pID09PSAnZnVuY3Rpb24nKSBvd25lci5vbktleURvd24oY3VyS2V5KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB7SmF2YTEwUGFnZX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0phdmExMFBhZ2UuanMiLCJpbXBvcnQge3N0Yk51bGx9IGZyb20gJy4uL3Rvb2RvL19zdGJudWxsJztcclxuXHJcblxyXG5mdW5jdGlvbiBQYWdlQXJncyhwYWdlKSB7XHJcbiAgICB0aGlzLnByZWZpeCA9IHBhZ2UgPyBwYWdlICsgJy4nIDogJyc7XHJcbn1cclxuUGFnZUFyZ3MucHJvdG90eXBlID0ge1xyXG4gICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0Yk51bGwuZ2V0VmFsdWUodGhpcy5wcmVmaXggKyBrKTtcclxuICAgIH0sXHJcbiAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGssIHYpIHtcclxuICAgICAgICBzdGJOdWxsLnNldFZhbHVlKHRoaXMucHJlZml4ICsgaywgdik7XHJcbiAgICB9LFxyXG4gICAgZ2V0UmV0dXJuVXJsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoJ3JldHVyblVybCcpO1xyXG4gICAgfSxcclxuICAgIHNldFJldHVyblVybDogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoJ3JldHVyblVybCcsIHVybCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVkaXJlY3RVcmw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgncmVkaXJlY3RVcmwnKTtcclxuICAgIH0sXHJcbiAgICBzZXRSZWRpcmVjdFVybDogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoJ3JlZGlyZWN0VXJsJywgdXJsKTtcclxuICAgIH0sXHJcbiAgICBzZXRDYWxsRmxhZzpmdW5jdGlvbiAobnVtKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcImNhbGxGbGFnXCIsbnVtKTtcclxuICAgIH0sXHJcbiAgICBnZXRDYWxsRmxhZzpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJjYWxsRmxhZ1wiKTtcclxuICAgIH0sXHJcbiAgICBzZXRTdWNjZXNzQ29kZTpmdW5jdGlvbiAoc3VjY2Vzc0NvZGUpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKFwic3VjY2Vzc0NvZGVcIixzdWNjZXNzQ29kZSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0U3VjY2Vzc0NvZGU6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwic3VjY2Vzc0NvZGVcIik7XHJcbiAgICB9LFxyXG4gICAgc2V0UHJpemVJRDpmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKFwiUHJpemVJRFwiLGlkKTtcclxuICAgIH0sXHJcbiAgICBnZXRQcml6ZUlEOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcIlByaXplSURcIik7XHJcbiAgICB9LFxyXG4gICAgZ2V0VHVybnRhYmxlVXJsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoJ1R1cm50YWJsZVVybCcpO1xyXG4gICAgfSxcclxuICAgIHNldFR1cm50YWJsZVVybDogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoJ1R1cm50YWJsZVVybCcsIHVybCk7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuXHJcbnZhciBzaG9wQXJncyA9IG5ldyBQYWdlQXJncygnc2hvcCcpO1xyXG52YXIgcmVjaGFyZ2VBcmdzID0gbmV3IFBhZ2VBcmdzKCdyZWNoYXJnZScpO1xyXG52YXIgY2FsbGJhY2tBcmdzID0gbmV3IFBhZ2VBcmdzKCdjYWxsYmFjaycpO1xyXG52YXIgdHVyblRhYmxlQXJncyA9IG5ldyBQYWdlQXJncygndHVybnRhYmxlJyk7XHJcblxyXG52YXIgYXBwQXJncyA9IG5ldyBQYWdlQXJncygnYXBwJyk7XHJcbmFwcEFyZ3Mub25GaXJzdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZmlyc3RVcmwgPSBhcHBBcmdzLmdldFJlZGlyZWN0VXJsKCk7XHJcbiAgICBpZiAoZmlyc3RVcmwpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZpcnN0VXJsO1xyXG4gICAgfVxyXG59O1xyXG5cclxuYXBwQXJncy5vbkhvbWVQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGhvbWVVcmwgPSBhcHBBcmdzLmdldFJldHVyblVybCgpO1xyXG4gICAgaWYgKGhvbWVVcmwpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhvbWVVcmw7XHJcbiAgICB9XHJcbn07XHJcblxyXG5hcHBBcmdzLm9uVHVybnRhYmxlUGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBUdXJudGFibGVVcmwgPSBhcHBBcmdzLmdldFR1cm50YWJsZVVybCgpO1xyXG4gICAgaWYgKFR1cm50YWJsZVVybCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gVHVybnRhYmxlVXJsO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQge3Nob3BBcmdzLHJlY2hhcmdlQXJncyxjYWxsYmFja0FyZ3MsYXBwQXJncyx0dXJuVGFibGVBcmdzfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL1BhZ2VBcmdzLmpzIiwiaW1wb3J0IHtzdGJOdWxsfSBmcm9tICcuLi90b29kby9fc3RibnVsbCdcclxuaW1wb3J0IHtzdGJjbGl9IGZyb20gJy4uL3Rvb2RvL19zdGJjbGknO1xyXG5cclxuZnVuY3Rpb24gUGFnZVVybCgpIHtcclxufVxyXG5QYWdlVXJsLnByb3RvdHlwZSA9IHtcclxuICAgIHBhcnNlUXVlcnk6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcXVlcnkuaW5kZXhPZignPycpO1xyXG4gICAgICAgIGlmIChzdGFydCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkuc2xpY2Uoc3RhcnQgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXJncyA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGFyciA9IHF1ZXJ5LnNwbGl0KCcmJyk7XHJcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBhcnIubGVuZ3RoOyBtKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdiA9IGFyclttXTtcclxuICAgICAgICAgICAgY29uc3QgdG1wID0gdi5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICBhcmdzW3RtcFswXV0gPSBkZWNvZGVVUklDb21wb25lbnQodG1wWzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyZ3M7XHJcbiAgICB9LFxyXG4gICAgcGFyc2VBcmdzOiBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIGxldCBrLCB2O1xyXG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvciAoayBpbiBhcmdzKSB7XHJcbiAgICAgICAgICAgIC8vISBqcyDkvJrmioonMCflvZPkvZxmYWxzZSBhcmdzW2tdID0+IGFyZ3Nba10gIT09ICcnXHJcbiAgICAgICAgICAgIGlmIChhcmdzLmhhc093blByb3BlcnR5KGspICYmIGFyZ3Nba10gIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB2ID0gZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3Nba10pO1xyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goayArICc9JyArIHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnIuam9pbignJicpO1xyXG4gICAgfSxcclxuICAgIGJhc2VVcmw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArICcvdGRlbnRlcic7XHJcbiAgICB9LFxyXG4gICAgZ2V0VXNlcklkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0Yk51bGwuZ2V0VmFsdWUoJ3Rvb2RvLnVzZXJJZCcpO1xyXG4gICAgfSxcclxuICAgIGdldFN0YklkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0Yk51bGwuZ2V0Q2FyZFRWKCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0U2lnbktleTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0cyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBtc2cgPSB0aGlzLmdldFVzZXJJZCgpICsgdHM7XHJcbiAgICAgICAgdmFyIG1kNSA9IHN0YmNsaS5tZDUobXNnKTtcclxuICAgICAgICByZXR1cm4gbWQ1ICsgdHM7XHJcbiAgICB9LFxyXG4gICAgZ2V0Q2hpbGRMb2NrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfSxcclxuICAgIHJlY2hhcmdlVXJsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnL3Rkc3J2L2FwaS9jb2luJztcclxuICAgIH0sXHJcbiAgICBjYWxsVXJsOiBmdW5jdGlvbiAoaXRlbSwgcmV0dXJuVXJsKSB7XHJcbiAgICAgICAgbGV0IHJlY2hhcmdlVXJsID0gdGhpcy5yZWNoYXJnZVVybCgpO1xyXG4gICAgICAgIGxldCBhcmdzID0ge307XHJcbiAgICAgICAgYXJncy5nYW1laWQgPSBpdGVtLmdhbWVJZDtcclxuICAgICAgICBhcmdzLmtleSA9IHRoaXMuZ2V0U2lnbktleSgpO1xyXG4gICAgICAgIGFyZ3MuZGV2ID0gdGhpcy5nZXRTdGJJZCgpO1xyXG4gICAgICAgIGFyZ3MuZmF0aGVya2V5ID0gdGhpcy5nZXRDaGlsZExvY2soKTtcclxuICAgICAgICBhcmdzLnVzZXJJZCA9IHRoaXMuZ2V0VXNlcklkKCk7XHJcbiAgICAgICAgYXJncy51c2VyaWQgPSB0aGlzLmdldFVzZXJJZCgpO1xyXG4gICAgICAgIGFyZ3MudHMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBhcmdzLnJldHVyblVSTCA9IHJldHVyblVybDtcclxuXHJcbiAgICAgICAgdmFyIGhvc3ROYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lOyAvL+S4jeW4puerr+WPo1xyXG4gICAgICAgIHZhciBkc3RVcmwgPSBpdGVtLnVybDtcclxuICAgICAgICBkc3RVcmwgPSBkc3RVcmwucmVwbGFjZSgnMTkyLjE2OC4yMDAuMTAwJywgaG9zdE5hbWUpO1xyXG5cclxuICAgICAgICBsZXQgcGFyYW1zID0ge307XHJcbiAgICAgICAgcGFyYW1zLnJlZGlyZWN0VXJsID0gZHN0VXJsICsgJz8nICsgdGhpcy5wYXJzZUFyZ3MoYXJncykgKyAnJnJlY2hhZ2VVUkw9JyArIHJlY2hhcmdlVXJsO1xyXG4gICAgICAgIHBhcmFtcy5yZXR1cm5VcmwgPSByZXR1cm5Vcmw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVVybCgpICsgJy9yZXNpemUuaHRtbD8nICsgdGhpcy5wYXJzZUFyZ3MocGFyYW1zKTtcclxuICAgIH0sXHJcbiAgICBjYWxsVXJsQmFzZTogZnVuY3Rpb24gKGl0ZW0sIHJldHVyblVybCkge1xyXG4gICAgICAgIGxldCByZWNoYXJnZVVybCA9IHRoaXMucmVjaGFyZ2VVcmwoKTtcclxuICAgICAgICBsZXQgYXJncyA9IHt9O1xyXG4gICAgICAgIGFyZ3MuZ2FtZWlkID0gaXRlbS5nYW1lSWQ7XHJcbiAgICAgICAgYXJncy5rZXkgPSB0aGlzLmdldFNpZ25LZXkoKTtcclxuICAgICAgICBhcmdzLmRldiA9IHRoaXMuZ2V0U3RiSWQoKTtcclxuICAgICAgICBhcmdzLmZhdGhlcmtleSA9IHRoaXMuZ2V0Q2hpbGRMb2NrKCk7XHJcbiAgICAgICAgYXJncy51c2VySWQgPSB0aGlzLmdldFVzZXJJZCgpO1xyXG4gICAgICAgIGFyZ3MudXNlcmlkID0gdGhpcy5nZXRVc2VySWQoKTtcclxuICAgICAgICBhcmdzLnRzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgYXJncy5yZXR1cm5VUkwgPSByZXR1cm5Vcmw7XHJcblxyXG4gICAgICAgIHZhciBob3N0TmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTsgLy/kuI3luKbnq6/lj6NcclxuICAgICAgICB2YXIgZHN0VXJsID0gaXRlbS51cmw7XHJcbiAgICAgICAgZHN0VXJsID0gZHN0VXJsLnJlcGxhY2UoJzE5Mi4xNjguMjAwLjEwMCcsIGhvc3ROYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRzdFVybCArICc/JyArIHRoaXMucGFyc2VBcmdzKGFyZ3MpICsgJyZyZWNoYWdlVVJMPScgKyByZWNoYXJnZVVybDtcclxuICAgIH0sXHJcbiAgICBjYWxsR2FtZTogZnVuY3Rpb24gKGl0ZW0sIHJldHVyblVybCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5jYWxsVXJsKGl0ZW0sIHJldHVyblVybCk7XHJcbiAgICB9LFxyXG4gICAgY2FsbEdhbWVCYXNlOiBmdW5jdGlvbiAoaXRlbSwgcmV0dXJuVXJsKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmNhbGxVcmxCYXNlKGl0ZW0sIHJldHVyblVybCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBwYWdlVXJsID0gbmV3IFBhZ2VVcmwoKTtcclxuXHJcbmV4cG9ydCB7cGFnZVVybH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9QYWdlVXJsLmpzIiwiZnVuY3Rpb24gZ2V0SlNPTih1cmwsIGNiKSB7XHJcbiAgICBsZXQgcmVxO1xyXG4gICAgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0O1xyXG4gICAgcmVxLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XHJcbiAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChyZXEucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtc0FyciA9IGV2YWwoJ1snICsgcmVxLnJlc3BvbnNlVGV4dCArICddJyk7XHJcbiAgICAgICAgICAgIGNiKGl0ZW1zQXJyWzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmVxLnNlbmQobnVsbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhc2VVcmwoKSB7XHJcbiAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArICcvdGRlbnRlcic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGF5QmFja2dyb3VuZChub2RlLCBpbWcsIGRlbGF5KSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGltZyArICcpJ1xyXG4gICAgfSwgZGVsYXkpO1xyXG59XHJcblxyXG5leHBvcnQge2dldEpTT04sYmFzZVVybCxkZWxheUJhY2tncm91bmR9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvYWJjLmpzIiwiaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuLi90b29kby9fa2V5Y29kZXNcIjtcclxuXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICogQHBhcmFtIHtpbnR9IGNhbGxiYWNrLmNvZGUg5oyJ6ZSuIDAu6L6T5YWl5a6M5oiQIDEu5Y+W5raIXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjYWxsYmFjay5tc2cg6L6T5YWl55qE5a2X56ym5LiyXHJcbiAqIEBwYXJhbSB0aXRsZSB7aW50fSDmoIfpopjlm77niYcgMC7orr7nva7pk5zplIEgMS7pk5zplIHpqozor4FcclxuICogQHBhcmFtIGxhYmVsIHtpbnR9IOaPkOekuuivrSAwLui+k+WFpeWvhueggSAxLuWGjeasoei+k+WFpVxyXG4gKi9cclxuZnVuY3Rpb24gc2hvd0NoaWxkTG9jayhjYWxsYmFjaywgdGl0bGUsIGxhYmVsKSB7XHJcbiAgICB0aXRsZSA9IGFyZ3VtZW50c1sxXSA/IGFyZ3VtZW50c1sxXSA6IDA7XHJcbiAgICBsYWJlbCA9IGFyZ3VtZW50c1syXSA/IGFyZ3VtZW50c1syXSA6IDA7XHJcbiAgICB2YXIgdGlwcyA9IGFyZ3VtZW50c1szXSA/IGFyZ3VtZW50c1szXSA6ICfor7fovpPlhaU25L2N5pWw5a2X5a+G56CB77yM5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCJztcclxuXHJcbiAgICB2YXIgbGF5b3V0SWQgPSAnbG9jay1sYXlvdXQtMDAzJztcclxuICAgIHZhciBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYXlvdXRJZCk7XHJcbiAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICAgIGxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxheW91dC5jbGFzc05hbWUgPSAnbG9jay1sYXlvdXQnO1xyXG4gICAgICAgIGxheW91dC5pZCA9IGxheW91dElkO1xyXG4gICAgICAgIGxheW91dC5pbm5lckhUTUwgPSAnJyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9jay1iZ1wiPicgK1xyXG4gICAgICAgICAgICAnICA8ZGl2IGlkPVwibG9jay10aXRsZVwiIGNsYXNzPVwibG9jay10aXRsZS0wXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgIDxkaXYgY2xhc3M9XCJsb2NrLWlucHV0XCI+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbGFiZWxcIiBjbGFzcz1cImxvY2stbGFiZWwtMFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLXRleHRcIiBjbGFzcz1cImxvY2stdGV4dFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBpZD1cImxvY2stdGlwc1wiIGNsYXNzPVwibG9jay10aXBzXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsb2NrLWtleWJvYXJkXCI+JyArXHJcbiAgICAgICAgICAgICcgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1iZ1wiPicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS0xXCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj4xPC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS0yXCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjxzcGFuPjI8L3NwYW4+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTNcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiAgICAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjxzcGFuPjM8L3NwYW4+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTRcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiAgICAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjxzcGFuPjQ8L3NwYW4+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTVcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiAgICAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjxzcGFuPjU8L3NwYW4+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTZcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiAgICAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjxzcGFuPjY8L3NwYW4+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTdcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiAgICAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjxzcGFuPjc8L3NwYW4+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLThcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiAgICAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjxzcGFuPjg8L3NwYW4+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTlcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiAgICAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjxzcGFuPjk8L3NwYW4+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTEwXCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gICAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tMFwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48c3Bhbj4wPC9zcGFuPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS0xMVwiIGNsYXNzPVwibG9jay1udW1cIj4gICA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1pbWdcIj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgPC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcclxuICAgIH1cclxuICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIHZhciBsb2NrVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jay10ZXh0XCIpO1xyXG4gICAgdmFyIGxvY2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jay10aXRsZVwiKTtcclxuICAgIHZhciBsb2NrTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jay1sYWJlbCcpO1xyXG4gICAgdmFyIGxvY2tUaXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2stdGlwcycpO1xyXG4gICAgbG9ja1RleHQuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgIGxvY2tUaXRsZS5jbGFzc05hbWUgPSBcImxvY2stdGl0bGUtXCIgKyB0aXRsZTtcclxuICAgIGxvY2tMYWJlbC5jbGFzc05hbWUgPSAnbG9jay1sYWJlbC0nICsgbGFiZWw7XHJcbiAgICBsb2NrVGlwcy5pbm5lckhUTUwgPSB0aXBzO1xyXG5cclxuICAgIHZhciBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxuICAgIHZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcbiAgICB2YXIgaXRlbU5vZGVzID0gW1xyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTEsIGlkOiBcImxvY2stbnVtLTFcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtMiwgaWQ6IFwibG9jay1udW0tMlwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW0zLCBpZDogXCJsb2NrLW51bS0zXCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTQsIGlkOiBcImxvY2stbnVtLTRcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtNSwgaWQ6IFwibG9jay1udW0tNVwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW02LCBpZDogXCJsb2NrLW51bS02XCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTcsIGlkOiBcImxvY2stbnVtLTdcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtOCwgaWQ6IFwibG9jay1udW0tOFwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW05LCBpZDogXCJsb2NrLW51bS05XCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLmJhY2ssIGlkOiBcImxvY2stbnVtLTEwXCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTAsIGlkOiBcImxvY2stbnVtLTBcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IG51bGwsIGlkOiBcImxvY2stbnVtLTExXCJ9XHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBpbnB1dFRleHQgPSAnJztcclxuICAgIHZhciBjdXJJZHggPSAwO1xyXG5cclxuICAgIHZhciBzZXRTZWxlY3RlZCA9IGZ1bmN0aW9uIChjdXJJZHgpIHtcclxuICAgICAgICBpdGVtTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbU5vZGUsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbU5vZGUuaWQpO1xyXG4gICAgICAgICAgIC8vIG5vZGUuY2xhc3NOYW1lID0gKGluZGV4ID09IGN1cklkeCA/ICdsb2NrLW51bS1mb2N1cycgOiAnbG9jay1udW0nKTtcclxuICAgICAgICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYnKS5zdHlsZS5kaXNwbGF5PWluZGV4ID09IGN1cklkeCA/IFwiYmxvY2tcIjpcIm5vbmVcIjtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICB2YXIgc3VibWl0ID0gZnVuY3Rpb24gKGNvZGUpIHtcclxuICAgICAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIC8vZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsYXlvdXQpO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XHJcbiAgICAgICAgaWYgKHR5cGVvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKGNvZGUsIGlucHV0VGV4dCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGludmlzaWJsZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgdmFyIHN0YXIgPSAnJztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHQubGVuZ3RoOyArK2kpIHN0YXIgKz0gJyonO1xyXG4gICAgICAgIHJldHVybiBzdGFyO1xyXG4gICAgfTtcclxuICAgIHZhciBjbGlja051bSA9IGZ1bmN0aW9uIChudW0pIHtcclxuICAgICAgICBpbnB1dFRleHQgKz0gU3RyaW5nKG51bSk7XHJcbiAgICAgICAgbG9ja1RleHQuaW5uZXJUZXh0ID0gaW52aXNpYmxlKGlucHV0VGV4dCk7XHJcbiAgICB9O1xyXG4gICAgdmFyIGJhY2tzcGFjZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpbnB1dFRleHQgPSBpbnB1dFRleHQuc3Vic3RyaW5nKDAsIGlucHV0VGV4dC5sZW5ndGggLSAxKTtcclxuICAgICAgICBsb2NrVGV4dC5pbm5lclRleHQgPSBpbnZpc2libGUoaW5wdXRUZXh0KTtcclxuICAgIH07XHJcbiAgICB2YXIgaGFuZGxlT2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBpdGVtTm9kZXNbY3VySWR4XTtcclxuICAgICAgICBpZiAoY3VycmVudC5rZXlDb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgYmFja3NwYWNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGFuZGxlS2V5KGN1cnJlbnQua2V5Q29kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciBoYW5kbGVLZXkgPSBmdW5jdGlvbiAoY3VyS2V5KSB7XHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBpZiAoKGN1cklkeCAlIDMpICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJJZHgtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAoKGN1cklkeCAlIDMpICE9IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJJZHgrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VySWR4ID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cklkeCAtPSAzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5kb3duOlxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cklkeCA8IDkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJJZHggKz0gMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUub2s6XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVPaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxyXG4gICAgICAgICAgICAgICAgc3VibWl0KDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW0xOlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMjpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTM6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW00OlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtNTpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTY6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW03OlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtODpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTk6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW0wOlxyXG4gICAgICAgICAgICAgICAgdmFyIG51bSA9IGN1cktleSAtIGtleUNvZGUubnVtMDtcclxuICAgICAgICAgICAgICAgIGNsaWNrTnVtKG51bSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc2V0U2VsZWN0ZWQoMCk7XHJcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaGFuZGxlS2V5KGN1cktleSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWQoY3VySWR4KTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0VGV4dC5sZW5ndGggPT0gNikge1xyXG4gICAgICAgICAgICBzdWJtaXQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IHtzaG93Q2hpbGRMb2NrfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2NoaWxkTG9jay5qcyIsImltcG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfSBmcm9tIFwiLi4vdG9vZG8vX2tleWNvZGVzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gQ2hpbGRNZW51KCkge1xyXG59XHJcbkNoaWxkTWVudS5wcm90b3R5cGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB7ZnVuY3Rpb259XHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2suYnRuIHtpbnR9IDAu5oyJ6ZKuMSAxLuaMiemSrjIgLTEu5Y+W5raI5pON5L2cXHJcbiAgICAgKiBAcGFyYW0gY250IHtpbnR9IFsxLDJdIOaMiemSruaVsOmHj1xyXG4gICAgICogQHBhcmFtIGJ0biB7aW50fSBbMCwxXSDpu5jorqTpgInkuK1cclxuICAgICAqIEBwYXJhbSB0ZXh0IHtzdHJpbmd9IOaPkOekuuaWh+acrFxyXG4gICAgICovXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoY2FsbGJhY2ssIGNudCwgYnRuLCB0ZXh0KSB7XHJcbiAgICAgICAgdmFyIGxheW91dElkID0gJ2xvY2stbWVudS1sYXlvdXQnO1xyXG4gICAgICAgIHZhciBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYXlvdXRJZCk7XHJcbiAgICAgICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgICAgICAgbGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGxheW91dC5jbGFzc05hbWUgPSAnbG9jay1sYXlvdXQnO1xyXG4gICAgICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcclxuICAgICAgICAgICAgbGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxvY2stbWVudS1iZ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay10aXRsZVwiIGNsYXNzPVwibG9jay10aXRsZS0wXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLWJ0bjBcIiBjbGFzcz1cImxvY2stYnRuXCI+PHNwYW4+5byA5ZCv56ul6ZSBPC9zcGFuPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1idG4xXCIgY2xhc3M9XCJsb2NrLWJ0blwiPjxzcGFuPuWFs+mXreerpemUgTwvc3Bhbj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stYnRuMlwiIGNsYXNzPVwibG9jay1idG5cIj48c3Bhbj7mm7TmlLnlr4bnoIE8L3NwYW4+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJsb2NrLXRpcHNcIj7pgInmi6npnIDopoHnmoTmk43kvZzmjInnoa7lrprplK7ov5vooYzkuIvkuIDmraXvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgII8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgdmFyIGJnID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLW1lbnUtYmcnKTtcclxuICAgICAgICB2YXIgYnRuTm9kZXMgPSBiZy5xdWVyeVNlbGVjdG9yQWxsKCcubG9jay1idG4nKTtcclxuICAgICAgICBmb3IodmFyIGk9MDtpPGJ0bk5vZGVzLmxlbmd0aDsrK2kpe1xyXG4gICAgICAgICAgICB2YXIgYnRuTm9kZSA9IGJ0bk5vZGVzW2ldO1xyXG4gICAgICAgICAgICBidG5Ob2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYnRuTm9kZTAsIGJ0bk5vZGUxO1xyXG4gICAgICAgIGlmIChjbnQgPT0gMSkge1xyXG4gICAgICAgICAgICBidG5Ob2RlMCA9IGJ0bk5vZGVzWzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNudCA9IDI7XHJcbiAgICAgICAgICAgIGJ0bk5vZGUwID0gYnRuTm9kZXNbMV07XHJcbiAgICAgICAgICAgIGJ0bk5vZGUxID0gYnRuTm9kZXNbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChidG5Ob2RlMCkgYnRuTm9kZTAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgaWYgKGJ0bk5vZGUxKSBidG5Ob2RlMS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHJcbiAgICAgICAgdmFyIHRpcE5vZGUgPSBiZy5xdWVyeVNlbGVjdG9yKCcubG9jay10aXBzJyk7XHJcbiAgICAgICAgdGlwTm9kZS5pbm5lckhUTUwgPSB0ZXh0O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBmb2N1c0J0bihidG5JZHgpIHtcclxuICAgICAgICAgICAgdmFyIGZvY3VzTm9kZTtcclxuICAgICAgICAgICAgaWYgKGNudCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBidG5Ob2RlMC5jbGFzc05hbWU9XCJsb2NrLWJ0biBsb2NrLWJ0bi1mb2N1c1wiO1xyXG4gICAgICAgICAgICAgICAgLy8gZm9jdXNOb2RlID0gYnRuTm9kZTAucXVlcnlTZWxlY3RvcignLmxvY2stYnRuLWZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnRuSWR4ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBidG5Ob2RlMC5jbGFzc05hbWU9XCJsb2NrLWJ0biBsb2NrLWJ0bi1mb2N1c1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bk5vZGUxLmNsYXNzTmFtZT1cImxvY2stYnRuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9jdXNOb2RlID0gYnRuTm9kZTAucXVlcnlTZWxlY3RvcignLmxvY2stYnRuLWZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9jdXNOb2RlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZSA9IGJ0bk5vZGUxLnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLWJ0bi1mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBidG5Ob2RlMC5jbGFzc05hbWU9XCJsb2NrLWJ0blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bk5vZGUxLmNsYXNzTmFtZT1cImxvY2stYnRuIGxvY2stYnRuLWZvY3VzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9jdXNOb2RlID0gYnRuTm9kZTAucXVlcnlTZWxlY3RvcignLmxvY2stYnRuLWZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9jdXNOb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9jdXNOb2RlID0gYnRuTm9kZTEucXVlcnlTZWxlY3RvcignLmxvY2stYnRuLWZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9jdXNOb2RlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ0biA9IGJ0bklkeDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChidG4gPCAwIHx8IGJ0biA+IDEpIGJ0biA9IDA7XHJcbiAgICAgICAgZm9jdXNCdG4oYnRuKTtcclxuXHJcbiAgICAgICAgbGV0IHN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxuICAgICAgICB2YXIgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICAgICAgdmFyIGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2Uga2V5Q29kZS51cDpcclxuICAgICAgICAgICAgICAgICAgICBmb2N1c0J0bigwKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5kb3duOlxyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzQnRuKGNudCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm9rOiAgICAgLy/noa7lrppcclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XHJcbiAgICAgICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMDogICAgICAvL+WPlua2iFxyXG4gICAgICAgICAgICAgICAgICAgIGJ0biA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKGJ0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY2hpbGRNZW51ID0gbmV3IENoaWxkTWVudSgpO1xyXG5leHBvcnQge2NoaWxkTWVudX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9jaGlsZE1lbnUuanMiLCJpbXBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc30gZnJvbSBcIi4uL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSB7aW50fSBjYWxsYmFjay5idG4g5oyJ6ZSuIDAu56Gu5a6aIDEu5Y+W5raIXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBidG4g6buY6K6k54Sm54K5IDAu56Gu5a6aIDEu5Y+W5raIXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSDnqpflj6PmoIfpophcclxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQg56qX5Y+j5YaF5a65XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBidG4wIOaMiemSrjFcclxuICogQHBhcmFtIHtzdHJpbmd9IGJ0bjEg5oyJ6ZKuMlxyXG4gKi9cclxuZnVuY3Rpb24gc2hvd0RpYWxvZygvKmNhbGxiYWNrLCBidG4sIHRpdGxlLCB0ZXh0LCBidG4wLCBidG4xKi8pIHtcclxuICAgIGNvbnN0IGxheW91dElkID0gJ2RpYWxvZy1sYXlvdXQtMDAxJztcclxuICAgIGxldCBjYWxsYmFjaywgYnRuLCB0aXRsZSwgdGV4dCwgYnRuMCwgYnRuMTtcclxuICAgIGNhbGxiYWNrID0gYXJndW1lbnRzWzBdID8gYXJndW1lbnRzWzBdIDogbnVsbDtcclxuICAgIGJ0biA9IGFyZ3VtZW50c1sxXSA/IGFyZ3VtZW50c1sxXSA6IDA7XHJcbiAgICB0aXRsZSA9IGFyZ3VtZW50c1syXSA/IGFyZ3VtZW50c1syXSA6ICfmj5DnpLonO1xyXG4gICAgdGV4dCA9IGFyZ3VtZW50c1szXSA/IGFyZ3VtZW50c1szXSA6ICcnO1xyXG4gICAgYnRuMCA9IGFyZ3VtZW50c1s0XSA/IGFyZ3VtZW50c1s0XSA6ICfnoa7lrponO1xyXG4gICAgYnRuMSA9IGFyZ3VtZW50c1s1XSA/IGFyZ3VtZW50c1s1XSA6ICfov5Tlm54nO1xyXG4gICAgdmFyIGFsaWduID0gYXJndW1lbnRzWzZdID8gYXJndW1lbnRzWzZdIDogJ2NlbnRlcic7XHJcblxyXG4gICAgbGV0IGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheW91dElkKTtcclxuICAgIGlmICghbGF5b3V0KSB7XHJcbiAgICAgICAgbGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsYXlvdXQuY2xhc3NOYW1lID0gJ2RpYWxvZy1sYXlvdXQnO1xyXG4gICAgICAgIGxheW91dC5pZCA9IGxheW91dElkO1xyXG4gICAgICAgIGxheW91dC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImRpYWxvZy1iZ1wiPicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctdGl0bGVcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLXRleHRcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwiZGlhbG9nLWJ0bjBcIiBzdHlsZT1cImxlZnQ6IDEyJTt0b3A6IDczJVwiIGNsYXNzPVwiZGlhbG9nLWJ0biBkaWFsb2ctYnRuMFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJkaWFsb2ctYnRuMVwiIHN0eWxlPVwibGVmdDogNTclO3RvcDogNzMlXCIgY2xhc3M9XCJkaWFsb2ctYnRuIGRpYWxvZy1idG4xXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcclxuICAgIH1cclxuICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIHZhciBiYWNrZ3JvdW5kID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctYmcnKTtcclxuICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgbm9kZVRpdGxlID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLXRpdGxlJyk7XHJcbiAgICBub2RlVGl0bGUuaW5uZXJIVE1MID0gdGl0bGU7XHJcbiAgICB2YXIgbm9kZVRleHQgPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctdGV4dCcpO1xyXG4gICAgbm9kZVRleHQuaW5uZXJIVE1MID0gdGV4dDtcclxuICAgIG5vZGVUZXh0LnN0eWxlLnRleHRBbGlnbiA9IGFsaWduO1xyXG5cclxuICAgIHZhciBub2RlQnRuMCA9IGJhY2tncm91bmQucXVlcnlTZWxlY3RvcignI2RpYWxvZy1idG4wJyk7XHJcbiAgICBub2RlQnRuMC5pbm5lckhUTUwgPSBidG4wICsgJzxkaXY+PC9kaXY+JztcclxuICAgIHZhciBub2RlQnRuMSA9IGJhY2tncm91bmQucXVlcnlTZWxlY3RvcignI2RpYWxvZy1idG4xJyk7XHJcbiAgICBub2RlQnRuMS5pbm5lckhUTUwgPSBidG4xICsgJzxkaXY+PC9kaXY+JztcclxuXHJcbiAgICB2YXIgYnRuXzAwNiA9IG5vZGVCdG4wLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik7XHJcbiAgICB2YXIgYnRuXzAwNm5vbmUgPSBub2RlQnRuMS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgZm9jdXNCdG4gPSBmdW5jdGlvbiAoYnRuSWR4KSB7XHJcbiAgICAgICAgaWYgKGJ0bklkeCA9PSAwKSB7XHJcbiAgICAgICAgICAgIG5vZGVCdG4wLmNsYXNzTmFtZSA9IFwiIFwiICsgXCJkaWFsb2dCdG5fMSBkaWFsb2ctQnRuX2ZvY3VzXCI7XHJcbiAgICAgICAgICAgIG5vZGVCdG4xLmNsYXNzTmFtZSA9IFwiIFwiICsgXCJkaWFsb2dCdG5fMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnRuSWR4ID09IDEpIHtcclxuXHJcbiAgICAgICAgICAgIG5vZGVCdG4wLmNsYXNzTmFtZSA9IFwiIFwiICsgXCJkaWFsb2dCdG5fMFwiO1xyXG4gICAgICAgICAgICBub2RlQnRuMS5jbGFzc05hbWUgPSBcIiBcIiArIFwiZGlhbG9nQnRuXzEgZGlhbG9nLUJ0bl9mb2N1c1wiO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuID0gYnRuSWR4O1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoYnRuIDwgMCB8fCBidG4gPiAxKSBidG4gPSAwO1xyXG4gICAgZm9jdXNCdG4oYnRuKTtcclxuXHJcbiAgICBsZXQgc3VibWl0ID0gZmFsc2U7XHJcbiAgICB2YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbiAgICB2YXIgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgdmFyIGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgZm9jdXNCdG4oMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgZm9jdXNCdG4oMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm9rOiAgICAgLy/noa7lrppcclxuICAgICAgICAgICAgICAgIHN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW0wOiAgICAgIC8v5Y+W5raIXHJcbiAgICAgICAgICAgICAgICBidG4gPSAxO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3VibWl0KSB7XHJcbiAgICAgICAgICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKGJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge3Nob3dEaWFsb2d9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvZGlhbG9nLmpzIiwidmFyIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbnZhciBzaG93VGltZSA9IDEzMTg7XHJcbnZhciBsYXlvdXRJZCA9ICdsb2FkaW5nLWxheW91dC0wMDInO1xyXG5cclxuZnVuY3Rpb24gc2hvd0xvYWRpbmcoKSB7XHJcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgIHZhciB0aXRsZSA9IGFyZ3VtZW50c1swXSA/IGFyZ3VtZW50c1swXSA6ICfmj5DnpLonO1xyXG4gICAgdmFyIHRleHQgPSBhcmd1bWVudHNbMV0gPyBhcmd1bWVudHNbMV0gOiAn5q2j5Zyo5Yqg6L2977yM6K+356iN5YCZLi4uJztcclxuXHJcbiAgICBsZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxheW91dC5jbGFzc05hbWUgPSAnZGlhbG9nLWxheW91dCc7XHJcbiAgICAgICAgbGF5b3V0LmlkID0gbGF5b3V0SWQ7XHJcbiAgICAgICAgbGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZGlhbG9nLWJnXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImRpYWxvZy10aXRsZVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctdGV4dFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheW91dCk7XHJcbiAgICB9XHJcbiAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgbm9kZUJnID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctYmcnKTtcclxuICAgIG5vZGVCZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIHZhciBub2RlVGl0bGUgPSBub2RlQmcucXVlcnlTZWxlY3RvcignLmRpYWxvZy10aXRsZScpO1xyXG4gICAgbm9kZVRpdGxlLmlubmVySFRNTCA9IHRpdGxlO1xyXG4gICAgdmFyIG5vZGVUZXh0ID0gbm9kZUJnLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctdGV4dCcpO1xyXG4gICAgbm9kZVRleHQuaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlTG9hZGluZyhjYWxsYmFjaykge1xyXG4gICAgdmFyIGRlbGF5VGltZSA9IGFyZ3VtZW50c1sxXSA/IGFyZ3VtZW50c1sxXSA6IHNob3dUaW1lO1xyXG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIHRpbWUgPSAoZGVsYXlUaW1lICsgbG9hZFRpbWUpIC0gdGltZTtcclxuICAgIGlmICh0aW1lIDwgMCkgdGltZSA9IDA7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheW91dElkKTtcclxuICAgICAgICBpZiAobGF5b3V0KSB7XHJcbiAgICAgICAgICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBsZXQgYmFja2dyb3VuZCA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWJnJyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcclxuICAgIH0sIHRpbWUpO1xyXG59XHJcblxyXG5leHBvcnQge3Nob3dMb2FkaW5nLGhpZGVMb2FkaW5nfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2xvYWRpbmcuanMiLCJpbXBvcnQge1N0YkNsaWVudH0gZnJvbSBcIi4vdG9vZG8vX3N0YmNsaVwiO1xyXG5pbXBvcnQge2dldEtleUNvZGVzfSBmcm9tICcuL3Rvb2RvL19rZXljb2Rlcyc7XHJcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSBcIi4vYXBwL2RpYWxvZ1wiO1xyXG5pbXBvcnQge2hpZGVMb2FkaW5nLCBzaG93TG9hZGluZ30gZnJvbSBcIi4vYXBwL2xvYWRpbmdcIjtcclxuaW1wb3J0IHtnZXRKU09OfSBmcm9tIFwiLi9hcHAvYWJjXCI7XHJcblxyXG5pbXBvcnQge0hvbWVNZW51fSBmcm9tICcuL0hvbWVNZW51JztcclxuaW1wb3J0IHtKYXZhMTBQYWdlfSBmcm9tICcuL0phdmExMFBhZ2UnO1xyXG5pbXBvcnQge2phdmFDb2lufSBmcm9tICcuL0phdmExMENvaW4nO1xyXG5pbXBvcnQge3BhZ2VVcmx9IGZyb20gJy4vYXBwL1BhZ2VVcmwnO1xyXG5pbXBvcnQge3JlY2hhcmdlQXJncyxhcHBBcmdzfSBmcm9tICcuL2FwcC9QYWdlQXJncyc7XHJcblxyXG5cclxuY29uc3Qga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbmNvbnN0IHN0YmNsaSA9IG5ldyBTdGJDbGllbnQoKTtcclxuXHJcbmZ1bmN0aW9uIG9uU3RhcnQoY29kZSwgYml6KSB7XHJcbiAgICBoaWRlTG9hZGluZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGNvZGUgIT0gMCkge1xyXG4gICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dMb2FkaW5nKCfoh6rliqjnmbvpmYYnLCAn5bCP5Y+M5Zyo5L2/5Yqy5Yqg6L2977yM6K+356iN5YCZLi4uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RiY2xpLnN0YXJ0KG9uU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBqYXZhMTBQYWdlLnNob3coY3VycmVudEluZGV4LCBvblBhZ2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxLCAn5o+Q56S6JywgJ+ayoeacieaJvuWIsOeUqOaIt+S/oeaBr+WTpu+8gScsICfph43or5UnLCAn5Y+W5raIJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGRlVXNlciA9IGJpejtcclxuICAgICAgICAgICAgamF2YUNvaW4uc2hvdyhiaXouY29pbnMpO1xyXG4gICAgICAgICAgICBqYXZhMTBQYWdlLnNob3coY3VycmVudEluZGV4LCBvblBhZ2VLZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbk1lbnVLZXkoa2V5KSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5kb3duOlxyXG4gICAgICAgICAgICBob21lTWVudS5oaWRlKCk7XHJcbiAgICAgICAgICAgIGphdmExMFBhZ2Uuc2hvdyhqYXZhMTBQYWdlLmN1cnJlbnQsIG9uUGFnZUtleSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5vazpcclxuICAgICAgICAgICAgaWYgKGhvbWVNZW51LmN1cnJlbnQgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgYXBwQXJncy5vbkhvbWVQYWdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XHJcbiAgICAgICAgICAgIGFwcEFyZ3Mub25Ib21lUGFnZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25QYWdlS2V5KGtleSkge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICAgICAgamF2YTEwUGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaG9tZU1lbnUuc2hvdyhob21lTWVudS5jdXJyZW50LCBvbk1lbnVLZXksIHRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaG9tZU1lbnUuc2hvdyhob21lTWVudS5jdXJyZW50LCBvbk1lbnVLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5vazpcclxuICAgICAgICAgICAgLy/mnKrnmbvlvZVcclxuICAgICAgICAgICAgaWYgKCF0ZGVVc2VyKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93TG9hZGluZygn6Ieq5Yqo55m76ZmGJywgJ+Wwj+WPjOWcqOS9v+WKsuWKoOi9ve+8jOivt+eojeWAmS4uLicpO1xyXG4gICAgICAgICAgICAgICAgc3RiY2xpLnN0YXJ0KG9uU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGl0ZW1JbmZvID0gamF2YTEwUGFnZS5pdGVtSW5mb3NbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgaWYgKHRkZVVzZXIuY29pbnMgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhbGxVcmwgPSBwYWdlVXJsLmNhbGxVcmwoaXRlbUluZm8sIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgICAgIHJlY2hhcmdlQXJncy5zZXRSZXR1cm5VcmwoY2FsbFVybCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdyZWNoYXJnZS5odG1sJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtSW5mby50cmlhbCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlVXJsLmNhbGxHYW1lKGl0ZW1JbmZvLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgamF2YTEwUGFnZS5zaG93KGN1cnJlbnRJbmRleCwgb25QYWdlS2V5KTtcclxuICAgICAgICAgICAgfSwgMSwgJ+aVrOivt+acn+W+hScsICfmnI3liqHmmoLmnKrlvIDpgJrlk6bvvIEnLCAn56Gu5a6aJywgJ+WPlua2iCcpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGtleUNvZGUubnVtMDpcclxuICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgYXBwQXJncy5vbkhvbWVQYWdlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5lc2M6XHJcbiAgICAgICAgICAgIGFwcEFyZ3Mub25GaXJzdFBhZ2UoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50SW5kZXggPSBqYXZhMTBQYWdlLmN1cnJlbnQ7XHJcbn1cclxuXHJcblxyXG52YXIgaG9tZU1lbnU7XHJcbnZhciBqYXZhMTBQYWdlO1xyXG52YXIgY3VycmVudEluZGV4O1xyXG52YXIgdGRlVXNlciA9IG51bGw7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaG9tZU1lbnUgPSBuZXcgSG9tZU1lbnUoKTtcclxuXHJcbiAgICBqYXZhMTBQYWdlID0gbmV3IEphdmExMFBhZ2UoKTtcclxuICAgIGN1cnJlbnRJbmRleCA9IGphdmExMFBhZ2UuY3VycmVudDtcclxuXHJcbiAgICBnZXRKU09OKCdkYXRhL3RkZV9qYXZhMTBfaW5mb3MuanNvbicsIGZ1bmN0aW9uIChpdGVtSW5mb3MpIHtcclxuICAgICAgICAvL+WmguaenOe7meeahOaVsOaNruS4jeaYr+aVtOW9ou+8jOWImei9rOaNouS4gOasoVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbUluZm9zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmZvID0gaXRlbUluZm9zW2ldO1xyXG4gICAgICAgICAgICBpbmZvLmlkID0gcGFyc2VJbnQoaW5mby5pZCk7XHJcbiAgICAgICAgICAgIGluZm8uZ2FtZUlkID0gcGFyc2VJbnQoaW5mby5nYW1lSWQpO1xyXG4gICAgICAgICAgICBpbmZvLnByb2R1Y3RJZCA9IHBhcnNlSW50KGluZm8ucHJvZHVjdElkKTtcclxuICAgICAgICAgICAgaW5mby5wcm9kSWQgPSBwYXJzZUludChpbmZvLnByb2RJZCk7XHJcbiAgICAgICAgICAgIGluZm8udHJpYWwgPSBwYXJzZUludChpbmZvLnRyaWFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgamF2YTEwUGFnZS5zdGFydChpdGVtSW5mb3MsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9zaG93TG9hZGluZygn6Ieq5Yqo55m76ZmGJywgJ+Wwj+WPjOWcqOS9v+WKsuWKoOi9ve+8jOivt+eojeWAmS4uLicpO1xyXG4gICAgICAgICAgICAvL3N0YmNsaS5zdGFydChvblN0YXJ0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBqYXZhMTBQYWdlLnNob3coamF2YTEwUGFnZS5jdXJyZW50LCBvblBhZ2VLZXkpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2hvd0xvYWRpbmcoKTtcclxuICAgICAgICAgICAgc3RiY2xpLnN0YXJ0KG9uU3RhcnQpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9KTtcclxuXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9qYXZhMTAuanMiLCJpbXBvcnQge3JldGFpbCxyZXRhaWxJZH0gZnJvbSBcIi4vX3JldGFpbFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0S2V5Q29kZXMoKSB7XHJcbiAgICBsZXQga2V5TWFwID0ge307XHJcblxyXG4gICAgaWYgKHJldGFpbElkID09IHJldGFpbC5neGdkKSB7XHJcbiAgICAgICAga2V5TWFwID0geyAvLyDlub/opb/lub/nlLVcclxuICAgICAgICAgICAgdXA6IDM4LCAgICAgICAgLy8g5LiKXHJcbiAgICAgICAgICAgIGRvd246IDQwLCAgICAgIC8vIOS4i1xyXG4gICAgICAgICAgICBsZWZ0OiAzNywgICAgICAvLyDlt6ZcclxuICAgICAgICAgICAgcmlnaHQ6IDM5LCAgICAgLy8g5Y+zXHJcbiAgICAgICAgICAgIG9rOiAxMywgICAgICAgIC8vIOehruWumlxyXG4gICAgICAgICAgICBmMTogNDAwLCAgICAgICAvLyBmMSAvL+e6olxyXG4gICAgICAgICAgICBmMjogNDAxLCAgICAgICAvLyBmMiAvL+iTnVxyXG4gICAgICAgICAgICBmMzogNDAzLCAgICAgICAvLyBmMyAvL+m7hFxyXG4gICAgICAgICAgICBmNDogNDAyLCAgICAgICAvLyBmNCAvL+e7v1xyXG4gICAgICAgICAgICBudW0xOiA0OSwgICAgICAvLyDmlbDlrZcxXHJcbiAgICAgICAgICAgIG51bTI6IDUwLCAgICAgIC8vIOaVsOWtlzJcclxuICAgICAgICAgICAgbnVtMzogNTEsICAgICAgLy8g5pWw5a2XM1xyXG4gICAgICAgICAgICBudW00OiA1MiwgICAgICAvLyDmlbDlrZc0XHJcbiAgICAgICAgICAgIG51bTU6IDUzLCAgICAgIC8vIOaVsOWtlzVcclxuICAgICAgICAgICAgbnVtNjogNTQsICAgICAgLy8g5pWw5a2XNlxyXG4gICAgICAgICAgICBudW03OiA1NSwgICAgICAvLyDmlbDlrZc3XHJcbiAgICAgICAgICAgIG51bTg6IDU2LCAgICAgIC8vIOaVsOWtlzhcclxuICAgICAgICAgICAgbnVtOTogNTcsICAgICAgLy8g5pWw5a2XOVxyXG4gICAgICAgICAgICBudW0wOiA0OCwgICAgICAvLyDmlbDlrZcwXHJcbiAgICAgICAgICAgIG11dGU6IDUxOCwgICAgICAvLyDpnZnpn7NcclxuICAgICAgICAgICAgYmFjazogMzk5LCAgICAgIC8vIOi/lOWbnlxyXG4gICAgICAgICAgICB0cmFjazogNDA2LCAgICAgLy8g5aOw6YGT77yfIC8v5aOw6YGT6ZSuXHJcbiAgICAgICAgICAgIHZvbFVwOiA1MTcsICAgIC8vIOWinuWkp+mfs+mHj1xyXG4gICAgICAgICAgICB2b2xEb3duOiA1MTYsICAvLyDlh4/lsI/pn7Pph49cclxuICAgICAgICAgICAgZmF2OiA0MDQsICAgICAgIC8vIOWWnOasolxyXG4gICAgICAgICAgICBwbGF5QmFjazogNTIxLCAgLy8g5Zue5pS+ICAvL+eCueaSremUrlxyXG4gICAgICAgICAgICBwYWdlVXA6IDMzLCAgICAvLyDkuIrkuIDpobVcclxuICAgICAgICAgICAgcGFnZURvd246IDM0LCAgLy8g5LiL5LiA6aG1XHJcbiAgICAgICAgICAgIG1lbnU6IDUxNSwgICAgICAgLy8g6I+c5Y2VXHJcbiAgICAgICAgICAgIGVzYzogNTE0LCAgICAgICAgLy/pgIDlh7pcclxuICAgICAgICAgICAgaG9tZTogNTIwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHJldGFpbElkID09IHJldGFpbC5obnl4KSB7XHJcbiAgICAgICAgLy9rZXlNYXAgPSB7IC8vIOays+WNl+aciee6vyBsaW51eFxyXG4gICAgICAgIC8vICAgIHVwOiA2NTM2MixcclxuICAgICAgICAvLyAgICBkb3duOiA2NTM2NCxcclxuICAgICAgICAvLyAgICBsZWZ0OiA2NTM2MSxcclxuICAgICAgICAvLyAgICByaWdodDogNjUzNjMsXHJcbiAgICAgICAgLy8gICAgb2s6IDY1MjkzLFxyXG4gICAgICAgIC8vICAgIGYxOiAzMixcclxuICAgICAgICAvLyAgICBmMjogMzMsXHJcbiAgICAgICAgLy8gICAgZjM6IDM0LFxyXG4gICAgICAgIC8vICAgIGY0OiAzNSxcclxuICAgICAgICAvLyAgICBudW0xOiA0OSxcclxuICAgICAgICAvLyAgICBudW0yOiA1MCxcclxuICAgICAgICAvLyAgICBudW0zOiA1MSxcclxuICAgICAgICAvLyAgICBudW00OiA1MixcclxuICAgICAgICAvLyAgICBudW01OiA1MyxcclxuICAgICAgICAvLyAgICBudW02OiA1NCxcclxuICAgICAgICAvLyAgICBudW03OiA1NSxcclxuICAgICAgICAvLyAgICBudW04OiA1NixcclxuICAgICAgICAvLyAgICBudW05OiA1NyxcclxuICAgICAgICAvLyAgICBudW0wOiA0OCxcclxuICAgICAgICAvLyAgICBtdXRlOiA2MzU2MyxcclxuICAgICAgICAvLyAgICBiYWNrOiA2NTM2NyxcclxuICAgICAgICAvLyAgICB0cmFjazogNjUzMDcsXHJcbiAgICAgICAgLy8gICAgdm9sVXA6IDYzNTYxLFxyXG4gICAgICAgIC8vICAgIHZvbERvd246IDYzNTYyLFxyXG4gICAgICAgIC8vICAgIGZhdjogMzYsXHJcbiAgICAgICAgLy8gICAgcGxheUJhY2s6IDcyLFxyXG4gICAgICAgIC8vICAgIHBhZ2VVcDogMjUsXHJcbiAgICAgICAgLy8gICAgcGFnZURvd246IDI2LFxyXG4gICAgICAgIC8vICAgIG1lbnU6IDY1MzYwLFxyXG4gICAgICAgIC8vICAgIGVzYzogMjcsXHJcbiAgICAgICAgLy8gICAgaG9tZTogNjUzNjBcclxuICAgICAgICAvL307XHJcbiAgICAgICAga2V5TWFwID0geyAvLyDmsrPljZfmnInnur8gYW5kcm9pZFxyXG4gICAgICAgICAgICB1cDogMzgsICAgICAgICAvLyDkuIpcclxuICAgICAgICAgICAgZG93bjogNDAsICAgICAgLy8g5LiLXHJcbiAgICAgICAgICAgIGxlZnQ6IDM3LCAgICAgIC8vIOW3plxyXG4gICAgICAgICAgICByaWdodDogMzksICAgICAvLyDlj7NcclxuICAgICAgICAgICAgb2s6IDEzLCAgICAgICAgLy8g56Gu5a6aXHJcbiAgICAgICAgICAgIGYxOiAxMTIsICAgICAgIC8vIGYxXHJcbiAgICAgICAgICAgIGYyOiAxMTMsICAgICAgIC8vIGYyXHJcbiAgICAgICAgICAgIGYzOiAxMTQsICAgICAgIC8vIGYzXHJcbiAgICAgICAgICAgIGY0OiAxMTUsICAgICAgIC8vIGY0XHJcbiAgICAgICAgICAgIG51bTE6IDQ5LCAgICAgIC8vIOaVsOWtlzFcclxuICAgICAgICAgICAgbnVtMjogNTAsICAgICAgLy8g5pWw5a2XMlxyXG4gICAgICAgICAgICBudW0zOiA1MSwgICAgICAvLyDmlbDlrZczXHJcbiAgICAgICAgICAgIG51bTQ6IDUyLCAgICAgIC8vIOaVsOWtlzRcclxuICAgICAgICAgICAgbnVtNTogNTMsICAgICAgLy8g5pWw5a2XNVxyXG4gICAgICAgICAgICBudW02OiA1NCwgICAgICAvLyDmlbDlrZc2XHJcbiAgICAgICAgICAgIG51bTc6IDU1LCAgICAgIC8vIOaVsOWtlzdcclxuICAgICAgICAgICAgbnVtODogNTYsICAgICAgLy8g5pWw5a2XOFxyXG4gICAgICAgICAgICBudW05OiA1NywgICAgICAvLyDmlbDlrZc5XHJcbiAgICAgICAgICAgIG51bTA6IDQ4LCAgICAgIC8vIOaVsOWtlzAgLy/mlbDlrZcwIOi/lOWbnlxyXG4gICAgICAgICAgICBtdXRlOiA3NywgICAgICAvLyDpnZnpn7NcclxuICAgICAgICAgICAgYmFjazogOCwgICAgICAvLyDov5Tlm55cclxuICAgICAgICAgICAgdHJhY2s6IDgyLCAgICAgLy8g5aOw6YGT77yfXHJcbiAgICAgICAgICAgIHZvbFVwOiAxOTAsICAgIC8vIOWinuWkp+mfs+mHj1xyXG4gICAgICAgICAgICB2b2xEb3duOiAxODgsICAvLyDlh4/lsI/pn7Pph49cclxuICAgICAgICAgICAgZmF2OiA4NCwgICAgICAgLy8g5Zac5qyiXHJcbiAgICAgICAgICAgIHBsYXlCYWNrOiA4MCwgIC8vIOWbnuaUvlxyXG4gICAgICAgICAgICBwYWdlVXA6IDMzLCAgICAvLyDkuIrkuIDpobVcclxuICAgICAgICAgICAgcGFnZURvd246IDM0LCAgLy8g5LiL5LiA6aG1XHJcbiAgICAgICAgICAgIG1lbnU6IDcyLCAgICAgICAvLyDoj5zljZVcclxuICAgICAgICAgICAgZXNjOiAyNyxcclxuICAgICAgICAgICAgaG9tZTogNzJcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0gZWxzZSBpZiAocmV0YWlsSWQgPT0gcmV0YWlsLmdkZ2QpIHtcclxuICAgICAgICBrZXlNYXAgPSB7IC8vIOW5v+S4nOW5v+eUtVxyXG4gICAgICAgICAgICB1cDogODcsICAgICAgICAvLyDkuIogV+mUrlxyXG4gICAgICAgICAgICBkb3duOiA4MywgICAgICAvLyDkuIsgU+mUrlxyXG4gICAgICAgICAgICBsZWZ0OiA2NSwgICAgICAvLyDlt6YgQemUrlxyXG4gICAgICAgICAgICByaWdodDogNjgsICAgICAvLyDlj7MgROmUrlxyXG4gICAgICAgICAgICBvazogMTMsICAgICAgICAvLyDnoa7lrppcclxuICAgICAgICAgICAgZjE6IDQwMCwgICAgICAgLy8gZjEgLy/nuqJcclxuICAgICAgICAgICAgZjI6IDQwMSwgICAgICAgLy8gZjIgLy/ok51cclxuICAgICAgICAgICAgZjM6IDQwMiwgICAgICAgLy8gZjMgLy/pu4RcclxuICAgICAgICAgICAgZjQ6IDQwMywgICAgICAgLy8gZjQgLy/nu79cclxuICAgICAgICAgICAgbnVtMTogNDksICAgICAgLy8g5pWw5a2XMVxyXG4gICAgICAgICAgICBudW0yOiA1MCwgICAgICAvLyDmlbDlrZcyXHJcbiAgICAgICAgICAgIG51bTM6IDUxLCAgICAgIC8vIOaVsOWtlzNcclxuICAgICAgICAgICAgbnVtNDogNTIsICAgICAgLy8g5pWw5a2XNFxyXG4gICAgICAgICAgICBudW01OiA1MywgICAgICAvLyDmlbDlrZc1XHJcbiAgICAgICAgICAgIG51bTY6IDU0LCAgICAgIC8vIOaVsOWtlzZcclxuICAgICAgICAgICAgbnVtNzogNTUsICAgICAgLy8g5pWw5a2XN1xyXG4gICAgICAgICAgICBudW04OiA1NiwgICAgICAvLyDmlbDlrZc4XHJcbiAgICAgICAgICAgIG51bTk6IDU3LCAgICAgIC8vIOaVsOWtlzlcclxuICAgICAgICAgICAgbnVtMDogNDgsICAgICAgLy8g5pWw5a2XMFxyXG4gICAgICAgICAgICBtdXRlOiA2NywgICAgICAvLyDpnZnpn7NcclxuICAgICAgICAgICAgYmFjazogOCwgICAgICAvLyDov5Tlm55cclxuICAgICAgICAgICAgdHJhY2s6IDg2LCAgICAgLy8g5aOw6YGT77yfIC8v5aOw6YGT6ZSuXHJcbiAgICAgICAgICAgIHZvbFVwOiA2MSwgICAgLy8g5aKe5aSn6Z+z6YePXHJcbiAgICAgICAgICAgIHZvbERvd246IDQ1LCAgLy8g5YeP5bCP6Z+z6YePXHJcbiAgICAgICAgICAgIGZhdjogNzYsICAgICAgIC8vIOWWnOasolxyXG4gICAgICAgICAgICBwbGF5QmFjazogNTIxLCAgLy8g5Zue5pS+ICAvL+eCueaSremUrlxyXG4gICAgICAgICAgICBwYWdlVXA6IDMwNiwgICAgLy8g5LiK5LiA6aG1XHJcbiAgICAgICAgICAgIHBhZ2VEb3duOiAzMDcsICAvLyDkuIvkuIDpobVcclxuICAgICAgICAgICAgbWVudTogNzIsICAgICAgIC8vIOiPnOWNlVxyXG4gICAgICAgICAgICBlc2M6IDI3LFxyXG4gICAgICAgICAgICBob21lOiA3MlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSBlbHNlIHsgLy8gd2luZG93cyDplK7noIFcclxuICAgICAgICBrZXlNYXAgPSB7XHJcbiAgICAgICAgICAgIHVwOiAzOCwgICAgICAgIC8vIOS4ilxyXG4gICAgICAgICAgICBkb3duOiA0MCwgICAgICAvLyDkuItcclxuICAgICAgICAgICAgbGVmdDogMzcsICAgICAgLy8g5bemXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzOSwgICAgIC8vIOWPs1xyXG4gICAgICAgICAgICBvazogMTMsICAgICAgICAvLyDnoa7lrppcclxuICAgICAgICAgICAgZjE6IDExMiwgICAgICAgLy8gZjFcclxuICAgICAgICAgICAgZjI6IDExMywgICAgICAgLy8gZjJcclxuICAgICAgICAgICAgZjM6IDExNCwgICAgICAgLy8gZjNcclxuICAgICAgICAgICAgZjQ6IDExNSwgICAgICAgLy8gZjRcclxuICAgICAgICAgICAgbnVtMTogNDksICAgICAgLy8g5pWw5a2XMVxyXG4gICAgICAgICAgICBudW0yOiA1MCwgICAgICAvLyDmlbDlrZcyXHJcbiAgICAgICAgICAgIG51bTM6IDUxLCAgICAgIC8vIOaVsOWtlzNcclxuICAgICAgICAgICAgbnVtNDogNTIsICAgICAgLy8g5pWw5a2XNFxyXG4gICAgICAgICAgICBudW01OiA1MywgICAgICAvLyDmlbDlrZc1XHJcbiAgICAgICAgICAgIG51bTY6IDU0LCAgICAgIC8vIOaVsOWtlzZcclxuICAgICAgICAgICAgbnVtNzogNTUsICAgICAgLy8g5pWw5a2XN1xyXG4gICAgICAgICAgICBudW04OiA1NiwgICAgICAvLyDmlbDlrZc4XHJcbiAgICAgICAgICAgIG51bTk6IDU3LCAgICAgIC8vIOaVsOWtlzlcclxuICAgICAgICAgICAgbnVtMDogNDgsICAgICAgLy8g5pWw5a2XMCAvL+aVsOWtlzAg6L+U5ZueXHJcbiAgICAgICAgICAgIG11dGU6IDc3LCAgICAgIC8vIOmdmemfs1xyXG4gICAgICAgICAgICBiYWNrOiA4LCAgICAgIC8vIOi/lOWbnlxyXG4gICAgICAgICAgICB0cmFjazogODIsICAgICAvLyDlo7DpgZPvvJ9cclxuICAgICAgICAgICAgdm9sVXA6IDE5MCwgICAgLy8g5aKe5aSn6Z+z6YePXHJcbiAgICAgICAgICAgIHZvbERvd246IDE4OCwgIC8vIOWHj+Wwj+mfs+mHj1xyXG4gICAgICAgICAgICBmYXY6IDg0LCAgICAgICAvLyDllpzmrKJcclxuICAgICAgICAgICAgcGxheUJhY2s6IDgwLCAgLy8g5Zue5pS+XHJcbiAgICAgICAgICAgIHBhZ2VVcDogMzMsICAgIC8vIOS4iuS4gOmhtVxyXG4gICAgICAgICAgICBwYWdlRG93bjogMzQsICAvLyDkuIvkuIDpobVcclxuICAgICAgICAgICAgbWVudTogNzIsICAgICAgIC8vIOiPnOWNlVxyXG4gICAgICAgICAgICBlc2M6IDI3LFxyXG4gICAgICAgICAgICBob21lOiA3MlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4ga2V5TWFwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFdmVudChldnQpIHtcclxuICAgIHJldHVybiBldnQgfHwgd2luZG93LmV2ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRLZXkoZXZ0KSB7XHJcbiAgICAvL+aUr+aMgUlF44CBRkZcclxuICAgIGV2dCA9IGdldEV2ZW50KGV2dCk7XHJcbiAgICByZXR1cm4gZXZ0LmtleUNvZGUgfHwgZXZ0LndoaWNoIHx8IGV2dC5jaGFyQ29kZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29kZXMoKSB7XHJcbiAgICBjb25zdCBrZXlNYXAgPSBnZXRLZXlDb2RlcygpO1xyXG4gICAgdmFyIGNvZGVzID0gW107XHJcbiAgICBmb3IgKHZhciBjb2RlIGluIGtleU1hcCkge1xyXG4gICAgICAgIGlmIChrZXlNYXAuaGFzT3duUHJvcGVydHkoY29kZSkpIHtcclxuICAgICAgICAgICAgY29kZXMucHVzaChrZXlNYXBbY29kZV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb2RlcztcclxufVxyXG5cclxuZXhwb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fa2V5Y29kZXMuanMiLCJjb25zdCByZXRhaWwgPSB7XHJcbiAgICBneGdkOiAnOTYzMzUnLFxyXG4gICAgaG55eDogJzk2MjY2JyxcclxuICAgIGdkZ2Q6ICc5Njk1NicsXHJcbiAgICBub25lOiAnMTAwMCdcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdldFJldGFpbElkKCkge1xyXG4gICAgdHJ5IHsvL+W5v+ilv+W5v+eUtVxyXG4gICAgICAgIGlmIChndWFuZ3hpICYmIGlQYW5lbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0YWlsLmd4Z2Q7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgdHJ5IHsvL+ays+WNl+aciee6v1xyXG4gICAgICAgIHZhciBTeXN0ZW0gPSB3aW5kb3cuU3lzdGVtO1xyXG4gICAgICAgIGlmIChTeXN0ZW0gJiYgU3lzdGVtLnN0YklEKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXRhaWwuaG55eDtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICB0cnkgey8v5bm/5Lic5bm/55S1XHJcbiAgICAgICAgaWYgKENBICYmIFN0b3JhZ2VTZXJ2aWNlICYmIEZpbGVTeXN0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJldGFpbC5nZGdkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL3ZhciBzdG9yYWdlTGlzdCA9IFN0b3JhZ2VTZXJ2aWNlLmdldFN0b3JhZ2VJbmZvcygpO1xyXG4gICAgICAgIC8vaWYgKHN0b3JhZ2VMaXN0ICYmIHN0b3JhZ2VMaXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gICAgdmFyIHBhcnRpdGlvblBhdGhMaXN0ID0gc3RvcmFnZUxpc3RbMF0uZ2V0UGFydGl0aW9uc0luZm8oKVswXTtcclxuICAgICAgICAvLyAgICB2YXIgcGFydGl0aW9uUGF0aCA9IHBhcnRpdGlvblBhdGhMaXN0LnBhdGg7XHJcbiAgICAgICAgLy8gICAgdmFyIGRpciA9IEZpbGVTeXN0ZW0uZ2V0RGlyZWN0b3J5KHBhcnRpdGlvblBhdGgpO1xyXG4gICAgICAgIC8vICAgIHZhciBmbGlzdCA9IGRpci5maWxlTGlzdDtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgIGZvciAodmFyIGkgaW4gZmxpc3QpIHtcclxuICAgICAgICAvLyAgICAgICAgaWYgKGZsaXN0W2ldLm5hbWUuc3Vic3RyaW5nKDAsIDYpID09IFwiY2FjYXJkXCIpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgIHZhciBjYXJkTm8gPSBcIjk2OTU2XCIgKyBmbGlzdFtpXS5uYW1lLnN1YnN0cmluZyg2LCAxMik7XHJcbiAgICAgICAgLy8gICAgICAgIH1cclxuICAgICAgICAvLyAgICB9XHJcbiAgICAgICAgLy99XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0YWlsLm5vbmU7XHJcbn1cclxuXHJcbnZhciByZXRhaWxJZCA9IGdldFJldGFpbElkKCk7XHJcbmV4cG9ydCB7cmV0YWlsLGdldFJldGFpbElkLHJldGFpbElkfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19yZXRhaWwuanMiLCJpbXBvcnQge1JlcXVlc3RCb2R5LCBUb29kb0NsaWVudH0gZnJvbSBcIi4vX3RkY2xpXCI7XHJcbmltcG9ydCB7cmV0YWlsSWQscmV0YWlsfSBmcm9tIFwiLi9fcmV0YWlsXCI7XHJcbmltcG9ydCB7c3RiTnVsbH0gZnJvbSBcIi4vX3N0Ym51bGxcIjtcclxudmFyIG1kNSA9IHJlcXVpcmUoJ21kNScpO1xyXG52YXIgSlNPTiA9IHJlcXVpcmUoJ0pTT04nKTtcclxuXHJcbmZ1bmN0aW9uIFN0YkNsaWVudCgpIHtcclxuICAgIC8vIHRoaXMub3JpZ2luVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArICcvdGRzcnYnO1xyXG4gICAgdGhpcy5vcmlnaW5VcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3QvVG9vZG9TZXJ2aWNlL3B1YmxpYy9cIjtcclxuICAgIHRoaXMuYXBwS2V5ID0gJzEwMDAnO1xyXG4gICAgdGhpcy5hcHBTZWNyZXQgPSAnUmNPRmh0QVl6d0NHbzkxUEdIZFYnO1xyXG4gICAgdGhpcy5fdGRjbGkgPSBudWxsO1xyXG59XHJcblN0YkNsaWVudC5wcm90b3R5cGUgPSB7XHJcbiAgICBpc1JlYWR5OiBmYWxzZSxcclxuICAgIHVzZXJJZDogJycsXHJcbiAgICB0b2tlbjogJycsXHJcblxyXG4gICAgbWQ1OiBmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgcmV0dXJuIG1kNShtc2cgKyB0aGlzLmFwcFNlY3JldCk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gY2FsbGJhY2suYml6XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl90ZGNsaSkge1xyXG4gICAgICAgICAgICB0aGlzLl90ZGNsaSA9IG5ldyBUb29kb0NsaWVudCh0aGlzLmFwcEtleSwgdGhpcy5hcHBTZWNyZXQsIHRoaXMub3JpZ2luVXJsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0b2tlbiA9IHN0Yk51bGwuZ2V0VmFsdWUoJ3Rvb2RvLnRva2VuJyk7XHJcbiAgICAgICAgbGV0IHVzZXJJZCA9IHN0Yk51bGwuZ2V0VmFsdWUoJ3Rvb2RvLnVzZXJJZCcpO1xyXG4gICAgICAgIC8vIGlmICh0b2tlbiAmJiB1c2VySWQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy50b2tlbiA9IHRva2VuO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygwKTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdyZXRhaWxJZCc6IHJldGFpbElkLFxyXG4gICAgICAgICAgICAncmVnaW9uQ29kZSc6IHN0Yk51bGwuZ2V0UmVnaW9uQ29kZSgpLFxyXG4gICAgICAgICAgICAnY2FyZFRWJzogc3RiTnVsbC5nZXRDYXJkVFYoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3VzZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG5cclxuICAgICAgICBjb25zdCBvd25lciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8nKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZW5kKGJvZHlJbiwgZnVuY3Rpb24gKGJvZHlPdXQpIHtcclxuICAgICAgICAgICAgaWYgKGJvZHlPdXQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBiaXpPdXQgPSBKU09OLnBhcnNlKGJvZHlPdXQuYml6Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBvd25lci51c2VySWQgPSBiaXpPdXQudXNlcklkO1xyXG4gICAgICAgICAgICAgICAgb3duZXIudG9rZW4gPSBib2R5T3V0LnRva2VuO1xyXG4gICAgICAgICAgICAgICAgc3RiTnVsbC5zZXRWYWx1ZSgndG9vZG8udXNlcklkJywgb3duZXIudXNlcklkKTtcclxuICAgICAgICAgICAgICAgIHN0Yk51bGwuc2V0VmFsdWUoJ3Rvb2RvLnRva2VuJywgb3duZXIudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgb3duZXIuaXNSZWFkeSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9vd25lci50ZGVVc2VyKGNhbGxiYWNrKTsvL+i/lOWbnuWkp+WOheeahOi0puWPt+S/oeaBr1xyXG4gICAgICAgICAgICAgICAgb3duZXIudGRlVXNlcihmdW5jdGlvbiAoY29kZSwgYml6KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaXouYml6VXNlciA9IGJpek91dC5iaXpVc2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGNvZGUsIGJpeik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dC5jb2RlLCBib2R5T3V0LnN1YkNvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYml6VXNlcjogZnVuY3Rpb24gKGJpekluLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL2JpelVzZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIGFkZFdpbm5lcjogZnVuY3Rpb24gKHByaXplSUQsc3RhdGUsY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ3ByaXplSUQnOnByaXplSUQsXHJcbiAgICAgICAgICAgICdzdGF0ZSc6c3RhdGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvYWRkV2lubmVyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbixjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgYWRkU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvYWRkU3RhdGUnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGFGcmVlU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvdXBkYXRhRnJlZVN0YXRlJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbik7XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJpemU6IGZ1bmN0aW9uIChpZCxjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnaWQnOmlkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvZ2V0UHJpemUnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICB0dXJudGFibGVTdGF0ZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3R1cm50YWJsZVN0YXRlJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICAvLyBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIHR1cm50YWJsZVBybzogZnVuY3Rpb24gKHR5cGUsY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICd0eXBlJzp0eXBlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvdHVybnRhYmxlUHJvJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIHByaXplTnVtOmZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS90dXJudGFibGVQcml6ZU51bSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcblxyXG4gICAgd2lubmVySW5mbzogZnVuY3Rpb24gKG51bSxjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnbnVtJzogbnVtXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvd2lubmVySW5mbyc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIDHvvJrmnKrpooblj5YgMjrlt7Lpooblj5YgM++8muW3sui/h+acn1xyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgdXNlcldpbm5lcjogZnVuY3Rpb24gKHR5cGUsY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ3R5cGUnOiB0eXBlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvdXNlcldpbm5lcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIGFkZENvaW5zOiBmdW5jdGlvbiAoYWRkTnVtKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdhZGROdW4nOiBhZGROdW1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9hZGRDb2luJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbik7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvZHVjdElkIOafpeivoueahOS6p+WTgee7n+S4gOe8luWPt1xyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGNhbGxiYWNrLmJpelxyXG4gICAgICovXHJcbiAgICBxdWVyeVNlcnZlMTogZnVuY3Rpb24gKHByb2R1Y3RJZCwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ3Byb2R1Y3RJZCc6IHByb2R1Y3RJZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vc2VydmUvcXVlcnkxJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby9zZXJ2ZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9kdWN0SWQg5p+l6K+i55qE5Lqn5ZOB57uf5LiA57yW5Y+3XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXpcclxuICAgICAqL1xyXG4gICAgcXVlcnlQcm9kdWN0MTogZnVuY3Rpb24gKHByb2R1Y3RJZCwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ3Byb2R1Y3RJZCc6IHByb2R1Y3RJZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vbWFya2V0L3F1ZXJ5MSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vbWFya2V0Jyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2R1Y3RJZCDnlJ/miJDorqLljZXnmoTkuqflk4Hnu5/kuIDnvJblj7dcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYWxsYmFja1VybCDmlK/ku5jlkI7lm57osIPlnLDlnYBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIOWOn+agt+S8oOWbnue7mWNhbGxiYWNrVXJsXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGVcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXpcclxuICAgICAqL1xyXG4gICAgb3JkZXIxOiBmdW5jdGlvbiAocHJvZHVjdElkLCBjYWxsYmFja1VybCwgZGF0YSwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ3Byb2R1Y3RJZCc6IHByb2R1Y3RJZCxcclxuICAgICAgICAgICAgJ3VzZXJJZCc6IHRoaXMudXNlcklkLFxyXG4gICAgICAgICAgICAnY2FsbGJhY2tVcmwnOiBjYWxsYmFja1VybCxcclxuICAgICAgICAgICAgJ2RhdGEnOiBkYXRhXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90cmFkZS9vcmRlcjEnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RyYWRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRyYWRlTm8g6K+35rGC5pSv5LuY6K6i5Y2V5Y+3XHJcbiAgICAgKi9cclxuICAgIHBheTogZnVuY3Rpb24gKHRyYWRlTm8pIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ3RyYWRlTm8nOiB0cmFkZU5vXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90cmFkZS9wYXknO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RyYWRlJyk7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc3VibWl0KGJvZHlJbik7XHJcbiAgICB9LFxyXG4gICAgYmlsbDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdHJhZGUvYmlsbCc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSAnJztcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90cmFkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6LSm5Y+35L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkZVVzZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS91c2VyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICB0ZGVMb2NrOiBmdW5jdGlvbiAob2xkTG9jaywgbmV3TG9jaywgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ2NoaWxkTG9jayc6IG9sZExvY2ssXHJcbiAgICAgICAgICAgICduZXdMb2NrJzogbmV3TG9ja1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2xvY2snO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlIOmhtemdoue8luWPt1xyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpeiDov5Tlm57pobXpnaLkv6Hmga9cclxuICAgICAqL1xyXG4gICAgdGRlUGFnZTogZnVuY3Rpb24gKHBhZ2UsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwYWdlJzogcGFnZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3BhZ2UnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYXRlZ29yeSDmrYzmm7LliIbnsbtcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkYVNvbmc6IGZ1bmN0aW9uIChjYXRlZ29yeSwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ2NhdGVnb3J5JzogY2F0ZWdvcnlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkYS9zb25nJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGEnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgdGRhU29uZzE6IGZ1bmN0aW9uIChzb25nSWQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdzb25nSWQnOiBzb25nSWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkYS9zb25nMSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpeiDov5Tlm57pobXpnaLkv6Hmga9cclxuICAgICAqL1xyXG4gICAgdGRhTWF0Y2g6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkYS9tYXRjaCc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSAnJztcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGEnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnumhtemdouS/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGFVc2VyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvdXNlcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSAnJztcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGEnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkIOiusOW9lVxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpeiDov5Tlm57pobXpnaLkv6Hmga9cclxuICAgICAqL1xyXG4gICAgdGRhUmVjb3JkOiBmdW5jdGlvbiAocmVjb3JkLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkYS9yZWNvcmQnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkocmVjb3JkKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGEnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3RCb2R5fSBib2R5SW5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fG51bWJlcnxzdHJpbmd9IGNhbGxiYWNrLmJpeiDov5Tlm57mlbDmja5cclxuICAgICAqL1xyXG4gICAgc2VuZDogZnVuY3Rpb24gKGJvZHlJbiwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBvd25lciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2VuZChib2R5SW4sIGZ1bmN0aW9uIChib2R5T3V0KSB7XHJcbiAgICAgICAgICAgIGlmIChib2R5T3V0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJpek91dCA9IEpTT04ucGFyc2UoYm9keU91dC5iaXpDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChib2R5T3V0LnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIudG9rZW4gPSBib2R5T3V0LnRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0Yk51bGwuc2V0VmFsdWUoJ3Rvb2RvLnRva2VuJywgb3duZXIudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgYWxlcnQodHlwZW9mIDEpOyAgICAgICAgICAgICAgICAvLyDov5Tlm57lrZfnrKbkuLJcIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgYWxlcnQodHlwZW9mIFwiMVwiKTsgICAgICAgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgdHJ1ZSk7ICAgICAgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwiYm9vbGVhblwiXHJcbiAgICAgICAgICAgICAgICAgYWxlcnQodHlwZW9mIHt9KTsgICAgICAgICAgICAgICAvLyDov5Tlm57lrZfnrKbkuLJcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgYWxlcnQodHlwZW9mIFtdKTsgICAgICAgICAgICAgICAvLyDov5Tlm57lrZfnrKbkuLJcIm9iamVjdCBcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiBmdW5jdGlvbigpe30pOyAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJmdW5jdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgYWxlcnQodHlwZW9mIG51bGwpOyAgICAgICAgICAgICAvLyDov5Tlm57lrZfnrKbkuLJcIm9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgYWxlcnQodHlwZW9mIHVuZGVmaW5lZCk7ICAgICAgICAvLyDov5Tlm57lrZfnrKbkuLJcInVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgIGlmIChiaXpPdXQgJiYgdHlwZW9mKGJpek91dCkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYml6T3V0LnN0YmNsaSA9IG93bmVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0LmNvZGUsIGJpek91dCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQuY29kZSwgYm9keU91dC5zdWJDb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbnZhciBzdGJjbGkgPSBuZXcgU3RiQ2xpZW50KCk7XHJcbmV4cG9ydCB7U3RiQ2xpZW50LHN0YmNsaX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19zdGJjbGkuanMiLCJpbXBvcnQge3JldGFpbElkLHJldGFpbH0gZnJvbSBcIi4vX3JldGFpbFwiO1xyXG5cclxuZnVuY3Rpb24gU3RiTnVsbCgpIHtcclxufVxyXG5pZiAocmV0YWlsSWQgPT0gcmV0YWlsLmd4Z2QpIHsvLyDlub/opb/lub/nlLUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgU3RiTnVsbC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgLy/ojrflj5bmnLrpobbnm5Llj7flrZfnrKbkuLJcclxuICAgICAgICBnZXRDYXJkVFY6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGd1YW5neGkuZ2V0U3RiTnVtKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+iOt+WPluWMuuWfn+eggeW4uOaVsFxyXG4gICAgICAgIGdldFJlZ2lvbkNvZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlQYW5lbC5nZXRHbG9iYWxWYXIoXCJHRVRfTUVESUFfUkVHSU9OX0lEXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gaVBhbmVsLmdldEdsb2JhbFZhcihrZXlOYW1lKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFDb29raWUgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYUNvb2tpZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhQ3J1bWIgPSBhQ29va2llW2ldLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXNjYXBlKGtleU5hbWUpID09IGFDcnVtYlswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB1bmVzY2FwZShhQ3J1bWJbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQgfHwgcmVzdWx0ID09IFwiI1wiIHx8IHJlc3VsdCA9PSBcImNsZWFyVmFsdWVcIikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lLCBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5VmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAga2V5VmFsdWUgPSBcImNsZWFyVmFsdWVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaVBhbmVsLnNldEdsb2JhbFZhcihrZXlOYW1lLCBrZXlWYWx1ZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGVzY2FwZShrZXlOYW1lKSArIFwiPVwiICsgZXNjYXBlKGtleVZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0gZWxzZSBpZiAocmV0YWlsSWQgPT0gcmV0YWlsLmhueXgpIHsvLyDmsrPljZfmnInnur8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgdmFyIFN5c3RlbSA9IHdpbmRvdy5TeXN0ZW07XHJcbiAgICBTdGJOdWxsLnByb3RvdHlwZSA9IHtcclxuICAgICAgICBnZXRDYXJkVFY6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFN5c3RlbS5zdGJJRDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFJlZ2lvbkNvZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlZ2lvbiA9ICdobnl4JztcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlZ2lvbiA9IFN5c3RlbS5HZXRDQVJlZ2lvbklEKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVnaW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIGcgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IG5ldyBHbG9iYWwoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBuZXcgR2xvYmFsMihrZXlOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIGcgPSB7dmFsdWU6IG51bGx9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBnLnZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lLCBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgZyA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBnID0gbmV3IEdsb2JhbChrZXlOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IG5ldyBHbG9iYWwyKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGcudmFsdWUgPSBrZXlWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IGVsc2UgaWYgKHJldGFpbElkID09IHJldGFpbC5nZGdkKSB7Ly8g5bm/5Lic5bm/55S1ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFN0Yk51bGwucHJvdG90eXBlID0ge1xyXG4gICAgICAgIGdldENhcmRUVjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIUNBLmljTm8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnOTY5NTYxMDA4Nic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIENBLmljTm87XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRSZWdpb25Db2RlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDQS5yZWdpb25Db2RlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTeXNTZXR0aW5nLmdldEVudihrZXlOYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSwga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgU3lzU2V0dGluZy5zZXRFbnYoa2V5TmFtZSwga2V5VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0gZWxzZSB7XHJcbiAgICBTdGJOdWxsLnByb3RvdHlwZSA9IHtcclxuICAgICAgICBnZXRDYXJkVFY6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcxMDA4Nic7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRSZWdpb25Db2RlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnMCc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgICAgICAgICBjb25zdCBhQ29va2llID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYUNvb2tpZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYUNydW1iID0gYUNvb2tpZVtpXS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXNjYXBlKGtleU5hbWUpID09IGFDcnVtYlswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHVuZXNjYXBlKGFDcnVtYlsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSwga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gZXNjYXBlKGtleU5hbWUpICsgXCI9XCIgKyBlc2NhcGUoa2V5VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbnZhciBzdGJOdWxsID0gbmV3IFN0Yk51bGwoKTtcclxuZXhwb3J0IHtTdGJOdWxsLHN0Yk51bGx9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fc3RibnVsbC5qcyIsInZhciBtZDUgPSByZXF1aXJlKCdtZDUnKTtcclxudmFyIEpTT04gPSByZXF1aXJlKCdKU09OJyk7XHJcblxyXG5pZiAoIURhdGUucHJvdG90eXBlLmZvcm1hdCkge1xyXG4gICAgRGF0ZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKGZtdCkge1xyXG4gICAgICAgIGNvbnN0IG8gPSB7XHJcbiAgICAgICAgICAgIFwiTStcIjogdGhpcy5nZXRNb250aCgpICsgMSwgICAgICAgICAgICAgICAgIC8v5pyI5Lu9XHJcbiAgICAgICAgICAgIFwiZCtcIjogdGhpcy5nZXREYXRlKCksICAgICAgICAgICAgICAgICAgICAvL+aXpVxyXG4gICAgICAgICAgICBcImgrXCI6IHRoaXMuZ2V0SG91cnMoKSwgICAgICAgICAgICAgICAgICAgLy/lsI/ml7ZcclxuICAgICAgICAgICAgXCJtK1wiOiB0aGlzLmdldE1pbnV0ZXMoKSwgICAgICAgICAgICAgICAgIC8v5YiGXHJcbiAgICAgICAgICAgIFwicytcIjogdGhpcy5nZXRTZWNvbmRzKCksICAgICAgICAgICAgICAgICAvL+enklxyXG4gICAgICAgICAgICBcInErXCI6IE1hdGguZmxvb3IoKHRoaXMuZ2V0TW9udGgoKSArIDMpIC8gMyksIC8v5a2j5bqmXHJcbiAgICAgICAgICAgIFwiU1wiOiB0aGlzLmdldE1pbGxpc2Vjb25kcygpICAgICAgICAgICAgIC8v5q+r56eSXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoLyh5KykvLnRlc3QoZm10KSkge1xyXG4gICAgICAgICAgICBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsICh0aGlzLmdldEZ1bGxZZWFyKCkgKyBcIlwiKS5zdWJzdHIoNCAtIFJlZ0V4cC4kMS5sZW5ndGgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgayBpbiBvKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKFwiKFwiICsgayArIFwiKVwiKS50ZXN0KGZtdCkpIHtcclxuICAgICAgICAgICAgICAgIGZtdCA9IGZtdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKFJlZ0V4cC4kMS5sZW5ndGggPT0gMSkgPyAob1trXSkgOiAoKFwiMDBcIiArIG9ba10pLnN1YnN0cigoXCJcIiArIG9ba10pLmxlbmd0aCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm10O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVxdWVzdEJvZHkoKSB7XHJcbiAgICB0aGlzLmFwcElkID0gJyc7ICAgICAgICAgICAgICAgLy8g5YiG6YWN57uZ5byA5Y+R6ICF55qE5bqU55SoSUQ6MTAwMFxyXG4gICAgdGhpcy5tZXRob2QgPSAnJzsgICAgICAgICAgICAgIC8vIOaOpeWPo+WQjeensDp0b29kby50cmFkZS5wYXlcclxuICAgIHRoaXMuZm9ybWF0ID0gJ0pTT04nOyAgICAgICAgICAvLyDku4XmlK/mjIFKU09OXHJcbiAgICB0aGlzLmNoYXJzZXQgPSAndXRmLTgnOyAgICAgICAgLy8g6K+35rGC5L2/55So55qE57yW56CB5qC85byP77yM5aaCdXRmLTgsZ2JrLGdiMjMxMuetiVxyXG4gICAgdGhpcy5zaWduVHlwZSA9ICdNRDUnOyAgICAgICAgIC8vIOWVhuaIt+eUn+aIkOetvuWQjeWtl+espuS4suaJgOS9v+eUqOeahOetvuWQjeeul+azleexu+WeizpSU0HjgIFNRDVcclxuICAgIHRoaXMuc2lnbkNvZGUgPSAnJzsgICAgICAgICAgICAvLyDllYbmiLfor7fmsYLlj4LmlbDnmoTnrb7lkI3kuLIgMzLkvY3lsI/lhplcclxuICAgIHRoaXMudGltZXN0YW1wID0gJyc7ICAgICAgICAgICAvLyDlj5HpgIHor7fmsYLnmoTml7bpl7TvvIzmoLzlvI9cInl5eXktTU0tZGQgSEg6bW06c3NcIjoyMDE0LTA3LTI0IDAzOjA3OjUwXHJcbiAgICB0aGlzLnZlcnNpb24gPSAnMS4wJzsgICAgICAgICAgLy8g6LCD55So55qE5o6l5Y+j54mI5pys77yM5Zu65a6a5Li677yaMS4wXHJcbiAgICB0aGlzLmFwcEF1dGhUb2tlbiA9ICcnOyAgICAgICAgLy8g5bqU55So5o6I5p2D56CBXHJcbiAgICB0aGlzLmJpekNvbnRlbnQgPSAnJzsgICAgICAgICAgLy8g5Lia5Yqh5Y+C5pWw6ZuG5ZCI77yM5pyA5aSn6ZW/5bqm5LiN6ZmQ77yM6Zmk5YWs5YWx5Y+C5pWw5aSW5omA5pyJ6K+35rGC5Y+C5pWw6YO95b+F6aG75pS+5Zyo6L+Z5Liq5Y+C5pWw5Lit5Lyg6YCS77yM5YW35L2T5Y+C54Wn5ZCE5Lqn5ZOB5b+r6YCf5o6l5YWl5paH5qGjXHJcbn1cclxuUmVxdWVzdEJvZHkucHJvdG90eXBlID0ge1xyXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChqc29uKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgdGhpcy5hcHBJZCA9IGJvZHkuYXBwSWQ7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBib2R5Lm1ldGhvZDtcclxuICAgICAgICB0aGlzLmZvcm1hdCA9IGJvZHkuZm9ybWF0O1xyXG4gICAgICAgIHRoaXMuY2hhcnNldCA9IGJvZHkuY2hhcnNldDtcclxuICAgICAgICB0aGlzLnNpZ25UeXBlID0gYm9keS5zaWduVHlwZTtcclxuICAgICAgICB0aGlzLnNpZ25Db2RlID0gYm9keS5zaWduQ29kZTtcclxuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IGJvZHkudGltZXN0YW1wO1xyXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IGJvZHkudmVyc2lvbjtcclxuICAgICAgICB0aGlzLmFwcEF1dGhUb2tlbiA9IGJvZHkuYXBwQXV0aFRva2VuO1xyXG4gICAgICAgIHRoaXMuYml6Q29udGVudCA9IGJvZHkuYml6Q29udGVudDtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXNwb25zZUJvZHkoKSB7XHJcbiAgICB0aGlzLmNvZGUgPSAwOyAgICAgICAvLyDnvZHlhbPov5Tlm57noIFcclxuICAgIHRoaXMubXNnID0gJ+iwg+eUqOaIkOWKnyc7IC8vIOe9keWFs+i/lOWbnueggeaPj+i/sFxyXG4gICAgdGhpcy5zdWJDb2RlID0gJyc7ICAgLy8g5Lia5Yqh6L+U5Zue56CBLOivpuingeaWh+ahozp4eHh4XHJcbiAgICB0aGlzLnN1Yk1zZyA9ICcnOyAgICAvLyDkuJrliqHov5Tlm57noIHmj4/ov7As6K+m6KeB5paH5qGjOuS6pOaYk+W3suiiq+aUr+S7mFxyXG4gICAgdGhpcy50aW1lc3RhbXAgPSAnJzsgLy8g5bqU562U55qE5pe26Ze0XHJcbiAgICB0aGlzLnNpZ24gPSAnJzsgICAgICAvLyDnrb7lkI0s6K+m6KeB5paH5qGjIDMy5L2N5bCP5YaZXHJcbiAgICB0aGlzLmJpekNvbnRlbnQgPSAnJzsvLyDkuJrliqHlj4LmlbDpm4blkIjvvIzmnIDlpKfplb/luqbkuI3pmZDvvIzpmaTlhazlhbHlj4LmlbDlpJbmiYDmnInov5Tlm57lj4LmlbDpg73lv4XpobvmlL7lnKjov5nkuKrlj4LmlbDkuK3kvKDpgJLvvIzlhbfkvZPlj4LnhaflkITkuqflk4Hlv6vpgJ/mjqXlhaXmlofmoaNcclxuICAgIHRoaXMudG9rZW4gPSAnJzsgICAgIC8vIOabtOaWsOWQjueahOaOiOadg+eggSzkuLrnqbrliJnkuI3mm7TmlrBcclxufVxyXG5SZXNwb25zZUJvZHkucHJvdG90eXBlID0ge1xyXG4gICAgcGFyc2U6IGZ1bmN0aW9uIChqc29uKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04ucGFyc2UoanNvbik7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gYm9keS5jb2RlO1xyXG4gICAgICAgIHRoaXMubXNnID0gYm9keS5tc2c7XHJcbiAgICAgICAgdGhpcy5zdWJDb2RlID0gYm9keS5zdWJDb2RlO1xyXG4gICAgICAgIHRoaXMuc3ViTXNnID0gYm9keS5zdWJNc2c7XHJcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBib2R5LnRpbWVzdGFtcDtcclxuICAgICAgICB0aGlzLnNpZ24gPSBib2R5LnNpZ247XHJcbiAgICAgICAgdGhpcy5iaXpDb250ZW50ID0gYm9keS5iaXpDb250ZW50O1xyXG4gICAgICAgIHRoaXMudG9rZW4gPSBib2R5LnRva2VuO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRvb2RvQ2xpZW50KGFwcElkLCBhcHBTZWNyZXQsIGFwaVVybCkge1xyXG4gICAgdGhpcy5zdGFydChhcHBJZCwgYXBwU2VjcmV0LCBhcGlVcmwpO1xyXG4gICAgdGhpcy5pc0J1c3kgPSBmYWxzZTtcclxufVxyXG5cclxuVG9vZG9DbGllbnQucHJvdG90eXBlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwSWRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBTZWNyZXRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcGlVcmxcclxuICAgICAqL1xyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChhcHBJZCwgYXBwU2VjcmV0LCBhcGlVcmwpIHtcclxuICAgICAgICB0aGlzLmFwcElkID0gYXBwSWQ7XHJcbiAgICAgICAgdGhpcy5hcHBTZWNyZXQgPSBhcHBTZWNyZXQ7XHJcbiAgICAgICAgdGhpcy5hcGlVcmwgPSBhcGlVcmw7XHJcbiAgICAgICAgdGhpcy50b2tlbiA9ICcnO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0Qm9keX0gYm9keUluXHJcbiAgICAgKi9cclxuICAgIHNpZ25Db2RlSW46IGZ1bmN0aW9uIChib2R5SW4pIHtcclxuICAgICAgICBjb25zdCBzdHIgPSAnJyArXHJcbiAgICAgICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gK1xyXG4gICAgICAgICAgICBib2R5SW4uYXBwSWQgK1xyXG4gICAgICAgICAgICBib2R5SW4uYml6Q29udGVudCArXHJcbiAgICAgICAgICAgIGJvZHlJbi5jaGFyc2V0ICtcclxuICAgICAgICAgICAgYm9keUluLmZvcm1hdCArXHJcbiAgICAgICAgICAgIGJvZHlJbi5tZXRob2QgK1xyXG4gICAgICAgICAgICBib2R5SW4udGltZXN0YW1wICtcclxuICAgICAgICAgICAgYm9keUluLnZlcnNpb24gK1xyXG4gICAgICAgICAgICB0aGlzLmFwcFNlY3JldDtcclxuICAgICAgICByZXR1cm4gbWQ1KHN0cik7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge1Jlc3BvbnNlQm9keX0gYm9keU91dFxyXG4gICAgICovXHJcbiAgICBzaWduQ29kZU91dDogZnVuY3Rpb24gKGJvZHlPdXQpIHtcclxuICAgICAgICBpZihib2R5T3V0LnRva2VuPT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBib2R5T3V0LnRva2VuPVwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0ciA9ICcnICtcclxuICAgICAgICAgICAgYm9keU91dC5iaXpDb250ZW50ICtcclxuICAgICAgICAgICAgYm9keU91dC5jb2RlICtcclxuICAgICAgICAgICAgYm9keU91dC5tc2cgK1xyXG4gICAgICAgICAgICBib2R5T3V0LnN1YkNvZGUgK1xyXG4gICAgICAgICAgICBib2R5T3V0LnN1Yk1zZyArXHJcbiAgICAgICAgICAgIGJvZHlPdXQudGltZXN0YW1wICtcclxuICAgICAgICAgICAgYm9keU91dC50b2tlbiArXHJcbiAgICAgICAgICAgIHRoaXMuYXBwU2VjcmV0O1xyXG4gICAgICAgIHJldHVybiBtZDUoc3RyKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcGlVcmxcclxuICAgICAqL1xyXG4gICAgc2V0QXBpVXJsOiBmdW5jdGlvbiAoYXBpVXJsKSB7XHJcbiAgICAgICAgdGhpcy5hcGlVcmwgPSBhcGlVcmw7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3RCb2R5fSBib2R5SW5cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge1Jlc3BvbnNlQm9keX0gY2FsbGJhY2suYm9keU91dFxyXG4gICAgICovXHJcbiAgICBzZW5kOiBmdW5jdGlvbiAoYm9keUluLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlPdXQgPSBuZXcgUmVzcG9uc2VCb2R5KCk7XHJcbiAgICAgICAgaWYgKCFYTUxIdHRwUmVxdWVzdCkge1xyXG4gICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzEwNSc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnID0gJ1hNTEh0dHBSZXF1ZXN05a+56LGh5LiN5a2Y5ZyoJztcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNCdXN5KSB7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICBib2R5T3V0Lm1zZyA9ICflrqLmiLfnq6/plJnor68nO1xyXG4gICAgICAgICAgICBib2R5T3V0LnN1YkNvZGUgPSAnOTknO1xyXG4gICAgICAgICAgICBib2R5T3V0LnN1Yk1zZyA9ICflvojlv5nlk6bvvIzor7fmsYLpmJ/liJflt7Lmu6EnO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzQnVzeSA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICBpZiAoYm9keUluLmFwcEF1dGhUb2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLnRva2VuID0gYm9keUluLmFwcEF1dGhUb2tlbjtcclxuICAgICAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYm9keUluLmFwcElkID0gdGhpcy5hcHBJZDtcclxuICAgICAgICBib2R5SW4udGltZXN0YW1wID0gbmV3IERhdGUoKS5mb3JtYXQoXCJ5eXl5LU1NLWRkIGhoOm1tOnNzXCIpO1xyXG4gICAgICAgIGJvZHlJbi5zaWduQ29kZSA9IHRoaXMuc2lnbkNvZGVJbihib2R5SW4pO1xyXG5cclxuICAgICAgICBjb25zdCB4bWwgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICBjb25zdCBvd25lciA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgeG1sLmFib3J0KCk7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICBib2R5T3V0Lm1zZyA9ICflrqLmiLfnq6/plJnor68nO1xyXG4gICAgICAgICAgICBib2R5T3V0LnN1YkNvZGUgPSAnMTAzJztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn6K+35rGC6LaF5pe2JztcclxuXHJcbiAgICAgICAgICAgIG93bmVyLmlzQnVzeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQpO1xyXG4gICAgICAgIH0sIDEwMDAwKTtcclxuXHJcbiAgICAgICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhtbC5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGVUaW1lb3V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoeG1sLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnBhcnNlKHhtbC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keU91dC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1kNSA9IG93bmVyLnNpZ25Db2RlT3V0KGJvZHlPdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1kNSAhPSBib2R5T3V0LnNpZ24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0Lm1zZyA9ICflrqLmiLfnq6/plJnor68nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSA9ICcxMDInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnID0gJ+i/lOWbnue7k+aenOetvuWQjeWHuumUmSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9keU91dC50aW1lc3RhbXAgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnNpZ24gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LmJpekNvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnRva2VuID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2R5T3V0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHlPdXQudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lci50b2tlbiA9IGJvZHlPdXQudG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSA9ICcxMDEnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnN1Yk1zZyA9ICfov5Tlm57nu5PmnpzlvILluLggZXJyOicgKyBlcnI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnN1YkNvZGUgPSAnMTA0JztcclxuICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnN1Yk1zZyA9ICfor7fmsYLov5Tlm57plJnor68nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG93bmVyLmlzQnVzeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdG9rZW5VcmwgPSB0aGlzLmFwaVVybCArICc/dG9rZW49JyArIHRoaXMudG9rZW47XHJcbiAgICAgICAgeG1sLm9wZW4oJ1BPU1QnLCB0b2tlblVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04Jyk7XHJcbiAgICAgICAgeG1sLnNlbmQoSlNPTi5zdHJpbmdpZnkoYm9keUluKSk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3RCb2R5fSBib2R5SW5cclxuICAgICAqL1xyXG4gICAgc3VibWl0OiBmdW5jdGlvbiAoYm9keUluKSB7XHJcbiAgICAgICAgYm9keUluLmFwcElkID0gdGhpcy5hcHBJZDtcclxuICAgICAgICBib2R5SW4udGltZXN0YW1wID0gbmV3IERhdGUoKS5mb3JtYXQoXCJ5eXl5LU1NLWRkIGhoOm1tOnNzXCIpO1xyXG4gICAgICAgIGJvZHlJbi5zaWduQ29kZSA9IHRoaXMuc2lnbkNvZGVJbihib2R5SW4pO1xyXG5cclxuICAgICAgICBjb25zdCBmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGJvZHlJbikge1xyXG4gICAgICAgICAgICAvL25vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3BcclxuICAgICAgICAgICAgaWYgKHR5cGVvZihib2R5SW5ba2V5XSkgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgZWkudHlwZSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICBlaS5uYW1lID0ga2V5O1xyXG4gICAgICAgICAgICAvL25vaW5zcGVjdGlvbiBKU1VuZmlsdGVyZWRGb3JJbkxvb3BcclxuICAgICAgICAgICAgZWkudmFsdWUgPSBib2R5SW5ba2V5XTtcclxuICAgICAgICAgICAgZi5hcHBlbmRDaGlsZChlaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmLm1ldGhvZCA9ICdwb3N0JztcclxuICAgICAgICBmLmFjdGlvbiA9IHRoaXMuYXBpVXJsO1xyXG4gICAgICAgIGYuc3VibWl0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChmKTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fdGRjbGkuanMiXSwic291cmNlUm9vdCI6IiJ9