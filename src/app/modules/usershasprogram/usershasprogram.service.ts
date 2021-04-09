import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { createRequestParams } from 'src/app/utils/utils';
import { IUsersProgram } from './usershasprogram';
import { create } from 'domain';

@Injectable({
  providedIn: 'root'
})
export class UsershasprogramService {
  constructor(private http: HttpClient) { }

  public query(): Observable<IUsersProgram[]> {
    return this.http.get<IUsersProgram[]>(`${environment.END_POINT}/api/usersHasProgramNumber`)
      .pipe(map(res => {
        return res;
      }))
  }

  public getUsersHasCourseByNumber(req?: any): Observable<IUsersProgram[]> {
    let params = createRequestParams(req);

    return this.http.get<IUsersProgram[]>(`${environment.END_POINT}/api/usersHasProgramNumber/search-by-programNumber`, { params: params })
      .pipe(map(res => {
        return res;
      }));
  }

  public getUsersHasCourseByDocumentNumber(req?: any): Observable<IUsersProgram[]> {
    let params = createRequestParams(req);

    return this.http.get<IUsersProgram[]>(`${environment.END_POINT}/api/usersHasProgramNumber/search-by-documentNumber`, { params: params })
      .pipe(map(res => {
        return res;
      }));
  }

  public getByProgramNumberAndUsersAndUsersCourseRol(req?: any): Observable<IUsersProgram[]> {
    let params = createRequestParams(req);

    return this.http.get<IUsersProgram[]>(`${environment.END_POINT}/api/usersHasProgramNumber/search-by-filters`, { params: params })
    .pipe(map(res => {
      return res;
  }));
}

  public getById(idUser: string): Observable<IUsersProgram> {
    return this.http.get<IUsersProgram>(`${environment.END_POINT}/api/usersHasProgramNumber/${idUser}`)
      .pipe(map(res => {
        return res;
      }));

  }

  public getUsersByMyDocument(req?: any): Observable<IUsersProgram[]> {
    let params = createRequestParams(req);

    return this.http.get<IUsersProgram[]>(`${environment.END_POINT}/api/usersHasProgramNumber/document-number`, { params: params })
    .pipe(map(res => {
      return res;
  }));
}
}

