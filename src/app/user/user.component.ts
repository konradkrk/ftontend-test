import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  public list: any;
  public displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'isActive', 'created_at', 'modified_at', 'action'];

  constructor(private appService: AppService) {
    this.getList();
  }

  deleteUser(id: number) {
    this.appService.deleteUser(id).pipe().subscribe((res) => {
      this.getList()
    })
  }

  editUser(id: number) {
    console.log('id', id)
  }

  private getList() {
    this.appService.getUserList().pipe().subscribe((res) => {
      this.list = res;
    })
  }
}
