import {Component, OnInit} from '@angular/core';

import {FakepressService} from '../../services/fakepress.service'

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

    posts: any;

    constructor(private fakepress: FakepressService) {
        this.posts = fakepress.getPosts();
    }

    ngOnInit() {

    }

}
