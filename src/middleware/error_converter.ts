import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ApiError } from "../exception/api_error";

const errorConverter = (err: ApiError | Error, req: Request, res: Response, next: NextFunction) => {
    let error = err;
    if (!(error instanceof ApiError)) {
        const statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        const message = error.message || httpStatus[statusCode];
        error = new ApiError(statusCode, message, false, err.stack);
    }
    console.log(error);
    next(error);
};

export { errorConverter }