import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "universal-cookie";
import axios from "axios";

export const LoginForm = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const cookie = new Cookie();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      const res = await axios({
        method: "POST",
        data: {
          username: data.username,
          password: data.password,
        },
        url: "http://localhost:4000/users/login",
      });
      if (res.data.auth) {
        cookie.set("userAuth", res.data.token, {
          expires: new Date(Date.now() + "2d" * 24 * 60 * 60 * 1000),
        });
        navigate("/home-user");
      } else {
        console.log(res.data.auth);
      }
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
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password"
        id="password"
        name="password"
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};
