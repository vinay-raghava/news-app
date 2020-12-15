// Angular imports
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    public defaultCountry = 'in';
    public keyword = '';

    @Input() public disableKeywordSearch = false;
    @Input() public disableCountrySearch = false;
    @Input() public disableAccountDropdown = false

    @Output() public country: EventEmitter<string> = new EventEmitter<string>();
    @Output() public keywordEm: EventEmitter<string> = new EventEmitter<string>();

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
                return of([this.defaultCountry]);
            })
        );
    }

    /**
     * Emits the country to fetch the news for.
     * @param country country id
     */
    public changeCountry(country: string) {
        this.keyword = '';
        this.defaultCountry = country;
        this.country.emit(country);
    }

    /**
     * Emits the keyword to search the news
     */
    public search() {
        if (this.keyword) {
            this.keywordEm.emit(this.keyword);
        }
    }

    /**
     * Logs out of the application
     */
    public logout() {
        this.cookieService.deleteAll();
        this.router.navigate(['/authorization']);
    }
}
