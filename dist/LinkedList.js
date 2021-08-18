"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
exports.Node = Node;
class LinkedList {
    constructor(value) {
        this.head = null;
        this.head = new Node(value);
    }
}
const linkedList = new LinkedList(2);
console.log(linkedList);
//# sourceMappingURL=LinkedList.js.map