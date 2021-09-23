/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.



Example 1:


Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]


Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//  if both lists have no head, then return undefined.
//  create a new list node to contain all values.
//  loop through both lists.
//  compare the head of l1 and the head of l2. if the head of l1 is less than or equal to the head of l2, then insert that node into the created linked list.
//  return the created list.

var mergeTwoLists = function (l1, l2) {
  let sorted = new ListNode(0);
  let sortedHead = sorted;

  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      sorted.next = l1;
      l1 = l1.next;
    } else {
      sorted.next = l2;
      l2 = l2.next;
    }
    sorted = sorted.next;
  }

  if (l1 == null) {
    sorted.next = l2;
  } else {
    sorted.next = l1;
  }

  return sortedHead.next;
};

// var mergeTwoLists = function (l1, l2) {
//     let newList = new ListNode(0);
//     let headOfNewList = newList;

//     while (l1 != null && l2 != null) {
//         if (l1.val < l2.val) {
//             newList.next = l1;
//             l1 = l1.next;
//         } else {
//             newList.next = l2;
//             l2 = l2.next;
//         }
//         newList = newList.next;
//     }

//     if (l1 == null) {
//         newList.next = l2;
//     }
//     else {
//         newList.next = l1;
//     }

//     return headOfNewList.next;
// };
