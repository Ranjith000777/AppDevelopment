package com.codemancer.ranjith.model;





import jakarta.persistence.Column;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;

import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;

import jakarta.persistence.Table;









@Entity

@Table(name = "_claims")

public class Claims {

	@Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;


    @Column(length = 50, nullable = false)

    private String customer_name;
    

    @Column(length = 50, nullable = false)

    private String customer_email;
    
    
    
    @Column(length = 50, nullable = false)

    private String status;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCustomer_name() {
		return customer_name;
	}

	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}

	public String getCustomer_email() {
		return customer_email;
	}

	public void setCustomer_email(String customer_email) {
		this.customer_email = customer_email;
	}

	
	

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Claims(Long id, String customer_name, String customer_email, String status) {
		super();
		this.id = id;
		this.customer_name = customer_name;
		this.customer_email = customer_email;
		this.status = status;
	}	
    
    public Claims()
    {
    	
    }

}