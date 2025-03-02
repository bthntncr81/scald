import 'reflect-metadata';
import { Ignitor, prettyPrintError } from '@adonisjs/core';
import { createServer } from 'node:http';  // Change to HTTP

const APP_ROOT = new URL('../', import.meta.url);

const IMPORTER = (filePath) => {
  if (filePath.startsWith('./') || filePath.startsWith('../')) {
    return import(new URL(filePath, APP_ROOT).href);
  }
  return import(filePath);
};

// Start the application
new Ignitor(APP_ROOT, { importer: IMPORTER })
  .tap((app) => {
    app.booting(async () => {
      await import('#start/env');
    });
    app.listen('SIGTERM', () => app.terminate());
    app.listenIf(app.managedByPm2, 'SIGINT', () => app.terminate());
  })
  .httpServer()
  .start()
  .then((app) => {
    // Use HTTP instead of HTTPS here
    createServer(app).listen(8001, () => {
      console.log('Adonis.js HTTP server is running on port 8001');
    });
  })
  .catch((error) => {
    process.exitCode = 1;
    prettyPrintError(error);
  });