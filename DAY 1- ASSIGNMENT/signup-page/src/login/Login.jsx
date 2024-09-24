import React from "react";  // Correct the import quotes
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {  // Capitalize the component name
  return (
    <div className="addUser">
      <h3>Log in</h3>
      <form className="addUserForm">
        <div className="inputGroup">
         
          <label htmlFor="email">Email</label>
          <input 
          type="email"
          id="email"
          autoComplete="off"
          placeholder="Enter your Email"
          />
          <label htmlFor="name">Password</label>
          <input 
          type="password"
          id="password"
          autoComplete="off"
          placeholder="Enter your Password"
          />
          <button type="submit" class="btn btn-success">Sign Up</button>
        </div>
      </form>
      <div className="login">
      <p>Don't have an account?</p>
      <Link to="/" type="submit" class="btn btn-primary">Sign Up
        </Link>
       </div>
    </div>
  )

} // Also capitalizing for the displayed text};

export default Login;
