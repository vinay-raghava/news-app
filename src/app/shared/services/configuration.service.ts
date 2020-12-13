// Angular imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Custom imports
import { Endpoints } from 'src/app/core';
import { HttpService } from './http.service';

@Injectable()
export class ConfigurationService {
    constructor(private httpService: HttpService) { }

    /**
     * Gets the available countries to fetch news.
     */
    public getAvailableCountries(): Observable<string[]> {
        return this.httpService.get<string>(Endpoints.countries);
    }
}
