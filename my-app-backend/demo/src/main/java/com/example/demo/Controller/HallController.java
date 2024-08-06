package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.HallModel;
import com.example.demo.Service.HallService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class HallController {

    @Autowired
    public HallService service;

    //GET
    @GetMapping("/gethalls")
    public List<HallModel> getHalls() {
        return service.getHalls();
    }
    
    @GetMapping("/halls/{city}")
    public List<HallModel> getHallsByCity(@PathVariable String city) {
        return service.getHallsbyCity(city);
    }
    
    //POST
    @PostMapping("/addhalls")
    public String postMethodName(@RequestBody HallModel model) {
        service.addHall(model);
        return "added";
    }
    
    

}
