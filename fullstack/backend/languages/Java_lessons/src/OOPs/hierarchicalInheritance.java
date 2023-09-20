package OOPs;

public class hierarchicalInheritance {


	public static void main(String[] args) {
// Hierarchical inheritance occurs when multiple subclass inherit from
//a single superclass.
		
		Car car=new Car();
		Bike bike=new Bike();
		car.drive();
		bike.ride();
	}

}
class Vehicle{
	public void start() {
		System.out.println("Vehicle is starting");
	}
}
class Car extends Vehicle{
	public void drive() {
		System.out.println("Car is driving");
	}
}
class Bike extends Vehicle{
	public void ride() {
		System.out.println("Bike is riding");
	}
}