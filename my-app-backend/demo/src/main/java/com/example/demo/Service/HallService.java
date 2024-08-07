package com.example.demo.Service;

import com.example.demo.model.HallModel;
import com.example.demo.Repository.HallsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HallService {

    @Autowired
    private HallsRepository hallRepository;

    public List<HallModel> getAllHalls() {
        return hallRepository.findAll();
    }

    public Optional<HallModel> getHallById(int id) {
        return hallRepository.findById(id);
    }

    public HallModel createHall(HallModel hallModel) {
        return hallRepository.save(hallModel);
    }

    public HallModel updateHall(int id, HallModel hallDetails) {
        HallModel hallModel = hallRepository.findById(id).orElseThrow(() -> new RuntimeException("Hall not found"));
        hallModel.setHallname(hallDetails.getHallname());
        hallModel.setPrice(hallDetails.getPrice());
        hallModel.setCapacity(hallDetails.getCapacity());
        hallModel.setCity(hallDetails.getCity());
        hallModel.setAddress(hallDetails.getAddress());
        hallModel.setDescription(hallDetails.getDescription());
        hallModel.setRating(hallDetails.getRating());
        return hallRepository.save(hallModel);
    }

    public void deleteHall(int id) {
        hallRepository.deleteById(id);
    }

    public List<HallModel> getHallsByLocation(String city) {
        return hallRepository.findByCity(city);
    }
}
