package arraysInJava;

public class ArrayConcept {

	public static void main(String[] args) {
 /*Array is a data structure that allows you to store multiple values of 
 of the same data type in a single variable.
 Arrays are indexed, which means you can access elements by their 
 position or index.*/
		
/* Array in java have a fixed size, which is determined at the 
	time of declaration or initialization. Once the size of an array is 
	defined, it cannot be changed. To add or remove elements dynamically,
	you can use other data structure such as ArrayList.*/
		
		// Syntax
//			dataType[] arrayName;
		
	// Creating an array:-
		
//		int [] numbers= new int[5];
		
	// Initializing an array:-
		
//		int [] numbers= {1,2,3,4,5};
		
	// Accesing an array:-
		
//		int [] numbers= {1,2,3,4,5};
//		System.out.println(numbers[1]); // O/P is 2
//						(OR)
//		int []numbers= {1,2,3,4,5};
//		int secondNumber= numbers[1];
//		System.out.println(secondNumber);
		
	// Modifying Array Elements:-
		
//		int[] numbers= {1,2,3,4,5};
//		numbers[1]=10;
//		System.out.println(numbers[1]);
		
	// Array Length:-
		
//		int[] numbers= {1,2,3,4,5};
//		System.out.println(numbers.length);
		
	// Iterating through an array:-
		
//		int [] numbers= {1,2,3,4,5};
//		for(int i=0;i<numbers.length;i++) {
//			System.out.print(numbers[i]+" ");
//		}
		
	// Array of objects:-
		 
		class Person{
			String name;
			Person(String name){
				this.name=name;
			}
		}
		Person[] people= {
				new Person("Alice"),
				new Person("Bob"),
				new Person("Charlie")
		};
		String bobName= people[1].name;
		System.out.println(bobName);

	// Array with different datatypes:-
		
//		object[] mixedArray = {1, "Hello", 3.14, true};
	// Accessing elements
		
//		int num= (int)mixedArray[0];
//		String greetings= (String) mixedArray[1];
//		double pi= (double) mixedArray[2];
//		boolean isTrue= (boolean) mixedArray[3];
				
		

	}

}
