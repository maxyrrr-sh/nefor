import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import authStyles from "../../styles/AuthStyles/Auth.module.css";
import toast from "react-hot-toast";

function SignUp() {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthday: "",
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const url = 'http://127.0.0.1:8000/user/'

      try {
        const response = await axios.post(url, formData);
        //console.log("Data submitted successfully:", response.data);
        localStorage.setItem('isLoggedIn', 'true');

      }
      catch (error) {
        console.error("Error submitting data:", error);
      }
      return navigate('/');
    };
  
    return (
      <>
        <div className={authStyles.formContainer}>
          <form className={authStyles.authForm} onSubmit={handleSubmit}>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                placeholder="Max"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                placeholder="Zimakin"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
            <label>
              Email address:
              <input
                type="email"
                name="email"
                placeholder="max.zimakin@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <label>
              Confirm password:
              <input
                type="password"
                name="confirmPassword"
                placeholder="********"
                value={formData.confirmPassword}                onChange={handleChange}
              />
            </label>
            <label>
              Birthday:
              <input
                type="date"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }

export default SignUp