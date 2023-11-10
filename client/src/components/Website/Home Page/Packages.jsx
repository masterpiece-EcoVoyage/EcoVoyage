import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";

const Packages = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Only run the animation once
    });

    axios
      .get("http://localhost:5000/destinations?_limit=3")
      .then((response) => {
        // Handle the response data here
        setDestinations(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="mb-16 mx-3">
      <h1 className="text-sky-700 text-4xl md:text-start md:mx-32 font-bold py-10">
        Travel Packages
      </h1>
        <div className="mx-auto">
            {destinations.length===0?<div></div>: 
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
<div data-aos="fade-right"><article className=" flex flex-col flex-nowrap shadow-lg mx-auto max-w-xl group transform duration-500 hover:-translate-y-1">
              <img
                className="w-full h-64 object-cover"
                src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg"
                alt=""
              />
              <div className="h-auto">
                <div className="p-5 text-start">
                  <h1 className="text-xl font-semibold text-gray-800 mt-4">
                    {destinations[0].title}
                  </h1>
                  <p className="text-md overflow-hidden h-12 text-gray-400 mt-2 leading-relaxed">
                    {destinations[0].destinations_details}
                  </p>
                </div>
                <div className="bg-sky-100 p-5">
                  <div className="sm:flex sm:justify-between">
                    <div>
                      <div className="text-lg text-gray-700">
                        <span className="text-gray-900 font-bold">196 km</span>{" "}
                        from Dhaka
                      </div>
                      <div className="flex items-center"></div>
                    </div>
                    <Link to="/">
                      <button className="mt-3 py-2 px-5 bg-sky-900 hover:bg-white text-white hover:text-sky-900 border border-sky-900 md:text-lg rounded-lg shadow-md">
                        Read more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
            </div>
            <div data-aos="fade-left" className="flex flex-col gap-8 lg:gap-0">
            {destinations.map((destination, id) => (
                <div key={id}>
                    {id===0?<div></div>:
            <article className=" flex flex-nowrap shadow-lg mx-auto max-w-xl group transform duration-500 hover:-translate-y-1 mb-2">
              <img
                className="w-44 h-auto"
                src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg"
                alt=""
              />
              <div className="h-auto">
                <div className="p-5 text-start">
                  <h1 className="text-xl font-semibold text-gray-800 mt-4">
                    {destination.title}
                  </h1>
                  <p className="text-md overflow-hidden h-12 text-gray-400 mt-2 leading-relaxed">
                    {destination.destinations_details}
                  </p>
                </div>
                <div className="bg-sky-100 p-5">
                  <div className="sm:flex sm:justify-between">
                    <div>
                      <div className="text-lg text-gray-700">
                        <span className="text-gray-900 font-bold">196 km</span>{" "}
                        from Dhaka
                      </div>
                      <div className="flex items-center"></div>
                    </div>
                    <Link to="/">
                      <button className="mt-3 py-2 px-5 bg-sky-900 hover:bg-white text-white hover:text-sky-900 border border-sky-900 md:text-lg rounded-lg shadow-md">
                        Read more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </article>}</div>
            ))}
            </div>
            </div>
            }
        </div>
    </div>
  );
};

export default Packages;


/* <div className="flex">
                                    <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                                    <svg className="w-4 h-4 mx-px fill-current text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                  </svg>
                                </div>
                                <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                                    16 reviews
                                </div> */
