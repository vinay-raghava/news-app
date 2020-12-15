// Angular imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Custom imports
import { ConfigurationService } from './services/configuration.service';
import { FormValidationMessagesPipe } from './pipes/form-validation-messages.pipe';
import { HttpService } from './services/http.service';
import { LoggingService } from './services/logging.service';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FormValidationMessagesPipe,
        MainHeaderComponent
    ],
    exports: [
        FormValidationMessagesPipe,
        MainHeaderComponent
    ],
    providers: [
        ConfigurationService,
        HttpService,
        LoggingService
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ]
})
export class SharedModule { }
