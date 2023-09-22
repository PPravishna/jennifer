package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.StudentInfoSchema;
import com.example.demo.repository.StudentConnectorSchemaDb;

@Service
public class CurdOfStudents {

	@Autowired
	private StudentConnectorSchemaDb con;
	
	public StudentInfoSchema addStudentDaTa(StudentInfoSchema sch,String a ){
		sch.setName(a);
		sch.setChocalate("kitkat");
		return con.save(sch);
	}
} 
