import { AppError } from "../../utils/AppError";
import User from "./user.model";

export const findUserByEmail = async (email: string) => {
  return User.findOne({ email });
};

export const findUserByEmailOrThrow = async (email: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(404, "User not found");
  }
  return user;
};

export const createUser = async (email: string) => {
  return User.create({ email });
};
