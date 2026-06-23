import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import { sendResponse } from "../../utils/response";
import * as authService from "./auth.service";
import { cookieOptions } from "../../config/cookie.config";

export const sendLoginOtp = asyncHandler(
  async (req: Request, res: Response) => {
    await authService.loginUser(req.body.email);

    sendResponse(res, 200, "Otp sent your email");
  },
);

export const verifyLoginOtp = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, otp } = req.body;

    const { user, accessToken, refreshToken } = await authService.verifyOtp(email, otp);

    res.cookie("refreshToken", refreshToken, cookieOptions);
    sendResponse(res, 200, "Logged in successfully", { user, accessToken });
  },
);

export const refreshToken = asyncHandler(
  async (req: Request, res: Response) => {
    const { accessToken, refreshToken } = await authService.refreshToken(
      req.cookies.refreshToken,
    );

    res.cookie("refreshToken", refreshToken, cookieOptions);

    sendResponse(res, 200, "Token refreshed", { accessToken });
  },
);

export const logout = asyncHandler(async (req: Request, res: Response) => {
  await authService.logout(req.cookies.refreshToken);

  res.clearCookie("refreshToken");
  sendResponse(res, 200, "Logout successfully");
});
