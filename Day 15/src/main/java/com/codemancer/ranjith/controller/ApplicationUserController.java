package com.codemancer.ranjith.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codemancer.ranjith.model.ApplicationUser;
import com.codemancer.ranjith.repository.ApplicationUserRepository;


@RestController
@RequestMapping("/api/apply")
@CrossOrigin
public class ApplicationUserController {
	@Autowired
	
	private ApplicationUserRepository policyRepository ;
	

	@PostMapping("/add")
	public ApplicationUser add(final @RequestBody ApplicationUser user)
	{
		return policyRepository.save(user) ;
		
	}
	@GetMapping("/get")
	public List<ApplicationUser> getAllStudent()
	{
		return policyRepository.findAll() ;
	}
	@GetMapping("/gets/{id}")
	public ApplicationUser getAllStudents(@PathVariable int id)
	{
		return policyRepository.findById(id).orElse(null) ;
	}
	@PutMapping("/put/{id}")
	ApplicationUser update(@RequestBody ApplicationUser apply, @PathVariable int id)
	{
		return policyRepository.findById(id)
				.map(user->{
					user.setFirstname(apply.getFirstname());
					user.setLastname(apply.getLastname());
					user.setAge(apply.getAge());
					user.setGender(apply.getGender());
					user.setEmail(apply.getEmail());
					user.setPhone(apply.getPhone());
					user.setInsurancetype(apply.getInsurancetype());
					user.setInsuranceplan(apply.getInsuranceplan());
					user.setMartial(apply.getMartial());
					user.setQuestion(apply.getQuestion());
					return policyRepository.save(apply);
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