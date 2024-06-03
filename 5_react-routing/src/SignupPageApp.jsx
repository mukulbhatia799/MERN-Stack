import React from 'react';
import { BrowserRouter, Routes, useNavigate } from 'react-router-dom';

function SignupPageApp() {
    const navigate = useNavigate();

    const handleSignup = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Simulate form validation
        const isValid = formData.get('username') && formData.get('password');

        if (isValid) {
            navigate('/welcome'); // Navigate to welcome page on successful signup
        } else {
            navigate('/error'); // Navigate to error page on validation failure
        }
    };

    return (
        <BrowserRouter>
            <Routes>
                <form onSubmit={() => {handleSignup}}>
                    <input type="text" name="username" placeholder="Username" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Sign Up</button>
                </form>
            </Routes>
        </BrowserRouter>
    );
}

export default SignupPageApp;