import "reflect-metadata";
import express, { Request, Response, NextFunction, response } from "express";
import "express-async-errors";
import cors from "cors";

import "./database";

import { router } from "./routes";

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

app.listen(PORT, () =>
  console.log(`Server is running in http://localhost:${PORT}`)
);
