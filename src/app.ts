import express from "express"; // Import the Express framework.
import "dotenv/config"; // Load environment variables from a .env file.
import productRouter from "./routes/products.routes"; // Import the product router module.
import userRouter from "./routes/user.routes"; // Import the user router module.

const app = express(); // Create a new Express application.
const PORT = process.env.PORT || 5005; // Set the server port to the value specified in the environment variable "PORT", or 5005 as a default.

app.use(express.json()); // Parse incoming requests with JSON payloads.
app.use("/api", productRouter); // Mount the product router at the "/api" route.
app.use("/api", userRouter); // Mount the user router at the "/api" route.

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`); // Start the server and log a message indicating the server is running.
});
