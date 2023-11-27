import React from "react";

const Contact = () => {
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <div className="grid md:grid-cols-2">
      <div className="mb-4 md:mb-0">
        <img
          className="brightness-150 w-full object-cover md:object-contain h-96 md:h-screen"
          src="https://images.unsplash.com/photo-1507812984078-917a274065be?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
          //   style="filter: brightness(0.3)"
        />
      </div>
      <div className="container md:flex md:flex-col md:justify-center">
        {/* <form className="flex flex-col w-full px-8">
          <label className="mb-2 text-gray-700 text-sm" for="email">
            Email address
          </label>
          <input
            className="
              border border-gray-200
              mb-8
              p-4
              text-sm
              rounded-md
              block
              w-full
            "
            type="text"
            name="email"
            id="email"
          />
          <button className="mx-auto bg-gray-100 text-gray-600 font-semibold py-3 w-32">
            Continuar
          </button>
        </form> */}
        <form action="" onSubmit={handleSubmit}>
          <div className="min-h-screen flex justify-center items-start md:items-center">
            <div className="py-12 px-12 w-full">
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl text-sky-900 font-bold text-center mb-4 cursor-pointer">
                  Contact Us
                </h1>
                <p className="w-80 self-center text-center text-sm mb-8 font-semibold text-sky-700 tracking-wide cursor-pointer">
                  We'd love to hear from you!
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex space-x-2">
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
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  className="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    onChange={handleChange}
                    className="block text-sm py-3 px-4 rounded-lg w-full border border-[#0c4a6e69] outline-none"
                  />
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm rounded-lg border border-[#0c4a6e69] outline-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="py-3 w-64 text-xl text-white hover:text-sky-900 bg-sky-900 border-2 hover:bg-white border-sky-900 rounded-2xl"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
