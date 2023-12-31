import Swal from "sweetalert2";
import React from "react";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import { usePage } from "../../Context/SelectedPageContext";

const FlightsTable = () => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState(flights);
  const [searchQuery, setSearchQuery] = useState("");
  const [destination, setDestination] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { headers } = useAuth();
  const { page, onSelectedPage, selectedId, onSelectedId } = usePage();
  const flightsPerPage = 3;

  const TABLE_HEAD = [
    "Number",
    "Destination",
    "Depart",
    "Return",
    "Airport",
    "Cost",
    "",
  ];
  useEffect(() => {
    axios
      .get(`http://localhost:3999/getFlights`)
      .then((response) => {
        // Handle the response data here
        let newData = response.data.map((data) => ({
          ...data,
          depart: new Date(data.depart_date).toLocaleDateString("en-GB"),
          return: new Date(data.return_date).toLocaleDateString("en-GB"),
        }));
        axios.get(`http://localhost:3999/getDestinations`).then((response) => {
          setDestination(response.data);
        });
        setFlights(newData);
        setFilteredFlights(newData);
        // setTypes(response.data.destinations_type);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  const indexOfLastUser = currentPage * flightsPerPage;
  const indexOfFirstUser = indexOfLastUser - flightsPerPage;
  const currentFlights = filteredFlights.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery === "") {
      setFilteredFlights(flights);
    } else {
      setFilteredFlights(
        flights.filter(
          (flight) =>
            flight.destination
              .toLowerCase()
              .includes(searchQuery.toLowerCase()) ||
            flight.operatedby.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  };
  const handleEdit = (id) => {
    console.log(id);
    onSelectedId(id);
    onSelectedPage("updateFlight");
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`http://localhost:3999/softDeleteFlight/${id}`, null, {
            headers: headers,
          })
          .then((response) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong with deleting the user.",
              confirmButtonText: "OK",
              customClass: {
                confirmButton:
                  "bg-sky-900 hover:bg-white text-white hover:text-sky-900 border border-sky-900 py-2 px-4 rounded",
              },
            });
          });
      }
    });
  };
  return (
    <Card className="p-2 lg:ml-80 m-5 w-auto h-full border border-sky-700">
      <h1 className="text-sky-900 text-start mt-5 mx-5 text-lg font-bold">
        Flights
      </h1>
      <hr className="text-sky-700" />
      <CardHeader floated={false} shadow={false} className="rounded-none mt-0">
        <div className="flex items-center justify-between gap-8 m-4">
          <form className="w-full lg:w-1/3" onSubmit={() => handleSearch()}>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Flight"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                class="text-white hover:text-sky-900 absolute end-2.5 bottom-1 bg-sky-900 hover:bg-white border border-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
              variant="outlined"
              size="sm"
              onClick={() => onSelectedPage("flights")}
            >
              view all
            </Button>
            <Button
              className="flex items-center gap-3 border border-sky-900 bg-sky-900 hover:bg-white hover:text-sky-900"
              size="sm"
              onClick={() => {
                onSelectedPage("addFlight");
              }}
            >
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>{" "}
              Add new
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 pt-0 h-[312px] overflow-auto">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentFlights.map((flight, index) => {
              const isLast =
                (index === filteredFlights.length) === 0
                  ? flights.length - 1
                  : filteredFlights.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr
                  key={flight.flights_id}
                  className={index % 2 !== 0 ? "bg-white" : "bg-gray-200"}
                >
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {flight.flights_id}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {destination &&
                            destination.map(
                              (item) =>
                                item.destinations_id ===
                                  flight.destinations_id && `${item.title}`
                            )}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        Date: {flight.depart}
                      </Typography>
                      <div className="flex gap-2">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          Time:{" "}
                          {flight.depart_time && flight.return_time.boarding}
                        </Typography>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {flight.depart_time && flight.return_time.arrival}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        Date: {flight.return}
                      </Typography>
                      <div className="flex gap-2">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          Time:{" "}
                          {flight.return_time && flight.return_time.boarding}
                        </Typography>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {flight.return_time && flight.return_time.arrival}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <img
                        src={flight.imagecomp}
                        alt="Airline"
                        className="h-10 w-auto"
                      />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {flight.operatedby}
                      </Typography>
                    </div>
                  </td>
                  <td>
                    <div className="w-max">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {flight.best} JOD
                      </Typography>
                    </div>
                  </td>
                  <td className={`${classes} text-end`}>
                    <Tooltip content="Edit flight">
                      <IconButton
                        onClick={() => handleEdit(flight.flights_id)}
                        variant="text"
                      >
                        <PencilIcon className="h-4 w-4 text-sky-900" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Delete flight">
                      <IconButton
                        onClick={() => handleDelete(flight.flights_id)}
                        variant="text"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="text-sky-900 w-4 h-4 font-bold"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of{" "}
          {Math.ceil(
            filteredFlights.length === 0
              ? flights.length === 0
                ? 1
                : flights.length / flightsPerPage
              : filteredFlights.length / flightsPerPage
          )}
        </Typography>
        <div className="flex gap-2">
          <Button
            onClick={() => currentPage !== 1 && paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-sky-900"
            variant="outlined"
            size="sm"
          >
            Previous
          </Button>
          <Button
            onClick={() =>
              currentPage !==
                Math.ceil(
                  filteredFlights.length === 0
                    ? flights.length / flightsPerPage
                    : filteredFlights.length / flightsPerPage
                ) && paginate(currentPage + 1)
            }
            disabled={
              currentPage ===
              Math.ceil(
                filteredFlights.length === 0
                  ? flights.length / flightsPerPage
                  : filteredFlights.length / flightsPerPage
              )
            }
            className="text-sky-900"
            variant="outlined"
            size="sm"
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
export default FlightsTable;
