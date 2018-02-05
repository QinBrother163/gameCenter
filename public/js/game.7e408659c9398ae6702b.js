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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/***/ "./resources/assets/js/GamePage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");


var keyCode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["a" /* getKeyCodes */])();
var preCodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toodo_keycodes__["b" /* getCodes */])();

var itemSize = [[249, 404], [249, 404], [337, 200], [337, 177], [249, 404]];

function GamePage() {
    this.layout = document.getElementById('game-page');
    this.items = [];
    for (var i = 0; i < 5; ++i) {
        var node = this.layout.querySelector('#game-item' + i);
        this.items.push(node);

        setTimeout(function (i, node) {
            var img = node.querySelector('img');
            img.src = 'img/game/game' + i + '.png';
        }, 100 * i, i, node);
    }
}
GamePage.prototype = {
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
                    case 1:
                    case 2:
                    case 4:
                        owner.current--;
                        owner.setSelected(owner.current);
                        break;
                    case 3:
                        owner.current -= 2;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.right:
                switch (owner.current) {
                    case 0:
                    case 1:
                    case 3:
                        owner.current++;
                        owner.setSelected(owner.current);
                        break;
                    case 2:
                        owner.current += 2;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.up:
                switch (owner.current) {
                    case 3:
                        owner.current--;
                        owner.setSelected(owner.current);
                        break;
                }
                break;
            case keyCode.down:
                switch (owner.current) {
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

/***/ "./resources/assets/js/game.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toodo_retail__ = __webpack_require__("./resources/assets/js/toodo/_retail.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toodo_stbcli__ = __webpack_require__("./resources/assets/js/toodo/_stbcli.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toodo_keycodes__ = __webpack_require__("./resources/assets/js/toodo/_keycodes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_loading__ = __webpack_require__("./resources/assets/js/app/loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_dialog__ = __webpack_require__("./resources/assets/js/app/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_abc__ = __webpack_require__("./resources/assets/js/app/abc.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_childLock__ = __webpack_require__("./resources/assets/js/app/childLock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__HomeMenu__ = __webpack_require__("./resources/assets/js/HomeMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__GamePage__ = __webpack_require__("./resources/assets/js/GamePage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_PageUrl__ = __webpack_require__("./resources/assets/js/app/PageUrl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_PageArgs__ = __webpack_require__("./resources/assets/js/app/PageArgs.js");
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
                    gamePage.show(currentIndex, onPageKey);
                }
            }, 1, '提示', '没有找到用户信息哦！', '重试', '取消');
        } else {
            tdeUser = biz;
            gamePage.show(currentIndex, onPageKey);
        }
    });
}

function onQueryServe1(code, biz) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["a" /* hideLoading */])(function () {
        var itemInfo = itemInfos[currentIndex];
        if (code == 0 && biz && biz.productId == itemInfo.productId) {
            if (itemInfo.gameId == '10011') {
                __WEBPACK_IMPORTED_MODULE_9__app_PageUrl__["a" /* pageUrl */].callGameBase(itemInfo, window.location.href);
            } else {
                __WEBPACK_IMPORTED_MODULE_9__app_PageUrl__["a" /* pageUrl */].callGame(itemInfo, window.location.href);
            }
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('提示', '正在加载，请稍候...');
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["a" /* hideLoading */])(function () {
        var itemInfo = itemInfos[currentIndex];
        if (code == 0 && biz && biz.productId == itemInfo.prodId) {
            var cb = function cb(btn) {
                if (btn == 0) {
                    if (tdeUser.childLock) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__app_childLock__["a" /* showChildLock */])(function (code, msg) {
                            onValidLock(code, msg, gamePage, itemInfo);
                        }, 1, 0);
                    } else {
                        sendOrder(itemInfo);
                    }
                } else {
                    gamePage.show(currentIndex, onPageKey);
                }
            };

            //let text = '';
            //if (biz.category == 0) {
            //    text = '您将花费' + biz.price / 100 + '元/月订购' + biz.goodsName;
            //} else {
            //    text = '您将花费' + biz.price / 100 + '元购买' + biz.goodsName;
            //}
            //showDialog(cb, 0, '订购信息', text, '确认', '取消');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__app_dialogBigAd__["a" /* showAd29 */])(cb, 0, 29);
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_dialog__["a" /* showDialog */])(function (btn) {
                if (btn == 0) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('提示', '正在加载，请稍候...');
                    stbcli.queryProduct1(itemInfo.prodId, onQueryProduct1);
                } else {
                    gamePage.show(currentIndex, onPageKey);
                }
            }, 0, '提示', '没有找到产品信息哦！', '重试', '取消');
        }
    });
}

function onOrder1(code, biz) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["a" /* hideLoading */])(function () {
        var itemInfo = itemInfos[currentIndex];
        if (code == 0 && biz) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('提示', '正在处理，请稍候...');
            var callUrl;
            if (itemInfo.gameId == '10011') {
                callUrl = __WEBPACK_IMPORTED_MODULE_9__app_PageUrl__["a" /* pageUrl */].callUrlBase(itemInfo, window.location.href);
            } else {
                callUrl = __WEBPACK_IMPORTED_MODULE_9__app_PageUrl__["a" /* pageUrl */].callUrl(itemInfo, window.location.href);
            }
            __WEBPACK_IMPORTED_MODULE_10__app_PageArgs__["c" /* callbackArgs */].setRedirectUrl(callUrl);
            __WEBPACK_IMPORTED_MODULE_10__app_PageArgs__["c" /* callbackArgs */].setReturnUrl(window.location.href);
            stbcli.pay(biz.tradeNo);
        } else {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_dialog__["a" /* showDialog */])(function (btn) {
                if (btn == 0) {
                    sendOrder(itemInfo);
                } else {
                    gamePage.show(currentIndex, onPageKey);
                }
            }, 0, '订单提示', '小双服务开小差啦，请稍后重试。', '重试', '返回');
        }
    });
}

function onMenuKey(key) {
    switch (key) {
        case keyCode.down:
            homeMenu.hide();
            gamePage.show(currentIndex, onPageKey);
            break;
        case keyCode.ok:
            if (homeMenu.current == 2) {
                __WEBPACK_IMPORTED_MODULE_10__app_PageArgs__["b" /* appArgs */].onHomePage();
            }
            break;
        case keyCode.num0:
        case keyCode.back:
            __WEBPACK_IMPORTED_MODULE_10__app_PageArgs__["b" /* appArgs */].onHomePage();
            break;
    }
}

