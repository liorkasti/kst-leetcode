package leetcode.interview.questions;

public class ReverseOrSwapListNodes {
	// static ListNode head;

	// Definition for singly-linked list.
	static class ListNode {
		int val;
		ListNode next;

		ListNode(int x) {
			val = x;
		}
	}
	
	public static void main(String[] args) {

		ListNode head; // = new ListNode();
		head = new ListNode(1);
		head.next = new ListNode(2);
		head.next.next = new ListNode(3);
		head.next.next.next = new ListNode(4);
//		head.next.next.next.next = new ListNode(6);
		System.out.println("First list is ");
		printList(head);
		System.out.println("\nAfter: ");

		swapPairs(head);
		printList(head);

	}

	private static void printList(ListNode head) {
		while (head != null) {
			System.out.print(head.val + " ->");
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

        if(head == null || head.next == null) return head;
        
        swap(head);
        
		swapPairs(head.next.next); 
        
        return head;
	}

	private static void swap(ListNode head) {

		int temp = head.val;
		head.val = head.next.val;
		head.next.val = temp;
		
	}
	
}