import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import './Signup.css';
function Login(){
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const   
   handleSubmit = async (e) => {
      e.preventDefault();
      setErrorMessage(""); 
   message
  
      try {
        const loginType = /\S+@\S+\.\S+/.test(identifier) ? "email" : "username";
        const response = await axios.post('http://localhost:27017/register', {
          identifier,
          password,
          loginType,
        });
        console.log("Registration successful:", response.data);
      } catch (err) {
        console.error(err);
        setErrorMessage("An error occurred during registration. Please try again later.");
      }
    };
    return(
    <div className="d-flex justify-content-center align-items-center vh-100 signup-container">
        <div className="bg-white p-3 rounded w-25">
        <h2>Just one more step!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="identifier">
              <strong>Username/Email/Registration Number</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Username, Email, or Registration Number"
              autoComplete="off"
              name="identifier"
              className="form-control rounded-0"
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"   

              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-dark w-100 rounded-0 text-white">
           Login
          </button>
        </form>
        <Link to="/register" className="grey-link">
          I don't have an account
        </Link>
      </div>
    </div>
  );
}
export default Login;