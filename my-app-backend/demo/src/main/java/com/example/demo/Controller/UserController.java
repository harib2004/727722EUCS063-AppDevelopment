package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.UserRepository;
import com.example.demo.Service.UserService;

@RestController
public class UserController {
    @Autowired
    public UserService service;
    @Autowired
    public UserRepository repo;
}
