package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentsModel{
    
    @Id
    
    private int paymentId;
    private int booking_id;
    private int price;
    private String paymentMethod;
    private String paymentStatus;
    private String transactionId;
    private int paymentDate;


}

