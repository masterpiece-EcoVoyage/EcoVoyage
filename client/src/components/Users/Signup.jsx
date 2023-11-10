import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    password: "",
  });
  const [confirm, setConfirm] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    if(e.target.name == "confirm_password"){
        setConfirm(e.target.value);
    }else{
        setFormData({
        ...formData,
        [name]: value,
        });
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    // validateForm();
    // if (!errors) {
      // console
      try {
        const response = await axios.post(
          "http://localhost:5000/Signup",
          formData
        );
        history("/");
      } catch (error) {
        console.error("Error:", error);
      }
    // }
  }

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1529718836725-f449d3a52881?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] py-10">
      <form action="" onSubmit={handleSubmit}>
        <div class="min-h-screen flex justify-center items-center">
          <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
            <div className="flex flex-col justify-center">
              <h1 class="text-3xl text-sky-900 font-bold text-center mb-4 cursor-pointer">
                Create An Account
              </h1>
              <p class="w-80 self-center text-center text-sm mb-8 font-semibold text-sky-700 tracking-wide cursor-pointer">
                Embark on Your Journey with Us - Sign Up Today!
              </p>
            </div>
            <div class="space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  onChange={handleChange}
                  class="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  onChange={handleChange}
                  class="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                />
              </div>
              <input
                type="email"
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
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                onChange={handleChange}
                class="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                onChange={handleChange}
                class="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
              />
            </div>
            <div class="text-center mt-6">
              <button
                type="submit"
                class="py-3 w-64 text-xl text-white hover:text-sky-900 bg-sky-900 border-2 hover:bg-white border-sky-900 rounded-2xl"
              >
                Sign Up
              </button>
              <p class="mt-4 text-sm text-sky-900">
                Already Have An Account?{" "}
                <Link to={"/login"}>
                  <span class="underline cursor-pointer"> Log In</span>
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

export default Signup;
