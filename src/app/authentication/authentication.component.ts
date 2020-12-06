import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  isLoginMode = true;

  errorMsg: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode(): void{
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm): void {
    if (!authForm.valid) {
      return;
    }
    const email = authForm.value.email;
    const password = authForm.value.password;

    let authObs: Observable<AuthResponseData>;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(
      data => {
        this.router.navigate(['/']).then();
      },
      error => {
        this.errorMsg = error.error;
      }
    );
  }

}
