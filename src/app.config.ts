import { ApplicationConfig, importProvidersFrom } from '@angular/core'
import { routes } from './app/routes'
import { BrowserModule } from '@angular/platform-browser'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { environment } from './environment/environment'
import { provideRouter } from '@angular/router'
import { provideState, provideStore } from '@ngrx/store'
import { authFeatureKey, authReducer } from './app/auth/store/reducers'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { provideEffects } from '@ngrx/effects'
import * as authEffects from './app/auth/store/effects'
import { provideRouterStore, routerReducer } from '@ngrx/router-store'
import { authInterceptor } from './app/shared/services/auth.interseptor'

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
        provideRouter(routes),
        provideStore({
            router: routerReducer,
        }),
        provideRouterStore(),
        provideState(authFeatureKey, authReducer),
        provideEffects(authEffects),
        provideStoreDevtools({
            maxAge: 25,
            logOnly: environment.production,
            autoPause: true,
            trace: false,
            traceLimit: 7,
        }),
        importProvidersFrom(BrowserModule),
        provideEffects(),
    ],
}
