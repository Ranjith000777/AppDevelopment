package com.codemancer.ranjith.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PolicyRequest {
	
	    private String policyame;
	    private int policyavailable;
	}

