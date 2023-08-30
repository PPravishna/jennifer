package data_types;

import java.util.ArrayList;

public class ArrayListdata {
	public static void main (String[] args) {
		ArrayList abc= new ArrayList();
		System.out.println(abc.add("hello"));
		abc.add("boll");
		abc.add("cat");
		abc.add(123);
		abc.add(true);
		String[] a= {"apple"};
		abc.add(a);
		
		System.out.println(abc);
		
		RestrictedArrayList mem=new
				RestrictedArrayList();
		mem.checking();
		
	}
}

class RestrictedArrayList{
	void checking() {
		ArrayList<String> abc=new ArrayList<String>();
		abc.add("applew1");
		abc.add("applew2");
		abc.add("applew3");
		abc.forEach((item)->{System.out.println("iam working"+item);
		});
		System.out.println("iam working"+abc);
}
}
