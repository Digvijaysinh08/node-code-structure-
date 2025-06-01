export class ApiResponse {
  static success<T>(
    data: T,
    message: string = "Success",
    statusCode: number = 200
  ): object {
    return {
      status: "success",
      message,
      statusCode,
      data,
    };
  }

  static error(
    message: string,
    statusCode: number = 500,
    errors?: any
  ): object {
    return {
      status: "error",
      statusCode,
      message,
      errors,
    };
  }
}
