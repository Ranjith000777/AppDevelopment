package com.codemancer.ranjith.repository;



import org.springframework.data.jpa.repository.JpaRepository;





import org.springframework.stereotype.Repository;

import com.codemancer.ranjith.model.*;



@Repository

public interface ApplicationUserRepository extends JpaRepository<ApplicationUser, Integer>{



}