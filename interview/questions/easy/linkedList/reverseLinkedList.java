package interview.questions.easy.linkedList;

import java.util.*;
import java.lang.ClassNotFoundException.*;
import java.io.*;

public class reverseLinkedList {

    public static void main(String[] args) {
        /* Start with the empty list. */
        // ListNode list = new ListNode(1,
        // new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new
        // ListNode())))));
        ListNode head; // = new ListNode();
        head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        // Insert the values
        printList(head);
        // Print the LinkedList
        printList(reverseList1(head));
    }

    public static ListNode reverseList1(ListNode head) {
        ListNode prev = null;
        while (head != null) {
            ListNode nxt = head.next;
            head.next = prev;
            prev = head;
            head = nxt;
        }
        return prev;
    }

    public ListNode reverseList2(ListNode head) {
        return helper(head, null);
    }

    private ListNode helper(ListNode head, ListNode node) {
        if (head == null) {
            return node;
        }
        ListNode nxt = head.next;
        head.next = node;
        return helper(nxt, head);
    }

    public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode p = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return p;
    }

    // Solution 1: Iterator using a stack
    public static ListNode reverseListStack(ListNode head) {
        if (head == null)
            return head;
        Stack<ListNode> stack = new Stack<>();
        while (head != null) {
            stack.push(head);
            head = head.next;
        }
        ListNode res = stack.pop();
        ListNode tail = res;
        while (!stack.isEmpty()) {
            tail.next = stack.pop();
            tail = tail.next;
        }
        tail.next = null;
        return res;
    }

    public static ListNode res;

    // Solution 2: Recursive
    public static ListNode reverseListRecursive(ListNode head) {

        if (head == null || head.next == null)
            return head;
        reverse(head).next = null;
        return res;
    }

    public static ListNode reverse(ListNode head) {
        if (head.next == null) {
            res = head;
            return head;
        }
        ListNode tail = reverse(head.next);
        tail.next = head;
        tail = tail.next;
        return tail;
    }

    // Solution 3:In-place
    public static ListNode reverseListInPlace(ListNode head) {
        ListNode tail = head, pre = head, res = head;
        while (tail != null && tail.next != null) {
            res = tail.next;
            tail.next = res.next;
            res.next = pre;
            pre = res;
        }
        return res;
    }

    public static void printList(ListNode list) {
        ListNode currNode = list.head;
        System.out.print("LinkedList: ");
        // Traverse through the LinkedList
        while (currNode != null) {
            // Print the data at current node
            System.out.print(currNode.val + " ");
            // Go to next node
            currNode = currNode.next;
        }
    }
}
