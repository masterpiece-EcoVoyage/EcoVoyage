import React, { useEffect, useState } from "react";
import axios from "axios";
import { usePage } from "../../Context/SelectedPageContext";

const UpdateFlight = ({id}) => {
    const [formData, setFormData] = useState([]);
  const { onSelectedPage } = usePage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      setFormData({
        ...formData,
        [name]: e.target.file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3999/updateFlight/${id}`, formData);
  };
  const handleClose = (e) => {
    e.preventDefault();
    setFormData([]);
    onSelectedPage("dashboard");
  };

  return (
    <div>
      <div className="flex flex-col justify-center top-64 items-center lg:ml-28 h-full w-auto">
        <div className="lg:w-2/3 w-full bg-gray-200 p-6 rounded shadow-lg h-auto m-6">
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="p-6 w-full">
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl text-sky-900 font-bold text-center mb-4 cursor-pointer">
                  Update Flight
                </h1>
              </div>
              <div className="space-y-4">
                {/* upload image */}
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

                {/* destination */}
                <div className="text-start">
                  <label className="text-sm font-medium text-sky-900">
                    Destination
                  </label>
                  <div className="">
                    <div className="flex items-center gap-3 w-full">
                      <label>From:</label>
                      <input
                        type="text"
                        name="from"
                        value={formData.from}
                        placeholder="Ticket destination"
                        onChange={(e) => handleChange(e)}
                        required
                        className="block text-sm py-3 px-4 my-2 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                      />
                    </div>
                    <div className="flex items-center gap-3 w-full">
                      <label>To:</label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        placeholder="Ticket destination"
                        onChange={(e) => handleChange(e)}
                        required
                        className="block text-sm py-3 px-4 my-2 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* overview */}
                <div className="text-start">
                  <label className="text-sm font-medium text-sky-900">
                    Cost
                  </label>
                  <input
                    type="text"
                    name="best"
                    value={formData.best}
                    placeholder="Price"
                    onChange={(e) => handleChange(e)}
                    required
                    className="block text-sm py-3 px-4 my-2 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                  />
                </div>

                {/* depart */}
                <div className="text-start">
                  <label className="block text-sm font-medium text-gray-700">
                    Depart
                  </label>
                  <div className="flex flex-wrap gap-5">
                    <div className="">
                      <input
                        name="depart_date"
                        class="shadow rounded my-2 h-auto py-2 px-3 text-gray-700 w-full"
                        type="date"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="boarding"
                        value={formData.best}
                        placeholder="00:00"
                        onChange={(e) => handleChange(e)}
                        required
                        className="block text-sm py-3 px-4 my-2 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                      />
                      <input
                        type="text"
                        name="arrival"
                        value={formData.best}
                        placeholder="00:00"
                        onChange={(e) => handleChange(e)}
                        required
                        className="block text-sm py-3 px-4 my-2 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* return */}
                <div className="text-start">
                  <label className="block text-sm font-medium text-gray-700">
                    Return
                  </label>
                  <div className="flex flex-wrap gap-5">
                    <div>
                      <input
                        name="return_date"
                        class="shadow rounded py-2 my-2 px-3 text-gray-700 w-full"
                        type="date"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="boarding"
                        value={formData.best}
                        placeholder="00:00"
                        onChange={(e) => handleChange(e)}
                        required
                        className="block text-sm py-3 px-4 my-2 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                      />
                      <input
                        type="text"
                        name="arrival"
                        value={formData.best}
                        placeholder="00:00"
                        onChange={(e) => handleChange(e)}
                        required
                        className="block text-sm py-3 px-4 my-2 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                      />
                    </div>
                  </div>
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
                  onClick={(e) => handleClose(e)}
                  className="mt-4 m-2 py-2 px-5 border-2 border-sky-900 text-sky-900 rounded-2xl hover:bg-white"
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateFlight
