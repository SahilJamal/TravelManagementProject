import path from "path";
import express from "express";
import dotenv from "dotenv";
import connectToDb from "./config/db.js";
import colors from "colors";
import tripRoutes from "./routes/trip.route.js";
import userRoutes from "./routes/user.route.js";
import orderRoutes from "./routes/order.route.js";
import uploadRoutes from "./routes/upload.route.js";
import destinationRoutes from "./routes/destination.route.js";
import packageRoutes from "./routes/package.route.js"

import { notFound, errorHandler } from "./middleware/errorHandler.js";
import cookieParser from "cookie-parser";
// import
dotenv.config();
connectToDb();

const app = express();
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/test", (req, res) => {
  res.json("API is running");
});

app.use("/api/trips", tripRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/destination",destinationRoutes)
app.use("/api/package",packageRoutes)
app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(notFound);
app.use(errorHandler);

app.listen(port, console.log(`Server running on port ${port}`.yellow.bold));
