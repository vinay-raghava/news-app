// Angular imports
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

// Custom imports
import { AuthService } from './auth.service';

// Rxjs imports
import { Observable } from 'rxjs';

@Injectable()
export class CanActivateService implements CanActivate {
    constructor(
        private auth: AuthService,
        private router: Router
    ) {
    }
    /**
     * Triggered when any user tries to access login or register page after logging in. By default they are navigated to news home.
     * @param _route Activated Route Snapshot
     * @param _state Router State Snapshot
     */
    canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.auth.getAuthorizationToken()) {
            this.router.navigate(['/news-home']);
            return false;
        }
        return true;
    }
}
