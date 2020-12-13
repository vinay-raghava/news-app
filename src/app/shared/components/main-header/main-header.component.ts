// Angular imports
import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Rxjs imports
import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Custom imports
import { LocatableConstants } from 'src/app/core';
import { ConfigurationService } from '../../services/configuration.service';
import { LoggingService } from '../../services/logging.service';

// ngx cookie service
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
    public locatableConstants = LocatableConstants;
    public availableCountries: Observable<string[]> = EMPTY;
    private defaultLanguage = 'in';
    constructor(
        private configurationService: ConfigurationService,
        private log: LoggingService,
        private router: Router,
        private cookieService: CookieService
    ) { }

    public ngOnInit() {
        this.getAvailableCountries();
    }

    /**
     * Gets the available countries.
     */
    private getAvailableCountries() {
        this.availableCountries = this.configurationService.getAvailableCountries().pipe(
            catchError((error) => {
                this.log.error(JSON.stringify(error));
                return of([this.defaultLanguage]);
            })
        );
    }

    /**
     * Logs out of the application
     */
    public logout() {
        this.cookieService.deleteAll();
        this.router.navigate(['/authorization']);
    }
}
