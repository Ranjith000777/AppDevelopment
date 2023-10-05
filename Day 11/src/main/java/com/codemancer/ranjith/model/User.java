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

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id ;
	@Column(length = 30, nullable = false)
	private String username ;
	@Column(length = 50, nullable = false)
	private String email ;
	@Column(nullable = false)
	private String password ;
	
}
