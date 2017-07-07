export declare class NarrowStringMap<K extends string, V> {
    constructor(source?: [K, V][]);
    clear(): void;
    delete(key: K): boolean;
    forEach(callback: (value: V, key: K, map: NarrowStringMap<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
    readonly size: number;
    values(): V[];
    keys(): K[];
    entries(): [K, V][];
}
export declare class StringMap<V> extends NarrowStringMap<string, V> {
}
