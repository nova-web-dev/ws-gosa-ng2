import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './partials/navbar/navbar.component';

/*============================================================================
 Route Imports
 ============================================================================*/

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MainSliderComponent } from './partials/main-slider/main-slider.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        MainSliderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
