import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';


const routes: Routes = [
    {
        // Default path
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'news',
        component: NewsComponent
    }
];

// Use hash in location routes, for hosting on heroku
const routeSettings = {
    useHash: true
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, routeSettings)
    ],
    declarations: [],
    exports: [ RouterModule ]
})



export class AppRoutingModule { }
