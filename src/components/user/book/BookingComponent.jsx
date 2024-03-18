import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../image/FAT-logo.png';
import styles from './Booking.module.css';

const BookingComponent = () => {
  let location = useLocation();
  const data = location.state.card;
  console.log(data);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const serviceId = data.id;

  const navigate = useNavigate();

  const bookService = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/user/book', { userId, serviceId, date, time, description });
      console.log(response.data);
      navigate('/user/mybookings');
    } catch (error) {
      alert(error);
    }
  };
  
  useEffect(() => {console.log(data);}, [data]);
  

  return (
    <div>
      <section className={styles.bookingContainer}>
        <h2>{data.name} and Service</h2>
        <img src={data.image} alt="" />
        <form className={styles.bookingForm} onSubmit={bookService}>
          <input type="date" onChange={(e) => setDate(e.target.value)} required />
          <input type="time" onChange={(e) => setTime(e.target.value)} required />
          <textarea cols="30" rows="10" onChange={(e) => setDescription(e.target.value)} placeholder='Specify the problem' required></textarea>
          <button type='submit'>Book</button>
        </form>
        {/* Add your booking-related elements and content here */}
      </section>
    </div>
  );
};

export default BookingComponent;
