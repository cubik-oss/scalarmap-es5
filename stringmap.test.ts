import { NarrowStringMap, StringMap } from "./stringmap";
import { assert } from "chai";

const A = {id: "A"};
const B = {id: "B"};

type Val = {id: string};


describe("stringmap", function() {

    it("counts changes to key size", function() {
        const map = new StringMap<Val>([["a",A], ["b",B]]);
        assert.equal(map.size, 2);

        map.set("c", A);
        assert.equal(map.size, 3);

        map.delete("a");
        assert.equal(map.size, 2);

        map.delete("c");
        map.delete("b");
        assert.equal(map.size, 0);

        map.set("c", A);
        assert.equal(map.size, 1);
        map.delete("z");
        assert.equal(map.size, 1, "size should change only when key was present");
        map.delete("c");
        assert.equal(map.size, 0);
    });

    it("calls forEach with values", function() {
        const calls: [string,any][] = [];
        const map = new StringMap<Val>([["a",A], ["b",B]]);
        map.forEach((v, k, m) => {
            assert.equal(m, map, "should have called with map");
            calls.push([k,v]);
        })
        assert.sameDeepMembers(map.entries(), [["a",A], ["b",B]]);
    })

    it("clear empties", function() {
        const map = new StringMap<Val>([["a",A], ["b",B]]);
        assert.equal(map.size, 2);

        map.clear();
        assert.equal(map.size, 0);
    })

    it("can get values", function() {
        const map = new StringMap<Val>([["a",A], ["b",B]]);
        assert.sameMembers(map.values(), [A,B]);
    })

    it("can get keys", function() {
        const map = new StringMap<Val>([["a",A], ["b",B]]);
        assert.sameMembers(map.keys(), ['a','b']);
    })

    it("can get entires", function() {
        const map = new StringMap<Val>([["a",A], ["b",B]]);
        assert.sameDeepMembers(map.entries(), [["a",A], ["b",B]]);
    })

    it("can check membership", function() {
        const map = new StringMap<Val>([["a",A], ["b",B]]);
        assert.isTrue(map.has('a'), "has false negative");
        assert.isFalse(map.has('z'), "has false positive");

        map.delete('a');
        assert.isFalse(map.has('a'), "has + delete not working togther");
    });

    it("has a spec compliant 'delete'", function() {
        const map = new StringMap<Val>([["a",A], ["b",B]]);
        const had = map.delete('a');
        assert.isTrue(had, "delete didn't recognize previous inclusion");
        assert.isFalse(map.has('a'), 'had should be false after a delete');

        const notPresent = map.delete('z');
        assert.isFalse(notPresent, "map false positive on previous inclusion");
    })

})

describe("README", () => {

    it("has a working example", () => {
        // commented out the lines that should type error
        const map = new StringMap<number>();

        map.set('a', 5); // fine
        //map.set(10, 5); // errors - key is not string
        //map.set(10, 'a'); // errors - value is not number



        type Type = "a" | "b";
        const byType = new NarrowStringMap<Type, number>();
        byType.set('a', 10) // fine
        // byType.set('z', 10) // errors - 'z' is not 'a' | 'b'
        // byType.get('z') // errors - 'z' is not 'a' | 'b'

        const types: Type[] = byType.keys() // fine - specific typings
    });

});
