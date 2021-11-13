package interview.questions.backtracking;
import java.awt.Point;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.ArrayDeque;
import java.util.Queue;
import java.util.Scanner;

/**
 * @author Lior Kastenbaum
 * ���� ���� - C, C++ & RT Embedded Programming
 */
public class bestKitchenLocationBSFandDFS {
	
	public static char map3[][] = {	
			{ 'W', 'W', 'W', 'W', 'W' }, 
			{ 'W', 'W', 'W', ' ', 'W' }, 
			{ 'W', 'E', 'W', ' ', 'W' }, 
			{ 'W', 'W', 'W', ' ', 'W' }, 
			{ 'W', ' ', ' ', ' ', 'W' }, 
			{ 'W', 'W', 'W', 'W', 'E' }};
	public static char map2[][] = {	
			{ 'W', 'W', 'W', 'W', 'W' }, 
			{ 'W', ' ', 'E', 'E', 'W' }, 
			{ 'W', ' ', ' ', ' ', 'W' }, 
			{ 'W', ' ', ' ', ' ', 'W' }, 
			{ 'W', 'E', ' ', ' ', 'W' }, 
			{ 'W', 'W', 'W', 'W', 'W' }};
	public static char map1[][] = {	
			{ 'W', 'W', 'W', 'W', 'W' , 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W' }, 
			{ 'W', ' ', 'E', ' ', ' ', ' ', 'W', ' ', 'E', ' ', ' ', ' ', 'W' }, 
			{ 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W' }, 
			{ 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W' }, 
			{ 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W' }, 
			{ 'W', ' ', 'E', ' ', ' ', ' ', 'W', ' ', 'E', ' ', ' ', ' ', 'W' }, 
			{ 'W', 'W', 'W', 'W', 'W' , 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W' }};
	
	// The building floor map
	public static char[][] map;
	
	private static class Node
	{
		// (x, y) represents matrix cell coordinates
		// dist represent its minimum distance from the source
		int x, y, dist;

		Node(int x, int y, int dist) {
			this.x = x;
			this.y = y;
			this.dist = dist;
		}

		@Override
		public String toString() {
			return "Node " + pointToString(new Point(x,y)) + ", distances = " + dist;
		}
		
	};
	
	public static void main(String[] args) {
		
		LoadFromFile("C:\\Users\\user\\workspace\\SQLinkLabs2019\\map.txt");

		Point minDistancePoint = bestKitchenLocation();

		if(minDistancePoint == null){
			System.out.println("The floor plan does not allow for a kitchen to be in a best distances to all employees.");
		}
		else{		
			System.out.println("The best poition for the kitchen is in " + pointToString(minDistancePoint) + ".\n");
			print();
		}
	}
	
	private static void LoadFromFile(String fileLocation){

		File file = new File(fileLocation); 
	    Scanner sc;
		try {
			sc = new Scanner(file);
			int x = 0, y = 0;
			List<String> listOfLines = new ArrayList<String>();
			
			while (sc.hasNextLine()) 
			{
				String line = sc.nextLine();
				y = line.length();
				listOfLines.add(line);				
			}
			
			x = listOfLines.size();
			
			map = new char[x][y];
			for (int i = 0; i < listOfLines.size(); i++) {
				map[i] = listOfLines.get(i).toCharArray();
			} 
			
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}      
	}
	

	// Function return the best kitchen location given a building floor map. best location is the empty space that have the minimal distance to all employees.
 	public static Point bestKitchenLocation() {
		// TODO Exception 
		// TODO Read from file
 		
 		List<Point> employees = new ArrayList<Point>(); 		// list of all employees locations 
 		List<Point> emptySpaces = new ArrayList<Point>(); 		// list of all empty spaces locations 
		List<Node> finalKitchenSpots = new ArrayList<Node>(); 	// list of of all kitchen best locations (if there is more than one)
		List<Node> kitchenSpots = new ArrayList<Node>();		// temp list of of all kitchen locations
 		Point result = new Point(),								// kitchen best location (the output)
 			  minDistPoint = new Point(),						// the shortest spot for kitchen  location 
 			  curEmptySpace = new Point(), 						// current hold the empty space source location
 			  employee = new Point();							// employee hold the employee destination location
 		
 		int sumMinDistance = Integer.MAX_VALUE, 			// minimum distance for the kitchen location
 			distEmptySpaceToEmployee = Integer.MAX_VALUE; 	// minimum distance from empty space to the employee location
 		
		//Mapping the floor to fill data structures for manipulation
 		for (int i = 0; i < map.length-1; i++) {
		    for (int j = 0; j < map[i].length-1; j++) {
		    	char currPos = map[i][j];
		    	curEmptySpace = new Point(i, j);
		        if(currPos == 'W')
		        	continue;
		        else if(currPos == 'E')
		        	employees.add(curEmptySpace);	// fill the employees locations
		        else if(currPos == ' ')
		        	emptySpaces.add(curEmptySpace);	// fill the empty spaces locations
		        else{//TODO: error
		        	System.out.print("Error!");
		        	return null;
		        }
		    }
		}
		
		//Find minimal distance from empty spaces location (source location) to all employees (destination locations)
		for (int i = 0; i < emptySpaces.size(); i++) {
			
			int sumPerEmptySpace = 0;						// sum of all minimum distance from one empty space to all employees locations
			curEmptySpace = emptySpaces.get(i);

			// find sum of steps from empty space location to each employee and sum the steps
			for (int j = 0; j < employees.size(); j++) {

		        employee = employees.get(j);

				// Find shortest path from source (0, 0) to destination (x, y)
//				distEmptySpaceToEmployee = searchPath(curEmptySpace.x, curEmptySpace.y, employee.x, employee.y, 0);
				// BFS
				distEmptySpaceToEmployee = bfs(curEmptySpace.x, curEmptySpace.y, employee.x, employee.y);
	
				sumPerEmptySpace += distEmptySpaceToEmployee;	        
				
//				System.out.println("\n-> Iterate i: " + i + "\n->-> Iterate j: " + j
//						+ "\nsumPerEmptySpace = " + sumPerEmptySpace + " \ndistEmptySpaceToEmployee = " + distEmptySpaceToEmployee);			
				}
			
			if (sumPerEmptySpace <= sumMinDistance){ 	 				
				sumMinDistance = sumPerEmptySpace;
				minDistPoint = curEmptySpace;
				// add node to list with the minimal distance
				kitchenSpots.add(new Node(minDistPoint.x, minDistPoint.y, sumMinDistance));
//				System.out.println("sumMinDistance = " + sumMinDistance + " - sumPerEmptySpace = " + sumPerEmptySpace
//						+ ",\nIterate -> i: " + i);	
			}
		}
		
		if (sumMinDistance < Integer.MAX_VALUE) {
			System.out.println("\nThe shortest distances to all employees \nfrom source to destination has \na total length of " + sumMinDistance + " steps.");			
			int kitchenSpotsLength = kitchenSpots.size();
			for (int k = 0; k < kitchenSpotsLength; k++) {
				Node temp = kitchenSpots.get(k);
				if (temp.dist == sumMinDistance) {
					finalKitchenSpots.add(new Node(temp.x, temp.y, temp.dist));
				}				
			}

			Node resNode = finalKitchenSpots.get(Math.abs(finalKitchenSpots.size() / 2));
			
			result = new Point(resNode.x,resNode.y);
			
			// new map with the kitchen location
			map[result.x][result.y] = 'K';
			
	 		return result;
	 	}else {
			return null;
		}
 	}

	private static int searchPath(int x, int y, int dstX, int dstY, int step) {
		// TODO Exception & check if the employee is surround by walls!

		if(!validStep(x,y)){
				return Integer.MAX_VALUE;
		}else{	        	
			// if destination is found, update min_dist and stop
			if (dstX == x && dstY == y)
			{
	    		return step;
			}
			char currentEmptySpace = map[x][y];

    		// mark node as visited
    		map[x][y] = '#';
    		
    		step = Math.min(searchPath(x+1, y, dstX, dstY, step+1), 
    			   Math.min(searchPath(x-1, y, dstX, dstY, step+1),
    			   Math.min(searchPath(x, y+1, dstX, dstY, step+1),
    					    searchPath(x, y-1, dstX, dstY, step+1))));	        	
    		
			// unmark vistied 
    		map[x][y] = currentEmptySpace;

    		return step;
		}
		

	}
	
	// Find Shortest Possible Route in a matrix map from source point (i, j) to destination point (x, y)
	private static int bfs(int i, int j, int x, int y)
	{
		// construct a matrix to keep track of visited cells
		boolean[][] visited = new boolean[map.length][map[0].length];

		// create an empty queue
		Queue<Node> q = new ArrayDeque<>();

		// mark source cell as visited and enqueue the source node
		visited[i][j] = true;
		q.add(new Node(i, j, 0));

		// stores length of longest path from source to destination
		int minDist = Integer.MAX_VALUE;

		// run till queue is not empty
		while (!q.isEmpty())
		{
			// pop front node from queue and process it
			Node node = q.poll();

			// (i, j) represents current cell and dist stores its
			// minimum distance from the source
			i = node.x;
			j = node.y;
			int dist = node.dist;

			// if destination is found, update min_dist and stop
			if (i == x && j == y)
			{
				minDist = dist;
				break;
			}

			// Below arrays details all 4 possible movements from a cell
			int row[] = { -1, 0, 0, 1 };
			int col[] = { 0, -1, 1, 0 };
			// check for all 4 possible movements from current cell
			// and enqueue each valid movement
			for (int k = 0; k < 4; k++)
			{
		        if(map[i + row[k]][j + col[k]] == 'W')
		        	continue;
				// check if it is possible to go to position (i + row[k], j + col[k]) from current position
				if (isValidPath(visited, i + row[k], j + col[k]))
				{
					// mark next cell as visited and enqueue it
					visited[i + row[k]][j + col[k]] = true;
					q.add(new Node(i + row[k], j + col[k], dist + 1));
				}
			}
		}

		if (minDist != Integer.MAX_VALUE) {
			return minDist;
		}
		else {
			return minDist;
		}
	}	

	// Function to check if it is possible to go to position (row, col) from current position. 
	// The function returns false if (row, col) is not a valid position or has value 0 or it is already visited
	private static boolean isValidPath(boolean[][] visited, int i, int j) {
		return i < map.length && j < map[0].length && i >= 0 && j >= 0 // path in Range  
				&& !visited[i][j] && map[i][j] != 'W'; // valid step 
	}
	
	private static boolean validStep(int i, int j) {
		return i < map.length && j < map[0].length // Path in Range
				&& map[i][j] != '#' && map[i][j] != 'W'; // valid step
	}
	
	
	private static void print() {
		for (int i = 0; i < map.length; i++) {
			for (int j = 0; j < map[i].length; j++) {
				System.out.print(" " + map[i][j] + " ");
			}
			System.out.println();
		}
	}
	
	public static String pointToString(Point p) {
		StringBuilder strPoint = new StringBuilder();
		strPoint.append("(" + p.x + "," + p.y + ")");
		
		return strPoint.toString();
	}
}