import Redis from "ioredis";
import { logger } from "./logger";
import { env } from "./env.config";

export const redis = new Redis({
  host: env.REDIS_HOST,
  port: Number(env.REDIS_PORT),
  retryStrategy(times) {
    if (times > 3) return null;
    return Math.min(times * 200, 2000);
  },
});

redis.on("connect", () => logger.info("Redis connected"));
redis.on("error", (error: any) => logger.error("Redis Error", error.message));
