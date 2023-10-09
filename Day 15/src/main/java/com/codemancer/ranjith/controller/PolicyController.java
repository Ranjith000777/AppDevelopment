package com.codemancer.ranjith.controller;


import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;



import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;



import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.RestController;



import com.codemancer.ranjith.model.*;

import com.codemancer.ranjith.repository.PolicyRepository;





@RequestMapping("/api/policy")

@RestController

public class PolicyController {

@Autowired

PolicyRepository repo ;

@PostMapping("/add")

public Policy save(@RequestBody Policy emp)

{

return repo.save(emp) ;

}

@GetMapping("/get")

public List<Policy> get(Policy emp)

{

	return repo.findAll() ;

}

@PutMapping("/update")

public Policy update(@RequestBody Policy emp)

{

return repo.saveAndFlush(emp) ;

}

@DeleteMapping("/delete")

public String delete(@RequestParam long id)

{

	repo.deleteById(id) ;

	return "DELETED SUCCESSFULLY" ;

}

}