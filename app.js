import express, { json, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(json({ limit: "16kb" }));
app.use(cookieParser());
app.use(cors({ origin: "*" }));
app.use(urlencoded({ limit: "20kb", extended: true }));
app.use(express.static("public"));

import userRouter from "./src/routes/user.router.js";
app.use("/api/v1", userRouter);

export { app };
