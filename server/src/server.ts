import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { connectDatabases } from "./config/index";

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

const startServer = async () => {
  try {
    await connectDatabases();
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error: unknown) {
    console.log("Failed to start the server: ", error);
    process.exit(1);
  }
};

startServer();
