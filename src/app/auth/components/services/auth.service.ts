import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { RegisterRequestInterface } from '../../types/registerRequest.interface'
import { Observable } from 'rxjs'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { environment } from 'src/environment/environment'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const endpoint = '/users'
        return this.http.post<CurrentUserInterface>(
            `${environment.url}${endpoint}`,
            data
        )
    }
}
