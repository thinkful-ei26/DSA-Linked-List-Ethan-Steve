'use strict';

class _Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head, this.head);
    this.tail = this.head;
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      let previousNode;
      while (tempNode.next !== null) {
        previousNode = tempNode;
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null, tempNode);
      this.tail = tempNode.next;
    }
  }

  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;
    let nextNode;

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
      nextNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
    nextNode.previous = currNode.previous;
  }

  insertBefore(item, itemTofind) {
    let currNode = this.head;
    let previousNode;
    while (currNode.value !== itemTofind) {
      if (currNode.next === null) {
        return null;
      } else {
        previousNode = currNode;
        currNode = currNode.next;
      }
    }
    currNode.previous = new _Node(item, currNode.next, previousNode);
  }

  findLast() {
    let currNode = this.head;
    let previousNode;
    while (currNode) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    return previousNode;
  }

  insertAfter(item, itemTofind) {
    let currNode = this.head;
    while (currNode.value !== itemTofind) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    let tempNode = currNode.next;
    currNode.next = new _Node(item, tempNode, currNode.previous);
    if (!currNode.next.next){
      this.tail = currNode.next;
    }
  }

  insertAt(item, index) {
    let currNode = this.head;
    let counter = 1;
    let previousNode;

    while (counter < index - 1) {
      if (currNode.next === null) {
        return null;
      } else {
        previousNode = currNode;
        currNode = currNode.next;
        counter++;
      }
    }
    let tempNode = currNode.next;
    currNode.next = new _Node(item, tempNode, previousNode);
    if (!currNode.next.next){
      this.tail = currNode.next;
    }  
  }
}


function display(LinkedList) {
  let currNode = LinkedList.head;
  while (currNode) {
    console.log('value is', currNode.value);
    (currNode.next) ? console.log('next is', currNode.next.value): null;
    (currNode.previous) ? console.log('previous is', currNode.previous.value): null;
    console.log('\nNEXT ITEM');
    currNode = currNode.next;
  }
}

function main (){
  let DLL = new DoubleLinkedList();
  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  // console.log(DLL);
  display(DLL);
}

main();