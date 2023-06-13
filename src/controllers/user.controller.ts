import { Request, Response } from "express"; // Import the Request and Response types from Express.
import { createUser, getUserById, getUsers } from "../services/user.service"; // Import user service functions.

export async function getUsersHandler(req: Request, res: Response) {
  const users = await getUsers(); // Call the getUsers function from the user service to retrieve all users.
  if (!users) return res.json("No users were found"); // If no users are found, send a JSON response indicating that no users were found.
  res.status(200).json(users); // Send a JSON response with the retrieved users.
}

export async function getUserByIdHandler(req: Request, res: Response) {
  const user = await getUserById(req.params.id); // Call the getUserById function from the user service to retrieve a user by ID.
  if (!user) return res.json("No user was found"); // If no user is found, send a JSON response indicating that no user was found.
  res.status(200).json(user); // Send a JSON response with the retrieved user.
}

export async function createUserHandler(req: Request, res: Response) {
  const user = await createUser(req.body); // Call the createUser function from the user service to create a new user.
  res.status(200).json(user); // Send a JSON response with the newly created user.
}
