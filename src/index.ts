import express from 'express';
import setting from './lib/setting';
import logging from './lib/logging';
import envConfig from './config/env';
import log from './module/log';

async function main() {
  const PORT = envConfig.PORT ?? 4000;

  const server = express();

  server.use(setting);
  server.use(logging);

  server.listen(PORT, async () => {
    log.info(`Start server - 0.0.0.0:${PORT}`);
  });
}

main();

process.on('SIGINT', () => {
  console.log();
  log.info(`Quit Sever`);
  process.exit();
});
