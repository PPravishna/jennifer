package Loops;

import java.util.Scanner;

public class doWhileLoop {

	public static void main(String[] args) {
// do while loop is another looping construct that allows a block of code
// to be executed repeatedly based on a given boolean condition.

// The do-while loop is a variant of the while loop. This loop will execute 
// the code block at least once, before checking the condition is true, 
// then it will repeat the loop as long as the condition is true.
		
		// Syntax
//		do {
//			//statements
//		}while(condition);

// Example 1- Print Numbers
		
//		int i=0;
//		do {
//			System.out.println(i);
//			i++;
//		}while(i<=5);
		
// Example 2- Summation of Numbers
		
//		int x=1, sum=0;
//		do {
//			sum +=x;
//			x++;
//		}while(x<=10);
//		System.out.println(sum);
		
// Example 3- do-while loop with Post-decrement
		
//		int n=5;
//		do {
//			System.out.println("n:"+ n);
//			n--;
//		}while(n>0);
		
// Example 4- do-while loop for User Input
		
//		Scanner scanner= new Scanner(System.in);
//		int userChoice;
//		do {
//			System.out.println("Enter 1 for Yes or 0 for No:");
//			userChoice= scanner.nextInt();
//		}while(userChoice !=1 && userChoice !=0);
//		System.out.println("You entered:" + userChoice);
//		scanner.close();
		
// Example 5- do-while for menu system
		
		Scanner scanner = new Scanner(System.in);
		int choice;
		do {
			System.out.println("Menu:");
			System.out.println("1. Option 1");
			System.out.println("2. Option 2");
			System.out.println("3. Exit");
			System.out.println("Enter your choice: ");
			choice = scanner.nextInt();
			
			switch(choice) {
			case 1:
				System.out.println("You choosed Option 1");
				break;
			case 2:
				System.out.println("You choosed Option 2");
				break;
			case 3: 
				System.out.println("Exiting...Bye..See you soon");
				break;
			default:
				System.out.println("Invalid choice. Try again.");
			}
		}while(choice !=3);
		scanner.close();
		
	}
	

}
