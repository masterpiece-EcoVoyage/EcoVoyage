import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const DestinationDetails = () => {
  const { type } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/destinations?destinations_type=${type}`)
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
              <h1 className="text-sky-700 text-start text-3xl font-bold">
                {destination.title}
              </h1>
              <h5 className="text-start text-xl">
                {destination.destinations_details}
              </h5>
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
              <h5 className="text-start text-sky-700 text-2xl font-bold">
                Other destinations in Jordan
              </h5>
              <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center mx-auto">
                {/* {destinations.map((destination, id)=>( */}
                {/* <Link key={id} to="/"> */}
                <Link to='/'>
                  <article
                    className="max-w-[20rem] shadow-xl bg-cover bg-center overflow-hidden h-[410px] transform duration-500 hover:-translate-y-2 cursor-pointer group bg-[url('https://afhomeph.com/cdn/shop/files/Website_Banner_Direct_from_the_Factory_1.png?v=1685417210&width=2800')]"
                  >
                    <div className="text-start hover:bg-[#12243a8f] bg-opacity-20 h-full px-5 flex flex-wrap flex-col pt-44 hover:bg-opacity-75 transform duration-300">
                      <h1 className="text-white text-2xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                        {destination.title}
                      </h1>
                      <div className="w-16 h-2 bg-sky-700 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
                      <p className="my-3 py-3 opacity-0 max-h-[100px] overflow-hidden text-white text-xl group-hover:opacity-80 transform duration-500">
                        {destination.destinations_details}
                      </p>
                    </div>
                  </article>
                </Link>
                {/* ))} */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
