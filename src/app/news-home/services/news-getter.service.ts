import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from 'src/app/core';

import { HttpService } from 'src/app/shared';
import { NewsResponse } from '../interfaces/news-response';

@Injectable()
export class NewsGetterService {
    constructor(
        private httpService: HttpService
    ) { }

    /**
     * Returns the observable of latest news response by calling the latest news API.
     */
    public getLatestNews(): Observable<NewsResponse[]> {
        return this.httpService.get<NewsResponse>(Endpoints.getLatestNews);
    }

    /**
     * Returns the observable of saved news response by calling the saved news API.
     */
    public getSavedNews(): Observable<NewsResponse[]> {
        return this.httpService.get<NewsResponse>(Endpoints.savedNews);
    }
}
