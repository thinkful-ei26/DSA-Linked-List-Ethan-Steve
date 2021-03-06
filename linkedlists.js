'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
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

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(item, itemTofind) {
    let currNode = this.head;
    let nextNode = currNode.next;
    while (nextNode.value !== itemTofind) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
        nextNode = nextNode.next;
      }
    }
    currNode.next = new _Node(item, nextNode);
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
    currNode.next = new _Node(item, tempNode);
  }

  insertAt(item, index) {
    let currNode = this.head;
    let counter = 1;

    while (counter < index - 1) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
        counter++;
      }
    }
    let tempNode = currNode.next;
    currNode.next = new _Node(item, tempNode);
  }
}

function display(LinkedList) {
  let currNode = LinkedList.head;
  while (currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(LinkedList) {
  let currNode = LinkedList.head;
  let counter = 1;
  while (currNode.next) {
    counter++;
    currNode = currNode.next;
  }
  return counter;
}

function isEmpty(LinkedList) {
  if (LinkedList.head) {
    return false;
  } else return true;
}

function findPrevious(LinkedList, item) {
  let currNode = LinkedList.head;
  let previousNode;

  while (currNode.value !== item.value) {
    previousNode = currNode;
    if (currNode.next) {
      currNode = currNode.next;
    } else return 'Item not found';
  }
  if (!previousNode) {
    return 'No Previous Item';
  }
  return previousNode;
}

function findLast(LinkedList) {
  let currNode = LinkedList.head;
  let previousNode;
  while (currNode) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  return previousNode;
}

function reverse(SLL) {
  let currNode = SLL.head;
  SLL.head = null;
  while (currNode) {
    SLL.insertFirst(currNode.value);
    currNode = currNode.next;
  }

  return SLL;
}

function thirdFromLast(LinkedList){
  let currNode = LinkedList.head;
  // let nextNode;

  while(currNode.next.next.next) {
    currNode = currNode.next;
  }

  return currNode.value;
}

function middle(LinkedList){
  let firstCounter = 1;
  let secondCounter = 1;
  let currNode = LinkedList.head;

  while (currNode){
    currNode = currNode.next;
    // console.log('counter is', firstCounter);
    firstCounter++;
  }

  currNode = LinkedList.head;

  while (firstCounter/2 > secondCounter) {
    currNode = currNode.next;
    // console.log('first counter is', firstCounter);
    // console.log('second counter is', secondCounter);
    secondCounter++;
  }

  return currNode.value;

}

function third(LinkedList) {
  let currNode = LinkedList.head
  let counter = 0
  let i = 0
  while (currNode) {
    counter++
    currNode = currNode.next
  }
  currNode = LinkedList.head
  let index = counter - 3
  console.log(counter)

  while (i < index) {
    currNode = currNode.next
    i++
  }
  return currNode.value
}

function cycle(LinkedList) {
  let slow, fast
  if (!LinkedList.head || !LinkedList.head.next) return false
  slow = LinkedList.head
  fast = LinkedList.head
  if (LinkedList.head === LinkedList.head.next) {
    return true
  }
  while (fast.next.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }
  return false
}

function main() {
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertFirst('Tauhida');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Banana', 3);
  SLL.remove('Tauhida');
  display(SLL);
  // console.log(size(SLL))
  // console.log(isEmpty(SLL))
  // console.log(findPrevious(SLL, {value: 'foo'}))
  // console.log(findLast(SLL))
  // console.log('\n\nREVERSING LIST\n\n');
  // display(reverse(SLL));
  // console.log(thirdFromLast(SLL));
  console.log(middle(SLL));
  // console.log('\n\nREVERSING LIST\n\n')
  // display(reverse(SLL))
  // console.log(third(SLL))

  console.log(cycle(SLL))
}

main();
