package data_types;

import java.util.HashMap;
import java.util.HashSet;

public class HashSetArray {

	public static void main(String[] args) {
	HashMap mem2=new HashMap();
	mem2.put('a',"apple");
	HashSet mem= new HashSet();
	mem.add(mem2);
	mem.add("hello2");
	System.out.println(mem);
	}

}
