import { Router } from "express";
import {
  refreshToken,
  sendLoginOtp,
  verifyLoginOtp,
  logout,
} from "./auth.controller";
import { validate } from "../../middlewares/validate.middleware";
import { sendLoginOtpSchema, verifyLoginOtpSchema } from "./auth.schema";

const router = Router();

router.post("/send-login-otp", validate(sendLoginOtpSchema), sendLoginOtp);
router.post(
  "/verify-login-otp",
  validate(verifyLoginOtpSchema),
  verifyLoginOtp,
);
router.get("/refresh", refreshToken);
router.post("logout", logout);

export default router;
