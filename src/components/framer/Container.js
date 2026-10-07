
// ─────────────────────────────────────────────────────────────
// CMS Data Stub (Framer plugin v15)
//
// This component was bound to a Framer Collection. The runtime CMS
// machinery has been stripped — wire up your own data source by
// populating this object. Keys are the query aliases used internally
// by the design; values are arrays of items.
//
// AI INTEGRATION NOTE: identify the .map(item => ...) call(s) in
// the component below to learn what fields each item needs. Then
// replace the empty arrays here with your data (fetched from your
// CMS, an API, a JSON file, props, etc.).
// ─────────────────────────────────────────────────────────────
import { PROJECT_ROWS } from "../../data/projectRows.js";
const __FRAMER_CMS_DATA__ = { k6LJv7gte: PROJECT_ROWS };
const __framer_useQueryData = (query) => {
  const alias = query && query.from && query.from.alias;
  return (alias && __FRAMER_CMS_DATA__[alias]) || [];
};

var __dai_window=typeof window!=="undefined"?window:undefined;var __dai_navigator=typeof __dai_window!=="undefined"?navigator:undefined;

// http-url:https://framerusercontent.com/modules/Vn1Rw98CDyGaIGLEClds/fYylTpEg5qTkp4aM3BET/QbLaPzhRe.js
import { jsx as _jsx7, jsxs as _jsxs5 } from "react/jsx-runtime";
import { addFonts as addFonts7, ComponentViewportProvider as ComponentViewportProvider3, cx as cx7, forwardLoader as forwardLoader3, getFonts as getFonts3, runTasksWithYield as runTasksWithYield3, SmartComponentScopedContainer as SmartComponentScopedContainer3, useComponentViewport as useComponentViewport7, useLocaleInfo as useLocaleInfo7, useVariantState as useVariantState7, withCSS as withCSS7 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup7, motion as motion7, MotionConfigContext as MotionConfigContext7 } from "framer-motion";
import * as React7 from "react";
import { useRef as useRef8 } from "react";

