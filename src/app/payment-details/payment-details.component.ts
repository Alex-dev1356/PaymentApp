import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})

//Implement the life cycle hook ngOnInit()
export class PaymentDetailsComponent implements OnInit {

    //Injecting the PaymentDetailService into the PaymentDetailsComponent
  constructor(public service:PaymentDetailService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.service.refreshList();
  }

  editPaymentRecord(selectorRecord: PaymentDetail){
    //Assigning the selected record to the formData of type PaymentDetail Model
    // this.service.formData = selectorRecord;

    //To fix the problem of editing the record that is already submitted
    //we need to make a copy of the selected record and assign it to the formData
    this.service.formData = Object.assign({}, selectorRecord);
  }

  onDelete(id: number){

    //Adding confirmation dialog, before deleting the data
    if(confirm('Are you sure to delete this record?'))
    {
      //This block of code will only happen once the user confirms the deletion
      this.service.deletePaymentDetail(id)
      .subscribe({
          next: res => {
            this.service.refreshList();
            //Displaying the Success Message using the ToastrService
            this.toastr.error('Deleted Successfully', 'Payment Detail Register')
          },
          error: err => {console.log(err)}
        })
    }
  }
}
