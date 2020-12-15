// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'news-home',
        pathMatch: 'full'
    },
    {
        path: 'news-home',
        loadChildren: () => import('./news-home/news-home.module').then(m => m.NewsHomeModule)
    },
    {
        path: 'authorization',
        loadChildren: () => import('./auth/authorization.module').then(m => m.AuthorizationModule)
    },
    {
        path: '**',
        redirectTo: 'news-home/page-not-found',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
