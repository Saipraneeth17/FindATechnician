import React from "react";
import logo from "../../../image/FAT-logo.png";
import styles from "./Adminprofile.module.css";
import avtar from "../../../image/tech-avtar.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

const AdminProfile = () => {
  //need to receive user id as prop
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Make an API call to fetch the details from the backend
    axios
      .get("your-backend-url")
      .then((response) => {
        // Assuming response.data contains the details
        setDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching details:", error);
        // setDetails({ firstName:'sai', lastName: 'praneeth', city:'Hyderabad', email:'sai@gmail.com', phone:'9030827241' });
      });
  }, []);
  // return (
  //     <div>
  //         <header className={styles.profileTitle}>
  //             <img src={logo} alt="" />
  //         </header>
  //         <section className={styles.profileDetails}>
  //             <div className={styles.card}>
  //                 <div className={styles.imageContainer}>
  //                     <h1>Profile Details</h1>
  //                     <img src={avtar} alt="Profile Picture" className={styles.profileImage} />

  //                 </div>
  //                 <div className={styles.detailsContainer}>
  //                     <p className={styles.greeting}>Hello {details.firstName} {details.lastName},</p>
  //                     <div className={styles.details}>
  //                         <p><strong>User ID:</strong> {details.id}</p>
  //                         <p><strong>First Name:</strong> {details.firstName}</p>
  //                         <p><strong>Last Name:</strong> {details.lastName}</p>
  //                         <p><strong>City:</strong> {details.city}</p>
  //                         <p><strong>Email:</strong> {details.email}</p>
  //                         <p><strong>Phone:</strong> {details.phone}</p>
  //                     </div>
  //                 </div>
  //             </div>
  //         </section>
  //     </div>
  // );

  return (
    <div>
      <header className={styles.profileTitle}>
        <img src={logo} alt="" />
      </header>
      <section className={styles.profileDetails}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <h1>Profile Details</h1>
            <img
              src={avtar}
              alt="Profile Picture"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.detailsContainer}>
            <p className={styles.greeting}>Hello Akshay DM,</p>
            <div className={styles.details}>
              <p>
                <strong>User ID:</strong> 7438
              </p>
              <p>
                <strong>First Name:</strong> Akshay
              </p>
              <p>
                <strong>Last Name:</strong> DM
              </p>
              <p>
                <strong>City:</strong> Gadag
              </p>
              <p>
                <strong>Email:</strong> akshay@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 9030837241
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminProfile;
