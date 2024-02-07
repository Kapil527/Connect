import express from "express";

import { fetchUser } from "../middleware/fetchUser";
import {
  bookAppointment,
  getAllAppointment,
} from "../controller/bookingAppointment";

const router = express.Router();

export const appointmentBooking = () => {
  router
    .route("/appointments/:id")
    .post(fetchUser, bookAppointment)
    router.get("/appointments",fetchUser, getAllAppointment);

  return router;
};
