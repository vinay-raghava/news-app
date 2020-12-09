import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Endpoints } from 'src/app/core';
import { HttpService } from 'src/app/shared';
import { NewsResponse } from '../interfaces/news-response';
import { NewsSavedResponse } from '../interfaces/news-saved-response';

@Injectable()
export class NewsSaverService {
    constructor(private httpService: HttpService) { }

    /**
     * Posts the given news response to backend to save.
     * @param newsResponse news response to be saved.
     */
    public saveNews(newsResponse: NewsResponse): Observable<NewsSavedResponse> {
        return this.httpService.post<NewsResponse, NewsSavedResponse>(Endpoints.savedNews, newsResponse);
    }

    /**
     * Deletes the news response.
     * @param newsResponse news response to be deleted
     */
    public deleteSavedNews(newsResponse: NewsResponse): Observable<NewsResponse> {
        return this.httpService.delete<NewsResponse>(Endpoints.savedNews + '/' + newsResponse.id);
    }
}
