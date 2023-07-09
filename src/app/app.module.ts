import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { UserComponent } from './user/user.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { UserAddComponent } from './user/add/user-add.component';
import { AppService } from './services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './components/product/add/product-add.component';
import { PriceReplacePipe } from './pipes/price-replace.pipe';
import { AuthGuard } from './components/auth/guards/auth-guard.guard';
import { LoginComponent } from './components/auth/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserAddComponent,
    ProductComponent,
    ProductAddComponent,
    OrderComponent,
    LoginComponent,
    PriceReplacePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  providers: [AppService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
