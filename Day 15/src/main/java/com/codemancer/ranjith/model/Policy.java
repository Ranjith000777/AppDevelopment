package com.codemancer.ranjith.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name = "_policy")
public class Policy {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(length = 50, nullable = false)

    private String policyname;
    
    @Column(length = 50, nullable = false)

    private int policyavailable;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPolicyname() {
		return policyname;
	}

	public void setPolicyname(String policyname) {
		this.policyname = policyname;
	}

	public int getPolicyavailable() {
		return policyavailable;
	}

	public void setPolicyavailable(int policyavailable) {
		this.policyavailable = policyavailable;
	}

	public Policy(Long id, String policyname, int policyavailable) {
		super();
		this.id = id;
		this.policyname = policyname;
		this.policyavailable = policyavailable;
	}
	
	public Policy() {
		
	}
    
    

    
}
