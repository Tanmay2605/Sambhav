import React, { useState } from 'react';
import axios from 'axios';
import { FaGoogle } from 'react-icons/fa';
import logo from './assets/Logo.svg'; // Ensure the path is correct

const SignupPage = () => {
  // Define states for email, password, and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle email-password signup
  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent form from reloading page
    try {
      // Payload for the API call
      const payload = {
        email: email,
        password: password,
      };

      // Replace 'YOUR_EMAIL_PASSWORD_SIGNUP_API_ENDPOINT' with your actual API URL from Postman documentation
      const response = await axios.post('YOUR_EMAIL_PASSWORD_SIGNUP_API_ENDPOINT', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Signup successful:', response.data);
      // Handle successful signup, such as redirecting or showing a success message
      alert('Account created successfully!'); // Placeholder for success action
    } catch (error) {
      // Handle error response
      console.error('Signup failed:', error);
      setErrorMessage(error.response ? error.response.data.message : 'Something went wrong!');
    }
  };

  // Function to handle Google Login redirection for both Sign Up and Sign In
  const handleGoogleLogin = () => {
    // Redirect to the Google login API endpoint (replace with your Google login URL)
    window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com';
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="ReachInbox Logo" style={styles.logo} />
      </div>
      <div style={styles.fullWidthLine}></div> {/* Full-width grey line */}
      <div style={styles.content}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Create a new account</h2>

          {/* Google Signup Button */}
          <button style={styles.googleButton} onClick={handleGoogleLogin}>
            <FaGoogle style={{ marginRight: '8px' }} />
            Sign Up with Google
          </button>

          {/* Signup Form */}
          <form onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.createAccountButton}>
              Create an Account
            </button>
          </form>

          {/* Display error message if signup fails */}
          {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}

          <p style={styles.signinText}>
            Already have an account?{' '}
            <span style={styles.signinLink} onClick={handleGoogleLogin}>
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#000',
    position: 'relative',
    overflow: 'hidden',
  },
  logoContainer: {
    position: 'absolute',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
    textAlign: 'center',
  },
  logo: {
    width: '150px',
    height: 'auto',
  },
  fullWidthLine: {
    position: 'absolute',
    top: '60px',
    left: 0,
    width: '100%',
    borderBottom: '1px solid grey',
    zIndex: 0,
  },
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    backgroundColor: '#1f1f1f',
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center',
    color: '#fff',
    zIndex: 1,
    maxWidth: '400px',
    width: '100%',
    boxSizing: 'border-box',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  googleButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    color: '#000',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '20px',
    width: '100%',
    boxSizing: 'border-box',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  createAccountButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '20px',
    width: '100%',
    boxSizing: 'border-box',
  },
  errorMessage: {
    color: 'red',
    marginTop: '10px',
  },
  signinText: {
    color: '#ccc',
  },
  signinLink: {
    color: '#fff',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default SignupPage;
