import 'dotenv/config';

export const Server_Config = {
    PORT: process.env.PORT,
    DATABASE_URI: process.env.DB_URI,
    ENV_TYPE: process.env.ENV_TYPE,
    JWT_SECRET: process.env.JWT_SECRET
}