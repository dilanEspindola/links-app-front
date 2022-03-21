import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RegisterForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios({
        url: "http://localhost:4000/users/register",
        data: {
          username: data.username,
          email: data.email,
          password: data.password,
        },
        method: "POST",
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        placeholder="username"
        id="username"
        name="username"
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        placeholder="email"
        id="email"
        name="email"
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password"
        id="password"
        name="password"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};
