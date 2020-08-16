import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Client } from './client';


@Injectable({
    providedIn: 'root'
})

export class RegistrationService {
    private url = 'assets/clients/clients.json';

    constructor(private http: HttpClient){}

    createClient(client: Client): Observable<Client> {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        client.id = null;
        return this.http.post<Client>(this.url, client, {headers: headers})
            .pipe(
                tap(data=>console.log('CreateClient: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    private handleError(err: HttpErrorResponse): Observable<never>{

        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}