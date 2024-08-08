package com.example.demo.Repository;

import com.example.demo.model.BookingsModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingsRepository extends JpaRepository<BookingsModel, Long> {
}
