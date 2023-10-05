package com.codemancer.ranjith.dto.response;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ApplicationUserResponse {
	private String firstname;
	private String lastname ;
	private int age ;
	private String gender ;
    private String email;
    private String phone ;
    private String address ;
    private String martial ;
    private int totalinsurance ;
    private String insurancetype ;
    private String insuranceplan ;
    private String question; 
}
