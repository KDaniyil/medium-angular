import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { importProvidersFrom } from '@angular/core'
import { AppComponent } from './app/app.component'
import { provideState, provideStore } from '@ngrx/store'

import { BrowserModule, bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from './environment/environment'
import { ROUTES } from './app/routes'
import { reducers } from './app/auth/store/reducers'

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(ROUTES),
        provideStore({}),
        provideState({ name: 'auth', reducer: reducers }),
        importProvidersFrom(
            BrowserModule,
            StoreDevtoolsModule.instrument({
                maxAge: 25,
                logOnly: environment.production,
            })
        ),
    ],
}).catch((err) => console.error(err))
