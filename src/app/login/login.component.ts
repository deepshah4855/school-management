import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  errorMessage: string = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,63}$')]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn = () => {
    let authObs: Observable<any>;
    this.isLoading = true;
    authObs = this.authService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value);
    
    authObs.subscribe(
      resData => {
        console.log(resData);
        if(resData.code === 200) {
          this.isLoading = false;
          this.router.navigate(['']);
          // switch(resData.data.user.role) {
          //   case 'superadmin': {
          //     this.isLoading = false;
          //     this.router.navigate(['']);
          //     break;
          //   }
          //   case 'user': {
          //     this.errorMessage = 'Please login with admin account';
          //     this.isLoading = false;
          //     break
          //   }
          // }  
        } else if (resData.code === 401) {
          this.isLoading = false;
          switch(resData.message) {
            case 'Failed to login, Password Mismatch': {
              this.loginForm.controls['password'].setErrors({'incorrect': true});
              break;
            }
            case 'User doesn\'t exist.': {
              this.loginForm.controls['email'].setErrors({'incorrect': true});
              break
            }
          }         
        } else {
          this.errorMessage = 'An unexpected error ocurred';
          this.isLoading = false;
        }
      }
    );
  }
}
