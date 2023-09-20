package OOPs;

public class singleInheritance {

	public static void main(String[] args) {
	Animal animal=new Animal();
	System.out.println(animal.makeSound1);
	Dog dog =new Dog();
	System.out.println(dog.makeSound2);

	}
	
}
 	class Animal{
 		String makeSound1="Animals makes sound";
 	}
 	class Dog extends Animal{
 		String makeSound2="Dog barks";
 	}

