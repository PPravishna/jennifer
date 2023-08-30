package Methods;

public class TypesOfMethods {
public static void main(String[] args) {
	Human vishnu =new Human("yes");
	System.out.println(vishnu.abc());
}
}
class Human{
String hands1="there";
Integer legs;
boolean head;
Human(String val){
	this.hands1=val;
}
int abc() {
	return 123;
}
	
}
