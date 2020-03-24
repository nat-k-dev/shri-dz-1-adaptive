class Queue {
    constructor() {
        this.dataStore = [];
    }

    size() {
        return this.dataStore.length;
    }

    empty() {
        return !this.size();
    }

    clear() {
        this.dataStore.length = 0;
    }

    enqueue(data) {
        this.dataStore.push(data);
    }

    dequeue() {
        return this.dataStore.shift();
    }

    front() {
        return this.dataStore[0];
    }

    back() {
        return this.dataStore[this.size() - 1];
    }
};


module.exports = {
    Queue
}