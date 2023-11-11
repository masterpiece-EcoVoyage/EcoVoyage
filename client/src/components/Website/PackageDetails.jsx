import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Testimonials from "./Home Page/Testimonials";

const PackageDetails = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  const handleChange = () => {};
  const handleSubmit = () => {};

  useEffect(() => {
    axios
      .get(`http://localhost:5000/destinations?destinations_id=${id}`)
      .then((response) => {
        // Handle the response data here
        setDestination(response.data[0]);
        // setTypes(response.data.destinations_type);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);
  return (
    <div>
      <div className="w-full h-96 bg-cover bg-[50%] bg-[url('https://cdn.pixabay.com/photo/2017/06/04/16/32/new-york-2371488_960_720.jpg')]"></div>
      <div className="flex flex-col justify-center items-center my-10">
        <div className="w-2/3">
          {destination && (
            <div className="flex flex-col gap-10">
              {/* title */}
              <h1 className="text-sky-900 text-start text-3xl font-bold">
                {destination.title} <span className="text-gray-500 text-xl font-normal">7 Days</span>
              </h1>
              {/* overview */}
              <h5 className="text-start text-xl">
                <span className="text-2xl text-sky-700 font-bold">
                  Overview
                </span>{" "}
                <br />
                {destination.destinations_details}
              </h5>
              {/* Itinerary */}
              <h5 className="text-start text-xl">
                <span className="text-2xl text-sky-700 font-bold">
                  Itinerary
                </span>{" "}
                <br />
              </h5>
              <ol className="text-start text-xl px-5">
                <li className="pb-3">Day 1: Brescia.</li>
                <li className="pb-3">Day 2: Brescia → Franciacorta.</li>
                <li className="pb-3">Day 3: Franciacorta → Lake Iseo. </li>
                <li className="pb-3">Day 4: Monte Isola.</li>
                <li className="pb-3">
                  Day 5: Natural Reserve & S. Pietro in Lamosa.
                </li>
                <li className="pb-3">Day 6: Among Franciacorta vineyards.</li>
                <li>Day 7: Arrivederci!.</li>
              </ol>
              {/* highlights */}
              <h5 className="text-start text-xl">
                <span className="text-2xl text-sky-700 font-bold">
                  Highlights
                </span>{" "}
                <br />
              </h5>
              <ol className="text-start text-xl px-5 list-disc list-inside">
                <li className="pb-3">
                  The magic of climbing Monte Isola to enjoy panoramic view of
                  the Lake.
                </li>
                <li className="pb-3">
                  The excellence of the best Franciacorta D.O.C.G.
                </li>
                <li className="pb-3">The beauty of Franciacorta vineyards.</li>
                <li className="pb-3">
                  Walking tours with environmental hiking guide.
                </li>
              </ol>
              {/* details */}
              <h1 className="text-sky-900 text-start text-3xl font-bold">
                Trip details
              </h1>
              {/* cost */}
              <h5 className="text-2xl text-start text-sky-700 font-bold">
                Cost
              </h5>
              <h5 className="text-start text-xl px-3">209.99 JOD per person</h5>

              {/* inclusion */}
              <h5 className="text-2xl text-start text-sky-700 font-bold">
                Inclusions
              </h5>
              <ol className="text-start text-xl px-5 list-disc list-inside">
                <li className="pb-3">
                  Transfer from and to Milan by private minivan with driver.
                </li>
                <li className="pb-3">
                  6 overnights with breakfast (4-star hotels and agriturismo).
                </li>
                <li className="pb-3">
                  2 dinners at agriturismo restaurant, 1 glass of Franciacorta
                  included.
                </li>
                <li className="pb-3">
                  Environmental Hiking Guide for the entire tour.
                </li>
                <li className="pb-3">Daily luggage transfer.</li>
                <li className="pb-3">
                  Medical Insurance (only for non-Italian citizens).
                </li>
                <li className="pb-3">
                  Italy Destination by Paltours assistance.
                </li>
              </ol>

              {/* exclusions */}
              <h5 className="text-2xl text-start text-sky-700 font-bold">
                Exclusions
              </h5>
              <ol className="text-start text-xl px-5 list-disc list-inside">
                <li className="pb-3">Airfare.</li>
                <li className="pb-3">Visa fees.</li>
                <li className="pb-3">Personal expenses.</li>
              </ol>
              {/* location */}
              <h5 className="text-start text-sky-700 text-2xl font-bold">
                Location
              </h5>
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                // frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217782.0981603825!2d34.446245060239825!3d31.473441914110314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f054e542767%3A0x7ff98dc913046392!2sGaza!5e0!3m2!1sen!2sus!4v1699644333625!5m2!1sen!2sus"
                allowFullScreen
              />
              {/* reviews */}
        <Testimonials />

            <div>
            <h5 className="text-2xl text-start text-sky-700 font-bold">
                Book your trip
              </h5>
              <form action="" onSubmit={handleSubmit}>
                  <div className="min-h-screen flex justify-center items-start md:items-center">
                    <div className="py-12 px-12 w-full">
                      <div className="space-y-4 flex flex-col justify-center items-center">
                        <label className="px-3 self-start">Name</label>
                        <div className="flex w-full gap-5">
                          <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            onChange={handleChange}
                            className="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                          />
                          <input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            onChange={handleChange}
                            className="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                          />
                        </div>
                        <label className="px-3 self-start">Address</label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Address"
                          onChange={handleChange}
                          className="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                        />
                        <label className="px-3 self-start">Phone</label>
                        <input
                          type="number"
                          name="phone"
                          placeholder="Phone"
                          onChange={handleChange}
                          className="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                        />
                        <label className="px-3 self-start">Guests</label>
                        <div className="flex self-start w-1/2 gap-5">
                          <input
                            type="number"
                            name="adults"
                            placeholder="Adults"
                            onChange={handleChange}
                            className="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                          />
                          <input
                            type="number"
                            name="children"
                            placeholder="Children"
                            onChange={handleChange}
                            className="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                          />
                        </div>
                      </div>
                      <div className="text-center mt-6">
                        <button
                          type="submit"
                          className="py-3 w-64 text-xl text-white hover:text-sky-900 bg-sky-900 border-2 hover:bg-white border-sky-900 rounded-2xl"
                        >
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
