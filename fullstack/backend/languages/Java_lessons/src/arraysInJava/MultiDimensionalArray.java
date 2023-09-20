package arraysInJava;

public class MultiDimensionalArray {

	public static void main(String[] args) {
		
/* Multi-Dimensional Array stores elements in a grid-like structure with
		multiple dimensions such as 2D,3D etc., */

	// 2D Array:-
		
/* The 2D array is an array of arrays, where elements are arranged in rows
 * and columns. It can be visualized as a table or grid.*/
// Example for 2D Array:-
		
//		int [][] matrix= {
//				{1,2,3},
//				{4,5,6},
//				{7,8,9}
//		};
		
	//Accesing
//	 matrix[1][2]
		
		
	// 3D Array:-
		
 /*3D extends concept of 2D array by adding another dimension, forming a
 	cube like structure.
 	
 	In the below example "threeDArray" is a 3D array with two layers,
 	each containing a 2*2 matrix. You can access elements using three 
 	indices, like 'threeDArray' [1][0][1] to access the elements in the 
 	second layer, first row and second column, which is 6. */
		
// Example for 3D Array:-
		
		int [][][] threeDArray= {
				{
					{1,2},
					{3,4}
				},
				{
					{5,6},
					{7,8}
				},
		};
		
		 System.out.println(threeDArray[1][0][1]);
		
		
		
		
		
	}

}
