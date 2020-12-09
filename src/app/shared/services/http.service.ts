import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { LoggingService } from './logging.service';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient, private log: LoggingService) {
    }

    /**
     * Posts the given data to the API by using the given url.
     * @param url url of the API
     * @param data data to be posted
     * @param parameters http params
     * @param headers http headers
     */
    public post<T, U = T>(url: string, data: T, parameters?: HttpParams, headers?: HttpHeaders): Observable<U> {
        return this.http.post<U>(url, data, { observe: 'response', params: parameters, headers }).pipe(
            map(response => response.body ? response.body : {} as U),
            catchError(this.handleError<U>())
        );
    }

    /**
     * Gets the data of type T by calling the GET on given API url.
     * @param url url of the API
     * @param parameters http params
     */
    public get<T>(url: string, parameters?: HttpParams): Observable<T[]> {
        return this.http.get<T[]>(url, { observe: 'response', params: parameters }).pipe(
            map(response => response.body ? response.body : []),
            catchError(this.handleError<T[]>())
        );
    }

    /**
     * Calls the DELETE method on the given API url.
     * @param url url of the API
     * @param parameters http params
     */
    public delete<T>(url: string, parameters?: HttpParams): Observable<T> {
        return this.http.delete<T>(url, { observe: 'response', params: parameters }).pipe(
            map(response => response.body ? response.body : {} as T),
            catchError(this.handleError<T>())
        );
    }

    /**
     * Logs the error.
     */
    private handleError<T>() {
        return (error: HttpErrorResponse): Observable<T> => {
            this.log.error('HTTP error occurred ' + JSON.stringify(error));
            throw error;
        };
    }

}
