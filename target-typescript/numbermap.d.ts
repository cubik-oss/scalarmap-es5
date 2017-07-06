export declare class NumberMap<V> {
    constructor(source?: [number, V][]);
    clear(): void;
    delete(key: number): boolean;
    forEach(callback: (value: V, key: number, map: NumberMap<V>) => void, thisArg?: any): void;
    get(key: number): V | undefined;
    has(key: number): boolean;
    set(key: number, value: V): this;
    readonly size: number;
    values(): V[];
    keys(): number[];
    entries(): [number, V][];
}
