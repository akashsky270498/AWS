import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import routes from "./routes/index"; // we will create this next

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

app.use("/api", routes);

app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date() });
});

export default app;