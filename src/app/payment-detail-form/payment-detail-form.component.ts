import { Component } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styles: [
  ]
})
export class PaymentDetailFormComponent {

  //Injecting the PaymentDetailService into the PaymentDetailFormComponent
  constructor(public service:PaymentDetailService) { }

}
