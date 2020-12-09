// Angular imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { NewsHomeComponent } from './components/news-home/news-home.component';
import { SavedNewsComponent } from './components/saved-news/saved-news.component';

// Custom imports
import { NewsHomeRoutingModule } from './news-home-routing.module';
import { NewsGetterService } from './services/news-getter.service';
import { NewsSaverService } from './services/news-saver.service';

@NgModule({
    declarations: [NewsHomeComponent, AccountInfoComponent, LatestNewsComponent, SavedNewsComponent],
    bootstrap: [NewsHomeComponent, LatestNewsComponent, SavedNewsComponent],
    exports: [NewsHomeComponent],
    imports: [SharedModule, NewsHomeRoutingModule, CommonModule],
    providers: [NewsGetterService, NewsSaverService]
})
export class NewsHomeModule { }
