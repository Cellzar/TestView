import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SegurityService {
  public url: string = environment.urlApi;
  constructor(public http: HttpClient) { }

  login(usuario: Usuario){
    return this.http.get<any>(`${this.url}/Segurity/getUser?user=${usuario.user}&password=${usuario.password}`);
  }
}
