import User from "./user.model";

export const findEmail = async (email: string) => {
  await User.findOne({ email });
};