function onPageKey(key) {
    switch (key) {
        case keyCode.up:
            if (currentIndex != 3) {
                gamePage.hide();
                homeMenu.show(homeMenu.current, onMenuKey, tdeUser);
                //homeMenu.show(homeMenu.current, onMenuKey);
            }
            break;
        case keyCode.ok:
            if (!stbcli.isReady) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('自动登陆', '小双在使劲加载，请稍候...');
                stbcli.start(onStart);
                break;
            }
            var itemInfo = itemInfos[currentIndex];
            if (itemInfo.productId == 3 && !canVideo()) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_dialog__["a" /* showDialog */])(function (btn) {
                    gamePage.show(currentIndex, onPageKey);
                }, 1, '敬请期待', '该机顶盒型号暂不支持体感热舞游戏,请联系96335更换机顶盒.', '确定', '取消', 'left');
                break;
            }
            if (itemInfo.trial == 1) {
                if (itemInfo.gameId == '10011') {
                    __WEBPACK_IMPORTED_MODULE_9__app_PageUrl__["a" /* pageUrl */].callGameBase(itemInfo, window.location.href);
                } else {
                    __WEBPACK_IMPORTED_MODULE_9__app_PageUrl__["a" /* pageUrl */].callGame(itemInfo, window.location.href);
                }
                break;
            }
            if (itemInfo.trial == 2) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__app_dialog__["a" /* showDialog */])(function (btn) {
                    gamePage.show(currentIndex, onPageKey);
                }, 1, '敬请期待', '服务暂未开通哦！', '确定', '取消');
                break;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__app_loading__["b" /* showLoading */])('提示', '正在加载，请稍候...');
            stbcli.queryServe1(itemInfo.productId, onQueryServe1);
            break;
        case keyCode.num0:
        case keyCode.back:
            __WEBPACK_IMPORTED_MODULE_10__app_PageArgs__["b" /* appArgs */].onHomePage();
            break;
        case keyCode.esc:
            __WEBPACK_IMPORTED_MODULE_10__app_PageArgs__["b" /* appArgs */].onFirstPage();
            break;
    }
    currentIndex = gamePage.current;
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
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__app_childLock__["a" /* showChildLock */])(function (code, msg) {
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
var gamePage;
var itemInfos = [];
var currentIndex;
var tdeUser;

window.onload = function () {
    homeMenu = new __WEBPACK_IMPORTED_MODULE_7__HomeMenu__["a" /* HomeMenu */]();

    gamePage = new __WEBPACK_IMPORTED_MODULE_8__GamePage__["a" /* GamePage */]();
    currentIndex = gamePage.current;
    gamePage.show(currentIndex, onPageKey);

    var ts = new Date().getTime();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__app_abc__["a" /* getJSON */])("data/tde_game_infos.json?ts=" + ts, function (data) {
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/game.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWM5ZGYyNTE1YTkxYWUzNmIyZjEiLCJ3ZWJwYWNrOi8vLy4vfi9fSlNPTkAxLjAuMEBKU09OL2pzb24yLmpzPzI5ZjkqKioqIiwid2VicGFjazovLy8uL34vX2NoYXJlbmNAMC4wLjJAY2hhcmVuYy9jaGFyZW5jLmpzP2M4YzEqKioqIiwid2VicGFjazovLy8uL34vX2NyeXB0QDAuMC4yQGNyeXB0L2NyeXB0LmpzP2Q5MzQqKioqIiwid2VicGFjazovLy8uL34vX2lzLWJ1ZmZlckAxLjEuNkBpcy1idWZmZXIvaW5kZXguanM/NWViYSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9fbWQ1QDIuMi4xQG1kNS9tZDUuanM/Nzk5NyoqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9HYW1lUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0hvbWVNZW51LmpzP2UzOGEqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL1BhZ2VBcmdzLmpzP2M3YTIqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL1BhZ2VVcmwuanM/NDU0OSoiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvYWJjLmpzPzU3MjYqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2NoaWxkTG9jay5qcz9iZmUwKioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9jaGlsZE1lbnUuanM/NDRjYSoqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvZGlhbG9nLmpzPzJjYmMqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2RpYWxvZ0JpZ0FkLmpzPzBmMGUqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9sb2FkaW5nLmpzPzlhMDQqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19rZXljb2Rlcy5qcz9iOTA4KioqKiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19yZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fc3RiY2xpLmpzP2YyNTkqKioqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3N0Ym51bGwuanM/NDdlNCoqKioiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy90b29kby9fdGRjbGkuanM/MThlZioqKioiXSwibmFtZXMiOlsia2V5Q29kZSIsImdldEtleUNvZGVzIiwicHJlQ29kZXMiLCJnZXRDb2RlcyIsIml0ZW1TaXplIiwiR2FtZVBhZ2UiLCJsYXlvdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaXRlbXMiLCJpIiwibm9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJwdXNoIiwic2V0VGltZW91dCIsImltZyIsInNyYyIsInByb3RvdHlwZSIsImN1cnJlbnQiLCJvbktleURvd24iLCJzaG93Iiwic2V0U2VsZWN0ZWQiLCJvd25lciIsIm9ua2V5ZG93biIsImUiLCJoYW5kbGVLZXkiLCJoaWRlIiwiX3NldEZvY3VzIiwiZm9jdXMiLCJzdHlsZSIsInpJbmRleCIsInNpemUiLCJkaXYiLCJkaXNwbGF5Iiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwibGVuZ3RoIiwiZ2V0RXZlbnQiLCJjdXJLZXkiLCJnZXRLZXkiLCJpbmRleE9mIiwicHJldmVudERlZmF1bHQiLCJyaWdodCIsInVwIiwiZG93biIsIkhvbWVNZW51IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsInRkZVVzZXIiLCJvayIsImFwcEFyZ3MiLCJvbkZpcnN0UGFnZSIsIm9uSG9tZVBhZ2UiLCJvbGRMb2NrIiwiY2hpbGRMb2NrIiwiY2hpbGRNZW51IiwiYnRuIiwic2hvd0NoaWxkTG9jayIsImNvZGUiLCJtc2ciLCJvblZhbGlkTG9jayIsInJlc2V0Q2hpbGRMb2NrIiwib25UdXJudGFibGVQYWdlIiwiZXNjIiwic3RiY2xpIiwidGRlTG9jayIsImJpeiIsInRleHQiLCJvblRkZUxvY2siLCJzaG93RGlhbG9nIiwiZGxnQnRuIiwibmV3TG9jayIsImFyZ3VtZW50cyIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJQYWdlQXJncyIsInBhZ2UiLCJwcmVmaXgiLCJnZXRWYWx1ZSIsImsiLCJzdGJOdWxsIiwic2V0VmFsdWUiLCJ2IiwiZ2V0UmV0dXJuVXJsIiwic2V0UmV0dXJuVXJsIiwidXJsIiwiZ2V0UmVkaXJlY3RVcmwiLCJzZXRSZWRpcmVjdFVybCIsInNldENhbGxGbGFnIiwibnVtIiwiZ2V0Q2FsbEZsYWciLCJzZXRTdWNjZXNzQ29kZSIsInN1Y2Nlc3NDb2RlIiwiZ2V0U3VjY2Vzc0NvZGUiLCJzZXRQcml6ZUlEIiwiaWQiLCJnZXRQcml6ZUlEIiwiZ2V0VHVybnRhYmxlVXJsIiwic2V0VHVybnRhYmxlVXJsIiwic2hvcEFyZ3MiLCJyZWNoYXJnZUFyZ3MiLCJjYWxsYmFja0FyZ3MiLCJ0dXJuVGFibGVBcmdzIiwiZmlyc3RVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJob21lVXJsIiwiVHVybnRhYmxlVXJsIiwiUGFnZVVybCIsInBhcnNlUXVlcnkiLCJxdWVyeSIsInN0YXJ0Iiwic2xpY2UiLCJhcmdzIiwiYXJyIiwic3BsaXQiLCJtIiwidG1wIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VBcmdzIiwiaGFzT3duUHJvcGVydHkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwiYmFzZVVybCIsInByb3RvY29sIiwiaG9zdCIsImdldFVzZXJJZCIsImdldFN0YklkIiwiZ2V0Q2FyZFRWIiwiZ2V0U2lnbktleSIsInRzIiwiRGF0ZSIsImdldFRpbWUiLCJtZDUiLCJnZXRDaGlsZExvY2siLCJyZWNoYXJnZVVybCIsImNhbGxVcmwiLCJpdGVtIiwicmV0dXJuVXJsIiwiZ2FtZWlkIiwiZ2FtZUlkIiwia2V5IiwiZGV2IiwiZmF0aGVya2V5IiwidXNlcklkIiwidXNlcmlkIiwicmV0dXJuVVJMIiwiaG9zdE5hbWUiLCJob3N0bmFtZSIsImRzdFVybCIsInJlcGxhY2UiLCJwYXJhbXMiLCJyZWRpcmVjdFVybCIsImNhbGxVcmxCYXNlIiwiY2FsbEdhbWUiLCJjYWxsR2FtZUJhc2UiLCJwYWdlVXJsIiwiZ2V0SlNPTiIsImNiIiwicmVxIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsIml0ZW1zQXJyIiwiZXZhbCIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJkZWxheUJhY2tncm91bmQiLCJkZWxheSIsImJhY2tncm91bmRJbWFnZSIsImNhbGxiYWNrIiwidGl0bGUiLCJsYWJlbCIsInRpcHMiLCJsYXlvdXRJZCIsImxvY2tUZXh0IiwibG9ja1RpdGxlIiwibG9ja0xhYmVsIiwibG9ja1RpcHMiLCJpbm5lclRleHQiLCJpdGVtTm9kZXMiLCJudW0xIiwibnVtMiIsIm51bTMiLCJudW00IiwibnVtNSIsIm51bTYiLCJudW03IiwibnVtOCIsIm51bTkiLCJiYWNrIiwibnVtMCIsImlucHV0VGV4dCIsImN1cklkeCIsImZvckVhY2giLCJpdGVtTm9kZSIsImluZGV4Iiwic3VibWl0IiwiaW52aXNpYmxlIiwic3RhciIsImNsaWNrTnVtIiwiU3RyaW5nIiwiYmFja3NwYWNlIiwic3Vic3RyaW5nIiwiaGFuZGxlT2siLCJDaGlsZE1lbnUiLCJjbnQiLCJiZyIsImJ0bk5vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImJ0bk5vZGUiLCJidG5Ob2RlMCIsImJ0bk5vZGUxIiwidGlwTm9kZSIsImZvY3VzQnRuIiwiYnRuSWR4IiwiZm9jdXNOb2RlIiwiYnRuMCIsImJ0bjEiLCJhbGlnbiIsImJhY2tncm91bmQiLCJub2RlVGl0bGUiLCJub2RlVGV4dCIsInRleHRBbGlnbiIsIm5vZGVCdG4wIiwibm9kZUJ0bjEiLCJidG5fMDA2IiwiYnRuXzAwNm5vbmUiLCJzaG93QWQxNiIsInNob3dBZDI5IiwiYWQiLCJsb2FkVGltZSIsInNob3dUaW1lIiwibm9kZUJnIiwiZGVsYXlUaW1lIiwidGltZSIsImNhbGxiYWNrVXJsIiwib25TdGFydCIsImdhbWVQYWdlIiwiY3VycmVudEluZGV4Iiwib25QYWdlS2V5Iiwib25RdWVyeVNlcnZlMSIsIml0ZW1JbmZvIiwiaXRlbUluZm9zIiwicHJvZHVjdElkIiwicXVlcnlQcm9kdWN0MSIsInByb2RJZCIsIm9uUXVlcnlQcm9kdWN0MSIsInNlbmRPcmRlciIsIm9uT3JkZXIxIiwicGF5IiwidHJhZGVObyIsIm9uTWVudUtleSIsImhvbWVNZW51IiwiaXNSZWFkeSIsImNhblZpZGVvIiwidHJpYWwiLCJxdWVyeVNlcnZlMSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwib3JkZXIxIiwicmV0YWlsSWQiLCJyZXRhaWwiLCJneGdkIiwiZW1iZWQiLCJpUGFuZWwiLCJnZXRHbG9iYWxWYXIiLCJvbmxvYWQiLCJrZXlNYXAiLCJmMSIsImYyIiwiZjMiLCJmNCIsIm11dGUiLCJ0cmFjayIsInZvbFVwIiwidm9sRG93biIsImZhdiIsInBsYXlCYWNrIiwicGFnZVVwIiwicGFnZURvd24iLCJtZW51IiwiaG9tZSIsImhueXgiLCJnZGdkIiwiZXZ0IiwiZXZlbnQiLCJ3aGljaCIsImNoYXJDb2RlIiwiY29kZXMiLCJub25lIiwiZ2V0UmV0YWlsSWQiLCJndWFuZ3hpIiwiU3lzdGVtIiwic3RiSUQiLCJDQSIsIlN0b3JhZ2VTZXJ2aWNlIiwiRmlsZVN5c3RlbSIsInJlcXVpcmUiLCJTdGJDbGllbnQiLCJvcmlnaW5VcmwiLCJhcHBLZXkiLCJhcHBTZWNyZXQiLCJfdGRjbGkiLCJ0b2tlbiIsImJpekluIiwiZ2V0UmVnaW9uQ29kZSIsImJvZHlJbiIsIm1ldGhvZCIsImFwcEF1dGhUb2tlbiIsImJpekNvbnRlbnQiLCJzZXRBcGlVcmwiLCJib2R5T3V0IiwiYml6T3V0IiwicGFyc2UiLCJiaXpVc2VyIiwic3ViQ29kZSIsImFkZFdpbm5lciIsInByaXplSUQiLCJzdGF0ZSIsImFkZFN0YXRlIiwidXBkYXRhRnJlZVN0YXRlIiwiZ2V0UHJpemUiLCJ0dXJudGFibGVTdGF0ZSIsInR1cm50YWJsZVBybyIsInR5cGUiLCJwcml6ZU51bSIsIndpbm5lckluZm8iLCJ1c2VyV2lubmVyIiwiYWRkQ29pbnMiLCJhZGROdW0iLCJiaWxsIiwidGRlUGFnZSIsInRkYVNvbmciLCJjYXRlZ29yeSIsInRkYVNvbmcxIiwic29uZ0lkIiwidGRhTWF0Y2giLCJ0ZGFVc2VyIiwidGRhUmVjb3JkIiwicmVjb3JkIiwiU3RiTnVsbCIsImdldFN0Yk51bSIsImtleU5hbWUiLCJyZXN1bHQiLCJhQ29va2llIiwiY29va2llIiwiYUNydW1iIiwiZXNjYXBlIiwidW5lc2NhcGUiLCJrZXlWYWx1ZSIsInNldEdsb2JhbFZhciIsInJlZ2lvbiIsIkdldENBUmVnaW9uSUQiLCJnIiwiR2xvYmFsIiwiR2xvYmFsMiIsInZhbHVlIiwiaWNObyIsInJlZ2lvbkNvZGUiLCJTeXNTZXR0aW5nIiwiZ2V0RW52Iiwic2V0RW52IiwiZm9ybWF0IiwiZm10IiwibyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJnZXRNaWxsaXNlY29uZHMiLCJ0ZXN0IiwiUmVnRXhwIiwiJDEiLCJnZXRGdWxsWWVhciIsInN1YnN0ciIsIlJlcXVlc3RCb2R5IiwiYXBwSWQiLCJjaGFyc2V0Iiwic2lnblR5cGUiLCJzaWduQ29kZSIsInRpbWVzdGFtcCIsInZlcnNpb24iLCJqc29uIiwiUmVzcG9uc2VCb2R5Iiwic3ViTXNnIiwic2lnbiIsIlRvb2RvQ2xpZW50IiwiYXBpVXJsIiwiaXNCdXN5Iiwic2lnbkNvZGVJbiIsInN0ciIsInNpZ25Db2RlT3V0IiwidW5kZWZpbmVkIiwieG1sIiwiaGFuZGxlVGltZW91dCIsImFib3J0IiwiY2xlYXJUaW1lb3V0Iiwic3RhdHVzIiwiZXJyIiwidG9rZW5VcmwiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiZiIsImVpIiwibmFtZSIsImFjdGlvbiIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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LDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7OztBQy9GRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixjQUFjOztBQUVqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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O0FBQ0g7O0FBRURELFVBQUVqRyxNQUFGLEdBQVcsTUFBWDtBQUNBaUcsVUFBRUcsTUFBRixHQUFXLEtBQUtqQixNQUFoQjtBQUNBYyxVQUFFak4sTUFBRjtBQUNBck0saUJBQVMwQyxJQUFULENBQWNnWCxXQUFkLENBQTBCSixDQUExQjtBQUNIO0FBckxtQixDQUF4QixDIiwiZmlsZSI6ImpzL2dhbWUuN2U0MDg2NTljOTM5OGFlNjcwMmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVjOWRmMjUxNWE5MWFlMzZiMmYxIiwiLypcbiAgICBodHRwOi8vd3d3LkpTT04ub3JnL2pzb24yLmpzXG4gICAgMjAxMS0wMi0yM1xuXG4gICAgUHVibGljIERvbWFpbi5cblxuICAgIE5PIFdBUlJBTlRZIEVYUFJFU1NFRCBPUiBJTVBMSUVELiBVU0UgQVQgWU9VUiBPV04gUklTSy5cblxuICAgIFNlZSBodHRwOi8vd3d3LkpTT04ub3JnL2pzLmh0bWxcblxuXG4gICAgVGhpcyBjb2RlIHNob3VsZCBiZSBtaW5pZmllZCBiZWZvcmUgZGVwbG95bWVudC5cbiAgICBTZWUgaHR0cDovL2phdmFzY3JpcHQuY3JvY2tmb3JkLmNvbS9qc21pbi5odG1sXG5cbiAgICBVU0UgWU9VUiBPV04gQ09QWS4gSVQgSVMgRVhUUkVNRUxZIFVOV0lTRSBUTyBMT0FEIENPREUgRlJPTSBTRVJWRVJTIFlPVSBET1xuICAgIE5PVCBDT05UUk9MLlxuXG5cbiAgICBUaGlzIGZpbGUgY3JlYXRlcyBhIGdsb2JhbCBKU09OIG9iamVjdCBjb250YWluaW5nIHR3byBtZXRob2RzOiBzdHJpbmdpZnlcbiAgICBhbmQgcGFyc2UuXG5cbiAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSlcbiAgICAgICAgICAgIHZhbHVlICAgICAgIGFueSBKYXZhU2NyaXB0IHZhbHVlLCB1c3VhbGx5IGFuIG9iamVjdCBvciBhcnJheS5cblxuICAgICAgICAgICAgcmVwbGFjZXIgICAgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgZGV0ZXJtaW5lcyBob3cgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgYXJlIHN0cmluZ2lmaWVkIGZvciBvYmplY3RzLiBJdCBjYW4gYmUgYVxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncy5cblxuICAgICAgICAgICAgc3BhY2UgICAgICAgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgc3BlY2lmaWVzIHRoZSBpbmRlbnRhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgb2YgbmVzdGVkIHN0cnVjdHVyZXMuIElmIGl0IGlzIG9taXR0ZWQsIHRoZSB0ZXh0IHdpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlIHBhY2tlZCB3aXRob3V0IGV4dHJhIHdoaXRlc3BhY2UuIElmIGl0IGlzIGEgbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXQgd2lsbCBzcGVjaWZ5IHRoZSBudW1iZXIgb2Ygc3BhY2VzIHRvIGluZGVudCBhdCBlYWNoXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbC4gSWYgaXQgaXMgYSBzdHJpbmcgKHN1Y2ggYXMgJ1xcdCcgb3IgJyZuYnNwOycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXQgY29udGFpbnMgdGhlIGNoYXJhY3RlcnMgdXNlZCB0byBpbmRlbnQgYXQgZWFjaCBsZXZlbC5cblxuICAgICAgICAgICAgVGhpcyBtZXRob2QgcHJvZHVjZXMgYSBKU09OIHRleHQgZnJvbSBhIEphdmFTY3JpcHQgdmFsdWUuXG5cbiAgICAgICAgICAgIFdoZW4gYW4gb2JqZWN0IHZhbHVlIGlzIGZvdW5kLCBpZiB0aGUgb2JqZWN0IGNvbnRhaW5zIGEgdG9KU09OXG4gICAgICAgICAgICBtZXRob2QsIGl0cyB0b0pTT04gbWV0aG9kIHdpbGwgYmUgY2FsbGVkIGFuZCB0aGUgcmVzdWx0IHdpbGwgYmVcbiAgICAgICAgICAgIHN0cmluZ2lmaWVkLiBBIHRvSlNPTiBtZXRob2QgZG9lcyBub3Qgc2VyaWFsaXplOiBpdCByZXR1cm5zIHRoZVxuICAgICAgICAgICAgdmFsdWUgcmVwcmVzZW50ZWQgYnkgdGhlIG5hbWUvdmFsdWUgcGFpciB0aGF0IHNob3VsZCBiZSBzZXJpYWxpemVkLFxuICAgICAgICAgICAgb3IgdW5kZWZpbmVkIGlmIG5vdGhpbmcgc2hvdWxkIGJlIHNlcmlhbGl6ZWQuIFRoZSB0b0pTT04gbWV0aG9kXG4gICAgICAgICAgICB3aWxsIGJlIHBhc3NlZCB0aGUga2V5IGFzc29jaWF0ZWQgd2l0aCB0aGUgdmFsdWUsIGFuZCB0aGlzIHdpbGwgYmVcbiAgICAgICAgICAgIGJvdW5kIHRvIHRoZSB2YWx1ZVxuXG4gICAgICAgICAgICBGb3IgZXhhbXBsZSwgdGhpcyB3b3VsZCBzZXJpYWxpemUgRGF0ZXMgYXMgSVNPIHN0cmluZ3MuXG5cbiAgICAgICAgICAgICAgICBEYXRlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGYobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9ybWF0IGludGVnZXJzIHRvIGhhdmUgYXQgbGVhc3QgdHdvIGRpZ2l0cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuIDogbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFVUQ0Z1bGxZZWFyKCkgICArICctJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ01vbnRoKCkgKyAxKSArICctJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ0RhdGUoKSkgICAgICArICdUJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ0hvdXJzKCkpICAgICArICc6JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ01pbnV0ZXMoKSkgICArICc6JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ1NlY29uZHMoKSkgICArICdaJztcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWwgcmVwbGFjZXIgbWV0aG9kLiBJdCB3aWxsIGJlIHBhc3NlZCB0aGVcbiAgICAgICAgICAgIGtleSBhbmQgdmFsdWUgb2YgZWFjaCBtZW1iZXIsIHdpdGggdGhpcyBib3VuZCB0byB0aGUgY29udGFpbmluZ1xuICAgICAgICAgICAgb2JqZWN0LiBUaGUgdmFsdWUgdGhhdCBpcyByZXR1cm5lZCBmcm9tIHlvdXIgbWV0aG9kIHdpbGwgYmVcbiAgICAgICAgICAgIHNlcmlhbGl6ZWQuIElmIHlvdXIgbWV0aG9kIHJldHVybnMgdW5kZWZpbmVkLCB0aGVuIHRoZSBtZW1iZXIgd2lsbFxuICAgICAgICAgICAgYmUgZXhjbHVkZWQgZnJvbSB0aGUgc2VyaWFsaXphdGlvbi5cblxuICAgICAgICAgICAgSWYgdGhlIHJlcGxhY2VyIHBhcmFtZXRlciBpcyBhbiBhcnJheSBvZiBzdHJpbmdzLCB0aGVuIGl0IHdpbGwgYmVcbiAgICAgICAgICAgIHVzZWQgdG8gc2VsZWN0IHRoZSBtZW1iZXJzIHRvIGJlIHNlcmlhbGl6ZWQuIEl0IGZpbHRlcnMgdGhlIHJlc3VsdHNcbiAgICAgICAgICAgIHN1Y2ggdGhhdCBvbmx5IG1lbWJlcnMgd2l0aCBrZXlzIGxpc3RlZCBpbiB0aGUgcmVwbGFjZXIgYXJyYXkgYXJlXG4gICAgICAgICAgICBzdHJpbmdpZmllZC5cblxuICAgICAgICAgICAgVmFsdWVzIHRoYXQgZG8gbm90IGhhdmUgSlNPTiByZXByZXNlbnRhdGlvbnMsIHN1Y2ggYXMgdW5kZWZpbmVkIG9yXG4gICAgICAgICAgICBmdW5jdGlvbnMsIHdpbGwgbm90IGJlIHNlcmlhbGl6ZWQuIFN1Y2ggdmFsdWVzIGluIG9iamVjdHMgd2lsbCBiZVxuICAgICAgICAgICAgZHJvcHBlZDsgaW4gYXJyYXlzIHRoZXkgd2lsbCBiZSByZXBsYWNlZCB3aXRoIG51bGwuIFlvdSBjYW4gdXNlXG4gICAgICAgICAgICBhIHJlcGxhY2VyIGZ1bmN0aW9uIHRvIHJlcGxhY2UgdGhvc2Ugd2l0aCBKU09OIHZhbHVlcy5cbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHVuZGVmaW5lZCkgcmV0dXJucyB1bmRlZmluZWQuXG5cbiAgICAgICAgICAgIFRoZSBvcHRpb25hbCBzcGFjZSBwYXJhbWV0ZXIgcHJvZHVjZXMgYSBzdHJpbmdpZmljYXRpb24gb2YgdGhlXG4gICAgICAgICAgICB2YWx1ZSB0aGF0IGlzIGZpbGxlZCB3aXRoIGxpbmUgYnJlYWtzIGFuZCBpbmRlbnRhdGlvbiB0byBtYWtlIGl0XG4gICAgICAgICAgICBlYXNpZXIgdG8gcmVhZC5cblxuICAgICAgICAgICAgSWYgdGhlIHNwYWNlIHBhcmFtZXRlciBpcyBhIG5vbi1lbXB0eSBzdHJpbmcsIHRoZW4gdGhhdCBzdHJpbmcgd2lsbFxuICAgICAgICAgICAgYmUgdXNlZCBmb3IgaW5kZW50YXRpb24uIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBudW1iZXIsIHRoZW5cbiAgICAgICAgICAgIHRoZSBpbmRlbnRhdGlvbiB3aWxsIGJlIHRoYXQgbWFueSBzcGFjZXMuXG5cbiAgICAgICAgICAgIEV4YW1wbGU6XG5cbiAgICAgICAgICAgIHRleHQgPSBKU09OLnN0cmluZ2lmeShbJ2UnLCB7cGx1cmlidXM6ICd1bnVtJ31dKTtcbiAgICAgICAgICAgIC8vIHRleHQgaXMgJ1tcImVcIix7XCJwbHVyaWJ1c1wiOlwidW51bVwifV0nXG5cblxuICAgICAgICAgICAgdGV4dCA9IEpTT04uc3RyaW5naWZ5KFsnZScsIHtwbHVyaWJ1czogJ3VudW0nfV0sIG51bGwsICdcXHQnKTtcbiAgICAgICAgICAgIC8vIHRleHQgaXMgJ1tcXG5cXHRcImVcIixcXG5cXHR7XFxuXFx0XFx0XCJwbHVyaWJ1c1wiOiBcInVudW1cIlxcblxcdH1cXG5dJ1xuXG4gICAgICAgICAgICB0ZXh0ID0gSlNPTi5zdHJpbmdpZnkoW25ldyBEYXRlKCldLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2tleV0gaW5zdGFuY2VvZiBEYXRlID9cbiAgICAgICAgICAgICAgICAgICAgJ0RhdGUoJyArIHRoaXNba2V5XSArICcpJyA6IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0ZXh0IGlzICdbXCJEYXRlKC0tLWN1cnJlbnQgdGltZS0tLSlcIl0nXG5cblxuICAgICAgICBKU09OLnBhcnNlKHRleHQsIHJldml2ZXIpXG4gICAgICAgICAgICBUaGlzIG1ldGhvZCBwYXJzZXMgYSBKU09OIHRleHQgdG8gcHJvZHVjZSBhbiBvYmplY3Qgb3IgYXJyYXkuXG4gICAgICAgICAgICBJdCBjYW4gdGhyb3cgYSBTeW50YXhFcnJvciBleGNlcHRpb24uXG5cbiAgICAgICAgICAgIFRoZSBvcHRpb25hbCByZXZpdmVyIHBhcmFtZXRlciBpcyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGZpbHRlciBhbmRcbiAgICAgICAgICAgIHRyYW5zZm9ybSB0aGUgcmVzdWx0cy4gSXQgcmVjZWl2ZXMgZWFjaCBvZiB0aGUga2V5cyBhbmQgdmFsdWVzLFxuICAgICAgICAgICAgYW5kIGl0cyByZXR1cm4gdmFsdWUgaXMgdXNlZCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCB2YWx1ZS5cbiAgICAgICAgICAgIElmIGl0IHJldHVybnMgd2hhdCBpdCByZWNlaXZlZCwgdGhlbiB0aGUgc3RydWN0dXJlIGlzIG5vdCBtb2RpZmllZC5cbiAgICAgICAgICAgIElmIGl0IHJldHVybnMgdW5kZWZpbmVkIHRoZW4gdGhlIG1lbWJlciBpcyBkZWxldGVkLlxuXG4gICAgICAgICAgICBFeGFtcGxlOlxuXG4gICAgICAgICAgICAvLyBQYXJzZSB0aGUgdGV4dC4gVmFsdWVzIHRoYXQgbG9vayBsaWtlIElTTyBkYXRlIHN0cmluZ3Mgd2lsbFxuICAgICAgICAgICAgLy8gYmUgY29udmVydGVkIHRvIERhdGUgb2JqZWN0cy5cblxuICAgICAgICAgICAgbXlEYXRhID0gSlNPTi5wYXJzZSh0ZXh0LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBhO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPVxuL14oXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KVQoXFxkezJ9KTooXFxkezJ9KTooXFxkezJ9KD86XFwuXFxkKik/KVokLy5leGVjKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQygrYVsxXSwgK2FbMl0gLSAxLCArYVszXSwgK2FbNF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgK2FbNV0sICthWzZdKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG15RGF0YSA9IEpTT04ucGFyc2UoJ1tcIkRhdGUoMDkvMDkvMjAwMSlcIl0nLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBkO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zbGljZSgwLCA1KSA9PT0gJ0RhdGUoJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2xpY2UoLTEpID09PSAnKScpIHtcbiAgICAgICAgICAgICAgICAgICAgZCA9IG5ldyBEYXRlKHZhbHVlLnNsaWNlKDUsIC0xKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgVGhpcyBpcyBhIHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbi4gWW91IGFyZSBmcmVlIHRvIGNvcHksIG1vZGlmeSwgb3JcbiAgICByZWRpc3RyaWJ1dGUuXG4qL1xuXG4vKmpzbGludCBldmlsOiB0cnVlLCBzdHJpY3Q6IGZhbHNlLCByZWdleHA6IGZhbHNlICovXG5cbi8qbWVtYmVycyBcIlwiLCBcIlxcYlwiLCBcIlxcdFwiLCBcIlxcblwiLCBcIlxcZlwiLCBcIlxcclwiLCBcIlxcXCJcIiwgSlNPTiwgXCJcXFxcXCIsIGFwcGx5LFxuICAgIGNhbGwsIGNoYXJDb2RlQXQsIGdldFVUQ0RhdGUsIGdldFVUQ0Z1bGxZZWFyLCBnZXRVVENIb3VycyxcbiAgICBnZXRVVENNaW51dGVzLCBnZXRVVENNb250aCwgZ2V0VVRDU2Vjb25kcywgaGFzT3duUHJvcGVydHksIGpvaW4sXG4gICAgbGFzdEluZGV4LCBsZW5ndGgsIHBhcnNlLCBwcm90b3R5cGUsIHB1c2gsIHJlcGxhY2UsIHNsaWNlLCBzdHJpbmdpZnksXG4gICAgdGVzdCwgdG9KU09OLCB0b1N0cmluZywgdmFsdWVPZlxuKi9cblxuXG4vLyBDcmVhdGUgYSBKU09OIG9iamVjdCBvbmx5IGlmIG9uZSBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0LiBXZSBjcmVhdGUgdGhlXG4vLyBtZXRob2RzIGluIGEgY2xvc3VyZSB0byBhdm9pZCBjcmVhdGluZyBnbG9iYWwgdmFyaWFibGVzLlxuXG52YXIgSlNPTjtcbmlmICghSlNPTikge1xuICAgIEpTT04gPSB7fTtcbn1cblxuKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBnbG9iYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpXG4gICAgICAsIEpTT04gPSBnbG9iYWwuSlNPTlxuICAgICAgO1xuXG4gICAgaWYgKCFKU09OKSB7XG4gICAgICBKU09OID0ge307XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZihuKSB7XG4gICAgICAgIC8vIEZvcm1hdCBpbnRlZ2VycyB0byBoYXZlIGF0IGxlYXN0IHR3byBkaWdpdHMuXG4gICAgICAgIHJldHVybiBuIDwgMTAgPyAnMCcgKyBuIDogbjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIERhdGUucHJvdG90eXBlLnRvSlNPTiAhPT0gJ2Z1bmN0aW9uJykge1xuXG4gICAgICAgIERhdGUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcblxuICAgICAgICAgICAgcmV0dXJuIGlzRmluaXRlKHRoaXMudmFsdWVPZigpKSA/XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVVENGdWxsWWVhcigpICAgICArICctJyArXG4gICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ01vbnRoKCkgKyAxKSArICctJyArXG4gICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ0RhdGUoKSkgICAgICArICdUJyArXG4gICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ0hvdXJzKCkpICAgICArICc6JyArXG4gICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ01pbnV0ZXMoKSkgICArICc6JyArXG4gICAgICAgICAgICAgICAgZih0aGlzLmdldFVUQ1NlY29uZHMoKSkgICArICdaJyA6IG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgU3RyaW5nLnByb3RvdHlwZS50b0pTT04gICAgICA9XG4gICAgICAgICAgICBOdW1iZXIucHJvdG90eXBlLnRvSlNPTiAgPVxuICAgICAgICAgICAgQm9vbGVhbi5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGN4ID0gL1tcXHUwMDAwXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2csXG4gICAgICAgIGVzY2FwYWJsZSA9IC9bXFxcXFxcXCJcXHgwMC1cXHgxZlxceDdmLVxceDlmXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2csXG4gICAgICAgIGdhcCxcbiAgICAgICAgaW5kZW50LFxuICAgICAgICBtZXRhID0geyAgICAvLyB0YWJsZSBvZiBjaGFyYWN0ZXIgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgICAgJ1xcYic6ICdcXFxcYicsXG4gICAgICAgICAgICAnXFx0JzogJ1xcXFx0JyxcbiAgICAgICAgICAgICdcXG4nOiAnXFxcXG4nLFxuICAgICAgICAgICAgJ1xcZic6ICdcXFxcZicsXG4gICAgICAgICAgICAnXFxyJzogJ1xcXFxyJyxcbiAgICAgICAgICAgICdcIicgOiAnXFxcXFwiJyxcbiAgICAgICAgICAgICdcXFxcJzogJ1xcXFxcXFxcJ1xuICAgICAgICB9LFxuICAgICAgICByZXA7XG5cblxuICAgIGZ1bmN0aW9uIHF1b3RlKHN0cmluZykge1xuXG4vLyBJZiB0aGUgc3RyaW5nIGNvbnRhaW5zIG5vIGNvbnRyb2wgY2hhcmFjdGVycywgbm8gcXVvdGUgY2hhcmFjdGVycywgYW5kIG5vXG4vLyBiYWNrc2xhc2ggY2hhcmFjdGVycywgdGhlbiB3ZSBjYW4gc2FmZWx5IHNsYXAgc29tZSBxdW90ZXMgYXJvdW5kIGl0LlxuLy8gT3RoZXJ3aXNlIHdlIG11c3QgYWxzbyByZXBsYWNlIHRoZSBvZmZlbmRpbmcgY2hhcmFjdGVycyB3aXRoIHNhZmUgZXNjYXBlXG4vLyBzZXF1ZW5jZXMuXG5cbiAgICAgICAgZXNjYXBhYmxlLmxhc3RJbmRleCA9IDA7XG4gICAgICAgIHJldHVybiBlc2NhcGFibGUudGVzdChzdHJpbmcpID8gJ1wiJyArIHN0cmluZy5yZXBsYWNlKGVzY2FwYWJsZSwgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHZhciBjID0gbWV0YVthXTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgPyBjIDpcbiAgICAgICAgICAgICAgICAnXFxcXHUnICsgKCcwMDAwJyArIGEuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC00KTtcbiAgICAgICAgfSkgKyAnXCInIDogJ1wiJyArIHN0cmluZyArICdcIic7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzdHIoa2V5LCBob2xkZXIpIHtcblxuLy8gUHJvZHVjZSBhIHN0cmluZyBmcm9tIGhvbGRlcltrZXldLlxuXG4gICAgICAgIHZhciBpLCAgICAgICAgICAvLyBUaGUgbG9vcCBjb3VudGVyLlxuICAgICAgICAgICAgaywgICAgICAgICAgLy8gVGhlIG1lbWJlciBrZXkuXG4gICAgICAgICAgICB2LCAgICAgICAgICAvLyBUaGUgbWVtYmVyIHZhbHVlLlxuICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgbWluZCA9IGdhcCxcbiAgICAgICAgICAgIHBhcnRpYWwsXG4gICAgICAgICAgICB2YWx1ZSA9IGhvbGRlcltrZXldO1xuXG4vLyBJZiB0aGUgdmFsdWUgaGFzIGEgdG9KU09OIG1ldGhvZCwgY2FsbCBpdCB0byBvYnRhaW4gYSByZXBsYWNlbWVudCB2YWx1ZS5cblxuICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiB2YWx1ZS50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9KU09OKGtleSk7XG4gICAgICAgIH1cblxuLy8gSWYgd2Ugd2VyZSBjYWxsZWQgd2l0aCBhIHJlcGxhY2VyIGZ1bmN0aW9uLCB0aGVuIGNhbGwgdGhlIHJlcGxhY2VyIHRvXG4vLyBvYnRhaW4gYSByZXBsYWNlbWVudCB2YWx1ZS5cblxuICAgICAgICBpZiAodHlwZW9mIHJlcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFsdWUgPSByZXAuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xuICAgICAgICB9XG5cbi8vIFdoYXQgaGFwcGVucyBuZXh0IGRlcGVuZHMgb24gdGhlIHZhbHVlJ3MgdHlwZS5cblxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgcmV0dXJuIHF1b3RlKHZhbHVlKTtcblxuICAgICAgICBjYXNlICdudW1iZXInOlxuXG4vLyBKU09OIG51bWJlcnMgbXVzdCBiZSBmaW5pdGUuIEVuY29kZSBub24tZmluaXRlIG51bWJlcnMgYXMgbnVsbC5cblxuICAgICAgICAgICAgcmV0dXJuIGlzRmluaXRlKHZhbHVlKSA/IFN0cmluZyh2YWx1ZSkgOiAnbnVsbCc7XG5cbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGNhc2UgJ251bGwnOlxuXG4vLyBJZiB0aGUgdmFsdWUgaXMgYSBib29sZWFuIG9yIG51bGwsIGNvbnZlcnQgaXQgdG8gYSBzdHJpbmcuIE5vdGU6XG4vLyB0eXBlb2YgbnVsbCBkb2VzIG5vdCBwcm9kdWNlICdudWxsJy4gVGhlIGNhc2UgaXMgaW5jbHVkZWQgaGVyZSBpblxuLy8gdGhlIHJlbW90ZSBjaGFuY2UgdGhhdCB0aGlzIGdldHMgZml4ZWQgc29tZWRheS5cblxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG5cbi8vIElmIHRoZSB0eXBlIGlzICdvYmplY3QnLCB3ZSBtaWdodCBiZSBkZWFsaW5nIHdpdGggYW4gb2JqZWN0IG9yIGFuIGFycmF5IG9yXG4vLyBudWxsLlxuXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG5cbi8vIER1ZSB0byBhIHNwZWNpZmljYXRpb24gYmx1bmRlciBpbiBFQ01BU2NyaXB0LCB0eXBlb2YgbnVsbCBpcyAnb2JqZWN0Jyxcbi8vIHNvIHdhdGNoIG91dCBmb3IgdGhhdCBjYXNlLlxuXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICAgICAgICAgIH1cblxuLy8gTWFrZSBhbiBhcnJheSB0byBob2xkIHRoZSBwYXJ0aWFsIHJlc3VsdHMgb2Ygc3RyaW5naWZ5aW5nIHRoaXMgb2JqZWN0IHZhbHVlLlxuXG4gICAgICAgICAgICBnYXAgKz0gaW5kZW50O1xuICAgICAgICAgICAgcGFydGlhbCA9IFtdO1xuXG4vLyBJcyB0aGUgdmFsdWUgYW4gYXJyYXk/XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuXG4vLyBUaGUgdmFsdWUgaXMgYW4gYXJyYXkuIFN0cmluZ2lmeSBldmVyeSBlbGVtZW50LiBVc2UgbnVsbCBhcyBhIHBsYWNlaG9sZGVyXG4vLyBmb3Igbm9uLUpTT04gdmFsdWVzLlxuXG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0aWFsW2ldID0gc3RyKGksIHZhbHVlKSB8fCAnbnVsbCc7XG4gICAgICAgICAgICAgICAgfVxuXG4vLyBKb2luIGFsbCBvZiB0aGUgZWxlbWVudHMgdG9nZXRoZXIsIHNlcGFyYXRlZCB3aXRoIGNvbW1hcywgYW5kIHdyYXAgdGhlbSBpblxuLy8gYnJhY2tldHMuXG5cbiAgICAgICAgICAgICAgICB2ID0gcGFydGlhbC5sZW5ndGggPT09IDAgPyAnW10nIDogZ2FwID9cbiAgICAgICAgICAgICAgICAgICAgJ1tcXG4nICsgZ2FwICsgcGFydGlhbC5qb2luKCcsXFxuJyArIGdhcCkgKyAnXFxuJyArIG1pbmQgKyAnXScgOlxuICAgICAgICAgICAgICAgICAgICAnWycgKyBwYXJ0aWFsLmpvaW4oJywnKSArICddJztcbiAgICAgICAgICAgICAgICBnYXAgPSBtaW5kO1xuICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgfVxuXG4vLyBJZiB0aGUgcmVwbGFjZXIgaXMgYW4gYXJyYXksIHVzZSBpdCB0byBzZWxlY3QgdGhlIG1lbWJlcnMgdG8gYmUgc3RyaW5naWZpZWQuXG5cbiAgICAgICAgICAgIGlmIChyZXAgJiYgdHlwZW9mIHJlcCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSByZXAubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcFtpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGsgPSByZXBbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gc3RyKGssIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGlhbC5wdXNoKHF1b3RlKGspICsgKGdhcCA/ICc6ICcgOiAnOicpICsgdik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4vLyBPdGhlcndpc2UsIGl0ZXJhdGUgdGhyb3VnaCBhbGwgb2YgdGhlIGtleXMgaW4gdGhlIG9iamVjdC5cblxuICAgICAgICAgICAgICAgIGZvciAoayBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHN0cihrLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpYWwucHVzaChxdW90ZShrKSArIChnYXAgPyAnOiAnIDogJzonKSArIHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4vLyBKb2luIGFsbCBvZiB0aGUgbWVtYmVyIHRleHRzIHRvZ2V0aGVyLCBzZXBhcmF0ZWQgd2l0aCBjb21tYXMsXG4vLyBhbmQgd3JhcCB0aGVtIGluIGJyYWNlcy5cblxuICAgICAgICAgICAgdiA9IHBhcnRpYWwubGVuZ3RoID09PSAwID8gJ3t9JyA6IGdhcCA/XG4gICAgICAgICAgICAgICAgJ3tcXG4nICsgZ2FwICsgcGFydGlhbC5qb2luKCcsXFxuJyArIGdhcCkgKyAnXFxuJyArIG1pbmQgKyAnfScgOlxuICAgICAgICAgICAgICAgICd7JyArIHBhcnRpYWwuam9pbignLCcpICsgJ30nO1xuICAgICAgICAgICAgZ2FwID0gbWluZDtcbiAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICB9XG4gICAgfVxuXG4vLyBJZiB0aGUgSlNPTiBvYmplY3QgZG9lcyBub3QgeWV0IGhhdmUgYSBzdHJpbmdpZnkgbWV0aG9kLCBnaXZlIGl0IG9uZS5cblxuICAgIGlmICh0eXBlb2YgSlNPTi5zdHJpbmdpZnkgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkgPSBmdW5jdGlvbiAodmFsdWUsIHJlcGxhY2VyLCBzcGFjZSkge1xuXG4vLyBUaGUgc3RyaW5naWZ5IG1ldGhvZCB0YWtlcyBhIHZhbHVlIGFuZCBhbiBvcHRpb25hbCByZXBsYWNlciwgYW5kIGFuIG9wdGlvbmFsXG4vLyBzcGFjZSBwYXJhbWV0ZXIsIGFuZCByZXR1cm5zIGEgSlNPTiB0ZXh0LiBUaGUgcmVwbGFjZXIgY2FuIGJlIGEgZnVuY3Rpb25cbi8vIHRoYXQgY2FuIHJlcGxhY2UgdmFsdWVzLCBvciBhbiBhcnJheSBvZiBzdHJpbmdzIHRoYXQgd2lsbCBzZWxlY3QgdGhlIGtleXMuXG4vLyBBIGRlZmF1bHQgcmVwbGFjZXIgbWV0aG9kIGNhbiBiZSBwcm92aWRlZC4gVXNlIG9mIHRoZSBzcGFjZSBwYXJhbWV0ZXIgY2FuXG4vLyBwcm9kdWNlIHRleHQgdGhhdCBpcyBtb3JlIGVhc2lseSByZWFkYWJsZS5cblxuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICBnYXAgPSAnJztcbiAgICAgICAgICAgIGluZGVudCA9ICcnO1xuXG4vLyBJZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGlzIGEgbnVtYmVyLCBtYWtlIGFuIGluZGVudCBzdHJpbmcgY29udGFpbmluZyB0aGF0XG4vLyBtYW55IHNwYWNlcy5cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzcGFjZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc3BhY2U7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRlbnQgKz0gJyAnO1xuICAgICAgICAgICAgICAgIH1cblxuLy8gSWYgdGhlIHNwYWNlIHBhcmFtZXRlciBpcyBhIHN0cmluZywgaXQgd2lsbCBiZSB1c2VkIGFzIHRoZSBpbmRlbnQgc3RyaW5nLlxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpbmRlbnQgPSBzcGFjZTtcbiAgICAgICAgICAgIH1cblxuLy8gSWYgdGhlcmUgaXMgYSByZXBsYWNlciwgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIGFuIGFycmF5LlxuLy8gT3RoZXJ3aXNlLCB0aHJvdyBhbiBlcnJvci5cblxuICAgICAgICAgICAgcmVwID0gcmVwbGFjZXI7XG4gICAgICAgICAgICBpZiAocmVwbGFjZXIgJiYgdHlwZW9mIHJlcGxhY2VyICE9PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgICAgICAgICAgICh0eXBlb2YgcmVwbGFjZXIgIT09ICdvYmplY3QnIHx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiByZXBsYWNlci5sZW5ndGggIT09ICdudW1iZXInKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSlNPTi5zdHJpbmdpZnknKTtcbiAgICAgICAgICAgIH1cblxuLy8gTWFrZSBhIGZha2Ugcm9vdCBvYmplY3QgY29udGFpbmluZyBvdXIgdmFsdWUgdW5kZXIgdGhlIGtleSBvZiAnJy5cbi8vIFJldHVybiB0aGUgcmVzdWx0IG9mIHN0cmluZ2lmeWluZyB0aGUgdmFsdWUuXG5cbiAgICAgICAgICAgIHJldHVybiBzdHIoJycsIHsnJzogdmFsdWV9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cblxuLy8gSWYgdGhlIEpTT04gb2JqZWN0IGRvZXMgbm90IHlldCBoYXZlIGEgcGFyc2UgbWV0aG9kLCBnaXZlIGl0IG9uZS5cblxuICAgIGlmICh0eXBlb2YgSlNPTi5wYXJzZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBKU09OLnBhcnNlID0gZnVuY3Rpb24gKHRleHQsIHJldml2ZXIpIHtcblxuLy8gVGhlIHBhcnNlIG1ldGhvZCB0YWtlcyBhIHRleHQgYW5kIGFuIG9wdGlvbmFsIHJldml2ZXIgZnVuY3Rpb24sIGFuZCByZXR1cm5zXG4vLyBhIEphdmFTY3JpcHQgdmFsdWUgaWYgdGhlIHRleHQgaXMgYSB2YWxpZCBKU09OIHRleHQuXG5cbiAgICAgICAgICAgIHZhciBqO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiB3YWxrKGhvbGRlciwga2V5KSB7XG5cbi8vIFRoZSB3YWxrIG1ldGhvZCBpcyB1c2VkIHRvIHJlY3Vyc2l2ZWx5IHdhbGsgdGhlIHJlc3VsdGluZyBzdHJ1Y3R1cmUgc29cbi8vIHRoYXQgbW9kaWZpY2F0aW9ucyBjYW4gYmUgbWFkZS5cblxuICAgICAgICAgICAgICAgIHZhciBrLCB2LCB2YWx1ZSA9IGhvbGRlcltrZXldO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gd2Fsayh2YWx1ZSwgayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVtrXSA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbHVlW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV2aXZlci5jYWxsKGhvbGRlciwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cblxuLy8gUGFyc2luZyBoYXBwZW5zIGluIGZvdXIgc3RhZ2VzLiBJbiB0aGUgZmlyc3Qgc3RhZ2UsIHdlIHJlcGxhY2UgY2VydGFpblxuLy8gVW5pY29kZSBjaGFyYWN0ZXJzIHdpdGggZXNjYXBlIHNlcXVlbmNlcy4gSmF2YVNjcmlwdCBoYW5kbGVzIG1hbnkgY2hhcmFjdGVyc1xuLy8gaW5jb3JyZWN0bHksIGVpdGhlciBzaWxlbnRseSBkZWxldGluZyB0aGVtLCBvciB0cmVhdGluZyB0aGVtIGFzIGxpbmUgZW5kaW5ncy5cblxuICAgICAgICAgICAgdGV4dCA9IFN0cmluZyh0ZXh0KTtcbiAgICAgICAgICAgIGN4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICBpZiAoY3gudGVzdCh0ZXh0KSkge1xuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoY3gsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnXFxcXHUnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICgnMDAwMCcgKyBhLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtNCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbi8vIEluIHRoZSBzZWNvbmQgc3RhZ2UsIHdlIHJ1biB0aGUgdGV4dCBhZ2FpbnN0IHJlZ3VsYXIgZXhwcmVzc2lvbnMgdGhhdCBsb29rXG4vLyBmb3Igbm9uLUpTT04gcGF0dGVybnMuIFdlIGFyZSBlc3BlY2lhbGx5IGNvbmNlcm5lZCB3aXRoICcoKScgYW5kICduZXcnXG4vLyBiZWNhdXNlIHRoZXkgY2FuIGNhdXNlIGludm9jYXRpb24sIGFuZCAnPScgYmVjYXVzZSBpdCBjYW4gY2F1c2UgbXV0YXRpb24uXG4vLyBCdXQganVzdCB0byBiZSBzYWZlLCB3ZSB3YW50IHRvIHJlamVjdCBhbGwgdW5leHBlY3RlZCBmb3Jtcy5cblxuLy8gV2Ugc3BsaXQgdGhlIHNlY29uZCBzdGFnZSBpbnRvIDQgcmVnZXhwIG9wZXJhdGlvbnMgaW4gb3JkZXIgdG8gd29yayBhcm91bmRcbi8vIGNyaXBwbGluZyBpbmVmZmljaWVuY2llcyBpbiBJRSdzIGFuZCBTYWZhcmkncyByZWdleHAgZW5naW5lcy4gRmlyc3Qgd2Vcbi8vIHJlcGxhY2UgdGhlIEpTT04gYmFja3NsYXNoIHBhaXJzIHdpdGggJ0AnIChhIG5vbi1KU09OIGNoYXJhY3RlcikuIFNlY29uZCwgd2Vcbi8vIHJlcGxhY2UgYWxsIHNpbXBsZSB2YWx1ZSB0b2tlbnMgd2l0aCAnXScgY2hhcmFjdGVycy4gVGhpcmQsIHdlIGRlbGV0ZSBhbGxcbi8vIG9wZW4gYnJhY2tldHMgdGhhdCBmb2xsb3cgYSBjb2xvbiBvciBjb21tYSBvciB0aGF0IGJlZ2luIHRoZSB0ZXh0LiBGaW5hbGx5LFxuLy8gd2UgbG9vayB0byBzZWUgdGhhdCB0aGUgcmVtYWluaW5nIGNoYXJhY3RlcnMgYXJlIG9ubHkgd2hpdGVzcGFjZSBvciAnXScgb3Jcbi8vICcsJyBvciAnOicgb3IgJ3snIG9yICd9Jy4gSWYgdGhhdCBpcyBzbywgdGhlbiB0aGUgdGV4dCBpcyBzYWZlIGZvciBldmFsLlxuXG4gICAgICAgICAgICBpZiAoL15bXFxdLDp7fVxcc10qJC9cbiAgICAgICAgICAgICAgICAgICAgLnRlc3QodGV4dC5yZXBsYWNlKC9cXFxcKD86W1wiXFxcXFxcL2JmbnJ0XXx1WzAtOWEtZkEtRl17NH0pL2csICdAJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cIlteXCJcXFxcXFxuXFxyXSpcInx0cnVlfGZhbHNlfG51bGx8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrXFwtXT9cXGQrKT8vZywgJ10nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyg/Ol58OnwsKSg/OlxccypcXFspKy9nLCAnJykpKSB7XG5cbi8vIEluIHRoZSB0aGlyZCBzdGFnZSB3ZSB1c2UgdGhlIGV2YWwgZnVuY3Rpb24gdG8gY29tcGlsZSB0aGUgdGV4dCBpbnRvIGFcbi8vIEphdmFTY3JpcHQgc3RydWN0dXJlLiBUaGUgJ3snIG9wZXJhdG9yIGlzIHN1YmplY3QgdG8gYSBzeW50YWN0aWMgYW1iaWd1aXR5XG4vLyBpbiBKYXZhU2NyaXB0OiBpdCBjYW4gYmVnaW4gYSBibG9jayBvciBhbiBvYmplY3QgbGl0ZXJhbC4gV2Ugd3JhcCB0aGUgdGV4dFxuLy8gaW4gcGFyZW5zIHRvIGVsaW1pbmF0ZSB0aGUgYW1iaWd1aXR5LlxuXG4gICAgICAgICAgICAgICAgaiA9IGV2YWwoJygnICsgdGV4dCArICcpJyk7XG5cbi8vIEluIHRoZSBvcHRpb25hbCBmb3VydGggc3RhZ2UsIHdlIHJlY3Vyc2l2ZWx5IHdhbGsgdGhlIG5ldyBzdHJ1Y3R1cmUsIHBhc3Npbmdcbi8vIGVhY2ggbmFtZS92YWx1ZSBwYWlyIHRvIGEgcmV2aXZlciBmdW5jdGlvbiBmb3IgcG9zc2libGUgdHJhbnNmb3JtYXRpb24uXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHJldml2ZXIgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgICAgICAgICAgICB3YWxrKHsnJzogan0sICcnKSA6IGo7XG4gICAgICAgICAgICB9XG5cbi8vIElmIHRoZSB0ZXh0IGlzIG5vdCBKU09OIHBhcnNlYWJsZSwgdGhlbiBhIFN5bnRheEVycm9yIGlzIHRocm93bi5cblxuICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdKU09OLnBhcnNlJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2xvYmFsLkpTT04gPSBKU09OO1xuICAgIG1vZHVsZS5leHBvcnRzID0gSlNPTjtcbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vX0pTT05AMS4wLjBASlNPTi9qc29uMi5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvX0pTT05AMS4wLjBASlNPTi9qc29uMi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwidmFyIGNoYXJlbmMgPSB7XG4gIC8vIFVURi04IGVuY29kaW5nXG4gIHV0Zjg6IHtcbiAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIHN0cmluZ1RvQnl0ZXM6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgcmV0dXJuIGNoYXJlbmMuYmluLnN0cmluZ1RvQnl0ZXModW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJ5dGUgYXJyYXkgdG8gYSBzdHJpbmdcbiAgICBieXRlc1RvU3RyaW5nOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoY2hhcmVuYy5iaW4uYnl0ZXNUb1N0cmluZyhieXRlcykpKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQmluYXJ5IGVuY29kaW5nXG4gIGJpbjoge1xuICAgIC8vIENvbnZlcnQgYSBzdHJpbmcgdG8gYSBieXRlIGFycmF5XG4gICAgc3RyaW5nVG9CeXRlczogZnVuY3Rpb24oc3RyKSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKylcbiAgICAgICAgYnl0ZXMucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIHN0cmluZ1xuICAgIGJ5dGVzVG9TdHJpbmc6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBmb3IgKHZhciBzdHIgPSBbXSwgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgc3RyLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSkpO1xuICAgICAgcmV0dXJuIHN0ci5qb2luKCcnKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2hhcmVuYztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9fY2hhcmVuY0AwLjAuMkBjaGFyZW5jL2NoYXJlbmMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL19jaGFyZW5jQDAuMC4yQGNoYXJlbmMvY2hhcmVuYy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgYmFzZTY0bWFwXG4gICAgICA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJyxcblxuICBjcnlwdCA9IHtcbiAgICAvLyBCaXQtd2lzZSByb3RhdGlvbiBsZWZ0XG4gICAgcm90bDogZnVuY3Rpb24obiwgYikge1xuICAgICAgcmV0dXJuIChuIDw8IGIpIHwgKG4gPj4+ICgzMiAtIGIpKTtcbiAgICB9LFxuXG4gICAgLy8gQml0LXdpc2Ugcm90YXRpb24gcmlnaHRcbiAgICByb3RyOiBmdW5jdGlvbihuLCBiKSB7XG4gICAgICByZXR1cm4gKG4gPDwgKDMyIC0gYikpIHwgKG4gPj4+IGIpO1xuICAgIH0sXG5cbiAgICAvLyBTd2FwIGJpZy1lbmRpYW4gdG8gbGl0dGxlLWVuZGlhbiBhbmQgdmljZSB2ZXJzYVxuICAgIGVuZGlhbjogZnVuY3Rpb24obikge1xuICAgICAgLy8gSWYgbnVtYmVyIGdpdmVuLCBzd2FwIGVuZGlhblxuICAgICAgaWYgKG4uY29uc3RydWN0b3IgPT0gTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBjcnlwdC5yb3RsKG4sIDgpICYgMHgwMEZGMDBGRiB8IGNyeXB0LnJvdGwobiwgMjQpICYgMHhGRjAwRkYwMDtcbiAgICAgIH1cblxuICAgICAgLy8gRWxzZSwgYXNzdW1lIGFycmF5IGFuZCBzd2FwIGFsbCBpdGVtc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuLmxlbmd0aDsgaSsrKVxuICAgICAgICBuW2ldID0gY3J5cHQuZW5kaWFuKG5baV0pO1xuICAgICAgcmV0dXJuIG47XG4gICAgfSxcblxuICAgIC8vIEdlbmVyYXRlIGFuIGFycmF5IG9mIGFueSBsZW5ndGggb2YgcmFuZG9tIGJ5dGVzXG4gICAgcmFuZG9tQnl0ZXM6IGZ1bmN0aW9uKG4pIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW107IG4gPiAwOyBuLS0pXG4gICAgICAgIGJ5dGVzLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSk7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGJpZy1lbmRpYW4gMzItYml0IHdvcmRzXG4gICAgYnl0ZXNUb1dvcmRzOiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgd29yZHMgPSBbXSwgaSA9IDAsIGIgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyssIGIgKz0gOClcbiAgICAgICAgd29yZHNbYiA+Pj4gNV0gfD0gYnl0ZXNbaV0gPDwgKDI0IC0gYiAlIDMyKTtcbiAgICAgIHJldHVybiB3b3JkcztcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBiaWctZW5kaWFuIDMyLWJpdCB3b3JkcyB0byBhIGJ5dGUgYXJyYXlcbiAgICB3b3Jkc1RvQnl0ZXM6IGZ1bmN0aW9uKHdvcmRzKSB7XG4gICAgICBmb3IgKHZhciBieXRlcyA9IFtdLCBiID0gMDsgYiA8IHdvcmRzLmxlbmd0aCAqIDMyOyBiICs9IDgpXG4gICAgICAgIGJ5dGVzLnB1c2goKHdvcmRzW2IgPj4+IDVdID4+PiAoMjQgLSBiICUgMzIpKSAmIDB4RkYpO1xuICAgICAgcmV0dXJuIGJ5dGVzO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgYnl0ZSBhcnJheSB0byBhIGhleCBzdHJpbmdcbiAgICBieXRlc1RvSGV4OiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgaGV4ID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaGV4LnB1c2goKGJ5dGVzW2ldID4+PiA0KS50b1N0cmluZygxNikpO1xuICAgICAgICBoZXgucHVzaCgoYnl0ZXNbaV0gJiAweEYpLnRvU3RyaW5nKDE2KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGV4LmpvaW4oJycpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgaGV4IHN0cmluZyB0byBhIGJ5dGUgYXJyYXlcbiAgICBoZXhUb0J5dGVzOiBmdW5jdGlvbihoZXgpIHtcbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGMgPSAwOyBjIDwgaGV4Lmxlbmd0aDsgYyArPSAyKVxuICAgICAgICBieXRlcy5wdXNoKHBhcnNlSW50KGhleC5zdWJzdHIoYywgMiksIDE2KSk7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgYSBieXRlIGFycmF5IHRvIGEgYmFzZS02NCBzdHJpbmdcbiAgICBieXRlc1RvQmFzZTY0OiBmdW5jdGlvbihieXRlcykge1xuICAgICAgZm9yICh2YXIgYmFzZTY0ID0gW10sIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgdmFyIHRyaXBsZXQgPSAoYnl0ZXNbaV0gPDwgMTYpIHwgKGJ5dGVzW2kgKyAxXSA8PCA4KSB8IGJ5dGVzW2kgKyAyXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspXG4gICAgICAgICAgaWYgKGkgKiA4ICsgaiAqIDYgPD0gYnl0ZXMubGVuZ3RoICogOClcbiAgICAgICAgICAgIGJhc2U2NC5wdXNoKGJhc2U2NG1hcC5jaGFyQXQoKHRyaXBsZXQgPj4+IDYgKiAoMyAtIGopKSAmIDB4M0YpKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBiYXNlNjQucHVzaCgnPScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJhc2U2NC5qb2luKCcnKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhIGJhc2UtNjQgc3RyaW5nIHRvIGEgYnl0ZSBhcnJheVxuICAgIGJhc2U2NFRvQnl0ZXM6IGZ1bmN0aW9uKGJhc2U2NCkge1xuICAgICAgLy8gUmVtb3ZlIG5vbi1iYXNlLTY0IGNoYXJhY3RlcnNcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5yZXBsYWNlKC9bXkEtWjAtOStcXC9dL2lnLCAnJyk7XG5cbiAgICAgIGZvciAodmFyIGJ5dGVzID0gW10sIGkgPSAwLCBpbW9kNCA9IDA7IGkgPCBiYXNlNjQubGVuZ3RoO1xuICAgICAgICAgIGltb2Q0ID0gKytpICUgNCkge1xuICAgICAgICBpZiAoaW1vZDQgPT0gMCkgY29udGludWU7XG4gICAgICAgIGJ5dGVzLnB1c2goKChiYXNlNjRtYXAuaW5kZXhPZihiYXNlNjQuY2hhckF0KGkgLSAxKSlcbiAgICAgICAgICAgICYgKE1hdGgucG93KDIsIC0yICogaW1vZDQgKyA4KSAtIDEpKSA8PCAoaW1vZDQgKiAyKSlcbiAgICAgICAgICAgIHwgKGJhc2U2NG1hcC5pbmRleE9mKGJhc2U2NC5jaGFyQXQoaSkpID4+PiAoNiAtIGltb2Q0ICogMikpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBieXRlcztcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBjcnlwdDtcbn0pKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vX2NyeXB0QDAuMC4yQGNyeXB0L2NyeXB0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9fY3J5cHRAMC4wLjJAY3J5cHQvY3J5cHQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L19pcy1idWZmZXJAMS4xLjZAaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9faXMtYnVmZmVyQDEuMS42QGlzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwiKGZ1bmN0aW9uKCl7XHJcbiAgdmFyIGNyeXB0ID0gcmVxdWlyZSgnY3J5cHQnKSxcclxuICAgICAgdXRmOCA9IHJlcXVpcmUoJ2NoYXJlbmMnKS51dGY4LFxyXG4gICAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpLFxyXG4gICAgICBiaW4gPSByZXF1aXJlKCdjaGFyZW5jJykuYmluLFxyXG5cclxuICAvLyBUaGUgY29yZVxyXG4gIG1kNSA9IGZ1bmN0aW9uIChtZXNzYWdlLCBvcHRpb25zKSB7XHJcbiAgICAvLyBDb252ZXJ0IHRvIGJ5dGUgYXJyYXlcclxuICAgIGlmIChtZXNzYWdlLmNvbnN0cnVjdG9yID09IFN0cmluZylcclxuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbmNvZGluZyA9PT0gJ2JpbmFyeScpXHJcbiAgICAgICAgbWVzc2FnZSA9IGJpbi5zdHJpbmdUb0J5dGVzKG1lc3NhZ2UpO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgbWVzc2FnZSA9IHV0Zjguc3RyaW5nVG9CeXRlcyhtZXNzYWdlKTtcclxuICAgIGVsc2UgaWYgKGlzQnVmZmVyKG1lc3NhZ2UpKVxyXG4gICAgICBtZXNzYWdlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobWVzc2FnZSwgMCk7XHJcbiAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheShtZXNzYWdlKSlcclxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UudG9TdHJpbmcoKTtcclxuICAgIC8vIGVsc2UsIGFzc3VtZSBieXRlIGFycmF5IGFscmVhZHlcclxuXHJcbiAgICB2YXIgbSA9IGNyeXB0LmJ5dGVzVG9Xb3JkcyhtZXNzYWdlKSxcclxuICAgICAgICBsID0gbWVzc2FnZS5sZW5ndGggKiA4LFxyXG4gICAgICAgIGEgPSAgMTczMjU4NDE5MyxcclxuICAgICAgICBiID0gLTI3MTczMzg3OSxcclxuICAgICAgICBjID0gLTE3MzI1ODQxOTQsXHJcbiAgICAgICAgZCA9ICAyNzE3MzM4Nzg7XHJcblxyXG4gICAgLy8gU3dhcCBlbmRpYW5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtW2ldID0gKChtW2ldIDw8ICA4KSB8IChtW2ldID4+PiAyNCkpICYgMHgwMEZGMDBGRiB8XHJcbiAgICAgICAgICAgICAoKG1baV0gPDwgMjQpIHwgKG1baV0gPj4+ICA4KSkgJiAweEZGMDBGRjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhZGRpbmdcclxuICAgIG1bbCA+Pj4gNV0gfD0gMHg4MCA8PCAobCAlIDMyKTtcclxuICAgIG1bKCgobCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBsO1xyXG5cclxuICAgIC8vIE1ldGhvZCBzaG9ydGN1dHNcclxuICAgIHZhciBGRiA9IG1kNS5fZmYsXHJcbiAgICAgICAgR0cgPSBtZDUuX2dnLFxyXG4gICAgICAgIEhIID0gbWQ1Ll9oaCxcclxuICAgICAgICBJSSA9IG1kNS5faWk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtLmxlbmd0aDsgaSArPSAxNikge1xyXG5cclxuICAgICAgdmFyIGFhID0gYSxcclxuICAgICAgICAgIGJiID0gYixcclxuICAgICAgICAgIGNjID0gYyxcclxuICAgICAgICAgIGRkID0gZDtcclxuXHJcbiAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBtW2krIDBdLCAgNywgLTY4MDg3NjkzNik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDFdLCAxMiwgLTM4OTU2NDU4Nik7XHJcbiAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBtW2krIDJdLCAxNywgIDYwNjEwNTgxOSk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKyA0XSwgIDcsIC0xNzY0MTg4OTcpO1xyXG4gICAgICBkID0gRkYoZCwgYSwgYiwgYywgbVtpKyA1XSwgMTIsICAxMjAwMDgwNDI2KTtcclxuICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIG1baSsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krIDddLCAyMiwgLTQ1NzA1OTgzKTtcclxuICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIG1baSsgOF0sICA3LCAgMTc3MDAzNTQxNik7XHJcbiAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBtW2krIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKzEwXSwgMTcsIC00MjA2Myk7XHJcbiAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBtW2krMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xyXG4gICAgICBhID0gRkYoYSwgYiwgYywgZCwgbVtpKzEyXSwgIDcsICAxODA0NjAzNjgyKTtcclxuICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIG1baSsxM10sIDEyLCAtNDAzNDExMDEpO1xyXG4gICAgICBjID0gRkYoYywgZCwgYSwgYiwgbVtpKzE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcclxuICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIG1baSsxNV0sIDIyLCAgMTIzNjUzNTMyOSk7XHJcblxyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyAxXSwgIDUsIC0xNjU3OTY1MTApO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKyA2XSwgIDksIC0xMDY5NTAxNjMyKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsxMV0sIDE0LCAgNjQzNzE3NzEzKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgMF0sIDIwLCAtMzczODk3MzAyKTtcclxuICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIG1baSsgNV0sICA1LCAtNzAxNTU4NjkxKTtcclxuICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIG1baSsxMF0sICA5LCAgMzgwMTYwODMpO1xyXG4gICAgICBjID0gR0coYywgZCwgYSwgYiwgbVtpKzE1XSwgMTQsIC02NjA0NzgzMzUpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xyXG4gICAgICBhID0gR0coYSwgYiwgYywgZCwgbVtpKyA5XSwgIDUsICA1Njg0NDY0MzgpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKzE0XSwgIDksIC0xMDE5ODAzNjkwKTtcclxuICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIG1baSsgM10sIDE0LCAtMTg3MzYzOTYxKTtcclxuICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIG1baSsgOF0sIDIwLCAgMTE2MzUzMTUwMSk7XHJcbiAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBtW2krMTNdLCAgNSwgLTE0NDQ2ODE0NjcpO1xyXG4gICAgICBkID0gR0coZCwgYSwgYiwgYywgbVtpKyAyXSwgIDksIC01MTQwMzc4NCk7XHJcbiAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBtW2krIDddLCAxNCwgIDE3MzUzMjg0NzMpO1xyXG4gICAgICBiID0gR0coYiwgYywgZCwgYSwgbVtpKzEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcclxuXHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDVdLCAgNCwgLTM3ODU1OCk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKzExXSwgMTYsICAxODM5MDMwNTYyKTtcclxuICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIG1baSsxNF0sIDIzLCAtMzUzMDk1NTYpO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKyAxXSwgIDQsIC0xNTMwOTkyMDYwKTtcclxuICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIG1baSsgNF0sIDExLCAgMTI3Mjg5MzM1Myk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krIDddLCAxNiwgLTE1NTQ5NzYzMik7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xyXG4gICAgICBhID0gSEgoYSwgYiwgYywgZCwgbVtpKzEzXSwgIDQsICA2ODEyNzkxNzQpO1xyXG4gICAgICBkID0gSEgoZCwgYSwgYiwgYywgbVtpKyAwXSwgMTEsIC0zNTg1MzcyMjIpO1xyXG4gICAgICBjID0gSEgoYywgZCwgYSwgYiwgbVtpKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xyXG4gICAgICBiID0gSEgoYiwgYywgZCwgYSwgbVtpKyA2XSwgMjMsICA3NjAyOTE4OSk7XHJcbiAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBtW2krIDldLCAgNCwgLTY0MDM2NDQ4Nyk7XHJcbiAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBtW2krMTJdLCAxMSwgLTQyMTgxNTgzNSk7XHJcbiAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBtW2krMTVdLCAxNiwgIDUzMDc0MjUyMCk7XHJcbiAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBtW2krIDJdLCAyMywgLTk5NTMzODY1MSk7XHJcblxyXG4gICAgICBhID0gSUkoYSwgYiwgYywgZCwgbVtpKyAwXSwgIDYsIC0xOTg2MzA4NDQpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKyA3XSwgMTAsICAxMTI2ODkxNDE1KTtcclxuICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIG1baSsxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDVdLCAyMSwgLTU3NDM0MDU1KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsxMl0sICA2LCAgMTcwMDQ4NTU3MSk7XHJcbiAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBtW2krIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xyXG4gICAgICBjID0gSUkoYywgZCwgYSwgYiwgbVtpKzEwXSwgMTUsIC0xMDUxNTIzKTtcclxuICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIG1baSsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XHJcbiAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBtW2krIDhdLCAgNiwgIDE4NzMzMTMzNTkpO1xyXG4gICAgICBkID0gSUkoZCwgYSwgYiwgYywgbVtpKzE1XSwgMTAsIC0zMDYxMTc0NCk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krIDZdLCAxNSwgLTE1NjAxOTgzODApO1xyXG4gICAgICBiID0gSUkoYiwgYywgZCwgYSwgbVtpKzEzXSwgMjEsICAxMzA5MTUxNjQ5KTtcclxuICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIG1baSsgNF0sICA2LCAtMTQ1NTIzMDcwKTtcclxuICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIG1baSsxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XHJcbiAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBtW2krIDJdLCAxNSwgIDcxODc4NzI1OSk7XHJcbiAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBtW2krIDldLCAyMSwgLTM0MzQ4NTU1MSk7XHJcblxyXG4gICAgICBhID0gKGEgKyBhYSkgPj4+IDA7XHJcbiAgICAgIGIgPSAoYiArIGJiKSA+Pj4gMDtcclxuICAgICAgYyA9IChjICsgY2MpID4+PiAwO1xyXG4gICAgICBkID0gKGQgKyBkZCkgPj4+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNyeXB0LmVuZGlhbihbYSwgYiwgYywgZF0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEF1eGlsaWFyeSBmdW5jdGlvbnNcclxuICBtZDUuX2ZmICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiAmIGMgfCB+YiAmIGQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2dnICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiAmIGQgfCBjICYgfmQpICsgKHggPj4+IDApICsgdDtcclxuICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcbiAgfTtcclxuICBtZDUuX2hoICA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcbiAgICB2YXIgbiA9IGEgKyAoYiBeIGMgXiBkKSArICh4ID4+PiAwKSArIHQ7XHJcbiAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG4gIH07XHJcbiAgbWQ1Ll9paSAgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG4gICAgdmFyIG4gPSBhICsgKGMgXiAoYiB8IH5kKSkgKyAoeCA+Pj4gMCkgKyB0O1xyXG4gICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuICB9O1xyXG5cclxuICAvLyBQYWNrYWdlIHByaXZhdGUgYmxvY2tzaXplXHJcbiAgbWQ1Ll9ibG9ja3NpemUgPSAxNjtcclxuICBtZDUuX2RpZ2VzdHNpemUgPSAxNjtcclxuXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3B0aW9ucykge1xyXG4gICAgaWYgKG1lc3NhZ2UgPT09IHVuZGVmaW5lZCB8fCBtZXNzYWdlID09PSBudWxsKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgYXJndW1lbnQgJyArIG1lc3NhZ2UpO1xyXG5cclxuICAgIHZhciBkaWdlc3RieXRlcyA9IGNyeXB0LndvcmRzVG9CeXRlcyhtZDUobWVzc2FnZSwgb3B0aW9ucykpO1xyXG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5hc0J5dGVzID8gZGlnZXN0Ynl0ZXMgOlxyXG4gICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5hc1N0cmluZyA/IGJpbi5ieXRlc1RvU3RyaW5nKGRpZ2VzdGJ5dGVzKSA6XHJcbiAgICAgICAgY3J5cHQuYnl0ZXNUb0hleChkaWdlc3RieXRlcyk7XHJcbiAgfTtcclxuXHJcbn0pKCk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9fbWQ1QDIuMi4xQG1kNS9tZDUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL19tZDVAMi4yLjFAbWQ1L21kNS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IiwiaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5cclxuXHJcbnZhciBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxudmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuXHJcbnZhciBpdGVtU2l6ZSA9IFtcclxuICAgIFsyNDksIDQwNF0sXHJcbiAgICBbMjQ5LCA0MDRdLFxyXG4gICAgWzMzNywgMjAwXSxcclxuICAgIFszMzcsIDE3N10sXHJcbiAgICBbMjQ5LCA0MDRdXHJcbl07XHJcblxyXG5mdW5jdGlvbiBHYW1lUGFnZSgpIHtcclxuICAgIHRoaXMubGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtcGFnZScpO1xyXG4gICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyArK2kpIHtcclxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMubGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLWl0ZW0nICsgaSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIChpLCBub2RlKSB7XHJcbiAgICAgICAgICAgIHZhciBpbWcgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gJ2ltZy9nYW1lL2dhbWUnICsgaSArICcucG5nJztcclxuICAgICAgICB9LCAxMDAgKiBpLCBpLCBub2RlKTtcclxuICAgIH1cclxufVxyXG5HYW1lUGFnZS5wcm90b3R5cGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIHtpbnR9IGN1cnJlbnQgWzAsM11cclxuICAgICAqL1xyXG4gICAgY3VycmVudDogMCxcclxuICAgIG9uS2V5RG93bjogbnVsbCxcclxuXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoY3VycmVudCwgb25LZXlEb3duKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZChjdXJyZW50KTtcclxuICAgICAgICB0aGlzLm9uS2V5RG93biA9IG9uS2V5RG93bjtcclxuXHJcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcztcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBvd25lci5oYW5kbGVLZXkoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zZXRGb2N1cyh0aGlzLmN1cnJlbnQsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfc2V0Rm9jdXM6IGZ1bmN0aW9uIChjdXJyZW50LCBmb2N1cykge1xyXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5pdGVtc1tjdXJyZW50XTtcclxuICAgICAgICBub2RlLnN0eWxlLnpJbmRleCA9IGZvY3VzID8gMSA6IDA7XHJcblxyXG4gICAgICAgIHZhciBzaXplID0gaXRlbVNpemVbY3VycmVudF07XHJcbiAgICAgICAgdmFyIGRpdiA9IG5vZGUucXVlcnlTZWxlY3RvcignZGl2Jyk7XHJcbiAgICAgICAgdmFyIGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgaWYgKGZvY3VzKSB7XHJcbiAgICAgICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gc2l6ZVswXSAqIDEuMSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplWzFdICogMS4xICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSAtc2l6ZVswXSAqIDAuMDUgKyAncHgnO1xyXG4gICAgICAgICAgICBpbWcuc3R5bGUudG9wID0gLXNpemVbMV0gKiAwLjA1ICsgJ3B4JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoID0gc2l6ZVswXSArICdweCc7XHJcbiAgICAgICAgICAgIGltZy5zdHlsZS5oZWlnaHQgPSBzaXplWzFdICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLmxlZnQgPSAwICsgJ3B4JztcclxuICAgICAgICAgICAgaW1nLnN0eWxlLnRvcCA9IDAgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRTZWxlY3RlZDogZnVuY3Rpb24gKGN1cnJlbnQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRGb2N1cyhpLCBjdXJyZW50ID09IGkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoYW5kbGVLZXk6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcztcclxuICAgICAgICBlID0gZ2V0RXZlbnQoZSk7XHJcbiAgICAgICAgdmFyIGN1cktleSA9IGdldEtleShlKTtcclxuICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50IC09IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuY3VycmVudCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50ICs9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUudXA6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKG93bmVyLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5kb3duOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvd25lci5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNldFNlbGVjdGVkKG93bmVyLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZihvd25lci5vbktleURvd24pID09PSAnZnVuY3Rpb24nKSBvd25lci5vbktleURvd24oY3VyS2V5KTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB7R2FtZVBhZ2V9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9HYW1lUGFnZS5qcyIsImltcG9ydCB7c2hvd0NoaWxkTG9ja30gZnJvbSAnLi9hcHAvY2hpbGRMb2NrJztcclxuaW1wb3J0IHtjaGlsZE1lbnV9IGZyb20gJy4vYXBwL2NoaWxkTWVudSc7XHJcblxyXG5pbXBvcnQge3Nob3dEaWFsb2d9IGZyb20gXCIuL2FwcC9kaWFsb2dcIjtcclxuaW1wb3J0IHtzaG93TG9hZGluZyxoaWRlTG9hZGluZ30gZnJvbSBcIi4vYXBwL2xvYWRpbmdcIjtcclxuaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5pbXBvcnQge2FwcEFyZ3N9IGZyb20gJy4vYXBwL1BhZ2VBcmdzJztcclxuXHJcblxyXG52YXIga2V5Q29kZSA9IGdldEtleUNvZGVzKCk7XHJcbnZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZU1lbnUoKSB7XHJcbiAgICB0aGlzLmxheW91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmxheW91dCk7XHJcbiAgICB0aGlzLmxheW91dC5jbGFzc05hbWUgPSAnaG9tZS1tZW51JztcclxuICAgIHRoaXMubGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgJzxkaXYgaWQ9XCJtZW51LWJ0bjBcIiBjbGFzcz1cIm1lbnUtYnRuXCI+PGltZyBzcmM9XCJcIj48L2Rpdj4nICtcclxuICAgICAgICAnPGRpdiBpZD1cIm1lbnUtYnRuMVwiIGNsYXNzPVwibWVudS1idG5cIj48aW1nIHNyYz1cIlwiPjwvZGl2PicgK1xyXG4gICAgICAgICc8ZGl2IGlkPVwibWVudS1idG4yXCIgY2xhc3M9XCJtZW51LWJ0blwiPjxpbWcgc3JjPVwiXCI+PC9kaXY+JyArXHJcbiAgICAgICAgJzxkaXYgaWQ9XCJtZW51LWJ0bjNcIiBjbGFzcz1cIm1lbnUtYnRuXCI+PGltZyBzcmM9XCJcIj48L2Rpdj4nK1xyXG4gICAgICAgICc8ZGl2IGlkPVwibWVudS1idG40XCIgY2xhc3M9XCJtZW51LWJ0blwiPjxpbWcgc3JjPVwiXCI+PC9kaXY+JztcclxuICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgKytpKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmxheW91dC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idG4nICsgaSk7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKG5vZGUpO1xyXG5cclxuICAgICAgICAvL3NldFRpbWVvdXQoZnVuY3Rpb24gKGksIG5vZGUpIHtcclxuICAgICAgICB2YXIgaW1nID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICBpbWcuc3JjID0gJ2ltZy9tZW51L25hdl8nICsgaSArICdfMC5wbmcnO1xyXG4gICAgICAgIC8vfSwgMTAwICogaSwgaSwgbm9kZSk7XHJcbiAgICB9XHJcbn1cclxuSG9tZU1lbnUucHJvdG90eXBlID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiB7aW50fSBjdXJyZW50IFswLDNdXHJcbiAgICAgKi9cclxuICAgIGN1cnJlbnQ6IDAsXHJcbiAgICBvbktleURvd246IG51bGwsXHJcbiAgICB0ZGVVc2VyOiBudWxsLFxyXG5cclxuICAgIHNob3c6IGZ1bmN0aW9uIChjdXJyZW50LCBvbktleURvd24sIHRkZVVzZXIpIHtcclxuICAgICAgICB0aGlzLnNldFNlbGVjdGVkKGN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMub25LZXlEb3duID0gb25LZXlEb3duO1xyXG4gICAgICAgIHRoaXMudGRlVXNlciA9IHRkZVVzZXI7XHJcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcztcclxuICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBvd25lci5oYW5kbGVLZXkoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLl9zZXRGb2N1cyh0aGlzLmN1cnJlbnQsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBfc2V0Rm9jdXM6IGZ1bmN0aW9uIChjdXJyZW50LCBmb2N1cykge1xyXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5pdGVtc1tjdXJyZW50XTtcclxuICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGZvY3VzID8gJ21lbnUtYnRuLWZvY3VzJyA6ICdtZW51LWJ0bic7XHJcbiAgICAgICAgdmFyIGltZyA9IG5vZGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgaWYgKGZvY3VzKSB7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSAnaW1nL21lbnUvbmF2XycgKyBjdXJyZW50ICsgJ18xLnBuZyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW1nLnNyYyA9ICdpbWcvbWVudS9uYXZfJyArIGN1cnJlbnQgKyAnXzAucG5nJztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0U2VsZWN0ZWQ6IGZ1bmN0aW9uIChjdXJyZW50KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEZvY3VzKGksIGN1cnJlbnQgPT0gaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUtleTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLmN1cnJlbnQtLTtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5zZXRTZWxlY3RlZChvd25lci5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA8IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5jdXJyZW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2V0U2VsZWN0ZWQob3duZXIuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm9rOlxyXG4gICAgICAgICAgICAgICAgaWYgKG93bmVyLmN1cnJlbnQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcEFyZ3Mub25GaXJzdFBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBBcmdzLm9uSG9tZVBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvd25lci5jdXJyZW50ID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3duZXIudGRlVXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2xkTG9jayA9IG93bmVyLnRkZVVzZXIuY2hpbGRMb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkTG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRNZW51LnNob3coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG4gPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2hpbGRMb2NrKGZ1bmN0aW9uIChjb2RlLCBtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWRMb2NrKGNvZGUsIG1zZywgb3duZXIsIGJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEsIDAsICfor7fovpPlhaXml6fnmoQ25L2N5pWw5a2X5a+G56CB77yM5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIsIDAsICfpgInmi6npnIDopoHnmoTmk43kvZzmjInnoa7lrprplK7ov5vooYzkuIvkuIDmraXvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE1lbnUuc2hvdyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lvIDlkK/nq6XplIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRDaGlsZExvY2sob3duZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb3duZXIub25LZXlEb3duLCBvd25lci50ZGVVc2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxLCAwLCAn5byA5ZCv56ul6ZSB5ZCO77yM5q+P5qyh5LuY6LS56K6i6LSt6ZyA6L6T5YWl5q2j56Gu5a+G56CB77yb5oyJ6L+U5Zue6ZSu5YWz6Zet5by556qX44CCJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob3duZXIuY3VycmVudCA9PSA0KXtcclxuICAgICAgICAgICAgICAgICAgICBhcHBBcmdzLm9uVHVybnRhYmxlUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5lc2M6XHJcbiAgICAgICAgICAgICAgICBhcHBBcmdzLm9uRmlyc3RQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Yob3duZXIub25LZXlEb3duKSA9PT0gJ2Z1bmN0aW9uJykgb3duZXIub25LZXlEb3duKGN1cktleSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIGNvZGUge2ludH1cclxuICogQHBhcmFtIG1zZyB7c3RyaW5nfVxyXG4gKiBAcGFyYW0gb3duZXIge0hvbWVNZW51fVxyXG4gKiBAcGFyYW0gYnRuIHtpbnR9IDAu5YWz6Zet56ul6ZSBIDEu5pu05pS55a+G56CBXHJcbiAqL1xyXG5mdW5jdGlvbiBvblZhbGlkTG9jayhjb2RlLCBtc2csIG93bmVyLCBidG4pIHtcclxuICAgIGlmIChjb2RlID09IDApIHtcclxuICAgICAgICB2YXIgb2xkTG9jayA9IG93bmVyLnRkZVVzZXIuY2hpbGRMb2NrO1xyXG4gICAgICAgIGlmIChtc2cgPT0gb2xkTG9jaykge1xyXG4gICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGJjbGkgPSBvd25lci50ZGVVc2VyLnN0YmNsaTtcclxuICAgICAgICAgICAgICAgIHN0YmNsaS50ZGVMb2NrKG9sZExvY2ssICcnLCBmdW5jdGlvbiAoY29kZSwgYml6KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHQgPSAn56ul6ZSB5YWz6Zet5oiQ5YqfJztcclxuICAgICAgICAgICAgICAgICAgICBvblRkZUxvY2soY29kZSwgYml6LCBvd25lciwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc2V0Q2hpbGRMb2NrKG93bmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGRsZ0J0bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRsZ0J0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NoaWxkTG9jayhmdW5jdGlvbiAoY29kZSwgbXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWRMb2NrKGNvZGUsIG1zZywgb3duZXIsIGJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMSwgMCwgJ+ivt+i+k+WFpeaXp+eahDbkvY3mlbDlrZflr4bnoIHvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwLCAn5o+Q56S6JywgJ+erpemUgemqjOivgeWHuumUmScsICfph43or5UnLCAn5Y+W5raIJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG93bmVyLm9uS2V5RG93biwgb3duZXIudGRlVXNlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Q2hpbGRMb2NrKG93bmVyKSB7XHJcbiAgICB2YXIgb2xkTG9jayA9IG93bmVyLnRkZVVzZXIuY2hpbGRMb2NrO1xyXG4gICAgdmFyIG5ld0xvY2s7XHJcbiAgICBzaG93Q2hpbGRMb2NrKGZ1bmN0aW9uIChjb2RlLCBtc2cpIHtcclxuICAgICAgICBpZiAoY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIG5ld0xvY2sgPSBtc2c7XHJcbiAgICAgICAgICAgIHNob3dDaGlsZExvY2soZnVuY3Rpb24gKGNvZGUsIG1zZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cgIT0gbmV3TG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0Q2hpbGRMb2NrKG93bmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwLCAn5o+Q56S6JywgJ+S4pOasoei+k+WFpeS4jeWQjCcsICfph43or5UnLCAn5Y+W5raIJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YmNsaSA9IG93bmVyLnRkZVVzZXIuc3RiY2xpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGJjbGkudGRlTG9jayhvbGRMb2NrLCBuZXdMb2NrLCBmdW5jdGlvbiAoY29kZSwgYml6KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG9sZExvY2sgPyAn56ul6ZSB5pu05pS55oiQ5YqfJyA6ICfnq6XplIHlvIDlkK/miJDlip8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25UZGVMb2NrKGNvZGUsIGJpeiwgb3duZXIsIHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb3duZXIub25LZXlEb3duLCBvd25lci50ZGVVc2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCwgMSwgJ+ivt+WGjeasoei+k+WFpeaWsOeahDbkvY3mlbDlrZflr4bnoIHvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG93bmVyLm9uS2V5RG93biwgb3duZXIudGRlVXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgMCwgMCwgJ+ivt+i+k+WFpeaWsOeahDbkvY3mlbDlrZflr4bnoIHvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25UZGVMb2NrKGNvZGUsIGJpeiwgb3duZXIpIHtcclxuICAgIHZhciB0ZXh0ID0gYXJndW1lbnRzWzNdID8gYXJndW1lbnRzWzNdIDogJ+erpemUgeiuvue9ruaIkOWKnyc7XHJcbiAgICBpZiAoY29kZSA9PSAwKSB7XHJcbiAgICAgICAgb3duZXIudGRlVXNlci5jaGlsZExvY2sgPSBiaXouY2hpbGRMb2NrO1xyXG4gICAgICAgIHNob3dMb2FkaW5nKCfmj5DnpLonLCB0ZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd0xvYWRpbmcoJ+aPkOekuicgKyAnWycgKyBjb2RlICsgJ10nLCAn572R57uc5byC5bi4JyArICdbJyArIGJpeiArICddJyk7XHJcbiAgICB9XHJcbiAgICBoaWRlTG9hZGluZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgb3duZXIuc2hvdyhvd25lci5jdXJyZW50LCBvd25lci5vbktleURvd24sIG93bmVyLnRkZVVzZXIpO1xyXG4gICAgfSwgMjAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7SG9tZU1lbnV9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9Ib21lTWVudS5qcyIsImltcG9ydCB7c3RiTnVsbH0gZnJvbSAnLi4vdG9vZG8vX3N0Ym51bGwnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFBhZ2VBcmdzKHBhZ2UpIHtcclxuICAgIHRoaXMucHJlZml4ID0gcGFnZSA/IHBhZ2UgKyAnLicgOiAnJztcclxufVxyXG5QYWdlQXJncy5wcm90b3R5cGUgPSB7XHJcbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGspIHtcclxuICAgICAgICByZXR1cm4gc3RiTnVsbC5nZXRWYWx1ZSh0aGlzLnByZWZpeCArIGspO1xyXG4gICAgfSxcclxuICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoaywgdikge1xyXG4gICAgICAgIHN0Yk51bGwuc2V0VmFsdWUodGhpcy5wcmVmaXggKyBrLCB2KTtcclxuICAgIH0sXHJcbiAgICBnZXRSZXR1cm5Vcmw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgncmV0dXJuVXJsJyk7XHJcbiAgICB9LFxyXG4gICAgc2V0UmV0dXJuVXJsOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgncmV0dXJuVXJsJywgdXJsKTtcclxuICAgIH0sXHJcbiAgICBnZXRSZWRpcmVjdFVybDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCdyZWRpcmVjdFVybCcpO1xyXG4gICAgfSxcclxuICAgIHNldFJlZGlyZWN0VXJsOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgncmVkaXJlY3RVcmwnLCB1cmwpO1xyXG4gICAgfSxcclxuICAgIHNldENhbGxGbGFnOmZ1bmN0aW9uIChudW0pIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKFwiY2FsbEZsYWdcIixudW0pO1xyXG4gICAgfSxcclxuICAgIGdldENhbGxGbGFnOmZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZShcImNhbGxGbGFnXCIpO1xyXG4gICAgfSxcclxuICAgIHNldFN1Y2Nlc3NDb2RlOmZ1bmN0aW9uIChzdWNjZXNzQ29kZSkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJzdWNjZXNzQ29kZVwiLHN1Y2Nlc3NDb2RlKTtcclxuICAgIH0sXHJcbiAgICBnZXRTdWNjZXNzQ29kZTpmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUoXCJzdWNjZXNzQ29kZVwiKTtcclxuICAgIH0sXHJcbiAgICBzZXRQcml6ZUlEOmZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUoXCJQcml6ZUlEXCIsaWQpO1xyXG4gICAgfSxcclxuICAgIGdldFByaXplSUQ6ZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKFwiUHJpemVJRFwiKTtcclxuICAgIH0sXHJcbiAgICBnZXRUdXJudGFibGVVcmw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSgnVHVybnRhYmxlVXJsJyk7XHJcbiAgICB9LFxyXG4gICAgc2V0VHVybnRhYmxlVXJsOiBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgnVHVybnRhYmxlVXJsJywgdXJsKTtcclxuICAgIH0sXHJcbn07XHJcblxyXG5cclxudmFyIHNob3BBcmdzID0gbmV3IFBhZ2VBcmdzKCdzaG9wJyk7XHJcbnZhciByZWNoYXJnZUFyZ3MgPSBuZXcgUGFnZUFyZ3MoJ3JlY2hhcmdlJyk7XHJcbnZhciBjYWxsYmFja0FyZ3MgPSBuZXcgUGFnZUFyZ3MoJ2NhbGxiYWNrJyk7XHJcbnZhciB0dXJuVGFibGVBcmdzID0gbmV3IFBhZ2VBcmdzKCd0dXJudGFibGUnKTtcclxuXHJcbnZhciBhcHBBcmdzID0gbmV3IFBhZ2VBcmdzKCdhcHAnKTtcclxuYXBwQXJncy5vbkZpcnN0UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBmaXJzdFVybCA9IGFwcEFyZ3MuZ2V0UmVkaXJlY3RVcmwoKTtcclxuICAgIGlmIChmaXJzdFVybCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZmlyc3RVcmw7XHJcbiAgICB9XHJcbn07XHJcblxyXG5hcHBBcmdzLm9uSG9tZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaG9tZVVybCA9IGFwcEFyZ3MuZ2V0UmV0dXJuVXJsKCk7XHJcbiAgICBpZiAoaG9tZVVybCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaG9tZVVybDtcclxuICAgIH1cclxufTtcclxuXHJcbmFwcEFyZ3Mub25UdXJudGFibGVQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIFR1cm50YWJsZVVybCA9IGFwcEFyZ3MuZ2V0VHVybnRhYmxlVXJsKCk7XHJcbiAgICBpZiAoVHVybnRhYmxlVXJsKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBUdXJudGFibGVVcmw7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB7c2hvcEFyZ3MscmVjaGFyZ2VBcmdzLGNhbGxiYWNrQXJncyxhcHBBcmdzLHR1cm5UYWJsZUFyZ3N9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvUGFnZUFyZ3MuanMiLCJpbXBvcnQge3N0Yk51bGx9IGZyb20gJy4uL3Rvb2RvL19zdGJudWxsJ1xyXG5pbXBvcnQge3N0YmNsaX0gZnJvbSAnLi4vdG9vZG8vX3N0YmNsaSc7XHJcblxyXG5mdW5jdGlvbiBQYWdlVXJsKCkge1xyXG59XHJcblBhZ2VVcmwucHJvdG90eXBlID0ge1xyXG4gICAgcGFyc2VRdWVyeTogZnVuY3Rpb24gKHF1ZXJ5KSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBxdWVyeS5pbmRleE9mKCc/Jyk7XHJcbiAgICAgICAgaWYgKHN0YXJ0ID49IDApIHtcclxuICAgICAgICAgICAgcXVlcnkgPSBxdWVyeS5zbGljZShzdGFydCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcmdzID0ge307XHJcbiAgICAgICAgY29uc3QgYXJyID0gcXVlcnkuc3BsaXQoJyYnKTtcclxuICAgICAgICBmb3IgKGxldCBtID0gMDsgbSA8IGFyci5sZW5ndGg7IG0rKykge1xyXG4gICAgICAgICAgICBjb25zdCB2ID0gYXJyW21dO1xyXG4gICAgICAgICAgICBjb25zdCB0bXAgPSB2LnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgIGFyZ3NbdG1wWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudCh0bXBbMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJncztcclxuICAgIH0sXHJcbiAgICBwYXJzZUFyZ3M6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgbGV0IGssIHY7XHJcbiAgICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgICAgZm9yIChrIGluIGFyZ3MpIHtcclxuICAgICAgICAgICAgLy8hIGpzIOS8muaKiicwJ+W9k+S9nGZhbHNlIGFyZ3Nba10gPT4gYXJnc1trXSAhPT0gJydcclxuICAgICAgICAgICAgaWYgKGFyZ3MuaGFzT3duUHJvcGVydHkoaykgJiYgYXJnc1trXSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHYgPSBlbmNvZGVVUklDb21wb25lbnQoYXJnc1trXSk7XHJcbiAgICAgICAgICAgICAgICBhcnIucHVzaChrICsgJz0nICsgdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyci5qb2luKCcmJyk7XHJcbiAgICB9LFxyXG4gICAgYmFzZVVybDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy90ZGVudGVyJztcclxuICAgIH0sXHJcbiAgICBnZXRVc2VySWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3RiTnVsbC5nZXRWYWx1ZSgndG9vZG8udXNlcklkJyk7XHJcbiAgICB9LFxyXG4gICAgZ2V0U3RiSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3RiTnVsbC5nZXRDYXJkVFYoKTtcclxuICAgIH0sXHJcbiAgICBnZXRTaWduS2V5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIG1zZyA9IHRoaXMuZ2V0VXNlcklkKCkgKyB0cztcclxuICAgICAgICB2YXIgbWQ1ID0gc3RiY2xpLm1kNShtc2cpO1xyXG4gICAgICAgIHJldHVybiBtZDUgKyB0cztcclxuICAgIH0sXHJcbiAgICBnZXRDaGlsZExvY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9LFxyXG4gICAgcmVjaGFyZ2VVcmw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArICcvdGRzcnYvYXBpL2NvaW4nO1xyXG4gICAgfSxcclxuICAgIGNhbGxVcmw6IGZ1bmN0aW9uIChpdGVtLCByZXR1cm5VcmwpIHtcclxuICAgICAgICBsZXQgcmVjaGFyZ2VVcmwgPSB0aGlzLnJlY2hhcmdlVXJsKCk7XHJcbiAgICAgICAgbGV0IGFyZ3MgPSB7fTtcclxuICAgICAgICBhcmdzLmdhbWVpZCA9IGl0ZW0uZ2FtZUlkO1xyXG4gICAgICAgIGFyZ3Mua2V5ID0gdGhpcy5nZXRTaWduS2V5KCk7XHJcbiAgICAgICAgYXJncy5kZXYgPSB0aGlzLmdldFN0YklkKCk7XHJcbiAgICAgICAgYXJncy5mYXRoZXJrZXkgPSB0aGlzLmdldENoaWxkTG9jaygpO1xyXG4gICAgICAgIGFyZ3MudXNlcklkID0gdGhpcy5nZXRVc2VySWQoKTtcclxuICAgICAgICBhcmdzLnVzZXJpZCA9IHRoaXMuZ2V0VXNlcklkKCk7XHJcbiAgICAgICAgYXJncy50cyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGFyZ3MucmV0dXJuVVJMID0gcmV0dXJuVXJsO1xyXG5cclxuICAgICAgICB2YXIgaG9zdE5hbWUgPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7IC8v5LiN5bim56uv5Y+jXHJcbiAgICAgICAgdmFyIGRzdFVybCA9IGl0ZW0udXJsO1xyXG4gICAgICAgIGRzdFVybCA9IGRzdFVybC5yZXBsYWNlKCcxOTIuMTY4LjIwMC4xMDAnLCBob3N0TmFtZSk7XHJcblxyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7fTtcclxuICAgICAgICBwYXJhbXMucmVkaXJlY3RVcmwgPSBkc3RVcmwgKyAnPycgKyB0aGlzLnBhcnNlQXJncyhhcmdzKSArICcmcmVjaGFnZVVSTD0nICsgcmVjaGFyZ2VVcmw7XHJcbiAgICAgICAgcGFyYW1zLnJldHVyblVybCA9IHJldHVyblVybDtcclxuICAgICAgICByZXR1cm4gdGhpcy5iYXNlVXJsKCkgKyAnL3Jlc2l6ZS5odG1sPycgKyB0aGlzLnBhcnNlQXJncyhwYXJhbXMpO1xyXG4gICAgfSxcclxuICAgIGNhbGxVcmxCYXNlOiBmdW5jdGlvbiAoaXRlbSwgcmV0dXJuVXJsKSB7XHJcbiAgICAgICAgbGV0IHJlY2hhcmdlVXJsID0gdGhpcy5yZWNoYXJnZVVybCgpO1xyXG4gICAgICAgIGxldCBhcmdzID0ge307XHJcbiAgICAgICAgYXJncy5nYW1laWQgPSBpdGVtLmdhbWVJZDtcclxuICAgICAgICBhcmdzLmtleSA9IHRoaXMuZ2V0U2lnbktleSgpO1xyXG4gICAgICAgIGFyZ3MuZGV2ID0gdGhpcy5nZXRTdGJJZCgpO1xyXG4gICAgICAgIGFyZ3MuZmF0aGVya2V5ID0gdGhpcy5nZXRDaGlsZExvY2soKTtcclxuICAgICAgICBhcmdzLnVzZXJJZCA9IHRoaXMuZ2V0VXNlcklkKCk7XHJcbiAgICAgICAgYXJncy51c2VyaWQgPSB0aGlzLmdldFVzZXJJZCgpO1xyXG4gICAgICAgIGFyZ3MudHMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBhcmdzLnJldHVyblVSTCA9IHJldHVyblVybDtcclxuXHJcbiAgICAgICAgdmFyIGhvc3ROYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lOyAvL+S4jeW4puerr+WPo1xyXG4gICAgICAgIHZhciBkc3RVcmwgPSBpdGVtLnVybDtcclxuICAgICAgICBkc3RVcmwgPSBkc3RVcmwucmVwbGFjZSgnMTkyLjE2OC4yMDAuMTAwJywgaG9zdE5hbWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gZHN0VXJsICsgJz8nICsgdGhpcy5wYXJzZUFyZ3MoYXJncykgKyAnJnJlY2hhZ2VVUkw9JyArIHJlY2hhcmdlVXJsO1xyXG4gICAgfSxcclxuICAgIGNhbGxHYW1lOiBmdW5jdGlvbiAoaXRlbSwgcmV0dXJuVXJsKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmNhbGxVcmwoaXRlbSwgcmV0dXJuVXJsKTtcclxuICAgIH0sXHJcbiAgICBjYWxsR2FtZUJhc2U6IGZ1bmN0aW9uIChpdGVtLCByZXR1cm5VcmwpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuY2FsbFVybEJhc2UoaXRlbSwgcmV0dXJuVXJsKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IHBhZ2VVcmwgPSBuZXcgUGFnZVVybCgpO1xyXG5cclxuZXhwb3J0IHtwYWdlVXJsfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL1BhZ2VVcmwuanMiLCJmdW5jdGlvbiBnZXRKU09OKHVybCwgY2IpIHtcclxuICAgIGxldCByZXE7XHJcbiAgICByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3Q7XHJcbiAgICByZXEub3BlbignR0VUJywgdXJsLCB0cnVlKTtcclxuICAgIHJlcS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHJlcS5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zQXJyID0gZXZhbCgnWycgKyByZXEucmVzcG9uc2VUZXh0ICsgJ10nKTtcclxuICAgICAgICAgICAgY2IoaXRlbXNBcnJbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXEuc2VuZChudWxsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYmFzZVVybCgpIHtcclxuICAgIHJldHVybiBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy90ZGVudGVyJztcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsYXlCYWNrZ3JvdW5kKG5vZGUsIGltZywgZGVsYXkpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG5vZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgaW1nICsgJyknXHJcbiAgICB9LCBkZWxheSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0SlNPTixiYXNlVXJsLGRlbGF5QmFja2dyb3VuZH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9hYmMuanMiLCJpbXBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc30gZnJvbSBcIi4uL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge2ludH0gY2FsbGJhY2suY29kZSDmjInplK4gMC7ovpPlhaXlrozmiJAgMS7lj5bmtohcclxuICogQHBhcmFtIHtzdHJpbmd9IGNhbGxiYWNrLm1zZyDovpPlhaXnmoTlrZfnrKbkuLJcclxuICogQHBhcmFtIHRpdGxlIHtpbnR9IOagh+mimOWbvueJhyAwLuiuvue9rumTnOmUgSAxLumTnOmUgemqjOivgVxyXG4gKiBAcGFyYW0gbGFiZWwge2ludH0g5o+Q56S66K+tIDAu6L6T5YWl5a+G56CBIDEu5YaN5qyh6L6T5YWlXHJcbiAqL1xyXG5mdW5jdGlvbiBzaG93Q2hpbGRMb2NrKGNhbGxiYWNrLCB0aXRsZSwgbGFiZWwpIHtcclxuICAgIHRpdGxlID0gYXJndW1lbnRzWzFdID8gYXJndW1lbnRzWzFdIDogMDtcclxuICAgIGxhYmVsID0gYXJndW1lbnRzWzJdID8gYXJndW1lbnRzWzJdIDogMDtcclxuICAgIHZhciB0aXBzID0gYXJndW1lbnRzWzNdID8gYXJndW1lbnRzWzNdIDogJ+ivt+i+k+WFpTbkvY3mlbDlrZflr4bnoIHvvIzmjInov5Tlm57plK7lhbPpl63lvLnnqpfjgIInO1xyXG5cclxuICAgIHZhciBsYXlvdXRJZCA9ICdsb2NrLWxheW91dC0wMDMnO1xyXG4gICAgdmFyIGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheW91dElkKTtcclxuICAgIGlmICghbGF5b3V0KSB7XHJcbiAgICAgICAgbGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGF5b3V0LmNsYXNzTmFtZSA9ICdsb2NrLWxheW91dCc7XHJcbiAgICAgICAgbGF5b3V0LmlkID0gbGF5b3V0SWQ7XHJcbiAgICAgICAgbGF5b3V0LmlubmVySFRNTCA9ICcnICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsb2NrLWJnXCI+JyArXHJcbiAgICAgICAgICAgICcgIDxkaXYgaWQ9XCJsb2NrLXRpdGxlXCIgY2xhc3M9XCJsb2NrLXRpdGxlLTBcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBjbGFzcz1cImxvY2staW5wdXRcIj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1sYWJlbFwiIGNsYXNzPVwibG9jay1sYWJlbC0wXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stdGV4dFwiIGNsYXNzPVwibG9jay10ZXh0XCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgIDwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICA8ZGl2IGlkPVwibG9jay10aXBzXCIgY2xhc3M9XCJsb2NrLXRpcHNcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxvY2sta2V5Ym9hcmRcIj4nICtcclxuICAgICAgICAgICAgJyAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWJnXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTFcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiAgICAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjxzcGFuPjE8L3NwYW4+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTJcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+Mjwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tM1wiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+Mzwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tNFwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+NDwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tNVwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+NTwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tNlwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+Njwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tN1wiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+Nzwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tOFwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+ODwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tOVwiIGNsYXNzPVwibG9jay1udW1cIj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWZvY3VzXCI+PC9kaXY+ICAgICA8ZGl2IGNsYXNzPVwibG9jay1udW0taW1nXCI+PHNwYW4+OTwvc3Bhbj48L2Rpdj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1udW0tMTBcIiBjbGFzcz1cImxvY2stbnVtXCI+IDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiAgICAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLW51bS0wXCIgY2xhc3M9XCJsb2NrLW51bVwiPiA8ZGl2IGNsYXNzPVwibG9jay1udW0tZm9jdXNcIj48L2Rpdj4gPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjxzcGFuPjA8L3NwYW4+PC9kaXY+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stbnVtLTExXCIgY2xhc3M9XCJsb2NrLW51bVwiPiAgIDxkaXYgY2xhc3M9XCJsb2NrLW51bS1mb2N1c1wiPjwvZGl2PiAgPGRpdiBjbGFzcz1cImxvY2stbnVtLWltZ1wiPjwvZGl2PjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICA8L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsYXlvdXQpO1xyXG4gICAgfVxyXG4gICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgdmFyIGxvY2tUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NrLXRleHRcIik7XHJcbiAgICB2YXIgbG9ja1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NrLXRpdGxlXCIpO1xyXG4gICAgdmFyIGxvY2tMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NrLWxhYmVsJyk7XHJcbiAgICB2YXIgbG9ja1RpcHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jay10aXBzJyk7XHJcbiAgICBsb2NrVGV4dC5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgbG9ja1RpdGxlLmNsYXNzTmFtZSA9IFwibG9jay10aXRsZS1cIiArIHRpdGxlO1xyXG4gICAgbG9ja0xhYmVsLmNsYXNzTmFtZSA9ICdsb2NrLWxhYmVsLScgKyBsYWJlbDtcclxuICAgIGxvY2tUaXBzLmlubmVySFRNTCA9IHRpcHM7XHJcblxyXG4gICAgdmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG4gICAgdmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuICAgIHZhciBpdGVtTm9kZXMgPSBbXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtMSwgaWQ6IFwibG9jay1udW0tMVwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW0yLCBpZDogXCJsb2NrLW51bS0yXCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTMsIGlkOiBcImxvY2stbnVtLTNcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtNCwgaWQ6IFwibG9jay1udW0tNFwifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW01LCBpZDogXCJsb2NrLW51bS01XCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTYsIGlkOiBcImxvY2stbnVtLTZcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtNywgaWQ6IFwibG9jay1udW0tN1wifSxcclxuICAgICAgICB7a2V5Q29kZToga2V5Q29kZS5udW04LCBpZDogXCJsb2NrLW51bS04XCJ9LFxyXG4gICAgICAgIHtrZXlDb2RlOiBrZXlDb2RlLm51bTksIGlkOiBcImxvY2stbnVtLTlcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUuYmFjaywgaWQ6IFwibG9jay1udW0tMTBcIn0sXHJcbiAgICAgICAge2tleUNvZGU6IGtleUNvZGUubnVtMCwgaWQ6IFwibG9jay1udW0tMFwifSxcclxuICAgICAgICB7a2V5Q29kZTogbnVsbCwgaWQ6IFwibG9jay1udW0tMTFcIn1cclxuICAgIF07XHJcblxyXG4gICAgdmFyIGlucHV0VGV4dCA9ICcnO1xyXG4gICAgdmFyIGN1cklkeCA9IDA7XHJcblxyXG4gICAgdmFyIHNldFNlbGVjdGVkID0gZnVuY3Rpb24gKGN1cklkeCkge1xyXG4gICAgICAgIGl0ZW1Ob2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtTm9kZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtTm9kZS5pZCk7XHJcbiAgICAgICAgICAgLy8gbm9kZS5jbGFzc05hbWUgPSAoaW5kZXggPT0gY3VySWR4ID8gJ2xvY2stbnVtLWZvY3VzJyA6ICdsb2NrLW51bScpO1xyXG4gICAgICAgICAgICBub2RlLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpLnN0eWxlLmRpc3BsYXk9aW5kZXggPT0gY3VySWR4ID8gXCJibG9ja1wiOlwibm9uZVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHZhciBzdWJtaXQgPSBmdW5jdGlvbiAoY29kZSkge1xyXG4gICAgICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgLy9kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxheW91dCk7XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcclxuICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soY29kZSwgaW5wdXRUZXh0KTtcclxuICAgIH07XHJcbiAgICB2YXIgaW52aXNpYmxlID0gZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICB2YXIgc3RhciA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7ICsraSkgc3RhciArPSAnKic7XHJcbiAgICAgICAgcmV0dXJuIHN0YXI7XHJcbiAgICB9O1xyXG4gICAgdmFyIGNsaWNrTnVtID0gZnVuY3Rpb24gKG51bSkge1xyXG4gICAgICAgIGlucHV0VGV4dCArPSBTdHJpbmcobnVtKTtcclxuICAgICAgICBsb2NrVGV4dC5pbm5lclRleHQgPSBpbnZpc2libGUoaW5wdXRUZXh0KTtcclxuICAgIH07XHJcbiAgICB2YXIgYmFja3NwYWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlucHV0VGV4dCA9IGlucHV0VGV4dC5zdWJzdHJpbmcoMCwgaW5wdXRUZXh0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIGxvY2tUZXh0LmlubmVyVGV4dCA9IGludmlzaWJsZShpbnB1dFRleHQpO1xyXG4gICAgfTtcclxuICAgIHZhciBoYW5kbGVPayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY3VycmVudCA9IGl0ZW1Ob2Rlc1tjdXJJZHhdO1xyXG4gICAgICAgIGlmIChjdXJyZW50LmtleUNvZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBiYWNrc3BhY2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBoYW5kbGVLZXkoY3VycmVudC5rZXlDb2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIGhhbmRsZUtleSA9IGZ1bmN0aW9uIChjdXJLZXkpIHtcclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIGlmICgoY3VySWR4ICUgMykgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cklkeC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIGlmICgoY3VySWR4ICUgMykgIT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cklkeCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS51cDpcclxuICAgICAgICAgICAgICAgIGlmIChjdXJJZHggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VySWR4IC09IDM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmRvd246XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VySWR4IDwgOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cklkeCArPSAzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazpcclxuICAgICAgICAgICAgICAgIGhhbmRsZU9rKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQoMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTE6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW0yOlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMzpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTQ6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW01OlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtNjpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTc6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW04OlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtOTpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6XHJcbiAgICAgICAgICAgICAgICB2YXIgbnVtID0gY3VyS2V5IC0ga2V5Q29kZS5udW0wO1xyXG4gICAgICAgICAgICAgICAgY2xpY2tOdW0obnVtKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRTZWxlY3RlZCgwKTtcclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIHZhciBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBoYW5kbGVLZXkoY3VyS2V5KTtcclxuICAgICAgICBzZXRTZWxlY3RlZChjdXJJZHgpO1xyXG5cclxuICAgICAgICBpZiAoaW5wdXRUZXh0Lmxlbmd0aCA9PSA2KSB7XHJcbiAgICAgICAgICAgIHN1Ym1pdCgwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQge3Nob3dDaGlsZExvY2t9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAvY2hpbGRMb2NrLmpzIiwiaW1wb3J0IHtnZXRLZXlDb2RlcyxnZXRFdmVudCxnZXRLZXksZ2V0Q29kZXN9IGZyb20gXCIuLi90b29kby9fa2V5Y29kZXNcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBDaGlsZE1lbnUoKSB7XHJcbn1cclxuQ2hpbGRNZW51LnByb3RvdHlwZSA9IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHtmdW5jdGlvbn1cclxuICAgICAqIEBwYXJhbSBjYWxsYmFjay5idG4ge2ludH0gMC7mjInpkq4xIDEu5oyJ6ZKuMiAtMS7lj5bmtojmk43kvZxcclxuICAgICAqIEBwYXJhbSBjbnQge2ludH0gWzEsMl0g5oyJ6ZKu5pWw6YePXHJcbiAgICAgKiBAcGFyYW0gYnRuIHtpbnR9IFswLDFdIOm7mOiupOmAieS4rVxyXG4gICAgICogQHBhcmFtIHRleHQge3N0cmluZ30g5o+Q56S65paH5pysXHJcbiAgICAgKi9cclxuICAgIHNob3c6IGZ1bmN0aW9uIChjYWxsYmFjaywgY250LCBidG4sIHRleHQpIHtcclxuICAgICAgICB2YXIgbGF5b3V0SWQgPSAnbG9jay1tZW51LWxheW91dCc7XHJcbiAgICAgICAgdmFyIGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheW91dElkKTtcclxuICAgICAgICBpZiAoIWxheW91dCkge1xyXG4gICAgICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgbGF5b3V0LmNsYXNzTmFtZSA9ICdsb2NrLWxheW91dCc7XHJcbiAgICAgICAgICAgIGxheW91dC5pZCA9IGxheW91dElkO1xyXG4gICAgICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibG9jay1tZW51LWJnXCI+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLXRpdGxlXCIgY2xhc3M9XCJsb2NrLXRpdGxlLTBcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImxvY2stYnRuMFwiIGNsYXNzPVwibG9jay1idG5cIj48c3Bhbj7lvIDlkK/nq6XplIE8L3NwYW4+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJsb2NrLWJ0bjFcIiBjbGFzcz1cImxvY2stYnRuXCI+PHNwYW4+5YWz6Zet56ul6ZSBPC9zcGFuPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJyAgICA8ZGl2IGlkPVwibG9jay1idG4yXCIgY2xhc3M9XCJsb2NrLWJ0blwiPjxzcGFuPuabtOaUueWvhueggTwvc3Bhbj48L2Rpdj4nICtcclxuICAgICAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImxvY2stdGlwc1wiPumAieaLqemcgOimgeeahOaTjeS9nOaMieehruWumumUrui/m+ihjOS4i+S4gOatpe+8jOaMiei/lOWbnumUruWFs+mXreW8ueeql+OAgjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGF5b3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICB2YXIgYmcgPSBsYXlvdXQucXVlcnlTZWxlY3RvcignLmxvY2stbWVudS1iZycpO1xyXG4gICAgICAgIHZhciBidG5Ob2RlcyA9IGJnLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sb2NrLWJ0bicpO1xyXG4gICAgICAgIGZvcih2YXIgaT0wO2k8YnRuTm9kZXMubGVuZ3RoOysraSl7XHJcbiAgICAgICAgICAgIHZhciBidG5Ob2RlID0gYnRuTm9kZXNbaV07XHJcbiAgICAgICAgICAgIGJ0bk5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBidG5Ob2RlMCwgYnRuTm9kZTE7XHJcbiAgICAgICAgaWYgKGNudCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGJ0bk5vZGUwID0gYnRuTm9kZXNbMF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY250ID0gMjtcclxuICAgICAgICAgICAgYnRuTm9kZTAgPSBidG5Ob2Rlc1sxXTtcclxuICAgICAgICAgICAgYnRuTm9kZTEgPSBidG5Ob2Rlc1syXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ0bk5vZGUwKSBidG5Ob2RlMC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBpZiAoYnRuTm9kZTEpIGJ0bk5vZGUxLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgICB2YXIgdGlwTm9kZSA9IGJnLnF1ZXJ5U2VsZWN0b3IoJy5sb2NrLXRpcHMnKTtcclxuICAgICAgICB0aXBOb2RlLmlubmVySFRNTCA9IHRleHQ7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZvY3VzQnRuKGJ0bklkeCkge1xyXG4gICAgICAgICAgICB2YXIgZm9jdXNOb2RlO1xyXG4gICAgICAgICAgICBpZiAoY250ID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGJ0bk5vZGUwLmNsYXNzTmFtZT1cImxvY2stYnRuIGxvY2stYnRuLWZvY3VzXCI7XHJcbiAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUgPSBidG5Ob2RlMC5xdWVyeVNlbGVjdG9yKCcubG9jay1idG4tZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgIC8vIGZvY3VzTm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChidG5JZHggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bk5vZGUwLmNsYXNzTmFtZT1cImxvY2stYnRuIGxvY2stYnRuLWZvY3VzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuTm9kZTEuY2xhc3NOYW1lPVwibG9jay1idG5cIjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUgPSBidG5Ob2RlMC5xdWVyeVNlbGVjdG9yKCcubG9jay1idG4tZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9jdXNOb2RlID0gYnRuTm9kZTEucXVlcnlTZWxlY3RvcignLmxvY2stYnRuLWZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9jdXNOb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bk5vZGUwLmNsYXNzTmFtZT1cImxvY2stYnRuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuTm9kZTEuY2xhc3NOYW1lPVwibG9jay1idG4gbG9jay1idG4tZm9jdXNcIjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUgPSBidG5Ob2RlMC5xdWVyeVNlbGVjdG9yKCcubG9jay1idG4tZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUgPSBidG5Ob2RlMS5xdWVyeVNlbGVjdG9yKCcubG9jay1idG4tZm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb2N1c05vZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnRuID0gYnRuSWR4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJ0biA8IDAgfHwgYnRuID4gMSkgYnRuID0gMDtcclxuICAgICAgICBmb2N1c0J0bihidG4pO1xyXG5cclxuICAgICAgICBsZXQgc3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG4gICAgICAgIHZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcbiAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgICAgICBpZiAocHJlQ29kZXMuaW5kZXhPZihjdXJLZXkpICE9IC0xKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBrZXlDb2RlLnVwOlxyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzQnRuKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmRvd246XHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNCdG4oY250IC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGtleUNvZGUub2s6ICAgICAvL+ehruWumlxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5udW0wOiAgICAgIC8v5Y+W5raIXHJcbiAgICAgICAgICAgICAgICAgICAgYnRuID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soYnRuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjaGlsZE1lbnUgPSBuZXcgQ2hpbGRNZW51KCk7XHJcbmV4cG9ydCB7Y2hpbGRNZW51fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2NoaWxkTWVudS5qcyIsImltcG9ydCB7Z2V0S2V5Q29kZXMsZ2V0RXZlbnQsZ2V0S2V5LGdldENvZGVzfSBmcm9tIFwiLi4vdG9vZG8vX2tleWNvZGVzXCI7XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICogQHBhcmFtIHtpbnR9IGNhbGxiYWNrLmJ0biDmjInplK4gMC7noa7lrpogMS7lj5bmtohcclxuICogQHBhcmFtIHtudW1iZXJ9IGJ0biDpu5jorqTnhKbngrkgMC7noa7lrpogMS7lj5bmtohcclxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIOeql+WPo+agh+mimFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCDnqpflj6PlhoXlrrlcclxuICogQHBhcmFtIHtzdHJpbmd9IGJ0bjAg5oyJ6ZKuMVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYnRuMSDmjInpkq4yXHJcbiAqL1xyXG5mdW5jdGlvbiBzaG93RGlhbG9nKC8qY2FsbGJhY2ssIGJ0biwgdGl0bGUsIHRleHQsIGJ0bjAsIGJ0bjEqLykge1xyXG4gICAgY29uc3QgbGF5b3V0SWQgPSAnZGlhbG9nLWxheW91dC0wMDEnO1xyXG4gICAgbGV0IGNhbGxiYWNrLCBidG4sIHRpdGxlLCB0ZXh0LCBidG4wLCBidG4xO1xyXG4gICAgY2FsbGJhY2sgPSBhcmd1bWVudHNbMF0gPyBhcmd1bWVudHNbMF0gOiBudWxsO1xyXG4gICAgYnRuID0gYXJndW1lbnRzWzFdID8gYXJndW1lbnRzWzFdIDogMDtcclxuICAgIHRpdGxlID0gYXJndW1lbnRzWzJdID8gYXJndW1lbnRzWzJdIDogJ+aPkOekuic7XHJcbiAgICB0ZXh0ID0gYXJndW1lbnRzWzNdID8gYXJndW1lbnRzWzNdIDogJyc7XHJcbiAgICBidG4wID0gYXJndW1lbnRzWzRdID8gYXJndW1lbnRzWzRdIDogJ+ehruWumic7XHJcbiAgICBidG4xID0gYXJndW1lbnRzWzVdID8gYXJndW1lbnRzWzVdIDogJ+i/lOWbnic7XHJcbiAgICB2YXIgYWxpZ24gPSBhcmd1bWVudHNbNl0gPyBhcmd1bWVudHNbNl0gOiAnY2VudGVyJztcclxuXHJcbiAgICBsZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxheW91dC5jbGFzc05hbWUgPSAnZGlhbG9nLWxheW91dCc7XHJcbiAgICAgICAgbGF5b3V0LmlkID0gbGF5b3V0SWQ7XHJcbiAgICAgICAgbGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZGlhbG9nLWJnXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImRpYWxvZy10aXRsZVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctdGV4dFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgaWQ9XCJkaWFsb2ctYnRuMFwiIHN0eWxlPVwibGVmdDogMTIlO3RvcDogNzMlXCIgY2xhc3M9XCJkaWFsb2ctYnRuIGRpYWxvZy1idG4wXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBpZD1cImRpYWxvZy1idG4xXCIgc3R5bGU9XCJsZWZ0OiA1NyU7dG9wOiA3MyVcIiBjbGFzcz1cImRpYWxvZy1idG4gZGlhbG9nLWJ0bjFcIj48L2Rpdj4nICtcclxuICAgICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsYXlvdXQpO1xyXG4gICAgfVxyXG4gICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgdmFyIGJhY2tncm91bmQgPSBsYXlvdXQucXVlcnlTZWxlY3RvcignLmRpYWxvZy1iZycpO1xyXG4gICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIHZhciBub2RlVGl0bGUgPSBiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctdGl0bGUnKTtcclxuICAgIG5vZGVUaXRsZS5pbm5lckhUTUwgPSB0aXRsZTtcclxuICAgIHZhciBub2RlVGV4dCA9IGJhY2tncm91bmQucXVlcnlTZWxlY3RvcignLmRpYWxvZy10ZXh0Jyk7XHJcbiAgICBub2RlVGV4dC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gICAgbm9kZVRleHQuc3R5bGUudGV4dEFsaWduID0gYWxpZ247XHJcblxyXG4gICAgdmFyIG5vZGVCdG4wID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9nLWJ0bjAnKTtcclxuICAgIG5vZGVCdG4wLmlubmVySFRNTCA9IGJ0bjAgKyAnPGRpdj48L2Rpdj4nO1xyXG4gICAgdmFyIG5vZGVCdG4xID0gYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9nLWJ0bjEnKTtcclxuICAgIG5vZGVCdG4xLmlubmVySFRNTCA9IGJ0bjEgKyAnPGRpdj48L2Rpdj4nO1xyXG5cclxuICAgIHZhciBidG5fMDA2ID0gbm9kZUJ0bjAucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcclxuICAgIHZhciBidG5fMDA2bm9uZSA9IG5vZGVCdG4xLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIik7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBmb2N1c0J0biA9IGZ1bmN0aW9uIChidG5JZHgpIHtcclxuICAgICAgICBpZiAoYnRuSWR4ID09IDApIHtcclxuICAgICAgICAgICAgbm9kZUJ0bjAuY2xhc3NOYW1lID0gXCIgXCIgKyBcImRpYWxvZ0J0bl8xIGRpYWxvZy1CdG5fZm9jdXNcIjtcclxuICAgICAgICAgICAgbm9kZUJ0bjEuY2xhc3NOYW1lID0gXCIgXCIgKyBcImRpYWxvZ0J0bl8wXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChidG5JZHggPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgbm9kZUJ0bjAuY2xhc3NOYW1lID0gXCIgXCIgKyBcImRpYWxvZ0J0bl8wXCI7XHJcbiAgICAgICAgICAgIG5vZGVCdG4xLmNsYXNzTmFtZSA9IFwiIFwiICsgXCJkaWFsb2dCdG5fMSBkaWFsb2ctQnRuX2ZvY3VzXCI7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBidG4gPSBidG5JZHg7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChidG4gPCAwIHx8IGJ0biA+IDEpIGJ0biA9IDA7XHJcbiAgICBmb2N1c0J0bihidG4pO1xyXG5cclxuICAgIGxldCBzdWJtaXQgPSBmYWxzZTtcclxuICAgIHZhciBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxuICAgIHZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBmb2N1c0J0bigwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBmb2N1c0J0bigxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUub2s6ICAgICAvL+ehruWumlxyXG4gICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6ICAgICAgLy/lj5bmtohcclxuICAgICAgICAgICAgICAgIGJ0biA9IDE7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdWJtaXQpIHtcclxuICAgICAgICAgICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soYnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7c2hvd0RpYWxvZ31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC9kaWFsb2cuanMiLCJpbXBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc30gZnJvbSBcIi4uL3Rvb2RvL19rZXljb2Rlc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dBZDE2KGNhbGxiYWNrLCBidG4pIHtcclxuICAgIGNvbnN0IGxheW91dElkID0gJ2JpZy1hZC0xNic7XHJcblxyXG4gICAgbGV0IGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheW91dElkKTtcclxuICAgIGlmICghbGF5b3V0KSB7XHJcbiAgICAgICAgbGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsYXlvdXQuY2xhc3NOYW1lID0gJ2JpZy1hZC0xNic7XHJcbiAgICAgICAgbGF5b3V0LmlkID0gbGF5b3V0SWQ7XHJcbiAgICAgICAgbGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiYmlnLWFkLTE2LWJ0bi0wXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGlkPVwiYmlnLWFkLTE2LWJ0bi0xXCI+PC9kaXY+JztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheW91dCk7XHJcbiAgICB9XHJcbiAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgYnRuMCA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcjYmlnLWFkLTE2LWJ0bi0wJyk7XHJcbiAgICB2YXIgYnRuMSA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcjYmlnLWFkLTE2LWJ0bi0xJyk7XHJcblxyXG4gICAgY29uc3QgZm9jdXNCdG4gPSBmdW5jdGlvbiAoYnRuSWR4KSB7XHJcbiAgICAgICAgaWYgKGJ0bklkeCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGJ0bjAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGJ0bjEuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJ0bklkeCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGJ0bjAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgYnRuMS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuID0gYnRuSWR4O1xyXG4gICAgfTtcclxuXHJcbiAgICBmb2N1c0J0bihidG4pO1xyXG5cclxuICAgIGxldCBzdWJtaXQgPSBmYWxzZTtcclxuICAgIHZhciBrZXlDb2RlID0gZ2V0S2V5Q29kZXMoKTtcclxuICAgIHZhciBwcmVDb2RlcyA9IGdldENvZGVzKCk7XHJcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUgPSBnZXRFdmVudChlKTtcclxuICAgICAgICB2YXIgY3VyS2V5ID0gZ2V0S2V5KGUpO1xyXG4gICAgICAgIGlmIChwcmVDb2Rlcy5pbmRleE9mKGN1cktleSkgIT0gLTEpIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjdXJLZXkpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLmxlZnQ6XHJcbiAgICAgICAgICAgICAgICBmb2N1c0J0bigwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBmb2N1c0J0bigxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUub2s6ICAgICAvL+ehruWumlxyXG4gICAgICAgICAgICAgICAgc3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6ICAgICAgLy/lj5bmtohcclxuICAgICAgICAgICAgICAgIGJ0biA9IDE7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdWJtaXQpIHtcclxuICAgICAgICAgICAgbGF5b3V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjayhidG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0FkMjkoY2FsbGJhY2ssIGJ0biwgYWQpIHtcclxuICAgIGNvbnN0IGxheW91dElkID0gJ2JpZy1hZC0yOSc7XHJcblxyXG4gICAgbGV0IGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheW91dElkKTtcclxuICAgIGlmICghbGF5b3V0KSB7XHJcbiAgICAgICAgbGF5b3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBsYXlvdXQuaWQgPSBsYXlvdXRJZDtcclxuICAgICAgICBsYXlvdXQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxkaXYgaWQ9XCJiaWctYWQtYnRuLTBcIiBjbGFzcz1cImJpZy1hZC1idG4tMC1mb2N1c1wiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPGRpdiBpZD1cImJpZy1hZC1idG4tMVwiIGNsYXNzPVwiYmlnLWFkLWJ0bi0xXCI+PC9kaXY+JztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheW91dCk7XHJcbiAgICB9XHJcbiAgICBsYXlvdXQuY2xhc3NOYW1lID0gJ2JpZy1hZC0nICsgYWQ7XHJcbiAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgYnRuMCA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcjYmlnLWFkLWJ0bi0wJyk7XHJcbiAgICB2YXIgYnRuMSA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcjYmlnLWFkLWJ0bi0xJyk7XHJcblxyXG4gICAgY29uc3QgZm9jdXNCdG4gPSBmdW5jdGlvbiAoYnRuSWR4KSB7XHJcbiAgICAgICAgaWYgKGJ0bklkeCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGJ0bjAuY2xhc3NOYW1lID0gJ2JpZy1hZC1idG4tMC1mb2N1cyc7XHJcbiAgICAgICAgICAgIGJ0bjEuY2xhc3NOYW1lID0gJ2JpZy1hZC1idG4tMSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChidG5JZHggPT0gMSkge1xyXG4gICAgICAgICAgICBidG4wLmNsYXNzTmFtZSA9ICdiaWctYWQtYnRuLTAnO1xyXG4gICAgICAgICAgICBidG4xLmNsYXNzTmFtZSA9ICdiaWctYWQtYnRuLTEtZm9jdXMnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidG4gPSBidG5JZHg7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvY3VzQnRuKGJ0bik7XHJcblxyXG4gICAgbGV0IHN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgdmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG4gICAgdmFyIHByZUNvZGVzID0gZ2V0Q29kZXMoKTtcclxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZSA9IGdldEV2ZW50KGUpO1xyXG4gICAgICAgIHZhciBjdXJLZXkgPSBnZXRLZXkoZSk7XHJcbiAgICAgICAgaWYgKHByZUNvZGVzLmluZGV4T2YoY3VyS2V5KSAhPSAtMSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGN1cktleSkge1xyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubGVmdDpcclxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5yaWdodDpcclxuICAgICAgICAgICAgICAgIGZvY3VzQnRuKDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5vazogICAgIC8v56Gu5a6aXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZS5iYWNrOlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGUubnVtMDogICAgICAvL+WPlua2iFxyXG4gICAgICAgICAgICAgICAgYnRuID0gMTtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN1Ym1pdCkge1xyXG4gICAgICAgICAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZihjYWxsYmFjaykgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKGJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge3Nob3dBZDE2LHNob3dBZDI5fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2RpYWxvZ0JpZ0FkLmpzIiwidmFyIGxvYWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbnZhciBzaG93VGltZSA9IDEzMTg7XHJcbnZhciBsYXlvdXRJZCA9ICdsb2FkaW5nLWxheW91dC0wMDInO1xyXG5cclxuZnVuY3Rpb24gc2hvd0xvYWRpbmcoKSB7XHJcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgIHZhciB0aXRsZSA9IGFyZ3VtZW50c1swXSA/IGFyZ3VtZW50c1swXSA6ICfmj5DnpLonO1xyXG4gICAgdmFyIHRleHQgPSBhcmd1bWVudHNbMV0gPyBhcmd1bWVudHNbMV0gOiAn5q2j5Zyo5Yqg6L2977yM6K+356iN5YCZLi4uJztcclxuXHJcbiAgICBsZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGF5b3V0SWQpO1xyXG4gICAgaWYgKCFsYXlvdXQpIHtcclxuICAgICAgICBsYXlvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGxheW91dC5jbGFzc05hbWUgPSAnZGlhbG9nLWxheW91dCc7XHJcbiAgICAgICAgbGF5b3V0LmlkID0gbGF5b3V0SWQ7XHJcbiAgICAgICAgbGF5b3V0LmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZGlhbG9nLWJnXCI+JyArXHJcbiAgICAgICAgICAgICcgICAgPGRpdiBjbGFzcz1cImRpYWxvZy10aXRsZVwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctdGV4dFwiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxheW91dCk7XHJcbiAgICB9XHJcbiAgICBsYXlvdXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICB2YXIgbm9kZUJnID0gbGF5b3V0LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctYmcnKTtcclxuICAgIG5vZGVCZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIHZhciBub2RlVGl0bGUgPSBub2RlQmcucXVlcnlTZWxlY3RvcignLmRpYWxvZy10aXRsZScpO1xyXG4gICAgbm9kZVRpdGxlLmlubmVySFRNTCA9IHRpdGxlO1xyXG4gICAgdmFyIG5vZGVUZXh0ID0gbm9kZUJnLnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctdGV4dCcpO1xyXG4gICAgbm9kZVRleHQuaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlTG9hZGluZyhjYWxsYmFjaykge1xyXG4gICAgdmFyIGRlbGF5VGltZSA9IGFyZ3VtZW50c1sxXSA/IGFyZ3VtZW50c1sxXSA6IHNob3dUaW1lO1xyXG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIHRpbWUgPSAoZGVsYXlUaW1lICsgbG9hZFRpbWUpIC0gdGltZTtcclxuICAgIGlmICh0aW1lIDwgMCkgdGltZSA9IDA7XHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxheW91dElkKTtcclxuICAgICAgICBpZiAobGF5b3V0KSB7XHJcbiAgICAgICAgICAgIGxheW91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBsZXQgYmFja2dyb3VuZCA9IGxheW91dC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLWJnJyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mKGNhbGxiYWNrKSA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcclxuICAgIH0sIHRpbWUpO1xyXG59XHJcblxyXG5leHBvcnQge3Nob3dMb2FkaW5nLGhpZGVMb2FkaW5nfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYXBwL2xvYWRpbmcuanMiLCJpbXBvcnQge3JldGFpbCxyZXRhaWxJZH0gZnJvbSAnLi90b29kby9fcmV0YWlsJztcclxuaW1wb3J0IHtTdGJDbGllbnR9IGZyb20gXCIuL3Rvb2RvL19zdGJjbGlcIjtcclxuaW1wb3J0IHtnZXRLZXlDb2Rlc30gZnJvbSAnLi90b29kby9fa2V5Y29kZXMnO1xyXG5pbXBvcnQge2hpZGVMb2FkaW5nLCBzaG93TG9hZGluZ30gZnJvbSBcIi4vYXBwL2xvYWRpbmdcIjtcclxuaW1wb3J0IHtzaG93RGlhbG9nfSBmcm9tIFwiLi9hcHAvZGlhbG9nXCI7XHJcbmltcG9ydCB7Z2V0SlNPTn0gZnJvbSBcIi4vYXBwL2FiY1wiO1xyXG5pbXBvcnQge3Nob3dDaGlsZExvY2t9IGZyb20gXCIuL2FwcC9jaGlsZExvY2tcIjtcclxuXHJcbmltcG9ydCB7SG9tZU1lbnV9IGZyb20gJy4vSG9tZU1lbnUnO1xyXG5pbXBvcnQge0dhbWVQYWdlfSBmcm9tICcuL0dhbWVQYWdlJztcclxuaW1wb3J0IHtwYWdlVXJsfSBmcm9tICcuL2FwcC9QYWdlVXJsJztcclxuaW1wb3J0IHtjYWxsYmFja0FyZ3MsYXBwQXJnc30gZnJvbSAnLi9hcHAvUGFnZUFyZ3MnO1xyXG5pbXBvcnQge3Nob3dBZDI5fSBmcm9tICcuL2FwcC9kaWFsb2dCaWdBZCc7XHJcblxyXG5cclxudmFyIHN0YmNsaSA9IG5ldyBTdGJDbGllbnQoKTtcclxudmFyIGtleUNvZGUgPSBnZXRLZXlDb2RlcygpO1xyXG5cclxuLy8gdmFyIGNhbGxiYWNrVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArICcvdGRlbnRlci9jYWxsYmFjay5odG1sJztcclxudmFyIGNhbGxiYWNrVXJsID0gXCJodHRwOi8vMTIwLjc3LjgyLjU0L3RkR2FtZUNlbnRlci9jYWxsYmFjay5odG1sXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gb25TdGFydChjb2RlLCBiaXopIHtcclxuICAgIGhpZGVMb2FkaW5nKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoY29kZSAhPSAwKSB7XHJcbiAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0xvYWRpbmcoJ+iHquWKqOeZu+mZhicsICflsI/lj4zlnKjkvb/lirLliqDovb3vvIzor7fnqI3lgJkuLi4nKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGJjbGkuc3RhcnQob25TdGFydCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVQYWdlLnNob3coY3VycmVudEluZGV4LCBvblBhZ2VLZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxLCAn5o+Q56S6JywgJ+ayoeacieaJvuWIsOeUqOaIt+S/oeaBr+WTpu+8gScsICfph43or5UnLCAn5Y+W5raIJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGRlVXNlciA9IGJpejtcclxuICAgICAgICAgICAgZ2FtZVBhZ2Uuc2hvdyhjdXJyZW50SW5kZXgsIG9uUGFnZUtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uUXVlcnlTZXJ2ZTEoY29kZSwgYml6KSB7XHJcbiAgICBoaWRlTG9hZGluZyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGl0ZW1JbmZvID0gaXRlbUluZm9zW2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgaWYgKGNvZGUgPT0gMCAmJiBiaXogJiYgYml6LnByb2R1Y3RJZCA9PSBpdGVtSW5mby5wcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1JbmZvLmdhbWVJZCA9PSAnMTAwMTEnKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlVXJsLmNhbGxHYW1lQmFzZShpdGVtSW5mbywgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFnZVVybC5jYWxsR2FtZShpdGVtSW5mbywgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0xvYWRpbmcoJ+aPkOekuicsICfmraPlnKjliqDovb3vvIzor7fnqI3lgJkuLi4nKTtcclxuICAgICAgICAgICAgc3RiY2xpLnF1ZXJ5UHJvZHVjdDEoaXRlbUluZm8ucHJvZElkLCBvblF1ZXJ5UHJvZHVjdDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIGNvZGVcclxuICogQHBhcmFtIGJpelxyXG4gKiBAcGFyYW0gYml6LmNhdGVnb3J5XHJcbiAqIEBwYXJhbSBiaXoucHJvZHVjdElkXHJcbiAqIEBwYXJhbSBiaXoucHJpY2VcclxuICogQHBhcmFtIGJpei5nb29kc05hbWVcclxuICovXHJcbmZ1bmN0aW9uIG9uUXVlcnlQcm9kdWN0MShjb2RlLCBiaXopIHtcclxuICAgIGhpZGVMb2FkaW5nKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaXRlbUluZm8gPSBpdGVtSW5mb3NbY3VycmVudEluZGV4XTtcclxuICAgICAgICBpZiAoY29kZSA9PSAwICYmIGJpeiAmJiBiaXoucHJvZHVjdElkID09IGl0ZW1JbmZvLnByb2RJZCkge1xyXG4gICAgICAgICAgICB2YXIgY2IgPSBmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGRlVXNlci5jaGlsZExvY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NoaWxkTG9jayhmdW5jdGlvbiAoY29kZSwgbXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZhbGlkTG9jayhjb2RlLCBtc2csIGdhbWVQYWdlLCBpdGVtSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRPcmRlcihpdGVtSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lUGFnZS5zaG93KGN1cnJlbnRJbmRleCwgb25QYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vbGV0IHRleHQgPSAnJztcclxuICAgICAgICAgICAgLy9pZiAoYml6LmNhdGVnb3J5ID09IDApIHtcclxuICAgICAgICAgICAgLy8gICAgdGV4dCA9ICfmgqjlsIboirHotLknICsgYml6LnByaWNlIC8gMTAwICsgJ+WFgy/mnIjorqLotK0nICsgYml6Lmdvb2RzTmFtZTtcclxuICAgICAgICAgICAgLy99IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICB0ZXh0ID0gJ+aCqOWwhuiKsei0uScgKyBiaXoucHJpY2UgLyAxMDAgKyAn5YWD6LSt5LmwJyArIGJpei5nb29kc05hbWU7XHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAvL3Nob3dEaWFsb2coY2IsIDAsICforqLotK3kv6Hmga8nLCB0ZXh0LCAn56Gu6K6kJywgJ+WPlua2iCcpO1xyXG4gICAgICAgICAgICBzaG93QWQyOShjYiwgMCwgMjkpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChidG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3dMb2FkaW5nKCfmj5DnpLonLCAn5q2j5Zyo5Yqg6L2977yM6K+356iN5YCZLi4uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RiY2xpLnF1ZXJ5UHJvZHVjdDEoaXRlbUluZm8ucHJvZElkLCBvblF1ZXJ5UHJvZHVjdDEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lUGFnZS5zaG93KGN1cnJlbnRJbmRleCwgb25QYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCwgJ+aPkOekuicsICfmsqHmnInmib7liLDkuqflk4Hkv6Hmga/lk6bvvIEnLCAn6YeN6K+VJywgJ+WPlua2iCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbk9yZGVyMShjb2RlLCBiaXopIHtcclxuICAgIGhpZGVMb2FkaW5nKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaXRlbUluZm8gPSBpdGVtSW5mb3NbY3VycmVudEluZGV4XTtcclxuICAgICAgICBpZiAoY29kZSA9PSAwICYmIGJpeikge1xyXG4gICAgICAgICAgICBzaG93TG9hZGluZygn5o+Q56S6JywgJ+ato+WcqOWkhOeQhu+8jOivt+eojeWAmS4uLicpO1xyXG4gICAgICAgICAgICB2YXIgY2FsbFVybDtcclxuICAgICAgICAgICAgaWYgKGl0ZW1JbmZvLmdhbWVJZCA9PSAnMTAwMTEnKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsVXJsID0gcGFnZVVybC5jYWxsVXJsQmFzZShpdGVtSW5mbywgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbFVybCA9IHBhZ2VVcmwuY2FsbFVybChpdGVtSW5mbywgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrQXJncy5zZXRSZWRpcmVjdFVybChjYWxsVXJsKTtcclxuICAgICAgICAgICAgY2FsbGJhY2tBcmdzLnNldFJldHVyblVybCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgIHN0YmNsaS5wYXkoYml6LnRyYWRlTm8pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNob3dEaWFsb2coZnVuY3Rpb24gKGJ0bikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ0biA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VuZE9yZGVyKGl0ZW1JbmZvKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVBhZ2Uuc2hvdyhjdXJyZW50SW5kZXgsIG9uUGFnZUtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDAsICforqLljZXmj5DnpLonLCAn5bCP5Y+M5pyN5Yqh5byA5bCP5beu5ZWm77yM6K+356iN5ZCO6YeN6K+V44CCJywgJ+mHjeivlScsICfov5Tlm54nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb25NZW51S2V5KGtleSkge1xyXG4gICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICBjYXNlIGtleUNvZGUuZG93bjpcclxuICAgICAgICAgICAgaG9tZU1lbnUuaGlkZSgpO1xyXG4gICAgICAgICAgICBnYW1lUGFnZS5zaG93KGN1cnJlbnRJbmRleCwgb25QYWdlS2V5KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLm9rOlxyXG4gICAgICAgICAgICBpZiAoaG9tZU1lbnUuY3VycmVudCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBhcHBBcmdzLm9uSG9tZVBhZ2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGtleUNvZGUubnVtMDpcclxuICAgICAgICBjYXNlIGtleUNvZGUuYmFjazpcclxuICAgICAgICAgICAgYXBwQXJncy5vbkhvbWVQYWdlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvblBhZ2VLZXkoa2V5KSB7XHJcbiAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgIGNhc2Uga2V5Q29kZS51cDpcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCAhPSAzKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lUGFnZS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBob21lTWVudS5zaG93KGhvbWVNZW51LmN1cnJlbnQsIG9uTWVudUtleSwgdGRlVXNlcik7XHJcbiAgICAgICAgICAgICAgICAvL2hvbWVNZW51LnNob3coaG9tZU1lbnUuY3VycmVudCwgb25NZW51S2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGtleUNvZGUub2s6XHJcbiAgICAgICAgICAgIGlmICghc3RiY2xpLmlzUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIHNob3dMb2FkaW5nKCfoh6rliqjnmbvpmYYnLCAn5bCP5Y+M5Zyo5L2/5Yqy5Yqg6L2977yM6K+356iN5YCZLi4uJyk7XHJcbiAgICAgICAgICAgICAgICBzdGJjbGkuc3RhcnQob25TdGFydCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaXRlbUluZm8gPSBpdGVtSW5mb3NbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgaWYgKGl0ZW1JbmZvLnByb2R1Y3RJZCA9PSAzICYmICFjYW5WaWRlbygpKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93RGlhbG9nKGZ1bmN0aW9uIChidG4pIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lUGFnZS5zaG93KGN1cnJlbnRJbmRleCwgb25QYWdlS2V5KTtcclxuICAgICAgICAgICAgICAgIH0sIDEsICfmlazor7fmnJ/lvoUnLCAn6K+l5py66aG255uS5Z6L5Y+35pqC5LiN5pSv5oyB5L2T5oSf54Ot6Iie5ri45oiPLOivt+iBlOezuzk2MzM15pu05o2i5py66aG255uSLicsICfnoa7lrponLCAn5Y+W5raIJywgJ2xlZnQnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtSW5mby50cmlhbCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUluZm8uZ2FtZUlkID09ICcxMDAxMScpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlVXJsLmNhbGxHYW1lQmFzZShpdGVtSW5mbywgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlVXJsLmNhbGxHYW1lKGl0ZW1JbmZvLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbUluZm8udHJpYWwgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgc2hvd0RpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVBhZ2Uuc2hvdyhjdXJyZW50SW5kZXgsIG9uUGFnZUtleSk7XHJcbiAgICAgICAgICAgICAgICB9LCAxLCAn5pWs6K+35pyf5b6FJywgJ+acjeWKoeaaguacquW8gOmAmuWTpu+8gScsICfnoa7lrponLCAn5Y+W5raIJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaG93TG9hZGluZygn5o+Q56S6JywgJ+ato+WcqOWKoOi9ve+8jOivt+eojeWAmS4uLicpO1xyXG4gICAgICAgICAgICBzdGJjbGkucXVlcnlTZXJ2ZTEoaXRlbUluZm8ucHJvZHVjdElkLCBvblF1ZXJ5U2VydmUxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLm51bTA6XHJcbiAgICAgICAgY2FzZSBrZXlDb2RlLmJhY2s6XHJcbiAgICAgICAgICAgIGFwcEFyZ3Mub25Ib21lUGFnZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGtleUNvZGUuZXNjOlxyXG4gICAgICAgICAgICBhcHBBcmdzLm9uRmlyc3RQYWdlKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY3VycmVudEluZGV4ID0gZ2FtZVBhZ2UuY3VycmVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBjb2RlIHtpbnR9XHJcbiAqIEBwYXJhbSBtc2cge3N0cmluZ31cclxuICogQHBhcmFtIG93bmVyIHtIb21lTWVudX1cclxuICogQHBhcmFtIGl0ZW1JbmZvIHtPYmplY3R9XHJcbiAqL1xyXG5mdW5jdGlvbiBvblZhbGlkTG9jayhjb2RlLCBtc2csIG93bmVyLCBpdGVtSW5mbykge1xyXG4gICAgaWYgKGNvZGUgPT0gMCkge1xyXG4gICAgICAgIHZhciBvbGRMb2NrID0gdGRlVXNlci5jaGlsZExvY2s7XHJcbiAgICAgICAgaWYgKG1zZyA9PSBvbGRMb2NrKSB7XHJcbiAgICAgICAgICAgIHNlbmRPcmRlcihpdGVtSW5mbyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2hvd0RpYWxvZyhmdW5jdGlvbiAoYnRuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnRuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2hpbGRMb2NrKGZ1bmN0aW9uIChjb2RlLCBtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25WYWxpZExvY2soY29kZSwgbXNnLCBvd25lciwgaXRlbUluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEsIDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci5zaG93KG93bmVyLmN1cnJlbnQsIG9uUGFnZUtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDAsICfmj5DnpLonLCAn56ul6ZSB6aqM6K+B5Ye66ZSZJywgJ+mHjeivlScsICflj5bmtognKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG93bmVyLnNob3cob3duZXIuY3VycmVudCwgb25QYWdlS2V5KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VuZE9yZGVyKGl0ZW1JbmZvKSB7XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICBcImlkXCI6IGl0ZW1JbmZvLmlkLFxyXG4gICAgICAgIFwiZ2FtZUlkXCI6IGl0ZW1JbmZvLmdhbWVJZCxcclxuICAgICAgICBcInByb2R1Y3RJZFwiOiBpdGVtSW5mby5wcm9kdWN0SWQsXHJcbiAgICAgICAgXCJwcm9kSWRcIjogaXRlbUluZm8ucHJvZElkLFxyXG4gICAgICAgIFwidHJpYWxcIjogaXRlbUluZm8udHJpYWxcclxuICAgIH07XHJcbiAgICB2YXIgYXJncyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgc2hvd0xvYWRpbmcoJ+aPkOekuicsICfmraPlnKjlpITnkIbvvIzor7fnqI3lgJkuLi4nKTtcclxuICAgIHN0YmNsaS5vcmRlcjEoaXRlbUluZm8ucHJvZElkLCBjYWxsYmFja1VybCwgYXJncywgb25PcmRlcjEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5WaWRlbygpIHtcclxuICAgIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ3hnZCkge1xyXG4gICAgICAgIHZhciBlbWJlZCA9IGlQYW5lbC5nZXRHbG9iYWxWYXIoXCJWT0RfRU1CRURERURfVkVSU0lPTlwiKTtcclxuICAgICAgICBpZiAoZW1iZWQgPT0gJyMnIHx8IGVtYmVkID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG52YXIgaG9tZU1lbnU7XHJcbnZhciBnYW1lUGFnZTtcclxudmFyIGl0ZW1JbmZvcyA9IFtdO1xyXG52YXIgY3VycmVudEluZGV4O1xyXG52YXIgdGRlVXNlcjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBob21lTWVudSA9IG5ldyBIb21lTWVudSgpO1xyXG5cclxuICAgIGdhbWVQYWdlID0gbmV3IEdhbWVQYWdlKCk7XHJcbiAgICBjdXJyZW50SW5kZXggPSBnYW1lUGFnZS5jdXJyZW50O1xyXG4gICAgZ2FtZVBhZ2Uuc2hvdyhjdXJyZW50SW5kZXgsIG9uUGFnZUtleSk7XHJcblxyXG4gICAgdmFyIHRzID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICBnZXRKU09OKFwiZGF0YS90ZGVfZ2FtZV9pbmZvcy5qc29uP3RzPVwiICsgdHMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGl0ZW1JbmZvcy5wdXNoKGRhdGFbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNob3dMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIHN0YmNsaS5zdGFydChvblN0YXJ0KTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfSk7XHJcblxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvZ2FtZS5qcyIsImltcG9ydCB7cmV0YWlsLHJldGFpbElkfSBmcm9tIFwiLi9fcmV0YWlsXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRLZXlDb2RlcygpIHtcclxuICAgIGxldCBrZXlNYXAgPSB7fTtcclxuXHJcbiAgICBpZiAocmV0YWlsSWQgPT0gcmV0YWlsLmd4Z2QpIHtcclxuICAgICAgICBrZXlNYXAgPSB7IC8vIOW5v+ilv+W5v+eUtVxyXG4gICAgICAgICAgICB1cDogMzgsICAgICAgICAvLyDkuIpcclxuICAgICAgICAgICAgZG93bjogNDAsICAgICAgLy8g5LiLXHJcbiAgICAgICAgICAgIGxlZnQ6IDM3LCAgICAgIC8vIOW3plxyXG4gICAgICAgICAgICByaWdodDogMzksICAgICAvLyDlj7NcclxuICAgICAgICAgICAgb2s6IDEzLCAgICAgICAgLy8g56Gu5a6aXHJcbiAgICAgICAgICAgIGYxOiA0MDAsICAgICAgIC8vIGYxIC8v57qiXHJcbiAgICAgICAgICAgIGYyOiA0MDEsICAgICAgIC8vIGYyIC8v6JOdXHJcbiAgICAgICAgICAgIGYzOiA0MDMsICAgICAgIC8vIGYzIC8v6buEXHJcbiAgICAgICAgICAgIGY0OiA0MDIsICAgICAgIC8vIGY0IC8v57u/XHJcbiAgICAgICAgICAgIG51bTE6IDQ5LCAgICAgIC8vIOaVsOWtlzFcclxuICAgICAgICAgICAgbnVtMjogNTAsICAgICAgLy8g5pWw5a2XMlxyXG4gICAgICAgICAgICBudW0zOiA1MSwgICAgICAvLyDmlbDlrZczXHJcbiAgICAgICAgICAgIG51bTQ6IDUyLCAgICAgIC8vIOaVsOWtlzRcclxuICAgICAgICAgICAgbnVtNTogNTMsICAgICAgLy8g5pWw5a2XNVxyXG4gICAgICAgICAgICBudW02OiA1NCwgICAgICAvLyDmlbDlrZc2XHJcbiAgICAgICAgICAgIG51bTc6IDU1LCAgICAgIC8vIOaVsOWtlzdcclxuICAgICAgICAgICAgbnVtODogNTYsICAgICAgLy8g5pWw5a2XOFxyXG4gICAgICAgICAgICBudW05OiA1NywgICAgICAvLyDmlbDlrZc5XHJcbiAgICAgICAgICAgIG51bTA6IDQ4LCAgICAgIC8vIOaVsOWtlzBcclxuICAgICAgICAgICAgbXV0ZTogNTE4LCAgICAgIC8vIOmdmemfs1xyXG4gICAgICAgICAgICBiYWNrOiAzOTksICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA0MDYsICAgICAvLyDlo7DpgZPvvJ8gLy/lo7DpgZPplK5cclxuICAgICAgICAgICAgdm9sVXA6IDUxNywgICAgLy8g5aKe5aSn6Z+z6YePXHJcbiAgICAgICAgICAgIHZvbERvd246IDUxNiwgIC8vIOWHj+Wwj+mfs+mHj1xyXG4gICAgICAgICAgICBmYXY6IDQwNCwgICAgICAgLy8g5Zac5qyiXHJcbiAgICAgICAgICAgIHBsYXlCYWNrOiA1MjEsICAvLyDlm57mlL4gIC8v54K55pKt6ZSuXHJcbiAgICAgICAgICAgIHBhZ2VVcDogMzMsICAgIC8vIOS4iuS4gOmhtVxyXG4gICAgICAgICAgICBwYWdlRG93bjogMzQsICAvLyDkuIvkuIDpobVcclxuICAgICAgICAgICAgbWVudTogNTE1LCAgICAgICAvLyDoj5zljZVcclxuICAgICAgICAgICAgZXNjOiA1MTQsICAgICAgICAvL+mAgOWHulxyXG4gICAgICAgICAgICBob21lOiA1MjBcclxuICAgICAgICB9O1xyXG5cclxuICAgIH0gZWxzZSBpZiAocmV0YWlsSWQgPT0gcmV0YWlsLmhueXgpIHtcclxuICAgICAgICAvL2tleU1hcCA9IHsgLy8g5rKz5Y2X5pyJ57q/IGxpbnV4XHJcbiAgICAgICAgLy8gICAgdXA6IDY1MzYyLFxyXG4gICAgICAgIC8vICAgIGRvd246IDY1MzY0LFxyXG4gICAgICAgIC8vICAgIGxlZnQ6IDY1MzYxLFxyXG4gICAgICAgIC8vICAgIHJpZ2h0OiA2NTM2MyxcclxuICAgICAgICAvLyAgICBvazogNjUyOTMsXHJcbiAgICAgICAgLy8gICAgZjE6IDMyLFxyXG4gICAgICAgIC8vICAgIGYyOiAzMyxcclxuICAgICAgICAvLyAgICBmMzogMzQsXHJcbiAgICAgICAgLy8gICAgZjQ6IDM1LFxyXG4gICAgICAgIC8vICAgIG51bTE6IDQ5LFxyXG4gICAgICAgIC8vICAgIG51bTI6IDUwLFxyXG4gICAgICAgIC8vICAgIG51bTM6IDUxLFxyXG4gICAgICAgIC8vICAgIG51bTQ6IDUyLFxyXG4gICAgICAgIC8vICAgIG51bTU6IDUzLFxyXG4gICAgICAgIC8vICAgIG51bTY6IDU0LFxyXG4gICAgICAgIC8vICAgIG51bTc6IDU1LFxyXG4gICAgICAgIC8vICAgIG51bTg6IDU2LFxyXG4gICAgICAgIC8vICAgIG51bTk6IDU3LFxyXG4gICAgICAgIC8vICAgIG51bTA6IDQ4LFxyXG4gICAgICAgIC8vICAgIG11dGU6IDYzNTYzLFxyXG4gICAgICAgIC8vICAgIGJhY2s6IDY1MzY3LFxyXG4gICAgICAgIC8vICAgIHRyYWNrOiA2NTMwNyxcclxuICAgICAgICAvLyAgICB2b2xVcDogNjM1NjEsXHJcbiAgICAgICAgLy8gICAgdm9sRG93bjogNjM1NjIsXHJcbiAgICAgICAgLy8gICAgZmF2OiAzNixcclxuICAgICAgICAvLyAgICBwbGF5QmFjazogNzIsXHJcbiAgICAgICAgLy8gICAgcGFnZVVwOiAyNSxcclxuICAgICAgICAvLyAgICBwYWdlRG93bjogMjYsXHJcbiAgICAgICAgLy8gICAgbWVudTogNjUzNjAsXHJcbiAgICAgICAgLy8gICAgZXNjOiAyNyxcclxuICAgICAgICAvLyAgICBob21lOiA2NTM2MFxyXG4gICAgICAgIC8vfTtcclxuICAgICAgICBrZXlNYXAgPSB7IC8vIOays+WNl+aciee6vyBhbmRyb2lkXHJcbiAgICAgICAgICAgIHVwOiAzOCwgICAgICAgIC8vIOS4ilxyXG4gICAgICAgICAgICBkb3duOiA0MCwgICAgICAvLyDkuItcclxuICAgICAgICAgICAgbGVmdDogMzcsICAgICAgLy8g5bemXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzOSwgICAgIC8vIOWPs1xyXG4gICAgICAgICAgICBvazogMTMsICAgICAgICAvLyDnoa7lrppcclxuICAgICAgICAgICAgZjE6IDExMiwgICAgICAgLy8gZjFcclxuICAgICAgICAgICAgZjI6IDExMywgICAgICAgLy8gZjJcclxuICAgICAgICAgICAgZjM6IDExNCwgICAgICAgLy8gZjNcclxuICAgICAgICAgICAgZjQ6IDExNSwgICAgICAgLy8gZjRcclxuICAgICAgICAgICAgbnVtMTogNDksICAgICAgLy8g5pWw5a2XMVxyXG4gICAgICAgICAgICBudW0yOiA1MCwgICAgICAvLyDmlbDlrZcyXHJcbiAgICAgICAgICAgIG51bTM6IDUxLCAgICAgIC8vIOaVsOWtlzNcclxuICAgICAgICAgICAgbnVtNDogNTIsICAgICAgLy8g5pWw5a2XNFxyXG4gICAgICAgICAgICBudW01OiA1MywgICAgICAvLyDmlbDlrZc1XHJcbiAgICAgICAgICAgIG51bTY6IDU0LCAgICAgIC8vIOaVsOWtlzZcclxuICAgICAgICAgICAgbnVtNzogNTUsICAgICAgLy8g5pWw5a2XN1xyXG4gICAgICAgICAgICBudW04OiA1NiwgICAgICAvLyDmlbDlrZc4XHJcbiAgICAgICAgICAgIG51bTk6IDU3LCAgICAgIC8vIOaVsOWtlzlcclxuICAgICAgICAgICAgbnVtMDogNDgsICAgICAgLy8g5pWw5a2XMCAvL+aVsOWtlzAg6L+U5ZueXHJcbiAgICAgICAgICAgIG11dGU6IDc3LCAgICAgIC8vIOmdmemfs1xyXG4gICAgICAgICAgICBiYWNrOiA4LCAgICAgIC8vIOi/lOWbnlxyXG4gICAgICAgICAgICB0cmFjazogODIsICAgICAvLyDlo7DpgZPvvJ9cclxuICAgICAgICAgICAgdm9sVXA6IDE5MCwgICAgLy8g5aKe5aSn6Z+z6YePXHJcbiAgICAgICAgICAgIHZvbERvd246IDE4OCwgIC8vIOWHj+Wwj+mfs+mHj1xyXG4gICAgICAgICAgICBmYXY6IDg0LCAgICAgICAvLyDllpzmrKJcclxuICAgICAgICAgICAgcGxheUJhY2s6IDgwLCAgLy8g5Zue5pS+XHJcbiAgICAgICAgICAgIHBhZ2VVcDogMzMsICAgIC8vIOS4iuS4gOmhtVxyXG4gICAgICAgICAgICBwYWdlRG93bjogMzQsICAvLyDkuIvkuIDpobVcclxuICAgICAgICAgICAgbWVudTogNzIsICAgICAgIC8vIOiPnOWNlVxyXG4gICAgICAgICAgICBlc2M6IDI3LFxyXG4gICAgICAgICAgICBob21lOiA3MlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ2RnZCkge1xyXG4gICAgICAgIGtleU1hcCA9IHsgLy8g5bm/5Lic5bm/55S1XHJcbiAgICAgICAgICAgIHVwOiA4NywgICAgICAgIC8vIOS4iiBX6ZSuXHJcbiAgICAgICAgICAgIGRvd246IDgzLCAgICAgIC8vIOS4iyBT6ZSuXHJcbiAgICAgICAgICAgIGxlZnQ6IDY1LCAgICAgIC8vIOW3piBB6ZSuXHJcbiAgICAgICAgICAgIHJpZ2h0OiA2OCwgICAgIC8vIOWPsyBE6ZSuXHJcbiAgICAgICAgICAgIG9rOiAxMywgICAgICAgIC8vIOehruWumlxyXG4gICAgICAgICAgICBmMTogNDAwLCAgICAgICAvLyBmMSAvL+e6olxyXG4gICAgICAgICAgICBmMjogNDAxLCAgICAgICAvLyBmMiAvL+iTnVxyXG4gICAgICAgICAgICBmMzogNDAyLCAgICAgICAvLyBmMyAvL+m7hFxyXG4gICAgICAgICAgICBmNDogNDAzLCAgICAgICAvLyBmNCAvL+e7v1xyXG4gICAgICAgICAgICBudW0xOiA0OSwgICAgICAvLyDmlbDlrZcxXHJcbiAgICAgICAgICAgIG51bTI6IDUwLCAgICAgIC8vIOaVsOWtlzJcclxuICAgICAgICAgICAgbnVtMzogNTEsICAgICAgLy8g5pWw5a2XM1xyXG4gICAgICAgICAgICBudW00OiA1MiwgICAgICAvLyDmlbDlrZc0XHJcbiAgICAgICAgICAgIG51bTU6IDUzLCAgICAgIC8vIOaVsOWtlzVcclxuICAgICAgICAgICAgbnVtNjogNTQsICAgICAgLy8g5pWw5a2XNlxyXG4gICAgICAgICAgICBudW03OiA1NSwgICAgICAvLyDmlbDlrZc3XHJcbiAgICAgICAgICAgIG51bTg6IDU2LCAgICAgIC8vIOaVsOWtlzhcclxuICAgICAgICAgICAgbnVtOTogNTcsICAgICAgLy8g5pWw5a2XOVxyXG4gICAgICAgICAgICBudW0wOiA0OCwgICAgICAvLyDmlbDlrZcwXHJcbiAgICAgICAgICAgIG11dGU6IDY3LCAgICAgIC8vIOmdmemfs1xyXG4gICAgICAgICAgICBiYWNrOiA4LCAgICAgIC8vIOi/lOWbnlxyXG4gICAgICAgICAgICB0cmFjazogODYsICAgICAvLyDlo7DpgZPvvJ8gLy/lo7DpgZPplK5cclxuICAgICAgICAgICAgdm9sVXA6IDYxLCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogNDUsICAvLyDlh4/lsI/pn7Pph49cclxuICAgICAgICAgICAgZmF2OiA3NiwgICAgICAgLy8g5Zac5qyiXHJcbiAgICAgICAgICAgIHBsYXlCYWNrOiA1MjEsICAvLyDlm57mlL4gIC8v54K55pKt6ZSuXHJcbiAgICAgICAgICAgIHBhZ2VVcDogMzA2LCAgICAvLyDkuIrkuIDpobVcclxuICAgICAgICAgICAgcGFnZURvd246IDMwNywgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA3MiwgICAgICAgLy8g6I+c5Y2VXHJcbiAgICAgICAgICAgIGVzYzogMjcsXHJcbiAgICAgICAgICAgIGhvbWU6IDcyXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9IGVsc2UgeyAvLyB3aW5kb3dzIOmUrueggVxyXG4gICAgICAgIGtleU1hcCA9IHtcclxuICAgICAgICAgICAgdXA6IDM4LCAgICAgICAgLy8g5LiKXHJcbiAgICAgICAgICAgIGRvd246IDQwLCAgICAgIC8vIOS4i1xyXG4gICAgICAgICAgICBsZWZ0OiAzNywgICAgICAvLyDlt6ZcclxuICAgICAgICAgICAgcmlnaHQ6IDM5LCAgICAgLy8g5Y+zXHJcbiAgICAgICAgICAgIG9rOiAxMywgICAgICAgIC8vIOehruWumlxyXG4gICAgICAgICAgICBmMTogMTEyLCAgICAgICAvLyBmMVxyXG4gICAgICAgICAgICBmMjogMTEzLCAgICAgICAvLyBmMlxyXG4gICAgICAgICAgICBmMzogMTE0LCAgICAgICAvLyBmM1xyXG4gICAgICAgICAgICBmNDogMTE1LCAgICAgICAvLyBmNFxyXG4gICAgICAgICAgICBudW0xOiA0OSwgICAgICAvLyDmlbDlrZcxXHJcbiAgICAgICAgICAgIG51bTI6IDUwLCAgICAgIC8vIOaVsOWtlzJcclxuICAgICAgICAgICAgbnVtMzogNTEsICAgICAgLy8g5pWw5a2XM1xyXG4gICAgICAgICAgICBudW00OiA1MiwgICAgICAvLyDmlbDlrZc0XHJcbiAgICAgICAgICAgIG51bTU6IDUzLCAgICAgIC8vIOaVsOWtlzVcclxuICAgICAgICAgICAgbnVtNjogNTQsICAgICAgLy8g5pWw5a2XNlxyXG4gICAgICAgICAgICBudW03OiA1NSwgICAgICAvLyDmlbDlrZc3XHJcbiAgICAgICAgICAgIG51bTg6IDU2LCAgICAgIC8vIOaVsOWtlzhcclxuICAgICAgICAgICAgbnVtOTogNTcsICAgICAgLy8g5pWw5a2XOVxyXG4gICAgICAgICAgICBudW0wOiA0OCwgICAgICAvLyDmlbDlrZcwIC8v5pWw5a2XMCDov5Tlm55cclxuICAgICAgICAgICAgbXV0ZTogNzcsICAgICAgLy8g6Z2Z6Z+zXHJcbiAgICAgICAgICAgIGJhY2s6IDgsICAgICAgLy8g6L+U5ZueXHJcbiAgICAgICAgICAgIHRyYWNrOiA4MiwgICAgIC8vIOWjsOmBk++8n1xyXG4gICAgICAgICAgICB2b2xVcDogMTkwLCAgICAvLyDlop7lpKfpn7Pph49cclxuICAgICAgICAgICAgdm9sRG93bjogMTg4LCAgLy8g5YeP5bCP6Z+z6YePXHJcbiAgICAgICAgICAgIGZhdjogODQsICAgICAgIC8vIOWWnOasolxyXG4gICAgICAgICAgICBwbGF5QmFjazogODAsICAvLyDlm57mlL5cclxuICAgICAgICAgICAgcGFnZVVwOiAzMywgICAgLy8g5LiK5LiA6aG1XHJcbiAgICAgICAgICAgIHBhZ2VEb3duOiAzNCwgIC8vIOS4i+S4gOmhtVxyXG4gICAgICAgICAgICBtZW51OiA3MiwgICAgICAgLy8g6I+c5Y2VXHJcbiAgICAgICAgICAgIGVzYzogMjcsXHJcbiAgICAgICAgICAgIGhvbWU6IDcyXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBrZXlNYXA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV2ZW50KGV2dCkge1xyXG4gICAgcmV0dXJuIGV2dCB8fCB3aW5kb3cuZXZlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEtleShldnQpIHtcclxuICAgIC8v5pSv5oyBSUXjgIFGRlxyXG4gICAgZXZ0ID0gZ2V0RXZlbnQoZXZ0KTtcclxuICAgIHJldHVybiBldnQua2V5Q29kZSB8fCBldnQud2hpY2ggfHwgZXZ0LmNoYXJDb2RlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb2RlcygpIHtcclxuICAgIGNvbnN0IGtleU1hcCA9IGdldEtleUNvZGVzKCk7XHJcbiAgICB2YXIgY29kZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGNvZGUgaW4ga2V5TWFwKSB7XHJcbiAgICAgICAgaWYgKGtleU1hcC5oYXNPd25Qcm9wZXJ0eShjb2RlKSkge1xyXG4gICAgICAgICAgICBjb2Rlcy5wdXNoKGtleU1hcFtjb2RlXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvZGVzO1xyXG59XHJcblxyXG5leHBvcnQge2dldEtleUNvZGVzLGdldEV2ZW50LGdldEtleSxnZXRDb2Rlc31cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19rZXljb2Rlcy5qcyIsImNvbnN0IHJldGFpbCA9IHtcclxuICAgIGd4Z2Q6ICc5NjMzNScsXHJcbiAgICBobnl4OiAnOTYyNjYnLFxyXG4gICAgZ2RnZDogJzk2OTU2JyxcclxuICAgIG5vbmU6ICcxMDAwJ1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0UmV0YWlsSWQoKSB7XHJcbiAgICB0cnkgey8v5bm/6KW/5bm/55S1XHJcbiAgICAgICAgaWYgKGd1YW5neGkgJiYgaVBhbmVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXRhaWwuZ3hnZDtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICB0cnkgey8v5rKz5Y2X5pyJ57q/XHJcbiAgICAgICAgdmFyIFN5c3RlbSA9IHdpbmRvdy5TeXN0ZW07XHJcbiAgICAgICAgaWYgKFN5c3RlbSAmJiBTeXN0ZW0uc3RiSUQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJldGFpbC5obnl4O1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHRyeSB7Ly/lub/kuJzlub/nlLVcclxuICAgICAgICBpZiAoQ0EgJiYgU3RvcmFnZVNlcnZpY2UgJiYgRmlsZVN5c3RlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0YWlsLmdkZ2Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdmFyIHN0b3JhZ2VMaXN0ID0gU3RvcmFnZVNlcnZpY2UuZ2V0U3RvcmFnZUluZm9zKCk7XHJcbiAgICAgICAgLy9pZiAoc3RvcmFnZUxpc3QgJiYgc3RvcmFnZUxpc3QgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvLyAgICB2YXIgcGFydGl0aW9uUGF0aExpc3QgPSBzdG9yYWdlTGlzdFswXS5nZXRQYXJ0aXRpb25zSW5mbygpWzBdO1xyXG4gICAgICAgIC8vICAgIHZhciBwYXJ0aXRpb25QYXRoID0gcGFydGl0aW9uUGF0aExpc3QucGF0aDtcclxuICAgICAgICAvLyAgICB2YXIgZGlyID0gRmlsZVN5c3RlbS5nZXREaXJlY3RvcnkocGFydGl0aW9uUGF0aCk7XHJcbiAgICAgICAgLy8gICAgdmFyIGZsaXN0ID0gZGlyLmZpbGVMaXN0O1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgZm9yICh2YXIgaSBpbiBmbGlzdCkge1xyXG4gICAgICAgIC8vICAgICAgICBpZiAoZmxpc3RbaV0ubmFtZS5zdWJzdHJpbmcoMCwgNikgPT0gXCJjYWNhcmRcIikge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgdmFyIGNhcmRObyA9IFwiOTY5NTZcIiArIGZsaXN0W2ldLm5hbWUuc3Vic3RyaW5nKDYsIDEyKTtcclxuICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAvL31cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHJldHVybiByZXRhaWwubm9uZTtcclxufVxyXG5cclxudmFyIHJldGFpbElkID0gZ2V0UmV0YWlsSWQoKTtcclxuZXhwb3J0IHtyZXRhaWwsZ2V0UmV0YWlsSWQscmV0YWlsSWR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3JldGFpbC5qcyIsImltcG9ydCB7UmVxdWVzdEJvZHksIFRvb2RvQ2xpZW50fSBmcm9tIFwiLi9fdGRjbGlcIjtcclxuaW1wb3J0IHtyZXRhaWxJZCxyZXRhaWx9IGZyb20gXCIuL19yZXRhaWxcIjtcclxuaW1wb3J0IHtzdGJOdWxsfSBmcm9tIFwiLi9fc3RibnVsbFwiO1xyXG52YXIgbWQ1ID0gcmVxdWlyZSgnbWQ1Jyk7XHJcbnZhciBKU09OID0gcmVxdWlyZSgnSlNPTicpO1xyXG5cclxuZnVuY3Rpb24gU3RiQ2xpZW50KCkge1xyXG4gICAgLy8gdGhpcy5vcmlnaW5VcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy90ZHNydic7XHJcbiAgICB0aGlzLm9yaWdpblVybCA9IFwiaHR0cDovL2xvY2FsaG9zdC9Ub29kb1NlcnZpY2UvcHVibGljL1wiO1xyXG4gICAgdGhpcy5hcHBLZXkgPSAnMTAwMCc7XHJcbiAgICB0aGlzLmFwcFNlY3JldCA9ICdSY09GaHRBWXp3Q0dvOTFQR0hkVic7XHJcbiAgICB0aGlzLl90ZGNsaSA9IG51bGw7XHJcbn1cclxuU3RiQ2xpZW50LnByb3RvdHlwZSA9IHtcclxuICAgIGlzUmVhZHk6IGZhbHNlLFxyXG4gICAgdXNlcklkOiAnJyxcclxuICAgIHRva2VuOiAnJyxcclxuXHJcbiAgICBtZDU6IGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICByZXR1cm4gbWQ1KG1zZyArIHRoaXMuYXBwU2VjcmV0KTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBjYWxsYmFjay5iaXpcclxuICAgICAqL1xyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX3RkY2xpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RkY2xpID0gbmV3IFRvb2RvQ2xpZW50KHRoaXMuYXBwS2V5LCB0aGlzLmFwcFNlY3JldCwgdGhpcy5vcmlnaW5VcmwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRva2VuID0gc3RiTnVsbC5nZXRWYWx1ZSgndG9vZG8udG9rZW4nKTtcclxuICAgICAgICBsZXQgdXNlcklkID0gc3RiTnVsbC5nZXRWYWx1ZSgndG9vZG8udXNlcklkJyk7XHJcbiAgICAgICAgLy8gaWYgKHRva2VuICYmIHVzZXJJZCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRva2VuID0gdG9rZW47XHJcbiAgICAgICAgLy8gICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKDApO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ3JldGFpbElkJzogcmV0YWlsSWQsXHJcbiAgICAgICAgICAgICdyZWdpb25Db2RlJzogc3RiTnVsbC5nZXRSZWdpb25Db2RlKCksXHJcbiAgICAgICAgICAgICdjYXJkVFYnOiBzdGJOdWxsLmdldENhcmRUVigpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdXNlcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcblxyXG4gICAgICAgIGNvbnN0IG93bmVyID0gdGhpcztcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kbycpO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNlbmQoYm9keUluLCBmdW5jdGlvbiAoYm9keU91dCkge1xyXG4gICAgICAgICAgICBpZiAoYm9keU91dC5jb2RlID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJpek91dCA9IEpTT04ucGFyc2UoYm9keU91dC5iaXpDb250ZW50KTtcclxuICAgICAgICAgICAgICAgIG93bmVyLnVzZXJJZCA9IGJpek91dC51c2VySWQ7XHJcbiAgICAgICAgICAgICAgICBvd25lci50b2tlbiA9IGJvZHlPdXQudG9rZW47XHJcbiAgICAgICAgICAgICAgICBzdGJOdWxsLnNldFZhbHVlKCd0b29kby51c2VySWQnLCBvd25lci51c2VySWQpO1xyXG4gICAgICAgICAgICAgICAgc3RiTnVsbC5zZXRWYWx1ZSgndG9vZG8udG9rZW4nLCBvd25lci50b2tlbik7XHJcbiAgICAgICAgICAgICAgICBvd25lci5pc1JlYWR5ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL293bmVyLnRkZVVzZXIoY2FsbGJhY2spOy8v6L+U5Zue5aSn5Y6F55qE6LSm5Y+35L+h5oGvXHJcbiAgICAgICAgICAgICAgICBvd25lci50ZGVVc2VyKGZ1bmN0aW9uIChjb2RlLCBiaXopIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpei5iaXpVc2VyID0gYml6T3V0LmJpelVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soY29kZSwgYml6KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhib2R5T3V0LmNvZGUsIGJvZHlPdXQuc3ViQ29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBiaXpVc2VyOiBmdW5jdGlvbiAoYml6SW4sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vYml6VXNlcic7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8nKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgYWRkV2lubmVyOiBmdW5jdGlvbiAocHJpemVJRCxzdGF0ZSxjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncHJpemVJRCc6cHJpemVJRCxcclxuICAgICAgICAgICAgJ3N0YXRlJzpzdGF0ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9hZGRXaW5uZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICBhZGRTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9hZGRTdGF0ZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0YUZyZWVTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS91cGRhdGFGcmVlU3RhdGUnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluKTtcclxuICAgIH0sXHJcbiAgICBnZXRQcml6ZTogZnVuY3Rpb24gKGlkLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdpZCc6aWRcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS9nZXRQcml6ZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKCB0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkZScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIHR1cm50YWJsZVN0YXRlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvdHVybnRhYmxlU3RhdGUnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIC8vIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgdHVybnRhYmxlUHJvOiBmdW5jdGlvbiAodHlwZSxjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgJ3R5cGUnOnR5cGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS90dXJudGFibGVQcm8nO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgcHJpemVOdW06ZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3R1cm50YWJsZVByaXplTnVtJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuXHJcbiAgICB3aW5uZXJJbmZvOiBmdW5jdGlvbiAobnVtLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYml6SW4gPSB7XHJcbiAgICAgICAgICAgICdudW0nOiBudW1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS93aW5uZXJJbmZvJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwoIHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgMe+8muacqumihuWPliAyOuW3sumihuWPliAz77ya5bey6L+H5pyfXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICB1c2VyV2lubmVyOiBmdW5jdGlvbiAodHlwZSxjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAndHlwZSc6IHR5cGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkZS91c2VyV2lubmVyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgYWRkQ29pbnM6IGZ1bmN0aW9uIChhZGROdW0pIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ2FkZE51bic6IGFkZE51bVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL2FkZENvaW4nO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCggdGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9kdWN0SWQg5p+l6K+i55qE5Lqn5ZOB57uf5LiA57yW5Y+3XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gY2FsbGJhY2suYml6XHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5U2VydmUxOiBmdW5jdGlvbiAocHJvZHVjdElkLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncHJvZHVjdElkJzogcHJvZHVjdElkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby9zZXJ2ZS9xdWVyeTEnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3NlcnZlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2R1Y3RJZCDmn6Xor6LnmoTkuqflk4Hnu5/kuIDnvJblj7dcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpelxyXG4gICAgICovXHJcbiAgICBxdWVyeVByb2R1Y3QxOiBmdW5jdGlvbiAocHJvZHVjdElkLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncHJvZHVjdElkJzogcHJvZHVjdElkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby9tYXJrZXQvcXVlcnkxJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby9tYXJrZXQnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvZHVjdElkIOeUn+aIkOiuouWNleeahOS6p+WTgee7n+S4gOe8luWPt1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNhbGxiYWNrVXJsIOaUr+S7mOWQjuWbnuiwg+WcsOWdgFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRhdGEg5Y6f5qC35Lyg5Zue57uZY2FsbGJhY2tVcmxcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpelxyXG4gICAgICovXHJcbiAgICBvcmRlcjE6IGZ1bmN0aW9uIChwcm9kdWN0SWQsIGNhbGxiYWNrVXJsLCBkYXRhLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAncHJvZHVjdElkJzogcHJvZHVjdElkLFxyXG4gICAgICAgICAgICAndXNlcklkJzogdGhpcy51c2VySWQsXHJcbiAgICAgICAgICAgICdjYWxsYmFja1VybCc6IGNhbGxiYWNrVXJsLFxyXG4gICAgICAgICAgICAnZGF0YSc6IGRhdGFcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RyYWRlL29yZGVyMSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdHJhZGUnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHJhZGVObyDor7fmsYLmlK/ku5jorqLljZXlj7dcclxuICAgICAqL1xyXG4gICAgcGF5OiBmdW5jdGlvbiAodHJhZGVObykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAndHJhZGVObyc6IHRyYWRlTm9cclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RyYWRlL3BheSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdHJhZGUnKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zdWJtaXQoYm9keUluKTtcclxuICAgIH0sXHJcbiAgICBiaWxsOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90cmFkZS9iaWxsJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RyYWRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpeiDov5Tlm57otKblj7fkv6Hmga9cclxuICAgICAqL1xyXG4gICAgdGRlVXNlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRlL3VzZXInO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIHRkZUxvY2s6IGZ1bmN0aW9uIChvbGRMb2NrLCBuZXdMb2NrLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnY2hpbGRMb2NrJzogb2xkTG9jayxcclxuICAgICAgICAgICAgJ25ld0xvY2snOiBuZXdMb2NrXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvbG9jayc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2Ug6aG16Z2i57yW5Y+3XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnumhtemdouS/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGVQYWdlOiBmdW5jdGlvbiAocGFnZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ3BhZ2UnOiBwYWdlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBib2R5SW4gPSBuZXcgUmVxdWVzdEJvZHkoKTtcclxuICAgICAgICBib2R5SW4ubWV0aG9kID0gJy90b29kby90ZGUvcGFnZSc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShiaXpJbik7XHJcbiAgICAgICAgdGhpcy5fdGRjbGkuc2V0QXBpVXJsKHRoaXMub3JpZ2luVXJsICsgJy9hcGkvdG9vZG8vdGRlJyk7XHJcbiAgICAgICAgdGhpcy5zZW5kKGJvZHlJbiwgY2FsbGJhY2spO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhdGVnb3J5IOatjOabsuWIhuexu1xyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrLmJpeiDov5Tlm57pobXpnaLkv6Hmga9cclxuICAgICAqL1xyXG4gICAgdGRhU29uZzogZnVuY3Rpb24gKGNhdGVnb3J5LCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJpekluID0ge1xyXG4gICAgICAgICAgICAnY2F0ZWdvcnknOiBjYXRlZ29yeVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL3NvbmcnO1xyXG4gICAgICAgIGJvZHlJbi5hcHBBdXRoVG9rZW4gPSB0aGlzLnRva2VuO1xyXG4gICAgICAgIGJvZHlJbi5iaXpDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoYml6SW4pO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICB0ZGFTb25nMTogZnVuY3Rpb24gKHNvbmdJZCwgY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBiaXpJbiA9IHtcclxuICAgICAgICAgICAgJ3NvbmdJZCc6IHNvbmdJZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL3NvbmcxJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGJpekluKTtcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZXRBcGlVcmwodGhpcy5vcmlnaW5VcmwgKyAnL2FwaS90b29kby90ZGEnKTtcclxuICAgICAgICB0aGlzLnNlbmQoYm9keUluLCBjYWxsYmFjayk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnumhtemdouS/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGFNYXRjaDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL21hdGNoJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2FsbGJhY2suY29kZSDov5Tlm57noIFcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFjay5iaXog6L+U5Zue6aG16Z2i5L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHRkYVVzZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IGJvZHlJbiA9IG5ldyBSZXF1ZXN0Qm9keSgpO1xyXG4gICAgICAgIGJvZHlJbi5tZXRob2QgPSAnL3Rvb2RvL3RkYS91c2VyJztcclxuICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gdGhpcy50b2tlbjtcclxuICAgICAgICBib2R5SW4uYml6Q29udGVudCA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmQg6K6w5b2VXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNhbGxiYWNrLmNvZGUg6L+U5Zue56CBXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2suYml6IOi/lOWbnumhtemdouS/oeaBr1xyXG4gICAgICovXHJcbiAgICB0ZGFSZWNvcmQ6IGZ1bmN0aW9uIChyZWNvcmQsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keUluID0gbmV3IFJlcXVlc3RCb2R5KCk7XHJcbiAgICAgICAgYm9keUluLm1ldGhvZCA9ICcvdG9vZG8vdGRhL3JlY29yZCc7XHJcbiAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiA9IHRoaXMudG9rZW47XHJcbiAgICAgICAgYm9keUluLmJpekNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShyZWNvcmQpO1xyXG4gICAgICAgIHRoaXMuX3RkY2xpLnNldEFwaVVybCh0aGlzLm9yaWdpblVybCArICcvYXBpL3Rvb2RvL3RkYScpO1xyXG4gICAgICAgIHRoaXMuc2VuZChib2R5SW4sIGNhbGxiYWNrKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVxdWVzdEJvZHl9IGJvZHlJblxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjYWxsYmFjay5jb2RlIOi/lOWbnueggVxyXG4gICAgICogQHBhcmFtIHtPYmplY3R8bnVtYmVyfHN0cmluZ30gY2FsbGJhY2suYml6IOi/lOWbnuaVsOaNrlxyXG4gICAgICovXHJcbiAgICBzZW5kOiBmdW5jdGlvbiAoYm9keUluLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGNvbnN0IG93bmVyID0gdGhpcztcclxuICAgICAgICB0aGlzLl90ZGNsaS5zZW5kKGJvZHlJbiwgZnVuY3Rpb24gKGJvZHlPdXQpIHtcclxuICAgICAgICAgICAgaWYgKGJvZHlPdXQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYml6T3V0ID0gSlNPTi5wYXJzZShib2R5T3V0LmJpekNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvZHlPdXQudG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBvd25lci50b2tlbiA9IGJvZHlPdXQudG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgc3RiTnVsbC5zZXRWYWx1ZSgndG9vZG8udG9rZW4nLCBvd25lci50b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgMSk7ICAgICAgICAgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgXCIxXCIpOyAgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJzdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgIGFsZXJ0KHR5cGVvZiB0cnVlKTsgICAgICAgICAgICAgLy8g6L+U5Zue5a2X56ym5LiyXCJib29sZWFuXCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2Yge30pOyAgICAgICAgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgW10pOyAgICAgICAgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwib2JqZWN0IFwiXHJcbiAgICAgICAgICAgICAgICAgYWxlcnQodHlwZW9mIGZ1bmN0aW9uKCl7fSk7ICAgICAvLyDov5Tlm57lrZfnrKbkuLJcImZ1bmN0aW9uXCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgbnVsbCk7ICAgICAgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwib2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICBhbGVydCh0eXBlb2YgdW5kZWZpbmVkKTsgICAgICAgIC8vIOi/lOWbnuWtl+espuS4slwidW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgaWYgKGJpek91dCAmJiB0eXBlb2YoYml6T3V0KSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBiaXpPdXQuc3RiY2xpID0gb3duZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQuY29kZSwgYml6T3V0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dC5jb2RlLCBib2R5T3V0LnN1YkNvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxudmFyIHN0YmNsaSA9IG5ldyBTdGJDbGllbnQoKTtcclxuZXhwb3J0IHtTdGJDbGllbnQsc3RiY2xpfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdG9vZG8vX3N0YmNsaS5qcyIsImltcG9ydCB7cmV0YWlsSWQscmV0YWlsfSBmcm9tIFwiLi9fcmV0YWlsXCI7XHJcblxyXG5mdW5jdGlvbiBTdGJOdWxsKCkge1xyXG59XHJcbmlmIChyZXRhaWxJZCA9PSByZXRhaWwuZ3hnZCkgey8vIOW5v+ilv+W5v+eUtSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBTdGJOdWxsLnByb3RvdHlwZSA9IHtcclxuICAgICAgICAvL+iOt+WPluacuumhtuebkuWPt+Wtl+espuS4slxyXG4gICAgICAgIGdldENhcmRUVjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ3Vhbmd4aS5nZXRTdGJOdW0oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v6I635Y+W5Yy65Z+f56CB5bi45pWwXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaVBhbmVsLmdldEdsb2JhbFZhcihcIkdFVF9NRURJQV9SRUdJT05fSURcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBpUGFuZWwuZ2V0R2xvYmFsVmFyKGtleU5hbWUpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYUNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhQ29va2llLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFDcnVtYiA9IGFDb29raWVbaV0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlc2NhcGUoa2V5TmFtZSkgPT0gYUNydW1iWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHVuZXNjYXBlKGFDcnVtYlsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCB8fCByZXN1bHQgPT0gXCIjXCIgfHwgcmVzdWx0ID09IFwiY2xlYXJWYWx1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXlWYWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlWYWx1ZSA9IFwiY2xlYXJWYWx1ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpUGFuZWwuc2V0R2xvYmFsVmFyKGtleU5hbWUsIGtleVZhbHVlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gZXNjYXBlKGtleU5hbWUpICsgXCI9XCIgKyBlc2NhcGUoa2V5VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSBlbHNlIGlmIChyZXRhaWxJZCA9PSByZXRhaWwuaG55eCkgey8vIOays+WNl+aciee6vyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICB2YXIgU3lzdGVtID0gd2luZG93LlN5c3RlbTtcclxuICAgIFN0Yk51bGwucHJvdG90eXBlID0ge1xyXG4gICAgICAgIGdldENhcmRUVjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gU3lzdGVtLnN0YklEO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UmVnaW9uQ29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVnaW9uID0gJ2hueXgnO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVnaW9uID0gU3lzdGVtLkdldENBUmVnaW9uSUQoKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZWdpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgZyA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBnID0gbmV3IEdsb2JhbChrZXlOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWcpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IG5ldyBHbG9iYWwyKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgZyA9IHt2YWx1ZTogbnVsbH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGcudmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUsIGtleVZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBnID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGcgPSBuZXcgR2xvYmFsKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBnID0gbmV3IEdsb2JhbDIoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZy52YWx1ZSA9IGtleVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn0gZWxzZSBpZiAocmV0YWlsSWQgPT0gcmV0YWlsLmdkZ2QpIHsvLyDlub/kuJzlub/nlLUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgU3RiTnVsbC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgZ2V0Q2FyZFRWOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghQ0EuaWNObykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICc5Njk1NjEwMDg2JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gQ0EuaWNObztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFJlZ2lvbkNvZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIENBLnJlZ2lvbkNvZGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleU5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFN5c1NldHRpbmcuZ2V0RW52KGtleU5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lLCBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICBTeXNTZXR0aW5nLnNldEVudihrZXlOYW1lLCBrZXlWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSBlbHNlIHtcclxuICAgIFN0Yk51bGwucHJvdG90eXBlID0ge1xyXG4gICAgICAgIGdldENhcmRUVjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJzEwMDg2JztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFJlZ2lvbkNvZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcwJztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoa2V5TmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGFDb29raWUgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhQ29va2llLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhQ3J1bWIgPSBhQ29va2llW2ldLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChlc2NhcGUoa2V5TmFtZSkgPT0gYUNydW1iWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdW5lc2NhcGUoYUNydW1iWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VmFsdWU6IGZ1bmN0aW9uIChrZXlOYW1lLCBrZXlWYWx1ZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBlc2NhcGUoa2V5TmFtZSkgKyBcIj1cIiArIGVzY2FwZShrZXlWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxudmFyIHN0Yk51bGwgPSBuZXcgU3RiTnVsbCgpO1xyXG5leHBvcnQge1N0Yk51bGwsc3RiTnVsbH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL19zdGJudWxsLmpzIiwidmFyIG1kNSA9IHJlcXVpcmUoJ21kNScpO1xyXG52YXIgSlNPTiA9IHJlcXVpcmUoJ0pTT04nKTtcclxuXHJcbmlmICghRGF0ZS5wcm90b3R5cGUuZm9ybWF0KSB7XHJcbiAgICBEYXRlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbiAoZm10KSB7XHJcbiAgICAgICAgY29uc3QgbyA9IHtcclxuICAgICAgICAgICAgXCJNK1wiOiB0aGlzLmdldE1vbnRoKCkgKyAxLCAgICAgICAgICAgICAgICAgLy/mnIjku71cclxuICAgICAgICAgICAgXCJkK1wiOiB0aGlzLmdldERhdGUoKSwgICAgICAgICAgICAgICAgICAgIC8v5pelXHJcbiAgICAgICAgICAgIFwiaCtcIjogdGhpcy5nZXRIb3VycygpLCAgICAgICAgICAgICAgICAgICAvL+Wwj+aXtlxyXG4gICAgICAgICAgICBcIm0rXCI6IHRoaXMuZ2V0TWludXRlcygpLCAgICAgICAgICAgICAgICAgLy/liIZcclxuICAgICAgICAgICAgXCJzK1wiOiB0aGlzLmdldFNlY29uZHMoKSwgICAgICAgICAgICAgICAgIC8v56eSXHJcbiAgICAgICAgICAgIFwicStcIjogTWF0aC5mbG9vcigodGhpcy5nZXRNb250aCgpICsgMykgLyAzKSwgLy/lraPluqZcclxuICAgICAgICAgICAgXCJTXCI6IHRoaXMuZ2V0TWlsbGlzZWNvbmRzKCkgICAgICAgICAgICAgLy/mr6vnp5JcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICgvKHkrKS8udGVzdChmbXQpKSB7XHJcbiAgICAgICAgICAgIGZtdCA9IGZtdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKHRoaXMuZ2V0RnVsbFllYXIoKSArIFwiXCIpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBrIGluIG8pIHtcclxuICAgICAgICAgICAgaWYgKG5ldyBSZWdFeHAoXCIoXCIgKyBrICsgXCIpXCIpLnRlc3QoZm10KSkge1xyXG4gICAgICAgICAgICAgICAgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoUmVnRXhwLiQxLmxlbmd0aCA9PSAxKSA/IChvW2tdKSA6ICgoXCIwMFwiICsgb1trXSkuc3Vic3RyKChcIlwiICsgb1trXSkubGVuZ3RoKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmbXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXF1ZXN0Qm9keSgpIHtcclxuICAgIHRoaXMuYXBwSWQgPSAnJzsgICAgICAgICAgICAgICAvLyDliIbphY3nu5nlvIDlj5HogIXnmoTlupTnlKhJRDoxMDAwXHJcbiAgICB0aGlzLm1ldGhvZCA9ICcnOyAgICAgICAgICAgICAgLy8g5o6l5Y+j5ZCN56ewOnRvb2RvLnRyYWRlLnBheVxyXG4gICAgdGhpcy5mb3JtYXQgPSAnSlNPTic7ICAgICAgICAgIC8vIOS7heaUr+aMgUpTT05cclxuICAgIHRoaXMuY2hhcnNldCA9ICd1dGYtOCc7ICAgICAgICAvLyDor7fmsYLkvb/nlKjnmoTnvJbnoIHmoLzlvI/vvIzlpoJ1dGYtOCxnYmssZ2IyMzEy562JXHJcbiAgICB0aGlzLnNpZ25UeXBlID0gJ01ENSc7ICAgICAgICAgLy8g5ZWG5oi355Sf5oiQ562+5ZCN5a2X56ym5Liy5omA5L2/55So55qE562+5ZCN566X5rOV57G75Z6LOlJTQeOAgU1ENVxyXG4gICAgdGhpcy5zaWduQ29kZSA9ICcnOyAgICAgICAgICAgIC8vIOWVhuaIt+ivt+axguWPguaVsOeahOetvuWQjeS4siAzMuS9jeWwj+WGmVxyXG4gICAgdGhpcy50aW1lc3RhbXAgPSAnJzsgICAgICAgICAgIC8vIOWPkemAgeivt+axgueahOaXtumXtO+8jOagvOW8j1wieXl5eS1NTS1kZCBISDptbTpzc1wiOjIwMTQtMDctMjQgMDM6MDc6NTBcclxuICAgIHRoaXMudmVyc2lvbiA9ICcxLjAnOyAgICAgICAgICAvLyDosIPnlKjnmoTmjqXlj6PniYjmnKzvvIzlm7rlrprkuLrvvJoxLjBcclxuICAgIHRoaXMuYXBwQXV0aFRva2VuID0gJyc7ICAgICAgICAvLyDlupTnlKjmjojmnYPnoIFcclxuICAgIHRoaXMuYml6Q29udGVudCA9ICcnOyAgICAgICAgICAvLyDkuJrliqHlj4LmlbDpm4blkIjvvIzmnIDlpKfplb/luqbkuI3pmZDvvIzpmaTlhazlhbHlj4LmlbDlpJbmiYDmnInor7fmsYLlj4LmlbDpg73lv4XpobvmlL7lnKjov5nkuKrlj4LmlbDkuK3kvKDpgJLvvIzlhbfkvZPlj4LnhaflkITkuqflk4Hlv6vpgJ/mjqXlhaXmlofmoaNcclxufVxyXG5SZXF1ZXN0Qm9keS5wcm90b3R5cGUgPSB7XHJcbiAgICBwYXJzZTogZnVuY3Rpb24gKGpzb24pIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5wYXJzZShqc29uKTtcclxuICAgICAgICB0aGlzLmFwcElkID0gYm9keS5hcHBJZDtcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IGJvZHkubWV0aG9kO1xyXG4gICAgICAgIHRoaXMuZm9ybWF0ID0gYm9keS5mb3JtYXQ7XHJcbiAgICAgICAgdGhpcy5jaGFyc2V0ID0gYm9keS5jaGFyc2V0O1xyXG4gICAgICAgIHRoaXMuc2lnblR5cGUgPSBib2R5LnNpZ25UeXBlO1xyXG4gICAgICAgIHRoaXMuc2lnbkNvZGUgPSBib2R5LnNpZ25Db2RlO1xyXG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gYm9keS50aW1lc3RhbXA7XHJcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gYm9keS52ZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuYXBwQXV0aFRva2VuID0gYm9keS5hcHBBdXRoVG9rZW47XHJcbiAgICAgICAgdGhpcy5iaXpDb250ZW50ID0gYm9keS5iaXpDb250ZW50O1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlc3BvbnNlQm9keSgpIHtcclxuICAgIHRoaXMuY29kZSA9IDA7ICAgICAgIC8vIOe9keWFs+i/lOWbnueggVxyXG4gICAgdGhpcy5tc2cgPSAn6LCD55So5oiQ5YqfJzsgLy8g572R5YWz6L+U5Zue56CB5o+P6L+wXHJcbiAgICB0aGlzLnN1YkNvZGUgPSAnJzsgICAvLyDkuJrliqHov5Tlm57noIEs6K+m6KeB5paH5qGjOnh4eHhcclxuICAgIHRoaXMuc3ViTXNnID0gJyc7ICAgIC8vIOS4muWKoei/lOWbnueggeaPj+i/sCzor6bop4HmlofmoaM65Lqk5piT5bey6KKr5pSv5LuYXHJcbiAgICB0aGlzLnRpbWVzdGFtcCA9ICcnOyAvLyDlupTnrZTnmoTml7bpl7RcclxuICAgIHRoaXMuc2lnbiA9ICcnOyAgICAgIC8vIOetvuWQjSzor6bop4HmlofmoaMgMzLkvY3lsI/lhplcclxuICAgIHRoaXMuYml6Q29udGVudCA9ICcnOy8vIOS4muWKoeWPguaVsOmbhuWQiO+8jOacgOWkp+mVv+W6puS4jemZkO+8jOmZpOWFrOWFseWPguaVsOWkluaJgOaciei/lOWbnuWPguaVsOmDveW/hemhu+aUvuWcqOi/meS4quWPguaVsOS4reS8oOmAku+8jOWFt+S9k+WPgueFp+WQhOS6p+WTgeW/q+mAn+aOpeWFpeaWh+aho1xyXG4gICAgdGhpcy50b2tlbiA9ICcnOyAgICAgLy8g5pu05paw5ZCO55qE5o6I5p2D56CBLOS4uuepuuWImeS4jeabtOaWsFxyXG59XHJcblJlc3BvbnNlQm9keS5wcm90b3R5cGUgPSB7XHJcbiAgICBwYXJzZTogZnVuY3Rpb24gKGpzb24pIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5wYXJzZShqc29uKTtcclxuICAgICAgICB0aGlzLmNvZGUgPSBib2R5LmNvZGU7XHJcbiAgICAgICAgdGhpcy5tc2cgPSBib2R5Lm1zZztcclxuICAgICAgICB0aGlzLnN1YkNvZGUgPSBib2R5LnN1YkNvZGU7XHJcbiAgICAgICAgdGhpcy5zdWJNc2cgPSBib2R5LnN1Yk1zZztcclxuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IGJvZHkudGltZXN0YW1wO1xyXG4gICAgICAgIHRoaXMuc2lnbiA9IGJvZHkuc2lnbjtcclxuICAgICAgICB0aGlzLmJpekNvbnRlbnQgPSBib2R5LmJpekNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy50b2tlbiA9IGJvZHkudG9rZW47XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVG9vZG9DbGllbnQoYXBwSWQsIGFwcFNlY3JldCwgYXBpVXJsKSB7XHJcbiAgICB0aGlzLnN0YXJ0KGFwcElkLCBhcHBTZWNyZXQsIGFwaVVybCk7XHJcbiAgICB0aGlzLmlzQnVzeSA9IGZhbHNlO1xyXG59XHJcblxyXG5Ub29kb0NsaWVudC5wcm90b3R5cGUgPSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBJZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwcFNlY3JldFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwaVVybFxyXG4gICAgICovXHJcbiAgICBzdGFydDogZnVuY3Rpb24gKGFwcElkLCBhcHBTZWNyZXQsIGFwaVVybCkge1xyXG4gICAgICAgIHRoaXMuYXBwSWQgPSBhcHBJZDtcclxuICAgICAgICB0aGlzLmFwcFNlY3JldCA9IGFwcFNlY3JldDtcclxuICAgICAgICB0aGlzLmFwaVVybCA9IGFwaVVybDtcclxuICAgICAgICB0aGlzLnRva2VuID0gJyc7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3RCb2R5fSBib2R5SW5cclxuICAgICAqL1xyXG4gICAgc2lnbkNvZGVJbjogZnVuY3Rpb24gKGJvZHlJbikge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9ICcnICtcclxuICAgICAgICAgICAgYm9keUluLmFwcEF1dGhUb2tlbiArXHJcbiAgICAgICAgICAgIGJvZHlJbi5hcHBJZCArXHJcbiAgICAgICAgICAgIGJvZHlJbi5iaXpDb250ZW50ICtcclxuICAgICAgICAgICAgYm9keUluLmNoYXJzZXQgK1xyXG4gICAgICAgICAgICBib2R5SW4uZm9ybWF0ICtcclxuICAgICAgICAgICAgYm9keUluLm1ldGhvZCArXHJcbiAgICAgICAgICAgIGJvZHlJbi50aW1lc3RhbXAgK1xyXG4gICAgICAgICAgICBib2R5SW4udmVyc2lvbiArXHJcbiAgICAgICAgICAgIHRoaXMuYXBwU2VjcmV0O1xyXG4gICAgICAgIHJldHVybiBtZDUoc3RyKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2VCb2R5fSBib2R5T3V0XHJcbiAgICAgKi9cclxuICAgIHNpZ25Db2RlT3V0OiBmdW5jdGlvbiAoYm9keU91dCkge1xyXG4gICAgICAgIGlmKGJvZHlPdXQudG9rZW49PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGJvZHlPdXQudG9rZW49XCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3RyID0gJycgK1xyXG4gICAgICAgICAgICBib2R5T3V0LmJpekNvbnRlbnQgK1xyXG4gICAgICAgICAgICBib2R5T3V0LmNvZGUgK1xyXG4gICAgICAgICAgICBib2R5T3V0Lm1zZyArXHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSArXHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnICtcclxuICAgICAgICAgICAgYm9keU91dC50aW1lc3RhbXAgK1xyXG4gICAgICAgICAgICBib2R5T3V0LnRva2VuICtcclxuICAgICAgICAgICAgdGhpcy5hcHBTZWNyZXQ7XHJcbiAgICAgICAgcmV0dXJuIG1kNShzdHIpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFwaVVybFxyXG4gICAgICovXHJcbiAgICBzZXRBcGlVcmw6IGZ1bmN0aW9uIChhcGlVcmwpIHtcclxuICAgICAgICB0aGlzLmFwaVVybCA9IGFwaVVybDtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVxdWVzdEJvZHl9IGJvZHlJblxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2VCb2R5fSBjYWxsYmFjay5ib2R5T3V0XHJcbiAgICAgKi9cclxuICAgIHNlbmQ6IGZ1bmN0aW9uIChib2R5SW4sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY29uc3QgYm9keU91dCA9IG5ldyBSZXNwb25zZUJvZHkoKTtcclxuICAgICAgICBpZiAoIVhNTEh0dHBSZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICBib2R5T3V0Lm1zZyA9ICflrqLmiLfnq6/plJnor68nO1xyXG4gICAgICAgICAgICBib2R5T3V0LnN1YkNvZGUgPSAnMTA1JztcclxuICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAnWE1MSHR0cFJlcXVlc3Tlr7nosaHkuI3lrZjlnKgnO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0J1c3kpIHtcclxuICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSA9ICc5OSc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnID0gJ+W+iOW/meWTpu+8jOivt+axgumYn+WIl+W3sua7oSc7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNCdXN5ID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIGlmIChib2R5SW4uYXBwQXV0aFRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSBib2R5SW4uYXBwQXV0aFRva2VuO1xyXG4gICAgICAgICAgICBib2R5SW4uYXBwQXV0aFRva2VuID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBib2R5SW4uYXBwSWQgPSB0aGlzLmFwcElkO1xyXG4gICAgICAgIGJvZHlJbi50aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmZvcm1hdChcInl5eXktTU0tZGQgaGg6bW06c3NcIik7XHJcbiAgICAgICAgYm9keUluLnNpZ25Db2RlID0gdGhpcy5zaWduQ29kZUluKGJvZHlJbik7XHJcblxyXG4gICAgICAgIGNvbnN0IHhtbCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIGNvbnN0IG93bmVyID0gdGhpcztcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB4bWwuYWJvcnQoKTtcclxuICAgICAgICAgICAgYm9keU91dC5jb2RlID0gMTAwMDA7XHJcbiAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSA9ICcxMDMnO1xyXG4gICAgICAgICAgICBib2R5T3V0LnN1Yk1zZyA9ICfor7fmsYLotoXml7YnO1xyXG5cclxuICAgICAgICAgICAgb3duZXIuaXNCdXN5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soYm9keU91dCk7XHJcbiAgICAgICAgfSwgMTAwMDApO1xyXG5cclxuICAgICAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeG1sLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZVRpbWVvdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh4bWwuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQucGFyc2UoeG1sLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2R5T3V0LmNvZGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWQ1ID0gb3duZXIuc2lnbkNvZGVPdXQoYm9keU91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWQ1ICE9IGJvZHlPdXQuc2lnbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuY29kZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQubXNnID0gJ+WuouaIt+err+mUmeivryc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzEwMic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJNc2cgPSAn6L+U5Zue57uT5p6c562+5ZCN5Ye66ZSZJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib2R5T3V0LnRpbWVzdGFtcCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuc2lnbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuYml6Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQudG9rZW4gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvZHlPdXQuY29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keU91dC50b2tlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG93bmVyLnRva2VuID0gYm9keU91dC50b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5tc2cgPSAn5a6i5oi356uv6ZSZ6K+vJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keU91dC5zdWJDb2RlID0gJzEwMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnID0gJ+i/lOWbnue7k+aenOW8guW4uCBlcnI6JyArIGVycjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBib2R5T3V0LmNvZGUgPSAxMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICBib2R5T3V0Lm1zZyA9ICflrqLmiLfnq6/plJnor68nO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuc3ViQ29kZSA9ICcxMDQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvZHlPdXQuc3ViTXNnID0gJ+ivt+axgui/lOWbnumUmeivryc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb3duZXIuaXNCdXN5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGJvZHlPdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB0b2tlblVybCA9IHRoaXMuYXBpVXJsICsgJz90b2tlbj0nICsgdGhpcy50b2tlbjtcclxuICAgICAgICB4bWwub3BlbignUE9TVCcsIHRva2VuVXJsLCB0cnVlKTtcclxuICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnKTtcclxuICAgICAgICB4bWwuc2VuZChKU09OLnN0cmluZ2lmeShib2R5SW4pKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7UmVxdWVzdEJvZHl9IGJvZHlJblxyXG4gICAgICovXHJcbiAgICBzdWJtaXQ6IGZ1bmN0aW9uIChib2R5SW4pIHtcclxuICAgICAgICBib2R5SW4uYXBwSWQgPSB0aGlzLmFwcElkO1xyXG4gICAgICAgIGJvZHlJbi50aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmZvcm1hdChcInl5eXktTU0tZGQgaGg6bW06c3NcIik7XHJcbiAgICAgICAgYm9keUluLnNpZ25Db2RlID0gdGhpcy5zaWduQ29kZUluKGJvZHlJbik7XHJcblxyXG4gICAgICAgIGNvbnN0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGYpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYm9keUluKSB7XHJcbiAgICAgICAgICAgIC8vbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGJvZHlJbltrZXldKSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBlaS50eXBlID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIGVpLm5hbWUgPSBrZXk7XHJcbiAgICAgICAgICAgIC8vbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxyXG4gICAgICAgICAgICBlaS52YWx1ZSA9IGJvZHlJbltrZXldO1xyXG4gICAgICAgICAgICBmLmFwcGVuZENoaWxkKGVpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGYubWV0aG9kID0gJ3Bvc3QnO1xyXG4gICAgICAgIGYuYWN0aW9uID0gdGhpcy5hcGlVcmw7XHJcbiAgICAgICAgZi5zdWJtaXQoKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGYpO1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rvb2RvL190ZGNsaS5qcyJdLCJzb3VyY2VSb290IjoiIn0=