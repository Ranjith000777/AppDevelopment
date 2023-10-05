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

import com.codemancer.ranjith.model.RegisterUser;
import com.codemancer.ranjith.repository.RegisterUserRepository;

@RequestMapping("/api/v1/registeruser")
public class RegisterUserController {
	@Autowired
	RegisterUserRepository repo ;
	@PostMapping("/addUser")
	public RegisterUser saveEmployee(@RequestBody RegisterUser user)
	{
	return repo.save(user) ;
	}
	@GetMapping("/get")
	public List<RegisterUser> getEmployee(RegisterUser emp)
	{
		return repo.findAll() ;
	}
	@PutMapping("update")
	public RegisterUser updateEmployee(@RequestBody RegisterUser user)
	{
	return repo.saveAndFlush(user) ;
	}
	@DeleteMapping("/delete")
	public String delete(@RequestParam long uid)
	{
		repo.deleteById(uid) ;
		return "DELETED SUCCESSFULLY" ;
	}
}

