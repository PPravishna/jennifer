package com.example.controller;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@GetMapping("/test-string")
	public String test() {
		return "testing is working";
	}
	@GetMapping("/test-char")
	public char testchar() {
		return 's';
	}
	@GetMapping("/test-arraylist")
	public ArrayList testArrayList() {
		var a=new Abc();
		var data=new ArrayList();
		var data2=new HashMap();
		data2.put("a","apple");
		data.add("apple");
		data.add("boll");
		data.add(123);
		data.add('a');
		data.add(data2);
		
		return data;
		
	}
	
	@GetMapping("/register")
	public String register(@RequestParam(defaultValue="Pravi") String name, @RequestParam(defaultValue="email")String email) {
		System.out.println(name+ " "+ email);
		String ne=name+" "+email;
		return ne;
}
	@GetMapping("/test")
	public String test1() {
		return "test";
	}
}
class Abc{}
