import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsers } from './users';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { createRequestParams } from 'src/app/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  public searchUserstByDocument(req?: any): Observable<IUsers> {
    let params = createRequestParams(req);
    return this.http.get<IUsers>(`${environment.END_POINT}/api/users/searchByDocumentnumber`, { params: params })
      .pipe(map(res => {
        return res;
      }));
  }

  public getById (idUsers: string): Observable<IUsers>{
    return this.http.get<IUsers>(`${environment.END_POINT}/api/users/${idUsers}`)
    .pipe(map(res => {
      return res;
    }))
  }

  public saveUser (users: IUsers): Observable<IUsers>{
    return this.http.post<IUsers>(`${environment.END_POINT}/api/users/`, users)
    .pipe(map(res => {
      return res;
    }))
  }


  public searchUser(req?: any): Observable<IUsers[]>{
    let params = createRequestParams(req);
    return this.http.get<IUsers[]>(`${environment.END_POINT}/api/users`, { params: params })
    .pipe(map ( res => {
      return res;
    }))
  }

  public update(users: IUsers): Observable<IUsers>{
    return this.http.put<IUsers>(`${environment.END_POINT}/api/users`, users)
    .pipe(map ( (res) => {
      return res;
    }))
  }

  rols(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.END_POINT}/api/rol`)

  }

}
