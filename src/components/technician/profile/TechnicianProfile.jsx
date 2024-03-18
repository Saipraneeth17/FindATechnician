import React from 'react';
import logo from '../../../image/FAT-logo.png';
import styles from './Techprofile.module.css';
import avtar from '../../../image/tech-avtar.jpg';
import axios from 'axios';
import { useState,useEffect } from 'react';

const TechnicianProfile = () => {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        // Make an API call to fetch the details from the backend
        axios.get('your-backend-url')
            .then(response => {
                // Assuming response.data contains the details
                setDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching details:', error);
            });
    }, []);
    return (
        <div>
            <header className={styles.profileTitle}> 
                <img src={logo} alt="" />
            </header>
            <section className={styles.profileDetails}> 
                <div className={styles.card}> 
                    <div className={styles.imageContainer}> 
                        <h1>Profile Details</h1>
                        <img src={avtar} alt="Profile Picture" className={styles.profileImage} />

                    </div>
                    <div className={styles.detailsContainer}>
                        <p className={styles.greeting}>Hello {details.firstName} {details.lastName},</p>
                        <div className={styles.details}> 
                            <p><strong>Technician ID:</strong> {details.id}</p>
                            <p><strong>First Name:</strong> {details.firstName}</p>
                            <p><strong>Last Name:</strong> {details.lastName}</p>
                            <p><strong>City:</strong> {details.city}</p>
                            <p><strong>Email:</strong> {details.email}</p>
                            <p><strong>Phone:</strong> {details.phone}</p>
                            <p><strong>Service Type:</strong> {details.serviceType}</p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TechnicianProfile;