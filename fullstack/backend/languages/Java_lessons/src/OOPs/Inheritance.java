package OOPs;

public class Inheritance {

	public static void main(String[] args) {
// Inheritance is the process of creating a new class from an 
//existing class. The new class inherits all the properties and
//methods of the existing class.
	// It means subclass can use the properties of superclass
	//By using "extends" keyword subclass can use the properties
		// in superclass

	Child ch= new Child();
	System.out.println(ch.pocketMoney);
	}

}
class GParent{
	int pocketMoney=100;
}
class Parent extends GParent{
//	int pocketMoney=100;
}
class Child extends Parent{
//	int pocketMoney=100;
}