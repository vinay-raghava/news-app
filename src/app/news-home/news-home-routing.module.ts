import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom imports
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SavedNewsComponent } from './components/saved-news/saved-news.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'latest-news',
        pathMatch: 'full'
    },
    {
        path: 'latest-news',
        component: LatestNewsComponent
    },
    {
        path: 'saved-news',
        component: SavedNewsComponent
    },
    {
        path: 'account-info',
        component: AccountInfoComponent
    },
    {
        path: 'page-not-found',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewsHomeRoutingModule { }
