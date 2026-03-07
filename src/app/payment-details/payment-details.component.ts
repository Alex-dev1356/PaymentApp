import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})

//Implement the life cycle hook ngOnInit()
export class PaymentDetailsComponent implements OnInit {

    //Injecting the PaymentDetailService into the PaymentDetailsComponent
  constructor(public service:PaymentDetailService) { }
  ngOnInit(): void {
    this.service.refreshList();
  }
}
