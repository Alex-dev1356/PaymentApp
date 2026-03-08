import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  //Adding the Base URL to the service
  url: string = environment.apiBaseUrl+ '/PaymentDetail';

  //Creating an instance of PaymentDetailModel
  list: PaymentDetail[] = [];

  //Creating an instance of PaymentDetailModel
  formData: PaymentDetail = new PaymentDetail();


  //Injecting an instance of the HttpClient class in the constructor
  //to make HTTP requests to the server. We also need to register the 
  //HttpClient service in the app.module.ts
  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next: res => {
        //Converting the response to an array of PaymentDetail
        //The response value that we get on the api/PaymentDetail
        //will be assigned to the list
        this.list = res as PaymentDetail[]
      },
      error: err => {console.log(err)}      
    })
  }

  //Defining the Post Request that will be used to Register a new PaymentDetail
  postPaymentDetail(){
    return this.http.post(this.url, this.formData)
  }
}
