package Methods;

import java.util.function.Consumer;

public class TypesOfMethods {
	public String t4="iam from another package";
	
public static void main(String[] args) {
	Human vishnu =new Human("yes");
	System.out.println(vishnu.abc());
	System.out.println(vishnu);
}
}

class Human{
    String hands1="there";
    Integer legs;
    boolean face1;
    boolean head;
     Consumer memory=(a)->{};
     Human(String val){
	this.hands1=val;
}
int abc() {
	return 123;
}
String abc1() {
	return "hello";
}
Human humanReturn() {
	return new Human(" ");
}
	
}
