package com.codemancer.ranjith.dto.response;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterUserResponse {
	
	private Long uid ;
	private String fullname ;
	private String username ;
	private int age ;
	private String email ;
	private String password ;
	private String confirmpassword ;
	
}
