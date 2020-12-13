// Angular imports
import { Component, OnInit } from '@angular/core';

// Custom imports
import { LoggingService } from 'src/app/shared';
import { NewsResponse } from '../../interfaces/news-response';
import { NewsGetterService } from '../../services/news-getter.service';

@Component({
    selector: 'saved-news',
    templateUrl: './saved-news.component.html'
})
export class SavedNewsComponent implements OnInit {
    public newsResponse: NewsResponse[] = [];
    public isLoading = false;

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
        this.isLoading = true;
        this.newsGetterService.getSavedNews().subscribe((response: NewsResponse[]) => {
            this.newsResponse = response;
            this.isLoading = false;
            this.log.info('We got the latest news.');
        },
            (error) => {
                this.log.error(JSON.stringify(error));
                this.isLoading = false;
            }
        );
    }
}
