# Prisma_PostgresAPI

This repository contains the source code for the Prisma_PostgresAPI project.

## Description

The Prisma_PostgresAPI is a RESTful API built with Node.js, Express.js, Prisma, and PostgreSQL. It provides endpoints to perform CRUD operations on a PostgreSQL database.

## Environment Variables

The following environment variables need to be set in the `.env` file:

- `DATABASE_URL`: The URL for your PostgreSQL database.
- `PORT`: 

Make sure to update the values of these variables in the `.env` file according to your specific configuration.

## Getting Started

To get started with the Prisma_PostgresAPI, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ju4n-avendanoa/Prisma_PostgresAPI.git

2. Install the dependencies:

    ```bash
    npm install
  
3. Create a `.env` file, and setup the environment variables according to your needs

4. Run the API server:

    ```bash
    npm start
   
## API Endpoints

- `GET /api/users`: Get all users.
- `GET /api/users/:id`: Get a specific user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update a user by ID.
- `DELETE /api/users/:id`: Delete a user by ID.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to submit a pull request or open an issue in the [GitHub repository](https://github.com/ju4n-avendanoa/Prisma_PostgresAPI).
