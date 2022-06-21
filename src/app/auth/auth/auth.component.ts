import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode = true;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {  //formun geçerli olup olmadığının kontrolü (ekstra kontrol)
      return;           //form geçersizse bu yöntem tetiklenmeyecek, gönder butonu devre dışı kalacak
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      // ...
    } else {
      this.authService.signup(email, password).subscribe(
        (resData) => {
          console.log(resData);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    form.reset();
  }
}
