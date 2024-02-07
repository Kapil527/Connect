import express from "express";

import { fetchUser } from "../middleware/fetchUser";
import {
  setAppointment,
  getAppointmentsOnADate,
  cancleAppointmentTime,
} from "../controller/appointmentSetting";
import { appoinmentChecking } from "../middleware/appointmentsMiddleware";

const router = express.Router();

export function appointments() {
  //api/v1/doctor/doctors/:id
  router
    .route("/doctors/:id")
    .post(fetchUser, appoinmentChecking, setAppointment)
    .delete(fetchUser, appoinmentChecking, cancleAppointmentTime)
    .get(fetchUser, getAppointmentsOnADate);
  return router;
}