import dotenv from 'dotenv';
dotenv.config();

interface TEnvConfig {
  NODE_ENV?: 'development' | 'production';
  PORT?: number;
  MODE?: 'server' | 'full';
}

const envConfig = process.env.server as TEnvConfig;

export default envConfig;
