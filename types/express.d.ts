import 'express';

declare module 'express-serve-static-core' {
    interface Request {
        requestId?: string;
        log?: {
            traceId: string;
            startTime: number;
            metadata: Record<string, any>;
        };
    }
}
