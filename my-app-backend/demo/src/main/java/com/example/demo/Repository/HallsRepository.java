package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.HallModel;

public interface HallsRepository extends JpaRepository<HallModel,Integer> {

}
