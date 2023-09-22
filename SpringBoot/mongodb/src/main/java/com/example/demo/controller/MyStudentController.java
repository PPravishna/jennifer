package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.StudentInfoSchema;
import com.example.demo.services.CurdOfStudents;

@CrossOrigin
@RestController
public class MyStudentController {
	
	
	@Autowired
	private CurdOfStudents serviceCon;
	
	@GetMapping("/save-data")
	public String saveStudent(StudentInfoSchema sch) {
//		sch.setName("abc");
		serviceCon.addStudentDaTa(sch,"abc");
		return "data saved";
	}
	
	

	
}


