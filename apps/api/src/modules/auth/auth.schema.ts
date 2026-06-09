import z from "zod";

export const sendLoginOtpSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email" }),
});

export const verifyLoginOtpSchema = z.object({
  email: z.string().trim().email({
    message: "Invalid email",
  }),
  otp: z
    .string({ message: "Otp is required" })
    .min(6, { message: "Minimum 6 digit is required for otp" }),
});
