package packageConcept;

import Methods.TypesOfMethods;
import accessModifiers.UnderstandAccessModifiers;

public class CheckingImportandExport {
public static void main(String[] args) {

	//1This is from the same package
	Test num=new Test();
	System.out.println(num.t);
	
	//2 This is from the same package in the static void main
	ExternalClass data=new ExternalClass();
	System.out.println(data.t1);
	
	// 3This is from the same package but out of the static void main
	ExternalClass obj=new ExternalClass();
	ExternalClass.TestWithOutPublic data2=obj.new TestWithOutPublic();
	System.out.println(data2.t3);
	
	//4This is form another package, so we imported it in the above 
	TypesOfMethods data5=new TypesOfMethods();
	System.out.println(data5.t4);

	//5 Access Modifiers
	UnderstandAccessModifiers data4=new UnderstandAccessModifiers();
	System.out.println(data4.getSister());
	data4.setSister(33333);
	System.out.println(data4.getSister());

}


}

