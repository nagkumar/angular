import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {envt} from './envts/envt';

if (envt.prod)
{
    enableProdMode();
}

function bootstrap()
{
    platformBrowserDynamic().bootstrapModule(AppModule)
	    .catch(err => console.log(err));
}

if (document.readyState === 'complete')
{
    bootstrap();
}
else
{
    document.addEventListener('DOMContentLoaded', bootstrap);
}

