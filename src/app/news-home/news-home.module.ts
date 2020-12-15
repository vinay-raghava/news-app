// Angular imports
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Custom imports
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { AccountInformationService } from './services/account-information.service';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { NewsGetterService } from './services/news-getter.service';
import { NewsHomeComponent } from './components/news-home/news-home.component';
import { NewsHomeRoutingModule } from './news-home-routing.module';
import { NewsSaverService } from './services/news-saver.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SavedNewsComponent } from './components/saved-news/saved-news.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [AccountInfoComponent, LatestNewsComponent, NewsHomeComponent, PageNotFoundComponent, SavedNewsComponent],
    bootstrap: [LatestNewsComponent, NewsHomeComponent, SavedNewsComponent],
    exports: [NewsHomeComponent],
    imports: [CommonModule, FormsModule, NewsHomeRoutingModule, SharedModule],
    providers: [AccountInformationService, NewsGetterService, NewsSaverService]
})
export class NewsHomeModule { }
