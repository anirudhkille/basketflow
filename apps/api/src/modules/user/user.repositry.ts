import User from "./user.model";

export const create = (email: string) => {
  return User.create({ email });
};

export const findEmail = (email: string) => {
  return User.findOne({ email });
};
