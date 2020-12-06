import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AuthResponseData {
  accessToken:	string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  signUp(emailUsr: string, passwordUsr: string): Observable<any> {
    return this.http.post<AuthResponseData>('http://localhost:3000/register',
      {
        email: emailUsr,
        password: passwordUsr
      }).pipe(
      // do some actions without changing the response
      tap(resDat => {
        this.handleAuthentication(emailUsr, resDat.accessToken);
      }));
  }

  login(emailUsr: string, passwordUsr: string): Observable<any> {
    return this.http.post<AuthResponseData>('http://localhost:3000/login',
      {
        email: emailUsr,
        password: passwordUsr
      }).pipe(
      tap(resDat => {
        this.handleAuthentication(emailUsr, resDat.accessToken);
      }));
  }

  logout(): void {
    this.user.next(null);
    localStorage.removeItem('userData');
  }

  private handleAuthentication(email: string, token: string): void {
    const usr = new User(email, token);
    this.user.next(usr);
    // convert the usr to string and store it to localStorage
    localStorage.setItem('userData', JSON.stringify(usr));
  }

  autoLogin(): void {
    // get the user from localStorage
    const userData: User = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }

    this.user.next(userData);
  }
}
