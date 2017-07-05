
export class StringMap<V, K extends string = string> {

    /** @internal */
    private _keyCount = 0;
    /** @internal */
    private _map: {[key: string]: V} = Object.create(null); // unfortunately key has to be 'string' not 'K' due to TS limitations

    constructor(source?: [K,V][]) {
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

    delete(key: K): boolean {
      const had = this.has(key);
      delete this._map[key];
      if(had) {
        this._keyCount -= 1;
      }
      return had;
    }

    forEach(callback: (value: V, key: K, map: StringMap<V,K>) => void, thisArg?: any): void {
      for(const key in this._map) {
        callback.call(thisArg, this._map[key], key, this);
      }
    }

    get(key: K): V | undefined {
      return this._map[key];
    }

    has(key: K): boolean {
      return key in this._map;
    }

    set(key: K, value: V): this {
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

    keys(): K[] {
      const keys = [];
      for(const key in this._map) keys.push(key);
      return keys as any; // index typings
    }

    entries(): [K,V][] {
      const entries = [];
      for(const key in this._map) entries.push([key, this._map[key]]);
      return entries as any; // index typings
    }
}


export class NumberMap<V, K extends number = number> {

    /** @internal */
    private _keyCount = 0;
    /** @internal */
    private _map: {[key: number]: V} = Object.create(null);

    constructor(source?: [K,V][]) {
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

    delete(key: K): boolean {
        const had = this.has(key);
        delete this._map[key as number];
        if(had) {
            this._keyCount -= 1;
        }
        return had;
    }

    forEach(callback: (value: V, key: K, map: NumberMap<V,K>) => void, thisArg?: any): void {
        for(const key in this._map) {
        callback.call(thisArg, this._map[key], key, this);
    }
    }

    get(key: K): V | undefined {
        return this._map[key as number];
    }

    has(key: K): boolean {
        return (key as number) in this._map;
    }

    set(key: K, value: V): this {
        const had = this.has(key);
        this._map[key as number] = value;
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

    keys(): K[] {
        const keys = [];
        for(const key in this._map) keys.push(+key);
        return keys as any; // index typings
    }

    entries(): [K,V][] {
        const entries = [];
        for(const key in this._map) entries.push([+key, this._map[key]]);
        return entries as any; // index typings
    }
}





