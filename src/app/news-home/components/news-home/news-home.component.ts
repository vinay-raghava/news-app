// Angular imports
import { Component, Input } from '@angular/core';

// Custom imports
import { LoggingService } from 'src/app/shared';
import { NewsResponse } from '../../interfaces/news-response';
import { NewsSavedResponse } from '../../interfaces/news-saved-response';
import { NewsSaverService } from '../../services/news-saver.service';

@Component({
    selector: 'news-home',
    templateUrl: './news-home.component.html',
    styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent {
    @Input() public newsResponse: NewsResponse[] = [];

    constructor(
        private log: LoggingService,
        private newsSaverService: NewsSaverService
    ) { }

    /**
     * Opens a new window with the given url
     * @param url url to launch
     */
    public launch(url: string): void {
        window.open(url);
    }

    /**
     * Saves the news.
     * @param news News response object
     */
    public saveNews(news: NewsResponse): void {
        news.saving = true;
        this.newsSaverService.saveNews(news).subscribe(
            (response: NewsSavedResponse) => {
                news.saving = false;
                news.saved = response.saved;
            },
            (error) => {
                this.log.error(JSON.stringify(error));
                setTimeout(() => news.saving = false, 2000);
            }
        );
    }

    /**
     * Removes the given news from the saved news.
     * @param news News response object
     */
    public removeSavedNews(news: NewsResponse): void {
        news.saving = true;
        this.newsSaverService.deleteSavedNews(news).subscribe(
            () => {
                news.saved = news.saving = false;
            },
            (error) => {
                this.log.error(JSON.stringify(error));
                setTimeout(() => news.saving = false, 2000);
            }
        );
    }
}