import {NgModule} from '@angular/core';
import {Component, OnInit, Input} from '@angular/core';
import {RouterModule, Routes,} from '@angular/router';
import {AppRoutingModule} from '../../app-routing.module';
declare let $: any;

@Component({
    selector: 'app-main-slider',
    templateUrl: './main-slider.component.html',
    styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

        let options = {
            nextButton: false,
            prevButton: false,
            pagination: true,
            animateStartingFrameIn: true,
            autoPlay: true,
            autoPlayDelay: 3000,
            preloader: true
        };

        let mySequence = $("#sequence").sequence(options).data("sequence");

    }

}
