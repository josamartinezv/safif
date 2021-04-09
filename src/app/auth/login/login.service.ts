import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { ICredentials } from '../models/credentials.model';
import { Observable } from 'rxjs';
import{Account}from '../models/account.model';
import { flatMap } from 'rxjs/operators';
import { AccountService } from '../account.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(
    private accountService: AccountService,
    private authService: AuthService
  ) { }
  login(credentials: ICredentials): Observable<Account | null> {

    return this.authService.login(credentials)
    .pipe(flatMap(() => this.accountService.identity(true)));

  }
  logout(): void {
    this.authService.logout().subscribe(null, null, () => this.accountService.authenticate(null));
    }
}