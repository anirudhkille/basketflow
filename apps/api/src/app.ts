import express, { Request, Response } from "express";
import authRoutes from "./modules/auth/auth.routes";
import categoryRoutes from "./modules/category/category.routes";
import { sendResponse } from "./utils/response";

const app = express();

app.use(express.json());

app.get("/api/health", (_req: Request, res: Response) => {
  sendResponse(res, 200, "Server is runing", {
    timestamp: new Date(),
    uptime: process.uptime(),
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/category", categoryRoutes);

export default app;
