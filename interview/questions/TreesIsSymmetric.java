package interview.questions;

/* Given a binary tree, check whether it is a 
 * mirror of itself (ie, symmetric around its center). */
public class TreesIsSymmetric {

	// Definition for a binary tree node.
	public static class TreeNode {
		int val;
		TreeNode left;
		TreeNode right;

		TreeNode(int x) {
			val = x;
		}
	}

	public static boolean isSymmetric(TreeNode root) {

		if (root == null)
			return true;

		if (root.left == null && root.right == null)
			return true;

		return isSymmetric(root.left, root.right);
	}

	public static boolean isSymmetric(TreeNode left, TreeNode right) {

		if (left == null && right == null) 
	        return true; 
		
		if (left != null && right != null && left.val == right.val)
			return isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left);
		else
			return false;

	}

	// Driver program
	public static void main(String args[]) {
		TreeNode root;
		
		root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(2);
		root.left.left = new TreeNode(3);
		root.left.right = new TreeNode(4);
		root.right.left = new TreeNode(4);
		root.right.right = new TreeNode(3);
		System.out.println(isSymmetric(root));
	}
}
