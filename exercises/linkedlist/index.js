// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }
    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.length++
    }
    size() {
        return this.length
    }
    getFirst() {
        return this.head
    }
    getLast() {
        let node = this.head
        while (node && node.next) {
            node = node.next
        }
        return node
    }
    clear() {
        let node = this.head
        while (node) {
            node.data = null
            this.length--
            node = node.next
        }
    }
    removeFirst() {
        this.head = this.head.next
        this.length--
    }
    removeLast() {
        if (!this.head) {
            return
        }
        if (!this.head.next) {
            this.head = null
            return
        }
        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node
            node = node.next
        }
        previous.next = null
        this.length--
    }
    insertLast(data) {
        let node = this.getLast()
        if (node) {
            node.next = new Node(data, null)
        } else {
            this.head = new Node(data, null)
        }
        this.length++
    }
    getAt(position) {
        let node = this.head
        if (!node) {
            return null
        }
        if (position >= this.length) {
            return null
        }
        while (position > 0) {
            node = node.next
            position--
        }
        return node
    }
    removeAt(position) {
        let node = this.head
        if (!node) {
            return
        }
        if (position >= this.length) {
            return
        }
        if (position === 0) {
            this.head = node.next
            this.length--
        }
        while (position > 1 && node.next) {
            node = node.next
            position--
        }
        node.next = node.next.next
        this.length--
    }
    insertAt(data, position) {
        let node = this.head
        if (!node) {
            this.head = new Node(data, null)
            return
        }
        if (position === 0) {
            this.head = new Node(data, this.head)
            this.length++
            return
        }
        const previous = this.getAt(position - 1) || this.getLast()
        const newNode = new Node(data, previous.next)
        previous.next = newNode
        this.length++
    }
    forEach (fn) {
        let node = this.head
        while (node) {
            fn(node)
            node = node.next
        }
    }
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
          yield node;
          node = node.next;
        }
      }
}

module.exports = { Node, LinkedList };
