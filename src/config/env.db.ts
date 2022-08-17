import dotenv from 'dotenv';
dotenv.config();

interface TDBEnvConfig {
  MYSQL_HOST?: string;
  MYSQL_PORT?: number;
  MYSQL_USER?: string;
  MYSQL_PASSWORD?: string;
  MYSQL_DB?: string;
}

const dbEnvConfig = process.env.db as TDBEnvConfig;

export default dbEnvConfig;
