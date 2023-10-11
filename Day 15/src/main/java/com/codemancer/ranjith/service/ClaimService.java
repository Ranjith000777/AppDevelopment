package com.codemancer.ranjith.service;

import java.util.List;

import com.codemancer.ranjith.model.Claim;


public interface ClaimService {

	public Claim saveStudent(Claim student) ;
	public List<Claim> getAllStudent() ;
	public Claim saveFlush(Claim student) ;
}