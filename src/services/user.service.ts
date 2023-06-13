import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // Create a new instance of the Prisma client.

export async function getUsers() {
  const users = await prisma.users.findMany(); // Retrieve all users from the database using Prisma's "findMany" method.
  if (users.length < 1) return false; // Check if the "users" array is empty. If so, return false.
  return users; // Return the retrieved users.
}
export async function getUserById(id: string) {
  const user = await prisma.users.findFirst({
    where: {
      id: parseInt(id), // Find the user in the database whose id matches the parsed integer value of the given id parameter.
    },
  });
  if (!user) return false; // Check if the user is not found. If so, return false.
  return user; // Return the found user.
}

export async function createUser({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  try {
    const users = await prisma.users.create({
      data: {
        name, // Set the name field of the new user to the provided name parameter.
        email, // Set the email field of the new user to the provided email parameter.
      },
    });
    return users; // Return the newly created user.
  } catch (error: any) {
    throw new Error(error); // Throw an error if there is any issue with creating the user.
  }
}
