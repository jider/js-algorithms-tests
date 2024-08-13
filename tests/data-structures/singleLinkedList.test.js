import { it } from 'vitest'
import { SingleLinkedList } from '../../src/data-structures/SingleLinkedList.js'

it('Single Linked List', () => {
  const sll = new SingleLinkedList()

  sll.push(5).push(6).unshift(4).push(7).push(8).push(9)
  sll.reverse()
  sll.traverse()
})
