// Angular imports
import { Component } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

// Custom imports
import { AuthorizationStatus } from '../../models/authorization-status';
import { AuthService } from '../../services/auth.service';
import { LoggingService } from 'src/app/shared';
import { UserCredentials } from '../../models/user-credentails';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    'selector': 'register',
    'templateUrl': './register.component.html'
})
export class RegisterComponent {
    public userCredentials: UserCredentials = <UserCredentials>{};
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
    public registrationStatus: AuthorizationStatus = AuthorizationStatus.notStarted;
    public authorizationStatus = AuthorizationStatus;
    constructor(
        private authService: AuthService,
        private log: LoggingService
    ) { }

    /**
     * Registers the user on form submit.
     */
    public onSubmit() {
        this.registrationStatus = AuthorizationStatus.pending;
        this.authService.registerUser(this.userCredentials).subscribe(
            () => {
                this.registrationStatus = AuthorizationStatus.success;
            },
            (error: HttpErrorResponse) => {
                this.log.error(`Error occurred: ${JSON.stringify(error)}`);
                this.registrationStatus = AuthorizationStatus.failed;
            }
        );
    }
}
