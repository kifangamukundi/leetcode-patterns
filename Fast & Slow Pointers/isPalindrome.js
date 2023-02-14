// Given the head of a singly linked list, return true if it is a 
// palindrome or false otherwise.

// Input: head = [1,2,2,1]
// Output: true

// Input: head = [1,2]
// Output: false

function isPalindrome(head) {
    let values = [];
    let currentNode = head;
    
    // Traverse the linked list and store the values in an array
    while (currentNode) {
      values.push(currentNode.val);
      currentNode = currentNode.next;
    }
    
    // Check if the array is equal to its reverse
    return values.join('') === values.reverse().join('');
  }

// This function works by traversing the linked list and storing the values of each node in an array. It then checks if the array is equal to its reverse using the join() and reverse() methods of the array object.

// Note that this implementation assumes that the linked list contains only values that can be compared using ===. If the linked list contains complex objects or values that cannot be compared using ===, you may need to modify the implementation to handle this.

// To add the constraint that the number of nodes in the linked list is in the range [1, 10^5], you can modify the JavaScript function as follows:

function isPalindrome(head) {
    if (!head || !head.next) {
      // An empty or single-node list is always a palindrome
      return true;
    }
  
    let values = [];
    let currentNode = head;
  
    while (currentNode) {
      values.push(currentNode.val);
      currentNode = currentNode.next;
      if (values.length > 100000) {
        // The list is too long, exit early to avoid excessive memory usage
        return false;
      }
    }
  
    return values.join('') === values.reverse().join('');
  }

// This modified function includes an early exit clause that checks if the list is too long (i.e., has more than 100,000 nodes) and returns false if it is. This avoids excessive memory usage when processing very long lists. Note that this is a fairly arbitrary limit, and you may want to adjust it depending on your specific use case.


// You can determine if a singly linked list is a palindrome in O(n) time and O(1) space by using a two-pointer approach.

// The basic idea is to use two pointers: a slow pointer and a fast pointer. The slow pointer moves one node at a time, while the fast pointer moves two nodes at a time. When the fast pointer reaches the end of the list, the slow pointer will be at the middle of the list.

// While traversing the list, reverse the first half of the list by changing the direction of the next pointers. Then, compare the reversed first half of the list with the second half of the list. If they match, the list is a palindrome. If they don't match, the list is not a palindrome.

function isPalindrome(head) {
  if (!head || !head.next) {
    return true;
  }
  
  // Find the middle of the list using the two-pointer approach
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  // Reverse the first half of the list
  let prev = null;
  let curr = head;
  while (curr !== slow) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  // Compare the reversed first half with the second half of the list
  let left = prev;
  let right = slow;
  if (fast) {
    // The list has odd number of nodes, skip the middle node
    right = right.next;
  }
  while (left && right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  
  // Restore the original list by reversing the first half again
  curr = prev;
  prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head.next = prev;
  
  return true;
}

// This function has a time complexity of O(n) and a space complexity of O(1), making it a more efficient solution for checking if a linked list is a palindrome.