import { Route } from '@angular/router'

export const routes: Route[] = [
    {
        path: 'register',
        loadChildren: () =>
            import('./auth/auth.routes').then((m) => m.registerRoutes),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./auth/auth.routes').then((m) => m.loginRoutes),
    },
]
