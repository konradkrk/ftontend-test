import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {

  public form: FormGroup;
  private product: any;

  constructor(private appService: AppService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      quantity: new FormControl(''),
    });

    let id = this.activatedRoute.snapshot.params['id'];

    if(id) {
      this.appService.getProduct(id).pipe().subscribe((res) => {
        this.product = res;
        this.form.patchValue(res);
      })
    }
  }

  add() {
    if(this.product?.id) {
      let value = {...this.product, ...this.form.getRawValue()};
      this.appService.getUpdateProduct(value).pipe().subscribe((res) => {
        this.router.navigate(['/product']);
      })
    } else {
      this.appService.getAddProduct(this.form.getRawValue()).pipe().subscribe((res) => {
        this.router.navigate(['/product']);
      })
    }
  }
}
