package com.codemancer.ranjith.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codemancer.ranjith.model.ContactUs;
import com.codemancer.ranjith.repository.ContactUsRepository;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin

public class ContactUsController {
@Autowired
	
	private ContactUsRepository policyRepository ;
	

	@PostMapping("/add")
	public ContactUs add(final @RequestBody ContactUs policy)
	{
		return policyRepository.save(policy) ;
		
	}
	@GetMapping("/get")
	public List<ContactUs> getAllStudent()
	{
		return policyRepository.findAll() ;
	}
	@GetMapping("/gets/{id}")
	public ContactUs getAllStudents(@PathVariable int id)
	{
		return policyRepository.findById(id).orElse(null) ;
	}
	
	@PutMapping("/update/{id}")

	public ContactUs updateContact(@RequestBody ContactUs updatedContact, @PathVariable int id) {

	    return	policyRepository.findById(id)

	            .map(existingContact -> {

	                existingContact.setFirstname(updatedContact.getFirstname());

	                existingContact.setLastname(updatedContact.getLastname());

	                existingContact.setEmail(updatedContact.getEmail());

	                existingContact.setSubject(updatedContact.getSubject());

	                existingContact.setMessage(updatedContact.getMessage());

	                return policyRepository.save(existingContact);

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
