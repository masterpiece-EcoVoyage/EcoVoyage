import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { UsersTable } from "./Tables/UsersTable";
import { usePage } from "../Context/SelectedPageContext";
import Statstics from "./Statstics";
import { DestinationsTable } from "./Tables/DestinationsTable";
import { ActivitiesTable } from "./Tables/ActivitiesTable";
import ProductsStatistics from "./ProductsStatistics";
import { PackagesTable } from "./Tables/PackagesTable";
import UpdateHouse from "./Forms/UpdateHouse";


const Dashboard = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const { page, onSelectedPage } = usePage();

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
      <div>
        <ProductsStatistics />
      </div>
<UpdateHouse />
      <div className="flex justify-center items-center m-5 lg:m-10 gap-5 flex-col lg:flex-row">
        <DestinationsTable />
        <ActivitiesTable />
      </div>
      <div>
        <PackagesTable />
      </div>
    </div>
  );
};

export default Dashboard;
