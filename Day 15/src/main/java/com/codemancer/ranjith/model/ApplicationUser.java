package com.codemancer.ranjith.model;





import jakarta.persistence.Column;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;

import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;

import jakarta.persistence.Table;

import lombok.AllArgsConstructor;

import lombok.Builder;

import lombok.Data;

import lombok.NoArgsConstructor;







@Entity

@Table(name = "_applicationusers")

public class ApplicationUser {

	@Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;



    @Column(length = 50, nullable = false)

    private String firstname;

    

    @Column(length = 50, nullable = false)

    private String lastname;

    

    @Column(length = 50, nullable = false)

    private int age;

    

    @Column(length = 50, nullable = false)

    private String gender;



    @Column(length = 50, nullable = false)

    private String email;

    

    @Column(length = 50, nullable = false)

    private String phone;

    

    @Column(length = 50, nullable = false)

    private String address;

    

    @Column(length = 50, nullable = false)

    private String martial;

    

    @Column(length = 50, nullable = false)

    private int totalinsurance;

    

    @Column(length = 50, nullable = false)

    private String insurancetype;

    

    @Column(length = 50, nullable = false)

    private String insuranceplan;



    @Column(length = 50, nullable = false)

    private String question;



	public int getId() {

		return id;

	}



	public void setId(int id) {

		this.id = id;

	}



	public String getFirstname() {

		return firstname;

	}



	public void setFirstname(String firstname) {

		this.firstname = firstname;

	}



	public String getLastname() {

		return lastname;

	}



	public void setLastname(String lastname) {

		this.lastname = lastname;

	}



	public int getAge() {

		return age;

	}



	public void setAge(int age) {

		this.age = age;

	}



	public String getGender() {

		return gender;

	}



	public void setGender(String gender) {

		this.gender = gender;

	}



	public String getEmail() {

		return email;

	}



	public void setEmail(String email) {

		this.email = email;

	}



	public String getPhone() {

		return phone;

	}



	public void setPhone(String phone) {

		this.phone = phone;

	}



	public String getAddress() {

		return address;

	}



	public void setAddress(String address) {

		this.address = address;

	}



	public String getMartial() {

		return martial;

	}



	public void setMartial(String martial) {

		this.martial = martial;

	}



	public int getTotalinsurance() {

		return totalinsurance;

	}



	public void setTotalinsurance(int totalinsurance) {

		this.totalinsurance = totalinsurance;

	}



	public String getInsurancetype() {

		return insurancetype;

	}



	public void setInsurancetype(String insurancetype) {

		this.insurancetype = insurancetype;

	}



	public String getInsuranceplan() {

		return insuranceplan;

	}



	public void setInsuranceplan(String insuranceplan) {

		this.insuranceplan = insuranceplan;

	}



	public String getQuestion() {

		return question;

	}



	public void setQuestion(String question) {

		this.question = question;

	}



	public ApplicationUser(int id, String firstname, String lastname, int age, String gender, String email,

			String phone, String address, String martial, int totalinsurance, String insurancetype,

			String insuranceplan, String question) {

		super();

		this.id = id;

		this.firstname = firstname;

		this.lastname = lastname;

		this.age = age;

		this.gender = gender;

		this.email = email;

		this.phone = phone;

		this.address = address;

		this.martial = martial;

		this.totalinsurance = totalinsurance;

		this.insurancetype = insurancetype;

		this.insuranceplan = insuranceplan;

		this.question = question;

	}

	public ApplicationUser() {

		

	}

    

    

}