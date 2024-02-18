import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'
import { Observable, map } from 'rxjs'
import { environment } from 'src/environment/environment'
import { AuthResponseInterface } from '../../types/auth.response.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const endpoint = '/users'
        return this.http
            .post<AuthResponseInterface>(`${environment.url}${endpoint}`, data)
            .pipe(map((response: AuthResponseInterface) => response.user))
    }
}
