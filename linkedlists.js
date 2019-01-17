'use strict'

class _Node {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item)
    } else {
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }

  find(item) {
    let currNode = this.head

    if (!this.head) {
      return null
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null
      } else {
        currNode = currNode.next
      }
    }
    return currNode
  }

  remove(item) {
    if (!this.head) {
      return null
    }

    if (this.head.value === item) {
      this.head = this.head.next
      return
    }

    let currNode = this.head
    let previousNode = this.head

    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode
      currNode = currNode.next
    }
    if (currNode === null) {
      console.log('Item not found')
      return
    }
    previousNode.next = currNode.next
  }
  insertBefore(item, itemTofind) {
    let currNode = this.head
    let nextNode = currNode.next
    while (nextNode.value !== itemTofind) {
      if (currNode.next === null) {
        return null
      } else {
        currNode = currNode.next
        nextNode = nextNode.next
      }
    }
    console.log(nextNode)
    currNode.next = new _Node(item, nextNode)
  }
  insertAfter(item, itemTofind) {
    let currNode = this.head
    while (currNode.value !== itemTofind) {
      if (currNode.next === null) {
        return null
      } else {
        currNode = currNode.next
      }
    }
    let tempNode = currNode.next
    currNode.next = new _Node(item, tempNode)
  }
  insertAt(item, index) {
    let currNode = this.head
    let counter = 0

    while (counter < index) {
      if (currNode.next === null) {
        return null
      } else {
        currNode = currNode.next
        counter++
      }
    }
    let tempNode = currNode.next
    currNode.next = new _Node(item, tempNode)
  }
}

function display(LinkedList) {
  let currNode = LinkedList.head
  while (currNode) {
    console.log(currNode.value)
    currNode = currNode.next
  }
}
function main() {
  let SLL = new LinkedList()
  SLL.insertFirst('Apollo')
  SLL.insertLast('Boomer')
  SLL.insertLast('Helo')
  SLL.insertLast('Husker')
  SLL.insertLast('Starbuck')

  SLL.insertFirst('Tauhida')

  // SLL.remove('squirrel')
  SLL.insertBefore('Athena', 'Boomer')
  SLL.insertAfter('Hotdog', 'Helo')
  SLL.insertAt('STEVE + ETHAN', 3)
  display(SLL)
}

main()
