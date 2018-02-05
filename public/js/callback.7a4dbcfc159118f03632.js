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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ "./resources/assets/js/app/dialogQr.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PageUrl__ = __webpack_require__("./resources/assets/js/app/PageUrl.js");



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
    var imgSrc = arguments[6] ? arguments[6] : '';

    var layout = document.getElementById(layoutId);
    if (!layout) {
        layout = document.createElement("div");
        layout.className = 'dialog-layout';
        layout.id = layoutId;
        layout.innerHTML = '<div class="dialog-bg">' + '    <div class="dialog-title"></div>' + '    <img class="dialog-qr-img">' + '    <div class="dialog-qr-text"></div>' + '    <div id="dialog-btn0" style="left: 12%;top: 73%" class="dialog-btn dialog-btn0"></div>' + '    <div id="dialog-btn1" style="left: 57%;top: 73%" class="dialog-btn dialog-btn1"></div>' + '</div>';
        document.body.appendChild(layout);
    }
    layout.style.display = "block";

    var background = layout.querySelector('.dialog-bg');
    background.style.display = "block";

    var qrImg = background.querySelector('.dialog-qr-img');
    qrImg.src = imgSrc;

    var nodeTitle = background.querySelector('.dialog-title');
    nodeTitle.innerHTML = title;
    var nodeText = background.querySelector('.dialog-qr-text');
    nodeText.innerHTML = text;

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

