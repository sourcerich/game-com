import dotenv from "dotenv";
dotenv.config();

export const dbConfig = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PORT: Number(process.env.DB_PORT) || 3306,
  PASSWORD: process.env.DB_PASS,
  DB: process.env.GAME_DB!,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};