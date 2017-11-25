import { platformBrowser } from '@angular/platform-browser';
import { TodoAppModuleNgFactory } from './app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(TodoAppModuleNgFactory);