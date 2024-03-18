import React from "react";

import styles from "./BookingsComponent.module.css"; // Import CSS module
import { useNavigate } from "react-router-dom";

const BookingCard = ({ booking }) => {
  const navigate = useNavigate();
  const handleView = function (type, id) {
    console.log("clicked");
    // navigate('/user/mybookings/details', { state: { type: type, id:id } });
    navigate("/user/mybookings/details");
  };
  return (
    <div className={styles.bookingCard}>
      <div className={styles.bookingCardImage}>
        <img src={booking.img} alt="AC Service and Repair" />
      </div>
      <div className={styles.bookingCardContent}>
        <span className={styles.cardTitle}>{booking.title}</span>
        <p className={styles.cardText}>Date: {booking.date}</p>
        <p className={styles.cardText}>Status: {booking.status}</p>
        <button className={styles.cardButton} onClick={handleView}>
          View Booking
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
