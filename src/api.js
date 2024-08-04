const BASE_URL = process.env.REACT_APP_BASE_URL;
const HEADERS = {
  projectId: "66aa204c440310e3620e0998", //only for testing purposes
  environmentId: "66aa204c440310e3620e0999", //only for testing purpose
  Accept: "application/json",
  "Content-Type": "application/json",
};


//fetching data from server
export const fetchEmployees = async (limit = 10, offset = 0) => {
  const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`, {
    method: "GET",
    headers: HEADERS,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};


//fetching employee's information with their id
export const fetchEmployeeDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "GET",
    headers: HEADERS,
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
};

//adding new employee
export const addEmployee = async (data) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return response.json();
};

//updating employee's information with their id
export const updateEmployee = async (id, data) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: HEADERS,
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return response.json();
};

//deleting employee's information with their id
export const deleteEmployee = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: HEADERS,
    body: JSON.stringify({})
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return response.json();
};
