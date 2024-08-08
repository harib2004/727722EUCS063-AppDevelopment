package com.example.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookingsModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;
    
    @Column(name = "user_id", nullable = false)
    private int userId;

    @Column(name = "hall_id", nullable = false)
    private int hallId;
    

    @Column(name = "booking_date", nullable = false)
    private LocalDateTime bookingDate;

    @Column(name = "event_date", nullable = false)
    private LocalDateTime eventDate;

    @Column(name = "status", nullable = false)
    private String status;
}
