package Methods;

public class differentMethods {

	public static void main(String[] args) {

/* Methods are blocks of code that perform a specific task or function.
	They are used to break down a program into smaller, more manageable
	parts. Methods can be called and executed whenever needed, enabling 
	code reusability and modular programming.
*/
		
	// Example 1: Simple Method( No parameters and no return value)
		
//		printmessage();
		
	// Example 2: Method with Parameters and No Return Value (Void Method)
		
//		greet("John");
		
	// Example 3: Method with Parameters and Return Value
		
//		int sum = calculateSum(5,10);
//		System.out.println("Sum: "+ sum);
		
	// Example 4: Static Method
		
		// Calling a static method
		
//		int product = MathUtils.multiply(4, 6);
//		System.out.println(product);
		
	// Example 5: Recursive Methods
		
//		int result =factorial(5);
//		System.out.println(result);
		
		
	// Example 6: Getter and Setter methods
		
		Person person = new Person();
		person.setName("Alice");
		String name = person.getName();
		System.out.println(name);
	}
	//1.
	
//	public static void printmessage() {
//		System.out.println("Message is printed");
		
	/*In this example, we have a method called printMessage() that prints
 "Message is printed" when called. The method is defined with the void keyword 
 since it does not return any value. */
	
	// 2.
	
	/*	public static void greet(String name) {
			System.out.println("Hello, "+ name+ "!"); 
			
	}
	
		In this example, we have a greet() method that takes a name parameter
	and prints a personalized greeting. The method is called with the 
	argument "John".
	*/
	
	//3. 
		
//		public static int calculateSum(int a,int b) {
//			int sum=a+b;
//			return sum;
//		}
	
	// 4. 
	
//	public class MathUtils{
//	public static int multiply(int a, int b) {
//        return a * b;
//    }
//}

	// 5. 
	
//		public static int factorial(int n) {
//			if (n<=1) {
//				return 1;
//			}else {
//				return n*factorial(n-1);
//			}
//		}
	
	// 6.
	
	public static class Person {
	    private String name;

	    public String getName() {
	        return name;
	    }

	    public void setName(String name) {
	        this.name = name;
	    }
	}


	
}
