// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// We can use Floyd's Tortoise and Hare algorithm to detect if a linked list has a cycle in it. This algorithm uses two pointers, a slow one (tortoise) that moves one node at a time and a fast one (hare) that moves two nodes at a time. If there is a cycle in the linked list, the fast pointer will eventually catch up with the slow pointer.

function hasCycle(head) {
    if (!head || !head.next) {
      return false; // empty or single-node list
    }
  
    let tortoise = head;
    let hare = head.next;
  
    while (tortoise !== hare) {
      if (!hare || !hare.next) {
        return false; // end of list reached
      }
      tortoise = tortoise.next;
      hare = hare.next.next;
    }
  
    return true; // hare caught up with tortoise, cycle detected
  }
  
// Note that the function returns false for empty or single-node lists, as they cannot contain a cycle.  