package com.codemancer.ranjith.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.codemancer.ranjith.model.RegisterUser;

public interface RegisterUserRepository extends JpaRepository<RegisterUser, Long> {

}