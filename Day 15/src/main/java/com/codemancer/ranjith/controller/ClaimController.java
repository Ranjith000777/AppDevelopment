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
import com.codemancer.ranjith.repository.ClaimRepository;






@RequestMapping("/api/claim")

@RestController

public class ClaimController {

@Autowired

ClaimRepository repo ;

@PostMapping("/add")

public Claim save(@RequestBody Claim emp)

{

return repo.save(emp) ;

}

@GetMapping("/get")

public List<Claim> get(Claim emp)

{

	return repo.findAll() ;

}

@PutMapping("/update")

public Claim update(@RequestBody Claim emp)

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