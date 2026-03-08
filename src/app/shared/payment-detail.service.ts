import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { PaymentDetail } from './payment-detail.model';
import { FormGroupName, NgForm } from '@angular/forms';

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

  //To know if the form is submitted or not 
  formSubmitted: boolean = false; //changes here for this commit


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

  //Defining the Put Request that will be used to Update an existing PaymentDetail
  putPaymentDetail(){
    return this.http.put(`${this.url}/${this.formData.paymentDetailId}`, this.formData)
  }

  //Defining the Delete Request that will be used to Delete an existing PaymentDetail
  deletePaymentDetail(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.formData = new PaymentDetail();

    //Resetting the formSubmitted variable variable back to false
    //after the form is submitted
    this.formSubmitted = false; //changes here for this commit
  }
}
