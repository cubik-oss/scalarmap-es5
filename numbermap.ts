
export class NumberMap<V>{

    /** @internal */
    private _keyCount = 0;
    /** @internal */
    private _map: {[key: number]: V} = Object.create(null);

    constructor(source?: [number,V][]) {
        if(source) {
            for(const [k,v] of source) {
                this.set(k,v);
            }
        }
    }

    clear() {
        this._map = Object.create(null);
        this._keyCount = 0;
    }

    delete(key: number): boolean {
        const had = this.has(key);
        delete this._map[key];
        if(had) {
            this._keyCount -= 1;
        }
        return had;
    }

    forEach(callback: (value: V, key: number, map: NumberMap<V>) => void, thisArg?: any): void {
        for(const key in this._map) {
            callback.call(thisArg, this._map[key], key, this);
        }
    }

    get(key: number): V | undefined {
        return this._map[key];
    }

    has(key: number): boolean {
        return key in this._map;
    }

    set(key: number, value: V): this {
        const had = this.has(key);
        this._map[key] = value;
        if(!had) {
            this._keyCount += 1;
        }
        return this;
    }

    get size(): number {
        return this._keyCount;
    }

    values(): V[] {
        const values: V[] = [];
        for(const key in this._map) values.push(this._map[key]);
        return values;
    }

    keys(): number[] {
        const keys = [];
        for(const key in this._map) keys.push(+key);
        return keys as any; // index typings
    }

    entries(): [number,V][] {
        const entries = [];
        for(const key in this._map) entries.push([+key, this._map[key]]);
        return entries as any; // index typings
    }
}
