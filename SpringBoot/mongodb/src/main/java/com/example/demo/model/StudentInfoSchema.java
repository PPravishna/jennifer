package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="students-info")

public class StudentInfoSchema {

private	String name;
private String chocalate;

public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getChocalate() {
	return chocalate;
}
public void setChocalate(String chocalate) {
	this.chocalate = chocalate;
}
}

