package com.example.SmartDonate.controller;

import com.example.SmartDonate.entity.Donation;
import com.example.SmartDonate.service.DonationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/donations")
public class DonationController {

    @Autowired
    private DonationService donationService;

    @PostMapping
    public ResponseEntity<Donation> createDonation(@RequestBody Donation donation){
        Donation createdDonation =  donationService.createDonation(donation);
        return ResponseEntity.ok(createdDonation);
    }

    @GetMapping
    public List<Donation> getAllDonations(){
        return donationService.getAllDonations();
    }
}