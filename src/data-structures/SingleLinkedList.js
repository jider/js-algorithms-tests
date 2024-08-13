class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

export class SingleLinkedList {
  constructor () {
    this.length = 0
    this.head = null
    this.tail = null
  }

  push (value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length += 1

    return this
  }

  pop () {
    if (!this.head) return undefined

    let currentNode = this.head
    let newTail = currentNode
    while (currentNode.next) {
      newTail = currentNode
      currentNode = currentNode.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length -= 1
    if (this.length === 0) {
      this.head = this.tail = null
    }

    return currentNode
  }

  shift () {
    if (!this.head) return undefined

    const currentHead = this.head
    this.head = this.head.next
    this.length -= 1
    if (this.length === 0) {
      this.head = this.tail = null
    }

    return currentHead
  }

  unshift (value) {
    const newHead = new Node(value)
    if (!this.head) {
      this.head = this.tail = newHead
    } else {
      newHead.next = this.head
      this.head = newHead
    }

    this.length += 1

    return this
  }

  traverse () {
    let currentNode = this.head
    while (currentNode) {
      console.log(currentNode.value)
      currentNode = currentNode.next
    }
  }
}
