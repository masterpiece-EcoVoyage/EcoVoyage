import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  
  const location = useLocation();
  if(location.pathname == '/login' || location.pathname == '/signup'){
    return null;
  }
  // const [isHidden, setIsHidden] = useState(false);
  // const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  // const handleScroll = () => {
  //   const currentScrollPos = window.scrollY;

  //   console.log(currentScrollPos)
  //   console.log(prevScrollPos)
  //   if (prevScrollPos > currentScrollPos) {
  //     setIsHidden(false); // Scrolling up
  //   } else {
  //     setIsHidden(true); // Scrolling down
  //   }

  //   setPrevScrollPos(currentScrollPos);
  //   console.log(currentScrollPos)
  //   console.log(prevScrollPos)

  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    // <nav
    // // className={`fixed top-0 left-0 w-full bg-white p-4 transition-all duration-300 ${
    // //     isHidden ? '-translate-y-full' : 'translate-y-0'}`}
    //   className="relative flex w-full items-center justify-between bg-transparent py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30  lg:flex-wrap lg:justify-start"
    //   data-te-navbar-ref
    // >
    //   <div className="flex w-full flex-wrap items-center justify-between px-6 my-2">
    //     <div className="flex items-center">
    //       {/* <!-- Toggle button --> */}
    //       <button
    //         data-collapse-toggle="navbar-default"
    //         onClick={() => setIsMenuOpened(!isMenuOpened)}
    //         type="button"
    //         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //         aria-controls="navbar-default"
    //         aria-expanded={isMenuOpened}
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-5 h-5"
    //           aria-hidden={!isMenuOpened}
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 17 14"
    //         >
    //           <path
    //             stroke="currentColor"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //             stroke-width="2"
    //             d="M1 1h15M1 7h15M1 13h15"
    //           />
    //         </svg>
    //       </button>

    //       {/* <!-- Navbar Brand --> */}
    //       <Link to="/" className="flex items-center h-8">
    //         <h1 className="text-transparent bg-clip-text px-3 font-medium text-2xl bg-gradient-to-r from-cyan-500 to-blue-700">
    //           VoyageVista
    //         </h1>
    //       </Link>
    //     </div>

    //     {/* <!-- Collapsible wrapper --> */}
    //     <div
    //       className={`${
    //         isMenuOpened ? "" : "hidden"
    //       } w-full md:block md:w-auto navigation" id="navbar-default`}
    //     >
    //       <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-3 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <li>
    //           <Link
    //             to="/"
    //             className="font-normal block py-2 px-1 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //             aria-current="page"
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/"
    //             className="font-normal block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    //           >
    //             Blogs
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     {/* <!-- Collapsible wrapper --> */}

    //     {/* <!-- Right elements --> */}
    // <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
    //   <Link to="/login">
    //     <button
    //       type="button"
    //       className="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-cyan-600 hover:text-black transition duration-150 ease-in-out hover:bg-gradient-to-r hover:from-[#006f6f7a] hover:to-[#00249b9c] hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
    //       data-te-ripple-init
    //       data-te-ripple-color="light"
    //     >
    //       Login
    //     </button>
    //   </Link>
    //   <Link to="/signup">
    //     <button
    //       type="button"
    //       className="inline-block rounded bg-gradient-to-r from-cyan-800 to-blue-700 hover:from-[#006f6f7a] hover:to-[#00249b9c] hover:text-black px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    //       data-te-ripple-init
    //       data-te-ripple-color="light"
    //     >
    //       Sign up
    //     </button>
    //   </Link>
    // </div>
    //     {/* <!-- Right elements --> */}
    //   </div>
    //   {/* <!-- Container wrapper --> */}
    // </nav>
    <div>
      {/* logo need change */}
      <nav className="bg-sky-700 border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex">
            {/* Toggle button */}
            <button
              data-collapse-toggle="navbar-default"
              onClick={() => setIsMenuOpened(!isMenuOpened)}
              type="button"
              className="inline-flex items-center mx-2 p-2 w-10 h-10 justify-center text-sm text-gray-50 rounded-lg md:hidden hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpened}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden={!isMenuOpened}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            {/* logo */}
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="EcoVoyage Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                EcoVoyage
              </span>
            </a>
          </div>
          <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
            <Link to="/login">
              <button
                type="button"
                className="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white hover:text-sky-900 transition duration-150 ease-in-out hover:bg-white hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button
                type="button"
                className="inline-block rounded bg-white hover:bg-sky-900 text-sky-900 hover:text-white dark:bg-sky-900 dark:hover:bg-white dark:text-white dark:hover:text-sky-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Sign up
              </button>
            </Link>
          </div>

          {/* <!-- Collapsible wrapper --> */}
          <div
            className={`${
              isMenuOpened ? "" : "hidden"
            } w-screen md:hidden id="navbar-default`}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-3 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="font-normal block py-2 px-1 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal block py-2 px-1 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal block py-2 px-1 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal block py-2 px-1 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Transportation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal block py-2 px-1 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Accommodation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal block py-2 px-1 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-normal block py-2 px-1 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
      </nav>
      <nav className="bg-white dark:bg-gray-900 border-b-2 hidden md:block">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row w-full justify-between font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href="#"
                  className="text-sky-700 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-700 dark:text-white hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-700 dark:text-white hover:underline"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-700 dark:text-white hover:underline"
                >
                  Transportation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-700 dark:text-white hover:underline"
                >
                  Accommodation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-700 dark:text-white hover:underline"
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sky-700 dark:text-white hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
