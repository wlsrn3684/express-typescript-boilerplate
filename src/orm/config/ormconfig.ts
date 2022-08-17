import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import dbEnvConfig from '../../config/env.db';

const config: ConnectionOptions = {
  type: 'mysql',
  name: 'haheho-develop',
  host: dbEnvConfig.MYSQL_HOST,
  port: dbEnvConfig.MYSQL_PORT,
  username: dbEnvConfig.MYSQL_USER,
  password: dbEnvConfig.MYSQL_PASSWORD,
  database: dbEnvConfig.MYSQL_DB,
  synchronize: false,
  logging: false,
  entities: ['src/orm/entity/**/*.ts'],
  migrations: ['src/orm/migration/**/*.ts'],
  subscribers: ['src/orm/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/orm/entity',
    migrationsDir: 'src/orm/migration',
    subscribersDir: 'src/orm/subscriber',
  },
  namingStrategy: new SnakeNamingStrategy(),
};

export = config;
