import React, { useState, useEffect } from "react";
import axios from "axios";

const Testimonials = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const destinations = [
    /* your destination data */
  ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/testimonials")
      .then((response) => {
        // Handle the response data here
        setTestimonials(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  const handleNext = () => {
    if (activeItem < testimonials.length - 1) {
      setActiveItem(activeItem + 1);
    } else {
      setActiveItem(0);
    }
  };

  const handlePrevious = () => {
    if (activeItem > 0) {
      setActiveItem(activeItem - 1);
    } else {
      setActiveItem(testimonials.length - 1);
    }
  };

  return (
    <div>
      <div class="container my-24 mx-auto md:px-6">
        {/* <!-- Section: Design Block --> */}
        <section class="mb-32 text-center">
          <h1 className="text-sky-700 text-4xl md:text-start md:mx-32 font-bold py-10">
            Testimonials
          </h1>
          <div
            id="carouselExampleCaptions"
            class="relative"
            data-te-carousel-init
            data-te-carousel-slide
          >
            <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              {testimonials.map((testimonial, id) => (
                <div
                  key={id}
                  className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
                    activeItem == id ? "block" : "hidden"
                  }`}
                  data-te-carousel-item
                >
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full text-start shrink-0 grow-0 basis-auto px-10 lg:w-8/12 py-4 rounded-xl bg-[#0c4a6e69]">
                      <h5 class="mb-2 text-lg text-sky-900 font-bold">
                        {testimonial.name}
                      </h5>

                      <div class="flex items-center">
                        <svg
                          class="w-4 h-4 text-yellow-300 me-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p class="ms-2 text-sm text-sky-900 dark:text-white">
                          {testimonial.rating}
                        </p>
                      </div>
                      <p class="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                        {testimonial.location}
                      </p>
                      <p class="mb-6 text-gray-700 dark:text-neutral-300">
                        {testimonial.text}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          class="inline-block w-6"
                        >
                          <path
                            fill="currentColor"
                            d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handlePrevious}
              class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="prev"
            >
              <span class="inline-block h-8 w-8">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  class="text-neutral-600 dark:text-neutral-300"
                >
                  <path
                    fill="currentColor"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </span>
              <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </button>
            <button
              onClick={handleNext}
              class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide="next"
            >
              <span class="inline-block h-8 w-8">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  class="text-neutral-600 dark:text-neutral-300"
                >
                  <path
                    fill="currentColor"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
              <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </button>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
    </div>
  );
};

export default Testimonials;

// function Testimonials() {
//   const [activeItem, setActiveItem] = useState(0);
//   const [testimonials, setTestimonials] = useState([]);
//   const destinations = [
//     /* your destination data */
//   ];

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/destinations?_limit=3")
//       .then((response) => {
//         // Handle the response data here
//         setTestimonials(response.data);
//       })
//       .catch((error) => {
//         // Handle errors here
//         console.error("Error:", error);
//       });
//   }, []);

//   const handleNext = () => {
//     if (activeItem < destinations.length - 1) {
//       setActiveItem(activeItem + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (activeItem > 0) {
//       setActiveItem(activeItem - 1);
//     }
//   };

//   return (
//     <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
//       {testimonials.map((destination, id) => (
//         <div
//           key={id}
//           className={`relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
//             activeItem === id ? "block" : "hidden"
//           }`}
//           data-te-carousel-item
//           style={{ backfaceVisibility: "hidden" }}
//         >
//           {/* Your destination content here */}
//         </div>
//       ))}

//       <button
//         onClick={handlePrevious}
//         className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//         type="button"
//       >
//         {/* Previous button content */}
//       </button>

//       <button
//         onClick={handleNext}
//         className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//         type="button"
//       >
//         {/* Next button content */}
//       </button>
//     </div>
//   );
// }
// // export default Testimonials;
