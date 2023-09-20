package Loops;

public class continueStatement {

	public static void main(String[] args) {
//  The continue statement used inside loops (such as 'for', 'while', 
// 'do-while') to skip the current iteration and move to the next iteration
// of the loop.
// It is commonly used to control the flow of the loop and skip certain 
// iterations based on a specific condition.
		
// When the 'continue' statement is encountered within a loop, the program
// jumps to the beginning of the loop and evaluates the loops condition
// again. If the condition is true, the loop continues with the next 
// iteration; otherwise, the loop terminates.
		
// Example 1- Skip Even Numbers
		
//		for (int i=0; i<=10;i++) {
//			if (i%2==0) {
//				continue;
//			}
//			System.out.print(i+ " ");
//		}
		
// Example 2 - Skipping specific values in an Array
		
//		int [] numbers= {1,2,-1,4,-3,5};
//		for (int num:numbers) {
//			if(num<0) {
//				continue;
//			}
//			System.out.print(num +" ");
//		}
		
// Example 3- Looping through a string and skipping spaces
		
//		String text ="Hello World!";
//		for (char c : text.toCharArray()) {
//			if(c==' ') {
//				continue;
//			}
//			System.out.print(c);
//		}

// Example 4- In While loop
		
		int i=0;
		while(i<5) {
			i++;
			if(i==4) {
				continue; // Skip iteration when i is 4
			}
			System.out.print(i+" ");
		}
		
		
		
	}

}
