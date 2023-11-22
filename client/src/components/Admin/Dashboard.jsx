import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { UsersTable } from "./Tables/UsersTable";
import AllUsers from "./Tables/AllUsers";
import { usePage } from "../Context/SelectedPageContext";
import Statstics from "./Statstics";
import { DestinationsTable } from "./Tables/DestinationsTable";

const Dashboard = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const [user, setUser] = useState([]);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const history = useNavigate();
  const { page, onSelectedPage } = usePage();

  // fetch products
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:5000/users/1")
  //       .then((response) => {
  //         setUser(response.data);
  //         setPhotoPreview(user.profile_image_name);
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   }, []);

  // useEffect(() => {
  //   if (user.profile_image_name) {
  //         const reader = new FileReader();

  //         reader.onload = (e) => {
  //           setPhotoPreview(e.target.result);
  //         };
  //         reader.readAsDataURL(user.profile_image_name);}
  // }, [user.profile_image_name]);

  function logout() {
    removeCookie("token");
    history("/");
  }

  // to open and close sidebar
  const [isSideOpen, setIsSideOpen] = useState(true);
  const [position, setPosition] = useState("left-0");
  function openSideBar() {
    if (isSideOpen) {
      setPosition("-left-64");
    } else {
      setPosition("left-0");
    }
    setIsSideOpen(!isSideOpen);
  }
  return (
    <div className="min-h-screen">
      <div className="lg:ml-80">
        <Statstics />
      </div>
      <div className="w-full flex flex-col justify-start">
        <div className="flex justify-center items-center m-5 gap-5 flex-col lg:flex-row">
        <UsersTable onSelectedPage={onSelectedPage} />
        </div>
      </div>
      <div className="flex justify-center items-center m-5 lg:m-10 gap-5 flex-col lg:flex-row">
        <DestinationsTable />
        <DestinationsTable />
      </div>
    </div>
  );
};

export default Dashboard;
