import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {

  public form: FormGroup;

  constructor(private appService: AppService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = new FormGroup({
      email: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    })

    let id = this.activatedRoute.snapshot.params['id'];

    if(id) {
      this.appService.getUser(id).pipe().subscribe((res) => {
        this.form.patchValue(res);
      })
    }
  }

  addUser() {
    this.appService.getAddUser(this.form.getRawValue()).pipe().subscribe((res) => {
      this.router.navigate(['/user']);
    })
  }
}
