class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode) {
    this.val = val || 0;
    this.next = next || null;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 || !l2) {
    return l1 || l2 || null;
  }

  let previousNode: ListNode | null = null;
  let head = new ListNode();
  let currentNode = head;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    currentNode.val = sum % 10;
    carry = sum >= 10 ? 1 : 0;

    if (previousNode) {
      previousNode.next = currentNode;
    }

    previousNode = currentNode;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    currentNode = new ListNode();
  }

  return head;
}
