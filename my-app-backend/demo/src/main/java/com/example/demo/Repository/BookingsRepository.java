package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.BookingsModel;

public interface BookingsRepository extends JpaRepository<BookingsModel,Integer>{

}
