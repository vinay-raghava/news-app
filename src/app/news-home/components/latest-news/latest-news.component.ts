// Angular imports
import { Component, OnInit } from '@angular/core';

// Custom imports
import { LoggingService } from 'src/app/shared';
import { NewsResponse } from '../../interfaces/news-response';
import { NewsGetterService } from '../../services/news-getter.service';

@Component({
    selector: 'latest-news',
    templateUrl: './latest-news.component.html'
})
export class LatestNewsComponent implements OnInit {
    public newsResponse: NewsResponse[] = [];
    public isLoading = false;
    public country = '';
    constructor(
        private newsGetterService: NewsGetterService,
        private log: LoggingService,
    ) { }

    public ngOnInit(): void {
        this.getLatestNews();
    }

    /**
     * Gets the latest news
     */
    public getLatestNews(keyword?: string) {
        this.isLoading = true;
        this.newsGetterService.getLatestNews(this.country, keyword).subscribe((response: NewsResponse[]) => {
            this.newsResponse = response;
            this.isLoading = false;
            this.log.info('We got the latest news.');
        },
            (error) => {
                this.log.error(JSON.stringify(error));
                this.isLoading = false;
            });
    }

    /**
     * Updates the country as given country and fetches the news for it.
     * @param country country to fetch the news for.
     */
    public fetchLatestNewsForCountry(country: string) {
        this.country = country;
        this.getLatestNews();
    }

}
