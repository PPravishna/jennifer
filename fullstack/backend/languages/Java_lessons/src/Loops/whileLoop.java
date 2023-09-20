package Loops;

import java.util.Scanner;

public class whileLoop {

	public static void main(String[] args) {
// While loop is a control flow statement that repeatedly executes a block
// of code as long as a specified condition is true.
		
	//Syntax
//		   while(condition) {
//			   //statements
//		   }
		
// Example 1- Print Numbers
		
//		int i=1;
//		while(i<=5) {
//			System.out.println(i);
//			i++;
//		}
		
// Example 2- While loop with conditional check
		
//		int temperature= 28;
//		while(temperature> 25) {
//			System.out.println("It's hot! Temperature is " + temperature+ " °C.");
//			temperature--;
//		}
		
// Example 3- While loop with multiple conditions
		
//		int a=0;
//		int b=7;
//		while(a<10 && b>0) {
//			System.out.println("a:" + a +", "+ "b:" + b);
//			a++;
//			b--;
//		}
		
// Example 4- While loop for input validation
		

		Scanner scanner = new Scanner(System.in);
			String input = "";

			while (!input.equals("quit")) {
				System.out.print("Enter a word (or 'quit' to exit): ");
				input = scanner.nextLine();
					System.out.println("You entered: " + input);
				}
		
	
	}
	
}
