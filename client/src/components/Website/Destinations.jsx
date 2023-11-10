import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [types, setTypes] = useState(null);
  const [selectedType, setSelectedType] = useState("Select type");

  // dropdown for destination type
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // end of dropdown

  useEffect(() => {
    axios
      .get("http://localhost:5000/destinations?_limit=3")
      .then((response) => {
        // Handle the response data here
        setDestinations(response.data);
        // setTypes(response.data.destinations_type);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    if (destinations.length !== 0) {
      const newTypes = destinations.map(
        (destination) => destination.destinations_type
      );
      setTypes(newTypes);
    }

    if (types !== null) {
      const uniqueArray = [...new Set(types)];
      setTypes(uniqueArray);
    }
  }, [destinations]);

  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="">
        <div className="my-16 mx-3 border gap-4 flex-wrap p-3 flex justify-center md:flex-col">
          <div className="w-full">
            <h2 className="mb-3 text-start text-sky-700 text-xl font-bold">
              Filter
            </h2>
            <p className="text-lg text-start hidden md:block">Refine your search</p>
          </div>
          <hr className="my-6 hidden md:block" />
          <div className="w-full">
            <p className="mb-3 text-lg text-start">Destination type</p>
            <div className="relative inline-block text-left w-full">
              <div>
                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded={menuOpen}
                  aria-haspopup="true"
                  onClick={toggleMenu}
                >
                  {selectedType}
                  <svg
                    className={`-mr-1 h-5 w-5 text-gray-400 transform ${
                      menuOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {menuOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <button
                      onClick={() => {
                        setSelectedType("Select type");
                        toggleMenu();
                      }}
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Select type
                    </button>
                    {types === null ? (
                      <div></div>
                    ) : (
                      types.map((type, id) => (
                        <button
                          key={id}
                          onClick={() => {
                            setSelectedType(type);
                            toggleMenu();
                          }}
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          {type}
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <hr className="my-6 hidden md:block" />
          <div className="w-full">
            <p className="mb-3 text-lg text-start">Price Range</p>
            <input
              type="number"
              id="first_name"
              class="bg-white border border-gray-300 text-sky-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></input>
          </div>{" "}
        </div>
      </div>
      <div className="my-16 mx-8">
        <div className="flex flex-col gap-8">
          {destinations.map((destination, id) => (
            <div key={id}>
              <article className=" flex flex-wrap sm:flex-nowrap shadow-lg border border-sky-200 mx-auto max-w-3xl group transform duration-500 hover:-translate-y-1 mb-2">
                <img
                  className="w-full sm:w-52 h-auto"
                  src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg"
                  alt=""
                />
                <div className="h-auto w-full">
                  <div className="p-5 text-start">
                    <h1 className="text-xl font-semibold text-gray-800 mt-4">
                      {destination.title}
                    </h1>
                    <p className="text-md overflow-hidden h-28 text-gray-400 mt-2 leading-relaxed">
                      {destination.destinations_details}
                    </p>
                  </div>
                  <div className="px-2">
                    <div className="sm:flex sm:justify-end">
                      <Link to="/">
                        <button className="sm:mt-3 my-2 py-2 px-5 bg-sky-900 hover:bg-white text-white hover:text-sky-900 border border-sky-900 md:text-lg rounded-lg shadow-md">
                          Read more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
// needs pagination and get all the data not just 3
