import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class NgxLoginComponent implements OnInit {
  form: FormGroup;

  constructor(public auth: FirebaseService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ],
      ],
      password: ['', [
        Validators.minLength(6),
        Validators.maxLength(25),
      ],
      ],
    });
  }

  login() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.auth.loginEmail(email, password);
  }
}
