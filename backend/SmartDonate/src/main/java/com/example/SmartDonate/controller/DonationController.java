package com.example.SmartDonate.controller;

import com.example.SmartDonate.entity.Donation;
import com.example.SmartDonate.entity.User;
import com.example.SmartDonate.repository.UserRepository;
import com.example.SmartDonate.service.DonationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/donations")
public class DonationController {

    @Autowired
    private DonationService donationService;
    @Autowired
    private UserRepository userRepository;


    @PostMapping
    public ResponseEntity<Donation> createDonation(@RequestBody Donation donation){
        User user = userRepository.findById(donation.getUser().getId()).orElseThrow(()-> new RuntimeException("user not found"));
        donation.setUser(user);

        Donation createdDonation =  donationService.createDonation(donation);
        return ResponseEntity.ok(createdDonation);
    }

    @GetMapping
    public List<Donation> getAllDonations(){
        return donationService.getAllDonations();
    }
}