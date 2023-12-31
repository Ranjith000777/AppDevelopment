package com.codemancer.ranjith.dto.request;

import com.codemancer.ranjith.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {
    private String user;
    private String email;
    private String password;
    private Boolean isEnabled;
    private Role role;
}
