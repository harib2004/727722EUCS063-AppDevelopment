package com.example.demo.Service;

import com.example.demo.model.BookingsModel;
import com.example.demo.Repository.BookingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookingsService {

    @Autowired
    private BookingsRepository bookingsRepository;

    public List<BookingsModel> getAllBookings() {
        return bookingsRepository.findAll();
    }

    public Optional<BookingsModel> getBookingById(Long id) {
        return bookingsRepository.findById(id);
    }

    public BookingsModel createBooking(BookingsModel booking) {
        return bookingsRepository.save(booking);
    }

    public BookingsModel updateBooking(Long id, BookingsModel bookingDetails) {
        BookingsModel booking = bookingsRepository.findById(id).orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setUserId(bookingDetails.getUserId());
        booking.setHallId(bookingDetails.getHallId());
        booking.setBookingDate(bookingDetails.getBookingDate());
        booking.setEventDate(bookingDetails.getEventDate());
        booking.setStatus(bookingDetails.getStatus());
        return bookingsRepository.save(booking);
    }

    public void deleteBooking(Long id) {
        BookingsModel booking = bookingsRepository.findById(id).orElseThrow(() -> new RuntimeException("Booking not found"));
        bookingsRepository.delete(booking);
    }
}
