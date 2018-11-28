import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from '../../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidePass = true;
  formAuth: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.formAuth = this.fb.group({     // {5}
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.formAuth.controls; }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.formAuth.get(field).valid && this.formAuth.get(field).touched) ||
      (this.formAuth.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formAuth.invalid) {
        return;
    }

    this.authService.login(this.formAuth.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error.message;
                this.loading = false;
            });


  }

}
