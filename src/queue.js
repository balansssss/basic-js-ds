const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.queue = null
  }

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.queue;
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.queue) {
      this.queue = new ListNode(value);
      return;
    }

    let curQueue = this.queue;

    while (curQueue) {
      if (!curQueue.next) {
        curQueue.next = new ListNode(value);
        curQueue = null;
      } else {
        curQueue = curQueue.next;
      }
    }
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const topElem = this.queue.value;
    this.queue = this.queue.next;
    return topElem;
  }
}

module.exports = {
  Queue
};
