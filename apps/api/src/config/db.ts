import mongoose from "mongoose";
import { logger } from "./logger";
import { env } from "./env.config";

export const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);

    logger.info("Database connected successfully");
  } catch (error) {
    logger.error(error);
  }
};
