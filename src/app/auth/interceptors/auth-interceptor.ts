// Angular imports
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Custom imports
import { AuthService } from '../services/auth.service';
import { LoggingService } from 'src/app/shared';

// ngx cookie service
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private auth: AuthService,
        private router: Router,
        private log: LoggingService,
        private cookieService: CookieService
    ) { }

    /**
     * Intercepts the http requests and adds authorization token if present else force navigates to login page.
     * @param req Http request which is intercepted
     * @param next next Http handler
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the auth token from the service.
        const authToken = this.auth.getAuthorizationToken();

        if (authToken) {
            // Clone the request and replace the original headers with
            // cloned headers, updated with the authorization.
            const authReq = req.clone({
                headers: req.headers.set('Authorization', authToken)
            });

            // send cloned request with header to the next handler.
            return next.handle(authReq).pipe(
                catchError((error: HttpErrorResponse) => {
                    this.log.error(JSON.stringify(error));
                    if (error.status === 401 && !(req.url.includes('register') || req.url.includes('login'))) {
                        this.cookieService.delete('Authorization');
                        return this.navigateToLoginPage();
                    }
                    throw error;
                })
            );
        }
        else {
            if (req.url.includes('register') || req.url.includes('login')) {
                return next.handle(req);
            }
            return this.navigateToLoginPage();
        }
    }

    /**
     * Navigates to login page.
     */
    private navigateToLoginPage() {
        this.router.navigate(['/authorization']);
        return EMPTY;
    }
}
