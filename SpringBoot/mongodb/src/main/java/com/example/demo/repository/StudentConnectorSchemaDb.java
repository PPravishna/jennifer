package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.StudentInfoSchema;

public interface StudentConnectorSchemaDb extends MongoRepository<StudentInfoSchema, String> {

}
