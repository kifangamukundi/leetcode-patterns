// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Input: head = [1,2]
// Output: [2,1]

// Input: head = []
// Output: []

function reverseLinkedList(head) {
    let prev = null;
    let curr = head;
    while (curr != null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

// The function takes the head of the linked list as its argument and returns the new head of the reversed list. The function works by iterating through the linked list, starting at the head. At each node, the function updates the next pointer to point to the previous node instead of the next node. The function keeps track of the previous node and the current node, which are used to update the next pointers. Finally, the function returns the new head of the reversed list, which is the last node in the original list.

// To add a constraint to the previous solution so that the number of nodes in the list is within the range of [0, 5000], you can add a check at the beginning of the function to ensure that the list is not longer than 5000 nodes. Here's the modified function:

function reverseLinkedList(head) {
    if (!head) {
      return null; // handle empty list
    }
    let nodeCount = 1;
    let curr = head;
    while (curr.next != null && nodeCount < 5000) {
      curr = curr.next;
      nodeCount++;
    }
    if (nodeCount === 5000 && curr.next !== null) {
      throw new Error("List is too long"); // handle list longer than 5000 nodes
    }
    let prev = null;
    curr = head;
    while (curr != null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }

// The function first checks if the list is empty, in which case it returns null. Otherwise, it iterates through the list and counts the number of nodes, up to a maximum of 5000 nodes. If the list is longer than 5000 nodes, it throws an error. Finally, the function reverses the list in the same way as before and returns the new head.

// Here's a recursive implementation to reverse a singly linked list:

function reverseLinkedList(head) {
    if (!head || !head.next) {
      return head; // base case: empty list or list with one node
    }
    let newHead = reverseLinkedList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
  }

// The function takes the head of the linked list as its argument and returns the new head of the reversed list. The function works by recursively calling itself on the tail of the list (i.e., the list without the head node), until it reaches the base case of an empty list or a list with only one node. At each level of recursion, the function reverses the two nodes by setting the next pointer of the second node to point to the first node, and the next pointer of the first node to null. Finally, the function returns the new head of the reversed list, which is the tail of the original list.
  