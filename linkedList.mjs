import Node from './node.mjs';

export class LinkedList  {
    constructor() {
        this.listhead = null;
    }

    append(value) {
        if (this.listhead === null) this.listhead = new Node(value); 
        else {
            let currentNode = this.listhead;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(value);
        }
    }

    prepend(value) {
        let newHead = new Node(value);
        newHead.next = this.listhead;
        this.listhead = newHead;
    }

    size() {
        let count = 0;
        let current = this.listhead;
        while (current.next !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    head() {
        return this.listhead;
    }

    tail() {
        let current = this.listhead
        while (current.next !== null) {
            current = current.next;
        }
        return current;
    }

    at(index) {
        let count = 0;
        let current = this.listhead;
        while (count < index) {
            current = current.next;
            count++;
        }
        return current.value;
    }
    
    pop() {
        let current = this.listhead;
        while (current !== null) {
            if (current.next.next === null) {
                current.next = null;
                return current;
            }
            current = current.next;
        }
    }

    contains(value) {
        let current = this.listhead;
        while (current !== null) {
            //current.value originally
            if (current.value[0] === value) {
                return true 
            } 
            current = current.next;
        }
        return false;
    }
    
    find(value) {
        let current = this.listhead;
        let count = 0;
        while (current !== null) {
            if (current.value === value) {
                return count;
            } 
            count++;
            current = current.next;
        }
    }

    toString() {
        let current = this.listhead;
        let string = '';
        while (current !== null) {
            string += `(${current.value}) -> `;
            current = current.next;
        }
        string += 'null';
        return string;
    }
}