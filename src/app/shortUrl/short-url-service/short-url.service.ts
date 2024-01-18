import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateShortUrlPayload } from '../model/create-short-url.payload';
import { ShortUrlModel } from '../model/short-url-model';
@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {
  private apiUrl: String="http://localhost:8080/api/acortador";
  constructor(private http: HttpClient) { }


  createShortUrl(acortador: CreateShortUrlPayload): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, acortador); 
  }
  getAllShortUrls(): Observable<ShortUrlModel[]>{
    return this.http.get<ShortUrlModel[]>(`${this.apiUrl}`);
  }
  deleteShortUrl(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  updateShortUrl(id: number, acortador: CreateShortUrlPayload): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, acortador);
  }
}
