package OOPs;

public class multiLevelInheritance {

	public static void main(String[] args) {
//Multilevel inheritance involves a chain of inheritance, where a 
//derived class serves as the base class for another derived class.
		Doggies doggies =new Doggies();
		System.out.println(doggies.makeSound4);
	}

}
	class Annimals{
		String makeSound3="Annimals makes sound";
	}
	class Mammal extends Annimals{
		String makeSound4="Mammals also make sound";
	}
	class Doggies extends Mammal{
		String makeSound5="Dogs barks";
	}