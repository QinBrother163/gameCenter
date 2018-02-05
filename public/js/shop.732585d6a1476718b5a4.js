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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

/***/ "./resources/assets/js/ShopPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[385, 378], [385, 378], [385, 378], [385, 378]];

function ShopPage() {
    this.layout = document.getElementById('shop-page');
    this.items = [];
    for (var i = 0; i < 4; ++i) {
        var node = this.layout.querySelector('#shop-item' + i);
        this.items.push(node);
        if (!node) continue;
        setTimeout(function (i, node) {
            var img = node.querySelector('img');
            img.src = 'img/shop/shop' + i + '.png';
        }, 100 * i, i, node);
    }
}
ShopPage.prototype = {
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
        if (!node) return;
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
                        if (owner.current == 1) owner.current--;
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
                        if (owner.current == 1) owner.current++;
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

/***/ "./resources/assets/js/shop.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_retail__ = __webpack_require__("./resources/assets/js/toodo/_retail.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toodo_stbcli__ = __webpack_require__("./resources/assets/js/toodo/_stbcli.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_loading__ = __webpack_require__("./resources/assets/js/app/loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_dialog__ = __webpack_require__("./resources/assets/js/app/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_abc__ = __webpack_require__("./resources/assets/js/app/abc.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HomeMenu__ = __webpack_require__("./resources/assets/js/HomeMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ShopPage__ = __webpack_require__("./resources/assets/js/ShopPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__ = __webpack_require__("./resources/assets/js/app/PageArgs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ShopBill__ = __webpack_require__("./resources/assets/js/ShopBill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_childLock__ = __webpack_require__("./resources/assets/js/app/childLock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_dialogBigAd__ = __webpack_require__("./resources/assets/js/app/dialogBigAd.js");













var stbcli = new __WEBPACK_IMPORTED_MODULE_1__toodo_stbcli__["a" /* StbClient */]();
var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__toodo_keycodes__["a" /* getKeyCodes */])();

// var callbackUrl = location.protocol + '//' + location.host + '/tdenter/callback.html';
var callbackUrl = "http://120.77.82.54/tdGameCenter/callback.html";

function onStart(code, biz) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["a" /* hideLoading */])(function () {
        if (code != 0) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_dialog__["a" /* showDialog */])(function (btn) {
                if (btn == 0) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('自动登陆', '小双在使劲加载，请稍候...');
                    stbcli.start(onStart);
                } else {
                    shopPage.show(shopPage.current, onPageKey);
                }
            }, 1, '提示', '没有找到用户信息哦！', '重试', '取消');
        } else {
            tdeUser = biz;
            shopPage.show(shopPage.current, onPageKey);
        }
    });
}

/**
 * @param code
 * @param biz
 * @param biz.category
 * @param biz.complex
 * @param biz.productId
 * @param biz.price
 * @param biz.goodsName
 */
function onQueryProduct1(code, biz) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["a" /* hideLoading */])(function () {
        var itemInfo = itemInfos[shopPage.current];
        if (code == 0 && biz && biz.productId == itemInfo.prodId) {
            tdeProd = biz;
            var cb = function cb(btn) {
                if (btn == 0) {
                    if (tdeUser.childLock) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__app_childLock__["a" /* showChildLock */])(function (code, msg) {
                            onValidLock(code, msg, shopPage, itemInfo);
                        }, 1, 0);
                    } else {
                        sendOrder(itemInfo);
                    }
                } else {
                    shopPage.show(shopPage.current, onPageKey);
                }
            };

            var price = parseInt(biz.price);
            switch (price) {
                case 2900:
                case 9900:
                case 17000:
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__app_dialogBigAd__["a" /* showAd29 */])(cb, 0, price / 100);
                    break;
                default:
                    var text = '';
                    if (biz.category == 0) {
                        text = '您将花费' + price / 100 + '元/月订购' + biz.goodsName;
                    } else {
                        text = '您将花费' + price / 100 + '元购买' + biz.goodsName;
                    }
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_dialog__["a" /* showDialog */])(cb, 0, '订购信息', text, '确认', '取消');
                    break;
            }
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_dialog__["a" /* showDialog */])(function (btn) {
                if (btn == 0) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('提示', '正在加载，请稍候...');
                    stbcli.queryProduct1(itemInfo.prodId, onQueryProduct1);
                } else {
                    shopPage.show(shopPage.current, onPageKey);
                }
            }, 0, '提示', '没有找到产品信息哦！', '重试', '取消');
        }
    });
}

function onOrder1(code, biz) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["a" /* hideLoading */])(function () {
        var itemInfo = itemInfos[shopPage.current];
        if (code == 0 && biz) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('提示', '正在处理，请稍候...');
            __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["c" /* callbackArgs */].setRedirectUrl(window.location.href);
            __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["c" /* callbackArgs */].setReturnUrl(window.location.href);
            stbcli.pay(biz.tradeNo);
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_dialog__["a" /* showDialog */])(function (btn) {
                if (btn == 0) {
                    sendOrder(itemInfo);
                } else {
                    shopPage.show(shopPage.current, onPageKey);
                }
            }, 0, '订单提示', '小双服务开小差啦，请稍后重试。', '重试', '返回');
        }
    });
}

function onMenuKey(key) {
    switch (key) {
        case keyCode.num0:
        case keyCode.back:
            window.location.href = __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["d" /* shopArgs */].getReturnUrl();
            break;
        case keyCode.esc:
            __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["b" /* appArgs */].onFirstPage();
            break;
        case keyCode.down:
            homeMenu.hide();
            shopPage.show(shopPage.current, onPageKey);
            break;
        case keyCode.ok:
            if (homeMenu.current == 2) {
                window.location.href = __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["d" /* shopArgs */].getReturnUrl();
            }
            break;
    }
}

function onPageKey(key) {
    switch (key) {
        case keyCode.num0:
        case keyCode.back:
            window.location.href = __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["d" /* shopArgs */].getReturnUrl();
            break;
        case keyCode.esc:
            __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["b" /* appArgs */].onFirstPage();
            break;
        case keyCode.ok:
            if (!canVideo()) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_dialog__["a" /* showDialog */])(function (btn) {
                    shopPage.show(shopPage.current, onPageKey);
                }, 1, '敬请期待', '该机顶盒型号暂不支持体感热舞游戏,请联系96335更换机顶盒.', '确定', '取消', 'left');
                break;
            }
            //未登录
            if (!stbcli.isReady) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('自动登陆', '小双在使劲加载，请稍候...');
                stbcli.start(onStart);
                break;
            }
            var itemInfo = itemInfos[shopPage.current];
            //未开通
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('提示', '正在加载，请稍候...');
            stbcli.queryProduct1(itemInfo.prodId, onQueryProduct1);
            break;
        case keyCode.up:
            shopPage.hide();
            homeMenu.show(homeMenu.current, onMenuKey, tdeUser);
            break;
        case keyCode.down:
            shopPage.hide();
            __WEBPACK_IMPORTED_MODULE_9__ShopBill__["a" /* shopBill */].show(__WEBPACK_IMPORTED_MODULE_9__ShopBill__["a" /* shopBill */].current, onBillKey, tdeUser);
            break;
    }
}

