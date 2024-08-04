import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchEmployees, deleteEmployee } from "../api";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadEmployees = async () => {
    try {
      const result = await fetchEmployees();
      setEmployees(result.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await deleteEmployee(id);
      setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee._id !== id));
      loadEmployees();
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  if (loading) return <div className="message">Loading...</div>;
  if (error) return <div className="message">Error: {error.message}</div>;

  return (
    <div className="container mt-5" data-bs-theme="dark">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h5 className="mt-2">Employees List</h5>
          <Link to="/add" className="btn btn-primary bt-sm">Add Employee</Link>
        </div>
        <div className="card-body">
          <ul className="list-group">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th className="px-5" scope="col">emp_id</th>
                  <th className="px-5" scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.length > 0 ? (
                  employees.map((employee, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{employee.name}</td>
                      <td>{employee._id}</td>
                      <td>
                        <Link to={`/details/${employee._id}`} className="btn btn-primary mx-1 btn-sm">Details</Link>
                        <button
                          onClick={() => handleDelete(employee._id)}
                          className="btn btn-danger mx-1 btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <li className="form-control mt-3">No employee in the system</li>
                )}
              </tbody>
            </table>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
