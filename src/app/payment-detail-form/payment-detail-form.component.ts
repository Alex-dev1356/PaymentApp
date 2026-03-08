import { Component } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent {

  //Injecting the PaymentDetailService into the PaymentDetailFormComponent
  //Injecting the ToastrService into the PaymentDetailFormComponent
  constructor(public service:PaymentDetailService, private toastr: ToastrService) { }

  //Defining the onSubmit Method for the Event Binding
  onSubmit(form : NgForm){
    //Checking if the form is Submitted or NOT
    this.service.formSubmitted = true

    //Adding validation if the form is VALID or NOT
    if(form.valid){
      this.service.postPaymentDetail()
    .subscribe({
      next: res => {
        this.service.list = res as PaymentDetail[]
        this.service.resetForm(form)
        //Displaying the Success Message using the ToastrService
        this.toastr.success('Inserted Successfully', 'Payment Detail Register')
      },
      error: err => {console.log(err)}
    })
    }
  }
}
