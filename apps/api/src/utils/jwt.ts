import jwt from "jsonwebtoken";
import { env } from "../config/env.config";
import { Types } from "mongoose";

export const generateAccessToken = (_id: Types.ObjectId) => {
  return jwt.sign({ _id: _id }, env.JWT_ACCESS_SECRET, {
    expiresIn: "15m",
  });
};

export const generateRefreshToken = (_id: Types.ObjectId) => {
  return jwt.sign({ _id: _id }, env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });
};
