import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddOrUpdateEmployee";
import EmployeeDetails from "./components/EmployeeDetails";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/add/:id" element={<AddEmployee />} />
        <Route path="/details/:id" element={<EmployeeDetails />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
