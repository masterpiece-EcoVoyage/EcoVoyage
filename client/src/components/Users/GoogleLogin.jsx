// components/Users/GoogleLogin.jsx

import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const history = useNavigate();

    const handleGoogle = async () => {
        try {
            const response = await axios.get("http://localhost:3999/auth/google");
            console.log(response.data);
            const token = response.data.token;
            console.log('token:' + token);

            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'You have signed in successfully.',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton:
                        'bg-sky-900 hover:bg-white text-white hover:text-sky-900 border border-sky-900 py-2 px-4 rounded',
                },
            });

            // Redirect or perform any other actions after successful login
            // history('/');
        } catch (error) {
            console.error('Sign-in error:', error);

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sign-in failed. Something went wrong.',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton:
                        'bg-sky-900 hover:bg-white text-white hover:text-sky-900 border border-sky-900 py-2 px-4 rounded',
                },
            });

            // Handle errors here
            console.error('Error:', error);
        }
    };

    return (
        <button
            onClick={handleGoogle}
            className="p-3 mt-2 text-xl text-white hover:text-sky-900 border-2 hover:bg-white bg-gray-200 rounded-2xl"
        >
            <svg
                className="text-sky-700 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M17.788 5.108A9 9 0 1021 12h-8" />
            </svg>
        </button>
    );
};

export default GoogleLogin;
