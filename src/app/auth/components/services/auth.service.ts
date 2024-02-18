import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'
import { Observable, map } from 'rxjs'
import { environment } from 'src/environment/environment'
import { AuthResponseInterface } from '../../types/auth.response.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { LoginRequestInterface } from '../../types/loginRequest.interface'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    getUser(response: AuthResponseInterface): CurrentUserInterface {
        return response.user
    }

    getCurrentUser(): Observable<CurrentUserInterface> {
        const endpoint = '/user'
        return this.http
            .get<AuthResponseInterface>(`${environment.url}${endpoint}`)
            .pipe(map(this.getUser))
    }

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const endpoint = '/users'
        return this.http
            .post<AuthResponseInterface>(`${environment.url}${endpoint}`, data)
            .pipe(map(this.getUser))
    }

    login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
        const endpoint = '/users/login'
        return this.http
            .post<AuthResponseInterface>(`${environment.url}${endpoint}`, data)
            .pipe(map(this.getUser))
    }
}
