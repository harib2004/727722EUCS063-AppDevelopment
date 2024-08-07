package com.example.demo.Controller;

import com.example.demo.model.HallModel;
import com.example.demo.Service.HallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/halls")
public class HallController {

    @Autowired
    private HallService hallService;

    @GetMapping("/gethalls")
    public List<HallModel> getAllHalls() {
        return hallService.getAllHalls();
    }

    @GetMapping("/{id}")
    public ResponseEntity<HallModel> getHallById(@PathVariable int id) {
        return hallService.getHallById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/addhall")
    public ResponseEntity<HallModel> createHall(@RequestBody HallModel hallModel) {
        HallModel createdHall = hallService.createHall(hallModel);
        return ResponseEntity.ok(createdHall);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HallModel> updateHall(
            @PathVariable int id, @RequestBody HallModel hallDetails) {
        HallModel updatedHall = hallService.updateHall(id, hallDetails);
        return ResponseEntity.ok(updatedHall);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHall(@PathVariable int id) {
        hallService.deleteHall(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/location/{city}")
    public List<HallModel> getHallsByLocation(@PathVariable String city) {
        return hallService.getHallsByLocation(city);
    }
}
