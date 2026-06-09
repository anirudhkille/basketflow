export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(statuscode: number, message: string) {
    super(message);

    this.statusCode = statuscode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
