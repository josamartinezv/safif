import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReplaySubject, Observable, of } from 'rxjs';
import { Account } from './models/account.model';
import { createRequestParams } from '../utils/utils';
import { environment } from 'src/environments/environment';
import { catchError, tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private authenticationState = new ReplaySubject<Account | null>(1);
  private userIdentity: Account | null = null;
  private accountCache?: Observable<Account | null>;

  constructor(
  private http: HttpClient,
  private router: Router) { }

  identity(force?: boolean): Observable<Account | null>{

    var estado = true;

    if(!this.accountCache || force || !this.isAuthenticated()) {
    
      this.accountCache = this.fetch().pipe(catchError(() => {
         return of(null);
      }),
      tap((account: Account | null) => {
        this.authenticate(account);
        if(account){
          this.router.navigate(['/dashboard'])
        }

      }),
      shareReplay()
      );

    }
    return this.accountCache;
  }
  isAuthenticated(): boolean {
    return this.userIdentity !== null ;
  }
  //mensaje de identidad
  getFullName(): string{
    return this.userIdentity.name + " " + this.userIdentity.lastName;
  }

  getFullInfo(): any{
    return this.userIdentity.name + " " + this.userIdentity.lastName, this.userIdentity.documentNumber;
  }


  getIdUsers():any{
    return this.userIdentity.idUsers;
  }
  
  authenticate(identity: Account | null): void {
    this.userIdentity = identity;
  }
  hasAnyAuthority(authorities: string[] | string): boolean {
    console.log('entro aqui'+ authorities);
    if(! this.userIdentity || !this.userIdentity.authorities){
      return false;
      
    }
    if (!Array.isArray(authorities)) {
      authorities = [authorities];
    }

    return this.userIdentity.authorities.some((authority: string) => authorities.includes(authority));

  }
  getAuthenticationState(): Observable<Account | null>{
    return this.authenticationState.asObservable();
  }
  

  private fetch(): Observable<Account> {
    const jwt = localStorage.getItem('token') || sessionStorage.getItem('token');
    let params: any;

    if(jwt) {
      const payload: any = JSON.parse(atob(jwt.split('.')[1]));
      params = createRequestParams({username: payload.user_name});
    } else {
      params = null;
    }
      return this.http.get<Account>(`${environment.END_POINT}/api/user/account`, {params: params});
    }

    getName(): string{
      return this.userIdentity.name ;
    }
    getLastName(): string{
    return this.userIdentity.lastName ;
    }
    getDocumentNumber(): string{
      return this.userIdentity.documentNumber;
      }
    getAuthorities(): string[]{
      return this.userIdentity.authorities;
    }

    }
  
 
