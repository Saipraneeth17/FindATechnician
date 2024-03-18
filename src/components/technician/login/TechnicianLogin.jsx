// LoginComponent.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';
import logo from '../../../image/FAT-logo.png';

const TechnicianLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/technician/register');
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/user/login', { email, password });
            console.log('Logged in', response.data);
            navigate('/technician');
        }
        catch (error) {
            alert(error);
        }
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
                <h1>Professional<br />Login</h1>
            </div>
            <div className={styles.lform}>
                <form className={styles.form} onSubmit={handleLogin}>
                    <p className={styles.title}>Login</p>
                    <label>
                        <input required type="email" className={styles.input} onChange={(e) => setEmail(e.target.value)} />
                        <span>Email</span>
                    </label>
                    <label>
                        <input required type="password" className={styles.input} onChange={(e) => setPassword(e.target.value)} />
                        <span>Password</span>
                    </label>
                    <button className={styles.submit}>Log in</button>
                    <p className={styles.signup}>
                        Don't have an account?
                        <button onClick={handleRegister}>Sign Up</button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default TechnicianLogin;
