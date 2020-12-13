// Angular imports
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Custom imports
import { AuthInterceptor } from './interceptors/auth-interceptor';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthService } from './services/auth.service';
import { CanActivateService } from './services/can-activate.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AuthorizationRoutingModule,
        SharedModule,
        RouterModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        CanActivateService,
        AuthService
    ]
})
export class AuthorizationModule { }
