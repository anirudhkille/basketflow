import app from "./app";
import { connectDB } from "./config/db";
import { logger } from "./config/logger";
import { env } from "./config/env.config";

connectDB();

app.listen(env.PORT, () => {
  logger.info("server is running on");
});
