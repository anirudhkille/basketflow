import "dotenv/config";
import { z } from "zod";
import { logger } from "./logger";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]),
  MONGO_URI: z.string().url(),
  PORT: z.coerce.number().default(3001),
  REDIS_HOST: z.string().default("localhost"),
  REDIS_PORT: z.coerce.number().default(6379),
  JWT_ACCESS_SECRET: z.string(),
  JWT_REFRESH_SECRET: z.string(),
  SMTP_HOST: z.string().default("localhost"),
  SMTP_PORT: z.coerce.number().default(587),
  SMTP_EMAIL: z.string(),
  SMTP_PASSWORD: z.string(),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  logger.error("Invalid environment variables");

  result.error.issues.forEach((issue) =>
    logger.error(`${issue.path.join(", ")} ${issue.message}`),
  );
  process.exit(1);
}

export const env = result.data;
