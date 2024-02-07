import express from "express";

import {
  changePassword,
  deleteUser,
  getUser,
  login,
  signup,
} from "../controller/users";
import { fetchUser } from "../middleware/fetchUser";

const router = express.Router();

export const authentication = () => {
  //route - api/v1/users/signup
  router.post("/signup", signup);
  //router - api/v1/users/login
  router.post("/login", login);
  //route - api/v1/users/dynamicId
  router
    .route("/:id")
    .get(fetchUser, getUser)
    .put(fetchUser, changePassword)
    .delete(fetchUser, deleteUser);

  return router;
};
