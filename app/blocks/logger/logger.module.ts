import * as angular from 'angular';
import { logger } from './logger';

export const loggerModule = angular
  .module('blocks.logger', [])
  .service('logger', logger);
