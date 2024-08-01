package com.example.demo.Model;

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
public class HallModel {
    @Id
    @Column(name = "hotel_id")
    private int id;
    private int Hotelname;
    private int Lastname;
    private int Email;
    private int Password;
}
