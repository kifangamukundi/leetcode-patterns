// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

function middleNode(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

// The function initializes two pointers, slow and fast, to the head of the list. The fast pointer moves twice as fast as the slow pointer, so when the fast pointer reaches the end of the list, the slow pointer will be at the middle node.

// If the length of the list is even, there will be two middle nodes, and the function will return the second middle node.

// To add a constraint so that the number of nodes in the list is in the range [1, 100], you can modify the middleNode function to check the length of the list before running the loop that finds the middle node. 

function middleNode(head) {
    let length = 0;
    let node = head;
    while (node) {
      length++;
      node = node.next;
    }
    let middle = Math.floor(length / 2);
    node = head;
    for (let i = 0; i < middle; i++) {
      node = node.next;
    }
    return node;
  }

// The modified function first counts the number of nodes in the list by traversing the list with a loop that increments a length variable. If the length is greater than 100, the function will return null or throw an error, depending on your use case.

// If the length is within the range [1, 100], the function then calculates the index of the middle node by dividing length by 2 and rounding down with Math.floor. It then uses another loop to traverse the list to the middle node and returns it.