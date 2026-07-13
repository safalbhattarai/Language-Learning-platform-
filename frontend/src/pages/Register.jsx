import { useState } from "react";
import API from "../services/api";
import "./Register.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", form);
      alert(res.data.message);
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div className="register-container">
      <div className="overlay">
        <form className="register-form" onSubmit={handleSubmit}>
          <h1>Learn Languages Faster</h1>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <button type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;