// http-url:https://framerusercontent.com/modules/gmoN6g7ngHXwZUMFvbJw/HJ6y4G3iLiLv4y1AdG6W/c0pxjDOhR.js
import { jsx as _jsx3, jsxs as _jsxs2, Fragment as _Fragment } from "react/jsx-runtime";
import { addFonts as addFonts3, ChildrenCanSuspend, ComponentViewportProvider, cx as cx3, forwardLoader, getFonts, PathVariablesContext, queryCache, ResolveLinks, runTasksWithYield, runWithYield, SmartComponentScopedContainer, useComponentViewport as useComponentViewport3, useLoadMorePaginatedQuery, useLocaleInfo as useLocaleInfo3, useQueryData, useRouter, useVariantState as useVariantState3, withCSS as withCSS3, withInfiniteScroll } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3 } from "framer-motion";
import * as React3 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/glSDUYs6LBOwyqisidha/qZ4LqbyZZtUGwL9Rv74u/ERDJzzQHr.js
import { addPropertyControls as e6, ControlType as l3, QueryEngine as t3 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/glSDUYs6LBOwyqisidha/qZ4LqbyZZtUGwL9Rv74u/ERDJzzQHr-0.js
import { yieldToMain as g } from "./_framer-runtime.js";
import { ControlType as S, yieldToMain as U } from "./_framer-runtime.js";
function t(t4, e7, r3) {
  return e7 in t4 ? Object.defineProperty(t4, e7, { value: r3, enumerable: true, configurable: true, writable: true }) : t4[e7] = r3, t4;
}
var e;
var r;
var i = Object.create;
var n = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var o = Object.getOwnPropertyNames;
var a = Object.getPrototypeOf;
var u = Object.prototype.hasOwnProperty;
var l = (t4, e7) => function() {
  try {
    return e7 || (0, t4[o(t4)[0]])((e7 = { exports: {} }).exports, e7), e7.exports;
  } catch (t5) {
    throw e7 = 0, t5;
  }
};
var h = (t4, e7, r3, i4) => {
  if (e7 && "object" == typeof e7 || "function" == typeof e7)
    for (let a3 of o(e7))
      u.call(t4, a3) || a3 === r3 || n(t4, a3, { get: () => e7[a3], enumerable: !(i4 = s(e7, a3)) || i4.enumerable });
  return t4;
};
var c = (t4, e7, r3) => (r3 = null != t4 ? i(a(t4)) : {}, h(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e7 && t4 && t4.__esModule ? r3 : n(r3, "default", { value: t4, enumerable: true }),
  t4
));
var f = l({ "../../../node_modules/dataloader/index.js"(t4, e7) {
  var r3, i4 = /* @__PURE__ */ function() {
    function t5(t6, e9) {
      if ("function" != typeof t6)
        throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " + t6 + ".");
      this._batchLoadFn = t6, this._maxBatchSize = function(t7) {
        if (!(!t7 || false !== t7.batch))
          return 1;
        var e10 = t7 && t7.maxBatchSize;
        if (void 0 === e10)
          return 1 / 0;
        if ("number" != typeof e10 || e10 < 1)
          throw TypeError("maxBatchSize must be a positive number: " + e10);
        return e10;
      }(e9), this._batchScheduleFn = function(t7) {
        var e10 = t7 && t7.batchScheduleFn;
        if (void 0 === e10)
          return n4;
        if ("function" != typeof e10)
          throw TypeError("batchScheduleFn must be a function: " + e10);
        return e10;
      }(e9), this._cacheKeyFn = function(t7) {
        var e10 = t7 && t7.cacheKeyFn;
        if (void 0 === e10)
          return function(t8) {
            return t8;
          };
        if ("function" != typeof e10)
          throw TypeError("cacheKeyFn must be a function: " + e10);
        return e10;
      }(e9), this._cacheMap = function(t7) {
        if (!(!t7 || false !== t7.cache))
          return null;
        var e10 = t7 && t7.cacheMap;
        if (void 0 === e10)
          return /* @__PURE__ */ new Map();
        if (null !== e10) {
          var r4 = ["get", "set", "delete", "clear"].filter(function(t8) {
            return e10 && "function" != typeof e10[t8];
          });
          if (0 !== r4.length)
            throw TypeError("Custom cacheMap missing methods: " + r4.join(", "));
        }
        return e10;
      }(e9), this._batch = null, this.name = e9 && e9.name ? e9.name : null;
    }
    var e8 = t5.prototype;
    return e8.load = function(t6) {
      if (null == t6)
        throw TypeError("The loader.load() function must be called with a value, but got: " + String(t6) + ".");
      var e9 = function(t7) {
        var e10 = t7._batch;
        if (null !== e10 && !e10.hasDispatched && e10.keys.length < t7._maxBatchSize)
          return e10;
        var r5 = { hasDispatched: false, keys: [], callbacks: [] };
        return t7._batch = r5, t7._batchScheduleFn(function() {
          (function(t8, e11) {
            var r6;
            if (e11.hasDispatched = true, 0 === e11.keys.length) {
              o4(e11);
              return;
            }
            try {
              r6 = t8._batchLoadFn(e11.keys);
            } catch (r7) {
              return s4(t8, e11, TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " + String(r7) + "."));
            }
            if (!r6 || "function" != typeof r6.then)
              return s4(t8, e11, TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " + String(r6) + "."));
            r6.then(function(t9) {
              if (!a3(t9))
                throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " + String(t9) + ".");
              if (t9.length !== e11.keys.length)
                throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" + String(e11.keys) + "\n\nValues:\n" + String(t9));
              o4(e11);
              for (var r7 = 0; r7 < e11.callbacks.length; r7++) {
                var i6 = t9[r7];
                i6 instanceof Error ? e11.callbacks[r7].reject(i6) : e11.callbacks[r7].resolve(i6);
              }
            }).catch(function(r7) {
              s4(t8, e11, r7);
            });
          })(t7, r5);
        }), r5;
      }(this), r4 = this._cacheMap, i5 = this._cacheKeyFn(t6);
      if (r4) {
        var n5 = r4.get(i5);
        if (n5) {
          var u4 = e9.cacheHits || (e9.cacheHits = []);
          return new Promise(function(t7) {
            u4.push(function() {
              t7(n5);
            });
          });
        }
      }
      e9.keys.push(t6);
      var l4 = new Promise(function(t7, r5) {
        e9.callbacks.push({ resolve: t7, reject: r5 });
      });
      return r4 && r4.set(i5, l4), l4;
    }, e8.loadMany = function(t6) {
      if (!a3(t6))
        throw TypeError("The loader.loadMany() function must be called with Array<key> but got: " + t6 + ".");
      for (var e9 = [], r4 = 0; r4 < t6.length; r4++)
        e9.push(this.load(t6[r4]).catch(function(t7) {
          return t7;
        }));
      return Promise.all(e9);
    }, e8.clear = function(t6) {
      var e9 = this._cacheMap;
      if (e9) {
        var r4 = this._cacheKeyFn(t6);
        e9.delete(r4);
      }
      return this;
    }, e8.clearAll = function() {
      var t6 = this._cacheMap;
      return t6 && t6.clear(), this;
    }, e8.prime = function(t6, e9) {
      var r4 = this._cacheMap;
      if (r4) {
        var i5, n5 = this._cacheKeyFn(t6);
        void 0 === r4.get(n5) && (e9 instanceof Error ? (i5 = Promise.reject(e9)).catch(function() {
        }) : i5 = Promise.resolve(e9), r4.set(n5, i5));
      }
      return this;
    }, t5;
  }(), n4 = "object" == typeof process && "function" == typeof process.nextTick ? function(t5) {
    r3 || (r3 = Promise.resolve()), r3.then(function() {
      process.nextTick(t5);
    });
  } : "function" == typeof setImmediate ? function(t5) {
    setImmediate(t5);
  } : function(t5) {
    setTimeout(t5);
  };
  function s4(t5, e8, r4) {
    o4(e8);
    for (var i5 = 0; i5 < e8.keys.length; i5++)
      t5.clear(e8.keys[i5]), e8.callbacks[i5].reject(r4);
  }
  function o4(t5) {
    if (t5.cacheHits)
      for (var e8 = 0; e8 < t5.cacheHits.length; e8++)
        t5.cacheHits[e8]();
  }
  function a3(t5) {
    return "object" == typeof t5 && null !== t5 && "number" == typeof t5.length && (0 === t5.length || t5.length > 0 && Object.prototype.hasOwnProperty.call(t5, t5.length - 1));
  }
  e7.exports = i4;
} });
var d = c(f(), 1);
function v(t4) {
  return "function" == typeof t4 ? t4() : t4;
}
var y = { background: 0, "user-visible": 1, "user-blocking": 2 };
function p(t4, e7) {
  return y[t4] > y[e7];
}
function m(t4) {
  let e7;
  for (let r3 of t4) {
    let t5 = v(r3);
    if ((void 0 === e7 || p(t5, e7)) && (e7 = t5), "user-blocking" === e7)
      break;
  }
  return e7;
}
var w = { Uint8: 1, Uint16: 2, Uint32: 4, BigUint64: 8, Int8: 1, Int16: 2, Int32: 4, BigInt64: 8, Float32: 4, Float64: 8 };
var b = (e = class e2 {
  getOffset() {
    return this.offset;
  }
  ensureLength(t4) {
    let e7 = this.bytes.length;
    if (!(this.offset + t4 <= e7))
      throw Error("Reading out of bounds");
  }
  readUint8() {
    let t4 = w.Uint8;
    this.ensureLength(t4);
    let e7 = this.view.getUint8(this.offset);
    return this.offset += t4, e7;
  }
  readUint16() {
    let t4 = w.Uint16;
    this.ensureLength(t4);
    let e7 = this.view.getUint16(this.offset);
    return this.offset += t4, e7;
  }
  readUint32() {
    let t4 = w.Uint32;
    this.ensureLength(t4);
    let e7 = this.view.getUint32(this.offset);
    return this.offset += t4, e7;
  }
  readUint64() {
    let t4 = this.readBigUint64();
    return Number(t4);
  }
  readBigUint64() {
    let t4 = w.BigUint64;
    this.ensureLength(t4);
    let e7 = this.view.getBigUint64(this.offset);
    return this.offset += t4, e7;
  }
  readInt8() {
    let t4 = w.Int8;
    this.ensureLength(t4);
    let e7 = this.view.getInt8(this.offset);
    return this.offset += t4, e7;
  }
  readInt16() {
    let t4 = w.Int16;
    this.ensureLength(t4);
    let e7 = this.view.getInt16(this.offset);
    return this.offset += t4, e7;
  }
  readInt32() {
    let t4 = w.Int32;
    this.ensureLength(t4);
    let e7 = this.view.getInt32(this.offset);
    return this.offset += t4, e7;
  }
  readInt64() {
    let t4 = this.readBigInt64();
    return Number(t4);
  }
  readBigInt64() {
    let t4 = w.BigInt64;
    this.ensureLength(t4);
    let e7 = this.view.getBigInt64(this.offset);
    return this.offset += t4, e7;
  }
  readFloat32() {
    let t4 = w.Float32;
    this.ensureLength(t4);
    let e7 = this.view.getFloat32(this.offset);
    return this.offset += t4, e7;
  }
  readFloat64() {
    let t4 = w.Float64;
    this.ensureLength(t4);
    let e7 = this.view.getFloat64(this.offset);
    return this.offset += t4, e7;
  }
  readBytes(t4) {
    let e7 = this.offset, r3 = e7 + t4, i4 = this.bytes.subarray(e7, r3);
    return this.offset = r3, i4;
  }
  readString() {
    let t4 = this.readUint32(), r3 = this.readBytes(t4);
    return e2.textDecoder.decode(r3);
  }
  readJson() {
    let t4 = this.readString();
    return JSON.parse(t4);
  }
  constructor(e7) {
    t(this, "bytes", void 0), t(this, "offset", 0), t(this, "view", void 0), this.bytes = e7, this.view = I(this.bytes);
  }
}, // TextDecoder has no per-decode state unless streaming is enabled. Reusing one class-owned decoder
// avoids constructing one for every CMS item, where each item gets its own BufferReader.
t(e, "textDecoder", new TextDecoder()), e);
function I(t4) {
  return new DataView(t4.buffer, t4.byteOffset, t4.byteLength);
}
var k = "undefined" != typeof __dai_window;
var L = k && "function" == typeof __dai_window.requestIdleCallback;
function B(t4, ...e7) {
  if (!t4)
    throw Error("Assertion Error" + (e7.length > 0 ? ": " + e7.join(" ") : ""));
}
function E(t4) {
  throw Error(`Unexpected value: ${t4}`);
}
var M = 1024;
var P = 1.5;
var T = (t4) => 2 ** t4 - 1;
var x = (t4) => -(2 ** (t4 - 1));
var F = (t4) => 2 ** (t4 - 1) - 1;
var N = { Uint8: 0, Uint16: 0, Uint32: 0, Uint64: 0, BigUint64: 0, Int8: x(8), Int16: x(16), Int32: x(32), Int64: Number.MIN_SAFE_INTEGER, BigInt64: -(BigInt(2) ** BigInt(63)) };
var A = { Uint8: T(8), Uint16: T(16), Uint32: T(32), Uint64: Number.MAX_SAFE_INTEGER, BigUint64: BigInt(2) ** BigInt(64) - BigInt(1), Int8: F(8), Int16: F(16), Int32: F(32), Int64: Number.MAX_SAFE_INTEGER, BigInt64: BigInt(2) ** BigInt(63) - BigInt(1) };
function q(t4, e7, r3, i4) {
  B(t4 >= e7, t4, "outside lower bound for", i4), B(t4 <= r3, t4, "outside upper bound for", i4);
}
var O = class {
  getOffset() {
    return this.offset;
  }
  slice(t4 = 0, e7 = this.offset) {
    return this.bytes.slice(t4, e7);
  }
  subarray(t4 = 0, e7 = this.offset) {
    return this.bytes.subarray(t4, e7);
  }
  ensureLength(t4) {
    let e7 = this.bytes.length;
    if (this.offset + t4 <= e7)
      return;
    let r3 = new Uint8Array(Math.ceil(e7 * P) + t4);
    r3.set(this.bytes), this.bytes = r3, this.view = I(r3);
  }
  writeUint8(t4) {
    q(t4, N.Uint8, A.Uint8, "Uint8");
    let e7 = w.Uint8;
    this.ensureLength(e7), this.view.setUint8(this.offset, t4), this.offset += e7;
  }
  writeUint16(t4) {
    q(t4, N.Uint16, A.Uint16, "Uint16");
    let e7 = w.Uint16;
    this.ensureLength(e7), this.view.setUint16(this.offset, t4), this.offset += e7;
  }
  writeUint32(t4) {
    q(t4, N.Uint32, A.Uint32, "Uint32");
    let e7 = w.Uint32;
    this.ensureLength(e7), this.view.setUint32(this.offset, t4), this.offset += e7;
  }
  writeUint64(t4) {
    q(t4, N.Uint64, A.Uint64, "Uint64");
    let e7 = BigInt(t4);
    this.writeBigUint64(e7);
  }
  writeBigUint64(t4) {
    q(t4, N.BigUint64, A.BigUint64, "BigUint64");
    let e7 = w.BigUint64;
    this.ensureLength(e7), this.view.setBigUint64(this.offset, t4), this.offset += e7;
  }
  writeInt8(t4) {
    q(t4, N.Int8, A.Int8, "Int8");
    let e7 = w.Int8;
    this.ensureLength(e7), this.view.setInt8(this.offset, t4), this.offset += e7;
  }
  writeInt16(t4) {
    q(t4, N.Int16, A.Int16, "Int16");
    let e7 = w.Int16;
    this.ensureLength(e7), this.view.setInt16(this.offset, t4), this.offset += e7;
  }
  writeInt32(t4) {
    q(t4, N.Int32, A.Int32, "Int32");
    let e7 = w.Int32;
    this.ensureLength(e7), this.view.setInt32(this.offset, t4), this.offset += e7;
  }
  writeInt64(t4) {
    q(t4, N.Int64, A.Int64, "Int64");
    let e7 = BigInt(t4);
    this.writeBigInt64(e7);
  }
  writeBigInt64(t4) {
    q(t4, N.BigInt64, A.BigInt64, "BigInt64");
    let e7 = w.BigInt64;
    this.ensureLength(e7), this.view.setBigInt64(this.offset, t4), this.offset += e7;
  }
  writeFloat32(t4) {
    let e7 = w.Float32;
    this.ensureLength(e7), this.view.setFloat32(this.offset, t4), this.offset += e7;
  }
  writeFloat64(t4) {
    let e7 = w.Float64;
    this.ensureLength(e7), this.view.setFloat64(this.offset, t4), this.offset += e7;
  }
  writeBytes(t4) {
    let e7 = t4.length;
    this.ensureLength(e7), this.bytes.set(t4, this.offset), this.offset += e7;
  }
  encodeString(t4) {
    let e7 = this.encodedStrings.get(t4);
    if (e7)
      return e7;
    let r3 = this.encoder.encode(t4);
    return this.encodedStrings.set(t4, r3), r3;
  }
  writeString(t4) {
    let e7 = this.encodeString(t4), r3 = e7.length;
    this.writeUint32(r3), this.writeBytes(e7);
  }
  writeJson(t4) {
    let e7 = JSON.stringify(t4);
    this.writeString(e7);
  }
  constructor() {
    t(this, "offset", 0), t(this, "bytes", new Uint8Array(M)), t(this, "view", I(this.bytes)), t(this, "encoder", new TextEncoder()), t(this, "encodedStrings", /* @__PURE__ */ new Map());
  }
};
function _(t4) {
  return "string" == typeof t4;
}
function j(t4) {
  return Number.isFinite(t4);
}
function D(t4) {
  return null === t4;
}
var R = class e3 {
  static fromString(t4) {
    let [r3, i4, n4] = t4.split("/").map(Number);
    return B(j(r3), "Invalid chunkId"), B(j(i4), "Invalid offset"), B(j(n4), "Invalid length"), new e3(r3, i4, n4);
  }
  toString() {
    return `${this.chunkId}/${this.offset}/${this.length}`;
  }
  static read(t4) {
    let r3 = t4.readUint16(), i4 = t4.readUint32(), n4 = t4.readUint32();
    return new e3(r3, i4, n4);
  }
  write(t4) {
    t4.writeUint16(this.chunkId), t4.writeUint32(this.offset), t4.writeUint32(this.length);
  }
  compare(t4) {
    return this.chunkId < t4.chunkId ? -1 : this.chunkId > t4.chunkId ? 1 : this.offset < t4.offset ? -1 : this.offset > t4.offset ? 1 : (B(this.length === t4.length), 0);
  }
  constructor(e7, r3, i4) {
    t(this, "chunkId", void 0), t(this, "offset", void 0), t(this, "length", void 0), this.chunkId = e7, this.offset = r3, this.length = i4;
  }
};
function C(t4) {
  if (D(t4))
    return 0;
  switch (t4.type) {
    case "array":
      return 1;
    case "boolean":
      return 2;
    case "color":
      return 3;
    case "date":
      return 4;
    case "enum":
      return 5;
    case "file":
      return 6;
    case "responsiveimage":
      return 10;
    case "link":
      return 7;
    case "number":
      return 8;
    case "object":
      return 9;
    case "richtext":
      return 11;
    case "string":
      return 12;
    case "vectorsetitem":
      return 13;
    default:
      E(t4);
  }
}
function J(t4) {
  let e7 = t4.readUint16(), i4 = [];
  for (let n4 = 0; n4 < e7; n4++) {
    let e8 = r.read(t4);
    i4.push(e8);
  }
  return { type: "array", value: i4 };
}
function W(t4, e7) {
  for (let i4 of (t4.writeUint16(e7.value.length), e7.value))
    r.write(t4, i4);
}
function $(t4, e7, i4) {
  let n4 = t4.value.length, s4 = e7.value.length;
  if (n4 < s4)
    return -1;
  if (n4 > s4)
    return 1;
  for (let s5 = 0; s5 < n4; s5++) {
    let n5 = t4.value[s5], o4 = e7.value[s5], a3 = r.compare(n5, o4, i4);
    if (0 !== a3)
      return a3;
  }
  return 0;
}
function z(t4) {
  return { type: "boolean", value: 0 !== t4.readUint8() };
}
function K(t4, e7) {
  t4.writeUint8(e7.value ? 1 : 0);
}
function G(t4, e7) {
  return t4.value < e7.value ? -1 : t4.value > e7.value ? 1 : 0;
}
function V(t4) {
  return { type: "color", value: t4.readString() };
}
function H(t4, e7) {
  t4.writeString(e7.value);
}
function X(t4, e7) {
  return t4.value < e7.value ? -1 : t4.value > e7.value ? 1 : 0;
}
function Q(t4) {
  let e7 = t4.readInt64(), r3 = new Date(e7);
  return { type: "date", value: r3.toISOString() };
}
function Y(t4, e7) {
  let r3 = new Date(e7.value), i4 = r3.getTime();
  t4.writeInt64(i4);
}
function Z(t4, e7) {
  let r3 = new Date(t4.value), i4 = new Date(e7.value);
  return r3 < i4 ? -1 : r3 > i4 ? 1 : 0;
}
function tt(t4) {
  return { type: "enum", value: t4.readString() };
}
function te(t4, e7) {
  t4.writeString(e7.value);
}
function tr(t4, e7) {
  return t4.value < e7.value ? -1 : t4.value > e7.value ? 1 : 0;
}
function ti(t4) {
  return { type: "file", value: t4.readString() };
}
function tn(t4, e7) {
  t4.writeString(e7.value);
}
function ts(t4, e7) {
  return t4.value < e7.value ? -1 : t4.value > e7.value ? 1 : 0;
}
function to(t4) {
  return { type: "link", value: t4.readJson() };
}
function ta(t4, e7) {
  t4.writeJson(e7.value);
}
function tu(t4, e7) {
  let r3 = JSON.stringify(t4.value), i4 = JSON.stringify(e7.value);
  return r3 < i4 ? -1 : r3 > i4 ? 1 : 0;
}
function tl(t4) {
  return { type: "number", value: t4.readFloat64() };
}
function th(t4, e7) {
  t4.writeFloat64(e7.value);
}
function tc(t4, e7) {
  return t4.value < e7.value ? -1 : t4.value > e7.value ? 1 : 0;
}
function tf(t4) {
  let e7 = t4.readUint16(), i4 = {};
  for (let n4 = 0; n4 < e7; n4++) {
    let e8 = t4.readString();
    i4[e8] = r.read(t4);
  }
  return { type: "object", value: i4 };
}
function td(t4, e7) {
  let i4 = Object.entries(e7.value);
  for (let [e8, n4] of (t4.writeUint16(i4.length), i4))
    t4.writeString(e8), r.write(t4, n4);
}
function tg(t4, e7, i4) {
  let n4 = Object.keys(t4.value).sort(), s4 = Object.keys(e7.value).sort();
  if (n4.length < s4.length)
    return -1;
  if (n4.length > s4.length)
    return 1;
  for (let o4 = 0; o4 < n4.length; o4++) {
    let a3 = n4[o4], u4 = s4[o4];
    if (a3 < u4)
      return -1;
    if (a3 > u4)
      return 1;
    let l4 = t4.value[a3] ?? null, h4 = e7.value[u4] ?? null, c4 = r.compare(l4, h4, i4);
    if (0 !== c4)
      return c4;
  }
  return 0;
}
function tv(t4) {
  return { type: "responsiveimage", value: t4.readJson() };
}
function ty(t4, e7) {
  t4.writeJson(e7.value);
}
function tp(t4, e7) {
  let r3 = JSON.stringify(t4.value), i4 = JSON.stringify(e7.value);
  return r3 < i4 ? -1 : r3 > i4 ? 1 : 0;
}
function tm(t4) {
  let e7 = t4.readInt8();
  if (0 === e7)
    return { type: "richtext", value: t4.readUint32() };
  if (1 === e7)
    return { type: "richtext", value: t4.readString() };
  throw Error("Invalid rich text pointer");
}
function tw(t4, e7) {
  if (j(e7.value)) {
    t4.writeInt8(0), t4.writeUint32(e7.value);
    return;
  }
  if (_(e7.value)) {
    t4.writeInt8(1), t4.writeString(e7.value);
    return;
  }
  throw Error("Invalid rich text pointer");
}
function tb(t4, e7) {
  let r3 = t4.value, i4 = e7.value;
  if (j(r3) && j(i4) || _(r3) && _(i4))
    return r3 < i4 ? -1 : r3 > i4 ? 1 : 0;
  throw Error("Invalid rich text pointer");
}
function tI(t4) {
  return { type: "string", value: t4.readString() };
}
function tS(t4, e7) {
  t4.writeString(e7.value);
}
function tU(t4, e7, r3) {
  let i4 = t4.value, n4 = e7.value;
  return (0 === r3.type && (i4 = t4.value.toLowerCase(), n4 = e7.value.toLowerCase()), i4 < n4) ? -1 : i4 > n4 ? 1 : 0;
}
function tk(t4) {
  return { type: "vectorsetitem", value: t4.readUint32() };
}
function tL(t4, e7) {
  t4.writeUint32(e7.value);
}
function tB(t4, e7) {
  let r3 = t4.value, i4 = e7.value;
  return r3 < i4 ? -1 : r3 > i4 ? 1 : 0;
}
((t4) => {
  t4.read = function(t5) {
    let e7 = t5.readUint8();
    switch (e7) {
      case 0:
        return null;
      case 1:
        return J(t5);
      case 2:
        return z(t5);
      case 3:
        return V(t5);
      case 4:
        return Q(t5);
      case 5:
        return tt(t5);
      case 6:
        return ti(t5);
      case 7:
        return to(t5);
      case 8:
        return tl(t5);
      case 9:
        return tf(t5);
      case 10:
        return tv(t5);
      case 11:
        return tm(t5);
      case 12:
        return tI(t5);
      case 13:
        return tk(t5);
      default:
        E(e7);
    }
  }, t4.write = function(t5, e7) {
    let r3 = C(e7);
    if (t5.writeUint8(r3), !D(e7))
      switch (e7.type) {
        case "array":
          return W(t5, e7);
        case "boolean":
          return K(t5, e7);
        case "color":
          return H(t5, e7);
        case "date":
          return Y(t5, e7);
        case "enum":
          return te(t5, e7);
        case "file":
          return tn(t5, e7);
        case "link":
          return ta(t5, e7);
        case "number":
          return th(t5, e7);
        case "object":
          return td(t5, e7);
        case "responsiveimage":
          return ty(t5, e7);
        case "richtext":
          return tw(t5, e7);
        case "vectorsetitem":
          return tL(t5, e7);
        case "string":
          return tS(t5, e7);
        default:
          E(e7);
      }
  }, t4.compare = function(t5, e7, r3) {
    let i4 = C(t5), n4 = C(e7);
    if (i4 < n4)
      return -1;
    if (i4 > n4)
      return 1;
    if (D(t5) || D(e7))
      return 0;
    switch (t5.type) {
      case "array":
        return B("array" === e7.type), $(t5, e7, r3);
      case "boolean":
        return B("boolean" === e7.type), G(t5, e7);
      case "color":
        return B("color" === e7.type), X(t5, e7);
      case "date":
        return B("date" === e7.type), Z(t5, e7);
      case "enum":
        return B("enum" === e7.type), tr(t5, e7);
      case "file":
        return B("file" === e7.type), ts(t5, e7);
      case "link":
        return B("link" === e7.type), tu(t5, e7);
      case "number":
        return B("number" === e7.type), tc(t5, e7);
      case "object":
        return B("object" === e7.type), tg(t5, e7, r3);
      case "responsiveimage":
        return B("responsiveimage" === e7.type), tp(t5, e7);
      case "richtext":
        return B("richtext" === e7.type), tb(t5, e7);
      case "vectorsetitem":
        return B("vectorsetitem" === e7.type), tB(t5, e7);
      case "string":
        return B("string" === e7.type), tU(t5, e7, r3);
      default:
        E(t5);
    }
  };
})(r || (r = {}));
var tE = class e4 {
  sortEntries() {
    this.entries.sort((t4, e7) => {
      for (let i4 = 0; i4 < this.fieldNames.length; i4++) {
        let n4 = t4.values[i4], s4 = e7.values[i4], o4 = r.compare(n4, s4, this.options.collation);
        if (0 !== o4)
          return o4;
      }
      return t4.pointer.compare(e7.pointer);
    });
  }
  static async deserialize(t4, i4) {
    let n4 = new b(t4), s4 = n4.readJson(), o4 = n4.readUint8(), a3 = [];
    for (let t5 = 0; t5 < o4; t5++) {
      let t6 = n4.readString();
      a3.push(t6);
    }
    let u4 = new e4(a3, { collation: s4 }), l4 = n4.readUint32(), h4 = () => {
      let t5 = [];
      for (let e8 = 0; e8 < o4; e8++) {
        let e9 = r.read(n4);
        t5.push(e9);
      }
      let e7 = R.read(n4);
      u4.entries.push({ values: t5, pointer: e7 });
    };
    for (let t5 = 0; t5 < l4; t5++) {
      let t6 = i4?.();
      t6 && await t6, h4();
    }
    return u4;
  }
  serialize() {
    let t4 = new O();
    for (let e7 of (t4.writeJson(this.options.collation), t4.writeUint8(this.fieldNames.length), this.fieldNames))
      t4.writeString(e7);
    for (let e7 of (this.sortEntries(), t4.writeUint32(this.entries.length), this.entries)) {
      let { values: i4, pointer: n4 } = e7;
      for (let e8 of i4)
        r.write(t4, e8);
      n4.write(t4);
    }
    return t4.subarray();
  }
  addItem(t4, e7) {
    let r3 = this.fieldNames.map((e8) => t4.getField(e8) ?? null);
    this.entries.push({ values: r3, pointer: e7 });
  }
  constructor(e7, r3) {
    t(this, "fieldNames", void 0), t(this, "options", void 0), t(this, "entries", []), this.fieldNames = e7, this.options = r3;
  }
};
var tM = 3;
var tP = 250;
var tT = [
  408,
  // Request Timeout
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
];
var tx = async (t4, e7) => {
  let r3 = 0;
  for (; ; ) {
    try {
      let i4 = await fetch(t4, e7);
      if (!tT.includes(i4.status) || ++r3 > tM)
        return i4;
    } catch (t5) {
      if (e7?.signal?.aborted || ++r3 > tM)
        throw t5;
    }
    await tF(r3);
  }
};
async function tF(t4) {
  let e7 = Math.floor(tP * (Math.random() + 1) * 2 ** (t4 - 1));
  await new Promise((t5) => {
    setTimeout(t5, e7);
  });
}
async function tN(t4, e7) {
  let r3 = tO(e7), i4 = [], n4 = 0;
  for (let t5 of r3)
    i4.push(`${t5.from}-${t5.to - 1}`), n4 += t5.to - t5.from;
  let s4 = new URL(t4), o4 = i4.join(",");
  s4.searchParams.set("range", o4);
  let a3 = await tx(s4);
  if (200 !== a3.status)
    throw Error(`Request failed: ${a3.status} ${a3.statusText}`);
  let u4 = await a3.arrayBuffer(), l4 = new Uint8Array(u4);
  if (l4.length !== n4)
    throw Error("Request failed: Unexpected response length");
  let h4 = new tA(), c4 = 0;
  for (let t5 of r3) {
    let e8 = t5.to - t5.from, r4 = c4 + e8, i5 = l4.subarray(c4, r4);
    h4.write(t5.from, i5), c4 = r4;
  }
  return e7.map((t5) => h4.read(t5.from, t5.to - t5.from));
}
var tA = class {
  read(t4, e7) {
    for (let r3 of this.chunks) {
      if (t4 < r3.start)
        break;
      if (t4 > r3.end)
        continue;
      if (t4 + e7 > r3.end)
        break;
      let i4 = t4 - r3.start, n4 = i4 + e7;
      return r3.data.slice(i4, n4);
    }
    throw Error("Missing data");
  }
  write(t4, e7) {
    let r3 = t4, i4 = r3 + e7.length, n4 = 0, s4 = this.chunks.length;
    for (; n4 < s4; n4++) {
      let t5 = this.chunks[n4];
      if (B(t5, "Missing chunk"), !(r3 > t5.end)) {
        if (r3 > t5.start) {
          let i5 = r3 - t5.start, n5 = t5.data.subarray(0, i5);
          e7 = tq(n5, e7), r3 = t5.start;
        }
        break;
      }
    }
    for (; s4 > n4; s4--) {
      let t5 = this.chunks[s4 - 1];
      if (B(t5, "Missing chunk"), !(i4 < t5.start)) {
        if (i4 < t5.end) {
          let r4 = i4 - t5.start, n5 = t5.data.subarray(r4);
          e7 = tq(e7, n5), i4 = t5.end;
        }
        break;
      }
    }
    let o4 = { start: r3, end: i4, data: e7 }, a3 = s4 - n4;
    this.chunks.splice(n4, a3, o4);
  }
  constructor() {
    t(this, "chunks", []);
  }
};
function tq(t4, e7) {
  let r3 = t4.length + e7.length, i4 = new Uint8Array(r3);
  return i4.set(t4, 0), i4.set(e7, t4.length), i4;
}
function tO(t4) {
  B(t4.length > 0, "Must have at least one range");
  let e7 = [...t4].sort((t5, e8) => t5.from - e8.from), r3 = [];
  for (let t5 of e7) {
    let e8 = r3.length - 1, i4 = r3[e8];
    i4 && t5.from <= i4.to ? r3[e8] = { from: i4.from, to: Math.max(i4.to, t5.to) } : r3.push(t5);
  }
  return r3;
}
var t_ = class {
  async loadModel() {
    let [t4] = await tN(this.options.url, [this.options.range]);
    return B(t4, "Failed to load model"), tE.deserialize(t4, () => {
      let t5 = m(this.modelPrioritySources);
      return t5 ? U({ batch: true, priority: t5 }) : void 0;
    });
  }
  async getModel(t4) {
    return this.model || (t4 && this.modelPrioritySources.add(t4), this.modelPromise ?? (this.modelPromise = this.loadModel().finally(() => {
      this.modelPrioritySources.clear();
    })), this.model ?? (this.model = await this.modelPromise)), this.model;
  }
  async lookupItems(t4, e7) {
    B(t4.length === this.fields.length, "Invalid query length");
    let r3 = await this.getModel(e7), i4 = [r3.entries];
    for (let [r4, n5] of t4.entries()) {
      let t5 = [];
      for (let s4 of i4) {
        let i5;
        let o4 = e7 ? U({ batch: true, priority: v(e7) }) : void 0;
        switch (o4 && await o4, n5.type) {
          case "All":
            i5 = [s4];
            break;
          case "Equals":
            i5 = this.queryEquals(s4, n5, r4);
            break;
          case "NotEquals":
            i5 = this.queryNotEquals(s4, n5, r4);
            break;
          case "LessThan":
            i5 = this.queryLessThan(s4, n5, r4);
            break;
          case "GreaterThan":
            i5 = this.queryGreaterThan(s4, n5, r4);
            break;
          case "Contains":
            i5 = await this.queryContains(s4, n5, r4, e7);
            break;
          case "StartsWith":
            i5 = await this.queryStartsWith(s4, n5, r4, e7);
            break;
          case "EndsWith":
            i5 = await this.queryEndsWith(s4, n5, r4, e7);
            break;
          default:
            E(n5);
        }
        t5.push(...i5);
      }
      i4 = t5;
    }
    let n4 = [];
    for (let t5 of i4)
      for (let r4 of t5) {
        let t6 = e7 ? U({ batch: true, priority: v(e7) }) : void 0;
        t6 && await t6;
        let i5 = {};
        for (let t7 = 0; t7 < this.options.fieldNames.length; t7++) {
          let e8 = this.options.fieldNames[t7], n5 = r4.values[t7];
          i5[e8] = n5;
        }
        n4.push({ pointer: r4.pointer.toString(), data: i5 });
      }
    return n4;
  }
  queryEquals(t4, e7, r3) {
    let i4 = this.getLeftMost(t4, r3, e7.value), n4 = this.getRightMost(t4, r3, e7.value), s4 = t4.slice(i4, n4 + 1);
    return s4.length > 0 ? [s4] : [];
  }
  queryNotEquals(t4, e7, r3) {
    let i4 = this.getLeftMost(t4, r3, e7.value), n4 = this.getRightMost(t4, r3, e7.value), s4 = [], o4 = t4.slice(0, i4);
    o4.length > 0 && s4.push(o4);
    let a3 = t4.slice(n4 + 1);
    return a3.length > 0 && s4.push(a3), s4;
  }
  queryLessThan(t4, e7, r3) {
    let i4 = this.getRightMost(t4, r3, null);
    if (t4 = t4.slice(i4 + 1), e7.inclusive) {
      let i5 = this.getRightMost(t4, r3, e7.value), n5 = t4.slice(0, i5 + 1);
      return n5.length > 0 ? [n5] : [];
    }
    let n4 = this.getLeftMost(t4, r3, e7.value), s4 = t4.slice(0, n4);
    return s4.length > 0 ? [s4] : [];
  }
  queryGreaterThan(t4, e7, r3) {
    let i4 = this.getRightMost(t4, r3, null);
    if (t4 = t4.slice(i4 + 1), e7.inclusive) {
      let i5 = this.getLeftMost(t4, r3, e7.value), n5 = t4.slice(i5);
      return n5.length > 0 ? [n5] : [];
    }
    let n4 = this.getRightMost(t4, r3, e7.value), s4 = t4.slice(n4 + 1);
    return s4.length > 0 ? [s4] : [];
  }
  queryContains(t4, e7, r3, i4) {
    return this.findItems(t4, r3, i4, (t5) => {
      if (t5?.type !== S.String || e7.value?.type !== S.String)
        return false;
      let r4 = t5.value, i5 = e7.value.value;
      return 0 === this.collation.type && (r4 = r4.toLowerCase(), i5 = i5.toLowerCase()), r4.includes(i5);
    });
  }
  queryStartsWith(t4, e7, r3, i4) {
    return this.findItems(t4, r3, i4, (t5) => {
      if (t5?.type !== S.String || e7.value?.type !== S.String)
        return false;
      let r4 = t5.value, i5 = e7.value.value;
      return 0 === this.collation.type && (r4 = r4.toLowerCase(), i5 = i5.toLowerCase()), r4.startsWith(i5);
    });
  }
  queryEndsWith(t4, e7, r3, i4) {
    return this.findItems(t4, r3, i4, (t5) => {
      if (t5?.type !== S.String || e7.value?.type !== S.String)
        return false;
      let r4 = t5.value, i5 = e7.value.value;
      return 0 === this.collation.type && (r4 = r4.toLowerCase(), i5 = i5.toLowerCase()), r4.endsWith(i5);
    });
  }
  /**
  * Returns the index of the left most entry that is equal to the target.
  *
  * ```text
  *   Left most
  *       ↓
  * ┌───┬───┬───┬───┬───┬───┐
  * │ 1 │ 2 │ 2 │ 2 │ 2 │ 3 │
  * └───┴───┴───┴───┴───┴───┘
  * ```
  *
  * @param entries The entries array to search in.
  * @param position The position of the value in the entry.
  * @param target The target value to search for.
  * @returns The index of the left most entry that is equal to the target.
  */
  getLeftMost(t4, e7, i4) {
    let n4 = 0, s4 = t4.length;
    for (; n4 < s4; ) {
      let o4 = n4 + s4 >> 1, a3 = t4[o4], u4 = a3.values[e7];
      0 > r.compare(u4, i4, this.collation) ? n4 = o4 + 1 : s4 = o4;
    }
    return n4;
  }
  /**
  * Returns the index of the right most entry that is equal to the target.
  *
  * ```text
  *              Right most
  *                   ↓
  * ┌───┬───┬───┬───┬───┬───┐
  * │ 1 │ 2 │ 2 │ 2 │ 2 │ 3 │
  * └───┴───┴───┴───┴───┴───┘
  * ```
  *
  * @param entries The entries array to search in.
  * @param position The position of the value in the entry.
  * @param target The target value to search for.
  * @returns The index of the right most entry that is equal to the target.
  */
  getRightMost(t4, e7, i4) {
    let n4 = 0, s4 = t4.length;
    for (; n4 < s4; ) {
      let o4 = n4 + s4 >> 1, a3 = t4[o4], u4 = a3.values[e7];
      r.compare(u4, i4, this.collation) > 0 ? s4 = o4 : n4 = o4 + 1;
    }
    return s4 - 1;
  }
  /**
  * Finds all items that are matching the predicate and groups adjacent items together.
  *
  * @param entries The entries array to search in.
  * @param position The position of the value in the entry.
  * @param predicate The predicate to match the values against.
  * @returns An array of chunks that match the predicate.
  */
  async findItems(t4, e7, r3, i4) {
    let n4 = [], s4 = 0;
    for (let o4 = 0; o4 < t4.length; o4++) {
      let a3 = r3 ? U({ batch: true, priority: v(r3) }) : void 0;
      a3 && await a3;
      let u4 = t4[o4], l4 = u4.values[e7], h4 = i4(l4);
      if (!h4) {
        if (s4 < o4) {
          let e8 = t4.slice(s4, o4);
          n4.push(e8);
        }
        s4 = o4 + 1;
      }
    }
    if (s4 < t4.length) {
      let e8 = t4.slice(s4);
      n4.push(e8);
    }
    return n4;
  }
  constructor(e7) {
    t(this, "options", void 0), t(this, "schema", void 0), t(this, "fields", void 0), t(this, "supportedLookupTypes", [
      "All",
      "Equals",
      "NotEquals",
      "LessThan",
      "GreaterThan",
      "Contains",
      "StartsWith",
      "EndsWith"
      /* EndsWith */
    ]), t(this, "modelPromise", void 0), t(this, "model", void 0), t(this, "modelPrioritySources", /* @__PURE__ */ new Set()), t(this, "collation", void 0), this.options = e7;
    let r3 = {}, i4 = [];
    for (let t4 of this.options.fieldNames) {
      let e8 = this.options.collectionSchema[t4];
      B(e8, "Missing definition for field", t4), r3[t4] = e8, i4.push({ type: "Identifier", name: t4 });
    }
    this.schema = r3, this.fields = i4, this.collation = this.options.collation;
  }
};
function tj(t4) {
  let e7 = {}, i4 = t4.readUint16();
  for (let n4 = 0; n4 < i4; n4++) {
    let i5 = t4.readString();
    e7[i5] = r.read(t4);
  }
  return e7;
}
function* tD(t4) {
  for (let e7 of t4)
    yield* e7.prioritySources;
}
var tR = class {
  scanItems(t4) {
    return this.itemsPromise ? this.isScanning && t4 && this.scanPrioritySources.add(t4) : (this.isScanning = true, t4 && this.scanPrioritySources.add(t4), this.itemsPromise = tx(this.url).then(async (t5) => {
      if (!t5.ok)
        throw Error(`Request failed: ${t5.status} ${t5.statusText}`);
      let e7 = await t5.arrayBuffer(), r3 = new Uint8Array(e7), i4 = new b(r3), n4 = [], s4 = i4.readUint32();
      for (let t6 = 0; t6 < s4; t6++) {
        let t7 = m(this.scanPrioritySources), e8 = t7 ? g({ batch: true, priority: t7 }) : void 0;
        e8 && await e8;
        let r4 = i4.getOffset(), s5 = tj(i4), o4 = i4.getOffset() - r4, a3 = new R(this.id, r4, o4), u4 = a3.toString(), l4 = { pointer: u4, data: s5 };
        this.itemLoader.prime({ pointer: u4, prioritySources: /* @__PURE__ */ new Set() }, l4), n4.push(l4);
      }
      return n4;
    }).finally(() => {
      this.isScanning = false, this.scanPrioritySources.clear();
    })), this.itemsPromise;
  }
  resolveItem(t4, e7) {
    let r3 = this.itemPrioritySources.get(t4);
    r3 || (r3 = /* @__PURE__ */ new Set(), this.itemPrioritySources.set(t4, r3)), e7 && r3.add(e7);
    let i4 = this.itemLoader.load({ pointer: t4, prioritySources: r3 }), n4 = () => this.itemPrioritySources.delete(t4);
    return i4.then(n4, n4), i4;
  }
  constructor(e7, r3) {
    t(this, "id", void 0), t(this, "url", void 0), t(this, "itemsPromise", void 0), t(this, "isScanning", false), t(this, "scanPrioritySources", /* @__PURE__ */ new Set()), t(this, "itemPrioritySources", /* @__PURE__ */ new Map()), t(this, "itemLoader", new d.default(async (t4) => {
      let e8 = t4.map(({ pointer: t5 }) => {
        let e9 = R.fromString(t5);
        return { from: e9.offset, to: e9.offset + e9.length };
      }), r4 = await tN(this.url, e8), i4 = [];
      for (let e9 = 0; e9 < r4.length; e9++) {
        let n4 = m(tD(t4)), s4 = n4 ? g({ batch: true, priority: n4 }) : void 0;
        s4 && await s4;
        let o4 = r4[e9];
        B(o4, "Missing range bytes");
        let a3 = new b(o4), u4 = tj(a3), l4 = t4[e9]?.pointer;
        B(l4, "Missing pointer"), i4.push({ pointer: l4, data: u4 });
      }
      return i4;
    }, {
      // capping to 250 avoids overly long URLs that can cause requests to fail with 414
      maxBatchSize: 250,
      // Different route workflows can request the same item. Keep DataLoader's cache keyed by the
      // pointer while still carrying the strongest scheduling priority into the shared batch
      cacheKeyFn: (t4) => t4.pointer
    })), this.id = e7, this.url = r3;
  }
};
var tC = class {
  async scanItems(t4) {
    let e7 = await Promise.all(this.chunks.map(async (e8) => e8.scanItems(t4)));
    return e7.flat();
  }
  resolveItems(t4, e7) {
    return Promise.all(t4.map((t5) => {
      let r3 = R.fromString(t5), i4 = this.chunks[r3.chunkId];
      return B(i4, "Missing chunk"), i4.resolveItem(t5, e7);
    }));
  }
  compareItems(t4, e7) {
    let r3 = R.fromString(t4.pointer), i4 = R.fromString(e7.pointer);
    return r3.compare(i4);
  }
  compareValues(t4, e7, i4) {
    return r.compare(t4, e7, i4);
  }
  constructor(e7) {
    t(this, "options", void 0), t(this, "id", void 0), t(this, "schema", void 0), t(this, "indexes", void 0), t(this, "resolveRichText", void 0), t(this, "resolveVectorSetItem", void 0), t(this, "chunks", void 0), this.options = e7, this.chunks = this.options.chunks.map((t4, e8) => new tR(e8, t4)), this.schema = e7.schema, this.indexes = e7.indexes, this.resolveRichText = e7.resolveRichText, this.resolveVectorSetItem = e7.resolveVectorSetItem, this.id = e7.id;
  }
};

// http-url:https://framerusercontent.com/modules/glSDUYs6LBOwyqisidha/qZ4LqbyZZtUGwL9Rv74u/ERDJzzQHr-1.js
import { jsx as e5 } from "react/jsx-runtime";
import { AutoBreakpointVariant as r2, ComponentPresetsConsumer as t2, Link as n2, motion as o2 } from "./_framer-runtime.js";
import { isValidElement as i2 } from "react";
import { Fragment as s2, createElement as m2 } from "react";
var a2;
var f2;
var u2 = "undefined" != typeof __dai_window;
var c2 = u2 && "function" == typeof __dai_window.requestIdleCallback;
var l2 = "preload";
function p2(e7) {
  return "object" == typeof e7 && null !== e7 && !/* @__PURE__ */ i2(e7) && l2 in e7;
}
function d2(e7, ...r3) {
  if (!e7)
    throw Error("Assertion Error" + (r3.length > 0 ? ": " + r3.join(" ") : ""));
}
var y2 = ((a2 = y2 || {})[a2.Fragment = 1] = "Fragment", a2[a2.Link = 2] = "Link", a2[a2.Module = 3] = "Module", a2[a2.Tag = 4] = "Tag", a2[a2.Text = 5] = "Text", a2);
var h2 = ((f2 = h2 || {})[f2.RichText = 1] = "RichText", f2[f2.VectorSetItem = 2] = "VectorSetItem", f2);
function x2(e7, r3, t4) {
  for (let [n4, o4] of Object.entries(r3)) {
    let r4 = e7[n4];
    if ("number" == typeof o4) {
      e7[n4] = t4(o4, r4);
      continue;
    }
    T2(r4, o4, t4);
  }
}
function T2(e7, r3, t4) {
  if ("number" != typeof r3) {
    if (Array.isArray(r3)) {
      if (!Array.isArray(e7))
        return;
      let [n4] = r3;
      for (let r4 = 0; r4 < e7.length; r4++) {
        let o4 = e7[r4];
        "number" == typeof n4 ? e7[r4] = t4(n4, o4) : T2(o4, n4, t4);
      }
      return;
    }
    null === e7 || "object" != typeof e7 || Array.isArray(e7) || x2(e7, r3, t4);
  }
}
function g2(i4) {
  let a3 = /* @__PURE__ */ new Map();
  return (f4) => {
    let u4 = a3.get(f4);
    if (u4)
      return u4;
    let c4 = JSON.parse(f4), l4 = function a4(f5) {
      switch (f5[0]) {
        case 1: {
          let [, ...e7] = f5, r3 = e7.map(a4);
          return /* @__PURE__ */ m2(s2, void 0, ...r3);
        }
        case 2: {
          let [, e7, ...r3] = f5, t4 = r3.map(a4);
          return /* @__PURE__ */ m2(n2, e7, ...t4);
        }
        case 3: {
          let [, n4, o4, u5] = f5;
          x2(o4, u5, (e7, r3) => {
            if (1 === e7)
              return r3 ? a4(r3) : r3;
            if ("string" != typeof r3)
              return r3;
            let t4 = i4[r3];
            return t4 ? (p2(t4) && t4.preload(), t4) : r3;
          });
          let c5 = i4[n4];
          return d2(c5, "Module not found"), p2(c5) && c5.preload(), /* @__PURE__ */ e5(t2, { componentIdentifier: n4, children: (t4) => /* @__PURE__ */ e5(r2, { component: c5, props: { ...t4, ...o4 } }) });
        }
        case 4: {
          let [, e7, r3, ...t4] = f5, n4 = t4.map(a4);
          if ("a" === e7)
            return /* @__PURE__ */ m2(o2.a, r3, ...n4);
          return /* @__PURE__ */ m2(e7, r3, ...n4);
        }
        case 5: {
          let [, e7] = f5;
          return e7;
        }
      }
    }(c4);
    return a3.set(f4, l4), l4;
  };
}

// http-url:https://framerusercontent.com/modules/glSDUYs6LBOwyqisidha/qZ4LqbyZZtUGwL9Rv74u/ERDJzzQHr.js
var o3 = { B369NTS5_: { isNullable: true, type: l3.ResponsiveImage }, b3XlDEEmG: { isNullable: true, type: l3.String }, b4tiQybAd: { isNullable: true, type: l3.String }, BOkfogVMC: { isNullable: true, type: l3.ResponsiveImage }, createdAt: { isNullable: true, type: l3.Date }, dAZk2Jaon: { isNullable: true, type: l3.String }, dRhpMUxWd: { isNullable: true, type: l3.ResponsiveImage }, dzQTLJWic: { isNullable: true, type: l3.String }, ExPfWm4Bg: { isNullable: true, type: l3.ResponsiveImage }, eyuH4cHTQ: { isNullable: true, type: l3.ResponsiveImage }, F1KVBlC4y: { isNullable: true, type: l3.ResponsiveImage }, fN7pyWzw7: { isNullable: true, type: l3.ResponsiveImage }, Fv1GqGRfr: { isNullable: true, type: l3.String }, ggcZ6VEyH: { isNullable: true, type: l3.Boolean }, gR2nhp5qm: { isNullable: true, type: l3.Link }, gXFKGU6hn: { isNullable: true, type: l3.ResponsiveImage }, HbtVV6BMk: { isNullable: true, type: l3.ResponsiveImage }, HxsVzqrJg: { isNullable: true, type: l3.ResponsiveImage }, id: { isNullable: false, type: l3.String }, Ik4D4pxOl: { isNullable: true, type: l3.ResponsiveImage }, IqypXjrqO: { isNullable: true, type: l3.ResponsiveImage }, jSHHEUgFL: { isNullable: true, type: l3.ResponsiveImage }, JytRQ4nh8: { isNullable: true, type: l3.ResponsiveImage }, l2NBo7UWA: { isNullable: true, type: l3.ResponsiveImage }, LeyNb3jM2: { isNullable: true, type: l3.ResponsiveImage }, mPrmYHudU: { isNullable: true, type: l3.ResponsiveImage }, Na0xhxmje: { isNullable: true, type: l3.String }, nEx8XU81L: { isNullable: true, type: l3.String }, nextItemId: { isNullable: true, type: l3.String }, previousItemId: { isNullable: true, type: l3.String }, pXmRpf_lU: { isNullable: true, type: l3.ResponsiveImage }, RrOlspu9Q: { isNullable: true, type: l3.String }, Sbfhud0SX: { isNullable: true, type: l3.ResponsiveImage }, slJKroNUw: { isNullable: true, type: l3.ResponsiveImage }, sra9f14Ze: { isNullable: true, type: l3.ResponsiveImage }, SUlGM7z6N: { isNullable: true, type: l3.ResponsiveImage }, updatedAt: { isNullable: true, type: l3.Date }, W_1SbOr_4: { isNullable: true, type: l3.ResponsiveImage }, wQ1Rpjq3x: { isNullable: true, type: l3.String }, wwE61_TEq: { isNullable: true, type: l3.ResponsiveImage }, XbJge9Fsp: { isNullable: true, type: l3.String }, XG3otaDlZ: { isNullable: true, type: l3.String }, XpFWjsiiE: { isNullable: true, type: l3.ResponsiveImage }, y7hP7y7TX: { isNullable: true, type: l3.String }, YBOUfrYdB: { isNullable: true, type: l3.String }, YpT3cvwNm: { isNullable: true, type: l3.ResponsiveImage }, Yu303Dilw: { isNullable: true, type: l3.ResponsiveImage }, zajOvbGoQ: { isNullable: true, type: l3.ResponsiveImage } };
var i3 = ["id"];
var s3 = { type: 1 };
var n3 = ["previousItemId"];
var c3 = ["nextItemId"];
var p3 = ["id", "XG3otaDlZ"];
var u3 = ["XG3otaDlZ", "id"];
var f3 = { type: 0 };
var d3 = ["XG3otaDlZ"];
var g3 = ["dAZk2Jaon"];
var R2 = ["b3XlDEEmG"];
var y3 = ["gR2nhp5qm"];
var w2 = ["y7hP7y7TX"];
var h3 = ["RrOlspu9Q"];
var z2 = ["XbJge9Fsp"];
var N2 = ["wQ1Rpjq3x"];
var S2 = ["XpFWjsiiE"];
var x3 = ["dzQTLJWic"];
var I2 = ["Fv1GqGRfr"];
var H2 = ["F1KVBlC4y"];
var E2 = ["zajOvbGoQ"];
var U2 = ["slJKroNUw"];
var D2 = ["YBOUfrYdB"];
var v2 = ["b4tiQybAd"];
var b2 = ["pXmRpf_lU"];
var Q2 = ["l2NBo7UWA"];
var J2 = ["SUlGM7z6N"];
var L2 = ["Na0xhxmje"];
var B2 = ["nEx8XU81L"];
var Z2 = ["YpT3cvwNm"];
var V2 = ["ggcZ6VEyH"];
var X2 = ["B369NTS5_"];
var T3 = ["wwE61_TEq"];
var K2 = ["sra9f14Ze"];
var G2 = ["HbtVV6BMk"];
var j2 = ["eyuH4cHTQ"];
var q2 = ["HxsVzqrJg"];
var O2 = ["Ik4D4pxOl"];
var A2 = ["jSHHEUgFL"];
var k2 = ["Yu303Dilw"];
var W2 = ["BOkfogVMC"];
var F2 = ["dRhpMUxWd"];
var Y2 = ["fN7pyWzw7"];
var M2 = ["ExPfWm4Bg"];
var _2 = ["Sbfhud0SX"];
var C2 = ["IqypXjrqO"];
var P2 = ["JytRQ4nh8"];
var $2 = ["mPrmYHudU"];
var ee = ["LeyNb3jM2"];
var el = ["gXFKGU6hn"];
var et = ["W_1SbOr_4"];
var ea = [];
var er = (e7) => {
  let l4 = ea[e7];
  if (l4)
    return l4().then((e8) => e8.default);
};
var em = {};
var eo = g2(em);
var ei = new t3();
var es = { collectionByLocaleId: { default: new tC({ chunks: [""], id: "012f497d-6ac7-4dd9-9c6d-8705f25c1959default", indexes: [new t_({ collation: s3, collectionSchema: o3, fieldNames: i3, range: { from: 0, to: 217 }, url: "" }), new t_({ collation: s3, collectionSchema: o3, fieldNames: n3, range: { from: 217, to: 433 }, url: "" }), new t_({ collation: s3, collectionSchema: o3, fieldNames: c3, range: { from: 433, to: 645 }, url: "" }), new t_({ collation: s3, collectionSchema: o3, fieldNames: p3, range: { from: 645, to: 1023 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: u3, range: { from: 1023, to: 1401 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: d3, range: { from: 1401, to: 1661 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: g3, range: { from: 1661, to: 2103 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: R2, range: { from: 2103, to: 4064 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: y3, range: { from: 4064, to: 4462 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: w2, range: { from: 4462, to: 4646 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: h3, range: { from: 4646, to: 4958 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: z2, range: { from: 4958, to: 5263 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: N2, range: { from: 5263, to: 5504 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: S2, range: { from: 5504, to: 9172 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: x3, range: { from: 9172, to: 9582 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: I2, range: { from: 9582, to: 12605 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: H2, range: { from: 12605, to: 16110 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: E2, range: { from: 16110, to: 19631 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: U2, range: { from: 19631, to: 22913 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: D2, range: { from: 22913, to: 23289 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: v2, range: { from: 23289, to: 26042 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: b2, range: { from: 26042, to: 29730 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: Q2, range: { from: 29730, to: 33498 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: J2, range: { from: 33498, to: 37323 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: L2, range: { from: 37323, to: 37668 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: B2, range: { from: 37668, to: 39791 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: Z2, range: { from: 39791, to: 43355 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: V2, range: { from: 43355, to: 43483 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: X2, range: { from: 43483, to: 44126 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: T3, range: { from: 44126, to: 44772 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: K2, range: { from: 44772, to: 45415 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: G2, range: { from: 45415, to: 46058 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: j2, range: { from: 46058, to: 46714 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: q2, range: { from: 46714, to: 47365 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: O2, range: { from: 47365, to: 48021 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: A2, range: { from: 48021, to: 48677 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: k2, range: { from: 48677, to: 49334 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: W2, range: { from: 49334, to: 49999 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: F2, range: { from: 49999, to: 50648 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: Y2, range: { from: 50648, to: 51292 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: M2, range: { from: 51292, to: 51936 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: _2, range: { from: 51936, to: 52576 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: C2, range: { from: 52576, to: 53230 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: P2, range: { from: 53230, to: 54120 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: $2, range: { from: 54120, to: 55008 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: ee, range: { from: 55008, to: 55897 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: el, range: { from: 55897, to: 56785 }, url: "" }), new t_({ collation: f3, collectionSchema: o3, fieldNames: et, range: { from: 56785, to: 57389 }, url: "" })], resolveRichText: eo, resolveVectorSetItem: er, schema: o3 }) }, displayName: "Projects", id: "012f497d-6ac7-4dd9-9c6d-8705f25c1959" };
var ERDJzzQHr_default = es;
e6(es, { XG3otaDlZ: { preventLocalization: true, title: "Slug", type: l3.String }, dAZk2Jaon: { defaultValue: "", title: "Title", type: l3.String }, b3XlDEEmG: { defaultValue: "", displayTextArea: true, title: "Primary Body Text", type: l3.String }, gR2nhp5qm: { title: "Link", type: l3.Link }, y7hP7y7TX: { defaultValue: "", title: "Year", type: l3.String }, RrOlspu9Q: { defaultValue: "", title: "Industry", type: l3.String }, XbJge9Fsp: { defaultValue: "", title: "Category", type: l3.String }, wQ1Rpjq3x: { defaultValue: "", title: "Timeline", type: l3.String }, XpFWjsiiE: { title: "Image 1", type: l3.ResponsiveImage }, dzQTLJWic: { defaultValue: "", displayTextArea: true, title: "Heading 1", type: l3.String }, Fv1GqGRfr: { defaultValue: "", displayTextArea: true, title: "Body Text 1", type: l3.String }, F1KVBlC4y: { title: "Image 2", type: l3.ResponsiveImage }, zajOvbGoQ: { title: "Image 3", type: l3.ResponsiveImage }, slJKroNUw: { title: "Image 4", type: l3.ResponsiveImage }, YBOUfrYdB: { defaultValue: "", displayTextArea: true, title: "Heading 2", type: l3.String }, b4tiQybAd: { defaultValue: "", displayTextArea: true, title: "Body Text 2", type: l3.String }, pXmRpf_lU: { title: "Image 5", type: l3.ResponsiveImage }, l2NBo7UWA: { title: "Image 6", type: l3.ResponsiveImage }, SUlGM7z6N: { title: "Image 7", type: l3.ResponsiveImage }, Na0xhxmje: { defaultValue: "", displayTextArea: true, title: "Heading 3", type: l3.String }, nEx8XU81L: { defaultValue: "", displayTextArea: true, title: "Body Text 3", type: l3.String }, YpT3cvwNm: { title: "Image 8", type: l3.ResponsiveImage }, ggcZ6VEyH: { defaultValue: false, title: "Expanded Event Case Study", type: l3.Boolean }, B369NTS5_: { title: "BZK / Yellow teaser", type: l3.ResponsiveImage }, wwE61_TEq: { title: "BZK / Green teaser", type: l3.ResponsiveImage }, sra9f14Ze: { title: "BZK / Purple teaser", type: l3.ResponsiveImage }, HbtVV6BMk: { title: "BZK / Orange teaser", type: l3.ResponsiveImage }, eyuH4cHTQ: { title: "BZK / Orange official poster", type: l3.ResponsiveImage }, HxsVzqrJg: { title: "BZK / Green official poster", type: l3.ResponsiveImage }, Ik4D4pxOl: { title: "BZK / Yellow official poster", type: l3.ResponsiveImage }, jSHHEUgFL: { title: "BZK / Purple official poster", type: l3.ResponsiveImage }, Yu303Dilw: { title: "BZK / Dead or Alive judges \u2014 orange", type: l3.ResponsiveImage }, BOkfogVMC: { title: "BZK / Dead or Alive judges \u2014 yellow", type: l3.ResponsiveImage }, dRhpMUxWd: { title: "BZK / Breaking judges", type: l3.ResponsiveImage }, fN7pyWzw7: { title: "BZK / Hip-hop judges", type: l3.ResponsiveImage }, ExPfWm4Bg: { title: "BZK / DJ Aezakmi", type: l3.ResponsiveImage }, Sbfhud0SX: { title: "BZK / MC Onkwani", type: l3.ResponsiveImage }, IqypXjrqO: { title: "BZK / T-shirt front and back mockup", type: l3.ResponsiveImage }, JytRQ4nh8: { title: "BZK / Kids Open Style winner plaque", type: l3.ResponsiveImage }, mPrmYHudU: { title: "BZK / Dead or Alive winner plaque", type: l3.ResponsiveImage }, LeyNb3jM2: { title: "BZK / Breaking winner plaque", type: l3.ResponsiveImage }, gXFKGU6hn: { title: "BZK / Hip Hop winner plaque", type: l3.ResponsiveImage }, W_1SbOr_4: { title: "BZK / Graffiti Title", type: l3.ResponsiveImage }, createdAt: { title: "Created", type: l3.Date }, updatedAt: { title: "Updated", type: l3.Date }, previousItemId: { dataIdentifier: "local-module:collection/ERDJzzQHr:default", title: "Previous", type: l3.CollectionReference }, nextItemId: { dataIdentifier: "local-module:collection/ERDJzzQHr:default", title: "Next", type: l3.CollectionReference } });

// http-url:https://framerusercontent.com/modules/piw9ZPMmXfrT95ogLDxJ/DoVMwSYoUGrvOYi7SwDL/oq9lop6qV.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, getLoadingLazyAtYPosition, Image, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/kSdB6pm55b785R0kyB8k/Sq5B8F4ETUHNE8pFwK5u/dn4SBv53G.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["FS;Outfit-light", "FS;Outfit-regular"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/HGVZO4W7MOWSOT5FITRR2LXJL4LPEVKA/JGNFYTACJN27RPO2O5AUTRRZD4FNRJPI/W7JHARPQSG6P4YAUJKIMUM6JNAX2RFW3.woff2", weight: "300" }, { cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/RPEPC24XXAVK6EWUOKWQUPTOZQR35AS2/BVWMEQ5ZCLZP2VOXOHXQDCZADXNFBXUF/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2", weight: "400" }] }];
var css = [`.framer-opfDq .framer-styles-preset-16zkny:not(.rich-text-wrapper), .framer-opfDq .framer-styles-preset-16zkny.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-letter-spacing: -0.8px; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-background-padding: 0px; --framer-text-color: var(--token-f29541d4-a784-41e4-8dc3-507539dde244, #0a0a0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1199px) and (min-width: 0px) { .framer-opfDq .framer-styles-preset-16zkny:not(.rich-text-wrapper), .framer-opfDq .framer-styles-preset-16zkny.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-letter-spacing: -0.8px; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-background-padding: 0px; --framer-text-color: var(--token-f29541d4-a784-41e4-8dc3-507539dde244, #0a0a0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className = "framer-opfDq";

// http-url:https://framerusercontent.com/modules/xSp3FrLfGwnTtXwkbYxo/YJiVnVqgDsv8SEvhqFr5/sh8wTnxQI.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
fontStore2.loadFonts(["FS;Outfit-medium", "FS;Outfit-bold"]);
var fonts2 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/YEOHRCKDRRMJG7KXODMRI7H3TDTC7DCR/GSC37XQOTJL5UUXY7GT63Z6TK3GPURF7/3JX43FCBGINLH25MK4NSVCHCDXUSMHUE.woff2", weight: "500" }, { cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/EUV6IZMPXOYBUY6KFIXKZWM47ESY5XYA/BLW2AGODUKQKRMYEVOEMMPY2ITRKBJIP/OKGWSU2PUNNFKQVFV2XFOSAHRXYREMR2.woff2", weight: "700" }] }];
var css2 = [`.framer-Mqnh7 .framer-styles-preset-9verwv:not(.rich-text-wrapper), .framer-Mqnh7 .framer-styles-preset-9verwv.rich-text-wrapper h4 { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.9px; --framer-line-height: 40px; --framer-paragraph-spacing: 10px; --framer-text-alignment: left; --framer-text-background-padding: 0px; --framer-text-color: var(--token-f29541d4-a784-41e4-8dc3-507539dde244, #0a0a0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-Mqnh7 .framer-styles-preset-9verwv:not(.rich-text-wrapper), .framer-Mqnh7 .framer-styles-preset-9verwv.rich-text-wrapper h4 { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -1px; --framer-line-height: 40px; --framer-paragraph-spacing: 10px; --framer-text-alignment: left; --framer-text-background-padding: 0px; --framer-text-color: var(--token-f29541d4-a784-41e4-8dc3-507539dde244, #0a0a0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-Mqnh7 .framer-styles-preset-9verwv:not(.rich-text-wrapper), .framer-Mqnh7 .framer-styles-preset-9verwv.rich-text-wrapper h4 { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.5px; --framer-line-height: 32px; --framer-paragraph-spacing: 10px; --framer-text-alignment: left; --framer-text-background-padding: 0px; --framer-text-color: var(--token-f29541d4-a784-41e4-8dc3-507539dde244, #0a0a0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className2 = "framer-Mqnh7";

// http-url:https://framerusercontent.com/modules/5cYmajCl559lJ0tWA6TR/yk2swVu9LSNmZlZLkHJC/xQfEv3sH0.js
import { fontStore as fontStore3 } from "./_framer-runtime.js";
fontStore3.loadFonts(["FS;Outfit-regular", "FS;Outfit-bold"]);
var fonts3 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/RPEPC24XXAVK6EWUOKWQUPTOZQR35AS2/BVWMEQ5ZCLZP2VOXOHXQDCZADXNFBXUF/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2", weight: "400" }, { cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/EUV6IZMPXOYBUY6KFIXKZWM47ESY5XYA/BLW2AGODUKQKRMYEVOEMMPY2ITRKBJIP/OKGWSU2PUNNFKQVFV2XFOSAHRXYREMR2.woff2", weight: "700" }] }];
var css3 = [`.framer-cJMvx .framer-styles-preset-1mtxq02:not(.rich-text-wrapper), .framer-cJMvx .framer-styles-preset-1mtxq02.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.03em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-background-padding: 0px; --framer-text-color: var(--token-f29541d4-a784-41e4-8dc3-507539dde244, #0a0a0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className3 = "framer-cJMvx";

// http-url:https://framerusercontent.com/modules/piw9ZPMmXfrT95ogLDxJ/DoVMwSYoUGrvOYi7SwDL/oq9lop6qV.js
var MotionAWithFX = withFX(motion.a);
var enabledGestures = { KyHELV_GX: { hover: true } };
var cycleOrder = ["KyHELV_GX", "iXmv5fLHD"];
var serializationHash = "framer-yAaoZ";
var variantClassNames = { iXmv5fLHD: "framer-v-mxlejr", KyHELV_GX: "framer-v-49accc" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var animation = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 24 };
var transition1 = { damping: 20, delay: 0, mass: 2, stiffness: 120, type: "spring" };
var transition2 = { damping: 40, delay: 0, mass: 1.2, stiffness: 400, type: "spring" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var transformTemplate1 = (_3, t4) => `translateX(-50%) ${t4}`;
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = { Desktop: "KyHELV_GX", Mobile: "iXmv5fLHD" };
var getProps = ({ category, height, id, image1, link, title, width, year, ...props }) => {
  return { ...props, ff50NbBZ_: year ?? props.ff50NbBZ_ ?? "2025", Gbcbztnmk: category ?? props.Gbcbztnmk ?? "Portfolio", hj_v1CwSC: title ?? props.hj_v1CwSC ?? "Clay Nicolas ", r2JISXI4b: image1 ?? props.r2JISXI4b, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "KyHELV_GX", X_RELk7Hn: link ?? props.X_RELk7Hn };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className6, layoutId, variant, X_RELk7Hn, r2JISXI4b, Gbcbztnmk, hj_v1CwSC, ff50NbBZ_, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "KyHELV_GX", enabledGestures, ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className, className3, className2];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition2, children: /* @__PURE__ */ _jsx(Link, { href: X_RELk7Hn, motionChild: true, nodeId: "KyHELV_GX", openInNewTab: false, scopeId: "oq9lop6qV", children: /* @__PURE__ */ _jsx(MotionAWithFX, { ...restProps, ...gestureHandlers, __framer__animate: { transition: transition1 }, __framer__animateOnce: true, __framer__enter: animation, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0.5, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: `${cx(scopingClassNames, "framer-49accc", className6, classNames)} framer-1pjzlz2`, "data-framer-name": "Desktop", layoutDependency, layoutId: "Container__KyHELV_GX", ref: refBinding, style: { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, ...style }, ...addPropertyOverrides({ "KyHELV_GX-hover": { "data-framer-name": void 0 }, iXmv5fLHD: { "data-framer-name": "Mobile" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsxs(motion.div, { className: "framer-1f4qcm4", layoutDependency, layoutId: "Container__habMEUjFH", children: [/* @__PURE__ */ _jsx(Image, { background: { alt: "", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + 0 + 0 + 0), sizes: componentViewport?.width || "100vw", ...toResponsiveImage(r2JISXI4b) }, className: "framer-zklqiq", "data-framer-name": "Thumbnail", layoutDependency, layoutId: "Container__oi3Yf2r0N", style: { scale: 1 }, variants: { "KyHELV_GX-hover": { scale: 1.1 } } }), /* @__PURE__ */ _jsxs(motion.div, { className: "framer-1evbvcr", "data-framer-name": "Detail ", layoutDependency, layoutId: "Container__GIwMElh9G", style: { backgroundColor: "var(--token-05c8fc94-9d88-4996-8c43-5ba6b09ba5c8, rgb(10, 11, 18))" }, transformTemplate: transformTemplate1, children: [/* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-16zkny", "data-styles-preset": "dn4SBv53G", style: { "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255)))" }, children: "Portfolio" }) }), className: "framer-n1wn9e", fonts: ["Inter"], layoutDependency, layoutId: "Container__K0_xvhakS", style: { "--extracted-r6o4lv": "var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255))" }, text: Gbcbztnmk, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ iXmv5fLHD: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1mtxq02", "data-styles-preset": "xQfEv3sH0", style: { "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255)))" }, children: "Portfolio" }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.h4, { className: "framer-styles-preset-9verwv", "data-styles-preset": "sh8wTnxQI", style: { "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-1eung3n, var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255)))" }, children: "Clay Nicolas Copy" }) }), className: "framer-1ey1oli", fonts: ["Inter"], layoutDependency, layoutId: "Container__RczPMbwQd", style: { "--extracted-1eung3n": "var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255))" }, text: hj_v1CwSC, variants: { iXmv5fLHD: { "--extracted-r6o4lv": "var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ iXmv5fLHD: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-16zkny", "data-styles-preset": "dn4SBv53G", style: { "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255)))" }, children: "Clay Nicolas " }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-16zkny", "data-styles-preset": "dn4SBv53G", style: { "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255)))" }, children: "2025" }) }), className: "framer-mygaut", fonts: ["Inter"], layoutDependency, layoutId: "Container__xteEgBssG", style: { "--extracted-r6o4lv": "var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255))" }, text: ff50NbBZ_, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ iXmv5fLHD: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1mtxq02", "data-styles-preset": "xQfEv3sH0", style: { "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255)))" }, children: "2025" }) }) } }, baseVariant, gestureVariant) })] })] }) }) }) }) }) });
});
var css4 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-yAaoZ.framer-1pjzlz2, .framer-yAaoZ .framer-1pjzlz2 { display: block; }", ".framer-yAaoZ.framer-49accc { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 1200px; will-change: var(--framer-will-change-override, transform); }", ".framer-yAaoZ .framer-1f4qcm4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-yAaoZ .framer-zklqiq { flex: none; height: 700px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }", ".framer-yAaoZ .framer-1evbvcr { align-content: center; align-items: center; bottom: -40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 16px; position: absolute; width: 100%; z-index: 1; }", ".framer-yAaoZ .framer-n1wn9e, .framer-yAaoZ .framer-mygaut { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }", ".framer-yAaoZ .framer-1ey1oli { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-yAaoZ.framer-v-mxlejr.framer-49accc { cursor: unset; width: 340px; }", ".framer-yAaoZ.framer-v-mxlejr .framer-1f4qcm4 { height: 400px; }", ".framer-yAaoZ.framer-v-mxlejr .framer-zklqiq { height: 100%; }", ".framer-yAaoZ.framer-v-mxlejr .framer-1evbvcr { bottom: 0px; gap: 1px; }", ".framer-yAaoZ.framer-v-49accc.hover .framer-1evbvcr { bottom: 0px; }", ...css, ...css3, ...css2];
var Frameroq9lop6qV = withCSS(Component, css4, "framer-yAaoZ");
var oq9lop6qV_default = Frameroq9lop6qV;
Frameroq9lop6qV.displayName = "Card/Works Wide";
Frameroq9lop6qV.defaultProps = { height: 700, width: 1200 };
addPropertyControls(Frameroq9lop6qV, { variant: { options: ["KyHELV_GX", "iXmv5fLHD"], optionTitles: ["Desktop", "Mobile"], title: "Variant", type: ControlType.Enum }, X_RELk7Hn: { title: "Link", type: ControlType.Link }, r2JISXI4b: { title: "Image 1", type: ControlType.ResponsiveImage }, Gbcbztnmk: { defaultValue: "Portfolio", title: "Category", type: ControlType.String }, hj_v1CwSC: { defaultValue: "Clay Nicolas ", title: "Title", type: ControlType.String }, ff50NbBZ_: { defaultValue: "2025", title: "Year", type: ControlType.String } });
addFonts(Frameroq9lop6qV, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts), ...getFontsFromSharedStyle(fonts3), ...getFontsFromSharedStyle(fonts2)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/TRPXas3gw8HTN409w68L/eBaAUtKwURbsdOD4C0KO/VSLAcH6ej.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2, withFX as withFX2 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "framer-motion";
import * as React2 from "react";
import { useRef as useRef2 } from "react";
var MotionDivWithFX = withFX2(motion2.div);
var cycleOrder2 = ["J01c2NqNM", "iUL05oHsd"];
var serializationHash2 = "framer-HH9vb";
var variantClassNames2 = { iUL05oHsd: "framer-v-fjj1mo", J01c2NqNM: "framer-v-7p05yk" };
var transition12 = { duration: 0, type: "tween" };
var animation2 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 };
var transition22 = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" };
var animation1 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition22, x: 0, y: 0 };
var transition3 = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: "tween" };
var animation22 = { opacity: 1, rotate: 360, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 };
var Transition2 = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion2.create(React2.Fragment);
var humanReadableVariantMap2 = { Hidden: "iUL05oHsd", Loading: "J01c2NqNM" };
var getProps2 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "J01c2NqNM" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className6, layoutId, variant, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder: cycleOrder2, defaultVariant: "J01c2NqNM", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [];
  const isDisplayed = () => {
    if (baseVariant === "iUL05oHsd")
      return false;
    return true;
  };
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx2(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants2, { animate: variants, initial: false, children: isDisplayed() && /* @__PURE__ */ _jsx2(Transition2, { value: transition12, children: /* @__PURE__ */ _jsx2(motion2.div, { ...restProps, ...gestureHandlers, className: cx2(scopingClassNames, "framer-7p05yk", className6, classNames), "data-framer-name": "Loading", layoutDependency, layoutId: "Container__J01c2NqNM", ref: refBinding, style: { ...style }, children: /* @__PURE__ */ _jsx2(MotionDivWithFX, { __framer__animate: { transition: transition22 }, __framer__animateOnce: false, __framer__enter: animation2, __framer__exit: animation1, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0.5, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-1du38jo", "data-framer-name": "Spinner", layoutDependency, layoutId: "Container__AckWsOdIm", style: { mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add", WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add" }, children: /* @__PURE__ */ _jsx2(MotionDivWithFX, { __framer__loop: animation22, __framer__loopEffectEnabled: true, __framer__loopRepeatDelay: 0, __framer__loopRepeatType: "loop", __framer__loopTransition: transition3, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-h3xy4d", "data-framer-name": "Conic", layoutDependency, layoutId: "Container__cLuQUh2wO", style: { background: "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 0deg, rgb(153, 153, 153) 342deg)" }, children: /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-1gfba9c", "data-framer-name": "Round", layoutDependency, layoutId: "Container__O2EmovWDn", style: { backgroundColor: "var(--token-36ee2a1e-0245-4ebd-b64e-c29cac1b6d1a, rgb(224, 224, 224))", borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1 } }) }) }) }) }) }) });
});
var css5 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-HH9vb.framer-15h0n8, .framer-HH9vb .framer-15h0n8 { display: block; }", ".framer-HH9vb.framer-7p05yk { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; padding: 0px; position: relative; width: 100%; }", ".framer-HH9vb .framer-1du38jo { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }", ".framer-HH9vb .framer-h3xy4d { bottom: 0px; flex: none; gap: 10px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }", ".framer-HH9vb .framer-1gfba9c { flex: none; height: 2px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: 0px; width: 2px; }"];
var FramerVSLAcH6ej = withCSS2(Component2, css5, "framer-HH9vb");
var VSLAcH6ej_default = FramerVSLAcH6ej;
FramerVSLAcH6ej.displayName = "Spinner";
FramerVSLAcH6ej.defaultProps = { height: 40, width: 40 };
addPropertyControls2(FramerVSLAcH6ej, { variant: { options: ["J01c2NqNM", "iUL05oHsd"], optionTitles: ["Loading", "Hidden"], title: "Variant", type: ControlType2.Enum } });
addFonts2(FramerVSLAcH6ej, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/gmoN6g7ngHXwZUMFvbJw/HJ6y4G3iLiLv4y1AdG6W/c0pxjDOhR.js
var CardWorksWideFonts = getFonts(oq9lop6qV_default);
var SpinnerFonts = getFonts(VSLAcH6ej_default);
var SmartComponentScopedContainerWithInfiniteScroll = withInfiniteScroll(SmartComponentScopedContainer);
var serializationHash3 = "framer-Stxf2";
var variantClassNames3 = { k6LJv7gte: "framer-v-1saagaq" };
var transition13 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var toResponsiveImage2 = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var matchVariant = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var loaderVariants = (repeaterState, variants, currentVariant) => {
  if (repeaterState.currentPage >= repeaterState.totalPages)
    return variants.disabled ?? currentVariant;
  if (repeaterState.isLoading)
    return variants.loading ?? currentVariant;
  return currentVariant;
};
var query1 = () => ({ from: { alias: "k6LJv7gte", data: ERDJzzQHr_default, type: "Collection" }, select: [{ collection: "k6LJv7gte", name: "XG3otaDlZ", type: "Identifier" }, { collection: "k6LJv7gte", name: "XpFWjsiiE", type: "Identifier" }, { collection: "k6LJv7gte", name: "XbJge9Fsp", type: "Identifier" }, { collection: "k6LJv7gte", name: "dAZk2Jaon", type: "Identifier" }, { collection: "k6LJv7gte", name: "y7hP7y7TX", type: "Identifier" }, { collection: "k6LJv7gte", name: "id", type: "Identifier" }] });
var QueryData = ({ children }) => {
  // PORT: Framer CMS query engine bypassed; use the static __FRAMER_CMS_DATA__ list
  return children(__FRAMER_CMS_DATA__.k6LJv7gte, { currentPage: 1, totalPages: 1, isLoading: false }, () => {});
};
var Transition3 = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx3(MotionConfigContext3.Provider, { value: contextValue, children });
};
var Variants3 = motion3.create(React3.Fragment);
var getProps3 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const { activeLocale, setLocale } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const { style, className: className6, layoutId, variant, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ defaultVariant: "k6LJv7gte", ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx3(serializationHash3, ...sharedStyleClassNames);
  const router = useRouter();
  const ref1 = React3.useRef(null);
  return /* @__PURE__ */ _jsx3(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition3, { value: transition13, children: /* @__PURE__ */ _jsx3(motion3.div, { ...restProps, ...gestureHandlers, className: cx3(scopingClassNames, "framer-1saagaq", className6, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "Container__k6LJv7gte", ref: refBinding, style: { ...style }, children: /* @__PURE__ */ _jsx3(ChildrenCanSuspend, { children: /* @__PURE__ */ _jsx3(QueryData, { pageSize: 4, query: query1(), children: (collection, paginationInfo, loadMore) => {
    return /* @__PURE__ */ _jsxs2(_Fragment, { children: [collection?.map(({ dAZk2Jaon: dAZk2Jaonk6LJv7gte, id: idk6LJv7gte, XbJge9Fsp: XbJge9Fspk6LJv7gte, XG3otaDlZ: XG3otaDlZk6LJv7gte, XpFWjsiiE: XpFWjsiiEk6LJv7gte, y7hP7y7TX: y7hP7y7TXk6LJv7gte }, index) => {
      XG3otaDlZk6LJv7gte ?? (XG3otaDlZk6LJv7gte = "");
      XbJge9Fspk6LJv7gte ?? (XbJge9Fspk6LJv7gte = "");
      dAZk2Jaonk6LJv7gte ?? (dAZk2Jaonk6LJv7gte = "");
      y7hP7y7TXk6LJv7gte ?? (y7hP7y7TXk6LJv7gte = "");
      return /* @__PURE__ */ _jsx3(LayoutGroup3, { id: `k6LJv7gte-${idk6LJv7gte}`, children: /* @__PURE__ */ _jsx3(PathVariablesContext.Provider, { value: { XG3otaDlZ: XG3otaDlZk6LJv7gte }, children: /* @__PURE__ */ _jsx3(ResolveLinks, { links: [{ href: { pathVariables: { XG3otaDlZ: XG3otaDlZk6LJv7gte }, webPageId: "J9I54g36o" }, implicitPathVariables: void 0 }], children: (resolvedLinks) => /* @__PURE__ */ _jsx3(ComponentViewportProvider, { height: 700, width: `max(${componentViewport?.width || "100vw"}, 50px)`, y: (componentViewport?.y || 0) + 0 + 0, children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainer, { className: "framer-1g5x3os-container", layoutDependency, layoutId: "Container__Pysf31Mql-container", nodeId: "Pysf31Mql", rendersWithMotion: true, scopeId: "c0pxjDOhR", children: /* @__PURE__ */ _jsx3(oq9lop6qV_default, { ff50NbBZ_: y7hP7y7TXk6LJv7gte, Gbcbztnmk: XbJge9Fspk6LJv7gte, height: "100%", hj_v1CwSC: dAZk2Jaonk6LJv7gte, id: "Pysf31Mql", layoutId: "Container__Pysf31Mql", r2JISXI4b: toResponsiveImage2(XpFWjsiiEk6LJv7gte), style: { width: "100%" }, variant: matchVariant("KyHELV_GX"), width: "100%", X_RELk7Hn: ("/projects/" + XG3otaDlZk6LJv7gte) }) }) }) }) }) }, idk6LJv7gte);
    }), /* @__PURE__ */ _jsx3(ComponentViewportProvider, { height: 40, width: `max(${componentViewport?.width || "100vw"}, 50px)`, y: (componentViewport?.y || 0) + 0 + 2848, children: /* @__PURE__ */ _jsx3(SmartComponentScopedContainerWithInfiniteScroll, { __loadMore: loadMore, __paginationInfo: paginationInfo, className: "framer-1rh957z-container", layoutDependency, layoutId: "Container__we_iLDCps-container", nodeId: "we_iLDCps", ref: ref1, rendersWithMotion: true, scopeId: "c0pxjDOhR", children: /* @__PURE__ */ _jsx3(VSLAcH6ej_default, { height: "100%", id: "we_iLDCps", layoutId: "Container__we_iLDCps", variant: loaderVariants(paginationInfo, { disabled: "iUL05oHsd", loading: "J01c2NqNM" }, matchVariant("J01c2NqNM")), width: "100%" }) }) })] });
  } }) }) }) }) }) });
});
var css6 = [".framer-Stxf2.framer-176jtbw, .framer-Stxf2 .framer-176jtbw { display: block; }", ".framer-Stxf2.framer-1saagaq { display: grid; gap: 12px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); height: auto; justify-content: center; padding: 0px; position: relative; width: 100%; }", ".framer-Stxf2 .framer-1g5x3os-container { align-self: start; flex: none; height: auto; justify-self: center; position: relative; width: 100%; z-index: 1; }", ".framer-Stxf2 .framer-1rh957z-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }"];
var Framerc0pxjDOhR = withCSS3(Component3, css6, "framer-Stxf2");
var c0pxjDOhR_default = Framerc0pxjDOhR;
Framerc0pxjDOhR.displayName = "Projects";
Framerc0pxjDOhR.defaultProps = { height: 2888, width: 1072 };
addFonts3(Framerc0pxjDOhR, [{ explicitInter: true, fonts: [] }, ...CardWorksWideFonts, ...SpinnerFonts], { supportsExplicitInterCodegen: true });
// PORT: CMS preload loader removed (no Framer CMS)


// http-url:https://framerusercontent.com/modules/UDbVvGLLWlXZsTg0rEr1/RczVmGJ4GdW5RK1O1tCW/DcQkMkg7v.js
import { jsx as _jsx6, jsxs as _jsxs4 } from "react/jsx-runtime";
import { addFonts as addFonts6, ComponentViewportProvider as ComponentViewportProvider2, cx as cx6, forwardLoader as forwardLoader2, getFonts as getFonts2, runTasksWithYield as runTasksWithYield2, SmartComponentScopedContainer as SmartComponentScopedContainer2, useComponentViewport as useComponentViewport6, useLocaleInfo as useLocaleInfo6, useVariantState as useVariantState6, withCSS as withCSS6, withFX as withFX3 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup6, motion as motion6, MotionConfigContext as MotionConfigContext6 } from "framer-motion";
import * as React6 from "react";
import { useRef as useRef7 } from "react";

// http-url:https://framerusercontent.com/modules/qgBmwB27Q9IiEnwuoy38/a5WagDdsNtXPCtWXDqzk/gSxc6YmO3.js
import { jsx as _jsx4, jsxs as _jsxs3 } from "react/jsx-runtime";
import { addFonts as addFonts4, addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx as cx4, getFontsFromSharedStyle as getFontsFromSharedStyle2, RichText as RichText2, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useVariantState as useVariantState4, withCSS as withCSS4 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup4, motion as motion4, MotionConfigContext as MotionConfigContext4 } from "framer-motion";
import * as React4 from "react";
import { useRef as useRef5 } from "react";

// http-url:https://framerusercontent.com/modules/ahM2SWkn4sJyfeE1lutn/KgtbCO2QBm2qPTNkaBBE/YrK0iTyFl.js
import { fontStore as fontStore4 } from "./_framer-runtime.js";
fontStore4.loadFonts(["FS;Outfit-regular", "FS;Outfit-bold"]);
var fonts4 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/RPEPC24XXAVK6EWUOKWQUPTOZQR35AS2/BVWMEQ5ZCLZP2VOXOHXQDCZADXNFBXUF/5REHZLR2B5PQAKMITIQJK6BDK34RDHS4.woff2", weight: "400" }, { cssFamilyName: "Outfit", source: "fontshare", style: "normal", uiFamilyName: "Outfit", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/EUV6IZMPXOYBUY6KFIXKZWM47ESY5XYA/BLW2AGODUKQKRMYEVOEMMPY2ITRKBJIP/OKGWSU2PUNNFKQVFV2XFOSAHRXYREMR2.woff2", weight: "700" }] }];
var css7 = [`.framer-JioR5 .framer-styles-preset-kz4is:not(.rich-text-wrapper), .framer-JioR5 .framer-styles-preset-kz4is.rich-text-wrapper p { --framer-font-family: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-family-bold: "Outfit", "Outfit Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-background-padding: 0px; --framer-text-color: var(--token-f29541d4-a784-41e4-8dc3-507539dde244, #0a0a0a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className4 = "framer-JioR5";

// http-url:https://framerusercontent.com/modules/qgBmwB27Q9IiEnwuoy38/a5WagDdsNtXPCtWXDqzk/gSxc6YmO3.js
var cycleOrder3 = ["ny16f_1Qt", "dRf5fsK5Q"];
var serializationHash4 = "framer-pyQ6s";
var variantClassNames4 = { dRf5fsK5Q: "framer-v-cvhq57", ny16f_1Qt: "framer-v-cbep67" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition14 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition4 = ({ value, children }) => {
  const config = React4.useContext(MotionConfigContext4);
  const transition = value ?? config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext4.Provider, { value: contextValue, children });
};
var Variants4 = motion4.create(React4.Fragment);
var humanReadableEnumMap = { "Space Around": "space-around", "Space Between": "space-between", "Space Evenly": "space-evenly", Center: "center", End: "flex-end", Start: "flex-start" };
var humanReadableVariantMap3 = { Dark: "ny16f_1Qt", Light: "dRf5fsK5Q" };
var getProps4 = ({ distribute, height, id, number, numbersVisibility, title, width, ...props }) => {
  return { ...props, bvYUJxwf_: humanReadableEnumMap[distribute] ?? distribute ?? props.bvYUJxwf_ ?? "center", dg_MYFFcN: title ?? props.dg_MYFFcN ?? "Why Chose Us", sfwFpE6pf: numbersVisibility ?? props.sfwFpE6pf ?? true, uScxfp93T: number ?? props.uScxfp93T ?? "(01)", variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "ny16f_1Qt" };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const fallbackRef = useRef5(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React4.useId();
  const { activeLocale, setLocale } = useLocaleInfo4();
  const componentViewport = useComponentViewport4();
  const { style, className: className6, layoutId, variant, uScxfp93T, dg_MYFFcN, bvYUJxwf_, sfwFpE6pf, ...restProps } = getProps4(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState4({ cycleOrder: cycleOrder3, defaultVariant: "ny16f_1Qt", ref: refBinding, variant, variantClassNames: variantClassNames4 });
  const layoutDependency = createLayoutDependency4(props, variants);
  const sharedStyleClassNames = [className4];
  const scopingClassNames = cx4(serializationHash4, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx4(LayoutGroup4, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants4, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition4, { value: transition14, children: /* @__PURE__ */ _jsx4(motion4.div, { ...restProps, ...gestureHandlers, className: cx4(scopingClassNames, "framer-cbep67", className6, classNames), "data-framer-name": "Dark", layoutDependency, layoutId: "Container__ny16f_1Qt", ref: refBinding, style: { "--12yaqsb": bvYUJxwf_, ...style }, ...addPropertyOverrides2({ dRf5fsK5Q: { "data-framer-name": "Light" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsxs3(motion4.div, { className: "framer-bxrr88", layoutDependency, layoutId: "Container__eUCjFBMtu", children: [sfwFpE6pf && /* @__PURE__ */ _jsx4(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React4.Fragment, { children: /* @__PURE__ */ _jsx4(motion4.p, { className: "framer-styles-preset-kz4is", "data-styles-preset": "YrK0iTyFl", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23)))" }, children: "(01)" }) }), className: "framer-d19cxl", "data-framer-name": "Number", fonts: ["Inter"], layoutDependency, layoutId: "Container__qWE8tmRgW", style: { "--extracted-r6o4lv": "var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23))", "--framer-paragraph-spacing": "0px" }, text: uScxfp93T, variants: { dRf5fsK5Q: { "--extracted-r6o4lv": "var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255))" } }, verticalAlignment: "center", withExternalLayout: true, ...addPropertyOverrides2({ dRf5fsK5Q: { children: /* @__PURE__ */ _jsx4(React4.Fragment, { children: /* @__PURE__ */ _jsx4(motion4.p, { className: "framer-styles-preset-kz4is", "data-styles-preset": "YrK0iTyFl", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255)))" }, children: "(01)" }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx4(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx4(React4.Fragment, { children: /* @__PURE__ */ _jsx4(motion4.p, { className: "framer-styles-preset-kz4is", "data-styles-preset": "YrK0iTyFl", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23)))" }, children: "Why Chose Us" }) }), className: "framer-7fpjss", "data-framer-name": "Title", fonts: ["Inter"], layoutDependency, layoutId: "Container__Urld2SqNO", style: { "--extracted-r6o4lv": "var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(21, 17, 23))", "--framer-paragraph-spacing": "0px" }, text: dg_MYFFcN, variants: { dRf5fsK5Q: { "--extracted-r6o4lv": "var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255))" } }, verticalAlignment: "center", withExternalLayout: true, ...addPropertyOverrides2({ dRf5fsK5Q: { children: /* @__PURE__ */ _jsx4(React4.Fragment, { children: /* @__PURE__ */ _jsx4(motion4.p, { className: "framer-styles-preset-kz4is", "data-styles-preset": "YrK0iTyFl", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-61554433-7bdb-4b29-9de8-221add126b06, rgb(255, 255, 255)))" }, children: "Why Chose Us" }) }) } }, baseVariant, gestureVariant) })] }) }) }) }) });
});
var css8 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-pyQ6s.framer-4wbaef, .framer-pyQ6s .framer-4wbaef { display: block; }", ".framer-pyQ6s.framer-cbep67 { align-content: center; align-items: center; cursor: default; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: var(--12yaqsb); overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-pyQ6s .framer-bxrr88 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-pyQ6s .framer-d19cxl, .framer-pyQ6s .framer-7fpjss { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-pyQ6s.framer-v-cvhq57 .framer-d19cxl { order: 0; }", ".framer-pyQ6s.framer-v-cvhq57 .framer-7fpjss { order: 1; }", ...css7];
var FramergSxc6YmO3 = withCSS4(Component4, css8, "framer-pyQ6s");
var gSxc6YmO3_default = FramergSxc6YmO3;
FramergSxc6YmO3.displayName = "Subtitle";
FramergSxc6YmO3.defaultProps = { height: 22, width: 130 };
addPropertyControls3(FramergSxc6YmO3, { variant: { options: ["ny16f_1Qt", "dRf5fsK5Q"], optionTitles: ["Dark", "Light"], title: "Variant", type: ControlType3.Enum }, uScxfp93T: { defaultValue: "(01)", displayTextArea: false, title: "Number", type: ControlType3.String }, dg_MYFFcN: { defaultValue: "Why Chose Us", displayTextArea: false, title: "Title", type: ControlType3.String }, bvYUJxwf_: { defaultValue: "center", options: ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"], optionTitles: ["Start", "Center", "End", "Space Between", "Space Around", "Space Evenly"], title: "Distribute", type: ControlType3.Enum }, sfwFpE6pf: { defaultValue: true, title: "Numbers Visibility", type: ControlType3.Boolean } });
addFonts4(FramergSxc6YmO3, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle2(fonts4)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/V4uP9cD59r64OFiqeKvS/WZdexD5IwJq58Sua7msD/JgRrjDF2T.js
import { jsx as _jsx5 } from "react/jsx-runtime";
import { addFonts as addFonts5, cx as cx5, getFontsFromSharedStyle as getFontsFromSharedStyle3, RichText as RichText3, useComponentViewport as useComponentViewport5, useLocaleInfo as useLocaleInfo5, useVariantState as useVariantState5, withCSS as withCSS5 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup5, motion as motion5, MotionConfigContext as MotionConfigContext5 } from "framer-motion";
import * as React5 from "react";
import { useRef as useRef6 } from "react";

// http-url:https://framerusercontent.com/modules/TazIjxEKXFHusB5pewd7/jmrjAj8D3PJXWo4yNQX7/hM5LPVQMw.js
import { fontStore as fontStore5 } from "./_framer-runtime.js";
fontStore5.loadFonts(["FR;InterDisplay-SemiBold", "Inter-Black", "Inter-BlackItalic", "Inter-BoldItalic"]);
var fonts5 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2", weight: "600" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2", weight: "600" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2", weight: "600" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2", weight: "600" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2", weight: "600" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/PfdOpgzFf7N2Uye9JX7xRKYTgSc.woff2", weight: "600" }, { cssFamilyName: "Inter Display", source: "framer", style: "normal", uiFamilyName: "Inter Display", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2", weight: "600" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/rZ5DdENNqIdFTIyQQiP5isO7M.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/gcnfba68tfm7qAyrWRCf9r34jg.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2", weight: "900" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { cssFamilyName: "Inter", source: "framer", style: "italic", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }] }];
var css9 = [`.framer-6R1XM .framer-styles-preset-1c3x8dx:not(.rich-text-wrapper), .framer-6R1XM .framer-styles-preset-1c3x8dx.rich-text-wrapper h1 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 148px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -7px; --framer-line-height: 140px; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-background-padding: 0px 0px 20px 0px; --framer-text-color: var(--token-8a650152-2d6e-46ea-8610-9e6ba7a473d7, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-6R1XM .framer-styles-preset-1c3x8dx:not(.rich-text-wrapper), .framer-6R1XM .framer-styles-preset-1c3x8dx.rich-text-wrapper h1 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 118px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -7px; --framer-line-height: 120px; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-background-padding: 0px 0px 20px 0px; --framer-text-color: var(--token-8a650152-2d6e-46ea-8610-9e6ba7a473d7, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-6R1XM .framer-styles-preset-1c3x8dx:not(.rich-text-wrapper), .framer-6R1XM .framer-styles-preset-1c3x8dx.rich-text-wrapper h1 { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on, 'ss07' on, 'salt' on; --framer-font-size: 88px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -3px; --framer-line-height: 90px; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-background-padding: 0px 0px 20px 0px; --framer-text-color: var(--token-8a650152-2d6e-46ea-8610-9e6ba7a473d7, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className5 = "framer-6R1XM";

// http-url:https://framerusercontent.com/modules/V4uP9cD59r64OFiqeKvS/WZdexD5IwJq58Sua7msD/JgRrjDF2T.js
var serializationHash5 = "framer-Hvcb9";
var variantClassNames5 = { doHQfrhEi: "framer-v-1onvzsq" };
var transition15 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var transformTemplate12 = (_3, t4) => `translate(-50%, -50%) ${t4}`;
var Transition5 = ({ value, children }) => {
  const config = React5.useContext(MotionConfigContext5);
  const transition = value ?? config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx5(MotionConfigContext5.Provider, { value: contextValue, children });
};
var Variants5 = motion5.create(React5.Fragment);
var getProps5 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency5 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component5 = /* @__PURE__ */ React5.forwardRef(function(props, ref) {
  const fallbackRef = useRef6(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React5.useId();
  const { activeLocale, setLocale } = useLocaleInfo5();
  const componentViewport = useComponentViewport5();
  const { style, className: className6, layoutId, variant, ...restProps } = getProps5(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState5({ defaultVariant: "doHQfrhEi", ref: refBinding, variant, variantClassNames: variantClassNames5 });
  const layoutDependency = createLayoutDependency5(props, variants);
  const sharedStyleClassNames = [className5];
  const scopingClassNames = cx5(serializationHash5, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx5(LayoutGroup5, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx5(Variants5, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx5(Transition5, { value: transition15, children: /* @__PURE__ */ _jsx5(motion5.div, { ...restProps, ...gestureHandlers, className: cx5(scopingClassNames, "framer-1onvzsq", className6, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "Container__doHQfrhEi", ref: refBinding, style: { ...style }, children: /* @__PURE__ */ _jsx5(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx5(React5.Fragment, { children: /* @__PURE__ */ _jsx5(motion5.h1, { className: "framer-styles-preset-1c3x8dx", "data-styles-preset": "hM5LPVQMw", style: { "--framer-text-alignment": "center", "--framer-text-color": "var(--extracted-gdpscs, var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(10, 10, 10)))" }, children: "Selected Works" }) }), className: "framer-1lohw4n", fonts: ["Inter"], layoutDependency, layoutId: "Container__FvY2UxrTM", style: { "--extracted-gdpscs": "var(--token-f29541d4-a784-41e4-8dc3-507539dde244, rgb(10, 10, 10))", "--framer-paragraph-spacing": "0px" }, transformTemplate: transformTemplate12, verticalAlignment: "center", withExternalLayout: true }) }) }) }) });
});
var css10 = [".framer-Hvcb9.framer-1o22c7m, .framer-Hvcb9 .framer-1o22c7m { display: block; }", ".framer-Hvcb9.framer-1onvzsq { height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }", ".framer-Hvcb9 .framer-1lohw4n { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre-wrap; width: 1072px; word-break: break-word; word-wrap: break-word; }", ...css9];
var FramerJgRrjDF2T = withCSS5(Component5, css10, "framer-Hvcb9");
var JgRrjDF2T_default = FramerJgRrjDF2T;
FramerJgRrjDF2T.displayName = "Selected Works text";
FramerJgRrjDF2T.defaultProps = { height: 160, width: 1072 };
addFonts5(FramerJgRrjDF2T, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle3(fonts5)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/UDbVvGLLWlXZsTg0rEr1/RczVmGJ4GdW5RK1O1tCW/DcQkMkg7v.js
var SubtitleFonts = getFonts2(gSxc6YmO3_default);
var SelectedWorksTextFonts = getFonts2(JgRrjDF2T_default);
var MotionDivWithFX2 = withFX3(motion6.div);
var serializationHash6 = "framer-LaFwT";
var variantClassNames6 = { fGN2oLi21: "framer-v-1tq5bg3" };
var animation3 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 48 };
var transition16 = { damping: 100, delay: 0.1, mass: 3, stiffness: 500, type: "spring" };
var transition23 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var matchVariant2 = (...args) => {
  for (const arg of args) {
    if (arg && typeof arg === "string")
      return arg;
  }
  return void 0;
};
var Transition6 = ({ value, children }) => {
  const config = React6.useContext(MotionConfigContext6);
  const transition = value ?? config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx6(MotionConfigContext6.Provider, { value: contextValue, children });
};
var Variants6 = motion6.create(React6.Fragment);
var getProps6 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency6 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component6 = /* @__PURE__ */ React6.forwardRef(function(props, ref) {
  const fallbackRef = useRef7(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React6.useId();
  const { activeLocale, setLocale } = useLocaleInfo6();
  const componentViewport = useComponentViewport6();
  const { style, className: className6, layoutId, variant, ...restProps } = getProps6(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState6({ defaultVariant: "fGN2oLi21", ref: refBinding, variant, variantClassNames: variantClassNames6 });
  const layoutDependency = createLayoutDependency6(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx6(serializationHash6, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx6(LayoutGroup6, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx6(Variants6, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx6(Transition6, { value: transition23, children: /* @__PURE__ */ _jsxs4(MotionDivWithFX2, { ...restProps, ...gestureHandlers, __framer__animate: { transition: transition16 }, __framer__animateOnce: true, __framer__enter: animation3, __framer__styleAppearEffectEnabled: true, __framer__threshold: 0.5, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: cx6(scopingClassNames, "framer-1tq5bg3", className6, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "Container__fGN2oLi21", ref: refBinding, style: { ...style }, children: [/* @__PURE__ */ _jsx6(ComponentViewportProvider2, { height: 22, width: componentViewport?.width || "100vw", y: (componentViewport?.y || 0) + 0 + 0, children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer2, { className: "framer-a00xqe-container", layoutDependency, layoutId: "Container__PaN9KEg77-container", nodeId: "PaN9KEg77", rendersWithMotion: true, scopeId: "DcQkMkg7v", children: /* @__PURE__ */ _jsx6(gSxc6YmO3_default, { bvYUJxwf_: "center", dg_MYFFcN: "Explore All Creations", height: "100%", id: "PaN9KEg77", layoutId: "Container__PaN9KEg77", sfwFpE6pf: false, style: { width: "100%" }, uScxfp93T: "", variant: matchVariant2("ny16f_1Qt"), width: "100%" }) }) }), /* @__PURE__ */ _jsx6(ComponentViewportProvider2, { height: 160, width: componentViewport?.width || "100vw", y: (componentViewport?.y || 0) + 0 + 46, children: /* @__PURE__ */ _jsx6(SmartComponentScopedContainer2, { className: "framer-11s1nrv-container", layoutDependency, layoutId: "Container__lEg3sfL0E-container", nodeId: "lEg3sfL0E", rendersWithMotion: true, scopeId: "DcQkMkg7v", children: /* @__PURE__ */ _jsx6(JgRrjDF2T_default, { height: "100%", id: "lEg3sfL0E", layoutId: "Container__lEg3sfL0E", style: { height: "100%", width: "100%" }, width: "100%" }) }) })] }) }) }) });
});
var css11 = [".framer-LaFwT.framer-a9zidq, .framer-LaFwT .framer-a9zidq { display: block; }", ".framer-LaFwT.framer-1tq5bg3 { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-LaFwT .framer-a00xqe-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-LaFwT .framer-11s1nrv-container { flex: none; height: 160px; position: relative; width: 100%; }"];
var FramerDcQkMkg7v = withCSS6(Component6, css11, "framer-LaFwT");
var DcQkMkg7v_default = FramerDcQkMkg7v;
FramerDcQkMkg7v.displayName = "Text";
FramerDcQkMkg7v.defaultProps = { height: 206, width: 1072 };
addFonts6(FramerDcQkMkg7v, [{ explicitInter: true, fonts: [] }, ...SubtitleFonts, ...SelectedWorksTextFonts], { supportsExplicitInterCodegen: true });
FramerDcQkMkg7v.loader = { load: (props, context) => {
  return runTasksWithYield2([() => forwardLoader2(gSxc6YmO3_default, {}, context), () => forwardLoader2(JgRrjDF2T_default, {}, context)], context);
} };

// http-url:https://framerusercontent.com/modules/Vn1Rw98CDyGaIGLEClds/fYylTpEg5qTkp4aM3BET/QbLaPzhRe.js
var TextFonts = getFonts3(DcQkMkg7v_default);
var ProjectsFonts = getFonts3(c0pxjDOhR_default);
var serializationHash7 = "framer-n4JF1";
var variantClassNames7 = { DvYl2751x: "framer-v-1ke5uzy" };
var transition17 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition7 = ({ value, children }) => {
  const config = React7.useContext(MotionConfigContext7);
  const transition = value ?? config.transition;
  const contextValue = React7.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx7(MotionConfigContext7.Provider, { value: contextValue, children });
};
var Variants7 = motion7.create(React7.Fragment);
var getProps7 = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency7 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component7 = /* @__PURE__ */ React7.forwardRef(function(props, ref) {
  const fallbackRef = useRef8(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React7.useId();
  const { activeLocale, setLocale } = useLocaleInfo7();
  const componentViewport = useComponentViewport7();
  const { style, className: className6, layoutId, variant, ...restProps } = getProps7(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState7({ defaultVariant: "DvYl2751x", ref: refBinding, variant, variantClassNames: variantClassNames7 });
  const layoutDependency = createLayoutDependency7(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx7(serializationHash7, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx7(LayoutGroup7, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx7(Variants7, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx7(Transition7, { value: transition17, children: /* @__PURE__ */ _jsxs5(motion7.div, { ...restProps, ...gestureHandlers, className: cx7(scopingClassNames, "framer-1ke5uzy", className6, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "Container__DvYl2751x", ref: refBinding, style: { ...style }, children: [/* @__PURE__ */ _jsx7(ComponentViewportProvider3, { height: 206, width: componentViewport?.width || "100vw", y: (componentViewport?.y || 0) + 0 + ((componentViewport?.height || 3126) - 0 - 238 + 0 + 0), children: /* @__PURE__ */ _jsx7(SmartComponentScopedContainer3, { className: "framer-1fr2efm-container", layoutDependency, layoutId: "Container__MN3Nesbak-container", nodeId: "MN3Nesbak", rendersWithMotion: true, scopeId: "QbLaPzhRe", children: /* @__PURE__ */ _jsx7(DcQkMkg7v_default, { height: "100%", id: "MN3Nesbak", layoutId: "Container__MN3Nesbak", style: { width: "100%" }, width: "100%" }) }) }), /* @__PURE__ */ _jsx7(motion7.div, { className: "framer-10mkmw", "data-framer-name": "Works", layoutDependency, layoutId: "Container__S5ZvyFfam", children: /* @__PURE__ */ _jsx7(ComponentViewportProvider3, { height: 0, width: `max(${componentViewport?.width || "100vw"}, 1px)`, y: (componentViewport?.y || 0) + 0 + ((componentViewport?.height || 3126) - 0 - 238 + 206 + 32) + 0, children: /* @__PURE__ */ _jsx7(SmartComponentScopedContainer3, { className: "framer-yrt0en-container", layoutDependency, layoutId: "Container__DC2TuaPtA-container", nodeId: "DC2TuaPtA", rendersWithMotion: true, scopeId: "QbLaPzhRe", children: /* @__PURE__ */ _jsx7(c0pxjDOhR_default, { height: "100%", id: "DC2TuaPtA", layoutId: "Container__DC2TuaPtA", style: { height: "100%", width: "100%" }, width: "100%" }) }) }) })] }) }) }) });
});
var css12 = [".framer-n4JF1.framer-cwn91g, .framer-n4JF1 .framer-cwn91g { display: block; }", ".framer-n4JF1.framer-1ke5uzy { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-end; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-n4JF1 .framer-1fr2efm-container { flex: none; height: auto; position: relative; width: 100%; }", ".framer-n4JF1 .framer-10mkmw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }", ".framer-n4JF1 .framer-yrt0en-container { align-self: stretch; flex: 1 0 0px; height: auto; position: sticky; top: 0px; width: 1px; z-index: 1; }"];
var FramerQbLaPzhRe = withCSS7(Component7, css12, "framer-n4JF1");
var QbLaPzhRe_default = FramerQbLaPzhRe;
FramerQbLaPzhRe.displayName = "Container";
FramerQbLaPzhRe.defaultProps = { height: 3126, width: 1072 };
addFonts7(FramerQbLaPzhRe, [{ explicitInter: true, fonts: [] }, ...TextFonts, ...ProjectsFonts], { supportsExplicitInterCodegen: true });
FramerQbLaPzhRe.loader = { load: (props, context) => {
  return runTasksWithYield3([() => forwardLoader3(DcQkMkg7v_default, {}, context), () => forwardLoader3(c0pxjDOhR_default, {}, context)], context);
} };
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerQbLaPzhRe", "slots": [], "annotations": { "framerIntrinsicWidth": "1072", "framerColorSyntax": "true", "framerDisplayContentsDiv": "false", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"],"constraints":[null,"1280px",null,null]}}}', "framerContractVersion": "1", "framerIntrinsicHeight": "3126", "framerAutoSizeImages": "true", "framerComponentViewportWidth": "true", "framerImmutableVariables": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  QbLaPzhRe_default as default
};
