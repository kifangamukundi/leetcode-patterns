// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Input: head = [1,1,2]
// Output: [1,2]

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// Assuming the linked list is represented as a class with a val property and a next pointer, you can implement the solution using a hash set to keep track of the unique elements and a current pointer to traverse the list:

function deleteDuplicates(head) {
    const set = new Set();
    let current = head;
    let prev = null;
    
    while (current) {
      if (set.has(current.val)) {
        prev.next = current.next;
      } else {
        set.add(current.val);
        prev = current;
      }
      current = current.next;
    }
    
    return head;
  }

// This function iterates over each node in the list, adding its value to a set if it hasn't been seen before. If the value has already been added to the set, the previous node's next pointer is updated to skip over the current node. Finally, the original head node is returned to preserve the sorted order of the list.

// Note that this implementation assumes that the input linked list is already sorted in ascending order. If that's not the case, you'll need to modify the function to sort the list before removing duplicates.

// Add the following constraints; The number of nodes in the list is in the range [0, 300]. The list is guaranteed to be sorted in ascending order.

function deleteDuplicates(head) {
    let current = head;
    
    while (current && current.next) {
      if (current.val === current.next.val) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    
    return head;
  }

// The main difference in this implementation is that it uses a single pointer to traverse the list, rather than a hash set. The pointer starts at the head of the list and moves forward until it reaches the end or a duplicate value.

// When a duplicate is found, the pointer updates the next property of the current node to skip over the duplicate node. Otherwise, the pointer moves forward to the next node.

// The time complexity of this solution is O(n), where n is the number of nodes in the list. This is because the pointer only needs to traverse the list once, and each operation inside the loop takes constant time.

// Note that this implementation assumes that the input linked list is already sorted in ascending order. If that's not the case, you'll need to modify the function to sort the list before removing duplicates. Also, since the constraint specifies that the number of nodes in the list is in the range [0, 300], the function should work efficiently even for empty lists or lists with many duplicates.