package com.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Testing {
	
	@GetMapping("/pravishna")
	public String pravi() {
		return "prav";
	}
}
