import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './components/product/product.component';
import { PageNotFoundComponent } from './components/404/page-not-found.component';
import { UserAddComponent } from './user/add/user-add.component';
import { ProductAddComponent } from './components/product/add/product-add.component';
import { LoginComponent } from './components/auth/login.component';
import { AuthGuard } from './components/auth/guards/auth-guard.guard';

const routes: Routes = [
  { path: 'order', component: OrderComponent, canActivate : [AuthGuard]  },
  { path: 'user', component: UserComponent, canActivate : [AuthGuard]  },
  { path: 'product', component: ProductComponent, canActivate : [AuthGuard]  },
  { path: 'add-product', component: ProductAddComponent, canActivate : [AuthGuard]  },
  { path: 'edit-product/:id', component: ProductAddComponent, canActivate : [AuthGuard]  },
  { path: 'edit-user/:id', component: UserAddComponent, canActivate : [AuthGuard]  },
  { path: 'add-user', component: UserAddComponent, canActivate : [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
