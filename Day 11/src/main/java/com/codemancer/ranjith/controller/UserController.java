package com.codemancer.ranjith.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.codemancer.ranjith.dto.request.UserRequestDto;
import com.codemancer.ranjith.dto.response.UserResponseDto;
import com.codemancer.ranjith.repository.UserRepository;
import com.codemancer.ranjith.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
	
	private final UserService userService ;
	
	@Autowired
	private UserRepository userRepo ;
	
	@PostMapping("/save")
	public ResponseEntity<String> saveUser(@RequestBody UserRequestDto userRequest)
	{
		boolean isDataSaved = userService.saveUser(userRequest) ;
		return isDataSaved ? ResponseEntity.status(200).body("User Added Successfully") : 
			ResponseEntity.status(404).body("Something went wrong");
		
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<UserResponseDto>> getAllUser(){
		List<UserResponseDto> userList = userService.getAllUser() ;
		return userList.size() > 0 ? ResponseEntity.status(200).body(userList) : ResponseEntity.status(404).body(userList) ;
	}

	@DeleteMapping("/delete")
	public String delete(@RequestParam long id)
	{
		userRepo.deleteById(id);
		return "DELETED SUCCESSFULLY" ;
	}
	
}
