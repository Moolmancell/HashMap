import { LinkedList } from "./linkedList.mjs";

export class HashMap {
    constructor() {
        this.buckets = Array(16);
        this.size = 16;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
        }
        console.log(hashCode);
        return hashCode;
    }

    set(key, value) {

        if (this.size * 0.75 <= this.length()) {
            this.size *= 2;
            this.buckets.length = this.size;
        }

        let index = this.hash(key);

        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }

        if (!this.buckets[index]) {
            this.buckets[index] = new LinkedList();
            this.buckets[index].append([key, value]);
        } else if (this.buckets[index]) {
            this.buckets[index].append([key, value])
        }
        
    }

    get(key) {
        for (let i = 0; i < this.buckets.length; i++) {
            const element = this.buckets[i];
            if (element && element.contains(key)) {
                return element.listhead.value[1];
            }
        }
        return null;
    }

    has(key) {
        for (let i = 0; i < this.buckets.length; i++) {
            const element = this.buckets[i];
            if (element && element.contains(key)) {
                return true;
            }
        }
        return false;
    }

    remove(key) {
        for (let i = 0; i < this.buckets.length; i++) {
            const element = this.buckets[i];
            if (element && element.contains(key)) {
                delete this.buckets[i]

            }
        }
        return null;
    }

    length() {
        let count = 0;
        for (let i = 0; i < this.buckets.length; i++) {
            const element = this.buckets[i];
            if (element) {
                count++;
            }
        }
        return count;
    }


    clear() {
        this.buckets = [];
    }

    keys() {
        let keys = [];
        this.buckets.forEach(element => {
            keys.push(element.listhead.value[0]);
        });
        return keys;
    }

    values() {
        let values = [];
        this.buckets.forEach(element => {
            values.push(element.listhead.value[1]);
        });
        return values;
    }

    entries() {
        let entries = [];
        this.buckets.forEach(element => {
            entries.push(element.toString());
        });
        console.log(`orig-length:${this.buckets.length} `)
        return entries;
    }
}
