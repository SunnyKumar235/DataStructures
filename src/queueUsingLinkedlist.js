class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.lenght = 0;
    }

    peek() {
        if (!this.first) {
            return null;
        }
        return this.first;;

    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.lenght == 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.lenght++;
        return this;

    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        const firstNode = this.first;
        this.first = this.first.next;
        this.lenght--;
        return this;
    }

}

const myQueue = new Queue();
myQueue.enqueue("google");
myQueue.enqueue("facebook");
myQueue.enqueue("twitter");

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());