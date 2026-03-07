import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  //Adding the Base URL to the service
  url: string = environment.apiBaseUrl+ '/PaymentDetail';


  //Injecting an instance of the HttpClient class in the constructor
  //to make HTTP requests to the server. We also need to register the 
  //HttpClient service in the app.module.ts
  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next: res => {
        console.log(res);
      },
      error: err => {console.log(err)}      
    })
  }
}
