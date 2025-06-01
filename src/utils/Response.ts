import { Response } from "express";

interface ApiResponseData {
  [key: string]: any;
}

interface APIError {
  message: string;
  [key: string]: any;
}

class ApiResponse {
  static success(
    res: Response,
    data: ApiResponseData | null = null,
    message: string = "Success",
    statusCode: number = 200
  ): Response {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

  static error(
    res: Response,
    message: string = "An error occurred",
    statusCode: number = 500,
    errors: APIError | null = null
  ): Response {
    return res.status(statusCode).json({
      success: false,
      message,
      errors,
    });
  }

  static created(
    res: Response,
    data: ApiResponseData | null = null,
    message: string = "Resource created successfully"
  ): Response {
    return this.success(res, data, message, 201);
  }

  static notFound(
    res: Response,
    message: string = "Resource not found"
  ): Response {
    return this.error(res, message, 404);
  }

  static badRequest(
    res: Response,
    message: string = "Bad request",
    errors: APIError | null = null
  ): Response {
    return this.error(res, message, 400, errors);
  }
}

export default ApiResponse;
