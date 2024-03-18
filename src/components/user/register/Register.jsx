import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Register.module.css'; // Import CSS module
import logo from '../../../image/FAT-logo.png';

const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [cnfpassword, setCnfpassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== cnfpassword) {
            alert("Passwords don't match!");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/user/register', { firstname, lastname, city, email, phone, password });
            console.log('registered', response.data);
            navigate('/user/login');
        }
        catch (error) {
            alert(error);
        }
    }

    const handleLogin = () => {
        navigate('/user/login');
    }

    return (
        <div className={styles.registerContainer}>
            <div className={styles.rlogo}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.rform}>
                <form className={styles.form} onSubmit={handleRegister}>
                    <p className={styles.title}>Registration</p>
                    <p className={styles.message}>Signup now and get full access to our app.</p>
                    <div className={styles.flex}>
                        <label>
                            <input required type="text" className={styles.input} onChange={(e) => setFirstname(e.target.value)} />
                            <span>Firstname</span>
                        </label>
                        <label>
                            <input required type="text" className={styles.input} onChange={(e) => setLastname(e.target.value)} />
                            <span>Lastname</span>
                        </label>
                    </div>
                    <label>
                        <input required type="text" className={styles.input} onChange={(e) => setCity(e.target.value)} />
                        <span>City</span>
                    </label>
                    <label>
                        <input required type="email" className={styles.input} onChange={(e) => setEmail(e.target.value)} />
                        <span>Email</span>
                    </label>
                    <label>
                        <input required type="text" pattern="[0-9]{10}" className={styles.input} onChange={(e) => setPhone(e.target.value)} />
                        <span>Phone</span>
                    </label>
                    <label>
                        <input required type="password" className={styles.input} onChange={(e) => setPassword(e.target.value)} />
                        <span>Password</span>
                    </label>
                    <label>
                        <input required type="password" className={styles.input} onChange={(e) => setCnfpassword(e.target.value)} />
                        <span>Confirm password</span>
                    </label>
                    <button className={styles.submit}>Register</button>
                    <p className={styles.signin}>
                        Already have an account?
                        <button onClick={handleLogin}>Sign In</button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
