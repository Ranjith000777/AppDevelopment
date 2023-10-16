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
import com.codemancer.ranjith.repository.ClaimsRepository;


	

	

	@RequestMapping("/api/claims")

	@RestController

	public class ClaimsController {

	@Autowired

	ClaimsRepository repo ;

	@PostMapping("/add")

	public Claims save(@RequestBody Claims user)

	{

	return repo.save(user) ;

	}

	@GetMapping("/get")

	public List<Claims> get(Claims user)

	{

		return repo.findAll() ;

	}

	@PutMapping("update")

	public Claims update(@RequestBody Claims user)

	{

	return repo.saveAndFlush(user) ;

	}

	@DeleteMapping("/delete")

	public String delete(@RequestParam long id)

	{

		repo.deleteById(id) ;

		return "DELETED SUCCESSFULLY" ;

	}

	

	}