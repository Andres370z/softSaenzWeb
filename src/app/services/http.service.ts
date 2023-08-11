import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }
  sendForm(fomDta: any): Observable<any>{
    const url = 'http://localhost:3000/send';

    //solicitud post
    return this.http.post(url, fomDta)
  }
}
