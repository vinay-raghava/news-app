import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/shared';
import { NewsResponse } from '../../interfaces/news-response';
import { NewsGetterService } from '../../services/news-getter.service';

@Component({
    selector: 'latest-news',
    templateUrl: './latest-news.component.html'
})
export class LatestNewsComponent implements OnInit {
    public newsResponse: NewsResponse[] = [];

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
    private getLatestNews() {
        this.newsGetterService.getLatestNews().subscribe((response: NewsResponse[]) => {
            this.newsResponse = response;
            this.log.info('We got the latest news.');
        });
    }
}
