package com.example.SmartDonate.repository;

import com.example.SmartDonate.entity.Donation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonationRepository extends JpaRepository<Donation, Long> {
    // Additional custom queries can be defined here if needed
}