import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Author } from 'src/app/models/Author';
import { Data } from 'src/app/models/Book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public url = environment.urlApi;
  public headers = new Headers();
  public reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.cookieService.get('token')
  });

  constructor(public http: HttpClient, private cookieService: CookieService) { 
    console.log(this.cookieService.get('token'))
  }

  saveAllBookAuthor(){
    return this.http.get<any>(`${this.url}/WEBAPI/SaveAllAuthorsBooks`, {headers: this.reqHeader});
  }

  getAuthors(){
    const reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('token'));
    return this.http.get<Author[]>(`${this.url}/WEBAPI/GetAutors`, {headers: reqHeader});
  }

  getBooksByAuthor(idBook:number, initialDate:Date, endDate:Date){
    return this.http.get<Data>(`${this.url}/api/Book/GetBooksByAuthor?idBook=${idBook}&initialDate=${initialDate}&endDate=${endDate}`, {headers: this.reqHeader});
  }
}
