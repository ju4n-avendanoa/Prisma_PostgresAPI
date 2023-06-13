import { Router } from "express"; // Import the Router class from the Express framework.
import {
  createUserHandler,
  getUserByIdHandler,
  getUsersHandler,
} from "../controllers/user.controller"; // Import the user controller handlers.

const userRouter = Router(); // Create a new instance of the Router.

userRouter.get("/users", getUsersHandler); // Register a GET route for retrieving all users using the getUsersHandler.

userRouter.get("/users/:id", getUserByIdHandler); // Register a GET route for retrieving a user by ID using the getUserByIdHandler.

userRouter.post("/users", createUserHandler); // Register a POST route for creating a new user using the createUserHandler.

export default userRouter; // Export the userRouter for use in other modules.
