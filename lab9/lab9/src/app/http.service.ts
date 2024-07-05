import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Good } from "./good";
import { map } from "rxjs";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }

    getGoods(): Observable<Good[]> {
        return this.http.get<any>('assets/goods.json').pipe(map(data => {
            let goods = data['goods'];
            return goods.map(function (good: any) {
                return { name: good.goodName, price: good.goodPrice };
            });
        }
        ));
    }

    addUser(user: User): void {
        this.http.post('http://localhost:3000/addUser', user, {
            headers: { 'Content-Type': 'application/json' }
        }).subscribe(
            response => {
                console.log('User added successfully', response);
            },
            error => {
                console.error('Error adding user', error);
            }
        );

    }
}