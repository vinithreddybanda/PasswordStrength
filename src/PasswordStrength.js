import React, { useState } from 'react';
import './PasswordStrength.css';


function PasswordStrength() {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');
    
    const checkStrength = (password) => {
        let count = 0;

        if (password.length >= 8) count++;  // Length check
        if (/[A-Z]/.test(password)) count++;  // Uppercase letter check
        if (/\d/.test(password)) count++;  // Number check
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) count++;  // Special character check

        if (count <= 1) setStrength('Weak');
        else if (count === 2) setStrength('Medium');
        else if (count >= 3) setStrength('Strong');
    };

    const handleChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        checkStrength(newPassword);
    };

    return (
        <div className="password-container">
            <h1>Password Strength Checker</h1>
            <input
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter password"
            />
            <div className={`strength-display ${strength.toLowerCase()}`}>
                {strength ? `Strength: ${strength}` : 'Password Strength'}
            </div>
        </div>
    );
}

export default PasswordStrength;
