"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NarrowStringMap = (function () {
    function NarrowStringMap(source) {
        /** @internal */
        this._keyCount = 0;
        /** @internal */
        this._map = Object.create(null); // unfortunately key has to be 'string' not 'K' due to TS limitations
        if (source) {
            for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
                var _a = source_1[_i], k = _a[0], v = _a[1];
                this.set(k, v);
            }
        }
    }
    NarrowStringMap.prototype.clear = function () {
        this._map = Object.create(null);
        this._keyCount = 0;
    };
    NarrowStringMap.prototype.delete = function (key) {
        var had = this.has(key);
        delete this._map[key];
        if (had) {
            this._keyCount -= 1;
        }
        return had;
    };
    NarrowStringMap.prototype.forEach = function (callback, thisArg) {
        for (var key in this._map) {
            callback.call(thisArg, this._map[key], key, this);
        }
    };
    NarrowStringMap.prototype.get = function (key) {
        return this._map[key];
    };
    NarrowStringMap.prototype.has = function (key) {
        return key in this._map;
    };
    NarrowStringMap.prototype.set = function (key, value) {
        var had = this.has(key);
        this._map[key] = value;
        if (!had) {
            this._keyCount += 1;
        }
        return this;
    };
    Object.defineProperty(NarrowStringMap.prototype, "size", {
        get: function () {
            return this._keyCount;
        },
        enumerable: true,
        configurable: true
    });
    NarrowStringMap.prototype.values = function () {
        var values = [];
        for (var key in this._map)
            values.push(this._map[key]);
        return values;
    };
    NarrowStringMap.prototype.keys = function () {
        var keys = [];
        for (var key in this._map)
            keys.push(key);
        return keys; // index typings
    };
    NarrowStringMap.prototype.entries = function () {
        var entries = [];
        for (var key in this._map)
            entries.push([key, this._map[key]]);
        return entries; // index typings
    };
    return NarrowStringMap;
}());
exports.NarrowStringMap = NarrowStringMap;
var StringMap = (function (_super) {
    __extends(StringMap, _super);
    function StringMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StringMap;
}(NarrowStringMap));
exports.StringMap = StringMap;
//# sourceMappingURL=stringmap.js.map