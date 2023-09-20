package Loops;

public class forLoop {

	public static void main(String[] args) {
		// 'for' loop is a control flow statement that allows code to be 
//executed repeatedly based on the given condition.

// When you know how many times you want to loop through a block of code,
// then, use the for loop instead of while loop.
		
//Syntax
//		for(initialization;condition;update) {
//			code to be executed
//		}
		
	//Example 1 -Normal for loop
//		for(int i=0;i<5;i++) {
//			System.out.println(i);	
//			}
//		
		
	// Example 2 - Printing Even numbers
//		for (int i=0; i<=10;i+=2) {
//			System.out.println(i);
//			}
		
	// Example 3- Iterating over an Array
//		int [] Numbers= {1,2,3,4,5};
//		for (int i=0;i<Numbers.length;i++) {
//			System.out.println(i);
//		}
	// Example 4- Nested loops
//		for (int i=1;i<=3;i++) {
//			System.out.println("Week" + " "+ i);
//			for(int j=1;j<=7;j++) {
//				System.out.println("Day"+" "+ j);
//			}
//		}
	//Example 5- Pattern of Stars
// Explanation -- the outer loop decides which number should it print
//		   	   -- the inner loop decides how many times the outer loops 
//   			  number should be printed.

//		for (int i=1;i<=5;i++) {
//			for (int j=1;j<=i;j++) {
//				System.out.print(i);
//			}
//			System.out.println(); 
//		}
		
	//Example 6- Looping through an array
//		int[] numbers = {1, 2, 3, 4, 5};
//		for (int i = 0; i < numbers.length; i++) {
//		    System.out.println("Element at index " + i + ": " + numbers[i]);
//		}
		
	// Example 7- Nested for Loop - Creating a Multiplication Table
		for (int i = 1; i <= 5; i++) {
		    for (int j = 1; j <= 10; j++) {
		        System.out.print(i * j + "\t");
		    }
		    System.out.println();
		}
		
		
		
		
	}

}
