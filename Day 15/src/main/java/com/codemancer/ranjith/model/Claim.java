package com.codemancer.ranjith.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name = "_claim")
public class Claim {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(length = 50, nullable = false)

    private String customername;
    
    @Column(length = 50, nullable = false)

    private String customeremail;
    

    
    @Column(length = 50, nullable = false)

    private String status;

	
	
	public Claim(Long id, String customername, String customeremail, String status) {
		super();
		this.id = id;
		this.customername = customername;
		this.customeremail = customeremail;
		this.status = status;
	}



	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getCustomername() {
		return customername;
	}



	public void setCustomername(String customername) {
		this.customername = customername;
	}



	public String getCustomeremail() {
		return customeremail;
	}



	public void setCustomeremail(String customeremail) {
		this.customeremail = customeremail;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}



	public Claim() {
		
	}
}
