// Angular imports
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Custom imports
import { Endpoints } from 'src/app/core';
import { HttpService } from 'src/app/shared';
import { NewsResponse } from '../interfaces/news-response';

@Injectable()
export class NewsGetterService {
    constructor(
        private httpService: HttpService
    ) { }

    /**
     * Returns the observable of latest news response by calling the latest news API with the filter parameters.
     */
    public getLatestNews(country?: string, keyword?: string): Observable<NewsResponse[]> {
        let params: { [key: string]: string } = {};
        if (country) {
            params['country'] = country;
        }
        if (keyword) {
            params['keyword'] = keyword;
        }
        return this.httpService.get<NewsResponse>(Endpoints.getLatestNews, new HttpParams({ fromObject: Object(params) }));
    }

    /**
     * Returns the observable of saved news response by calling the saved news API.
     */
    public getSavedNews(): Observable<NewsResponse[]> {
        return this.httpService.get<NewsResponse>(Endpoints.savedNews);
    }
}
