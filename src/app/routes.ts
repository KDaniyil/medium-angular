import { Route } from '@angular/router'

export const ROUTES: Route[] = [
    {
        path: 'register',
        loadComponent: () =>
            import('./auth/components/register/register.component').then(
                (mod) => mod.RegisterComponent
            ),
    },
    // ...
]
