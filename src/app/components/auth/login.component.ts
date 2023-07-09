import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: FormGroup;

  constructor(private appService: AppService, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login() {
    this.appService.login(this.form.getRawValue()).pipe().subscribe((res) => {
      localStorage.setItem('user', JSON.stringify(res));
      this.router.navigate(['/product']);
    })
  }
}
