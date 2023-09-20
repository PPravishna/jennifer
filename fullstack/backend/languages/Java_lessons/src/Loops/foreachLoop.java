package Loops;

import java.util.ArrayList;
import java.util.List;

public class foreachLoop {

	public static void main(String[] args) {
// for-each loop is enhance version of for loop, it is a looping 
// constructor introduced in java 5. It provides a simplified way to
// iterate over elements of an array or a collection without the need for
// explicit indexing or iterator objects.
		
	// Syntax
//		for(dataType item: array/collection) {
//			statements using item
//		}
//					 ----------(OR)----------
//		
//		for (datatype variableName: ArrayName) {
//			//statements using variableName
//		}
		
// Example 1- Iterating over an array
		
//		int []numbers= {1,2,3,4,5};
//		for (int num: numbers) {
//			System.out.println(num);
//		}
		
// Example 2- Iterating over a List
		
//		List <String> fruits=new ArrayList<>();
//		fruits.add("Apple");
//		fruits.add("Banana");
//		fruits.add("Cherry");
//	for(String fruit: fruits) {
//		System.out.println(fruit);
//	}
		
// Example 3- Iterating over an array
		
//		String text= "Hello World!";
//		for (char character : text.toCharArray()) {
//			System.out.print(character+ " ");
//		}
	
// Example 4- Iterating over an array of object
		class Person {
		    private String name;
		    
		    public Person(String name) {
		        this.name = name;
		    }
		    
		    public String getName() {
		        return name;
		    }
		}

		Person[] people = {new Person("Alice"), new Person("Bob"), new Person("Charlie")};
		for (Person person : people) {
		    System.out.println(person.getName());
		}
		

		
	}

}
