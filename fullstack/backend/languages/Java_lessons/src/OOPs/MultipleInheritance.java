package OOPs;

public class MultipleInheritance {

	public static void main(String[] args) {
// Multiple inheritance refers to a scenario where a class inherits
// from more than one superclass. However, Java does not support 
// multiple inheritance of classes. It can only be achieved through
// interfaces.
		Dog1 dog=new Dog1();
		dog.eat();
		dog.sleep();
	}

}
	interface Animal1{
		public void eat();
	}
	interface Mammal1{
		public void sleep();
	}
	class Dog1 implements Animal1,Mammal1{
		public void eat() {
			System.out.println("Dog is eating");
		}
		public void sleep() {
			System.out.println("Dog is sleeping");
		}
	}