import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT,
    SERVER_NAME: process.env.SERVER_NAME,
    MONGO_URI: process.env.MONGO_URI,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_DEBUG: process.env.MONGO_DEBUG,
};
