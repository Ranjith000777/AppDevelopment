package com.codemancer.ranjith.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codemancer.ranjith.model.Policy;
import com.codemancer.ranjith.repository.PolicyRepository;


@RestController
@RequestMapping("/api/policy")
public class PolicyController {
	@Autowired
	
	private PolicyRepository policyRepository ;
	

	@PostMapping("/add")
	public Policy add(final @RequestBody Policy policy)
	{
		return policyRepository.save(policy) ;
		
	}
	@GetMapping("/get")
	public List<Policy> getAllStudent()
	{
		return policyRepository.findAll() ;
	}
	@GetMapping("/gets/{id}")
	public Policy getAllStudents(@PathVariable int id)
	{
		return policyRepository.findById(id).orElse(null) ;
	}
	@PutMapping("/put/{id}")
	public Policy updatePolicy(@RequestBody Policy updatedContact, @PathVariable int id) {

	    return	policyRepository.findById(id)

	            .map(existingPolicy -> {

	                existingPolicy.setPolicyname(updatedContact.getPolicyname());
	                existingPolicy.setPolicyavailable(updatedContact.getPolicyavailable());
	                return policyRepository.save(existingPolicy);
	            })

	            .orElse(null);
	}
	@DeleteMapping("/delete/{id}")
	public String delete(@PathVariable int id)
	{
		policyRepository.deleteById(id) ;
		return "Deleted Successfully" ;
	}
	
}