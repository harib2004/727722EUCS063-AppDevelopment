package com.example.demo.Controller;

import com.example.demo.model.BookingsModel;
import com.example.demo.Service.BookingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingsController {

    @Autowired
    private BookingsService bookingsService;

    @GetMapping("/getbookings")
    public List<BookingsModel> getAllBookings() {
        return bookingsService.getAllBookings();
    }

    @GetMapping("getbookingsid/{id}")
    public ResponseEntity<BookingsModel> getBookingById(@PathVariable Long id) {
        return bookingsService.getBookingById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/addbooking")
    public BookingsModel createBooking(@RequestBody BookingsModel booking) {
        return bookingsService.createBooking(booking);
    }

    @DeleteMapping("deletebooking/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        try {
            bookingsService.deleteBooking(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
