package com.example.SmartDonate.controller;

import com.example.SmartDonate.entity.User;
import com.example.SmartDonate.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
        User createduser = userService.createUser(user);
        return ResponseEntity.ok(createduser);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserByID(@PathVariable long id){
        return userService.getUserByID(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable long id){
        userService.deleteUserByID(id);
        return ResponseEntity.noContent().build();
    }
}