import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './partials/navbar/navbar.component';

import { FakepressService } from './services/fakepress.service';

/*============================================================================
 Route Imports
 ============================================================================*/

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MainSliderComponent } from './partials/main-slider/main-slider.component';
import { NewsComponent } from './components/news/news.component';
import { BlogpostComponent } from './partials/blogpost/blogpost.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        MainSliderComponent,
        NewsComponent,
        BlogpostComponent,
        FooterComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [FakepressService],
    bootstrap: [AppComponent]
})

export class AppModule { }
