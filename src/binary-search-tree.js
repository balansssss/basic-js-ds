const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.leftElem = null;
    this.rightElem = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.data = null;
  }

  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.data;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const newNode = new Node(data)

    if (!this.data) this.data = newNode;
    else {
      let curNode = this.data;

      while (curNode) {
        if (newNode.data < curNode.data) {
          if (!curNode.leftElem) {
            curNode.leftElem = newNode;
            return;
          }

          curNode = curNode.leftElem;
        } else {
          if (!curNode.rightElem) {
            curNode.rightElem = newNode;
            return;
          }

          curNode = curNode.rightElem;
        }
      }
    }

  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let res = false;

    let curNode = this.data;
    let memNode = null;

    if (curNode) {
      while (curNode) {
        // Если текущий узел равен поискомому значению
        if (curNode.data === data) {
          res = true;
          curNode = null;
        } else {
          // Опускаемся вглубину
          if (curNode.leftElem) {
            memNode = curNode.rightElem;
            curNode = curNode.leftElem;
            continue;
          }

          else if (curNode.rightElem) {
            memNode = curNode.leftElem;
            curNode = curNode.rightElem;
            continue;
          }

          //Если не найдено не один элемент
          else {
            curNode = memNode;
            memNode = null;
          }
        }
      }
    }
    return res;
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let res = null;

    let curNode = this.data;
    let memNode = null;

    if (curNode) {
      while (curNode) {
        // Если текущий узел равен поискомому значению
        if (curNode.data === data) {
          res = curNode;
          curNode = null;
        } else {
          // Опускаемся вглубину
          if (curNode.leftElem) {
            memNode = curNode.rightElem;
            curNode = curNode.leftElem;
            continue;
          }

          else if (curNode.rightElem) {
            memNode = curNode.leftElem;
            curNode = curNode.rightElem;
            continue;
          }

          //Если не найдено не один элемент
          else {
            curNode = memNode;
            memNode = null;
          }
        }
      }
    }
    return res;

  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    /*let curNode = this.data;
    let memNode = null;

    while (curNode) {
      if (curNode.data === data) {
        curNode = null;
      } else {
        console.log('test')
      }
    }
    console.log(this.data)*/
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.data) return null;

    let curNode = this.data;
    let min = curNode.data;

    while (curNode) {
      // Если нет левого элемента - значит корень дерева и есть наименьший эл-т
      if (!curNode.leftElem) {
        min = curNode.data;
        curNode = null;
      } else {
        curNode = curNode.leftElem;
      }
    }

    return min;
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.data) return null;

    let curNode = this.data;
    let max = curNode.data;

    while (curNode) {
      // Если нет правого элемента - значит корень дерева и есть наименьший эл-т
      if (!curNode.rightElem) {
        max = curNode.data;
        curNode = null;
      } else {
        curNode = curNode.rightElem;
      }
    }

    return max;
  }
}

const tree = new BinarySearchTree();

tree.add(2);
tree.add(1);
tree.add(3);
tree.add(8);
tree.add(9);
tree.add(5);
console.log(tree.has(2));
console.log(tree.has(5));
console.log(tree.find(2));
console.log(tree.find(4));
console.log(tree.find(8));
console.log(tree.min());
console.log(tree.max());
tree.add(10);
tree.add(11);
console.log(tree.max());
tree.remove(2);
console.log(tree.has(5));

module.exports = {
  BinarySearchTree
};