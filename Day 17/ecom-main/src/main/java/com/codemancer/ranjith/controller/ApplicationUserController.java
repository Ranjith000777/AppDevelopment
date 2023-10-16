package com.codemancer.ranjith.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codemancer.ranjith.model.ApplicationUser;
import com.codemancer.ranjith.repository.ApplicationUserRepository;


@RestController
@RequestMapping("/api/apply")
@CrossOrigin
public class ApplicationUserController {
@Autowired

private ApplicationUserRepository policyRepository ;


@PostMapping("/add")
public ApplicationUser add(final @RequestBody ApplicationUser user)
{
return policyRepository.save(user) ;

}
@GetMapping("/get")
public List<ApplicationUser> getAllStudent()
{
return policyRepository.findAll() ;
}
@GetMapping("/gets/{id}")
public ApplicationUser getAllStudents(@PathVariable int id)
{
return policyRepository.findById(id).orElse(null) ;
}
@PutMapping("/update/{id}")
public ResponseEntity<ApplicationUser> updateUser(@RequestBody ApplicationUser updatedUser, @PathVariable int id) {
    Optional<ApplicationUser> userOptional = policyRepository.findById(id);

    if (userOptional.isPresent()) {
        ApplicationUser existingUser = userOptional.get();
        existingUser.setFirstname(updatedUser.getFirstname());
        existingUser.setLastname(updatedUser.getLastname());
        existingUser.setAge(updatedUser.getAge());
        existingUser.setGender(updatedUser.getGender());
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setPhone(updatedUser.getPhone());
        existingUser.setInsurancetype(updatedUser.getInsurancetype());
        existingUser.setInsuranceplan(updatedUser.getInsuranceplan());
        existingUser.setMartial(updatedUser.getMartial());
        existingUser.setQuestion(updatedUser.getQuestion());
        policyRepository.save(existingUser);
        return new ResponseEntity<>(existingUser, HttpStatus.OK);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}

@DeleteMapping("/delete/{id}")
public String delete(@PathVariable int id)
{
policyRepository.deleteById(id) ;
return "Deleted Successfully" ;
}

}
