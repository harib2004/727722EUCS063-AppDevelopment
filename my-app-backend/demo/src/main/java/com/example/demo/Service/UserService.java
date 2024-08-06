package com.example.demo.Service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.UserModel;
import com.example.demo.Repository.UserRepository;

@Service
public class UserService {

    @Autowired
    public UserRepository repo;

    // public UserModel model;
    
    //GET
    public List<UserModel> getUser(){
        return repo.findAll();
    }

    //POST
    public String addUser(UserModel obj){
        repo.save(obj);
        return "added";
    }
}
