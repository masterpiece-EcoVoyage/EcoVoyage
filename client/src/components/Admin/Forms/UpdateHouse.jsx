import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateHouse = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3999/destinations`)
      .then((response) => {
        // Handle the response data here
        setFormData(response.data[0]);
        // setTypes(response.data.destinations_type);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
    console.log(formData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name==="image"){
        setFormData({
            ...formData,
            [name]: e.target.files,
          });
    }else{
    setFormData({
      ...formData,
      [name]: value,
    });}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center lg:ml-28 h-full w-full">
        <div className="lg:w-2/3 w-full bg-white p-6 rounded shadow-lg h-auto m-6">
          <form action="" onSubmit={handleSubmit}>
            <div className="p-6 w-full">
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl text-sky-900 font-bold text-center mb-4 cursor-pointer">
                  Update Accommodation
                </h1>
              </div>
              <div className="space-y-4">
                <div className="text-start">
                  <label
                    class="block mb-2 text-sm font-medium text-sky-900"
                    for="multiple_files"
                  >
                    Upload Image
                  </label>
                  <input
                    class="block w-full text-md file:bg-sky-900 file:hover:bg-white file:border-sky-900 file:text-white file:hover:text-sky-900  text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none file:py-2 file:px-4"
                    name="image"
                    onChange={(e) => handleChange(e)}
                    type="file"
                    multiple
                  />
                </div>
                <div className="text-start">
                  <label className="text-sm font-medium text-sky-900">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder="Place Name"
                    onChange={(e) => handleChange(e)}
                    required
                    className="block text-sm py-3 px-4 my-2 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                  />
                </div>
                <div className="text-start">
                  <label className="text-sm font-medium text-sky-900">
                    Overview
                  </label>
                  <textarea
                    name="details"
                    rows="4"
                    value={formData.details}
                    class="block p-2.5 w-full my-2 text-sm rounded-lg border border-[#0c4a6e69] outline-none"
                    placeholder="Enter a description or an overview about the place..."
                    required
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </div>
                <div className="text-start">
                  <label className="text-sm font-medium text-sky-900">
                    Type
                  </label>
                  <input
                    type="text"
                    name="destinations_type"
                    placeholder="Place type"
                    value={formData.destinations_type}
                    required
                    onChange={(e) => handleChange(e)}
                    className="block text-sm py-3 px-4 my-2 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                  />
                </div>
                <div className="text-start">
                  <label className="text-sm font-medium text-sky-900">
                    Country
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter the country the place in"
                    value={formData.location}
                    required
                    onChange={(e) => handleChange(e)}
                    className="block text-sm py-3 px-4 my-2 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                  />
                </div>
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="mt-4 m-2 py-2 px-5 border-2 border-sky-900 bg-sky-900 hover:bg-white rounded-2xl text-white hover:text-sky-900"
                >
                  Update
                </button>
                <button
                  type="clear"
                  // onClick={onClose}
                  className="mt-4 m-2 py-2 px-5 border-2 border-sky-900 text-sky-900 rounded-2xl hover:bg-gray-200"
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateHouse;
