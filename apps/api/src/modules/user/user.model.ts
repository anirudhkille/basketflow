import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  emailVerified: boolean;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
