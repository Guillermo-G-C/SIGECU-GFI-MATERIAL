import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidePass = true;
  formAuth: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}

  constructor(
    private fb: FormBuilder,         // {3}
    //private authService: AuthService // {4}
  ) {}

  ngOnInit() {
    this.formAuth = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.formAuth.get(field).valid && this.formAuth.get(field).touched) ||
      (this.formAuth.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.formAuth.valid) {
      //this.authService.login(this.form.value); // {7}
    }
    this.formSubmitAttempt = true;             // {8}
  }

}
