package leetcode.interview.questions;

public class ListNode {
	// Definition for singly-linked list.
	int val;
	ListNode next;

	ListNode(int x) {
		val = x;
		// next = null;
	}

	static void printList(ListNode head) {

		if (head != null) {
			System.out.print(head.val);
			head = head.next;
		}
		while (head != null) {
			System.out.print(" ->" + head.val);

			head = head.next;
		}

	}

	/*
	 * Given a linked list, swap every two adjacent nodes and return its head.
	 * You may not modify the values in the list's nodes, only nodes itself may
	 * be changed. Example: Given 1->2->3->4, you should return the list as
	 * 2->1->4->3.
	 */
	public static ListNode swapPairs(ListNode head) {

		if (head == null || head.next == null)
			return head;

		swap(head);

		swapPairs(head.next.next);

		return head;
	}

	private static void swap(ListNode head) {

		int temp = head.val;
		head.val = head.next.val;
		head.next.val = temp;
	}

	public static ListNode reverseList(ListNode head) {
		// Java program for reversing the linked list
		ListNode curr = null;
		while (head != null) {
			ListNode previous = head.next;
			head.next = curr;
			curr = head;
			head = previous;
		}
		return curr;
	}

	public static ListNode recursiveReverse(ListNode head) {
		// Java program for reversing the linked list recursively
		if (head == null || head.next == null) {
			return head;
		}
		ListNode newHead = reverseList(head.next);
		head.next.next = head;
		head.next = null;
		return newHead;
	}

	public static void main(String[] args) {

		ListNode head; // = new ListNode();
		head = new ListNode(1);
		head.next = new ListNode(2);
		head.next.next = new ListNode(3);
		head.next.next.next = new ListNode(4);
		head.next.next.next.next = new ListNode(5);

		System.out.println("First head is ");
		printList(head);
		// System.out.println("\nAfter swapPairs: ");
		// swapPairs(head);
		System.out.println("\nAfter reverseList: ");
		reverseList(head);
		printList(head);
	}

}
