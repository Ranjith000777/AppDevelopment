package com.codemancer.ranjith.service;

import java.util.List;

import com.codemancer.ranjith.dto.request.UserRequestDto;
import com.codemancer.ranjith.dto.response.UserResponseDto;

public interface UserService {

	boolean saveUser(UserRequestDto userRequest);

	List<UserResponseDto> getAllUser();

}
