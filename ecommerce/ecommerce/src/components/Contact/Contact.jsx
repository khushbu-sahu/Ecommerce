// import React from 'react'

// export default function Contact() {
//   return (
//     <div>Contact</div>
//   )
// }
import React, { useState } from 'react';
import "./Contact.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let nav = useNavigate();

    const formSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/', {
                name: name,
                email: email,
                password: password,
            });

            console.log('Response from server:', response.data);
            alert('Form submitted successfully!');
            nav('/login'); // Navigate to login page after successful submission
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('Failed to submit the form. Please try again.');
        }
    };

    return (
        <div className='paradiv'>
            <form className='contact' onSubmit={formSubmit}>
                <label>Name:</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /><br />

                <label>Email:</label>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /><br />

                <label>Password:</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br />

                <button type='submit'>Submit</button><br />
            </form>
        </div>
    );
};

export default Contact;


