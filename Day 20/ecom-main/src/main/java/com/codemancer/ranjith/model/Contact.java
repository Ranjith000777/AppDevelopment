package com.codemancer.ranjith.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


	@Entity

	@Table(name = "_contact")

	public class Contact {

		@Id

	    @GeneratedValue(strategy = GenerationType.IDENTITY)

	    private int id;



	    @Column(length = 50, nullable = false)

	    private String firstname;

	    

	    @Column(length = 50, nullable = false)

	    private String lastname;
	    
	    @Column(length = 50, nullable = false)

	    private String email;
	    
	    @Column(length = 50, nullable = false)

	    private String subject;
	    
	    @Column(length = 50, nullable = false)

	    private String message;

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

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getSubject() {
			return subject;
		}

		public void setSubject(String subject) {
			this.subject = subject;
		}

		public String getMessage() {
			return message;
		}

		public void setMessage(String message) {
			this.message = message;
		}

		@Override
		public String toString() {
			return "Contact [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
					+ ", subject=" + subject + ", message=" + message + "]";
		}
	    
	    public Contact()
	    {
	    	
	    } 
}
