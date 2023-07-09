import { Component } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public list: any;
  public displayedColumns: string[] = ['id', 'name', 'price', 'description', 'quantity', 'action'];

  constructor(private appService: AppService) {
    this.getList();
  }

  delete(id: number) {
    this.appService.deleteProduct(id).pipe().subscribe((res) => {
      this.getList()
    })
  }

  private getList() {
    this.appService.getProductList().pipe().subscribe((res) => {
      this.list = res;
    })
  }
}
