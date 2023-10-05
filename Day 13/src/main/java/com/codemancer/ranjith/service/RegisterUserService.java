package com.codemancer.ranjith.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.codemancer.ranjith.model.RegisterUser;
import com.codemancer.ranjith.repository.RegisterUserRepository;


public class RegisterUserService {
@Autowired
RegisterUserRepository userRepository ;

public RegisterUser saveEmployee(RegisterUser user)
{
	return userRepository.save(user) ;
}

}