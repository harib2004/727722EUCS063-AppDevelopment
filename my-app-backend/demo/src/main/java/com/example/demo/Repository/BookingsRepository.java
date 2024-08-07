package com.example.demo.Repository;

import com.example.demo.model.BookingsModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingsRepository extends JpaRepository<BookingsModel, Long> {
    // Additional query methods can be defined here if needed
}
