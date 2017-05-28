import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FakepressService {
    private serverURL = '';

    constructor(
        private http: Http
    ) { }

    // getCatch(id: string): Promise<Catch> {
    //     const url = `${this.serverURL}${id}`;
    //
    //     console.log('Request ID ' + id);
    //     console.log('Full request URL ' + url);
    //
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(response => response.json()['catch-data'] as Catch)
    //         .catch(this.handleError);
    // }

    // Test

    getPosts(): any {
        const posts = [
            {
                title: 'First Post',
                content: 'This is post content. Bla bla bla.'
            },
            {
                title: 'Second Post',
                content: 'This is post content. Bla bla bla.'
            }
        ];

        return posts;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
