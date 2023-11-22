import React, { useEffect, useState } from "react";
import axios from "axios";
import Activites from "../Website/Activites";

const Statstics = () => {
  const [users, setUsers] = useState(0);
  const [flights, setFlights] = useState(0);
  const [activities, setActivities] = useState(0);
  const [bookings, setBookings] = useState(0);

  useEffect(() => {
    // fetch users
    axios
      .get(`http://localhost:3999/user`)
      .then((response) => {
        // Handle the response data here
        setUsers(response.data.length);
        // setTypes(response.data.destinations_type);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });

    //   fetch flights
    axios
      .get(`http://localhost:3999/user`)
      .then((response) => {
        // Handle the response data here
        setFlights(response.data.length);
        // setTypes(response.data.destinations_type);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });

    //   fetch Activites
    axios
      .get(`http://localhost:3999/getActivities`)
      .then((response) => {
        // Handle the response data here
        setActivities(response.data.length);
        // setTypes(response.data.destinations_type);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });

    //   fetch bookings
    axios
      .get(`http://localhost:3999/user`)
      .then((response) => {
        setBookings(response.data.length);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-4 flex-wrap py-12 px-4 justify-center items-center">
        <div class="p-4 flex justify-between border border-sky-700 w-full rounded-xl md:w-1/5">
          <div class="bg-clip-border rounded-xl bg-gradient-to-tr from-sky-700 to-sky-900 text-white shadow-sky-900/20 h-12 w-12 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
          </div>
          <div className="text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Participants
            </p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              {users}
            </h4>
          </div>
        </div>
        <div class="p-4 flex justify-between border border-sky-700 w-full rounded-xl md:w-1/5">
          <div class="bg-clip-border rounded-xl bg-gradient-to-tr from-sky-700 to-sky-900 text-white shadow-sky-900/20 h-12 w-12 grid place-items-center">
            <svg
              class="text-white w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path
                d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z"
                transform="rotate(-15 12 12) translate(0 -1)"
              />{" "}
              <line x1="3" y1="21" x2="21" y2="21" />
            </svg>
          </div>
          <div className="text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Flights
            </p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              {flights}
            </h4>
          </div>
        </div>
        <div class="p-4 flex justify-between border border-sky-700 w-full rounded-xl md:w-1/5">
          <div class="bg-clip-border rounded-xl bg-gradient-to-tr from-sky-700 to-sky-900 text-white shadow-sky-900/20 h-12 w-12 grid place-items-center">
            <svg
              class="text-white w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="5" cy="18" r="3" /> <circle cx="19" cy="18" r="3" />{" "}
              <polyline points="12 19 12 15 9 12 14 8 16 11 19 11" />{" "}
              <circle cx="17" cy="5" r="1" />
            </svg>
          </div>
          <div className="text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Activities
            </p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              {activities}
            </h4>
          </div>
        </div>
        <div class="p-4 flex justify-between border border-sky-700 w-full rounded-xl md:w-1/5">
          <div class="bg-clip-border rounded-xl bg-gradient-to-tr from-sky-700 to-sky-900 text-white shadow-sky-900/20 h-12 w-12 grid place-items-center">
            <svg
              class="text-white w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <rect x="4" y="5" width="16" height="16" rx="2" />{" "}
              <line x1="16" y1="3" x2="16" y2="7" />{" "}
              <line x1="8" y1="3" x2="8" y2="7" />{" "}
              <line x1="4" y1="11" x2="20" y2="11" />{" "}
              <rect x="8" y="15" width="2" height="2" />
            </svg>
          </div>
          <div className="text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
              Bookings
            </p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
              {bookings}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statstics;
