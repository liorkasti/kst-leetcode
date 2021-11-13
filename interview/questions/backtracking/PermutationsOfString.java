package interview.questions.backtracking;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class PermutationsOfString {

	// Driver code
	public static void main(String[] args) {
		String s = "aab";

		// printPermutn(s, "");
		System.out.println("distinctPermute: aab");
		System.out.println(distinctPermute(s));
		System.out.println("distinctPermute: abc");
		System.out.println(distinctPermute("abc"));
	}

	/**
	 * 8.4 Write a method to compute all permutations of a string.
	 */
	static void printPermutn(String str, String ans) {

		// If string is empty
		if (str.length() == 0) {
			System.out.print(ans + " ");
			return;
		}

		for (int i = 0; i < str.length(); i++) {

			// ith character of str
			char ch = str.charAt(i);

			// Rest of the string after excluding
			// the ith character
			String ros = str.substring(0, i) + str.substring(i + 1);

			// Recurvise call
			printPermutn(ros, ans + ch);
		}
	}

	// Function that returns true if string 's' is present in the Arraylist
	static boolean isPresent(String s, ArrayList<String> Res) {
		// If present then return true
		for (String str : Res) {
			if (str.equals(s))
				return true;
		} // Not present
		return false;
	}

	// Function to return an ArrayList contains all the distinct permutations of the	// string
	static ArrayList<String> distinctPermute(String str) {

		// If string is empty
		if (str.length() == 0) {
			// Return an empty arraylist
			ArrayList<String> baseRes = new ArrayList<>();
			baseRes.add("");
			return baseRes;
		}

		// Take first character of str
		char ch = str.charAt(0);

		// Rest of the string after excluding the first character
		String restStr = str.substring(1);

		// Recurvise call
		ArrayList<String> prevRes = distinctPermute(restStr);

		// Store the generated sequence into the resultant Arraylist
		ArrayList<String> Res = new ArrayList<>();
		for (String s : prevRes) {
			for (int i = 0; i <= s.length(); i++) {
				String f = s.substring(0, i) + ch + s.substring(i);

				// If the generated string is not already present in the Arraylist
				// Add the generated string to the Arraylist Res.add(f);
				if (!isPresent(f, Res)) // Add the generated string to the
					Res.add(f); // Arraylist
			}
		}

		// Return the resultant arraylist
		return Res;
	}
}

/*
 * 
 * Let�s assume a given string S represented by the letters A1, A2, A3, ... , An
 * To permute set S, we can select the first character, A1, permute the
 * remainder of the string to get a new list. Then, with that new list, we can
 * �push� A1 into each possible position. For example, if our string is �abc�,
 * we would do the following: 1. Let first = �a� and let remainder = �bc� 2. Let
 * list = permute(bc) = {�bc�, �cd�} 3. Push �a� into each location of �bc� (-->
 * �abc�, �bac�, �bca�) and �cb� (--> �acb�, �cab�, �cba�) 4. Return our new
 * list
 * 
 * 
 * public static void main(String[] args) {
 * 
 * String str = "ABC"; int n = str.length(); Permutation permutation = new
 * Permutation(); permutation.permute(str, 0, n-1);
 * 
 * String str = "abc"; // int permutCicles = factorial(str.length()); //
 * System.out.println("The number of permut cicles are: " + permutCicles);
 * 
 * ArrayList<String> list = getPermutations(str);
 * System.out.println("There are " + list.size() + " permutations."); for
 * (String s : list) { System.out.println(s); } }
 * 
 * // SOL A: public static ArrayList<String> getPermutations(String str) { if
 * (str == null) { return null; } ArrayList<String> permutations = new
 * ArrayList<String>(); if (str.length() == 0) { // base case
 * permutations.add(""); return permutations; }
 * 
 * char first = str.charAt(0); // get the first character String remainder =
 * str.substring(1); // remove the first character ArrayList<String> words =
 * getPermutations(remainder); for (String word : words) { for (int j = 0; j <=
 * word.length(); j++) { String s = insertCharAt(word, first, j);
 * permutations.add(s); } } return permutations; }
 * 
 * public static String insertCharAt(String word, char c, int i) { String start
 * = word.substring(0, i); String end = word.substring(i); return start + c +
 * end; }
 * 
 * 
 * // SOL B:
 * 
 * public static ArrayList<String> getPermutations(String str) {
 * 
 * if (str == null) return null;
 * 
 * int len = str.length(); ArrayList<String> permutations = new
 * ArrayList<String>();
 * 
 * if (len == 0) { // base case permutations.add(""); return permutations; }
 * 
 * for (int i = 0; i < len; i++) { //Remove char i and find permutations of
 * remaining characters. String before = str.substring(0, i); String after =
 * str.substring(i + 1, len); ArrayList<String> partials =
 * getPermutations(before + after);
 * 
 * //Prepend char i to each permutation. for (String s : partials) {
 * permutations.add(str.charAt(i) + s); } } return permutations; }
 * 
 * }
 * 
 */
