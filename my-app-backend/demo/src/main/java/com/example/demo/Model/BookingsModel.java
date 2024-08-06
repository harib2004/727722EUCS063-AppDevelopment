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

public class BookingsModel {
      @Id
      
      private int BookingId;
      private int User_id;
      private int Hall_id;
      private int StartTime;
      private int EndTime;
      private int Price;
}
