import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AppService {

  public user: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private baseApiUrl: string = 'https://testowe-api-5ade13306378.herokuapp.com';

  constructor(private httpClient: HttpClient, private _snackBar: MatSnackBar) {
  }

  public getUserList(): Observable<any> {
    return this.httpClient
      .get<{ data: any }>(`${this.baseApiUrl}/users`)
      .pipe(
        map((res) => res),
        catchError((err: HttpErrorResponse) => this.errorHandle(err))
      );
  }

  public getUser(id: number): Observable<any> {
    return this.httpClient
      .get<{ data: any }>(`${this.baseApiUrl}/users/${id}`)
      .pipe(
        map((res) => res),
        catchError((err: HttpErrorResponse) => this.errorHandle(err))
      );
  }

  public getUpdateUser(user: any): Observable<any> {
    return this.httpClient
      .post<{ data: any }>(`${this.baseApiUrl}/users`, user)
      .pipe(
        map((res) => res),
        catchError((err: HttpErrorResponse) => this.errorHandle(err))
      );
  }

  public getAddUser(user: any): Observable<any> {
    return this.httpClient
      .post<{ data: any }>(`${this.baseApiUrl}/users`, user)
      .pipe(
        map((res) => res),
        catchError((err: HttpErrorResponse) => this.errorHandle(err))
      );
  }

  public deleteUser(id: number): Observable<any> {
    return this.httpClient
      .delete<{ data: any }>(`${this.baseApiUrl}/users/${id}`)
      .pipe(
        map((res) => res),
        catchError((err: HttpErrorResponse) => this.errorHandle(err))
      );
  }

  // product

  public getProductList(): Observable<any> {
    return this.httpClient
      .get<{ data: any }>(`${this.baseApiUrl}/product`)
      .pipe(
        map((res) => res),
        catchError((err: HttpErrorResponse) => this.errorHandle(err))
      );
  }

  public getProduct(id: number): Observable<any> {
    return this.httpClient
      .get<{ data: any }>(`${this.baseApiUrl}/product/${id}`)
      .pipe(
        map((res) => res),
        catchError((err: HttpErrorResponse) => this.errorHandle(err))
      );
  }

  public getAddProduct(product: any): Observable<any> {
    return this.httpClient
      .post<{ data: any }>(`${this.baseApiUrl}/product`, product)
      .pipe(
        map((res) => res),
        catchError((err: HttpErrorResponse) => this.errorHandle(err))
      );
  }

  public getUpdateProduct(product: any): Observable<any> {
    return this.httpClient
      .post<{ data: any }>(`${this.baseApiUrl}/product`, product)
      .pipe(
        map((res) => res),
        catchError((err: HttpErrorResponse) => this.errorHandle(err))
      );
  }


  public deleteProduct(id: number): Observable<any> {
    return this.httpClient
      .delete<{ data: any }>(`${this.baseApiUrl}/product/${id}`)
      .pipe(
        map((res) => res),
        catchError((err: HttpErrorResponse) => this.errorHandle(err))
      );
  }

  public login(value: {email: string, password: string}) {
    return this.httpClient
      .post<{ data: any }>(`${this.baseApiUrl}/login`, {email: value.email, password: value.password})
      .pipe(
        map((res) => {
          this.user.next(res);
          return res;
        }),
        catchError((err: HttpErrorResponse) => this.errorHandle(err))
      );
  }

  public logout() {
    localStorage.removeItem('user');
    this.user.next(null);
  }

  public getUserLogin() {
    let user = localStorage.getItem('user');

    if(user) {
      this.user.next(JSON.parse(user));
    }
  }

  private errorHandle(err: HttpErrorResponse) {
    let message: string = '';

    if(err.error?.message && Array.isArray(err.error?.message)) {
      message = err.error?.message.join();
    }

    this._snackBar.open('Error: ' + err.error?.error + ' - ' + 'Sprawdź w devTools-ach :)');
    return of();
  }
}
