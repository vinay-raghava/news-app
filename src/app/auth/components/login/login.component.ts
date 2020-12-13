// Angular imports
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationErrors } from '@angular/forms';

// Custom imports
import { AuthorizationStatus } from '../../models/authorization-status';
import { AuthService } from '../../services/auth.service';
import { LoggingService } from 'src/app/shared';
import { LoginCredentials } from '../../models/user-credentails';

@Component({
    'selector': 'login',
    'templateUrl': './login.component.html'
})
export class LoginComponent {

    public loginCredentials: LoginCredentials = <LoginCredentials>{};
    public customErrorMessages: { [key: string]: ValidationErrors } = {
        'username': {
            'required': 'Username is required.'
        },
        'email': {
            'email': 'Please enter a valid email.',
            'required': 'Email is required.'
        },
        'password': {
            'minlength': 'Password must be minimum of 8 characters.',
            'required': 'Password is required.'
        }
    };
    public loginStatus: AuthorizationStatus = AuthorizationStatus.notStarted;
    public authorizationStatus = AuthorizationStatus;

    constructor(
        private authService: AuthService,
        private log: LoggingService,
        private router: Router
    ) { }

    public onSubmit() {
        this.loginStatus = AuthorizationStatus.pending;
        this.authService.login(this.loginCredentials).subscribe(
            (response: string) => {
                this.authService.storeAuthorizationToken(response);
                this.loginStatus = AuthorizationStatus.success;
                this.router.navigate(['/news-home']);
            },
            (error) => {
                this.log.error(`Error occurred: ${JSON.stringify(error)}`);
                this.loginStatus = AuthorizationStatus.failed;
            }
        );
    }
}
