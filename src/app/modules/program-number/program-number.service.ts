import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProgramNumber } from './program-number';
import { Observable } from 'rxjs';
import { createRequestParams } from 'src/app/utils/utils';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProgramNumberService {

  constructor(private http: HttpClient) { }

  public searchUsersByCourse(req?: any): Observable<IProgramNumber> {
    let params = createRequestParams(req);
    return this.http.get<IProgramNumber>(`${environment.END_POINT}/api/programNumber/searchByCourse`, { params: params })
      .pipe(map(res => {
        return res;
      }));
  }

  
}
