import express from "express";
import http from "http";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";

import connect from "./utils/connectDB";
import { authentication } from "./routes/user";
import { doctor } from "./routes/doctor";
import { appointments } from "./routes/appointments";
import { handleError } from "./middleware/errorHandling";
import { appointmentBooking } from "./routes/appointmentBooking";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(compression());

app.use("/api/v1/users", authentication());
app.use("/api/v1/doctor", doctor());
app.use("/api/v1/appointment", appointments());
app.use("/api/v1/appointment", appointmentBooking());

const server = http.createServer(app);

connect();

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});

//middleware to handle errors
app.use(handleError);
