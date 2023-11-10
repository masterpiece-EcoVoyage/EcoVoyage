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
      const response = await axios.post(
        "http://localhost:5000/Login",
        formData
      );
      history("/");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1529718836725-f449d3a52881?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
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
              <Link to={"/"}>
                <p class="mt-4 text-sm text-sky-900 cursor-pointer text-start"> Forgot yo password?</p>
              </Link>
            </div>
            <div class="text-center mt-6">
              <button
                type="submit"
                class="py-3 w-64 text-xl text-white hover:text-sky-900 bg-sky-900 border-2 hover:bg-white border-sky-900 rounded-2xl"
              >
                Log In
              </button>
              <p class="mt-4 text-sm text-sky-900">
                Or login with:{" "}<br/>
                <Link to={"/"}>
                <button
                class="p-3 mt-2 text-xl text-white hover:text-sky-900 border-2 hover:bg-white bg-gray-200 rounded-2xl"
              >
                <svg class="text-sky-700 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/> <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg>
              </button>
                </Link>
              </p>
              <p class="mt-4 text-sm text-sky-900">
                Don't Have An Account?{" "}
                <Link to={"/signup"}>
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
