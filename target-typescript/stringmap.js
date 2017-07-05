"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringMap = (function () {
    function StringMap(source) {
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
    StringMap.prototype.clear = function () {
        this._map = Object.create(null);
        this._keyCount = 0;
    };
    StringMap.prototype.delete = function (key) {
        var had = this.has(key);
        delete this._map[key];
        if (had) {
            this._keyCount -= 1;
        }
        return had;
    };
    StringMap.prototype.forEach = function (callback, thisArg) {
        for (var key in this._map) {
            callback.call(thisArg, this._map[key], key, this);
        }
    };
    StringMap.prototype.get = function (key) {
        return this._map[key];
    };
    StringMap.prototype.has = function (key) {
        return key in this._map;
    };
    StringMap.prototype.set = function (key, value) {
        var had = this.has(key);
        this._map[key] = value;
        if (!had) {
            this._keyCount += 1;
        }
        return this;
    };
    Object.defineProperty(StringMap.prototype, "size", {
        get: function () {
            return this._keyCount;
        },
        enumerable: true,
        configurable: true
    });
    StringMap.prototype.values = function () {
        var values = [];
        for (var key in this._map)
            values.push(this._map[key]);
        return values;
    };
    StringMap.prototype.keys = function () {
        var keys = [];
        for (var key in this._map)
            keys.push(key);
        return keys; // index typings
    };
    StringMap.prototype.entries = function () {
        var entries = [];
        for (var key in this._map)
            entries.push([key, this._map[key]]);
        return entries; // index typings
    };
    return StringMap;
}());
exports.StringMap = StringMap;
var NumberMap = (function () {
    function NumberMap(source) {
        /** @internal */
        this._keyCount = 0;
        /** @internal */
        this._map = Object.create(null); // unfortunately key has to be 'string' not 'K' due to TS limitations
        if (source) {
            for (var _i = 0, source_2 = source; _i < source_2.length; _i++) {
                var _a = source_2[_i], k = _a[0], v = _a[1];
                this.set(k, v);
            }
        }
    }
    NumberMap.prototype.clear = function () {
        this._map = Object.create(null);
        this._keyCount = 0;
    };
    NumberMap.prototype.delete = function (key) {
        var had = this.has(key);
        delete this._map[key];
        if (had) {
            this._keyCount -= 1;
        }
        return had;
    };
    NumberMap.prototype.forEach = function (callback, thisArg) {
        for (var key in this._map) {
            callback.call(thisArg, this._map[key], key, this);
        }
    };
    NumberMap.prototype.get = function (key) {
        return this._map[key];
    };
    NumberMap.prototype.has = function (key) {
        return key in this._map;
    };
    NumberMap.prototype.set = function (key, value) {
        var had = this.has(key);
        this._map[key] = value;
        if (!had) {
            this._keyCount += 1;
        }
        return this;
    };
    Object.defineProperty(NumberMap.prototype, "size", {
        get: function () {
            return this._keyCount;
        },
        enumerable: true,
        configurable: true
    });
    NumberMap.prototype.values = function () {
        var values = [];
        for (var key in this._map)
            values.push(this._map[key]);
        return values;
    };
    NumberMap.prototype.keys = function () {
        var keys = [];
        for (var key in this._map)
            keys.push(+key);
        return keys; // index typings
    };
    NumberMap.prototype.entries = function () {
        var entries = [];
        for (var key in this._map)
            entries.push([+key, this._map[key]]);
        return entries; // index typings
    };
    return NumberMap;
}());
exports.NumberMap = NumberMap;
//# sourceMappingURL=stringmap.js.map