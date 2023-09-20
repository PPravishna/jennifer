package arraysInJava;

public class JaggedArray {

	public static void main(String[] args) {

/* Jagged Array, also known as an array of arrays, is a multi-dimensional 
 	array in which the length of each array index can differ.*/
		
// Example:-
		/* Creating jagged array
		int [][] jaggedArray=new int[3][];
		jaggedArray[0]= new int[] {1,2,3};
		jaggedArray[1]= new int[] {4,5};
		jaggedArray[1]= new int[] {6,7,8,9}; 
		*/
		
// Printing JaggedArray:-
		
		int[][] jaggedArray= {{1,2,3},{4,5},{6,7,8,9}};
		
		for(int i=0;i<jaggedArray.length;i++) {
			for(int j=0;j<jaggedArray[i].length;j++) {
				System.out.print(jaggedArray[i][j]+ " ");
			}
			System.out.println();
		}
		
	}

}
