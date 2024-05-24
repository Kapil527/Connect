import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWTSECRET;

export const token = (id: {}) => jwt.sign(id, JWT_SECRET as string);
export const authentication = async (salt: number, password: string) => {
  const genSalt = await bcrypt.genSalt(salt);
  const hashpassword = await bcrypt.hash(password, genSalt);
  return hashpassword;
};

export const verifyPassword = async(password: string, usersPassword: string) => {
  const verify = await bcrypt.compare(password, usersPassword);
  return verify;
}
