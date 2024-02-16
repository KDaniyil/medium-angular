import { Route } from '@angular/router'

export const routes: Route[] = [
    {
        path: 'register',
        loadComponent: () =>
            import('./auth/components/register/register.component').then(
                (mod) => mod.RegisterComponent
            ),
    },
    // ...
]
