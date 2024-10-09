import React, { useEffect } from 'react';
import { startFirebaseUI } from '../services/auth';
import '../styles/styles.css'; // Import the CSS file

const Login = () => {
    useEffect(() => {
        startFirebaseUI('#firebaseui-auth-container');
    }, []);

    return (
        <div className="container">
            <h2>Login</h2>
            <div id="firebaseui-auth-container"></div>
        </div>
    );
};

export default Login;
