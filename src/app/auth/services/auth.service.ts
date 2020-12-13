// Angular imports
import { Injectable } from '@angular/core';

// Custom imports
import { Endpoints } from 'src/app/core';
import { HttpService } from 'src/app/shared';
import { LoginCredentials, UserCredentials } from '../models/user-credentails';

// Ngx cookie service
import { CookieService } from 'ngx-cookie-service';

// Rxjs imports
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

    constructor(
        private httpService: HttpService,
        private cookieService: CookieService
    ) { }

    /**
     * Stores the Authorization token to the cookie.
     * @param authToken Authorization token
     */
    public storeAuthorizationToken(authToken: string) {
        this.cookieService.delete('Authorization');
        this.cookieService.set('Authorization', authToken);
    }

    /**
     * Gets the authorization token from the cookie.
     */
    public getAuthorizationToken(): string {
        return this.cookieService.get('Authorization');
    }

    /**
     * Posts the given credentials to Registration API.
     * @param userCredentials user credentials to register.
     */
    public registerUser(userCredentials: UserCredentials): Observable<object> {
        return this.httpService.post(Endpoints.register, userCredentials);
    }

    /**
     * Posts the given login credentials to login API.
     * @param loginCredentials login credentials
     */
    public login(loginCredentials: LoginCredentials): Observable<string> {
        return this.httpService.post<LoginCredentials, string>(Endpoints.login, loginCredentials);
    }
}
