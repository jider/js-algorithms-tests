import { it } from 'vitest'
import { SingleLinkedList } from '../../src/data-structures/SingleLinkedList.js'

it('Single Linked List', () => {
  const sll = new SingleLinkedList()

  sll.push(5).push(6).unshift(4)
  console.log(sll)
})
