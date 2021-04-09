import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IVerbal } from './verbal';
import { environment } from 'src/environments/environment'
import { map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { createRequestParams } from 'src/app/utils/utils'

@Injectable({
  providedIn: 'root'
})
export class VerbalService {

  constructor(private http: HttpClient) { }

  /**
   * Service para obtener obtener informacion del llamado de atencion
   */

  public query(): Observable<IVerbal[]> {
    return this.http.get<IVerbal[]>(`${environment.END_POINT}/api/verbalCalled`)
    .pipe(map ( res=> {
      return res;
    }))
  }

  public saveVerbal(attention: IVerbal): Observable<IVerbal> {
    return this.http.post<IVerbal>(`${environment.END_POINT}/api/verbalCalled`, attention)
      .pipe(map(res => {
        return res;
      }))
  };

  /**
   * service para filtro estado, ficha, tipo de llamado, documento del aprendiz
   */
  public getVerbalCalledByFilters(req?: any): Observable<IVerbal[]> {
    let params = createRequestParams(req);
    return this.http.get<IVerbal[]>(`${environment.END_POINT}/api/verbalCalled/search-by-filters`, { params: params })
      .pipe(map(res => {
        return res;
      }))
  };

  public getById (idVerbalCalled: string): Observable<IVerbal>{
    return this.http.get<IVerbal>(`${environment.END_POINT}/api/verbalCalled/${idVerbalCalled}`)
    .pipe(map(res => {
      return res;
    }))
  }

  public getMyVerbalCalled(verbalCalled: IVerbal[]=[]): Observable <IVerbal> {
    return this.http.put<IVerbal>(`${environment.END_POINT}/api/verbalCalled`, verbalCalled)
    .pipe(map(res => {
      return res;
    }))
  }
  public getVerbalCalledByDocument(req?: any): Observable<IVerbal[]> {
    let params = createRequestParams(req);
    return this.http.get<IVerbal[]>(`${environment.END_POINT}/api/verbalCalled/search-by-documentNumber`, { params: params })
      .pipe(map(res => {
        return res;
      }))
  };

  public saveMyVerbalCalled(verbalCalled: IVerbal): Observable<IVerbal> {
    return this.http.put<IVerbal>(`${environment.END_POINT}/api/verbalCalled`,verbalCalled)
    .pipe(map(res => {
      return res;
    }))
  }

  reportFile(): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.get(`${environment.END_POINT}/api/report`, {headers, responseType: 'blob' as 'json'})
    .pipe(map(res => {
      return res;
    }))
  }

}
