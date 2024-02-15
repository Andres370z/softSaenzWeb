import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(
    ) { 
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let final: string = `${localStorage.getItem('token')}`;
    const token: any = JSON.parse(final);
    if (token == null) {
      return next.handle(req);
    }
    const headers = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token.authorisation.accessToken}`)
    });
    return next.handle(headers);
  }
}
