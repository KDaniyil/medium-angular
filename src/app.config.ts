import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { routes } from './app/routes'
import { reducers } from './app/auth/store/reducers'
import { BrowserModule } from '@angular/platform-browser'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from './environment/environment'
import { provideRouter } from '@angular/router'
import { provideState, provideStore } from '@ngrx/store'

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
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
}
