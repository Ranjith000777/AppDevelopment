package com.codemancer.ranjith.repository;

import com.codemancer.ranjith.model.ContactUs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactUsRepository extends JpaRepository<ContactUs,Integer> {

}