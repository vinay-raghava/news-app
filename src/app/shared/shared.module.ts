// Angular imports
import { NgModule } from '@angular/core';

// Custom imports
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { HttpService } from './services/http.service';
import { LoggingService } from './services/logging.service';

@NgModule({
    declarations: [
        MainHeaderComponent
    ],
    exports: [
        MainHeaderComponent
    ],
    providers: [
        LoggingService,
        HttpService
    ]
})
export class SharedModule { }
