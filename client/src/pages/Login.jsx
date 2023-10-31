import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    
  });

  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
      console.log(formData);
      try {
        const response = await axios.post('http://localhost:5000/Login', formData);
        history("/");
      } catch (error) {
        console.error('Error:', error);
      }
  }

  return (
    <div className="bg-[#0c4a6e69]">
      <form action="" onSubmit={handleSubmit}>
        <div class="min-h-screen flex justify-center items-center">
          <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div>
              <h1 class="text-3xl text-sky-900 font-bold text-center mb-4 cursor-pointer">
                Log In
              </h1>
              <p class="w-80 text-center text-sm mb-8 font-semibold text-sky-700 tracking-wide cursor-pointer">
              Unlock New Adventures with Your Travel Account
              </p>
            </div>
            <div class="space-y-4">
              <input
                type="text"
                name="email"
                placeholder="Email Addres"
                onChange={handleChange}
                class="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                class="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
              />
            </div>
            <div class="text-center mt-6">
              <button type="submit" class="py-3 w-64 text-xl text-white hover:text-sky-900 bg-sky-900 border-2 hover:bg-white border-sky-900 rounded-2xl">
                Log In
              </button>
              <p class="mt-4 text-sm text-sky-900">
                Don't Have An Account?{" "}
                <Link to={'/signup'}>
                    <span class="underline cursor-pointer"> Sign Up</span>
                </Link>
              </p>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                <Link
                  to="/"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Go back
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
