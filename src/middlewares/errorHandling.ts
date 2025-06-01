import { Express, NextFunction, Request, Response } from 'express';
import { logger } from '../utils/Logger';
import ApiResponse from '../utils/Response';

interface ExpressError extends Error {
    status?: number;
    errors?: any;
}

export const errorHandling = (app: Express) => {
    app.use(((err: ExpressError, req: Request, res: Response, next: NextFunction) => {
        logger.error(`Error in request: ${req.method} ${req.originalUrl}`, err);

        if (res.headersSent) {
            return next(err);
        }

        if (err.message === 'EntityNotFound') {
            return ApiResponse.notFound(res, 'Resource not found');
        }

        return ApiResponse.error(res, 'Something went wrong', err.status || 500, err.errors || null);
    }) as (err: any, req: Request, res: Response, next: NextFunction) => void);

    app.use(((req: Request, res: Response, _next: NextFunction) => {
        logger.error(`404 - Not Found: ${req.method} ${req.originalUrl}`);
        return ApiResponse.notFound(res, 'Requested resource not found');
    }) as (req: Request, res: Response, next: NextFunction) => void);
};
