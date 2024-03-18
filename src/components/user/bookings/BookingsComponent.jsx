// BookingsComponent.js
import React, { useEffect, useState } from 'react';
import BookingCard from './BookingCard';
import styles from './BookingsComponent.module.css'; // Import CSS module
import axios from 'axios';

const BookingsComponent = () => {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('your_backend_endpoint')
      .then(response => {
        const { bookings } = response.data;
        setBookings(bookings);
      })
      .catch(error => {
        console.error('Error fetching bookings:', error);
      });
  }, []);

  return (
    <div>
      <section className={styles.bookingsContainer}>
        <h1>My Bookings</h1>
        {/* <BookingCard /> */}
        {bookings.map(booking => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </section>
    </div>
  );
}

export default BookingsComponent;
