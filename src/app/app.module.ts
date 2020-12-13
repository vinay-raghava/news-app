// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Custom imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsHomeModule } from './news-home/news-home.module';
import { AuthorizationModule } from './auth/authorization.module';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AuthorizationModule,
        BrowserModule,
        CoreModule,
        HttpClientModule,
        NewsHomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
