import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pcp-calc',
  templateUrl: './pcp-calc.component.html',
  styleUrls: ['./pcp-calc.component.scss']
})
export class PcpCalcComponent implements OnInit {

  pcpInput!: PcpInput;
  result!: PcpResult;
  pcpFormGroup: FormGroup;

  constructor() {
    this.pcpInput = this.getNewPcpInput();
    
    this.pcpFormGroup = new FormGroup({
      cost: new FormControl(1200, [Validators.required, Validators.min(0)]),
      gmfv: new FormControl(0, [Validators.min(0)]),
      months: new FormControl(36, [Validators.required, Validators.min(1)]),
      interest: new FormControl(6.9, [Validators.required, Validators.min(0.01)]),
      deposit: new FormControl(0, [Validators.min(0)]),
      dealer: new FormControl(0, [Validators.min(0)]),
    });

    this.subscribeToFormEvents();    
   }

  ngOnInit(): void {
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
      cost: 1200,
      gmfv: 0,
      months: 36,
      interest: 6.9,
      deposit: 0,
      dealer: 0
    });
  }

  submitForm(): void {
    const result = this.pcpInput.cost / this.pcpInput.months;
    this.result = {
      totalCost: result,
      interestCost: 100
    };
  }

  getNewPcpInput(): PcpInput {
    return {
      cost: 0,
      gmfv: 0,
      months: 0,
      interest: 0,
      deposit: 0,
      dealer: 0
    };
  }

}

export interface PcpInput {
  cost: number,
  gmfv: number,
  months: number,
  interest: number,
  deposit: number,
  dealer: number
}

export interface PcpResult {
  totalCost: number,
  interestCost: number
}
