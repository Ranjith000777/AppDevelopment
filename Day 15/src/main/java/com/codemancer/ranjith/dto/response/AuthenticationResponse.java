package com.codemancer.ranjith.dto.response;

import com.codemancer.ranjith.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationResponse {
    private String token;
    private Long uid;
    private Role role;
    private String user ;
    private String email ;
}
