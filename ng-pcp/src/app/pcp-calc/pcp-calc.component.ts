import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CalculatorService } from '../calculator.service';
import { FinanceData } from '../models/calculator';
import { LoanRepaymentDetail } from '../models/loan-repayment-detail';

@Component({
  selector: 'app-pcp-calc',
  templateUrl: './pcp-calc.component.html',
  styleUrls: ['./pcp-calc.component.scss']
})
export class PcpCalcComponent implements OnInit {

  pcpInput!: FinanceData;
  result!: LoanRepaymentDetail;
  pcpFormGroup: FormGroup;

  constructor(private calculator: CalculatorService, private route: ActivatedRoute, private router: Router) {
    this.pcpInput = this.getNewPcpInput();
    
    this.pcpFormGroup = new FormGroup({
      cost: new FormControl(12000, [Validators.required, Validators.min(0)]),
      gmfv: new FormControl(0, [Validators.min(0)]),
      months: new FormControl(36, [Validators.required, Validators.min(1)]),
      interest: new FormControl(6.9, [Validators.required, Validators.min(0)]),
      deposit: new FormControl(0, [Validators.min(0)]),
      dealer: new FormControl(0, [Validators.min(0)]),
    });

    this.subscribeToFormEvents();    
   }

  ngOnInit(): void {
    this.pcpInput = this.getQuoteData();
    this.applyFormValues();
    if(this.validData(this.pcpInput)) {
      this.result = this.calculator.getPcpRepaymentDetails(this.pcpInput);
    }
  }
  
  private applyFormValues() {
    this.pcpFormGroup.setValue({
      cost: this.pcpInput.cost,
      gmfv: this.pcpInput.gmfv,
      months: this.pcpInput.months,
      interest: this.pcpInput.interest,
      deposit: this.pcpInput.deposit,
      dealer: this.pcpInput.dealer
    });
  }

  subscribeToFormEvents() {
    this.pcpFormGroup.get('cost')?.valueChanges.subscribe(val => this.pcpInput.cost = val);
    this.pcpFormGroup.get('gmfv')?.valueChanges.subscribe(val => this.pcpInput.gmfv = val);
    this.pcpFormGroup.get('months')?.valueChanges.subscribe(val => this.pcpInput.months = val);
    this.pcpFormGroup.get('interest')?.valueChanges.subscribe(val => this.pcpInput.interest = val);
    this.pcpFormGroup.get('deposit')?.valueChanges.subscribe(val => this.pcpInput.deposit = val);
    this.pcpFormGroup.get('dealer')?.valueChanges.subscribe(val => this.pcpInput.dealer = val);
    this.resetForm();
  }

  resetForm(): void {
    this.pcpFormGroup.reset({
      cost: 12000,
      gmfv: 0,
      months: 36,
      interest: 6.9,
      deposit: 0,
      dealer: 0
    });
  }

  submitForm(): void {
    this.router.navigate(['/result'], {queryParams: {
      cost: this.pcpInput.cost,
      gmfv: this.pcpInput.gmfv,
      months: this.pcpInput.months,
      interest: this.pcpInput.interest,
      deposit: this.pcpInput.deposit,
      dealer: this.pcpInput.dealer
    }});
    this.result = this.calculator.getPcpRepaymentDetails(this.pcpInput);
  }

  getNewPcpInput(): FinanceData {
    return {
      cost: 0,
      gmfv: 0,
      months: 0,
      interest: 0,
      deposit: 0,
      dealer: 0
    };
  }

  private getQuoteData(): FinanceData {
    const fromQuery = this.getNewPcpInput();
    fromQuery.cost = this.route.snapshot.queryParams["cost"];
    fromQuery.gmfv = this.route.snapshot.queryParams["gmfv"];
    fromQuery.months = this.route.snapshot.queryParams["months"];
    fromQuery.interest = this.route.snapshot.queryParams["interest"];
    fromQuery.deposit = this.route.snapshot.queryParams["deposit"];
    fromQuery.dealer = this.route.snapshot.queryParams["dealer"];

    if(this.validData(fromQuery)) return fromQuery;

    return this.getNewPcpInput();
  }

  private validData(obj: any): boolean {
    for (var key in obj) {
      if (!obj[key] || isNaN(obj[key]))
          return false;
  }
  return true;
  }

}



export interface PcpResult {
  totalCost: number,
  interestCost: number
}
