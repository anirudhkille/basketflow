import { AppError } from "../../utils/AppError";
import * as userRepository from "./user.repositry";

export const findUserByEmail = async (email: string) => {
  return userRepository.findEmail(email);
};

export const findUserByEmailOrThrow = async (email: string) => {
  const user = await userRepository.findEmail(email);
  if (!user) {
    throw new AppError(404, "User not found");
  }
  return user;
};

export const createUser = async (email: string) => {
  return userRepository.create(email);
};
