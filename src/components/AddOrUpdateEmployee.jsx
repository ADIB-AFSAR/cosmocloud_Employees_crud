import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addEmployee, updateEmployee, fetchEmployeeDetails } from "../api";

function AddOrUpdateEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: {
      line1: "",
      city: "",
      country: "",
      zipcode: "",
    },
    contactmethods: {
      contactmethod: "",
      value: "",
    },
  });

  const handleChange = (event) => {
    const { name, value, dataset } = event.target;
    const section = dataset.section;

    if (section) {
      setFormData((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { ...formData };
    delete payload._id;

    try {
      if (id) {
        await updateEmployee(id, payload);
      } else {
        await addEmployee(payload);
      }
      setFormData({
        name: "",
        address: {
          line1: "",
          city: "",
          country: "",
          zipcode: "",
        },
        contactmethods: {
          contactmethod: "",
          value: "",
        },
      });
      navigate(id ? `/details/${id}` : "/");
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  const handleReset = async () => {
    if (id) {
      const result = await fetchEmployeeDetails(id);
      return setFormData(result);
    } else {
      return setFormData({
        name: "",
        address: {
          line1: "",
          city: "",
          country: "",
          zipcode: "",
        },
        contactmethods: {
          contactmethod: "",
          value: "",
        },
      });
    }
  };

  useEffect(() => {
    const loadEmployeeDetails = async () => {
      try {
        const result = await fetchEmployeeDetails(id);
        setFormData(result);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };

    if (id) {
      loadEmployeeDetails();
    }
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card col-12">
          <div className="card-body">
            <div className="card-header d-flex justify-content-between">
              <h4 className="card-title fw-bold">
                {id ? "Edit Employee" : "Add Employee"}
              </h4>
              <Link
                to={id ? `/details/${id}` : "/"}
                className="btn btn-primary btn-sm"
              >
                Back
              </Link>
            </div>
            <form onSubmit={handleSubmit} className="mt-2">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>

              <label className="form-label">Address</label>
              <div className="mb-3">
                <input
                  type="text"
                  data-section="address"
                  value={formData.address.line1}
                  onChange={handleChange}
                  name="line1"
                  className="form-control"
                  placeholder="Line 1"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  data-section="address"
                  value={formData.address.city}
                  onChange={handleChange}
                  name="city"
                  className="form-control"
                  placeholder="City"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  data-section="address"
                  value={formData.address.country}
                  onChange={handleChange}
                  name="country"
                  className="form-control"
                  placeholder="Country"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  data-section="address"
                  value={formData.address.zipcode}
                  onChange={handleChange}
                  name="zipcode"
                  className="form-control"
                  placeholder="Zip Code"
                  required
                />
              </div>

              <label className="form-label">Contact Method</label>
              <div className="row mb-3">
                <div className="col">
                  <select
                    name="contactmethod"
                    value={formData.contactmethods.contactmethod}
                    onChange={handleChange}
                    data-section="contactmethods"
                    className="form-control"
                    required
                  >
                    <option value="">Select a method</option>
                    <option value="EMAIL">EMAIL</option>
                    <option value="PHONE">PHONE</option>
                  </select>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="value"
                    data-section="contactmethods"
                    value={formData.contactmethods.value}
                    onChange={handleChange}
                    className="form-control"
                    placeholder={
                      formData.contactmethods.contactmethod &&
                      formData.contactmethods.contactmethod === "EMAIL"
                        ? "example123@gmail.com"
                        : "+91XXXXXXXXXX"
                    }
                    required
                  />
                </div>
              </div>

              <div className="d-flex justify-content-between mt-4">
                <button type="submit" className="btn btn-primary col-6 mx-1">
                  {id ? "Update" : "Add"}
                </button>
                <button
                  type="reset"
                  onClick={handleReset}
                  className="btn btn-warning col-6 mx-1"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOrUpdateEmployee;
