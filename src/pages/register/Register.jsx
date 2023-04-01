import React from "react";
import "./register.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    country: undefined,
    city: undefined,
    password: undefined,
    phone: undefined,
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/auth/register", credentials);
      alert("account created successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button onClick={handleClick} className="lButton">
          register
        </button>
        <span>
          have an account ? <Link to="/login">login</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
