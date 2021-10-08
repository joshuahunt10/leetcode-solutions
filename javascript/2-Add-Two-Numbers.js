/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Constraints:

    The number of nodes in each linked list is in the range [1, 100].
    0 <= Node.val <= 9
    It is guaranteed that the list represents a number that does not have leading zeros.

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
 var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    //Final return linked list
    let head = null;
    // temporary value used in while loop
    let pointer = null;

    // Need to worry if there is carry here in case a number goes from 99 -> 100 for instance.
    while(l1 || l2 || carry) {
        // If the value does not exist in the linked list then use zero
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;

        if(pointer) {
            // add new list node to the next value if pointer exists
            pointer.next = new ListNode(sum % 10);
            // Go to the next value to use as the reference for where to add next time
            pointer = pointer.next;
        } else {
            // If no pointer then initialize a node
            pointer = new ListNode(sum % 10);
            // Set head to track with value of pointer as it builds
            head = pointer;
        }

        // Be sure to keep track of any numbers carrying over
        carry = parseInt(sum / 10, 10);

        // increment to the next node in the linked list
        l1 = l1?.next;
        l2 = l2?.next;
    }
    return head;
};