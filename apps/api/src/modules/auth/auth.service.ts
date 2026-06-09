import { env } from "../../config/env.config";
import { redis } from "../../config/redis";
import { otpTemplate } from "../../templates/otp.template";
import { AppError } from "../../utils/AppError";
import { generateAccessToken, generateRefreshToken } from "../../utils/jwt";
import { sendEmail } from "../../utils/mail";
import { generateOtp } from "../../utils/otp";
import {
  createUser,
  findUserByEmail,
  findUserByEmailOrThrow,
} from "../user/user.service";
import jwt, { JwtPayload } from "jsonwebtoken";

export const loginUser = async (email: string) => {
  const user = await findUserByEmail(email);

  if (!user) {
    await createUser(email);
  }

  const otp = generateOtp();

  await redis.set(`loginOtp:${email}`, otp, "EX", 300);

  return sendEmail(email, "Your Login OTP", otpTemplate(otp));
};

export const verifyOtp = async (email: string, otp: string) => {
  const otpKey = `loginOtp:${email}`;

  const otpValue = await redis.get(otpKey);
  if (!otpValue) {
    throw new AppError(401, "Otp expired");
  }

  if (otpValue !== otp) {
    throw new AppError(401, "Invalid Otp");
  }

  await redis.del(otpKey);

  const user = await findUserByEmailOrThrow(email);
  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);

  await redis.set(
    `refreshToken:${user._id}`,
    refreshToken,
    "EX",
    60 * 60 * 24 * 7,
  );
  return { user, accessToken, refreshToken };
};

export const refreshTokenService = async (token: string) => {
  if (!token) {
    throw new AppError(401, "No token provided");
  }

  let decoded;

  try {
    decoded = jwt.verify(token, env.JWT_REFRESH_SECRET) as JwtPayload;
  } catch (err) {
    throw new AppError(401, "Invalid or expired token");
  }

  if (!decoded._id) {
    throw new AppError(401, "Invalid token");
  }

  const storedToken = await redis.get(`refreshToken:${decoded._id}`);

  if (!storedToken) {
    throw new AppError(401, "Token doesn't exist");
  }

  if (storedToken !== token) {
    throw new AppError(401, "Token mismatch");
  }

  const accessToken = generateAccessToken(decoded._id);
  const refreshToken = generateRefreshToken(decoded._id);

  await redis.set(
    `refreshToken:${decoded._id}`,
    refreshToken,
    "EX",
    60 * 60 * 24 * 7,
  );

  return { accessToken, refreshToken };
};

export const logoutService = async (token: string) => {
  const decoded = jwt.verify(token, env.JWT_REFRESH_SECRET) as JwtPayload;

  await redis.del(`refreshToken:${decoded._id}`);
};
