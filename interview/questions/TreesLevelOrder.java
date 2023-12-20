package interview.questions;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.swing.RowFilter;

import interview.questions.TreesIsSymmetric.TreeNode;

public class TreesLevelOrder {

	// Definition for a binary tree node.
	public static class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;

		TreeNode(int x) {
			val = x;
		}
	}

	/* Driver program to test above functions */
	public static void main(String args[]) {
		TreeNode tree; // [3,9,20,null,null,15,7],
		tree = new TreeNode(3);
		tree.left = new TreeNode(9);
		tree.right = new TreeNode(20);
		// tree.left.left= new TreeNode();
		// tree.left.right= new TreeNode();
		tree.right.left = new TreeNode(15);
		tree.right.right = new TreeNode(7);

		System.out.println("Level order traversal of binary tree is ");
		List<List<Integer>> list = levelOrder(tree);
		System.out.println(list);
	}

	/*
	 * Given a binary tree, return the level order traversal of its nodes'
	 * values. (ie, from left to right, level by level). For example: Given
	 * binary tree [3,9,20,null,null,15,7]
	 * 
	 * 3 / \ 9 20 / \ 15 7
	 * 
	 * return its level order traversal as: [ [3], [9,20], [15,7] ]
	 */
	public static List<List<Integer>> levelOrder(TreeNode root) {

		List<List<Integer>> result = new ArrayList();
		addNode(result, root, 0);
		return result;
	}

	public static void addNode(List<List<Integer>> result, TreeNode node, int level) {
		if (node == null)
			return;
		if (result.size() <= level) {
			List<Integer> row = new ArrayList();
			row.add(node.val);
			result.add(row);
		} else {
			result.get(level).add(node.val);
		}
		addNode(result, node.left, level + 1);
		addNode(result, node.right, level + 1);
	}
}
