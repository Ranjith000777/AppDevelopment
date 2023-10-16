package com.codemancer.ranjith.feedback.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codemancer.ranjith.feedback.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

    Optional<Feedback> findByUsernameAndUseremail(String uname, String uemail);

}
