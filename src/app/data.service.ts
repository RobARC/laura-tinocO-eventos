import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private  http: HttpClient) { }

  obtenerPaquetes(){
    this.http.get('https://laura-tinoco-default-rtdb.firebaseio.com/')
  }
}
