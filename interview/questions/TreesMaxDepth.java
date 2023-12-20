package interview.questions;

//Definition for a binary tree node.
public class TreesMaxDepth {

	// Definition for a binary tree node.
	public static class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;

		TreeNode(int x) {
			val = x;
		}

		/*
		 * Given a binary tree, find its maximum depth. The maximum depth is the
		 * number of nodes along the longest path from the root node down to the
		 * farthest leaf node. Note: A leaf is a node with no children.
		 */
		public int maxDepth(TreeNode right2) {
			if (null == right2)
				return 0;

			return 1 + (Math.max(maxDepth(right2.left), maxDepth(right2.right)));
		}

		public static void main(String[] args) {
			TreeNode tree;
			tree = new TreeNode(3);
			tree.left = new TreeNode(9);
			tree.right = new TreeNode(20);
			// tree.left.left = new TreeNode(null);
			// tree.left.right = new TreeNode(null);
			tree.right.left = new TreeNode(15);
			tree.right.right = new TreeNode(17);
			// tree.right.left.left = new TreeNode(16);

			System.out.println("Height of tree is : " + tree.maxDepth(tree));
		}
	}
}
