package com.codemancer.ranjith.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codemancer.ranjith.model.Contact;
import com.codemancer.ranjith.repository.ContactRepository;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin
public class ContactController {


@Autowired

private ContactRepository contactRepository ;


@PostMapping("/add")
public Contact add(final @RequestBody Contact contact)
{
return contactRepository.save(contact) ;

}
@GetMapping("/get")
public List<Contact> getAllStudent()
{
return contactRepository.findAll() ;
}
@GetMapping("/gets/{id}")
public Contact getAllStudents(@PathVariable int id)
{
return contactRepository.findById(id).orElse(null) ;
}
@PutMapping("/update/{id}")
public Contact updateContact(@RequestBody Contact updatedContact, @PathVariable int id) {
    return contactRepository.findById(id)
            .map(existingContact -> {
                existingContact.setFirstname(updatedContact.getFirstname());
                existingContact.setLastname(updatedContact.getLastname());
                existingContact.setEmail(updatedContact.getEmail());
                existingContact.setSubject(updatedContact.getSubject());
                existingContact.setMessage(updatedContact.getMessage());
                return contactRepository.save(existingContact);
            })
            .orElse(null); // You can customize this response if the contact with the given ID is not found
}

@DeleteMapping("/delete/{id}")
public String delete(@PathVariable int id)
{
contactRepository.deleteById(id) ;
return "Deleted Successfully" ;


}
}
