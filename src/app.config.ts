import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { routes } from './app/routes'
import { BrowserModule } from '@angular/platform-browser'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { environment } from './environment/environment'
import { provideRouter } from '@angular/router'
import { provideState, provideStore } from '@ngrx/store'
import { authFeatureKey, authReducer } from './app/auth/store/reducers'

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideStore(),
        provideState(authFeatureKey, authReducer),
        provideStoreDevtools({
            maxAge: 25,
            logOnly: environment.production,
            autoPause: true,
            trace: false,
            traceLimit: 7,
        }),
        importProvidersFrom(BrowserModule),
    ],
}
