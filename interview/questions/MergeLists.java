package interview.questions;

import java.util.LinkedList;


public class MergeLists {

	// Definition for singly-linked list.
	public static class ListNode {
		int val;
		ListNode next;

		ListNode(int x) {
			val = x;
		}
	}

	/*
	 * Merge two sorted linked lists and return it as a new list. The new list
	 * should be made by splicing together the nodes of the first two lists.
	 * Input: 1->2->4, 1->3->4 Output: 1->1->2->3->4->4
	 */
	public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {

		if (l1 == null && l2 == null)
			return null;
		ListNode result = null;
		/* Base cases */
		if (l1 == null)
			return l2;
		if (l2 == null)
			return l1;

		/* Pick either a or b, and recur */
		if (l1.val <= l2.val) {
			result = l1;
			result.next = mergeTwoLists(l1.next, l2);
		} else {
			result = l2;
			result.next = mergeTwoLists(l1, l2.next);
		}

		return result;
	}

	static void printList(ListNode head) {
		while (head != null) {
			System.out.print(head.val + " ");
			head = head.next;
		}
		System.out.println("");
	}

	// Driver Code
	public static void main(String[] args) {

		ListNode result, list1, list2;

		// creating first list
		list1 = new ListNode(1);
		list1.next = new ListNode(2);
		list1.next.next = new ListNode(4);
		System.out.println("First List is ");
		printList(list1);

		// creating seconnd list
		list2 = new ListNode(1);
		list2.next = new ListNode(3);
		list2.next.next = new ListNode(4);
		System.out.println("Second List is ");
		printList(list2);

		// add the two lists and see the result
		result = mergeTwoLists(list1, list2);
		System.out.println("Resultant List is ");
		printList(result);
	}

}
