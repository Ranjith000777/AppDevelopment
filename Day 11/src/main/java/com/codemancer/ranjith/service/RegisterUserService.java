package com.codemancer.ranjith.service;

import java.util.List;

import com.codemancer.ranjith.dto.request.RegisterUserRequestDto;
import com.codemancer.ranjith.dto.response.RegisterUserResponseDto;

public interface RegisterUserService {

	boolean saveUser(RegisterUserRequestDto userRequest);

	List<RegisterUserResponseDto> getAllUser();

}
