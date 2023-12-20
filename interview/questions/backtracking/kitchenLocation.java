package interview.questions.backtracking;
import java.awt.Point;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Lior Kastenbaum
 * ���� ���� - C, C++ & RT Embedded Programming
 */
public class kitchenLocation {
	public static char map1[][] = {	
			{ 'W', 'W', 'W', 'W', 'W' }, 
			{ 'W', ' ', 'E', 'E', 'W' }, 
			{ 'W', ' ', ' ', ' ', 'W' }, 
			{ 'W', ' ', ' ', ' ', 'W' }, 
			{ 'W', 'E', ' ', ' ', 'W' }, 
			{ 'W', 'W', 'W', 'W', 'W' }};

	public static char map[][] = {	
			{ 'W', 'W', 'W', 'W', 'W' , 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W' }, 
			{ 'W', ' ', 'E', ' ', ' ', ' ', 'W', ' ', 'E', ' ', ' ', ' ', 'W' }, 
			{ 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W' }, 
			{ 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W' }, 
			{ 'W', ' ', ' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W' }, 
			{ 'W', ' ', 'E', ' ', ' ', ' ', 'W', ' ', 'E', ' ', ' ', ' ', 'W' }, 
			{ 'W', 'W', 'W', 'W', 'W' , 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W' }};

	
	public static void main(String[] args) {

		Point minDistancePoint = bestKitchenLocation(map);
		System.out.println("The best empty space to put a kitchen locate in " + pointToString(minDistancePoint));
		print();
	}


	/*
		You are given a building floor map like so: ...
	 */
 	public static Point bestKitchenLocation(char[][] map) {
     	//TODO: exeptions

 		List<Point> employees = new ArrayList<Point>(); 	// list of all employees locations 
 		List<Point> emptySpaces = new ArrayList<Point>(); 	// list of all empty spaces locations
 		
 		Point minDistancePoint = new Point(),				// kitchen location (the output)
 				currentEmptySpace = new Point(), 			// current hold the empty space source location
 				employee = new Point();						// employee hold the employee destination location
 		
 		int minDistance = Integer.MAX_VALUE, 				// minimum distance for the kitchen location
 				bestPath = Integer.MAX_VALUE,				// minimum distance from empty space to the employee location
 				distanceBetweenEmptySpaceAndEmployee = 0, 	// distance from empty space to the employee location
				sumPerEmptySpace = 0;						// sum of all minimum distance from one empty space to all employees locations
		
		//Mapping the floor to fill data structures for manipulation
 		for (int i = 0; i < map.length-1; i++) {
		    for (int j = 0; j < map[i].length-1; j++) {
		    	char currPos = map[i][j];
		    	Point location = new Point(i, j);
		        if(currPos == 'W')
		        	continue;
		        else if(currPos == 'E')
		        	employees.add(location);	// fill the employees locations
		        else if(currPos == ' ')
		        	emptySpaces.add(location);	// fill the empty spaces locations
		        else{//TODO: error
		        	System.out.print("Error!");
		        	return null;
		        }
		    }
		}
		
		//find minimal distance from empty (source location) spaces location to all employees (destination locations)
		for (int i = 0; i < emptySpaces.size(); i++) {
			sumPerEmptySpace = 0;
			currentEmptySpace = emptySpaces.get(i);
			System.out.println("****************************");
			System.out.println("-> emptyspace: " + pointToString(currentEmptySpace) + "-> iteration " + i);
			
			// find sum of steps from empty space location to each employee and sum the steps
			for (int j = 0; j < employees.size(); j++) {
				employee = employees.get(j);
		 	 	distanceBetweenEmptySpaceAndEmployee = searchPath(currentEmptySpace.x, currentEmptySpace.y, employee.x, employee.y, 0);
				sumPerEmptySpace += distanceBetweenEmptySpaceAndEmployee;
				System.out.println("============================");
				System.out.println("->->-> employee: " + pointToString(employee) + "-> iteration " + j + ": "+ distanceBetweenEmptySpaceAndEmployee + " -> sumPerEmptySpace [" + sumPerEmptySpace + "] ");
				System.out.println("============================");
			}

			if (sumPerEmptySpace <= minDistance){ 	 				
				minDistance = sumPerEmptySpace;
				minDistancePoint = currentEmptySpace;
				System.out.println("minDistance: " + minDistance + "sum: " + sumPerEmptySpace);
			}
			System.out.println("****************************");
		}
		// new map with the kitchen location
		map[minDistancePoint.x][minDistancePoint.y] = 'K';
		
 		return minDistancePoint;
 	}

	private static int searchPath(int x, int y, int dstX, int dstY, int step) {
		// TODO Exception & check if the employee is surround by walls!
		char currentEmptySpace = map[x][y];
		Point destination = new Point(dstX,dstY); // init destination point
		Point source = new Point(x,y);			  // init source point
		
//		System.out.println("--------------------------");
//		System.out.println("source: " + pointToString(source) + "-> destination" + pointToString(destination)
//				+ " [steps count till now: " + step 
//				+ "]\nIs source equals destination? " + (source.equals(destination) && currentEmptySpace == 'E'));
	
		if(source.equals(destination) && currentEmptySpace == 'E'){
			//int result = step;
//			System.out.println("result: " + result);
			return step;
		}
		
		if(!validStep(x,y)){
			return Integer.MAX_VALUE;
		}
			
//		print();
		// mark node as visited
		map[x][y] = '#';
		//int curStep=0;
		
		// TODO Exception
        if (validStep(x+1, y)){ // GO DOWN
        	//System.out.println("\n1. GO DOWN-> x: " + (x+1) + ", y: " + y);
        	return searchPath(x+1, y, dstX, dstY, step+1);
        }
		if (validStep(x, y+1)){ // GO RIGHT
			//System.out.println("\n2. GO RIGHT-> x: " + x + ", y: " + (y+1));
			return searchPath(x, y+1, dstX, dstY, step+1);
		}
		if (validStep(x-1, y)){ // GO UP
			//System.out.println("\n3. GO UP-> x: " + (x-1) + ", y: " + y);
			return searchPath(x-1, y, dstX, dstY, step+1);
		}
		if (validStep(x, y-1)){ // GO LEFT
			//System.out.println("\n4. GO LEFT-> x: " + x + ", y: " + (y-1));
			return searchPath(x, y-1, dstX, dstY, step+1);
		}
		
		// unmark vistied 
		map[x][y] = currentEmptySpace;
		
		/*if(curStep < step){
			return curStep;
		}*/
		return step;
	}

	private static boolean validStep(int i, int j) {
		return i < map.length && j < map[0].length // Path in Range
				&& map[i][j] != '#' && map[i][j] != 'W'; // valid step
	}
	
/*	
	private static boolean inRange(int i, int j) {
		return i < map.length && j < map[0].length;
	}
	private static boolean validPath(int i, int j) {
		return map[i][j] != '#' && map[i][j] != 'W';
	}
	*/
	
	private static void print() {
		for (int i = 0; i < map.length; i++) {
			for (int j = 0; j < map[i].length; j++) {
				System.out.print(" " + map[i][j] + " ");
			}
			System.out.println();
		}
	}
	
	private static String pointToString(Point p) {
		StringBuilder strPoint = new StringBuilder();
		strPoint.append("(" + p.x + "," + p.y + ")");
		
		return strPoint.toString();
	}
}