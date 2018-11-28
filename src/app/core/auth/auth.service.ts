import { Injectable } from '@angular/core';
import { UserAuth } from './user-auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from '../../../../node_modules/rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

export const TOKEN_KEY: string = 'jwt_token';
export const USERNAME_KEY = 'AuthUsername';
export const AUTHORITIES_KEY = 'AuthAuthorities';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  baseUrl: string = 'http://localhost:8888/sigecu/auth';

  private currentUserSubject: BehaviorSubject<UserAuth>;
  public currentUser: Observable<UserAuth>;
  private loggedIn = new BehaviorSubject<boolean>(false);
  private roles: Array<string> = [];

  constructor(
    private router: Router, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserAuth>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UserAuth {
    return this.currentUserSubject.value;
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('jwt_token');
    // Check whether the token is expired and return
    // true or false
    return this.isTokenExpired(token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) return null;

    const date = new Date(0); 
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if(!token) token = this.getToken();
    if(!token) return true;

    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  login (data) {
    return this.http.post<any>(this.baseUrl, data)
    .pipe(map(data => {
      // login successful if there's a jwt token in the response
      if (data && data.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.saveAuthorities(data.authorities);
          localStorage.setItem('jwt_token', data.token);
          this.currentUserSubject.next(data);
          this.loggedIn.next(true);
      }

      return data;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    this.loggedIn.next(false);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('jwt_token');
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth']);
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];
 
    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }
 
    return this.roles;
  }

}


/**
https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
https://medium.com/@amcdnl/authentication-in-angular-jwt-c1067495c5e0
https://www.npmjs.com/package/jsonwebtoken
 */