package com.example.demo.Controller;

import com.example.demo.model.BookingsModel;
import com.example.demo.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingsController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/getbookings")
    public List<BookingsModel> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookingsModel> getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/addbooking")
    public ResponseEntity<BookingsModel> createBooking(@RequestBody BookingsModel bookingModel) {
        BookingsModel createdBooking = bookingService.createBooking(bookingModel);
        return ResponseEntity.ok(createdBooking);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BookingsModel> updateBooking(
            @PathVariable Long id, @RequestBody BookingsModel bookingDetails) {
        return ResponseEntity.ok(bookingService.updateBooking(id, bookingDetails));
    }

    @DeleteMapping("/deletehall/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        bookingService.deleteBooking(id);
        return ResponseEntity.noContent().build();
    }
}
