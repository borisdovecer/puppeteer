import { corsConfig } from "./config/corsConfig";
import express, { type Express } from "express";
import connectDB from "./config/db";
import routes from "./api/routes";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app: Express = express();
const PORT: number = parseInt(process.env.PORT ?? "8080", 10);

connectDB().catch((error) => {
  console.error("Failed to connect to the database:", error);
});

app.use(cors(corsConfig));
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}! nice!`);
});
