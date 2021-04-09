import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICredentials } from './models/credentials.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(credentials: ICredentials): Observable<any> {

    const apiKey = btoa('attention' + ':' + '12345');

    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded', 

      'Authorization': 'Basic ' + apiKey
    });

    const params= new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', credentials.documentnumber);
    params.set('password', credentials.password);

    console.log(params.toString());
   
    return this.http.post<any>(`${environment.END_POINT}/oauth/token`,params.toString() ,{headers: httpHeaders, observe: 'response'})
    .pipe(map((res: any) =>{
      console.warn("DATA",res.body);
      const jwt = res.body.access_token;
      this.storageAuthenticationToken(jwt, credentials.rememberMe);
    }));
  }
  storageAuthenticationToken(jwt: string, remenberMe:boolean): void{
    if(remenberMe){
      localStorage.setItem('token', jwt);
    }
    else{
      sessionStorage.setItem('token', jwt);
    }
  }

    logout(): Observable<any> {
      return new Observable(observe => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        observe.complete();
      });
  }
}