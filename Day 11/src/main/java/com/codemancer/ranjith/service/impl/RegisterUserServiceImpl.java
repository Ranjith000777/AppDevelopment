package com.codemancer.ranjith.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.codemancer.ranjith.dto.request.RegisterUserRequestDto;
import com.codemancer.ranjith.dto.response.RegisterUserResponseDto;
import com.codemancer.ranjith.model.UserRegister;
import com.codemancer.ranjith.repository.RegisterUserRepository;
import com.codemancer.ranjith.service.RegisterUserService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class RegisterUserServiceImpl implements RegisterUserService{

	private final RegisterUserRepository userRegisterRepository ;
	
	@Override
	public boolean saveUser(RegisterUserRequestDto userRequest) {
		Optional<UserRegister> isUserOptional = userRegisterRepository.existsByEmail(userRequest.getEmail()) ;
		if(isUserOptional.isPresent()) {
			var data = UserRegister.builder()
					.fullname(userRequest.getFullname())
					.username(userRequest.getUsername())
					.age(userRequest.getAge())
					.email(userRequest.getEmail())
					.password(userRequest.getPassword())
					.confirmpassword(userRequest.getConfirmpassword())
					.build() ;
			userRegisterRepository.save(data) ;
			return true ;
		}else
		{
			return false ;
		}
	}

	@Override
	public List<RegisterUserResponseDto> getAllUser() {
		List<UserRegister> userList = userRegisterRepository.findAll() ;
		List<RegisterUserResponseDto> userResponseList = new ArrayList<>() ;
		RegisterUserResponseDto userResponse = new RegisterUserResponseDto() ;
		for(UserRegister user: userList) {
			userResponse.setId(user.getId());
			userResponse.setFullname(user.getFullname());
			userResponse.setUsername(user.getUsername());
			userResponse.setAge(user.getAge()) ;
			userResponse.setEmail(user.getEmail());
			userResponse.setPassword(user.getPassword());
			userResponse.setConfirmpassword(user.getConfirmpassword());
			userResponseList.add(userResponse) ;
		}
		return userResponseList;
	}

}
