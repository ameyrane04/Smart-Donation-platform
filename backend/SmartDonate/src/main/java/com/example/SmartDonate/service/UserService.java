package com.example.SmartDonate.service;

import com.example.SmartDonate.entity.User;
import com.example.SmartDonate.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    //create a new user
    public User createUser(User user){
        return userRepository.save(user);
    }

    //get user by ID
    public Optional<User> getUserByID(long id){
        return userRepository.findById(id);
    }

    //get all users
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    //delete by User
    public void deleteUserByID(Long id){
        userRepository.deleteById(id);
    }
}