/***/ "./resources/assets/js/callback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_PageUrl__ = __webpack_require__("./resources/assets/js/app/PageUrl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_PageArgs__ = __webpack_require__("./resources/assets/js/app/PageArgs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_dialogQr__ = __webpack_require__("./resources/assets/js/app/dialogQr.js");



var args = __WEBPACK_IMPORTED_MODULE_0__app_PageUrl__["a" /* pageUrl */].parseQuery(window.location.search);

if (args.code == 0) {
    var data = JSON.parse(args.data);
    var flag = __WEBPACK_IMPORTED_MODULE_1__app_PageArgs__["a" /* turnTableArgs */].getCallFlag();
    __WEBPACK_IMPORTED_MODULE_1__app_PageArgs__["a" /* turnTableArgs */].setSuccessCode(1);
    //! 复合产品、跳舞毯
    if (data.complex == 1 || data.prodId == 5 || flag == 1) {
        var imgSrc = args.qrImg;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__app_dialogQr__["a" /* showDialog */])(function (btn) {
            if (btn == 0) {
                window.location.href = __WEBPACK_IMPORTED_MODULE_1__app_PageArgs__["c" /* callbackArgs */].getRedirectUrl();
            } else {
                window.location.href = __WEBPACK_IMPORTED_MODULE_1__app_PageArgs__["c" /* callbackArgs */].getReturnUrl();
            }
        }, 0, '填写信息', '扫 <span style="color: red">二维码</span> 或拨打客服电话 <span style="color: red">400-668-2886</span> 填写收货信息！', '完成', '返回', imgSrc);
    } else {
        __WEBPACK_IMPORTED_MODULE_1__app_PageArgs__["a" /* turnTableArgs */].setPrizeID(-1);
        window.location.href = __WEBPACK_IMPORTED_MODULE_1__app_PageArgs__["c" /* callbackArgs */].getRedirectUrl();
    }
} else {
    __WEBPACK_IMPORTED_MODULE_1__app_PageArgs__["a" /* turnTableArgs */].setPrizeID(-1);
    window.location.href = __WEBPACK_IMPORTED_MODULE_1__app_PageArgs__["c" /* callbackArgs */].getReturnUrl();
}

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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/callback.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWM5ZGYyNTE1YTkxYWUzNmIyZjE/ODU5MSoqKioqKiIsIndlYnBhY2s6Ly8vLi9+L19KU09OQDEuMC4wQEpTT04vanNvbjIuanM/MjlmOSoqKioqKiIsIndlYnBhY2s6Ly8vLi9+L19jaGFyZW5jQDAuMC4yQGNoYXJlbmMvY2hhcmVuYy5qcz9jOGMxKioqKioqIiwid2VicGFjazovLy8uL34vX2NyeXB0QDAuMC4yQGNyeXB0L2NyeXB0LmpzP2Q5MzQqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9faXMtYnVmZmVyQDEuMS42QGlzLWJ1ZmZlci9pbmRleC5qcz81ZWJhKioqKioqIiwid2VicGFjazovLy8uL34vX21kNUAyLjIuMUBtZDUvbWQ1LmpzPzc5OTcqKioqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUGFnZUFyZ3MuanM/YzdhMioqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9QYWdlVXJsLmpzPzQ1NDkqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvZGlhbG9nUXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19rZXljb2Rlcy5qcz9iOTA4KioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3JldGFpbC5qcz8wZWIzKioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3N0YmNsaS5qcz9mMjU5KioqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3N0Ym51bGwuanM/NDdlNCoqKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL190ZGNsaS5qcz8xOGVmKioqKioqIl0sIm5hbWVzIjpbIlBhZ2VBcmdzIiwicGFnZSIsInByZWZpeCIsInByb3RvdHlwZSIsImdldFZhbHVlIiwiayIsInN0Yk51bGwiLCJzZXRWYWx1ZSIsInYiLCJnZXRSZXR1cm5VcmwiLCJzZXRSZXR1cm5VcmwiLCJ1cmwiLCJnZXRSZWRpcmVjdFVybCIsInNldFJlZGlyZWN0VXJsIiwic2V0Q2FsbEZsYWciLCJudW0iLCJnZXRDYWxsRmxhZyIsInNldFN1Y2Nlc3NDb2RlIiwic3VjY2Vzc0NvZGUiLCJnZXRTdWNjZXNzQ29kZSIsInNldFByaXplSUQiLCJpZCIsImdldFByaXplSUQiLCJnZXRUdXJudGFibGVVcmwiLCJzZXRUdXJudGFibGVVcmwiLCJzaG9wQXJncyIsInJlY2hhcmdlQXJncyIsImNhbGxiYWNrQXJncyIsInR1cm5UYWJsZUFyZ3MiLCJhcHBBcmdzIiwib25GaXJzdFBhZ2UiLCJmaXJzdFVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm9uSG9tZVBhZ2UiLCJob21lVXJsIiwib25UdXJudGFibGVQYWdlIiwiVHVybnRhYmxlVXJsIiwiUGFnZVVybCIsInBhcnNlUXVlcnkiLCJxdWVyeSIsInN0YXJ0IiwiaW5kZXhPZiIsInNsaWNlIiwiYXJncyIsImFyciIsInNwbGl0IiwibSIsImxlbmd0aCIsInRtcCIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcnNlQXJncyIsImhhc093blByb3BlcnR5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicHVzaCIsImpvaW4iLCJiYXNlVXJsIiwicHJvdG9jb2wiLCJob3N0IiwiZ2V0VXNlcklkIiwiZ2V0U3RiSWQiLCJnZXRDYXJkVFYiLCJnZXRTaWduS2V5IiwidHMiLCJEYXRlIiwiZ2V0VGltZSIsIm1zZyIsIm1kNSIsInN0YmNsaSIsImdldENoaWxkTG9jayIsInJlY2hhcmdlVXJsIiwiY2FsbFVybCIsIml0ZW0iLCJyZXR1cm5VcmwiLCJnYW1laWQiLCJnYW1lSWQiLCJrZXkiLCJkZXYiLCJmYXRoZXJrZXkiLCJ1c2VySWQiLCJ1c2VyaWQiLCJyZXR1cm5VUkwiLCJob3N0TmFtZSIsImhvc3RuYW1lIiwiZHN0VXJsIiwicmVwbGFjZSIsInBhcmFtcyIsInJlZGlyZWN0VXJsIiwiY2FsbFVybEJhc2UiLCJjYWxsR2FtZSIsImNhbGxHYW1lQmFzZSIsInBhZ2VVcmwiLCJzaG93RGlhbG9nIiwibGF5b3V0SWQiLCJjYWxsYmFjayIsImJ0biIsInRpdGxlIiwidGV4dCIsImJ0bjAiLCJidG4xIiwiYXJndW1lbnRzIiwiaW1nU3JjIiwibGF5b3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kIiwicXVlcnlTZWxlY3RvciIsInFySW1nIiwic3JjIiwibm9kZVRpdGxlIiwibm9kZVRleHQiLCJub2RlQnRuMCIsIm5vZGVCdG4xIiwiYnRuXzAwNiIsImJ0bl8wMDZub25lIiwiZm9jdXNCdG4iLCJidG5JZHgiLCJzdWJtaXQiLCJrZXlDb2RlIiwiZ2V0S2V5Q29kZXMiLCJwcmVDb2RlcyIsImdldENvZGVzIiwib25rZXlkb3duIiwiZSIsImdldEV2ZW50IiwiY3VyS2V5IiwiZ2V0S2V5IiwicHJldmVudERlZmF1bHQiLCJsZWZ0IiwicmlnaHQiLCJvayIsImJhY2siLCJudW0wIiwic2VhcmNoIiwiY29kZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJmbGFnIiwiY29tcGxleCIsInByb2RJZCIsImtleU1hcCIsInJldGFpbElkIiwicmV0YWlsIiwiZ3hnZCIsInVwIiwiZG93biIsImYxIiwiZjIiLCJmMyIsImY0IiwibnVtMSIsIm51bTIiLCJudW0zIiwibnVtNCIsIm51bTUiLCJudW02IiwibnVtNyIsIm51bTgiLCJudW05IiwibXV0ZSIsInRyYWNrIiwidm9sVXAiLCJ2b2xEb3duIiwiZmF2IiwicGxheUJhY2siLCJwYWdlVXAiLCJwYWdlRG93biIsIm1lbnUiLCJlc2MiLCJob21lIiwiaG55eCIsImdkZ2QiLCJldnQiLCJldmVudCIsIndoaWNoIiwiY2hhckNvZGUiLCJjb2RlcyIsIm5vbmUiLCJnZXRSZXRhaWxJZCIsImd1YW5neGkiLCJpUGFuZWwiLCJTeXN0ZW0iLCJzdGJJRCIsIkNBIiwiU3RvcmFnZVNlcnZpY2UiLCJGaWxlU3lzdGVtIiwicmVxdWlyZSIsIlN0YkNsaWVudCIsIm9yaWdpblVybCIsImFwcEtleSIsImFwcFNlY3JldCIsIl90ZGNsaSIsImlzUmVhZHkiLCJ0b2tlbiIsImJpekluIiwiZ2V0UmVnaW9uQ29kZSIsImJvZHlJbiIsIm1ldGhvZCIsImFwcEF1dGhUb2tlbiIsImJpekNvbnRlbnQiLCJzdHJpbmdpZnkiLCJvd25lciIsInNldEFwaVVybCIsInNlbmQiLCJib2R5T3V0IiwiYml6T3V0IiwidGRlVXNlciIsImJpeiIsImJpelVzZXIiLCJzdWJDb2RlIiwiYWRkV2lubmVyIiwicHJpemVJRCIsInN0YXRlIiwiYWRkU3RhdGUiLCJ1cGRhdGFGcmVlU3RhdGUiLCJnZXRQcml6ZSIsInR1cm50YWJsZVN0YXRlIiwidHVybnRhYmxlUHJvIiwidHlwZSIsInByaXplTnVtIiwid2lubmVySW5mbyIsInVzZXJXaW5uZXIiLCJhZGRDb2lucyIsImFkZE51bSIsInF1ZXJ5U2VydmUxIiwicHJvZHVjdElkIiwicXVlcnlQcm9kdWN0MSIsIm9yZGVyMSIsImNhbGxiYWNrVXJsIiwicGF5IiwidHJhZGVObyIsImJpbGwiLCJ0ZGVMb2NrIiwib2xkTG9jayIsIm5ld0xvY2siLCJ0ZGVQYWdlIiwidGRhU29uZyIsImNhdGVnb3J5IiwidGRhU29uZzEiLCJzb25nSWQiLCJ0ZGFNYXRjaCIsInRkYVVzZXIiLCJ0ZGFSZWNvcmQiLCJyZWNvcmQiLCJTdGJOdWxsIiwiZ2V0U3RiTnVtIiwiZ2V0R2xvYmFsVmFyIiwia2V5TmFtZSIsInJlc3VsdCIsImFDb29raWUiLCJjb29raWUiLCJpIiwiYUNydW1iIiwiZXNjYXBlIiwidW5lc2NhcGUiLCJrZXlWYWx1ZSIsInNldEdsb2JhbFZhciIsInJlZ2lvbiIsIkdldENBUmVnaW9uSUQiLCJnIiwiR2xvYmFsIiwiR2xvYmFsMiIsInZhbHVlIiwiaWNObyIsInJlZ2lvbkNvZGUiLCJTeXNTZXR0aW5nIiwiZ2V0RW52Iiwic2V0RW52IiwiZm9ybWF0IiwiZm10IiwibyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJnZXRNaWxsaXNlY29uZHMiLCJ0ZXN0IiwiUmVnRXhwIiwiJDEiLCJnZXRGdWxsWWVhciIsInN1YnN0ciIsIlJlcXVlc3RCb2R5IiwiYXBwSWQiLCJjaGFyc2V0Iiwic2lnblR5cGUiLCJzaWduQ29kZSIsInRpbWVzdGFtcCIsInZlcnNpb24iLCJqc29uIiwiUmVzcG9uc2VCb2R5Iiwic3ViTXNnIiwic2lnbiIsIlRvb2RvQ2xpZW50IiwiYXBpVXJsIiwiaXNCdXN5Iiwic2lnbkNvZGVJbiIsInN0ciIsInNpZ25Db2RlT3V0IiwidW5kZWZpbmVkIiwiWE1MSHR0cFJlcXVlc3QiLCJ4bWwiLCJoYW5kbGVUaW1lb3V0Iiwic2V0VGltZW91dCIsImFib3J0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsImNsZWFyVGltZW91dCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsImVyciIsInRva2VuVXJsIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJmIiwiZWkiLCJuYW1lIiwiYWN0aW9uIiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlDQUF5QyxpQkFBaUI7QUFDMUQsOEJBQThCLGtCQUFrQjs7O0FBR2hELHlDQUF5QyxpQkFBaUI7QUFDMUQsc0NBQXNDLDZCQUE2Qjs7QUFFbkU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQyxrQkFBa0Isd0RBQXdEO0FBQzFFLGtCQUFrQiwwQkFBMEI7QUFDNUM7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LFVBQUV4TSxNQUFGO0FBQ0FyQixpQkFBU0ssSUFBVCxDQUFjNE4sV0FBZCxDQUEwQkosQ0FBMUI7QUFDSDtBQXJMbUIsQ0FBeEIsQyIsImZpbGUiOiJqcy9jYWxsYmFjay43YTRkYmNmYzE1OTExOGYwMzYzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWM5ZGYyNTE1YTkxYWUzNmIyZjEiLCIvKlxuICAgIGh0dHA6Ly93d3cuSlNPTi5vcmcvanNvbjIuanNcbiAgICAyMDExLTAyLTIzXG5cbiAgICBQdWJsaWMgRG9tYWluLlxuXG4gICAgTk8gV0FSUkFOVFkgRVhQUkVTU0VEIE9SIElNUExJRUQuIFVTRSBBVCBZT1VSIE9XTiBSSVNLLlxuXG4gICAgU2VlIGh0dHA6Ly93d3cuSlNPTi5vcmcvanMuaHRtbFxuXG5cbiAgICBUaGlzIGNvZGUgc2hvdWxkIGJlIG1pbmlmaWVkIGJlZm9yZSBkZXBsb3ltZW50LlxuICAgIFNlZSBodHRwOi8vamF2YXNjcmlwdC5jcm9ja2ZvcmQuY29tL2pzbWluLmh0bWxcblxuICAgIFVTRSBZT1VSIE9XTiBDT1BZLiBJVCBJUyBFWFRSRU1FTFkgVU5XSVNFIFRPIExPQUQgQ09ERSBGUk9NIFNFUlZFUlMgWU9VIERPXG4gICAgTk9UIENPTlRST0wuXG5cblxuICAgIFRoaXMgZmlsZSBjcmVhdGVzIGEgZ2xvYmFsIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgdHdvIG1ldGhvZHM6IHN0cmluZ2lmeVxuICAgIGFuZCBwYXJzZS5cblxuICAgICAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKVxuICAgICAgICAgICAgdmFsdWUgICAgICAgYW55IEphdmFTY3JpcHQgdmFsdWUsIHVzdWFsbHkgYW4gb2JqZWN0IG9yIGFycmF5LlxuXG4gICAgICAgICAgICByZXBsYWNlciAgICBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBkZXRlcm1pbmVzIGhvdyBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyBhcmUgc3RyaW5naWZpZWQgZm9yIG9iamVjdHMuIEl0IGNhbiBiZSBhXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBvciBhbiBhcnJheSBvZiBzdHJpbmdzLlxuXG4gICAgICAgICAgICBzcGFjZSAgICAgICBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBzcGVjaWZpZXMgdGhlIGluZGVudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvZiBuZXN0ZWQgc3RydWN0dXJlcy4gSWYgaXQgaXMgb21pdHRlZCwgdGhlIHRleHQgd2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgYmUgcGFja2VkIHdpdGhvdXQgZXh0cmEgd2hpdGVzcGFjZS4gSWYgaXQgaXMgYSBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdCB3aWxsIHNwZWNpZnkgdGhlIG51bWJlciBvZiBzcGFjZXMgdG8gaW5kZW50IGF0IGVhY2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsLiBJZiBpdCBpcyBhIHN0cmluZyAoc3VjaCBhcyAnXFx0JyBvciAnJm5ic3A7JyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpdCBjb250YWlucyB0aGUgY2hhcmFjdGVycyB1c2VkIHRvIGluZGVudCBhdCBlYWNoIGxldmVsLlxuXG4gICAgICAgICAgICBUaGlzIG1ldGhvZCBwcm9kdWNlcyBhIEpTT04gdGV4dCBmcm9tIGEgSmF2YVNjcmlwdCB2YWx1ZS5cblxuICAgICAgICAgICAgV2hlbiBhbiBvYmplY3QgdmFsdWUgaXMgZm91bmQsIGlmIHRoZSBvYmplY3QgY29udGFpbnMgYSB0b0pTT05cbiAgICAgICAgICAgIG1ldGhvZCwgaXRzIHRvSlNPTiBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgYW5kIHRoZSByZXN1bHQgd2lsbCBiZVxuICAgICAgICAgICAgc3RyaW5naWZpZWQuIEEgdG9KU09OIG1ldGhvZCBkb2VzIG5vdCBzZXJpYWxpemU6IGl0IHJldHVybnMgdGhlXG4gICAgICAgICAgICB2YWx1ZSByZXByZXNlbnRlZCBieSB0aGUgbmFtZS92YWx1ZSBwYWlyIHRoYXQgc2hvdWxkIGJlIHNlcmlhbGl6ZWQsXG4gICAgICAgICAgICBvciB1bmRlZmluZWQgaWYgbm90aGluZyBzaG91bGQgYmUgc2VyaWFsaXplZC4gVGhlIHRvSlNPTiBtZXRob2RcbiAgICAgICAgICAgIHdpbGwgYmUgcGFzc2VkIHRoZSBrZXkgYXNzb2NpYXRlZCB3aXRoIHRoZSB2YWx1ZSwgYW5kIHRoaXMgd2lsbCBiZVxuICAgICAgICAgICAgYm91bmQgdG8gdGhlIHZhbHVlXG5cbiAgICAgICAgICAgIEZvciBleGFtcGxlLCB0aGlzIHdvdWxkIHNlcmlhbGl6ZSBEYXRlcyBhcyBJU08gc3RyaW5ncy5cblxuICAgICAgICAgICAgICAgIERhdGUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZihuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3JtYXQgaW50ZWdlcnMgdG8gaGF2ZSBhdCBsZWFzdCB0d28gZGlnaXRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4gOiBuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VVRDRnVsbFllYXIoKSAgICsgJy0nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDTW9udGgoKSArIDEpICsgJy0nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDRGF0ZSgpKSAgICAgICsgJ1QnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDSG91cnMoKSkgICAgICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDTWludXRlcygpKSAgICsgJzonICtcbiAgICAgICAgICAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDU2Vjb25kcygpKSAgICsgJ1onO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbCByZXBsYWNlciBtZXRob2QuIEl0IHdpbGwgYmUgcGFzc2VkIHRoZVxuICAgICAgICAgICAga2V5IGFuZCB2YWx1ZSBvZiBlYWNoIG1lbWJlciwgd2l0aCB0aGlzIGJvdW5kIHRvIHRoZSBjb250YWluaW5nXG4gICAgICAgICAgICBvYmplY3QuIFRoZSB2YWx1ZSB0aGF0IGlzIHJldHVybmVkIGZyb20geW91ciBtZXRob2Qgd2lsbCBiZVxuICAgICAgICAgICAgc2VyaWFsaXplZC4gSWYgeW91ciBtZXRob2QgcmV0dXJucyB1bmRlZmluZWQsIHRoZW4gdGhlIG1lbWJlciB3aWxsXG4gICAgICAgICAgICBiZSBleGNsdWRlZCBmcm9tIHRoZSBzZXJpYWxpemF0aW9uLlxuXG4gICAgICAgICAgICBJZiB0aGUgcmVwbGFjZXIgcGFyYW1ldGVyIGlzIGFuIGFycmF5IG9mIHN0cmluZ3MsIHRoZW4gaXQgd2lsbCBiZVxuICAgICAgICAgICAgdXNlZCB0byBzZWxlY3QgdGhlIG1lbWJlcnMgdG8gYmUgc2VyaWFsaXplZC4gSXQgZmlsdGVycyB0aGUgcmVzdWx0c1xuICAgICAgICAgICAgc3VjaCB0aGF0IG9ubHkgbWVtYmVycyB3aXRoIGtleXMgbGlzdGVkIGluIHRoZSByZXBsYWNlciBhcnJheSBhcmVcbiAgICAgICAgICAgIHN0cmluZ2lmaWVkLlxuXG4gICAgICAgICAgICBWYWx1ZXMgdGhhdCBkbyBub3QgaGF2ZSBKU09OIHJlcHJlc2VudGF0aW9ucywgc3VjaCBhcyB1bmRlZmluZWQgb3JcbiAgICAgICAgICAgIGZ1bmN0aW9ucywgd2lsbCBub3QgYmUgc2VyaWFsaXplZC4gU3VjaCB2YWx1ZXMgaW4gb2JqZWN0cyB3aWxsIGJlXG4gICAgICAgICAgICBkcm9wcGVkOyBpbiBhcnJheXMgdGhleSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggbnVsbC4gWW91IGNhbiB1c2VcbiAgICAgICAgICAgIGEgcmVwbGFjZXIgZnVuY3Rpb24gdG8gcmVwbGFjZSB0aG9zZSB3aXRoIEpTT04gdmFsdWVzLlxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodW5kZWZpbmVkKSByZXR1cm5zIHVuZGVmaW5lZC5cblxuICAgICAgICAgICAgVGhlIG9wdGlvbmFsIHNwYWNlIHBhcmFtZXRlciBwcm9kdWNlcyBhIHN0cmluZ2lmaWNhdGlvbiBvZiB0aGVcbiAgICAgICAgICAgIHZhbHVlIHRoYXQgaXMgZmlsbGVkIHdpdGggbGluZSBicmVha3MgYW5kIGluZGVudGF0aW9uIHRvIG1ha2UgaXRcbiAgICAgICAgICAgIGVhc2llciB0byByZWFkLlxuXG4gICAgICAgICAgICBJZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGlzIGEgbm9uLWVtcHR5IHN0cmluZywgdGhlbiB0aGF0IHN0cmluZyB3aWxsXG4gICAgICAgICAgICBiZSB1c2VkIGZvciBpbmRlbnRhdGlvbi4gSWYgdGhlIHNwYWNlIHBhcmFtZXRlciBpcyBhIG51bWJlciwgdGhlblxuICAgICAgICAgICAgdGhlIGluZGVudGF0aW9uIHdpbGwgYmUgdGhhdCBtYW55IHNwYWNlcy5cblxuICAgICAgICAgICAgRXhhbXBsZTpcblxuICAgICAgICAgICAgdGV4dCA9IEpTT04uc3RyaW5naWZ5KFsnZScsIHtwbHVyaWJ1czogJ3VudW0nfV0pO1xuICAgICAgICAgICAgLy8gdGV4dCBpcyAnW1wiZVwiLHtcInBsdXJpYnVzXCI6XCJ1bnVtXCJ9XSdcblxuXG4gICAgICAgICAgICB0ZXh0ID0gSlNPTi5zdHJpbmdpZnkoWydlJywge3BsdXJpYnVzOiAndW51bSd9XSwgbnVsbCwgJ1xcdCcpO1xuICAgICAgICAgICAgLy8gdGV4dCBpcyAnW1xcblxcdFwiZVwiLFxcblxcdHtcXG5cXHRcXHRcInBsdXJpYnVzXCI6IFwidW51bVwiXFxuXFx0fVxcbl0nXG5cbiAgICAgICAgICAgIHRleHQgPSBKU09OLnN0cmluZ2lmeShbbmV3IERhdGUoKV0sIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNba2V5XSBpbnN0YW5jZW9mIERhdGUgP1xuICAgICAgICAgICAgICAgICAgICAnRGF0ZSgnICsgdGhpc1trZXldICsgJyknIDogdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHRleHQgaXMgJ1tcIkRhdGUoLS0tY3VycmVudCB0aW1lLS0tKVwiXSdcblxuXG4gICAgICAgIEpTT04ucGFyc2UodGV4dCwgcmV2aXZlcilcbiAgICAgICAgICAgIFRoaXMgbWV0aG9kIHBhcnNlcyBhIEpTT04gdGV4dCB0byBwcm9kdWNlIGFuIG9iamVjdCBvciBhcnJheS5cbiAgICAgICAgICAgIEl0IGNhbiB0aHJvdyBhIFN5bnRheEVycm9yIGV4Y2VwdGlvbi5cblxuICAgICAgICAgICAgVGhlIG9wdGlvbmFsIHJldml2ZXIgcGFyYW1ldGVyIGlzIGEgZnVuY3Rpb24gdGhhdCBjYW4gZmlsdGVyIGFuZFxuICAgICAgICAgICAgdHJhbnNmb3JtIHRoZSByZXN1bHRzLiBJdCByZWNlaXZlcyBlYWNoIG9mIHRoZSBrZXlzIGFuZCB2YWx1ZXMsXG4gICAgICAgICAgICBhbmQgaXRzIHJldHVybiB2YWx1ZSBpcyB1c2VkIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIHZhbHVlLlxuICAgICAgICAgICAgSWYgaXQgcmV0dXJucyB3aGF0IGl0IHJlY2VpdmVkLCB0aGVuIHRoZSBzdHJ1Y3R1cmUgaXMgbm90IG1vZGlmaWVkLlxuICAgICAgICAgICAgSWYgaXQgcmV0dXJucyB1bmRlZmluZWQgdGhlbiB0aGUgbWVtYmVyIGlzIGRlbGV0ZWQuXG5cbiAgICAgICAgICAgIEV4YW1wbGU6XG5cbiAgICAgICAgICAgIC8vIFBhcnNlIHRoZSB0ZXh0LiBWYWx1ZXMgdGhhdCBsb29rIGxpa2UgSVNPIGRhdGUgc3RyaW5ncyB3aWxsXG4gICAgICAgICAgICAvLyBiZSBjb252ZXJ0ZWQgdG8gRGF0ZSBvYmplY3RzLlxuXG4gICAgICAgICAgICBteURhdGEgPSBKU09OLnBhcnNlKHRleHQsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGE7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgYSA9XG4vXihcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pVChcXGR7Mn0pOihcXGR7Mn0pOihcXGR7Mn0oPzpcXC5cXGQqKT8pWiQvLmV4ZWModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKCthWzFdLCArYVsyXSAtIDEsICthWzNdLCArYVs0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArYVs1XSwgK2FbNl0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbXlEYXRhID0gSlNPTi5wYXJzZSgnW1wiRGF0ZSgwOS8wOS8yMDAxKVwiXScsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGQ7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNsaWNlKDAsIDUpID09PSAnRGF0ZSgnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zbGljZSgtMSkgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBkID0gbmV3IERhdGUodmFsdWUuc2xpY2UoNSwgLTEpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICBUaGlzIGlzIGEgcmVmZXJlbmNlIGltcGxlbWVudGF0aW9uLiBZb3UgYXJlIGZyZWUgdG8gY29weSwgbW9kaWZ5LCBvclxuICAgIHJlZGlzdHJpYnV0ZS5cbiovXG5cbi8qanNsaW50IGV2aWw6IHRydWUsIHN0cmljdDogZmFsc2UsIHJlZ2V4cDogZmFsc2UgKi9cblxuLyptZW1iZXJzIFwiXCIsIFwiXFxiXCIsIFwiXFx0XCIsIFwiXFxuXCIsIFwiXFxmXCIsIFwiXFxyXCIsIFwiXFxcIlwiLCBKU09OLCBcIlxcXFxcIiwgYXBwbHksXG4gICAgY2FsbCwgY2hhckNvZGVBdCwgZ2V0VVRDRGF0ZSwgZ2V0VVRDRnVsbFllYXIsIGdldFVUQ0hvdXJzLFxuICAgIGdldFVUQ01pbnV0ZXMsIGdldFVUQ01vbnRoLCBnZXRVVENTZWNvbmRzLCBoYXNPd25Qcm9wZXJ0eSwgam9pbixcbiAgICBsYXN0SW5kZXgsIGxlbmd0aCwgcGFyc2UsIHByb3RvdHlwZSwgcHVzaCwgcmVwbGFjZSwgc2xpY2UsIHN0cmluZ2lmeSxcbiAgICB0ZXN0LCB0b0pTT04sIHRvU3RyaW5nLCB2YWx1ZU9mXG4qL1xuXG5cbi8vIENyZWF0ZSBhIEpTT04gb2JqZWN0IG9ubHkgaWYgb25lIGRvZXMgbm90IGFscmVhZHkgZXhpc3QuIFdlIGNyZWF0ZSB0aGVcbi8vIG1ldGhvZHMgaW4gYSBjbG9zdXJlIHRvIGF2b2lkIGNyZWF0aW5nIGdsb2JhbCB2YXJpYWJsZXMuXG5cbnZhciBKU09OO1xuaWYgKCFKU09OKSB7XG4gICAgSlNPTiA9IHt9O1xufVxuXG4oZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIGdsb2JhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKClcbiAgICAgICwgSlNPTiA9IGdsb2JhbC5KU09OXG4gICAgICA7XG5cbiAgICBpZiAoIUpTT04pIHtcbiAgICAgIEpTT04gPSB7fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmKG4pIHtcbiAgICAgICAgLy8gRm9ybWF0IGludGVnZXJzIHRvIGhhdmUgYXQgbGVhc3QgdHdvIGRpZ2l0cy5cbiAgICAgICAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4gOiBuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgRGF0ZS5wcm90b3R5cGUudG9KU09OICE9PSAnZnVuY3Rpb24nKSB7XG5cbiAgICAgICAgRGF0ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKGtleSkge1xuXG4gICAgICAgICAgICByZXR1cm4gaXNGaW5pdGUodGhpcy52YWx1ZU9mKCkpID9cbiAgICAgICAgICAgICAgICB0aGlzLmdldFVUQ0Z1bGxZZWFyKCkgICAgICsgJy0nICtcbiAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDTW9udGgoKSArIDEpICsgJy0nICtcbiAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDRGF0ZSgpKSAgICAgICsgJ1QnICtcbiAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDSG91cnMoKSkgICAgICsgJzonICtcbiAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDTWludXRlcygpKSAgICsgJzonICtcbiAgICAgICAgICAgICAgICBmKHRoaXMuZ2V0VVRDU2Vjb25kcygpKSAgICsgJ1onIDogbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICBTdHJpbmcucHJvdG90eXBlLnRvSlNPTiAgICAgID1cbiAgICAgICAgICAgIE51bWJlci5wcm90b3R5cGUudG9KU09OICA9XG4gICAgICAgICAgICBCb29sZWFuLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgY3ggPSAvW1xcdTAwMDBcXHUwMGFkXFx1MDYwMC1cXHUwNjA0XFx1MDcwZlxcdTE3YjRcXHUxN2I1XFx1MjAwYy1cXHUyMDBmXFx1MjAyOC1cXHUyMDJmXFx1MjA2MC1cXHUyMDZmXFx1ZmVmZlxcdWZmZjAtXFx1ZmZmZl0vZyxcbiAgICAgICAgZXNjYXBhYmxlID0gL1tcXFxcXFxcIlxceDAwLVxceDFmXFx4N2YtXFx4OWZcXHUwMGFkXFx1MDYwMC1cXHUwNjA0XFx1MDcwZlxcdTE3YjRcXHUxN2I1XFx1MjAwYy1cXHUyMDBmXFx1MjAyOC1cXHUyMDJmXFx1MjA2MC1cXHUyMDZmXFx1ZmVmZlxcdWZmZjAtXFx1ZmZmZl0vZyxcbiAgICAgICAgZ2FwLFxuICAgICAgICBpbmRlbnQsXG4gICAgICAgIG1ldGEgPSB7ICAgIC8vIHRhYmxlIG9mIGNoYXJhY3RlciBzdWJzdGl0dXRpb25zXG4gICAgICAgICAgICAnXFxiJzogJ1xcXFxiJyxcbiAgICAgICAgICAgICdcXHQnOiAnXFxcXHQnLFxuICAgICAgICAgICAgJ1xcbic6ICdcXFxcbicsXG4gICAgICAgICAgICAnXFxmJzogJ1xcXFxmJyxcbiAgICAgICAgICAgICdcXHInOiAnXFxcXHInLFxuICAgICAgICAgICAgJ1wiJyA6ICdcXFxcXCInLFxuICAgICAgICAgICAgJ1xcXFwnOiAnXFxcXFxcXFwnXG4gICAgICAgIH0sXG4gICAgICAgIHJlcDtcblxuXG4gICAgZnVuY3Rpb24gcXVvdGUoc3RyaW5nKSB7XG5cbi8vIElmIHRoZSBzdHJpbmcgY29udGFpbnMgbm8gY29udHJvbCBjaGFyYWN0ZXJzLCBubyBxdW90ZSBjaGFyYWN0ZXJzLCBhbmQgbm9cbi8vIGJhY2tzbGFzaCBjaGFyYWN0ZXJzLCB0aGVuIHdlIGNhbiBzYWZlbHkgc2xhcCBzb21lIHF1b3RlcyBhcm91bmQgaXQuXG4vLyBPdGhlcndpc2Ugd2UgbXVzdCBhbHNvIHJlcGxhY2UgdGhlIG9mZmVuZGluZyBjaGFyYWN0ZXJzIHdpdGggc2FmZSBlc2NhcGVcbi8vIHNlcXVlbmNlcy5cblxuICAgICAgICBlc2NhcGFibGUubGFzdEluZGV4ID0gMDtcbiAgICAgICAgcmV0dXJuIGVzY2FwYWJsZS50ZXN0KHN0cmluZykgPyAnXCInICsgc3RyaW5nLnJlcGxhY2UoZXNjYXBhYmxlLCBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgdmFyIGMgPSBtZXRhW2FdO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBjID09PSAnc3RyaW5nJyA/IGMgOlxuICAgICAgICAgICAgICAgICdcXFxcdScgKyAoJzAwMDAnICsgYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpO1xuICAgICAgICB9KSArICdcIicgOiAnXCInICsgc3RyaW5nICsgJ1wiJztcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHN0cihrZXksIGhvbGRlcikge1xuXG4vLyBQcm9kdWNlIGEgc3RyaW5nIGZyb20gaG9sZGVyW2tleV0uXG5cbiAgICAgICAgdmFyIGksICAgICAgICAgIC8vIFRoZSBsb29wIGNvdW50ZXIuXG4gICAgICAgICAgICBrLCAgICAgICAgICAvLyBUaGUgbWVtYmVyIGtleS5cbiAgICAgICAgICAgIHYsICAgICAgICAgIC8vIFRoZSBtZW1iZXIgdmFsdWUuXG4gICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICBtaW5kID0gZ2FwLFxuICAgICAgICAgICAgcGFydGlhbCxcbiAgICAgICAgICAgIHZhbHVlID0gaG9sZGVyW2tleV07XG5cbi8vIElmIHRoZSB2YWx1ZSBoYXMgYSB0b0pTT04gbWV0aG9kLCBjYWxsIGl0IHRvIG9idGFpbiBhIHJlcGxhY2VtZW50IHZhbHVlLlxuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIHZhbHVlLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0pTT04oa2V5KTtcbiAgICAgICAgfVxuXG4vLyBJZiB3ZSB3ZXJlIGNhbGxlZCB3aXRoIGEgcmVwbGFjZXIgZnVuY3Rpb24sIHRoZW4gY2FsbCB0aGUgcmVwbGFjZXIgdG9cbi8vIG9idGFpbiBhIHJlcGxhY2VtZW50IHZhbHVlLlxuXG4gICAgICAgIGlmICh0eXBlb2YgcmVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHJlcC5jYWxsKGhvbGRlciwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cblxuLy8gV2hhdCBoYXBwZW5zIG5leHQgZGVwZW5kcyBvbiB0aGUgdmFsdWUncyB0eXBlLlxuXG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICByZXR1cm4gcXVvdGUodmFsdWUpO1xuXG4gICAgICAgIGNhc2UgJ251bWJlcic6XG5cbi8vIEpTT04gbnVtYmVycyBtdXN0IGJlIGZpbml0ZS4gRW5jb2RlIG5vbi1maW5pdGUgbnVtYmVycyBhcyBudWxsLlxuXG4gICAgICAgICAgICByZXR1cm4gaXNGaW5pdGUodmFsdWUpID8gU3RyaW5nKHZhbHVlKSA6ICdudWxsJztcblxuICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgY2FzZSAnbnVsbCc6XG5cbi8vIElmIHRoZSB2YWx1ZSBpcyBhIGJvb2xlYW4gb3IgbnVsbCwgY29udmVydCBpdCB0byBhIHN0cmluZy4gTm90ZTpcbi8vIHR5cGVvZiBudWxsIGRvZXMgbm90IHByb2R1Y2UgJ251bGwnLiBUaGUgY2FzZSBpcyBpbmNsdWRlZCBoZXJlIGluXG4vLyB0aGUgcmVtb3RlIGNoYW5jZSB0aGF0IHRoaXMgZ2V0cyBmaXhlZCBzb21lZGF5LlxuXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcblxuLy8gSWYgdGhlIHR5cGUgaXMgJ29iamVjdCcsIHdlIG1pZ2h0IGJlIGRlYWxpbmcgd2l0aCBhbiBvYmplY3Qgb3IgYW4gYXJyYXkgb3Jcbi8vIG51bGwuXG5cbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcblxuLy8gRHVlIHRvIGEgc3BlY2lmaWNhdGlvbiBibHVuZGVyIGluIEVDTUFTY3JpcHQsIHR5cGVvZiBudWxsIGlzICdvYmplY3QnLFxuLy8gc28gd2F0Y2ggb3V0IGZvciB0aGF0IGNhc2UuXG5cbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgICAgICAgICAgfVxuXG4vLyBNYWtlIGFuIGFycmF5IHRvIGhvbGQgdGhlIHBhcnRpYWwgcmVzdWx0cyBvZiBzdHJpbmdpZnlpbmcgdGhpcyBvYmplY3QgdmFsdWUuXG5cbiAgICAgICAgICAgIGdhcCArPSBpbmRlbnQ7XG4gICAgICAgICAgICBwYXJ0aWFsID0gW107XG5cbi8vIElzIHRoZSB2YWx1ZSBhbiBhcnJheT9cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG5cbi8vIFRoZSB2YWx1ZSBpcyBhbiBhcnJheS4gU3RyaW5naWZ5IGV2ZXJ5IGVsZW1lbnQuIFVzZSBudWxsIGFzIGEgcGxhY2Vob2xkZXJcbi8vIGZvciBub24tSlNPTiB2YWx1ZXMuXG5cbiAgICAgICAgICAgICAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpYWxbaV0gPSBzdHIoaSwgdmFsdWUpIHx8ICdudWxsJztcbiAgICAgICAgICAgICAgICB9XG5cbi8vIEpvaW4gYWxsIG9mIHRoZSBlbGVtZW50cyB0b2dldGhlciwgc2VwYXJhdGVkIHdpdGggY29tbWFzLCBhbmQgd3JhcCB0aGVtIGluXG4vLyBicmFja2V0cy5cblxuICAgICAgICAgICAgICAgIHYgPSBwYXJ0aWFsLmxlbmd0aCA9PT0gMCA/ICdbXScgOiBnYXAgP1xuICAgICAgICAgICAgICAgICAgICAnW1xcbicgKyBnYXAgKyBwYXJ0aWFsLmpvaW4oJyxcXG4nICsgZ2FwKSArICdcXG4nICsgbWluZCArICddJyA6XG4gICAgICAgICAgICAgICAgICAgICdbJyArIHBhcnRpYWwuam9pbignLCcpICsgJ10nO1xuICAgICAgICAgICAgICAgIGdhcCA9IG1pbmQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICB9XG5cbi8vIElmIHRoZSByZXBsYWNlciBpcyBhbiBhcnJheSwgdXNlIGl0IHRvIHNlbGVjdCB0aGUgbWVtYmVycyB0byBiZSBzdHJpbmdpZmllZC5cblxuICAgICAgICAgICAgaWYgKHJlcCAmJiB0eXBlb2YgcmVwID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGxlbmd0aCA9IHJlcC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVwW2ldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgayA9IHJlcFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHYgPSBzdHIoaywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsLnB1c2gocXVvdGUoaykgKyAoZ2FwID8gJzogJyA6ICc6JykgKyB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbi8vIE90aGVyd2lzZSwgaXRlcmF0ZSB0aHJvdWdoIGFsbCBvZiB0aGUga2V5cyBpbiB0aGUgb2JqZWN0LlxuXG4gICAgICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGspKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gc3RyKGssIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGlhbC5wdXNoKHF1b3RlKGspICsgKGdhcCA/ICc6ICcgOiAnOicpICsgdik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbi8vIEpvaW4gYWxsIG9mIHRoZSBtZW1iZXIgdGV4dHMgdG9nZXRoZXIsIHNlcGFyYXRlZCB3aXRoIGNvbW1hcyxcbi8vIGFuZCB3cmFwIHRoZW0gaW4gYnJhY2VzLlxuXG4gICAgICAgICAgICB2ID0gcGFydGlhbC5sZW5ndGggPT09IDAgPyAne30nIDogZ2FwID9cbiAgICAgICAgICAgICAgICAne1xcbicgKyBnYXAgKyBwYXJ0aWFsLmpvaW4oJyxcXG4nICsgZ2FwKSArICdcXG4nICsgbWluZCArICd9JyA6XG4gICAgICAgICAgICAgICAgJ3snICsgcGFydGlhbC5qb2luKCcsJykgKyAnfSc7XG4gICAgICAgICAgICBnYXAgPSBtaW5kO1xuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cbiAgICB9XG5cbi8vIElmIHRoZSBKU09OIG9iamVjdCBkb2VzIG5vdCB5ZXQgaGF2ZSBhIHN0cmluZ2lmeSBtZXRob2QsIGdpdmUgaXQgb25lLlxuXG4gICAgaWYgKHR5cGVvZiBKU09OLnN0cmluZ2lmeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBKU09OLnN0cmluZ2lmeSA9IGZ1bmN0aW9uICh2YWx1ZSwgcmVwbGFjZXIsIHNwYWNlKSB7XG5cbi8vIFRoZSBzdHJpbmdpZnkgbWV0aG9kIHRha2VzIGEgdmFsdWUgYW5kIGFuIG9wdGlvbmFsIHJlcGxhY2VyLCBhbmQgYW4gb3B0aW9uYWxcbi8vIHNwYWNlIHBhcmFtZXRlciwgYW5kIHJldHVybnMgYSBKU09OIHRleHQuIFRoZSByZXBsYWNlciBjYW4gYmUgYSBmdW5jdGlvblxuLy8gdGhhdCBjYW4gcmVwbGFjZSB2YWx1ZXMsIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCB3aWxsIHNlbGVjdCB0aGUga2V5cy5cbi8vIEEgZGVmYXVsdCByZXBsYWNlciBtZXRob2QgY2FuIGJlIHByb3ZpZGVkLiBVc2Ugb2YgdGhlIHNwYWNlIHBhcmFtZXRlciBjYW5cbi8vIHByb2R1Y2UgdGV4dCB0aGF0IGlzIG1vcmUgZWFzaWx5IHJlYWRhYmxlLlxuXG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIGdhcCA9ICcnO1xuICAgICAgICAgICAgaW5kZW50ID0gJyc7XG5cbi8vIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBudW1iZXIsIG1ha2UgYW4gaW5kZW50IHN0cmluZyBjb250YWluaW5nIHRoYXRcbi8vIG1hbnkgc3BhY2VzLlxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNwYWNlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzcGFjZTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGVudCArPSAnICc7XG4gICAgICAgICAgICAgICAgfVxuXG4vLyBJZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGlzIGEgc3RyaW5nLCBpdCB3aWxsIGJlIHVzZWQgYXMgdGhlIGluZGVudCBzdHJpbmcuXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGluZGVudCA9IHNwYWNlO1xuICAgICAgICAgICAgfVxuXG4vLyBJZiB0aGVyZSBpcyBhIHJlcGxhY2VyLCBpdCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXkuXG4vLyBPdGhlcndpc2UsIHRocm93IGFuIGVycm9yLlxuXG4gICAgICAgICAgICByZXAgPSByZXBsYWNlcjtcbiAgICAgICAgICAgIGlmIChyZXBsYWNlciAmJiB0eXBlb2YgcmVwbGFjZXIgIT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiByZXBsYWNlciAhPT0gJ29iamVjdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHJlcGxhY2VyLmxlbmd0aCAhPT0gJ251bWJlcicpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdKU09OLnN0cmluZ2lmeScpO1xuICAgICAgICAgICAgfVxuXG4vLyBNYWtlIGEgZmFrZSByb290IG9iamVjdCBjb250YWluaW5nIG91ciB2YWx1ZSB1bmRlciB0aGUga2V5IG9mICcnLlxuLy8gUmV0dXJuIHRoZSByZXN1bHQgb2Ygc3RyaW5naWZ5aW5nIHRoZSB2YWx1ZS5cblxuICAgICAgICAgICAgcmV0dXJuIHN0cignJywgeycnOiB2YWx1ZX0pO1xuICAgICAgICB9O1xuICAgIH1cblxuXG4vLyBJZiB0aGUgSlNPTiBvYmplY3QgZG9lcyBub3QgeWV0IGhhdmUgYSBwYXJzZSBtZXRob2QsIGdpdmUgaXQgb25lLlxuXG4gICAgaWYgKHR5cGVvZiBKU09OLnBhcnNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIEpTT04ucGFyc2UgPSBmdW5jdGlvbiAodGV4dCwgcmV2aXZlcikge1xuXG4vLyBUaGUgcGFyc2UgbWV0aG9kIHRha2VzIGEgdGV4dCBhbmQgYW4gb3B0aW9uYWwgcmV2aXZlciBmdW5jdGlvbiwgYW5kIHJldHVybnNcbi8vIGEgSmF2YVNjcmlwdCB2YWx1ZSBpZiB0aGUgdGV4dCBpcyBhIHZhbGlkIEpTT04gdGV4dC5cblxuICAgICAgICAgICAgdmFyIGo7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHdhbGsoaG9sZGVyLCBrZXkpIHtcblxuLy8gVGhlIHdhbGsgbWV0aG9kIGlzIHVzZWQgdG8gcmVjdXJzaXZlbHkgd2FsayB0aGUgcmVzdWx0aW5nIHN0cnVjdHVyZSBzb1xuLy8gdGhhdCBtb2RpZmljYXRpb25zIGNhbiBiZSBtYWRlLlxuXG4gICAgICAgICAgICAgICAgdmFyIGssIHYsIHZhbHVlID0gaG9sZGVyW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSB3YWxrKHZhbHVlLCBrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2tdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsdWVba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXZpdmVyLmNhbGwoaG9sZGVyLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuXG4vLyBQYXJzaW5nIGhhcHBlbnMgaW4gZm91ciBzdGFnZXMuIEluIHRoZSBmaXJzdCBzdGFnZSwgd2UgcmVwbGFjZSBjZXJ0YWluXG4vLyBVbmljb2RlIGNoYXJhY3RlcnMgd2l0aCBlc2NhcGUgc2VxdWVuY2VzLiBKYXZhU2NyaXB0IGhhbmRsZXMgbWFueSBjaGFyYWN0ZXJzXG4vLyBpbmNvcnJlY3RseSwgZWl0aGVyIHNpbGVudGx5IGRlbGV0aW5nIHRoZW0sIG9yIHRyZWF0aW5nIHRoZW0gYXMgbGluZSBlbmRpbmdzLlxuXG4gICAgICAgICAgICB0ZXh0ID0gU3RyaW5nKHRleHQpO1xuICAgICAgICAgICAgY3gubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgIGlmIChjeC50ZXN0KHRleHQpKSB7XG4gICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShjeCwgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdcXFxcdScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKCcwMDAwJyArIGEuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC00KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuLy8gSW4gdGhlIHNlY29uZCBzdGFnZSwgd2UgcnVuIHRoZSB0ZXh0IGFnYWluc3QgcmVndWxhciBleHByZXNzaW9ucyB0aGF0IGxvb2tcbi8vIGZvciBub24tSlNPTiBwYXR0ZXJucy4gV2UgYXJlIGVzcGVjaWFsbHkgY29uY2VybmVkIHdpdGggJygpJyBhbmQgJ25ldydcbi8vIGJlY2F1c2UgdGhleSBjYW4gY2F1c2UgaW52b2NhdGlvbiwgYW5kICc9JyBiZWNhdXNlIGl0IGNhbiBjYXVzZSBtdXRhdGlvbi5cbi8vIEJ1dCBqdXN0IHRvIGJlIHNhZmUsIHdlIHdhbnQgdG8gcmVqZWN0IGFsbCB1bmV4cGVjdGVkIGZvcm1zLlxuXG4vLyBXZSBzcGxpdCB0aGUgc2Vjb25kIHN0YWdlIGludG8gNCByZWdleHAgb3BlcmF0aW9ucyBpbiBvcmRlciB0byB3b3JrIGFyb3VuZFxuLy8gY3JpcHBsaW5nIGluZWZmaWNpZW5jaWVzIGluIElFJ3MgYW5kIFNhZmFyaSdzIHJlZ2V4cCBlbmdpbmVzLiBGaXJzdCB3ZVxuLy8gcmVwbGFjZSB0aGUgSlNPTiBiYWNrc2xhc2ggcGFpcnMgd2l0aCAnQCcgKGEgbm9uLUpTT04gY2hhcmFjdGVyKS4gU2Vjb25kLCB3ZVxuLy8gcmVwbGFjZSBhbGwgc2ltcGxlIHZhbHVlIHRva2VucyB3aXRoICddJyBjaGFyYWN0ZXJzLiBUaGlyZCwgd2UgZGVsZXRlIGFsbFxuLy8gb3BlbiBicmFja2V0cyB0aGF0IGZvbGxvdyBhIGNvbG9uIG9yIGNvbW1hIG9yIHRoYXQgYmVnaW4gdGhlIHRleHQuIEZpbmFsbHksXG4vLyB3ZSBsb29rIHRvIHNlZSB0aGF0IHRoZSByZW1haW5pbmcgY2hhcmFjdGVycyBhcmUgb25seSB3aGl0ZXNwYWNlIG9yICddJyBvclxuLy8gJywnIG9yICc6JyBvciAneycgb3IgJ30nLiBJZiB0aGF0IGlzIHNvLCB0aGVuIHRoZSB0ZXh0IGlzIHNhZmUgZm9yIGV2YWwuXG5cbiAgICAgICAgICAgIGlmICgvXltcXF0sOnt9XFxzXSokL1xuICAgICAgICAgICAgICAgICAgICAudGVzdCh0ZXh0LnJlcGxhY2UoL1xcXFwoPzpbXCJcXFxcXFwvYmZucnRdfHVbMC05YS1mQS1GXXs0fSkvZywgJ0AnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1wiW15cIlxcXFxcXG5cXHJdKlwifHRydWV8ZmFsc2V8bnVsbHwtP1xcZCsoPzpcXC5cXGQqKT8oPzpbZUVdWytcXC1dP1xcZCspPy9nLCAnXScpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKD86Xnw6fCwpKD86XFxzKlxcWykrL2csICcnKSkpIHtcblxuLy8gSW4gdGhlIHRoaXJkIHN0YWdlIHdlIHVzZSB0aGUgZXZhbCBmdW5jdGlvbiB0byBjb21waWxlIHRoZSB0ZXh0IGludG8gYVxuLy8gSmF2YVNjcmlwdCBzdHJ1Y3R1cmUuIFRoZSAneycgb3BlcmF0b3IgaXMgc3ViamVjdCB0byBhIHN5bnRhY3RpYyBhbWJpZ3VpdHlcbi8vIGluIEphdmFTY3JpcHQ6IGl0IGNhbiBiZWdpbiBhIGJsb2NrIG9yIGFuIG9iamVjdCBsaXRlcmFsLiBXZSB3cmFwIHRoZSB0ZXh0XG4vLyBpbiBwYXJlbnMgdG8gZWxpbWluYXRlIHRoZSBhbWJpZ3VpdHkuXG5cbiAgICAgICAgICAgICAgICBqID0gZXZhbCgnKCcgKyB0ZXh0ICsgJyknKTtcblxuLy8gSW4gdGhlIG9wdGlvbmFsIGZvdXJ0aCBzdGFnZSwgd2UgcmVjdXJzaXZlbHkgd2FsayB0aGUgbmV3IHN0cnVjdHVyZSwgcGFzc2luZ1xuLy8gZWFjaCBuYW1lL3ZhbHVlIHBhaXIgdG8gYSByZXZpdmVyIGZ1bmN0aW9uIGZvciBwb3NzaWJsZSB0cmFuc2Zvcm1hdGlvbi5cblxuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgcmV2aXZlciA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICAgICAgICAgICAgICAgIHdhbGsoeycnOiBqfSwgJycpIDogajtcbiAgICAgICAgICAgIH1cblxuLy8gSWYgdGhlIHRleHQgaXMgbm90IEpTT04gcGFyc2VhYmxlLCB0aGVuIGEgU3ludGF4RXJyb3IgaXMgdGhyb3duLlxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0pTT04ucGFyc2UnKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnbG9iYWwuSlNPTiA9IEpTT047XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBKU09OO1xufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9fSlNPTkAxLjAuMEBKU09OL2pzb24yLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9fSlNPTkAxLjAuMEBKU09OL2pzb24yLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJ2YXIgY2hhcmVuYyA9IHtcbiAgLy8gVVRGLTggZW5jb2RpbmdcbiAgdXRmODoge1xuICAgIC8vIENvbnZlcnQgYSBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgc3RyaW5nVG9CeXRlczogZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gY2hhcmVuYy5iaW4uc3RyaW5nVG9CeXRlcyh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSkpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIHN0cmluZ1xuICAgIGJ5dGVzVG9TdHJpbmc6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShjaGFyZW5jLmJpbi5ieXRlc1RvU3RyaW5nKGJ5dGVzKSkpO1xuICAgIH1cbiAgfSxcblxuICAvLyBCaW5hcnkgZW5jb2RpbmdcbiAgYmluOiB7XG4gICAgLy8gQ29udmVydCBhIHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBzdHJpbmdUb0J5dGVzOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKVxuICAgICAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRik7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgc3RyaW5nXG4gICAgYnl0ZXNUb1N0cmluZzogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGZvciAodmFyIHN0ciA9IFtdLCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKVxuICAgICAgICBzdHIucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldKSk7XG4gICAgICByZXR1cm4gc3RyLmpvaW4oJycpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjaGFyZW5jO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19jaGFyZW5jQDAuMC4yQGNoYXJlbmMvY2hhcmVuYy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvX2NoYXJlbmNAMC4wLjJAY2hhcmVuYy9jaGFyZW5jLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBiYXNlNjRtYXBcbiAgICAgID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nLFxuXG4gIGNyeXB0ID0ge1xuICAgIC8vIEJpdC13aXNlIHJvdGF0aW9uIGxlZnRcbiAgICByb3RsOiBmdW5jdGlvbihuLCBiKSB7XG4gICAgICByZXR1cm4gKG4gPDwgYikgfCAobiA+Pj4gKDMyIC0gYikpO1xuICAgIH0sXG5cbiAgICAvLyBCaXQtd2lzZSByb3RhdGlvbiByaWdodFxuICAgIHJvdHI6IGZ1bmN0aW9uKG4sIGIpIHtcbiAgICAgIHJldHVybiAobiA8PCAoMzIgLSBiKSkgfCAobiA+Pj4gYik7XG4gICAgfSxcblxuICAgIC8vIFN3YXAgYmlnLWVuZGlhbiB0byBsaXR0bGUtZW5kaWFuIGFuZCB2aWNlIHZlcnNhXG4gICAgZW5kaWFuOiBmdW5jdGlvbihuKSB7XG4gICAgICAvLyBJZiBudW1iZXIgZ2l2ZW4sIHN3YXAgZW5kaWFuXG4gICAgICBpZiAobi5jb25zdHJ1Y3RvciA9PSBOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGNyeXB0LnJvdGwobiwgOCkgJiAweDAwRkYwMEZGIHwgY3J5cHQucm90bChuLCAyNCkgJiAweEZGMDBGRjAwO1xuICAgICAgfVxuXG4gICAgICAvLyBFbHNlLCBhc3N1bWUgYXJyYXkgYW5kIHN3YXAgYWxsIGl0ZW1zXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG4ubGVuZ3RoOyBpKyspXG4gICAgICAgIG5baV0gPSBjcnlwdC5lbmRpYW4obltpXSk7XG4gICAgICByZXR1cm4gbjtcbiAgICB9LFxuXG4gICAgLy8gR2VuZXJhdGUgYW4gYXJyYXkgb2YgYW55IGxlbmd0aCBvZiByYW5kb20gYnl0ZXNcbiAgICByYW5kb21CeXRlczogZnVuY3Rpb24obikge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXTsgbiA+IDA7IG4tLSlcbiAgICAgICAgYnl0ZXMucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYmlnLWVuZGlhbiAzMi1iaXQgd29yZHNcbiAgICBieXRlc1RvV29yZHM6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciB3b3JkcyA9IFtdLCBpID0gMCwgYiA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKywgYiArPSA4KVxuICAgICAgICB3b3Jkc1tiID4+PiA1XSB8PSBieXRlc1tpXSA8PCAoMjQgLSBiICUgMzIpO1xuICAgICAgcmV0dXJuIHdvcmRzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGJpZy1lbmRpYW4gMzItYml0IHdvcmRzIHRvIGEgYnl0ZSBhcnJheVxuICAgIHdvcmRzVG9CeXRlczogZnVuY3Rpb24od29yZHMpIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGIgPSAwOyBiIDwgd29yZHMubGVuZ3RoICogMzI7IGIgKz0gOClcbiAgICAgICAgYnl0ZXMucHVzaCgod29yZHNbYiA+Pj4gNV0gPj4+ICgyNCAtIGIgJSAzMikpICYgMHhGRik7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgaGV4IHN0cmluZ1xuICAgIGJ5dGVzVG9IZXg6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciBoZXggPSBbXSwgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBoZXgucHVzaCgoYnl0ZXNbaV0gPj4+IDQpLnRvU3RyaW5nKDE2KSk7XG4gICAgICAgIGhleC5wdXNoKChieXRlc1tpXSAmIDB4RikudG9TdHJpbmcoMTYpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoZXguam9pbignJyk7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBoZXggc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIGhleFRvQnl0ZXM6IGZ1bmN0aW9uKGhleCkge1xuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgYyA9IDA7IGMgPCBoZXgubGVuZ3RoOyBjICs9IDIpXG4gICAgICAgIGJ5dGVzLnB1c2gocGFyc2VJbnQoaGV4LnN1YnN0cihjLCAyKSwgMTYpKTtcbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBiYXNlLTY0IHN0cmluZ1xuICAgIGJ5dGVzVG9CYXNlNjQ6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciBiYXNlNjQgPSBbXSwgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICB2YXIgdHJpcGxldCA9IChieXRlc1tpXSA8PCAxNikgfCAoYnl0ZXNbaSArIDFdIDw8IDgpIHwgYnl0ZXNbaSArIDJdO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDQ7IGorKylcbiAgICAgICAgICBpZiAoaSAqIDggKyBqICogNiA8PSBieXRlcy5sZW5ndGggKiA4KVxuICAgICAgICAgICAgYmFzZTY0LnB1c2goYmFzZTY0bWFwLmNoYXJBdCgodHJpcGxldCA+Pj4gNiAqICgzIC0gaikpICYgMHgzRikpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGJhc2U2NC5wdXNoKCc9Jyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYmFzZTY0LmpvaW4oJycpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYmFzZS02NCBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgYmFzZTY0VG9CeXRlczogZnVuY3Rpb24oYmFzZTY0KSB7XG4gICAgICAvLyBSZW1vdmUgbm9uLWJhc2UtNjQgY2hhcmFjdGVyc1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnJlcGxhY2UoL1teQS1aMC05K1xcL10vaWcsICcnKTtcblxuICAgICAgZm9yICh2YXIgYnl0ZXMgPSBbXSwgaSA9IDAsIGltb2Q0ID0gMDsgaSA8IGJhc2U2NC5sZW5ndGg7XG4gICAgICAgICAgaW1vZDQgPSArK2kgJSA0KSB7XG4gICAgICAgIGlmIChpbW9kNCA9PSAwKSBjb250aW51ZTtcbiAgICAgICAgYnl0ZXMucHVzaCgoKGJhc2U2NG1hcC5pbmRleE9mKGJhc2U2NC5jaGFyQXQoaSAtIDEpKVxuICAgICAgICAgICAgJiAoTWF0aC5wb3coMiwgLTIgKiBpbW9kNCArIDgpIC0gMSkpIDw8IChpbW9kNCAqIDIpKVxuICAgICAgICAgICAgfCAoYmFzZTY0bWFwLmluZGV4T2YoYmFzZTY0LmNoYXJBdChpKSkgPj4+ICg2IC0gaW1vZDQgKiAyKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGNyeXB0O1xufSkoKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9fY3J5cHRAMC4wLjJAY3J5cHQvY3J5cHQuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL19jcnlwdEAwLjAuMkBjcnlwdC9jcnlwdC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vX2lzLWJ1ZmZlckAxLjEuNkBpcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL19pcy1idWZmZXJAMS4xLjZAaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCIoZnVuY3Rpb24oKXtcclxuICB2YXIgY3J5cHQgPSByZXF1aXJlKCdjcnlwdCcpLFxyXG4gICAgICB1dGY4ID0gcmVxdWlyZSgnY2hhcmVuYycpLnV0ZjgsXHJcbiAgICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyksXHJcbiAgICAgIGJpbiA9IHJlcXVpcmUoJ2NoYXJlbmMnKS5iaW4sXHJcblxyXG4gIC8vIFRoZSBjb3JlXHJcbiAgbWQ1ID0gZnVuY3Rpb24gKG1lc3NhZ2UsIG9wdGlvbnMpIHtcclxuICAgIC8vIENvbnZlcnQgdG8gYnl0ZSBhcnJheVxyXG4gICAgaWYgKG1lc3NhZ2UuY29uc3RydWN0b3IgPT0gU3RyaW5nKVxyXG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmVuY29kaW5nID09PSAnYmluYXJ5JylcclxuICAgICAgICBtZXNzYWdlID0gYmluLnN0cmluZ1RvQnl0ZXMobWVzc2FnZSk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBtZXNzYWdlID0gdXRmOC5zdHJpbmdUb0J5dGVzKG1lc3NhZ2UpO1xyXG4gICAgZWxzZSBpZiAoaXNCdWZmZXIobWVzc2FnZSkpXHJcbiAgICAgIG1lc3NhZ2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChtZXNzYWdlLCAwKTtcclxuICAgIGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KG1lc3NhZ2UpKVxyXG4gICAgICBtZXNzYWdlID0gbWVzc2FnZS50b1N0cmluZygpO1xyXG4gICAgLy8gZWxzZSwgYXNzdW1lIGJ5dGUgYXJyYXkgYWxyZWFkeVxyXG5cclxuICAgIHZhciBtID0gY3J5cHQuYnl0ZXNUb1dvcmRzKG1lc3NhZ2UpLFxyXG4gICAgICAgIGwgPSBtZXNzYWdlLmxlbmd0aCAqIDgsXHJcbiAgICAgICAgYSA9ICAxNzMyNTg0MTkzLFxyXG4gICAgICAgIGIgPSAtMjcxNzMzODc5LFxyXG4gICAgICAgIGMgPSAtMTczMjU4NDE5NCxcclxuICAgICAgICBkID0gIDI3MTczMzg3ODtcclxuXHJcbiAgICAvLyBTd2FwIGVuZGlhblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1baV0gPSAoKG1baV0gPDwgIDgpIHwgKG1baV0gPj4+IDI0KSkgJiAweDAwRkYwMEZGIHxcclxuICAgICAgICAgICAgICgobVtpXSA8PCAyNCkgfCAobVtpXSA+Pj4gIDgpKSAmIDB4RkYwMEZGMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFkZGluZ1xyXG4gICAgbVtsID4+PiA1XSB8PSAweDgwIDw8IChsICUgMzIpO1xyXG4gICAgbVsoKChsICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IGw7XHJcblxyXG4gICAgLy8gTWV0aG9kIHNob3J0Y3V0c1xyXG4gICAgdmFyIEZGID0gbWQ1Ll9mZixcclxuICAgICAgICBHRyA9IG1kNS5fZ2csXHJcbiAgICAgICAgSEggPSBtZDUuX2hoLFxyXG4gICAgICAgIElJID0gbWQ1Ll9paTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG0ubGVuZ3RoOyBpICs9IDE2KSB7XHJcblxyXG4gICAgICB2YXIgYWEgPSBhLFxyXG4gICAgICAgICAgYmIgPSBiLFxyXG4gICAgICAgICAgY2MgPSBjLFxyXG4gICAgICAgICAgZGQgPSBkO1xyXG5cclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsgMF0sICA3LCAtNjgwODc2OTM2KTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsgMl0sIDE3LCAgNjA2MTA1ODE5KTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krIDRdLCAgNywgLTE3NjQxODg5Nyk7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDVdLCAxMiwgIDEyMDAwODA0MjYpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsgN10sIDIyLCAtNDU3MDU5ODMpO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKyA4XSwgIDcsICAxNzcwMDM1NDE2KTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krMTBdLCAxNywgLTQyMDYzKTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krMTJdLCAgNywgIDE4MDQ2MDM2ODIpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKzEzXSwgMTIsIC00MDM0MTEwMSk7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krMTRdLCAxNywgLTE1MDIwMDIyOTApO1xyXG4gICAgICBiID0gRkYoYiwgYywgZCwgYSwgbVtpKzE1XSwgMjIsICAxMjM2NTM1MzI5KTtcclxuXHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krIDFdLCAgNSwgLTE2NTc5NjUxMCk7XHJcbiAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBtW2krIDZdLCAgOSwgLTEwNjk1MDE2MzIpO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKzExXSwgMTQsICA2NDM3MTc3MTMpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKyAwXSwgMjAsIC0zNzM4OTczMDIpO1xyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyA1XSwgIDUsIC03MDE1NTg2OTEpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKzEwXSwgIDksICAzODAxNjA4Myk7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krIDRdLCAyMCwgLTQwNTUzNzg0OCk7XHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krIDldLCAgNSwgIDU2ODQ0NjQzOCk7XHJcbiAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBtW2krMTRdLCAgOSwgLTEwMTk4MDM2OTApO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKyAzXSwgMTQsIC0xODczNjM5NjEpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKyA4XSwgMjAsICAxMTYzNTMxNTAxKTtcclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsxM10sICA1LCAtMTQ0NDY4MTQ2Nyk7XHJcbiAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBtW2krIDJdLCAgOSwgLTUxNDAzNzg0KTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsgN10sIDE0LCAgMTczNTMyODQ3Myk7XHJcbiAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBtW2krMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xyXG5cclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsgNV0sICA0LCAtMzc4NTU4KTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krMTFdLCAxNiwgIDE4MzkwMzA1NjIpO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKzE0XSwgMjMsIC0zNTMwOTU1Nik7XHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDFdLCAgNCwgLTE1MzA5OTIwNjApO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKyA0XSwgMTEsICAxMjcyODkzMzUzKTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsgN10sIDE2LCAtMTU1NDk3NjMyKTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsxMF0sIDIzLCAtMTA5NDczMDY0MCk7XHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krMTNdLCAgNCwgIDY4MTI3OTE3NCk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krIDBdLCAxMSwgLTM1ODUzNzIyMik7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krIDNdLCAxNiwgLTcyMjUyMTk3OSk7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krIDZdLCAyMywgIDc2MDI5MTg5KTtcclxuICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIG1baSsgOV0sICA0LCAtNjQwMzY0NDg3KTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsxMl0sIDExLCAtNDIxODE1ODM1KTtcclxuICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIG1baSsxNV0sIDE2LCAgNTMwNzQyNTIwKTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcclxuXHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krIDBdLCAgNiwgLTE5ODYzMDg0NCk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krIDddLCAxMCwgIDExMjY4OTE0MTUpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKzE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsgNV0sIDIxLCAtNTc0MzQwNTUpO1xyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKzEyXSwgIDYsICAxNzAwNDg1NTcxKTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsgM10sIDEwLCAtMTg5NDk4NjYwNik7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krMTBdLCAxNSwgLTEwNTE1MjMpO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsgOF0sICA2LCAgMTg3MzMxMzM1OSk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krMTVdLCAxMCwgLTMwNjExNzQ0KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krMTNdLCAyMSwgIDEzMDkxNTE2NDkpO1xyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKyA0XSwgIDYsIC0xNDU1MjMwNzApO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKzExXSwgMTAsIC0xMTIwMjEwMzc5KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsgMl0sIDE1LCAgNzE4Nzg3MjU5KTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcclxuXHJcbiAgICAgIGEgPSAoYSArIGFhKSA+Pj4gMDtcclxuICAgICAgYiA9IChiICsgYmIpID4+PiAwO1xyXG4gICAgICBjID0gKGMgKyBjYykgPj4+IDA7XHJcbiAgICAgIGQgPSAoZCArIGRkKSA+Pj4gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY3J5cHQuZW5kaWFuKFthLCBiLCBjLCBkXSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gQXV4aWxpYXJ5IGZ1bmN0aW9uc1xyXG4gIG1kNS5fZmYgID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuICAgIHZhciBuID0gYSArIChiICYgYyB8IH5iICYgZCkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG4gIG1kNS5fZ2cgID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuICAgIHZhciBuID0gYSArIChiICYgZCB8IGMgJiB+ZCkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG4gIG1kNS5faGggID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuICAgIHZhciBuID0gYSArIChiIF4gYyBeIGQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2lpICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYyBeIChiIHwgfmQpKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcblxyXG4gIC8vIFBhY2thZ2UgcHJpdmF0ZSBibG9ja3NpemVcclxuICBtZDUuX2Jsb2Nrc2l6ZSA9IDE2O1xyXG4gIG1kNS5fZGlnZXN0c2l6ZSA9IDE2O1xyXG5cclxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICBpZiAobWVzc2FnZSA9PT0gdW5kZWZpbmVkIHx8IG1lc3NhZ2UgPT09IG51bGwpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBhcmd1bWVudCAnICsgbWVzc2FnZSk7XHJcblxyXG4gICAgdmFyIGRpZ2VzdGJ5dGVzID0gY3J5cHQud29yZHNUb0J5dGVzKG1kNShtZXNzYWdlLCBvcHRpb25zKSk7XHJcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLmFzQnl0ZXMgPyBkaWdlc3RieXRlcyA6XHJcbiAgICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLmFzU3RyaW5nID8gYmluLmJ5dGVzVG9TdHJpbmcoZGlnZXN0Ynl0ZXMpIDpcclxuICAgICAgICBjcnlwdC5ieXRlc1RvSGV4KGRpZ2VzdGJ5dGVzKTtcclxuICB9O1xyXG5cclxufSkoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19tZDVAMi4yLjFAbWQ1L21kNS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvX21kNUAyLjIuMUBtZDUvbWQ1LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDgiLCJpbXBvcnQge3N0Yk51bGx9IGZyb20gJy4uL3Rvb2RvL19zdGJudWxsJztcclxuXHJcblxyXG5mdW5jdGlvbiBQYWdlQXJncyhwYWdlKSB7XHJcbiAgICB0aGlzLnByZWZpeCA9IHBhZ2UgPyBwYWdlICsgJy4nIDogJyc7XHJcbn1cclxuUGFnZUFyZ3MucHJvdG90eXBlID0ge1xyXG4gICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0Yk51bGwuZ2V0VmFsdWUodGhpcy5wcmVmaXggKyBrKTtcclxuICAgIH0sXHJcbiAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGssIHYpIHtcclxuICAgICAgICBzdGJOdWxsLnNldFZhbHVlKHRoaXMucHJlZml4ICsgaywgdik7XHJcbiAgICB9LFxyXG4gICAgZ2V0UmV0dXJuVXJsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoJ3JldHVyblVybCcpO1xyXG4gICAgfSxcclxuICAgIHNldFJldHVyblVybDogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoJ3JldHVyblVybCcsIHVybCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVkaXJlY3RVcmw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgncmVkaXJlY3RVcmwnKTtcclxuICAgIH0sXHJcbiAgICBzZXRSZWRpcmVjdFVybDogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoJ3JlZGlyZWN0VXJsJywgdXJsKTtcclxuICAgIH0sXHJcbiAgICBzZXRDYWxsRmxhZzpmdW5jdGlvbiAobnVtKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShcImNhbGxGbGFnXCIsbnVtKTtcclxuICAgIH0sXHJcbiAgICBnZXRDYWxsRmxhZzpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJjYWxsRmxhZ1wiKTtcclxuICAgIH0sXHJcbiAgICBzZXRTdWNjZXNzQ29kZTpmdW5jdGlvbiAoc3VjY2Vzc0NvZGUpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKFwic3VjY2Vzc0NvZGVcIixzdWNjZXNzQ29kZSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0U3VjY2Vzc0NvZGU6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwic3VjY2Vzc0NvZGVcIik7XHJcbiAgICB9LFxyXG4gICAgc2V0UHJpemVJRDpmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKFwiUHJpemVJRFwiLGlkKTtcclxuICAgIH0sXHJcbiAgICBnZXRQcml6ZUlEOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcIlByaXplSURcIik7XHJcbiAgICB9LFxyXG4gICAgZ2V0VHVybnRhYmxlVXJsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoJ1R1cm50YWJsZVVybCcpO1xyXG4gICAgfSxcclxuICAgIHNldFR1cm50YWJsZVVybDogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoJ1R1cm50YWJsZVVybCcsIHVybCk7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuXHJcbnZhciBzaG9wQXJncyA9IG5ldyBQYWdlQXJncygnc2hvcCcpO1xyXG52YXIgcmVjaGFyZ2VBcmdzID0gbmV3IFBhZ2VBcmdzKCdyZWNoYXJnZScpO1xyXG52YXIgY2FsbGJhY2tBcmdzID0gbmV3IFBhZ2VBcmdzKCdjYWxsYmFjaycpO1xyXG52YXIgdHVyblRhYmxlQXJncyA9IG5ldyBQYWdlQXJncygndHVybnRhYmxlJyk7XHJcblxyXG52YXIgYXBwQXJncyA9IG5ldyBQYWdlQXJncygnYXBwJyk7XHJcbmFwcEFyZ3Mub25GaXJzdFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZmlyc3RVcmwgPSBhcHBBcmdzLmdldFJlZGlyZWN0VXJsKCk7XHJcbiAgICBpZiAoZmlyc3RVcmwpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZpcnN0VXJsO1xyXG4gICAgfVxyXG59O1xyXG5cclxuYXBwQXJncy5vbkhvbWVQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGhvbWVVcmwgPSBhcHBBcmdzLmdldFJldHVyblVybCgpO1xyXG4gICAgaWYgKGhvbWVVcmwpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhvbWVVcmw7XHJcbiAgICB9XHJcbn07XHJcblxyXG5hcHBBcmdzLm9uVHVybnRhYmxlUGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBUdXJudGFibGVVcmwgPSBhcHBBcmdzLmdldFR1cm50YWJsZVVybCgpO1xyXG4gICAgaWYgKFR1cm50YWJsZVVybCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gVHVybnRhYmxlVXJsO1xyXG4gICAgfVxyXG59O1xyXG5leHBvcnQge3Nob3BBcmdzLHJlY2hhcmdlQXJncyxjYWxsYmFja0FyZ3MsYXBwQXJncyx0dXJuVGFibGVBcmdzfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL1BhZ2VBcmdzLmpzIiwiaW1wb3J0IHtzdGJOdWxsfSBmcm9tICcuLi90b29kby9fc3RibnVsbCdcclxuaW1wb3J0IHtzdGJjbGl9IGZyb20gJy4uL3Rvb2RvL19zdGJjbGknO1xyXG5cclxuZnVuY3Rpb24gUGFnZVVybCgpIHtcclxufVxyXG5QYWdlVXJsLnByb3RvdHlwZSA9IHtcclxuICAgIHBhcnNlUXVlcnk6IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcXVlcnkuaW5kZXhPZignPycpO1xyXG4gICAgICAgIGlmIChzdGFydCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkuc2xpY2Uoc3RhcnQgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXJncyA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGFyciA9IHF1ZXJ5LnNwbGl0KCcmJyk7XHJcbiAgICAgICAgZm9yIChsZXQgbSA9IDA7IG0gPCBhcnIubGVuZ3RoOyBtKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdiA9IGFyclttXTtcclxuICAgICAgICAgICAgY29uc3QgdG1wID0gdi5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICBhcmdzW3RtcFswXV0gPSBkZWNvZGVVUklDb21wb25lbnQodG1wWzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyZ3M7XHJcbiAgICB9LFxyXG4gICAgcGFyc2VBcmdzOiBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIGxldCBrLCB2O1xyXG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICAgIGZvciAoayBpbiBhcmdzKSB7XHJcbiAgICAgICAgICAgIC8vISBqcyDkvJrmioonMCflvZPkvZxmYWxzZSBhcmdzW2tdID0+IGFyZ3Nba10gIT09ICcnXHJcbiAgICAgICAgICAgIGlmIChhcmdzLmhhc093blByb3BlcnR5KGspICYmIGFyZ3Nba10gIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB2ID0gZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3Nba10pO1xyXG4gICAgICAgICAgICAgICAgYXJyLnB1c2goayArICc9JyArIHYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnIuam9pbignJicpO1xyXG4gICAgfSxcclxuICAgIGJhc2VVcmw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArICcvdGRlbnRlcic7XHJcbiAgICB9LFxyXG4gICAgZ2V0VXNlcklkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0Yk51bGwuZ2V0VmFsdWUoJ3Rvb2RvLnVzZXJJZCcpO1xyXG4gICAgfSxcclxuICAgIGdldFN0YklkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0Yk51bGwuZ2V0Q2FyZFRWKCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0U2lnbktleTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0cyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBtc2cgPSB0aGlzLmdldFVzZXJJZCgpICsgdHM7XHJcbiAgICAgICAgdmFyIG1kNSA9IHN0YmNsaS5tZDUobXNnKTtcclxuICAgICAgICByZXR1cm4gbWQ1ICsgdHM7XHJcbiAgICB9LFxyXG4gICAgZ2V0Q2hpbGRMb2NrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfSxcclxuICAgIHJlY2hhcmdlVXJsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnL3Rkc3J2L2FwaS9jb2luJztcclxuICAgIH0sXHJcbiAgICBjYWxsVXJsOiBmdW5jdGlvbiAoaXRlbSwgcmV0dXJuVXJsKSB7XHJcbiAgICAgICAgbGV0IHJlY2hhcmdlVXJsID0gdGhpcy5yZWNoYXJnZVVybCgpO1xyXG4gICAgICAgIGxldCBhcmdzID0ge307XHJcbiAgICAgICAgYXJncy5nYW1laWQgPSBpdGVtLmdhbWVJZDtcclxuICAgICAgICBhcmdzLmtleSA9IHRoaXMuZ2V0U2lnbktleSgpO1xyXG4gICAgICAgIGFyZ3MuZGV2ID0gdGhpcy5nZXRTdGJJZCgpO1xyXG4gICAgICAgIGFyZ3MuZmF0aGVya2V5ID0gdGhpcy5nZXRDaGlsZExvY2soKTtcclxuICAgICAgICBhcmdzLnVzZXJJZCA9IHRoaXMuZ2V0VXNlcklkKCk7XHJcbiAgICAgICAgYXJncy51c2VyaWQgPSB0aGlzLmdldFVzZXJJZCgpO1xyXG4gICAgICAgIGFyZ3MudHMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBhcmdzLnJldHVyblVSTCA9IHJldHVyblVybDtcclxuXHJcbiAgICAgICAgdmFyIGhvc3ROYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lOyAvL+S4jeW4puerr+WPo1xyXG4gICAgICAgIHZhciBkc3RVcmwgPSBpdGVtLnVybDtcclxuICAgICAgICBkc3RVcmwgPSBkc3RVcmwucmVwbGFjZSgnMTkyLjE2OC4yMDAuMTAwJywgaG9zdE5hbWUpO1xyXG5cclxuICAgICAgICBsZXQgcGFyYW1zID0ge307XHJcbiAgICAgICAgcGFyYW1zLnJlZGlyZWN0VXJsID0gZHN0VXJsICsgJz8nICsgdGhpcy5wYXJzZUFyZ3MoYXJncykgKyAnJnJlY2hhZ2VVUkw9JyArIHJlY2hhcmdlVXJsO1xyXG4gICAgICAgIHBhcmFtcy5yZXR1cm5VcmwgPSByZXR1cm5Vcmw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVVybCgpICsgJy9yZXNpemUuaHRtbD8nICsgdGhpcy5wYXJzZUFyZ3MocGFyYW1zKTtcclxuICAgIH0sXHJcbiAgICBjYWxsVXJsQmFzZTogZnVuY3Rpb24gKGl0ZW0sIHJldHVyblVybCkge1xyXG4gICAgICAgIGxldCByZWNoYXJnZVVybCA9IHRoaXMucmVjaGFyZ2VVcmwoKTtcclxuICAgICAgICBsZXQgYXJncyA9IHt9O1xyXG4gICAgICAgIGFyZ3MuZ2FtZWlkID0gaXRlbS5nYW1lSWQ7XHJcbiAgICAgICAgYXJncy5rZXkgPSB0aGlzLmdldFNpZ25LZXkoKTtcclxuICAgICAgICBhcmdzLmRldiA9IHRoaXMuZ2V0U3RiSWQoKTtcclxuICAgICAgICBhcmdzLmZhdGhlcmtleSA9IHRoaXMuZ2V0Q2hpbGRMb2NrKCk7XHJcbiAgICAgICAgYXJncy51c2VySWQgPSB0aGlzLmdldFVzZXJJZCgpO1xyXG4gICAgICAgIGFyZ3MudXNlcmlkID0gdGhpcy5nZXRVc2VySWQoKTtcclxuICAgICAgICBhcmdzLnRzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgYXJncy5yZXR1cm5VUkwgPSByZXR1cm5Vcmw7XHJcblxyXG4gICAgICAgIHZhciBob3N0TmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTsgLy/kuI3luKbnq6/lj6NcclxuICAgICAgICB2YXIgZHN0VXJsID0gaXRlbS51cmw7XHJcbiAgICAgICAgZHN0VXJsID0gZHN0VXJsLnJlcGxhY2UoJzE5Mi4xNjguMjAwLjEwMCcsIGhvc3ROYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRzdFVybCArICc/JyArIHRoaXMucGFyc2VBcmdzKGFyZ3MpICsgJyZyZWNoYWdlVVJMPScgKyByZWNoYXJnZVVybDtcclxuICAgIH0sXHJcbiAgICBjYWxsR2FtZTogZnVuY3Rpb24gKGl0ZW0sIHJldHVyblVybCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5jYWxsVXJsKGl0ZW0sIHJldHVyblVybCk7XHJcbiAgICB9LFxyXG4gICAgY2FsbEdhbWVCYXNlOiBmdW5jdGlvbiAoaXRlbSwgcmV0dXJuVXJsKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmNhbGxVcmxCYXNlKGl0ZW0sIHJldHVyblVybCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBwYWdlVXJsID0gbmV3IFBhZ2VVcmwoKTtcclxuXHJcbmV4cG9ydCB7cGFnZVVybH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9QYWdlVXJsLmpzIiwiaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuLi90b29kby9fa2V5Y29kZXNcIjtcclxuaW1wb3J0IHtwYWdlVXJsfSBmcm9tICcuL1BhZ2VVcmwnO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSB7aW50fSBjYWxsYmFjay5idG4g5oyJ6ZSuIDAu56Gu5a6aIDEu5Y+W5raIXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBidG4g6buY6K6k54Sm54K5IDAu56Gu5a6aIDEu5Y+W5raIXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSDnqpflj6PmoIfpophcclxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQg56qX5Y+j5YaF5a65XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBidG4wIOaMiemSrjFcclxuICogQHBhcmFtIHtzdHJpbmd9IGJ0bjEg5oyJ6ZKuMlxyXG4gKi9cclxuZnVuY3Rpb24gc2hvd0RpYWxvZygvKmNhbGxiYWNrLCBidG4sIHRpdGxlLCB0ZXh0LCBidG4wLCBidG4xKi8pIHtcclxuICAgIGNvbnN0IGxheW91dElkID0gJ2RpYWxvZy1sYXlvdXQtMDAxJztcclxuICAgIGxldCBjYWxsYmFjaywgYnRuLCB0aXRsZSwgdGV4dCwgYnRuMCwgYnRuMTtcclxuICAgIGNhbGxiYWNrID0gYXJndW1lbnRzWzBdID8gYXJndW1lbnRzWzBdIDogbnVsbDtcclxuICAgIGJ0biA9IGFyZ3VtZW50c1sxXSA/IGFyZ3VtZW50c1sxXSA6IDA7XHJcbiAgICB0aXRsZSA9IGFyZ3VtZW50c1syXSA/IGFyZ3VtZW50c1syXSA6ICfmj5DnpLonO1xyXG4gICAgdGV4dCA9IGFyZ3VtZW50c1szXSA/IGFyZ3VtZW50c1szXSA6ICcnO1xyXG4gICAgYnRuMCA9IGFyZ3VtZW50c1s0XSA/IGFyZ3VtZW50c1s0XSA6ICfnoa7lrponO1xyXG4gICAgYnRuMSA9IGFyZ3VtZW50c1s1XSA/IGFyZ3VtZW50c1s1XSA6ICfov5Tlm54nO1xyXG4gICAgdmFyIGltZ1NyYyA9IGFyZ3VtZW50c1s2XSA/IGFyZ3VtZW50c1s2XSA6ICcnO1xyXG5cclxuICAgIGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYXlvdXRJZCk7XHJcbiAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICAgIGxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbGF5b3V0LmNsYXNzTmFtZSA9ICdkaWFsb2ctbGF5b3V0JztcclxuICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcclxuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJkaWFsb2ctYmdcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLXRpdGxlXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGltZyBjbGFzcz1cImRpYWxvZy1xci1pbWdcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLXFyLXRleHRcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwiZGlhbG9nLWJ0bjBcIiBzdHlsZT1cImxlZnQ6IDEyJTt0b3A6IDczJVwiIGNsYXNzPVwiZGlhbG9nLWJ0biBkaWFsb2ctYnRuMFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJkaWFsb2ctYnRuMVwiIHN0eWxlPVwibGVmdDogNTclO3RvcDogNzMlXCIgY2xhc3M9XCJkaWFsb2ctYnRuIGRpYWxvZy1idG4xXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcclxuICAgIH1cclxuICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIHZhciBiYWNrZ3JvdW5kID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctYmcnKTtcclxuICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgcXJJbWcgPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctcXItaW1nJyk7XHJcbiAgICBxckltZy5zcmMgPSBpbWdTcmM7XHJcblxyXG4gICAgdmFyIG5vZGVUaXRsZSA9IGJhY2tncm91bmQucXVlcnlTZWxlY3RvcignLmRpYWxvZy10aXRsZScpO1xyXG4gICAgbm9kZVRpdGxlLmlubmVySFRNTCA9IHRpdGxlO1xyXG4gICAgdmFyIG5vZGVUZXh0ID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLXFyLXRleHQnKTtcclxuICAgIG5vZGVUZXh0LmlubmVySFRNTCA9IHRleHQ7XHJcblxyXG4gICAgdmFyIG5vZGVCdG4wID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9nLWJ0bjAnKTtcclxuICAgIG5vZGVCdG4wLmlubmVySFRNTCA9IGJ0bjAgKyAnPGRpdj48L2Rpdj4nO1xyXG4gICAgdmFyIG5vZGVCdG4xID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9nLWJ0bjEnKTtcclxuICAgIG5vZGVCdG4xLmlubmVySFRNTCA9IGJ0bjEgKyAnPGRpdj48L2Rpdj4nO1xyXG5cclxuICAgIHZhciBidG5fMDA2ID0gbm9kZUJ0bjAucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcclxuICAgIHZhciBidG5fMDA2bm9uZSA9IG5vZGVCdG4xLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBmb2N1c0J0biA9IGZ1bmN0aW9uIChidG5JZHgpIHtcclxuICAgICAgICBpZiAoYnRuSWR4ID09IDApIHtcclxuICAgICAgICAgICAgbm9kZUJ0bjAuY2xhc3NOYW1lID0gXCIgXCIgKyBcImRpYWxvZ0J0bl8xIGRpYWxvZy1CdG5fZm9jdXNcIjtcclxuICAgICAgICAgICAgbm9kZUJ0bjEuY2xhc3NOYW1lID0gXCIgXCIgKyBcImRpYWxvZ0J0bl8wXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChidG5JZHggPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgbm9kZUJ0bjAuY2xhc3NOYW1lID0gXCIgXCIgKyBcImRpYWxvZ0J0bl8wXCI7XHJcbiAgICAgICAgICAgIG5vZGVCdG4xLmNsYXNzTmFtZSA9IFwiIFwiICsgXCJkaWFsb2dCdG5fMSBkaWFsb2ctQnRuX2ZvY3VzXCI7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBidG4gPSBidG5JZHg7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChidG4gPCAwIHx8IGJ0biA+IDEpIGJ0biA9IDA7XHJcbiAgICBmb2N1c0J0bihidG4pO1xyXG5cclxuICAgIGxldCBzdWJtaXQgPSBmYWxzZTtcclxuICAgIHZhciBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxuICAgIHZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBmb2N1c0J0bigwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBmb2N1c0J0bigxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUub2s6ICAgICAvL+ehruWumlxyXG4gICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6ICAgICAgLy/lj5bmtohcclxuICAgICAgICAgICAgICAgIGJ0biA9IDE7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdWJtaXQpIHtcclxuICAgICAgICAgICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soYnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2hvd0RpYWxvZ31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9kaWFsb2dRci5qcyIsImltcG9ydCB7cGFnZVVybH0gZnJvbSAnLi9hcHAvUGFnZVVybCc7XHJcbmltcG9ydCB7Y2FsbGJhY2tBcmdzLHR1cm5UYWJsZUFyZ3N9IGZyb20gJy4vYXBwL1BhZ2VBcmdzJztcclxuaW1wb3J0IHtzaG93RGlhbG9nfSBmcm9tIFwiLi9hcHAvZGlhbG9nUXJcIjtcclxuY29uc3QgYXJncyA9IHBhZ2VVcmwucGFyc2VRdWVyeSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbmlmIChhcmdzLmNvZGUgPT0gMCkge1xyXG4gICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGFyZ3MuZGF0YSk7XHJcbiAgICB2YXIgZmxhZz10dXJuVGFibGVBcmdzLmdldENhbGxGbGFnKCk7XHJcbiAgICB0dXJuVGFibGVBcmdzLnNldFN1Y2Nlc3NDb2RlKDEpO1xyXG4gICAgLy8hIOWkjeWQiOS6p+WTgeOAgei3s+iInuavr1xyXG4gICAgaWYgKGRhdGEuY29tcGxleCA9PSAxIHx8IGRhdGEucHJvZElkID09IDUgfHxmbGFnPT0xKSB7XHJcbiAgICAgICAgdmFyIGltZ1NyYyA9IGFyZ3MucXJJbWc7XHJcbiAgICAgICAgc2hvd0RpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjYWxsYmFja0FyZ3MuZ2V0UmVkaXJlY3RVcmwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY2FsbGJhY2tBcmdzLmdldFJldHVyblVybCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMCwgJ+Whq+WGmeS/oeaBrycsICfmiasgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmVkXCI+5LqM57u056CBPC9zcGFuPiDmiJbmi6jmiZPlrqLmnI3nlLXor50gPHNwYW4gc3R5bGU9XCJjb2xvcjogcmVkXCI+NDAwLTY2OC0yODg2PC9zcGFuPiDloavlhpnmlLbotKfkv6Hmga/vvIEnLCAn5a6M5oiQJywgJ+i/lOWbnicsIGltZ1NyYyk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0dXJuVGFibGVBcmdzLnNldFByaXplSUQoLTEpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY2FsbGJhY2tBcmdzLmdldFJlZGlyZWN0VXJsKCk7XHJcbiAgICB9XHJcbn0gZWxzZSB7XHJcbiAgICB0dXJuVGFibGVBcmdzLnNldFByaXplSUQoLTEpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjYWxsYmFja0FyZ3MuZ2V0UmV0dXJuVXJsKCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jYWxsYmFjay5qcyIsImltcG9ydCB7cmV0YWlsLHJldGFpbElkfSBmcm9tIFwiLi9fcmV0YWlsXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRLZXlDb2RlcygpIHtcclxuICAgIGxldCBrZXlNYXAgPSB7fTtcclxuXHJcbiAgICBpZiAocmV0YWlsSWQgPT0gcmV0YWlsLmd4Z2QpIHtcclxuICAgICAgICBrZXlNYXAgPSB7IC8vIOW5v+ilv+W5v+eUtVxyXG4gICAgICAgICAgICB1cDogMzgsICAgICAgICAvLyDkuIpcclxuICAgICAgICAgICAgZG93bjogNDAsICAgICAgLy8g5LiLXHJcbiAgICAgICAgICAgIGxlZnQ6IDM3LCAgICAgIC8vIOW3plxyXG4gICAgICAgICAgICByaWdodDogMzksICAgICAvLyDlj7NcclxuICAgICAgICAgICAgb2s6IDEzLCAgICAgICAgLy8g56Gu5a6aXHJcbiAgICAgICAgICAgIGYxOiA0MDAsICAgICAgIC8vIGYxIC8v57qiXHJcbiAgICAgICAgICAgIGYyOiA0MDEsICAgICAgIC8vIGYyIC8v6JOdXHJcbiAgICAgICAgICAgIGYzOiA0MDMsICAgICAgIC8vIGYzIC8v6buEXHJcbiAgICAgICAgICAgIGY0OiA0MDIsICAgICAgIC8vIGY0IC8v57u/XHJcbiAgICAgICAgICAgIG51bTE6IDQ5LCAgICAgIC8vIOaVsOWtlzFcclxuICAgICAgICAgICAgbnVtMjogNTAsICAgICAgLy8g5pWw5a2XMlxyXG4gICAgICAgICAgICBudW0zOiA1MSwgICAgICAvLyDmlbDlrZczXHJcbiAgICAgICAgICAgIG51bTQ6IDUyLCAgICAgIC8vIOaVsOWtlzRcclxuICAgICAgICAgICAgbnVtNTogNTMsICAgICAgLy8g5pWw5a2XNVxyXG4gICAgICAgICAgICBudW02OiA1NCwgICAgICAvLyDmlbDlrZc2XHJcbiAgICAgICAgICAgIG51bTc6IDU1LCAgICAgIC8vIOaVsOWtlzdcclxuICAgICAgICAgICAgbnVtODogNTYsICAgICAgLy8g5pWw5a2XOFxyXG4gICAgICAgICAgICBudW05OiA1NywgICAgICAvLyDmlbDlrZc5XHJcbiAgICAgICAgICAgIG51bTA6IDQ4LCAgICAgIC8vIOaVsOWtlzBcclxuICAgICAgICAgICAgbXV0ZTogNTE4LCAgICAgIC8vIOmdmemfs1xyXG4gICAgICAgICAgICBiYWNrOiAzOTksICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA0MDYsICAgICAvLyDlo7DpgZPvvJ8gLy/lo7DpgZPplK5cclxuICAgICAgICAgICAgdm9sVXA6IDUxNywgICAgLy8g5aKe5aSn6Z+z6YePXHJcbiAgICAgICAgICAgIHZvbERvd246IDUxNiwgIC8vIOWHj+Wwj+mfs+mHj1xyXG4gICAgICAgICAgICBmYXY6IDQwNCwgICAgICAgLy8g5Zac5qyiXHJcbiAgICAgICAgICAgIHBsYXlCYWNrOiA1MjEsICAvLyDlm57mlL4gIC8v54K55pKt6ZSuXHJcbiAgICAgICAgICAgIHBhZ2VVcDogMzMsICAgIC8vIOS4iuS4gOmhtVxyXG4gICAgICAgICAgICBwYWdlRG93bjogMzQsICAvLyDkuIvkuIDpobVcclxuICAgICAgICAgICAgbWVudTogNTE1LCAgICAgICAvLyDoj5zljZVcclxuICAgICAgICAgICAgZXNjOiA1MTQsICAgICAgICAvL+mAgOWHulxyXG4gICAgICAgICAgICBob21lOiA1MjBcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0gZWxzZSBpZiAocmV0YWlsSWQgPT0gcmV0YWlsLmhueXgpIHtcclxuICAgICAgICAvL2tleU1hcCA9IHsgLy8g5rKz5Y2X5pyJ57q/IGxpbnV4XHJcbiAgICAgICAgLy8gICAgdXA6IDY1MzYyLFxyXG4gICAgICAgIC8vICAgIGRvd246IDY1MzY0LFxyXG4gICAgICAgIC8vICAgIGxlZnQ6IDY1MzYxLFxyXG4gICAgICAgIC8vICAgIHJpZ2h0OiA2NTM2MyxcclxuICAgICAgICAvLyAgICBvazogNjUyOTMsXHJcbiAgICAgICAgLy8gICAgZjE6IDMyLFxyXG4gICAgICAgIC8vICAgIGYyOiAzMyxcclxuICAgICAgICAvLyAgICBmMzogMzQsXHJcbiAgICAgICAgLy8gICAgZjQ6IDM1LFxyXG4gICAgICAgIC8vICAgIG51bTE6IDQ5LFxyXG4gICAgICAgIC8vICAgIG51bTI6IDUwLFxyXG4gICAgICAgIC8vICAgIG51bTM6IDUxLFxyXG4gICAgICAgIC8vICAgIG51bTQ6IDUyLFxyXG4gICAgICAgIC8vICAgIG51bTU6IDUzLFxyXG4gICAgICAgIC8vICAgIG51bTY6IDU0LFxyXG4gICAgICAgIC8vICAgIG51bTc6IDU1LFxyXG4gICAgICAgIC8vICAgIG51bTg6IDU2LFxyXG4gICAgICAgIC8vICAgIG51bTk6IDU3LFxyXG4gICAgICAgIC8vICAgIG51bTA6IDQ4LFxyXG4gICAgICAgIC8vICAgIG11dGU6IDYzNTYzLFxyXG4gICAgICAgIC8vICAgIGJhY2s6IDY1MzY3LFxyXG4gICAgICAgIC8vICAgIHRyYWNrOiA2NTMwNyxcclxuICAgICAgICAvLyAgICB2b2xVcDogNjM1NjEsXHJcbiAgICAgICAgLy8gICAgdm9sRG93bjogNjM1NjIsXHJcbiAgICAgICAgLy8gICAgZmF2OiAzNixcclxuICAgICAgICAvLyAgICBwbGF5QmFjazogNzIsXHJcbiAgICAgICAgLy8gICAgcGFnZVVwOiAyNSxcclxuICAgICAgICAvLyAgICBwYWdlRG93bjogMjYsXHJcbiAgICAgICAgLy8gICAgbWVudTogNjUzNjAsXHJcbiAgICAgICAgLy8gICAgZXNjOiAyNyxcclxuICAgICAgICAvLyAgICBob21lOiA2NTM2MFxyXG4gICAgICAgIC8vfTtcclxuICAgICAgICBrZXlNYXAgPSB7IC8vIOays+WNl+aciee6vyBhbmRyb2lkXHJcbiAgICAgICAgICAgIHVwOiAzOCwgICAgICAgIC8vIOS4ilxyXG4gICAgICAgICAgICBkb3duOiA0MCwgICAgICAvLyDkuItcclxuICAgICAgICAgICAgbGVmdDogMzcsICAgICAgLy8g5bemXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzOSwgICAgIC8vIOWPs1xyXG4gICAgICAgICAgICBvazogMTMsICAgICAgICAvLyDnoa7lrppcclxuICAgICAgICAgICAgZjE6IDExMiwgICAgICAgLy8gZjFcclxuICAgICAgICAgICAgZjI6IDExMywgICAgICAgLy8gZjJcclxuICAgICAgICAgICAgZjM6IDExNCwgICAgICAgLy8gZjNcclxuICAgICAgICAgICAgZjQ6IDExNSwgICAgICAgLy8gZjRcclxuICAgICAgICAgICAgbnVtMTogNDksICAgICAgLy8g5pWw5a2XMVxyXG4gICAgICAgICAgICBudW0yOiA1MCwgICAgICAvLyDmlbDlrZcyXHJcbiAgICAgICAgICAgIG51bTM6IDUxLCAgICAgIC8vIOaVsOWtlzNcclxuICAgICAgICAgICAgbnVtNDogNTIsICAgICAgLy8g5pWw5a2XNFxyXG4gICAgICAgICAgICBudW01OiA1MywgICAgICAvLyDmlbDlrZc1XHJcbiAgICAgICAgICAgIG51bTY6IDU0LCAgICAgIC8vIOaVsOWtlzZcclxuICAgICAgICAgICAgbnVtNzogNTUsICAgICAgLy8g5pWw5a2XN1xyXG4gICAgICAgICAgICBudW04OiA1NiwgICAgICAvLyDmlbDlrZc4XHJcbiAgICAgICAgICAgIG51bTk6IDU3LCAgICAgIC8vIOaVsOWtlzlcclxuICAgICAgICAgICAgbnVtMDogNDgsICAgICAgLy8g5pWw5a2XMCAvL+aVsOWtlzAg6L+U5ZueXHJcbiAgICAgICAgICAgIG11dGU6IDc3LCAgICAgIC8vIOmdmemfs1xyXG4gICAgICAgICAgICBiYWNrOiA4LCAgICAgIC8vIOi/lOWbnlxyXG4gICAgICAgICAgICB0cmFjazogODIsICAgICAvLyDlo7DpgZPvvJ9cclxuICAgICAgICAgICAgdm9sVXA6IDE5MCwgICAgLy8g5aKe5aSn6Z+z6YePXHJcbiAgICAgICAgICAgIHZvbERvd246IDE4OCwgIC8vIOWHj+Wwj+mfs+mHj1xyXG4gICAgICAgICAgICBmYXY6IDg0LCAgICAgICAvLyDllpzmrKJcclxuICAgICAgICAgICAgcGxheUJhY2s6IDgwLCAgLy8g5Zue5pS+XHJcbiAgICAgICAgICAgIHBhZ2VVcDogMzMsICAgIC8vIOS4iuS4gOmhtVxyXG4gICAgICAgICAgICBwYWdlRG93bjogMzQsICAvLyDkuIvkuIDpobVcclxuICAgICAgICAgICAgbWVudTogNzIsICAgICAgIC8vIOiPnOWNlVxyXG4gICAgICAgICAgICBlc2M6IDI3LFxyXG4gICAgICAgICAgICBob21lOiA3MlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ2RnZCkge1xyXG4gICAgICAgIGtleU1hcCA9IHsgLy8g5bm/5Lic5bm/55S1XHJcbiAgICAgICAgICAgIHVwOiA4NywgICAgICAgIC8vIOS4iiBX6ZSuXHJcbiAgICAgICAgICAgIGRvd246IDgzLCAgICAgIC8vIOS4iyBT6ZSuXHJcbiAgICAgICAgICAgIGxlZnQ6IDY1LCAgICAgIC8vIOW3piBB6ZSuXHJcbiAgICAgICAgICAgIHJpZ2h0OiA2OCwgICAgIC8vIOWPsyBE6ZSuXHJcbiAgICAgICAgICAgIG9rOiAxMywgICAgICAgIC8vIOehruWumlxyXG4gICAgICAgICAgICBmMTogNDAwLCAgICAgICAvLyBmMSAvL+e6olxyXG4gICAgICAgICAgICBmMjogNDAxLCAgICAgICAvLyBmMiAvL+iTnVxyXG4gICAgICAgICAgICBmMzogNDAyLCAgICAgICAvLyBmMyAvL+m7hFxyXG4gICAgICAgICAgICBmNDogNDAzLCAgICAgICAvLyBmNCAvL+e7v1xyXG4gICAgICAgICAgICBudW0xOiA0OSwgICAgICAvLyDmlbDlrZcxXHJcbiAgICAgICAgICAgIG51bTI6IDUwLCAgICAgIC8vIOaVsOWtlzJcclxuICAgICAgICAgICAgbnVtMzogNTEsICAgICAgLy8g5pWw5a2XM1xyXG4gICAgICAgICAgICBudW00OiA1MiwgICAgICAvLyDmlbDlrZc0XHJcbiAgICAgICAgICAgIG51bTU6IDUzLCAgICAgIC8vIOaVsOWtlzVcclxuICAgICAgICAgICAgbnVtNjogNTQsICAgICAgLy8g5pWw5a2XNlxyXG4gICAgICAgICAgICBudW03OiA1NSwgICAgICAvLyDmlbDlrZc3XHJcbiAgICAgICAgICAgIG51bTg6IDU2LCAgICAgIC8vIOaVsOWtlzhcclxuICAgICAgICAgICAgbnVtOTogNTcsICAgICAgLy8g5pWw5a2XOVxyXG4gICAgICAgICAgICBudW0wOiA0OCwgICAgICAvLyDmlbDlrZcwXHJcbiAgICAgICAgICAgIG11dGU6IDY3LCAgICAgIC8vIOmdmemfs1xyXG4gICAgICAgICAgICBiYWNrOiA4LCAgICAgIC8vIOi/lOWbnlxyXG4gICAgICAgICAgICB0cmFjazogODYsICAgICAvLyDlo7DpgZPvvJ8gLy/lo7DpgZPplK5cclxuICAgICAgICAgICAgdm9sVXA6IDYxLCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogNDUsICAvLyDlh4/lsI/pn7Pph49cclxuICAgICAgICAgICAgZmF2OiA3NiwgICAgICAgLy8g5Zac5qyiXHJcbiAgICAgICAgICAgIHBsYXlCYWNrOiA1MjEsICAvLyDlm57mlL4gIC8v54K55pKt6ZSuXHJcbiAgICAgICAgICAgIHBhZ2VVcDogMzA2LCAgICAvLyDkuIrkuIDpobVcclxuICAgICAgICAgICAgcGFnZURvd246IDMwNywgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA3MiwgICAgICAgLy8g6I+c5Y2VXHJcbiAgICAgICAgICAgIGVzYzogMjcsXHJcbiAgICAgICAgICAgIGhvbWU6IDcyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9IGVsc2UgeyAvLyB3aW5kb3dzIOmUrueggVxyXG4gICAgICAgIGtleU1hcCA9IHtcclxuICAgICAgICAgICAgdXA6IDM4LCAgICAgICAgLy8g5LiKXHJcbiAgICAgICAgICAgIGRvd246IDQwLCAgICAgIC8vIOS4i1xyXG4gICAgICAgICAgICBsZWZ0OiAzNywgICAgICAvLyDlt6ZcclxuICAgICAgICAgICAgcmlnaHQ6IDM5LCAgICAgLy8g5Y+zXHJcbiAgICAgICAgICAgIG9rOiAxMywgICAgICAgIC8vIOehruWumlxyXG4gICAgICAgICAgICBmMTogMTEyLCAgICAgICAvLyBmMVxyXG4gICAgICAgICAgICBmMjogMTEzLCAgICAgICAvLyBmMlxyXG4gICAgICAgICAgICBmMzogMTE0LCAgICAgICAvLyBmM1xyXG4gICAgICAgICAgICBmNDogMTE1LCAgICAgICAvLyBmNFxyXG4gICAgICAgICAgICBudW0xOiA0OSwgICAgICAvLyDmlbDlrZcxXHJcbiAgICAgICAgICAgIG51bTI6IDUwLCAgICAgIC8vIOaVsOWtlzJcclxuICAgICAgICAgICAgbnVtMzogNTEsICAgICAgLy8g5pWw5a2XM1xyXG4gICAgICAgICAgICBudW00OiA1MiwgICAgICAvLyDmlbDlrZc0XHJcbiAgICAgICAgICAgIG51bTU6IDUzLCAgICAgIC8vIOaVsOWtlzVcclxuICAgICAgICAgICAgbnVtNjogNTQsICAgICAgLy8g5pWw5a2XNlxyXG4gICAgICAgICAgICBudW03OiA1NSwgICAgICAvLyDmlbDlrZc3XHJcbiAgICAgICAgICAgIG51bTg6IDU2LCAgICAgIC8vIOaVsOWtlzhcclxuICAgICAgICAgICAgbnVtOTogNTcsICAgICAgLy8g5pWw5a2XOVxyXG4gICAgICAgICAgICBudW0wOiA0OCwgICAgICAvLyDmlbDlrZcwIC8v5pWw5a2XMCDov5Tlm55cclxuICAgICAgICAgICAgbXV0ZTogNzcsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDgsICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA4MiwgICAgIC8vIOWjsOmBk++8n1xyXG4gICAgICAgICAgICB2b2xVcDogMTkwLCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogMTg4LCAgLy8g5YeP5bCP6Z+z6YePXHJcbiAgICAgICAgICAgIGZhdjogODQsICAgICAgIC8vIOWWnOasolxyXG4gICAgICAgICAgICBwbGF5QmFjazogODAsICAvLyDlm57mlL5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMywgICAgLy8g5LiK5LiA6aG1XHJcbiAgICAgICAgICAgIHBhZ2VEb3duOiAzNCwgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA3MiwgICAgICAgLy8g6I+c5Y2VXHJcbiAgICAgICAgICAgIGVzYzogMjcsXHJcbiAgICAgICAgICAgIGhvbWU6IDcyXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBrZXlNYXA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV2ZW50KGV2dCkge1xyXG4gICAgcmV0dXJuIGV2dCB8fCB3aW5kb3cuZXZlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEtleShldnQpIHtcclxuICAgIC8v5pSv5oyBSUXjgIFGRlxyXG4gICAgZXZ0ID0gZ2V0RXZlbnQoZXZ0KTtcclxuICAgIHJldHVybiBldnQua2V5Q29kZSB8fCBldnQud2hpY2ggfHwgZXZ0LmNoYXJDb2RlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb2RlcygpIHtcclxuICAgIGNvbnN0IGtleU1hcCA9IGdldEtleUNvZGVzKCk7XHJcbiAgICB2YXIgY29kZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGNvZGUgaW4ga2V5TWFwKSB7XHJcbiAgICAgICAgaWYgKGtleU1hcC5oYXNPd25Qcm9wZXJ0eShjb2RlKSkge1xyXG4gICAgICAgICAgICBjb2Rlcy5wdXNoKGtleU1hcFtjb2RlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvZGVzO1xyXG59XHJcblxyXG5leHBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19rZXljb2Rlcy5qcyIsImNvbnN0IHJldGFpbCA9IHtcclxuICAgIGd4Z2Q6ICc5NjMzNScsXHJcbiAgICBobnl4OiAnOTYyNjYnLFxyXG4gICAgZ2RnZDogJzk2OTU2JyxcclxuICAgIG5vbmU6ICcxMDAwJ1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0UmV0YWlsSWQoKSB7XHJcbiAgICB0cnkgey8v5bm/6KW/5bm/55S1XHJcbiAgICAgICAgaWYgKGd1YW5neGkgJiYgaVBhbmVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXRhaWwuZ3hnZDtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICB0cnkgey8v5rKz5Y2X5pyJ57q/XHJcbiAgICAgICAgdmFyIFN5c3RlbSA9IHdpbmRvdy5TeXN0ZW07XHJcbiAgICAgICAgaWYgKFN5c3RlbSAmJiBTeXN0ZW0uc3RiSUQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJldGFpbC5obnl4O1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHRyeSB7Ly/lub/kuJzlub/nlLVcclxuICAgICAgICBpZiAoQ0EgJiYgU3RvcmFnZVNlcnZpY2UgJiYgRmlsZVN5c3RlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0YWlsLmdkZ2Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdmFyIHN0b3JhZ2VMaXN0ID0gU3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZUluZm9zKCk7XHJcbiAgICAgICAgLy9pZiAoc3RvcmFnZUxpc3QgJiYgc3RvcmFnZUxpc3QgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvLyAgICB2YXIgcGFydGl0aW9uUGF0aExpc3QgPSBzdG9yYWdlTGlzdFswXS5nZXRQYXJ0aXRpb25zSW5mbygpWzBdO1xyXG4gICAgICAgIC8vICAgIHZhciBwYXJ0aXRpb25QYXRoID0gcGFydGl0aW9uUGF0aExpc3QucGF0aDtcclxuICAgICAgICAvLyAgICB2YXIgZGlyID0gRmlsZVN5c3RlbS5nZXREaXJlY3RvcnkocGFydGl0aW9uUGF0aCk7XHJcbiAgICAgICAgLy8gICAgdmFyIGZsaXN0ID0gZGlyLmZpbGVMaXN0O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgZm9yICh2YXIgaSBpbiBmbGlzdCkge1xyXG4gICAgICAgIC8vICAgICAgICBpZiAoZmxpc3RbaV0ubmFtZS5zdWJzdHJpbmcoMCwgNikgPT0gXCJjYWNhcmRcIikge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgdmFyIGNhcmRObyA9IFwiOTY5NTZcIiArIGZsaXN0W2ldLm5hbWUuc3Vic3RyaW5nKDYsIDEyKTtcclxuICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAvL31cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHJldHVybiByZXRhaWwubm9uZTtcclxufVxyXG5cclxudmFyIHJldGFpbElkID0gZ2V0UmV0YWlsSWQoKTtcclxuZXhwb3J0IHtyZXRhaWwsZ2V0UmV0YWlsSWQscmV0YWlsSWR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3JldGFpbC5qcyIsImltcG9ydCB7UmVxdWVzdEJvZHksIFRvb2RvQ2xpZW50fSBmcm9tIFwiLi9fdGRjbGlcIjtcclxuaW1wb3J0IHtyZXRhaWxJZCxyZXRhaWx9IGZyb20gXCIuL19yZXRhaWxcIjtcclxuaW1wb3J0IHtzdGJOdWxsfSBmcm9tIFwiLi9fc3RibnVsbFwiO1xyXG52YXIgbWQ1ID0gcmVxdWlyZSgnbWQ1Jyk7XHJcbnZhciBKU09OID0gcmVxdWlyZSgnSlNPTicpO1xyXG5cclxuZnVuY3Rpb24gU3RiQ2xpZW50KCkge1xyXG4gICAgLy8gdGhpcy5vcmlnaW5VcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy90ZHNydic7XHJcbiAgICB0aGlzLm9yaWdpblVybCA9IFwiaHR0cDovL2xvY2FsaG9zdC9Ub29kb1NlcnZpY2UvcHVibGljL1wiO1xyXG4gICAgdGhpcy5hcHBLZXkgPSAnMTAwMCc7XHJcbiAgICB0aGlzLmFwcFNlY3JldCA9ICdSY09GaHRBWXp3Q0dvOTFQR0hkVic7XHJcbiAgICB0aGlzLl90ZGNsaSA9IG51bGw7XHJcbn1cclxuU3RiQ2xpZW50LnByb3RvdHlwZSA9IHtcclxuICAgIGlzUmVhZHk6IGZhbHNlLFxyXG4gICAgdXNlcklkOiAnJyxcclxuICAgIHRva2VuOiAnJyxcclxuXHJcbiAgICBtZDU6IGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICByZXR1cm4gbWQ1KG1zZyArIHRoaXMuYXBwU2VjcmV0KTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBjYWxsYmFjay5iaXpcclxuICAgICAqL1xyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX3RkY2xpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RkY2xpID0gbmV3IFRvb2RvQ2xpZW50KHRoaXMuYXBwS2V5LCB0aGlzLmFwcFNlY3JldCwgdGhpcy5vcmlnaW5VcmwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRva2VuID0gc3RiTnVsbC5nZXRWYWx1ZSgndG9vZG8udG9rZW4nKTtcclxuICAgICAgICBsZXQgdXNlcklkID0gc3RiTnVsbC5nZXRWYWx1ZSgndG9vZG8udXNlcklkJyk7XHJcbiAgICAgICAgLy8gaWYgKHRva2VuICYmIHVzZXJJZCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRva2VuID0gdG9rZW47XHJcbiAgICAgICAgLy8gICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKDApO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ3JldGFpbElkJzogcmV0YWlsSWQsXHJcbiAgICAgICAgICAgICdyZWdpb25Db2RlJzogc3RiTnVsbC5nZXRSZWdpb25Db2RlKCksXHJcbiAgICAgICAgICAgICdjYXJkVFYnOiBzdGJOdWxsLmdldENhcmRUVigpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdXNlcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcblxyXG4gICAgICAgIGNvbnN0IG93bmVyID0gdGhpcztcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kbycpO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNlbmQoYm9keUluLCBmdW5jdGlvbiAoYm9keU91dCkge1xyXG4gICAgICAgICAgICBpZiAoYm9keU91dC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJpek91dCA9IEpTT04ucGFyc2UoYm9keU91dC5iaXpDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIG93bmVyLnVzZXJJZCA9IGJpek91dC51c2VySWQ7XHJcbiAgICAgICAgICAgICAgICBvd25lci50b2tlbiA9IGJvZHlPdXQudG9rZW47XHJcbiAgICAgICAgICAgICAgICBzdGJOdWxsLnNldFZhbHVlKCd0b29kby51c2VySWQnLCBvd25lci51c2VySWQpO1xyXG4gICAgICAgICAgICAgICAgc3RiTnVsbC5zZXRWYWx1ZSgndG9vZG8udG9rZW4nLCBvd25lci50b2tlbik7XHJcbiAgICAgICAgICAgICAgICBvd25lci5pc1JlYWR5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL293bmVyLnRkZVVzZXIoY2FsbGJhY2spOy8v6L+U5Zue5aSn5Y6F55qE6LSm5Y+35L+h5oGvXHJcbiAgICAgICAgICAgICAgICBvd25lci50ZGVVc2VyKGZ1bmN0aW9uIChjb2RlLCBiaXopIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpei5iaXpVc2VyID0gYml6T3V0LmJpelVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soY29kZSwgYml6KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0LmNvZGUsIGJvZHlPdXQuc3ViQ29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBiaXpVc2VyOiBmdW5jdGlvbiAoYml6SW4sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vYml6VXNlcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8nKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgYWRkV2lubmVyOiBmdW5jdGlvbiAocHJpemVJRCxzdGF0ZSxjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncHJpemVJRCc6cHJpemVJRCxcclxuICAgICAgICAgICAgJ3N0YXRlJzpzdGF0ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9hZGRXaW5uZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICBhZGRTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9hZGRTdGF0ZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0YUZyZWVTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS91cGRhdGFGcmVlU3RhdGUnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluKTtcclxuICAgIH0sXHJcbiAgICBnZXRQcml6ZTogZnVuY3Rpb24gKGlkLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdpZCc6aWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9nZXRQcml6ZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIHR1cm50YWJsZVN0YXRlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvdHVybnRhYmxlU3RhdGUnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIC8vIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgdHVybnRhYmxlUHJvOiBmdW5jdGlvbiAodHlwZSxjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgJ3R5cGUnOnR5cGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS90dXJudGFibGVQcm8nO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgcHJpemVOdW06ZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3R1cm50YWJsZVByaXplTnVtJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuXHJcbiAgICB3aW5uZXJJbmZvOiBmdW5jdGlvbiAobnVtLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdudW0nOiBudW1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS93aW5uZXJJbmZvJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgMe+8muacqumihuWPliAyOuW3sumihuWPliAz77ya5bey6L+H5pyfXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICB1c2VyV2lubmVyOiBmdW5jdGlvbiAodHlwZSxjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAndHlwZSc6IHR5cGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS91c2VyV2lubmVyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgYWRkQ29pbnM6IGZ1bmN0aW9uIChhZGROdW0pIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ2FkZE51bic6IGFkZE51bVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2FkZENvaW4nO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9kdWN0SWQg5p+l6K+i55qE5Lqn5ZOB57uf5LiA57yW5Y+3XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gY2FsbGJhY2suYml6XHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5U2VydmUxOiBmdW5jdGlvbiAocHJvZHVjdElkLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncHJvZHVjdElkJzogcHJvZHVjdElkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby9zZXJ2ZS9xdWVyeTEnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3NlcnZlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2R1Y3RJZCDmn6Xor6LnmoTkuqflk4Hnu5/kuIDnvJblj7dcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpelxyXG4gICAgICovXHJcbiAgICBxdWVyeVByb2R1Y3QxOiBmdW5jdGlvbiAocHJvZHVjdElkLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncHJvZHVjdElkJzogcHJvZHVjdElkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby9tYXJrZXQvcXVlcnkxJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby9tYXJrZXQnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvZHVjdElkIOeUn+aIkOiuouWNleeahOS6p+WTgee7n+S4gOe8luWPt1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNhbGxiYWNrVXJsIOaUr+S7mOWQjuWbnuiwg+WcsOWdgFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEg5Y6f5qC35Lyg5Zue57uZY2FsbGJhY2tVcmxcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpelxyXG4gICAgICovXHJcbiAgICBvcmRlcjE6IGZ1bmN0aW9uIChwcm9kdWN0SWQsIGNhbGxiYWNrVXJsLCBkYXRhLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncHJvZHVjdElkJzogcHJvZHVjdElkLFxyXG4gICAgICAgICAgICAndXNlcklkJzogdGhpcy51c2VySWQsXHJcbiAgICAgICAgICAgICdjYWxsYmFja1VybCc6IGNhbGxiYWNrVXJsLFxyXG4gICAgICAgICAgICAnZGF0YSc6IGRhdGFcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RyYWRlL29yZGVyMSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdHJhZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhZGVObyDor7fmsYLmlK/ku5jorqLljZXlj7dcclxuICAgICAqL1xyXG4gICAgcGF5OiBmdW5jdGlvbiAodHJhZGVObykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAndHJhZGVObyc6IHRyYWRlTm9cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RyYWRlL3BheSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdHJhZGUnKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zdWJtaXQoYm9keUluKTtcclxuICAgIH0sXHJcbiAgICBiaWxsOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90cmFkZS9iaWxsJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RyYWRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpeiDov5Tlm57otKblj7fkv6Hmga9cclxuICAgICAqL1xyXG4gICAgdGRlVXNlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3VzZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIHRkZUxvY2s6IGZ1bmN0aW9uIChvbGRMb2NrLCBuZXdMb2NrLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnY2hpbGRMb2NrJzogb2xkTG9jayxcclxuICAgICAgICAgICAgJ25ld0xvY2snOiBuZXdMb2NrXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvbG9jayc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2Ug6aG16Z2i57yW5Y+3XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnumhtemdouS/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGVQYWdlOiBmdW5jdGlvbiAocGFnZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ3BhZ2UnOiBwYWdlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvcGFnZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhdGVnb3J5IOatjOabsuWIhuexu1xyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpeiDov5Tlm57pobXpnaLkv6Hmga9cclxuICAgICAqL1xyXG4gICAgdGRhU29uZzogZnVuY3Rpb24gKGNhdGVnb3J5LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnY2F0ZWdvcnknOiBjYXRlZ29yeVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL3NvbmcnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICB0ZGFTb25nMTogZnVuY3Rpb24gKHNvbmdJZCwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ3NvbmdJZCc6IHNvbmdJZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL3NvbmcxJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGEnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnumhtemdouS/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGFNYXRjaDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL21hdGNoJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkYVVzZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkYS91c2VyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmQg6K6w5b2VXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnumhtemdouS/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGFSZWNvcmQ6IGZ1bmN0aW9uIChyZWNvcmQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL3JlY29yZCc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShyZWNvcmQpO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVxdWVzdEJvZHl9IGJvZHlJblxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R8bnVtYmVyfHN0cmluZ30gY2FsbGJhY2suYml6IOi/lOWbnuaVsOaNrlxyXG4gICAgICovXHJcbiAgICBzZW5kOiBmdW5jdGlvbiAoYm9keUluLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IG93bmVyID0gdGhpcztcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZW5kKGJvZHlJbiwgZnVuY3Rpb24gKGJvZHlPdXQpIHtcclxuICAgICAgICAgICAgaWYgKGJvZHlPdXQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYml6T3V0ID0gSlNPTi5wYXJzZShib2R5T3V0LmJpekNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvZHlPdXQudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci50b2tlbiA9IGJvZHlPdXQudG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgc3RiTnVsbC5zZXRWYWx1ZSgndG9vZG8udG9rZW4nLCBvd25lci50b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgMSk7ICAgICAgICAgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgXCIxXCIpOyAgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiB0cnVlKTsgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJib29sZWFuXCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2Yge30pOyAgICAgICAgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgW10pOyAgICAgICAgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwib2JqZWN0IFwiXHJcbiAgICAgICAgICAgICAgICAgYWxlcnQodHlwZW9mIGZ1bmN0aW9uKCl7fSk7ICAgICAvLyDov5Tlm57lrZfnrKbkuLJcImZ1bmN0aW9uXCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgbnVsbCk7ICAgICAgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgdW5kZWZpbmVkKTsgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaWYgKGJpek91dCAmJiB0eXBlb2YoYml6T3V0KSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBiaXpPdXQuc3RiY2xpID0gb3duZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQuY29kZSwgYml6T3V0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dC5jb2RlLCBib2R5T3V0LnN1YkNvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxudmFyIHN0YmNsaSA9IG5ldyBTdGJDbGllbnQoKTtcclxuZXhwb3J0IHtTdGJDbGllbnQsc3RiY2xpfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3N0YmNsaS5qcyIsImltcG9ydCB7cmV0YWlsSWQscmV0YWlsfSBmcm9tIFwiLi9fcmV0YWlsXCI7XHJcblxyXG5mdW5jdGlvbiBTdGJOdWxsKCkge1xyXG59XHJcbmlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ3hnZCkgey8vIOW5v+ilv+W5v+eUtSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBTdGJOdWxsLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAvL+iOt+WPluacuumhtuebkuWPt+Wtl+espuS4slxyXG4gICAgICAgIGdldENhcmRUVjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ3Vhbmd4aS5nZXRTdGJOdW0oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v6I635Y+W5Yy65Z+f56CB5bi45pWwXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaVBhbmVsLmdldEdsb2JhbFZhcihcIkdFVF9NRURJQV9SRUdJT05fSURcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpUGFuZWwuZ2V0R2xvYmFsVmFyKGtleU5hbWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYUNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhQ29va2llLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFDcnVtYiA9IGFDb29raWVbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlc2NhcGUoa2V5TmFtZSkgPT0gYUNydW1iWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHVuZXNjYXBlKGFDcnVtYlsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCB8fCByZXN1bHQgPT0gXCIjXCIgfHwgcmVzdWx0ID09IFwiY2xlYXJWYWx1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXlWYWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlWYWx1ZSA9IFwiY2xlYXJWYWx1ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpUGFuZWwuc2V0R2xvYmFsVmFyKGtleU5hbWUsIGtleVZhbHVlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gZXNjYXBlKGtleU5hbWUpICsgXCI9XCIgKyBlc2NhcGUoa2V5VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuaG55eCkgey8vIOays+WNl+aciee6vyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB2YXIgU3lzdGVtID0gd2luZG93LlN5c3RlbTtcclxuICAgIFN0Yk51bGwucHJvdG90eXBlID0ge1xyXG4gICAgICAgIGdldENhcmRUVjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gU3lzdGVtLnN0YklEO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVnaW9uID0gJ2hueXgnO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVnaW9uID0gU3lzdGVtLkdldENBUmVnaW9uSUQoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZWdpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgZyA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBnID0gbmV3IEdsb2JhbChrZXlOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IG5ldyBHbG9iYWwyKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgZyA9IHt2YWx1ZTogbnVsbH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGcudmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBnID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBuZXcgR2xvYmFsKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBnID0gbmV3IEdsb2JhbDIoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZy52YWx1ZSA9IGtleVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0gZWxzZSBpZiAocmV0YWlsSWQgPT0gcmV0YWlsLmdkZ2QpIHsvLyDlub/kuJzlub/nlLUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgU3RiTnVsbC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghQ0EuaWNObykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICc5Njk1NjEwMDg2JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gQ0EuaWNObztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFJlZ2lvbkNvZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIENBLnJlZ2lvbkNvZGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFN5c1NldHRpbmcuZ2V0RW52KGtleU5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lLCBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICBTeXNTZXR0aW5nLnNldEVudihrZXlOYW1lLCBrZXlWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSBlbHNlIHtcclxuICAgIFN0Yk51bGwucHJvdG90eXBlID0ge1xyXG4gICAgICAgIGdldENhcmRUVjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJzEwMDg2JztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFJlZ2lvbkNvZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcwJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGFDb29raWUgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhQ29va2llLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhQ3J1bWIgPSBhQ29va2llW2ldLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChlc2NhcGUoa2V5TmFtZSkgPT0gYUNydW1iWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdW5lc2NhcGUoYUNydW1iWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lLCBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBlc2NhcGUoa2V5TmFtZSkgKyBcIj1cIiArIGVzY2FwZShrZXlWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxudmFyIHN0Yk51bGwgPSBuZXcgU3RiTnVsbCgpO1xyXG5leHBvcnQge1N0Yk51bGwsc3RiTnVsbH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19zdGJudWxsLmpzIiwidmFyIG1kNSA9IHJlcXVpcmUoJ21kNScpO1xyXG52YXIgSlNPTiA9IHJlcXVpcmUoJ0pTT04nKTtcclxuXHJcbmlmICghRGF0ZS5wcm90b3R5cGUuZm9ybWF0KSB7XHJcbiAgICBEYXRlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoZm10KSB7XHJcbiAgICAgICAgY29uc3QgbyA9IHtcclxuICAgICAgICAgICAgXCJNK1wiOiB0aGlzLmdldE1vbnRoKCkgKyAxLCAgICAgICAgICAgICAgICAgLy/mnIjku71cclxuICAgICAgICAgICAgXCJkK1wiOiB0aGlzLmdldERhdGUoKSwgICAgICAgICAgICAgICAgICAgIC8v5pelXHJcbiAgICAgICAgICAgIFwiaCtcIjogdGhpcy5nZXRIb3VycygpLCAgICAgICAgICAgICAgICAgICAvL+Wwj+aXtlxyXG4gICAgICAgICAgICBcIm0rXCI6IHRoaXMuZ2V0TWludXRlcygpLCAgICAgICAgICAgICAgICAgLy/liIZcclxuICAgICAgICAgICAgXCJzK1wiOiB0aGlzLmdldFNlY29uZHMoKSwgICAgICAgICAgICAgICAgIC8v56eSXHJcbiAgICAgICAgICAgIFwicStcIjogTWF0aC5mbG9vcigodGhpcy5nZXRNb250aCgpICsgMykgLyAzKSwgLy/lraPluqZcclxuICAgICAgICAgICAgXCJTXCI6IHRoaXMuZ2V0TWlsbGlzZWNvbmRzKCkgICAgICAgICAgICAgLy/mr6vnp5JcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICgvKHkrKS8udGVzdChmbXQpKSB7XHJcbiAgICAgICAgICAgIGZtdCA9IGZtdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKHRoaXMuZ2V0RnVsbFllYXIoKSArIFwiXCIpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBrIGluIG8pIHtcclxuICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAoXCIoXCIgKyBrICsgXCIpXCIpLnRlc3QoZm10KSkge1xyXG4gICAgICAgICAgICAgICAgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoUmVnRXhwLiQxLmxlbmd0aCA9PSAxKSA/IChvW2tdKSA6ICgoXCIwMFwiICsgb1trXSkuc3Vic3RyKChcIlwiICsgb1trXSkubGVuZ3RoKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmbXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXF1ZXN0Qm9keSgpIHtcclxuICAgIHRoaXMuYXBwSWQgPSAnJzsgICAgICAgICAgICAgICAvLyDliIbphY3nu5nlvIDlj5HogIXnmoTlupTnlKhJRDoxMDAwXHJcbiAgICB0aGlzLm1ldGhvZCA9ICcnOyAgICAgICAgICAgICAgLy8g5o6l5Y+j5ZCN56ewOnRvb2RvLnRyYWRlLnBheVxyXG4gICAgdGhpcy5mb3JtYXQgPSAnSlNPTic7ICAgICAgICAgIC8vIOS7heaUr+aMgUpTT05cclxuICAgIHRoaXMuY2hhcnNldCA9ICd1dGYtOCc7ICAgICAgICAvLyDor7fmsYLkvb/nlKjnmoTnvJbnoIHmoLzlvI/vvIzlpoJ1dGYtOCxnYmssZ2IyMzEy562JXHJcbiAgICB0aGlzLnNpZ25UeXBlID0gJ01ENSc7ICAgICAgICAgLy8g5ZWG5oi355Sf5oiQ562+5ZCN5a2X56ym5Liy5omA5L2/55So55qE562+5ZCN566X5rOV57G75Z6LOlJTQeOAgU1ENVxyXG4gICAgdGhpcy5zaWduQ29kZSA9ICcnOyAgICAgICAgICAgIC8vIOWVhuaIt+ivt+axguWPguaVsOeahOetvuWQjeS4siAzMuS9jeWwj+WGmVxyXG4gICAgdGhpcy50aW1lc3RhbXAgPSAnJzsgICAgICAgICAgIC8vIOWPkemAgeivt+axgueahOaXtumXtO+8jOagvOW8j1wieXl5eS1NTS1kZCBISDptbTpzc1wiOjIwMTQtMDctMjQgMDM6MDc6NTBcclxuICAgIHRoaXMudmVyc2lvbiA9ICcxLjAnOyAgICAgICAgICAvLyDosIPnlKjnmoTmjqXlj6PniYjmnKzvvIzlm7rlrprkuLrvvJoxLjBcclxuICAgIHRoaXMuYXBwQXV0aFRva2VuID0gJyc7ICAgICAgICAvLyDlupTnlKjmjojmnYPnoIFcclxuICAgIHRoaXMuYml6Q29udGVudCA9ICcnOyAgICAgICAgICAvLyDkuJrliqHlj4LmlbDpm4blkIjvvIzmnIDlpKfplb/luqbkuI3pmZDvvIzpmaTlhazlhbHlj4LmlbDlpJbmiYDmnInor7fmsYLlj4LmlbDpg73lv4XpobvmlL7lnKjov5nkuKrlj4LmlbDkuK3kvKDpgJLvvIzlhbfkvZPlj4LnhaflkITkuqflk4Hlv6vpgJ/mjqXlhaXmlofmoaNcclxufVxyXG5SZXF1ZXN0Qm9keS5wcm90b3R5cGUgPSB7XHJcbiAgICBwYXJzZTogZnVuY3Rpb24gKGpzb24pIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5wYXJzZShqc29uKTtcclxuICAgICAgICB0aGlzLmFwcElkID0gYm9keS5hcHBJZDtcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IGJvZHkubWV0aG9kO1xyXG4gICAgICAgIHRoaXMuZm9ybWF0ID0gYm9keS5mb3JtYXQ7XHJcbiAgICAgICAgdGhpcy5jaGFyc2V0ID0gYm9keS5jaGFyc2V0O1xyXG4gICAgICAgIHRoaXMuc2lnblR5cGUgPSBib2R5LnNpZ25UeXBlO1xyXG4gICAgICAgIHRoaXMuc2lnbkNvZGUgPSBib2R5LnNpZ25Db2RlO1xyXG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gYm9keS50aW1lc3RhbXA7XHJcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gYm9keS52ZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuYXBwQXV0aFRva2VuID0gYm9keS5hcHBBdXRoVG9rZW47XHJcbiAgICAgICAgdGhpcy5iaXpDb250ZW50ID0gYm9keS5iaXpDb250ZW50O1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlc3BvbnNlQm9keSgpIHtcclxuICAgIHRoaXMuY29kZSA9IDA7ICAgICAgIC8vIOe9keWFs+i/lOWbnueggVxyXG4gICAgdGhpcy5tc2cgPSAn6LCD55So5oiQ5YqfJzsgLy8g572R5YWz6L+U5Zue56CB5o+P6L+wXHJcbiAgICB0aGlzLnN1YkNvZGUgPSAnJzsgICAvLyDkuJrliqHov5Tlm57noIEs6K+m6KeB5paH5qGjOnh4eHhcclxuICAgIHRoaXMuc3ViTXNnID0gJyc7ICAgIC8vIOS4muWKoei/lOWbnueggeaPj+i/sCzor6bop4HmlofmoaM65Lqk5piT5bey6KKr5pSv5LuYXHJcbiAgICB0aGlzLnRpbWVzdGFtcCA9ICcnOyAvLyDlupTnrZTnmoTml7bpl7RcclxuICAgIHRoaXMuc2lnbiA9ICcnOyAgICAgIC8vIOetvuWQjSzor6bop4HmlofmoaMgMzLkvY3lsI/lhplcclxuICAgIHRoaXMuYml6Q29udGVudCA9ICcnOy8vIOS4muWKoeWPguaVsOmbhuWQiO+8jOacgOWkp+mVv+W6puS4jemZkO+8jOmZpOWFrOWFseWPguaVsOWkluaJgOaciei/lOWbnuWPguaVsOmDveW/hemhu+aUvuWcqOi/meS4quWPguaVsOS4reS8oOmAku+8jOWFt+S9k+WPgueFp+WQhOS6p+WTgeW/q+mAn+aOpeWFpeaWh+aho1xyXG4gICAgdGhpcy50b2tlbiA9ICcnOyAgICAgLy8g5pu05paw5ZCO55qE5o6I5p2D56CBLOS4uuepuuWImeS4jeabtOaWsFxyXG59XHJcblJlc3BvbnNlQm9keS5wcm90b3R5cGUgPSB7XHJcbiAgICBwYXJzZTogZnVuY3Rpb24gKGpzb24pIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5wYXJzZShqc29uKTtcclxuICAgICAgICB0aGlzLmNvZGUgPSBib2R5LmNvZGU7XHJcbiAgICAgICAgdGhpcy5tc2cgPSBib2R5Lm1zZztcclxuICAgICAgICB0aGlzLnN1YkNvZGUgPSBib2R5LnN1YkNvZGU7XHJcbiAgICAgICAgdGhpcy5zdWJNc2cgPSBib2R5LnN1Yk1zZztcclxuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IGJvZHkudGltZXN0YW1wO1xyXG4gICAgICAgIHRoaXMuc2lnbiA9IGJvZHkuc2lnbjtcclxuICAgICAgICB0aGlzLmJpekNvbnRlbnQgPSBib2R5LmJpekNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy50b2tlbiA9IGJvZHkudG9rZW47XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVG9vZG9DbGllbnQoYXBwSWQsIGFwcFNlY3JldCwgYXBpVXJsKSB7XHJcbiAgICB0aGlzLnN0YXJ0KGFwcElkLCBhcHBTZWNyZXQsIGFwaVVybCk7XHJcbiAgICB0aGlzLmlzQnVzeSA9IGZhbHNlO1xyXG59XHJcblxyXG5Ub29kb0NsaWVudC5wcm90b3R5cGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBJZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcFNlY3JldFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwaVVybFxyXG4gICAgICovXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKGFwcElkLCBhcHBTZWNyZXQsIGFwaVVybCkge1xyXG4gICAgICAgIHRoaXMuYXBwSWQgPSBhcHBJZDtcclxuICAgICAgICB0aGlzLmFwcFNlY3JldCA9IGFwcFNlY3JldDtcclxuICAgICAgICB0aGlzLmFwaVVybCA9IGFwaVVybDtcclxuICAgICAgICB0aGlzLnRva2VuID0gJyc7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3RCb2R5fSBib2R5SW5cclxuICAgICAqL1xyXG4gICAgc2lnbkNvZGVJbjogZnVuY3Rpb24gKGJvZHlJbikge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9ICcnICtcclxuICAgICAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiArXHJcbiAgICAgICAgICAgIGJvZHlJbi5hcHBJZCArXHJcbiAgICAgICAgICAgIGJvZHlJbi5iaXpDb250ZW50ICtcclxuICAgICAgICAgICAgYm9keUluLmNoYXJzZXQgK1xyXG4gICAgICAgICAgICBib2R5SW4uZm9ybWF0ICtcclxuICAgICAgICAgICAgYm9keUluLm1ldGhvZCArXHJcbiAgICAgICAgICAgIGJvZHlJbi50aW1lc3RhbXAgK1xyXG4gICAgICAgICAgICBib2R5SW4udmVyc2lvbiArXHJcbiAgICAgICAgICAgIHRoaXMuYXBwU2VjcmV0O1xyXG4gICAgICAgIHJldHVybiBtZDUoc3RyKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2VCb2R5fSBib2R5T3V0XHJcbiAgICAgKi9cclxuICAgIHNpZ25Db2RlT3V0OiBmdW5jdGlvbiAoYm9keU91dCkge1xyXG4gICAgICAgIGlmKGJvZHlPdXQudG9rZW49PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGJvZHlPdXQudG9rZW49XCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RyID0gJycgK1xyXG4gICAgICAgICAgICBib2R5T3V0LmJpekNvbnRlbnQgK1xyXG4gICAgICAgICAgICBib2R5T3V0LmNvZGUgK1xyXG4gICAgICAgICAgICBib2R5T3V0Lm1zZyArXHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSArXHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnICtcclxuICAgICAgICAgICAgYm9keU91dC50aW1lc3RhbXAgK1xyXG4gICAgICAgICAgICBib2R5T3V0LnRva2VuICtcclxuICAgICAgICAgICAgdGhpcy5hcHBTZWNyZXQ7XHJcbiAgICAgICAgcmV0dXJuIG1kNShzdHIpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwaVVybFxyXG4gICAgICovXHJcbiAgICBzZXRBcGlVcmw6IGZ1bmN0aW9uIChhcGlVcmwpIHtcclxuICAgICAgICB0aGlzLmFwaVVybCA9IGFwaVVybDtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVxdWVzdEJvZHl9IGJvZHlJblxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2VCb2R5fSBjYWxsYmFjay5ib2R5T3V0XHJcbiAgICAgKi9cclxuICAgIHNlbmQ6IGZ1bmN0aW9uIChib2R5SW4sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keU91dCA9IG5ldyBSZXNwb25zZUJvZHkoKTtcclxuICAgICAgICBpZiAoIVhNTEh0dHBSZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICBib2R5T3V0Lm1zZyA9ICflrqLmiLfnq6/plJnor68nO1xyXG4gICAgICAgICAgICBib2R5T3V0LnN1YkNvZGUgPSAnMTA1JztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAnWE1MSHR0cFJlcXVlc3Tlr7nosaHkuI3lrZjlnKgnO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0J1c3kpIHtcclxuICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSA9ICc5OSc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnID0gJ+W+iOW/meWTpu+8jOivt+axgumYn+WIl+W3sua7oSc7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNCdXN5ID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIGlmIChib2R5SW4uYXBwQXV0aFRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSBib2R5SW4uYXBwQXV0aFRva2VuO1xyXG4gICAgICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBib2R5SW4uYXBwSWQgPSB0aGlzLmFwcElkO1xyXG4gICAgICAgIGJvZHlJbi50aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmZvcm1hdChcInl5eXktTU0tZGQgaGg6bW06c3NcIik7XHJcbiAgICAgICAgYm9keUluLnNpZ25Db2RlID0gdGhpcy5zaWduQ29kZUluKGJvZHlJbik7XHJcblxyXG4gICAgICAgIGNvbnN0IHhtbCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIGNvbnN0IG93bmVyID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB4bWwuYWJvcnQoKTtcclxuICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSA9ICcxMDMnO1xyXG4gICAgICAgICAgICBib2R5T3V0LnN1Yk1zZyA9ICfor7fmsYLotoXml7YnO1xyXG5cclxuICAgICAgICAgICAgb3duZXIuaXNCdXN5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dCk7XHJcbiAgICAgICAgfSwgMTAwMDApO1xyXG5cclxuICAgICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeG1sLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZVRpbWVvdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh4bWwuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQucGFyc2UoeG1sLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2R5T3V0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWQ1ID0gb3duZXIuc2lnbkNvZGVPdXQoYm9keU91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWQ1ICE9IGJvZHlPdXQuc2lnbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzEwMic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn6L+U5Zue57uT5p6c562+5ZCN5Ye66ZSZJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib2R5T3V0LnRpbWVzdGFtcCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuc2lnbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuYml6Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQudG9rZW4gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHlPdXQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keU91dC50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnRva2VuID0gYm9keU91dC50b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzEwMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnID0gJ+i/lOWbnue7k+aenOW8guW4uCBlcnI6JyArIGVycjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICBib2R5T3V0Lm1zZyA9ICflrqLmiLfnq6/plJnor68nO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSA9ICcxMDQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnID0gJ+ivt+axgui/lOWbnumUmeivryc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb3duZXIuaXNCdXN5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB0b2tlblVybCA9IHRoaXMuYXBpVXJsICsgJz90b2tlbj0nICsgdGhpcy50b2tlbjtcclxuICAgICAgICB4bWwub3BlbignUE9TVCcsIHRva2VuVXJsLCB0cnVlKTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnKTtcclxuICAgICAgICB4bWwuc2VuZChKU09OLnN0cmluZ2lmeShib2R5SW4pKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVxdWVzdEJvZHl9IGJvZHlJblxyXG4gICAgICovXHJcbiAgICBzdWJtaXQ6IGZ1bmN0aW9uIChib2R5SW4pIHtcclxuICAgICAgICBib2R5SW4uYXBwSWQgPSB0aGlzLmFwcElkO1xyXG4gICAgICAgIGJvZHlJbi50aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmZvcm1hdChcInl5eXktTU0tZGQgaGg6bW06c3NcIik7XHJcbiAgICAgICAgYm9keUluLnNpZ25Db2RlID0gdGhpcy5zaWduQ29kZUluKGJvZHlJbik7XHJcblxyXG4gICAgICAgIGNvbnN0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGYpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYm9keUluKSB7XHJcbiAgICAgICAgICAgIC8vbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGJvZHlJbltrZXldKSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBlaS50eXBlID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIGVpLm5hbWUgPSBrZXk7XHJcbiAgICAgICAgICAgIC8vbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxyXG4gICAgICAgICAgICBlaS52YWx1ZSA9IGJvZHlJbltrZXldO1xyXG4gICAgICAgICAgICBmLmFwcGVuZENoaWxkKGVpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGYubWV0aG9kID0gJ3Bvc3QnO1xyXG4gICAgICAgIGYuYWN0aW9uID0gdGhpcy5hcGlVcmw7XHJcbiAgICAgICAgZi5zdWJtaXQoKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGYpO1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL190ZGNsaS5qcyJdLCJzb3VyY2VSb290IjoiIn0=