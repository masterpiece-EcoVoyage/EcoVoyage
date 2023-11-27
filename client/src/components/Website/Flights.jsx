import React, { useEffect, useState } from "react";
import axios from "axios";

const Flights = () => {
  const [flights, setFlights] = useState([]);

  const [filterOpen, setFilterOpen] = useState(false);
  const openFilter = () => {
    setFilterOpen(!filterOpen);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    axios
      .get("http://localhost:3999/getFlights")
      .then((response) => {
        // Handle the response data here
        setFlights(response.data);
        // setTypes(response.data.destinations_type);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div
        className={`${
          filterOpen ? "h-auto" : "h-16 overflow-hidden"
        } md:overflow-visible md:h-auto my-16 mx-3 border gap-4 flex-wrap p-3 flex justify-center md:flex-col`}
      >
        <div className="w-full flex justify-between">
          <h2 className="mb-3 text-start text-sky-700 text-xl font-bold">
            Filter
          </h2>
          <svg
            onClick={openFilter}
            class={`w-4 h-auto ${filterOpen ? "hidden" : "block"} md:hidden`}
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
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <polyline points="16 4 20 4 20 8" />{" "}
            <line x1="14" y1="10" x2="20" y2="4" />{" "}
            <polyline points="8 20 4 20 4 16" />{" "}
            <line x1="4" y1="20" x2="10" y2="14" />{" "}
            <polyline points="16 20 20 20 20 16" />{" "}
            <line x1="14" y1="14" x2="20" y2="20" />{" "}
            <polyline points="8 4 4 4 4 8" />{" "}
            <line x1="4" y1="4" x2="10" y2="10" />
          </svg>
          <svg
            onClick={openFilter}
            class={`w-4 h-auto ${filterOpen ? "block" : "hidden"} md:hidden`}
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
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <polyline points="5 9 9 9 9 5" />{" "}
            <line x1="3" y1="3" x2="9" y2="9" />{" "}
            <polyline points="5 15 9 15 9 19" />{" "}
            <line x1="3" y1="21" x2="9" y2="15" />{" "}
            <polyline points="19 9 15 9 15 5" />{" "}
            <line x1="15" y1="9" x2="21" y2="3" />{" "}
            <polyline points="19 15 15 15 15 19" />{" "}
            <line x1="15" y1="15" x2="21" y2="21" />
          </svg>
        </div>
        <div className="w-full">
          <form class="flex items-center">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <input
                type="text"
                id="simple-search"
                class="bg-white border border-gray-300 text-sky-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search branch name..."
              />
            </div>
            <button
              type="submit"
              class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>
        <div className="w-full">
          <p className="mb-3 text-lg text-start">Price</p>
          <input
            type="number"
            step="0.01"
            placeholder="0.00"
            id="first_name"
            className="bg-white border border-gray-300 text-sky-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
        </div>
        <div className="w-full">
          <p className="mb-3 text-lg text-start">Amenities</p>
          <div className="container max-w-full ml-8 mt-6 text-base font-sans">
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-sky-900 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Free Wi-Fi
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-sky-900 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Free parking
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-sky-900 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-checkbox"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Pool
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
