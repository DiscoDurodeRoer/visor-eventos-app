import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ddr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public showLoginError: boolean;

  constructor(
    private formBuiler: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) {
    // Creo el formgroup
    this.formLogin = this.formBuiler.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', Validators.required)
    })
    this.showLoginError = false;
  }

  ngOnInit() {
  }

  /**
   * Compruebo si el login es correcto
   */
  checkLogin() {

    // Cojo el email y el pass
    let email = this.formLogin.get('email').value
    let pass = this.formLogin.get('pass').value

    // Nos logueamos 
    this.authService.login(email, pass).then(state => {

      console.log(state);
      this.route.navigate(['/add-event'])

    }, error => {
      console.error(error);
      this.showLoginError = true;
    })

  }

}