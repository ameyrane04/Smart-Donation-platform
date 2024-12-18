package com.example.SmartDonate.service;

import com.example.SmartDonate.entity.Donation;
import com.example.SmartDonate.repository.DonationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonationService{

    @Autowired
    private DonationRepository donationRepository;

    //create a new donation
    public Donation createDonation(Donation donation){
        return donationRepository.save(donation);
    }

    //get all donations
    public List<Donation> getAllDonations(){
        return donationRepository.findAll();
    }
}