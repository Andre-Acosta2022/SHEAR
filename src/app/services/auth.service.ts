import { HttpClient } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private LOGIN_URL = "http://localhost:8080/api/auth/login";
  private tokenKey = 'authToken';

  constructor(
    private httpClient: HttpClient, 
    private router: Router,) { }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.LOGIN_URL, { username, password }).pipe(
      tap(response => {
        if (response.token) {
          this.setToken(response.token);
        }
      }),
      catchError(error=> {
        console.error('Login error', error);
        throw error;
      })
    );
  }
    
  
private setToken(token:string):void{
  localStorage.setItem(this.tokenKey, token);
}
private getToken():string |null {
 return localStorage.getItem(this.tokenKey);
}
isAuthenticated(): boolean {
  const token = this.getToken();
  if (!token) {
    return false;
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  } catch (e) {
    console.error('Token malformed', e);
    return false;
  }
}
logout() {
    
  localStorage.removeItem(this.tokenKey);
  this.router.navigate(['/login']);

}
}