function onBillKey(key) {
    switch (key) {
        case keyCode.num0:
        case keyCode.back:
            window.location.href = __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["d" /* shopArgs */].getReturnUrl();
            break;
        case keyCode.esc:
            __WEBPACK_IMPORTED_MODULE_8__app_PageArgs__["b" /* appArgs */].onFirstPage();
            break;
        case keyCode.up:
            __WEBPACK_IMPORTED_MODULE_9__ShopBill__["a" /* shopBill */].hide();
            shopPage.show(shopPage.current, onPageKey);
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
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_dialog__["a" /* showDialog */])(function (btn) {
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
        "title": itemInfo.title,
        "gameId": itemInfo.gameId,
        "productId": itemInfo.productId,
        "prodId": itemInfo.prodId,
        "trial": itemInfo.trial,
        "complex": tdeProd.complex
    };
    var args = JSON.stringify(data);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('提示', '正在处理，请稍候...');
    stbcli.order1(itemInfo.prodId, callbackUrl, args, onOrder1);
}

function canVideo() {
    if (__WEBPACK_IMPORTED_MODULE_0__toodo_retail__["a" /* retailId */] == __WEBPACK_IMPORTED_MODULE_0__toodo_retail__["b" /* retail */].gxgd) {
        var embed = iPanel.getGlobalVar("VOD_EMBEDDED_VERSION");
        if (embed == '#' || embed == 0) {
            return false;
        }
    }
    return true;
}

var homeMenu;
var shopPage;
var itemInfos = [];
var tdeUser;
var tdeProd;

window.onload = function () {
    homeMenu = new __WEBPACK_IMPORTED_MODULE_6__HomeMenu__["a" /* HomeMenu */]();
    shopPage = new __WEBPACK_IMPORTED_MODULE_7__ShopPage__["a" /* ShopPage */]();
    shopPage.show(shopPage.current, onPageKey);

    //showLoading('提示', '正在加载，请稍候...');
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__app_abc__["a" /* getJSON */])("data/tde_shop_infos.json", function (data) {
        for (var i = 0; i < data.length; i++) {
            itemInfos.push(data[i]);
        }

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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/shop.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWM5ZGYyNTE1YTkxYWUzNmIyZjE/ODU5MSoiLCJ3ZWJwYWNrOi8vLy4vfi9fSlNPTkAxLjAuMEBKU09OL2pzb24yLmpzPzI5ZjkiLCJ3ZWJwYWNrOi8vLy4vfi9fY2hhcmVuY0AwLjAuMkBjaGFyZW5jL2NoYXJlbmMuanM/YzhjMSIsIndlYnBhY2s6Ly8vLi9+L19jcnlwdEAwLjAuMkBjcnlwdC9jcnlwdC5qcz9kOTM0Iiwid2VicGFjazovLy8uL34vX2lzLWJ1ZmZlckAxLjEuNkBpcy1idWZmZXIvaW5kZXguanM/NWViYSIsIndlYnBhY2s6Ly8vLi9+L19tZDVAMi4yLjFAbWQ1L21kNS5qcz83OTk3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvSG9tZU1lbnUuanM/ZTM4YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL1Nob3BCaWxsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvU2hvcFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUGFnZUFyZ3MuanM/YzdhMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9hYmMuanM/NTcyNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9jaGlsZExvY2suanM/YmZlMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9jaGlsZE1lbnUuanM/NDRjYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9kaWFsb2cuanM/MmNiYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9kaWFsb2dCaWdBZC5qcz8wZjBlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2xvYWRpbmcuanM/OWEwNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Nob3AuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fa2V5Y29kZXMuanM/YjkwOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19yZXRhaWwuanM/MGViMyoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fc3RiY2xpLmpzP2YyNTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fc3RibnVsbC5qcz80N2U0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3RkY2xpLmpzPzE4ZWYiXSwibmFtZXMiOlsia2V5Q29kZSIsImdldEtleUNvZGVzIiwicHJlQ29kZXMiLCJnZXRDb2RlcyIsIkhvbWVNZW51IiwibGF5b3V0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiaXRlbXMiLCJpIiwibm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJwdXNoIiwiaW1nIiwic3JjIiwicHJvdG90eXBlIiwiY3VycmVudCIsIm9uS2V5RG93biIsInRkZVVzZXIiLCJzaG93Iiwic2V0U2VsZWN0ZWQiLCJvd25lciIsIm9ua2V5ZG93biIsImUiLCJoYW5kbGVLZXkiLCJoaWRlIiwiX3NldEZvY3VzIiwiZm9jdXMiLCJsZW5ndGgiLCJnZXRFdmVudCIsImN1cktleSIsImdldEtleSIsImluZGV4T2YiLCJwcmV2ZW50RGVmYXVsdCIsImxlZnQiLCJyaWdodCIsIm9rIiwiYXBwQXJncyIsIm9uRmlyc3RQYWdlIiwib25Ib21lUGFnZSIsIm9sZExvY2siLCJjaGlsZExvY2siLCJjaGlsZE1lbnUiLCJidG4iLCJzaG93Q2hpbGRMb2NrIiwiY29kZSIsIm1zZyIsIm9uVmFsaWRMb2NrIiwicmVzZXRDaGlsZExvY2siLCJvblR1cm50YWJsZVBhZ2UiLCJlc2MiLCJzdGJjbGkiLCJ0ZGVMb2NrIiwiYml6IiwidGV4dCIsIm9uVGRlTG9jayIsInNob3dEaWFsb2ciLCJkbGdCdG4iLCJuZXdMb2NrIiwiYXJndW1lbnRzIiwic2hvd0xvYWRpbmciLCJoaWRlTG9hZGluZyIsImNhbGxiYWNrVXJsIiwiU2hvcEJpbGwiLCJzdHlsZSIsImRpc3BsYXkiLCJiaWxscyIsImJpbGxUYWJsZSIsInN0YXJ0Iiwib25UYWJsZUtleSIsImJpbGwiLCJvbkJpbGwiLCJwYWdlU2l6ZSIsIml0ZW1TaXplIiwiaXRlbXNTaXplTGVmdCIsIkJpbGxUYWJsZSIsImN1cnJlbnRTaXplIiwicGFnZSIsInBhZ2VJbmRleCIsImdldEVsZW1lbnRCeUlkIiwiaWQiLCJiZyIsInNlbGVjdGVkIiwidGFibGUiLCJ0ciIsInRpdGxlUGFnZSIsInNob3dQYWdlIiwiY250IiwicGFyc2VJbnQiLCJjdXQwIiwiY3V0MSIsImN1dEluZm9zIiwic2xpY2UiLCJzaG93SW5mbyIsImluZm9zIiwiZm9yRWFjaCIsInJvdyIsImluZGV4IiwidGRzIiwicXVlcnlTZWxlY3RvckFsbCIsImluZm8iLCJjcmVhdGVkX2F0Iiwic3ViamVjdCIsInRvdGFsQW1vdW50IiwidG9wIiwidXAiLCJkb3duIiwic2hvcEJpbGwiLCJrZXkiLCJiYWNrIiwibnVtMCIsIlNob3BQYWdlIiwic2V0VGltZW91dCIsInpJbmRleCIsInNpemUiLCJkaXYiLCJ3aWR0aCIsImhlaWdodCIsIlBhZ2VBcmdzIiwicHJlZml4IiwiZ2V0VmFsdWUiLCJrIiwic3RiTnVsbCIsInNldFZhbHVlIiwidiIsImdldFJldHVyblVybCIsInNldFJldHVyblVybCIsInVybCIsImdldFJlZGlyZWN0VXJsIiwic2V0UmVkaXJlY3RVcmwiLCJzZXRDYWxsRmxhZyIsIm51bSIsImdldENhbGxGbGFnIiwic2V0U3VjY2Vzc0NvZGUiLCJzdWNjZXNzQ29kZSIsImdldFN1Y2Nlc3NDb2RlIiwic2V0UHJpemVJRCIsImdldFByaXplSUQiLCJnZXRUdXJudGFibGVVcmwiLCJzZXRUdXJudGFibGVVcmwiLCJzaG9wQXJncyIsInJlY2hhcmdlQXJncyIsImNhbGxiYWNrQXJncyIsInR1cm5UYWJsZUFyZ3MiLCJmaXJzdFVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImhvbWVVcmwiLCJUdXJudGFibGVVcmwiLCJnZXRKU09OIiwiY2IiLCJyZXEiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwiaXRlbXNBcnIiLCJldmFsIiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsImJhc2VVcmwiLCJwcm90b2NvbCIsImhvc3QiLCJkZWxheUJhY2tncm91bmQiLCJkZWxheSIsImJhY2tncm91bmRJbWFnZSIsImNhbGxiYWNrIiwidGl0bGUiLCJsYWJlbCIsInRpcHMiLCJsYXlvdXRJZCIsImxvY2tUZXh0IiwibG9ja1RpdGxlIiwibG9ja0xhYmVsIiwibG9ja1RpcHMiLCJpbm5lclRleHQiLCJpdGVtTm9kZXMiLCJudW0xIiwibnVtMiIsIm51bTMiLCJudW00IiwibnVtNSIsIm51bTYiLCJudW03IiwibnVtOCIsIm51bTkiLCJpbnB1dFRleHQiLCJjdXJJZHgiLCJpdGVtTm9kZSIsInN1Ym1pdCIsImludmlzaWJsZSIsInN0YXIiLCJjbGlja051bSIsIlN0cmluZyIsImJhY2tzcGFjZSIsInN1YnN0cmluZyIsImhhbmRsZU9rIiwiQ2hpbGRNZW51IiwiYnRuTm9kZXMiLCJidG5Ob2RlIiwiYnRuTm9kZTAiLCJidG5Ob2RlMSIsInRpcE5vZGUiLCJmb2N1c0J0biIsImJ0bklkeCIsImZvY3VzTm9kZSIsImJ0bjAiLCJidG4xIiwiYWxpZ24iLCJiYWNrZ3JvdW5kIiwibm9kZVRpdGxlIiwibm9kZVRleHQiLCJ0ZXh0QWxpZ24iLCJub2RlQnRuMCIsIm5vZGVCdG4xIiwiYnRuXzAwNiIsImJ0bl8wMDZub25lIiwic2hvd0FkMTYiLCJzaG93QWQyOSIsImFkIiwibG9hZFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInNob3dUaW1lIiwibm9kZUJnIiwiZGVsYXlUaW1lIiwidGltZSIsIm9uU3RhcnQiLCJzaG9wUGFnZSIsIm9uUGFnZUtleSIsIm9uUXVlcnlQcm9kdWN0MSIsIml0ZW1JbmZvIiwiaXRlbUluZm9zIiwicHJvZHVjdElkIiwicHJvZElkIiwidGRlUHJvZCIsInNlbmRPcmRlciIsInByaWNlIiwiY2F0ZWdvcnkiLCJnb29kc05hbWUiLCJxdWVyeVByb2R1Y3QxIiwib25PcmRlcjEiLCJwYXkiLCJ0cmFkZU5vIiwib25NZW51S2V5IiwiaG9tZU1lbnUiLCJjYW5WaWRlbyIsImlzUmVhZHkiLCJvbkJpbGxLZXkiLCJkYXRhIiwiZ2FtZUlkIiwidHJpYWwiLCJjb21wbGV4IiwiYXJncyIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcmRlcjEiLCJyZXRhaWxJZCIsInJldGFpbCIsImd4Z2QiLCJlbWJlZCIsImlQYW5lbCIsImdldEdsb2JhbFZhciIsIm9ubG9hZCIsImtleU1hcCIsImYxIiwiZjIiLCJmMyIsImY0IiwibXV0ZSIsInRyYWNrIiwidm9sVXAiLCJ2b2xEb3duIiwiZmF2IiwicGxheUJhY2siLCJwYWdlVXAiLCJwYWdlRG93biIsIm1lbnUiLCJob21lIiwiaG55eCIsImdkZ2QiLCJldnQiLCJldmVudCIsIndoaWNoIiwiY2hhckNvZGUiLCJjb2RlcyIsImhhc093blByb3BlcnR5Iiwibm9uZSIsImdldFJldGFpbElkIiwiZ3Vhbmd4aSIsIlN5c3RlbSIsInN0YklEIiwiQ0EiLCJTdG9yYWdlU2VydmljZSIsIkZpbGVTeXN0ZW0iLCJtZDUiLCJyZXF1aXJlIiwiU3RiQ2xpZW50Iiwib3JpZ2luVXJsIiwiYXBwS2V5IiwiYXBwU2VjcmV0IiwiX3RkY2xpIiwidXNlcklkIiwidG9rZW4iLCJiaXpJbiIsImdldFJlZ2lvbkNvZGUiLCJnZXRDYXJkVFYiLCJib2R5SW4iLCJtZXRob2QiLCJhcHBBdXRoVG9rZW4iLCJiaXpDb250ZW50Iiwic2V0QXBpVXJsIiwiYm9keU91dCIsImJpek91dCIsInBhcnNlIiwiYml6VXNlciIsInN1YkNvZGUiLCJhZGRXaW5uZXIiLCJwcml6ZUlEIiwic3RhdGUiLCJhZGRTdGF0ZSIsInVwZGF0YUZyZWVTdGF0ZSIsImdldFByaXplIiwidHVybnRhYmxlU3RhdGUiLCJ0dXJudGFibGVQcm8iLCJ0eXBlIiwicHJpemVOdW0iLCJ3aW5uZXJJbmZvIiwidXNlcldpbm5lciIsImFkZENvaW5zIiwiYWRkTnVtIiwicXVlcnlTZXJ2ZTEiLCJ0ZGVQYWdlIiwidGRhU29uZyIsInRkYVNvbmcxIiwic29uZ0lkIiwidGRhTWF0Y2giLCJ0ZGFVc2VyIiwidGRhUmVjb3JkIiwicmVjb3JkIiwiU3RiTnVsbCIsImdldFN0Yk51bSIsImtleU5hbWUiLCJyZXN1bHQiLCJhQ29va2llIiwiY29va2llIiwic3BsaXQiLCJhQ3J1bWIiLCJlc2NhcGUiLCJ1bmVzY2FwZSIsImtleVZhbHVlIiwic2V0R2xvYmFsVmFyIiwicmVnaW9uIiwiR2V0Q0FSZWdpb25JRCIsImciLCJHbG9iYWwiLCJHbG9iYWwyIiwidmFsdWUiLCJpY05vIiwicmVnaW9uQ29kZSIsIlN5c1NldHRpbmciLCJnZXRFbnYiLCJzZXRFbnYiLCJmb3JtYXQiLCJmbXQiLCJvIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImdldE1pbGxpc2Vjb25kcyIsInRlc3QiLCJyZXBsYWNlIiwiUmVnRXhwIiwiJDEiLCJnZXRGdWxsWWVhciIsInN1YnN0ciIsIlJlcXVlc3RCb2R5IiwiYXBwSWQiLCJjaGFyc2V0Iiwic2lnblR5cGUiLCJzaWduQ29kZSIsInRpbWVzdGFtcCIsInZlcnNpb24iLCJqc29uIiwiUmVzcG9uc2VCb2R5Iiwic3ViTXNnIiwic2lnbiIsIlRvb2RvQ2xpZW50IiwiYXBpVXJsIiwiaXNCdXN5Iiwic2lnbkNvZGVJbiIsInN0ciIsInNpZ25Db2RlT3V0IiwidW5kZWZpbmVkIiwieG1sIiwiaGFuZGxlVGltZW91dCIsImFib3J0IiwiY2xlYXJUaW1lb3V0Iiwic3RhdHVzIiwiZXJyIiwidG9rZW5VcmwiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiZiIsImVpIiwibmFtZSIsImFjdGlvbiIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5Q0FBeUMsaUJBQWlCO0FBQzFELDhCQUE4QixrQkFBa0I7OztBQUdoRCx5Q0FBeUMsaUJBQWlCO0FBQzFELHNDQUFzQyw2QkFBNkI7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixjQUFjOztBQUVqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQy9KRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQUlBLFVBQVUsMkZBQUFDLEVBQWQ7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QUFDSCxLQXZKbUI7QUF3SnBCOzs7QUFHQXRILFlBQVEsZ0JBQVVzSCxNQUFWLEVBQWtCO0FBQ3RCQSxlQUFPMEUsS0FBUCxHQUFlLEtBQUtBLEtBQXBCO0FBQ0ExRSxlQUFPOEUsU0FBUCxHQUFtQixJQUFJcEssSUFBSixHQUFXOEksTUFBWCxDQUFrQixxQkFBbEIsQ0FBbkI7QUFDQXhELGVBQU82RSxRQUFQLEdBQWtCLEtBQUtVLFVBQUwsQ0FBZ0J2RixNQUFoQixDQUFsQjs7QUFFQSxZQUFNbUcsSUFBSXJaLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBVjtBQUNBRCxpQkFBU0UsSUFBVCxDQUFjQyxXQUFkLENBQTBCa1osQ0FBMUI7O0FBRUEsYUFBSyxJQUFJM1MsR0FBVCxJQUFnQndNLE1BQWhCLEVBQXdCO0FBQ3BCO0FBQ0EsZ0JBQUksT0FBT0EsT0FBT3hNLEdBQVAsQ0FBUCxJQUF1QixVQUEzQixFQUF1QztBQUNuQztBQUNIOztBQUVELGdCQUFNNFMsS0FBS3RaLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWDtBQUNBcVosZUFBR2xGLElBQUgsR0FBVSxRQUFWO0FBQ0FrRixlQUFHQyxJQUFILEdBQVU3UyxHQUFWO0FBQ0E7QUFDQTRTLGVBQUdsRCxLQUFILEdBQVdsRCxPQUFPeE0sR0FBUCxDQUFYO0FBQ0EyUyxjQUFFbFosV0FBRixDQUFjbVosRUFBZDtBQUNIOztBQUVERCxVQUFFbEcsTUFBRixHQUFXLE1BQVg7QUFDQWtHLFVBQUVHLE1BQUYsR0FBVyxLQUFLakIsTUFBaEI7QUFDQWMsVUFBRXpOLE1BQUY7QUFDQTVMLGlCQUFTRSxJQUFULENBQWN1WixXQUFkLENBQTBCSixDQUExQjtBQUNIO0FBckxtQixDQUF4QixDIiwiZmlsZSI6ImpzL3Nob3AuNzMyNTg1ZDZhMTQ3NjcxOGI1YTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVjOWRmMjUxNWE5MWFlMzZiMmYxIiwiLypcbiAgICBodHRwOi8vd3d3LkpTT04ub3JnL2pzb24yLmpzXG4gICAgMjAxMS0wMi0yM1xuXG4gICAgUHVibGljIERvbWFpbi5cblxuICAgIE5PIFdBUlJBTlRZIEVYUFJFU1NFRCBPUiBJTVBMSUVELiBVU0UgQVQgWU9VUiBPV04gUklTSy5cblxuICAgIFNlZSBodHRwOi8vd3d3LkpTT04ub3JnL2pzLmh0bWxcblxuXG4gICAgVGhpcyBjb2RlIHNob3VsZCBiZSBtaW5pZmllZCBiZWZvcmUgZGVwbG95bWVudC5cbiAgICBTZWUgaHR0cDovL2phdmFzY3JpcHQuY3JvY2tmb3JkLmNvbS9qc21pbi5odG1sXG5cbiAgICBVU0UgWU9VUiBPV04gQ09QWS4gSVQgSVMgRVhUUkVNRUxZIFVOV0lTRSBUTyBMT0FEIENPREUgRlJPTSBTRVJWRVJTIFlPVSBET1xuICAgIE5PVCBDT05UUk9MLlxuXG5cbiAgICBUaGlzIGZpbGUgY3JlYXRlcyBhIGdsb2JhbCBKU09OIG9iamVjdCBjb250YWluaW5nIHR3byBtZXRob2RzOiBzdHJpbmdpZnlcbiAgICBhbmQgcGFyc2UuXG5cbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSlcbiAgICAgICAgICAgIHZhbHVlICAgICAgIGFueSBKYXZhU2NyaXB0IHZhbHVlLCB1c3VhbGx5IGFuIG9iamVjdCBvciBhcnJheS5cblxuICAgICAgICAgICAgcmVwbGFjZXIgICAgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgZGV0ZXJtaW5lcyBob3cgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgYXJlIHN0cmluZ2lmaWVkIGZvciBvYmplY3RzLiBJdCBjYW4gYmUgYVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncy5cblxuICAgICAgICAgICAgc3BhY2UgICAgICAgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgc3BlY2lmaWVzIHRoZSBpbmRlbnRhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgb2YgbmVzdGVkIHN0cnVjdHVyZXMuIElmIGl0IGlzIG9taXR0ZWQsIHRoZSB0ZXh0IHdpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlIHBhY2tlZCB3aXRob3V0IGV4dHJhIHdoaXRlc3BhY2UuIElmIGl0IGlzIGEgbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXQgd2lsbCBzcGVjaWZ5IHRoZSBudW1iZXIgb2Ygc3BhY2VzIHRvIGluZGVudCBhdCBlYWNoXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbC4gSWYgaXQgaXMgYSBzdHJpbmcgKHN1Y2ggYXMgJ1xcdCcgb3IgJyZuYnNwOycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXQgY29udGFpbnMgdGhlIGNoYXJhY3RlcnMgdXNlZCB0byBpbmRlbnQgYXQgZWFjaCBsZXZlbC5cblxuICAgICAgICAgICAgVGhpcyBtZXRob2QgcHJvZHVjZXMgYSBKU09OIHRleHQgZnJvbSBhIEphdmFTY3JpcHQgdmFsdWUuXG5cbiAgICAgICAgICAgIFdoZW4gYW4gb2JqZWN0IHZhbHVlIGlzIGZvdW5kLCBpZiB0aGUgb2JqZWN0IGNvbnRhaW5zIGEgdG9KU09OXG4gICAgICAgICAgICBtZXRob2QsIGl0cyB0b0pTT04gbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGFuZCB0aGUgcmVzdWx0IHdpbGwgYmVcbiAgICAgICAgICAgIHN0cmluZ2lmaWVkLiBBIHRvSlNPTiBtZXRob2QgZG9lcyBub3Qgc2VyaWFsaXplOiBpdCByZXR1cm5zIHRoZVxuICAgICAgICAgICAgdmFsdWUgcmVwcmVzZW50ZWQgYnkgdGhlIG5hbWUvdmFsdWUgcGFpciB0aGF0IHNob3VsZCBiZSBzZXJpYWxpemVkLFxuICAgICAgICAgICAgb3IgdW5kZWZpbmVkIGlmIG5vdGhpbmcgc2hvdWxkIGJlIHNlcmlhbGl6ZWQuIFRoZSB0b0pTT04gbWV0aG9kXG4gICAgICAgICAgICB3aWxsIGJlIHBhc3NlZCB0aGUga2V5IGFzc29jaWF0ZWQgd2l0aCB0aGUgdmFsdWUsIGFuZCB0aGlzIHdpbGwgYmVcbiAgICAgICAgICAgIGJvdW5kIHRvIHRoZSB2YWx1ZVxuXG4gICAgICAgICAgICBGb3IgZXhhbXBsZSwgdGhpcyB3b3VsZCBzZXJpYWxpemUgRGF0ZXMgYXMgSVNPIHN0cmluZ3MuXG5cbiAgICAgICAgICAgICAgICBEYXRlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGYobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9ybWF0IGludGVnZXJzIHRvIGhhdmUgYXQgbGVhc3QgdHdvIGRpZ2l0cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuIDogbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFVUQ0Z1bGxZZWFyKCkgICArICctJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ01vbnRoKCkgKyAxKSArICctJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ0RhdGUoKSkgICAgICArICdUJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ0hvdXJzKCkpICAgICArICc6JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ01pbnV0ZXMoKSkgICArICc6JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ1NlY29uZHMoKSkgICArICdaJztcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWwgcmVwbGFjZXIgbWV0aG9kLiBJdCB3aWxsIGJlIHBhc3NlZCB0aGVcbiAgICAgICAgICAgIGtleSBhbmQgdmFsdWUgb2YgZWFjaCBtZW1iZXIsIHdpdGggdGhpcyBib3VuZCB0byB0aGUgY29udGFpbmluZ1xuICAgICAgICAgICAgb2JqZWN0LiBUaGUgdmFsdWUgdGhhdCBpcyByZXR1cm5lZCBmcm9tIHlvdXIgbWV0aG9kIHdpbGwgYmVcbiAgICAgICAgICAgIHNlcmlhbGl6ZWQuIElmIHlvdXIgbWV0aG9kIHJldHVybnMgdW5kZWZpbmVkLCB0aGVuIHRoZSBtZW1iZXIgd2lsbFxuICAgICAgICAgICAgYmUgZXhjbHVkZWQgZnJvbSB0aGUgc2VyaWFsaXphdGlvbi5cblxuICAgICAgICAgICAgSWYgdGhlIHJlcGxhY2VyIHBhcmFtZXRlciBpcyBhbiBhcnJheSBvZiBzdHJpbmdzLCB0aGVuIGl0IHdpbGwgYmVcbiAgICAgICAgICAgIHVzZWQgdG8gc2VsZWN0IHRoZSBtZW1iZXJzIHRvIGJlIHNlcmlhbGl6ZWQuIEl0IGZpbHRlcnMgdGhlIHJlc3VsdHNcbiAgICAgICAgICAgIHN1Y2ggdGhhdCBvbmx5IG1lbWJlcnMgd2l0aCBrZXlzIGxpc3RlZCBpbiB0aGUgcmVwbGFjZXIgYXJyYXkgYXJlXG4gICAgICAgICAgICBzdHJpbmdpZmllZC5cblxuICAgICAgICAgICAgVmFsdWVzIHRoYXQgZG8gbm90IGhhdmUgSlNPTiByZXByZXNlbnRhdGlvbnMsIHN1Y2ggYXMgdW5kZWZpbmVkIG9yXG4gICAgICAgICAgICBmdW5jdGlvbnMsIHdpbGwgbm90IGJlIHNlcmlhbGl6ZWQuIFN1Y2ggdmFsdWVzIGluIG9iamVjdHMgd2lsbCBiZVxuICAgICAgICAgICAgZHJvcHBlZDsgaW4gYXJyYXlzIHRoZXkgd2lsbCBiZSByZXBsYWNlZCB3aXRoIG51bGwuIFlvdSBjYW4gdXNlXG4gICAgICAgICAgICBhIHJlcGxhY2VyIGZ1bmN0aW9uIHRvIHJlcGxhY2UgdGhvc2Ugd2l0aCBKU09OIHZhbHVlcy5cbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHVuZGVmaW5lZCkgcmV0dXJucyB1bmRlZmluZWQuXG5cbiAgICAgICAgICAgIFRoZSBvcHRpb25hbCBzcGFjZSBwYXJhbWV0ZXIgcHJvZHVjZXMgYSBzdHJpbmdpZmljYXRpb24gb2YgdGhlXG4gICAgICAgICAgICB2YWx1ZSB0aGF0IGlzIGZpbGxlZCB3aXRoIGxpbmUgYnJlYWtzIGFuZCBpbmRlbnRhdGlvbiB0byBtYWtlIGl0XG4gICAgICAgICAgICBlYXNpZXIgdG8gcmVhZC5cblxuICAgICAgICAgICAgSWYgdGhlIHNwYWNlIHBhcmFtZXRlciBpcyBhIG5vbi1lbXB0eSBzdHJpbmcsIHRoZW4gdGhhdCBzdHJpbmcgd2lsbFxuICAgICAgICAgICAgYmUgdXNlZCBmb3IgaW5kZW50YXRpb24uIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBudW1iZXIsIHRoZW5cbiAgICAgICAgICAgIHRoZSBpbmRlbnRhdGlvbiB3aWxsIGJlIHRoYXQgbWFueSBzcGFjZXMuXG5cbiAgICAgICAgICAgIEV4YW1wbGU6XG5cbiAgICAgICAgICAgIHRleHQgPSBKU09OLnN0cmluZ2lmeShbJ2UnLCB7cGx1cmlidXM6ICd1bnVtJ31dKTtcbiAgICAgICAgICAgIC8vIHRleHQgaXMgJ1tcImVcIix7XCJwbHVyaWJ1c1wiOlwidW51bVwifV0nXG5cblxuICAgICAgICAgICAgdGV4dCA9IEpTT04uc3RyaW5naWZ5KFsnZScsIHtwbHVyaWJ1czogJ3VudW0nfV0sIG51bGwsICdcXHQnKTtcbiAgICAgICAgICAgIC8vIHRleHQgaXMgJ1tcXG5cXHRcImVcIixcXG5cXHR7XFxuXFx0XFx0XCJwbHVyaWJ1c1wiOiBcInVudW1cIlxcblxcdH1cXG5dJ1xuXG4gICAgICAgICAgICB0ZXh0ID0gSlNPTi5zdHJpbmdpZnkoW25ldyBEYXRlKCldLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tleV0gaW5zdGFuY2VvZiBEYXRlID9cbiAgICAgICAgICAgICAgICAgICAgJ0RhdGUoJyArIHRoaXNba2V5XSArICcpJyA6IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0ZXh0IGlzICdbXCJEYXRlKC0tLWN1cnJlbnQgdGltZS0tLSlcIl0nXG5cblxuICAgICAgICBKU09OLnBhcnNlKHRleHQsIHJldml2ZXIpXG4gICAgICAgICAgICBUaGlzIG1ldGhvZCBwYXJzZXMgYSBKU09OIHRleHQgdG8gcHJvZHVjZSBhbiBvYmplY3Qgb3IgYXJyYXkuXG4gICAgICAgICAgICBJdCBjYW4gdGhyb3cgYSBTeW50YXhFcnJvciBleGNlcHRpb24uXG5cbiAgICAgICAgICAgIFRoZSBvcHRpb25hbCByZXZpdmVyIHBhcmFtZXRlciBpcyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGZpbHRlciBhbmRcbiAgICAgICAgICAgIHRyYW5zZm9ybSB0aGUgcmVzdWx0cy4gSXQgcmVjZWl2ZXMgZWFjaCBvZiB0aGUga2V5cyBhbmQgdmFsdWVzLFxuICAgICAgICAgICAgYW5kIGl0cyByZXR1cm4gdmFsdWUgaXMgdXNlZCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCB2YWx1ZS5cbiAgICAgICAgICAgIElmIGl0IHJldHVybnMgd2hhdCBpdCByZWNlaXZlZCwgdGhlbiB0aGUgc3RydWN0dXJlIGlzIG5vdCBtb2RpZmllZC5cbiAgICAgICAgICAgIElmIGl0IHJldHVybnMgdW5kZWZpbmVkIHRoZW4gdGhlIG1lbWJlciBpcyBkZWxldGVkLlxuXG4gICAgICAgICAgICBFeGFtcGxlOlxuXG4gICAgICAgICAgICAvLyBQYXJzZSB0aGUgdGV4dC4gVmFsdWVzIHRoYXQgbG9vayBsaWtlIElTTyBkYXRlIHN0cmluZ3Mgd2lsbFxuICAgICAgICAgICAgLy8gYmUgY29udmVydGVkIHRvIERhdGUgb2JqZWN0cy5cblxuICAgICAgICAgICAgbXlEYXRhID0gSlNPTi5wYXJzZSh0ZXh0LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPVxuL14oXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KVQoXFxkezJ9KTooXFxkezJ9KTooXFxkezJ9KD86XFwuXFxkKik/KVokLy5leGVjKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQygrYVsxXSwgK2FbMl0gLSAxLCArYVszXSwgK2FbNF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgK2FbNV0sICthWzZdKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG15RGF0YSA9IEpTT04ucGFyc2UoJ1tcIkRhdGUoMDkvMDkvMjAwMSlcIl0nLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBkO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zbGljZSgwLCA1KSA9PT0gJ0RhdGUoJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2xpY2UoLTEpID09PSAnKScpIHtcbiAgICAgICAgICAgICAgICAgICAgZCA9IG5ldyBEYXRlKHZhbHVlLnNsaWNlKDUsIC0xKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgVGhpcyBpcyBhIHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbi4gWW91IGFyZSBmcmVlIHRvIGNvcHksIG1vZGlmeSwgb3JcbiAgICByZWRpc3RyaWJ1dGUuXG4qL1xuXG4vKmpzbGludCBldmlsOiB0cnVlLCBzdHJpY3Q6IGZhbHNlLCByZWdleHA6IGZhbHNlICovXG5cbi8qbWVtYmVycyBcIlwiLCBcIlxcYlwiLCBcIlxcdFwiLCBcIlxcblwiLCBcIlxcZlwiLCBcIlxcclwiLCBcIlxcXCJcIiwgSlNPTiwgXCJcXFxcXCIsIGFwcGx5LFxuICAgIGNhbGwsIGNoYXJDb2RlQXQsIGdldFVUQ0RhdGUsIGdldFVUQ0Z1bGxZZWFyLCBnZXRVVENIb3VycyxcbiAgICBnZXRVVENNaW51dGVzLCBnZXRVVENNb250aCwgZ2V0VVRDU2Vjb25kcywgaGFzT3duUHJvcGVydHksIGpvaW4sXG4gICAgbGFzdEluZGV4LCBsZW5ndGgsIHBhcnNlLCBwcm90b3R5cGUsIHB1c2gsIHJlcGxhY2UsIHNsaWNlLCBzdHJpbmdpZnksXG4gICAgdGVzdCwgdG9KU09OLCB0b1N0cmluZywgdmFsdWVPZlxuKi9cblxuXG4vLyBDcmVhdGUgYSBKU09OIG9iamVjdCBvbmx5IGlmIG9uZSBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0LiBXZSBjcmVhdGUgdGhlXG4vLyBtZXRob2RzIGluIGEgY2xvc3VyZSB0byBhdm9pZCBjcmVhdGluZyBnbG9iYWwgdmFyaWFibGVzLlxuXG52YXIgSlNPTjtcbmlmICghSlNPTikge1xuICAgIEpTT04gPSB7fTtcbn1cblxuKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBnbG9iYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpXG4gICAgICAsIEpTT04gPSBnbG9iYWwuSlNPTlxuICAgICAgO1xuXG4gICAgaWYgKCFKU09OKSB7XG4gICAgICBKU09OID0ge307XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZihuKSB7XG4gICAgICAgIC8vIEZvcm1hdCBpbnRlZ2VycyB0byBoYXZlIGF0IGxlYXN0IHR3byBkaWdpdHMuXG4gICAgICAgIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuIDogbjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIERhdGUucHJvdG90eXBlLnRvSlNPTiAhPT0gJ2Z1bmN0aW9uJykge1xuXG4gICAgICAgIERhdGUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcblxuICAgICAgICAgICAgcmV0dXJuIGlzRmluaXRlKHRoaXMudmFsdWVPZigpKSA/XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVVENGdWxsWWVhcigpICAgICArICctJyArXG4gICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ01vbnRoKCkgKyAxKSArICctJyArXG4gICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ0RhdGUoKSkgICAgICArICdUJyArXG4gICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ0hvdXJzKCkpICAgICArICc6JyArXG4gICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ01pbnV0ZXMoKSkgICArICc6JyArXG4gICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ1NlY29uZHMoKSkgICArICdaJyA6IG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgU3RyaW5nLnByb3RvdHlwZS50b0pTT04gICAgICA9XG4gICAgICAgICAgICBOdW1iZXIucHJvdG90eXBlLnRvSlNPTiAgPVxuICAgICAgICAgICAgQm9vbGVhbi5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGN4ID0gL1tcXHUwMDAwXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2csXG4gICAgICAgIGVzY2FwYWJsZSA9IC9bXFxcXFxcXCJcXHgwMC1cXHgxZlxceDdmLVxceDlmXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2csXG4gICAgICAgIGdhcCxcbiAgICAgICAgaW5kZW50LFxuICAgICAgICBtZXRhID0geyAgICAvLyB0YWJsZSBvZiBjaGFyYWN0ZXIgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgICAgJ1xcYic6ICdcXFxcYicsXG4gICAgICAgICAgICAnXFx0JzogJ1xcXFx0JyxcbiAgICAgICAgICAgICdcXG4nOiAnXFxcXG4nLFxuICAgICAgICAgICAgJ1xcZic6ICdcXFxcZicsXG4gICAgICAgICAgICAnXFxyJzogJ1xcXFxyJyxcbiAgICAgICAgICAgICdcIicgOiAnXFxcXFwiJyxcbiAgICAgICAgICAgICdcXFxcJzogJ1xcXFxcXFxcJ1xuICAgICAgICB9LFxuICAgICAgICByZXA7XG5cblxuICAgIGZ1bmN0aW9uIHF1b3RlKHN0cmluZykge1xuXG4vLyBJZiB0aGUgc3RyaW5nIGNvbnRhaW5zIG5vIGNvbnRyb2wgY2hhcmFjdGVycywgbm8gcXVvdGUgY2hhcmFjdGVycywgYW5kIG5vXG4vLyBiYWNrc2xhc2ggY2hhcmFjdGVycywgdGhlbiB3ZSBjYW4gc2FmZWx5IHNsYXAgc29tZSBxdW90ZXMgYXJvdW5kIGl0LlxuLy8gT3RoZXJ3aXNlIHdlIG11c3QgYWxzbyByZXBsYWNlIHRoZSBvZmZlbmRpbmcgY2hhcmFjdGVycyB3aXRoIHNhZmUgZXNjYXBlXG4vLyBzZXF1ZW5jZXMuXG5cbiAgICAgICAgZXNjYXBhYmxlLmxhc3RJbmRleCA9IDA7XG4gICAgICAgIHJldHVybiBlc2NhcGFibGUudGVzdChzdHJpbmcpID8gJ1wiJyArIHN0cmluZy5yZXBsYWNlKGVzY2FwYWJsZSwgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHZhciBjID0gbWV0YVthXTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgPyBjIDpcbiAgICAgICAgICAgICAgICAnXFxcXHUnICsgKCcwMDAwJyArIGEuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC00KTtcbiAgICAgICAgfSkgKyAnXCInIDogJ1wiJyArIHN0cmluZyArICdcIic7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzdHIoa2V5LCBob2xkZXIpIHtcblxuLy8gUHJvZHVjZSBhIHN0cmluZyBmcm9tIGhvbGRlcltrZXldLlxuXG4gICAgICAgIHZhciBpLCAgICAgICAgICAvLyBUaGUgbG9vcCBjb3VudGVyLlxuICAgICAgICAgICAgaywgICAgICAgICAgLy8gVGhlIG1lbWJlciBrZXkuXG4gICAgICAgICAgICB2LCAgICAgICAgICAvLyBUaGUgbWVtYmVyIHZhbHVlLlxuICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgbWluZCA9IGdhcCxcbiAgICAgICAgICAgIHBhcnRpYWwsXG4gICAgICAgICAgICB2YWx1ZSA9IGhvbGRlcltrZXldO1xuXG4vLyBJZiB0aGUgdmFsdWUgaGFzIGEgdG9KU09OIG1ldGhvZCwgY2FsbCBpdCB0byBvYnRhaW4gYSByZXBsYWNlbWVudCB2YWx1ZS5cblxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiB2YWx1ZS50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9KU09OKGtleSk7XG4gICAgICAgIH1cblxuLy8gSWYgd2Ugd2VyZSBjYWxsZWQgd2l0aCBhIHJlcGxhY2VyIGZ1bmN0aW9uLCB0aGVuIGNhbGwgdGhlIHJlcGxhY2VyIHRvXG4vLyBvYnRhaW4gYSByZXBsYWNlbWVudCB2YWx1ZS5cblxuICAgICAgICBpZiAodHlwZW9mIHJlcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFsdWUgPSByZXAuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xuICAgICAgICB9XG5cbi8vIFdoYXQgaGFwcGVucyBuZXh0IGRlcGVuZHMgb24gdGhlIHZhbHVlJ3MgdHlwZS5cblxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgcmV0dXJuIHF1b3RlKHZhbHVlKTtcblxuICAgICAgICBjYXNlICdudW1iZXInOlxuXG4vLyBKU09OIG51bWJlcnMgbXVzdCBiZSBmaW5pdGUuIEVuY29kZSBub24tZmluaXRlIG51bWJlcnMgYXMgbnVsbC5cblxuICAgICAgICAgICAgcmV0dXJuIGlzRmluaXRlKHZhbHVlKSA/IFN0cmluZyh2YWx1ZSkgOiAnbnVsbCc7XG5cbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGNhc2UgJ251bGwnOlxuXG4vLyBJZiB0aGUgdmFsdWUgaXMgYSBib29sZWFuIG9yIG51bGwsIGNvbnZlcnQgaXQgdG8gYSBzdHJpbmcuIE5vdGU6XG4vLyB0eXBlb2YgbnVsbCBkb2VzIG5vdCBwcm9kdWNlICdudWxsJy4gVGhlIGNhc2UgaXMgaW5jbHVkZWQgaGVyZSBpblxuLy8gdGhlIHJlbW90ZSBjaGFuY2UgdGhhdCB0aGlzIGdldHMgZml4ZWQgc29tZWRheS5cblxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG5cbi8vIElmIHRoZSB0eXBlIGlzICdvYmplY3QnLCB3ZSBtaWdodCBiZSBkZWFsaW5nIHdpdGggYW4gb2JqZWN0IG9yIGFuIGFycmF5IG9yXG4vLyBudWxsLlxuXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG5cbi8vIER1ZSB0byBhIHNwZWNpZmljYXRpb24gYmx1bmRlciBpbiBFQ01BU2NyaXB0LCB0eXBlb2YgbnVsbCBpcyAnb2JqZWN0Jyxcbi8vIHNvIHdhdGNoIG91dCBmb3IgdGhhdCBjYXNlLlxuXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgICAgICAgIH1cblxuLy8gTWFrZSBhbiBhcnJheSB0byBob2xkIHRoZSBwYXJ0aWFsIHJlc3VsdHMgb2Ygc3RyaW5naWZ5aW5nIHRoaXMgb2JqZWN0IHZhbHVlLlxuXG4gICAgICAgICAgICBnYXAgKz0gaW5kZW50O1xuICAgICAgICAgICAgcGFydGlhbCA9IFtdO1xuXG4vLyBJcyB0aGUgdmFsdWUgYW4gYXJyYXk/XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuXG4vLyBUaGUgdmFsdWUgaXMgYW4gYXJyYXkuIFN0cmluZ2lmeSBldmVyeSBlbGVtZW50LiBVc2UgbnVsbCBhcyBhIHBsYWNlaG9sZGVyXG4vLyBmb3Igbm9uLUpTT04gdmFsdWVzLlxuXG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsW2ldID0gc3RyKGksIHZhbHVlKSB8fCAnbnVsbCc7XG4gICAgICAgICAgICAgICAgfVxuXG4vLyBKb2luIGFsbCBvZiB0aGUgZWxlbWVudHMgdG9nZXRoZXIsIHNlcGFyYXRlZCB3aXRoIGNvbW1hcywgYW5kIHdyYXAgdGhlbSBpblxuLy8gYnJhY2tldHMuXG5cbiAgICAgICAgICAgICAgICB2ID0gcGFydGlhbC5sZW5ndGggPT09IDAgPyAnW10nIDogZ2FwID9cbiAgICAgICAgICAgICAgICAgICAgJ1tcXG4nICsgZ2FwICsgcGFydGlhbC5qb2luKCcsXFxuJyArIGdhcCkgKyAnXFxuJyArIG1pbmQgKyAnXScgOlxuICAgICAgICAgICAgICAgICAgICAnWycgKyBwYXJ0aWFsLmpvaW4oJywnKSArICddJztcbiAgICAgICAgICAgICAgICBnYXAgPSBtaW5kO1xuICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfVxuXG4vLyBJZiB0aGUgcmVwbGFjZXIgaXMgYW4gYXJyYXksIHVzZSBpdCB0byBzZWxlY3QgdGhlIG1lbWJlcnMgdG8gYmUgc3RyaW5naWZpZWQuXG5cbiAgICAgICAgICAgIGlmIChyZXAgJiYgdHlwZW9mIHJlcCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSByZXAubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcFtpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSByZXBbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gc3RyKGssIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGlhbC5wdXNoKHF1b3RlKGspICsgKGdhcCA/ICc6ICcgOiAnOicpICsgdik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4vLyBPdGhlcndpc2UsIGl0ZXJhdGUgdGhyb3VnaCBhbGwgb2YgdGhlIGtleXMgaW4gdGhlIG9iamVjdC5cblxuICAgICAgICAgICAgICAgIGZvciAoayBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHN0cihrLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpYWwucHVzaChxdW90ZShrKSArIChnYXAgPyAnOiAnIDogJzonKSArIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4vLyBKb2luIGFsbCBvZiB0aGUgbWVtYmVyIHRleHRzIHRvZ2V0aGVyLCBzZXBhcmF0ZWQgd2l0aCBjb21tYXMsXG4vLyBhbmQgd3JhcCB0aGVtIGluIGJyYWNlcy5cblxuICAgICAgICAgICAgdiA9IHBhcnRpYWwubGVuZ3RoID09PSAwID8gJ3t9JyA6IGdhcCA/XG4gICAgICAgICAgICAgICAgJ3tcXG4nICsgZ2FwICsgcGFydGlhbC5qb2luKCcsXFxuJyArIGdhcCkgKyAnXFxuJyArIG1pbmQgKyAnfScgOlxuICAgICAgICAgICAgICAgICd7JyArIHBhcnRpYWwuam9pbignLCcpICsgJ30nO1xuICAgICAgICAgICAgZ2FwID0gbWluZDtcbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9XG4gICAgfVxuXG4vLyBJZiB0aGUgSlNPTiBvYmplY3QgZG9lcyBub3QgeWV0IGhhdmUgYSBzdHJpbmdpZnkgbWV0aG9kLCBnaXZlIGl0IG9uZS5cblxuICAgIGlmICh0eXBlb2YgSlNPTi5zdHJpbmdpZnkgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkgPSBmdW5jdGlvbiAodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSkge1xuXG4vLyBUaGUgc3RyaW5naWZ5IG1ldGhvZCB0YWtlcyBhIHZhbHVlIGFuZCBhbiBvcHRpb25hbCByZXBsYWNlciwgYW5kIGFuIG9wdGlvbmFsXG4vLyBzcGFjZSBwYXJhbWV0ZXIsIGFuZCByZXR1cm5zIGEgSlNPTiB0ZXh0LiBUaGUgcmVwbGFjZXIgY2FuIGJlIGEgZnVuY3Rpb25cbi8vIHRoYXQgY2FuIHJlcGxhY2UgdmFsdWVzLCBvciBhbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgd2lsbCBzZWxlY3QgdGhlIGtleXMuXG4vLyBBIGRlZmF1bHQgcmVwbGFjZXIgbWV0aG9kIGNhbiBiZSBwcm92aWRlZC4gVXNlIG9mIHRoZSBzcGFjZSBwYXJhbWV0ZXIgY2FuXG4vLyBwcm9kdWNlIHRleHQgdGhhdCBpcyBtb3JlIGVhc2lseSByZWFkYWJsZS5cblxuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICBnYXAgPSAnJztcbiAgICAgICAgICAgIGluZGVudCA9ICcnO1xuXG4vLyBJZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGlzIGEgbnVtYmVyLCBtYWtlIGFuIGluZGVudCBzdHJpbmcgY29udGFpbmluZyB0aGF0XG4vLyBtYW55IHNwYWNlcy5cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzcGFjZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3BhY2U7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRlbnQgKz0gJyAnO1xuICAgICAgICAgICAgICAgIH1cblxuLy8gSWYgdGhlIHNwYWNlIHBhcmFtZXRlciBpcyBhIHN0cmluZywgaXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBpbmRlbnQgc3RyaW5nLlxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpbmRlbnQgPSBzcGFjZTtcbiAgICAgICAgICAgIH1cblxuLy8gSWYgdGhlcmUgaXMgYSByZXBsYWNlciwgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIGFuIGFycmF5LlxuLy8gT3RoZXJ3aXNlLCB0aHJvdyBhbiBlcnJvci5cblxuICAgICAgICAgICAgcmVwID0gcmVwbGFjZXI7XG4gICAgICAgICAgICBpZiAocmVwbGFjZXIgJiYgdHlwZW9mIHJlcGxhY2VyICE9PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICAgICAgICAgICh0eXBlb2YgcmVwbGFjZXIgIT09ICdvYmplY3QnIHx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiByZXBsYWNlci5sZW5ndGggIT09ICdudW1iZXInKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSlNPTi5zdHJpbmdpZnknKTtcbiAgICAgICAgICAgIH1cblxuLy8gTWFrZSBhIGZha2Ugcm9vdCBvYmplY3QgY29udGFpbmluZyBvdXIgdmFsdWUgdW5kZXIgdGhlIGtleSBvZiAnJy5cbi8vIFJldHVybiB0aGUgcmVzdWx0IG9mIHN0cmluZ2lmeWluZyB0aGUgdmFsdWUuXG5cbiAgICAgICAgICAgIHJldHVybiBzdHIoJycsIHsnJzogdmFsdWV9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cblxuLy8gSWYgdGhlIEpTT04gb2JqZWN0IGRvZXMgbm90IHlldCBoYXZlIGEgcGFyc2UgbWV0aG9kLCBnaXZlIGl0IG9uZS5cblxuICAgIGlmICh0eXBlb2YgSlNPTi5wYXJzZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBKU09OLnBhcnNlID0gZnVuY3Rpb24gKHRleHQsIHJldml2ZXIpIHtcblxuLy8gVGhlIHBhcnNlIG1ldGhvZCB0YWtlcyBhIHRleHQgYW5kIGFuIG9wdGlvbmFsIHJldml2ZXIgZnVuY3Rpb24sIGFuZCByZXR1cm5zXG4vLyBhIEphdmFTY3JpcHQgdmFsdWUgaWYgdGhlIHRleHQgaXMgYSB2YWxpZCBKU09OIHRleHQuXG5cbiAgICAgICAgICAgIHZhciBqO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB3YWxrKGhvbGRlciwga2V5KSB7XG5cbi8vIFRoZSB3YWxrIG1ldGhvZCBpcyB1c2VkIHRvIHJlY3Vyc2l2ZWx5IHdhbGsgdGhlIHJlc3VsdGluZyBzdHJ1Y3R1cmUgc29cbi8vIHRoYXQgbW9kaWZpY2F0aW9ucyBjYW4gYmUgbWFkZS5cblxuICAgICAgICAgICAgICAgIHZhciBrLCB2LCB2YWx1ZSA9IGhvbGRlcltrZXldO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gd2Fsayh2YWx1ZSwgayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtrXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbHVlW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV2aXZlci5jYWxsKGhvbGRlciwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cblxuLy8gUGFyc2luZyBoYXBwZW5zIGluIGZvdXIgc3RhZ2VzLiBJbiB0aGUgZmlyc3Qgc3RhZ2UsIHdlIHJlcGxhY2UgY2VydGFpblxuLy8gVW5pY29kZSBjaGFyYWN0ZXJzIHdpdGggZXNjYXBlIHNlcXVlbmNlcy4gSmF2YVNjcmlwdCBoYW5kbGVzIG1hbnkgY2hhcmFjdGVyc1xuLy8gaW5jb3JyZWN0bHksIGVpdGhlciBzaWxlbnRseSBkZWxldGluZyB0aGVtLCBvciB0cmVhdGluZyB0aGVtIGFzIGxpbmUgZW5kaW5ncy5cblxuICAgICAgICAgICAgdGV4dCA9IFN0cmluZyh0ZXh0KTtcbiAgICAgICAgICAgIGN4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICBpZiAoY3gudGVzdCh0ZXh0KSkge1xuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoY3gsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnXFxcXHUnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICgnMDAwMCcgKyBhLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtNCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbi8vIEluIHRoZSBzZWNvbmQgc3RhZ2UsIHdlIHJ1biB0aGUgdGV4dCBhZ2FpbnN0IHJlZ3VsYXIgZXhwcmVzc2lvbnMgdGhhdCBsb29rXG4vLyBmb3Igbm9uLUpTT04gcGF0dGVybnMuIFdlIGFyZSBlc3BlY2lhbGx5IGNvbmNlcm5lZCB3aXRoICcoKScgYW5kICduZXcnXG4vLyBiZWNhdXNlIHRoZXkgY2FuIGNhdXNlIGludm9jYXRpb24sIGFuZCAnPScgYmVjYXVzZSBpdCBjYW4gY2F1c2UgbXV0YXRpb24uXG4vLyBCdXQganVzdCB0byBiZSBzYWZlLCB3ZSB3YW50IHRvIHJlamVjdCBhbGwgdW5leHBlY3RlZCBmb3Jtcy5cblxuLy8gV2Ugc3BsaXQgdGhlIHNlY29uZCBzdGFnZSBpbnRvIDQgcmVnZXhwIG9wZXJhdGlvbnMgaW4gb3JkZXIgdG8gd29yayBhcm91bmRcbi8vIGNyaXBwbGluZyBpbmVmZmljaWVuY2llcyBpbiBJRSdzIGFuZCBTYWZhcmkncyByZWdleHAgZW5naW5lcy4gRmlyc3Qgd2Vcbi8vIHJlcGxhY2UgdGhlIEpTT04gYmFja3NsYXNoIHBhaXJzIHdpdGggJ0AnIChhIG5vbi1KU09OIGNoYXJhY3RlcikuIFNlY29uZCwgd2Vcbi8vIHJlcGxhY2UgYWxsIHNpbXBsZSB2YWx1ZSB0b2tlbnMgd2l0aCAnXScgY2hhcmFjdGVycy4gVGhpcmQsIHdlIGRlbGV0ZSBhbGxcbi8vIG9wZW4gYnJhY2tldHMgdGhhdCBmb2xsb3cgYSBjb2xvbiBvciBjb21tYSBvciB0aGF0IGJlZ2luIHRoZSB0ZXh0LiBGaW5hbGx5LFxuLy8gd2UgbG9vayB0byBzZWUgdGhhdCB0aGUgcmVtYWluaW5nIGNoYXJhY3RlcnMgYXJlIG9ubHkgd2hpdGVzcGFjZSBvciAnXScgb3Jcbi8vICcsJyBvciAnOicgb3IgJ3snIG9yICd9Jy4gSWYgdGhhdCBpcyBzbywgdGhlbiB0aGUgdGV4dCBpcyBzYWZlIGZvciBldmFsLlxuXG4gICAgICAgICAgICBpZiAoL15bXFxdLDp7fVxcc10qJC9cbiAgICAgICAgICAgICAgICAgICAgLnRlc3QodGV4dC5yZXBsYWNlKC9cXFxcKD86W1wiXFxcXFxcL2JmbnJ0XXx1WzAtOWEtZkEtRl17NH0pL2csICdAJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cIlteXCJcXFxcXFxuXFxyXSpcInx0cnVlfGZhbHNlfG51bGx8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrXFwtXT9cXGQrKT8vZywgJ10nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyg/Ol58OnwsKSg/OlxccypcXFspKy9nLCAnJykpKSB7XG5cbi8vIEluIHRoZSB0aGlyZCBzdGFnZSB3ZSB1c2UgdGhlIGV2YWwgZnVuY3Rpb24gdG8gY29tcGlsZSB0aGUgdGV4dCBpbnRvIGFcbi8vIEphdmFTY3JpcHQgc3RydWN0dXJlLiBUaGUgJ3snIG9wZXJhdG9yIGlzIHN1YmplY3QgdG8gYSBzeW50YWN0aWMgYW1iaWd1aXR5XG4vLyBpbiBKYXZhU2NyaXB0OiBpdCBjYW4gYmVnaW4gYSBibG9jayBvciBhbiBvYmplY3QgbGl0ZXJhbC4gV2Ugd3JhcCB0aGUgdGV4dFxuLy8gaW4gcGFyZW5zIHRvIGVsaW1pbmF0ZSB0aGUgYW1iaWd1aXR5LlxuXG4gICAgICAgICAgICAgICAgaiA9IGV2YWwoJygnICsgdGV4dCArICcpJyk7XG5cbi8vIEluIHRoZSBvcHRpb25hbCBmb3VydGggc3RhZ2UsIHdlIHJlY3Vyc2l2ZWx5IHdhbGsgdGhlIG5ldyBzdHJ1Y3R1cmUsIHBhc3Npbmdcbi8vIGVhY2ggbmFtZS92YWx1ZSBwYWlyIHRvIGEgcmV2aXZlciBmdW5jdGlvbiBmb3IgcG9zc2libGUgdHJhbnNmb3JtYXRpb24uXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHJldml2ZXIgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgICAgICAgICAgICB3YWxrKHsnJzogan0sICcnKSA6IGo7XG4gICAgICAgICAgICB9XG5cbi8vIElmIHRoZSB0ZXh0IGlzIG5vdCBKU09OIHBhcnNlYWJsZSwgdGhlbiBhIFN5bnRheEVycm9yIGlzIHRocm93bi5cblxuICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdKU09OLnBhcnNlJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2xvYmFsLkpTT04gPSBKU09OO1xuICAgIG1vZHVsZS5leHBvcnRzID0gSlNPTjtcbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vX0pTT05AMS4wLjBASlNPTi9qc29uMi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvX0pTT05AMS4wLjBASlNPTi9qc29uMi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwidmFyIGNoYXJlbmMgPSB7XG4gIC8vIFVURi04IGVuY29kaW5nXG4gIHV0Zjg6IHtcbiAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIHN0cmluZ1RvQnl0ZXM6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgcmV0dXJuIGNoYXJlbmMuYmluLnN0cmluZ1RvQnl0ZXModW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBzdHJpbmdcbiAgICBieXRlc1RvU3RyaW5nOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoY2hhcmVuYy5iaW4uYnl0ZXNUb1N0cmluZyhieXRlcykpKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQmluYXJ5IGVuY29kaW5nXG4gIGJpbjoge1xuICAgIC8vIENvbnZlcnQgYSBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgc3RyaW5nVG9CeXRlczogZnVuY3Rpb24oc3RyKSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKylcbiAgICAgICAgYnl0ZXMucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIHN0cmluZ1xuICAgIGJ5dGVzVG9TdHJpbmc6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciBzdHIgPSBbXSwgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgc3RyLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSkpO1xuICAgICAgcmV0dXJuIHN0ci5qb2luKCcnKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2hhcmVuYztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9fY2hhcmVuY0AwLjAuMkBjaGFyZW5jL2NoYXJlbmMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL19jaGFyZW5jQDAuMC4yQGNoYXJlbmMvY2hhcmVuYy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgYmFzZTY0bWFwXG4gICAgICA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJyxcblxuICBjcnlwdCA9IHtcbiAgICAvLyBCaXQtd2lzZSByb3RhdGlvbiBsZWZ0XG4gICAgcm90bDogZnVuY3Rpb24obiwgYikge1xuICAgICAgcmV0dXJuIChuIDw8IGIpIHwgKG4gPj4+ICgzMiAtIGIpKTtcbiAgICB9LFxuXG4gICAgLy8gQml0LXdpc2Ugcm90YXRpb24gcmlnaHRcbiAgICByb3RyOiBmdW5jdGlvbihuLCBiKSB7XG4gICAgICByZXR1cm4gKG4gPDwgKDMyIC0gYikpIHwgKG4gPj4+IGIpO1xuICAgIH0sXG5cbiAgICAvLyBTd2FwIGJpZy1lbmRpYW4gdG8gbGl0dGxlLWVuZGlhbiBhbmQgdmljZSB2ZXJzYVxuICAgIGVuZGlhbjogZnVuY3Rpb24obikge1xuICAgICAgLy8gSWYgbnVtYmVyIGdpdmVuLCBzd2FwIGVuZGlhblxuICAgICAgaWYgKG4uY29uc3RydWN0b3IgPT0gTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBjcnlwdC5yb3RsKG4sIDgpICYgMHgwMEZGMDBGRiB8IGNyeXB0LnJvdGwobiwgMjQpICYgMHhGRjAwRkYwMDtcbiAgICAgIH1cblxuICAgICAgLy8gRWxzZSwgYXNzdW1lIGFycmF5IGFuZCBzd2FwIGFsbCBpdGVtc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKVxuICAgICAgICBuW2ldID0gY3J5cHQuZW5kaWFuKG5baV0pO1xuICAgICAgcmV0dXJuIG47XG4gICAgfSxcblxuICAgIC8vIEdlbmVyYXRlIGFuIGFycmF5IG9mIGFueSBsZW5ndGggb2YgcmFuZG9tIGJ5dGVzXG4gICAgcmFuZG9tQnl0ZXM6IGZ1bmN0aW9uKG4pIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW107IG4gPiAwOyBuLS0pXG4gICAgICAgIGJ5dGVzLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSk7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGJpZy1lbmRpYW4gMzItYml0IHdvcmRzXG4gICAgYnl0ZXNUb1dvcmRzOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgd29yZHMgPSBbXSwgaSA9IDAsIGIgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyssIGIgKz0gOClcbiAgICAgICAgd29yZHNbYiA+Pj4gNV0gfD0gYnl0ZXNbaV0gPDwgKDI0IC0gYiAlIDMyKTtcbiAgICAgIHJldHVybiB3b3JkcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBiaWctZW5kaWFuIDMyLWJpdCB3b3JkcyB0byBhIGJ5dGUgYXJyYXlcbiAgICB3b3Jkc1RvQnl0ZXM6IGZ1bmN0aW9uKHdvcmRzKSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBiID0gMDsgYiA8IHdvcmRzLmxlbmd0aCAqIDMyOyBiICs9IDgpXG4gICAgICAgIGJ5dGVzLnB1c2goKHdvcmRzW2IgPj4+IDVdID4+PiAoMjQgLSBiICUgMzIpKSAmIDB4RkYpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIGhleCBzdHJpbmdcbiAgICBieXRlc1RvSGV4OiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgaGV4ID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaGV4LnB1c2goKGJ5dGVzW2ldID4+PiA0KS50b1N0cmluZygxNikpO1xuICAgICAgICBoZXgucHVzaCgoYnl0ZXNbaV0gJiAweEYpLnRvU3RyaW5nKDE2KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGV4LmpvaW4oJycpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgaGV4IHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBoZXhUb0J5dGVzOiBmdW5jdGlvbihoZXgpIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGMgPSAwOyBjIDwgaGV4Lmxlbmd0aDsgYyArPSAyKVxuICAgICAgICBieXRlcy5wdXNoKHBhcnNlSW50KGhleC5zdWJzdHIoYywgMiksIDE2KSk7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgYmFzZS02NCBzdHJpbmdcbiAgICBieXRlc1RvQmFzZTY0OiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgYmFzZTY0ID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgdmFyIHRyaXBsZXQgPSAoYnl0ZXNbaV0gPDwgMTYpIHwgKGJ5dGVzW2kgKyAxXSA8PCA4KSB8IGJ5dGVzW2kgKyAyXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspXG4gICAgICAgICAgaWYgKGkgKiA4ICsgaiAqIDYgPD0gYnl0ZXMubGVuZ3RoICogOClcbiAgICAgICAgICAgIGJhc2U2NC5wdXNoKGJhc2U2NG1hcC5jaGFyQXQoKHRyaXBsZXQgPj4+IDYgKiAoMyAtIGopKSAmIDB4M0YpKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBiYXNlNjQucHVzaCgnPScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJhc2U2NC5qb2luKCcnKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJhc2UtNjQgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIGJhc2U2NFRvQnl0ZXM6IGZ1bmN0aW9uKGJhc2U2NCkge1xuICAgICAgLy8gUmVtb3ZlIG5vbi1iYXNlLTY0IGNoYXJhY3RlcnNcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5yZXBsYWNlKC9bXkEtWjAtOStcXC9dL2lnLCAnJyk7XG5cbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGkgPSAwLCBpbW9kNCA9IDA7IGkgPCBiYXNlNjQubGVuZ3RoO1xuICAgICAgICAgIGltb2Q0ID0gKytpICUgNCkge1xuICAgICAgICBpZiAoaW1vZDQgPT0gMCkgY29udGludWU7XG4gICAgICAgIGJ5dGVzLnB1c2goKChiYXNlNjRtYXAuaW5kZXhPZihiYXNlNjQuY2hhckF0KGkgLSAxKSlcbiAgICAgICAgICAgICYgKE1hdGgucG93KDIsIC0yICogaW1vZDQgKyA4KSAtIDEpKSA8PCAoaW1vZDQgKiAyKSlcbiAgICAgICAgICAgIHwgKGJhc2U2NG1hcC5pbmRleE9mKGJhc2U2NC5jaGFyQXQoaSkpID4+PiAoNiAtIGltb2Q0ICogMikpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBjcnlwdDtcbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vX2NyeXB0QDAuMC4yQGNyeXB0L2NyeXB0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9fY3J5cHRAMC4wLjJAY3J5cHQvY3J5cHQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19pcy1idWZmZXJAMS4xLjZAaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9faXMtYnVmZmVyQDEuMS42QGlzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwiKGZ1bmN0aW9uKCl7XHJcbiAgdmFyIGNyeXB0ID0gcmVxdWlyZSgnY3J5cHQnKSxcclxuICAgICAgdXRmOCA9IHJlcXVpcmUoJ2NoYXJlbmMnKS51dGY4LFxyXG4gICAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpLFxyXG4gICAgICBiaW4gPSByZXF1aXJlKCdjaGFyZW5jJykuYmluLFxyXG5cclxuICAvLyBUaGUgY29yZVxyXG4gIG1kNSA9IGZ1bmN0aW9uIChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICAvLyBDb252ZXJ0IHRvIGJ5dGUgYXJyYXlcclxuICAgIGlmIChtZXNzYWdlLmNvbnN0cnVjdG9yID09IFN0cmluZylcclxuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbmNvZGluZyA9PT0gJ2JpbmFyeScpXHJcbiAgICAgICAgbWVzc2FnZSA9IGJpbi5zdHJpbmdUb0J5dGVzKG1lc3NhZ2UpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgbWVzc2FnZSA9IHV0Zjguc3RyaW5nVG9CeXRlcyhtZXNzYWdlKTtcclxuICAgIGVsc2UgaWYgKGlzQnVmZmVyKG1lc3NhZ2UpKVxyXG4gICAgICBtZXNzYWdlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobWVzc2FnZSwgMCk7XHJcbiAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheShtZXNzYWdlKSlcclxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UudG9TdHJpbmcoKTtcclxuICAgIC8vIGVsc2UsIGFzc3VtZSBieXRlIGFycmF5IGFscmVhZHlcclxuXHJcbiAgICB2YXIgbSA9IGNyeXB0LmJ5dGVzVG9Xb3JkcyhtZXNzYWdlKSxcclxuICAgICAgICBsID0gbWVzc2FnZS5sZW5ndGggKiA4LFxyXG4gICAgICAgIGEgPSAgMTczMjU4NDE5MyxcclxuICAgICAgICBiID0gLTI3MTczMzg3OSxcclxuICAgICAgICBjID0gLTE3MzI1ODQxOTQsXHJcbiAgICAgICAgZCA9ICAyNzE3MzM4Nzg7XHJcblxyXG4gICAgLy8gU3dhcCBlbmRpYW5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtW2ldID0gKChtW2ldIDw8ICA4KSB8IChtW2ldID4+PiAyNCkpICYgMHgwMEZGMDBGRiB8XHJcbiAgICAgICAgICAgICAoKG1baV0gPDwgMjQpIHwgKG1baV0gPj4+ICA4KSkgJiAweEZGMDBGRjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhZGRpbmdcclxuICAgIG1bbCA+Pj4gNV0gfD0gMHg4MCA8PCAobCAlIDMyKTtcclxuICAgIG1bKCgobCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBsO1xyXG5cclxuICAgIC8vIE1ldGhvZCBzaG9ydGN1dHNcclxuICAgIHZhciBGRiA9IG1kNS5fZmYsXHJcbiAgICAgICAgR0cgPSBtZDUuX2dnLFxyXG4gICAgICAgIEhIID0gbWQ1Ll9oaCxcclxuICAgICAgICBJSSA9IG1kNS5faWk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLmxlbmd0aDsgaSArPSAxNikge1xyXG5cclxuICAgICAgdmFyIGFhID0gYSxcclxuICAgICAgICAgIGJiID0gYixcclxuICAgICAgICAgIGNjID0gYyxcclxuICAgICAgICAgIGRkID0gZDtcclxuXHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krIDBdLCAgNywgLTY4MDg3NjkzNik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDFdLCAxMiwgLTM4OTU2NDU4Nik7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krIDJdLCAxNywgIDYwNjEwNTgxOSk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKyA0XSwgIDcsIC0xNzY0MTg4OTcpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyA1XSwgMTIsICAxMjAwMDgwNDI2KTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krIDddLCAyMiwgLTQ1NzA1OTgzKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsgOF0sICA3LCAgMTc3MDAzNTQxNik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKzEwXSwgMTcsIC00MjA2Myk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKzEyXSwgIDcsICAxODA0NjAzNjgyKTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsxM10sIDEyLCAtNDAzNDExMDEpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKzE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsxNV0sIDIyLCAgMTIzNjUzNTMyOSk7XHJcblxyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyAxXSwgIDUsIC0xNjU3OTY1MTApO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKyA2XSwgIDksIC0xMDY5NTAxNjMyKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsxMV0sIDE0LCAgNjQzNzE3NzEzKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgMF0sIDIwLCAtMzczODk3MzAyKTtcclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgNV0sICA1LCAtNzAxNTU4NjkxKTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsxMF0sICA5LCAgMzgwMTYwODMpO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKzE1XSwgMTQsIC02NjA0NzgzMzUpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyA5XSwgIDUsICA1Njg0NDY0MzgpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKzE0XSwgIDksIC0xMDE5ODAzNjkwKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsgM10sIDE0LCAtMTg3MzYzOTYxKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgOF0sIDIwLCAgMTE2MzUzMTUwMSk7XHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krMTNdLCAgNSwgLTE0NDQ2ODE0NjcpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKyAyXSwgIDksIC01MTQwMzc4NCk7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krIDddLCAxNCwgIDE3MzUzMjg0NzMpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKzEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcclxuXHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDVdLCAgNCwgLTM3ODU1OCk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKzExXSwgMTYsICAxODM5MDMwNTYyKTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsxNF0sIDIzLCAtMzUzMDk1NTYpO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyAxXSwgIDQsIC0xNTMwOTkyMDYwKTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsgNF0sIDExLCAgMTI3Mjg5MzM1Myk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krIDddLCAxNiwgLTE1NTQ5NzYzMik7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKzEzXSwgIDQsICA2ODEyNzkxNzQpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKyAwXSwgMTEsIC0zNTg1MzcyMjIpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKyA2XSwgMjMsICA3NjAyOTE4OSk7XHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDldLCAgNCwgLTY0MDM2NDQ4Nyk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krMTJdLCAxMSwgLTQyMTgxNTgzNSk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krMTVdLCAxNiwgIDUzMDc0MjUyMCk7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krIDJdLCAyMywgLTk5NTMzODY1MSk7XHJcblxyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKyAwXSwgIDYsIC0xOTg2MzA4NDQpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKyA3XSwgMTAsICAxMTI2ODkxNDE1KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDVdLCAyMSwgLTU3NDM0MDU1KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsxMl0sICA2LCAgMTcwMDQ4NTU3MSk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKzEwXSwgMTUsIC0xMDUxNTIzKTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krIDhdLCAgNiwgIDE4NzMzMTMzNTkpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKzE1XSwgMTAsIC0zMDYxMTc0NCk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krIDZdLCAxNSwgLTE1NjAxOTgzODApO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKzEzXSwgMjEsICAxMzA5MTUxNjQ5KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsgNF0sICA2LCAtMTQ1NTIzMDcwKTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krIDJdLCAxNSwgIDcxODc4NzI1OSk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDldLCAyMSwgLTM0MzQ4NTU1MSk7XHJcblxyXG4gICAgICBhID0gKGEgKyBhYSkgPj4+IDA7XHJcbiAgICAgIGIgPSAoYiArIGJiKSA+Pj4gMDtcclxuICAgICAgYyA9IChjICsgY2MpID4+PiAwO1xyXG4gICAgICBkID0gKGQgKyBkZCkgPj4+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNyeXB0LmVuZGlhbihbYSwgYiwgYywgZF0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEF1eGlsaWFyeSBmdW5jdGlvbnNcclxuICBtZDUuX2ZmICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiAmIGMgfCB+YiAmIGQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2dnICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiAmIGQgfCBjICYgfmQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2hoICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiBeIGMgXiBkKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9paSAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGMgXiAoYiB8IH5kKSkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG5cclxuICAvLyBQYWNrYWdlIHByaXZhdGUgYmxvY2tzaXplXHJcbiAgbWQ1Ll9ibG9ja3NpemUgPSAxNjtcclxuICBtZDUuX2RpZ2VzdHNpemUgPSAxNjtcclxuXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgaWYgKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCB8fCBtZXNzYWdlID09PSBudWxsKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgYXJndW1lbnQgJyArIG1lc3NhZ2UpO1xyXG5cclxuICAgIHZhciBkaWdlc3RieXRlcyA9IGNyeXB0LndvcmRzVG9CeXRlcyhtZDUobWVzc2FnZSwgb3B0aW9ucykpO1xyXG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5hc0J5dGVzID8gZGlnZXN0Ynl0ZXMgOlxyXG4gICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5hc1N0cmluZyA/IGJpbi5ieXRlc1RvU3RyaW5nKGRpZ2VzdGJ5dGVzKSA6XHJcbiAgICAgICAgY3J5cHQuYnl0ZXNUb0hleChkaWdlc3RieXRlcyk7XHJcbiAgfTtcclxuXHJcbn0pKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9fbWQ1QDIuMi4xQG1kNS9tZDUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL19tZDVAMi4yLjFAbWQ1L21kNS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwiaW1wb3J0IHtzaG93Q2hpbGRMb2NrfSBmcm9tICcuL2FwcC9jaGlsZExvY2snO1xyXG5pbXBvcnQge2NoaWxkTWVudX0gZnJvbSAnLi9hcHAvY2hpbGRNZW51JztcclxuXHJcbmltcG9ydCB7c2hvd0RpYWxvZ30gZnJvbSBcIi4vYXBwL2RpYWxvZ1wiO1xyXG5pbXBvcnQge3Nob3dMb2FkaW5nLGhpZGVMb2FkaW5nfSBmcm9tIFwiLi9hcHAvbG9hZGluZ1wiO1xyXG5pbXBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc30gZnJvbSBcIi4vdG9vZG8vX2tleWNvZGVzXCI7XHJcbmltcG9ydCB7YXBwQXJnc30gZnJvbSAnLi9hcHAvUGFnZUFyZ3MnO1xyXG5cclxuXHJcbnZhciBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxudmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuXHJcblxyXG5mdW5jdGlvbiBIb21lTWVudSgpIHtcclxuICAgIHRoaXMubGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubGF5b3V0KTtcclxuICAgIHRoaXMubGF5b3V0LmNsYXNzTmFtZSA9ICdob21lLW1lbnUnO1xyXG4gICAgdGhpcy5sYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAnPGRpdiBpZD1cIm1lbnUtYnRuMFwiIGNsYXNzPVwibWVudS1idG5cIj48aW1nIHNyYz1cIlwiPjwvZGl2PicgK1xyXG4gICAgICAgICc8ZGl2IGlkPVwibWVudS1idG4xXCIgY2xhc3M9XCJtZW51LWJ0blwiPjxpbWcgc3JjPVwiXCI+PC9kaXY+JyArXHJcbiAgICAgICAgJzxkaXYgaWQ9XCJtZW51LWJ0bjJcIiBjbGFzcz1cIm1lbnUtYnRuXCI+PGltZyBzcmM9XCJcIj48L2Rpdj4nICtcclxuICAgICAgICAnPGRpdiBpZD1cIm1lbnUtYnRuM1wiIGNsYXNzPVwibWVudS1idG5cIj48aW1nIHNyYz1cIlwiPjwvZGl2PicrXHJcbiAgICAgICAgJzxkaXYgaWQ9XCJtZW51LWJ0bjRcIiBjbGFzcz1cIm1lbnUtYnRuXCI+PGltZyBzcmM9XCJcIj48L2Rpdj4nO1xyXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyArK2kpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMubGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWJ0bicgKyBpKTtcclxuICAgICAgICB0aGlzLml0ZW1zLnB1c2gobm9kZSk7XHJcblxyXG4gICAgICAgIC8vc2V0VGltZW91dChmdW5jdGlvbiAoaSwgbm9kZSkge1xyXG4gICAgICAgIHZhciBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgIGltZy5zcmMgPSAnaW1nL21lbnUvbmF2XycgKyBpICsgJ18wLnBuZyc7XHJcbiAgICAgICAgLy99LCAxMDAgKiBpLCBpLCBub2RlKTtcclxuICAgIH1cclxufVxyXG5Ib21lTWVudS5wcm90b3R5cGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIHtpbnR9IGN1cnJlbnQgWzAsM11cclxuICAgICAqL1xyXG4gICAgY3VycmVudDogMCxcclxuICAgIG9uS2V5RG93bjogbnVsbCxcclxuICAgIHRkZVVzZXI6IG51bGwsXHJcblxyXG4gICAgc2hvdzogZnVuY3Rpb24gKGN1cnJlbnQsIG9uS2V5RG93biwgdGRlVXNlcikge1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5vbktleURvd24gPSBvbktleURvd247XHJcbiAgICAgICAgdGhpcy50ZGVVc2VyID0gdGRlVXNlcjtcclxuICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG93bmVyLmhhbmRsZUtleShlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3NldEZvY3VzKHRoaXMuY3VycmVudCwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9zZXRGb2N1czogZnVuY3Rpb24gKGN1cnJlbnQsIGZvY3VzKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLml0ZW1zW2N1cnJlbnRdO1xyXG4gICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZm9jdXMgPyAnbWVudS1idG4tZm9jdXMnIDogJ21lbnUtYnRuJztcclxuICAgICAgICB2YXIgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICBpZiAoZm9jdXMpIHtcclxuICAgICAgICAgICAgaW1nLnNyYyA9ICdpbWcvbWVudS9uYXZfJyArIGN1cnJlbnQgKyAnXzEucG5nJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gJ2ltZy9tZW51L25hdl8nICsgY3VycmVudCArICdfMC5wbmcnO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gKGN1cnJlbnQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0Rm9jdXMoaSwgY3VycmVudCA9PSBpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlS2V5OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBvd25lciA9IHRoaXM7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIHZhciBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5sZWZ0OlxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLmN1cnJlbnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50IDwgNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQrKztcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUub2s6XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwQXJncy5vbkZpcnN0UGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLmN1cnJlbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcEFyZ3Mub25Ib21lUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLmN1cnJlbnQgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvd25lci50ZGVVc2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbGRMb2NrID0gb3duZXIudGRlVXNlci5jaGlsZExvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRMb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE1lbnUuc2hvdyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ0biA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDaGlsZExvY2soZnVuY3Rpb24gKGNvZGUsIG1zZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25WYWxpZExvY2soY29kZSwgbXNnLCBvd25lciwgYnRuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMSwgMCwgJ+ivt+i+k+WFpeaXp+eahDbkvY3mlbDlrZflr4bnoIHvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG93bmVyLm9uS2V5RG93biwgb3duZXIudGRlVXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMiwgMCwgJ+mAieaLqemcgOimgeeahOaTjeS9nOaMieehruWumumUrui/m+ihjOS4i+S4gOatpe+8jOaMiei/lOWbnumUruWFs+mXreW8ueeql+OAgicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTWVudS5zaG93KGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+W8gOWQr+erpemUgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldENoaWxkTG9jayhvd25lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEsIDAsICflvIDlkK/nq6XplIHlkI7vvIzmr4/mrKHku5jotLnorqLotK3pnIDovpPlhaXmraPnoa7lr4bnoIHvvJvmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50ID09IDQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcEFyZ3Mub25UdXJudGFibGVQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmVzYzpcclxuICAgICAgICAgICAgICAgIGFwcEFyZ3Mub25GaXJzdFBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZihvd25lci5vbktleURvd24pID09PSAnZnVuY3Rpb24nKSBvd25lci5vbktleURvd24oY3VyS2V5KTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gY29kZSB7aW50fVxyXG4gKiBAcGFyYW0gbXNnIHtzdHJpbmd9XHJcbiAqIEBwYXJhbSBvd25lciB7SG9tZU1lbnV9XHJcbiAqIEBwYXJhbSBidG4ge2ludH0gMC7lhbPpl63nq6XplIEgMS7mm7TmlLnlr4bnoIFcclxuICovXHJcbmZ1bmN0aW9uIG9uVmFsaWRMb2NrKGNvZGUsIG1zZywgb3duZXIsIGJ0bikge1xyXG4gICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgIHZhciBvbGRMb2NrID0gb3duZXIudGRlVXNlci5jaGlsZExvY2s7XHJcbiAgICAgICAgaWYgKG1zZyA9PSBvbGRMb2NrKSB7XHJcbiAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YmNsaSA9IG93bmVyLnRkZVVzZXIuc3RiY2xpO1xyXG4gICAgICAgICAgICAgICAgc3RiY2xpLnRkZUxvY2sob2xkTG9jaywgJycsIGZ1bmN0aW9uIChjb2RlLCBiaXopIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9ICfnq6XplIHlhbPpl63miJDlip8nO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uVGRlTG9jayhjb2RlLCBiaXosIG93bmVyLCB0ZXh0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRDaGlsZExvY2sob3duZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0RpYWxvZyhmdW5jdGlvbiAoZGxnQnRuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGxnQnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2hpbGRMb2NrKGZ1bmN0aW9uIChjb2RlLCBtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25WYWxpZExvY2soY29kZSwgbXNnLCBvd25lciwgYnRuKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxLCAwLCAn6K+36L6T5YWl5pen55qENuS9jeaVsOWtl+Wvhuegge+8jOaMiei/lOWbnumUruWFs+mXreW8ueeql+OAgicpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG93bmVyLm9uS2V5RG93biwgb3duZXIudGRlVXNlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDAsICfmj5DnpLonLCAn56ul6ZSB6aqM6K+B5Ye66ZSZJywgJ+mHjeivlScsICflj5bmtognKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb3duZXIub25LZXlEb3duLCBvd25lci50ZGVVc2VyKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRDaGlsZExvY2sob3duZXIpIHtcclxuICAgIHZhciBvbGRMb2NrID0gb3duZXIudGRlVXNlci5jaGlsZExvY2s7XHJcbiAgICB2YXIgbmV3TG9jaztcclxuICAgIHNob3dDaGlsZExvY2soZnVuY3Rpb24gKGNvZGUsIG1zZykge1xyXG4gICAgICAgIGlmIChjb2RlID09IDApIHtcclxuICAgICAgICAgICAgbmV3TG9jayA9IG1zZztcclxuICAgICAgICAgICAgc2hvd0NoaWxkTG9jayhmdW5jdGlvbiAoY29kZSwgbXNnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1zZyAhPSBuZXdMb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRDaGlsZExvY2sob3duZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG93bmVyLm9uS2V5RG93biwgb3duZXIudGRlVXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDAsICfmj5DnpLonLCAn5Lik5qyh6L6T5YWl5LiN5ZCMJywgJ+mHjeivlScsICflj5bmtognKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RiY2xpID0gb3duZXIudGRlVXNlci5zdGJjbGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YmNsaS50ZGVMb2NrKG9sZExvY2ssIG5ld0xvY2ssIGZ1bmN0aW9uIChjb2RlLCBiaXopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gb2xkTG9jayA/ICfnq6XplIHmm7TmlLnmiJDlip8nIDogJ+erpemUgeW8gOWQr+aIkOWKnyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRkZUxvY2soY29kZSwgYml6LCBvd25lciwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwLCAxLCAn6K+35YaN5qyh6L6T5YWl5paw55qENuS9jeaVsOWtl+Wvhuegge+8jOaMiei/lOWbnumUruWFs+mXreW8ueeql+OAgicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb3duZXIub25LZXlEb3duLCBvd25lci50ZGVVc2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9LCAwLCAwLCAn6K+36L6T5YWl5paw55qENuS9jeaVsOWtl+Wvhuegge+8jOaMiei/lOWbnumUruWFs+mXreW8ueeql+OAgicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvblRkZUxvY2soY29kZSwgYml6LCBvd25lcikge1xyXG4gICAgdmFyIHRleHQgPSBhcmd1bWVudHNbM10gPyBhcmd1bWVudHNbM10gOiAn56ul6ZSB6K6+572u5oiQ5YqfJztcclxuICAgIGlmIChjb2RlID09IDApIHtcclxuICAgICAgICBvd25lci50ZGVVc2VyLmNoaWxkTG9jayA9IGJpei5jaGlsZExvY2s7XHJcbiAgICAgICAgc2hvd0xvYWRpbmcoJ+aPkOekuicsIHRleHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93TG9hZGluZygn5o+Q56S6JyArICdbJyArIGNvZGUgKyAnXScsICfnvZHnu5zlvILluLgnICsgJ1snICsgYml6ICsgJ10nKTtcclxuICAgIH1cclxuICAgIGhpZGVMb2FkaW5nKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG93bmVyLm9uS2V5RG93biwgb3duZXIudGRlVXNlcik7XHJcbiAgICB9LCAyMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IHtIb21lTWVudX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0hvbWVNZW51LmpzIiwiaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gJy4vYXBwL2RpYWxvZyc7XHJcblxyXG52YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbnZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcblxyXG4vLyB2YXIgY2FsbGJhY2tVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy90ZGVudGVyL2NhbGxiYWNrLmh0bWwnO1xyXG52YXIgY2FsbGJhY2tVcmwgPSBcImh0dHA6Ly8xMjAuNzcuODIuNTQvdGRHYW1lQ2VudGVyL2NhbGxiYWNrLmh0bWxcIjtcclxuZnVuY3Rpb24gU2hvcEJpbGwoKSB7XHJcbiAgICB0aGlzLmxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmxheW91dCk7XHJcbiAgICB0aGlzLmxheW91dC5jbGFzc05hbWUgPSAnYmlsbC1idG4nO1xyXG4gICAgdGhpcy5sYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAnPGRpdiBjbGFzcz1cImJpbGwtYnRuLWZvY3VzXCI+PC9kaXY+JztcclxuXHJcbiAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICB2YXIgbm9kZSA9IHRoaXMubGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJy5iaWxsLWJ0bi1mb2N1cycpO1xyXG4gICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdGhpcy5pdGVtcy5wdXNoKG5vZGUpO1xyXG59XHJcblxyXG5TaG9wQmlsbC5wcm90b3R5cGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIHtpbnR9IGN1cnJlbnQgWzAsMF1cclxuICAgICAqL1xyXG4gICAgY3VycmVudDogMCxcclxuICAgIG9uS2V5RG93bjogbnVsbCxcclxuICAgIHRkZVVzZXI6IG51bGwsXHJcblxyXG4gICAgc2hvdzogZnVuY3Rpb24gKGN1cnJlbnQsIG9uS2V5RG93biwgdGRlVXNlcikge1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5vbktleURvd24gPSBvbktleURvd247XHJcbiAgICAgICAgdGhpcy50ZGVVc2VyID0gdGRlVXNlcjtcclxuICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG93bmVyLmhhbmRsZUtleShlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3NldEZvY3VzKHRoaXMuY3VycmVudCwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9zZXRGb2N1czogZnVuY3Rpb24gKGN1cnJlbnQsIGZvY3VzKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLml0ZW1zW2N1cnJlbnRdO1xyXG4gICAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9IGZvY3VzID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gKGN1cnJlbnQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2V0Rm9jdXMoaSwgY3VycmVudCA9PSBpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlS2V5OiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBvd25lciA9IHRoaXM7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIHZhciBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN3aXRjaCAoY3VyS2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazpcclxuICAgICAgICAgICAgICAgIGlmIChiaWxscykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbGxUYWJsZS5zdGFydChiaWxscyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmlsbFRhYmxlLnNob3coYmlsbFRhYmxlLmN1cnJlbnQsIG9uVGFibGVLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHN0YmNsaSA9IG93bmVyLnRkZVVzZXIuc3RiY2xpO1xyXG4gICAgICAgICAgICAgICAgc3RiY2xpLmJpbGwob25CaWxsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZihvd25lci5vbktleURvd24pID09PSAnZnVuY3Rpb24nKSBvd25lci5vbktleURvd24oY3VyS2V5KTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBwYWdlU2l6ZSA9IDU7XHJcbnZhciBpdGVtU2l6ZSA9IFs3NSwgMTQ5LCAyMjQsIDI5NywgMzc0XTtcclxudmFyIGl0ZW1zU2l6ZUxlZnQ9WzEyLDI1LDQxLDU0LDcwXTtcclxuZnVuY3Rpb24gQmlsbFRhYmxlKCkge1xyXG59XHJcbkJpbGxUYWJsZS5wcm90b3R5cGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIHtpbnR9IGN1cnJlbnQgWzAsNF1cclxuICAgICAqL1xyXG4gICAgY3VycmVudDogMCxcclxuICAgIGN1cnJlbnRTaXplOiA1LFxyXG4gICAgYmlsbHM6IFtdLFxyXG4gICAgcGFnZTogMCxcclxuICAgIHBhZ2VJbmRleDogLTEsXHJcbiAgICBvbktleURvd246IG51bGwsXHJcbiAgICAvL2dldEJpbGw6IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgIHZhciBpbmRleCA9IHRoaXMucGFnZUluZGV4ICogcGFnZVNpemU7XHJcbiAgICAvLyAgICBpbmRleCArPSB0aGlzLmN1cnJlbnQ7XHJcbiAgICAvLyAgICBpZiAoaW5kZXggPCB0aGlzLmJpbGxzLmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgIHJldHVybiB0aGlzLmJpbGxzW2luZGV4XTtcclxuICAgIC8vICAgIH1cclxuICAgIC8vICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vfSxcclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoYmlsbHMpIHtcclxuICAgICAgICB2YXIgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpbGwtbGF5b3V0Jyk7XHJcbiAgICAgICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgICAgICAgbGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGxheW91dC5jbGFzc05hbWUgPSAnYmlsbC1sYXlvdXQnO1xyXG4gICAgICAgICAgICBsYXlvdXQuaWQgPSAnYmlsbC1sYXlvdXQnO1xyXG4gICAgICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYmlsbC1iZ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwiYmlsbC1zZWxlY3RcIiBjbGFzcz1cImJpbGwtc2VsZWN0XCI+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgICAgPGRpdiBjbGFzcz1cImJpbGwtb3V0bGluZVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImJpbGwtbGluZTBcIiBjbGFzcz1cImJpbGwtbGluZVwiPjxkaXYgY2xhc3M9XCJiaWxsLXRpbWVcIj4yMDE3LTA3LTA3IDEyOjA2OjAxPC9kaXY+PGRpdiBjbGFzcz1cImJpbGwtbmFtZVwiPui3s+iInuavr+awkei1hOW+iOmVv+mVvzEw5Liq5a2X5ZGiPC9kaXY+PGRpdiBjbGFzcz1cImJpbGwtYW1vdW50XCI+OTjlhYM8L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImJpbGwtbGluZTFcIiBjbGFzcz1cImJpbGwtbGluZVwiPjxkaXYgY2xhc3M9XCJiaWxsLXRpbWVcIj4yMDE3LTA3LTA3IDEyOjA2OjAxPC9kaXY+PGRpdiBjbGFzcz1cImJpbGwtbmFtZVwiPui3s+iInuavr+awkei1hOW+iOmVv+mVvzEw5Liq5a2X5ZGiPC9kaXY+PGRpdiBjbGFzcz1cImJpbGwtYW1vdW50XCI+OTjlhYM8L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImJpbGwtbGluZTJcIiBjbGFzcz1cImJpbGwtbGluZVwiPjxkaXYgY2xhc3M9XCJiaWxsLXRpbWVcIj4yMDE3LTA3LTA3IDEyOjA2OjAxPC9kaXY+PGRpdiBjbGFzcz1cImJpbGwtbmFtZVwiPui3s+iInuavr+awkei1hOW+iOmVv+mVvzEw5Liq5a2X5ZGiPC9kaXY+PGRpdiBjbGFzcz1cImJpbGwtYW1vdW50XCI+OTjlhYM8L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImJpbGwtbGluZTNcIiBjbGFzcz1cImJpbGwtbGluZVwiPjxkaXYgY2xhc3M9XCJiaWxsLXRpbWVcIj4yMDE3LTA3LTA3IDEyOjA2OjAxPC9kaXY+PGRpdiBjbGFzcz1cImJpbGwtbmFtZVwiPui3s+iInuavr+awkei1hOW+iOmVv+mVvzEw5Liq5a2X5ZGiPC9kaXY+PGRpdiBjbGFzcz1cImJpbGwtYW1vdW50XCI+OTjlhYM8L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImJpbGwtbGluZTRcIiBjbGFzcz1cImJpbGwtbGluZVwiPjxkaXYgY2xhc3M9XCJiaWxsLXRpbWVcIj4yMDE3LTA3LTA3IDEyOjA2OjAxPC9kaXY+PGRpdiBjbGFzcz1cImJpbGwtbmFtZVwiPui3s+iInuavr+awkei1hOW+iOmVv+mVvzEw5Liq5a2X5ZGiPC9kaXY+PGRpdiBjbGFzcz1cImJpbGwtYW1vdW50XCI+OTjlhYM8L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImJpbGwtbGluZTVcIiBjbGFzcz1cImJpbGwtbGluZVwiPjw8PCDnrKwx6aG1L+WFsTHpobUgPj4+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsYXlvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxheW91dCA9IGxheW91dDtcclxuXHJcbiAgICAgICAgdmFyIGJnID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJy5iaWxsLWJnJyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGJnLnF1ZXJ5U2VsZWN0b3IoJyNiaWxsLXNlbGVjdCcpO1xyXG5cclxuICAgICAgICB0aGlzLnRhYmxlID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlU2l6ZTsgKytpKSB7XHJcbiAgICAgICAgICAgIHZhciB0ciA9IGJnLnF1ZXJ5U2VsZWN0b3IoJyNiaWxsLWxpbmUnICsgaSk7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGUucHVzaCh0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGl0bGVQYWdlID0gYmcucXVlcnlTZWxlY3RvcignI2JpbGwtbGluZTUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5iaWxscyA9IGJpbGxzO1xyXG4gICAgICAgIHRoaXMuc2hvd1BhZ2UoMCk7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1BhZ2U6IGZ1bmN0aW9uIChwYWdlSW5kZXgpIHtcclxuICAgICAgICB2YXIgY250ID0gdGhpcy5iaWxscy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIHBhZ2UgPSBwYXJzZUludChjbnQgLyBwYWdlU2l6ZSk7XHJcbiAgICAgICAgaWYgKGNudCA+IHBhZ2UgKiBwYWdlU2l6ZSkge1xyXG4gICAgICAgICAgICBwYWdlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwYWdlSW5kZXggPj0gcGFnZSkge1xyXG4gICAgICAgICAgICBwYWdlSW5kZXggPSBwYWdlIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgICB0aGlzLnBhZ2VJbmRleCA9IHBhZ2VJbmRleDtcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZVBhZ2UuaW5uZXJIVE1MID0gJ+esrCcgKyAocGFnZUluZGV4ICsgMSkgKyAn6aG1L+WFsScgKyBwYWdlICsgJ+mhtSc7XHJcbiAgICAgICAgLy8vL+WIm+W7uuWchueCuVxyXG4gICAgICAgIC8vZm9yKHZhciBpPTE7aTw9cGFnZTtpKyspe1xyXG4gICAgICAgIC8vICAgIHRoaXMudGl0bGVQYWdlLmlubmVySFRNTD0nPGRpdiBjbGFzcz1cImJpbGwtY2lyY2xlXCIgaWQ9XCJiaWxsLWNpcmNsZScraSsnXCI+PC9kaXY+JztcclxuICAgICAgICAvL31cclxuXHJcblxyXG4gICAgICAgIHZhciBjdXQwID0gcGFnZVNpemUgKiBwYWdlSW5kZXg7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2l6ZSA9IChjbnQgLSBjdXQwKSA+PSBwYWdlU2l6ZSA/IHBhZ2VTaXplIDogY250IC0gY3V0MDtcclxuICAgICAgICB2YXIgY3V0MSA9IHRoaXMuY3VycmVudFNpemUgKyBjdXQwO1xyXG4gICAgICAgIHZhciBjdXRJbmZvcyA9IHRoaXMuYmlsbHMuc2xpY2UoY3V0MCwgY3V0MSk7XHJcbiAgICAgICAgdGhpcy5zaG93SW5mbyhjdXRJbmZvcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQoMCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0luZm86IGZ1bmN0aW9uIChpbmZvcykge1xyXG4gICAgICAgIHZhciBjbnQgPSBpbmZvcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy50YWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHZhciB0ZHMgPSByb3cucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSBjbnQpIHtcclxuICAgICAgICAgICAgICAgIHRkc1swXS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIHRkc1sxXS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIHRkc1syXS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmZvID0gaW5mb3NbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgLy9zZXRUaW1lb3V0KGZ1bmN0aW9uICh0ZHMsIHNvbmcpIHtcclxuICAgICAgICAgICAgICAgIHRkc1swXS5pbm5lckhUTUwgPSBpbmZvLmNyZWF0ZWRfYXQ7XHJcbiAgICAgICAgICAgICAgICB0ZHNbMV0uaW5uZXJIVE1MID0gaW5mby5zdWJqZWN0O1xyXG4gICAgICAgICAgICAgICAgdGRzWzJdLmlubmVySFRNTCA9IHBhcnNlSW50KGluZm8udG90YWxBbW91bnQgLyAxMDApICsgJ+WFgyc7XHJcbiAgICAgICAgICAgICAgICAvL30sIDEwMCAqIGluZGV4LCB0ZHMsIHNvbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2hvdzogZnVuY3Rpb24gKGN1cnJlbnQsIG9uS2V5RG93bikge1xyXG4gICAgICAgIHRoaXMubGF5b3V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQoY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5vbktleURvd24gPSBvbktleURvd247XHJcblxyXG4gICAgICAgIHZhciBvd25lciA9IHRoaXM7XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgb3duZXIuaGFuZGxlS2V5KGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5sYXlvdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9LFxyXG4gICAgc2V0U2VsZWN0ZWQ6IGZ1bmN0aW9uIChjdXJyZW50KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkLnN0eWxlLnRvcCA9IGl0ZW1TaXplW2N1cnJlbnRdICsgJ3B4JztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkLnN0eWxlLmxlZnQgPSBpdGVtc1NpemVMZWZ0W2N1cnJlbnRdICsgJ3B4JztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUtleTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG93bmVyLnBhZ2VJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5wYWdlSW5kZXgtLTtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5zaG93UGFnZShvd25lci5wYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5kb3duOlxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLmN1cnJlbnQgPCBvd25lci5jdXJyZW50U2l6ZSAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG93bmVyLnBhZ2VJbmRleCA8IG93bmVyLnBhZ2UgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIucGFnZUluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvd1BhZ2Uob3duZXIucGFnZUluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5wYWdlSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIucGFnZUluZGV4LS07XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvd1BhZ2Uob3duZXIucGFnZUluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIucGFnZUluZGV4IDwgb3duZXIucGFnZSAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5wYWdlSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5zaG93UGFnZShvd25lci5wYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mKG93bmVyLm9uS2V5RG93bikgPT09ICdmdW5jdGlvbicpIG93bmVyLm9uS2V5RG93bihjdXJLZXkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gb25CaWxsKGNvZGUsIGJpeikge1xyXG4gICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgIGlmIChiaXogJiYgYml6Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYmlsbHMgPSBiaXo7XHJcbiAgICAgICAgICAgIGJpbGxUYWJsZS5zdGFydChiaWxscyk7XHJcbiAgICAgICAgICAgIGJpbGxUYWJsZS5zaG93KGJpbGxUYWJsZS5jdXJyZW50LCBvblRhYmxlS2V5KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgIHNob3BCaWxsLnNob3coc2hvcEJpbGwuY3VycmVudCwgc2hvcEJpbGwub25LZXlEb3duLCBzaG9wQmlsbC50ZGVVc2VyKTtcclxuICAgICAgICAgICAgfSwgMCwgJ+aPkOekuicsICfmsqHmnInmib7liLDorqLljZXorrDlvZXjgIInLCAn56Gu5a6aJywgJ+i/lOWbnicpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd0RpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YmNsaSA9IHNob3BCaWxsLnRkZVVzZXIuc3RiY2xpO1xyXG4gICAgICAgICAgICAgICAgc3RiY2xpLmJpbGwob25CaWxsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3BCaWxsLnNob3coc2hvcEJpbGwuY3VycmVudCwgc2hvcEJpbGwub25LZXlEb3duLCBzaG9wQmlsbC50ZGVVc2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAsICfmj5DnpLonLCAn572R57uc5byC5bi477yM5rKh5pyJ5om+5Yiw6K6i5Y2V6K6w5b2V44CCJywgJ+mHjeivlScsICflj5bmtognKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25UYWJsZUtleShrZXkpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6XHJcbiAgICAgICAgICAgIGJpbGxUYWJsZS5oaWRlKCk7XHJcbiAgICAgICAgICAgIHNob3BCaWxsLnNob3coc2hvcEJpbGwuY3VycmVudCwgc2hvcEJpbGwub25LZXlEb3duLCBzaG9wQmlsbC50ZGVVc2VyKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBzaG9wQmlsbCA9IG5ldyBTaG9wQmlsbCgpO1xyXG52YXIgYmlsbFRhYmxlID0gbmV3IEJpbGxUYWJsZSgpO1xyXG52YXIgYmlsbHM7XHJcblxyXG5leHBvcnQge3Nob3BCaWxsfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvU2hvcEJpbGwuanMiLCJpbXBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc30gZnJvbSBcIi4vdG9vZG8vX2tleWNvZGVzXCI7XHJcblxyXG5cclxudmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG52YXIgcHJlQ29kZXMgPSBnZXRDb2RlcygpO1xyXG5cclxudmFyIGl0ZW1TaXplID0gW1xyXG4gICAgWzM4NSwgMzc4XSxcclxuICAgIFszODUsIDM3OF0sXHJcbiAgICBbMzg1LCAzNzhdLFxyXG4gICAgWzM4NSwgMzc4XVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gU2hvcFBhZ2UoKSB7XHJcbiAgICB0aGlzLmxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG9wLXBhZ2UnKTtcclxuICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmxheW91dC5xdWVyeVNlbGVjdG9yKCcjc2hvcC1pdGVtJyArIGkpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChub2RlKTtcclxuICAgICAgICBpZiAoIW5vZGUpIGNvbnRpbnVlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKGksIG5vZGUpIHtcclxuICAgICAgICAgICAgdmFyIGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSAnaW1nL3Nob3Avc2hvcCcgKyBpICsgJy5wbmcnO1xyXG4gICAgICAgIH0sIDEwMCAqIGksIGksIG5vZGUpO1xyXG4gICAgfVxyXG59XHJcblNob3BQYWdlLnByb3RvdHlwZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICoge2ludH0gY3VycmVudCBbMCwzXVxyXG4gICAgICovXHJcbiAgICBjdXJyZW50OiAzLFxyXG4gICAgb25LZXlEb3duOiBudWxsLFxyXG5cclxuICAgIHNob3c6IGZ1bmN0aW9uIChjdXJyZW50LCBvbktleURvd24pIHtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gb25LZXlEb3duO1xyXG5cclxuICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG93bmVyLmhhbmRsZUtleShlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuX3NldEZvY3VzKHRoaXMuY3VycmVudCwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIF9zZXRGb2N1czogZnVuY3Rpb24gKGN1cnJlbnQsIGZvY3VzKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLml0ZW1zW2N1cnJlbnRdO1xyXG4gICAgICAgIGlmICghbm9kZSkgcmV0dXJuO1xyXG4gICAgICAgIG5vZGUuc3R5bGUuekluZGV4ID0gZm9jdXMgPyAxIDogMDtcclxuXHJcbiAgICAgICAgdmFyIHNpemUgPSBpdGVtU2l6ZVtjdXJyZW50XTtcclxuICAgICAgICB2YXIgZGl2ID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcclxuICAgICAgICB2YXIgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICBpZiAoZm9jdXMpIHtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUud2lkdGggPSBzaXplWzBdICogMS4wNSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplWzFdICogMS4wNSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5sZWZ0ID0gLXNpemVbMF0gKiAwLjAyNSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS50b3AgPSAtc2l6ZVsxXSAqIDAuMDI1ICsgJ3B4JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gc2l6ZVswXSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplWzFdICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSAwICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9IDAgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRGb2N1cyhpLCBjdXJyZW50ID09IGkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoYW5kbGVLZXk6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcztcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgdmFyIGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA9PSAxKSBvd25lci5jdXJyZW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA9PSAxKSBvd25lci5jdXJyZW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZihvd25lci5vbktleURvd24pID09PSAnZnVuY3Rpb24nKSBvd25lci5vbktleURvd24oY3VyS2V5KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB7U2hvcFBhZ2V9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9TaG9wUGFnZS5qcyIsImltcG9ydCB7c3RiTnVsbH0gZnJvbSAnLi4vdG9vZG8vX3N0Ym51bGwnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFBhZ2VBcmdzKHBhZ2UpIHtcclxuICAgIHRoaXMucHJlZml4ID0gcGFnZSA/IHBhZ2UgKyAnLicgOiAnJztcclxufVxyXG5QYWdlQXJncy5wcm90b3R5cGUgPSB7XHJcbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICByZXR1cm4gc3RiTnVsbC5nZXRWYWx1ZSh0aGlzLnByZWZpeCArIGspO1xyXG4gICAgfSxcclxuICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgICAgIHN0Yk51bGwuc2V0VmFsdWUodGhpcy5wcmVmaXggKyBrLCB2KTtcclxuICAgIH0sXHJcbiAgICBnZXRSZXR1cm5Vcmw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgncmV0dXJuVXJsJyk7XHJcbiAgICB9LFxyXG4gICAgc2V0UmV0dXJuVXJsOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgncmV0dXJuVXJsJywgdXJsKTtcclxuICAgIH0sXHJcbiAgICBnZXRSZWRpcmVjdFVybDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCdyZWRpcmVjdFVybCcpO1xyXG4gICAgfSxcclxuICAgIHNldFJlZGlyZWN0VXJsOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgncmVkaXJlY3RVcmwnLCB1cmwpO1xyXG4gICAgfSxcclxuICAgIHNldENhbGxGbGFnOmZ1bmN0aW9uIChudW0pIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKFwiY2FsbEZsYWdcIixudW0pO1xyXG4gICAgfSxcclxuICAgIGdldENhbGxGbGFnOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcImNhbGxGbGFnXCIpO1xyXG4gICAgfSxcclxuICAgIHNldFN1Y2Nlc3NDb2RlOmZ1bmN0aW9uIChzdWNjZXNzQ29kZSkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJzdWNjZXNzQ29kZVwiLHN1Y2Nlc3NDb2RlKTtcclxuICAgIH0sXHJcbiAgICBnZXRTdWNjZXNzQ29kZTpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJzdWNjZXNzQ29kZVwiKTtcclxuICAgIH0sXHJcbiAgICBzZXRQcml6ZUlEOmZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJQcml6ZUlEXCIsaWQpO1xyXG4gICAgfSxcclxuICAgIGdldFByaXplSUQ6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiUHJpemVJRFwiKTtcclxuICAgIH0sXHJcbiAgICBnZXRUdXJudGFibGVVcmw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgnVHVybnRhYmxlVXJsJyk7XHJcbiAgICB9LFxyXG4gICAgc2V0VHVybnRhYmxlVXJsOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgnVHVybnRhYmxlVXJsJywgdXJsKTtcclxuICAgIH0sXHJcbn07XHJcblxyXG5cclxudmFyIHNob3BBcmdzID0gbmV3IFBhZ2VBcmdzKCdzaG9wJyk7XHJcbnZhciByZWNoYXJnZUFyZ3MgPSBuZXcgUGFnZUFyZ3MoJ3JlY2hhcmdlJyk7XHJcbnZhciBjYWxsYmFja0FyZ3MgPSBuZXcgUGFnZUFyZ3MoJ2NhbGxiYWNrJyk7XHJcbnZhciB0dXJuVGFibGVBcmdzID0gbmV3IFBhZ2VBcmdzKCd0dXJudGFibGUnKTtcclxuXHJcbnZhciBhcHBBcmdzID0gbmV3IFBhZ2VBcmdzKCdhcHAnKTtcclxuYXBwQXJncy5vbkZpcnN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBmaXJzdFVybCA9IGFwcEFyZ3MuZ2V0UmVkaXJlY3RVcmwoKTtcclxuICAgIGlmIChmaXJzdFVybCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZmlyc3RVcmw7XHJcbiAgICB9XHJcbn07XHJcblxyXG5hcHBBcmdzLm9uSG9tZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaG9tZVVybCA9IGFwcEFyZ3MuZ2V0UmV0dXJuVXJsKCk7XHJcbiAgICBpZiAoaG9tZVVybCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaG9tZVVybDtcclxuICAgIH1cclxufTtcclxuXHJcbmFwcEFyZ3Mub25UdXJudGFibGVQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIFR1cm50YWJsZVVybCA9IGFwcEFyZ3MuZ2V0VHVybnRhYmxlVXJsKCk7XHJcbiAgICBpZiAoVHVybnRhYmxlVXJsKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBUdXJudGFibGVVcmw7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB7c2hvcEFyZ3MscmVjaGFyZ2VBcmdzLGNhbGxiYWNrQXJncyxhcHBBcmdzLHR1cm5UYWJsZUFyZ3N9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUGFnZUFyZ3MuanMiLCJmdW5jdGlvbiBnZXRKU09OKHVybCwgY2IpIHtcclxuICAgIGxldCByZXE7XHJcbiAgICByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3Q7XHJcbiAgICByZXEub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zQXJyID0gZXZhbCgnWycgKyByZXEucmVzcG9uc2VUZXh0ICsgJ10nKTtcclxuICAgICAgICAgICAgY2IoaXRlbXNBcnJbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXEuc2VuZChudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmFzZVVybCgpIHtcclxuICAgIHJldHVybiBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy90ZGVudGVyJztcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsYXlCYWNrZ3JvdW5kKG5vZGUsIGltZywgZGVsYXkpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgaW1nICsgJyknXHJcbiAgICB9LCBkZWxheSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0SlNPTixiYXNlVXJsLGRlbGF5QmFja2dyb3VuZH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9hYmMuanMiLCJpbXBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc30gZnJvbSBcIi4uL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge2ludH0gY2FsbGJhY2suY29kZSDmjInplK4gMC7ovpPlhaXlrozmiJAgMS7lj5bmtohcclxuICogQHBhcmFtIHtzdHJpbmd9IGNhbGxiYWNrLm1zZyDovpPlhaXnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHRpdGxlIHtpbnR9IOagh+mimOWbvueJhyAwLuiuvue9rumTnOmUgSAxLumTnOmUgemqjOivgVxyXG4gKiBAcGFyYW0gbGFiZWwge2ludH0g5o+Q56S66K+tIDAu6L6T5YWl5a+G56CBIDEu5YaN5qyh6L6T5YWlXHJcbiAqL1xyXG5mdW5jdGlvbiBzaG93Q2hpbGRMb2NrKGNhbGxiYWNrLCB0aXRsZSwgbGFiZWwpIHtcclxuICAgIHRpdGxlID0gYXJndW1lbnRzWzFdID8gYXJndW1lbnRzWzFdIDogMDtcclxuICAgIGxhYmVsID0gYXJndW1lbnRzWzJdID8gYXJndW1lbnRzWzJdIDogMDtcclxuICAgIHZhciB0aXBzID0gYXJndW1lbnRzWzNdID8gYXJndW1lbnRzWzNdIDogJ+ivt+i+k+WFpTbkvY3mlbDlrZflr4bnoIHvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInO1xyXG5cclxuICAgIHZhciBsYXlvdXRJZCA9ICdsb2NrLWxheW91dC0wMDMnO1xyXG4gICAgdmFyIGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheW91dElkKTtcclxuICAgIGlmICghbGF5b3V0KSB7XHJcbiAgICAgICAgbGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGF5b3V0LmNsYXNzTmFtZSA9ICdsb2NrLWxheW91dCc7XHJcbiAgICAgICAgbGF5b3V0LmlkID0gbGF5b3V0SWQ7XHJcbiAgICAgICAgbGF5b3V0LmlubmVySFRNTCA9ICcnICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsb2NrLWJnXCI+JyArXHJcbiAgICAgICAgICAgICcgIDxkaXYgaWQ9XCJsb2NrLXRpdGxlXCIgY2xhc3M9XCJsb2NrLXRpdGxlLTBcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBjbGFzcz1cImxvY2staW5wdXRcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1sYWJlbFwiIGNsYXNzPVwibG9jay1sYWJlbC0wXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stdGV4dFwiIGNsYXNzPVwibG9jay10ZXh0XCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICA8ZGl2IGlkPVwibG9jay10aXBzXCIgY2xhc3M9XCJsb2NrLXRpcHNcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxvY2sta2V5Ym9hcmRcIj4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWJnXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTFcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiAgICAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjxzcGFuPjE8L3NwYW4+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTJcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+Mjwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tM1wiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+Mzwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tNFwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+NDwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tNVwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+NTwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tNlwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+Njwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tN1wiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+Nzwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tOFwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+ODwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tOVwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+OTwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tMTBcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiAgICAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS0wXCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjxzcGFuPjA8L3NwYW4+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTExXCIgY2xhc3M9XCJsb2NrLW51bVwiPiAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsYXlvdXQpO1xyXG4gICAgfVxyXG4gICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgdmFyIGxvY2tUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NrLXRleHRcIik7XHJcbiAgICB2YXIgbG9ja1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NrLXRpdGxlXCIpO1xyXG4gICAgdmFyIGxvY2tMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NrLWxhYmVsJyk7XHJcbiAgICB2YXIgbG9ja1RpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jay10aXBzJyk7XHJcbiAgICBsb2NrVGV4dC5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgbG9ja1RpdGxlLmNsYXNzTmFtZSA9IFwibG9jay10aXRsZS1cIiArIHRpdGxlO1xyXG4gICAgbG9ja0xhYmVsLmNsYXNzTmFtZSA9ICdsb2NrLWxhYmVsLScgKyBsYWJlbDtcclxuICAgIGxvY2tUaXBzLmlubmVySFRNTCA9IHRpcHM7XHJcblxyXG4gICAgdmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG4gICAgdmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuICAgIHZhciBpdGVtTm9kZXMgPSBbXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtMSwgaWQ6IFwibG9jay1udW0tMVwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW0yLCBpZDogXCJsb2NrLW51bS0yXCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTMsIGlkOiBcImxvY2stbnVtLTNcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtNCwgaWQ6IFwibG9jay1udW0tNFwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW01LCBpZDogXCJsb2NrLW51bS01XCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTYsIGlkOiBcImxvY2stbnVtLTZcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtNywgaWQ6IFwibG9jay1udW0tN1wifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW04LCBpZDogXCJsb2NrLW51bS04XCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTksIGlkOiBcImxvY2stbnVtLTlcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUuYmFjaywgaWQ6IFwibG9jay1udW0tMTBcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtMCwgaWQ6IFwibG9jay1udW0tMFwifSxcclxuICAgICAgICB7a2V5Q29kZTogbnVsbCwgaWQ6IFwibG9jay1udW0tMTFcIn1cclxuICAgIF07XHJcblxyXG4gICAgdmFyIGlucHV0VGV4dCA9ICcnO1xyXG4gICAgdmFyIGN1cklkeCA9IDA7XHJcblxyXG4gICAgdmFyIHNldFNlbGVjdGVkID0gZnVuY3Rpb24gKGN1cklkeCkge1xyXG4gICAgICAgIGl0ZW1Ob2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtTm9kZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtTm9kZS5pZCk7XHJcbiAgICAgICAgICAgLy8gbm9kZS5jbGFzc05hbWUgPSAoaW5kZXggPT0gY3VySWR4ID8gJ2xvY2stbnVtLWZvY3VzJyA6ICdsb2NrLW51bScpO1xyXG4gICAgICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLnN0eWxlLmRpc3BsYXk9aW5kZXggPT0gY3VySWR4ID8gXCJibG9ja1wiOlwibm9uZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHZhciBzdWJtaXQgPSBmdW5jdGlvbiAoY29kZSkge1xyXG4gICAgICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgLy9kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxheW91dCk7XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcclxuICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soY29kZSwgaW5wdXRUZXh0KTtcclxuICAgIH07XHJcbiAgICB2YXIgaW52aXNpYmxlID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICB2YXIgc3RhciA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7ICsraSkgc3RhciArPSAnKic7XHJcbiAgICAgICAgcmV0dXJuIHN0YXI7XHJcbiAgICB9O1xyXG4gICAgdmFyIGNsaWNrTnVtID0gZnVuY3Rpb24gKG51bSkge1xyXG4gICAgICAgIGlucHV0VGV4dCArPSBTdHJpbmcobnVtKTtcclxuICAgICAgICBsb2NrVGV4dC5pbm5lclRleHQgPSBpbnZpc2libGUoaW5wdXRUZXh0KTtcclxuICAgIH07XHJcbiAgICB2YXIgYmFja3NwYWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlucHV0VGV4dCA9IGlucHV0VGV4dC5zdWJzdHJpbmcoMCwgaW5wdXRUZXh0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIGxvY2tUZXh0LmlubmVyVGV4dCA9IGludmlzaWJsZShpbnB1dFRleHQpO1xyXG4gICAgfTtcclxuICAgIHZhciBoYW5kbGVPayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3VycmVudCA9IGl0ZW1Ob2Rlc1tjdXJJZHhdO1xyXG4gICAgICAgIGlmIChjdXJyZW50LmtleUNvZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBiYWNrc3BhY2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoYW5kbGVLZXkoY3VycmVudC5rZXlDb2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIGhhbmRsZUtleSA9IGZ1bmN0aW9uIChjdXJLZXkpIHtcclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIGlmICgoY3VySWR4ICUgMykgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cklkeC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIGlmICgoY3VySWR4ICUgMykgIT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cklkeCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS51cDpcclxuICAgICAgICAgICAgICAgIGlmIChjdXJJZHggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VySWR4IC09IDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmRvd246XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VySWR4IDwgOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cklkeCArPSAzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazpcclxuICAgICAgICAgICAgICAgIGhhbmRsZU9rKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQoMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTE6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW0yOlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMzpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTQ6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW01OlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtNjpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTc6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW04OlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtOTpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6XHJcbiAgICAgICAgICAgICAgICB2YXIgbnVtID0gY3VyS2V5IC0ga2V5Q29kZS5udW0wO1xyXG4gICAgICAgICAgICAgICAgY2xpY2tOdW0obnVtKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRTZWxlY3RlZCgwKTtcclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIHZhciBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBoYW5kbGVLZXkoY3VyS2V5KTtcclxuICAgICAgICBzZXRTZWxlY3RlZChjdXJJZHgpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXRUZXh0Lmxlbmd0aCA9PSA2KSB7XHJcbiAgICAgICAgICAgIHN1Ym1pdCgwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQge3Nob3dDaGlsZExvY2t9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvY2hpbGRMb2NrLmpzIiwiaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuLi90b29kby9fa2V5Y29kZXNcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBDaGlsZE1lbnUoKSB7XHJcbn1cclxuQ2hpbGRNZW51LnByb3RvdHlwZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHtmdW5jdGlvbn1cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjay5idG4ge2ludH0gMC7mjInpkq4xIDEu5oyJ6ZKuMiAtMS7lj5bmtojmk43kvZxcclxuICAgICAqIEBwYXJhbSBjbnQge2ludH0gWzEsMl0g5oyJ6ZKu5pWw6YePXHJcbiAgICAgKiBAcGFyYW0gYnRuIHtpbnR9IFswLDFdIOm7mOiupOmAieS4rVxyXG4gICAgICogQHBhcmFtIHRleHQge3N0cmluZ30g5o+Q56S65paH5pysXHJcbiAgICAgKi9cclxuICAgIHNob3c6IGZ1bmN0aW9uIChjYWxsYmFjaywgY250LCBidG4sIHRleHQpIHtcclxuICAgICAgICB2YXIgbGF5b3V0SWQgPSAnbG9jay1tZW51LWxheW91dCc7XHJcbiAgICAgICAgdmFyIGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheW91dElkKTtcclxuICAgICAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbGF5b3V0LmNsYXNzTmFtZSA9ICdsb2NrLWxheW91dCc7XHJcbiAgICAgICAgICAgIGxheW91dC5pZCA9IGxheW91dElkO1xyXG4gICAgICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9jay1tZW51LWJnXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLXRpdGxlXCIgY2xhc3M9XCJsb2NrLXRpdGxlLTBcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stYnRuMFwiIGNsYXNzPVwibG9jay1idG5cIj48c3Bhbj7lvIDlkK/nq6XplIE8L3NwYW4+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLWJ0bjFcIiBjbGFzcz1cImxvY2stYnRuXCI+PHNwYW4+5YWz6Zet56ul6ZSBPC9zcGFuPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1idG4yXCIgY2xhc3M9XCJsb2NrLWJ0blwiPjxzcGFuPuabtOaUueWvhueggTwvc3Bhbj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImxvY2stdGlwc1wiPumAieaLqemcgOimgeeahOaTjeS9nOaMieehruWumumUrui/m+ihjOS4i+S4gOatpe+8jOaMiei/lOWbnumUruWFs+mXreW8ueeql+OAgjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICB2YXIgYmcgPSBsYXlvdXQucXVlcnlTZWxlY3RvcignLmxvY2stbWVudS1iZycpO1xyXG4gICAgICAgIHZhciBidG5Ob2RlcyA9IGJnLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2NrLWJ0bicpO1xyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8YnRuTm9kZXMubGVuZ3RoOysraSl7XHJcbiAgICAgICAgICAgIHZhciBidG5Ob2RlID0gYnRuTm9kZXNbaV07XHJcbiAgICAgICAgICAgIGJ0bk5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBidG5Ob2RlMCwgYnRuTm9kZTE7XHJcbiAgICAgICAgaWYgKGNudCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGJ0bk5vZGUwID0gYnRuTm9kZXNbMF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY250ID0gMjtcclxuICAgICAgICAgICAgYnRuTm9kZTAgPSBidG5Ob2Rlc1sxXTtcclxuICAgICAgICAgICAgYnRuTm9kZTEgPSBidG5Ob2Rlc1syXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ0bk5vZGUwKSBidG5Ob2RlMC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBpZiAoYnRuTm9kZTEpIGJ0bk5vZGUxLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICB2YXIgdGlwTm9kZSA9IGJnLnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLXRpcHMnKTtcclxuICAgICAgICB0aXBOb2RlLmlubmVySFRNTCA9IHRleHQ7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZvY3VzQnRuKGJ0bklkeCkge1xyXG4gICAgICAgICAgICB2YXIgZm9jdXNOb2RlO1xyXG4gICAgICAgICAgICBpZiAoY250ID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGJ0bk5vZGUwLmNsYXNzTmFtZT1cImxvY2stYnRuIGxvY2stYnRuLWZvY3VzXCI7XHJcbiAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUgPSBidG5Ob2RlMC5xdWVyeVNlbGVjdG9yKCcubG9jay1idG4tZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChidG5JZHggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bk5vZGUwLmNsYXNzTmFtZT1cImxvY2stYnRuIGxvY2stYnRuLWZvY3VzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuTm9kZTEuY2xhc3NOYW1lPVwibG9jay1idG5cIjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUgPSBidG5Ob2RlMC5xdWVyeVNlbGVjdG9yKCcubG9jay1idG4tZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9jdXNOb2RlID0gYnRuTm9kZTEucXVlcnlTZWxlY3RvcignLmxvY2stYnRuLWZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9jdXNOb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bk5vZGUwLmNsYXNzTmFtZT1cImxvY2stYnRuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuTm9kZTEuY2xhc3NOYW1lPVwibG9jay1idG4gbG9jay1idG4tZm9jdXNcIjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUgPSBidG5Ob2RlMC5xdWVyeVNlbGVjdG9yKCcubG9jay1idG4tZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUgPSBidG5Ob2RlMS5xdWVyeVNlbGVjdG9yKCcubG9jay1idG4tZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnRuID0gYnRuSWR4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJ0biA8IDAgfHwgYnRuID4gMSkgYnRuID0gMDtcclxuICAgICAgICBmb2N1c0J0bihidG4pO1xyXG5cclxuICAgICAgICBsZXQgc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG4gICAgICAgIHZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzQnRuKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmRvd246XHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNCdG4oY250IC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGtleUNvZGUub2s6ICAgICAvL+ehruWumlxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW0wOiAgICAgIC8v5Y+W5raIXHJcbiAgICAgICAgICAgICAgICAgICAgYnRuID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soYnRuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjaGlsZE1lbnUgPSBuZXcgQ2hpbGRNZW51KCk7XHJcbmV4cG9ydCB7Y2hpbGRNZW51fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2NoaWxkTWVudS5qcyIsImltcG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfSBmcm9tIFwiLi4vdG9vZG8vX2tleWNvZGVzXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICogQHBhcmFtIHtpbnR9IGNhbGxiYWNrLmJ0biDmjInplK4gMC7noa7lrpogMS7lj5bmtohcclxuICogQHBhcmFtIHtudW1iZXJ9IGJ0biDpu5jorqTnhKbngrkgMC7noa7lrpogMS7lj5bmtohcclxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIOeql+WPo+agh+mimFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCDnqpflj6PlhoXlrrlcclxuICogQHBhcmFtIHtzdHJpbmd9IGJ0bjAg5oyJ6ZKuMVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYnRuMSDmjInpkq4yXHJcbiAqL1xyXG5mdW5jdGlvbiBzaG93RGlhbG9nKC8qY2FsbGJhY2ssIGJ0biwgdGl0bGUsIHRleHQsIGJ0bjAsIGJ0bjEqLykge1xyXG4gICAgY29uc3QgbGF5b3V0SWQgPSAnZGlhbG9nLWxheW91dC0wMDEnO1xyXG4gICAgbGV0IGNhbGxiYWNrLCBidG4sIHRpdGxlLCB0ZXh0LCBidG4wLCBidG4xO1xyXG4gICAgY2FsbGJhY2sgPSBhcmd1bWVudHNbMF0gPyBhcmd1bWVudHNbMF0gOiBudWxsO1xyXG4gICAgYnRuID0gYXJndW1lbnRzWzFdID8gYXJndW1lbnRzWzFdIDogMDtcclxuICAgIHRpdGxlID0gYXJndW1lbnRzWzJdID8gYXJndW1lbnRzWzJdIDogJ+aPkOekuic7XHJcbiAgICB0ZXh0ID0gYXJndW1lbnRzWzNdID8gYXJndW1lbnRzWzNdIDogJyc7XHJcbiAgICBidG4wID0gYXJndW1lbnRzWzRdID8gYXJndW1lbnRzWzRdIDogJ+ehruWumic7XHJcbiAgICBidG4xID0gYXJndW1lbnRzWzVdID8gYXJndW1lbnRzWzVdIDogJ+i/lOWbnic7XHJcbiAgICB2YXIgYWxpZ24gPSBhcmd1bWVudHNbNl0gPyBhcmd1bWVudHNbNl0gOiAnY2VudGVyJztcclxuXHJcbiAgICBsZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxheW91dC5jbGFzc05hbWUgPSAnZGlhbG9nLWxheW91dCc7XHJcbiAgICAgICAgbGF5b3V0LmlkID0gbGF5b3V0SWQ7XHJcbiAgICAgICAgbGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZGlhbG9nLWJnXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImRpYWxvZy10aXRsZVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctdGV4dFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJkaWFsb2ctYnRuMFwiIHN0eWxlPVwibGVmdDogMTIlO3RvcDogNzMlXCIgY2xhc3M9XCJkaWFsb2ctYnRuIGRpYWxvZy1idG4wXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImRpYWxvZy1idG4xXCIgc3R5bGU9XCJsZWZ0OiA1NyU7dG9wOiA3MyVcIiBjbGFzcz1cImRpYWxvZy1idG4gZGlhbG9nLWJ0bjFcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsYXlvdXQpO1xyXG4gICAgfVxyXG4gICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgdmFyIGJhY2tncm91bmQgPSBsYXlvdXQucXVlcnlTZWxlY3RvcignLmRpYWxvZy1iZycpO1xyXG4gICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIHZhciBub2RlVGl0bGUgPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctdGl0bGUnKTtcclxuICAgIG5vZGVUaXRsZS5pbm5lckhUTUwgPSB0aXRsZTtcclxuICAgIHZhciBub2RlVGV4dCA9IGJhY2tncm91bmQucXVlcnlTZWxlY3RvcignLmRpYWxvZy10ZXh0Jyk7XHJcbiAgICBub2RlVGV4dC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgbm9kZVRleHQuc3R5bGUudGV4dEFsaWduID0gYWxpZ247XHJcblxyXG4gICAgdmFyIG5vZGVCdG4wID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9nLWJ0bjAnKTtcclxuICAgIG5vZGVCdG4wLmlubmVySFRNTCA9IGJ0bjAgKyAnPGRpdj48L2Rpdj4nO1xyXG4gICAgdmFyIG5vZGVCdG4xID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9nLWJ0bjEnKTtcclxuICAgIG5vZGVCdG4xLmlubmVySFRNTCA9IGJ0bjEgKyAnPGRpdj48L2Rpdj4nO1xyXG5cclxuICAgIHZhciBidG5fMDA2ID0gbm9kZUJ0bjAucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcclxuICAgIHZhciBidG5fMDA2bm9uZSA9IG5vZGVCdG4xLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBmb2N1c0J0biA9IGZ1bmN0aW9uIChidG5JZHgpIHtcclxuICAgICAgICBpZiAoYnRuSWR4ID09IDApIHtcclxuICAgICAgICAgICAgbm9kZUJ0bjAuY2xhc3NOYW1lID0gXCIgXCIgKyBcImRpYWxvZ0J0bl8xIGRpYWxvZy1CdG5fZm9jdXNcIjtcclxuICAgICAgICAgICAgbm9kZUJ0bjEuY2xhc3NOYW1lID0gXCIgXCIgKyBcImRpYWxvZ0J0bl8wXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChidG5JZHggPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgbm9kZUJ0bjAuY2xhc3NOYW1lID0gXCIgXCIgKyBcImRpYWxvZ0J0bl8wXCI7XHJcbiAgICAgICAgICAgIG5vZGVCdG4xLmNsYXNzTmFtZSA9IFwiIFwiICsgXCJkaWFsb2dCdG5fMSBkaWFsb2ctQnRuX2ZvY3VzXCI7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBidG4gPSBidG5JZHg7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChidG4gPCAwIHx8IGJ0biA+IDEpIGJ0biA9IDA7XHJcbiAgICBmb2N1c0J0bihidG4pO1xyXG5cclxuICAgIGxldCBzdWJtaXQgPSBmYWxzZTtcclxuICAgIHZhciBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxuICAgIHZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBmb2N1c0J0bigwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBmb2N1c0J0bigxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUub2s6ICAgICAvL+ehruWumlxyXG4gICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6ICAgICAgLy/lj5bmtohcclxuICAgICAgICAgICAgICAgIGJ0biA9IDE7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdWJtaXQpIHtcclxuICAgICAgICAgICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soYnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2hvd0RpYWxvZ31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9kaWFsb2cuanMiLCJpbXBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc30gZnJvbSBcIi4uL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dBZDE2KGNhbGxiYWNrLCBidG4pIHtcclxuICAgIGNvbnN0IGxheW91dElkID0gJ2JpZy1hZC0xNic7XHJcblxyXG4gICAgbGV0IGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheW91dElkKTtcclxuICAgIGlmICghbGF5b3V0KSB7XHJcbiAgICAgICAgbGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsYXlvdXQuY2xhc3NOYW1lID0gJ2JpZy1hZC0xNic7XHJcbiAgICAgICAgbGF5b3V0LmlkID0gbGF5b3V0SWQ7XHJcbiAgICAgICAgbGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiYmlnLWFkLTE2LWJ0bi0wXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiYmlnLWFkLTE2LWJ0bi0xXCI+PC9kaXY+JztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheW91dCk7XHJcbiAgICB9XHJcbiAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgYnRuMCA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcjYmlnLWFkLTE2LWJ0bi0wJyk7XHJcbiAgICB2YXIgYnRuMSA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcjYmlnLWFkLTE2LWJ0bi0xJyk7XHJcblxyXG4gICAgY29uc3QgZm9jdXNCdG4gPSBmdW5jdGlvbiAoYnRuSWR4KSB7XHJcbiAgICAgICAgaWYgKGJ0bklkeCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGJ0bjAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGJ0bjEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ0bklkeCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGJ0bjAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgYnRuMS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuID0gYnRuSWR4O1xyXG4gICAgfTtcclxuXHJcbiAgICBmb2N1c0J0bihidG4pO1xyXG5cclxuICAgIGxldCBzdWJtaXQgPSBmYWxzZTtcclxuICAgIHZhciBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxuICAgIHZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBmb2N1c0J0bigwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBmb2N1c0J0bigxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUub2s6ICAgICAvL+ehruWumlxyXG4gICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6ICAgICAgLy/lj5bmtohcclxuICAgICAgICAgICAgICAgIGJ0biA9IDE7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdWJtaXQpIHtcclxuICAgICAgICAgICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhidG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0FkMjkoY2FsbGJhY2ssIGJ0biwgYWQpIHtcclxuICAgIGNvbnN0IGxheW91dElkID0gJ2JpZy1hZC0yOSc7XHJcblxyXG4gICAgbGV0IGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheW91dElkKTtcclxuICAgIGlmICghbGF5b3V0KSB7XHJcbiAgICAgICAgbGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcclxuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJiaWctYWQtYnRuLTBcIiBjbGFzcz1cImJpZy1hZC1idG4tMC1mb2N1c1wiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImJpZy1hZC1idG4tMVwiIGNsYXNzPVwiYmlnLWFkLWJ0bi0xXCI+PC9kaXY+JztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheW91dCk7XHJcbiAgICB9XHJcbiAgICBsYXlvdXQuY2xhc3NOYW1lID0gJ2JpZy1hZC0nICsgYWQ7XHJcbiAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgYnRuMCA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcjYmlnLWFkLWJ0bi0wJyk7XHJcbiAgICB2YXIgYnRuMSA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcjYmlnLWFkLWJ0bi0xJyk7XHJcblxyXG4gICAgY29uc3QgZm9jdXNCdG4gPSBmdW5jdGlvbiAoYnRuSWR4KSB7XHJcbiAgICAgICAgaWYgKGJ0bklkeCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGJ0bjAuY2xhc3NOYW1lID0gJ2JpZy1hZC1idG4tMC1mb2N1cyc7XHJcbiAgICAgICAgICAgIGJ0bjEuY2xhc3NOYW1lID0gJ2JpZy1hZC1idG4tMSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChidG5JZHggPT0gMSkge1xyXG4gICAgICAgICAgICBidG4wLmNsYXNzTmFtZSA9ICdiaWctYWQtYnRuLTAnO1xyXG4gICAgICAgICAgICBidG4xLmNsYXNzTmFtZSA9ICdiaWctYWQtYnRuLTEtZm9jdXMnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidG4gPSBidG5JZHg7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvY3VzQnRuKGJ0bik7XHJcblxyXG4gICAgbGV0IHN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgdmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG4gICAgdmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIHZhciBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazogICAgIC8v56Gu5a6aXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMDogICAgICAvL+WPlua2iFxyXG4gICAgICAgICAgICAgICAgYnRuID0gMTtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1Ym1pdCkge1xyXG4gICAgICAgICAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKGJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge3Nob3dBZDE2LHNob3dBZDI5fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2RpYWxvZ0JpZ0FkLmpzIiwidmFyIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbnZhciBzaG93VGltZSA9IDEzMTg7XHJcbnZhciBsYXlvdXRJZCA9ICdsb2FkaW5nLWxheW91dC0wMDInO1xyXG5cclxuZnVuY3Rpb24gc2hvd0xvYWRpbmcoKSB7XHJcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgIHZhciB0aXRsZSA9IGFyZ3VtZW50c1swXSA/IGFyZ3VtZW50c1swXSA6ICfmj5DnpLonO1xyXG4gICAgdmFyIHRleHQgPSBhcmd1bWVudHNbMV0gPyBhcmd1bWVudHNbMV0gOiAn5q2j5Zyo5Yqg6L2977yM6K+356iN5YCZLi4uJztcclxuXHJcbiAgICBsZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxheW91dC5jbGFzc05hbWUgPSAnZGlhbG9nLWxheW91dCc7XHJcbiAgICAgICAgbGF5b3V0LmlkID0gbGF5b3V0SWQ7XHJcbiAgICAgICAgbGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZGlhbG9nLWJnXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImRpYWxvZy10aXRsZVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctdGV4dFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheW91dCk7XHJcbiAgICB9XHJcbiAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgbm9kZUJnID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctYmcnKTtcclxuICAgIG5vZGVCZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIHZhciBub2RlVGl0bGUgPSBub2RlQmcucXVlcnlTZWxlY3RvcignLmRpYWxvZy10aXRsZScpO1xyXG4gICAgbm9kZVRpdGxlLmlubmVySFRNTCA9IHRpdGxlO1xyXG4gICAgdmFyIG5vZGVUZXh0ID0gbm9kZUJnLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctdGV4dCcpO1xyXG4gICAgbm9kZVRleHQuaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlTG9hZGluZyhjYWxsYmFjaykge1xyXG4gICAgdmFyIGRlbGF5VGltZSA9IGFyZ3VtZW50c1sxXSA/IGFyZ3VtZW50c1sxXSA6IHNob3dUaW1lO1xyXG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIHRpbWUgPSAoZGVsYXlUaW1lICsgbG9hZFRpbWUpIC0gdGltZTtcclxuICAgIGlmICh0aW1lIDwgMCkgdGltZSA9IDA7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheW91dElkKTtcclxuICAgICAgICBpZiAobGF5b3V0KSB7XHJcbiAgICAgICAgICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBsZXQgYmFja2dyb3VuZCA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWJnJyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcclxuICAgIH0sIHRpbWUpO1xyXG59XHJcblxyXG5leHBvcnQge3Nob3dMb2FkaW5nLGhpZGVMb2FkaW5nfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2xvYWRpbmcuanMiLCJpbXBvcnQge3JldGFpbCxyZXRhaWxJZH0gZnJvbSAnLi90b29kby9fcmV0YWlsJztcclxuaW1wb3J0IHtTdGJDbGllbnR9IGZyb20gXCIuL3Rvb2RvL19zdGJjbGlcIjtcclxuaW1wb3J0IHtnZXRLZXlDb2Rlc30gZnJvbSAnLi90b29kby9fa2V5Y29kZXMnO1xyXG5pbXBvcnQge3Nob3dMb2FkaW5nLGhpZGVMb2FkaW5nfSBmcm9tIFwiLi9hcHAvbG9hZGluZ1wiO1xyXG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gXCIuL2FwcC9kaWFsb2dcIjtcclxuaW1wb3J0IHtnZXRKU09OfSBmcm9tIFwiLi9hcHAvYWJjXCI7XHJcbmltcG9ydCB7SG9tZU1lbnV9IGZyb20gJy4vSG9tZU1lbnUnO1xyXG5pbXBvcnQge1Nob3BQYWdlfSBmcm9tICcuL1Nob3BQYWdlJztcclxuaW1wb3J0IHtzaG9wQXJncyxjYWxsYmFja0FyZ3MsYXBwQXJnc30gZnJvbSAnLi9hcHAvUGFnZUFyZ3MnO1xyXG5pbXBvcnQge3Nob3BCaWxsfSBmcm9tICcuL1Nob3BCaWxsJztcclxuaW1wb3J0IHtzaG93Q2hpbGRMb2NrfSBmcm9tIFwiLi9hcHAvY2hpbGRMb2NrXCI7XHJcbmltcG9ydCB7c2hvd0FkMjl9IGZyb20gJy4vYXBwL2RpYWxvZ0JpZ0FkJztcclxuXHJcblxyXG52YXIgc3RiY2xpID0gbmV3IFN0YkNsaWVudCgpO1xyXG52YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcblxyXG4vLyB2YXIgY2FsbGJhY2tVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy90ZGVudGVyL2NhbGxiYWNrLmh0bWwnO1xyXG52YXIgY2FsbGJhY2tVcmwgPSBcImh0dHA6Ly8xMjAuNzcuODIuNTQvdGRHYW1lQ2VudGVyL2NhbGxiYWNrLmh0bWxcIjtcclxuXHJcbmZ1bmN0aW9uIG9uU3RhcnQoY29kZSwgYml6KSB7XHJcbiAgICBoaWRlTG9hZGluZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGNvZGUgIT0gMCkge1xyXG4gICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dMb2FkaW5nKCfoh6rliqjnmbvpmYYnLCAn5bCP5Y+M5Zyo5L2/5Yqy5Yqg6L2977yM6K+356iN5YCZLi4uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RiY2xpLnN0YXJ0KG9uU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG9wUGFnZS5zaG93KHNob3BQYWdlLmN1cnJlbnQsIG9uUGFnZUtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEsICfmj5DnpLonLCAn5rKh5pyJ5om+5Yiw55So5oi35L+h5oGv5ZOm77yBJywgJ+mHjeivlScsICflj5bmtognKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZGVVc2VyID0gYml6O1xyXG4gICAgICAgICAgICBzaG9wUGFnZS5zaG93KHNob3BQYWdlLmN1cnJlbnQsIG9uUGFnZUtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gY29kZVxyXG4gKiBAcGFyYW0gYml6XHJcbiAqIEBwYXJhbSBiaXouY2F0ZWdvcnlcclxuICogQHBhcmFtIGJpei5jb21wbGV4XHJcbiAqIEBwYXJhbSBiaXoucHJvZHVjdElkXHJcbiAqIEBwYXJhbSBiaXoucHJpY2VcclxuICogQHBhcmFtIGJpei5nb29kc05hbWVcclxuICovXHJcbmZ1bmN0aW9uIG9uUXVlcnlQcm9kdWN0MShjb2RlLCBiaXopIHtcclxuICAgIGhpZGVMb2FkaW5nKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaXRlbUluZm8gPSBpdGVtSW5mb3Nbc2hvcFBhZ2UuY3VycmVudF07XHJcbiAgICAgICAgaWYgKGNvZGUgPT0gMCAmJiBiaXogJiYgYml6LnByb2R1Y3RJZCA9PSBpdGVtSW5mby5wcm9kSWQpIHtcclxuICAgICAgICAgICAgdGRlUHJvZCA9IGJpejtcclxuICAgICAgICAgICAgdmFyIGNiID0gZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRkZVVzZXIuY2hpbGRMb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDaGlsZExvY2soZnVuY3Rpb24gKGNvZGUsIG1zZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25WYWxpZExvY2soY29kZSwgbXNnLCBzaG9wUGFnZSwgaXRlbUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kT3JkZXIoaXRlbUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcFBhZ2Uuc2hvdyhzaG9wUGFnZS5jdXJyZW50LCBvblBhZ2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIHByaWNlID0gcGFyc2VJbnQoYml6LnByaWNlKTtcclxuICAgICAgICAgICAgc3dpdGNoIChwcmljZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOTAwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSA5OTAwOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAxNzAwMDpcclxuICAgICAgICAgICAgICAgICAgICBzaG93QWQyOShjYiwgMCwgcHJpY2UgLyAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiaXouY2F0ZWdvcnkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gJ+aCqOWwhuiKsei0uScgKyBwcmljZSAvIDEwMCArICflhYMv5pyI6K6i6LStJyArIGJpei5nb29kc05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9ICfmgqjlsIboirHotLknICsgcHJpY2UgLyAxMDAgKyAn5YWD6LSt5LmwJyArIGJpei5nb29kc05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dEaWFsb2coY2IsIDAsICforqLotK3kv6Hmga8nLCB0ZXh0LCAn56Gu6K6kJywgJ+WPlua2iCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0xvYWRpbmcoJ+aPkOekuicsICfmraPlnKjliqDovb3vvIzor7fnqI3lgJkuLi4nKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGJjbGkucXVlcnlQcm9kdWN0MShpdGVtSW5mby5wcm9kSWQsIG9uUXVlcnlQcm9kdWN0MSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3BQYWdlLnNob3coc2hvcFBhZ2UuY3VycmVudCwgb25QYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCwgJ+aPkOekuicsICfmsqHmnInmib7liLDkuqflk4Hkv6Hmga/lk6bvvIEnLCAn6YeN6K+VJywgJ+WPlua2iCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbk9yZGVyMShjb2RlLCBiaXopIHtcclxuICAgIGhpZGVMb2FkaW5nKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaXRlbUluZm8gPSBpdGVtSW5mb3Nbc2hvcFBhZ2UuY3VycmVudF07XHJcbiAgICAgICAgaWYgKGNvZGUgPT0gMCAmJiBiaXopIHtcclxuICAgICAgICAgICAgc2hvd0xvYWRpbmcoJ+aPkOekuicsICfmraPlnKjlpITnkIbvvIzor7fnqI3lgJkuLi4nKTtcclxuICAgICAgICAgICAgY2FsbGJhY2tBcmdzLnNldFJlZGlyZWN0VXJsKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgY2FsbGJhY2tBcmdzLnNldFJldHVyblVybCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgIHN0YmNsaS5wYXkoYml6LnRyYWRlTm8pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZE9yZGVyKGl0ZW1JbmZvKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcFBhZ2Uuc2hvdyhzaG9wUGFnZS5jdXJyZW50LCBvblBhZ2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwLCAn6K6i5Y2V5o+Q56S6JywgJ+Wwj+WPjOacjeWKoeW8gOWwj+W3ruWVpu+8jOivt+eojeWQjumHjeivleOAgicsICfph43or5UnLCAn6L+U5ZueJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uTWVudUtleShrZXkpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gc2hvcEFyZ3MuZ2V0UmV0dXJuVXJsKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5lc2M6XHJcbiAgICAgICAgICAgIGFwcEFyZ3Mub25GaXJzdFBhZ2UoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmRvd246XHJcbiAgICAgICAgICAgIGhvbWVNZW51LmhpZGUoKTtcclxuICAgICAgICAgICAgc2hvcFBhZ2Uuc2hvdyhzaG9wUGFnZS5jdXJyZW50LCBvblBhZ2VLZXkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGtleUNvZGUub2s6XHJcbiAgICAgICAgICAgIGlmIChob21lTWVudS5jdXJyZW50ID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gc2hvcEFyZ3MuZ2V0UmV0dXJuVXJsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uUGFnZUtleShrZXkpIHtcclxuICAgIHN3aXRjaCAoa2V5KSB7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gc2hvcEFyZ3MuZ2V0UmV0dXJuVXJsKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS5lc2M6XHJcbiAgICAgICAgICAgIGFwcEFyZ3Mub25GaXJzdFBhZ2UoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLm9rOlxyXG4gICAgICAgICAgICBpZiAoIWNhblZpZGVvKCkpIHtcclxuICAgICAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3BQYWdlLnNob3coc2hvcFBhZ2UuY3VycmVudCwgb25QYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgIH0sIDEsICfmlazor7fmnJ/lvoUnLCAn6K+l5py66aG255uS5Z6L5Y+35pqC5LiN5pSv5oyB5L2T5oSf54Ot6Iie5ri45oiPLOivt+iBlOezuzk2MzM15pu05o2i5py66aG255uSLicsICfnoa7lrponLCAn5Y+W5raIJywgJ2xlZnQnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5pyq55m75b2VXHJcbiAgICAgICAgICAgIGlmICghc3RiY2xpLmlzUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIHNob3dMb2FkaW5nKCfoh6rliqjnmbvpmYYnLCAn5bCP5Y+M5Zyo5L2/5Yqy5Yqg6L2977yM6K+356iN5YCZLi4uJyk7XHJcbiAgICAgICAgICAgICAgICBzdGJjbGkuc3RhcnQob25TdGFydCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaXRlbUluZm8gPSBpdGVtSW5mb3Nbc2hvcFBhZ2UuY3VycmVudF07XHJcbiAgICAgICAgICAgIC8v5pyq5byA6YCaXHJcbiAgICAgICAgICAgIHNob3dMb2FkaW5nKCfmj5DnpLonLCAn5q2j5Zyo5Yqg6L2977yM6K+356iN5YCZLi4uJyk7XHJcbiAgICAgICAgICAgIHN0YmNsaS5xdWVyeVByb2R1Y3QxKGl0ZW1JbmZvLnByb2RJZCwgb25RdWVyeVByb2R1Y3QxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICBzaG9wUGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgIGhvbWVNZW51LnNob3coaG9tZU1lbnUuY3VycmVudCwgb25NZW51S2V5LCB0ZGVVc2VyKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmRvd246XHJcbiAgICAgICAgICAgIHNob3BQYWdlLmhpZGUoKTtcclxuICAgICAgICAgICAgc2hvcEJpbGwuc2hvdyhzaG9wQmlsbC5jdXJyZW50LCBvbkJpbGxLZXksIHRkZVVzZXIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25CaWxsS2V5KGtleSkge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIGtleUNvZGUubnVtMDpcclxuICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBzaG9wQXJncy5nZXRSZXR1cm5VcmwoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmVzYzpcclxuICAgICAgICAgICAgYXBwQXJncy5vbkZpcnN0UGFnZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgIHNob3BCaWxsLmhpZGUoKTtcclxuICAgICAgICAgICAgc2hvcFBhZ2Uuc2hvdyhzaG9wUGFnZS5jdXJyZW50LCBvblBhZ2VLZXkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBjb2RlIHtpbnR9XHJcbiAqIEBwYXJhbSBtc2cge3N0cmluZ31cclxuICogQHBhcmFtIG93bmVyIHtIb21lTWVudX1cclxuICogQHBhcmFtIGl0ZW1JbmZvIHtPYmplY3R9XHJcbiAqL1xyXG5mdW5jdGlvbiBvblZhbGlkTG9jayhjb2RlLCBtc2csIG93bmVyLCBpdGVtSW5mbykge1xyXG4gICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgIHZhciBvbGRMb2NrID0gdGRlVXNlci5jaGlsZExvY2s7XHJcbiAgICAgICAgaWYgKG1zZyA9PSBvbGRMb2NrKSB7XHJcbiAgICAgICAgICAgIHNlbmRPcmRlcihpdGVtSW5mbyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0RpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2hpbGRMb2NrKGZ1bmN0aW9uIChjb2RlLCBtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25WYWxpZExvY2soY29kZSwgbXNnLCBvd25lciwgaXRlbUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEsIDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG9uUGFnZUtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDAsICfmj5DnpLonLCAn56ul6ZSB6aqM6K+B5Ye66ZSZJywgJ+mHjeivlScsICflj5bmtognKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb25QYWdlS2V5KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZE9yZGVyKGl0ZW1JbmZvKSB7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICBcImlkXCI6IGl0ZW1JbmZvLmlkLFxyXG4gICAgICAgIFwidGl0bGVcIjogaXRlbUluZm8udGl0bGUsXHJcbiAgICAgICAgXCJnYW1lSWRcIjogaXRlbUluZm8uZ2FtZUlkLFxyXG4gICAgICAgIFwicHJvZHVjdElkXCI6IGl0ZW1JbmZvLnByb2R1Y3RJZCxcclxuICAgICAgICBcInByb2RJZFwiOiBpdGVtSW5mby5wcm9kSWQsXHJcbiAgICAgICAgXCJ0cmlhbFwiOiBpdGVtSW5mby50cmlhbCxcclxuICAgICAgICBcImNvbXBsZXhcIjogdGRlUHJvZC5jb21wbGV4XHJcbiAgICB9O1xyXG4gICAgdmFyIGFyZ3MgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgIHNob3dMb2FkaW5nKCfmj5DnpLonLCAn5q2j5Zyo5aSE55CG77yM6K+356iN5YCZLi4uJyk7XHJcbiAgICBzdGJjbGkub3JkZXIxKGl0ZW1JbmZvLnByb2RJZCwgY2FsbGJhY2tVcmwsIGFyZ3MsIG9uT3JkZXIxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuVmlkZW8oKSB7XHJcbiAgICBpZiAocmV0YWlsSWQgPT0gcmV0YWlsLmd4Z2QpIHtcclxuICAgICAgICB2YXIgZW1iZWQgPSBpUGFuZWwuZ2V0R2xvYmFsVmFyKFwiVk9EX0VNQkVEREVEX1ZFUlNJT05cIik7XHJcbiAgICAgICAgaWYgKGVtYmVkID09ICcjJyB8fCBlbWJlZCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcbnZhciBob21lTWVudTtcclxudmFyIHNob3BQYWdlO1xyXG52YXIgaXRlbUluZm9zID0gW107XHJcbnZhciB0ZGVVc2VyO1xyXG52YXIgdGRlUHJvZDtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBob21lTWVudSA9IG5ldyBIb21lTWVudSgpO1xyXG4gICAgc2hvcFBhZ2UgPSBuZXcgU2hvcFBhZ2UoKTtcclxuICAgIHNob3BQYWdlLnNob3coc2hvcFBhZ2UuY3VycmVudCwgb25QYWdlS2V5KTtcclxuXHJcbiAgICAvL3Nob3dMb2FkaW5nKCfmj5DnpLonLCAn5q2j5Zyo5Yqg6L2977yM6K+356iN5YCZLi4uJyk7XHJcbiAgICBnZXRKU09OKFwiZGF0YS90ZGVfc2hvcF9pbmZvcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW1JbmZvcy5wdXNoKGRhdGFbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIHN0YmNsaS5zdGFydChvblN0YXJ0KTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfSk7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9zaG9wLmpzIiwiaW1wb3J0IHtyZXRhaWwscmV0YWlsSWR9IGZyb20gXCIuL19yZXRhaWxcIjtcclxuXHJcbmZ1bmN0aW9uIGdldEtleUNvZGVzKCkge1xyXG4gICAgbGV0IGtleU1hcCA9IHt9O1xyXG5cclxuICAgIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ3hnZCkge1xyXG4gICAgICAgIGtleU1hcCA9IHsgLy8g5bm/6KW/5bm/55S1XHJcbiAgICAgICAgICAgIHVwOiAzOCwgICAgICAgIC8vIOS4ilxyXG4gICAgICAgICAgICBkb3duOiA0MCwgICAgICAvLyDkuItcclxuICAgICAgICAgICAgbGVmdDogMzcsICAgICAgLy8g5bemXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzOSwgICAgIC8vIOWPs1xyXG4gICAgICAgICAgICBvazogMTMsICAgICAgICAvLyDnoa7lrppcclxuICAgICAgICAgICAgZjE6IDQwMCwgICAgICAgLy8gZjEgLy/nuqJcclxuICAgICAgICAgICAgZjI6IDQwMSwgICAgICAgLy8gZjIgLy/ok51cclxuICAgICAgICAgICAgZjM6IDQwMywgICAgICAgLy8gZjMgLy/pu4RcclxuICAgICAgICAgICAgZjQ6IDQwMiwgICAgICAgLy8gZjQgLy/nu79cclxuICAgICAgICAgICAgbnVtMTogNDksICAgICAgLy8g5pWw5a2XMVxyXG4gICAgICAgICAgICBudW0yOiA1MCwgICAgICAvLyDmlbDlrZcyXHJcbiAgICAgICAgICAgIG51bTM6IDUxLCAgICAgIC8vIOaVsOWtlzNcclxuICAgICAgICAgICAgbnVtNDogNTIsICAgICAgLy8g5pWw5a2XNFxyXG4gICAgICAgICAgICBudW01OiA1MywgICAgICAvLyDmlbDlrZc1XHJcbiAgICAgICAgICAgIG51bTY6IDU0LCAgICAgIC8vIOaVsOWtlzZcclxuICAgICAgICAgICAgbnVtNzogNTUsICAgICAgLy8g5pWw5a2XN1xyXG4gICAgICAgICAgICBudW04OiA1NiwgICAgICAvLyDmlbDlrZc4XHJcbiAgICAgICAgICAgIG51bTk6IDU3LCAgICAgIC8vIOaVsOWtlzlcclxuICAgICAgICAgICAgbnVtMDogNDgsICAgICAgLy8g5pWw5a2XMFxyXG4gICAgICAgICAgICBtdXRlOiA1MTgsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDM5OSwgICAgICAvLyDov5Tlm55cclxuICAgICAgICAgICAgdHJhY2s6IDQwNiwgICAgIC8vIOWjsOmBk++8nyAvL+WjsOmBk+mUrlxyXG4gICAgICAgICAgICB2b2xVcDogNTE3LCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogNTE2LCAgLy8g5YeP5bCP6Z+z6YePXHJcbiAgICAgICAgICAgIGZhdjogNDA0LCAgICAgICAvLyDllpzmrKJcclxuICAgICAgICAgICAgcGxheUJhY2s6IDUyMSwgIC8vIOWbnuaUviAgLy/ngrnmkq3plK5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMywgICAgLy8g5LiK5LiA6aG1XHJcbiAgICAgICAgICAgIHBhZ2VEb3duOiAzNCwgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA1MTUsICAgICAgIC8vIOiPnOWNlVxyXG4gICAgICAgICAgICBlc2M6IDUxNCwgICAgICAgIC8v6YCA5Ye6XHJcbiAgICAgICAgICAgIGhvbWU6IDUyMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuaG55eCkge1xyXG4gICAgICAgIC8va2V5TWFwID0geyAvLyDmsrPljZfmnInnur8gbGludXhcclxuICAgICAgICAvLyAgICB1cDogNjUzNjIsXHJcbiAgICAgICAgLy8gICAgZG93bjogNjUzNjQsXHJcbiAgICAgICAgLy8gICAgbGVmdDogNjUzNjEsXHJcbiAgICAgICAgLy8gICAgcmlnaHQ6IDY1MzYzLFxyXG4gICAgICAgIC8vICAgIG9rOiA2NTI5MyxcclxuICAgICAgICAvLyAgICBmMTogMzIsXHJcbiAgICAgICAgLy8gICAgZjI6IDMzLFxyXG4gICAgICAgIC8vICAgIGYzOiAzNCxcclxuICAgICAgICAvLyAgICBmNDogMzUsXHJcbiAgICAgICAgLy8gICAgbnVtMTogNDksXHJcbiAgICAgICAgLy8gICAgbnVtMjogNTAsXHJcbiAgICAgICAgLy8gICAgbnVtMzogNTEsXHJcbiAgICAgICAgLy8gICAgbnVtNDogNTIsXHJcbiAgICAgICAgLy8gICAgbnVtNTogNTMsXHJcbiAgICAgICAgLy8gICAgbnVtNjogNTQsXHJcbiAgICAgICAgLy8gICAgbnVtNzogNTUsXHJcbiAgICAgICAgLy8gICAgbnVtODogNTYsXHJcbiAgICAgICAgLy8gICAgbnVtOTogNTcsXHJcbiAgICAgICAgLy8gICAgbnVtMDogNDgsXHJcbiAgICAgICAgLy8gICAgbXV0ZTogNjM1NjMsXHJcbiAgICAgICAgLy8gICAgYmFjazogNjUzNjcsXHJcbiAgICAgICAgLy8gICAgdHJhY2s6IDY1MzA3LFxyXG4gICAgICAgIC8vICAgIHZvbFVwOiA2MzU2MSxcclxuICAgICAgICAvLyAgICB2b2xEb3duOiA2MzU2MixcclxuICAgICAgICAvLyAgICBmYXY6IDM2LFxyXG4gICAgICAgIC8vICAgIHBsYXlCYWNrOiA3MixcclxuICAgICAgICAvLyAgICBwYWdlVXA6IDI1LFxyXG4gICAgICAgIC8vICAgIHBhZ2VEb3duOiAyNixcclxuICAgICAgICAvLyAgICBtZW51OiA2NTM2MCxcclxuICAgICAgICAvLyAgICBlc2M6IDI3LFxyXG4gICAgICAgIC8vICAgIGhvbWU6IDY1MzYwXHJcbiAgICAgICAgLy99O1xyXG4gICAgICAgIGtleU1hcCA9IHsgLy8g5rKz5Y2X5pyJ57q/IGFuZHJvaWRcclxuICAgICAgICAgICAgdXA6IDM4LCAgICAgICAgLy8g5LiKXHJcbiAgICAgICAgICAgIGRvd246IDQwLCAgICAgIC8vIOS4i1xyXG4gICAgICAgICAgICBsZWZ0OiAzNywgICAgICAvLyDlt6ZcclxuICAgICAgICAgICAgcmlnaHQ6IDM5LCAgICAgLy8g5Y+zXHJcbiAgICAgICAgICAgIG9rOiAxMywgICAgICAgIC8vIOehruWumlxyXG4gICAgICAgICAgICBmMTogMTEyLCAgICAgICAvLyBmMVxyXG4gICAgICAgICAgICBmMjogMTEzLCAgICAgICAvLyBmMlxyXG4gICAgICAgICAgICBmMzogMTE0LCAgICAgICAvLyBmM1xyXG4gICAgICAgICAgICBmNDogMTE1LCAgICAgICAvLyBmNFxyXG4gICAgICAgICAgICBudW0xOiA0OSwgICAgICAvLyDmlbDlrZcxXHJcbiAgICAgICAgICAgIG51bTI6IDUwLCAgICAgIC8vIOaVsOWtlzJcclxuICAgICAgICAgICAgbnVtMzogNTEsICAgICAgLy8g5pWw5a2XM1xyXG4gICAgICAgICAgICBudW00OiA1MiwgICAgICAvLyDmlbDlrZc0XHJcbiAgICAgICAgICAgIG51bTU6IDUzLCAgICAgIC8vIOaVsOWtlzVcclxuICAgICAgICAgICAgbnVtNjogNTQsICAgICAgLy8g5pWw5a2XNlxyXG4gICAgICAgICAgICBudW03OiA1NSwgICAgICAvLyDmlbDlrZc3XHJcbiAgICAgICAgICAgIG51bTg6IDU2LCAgICAgIC8vIOaVsOWtlzhcclxuICAgICAgICAgICAgbnVtOTogNTcsICAgICAgLy8g5pWw5a2XOVxyXG4gICAgICAgICAgICBudW0wOiA0OCwgICAgICAvLyDmlbDlrZcwIC8v5pWw5a2XMCDov5Tlm55cclxuICAgICAgICAgICAgbXV0ZTogNzcsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDgsICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA4MiwgICAgIC8vIOWjsOmBk++8n1xyXG4gICAgICAgICAgICB2b2xVcDogMTkwLCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogMTg4LCAgLy8g5YeP5bCP6Z+z6YePXHJcbiAgICAgICAgICAgIGZhdjogODQsICAgICAgIC8vIOWWnOasolxyXG4gICAgICAgICAgICBwbGF5QmFjazogODAsICAvLyDlm57mlL5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMywgICAgLy8g5LiK5LiA6aG1XHJcbiAgICAgICAgICAgIHBhZ2VEb3duOiAzNCwgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA3MiwgICAgICAgLy8g6I+c5Y2VXHJcbiAgICAgICAgICAgIGVzYzogMjcsXHJcbiAgICAgICAgICAgIGhvbWU6IDcyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHJldGFpbElkID09IHJldGFpbC5nZGdkKSB7XHJcbiAgICAgICAga2V5TWFwID0geyAvLyDlub/kuJzlub/nlLVcclxuICAgICAgICAgICAgdXA6IDg3LCAgICAgICAgLy8g5LiKIFfplK5cclxuICAgICAgICAgICAgZG93bjogODMsICAgICAgLy8g5LiLIFPplK5cclxuICAgICAgICAgICAgbGVmdDogNjUsICAgICAgLy8g5bemIEHplK5cclxuICAgICAgICAgICAgcmlnaHQ6IDY4LCAgICAgLy8g5Y+zIETplK5cclxuICAgICAgICAgICAgb2s6IDEzLCAgICAgICAgLy8g56Gu5a6aXHJcbiAgICAgICAgICAgIGYxOiA0MDAsICAgICAgIC8vIGYxIC8v57qiXHJcbiAgICAgICAgICAgIGYyOiA0MDEsICAgICAgIC8vIGYyIC8v6JOdXHJcbiAgICAgICAgICAgIGYzOiA0MDIsICAgICAgIC8vIGYzIC8v6buEXHJcbiAgICAgICAgICAgIGY0OiA0MDMsICAgICAgIC8vIGY0IC8v57u/XHJcbiAgICAgICAgICAgIG51bTE6IDQ5LCAgICAgIC8vIOaVsOWtlzFcclxuICAgICAgICAgICAgbnVtMjogNTAsICAgICAgLy8g5pWw5a2XMlxyXG4gICAgICAgICAgICBudW0zOiA1MSwgICAgICAvLyDmlbDlrZczXHJcbiAgICAgICAgICAgIG51bTQ6IDUyLCAgICAgIC8vIOaVsOWtlzRcclxuICAgICAgICAgICAgbnVtNTogNTMsICAgICAgLy8g5pWw5a2XNVxyXG4gICAgICAgICAgICBudW02OiA1NCwgICAgICAvLyDmlbDlrZc2XHJcbiAgICAgICAgICAgIG51bTc6IDU1LCAgICAgIC8vIOaVsOWtlzdcclxuICAgICAgICAgICAgbnVtODogNTYsICAgICAgLy8g5pWw5a2XOFxyXG4gICAgICAgICAgICBudW05OiA1NywgICAgICAvLyDmlbDlrZc5XHJcbiAgICAgICAgICAgIG51bTA6IDQ4LCAgICAgIC8vIOaVsOWtlzBcclxuICAgICAgICAgICAgbXV0ZTogNjcsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDgsICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA4NiwgICAgIC8vIOWjsOmBk++8nyAvL+WjsOmBk+mUrlxyXG4gICAgICAgICAgICB2b2xVcDogNjEsICAgIC8vIOWinuWkp+mfs+mHj1xyXG4gICAgICAgICAgICB2b2xEb3duOiA0NSwgIC8vIOWHj+Wwj+mfs+mHj1xyXG4gICAgICAgICAgICBmYXY6IDc2LCAgICAgICAvLyDllpzmrKJcclxuICAgICAgICAgICAgcGxheUJhY2s6IDUyMSwgIC8vIOWbnuaUviAgLy/ngrnmkq3plK5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMDYsICAgIC8vIOS4iuS4gOmhtVxyXG4gICAgICAgICAgICBwYWdlRG93bjogMzA3LCAgLy8g5LiL5LiA6aG1XHJcbiAgICAgICAgICAgIG1lbnU6IDcyLCAgICAgICAvLyDoj5zljZVcclxuICAgICAgICAgICAgZXNjOiAyNyxcclxuICAgICAgICAgICAgaG9tZTogNzJcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0gZWxzZSB7IC8vIHdpbmRvd3Mg6ZSu56CBXHJcbiAgICAgICAga2V5TWFwID0ge1xyXG4gICAgICAgICAgICB1cDogMzgsICAgICAgICAvLyDkuIpcclxuICAgICAgICAgICAgZG93bjogNDAsICAgICAgLy8g5LiLXHJcbiAgICAgICAgICAgIGxlZnQ6IDM3LCAgICAgIC8vIOW3plxyXG4gICAgICAgICAgICByaWdodDogMzksICAgICAvLyDlj7NcclxuICAgICAgICAgICAgb2s6IDEzLCAgICAgICAgLy8g56Gu5a6aXHJcbiAgICAgICAgICAgIGYxOiAxMTIsICAgICAgIC8vIGYxXHJcbiAgICAgICAgICAgIGYyOiAxMTMsICAgICAgIC8vIGYyXHJcbiAgICAgICAgICAgIGYzOiAxMTQsICAgICAgIC8vIGYzXHJcbiAgICAgICAgICAgIGY0OiAxMTUsICAgICAgIC8vIGY0XHJcbiAgICAgICAgICAgIG51bTE6IDQ5LCAgICAgIC8vIOaVsOWtlzFcclxuICAgICAgICAgICAgbnVtMjogNTAsICAgICAgLy8g5pWw5a2XMlxyXG4gICAgICAgICAgICBudW0zOiA1MSwgICAgICAvLyDmlbDlrZczXHJcbiAgICAgICAgICAgIG51bTQ6IDUyLCAgICAgIC8vIOaVsOWtlzRcclxuICAgICAgICAgICAgbnVtNTogNTMsICAgICAgLy8g5pWw5a2XNVxyXG4gICAgICAgICAgICBudW02OiA1NCwgICAgICAvLyDmlbDlrZc2XHJcbiAgICAgICAgICAgIG51bTc6IDU1LCAgICAgIC8vIOaVsOWtlzdcclxuICAgICAgICAgICAgbnVtODogNTYsICAgICAgLy8g5pWw5a2XOFxyXG4gICAgICAgICAgICBudW05OiA1NywgICAgICAvLyDmlbDlrZc5XHJcbiAgICAgICAgICAgIG51bTA6IDQ4LCAgICAgIC8vIOaVsOWtlzAgLy/mlbDlrZcwIOi/lOWbnlxyXG4gICAgICAgICAgICBtdXRlOiA3NywgICAgICAvLyDpnZnpn7NcclxuICAgICAgICAgICAgYmFjazogOCwgICAgICAvLyDov5Tlm55cclxuICAgICAgICAgICAgdHJhY2s6IDgyLCAgICAgLy8g5aOw6YGT77yfXHJcbiAgICAgICAgICAgIHZvbFVwOiAxOTAsICAgIC8vIOWinuWkp+mfs+mHj1xyXG4gICAgICAgICAgICB2b2xEb3duOiAxODgsICAvLyDlh4/lsI/pn7Pph49cclxuICAgICAgICAgICAgZmF2OiA4NCwgICAgICAgLy8g5Zac5qyiXHJcbiAgICAgICAgICAgIHBsYXlCYWNrOiA4MCwgIC8vIOWbnuaUvlxyXG4gICAgICAgICAgICBwYWdlVXA6IDMzLCAgICAvLyDkuIrkuIDpobVcclxuICAgICAgICAgICAgcGFnZURvd246IDM0LCAgLy8g5LiL5LiA6aG1XHJcbiAgICAgICAgICAgIG1lbnU6IDcyLCAgICAgICAvLyDoj5zljZVcclxuICAgICAgICAgICAgZXNjOiAyNyxcclxuICAgICAgICAgICAgaG9tZTogNzJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleU1hcDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXZlbnQoZXZ0KSB7XHJcbiAgICByZXR1cm4gZXZ0IHx8IHdpbmRvdy5ldmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0S2V5KGV2dCkge1xyXG4gICAgLy/mlK/mjIFJReOAgUZGXHJcbiAgICBldnQgPSBnZXRFdmVudChldnQpO1xyXG4gICAgcmV0dXJuIGV2dC5rZXlDb2RlIHx8IGV2dC53aGljaCB8fCBldnQuY2hhckNvZGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvZGVzKCkge1xyXG4gICAgY29uc3Qga2V5TWFwID0gZ2V0S2V5Q29kZXMoKTtcclxuICAgIHZhciBjb2RlcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgY29kZSBpbiBrZXlNYXApIHtcclxuICAgICAgICBpZiAoa2V5TWFwLmhhc093blByb3BlcnR5KGNvZGUpKSB7XHJcbiAgICAgICAgICAgIGNvZGVzLnB1c2goa2V5TWFwW2NvZGVdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29kZXM7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX2tleWNvZGVzLmpzIiwiY29uc3QgcmV0YWlsID0ge1xyXG4gICAgZ3hnZDogJzk2MzM1JyxcclxuICAgIGhueXg6ICc5NjI2NicsXHJcbiAgICBnZGdkOiAnOTY5NTYnLFxyXG4gICAgbm9uZTogJzEwMDAnXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZXRSZXRhaWxJZCgpIHtcclxuICAgIHRyeSB7Ly/lub/opb/lub/nlLVcclxuICAgICAgICBpZiAoZ3Vhbmd4aSAmJiBpUGFuZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJldGFpbC5neGdkO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHRyeSB7Ly/msrPljZfmnInnur9cclxuICAgICAgICB2YXIgU3lzdGVtID0gd2luZG93LlN5c3RlbTtcclxuICAgICAgICBpZiAoU3lzdGVtICYmIFN5c3RlbS5zdGJJRCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0YWlsLmhueXg7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgdHJ5IHsvL+W5v+S4nOW5v+eUtVxyXG4gICAgICAgIGlmIChDQSAmJiBTdG9yYWdlU2VydmljZSAmJiBGaWxlU3lzdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXRhaWwuZ2RnZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy92YXIgc3RvcmFnZUxpc3QgPSBTdG9yYWdlU2VydmljZS5nZXRTdG9yYWdlSW5mb3MoKTtcclxuICAgICAgICAvL2lmIChzdG9yYWdlTGlzdCAmJiBzdG9yYWdlTGlzdCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vICAgIHZhciBwYXJ0aXRpb25QYXRoTGlzdCA9IHN0b3JhZ2VMaXN0WzBdLmdldFBhcnRpdGlvbnNJbmZvKClbMF07XHJcbiAgICAgICAgLy8gICAgdmFyIHBhcnRpdGlvblBhdGggPSBwYXJ0aXRpb25QYXRoTGlzdC5wYXRoO1xyXG4gICAgICAgIC8vICAgIHZhciBkaXIgPSBGaWxlU3lzdGVtLmdldERpcmVjdG9yeShwYXJ0aXRpb25QYXRoKTtcclxuICAgICAgICAvLyAgICB2YXIgZmxpc3QgPSBkaXIuZmlsZUxpc3Q7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICBmb3IgKHZhciBpIGluIGZsaXN0KSB7XHJcbiAgICAgICAgLy8gICAgICAgIGlmIChmbGlzdFtpXS5uYW1lLnN1YnN0cmluZygwLCA2KSA9PSBcImNhY2FyZFwiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICB2YXIgY2FyZE5vID0gXCI5Njk1NlwiICsgZmxpc3RbaV0ubmFtZS5zdWJzdHJpbmcoNiwgMTIpO1xyXG4gICAgICAgIC8vICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgfVxyXG4gICAgICAgIC8vfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldGFpbC5ub25lO1xyXG59XHJcblxyXG52YXIgcmV0YWlsSWQgPSBnZXRSZXRhaWxJZCgpO1xyXG5leHBvcnQge3JldGFpbCxnZXRSZXRhaWxJZCxyZXRhaWxJZH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fcmV0YWlsLmpzIiwiaW1wb3J0IHtSZXF1ZXN0Qm9keSwgVG9vZG9DbGllbnR9IGZyb20gXCIuL190ZGNsaVwiO1xyXG5pbXBvcnQge3JldGFpbElkLHJldGFpbH0gZnJvbSBcIi4vX3JldGFpbFwiO1xyXG5pbXBvcnQge3N0Yk51bGx9IGZyb20gXCIuL19zdGJudWxsXCI7XHJcbnZhciBtZDUgPSByZXF1aXJlKCdtZDUnKTtcclxudmFyIEpTT04gPSByZXF1aXJlKCdKU09OJyk7XHJcblxyXG5mdW5jdGlvbiBTdGJDbGllbnQoKSB7XHJcbiAgICAvLyB0aGlzLm9yaWdpblVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnL3Rkc3J2JztcclxuICAgIHRoaXMub3JpZ2luVXJsID0gXCJodHRwOi8vbG9jYWxob3N0L1Rvb2RvU2VydmljZS9wdWJsaWMvXCI7XHJcbiAgICB0aGlzLmFwcEtleSA9ICcxMDAwJztcclxuICAgIHRoaXMuYXBwU2VjcmV0ID0gJ1JjT0ZodEFZendDR285MVBHSGRWJztcclxuICAgIHRoaXMuX3RkY2xpID0gbnVsbDtcclxufVxyXG5TdGJDbGllbnQucHJvdG90eXBlID0ge1xyXG4gICAgaXNSZWFkeTogZmFsc2UsXHJcbiAgICB1c2VySWQ6ICcnLFxyXG4gICAgdG9rZW46ICcnLFxyXG5cclxuICAgIG1kNTogZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgIHJldHVybiBtZDUobXNnICsgdGhpcy5hcHBTZWNyZXQpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IGNhbGxiYWNrLmJpelxyXG4gICAgICovXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fdGRjbGkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGRjbGkgPSBuZXcgVG9vZG9DbGllbnQodGhpcy5hcHBLZXksIHRoaXMuYXBwU2VjcmV0LCB0aGlzLm9yaWdpblVybCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdG9rZW4gPSBzdGJOdWxsLmdldFZhbHVlKCd0b29kby50b2tlbicpO1xyXG4gICAgICAgIGxldCB1c2VySWQgPSBzdGJOdWxsLmdldFZhbHVlKCd0b29kby51c2VySWQnKTtcclxuICAgICAgICAvLyBpZiAodG9rZW4gJiYgdXNlcklkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcclxuICAgICAgICAvLyAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soMCk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncmV0YWlsSWQnOiByZXRhaWxJZCxcclxuICAgICAgICAgICAgJ3JlZ2lvbkNvZGUnOiBzdGJOdWxsLmdldFJlZ2lvbkNvZGUoKSxcclxuICAgICAgICAgICAgJ2NhcmRUVic6IHN0Yk51bGwuZ2V0Q2FyZFRWKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby91c2VyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvJyk7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2VuZChib2R5SW4sIGZ1bmN0aW9uIChib2R5T3V0KSB7XHJcbiAgICAgICAgICAgIGlmIChib2R5T3V0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYml6T3V0ID0gSlNPTi5wYXJzZShib2R5T3V0LmJpekNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgb3duZXIudXNlcklkID0gYml6T3V0LnVzZXJJZDtcclxuICAgICAgICAgICAgICAgIG93bmVyLnRva2VuID0gYm9keU91dC50b2tlbjtcclxuICAgICAgICAgICAgICAgIHN0Yk51bGwuc2V0VmFsdWUoJ3Rvb2RvLnVzZXJJZCcsIG93bmVyLnVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBzdGJOdWxsLnNldFZhbHVlKCd0b29kby50b2tlbicsIG93bmVyLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIG93bmVyLmlzUmVhZHkgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vb3duZXIudGRlVXNlcihjYWxsYmFjayk7Ly/ov5Tlm57lpKfljoXnmoTotKblj7fkv6Hmga9cclxuICAgICAgICAgICAgICAgIG93bmVyLnRkZVVzZXIoZnVuY3Rpb24gKGNvZGUsIGJpeikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYml6LmJpelVzZXIgPSBiaXpPdXQuYml6VXNlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhjb2RlLCBiaXopO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQuY29kZSwgYm9keU91dC5zdWJDb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGJpelVzZXI6IGZ1bmN0aW9uIChiaXpJbiwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby9iaXpVc2VyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kbycpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICBhZGRXaW5uZXI6IGZ1bmN0aW9uIChwcml6ZUlELHN0YXRlLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcml6ZUlEJzpwcml6ZUlELFxyXG4gICAgICAgICAgICAnc3RhdGUnOnN0YXRlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2FkZFdpbm5lcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIGFkZFN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2FkZFN0YXRlJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbik7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRhRnJlZVN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3VwZGF0YUZyZWVTdGF0ZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4pO1xyXG4gICAgfSxcclxuICAgIGdldFByaXplOiBmdW5jdGlvbiAoaWQsY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ2lkJzppZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2dldFByaXplJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbixjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgdHVybnRhYmxlU3RhdGU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS90dXJudGFibGVTdGF0ZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgLy8gYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICB0dXJudGFibGVQcm86IGZ1bmN0aW9uICh0eXBlLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAndHlwZSc6dHlwZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3R1cm50YWJsZVBybyc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICBwcml6ZU51bTpmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvdHVybnRhYmxlUHJpemVOdW0nO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG5cclxuICAgIHdpbm5lckluZm86IGZ1bmN0aW9uIChudW0sY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ251bSc6IG51bVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3dpbm5lckluZm8nO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdHlwZSAx77ya5pyq6aKG5Y+WIDI65bey6aKG5Y+WIDPvvJrlt7Lov4fmnJ9cclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHVzZXJXaW5uZXI6IGZ1bmN0aW9uICh0eXBlLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICd0eXBlJzogdHlwZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3VzZXJXaW5uZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICBhZGRDb2luczogZnVuY3Rpb24gKGFkZE51bSkge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnYWRkTnVuJzogYWRkTnVtXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvYWRkQ29pbic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4pO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2R1Y3RJZCDmn6Xor6LnmoTkuqflk4Hnu5/kuIDnvJblj7dcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBjYWxsYmFjay5iaXpcclxuICAgICAqL1xyXG4gICAgcXVlcnlTZXJ2ZTE6IGZ1bmN0aW9uIChwcm9kdWN0SWQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcm9kdWN0SWQnOiBwcm9kdWN0SWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3NlcnZlL3F1ZXJ5MSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vc2VydmUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvZHVjdElkIOafpeivoueahOS6p+WTgee7n+S4gOe8luWPt1xyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6XHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5UHJvZHVjdDE6IGZ1bmN0aW9uIChwcm9kdWN0SWQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcm9kdWN0SWQnOiBwcm9kdWN0SWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL21hcmtldC9xdWVyeTEnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL21hcmtldCcpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9kdWN0SWQg55Sf5oiQ6K6i5Y2V55qE5Lqn5ZOB57uf5LiA57yW5Y+3XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2tVcmwg5pSv5LuY5ZCO5Zue6LCD5Zyw5Z2AXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSDljp/moLfkvKDlm57nu5ljYWxsYmFja1VybFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6XHJcbiAgICAgKi9cclxuICAgIG9yZGVyMTogZnVuY3Rpb24gKHByb2R1Y3RJZCwgY2FsbGJhY2tVcmwsIGRhdGEsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdwcm9kdWN0SWQnOiBwcm9kdWN0SWQsXHJcbiAgICAgICAgICAgICd1c2VySWQnOiB0aGlzLnVzZXJJZCxcclxuICAgICAgICAgICAgJ2NhbGxiYWNrVXJsJzogY2FsbGJhY2tVcmwsXHJcbiAgICAgICAgICAgICdkYXRhJzogZGF0YVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdHJhZGUvb3JkZXIxJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90cmFkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFkZU5vIOivt+axguaUr+S7mOiuouWNleWPt1xyXG4gICAgICovXHJcbiAgICBwYXk6IGZ1bmN0aW9uICh0cmFkZU5vKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICd0cmFkZU5vJzogdHJhZGVOb1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdHJhZGUvcGF5JztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90cmFkZScpO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnN1Ym1pdChib2R5SW4pO1xyXG4gICAgfSxcclxuICAgIGJpbGw6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RyYWRlL2JpbGwnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdHJhZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnui0puWPt+S/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGVVc2VyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvdXNlcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSAnJztcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgdGRlTG9jazogZnVuY3Rpb24gKG9sZExvY2ssIG5ld0xvY2ssIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdjaGlsZExvY2snOiBvbGRMb2NrLFxyXG4gICAgICAgICAgICAnbmV3TG9jayc6IG5ld0xvY2tcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9sb2NrJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGFnZSDpobXpnaLnvJblj7dcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkZVBhZ2U6IGZ1bmN0aW9uIChwYWdlLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncGFnZSc6IHBhZ2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9wYWdlJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2F0ZWdvcnkg5q2M5puy5YiG57G7XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnumhtemdouS/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGFTb25nOiBmdW5jdGlvbiAoY2F0ZWdvcnksIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdjYXRlZ29yeSc6IGNhdGVnb3J5XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvc29uZyc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIHRkYVNvbmcxOiBmdW5jdGlvbiAoc29uZ0lkLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnc29uZ0lkJzogc29uZ0lkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvc29uZzEnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkYU1hdGNoOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvbWF0Y2gnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpeiDov5Tlm57pobXpnaLkv6Hmga9cclxuICAgICAqL1xyXG4gICAgdGRhVXNlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL3VzZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZCDorrDlvZVcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkYVJlY29yZDogZnVuY3Rpb24gKHJlY29yZCwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGEvcmVjb3JkJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KHJlY29yZCk7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRhJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0Qm9keX0gYm9keUluXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxudW1iZXJ8c3RyaW5nfSBjYWxsYmFjay5iaXog6L+U5Zue5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHNlbmQ6IGZ1bmN0aW9uIChib2R5SW4sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3Qgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNlbmQoYm9keUluLCBmdW5jdGlvbiAoYm9keU91dCkge1xyXG4gICAgICAgICAgICBpZiAoYm9keU91dC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBiaXpPdXQgPSBKU09OLnBhcnNlKGJvZHlPdXQuYml6Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9keU91dC50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnRva2VuID0gYm9keU91dC50b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICBzdGJOdWxsLnNldFZhbHVlKCd0b29kby50b2tlbicsIG93bmVyLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiAxKTsgICAgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiBcIjFcIik7ICAgICAgICAgICAgICAvLyDov5Tlm57lrZfnrKbkuLJcInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgYWxlcnQodHlwZW9mIHRydWUpOyAgICAgICAgICAgICAvLyDov5Tlm57lrZfnrKbkuLJcImJvb2xlYW5cIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiB7fSk7ICAgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiBbXSk7ICAgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJvYmplY3QgXCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgZnVuY3Rpb24oKXt9KTsgICAgIC8vIOi/lOWbnuWtl+espuS4slwiZnVuY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiBudWxsKTsgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJvYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiB1bmRlZmluZWQpOyAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJ1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBpZiAoYml6T3V0ICYmIHR5cGVvZihiaXpPdXQpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpek91dC5zdGJjbGkgPSBvd25lcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dC5jb2RlLCBiaXpPdXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0LmNvZGUsIGJvZHlPdXQuc3ViQ29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG52YXIgc3RiY2xpID0gbmV3IFN0YkNsaWVudCgpO1xyXG5leHBvcnQge1N0YkNsaWVudCxzdGJjbGl9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fc3RiY2xpLmpzIiwiaW1wb3J0IHtyZXRhaWxJZCxyZXRhaWx9IGZyb20gXCIuL19yZXRhaWxcIjtcclxuXHJcbmZ1bmN0aW9uIFN0Yk51bGwoKSB7XHJcbn1cclxuaWYgKHJldGFpbElkID09IHJldGFpbC5neGdkKSB7Ly8g5bm/6KW/5bm/55S1ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFN0Yk51bGwucHJvdG90eXBlID0ge1xyXG4gICAgICAgIC8v6I635Y+W5py66aG255uS5Y+35a2X56ym5LiyXHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBndWFuZ3hpLmdldFN0Yk51bSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/ojrflj5bljLrln5/noIHluLjmlbBcclxuICAgICAgICBnZXRSZWdpb25Db2RlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpUGFuZWwuZ2V0R2xvYmFsVmFyKFwiR0VUX01FRElBX1JFR0lPTl9JRFwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGlQYW5lbC5nZXRHbG9iYWxWYXIoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhQ29va2llID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFDb29raWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYUNydW1iID0gYUNvb2tpZVtpXS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVzY2FwZShrZXlOYW1lKSA9PSBhQ3J1bWJbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdW5lc2NhcGUoYUNydW1iWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0IHx8IHJlc3VsdCA9PSBcIiNcIiB8fCByZXN1bHQgPT0gXCJjbGVhclZhbHVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSwga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGtleVZhbHVlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGtleVZhbHVlID0gXCJjbGVhclZhbHVlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlQYW5lbC5zZXRHbG9iYWxWYXIoa2V5TmFtZSwga2V5VmFsdWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBlc2NhcGUoa2V5TmFtZSkgKyBcIj1cIiArIGVzY2FwZShrZXlWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IGVsc2UgaWYgKHJldGFpbElkID09IHJldGFpbC5obnl4KSB7Ly8g5rKz5Y2X5pyJ57q/ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIHZhciBTeXN0ZW0gPSB3aW5kb3cuU3lzdGVtO1xyXG4gICAgU3RiTnVsbC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTeXN0ZW0uc3RiSUQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRSZWdpb25Db2RlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZWdpb24gPSAnaG55eCc7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZWdpb24gPSBTeXN0ZW0uR2V0Q0FSZWdpb25JRCgpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlZ2lvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBnID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBuZXcgR2xvYmFsKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBnID0gbmV3IEdsb2JhbDIoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICBnID0ge3ZhbHVlOiBudWxsfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZy52YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSwga2V5VmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIGcgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IG5ldyBHbG9iYWwoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBuZXcgR2xvYmFsMihrZXlOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnLnZhbHVlID0ga2V5VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ2RnZCkgey8vIOW5v+S4nOW5v+eUtSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBTdGJOdWxsLnByb3RvdHlwZSA9IHtcclxuICAgICAgICBnZXRDYXJkVFY6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFDQS5pY05vKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJzk2OTU2MTAwODYnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBDQS5pY05vO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ0EucmVnaW9uQ29kZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gU3lzU2V0dGluZy5nZXRFbnYoa2V5TmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIFN5c1NldHRpbmcuc2V0RW52KGtleU5hbWUsIGtleVZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59IGVsc2Uge1xyXG4gICAgU3RiTnVsbC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnMTAwODYnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJzAnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgICAgICAgICAgY29uc3QgYUNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFDb29raWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFDcnVtYiA9IGFDb29raWVbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVzY2FwZShrZXlOYW1lKSA9PSBhQ3J1bWJbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB1bmVzY2FwZShhQ3J1bWJbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGVzY2FwZShrZXlOYW1lKSArIFwiPVwiICsgZXNjYXBlKGtleVZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG52YXIgc3RiTnVsbCA9IG5ldyBTdGJOdWxsKCk7XHJcbmV4cG9ydCB7U3RiTnVsbCxzdGJOdWxsfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3N0Ym51bGwuanMiLCJ2YXIgbWQ1ID0gcmVxdWlyZSgnbWQ1Jyk7XHJcbnZhciBKU09OID0gcmVxdWlyZSgnSlNPTicpO1xyXG5cclxuaWYgKCFEYXRlLnByb3RvdHlwZS5mb3JtYXQpIHtcclxuICAgIERhdGUucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIChmbXQpIHtcclxuICAgICAgICBjb25zdCBvID0ge1xyXG4gICAgICAgICAgICBcIk0rXCI6IHRoaXMuZ2V0TW9udGgoKSArIDEsICAgICAgICAgICAgICAgICAvL+aciOS7vVxyXG4gICAgICAgICAgICBcImQrXCI6IHRoaXMuZ2V0RGF0ZSgpLCAgICAgICAgICAgICAgICAgICAgLy/ml6VcclxuICAgICAgICAgICAgXCJoK1wiOiB0aGlzLmdldEhvdXJzKCksICAgICAgICAgICAgICAgICAgIC8v5bCP5pe2XHJcbiAgICAgICAgICAgIFwibStcIjogdGhpcy5nZXRNaW51dGVzKCksICAgICAgICAgICAgICAgICAvL+WIhlxyXG4gICAgICAgICAgICBcInMrXCI6IHRoaXMuZ2V0U2Vjb25kcygpLCAgICAgICAgICAgICAgICAgLy/np5JcclxuICAgICAgICAgICAgXCJxK1wiOiBNYXRoLmZsb29yKCh0aGlzLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6plxyXG4gICAgICAgICAgICBcIlNcIjogdGhpcy5nZXRNaWxsaXNlY29uZHMoKSAgICAgICAgICAgICAvL+avq+enklxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKC8oeSspLy50ZXN0KGZtdCkpIHtcclxuICAgICAgICAgICAgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAodGhpcy5nZXRGdWxsWWVhcigpICsgXCJcIikuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGsgaW4gbykge1xyXG4gICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChcIihcIiArIGsgKyBcIilcIikudGVzdChmbXQpKSB7XHJcbiAgICAgICAgICAgICAgICBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsIChSZWdFeHAuJDEubGVuZ3RoID09IDEpID8gKG9ba10pIDogKChcIjAwXCIgKyBvW2tdKS5zdWJzdHIoKFwiXCIgKyBvW2tdKS5sZW5ndGgpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZtdDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlcXVlc3RCb2R5KCkge1xyXG4gICAgdGhpcy5hcHBJZCA9ICcnOyAgICAgICAgICAgICAgIC8vIOWIhumFjee7meW8gOWPkeiAheeahOW6lOeUqElEOjEwMDBcclxuICAgIHRoaXMubWV0aG9kID0gJyc7ICAgICAgICAgICAgICAvLyDmjqXlj6PlkI3np7A6dG9vZG8udHJhZGUucGF5XHJcbiAgICB0aGlzLmZvcm1hdCA9ICdKU09OJzsgICAgICAgICAgLy8g5LuF5pSv5oyBSlNPTlxyXG4gICAgdGhpcy5jaGFyc2V0ID0gJ3V0Zi04JzsgICAgICAgIC8vIOivt+axguS9v+eUqOeahOe8lueggeagvOW8j++8jOWmgnV0Zi04LGdiayxnYjIzMTLnrYlcclxuICAgIHRoaXMuc2lnblR5cGUgPSAnTUQ1JzsgICAgICAgICAvLyDllYbmiLfnlJ/miJDnrb7lkI3lrZfnrKbkuLLmiYDkvb/nlKjnmoTnrb7lkI3nrpfms5Xnsbvlnos6UlNB44CBTUQ1XHJcbiAgICB0aGlzLnNpZ25Db2RlID0gJyc7ICAgICAgICAgICAgLy8g5ZWG5oi36K+35rGC5Y+C5pWw55qE562+5ZCN5LiyIDMy5L2N5bCP5YaZXHJcbiAgICB0aGlzLnRpbWVzdGFtcCA9ICcnOyAgICAgICAgICAgLy8g5Y+R6YCB6K+35rGC55qE5pe26Ze077yM5qC85byPXCJ5eXl5LU1NLWRkIEhIOm1tOnNzXCI6MjAxNC0wNy0yNCAwMzowNzo1MFxyXG4gICAgdGhpcy52ZXJzaW9uID0gJzEuMCc7ICAgICAgICAgIC8vIOiwg+eUqOeahOaOpeWPo+eJiOacrO+8jOWbuuWumuS4uu+8mjEuMFxyXG4gICAgdGhpcy5hcHBBdXRoVG9rZW4gPSAnJzsgICAgICAgIC8vIOW6lOeUqOaOiOadg+eggVxyXG4gICAgdGhpcy5iaXpDb250ZW50ID0gJyc7ICAgICAgICAgIC8vIOS4muWKoeWPguaVsOmbhuWQiO+8jOacgOWkp+mVv+W6puS4jemZkO+8jOmZpOWFrOWFseWPguaVsOWkluaJgOacieivt+axguWPguaVsOmDveW/hemhu+aUvuWcqOi/meS4quWPguaVsOS4reS8oOmAku+8jOWFt+S9k+WPgueFp+WQhOS6p+WTgeW/q+mAn+aOpeWFpeaWh+aho1xyXG59XHJcblJlcXVlc3RCb2R5LnByb3RvdHlwZSA9IHtcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgICAgIHRoaXMuYXBwSWQgPSBib2R5LmFwcElkO1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gYm9keS5tZXRob2Q7XHJcbiAgICAgICAgdGhpcy5mb3JtYXQgPSBib2R5LmZvcm1hdDtcclxuICAgICAgICB0aGlzLmNoYXJzZXQgPSBib2R5LmNoYXJzZXQ7XHJcbiAgICAgICAgdGhpcy5zaWduVHlwZSA9IGJvZHkuc2lnblR5cGU7XHJcbiAgICAgICAgdGhpcy5zaWduQ29kZSA9IGJvZHkuc2lnbkNvZGU7XHJcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBib2R5LnRpbWVzdGFtcDtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBib2R5LnZlcnNpb247XHJcbiAgICAgICAgdGhpcy5hcHBBdXRoVG9rZW4gPSBib2R5LmFwcEF1dGhUb2tlbjtcclxuICAgICAgICB0aGlzLmJpekNvbnRlbnQgPSBib2R5LmJpekNvbnRlbnQ7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVzcG9uc2VCb2R5KCkge1xyXG4gICAgdGhpcy5jb2RlID0gMDsgICAgICAgLy8g572R5YWz6L+U5Zue56CBXHJcbiAgICB0aGlzLm1zZyA9ICfosIPnlKjmiJDlip8nOyAvLyDnvZHlhbPov5Tlm57noIHmj4/ov7BcclxuICAgIHRoaXMuc3ViQ29kZSA9ICcnOyAgIC8vIOS4muWKoei/lOWbnueggSzor6bop4HmlofmoaM6eHh4eFxyXG4gICAgdGhpcy5zdWJNc2cgPSAnJzsgICAgLy8g5Lia5Yqh6L+U5Zue56CB5o+P6L+wLOivpuingeaWh+ahozrkuqTmmJPlt7LooqvmlK/ku5hcclxuICAgIHRoaXMudGltZXN0YW1wID0gJyc7IC8vIOW6lOetlOeahOaXtumXtFxyXG4gICAgdGhpcy5zaWduID0gJyc7ICAgICAgLy8g562+5ZCNLOivpuingeaWh+ahoyAzMuS9jeWwj+WGmVxyXG4gICAgdGhpcy5iaXpDb250ZW50ID0gJyc7Ly8g5Lia5Yqh5Y+C5pWw6ZuG5ZCI77yM5pyA5aSn6ZW/5bqm5LiN6ZmQ77yM6Zmk5YWs5YWx5Y+C5pWw5aSW5omA5pyJ6L+U5Zue5Y+C5pWw6YO95b+F6aG75pS+5Zyo6L+Z5Liq5Y+C5pWw5Lit5Lyg6YCS77yM5YW35L2T5Y+C54Wn5ZCE5Lqn5ZOB5b+r6YCf5o6l5YWl5paH5qGjXHJcbiAgICB0aGlzLnRva2VuID0gJyc7ICAgICAvLyDmm7TmlrDlkI7nmoTmjojmnYPnoIEs5Li656m65YiZ5LiN5pu05pawXHJcbn1cclxuUmVzcG9uc2VCb2R5LnByb3RvdHlwZSA9IHtcclxuICAgIHBhcnNlOiBmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKGpzb24pO1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGJvZHkuY29kZTtcclxuICAgICAgICB0aGlzLm1zZyA9IGJvZHkubXNnO1xyXG4gICAgICAgIHRoaXMuc3ViQ29kZSA9IGJvZHkuc3ViQ29kZTtcclxuICAgICAgICB0aGlzLnN1Yk1zZyA9IGJvZHkuc3ViTXNnO1xyXG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gYm9keS50aW1lc3RhbXA7XHJcbiAgICAgICAgdGhpcy5zaWduID0gYm9keS5zaWduO1xyXG4gICAgICAgIHRoaXMuYml6Q29udGVudCA9IGJvZHkuYml6Q29udGVudDtcclxuICAgICAgICB0aGlzLnRva2VuID0gYm9keS50b2tlbjtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUb29kb0NsaWVudChhcHBJZCwgYXBwU2VjcmV0LCBhcGlVcmwpIHtcclxuICAgIHRoaXMuc3RhcnQoYXBwSWQsIGFwcFNlY3JldCwgYXBpVXJsKTtcclxuICAgIHRoaXMuaXNCdXN5ID0gZmFsc2U7XHJcbn1cclxuXHJcblRvb2RvQ2xpZW50LnByb3RvdHlwZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcElkXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwU2VjcmV0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBpVXJsXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoYXBwSWQsIGFwcFNlY3JldCwgYXBpVXJsKSB7XHJcbiAgICAgICAgdGhpcy5hcHBJZCA9IGFwcElkO1xyXG4gICAgICAgIHRoaXMuYXBwU2VjcmV0ID0gYXBwU2VjcmV0O1xyXG4gICAgICAgIHRoaXMuYXBpVXJsID0gYXBpVXJsO1xyXG4gICAgICAgIHRoaXMudG9rZW4gPSAnJztcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVxdWVzdEJvZHl9IGJvZHlJblxyXG4gICAgICovXHJcbiAgICBzaWduQ29kZUluOiBmdW5jdGlvbiAoYm9keUluKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gJycgK1xyXG4gICAgICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuICtcclxuICAgICAgICAgICAgYm9keUluLmFwcElkICtcclxuICAgICAgICAgICAgYm9keUluLmJpekNvbnRlbnQgK1xyXG4gICAgICAgICAgICBib2R5SW4uY2hhcnNldCArXHJcbiAgICAgICAgICAgIGJvZHlJbi5mb3JtYXQgK1xyXG4gICAgICAgICAgICBib2R5SW4ubWV0aG9kICtcclxuICAgICAgICAgICAgYm9keUluLnRpbWVzdGFtcCArXHJcbiAgICAgICAgICAgIGJvZHlJbi52ZXJzaW9uICtcclxuICAgICAgICAgICAgdGhpcy5hcHBTZWNyZXQ7XHJcbiAgICAgICAgcmV0dXJuIG1kNShzdHIpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXNwb25zZUJvZHl9IGJvZHlPdXRcclxuICAgICAqL1xyXG4gICAgc2lnbkNvZGVPdXQ6IGZ1bmN0aW9uIChib2R5T3V0KSB7XHJcbiAgICAgICAgaWYoYm9keU91dC50b2tlbj09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgYm9keU91dC50b2tlbj1cIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdHIgPSAnJyArXHJcbiAgICAgICAgICAgIGJvZHlPdXQuYml6Q29udGVudCArXHJcbiAgICAgICAgICAgIGJvZHlPdXQuY29kZSArXHJcbiAgICAgICAgICAgIGJvZHlPdXQubXNnICtcclxuICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlICtcclxuICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgK1xyXG4gICAgICAgICAgICBib2R5T3V0LnRpbWVzdGFtcCArXHJcbiAgICAgICAgICAgIGJvZHlPdXQudG9rZW4gK1xyXG4gICAgICAgICAgICB0aGlzLmFwcFNlY3JldDtcclxuICAgICAgICByZXR1cm4gbWQ1KHN0cik7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXBpVXJsXHJcbiAgICAgKi9cclxuICAgIHNldEFwaVVybDogZnVuY3Rpb24gKGFwaVVybCkge1xyXG4gICAgICAgIHRoaXMuYXBpVXJsID0gYXBpVXJsO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0Qm9keX0gYm9keUluXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtSZXNwb25zZUJvZHl9IGNhbGxiYWNrLmJvZHlPdXRcclxuICAgICAqL1xyXG4gICAgc2VuZDogZnVuY3Rpb24gKGJvZHlJbiwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5T3V0ID0gbmV3IFJlc3BvbnNlQm9keSgpO1xyXG4gICAgICAgIGlmICghWE1MSHR0cFJlcXVlc3QpIHtcclxuICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSA9ICcxMDUnO1xyXG4gICAgICAgICAgICBib2R5T3V0LnN1Yk1zZyA9ICdYTUxIdHRwUmVxdWVzdOWvueixoeS4jeWtmOWcqCc7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzQnVzeSkge1xyXG4gICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzk5JztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn5b6I5b+Z5ZOm77yM6K+35rGC6Zif5YiX5bey5ruhJztcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc0J1c3kgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGJvZHlJbi5hcHBBdXRoVG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy50b2tlbiA9IGJvZHlJbi5hcHBBdXRoVG9rZW47XHJcbiAgICAgICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJvZHlJbi5hcHBJZCA9IHRoaXMuYXBwSWQ7XHJcbiAgICAgICAgYm9keUluLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZm9ybWF0KFwieXl5eS1NTS1kZCBoaDptbTpzc1wiKTtcclxuICAgICAgICBib2R5SW4uc2lnbkNvZGUgPSB0aGlzLnNpZ25Db2RlSW4oYm9keUluKTtcclxuXHJcbiAgICAgICAgY29uc3QgeG1sID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgY29uc3Qgb3duZXIgPSB0aGlzO1xyXG5cclxuICAgICAgICBjb25zdCBoYW5kbGVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHhtbC5hYm9ydCgpO1xyXG4gICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzEwMyc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnID0gJ+ivt+axgui2heaXtic7XHJcblxyXG4gICAgICAgICAgICBvd25lci5pc0J1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0KTtcclxuICAgICAgICB9LCAxMDAwMCk7XHJcblxyXG4gICAgICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4bWwucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGFuZGxlVGltZW91dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHhtbC5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5wYXJzZSh4bWwucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHlPdXQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZDUgPSBvd25lci5zaWduQ29kZU91dChib2R5T3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZDUgIT0gYm9keU91dC5zaWduKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnN1YkNvZGUgPSAnMTAyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnN1Yk1zZyA9ICfov5Tlm57nu5Pmnpznrb7lkI3lh7rplJknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJvZHlPdXQudGltZXN0YW1wID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zaWduID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC50b2tlbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keU91dC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2R5T3V0LnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIudG9rZW4gPSBib2R5T3V0LnRva2VuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0Lm1zZyA9ICflrqLmiLfnq6/plJnor68nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LnN1YkNvZGUgPSAnMTAxJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn6L+U5Zue57uT5p6c5byC5bi4IGVycjonICsgZXJyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzEwNCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn6K+35rGC6L+U5Zue6ZSZ6K+vJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvd25lci5pc0J1c3kgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHRva2VuVXJsID0gdGhpcy5hcGlVcmwgKyAnP3Rva2VuPScgKyB0aGlzLnRva2VuO1xyXG4gICAgICAgIHhtbC5vcGVuKCdQT1NUJywgdG9rZW5VcmwsIHRydWUpO1xyXG4gICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcpO1xyXG4gICAgICAgIHhtbC5zZW5kKEpTT04uc3RyaW5naWZ5KGJvZHlJbikpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0Qm9keX0gYm9keUluXHJcbiAgICAgKi9cclxuICAgIHN1Ym1pdDogZnVuY3Rpb24gKGJvZHlJbikge1xyXG4gICAgICAgIGJvZHlJbi5hcHBJZCA9IHRoaXMuYXBwSWQ7XHJcbiAgICAgICAgYm9keUluLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZm9ybWF0KFwieXl5eS1NTS1kZCBoaDptbTpzc1wiKTtcclxuICAgICAgICBib2R5SW4uc2lnbkNvZGUgPSB0aGlzLnNpZ25Db2RlSW4oYm9keUluKTtcclxuXHJcbiAgICAgICAgY29uc3QgZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBib2R5SW4pIHtcclxuICAgICAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoYm9keUluW2tleV0pID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGVpLnR5cGUgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgZWkubmFtZSA9IGtleTtcclxuICAgICAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNVbmZpbHRlcmVkRm9ySW5Mb29wXHJcbiAgICAgICAgICAgIGVpLnZhbHVlID0gYm9keUluW2tleV07XHJcbiAgICAgICAgICAgIGYuYXBwZW5kQ2hpbGQoZWkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZi5tZXRob2QgPSAncG9zdCc7XHJcbiAgICAgICAgZi5hY3Rpb24gPSB0aGlzLmFwaVVybDtcclxuICAgICAgICBmLnN1Ym1pdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZik7XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3RkY2xpLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==