import express from "express";

import { fetchUser } from "../middleware/fetchUser";
import {
  createDoctorProfile,
  getDetails,
  updateDetails,
} from "../controller/doctors";

const router = express.Router();

export function doctor() {
  //api/v1/doctor/doctors
  router.post("/doctors", fetchUser, createDoctorProfile);
  //api/v1/doctor/doctors/:id
  router
    .route("/doctors/:id")
    .put(fetchUser, updateDetails)
    .get(fetchUser, getDetails);
  return router;
}
