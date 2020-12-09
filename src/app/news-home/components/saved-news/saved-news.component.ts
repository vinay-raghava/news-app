import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/shared';
import { NewsResponse } from '../../interfaces/news-response';
import { NewsGetterService } from '../../services/news-getter.service';

@Component({
    selector: 'saved-news',
    templateUrl: './saved-news.component.html'
})
export class SavedNewsComponent implements OnInit {
    public newsResponse: NewsResponse[] = [];

    constructor(
        private newsGetterService: NewsGetterService,
        private log: LoggingService,
    ) { }

    public ngOnInit(): void {
        this.getSavedNews();
    }

    /**
     * Gets the saved news.
     */
    private getSavedNews() {
        this.newsGetterService.getSavedNews().subscribe((response: NewsResponse[]) => {
            this.newsResponse = response;
            this.log.info('We got the latest news.');
        });
    }
}
