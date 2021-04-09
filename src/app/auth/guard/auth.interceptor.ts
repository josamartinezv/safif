import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
if(
  !request || !request.url
  || (request.url.startsWith('http') && !(environment.END_POINT && request.url.startsWith(environment.END_POINT)))){

    return next.handle(request);
  }

  const token = localStorage.getItem('token') || sessionStorage.getItem('token');

  if(token){
    request = request.clone({
        setHeaders: {
          Authorization : 'Bearer ' + token
        }
    });


  }


    return next.handle(request);
  }
}
