class Stack {
  constructor() {
    this.state = [];
  }
  push(item) {
    return this.state.push(item);
  }
  pop() {
    if (this.isEmpty()) {
      return "Statck is Empty";
    } else {
      return this.state.pop();
    }
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    } else {
      return this.state[this.state.length - 1];
    }
  }

  isEmpty() {
    return this.state.length === 0;
  }
}

const stack = new Stack();

stack.push(5), stack.push(5), stack.push(5), console.log(stack.pop());
console.log(stack.state);
