package com.codemancer.ranjith.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codemancer.ranjith.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

	Optional<User> existsByEmail(String email);
	
}
