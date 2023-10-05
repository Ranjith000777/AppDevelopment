package com.codemancer.ranjith.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegisterUserRequest {
	private String fullname;
    private String username;
    private int age ;
    private String email ;
    private String password;
    private String role;
}
