# CosmoCloud Employees CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application for managing employee records using CosmoCloud as the backend service. This application is built using React Js.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Reference](#api-reference)
- [Contributing](#contributing)

## Features

- List all employees
- View employee details
- Add new employee
- Edit existing employee
- Delete employee

## Prerequisites

Make sure you have the following installed on your local development machine:

- Node.js (v14 or higher)
- npm or yarn
- Git

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/ADIB-AFSAR/cosmocloud_employees_crud.git
    cd cosmocloud_employees_crud
    ```

2. Install the dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the root directory of the project and add the following environment variables. Replace the placeholders with your actual CosmoCloud project details:

    ```env
    REACT_APP_PROJECT_ID=your_project_id
    REACT_APP_ENVIRONMENT_ID=your_environment_id
    REACT_APP_BASE_URL=https://free-ap-south-1.cosmocloud.io/development/api
    ```

## Environment Variables

The application uses the following environment variables, which should be set in a `.env` file in the root directory of the project:

- `REACT_APP_PROJECT_ID`: Your CosmoCloud project ID.
- `REACT_APP_ENVIRONMENT_ID`: Your CosmoCloud environment ID.
- `REACT_APP_BASE_URL`: The base URL for the CosmoCloud API.

## Usage

1. Start the development server:

    ```sh
    npm start
    # or
    yarn start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```plaintext
cosmocloud_employees_crud/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── api/
│   │   └── employeeApi.js
│   ├── components/
│   │   ├── AddEmployee.jsx
│   │   ├── EmployeeDetails.jsx
│   │   └── EmployeeList.jsx
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md 

## API Reference
 -- Endpoints
The application interacts with the following CosmoCloud API endpoints:

GET /employee_model?limit=10&offset=0: Fetches a list of employees.
GET /employee_model/
: Fetches details of a specific employee.
POST /employee_model: Adds a new employee.
PUT /employee_model/
: Updates an existing employee.
DELETE /employee_model/
: Deletes an employee.

 -- Headers
Each request to the CosmoCloud API must include the following headers:
projectId: Your CosmoCloud project ID.
environmentId: Your CosmoCloud environment ID.
Accept: application/json

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
Fork the repository.
Create a new branch: git checkout -b my-feature-branch.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin my-feature-branch.
Open a pull request.
License
