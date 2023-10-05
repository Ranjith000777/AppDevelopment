package com.codemancer.ranjith.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codemancer.ranjith.model.UserRegister;

public interface RegisterUserRepository extends JpaRepository<UserRegister, String>{

	Optional<UserRegister> existsByEmail(String email);
	
}
