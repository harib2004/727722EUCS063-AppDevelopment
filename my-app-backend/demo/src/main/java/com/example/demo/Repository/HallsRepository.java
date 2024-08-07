package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.HallModel;

public interface HallsRepository extends JpaRepository<HallModel,Integer> {

    List<HallModel> findByCity(String city);
}
