/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2015.
 *
 * ESTA WebJS: Definition des NewsfetcherService-Komponente
 *
 * @author u220374 (Reto Lehmann)
 * @version: 0.0.1
 * @since 23.10.2015, 2015.
 */
import {Injectable} from 'angular2/core';
import {Http} from "angular2/http";

@Injectable()
export class PostsService {
    endpointUrl:string = 'http://jsonplaceholder.typicode.com/posts';

    constructor(private http:Http) {
    }

    getAllPosts() {
        return this.http.get(this.endpointUrl)
            .map(res => res.json());
    }

    getPostById(id) {
        return this.http.get(this.endpointUrl + '/' + id)
            .map(res => res.json());
    }
}