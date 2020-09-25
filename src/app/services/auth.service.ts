import { UserRoleService } from './user-role.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private url: string = "http://unboundedadmin.theintellify.net/api/login";


  constructor(private http: HttpClient, private router: Router, private userRoleService: UserRoleService) {}

  login(email: string, password: string) {
    return this.http
      .post<any>(
        this.url,
        {
          email: email,
          password: password,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          if(resData.data) {
            // this.userRoleService.userRoleSet(resData.data.user.permissions);
            if(resData.data.user.role === "superadmin") {
              this.handleAuthentication(
                resData.data.token,
                resData.data.user.role,
                resData.data.user.email,
                resData.data.user.id,
                resData.data.user.name,
              );
            } else {
              
            }
          }
        })
      );
  }

  // isLoggedIn(): boolean {
  //   const userData: {
  //     email: string;
  //     id: string;
  //     _token: string;
  //     _tokenExpirationDate: string;
  //   } = JSON.parse(localStorage.getItem('userData'));
  //   if (!userData) {
  //     return false;
  //   }

  //   return true;
  // }

  autoLogin() {
    const userData: {
      _token: string
      role: string,
      email: string;
      id: string;
      name: string
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData._token,
      userData.role,
      userData.email,
      userData.id,
      userData.name
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
    }

  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
  }

  private handleAuthentication(
    token: string,
    role: string,
    email: string,
    id: string,
    name: string
  ) {
    const user = new User(token, role, email, id, name);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }
}
