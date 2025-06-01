import { config } from '../config';
import { createLogger, format, transports } from 'winston';

const customFormat = format.printf(({ level, message, timestamp }) => {
    return `[${timestamp}] ${level}: ${message}`;
});

export const logger = createLogger({
    level: config.NODE_ENV === 'production' ? 'error' : 'info',
    format: format.combine(format.errors({ stack: true }), format.splat(), format.metadata()),
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.timestamp({ format: 'MMM DD YYYY hh:mm:ss A' }),
                customFormat
            ),
        }),
        new transports.File({
            filename: 'logs/error.log',
            level: 'error',
        }),
        new transports.File({
            filename: 'logs/combined.log',
        }),
    ],
});
