// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]

function mergeTwoLists(list1, list2) {
    let mergedList = new ListNode(-1); // dummy node
    let currentNode = mergedList;
  
    while (list1 && list2) {
      if (list1.val < list2.val) {
        currentNode.next = list1;
        list1 = list1.next;
      } else {
        currentNode.next = list2;
        list2 = list2.next;
      }
      currentNode = currentNode.next;
    }
  
    // Append remaining nodes of list1 or list2
    if (list1) {
      currentNode.next = list1;
    }
    if (list2) {
      currentNode.next = list2;
    }
  
    return mergedList.next; // return the actual head node
  }

//   The solution first creates a dummy node to act as the head of the merged list. We then iterate through the two input lists, adding the smaller value to the merged list at each step. Finally, we append any remaining nodes from the first or second list to the end of the merged list. We return the next node after the dummy node, which is the actual head of the merged list.

// Add the following constraints; The number of nodes in both lists is in the range [0, 50]. Both list1 and list2 are sorted in non-decreasing order.

function mergeTwoLists(list1, list2) {
    let mergedList = new ListNode(-1); // dummy node
    let currentNode = mergedList;
  
    while (list1 && list2) {
      if (list1.val < list2.val) {
        currentNode.next = list1;
        list1 = list1.next;
      } else {
        currentNode.next = list2;
        list2 = list2.next;
      }
      currentNode = currentNode.next;
    }
  
    // Append remaining nodes of list1 or list2
    if (list1) {
      currentNode.next = list1;
    }
    if (list2) {
      currentNode.next = list2;
    }
  
    return mergedList.next; // return the actual head node
  }

//   With the added constraints, we don't need to perform any additional validation or checks on the input lists, since we know that they are already sorted in non-decreasing order and that the number of nodes in each list is within the given range of 0 to 50.