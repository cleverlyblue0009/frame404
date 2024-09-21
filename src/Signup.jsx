import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import './Signup.css';
function Signup(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:27017/register',{name,email,password})
        .then(result => console.log(result))
        .catch(err=> console.log(err))
    }
    return(
        <div className="d-flex justify-content-center align-items-center vh-100 signup-container">
            <div className="bg-white p-3 rounded w-25">
                <form onSubmit={handleSubmit}>
                <h2 className="lol">Lets Get You Started !</h2>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Registration Number</strong>
                    </label>
                    
                    <input
                      type="text"
                      placeholder="Enter Reg. No."
                      autoComplete="off"
                      name="email"
                      className="form-control rounded-0"
                      onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    
                    <input
                      type="text"
                      placeholder="Enter Name"
                      autoComplete="off"
                      name="email"
                      className="form-control rounded-0"
                      onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input
                       type="email"
                       placeholder="Enter Email"
                       autoComplete="off"
                       name="email"
                       className="form-control rounded-0"
                       onChange={(e)=> setEmail(e.target.value)}
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
                       onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <Link to="/payment"  className="btn btn-dark w-100 rounded-0 text-white">
                    Register And Proceed to Payment
                </Link>
                </form>
                <Link to="/login" className="grey-link" >I Already Have an Account</Link>
            </div>
        </div>
    );
}
export default Signup;