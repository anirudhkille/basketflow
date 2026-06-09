import nodemailer from "nodemailer";
import { env } from "../config/env.config";

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  secure: false,
  auth: {
    user: env.SMTP_EMAIL,
    pass: env.SMTP_PASSWORD,
  },
});

export const sendEmail = async (
  email: string,
  subject: string,
  html: string,
) => {
  await transporter.sendMail({
    from: env.SMTP_EMAIL,
    to: email,
    subject: subject,
    html: html,
  });
};
