import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic: 코드를 컴파일을 브라우저에서 한다.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
