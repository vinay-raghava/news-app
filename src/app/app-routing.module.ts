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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
