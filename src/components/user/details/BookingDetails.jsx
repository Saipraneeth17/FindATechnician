import React, { useState, useEffect } from 'react';
import styles from './BookingDetails.module.css';
import axios from 'axios';


const BookingDetails = () => {
    const [status, setStatus] = useState('assigned');
    // const [feedback, setFeedback] = useState({ rating:4, comment:"good" });
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {
        // Simulating fetching feedback from backend
        const fetchData = async () => {
            try {
                const response = await axios.get('your-feedback-endpoint-url');// Assuming the response contains rating and comment fields
                // const { rating, comment } = response.data;
                const { rating, comment } = { rating: 5, comment: "superb"};

                if (rating !== undefined && comment !== undefined) {
                    setFeedback({ rating, comment }); // Update feedback state with data from backend
                }
                else {
                    setFeedback(null);
                }
            } catch (error) {
                console.error('Error fetching feedback:', error);
            }
        };

        if (status === 'completed') {
            fetchData(); // Fetch feedback
        }
    }, [status]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const rating = e.target.rating.value;
        const comment = e.target.comment.value;

        try {
            const response = await axios.post('your-rating-db-endpoint-url', { rating, comment });

            if (response.status === 200) {
                setFeedback({ rating, comment });
                // setStatus('submitted');
            } else {
                console.error('Error submitting feedback:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    const handleCompleted = () => {
        setStatus('completed');
    }
    const isCompleted = status === 'completed';

    return (
        <div>

            <section className={styles.bookingDetails}>
                <div className={styles.bookingCard}>
                    <h1>Booking Details</h1>
                    <div className={styles.bookingCardContent}>
                        <p><strong>Type of Service:</strong> AC Service and Repair</p>
                        <p><strong>Date:</strong> March 17, 2024</p>
                        <p><strong>Time:</strong> 7:30 PM</p>
                        <p><strong>Booking ID:</strong> ABC123</p>
                        <p><strong>Technician Name:</strong> John Doe</p>
                        <p><strong>Status:</strong> Assigned</p>
                        <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p><strong>Address:</strong> 123 Main Street</p>
                        <p><strong>City:</strong> Your City</p>
                        {!isCompleted && (
                            <div className={styles.option}>
                                <button className={styles.complete} onClick={handleCompleted}>Completed</button>
                            </div>
                        )}
                    </div>
                </div>
                {isCompleted && (
                    <>
                        {feedback === null && (
                            <form className={styles.feedbackForm} onSubmit={handleSubmit}>
                                <h2>How many stars?</h2>
                                <div className={styles.rating}>
                                    <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5"></label>
                                    <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4"></label>
                                    <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3"></label>
                                    <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2"></label>
                                    <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1"></label>
                                </div>
                                
                                <textarea placeholder="Tell something about the service" id="comment" name="comment" rows="4" cols="50" className={styles.comment} required></textarea>
                                <button type="submit" className={styles.submitButton}>Take stars!!</button>
                            </form>
                        )}
                        {feedback !== null && (
                            <div className={styles.feedbackcard}>
                                <p><strong>Rating:</strong> {feedback.rating}</p>
                                <p><strong>Comment:</strong> {feedback.comment}</p>
                            </div>
                        )}
                    </>
                )}
            </section>
        </div>
    );
}

export default BookingDetails;