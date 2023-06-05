const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Stack {
	constructor() {
		this.stack = [];
	}
	push(n) {
		this.stack.push(n);
	};
	size() {
		return this.stack.length;
	};
	last() {
		return (this.stack.length - 1);
	};
	peek() {
		return this.stack[this.last()];
	};
	pop() {
		return this.stack.pop();
	};
};

module.exports = {
  Stack
};
