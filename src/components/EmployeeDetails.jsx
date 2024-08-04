import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchEmployeeDetails } from "../api";

function EmployeeDetails() {
  const [employee, setEmployeeData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const loadEmployeeDetails = async () => {
      try {
        const result = await fetchEmployeeDetails(id);
        setEmployeeData(result);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };

    if (id) {
      loadEmployeeDetails();
    }
  }, [id]);

  return (
    <div className="container mt-5" data-bs-theme="dark">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h5 className="mt-2">Employee Details</h5>
          <Link to="/" className="btn btn-primary bt-sm">Back</Link>
        </div>
        <div className="card-body table-responsive">
          <ul className="list-group">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Emp_id</th>
                  <th scope="col">Address</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Modify</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{employee.name}</td>
                  <td>{employee._id}</td>
                  <td>
                    {employee.address
                      ? `${employee.address.line1}, ${employee.address.city}, ${employee.address.country}, ${employee.address.zipcode}`
                      : "none"}
                  </td>
                   <td>
                    {employee.contactmethods && employee.contactmethods.contactmethod && employee.contactmethods.value
                      ? `${employee.contactmethods.contactmethod} : ${employee.contactmethods.value}`
                      : "none"}
                  </td>
                  <td>
                    <Link to={`/add/${employee._id}`} className="btn btn-warning btn-sm mx-1">Edit</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
