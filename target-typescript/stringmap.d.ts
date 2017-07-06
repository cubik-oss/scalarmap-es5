export declare class StringMap<V, K extends string = string> {
    constructor(source?: [K, V][]);
    clear(): void;
    delete(key: K): boolean;
    forEach(callback: (value: V, key: K, map: StringMap<V, K>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
    readonly size: number;
    values(): V[];
    keys(): K[];
    entries(): [K, V][];
}
