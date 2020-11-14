import { Component, Input, OnInit } from '@angular/core';
import { LoanRepaymentDetail } from '../models/loan-repayment-detail';

@Component({
  selector: 'app-pcp-result',
  templateUrl: './pcp-result.component.html',
  styleUrls: ['./pcp-result.component.scss']
})
export class PcpResultComponent implements OnInit {

  @Input()
  result!: LoanRepaymentDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
