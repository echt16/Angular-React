import { Injectable } from "@angular/core";
import { Root } from "./film/root";
import { Observable } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class FilmService {
    constructor(private http: HttpClient) { }

    getFilms(name: string, count: number, page: number) : Observable<Root> {
        return this.http.get<Root>(`https://api.kinopoisk.dev/v1.4/movie/search?page=${page}&limit=${count}&query=${name}`, {
            headers: {
                "accept": "application/json",
                "X-API-KEY": "VYYET14-NY14CBM-PXYJETD-QS0ZW8M",
                "Accept": "*/*"
            }
        });
    }
}