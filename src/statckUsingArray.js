// Implement the stack using Array.
class Stack { 
    constructor() {
       this.array = [];
    }
    peek() {
        const length = this.array.length-1;
       return this.array[length];

    }
    push(value) {
        this.array.push(value);
    }
    pop() {
       return this.array.pop();

    }
   
}

const myStack = new Stack();
myStack.push("google");
myStack.push("facebook");
myStack.push("twitter");

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
;
