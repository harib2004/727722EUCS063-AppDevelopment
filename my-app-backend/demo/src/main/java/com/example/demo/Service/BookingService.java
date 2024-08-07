package com.example.demo.Service;

import com.example.demo.model.BookingsModel;
import com.example.demo.Repository.BookingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingsRepository bookingRepository;

    public List<BookingsModel> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Optional<BookingsModel> getBookingById(Long id) {
        return bookingRepository.findById(id);
    }

    public BookingsModel createBooking(BookingsModel bookingModel) {
        return bookingRepository.save(bookingModel);
    }

    public BookingsModel updateBooking(Long id, BookingsModel bookingDetails) {
        BookingsModel bookingModel = bookingRepository.findById(id).orElseThrow(() -> new RuntimeException("Booking not found"));
        bookingModel.setBookingDate(bookingDetails.getBookingDate());
        bookingModel.setEventDate(bookingDetails.getEventDate());
        bookingModel.setStatus(bookingDetails.getStatus());
        bookingModel.setUser(bookingDetails.getUser());
        bookingModel.setHall(bookingDetails.getHall());
        return bookingRepository.save(bookingModel);
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}
