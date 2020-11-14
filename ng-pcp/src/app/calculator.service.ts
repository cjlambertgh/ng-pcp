import { Injectable } from '@angular/core';
import { FinanceData } from './models/calculator';
import { Loan } from './models/loan';
import { LoanRepaymentDetail } from './models/loan-repayment-detail';
import { PcpLoan } from './models/pcp-loan';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  calculateMonthlyPayment(data: FinanceData): number {
    const repaymentValue = data.cost - data.deposit - data.dealer - data.gmfv;
    const loan = new Loan(repaymentValue, data.interest, data.months);
    const monthlyPayment = loan.monthlyPayment
    return monthlyPayment;
  }

  getLoadRepaymentDetails(data: FinanceData): LoanRepaymentDetail {
    const loan = new Loan( data.cost, data.interest, data.months);
    const reapayments = new LoanRepaymentDetail(loan);
    return reapayments;
  }

  getPcpRepaymentDetails(data: FinanceData): LoanRepaymentDetail {
    const pcpLoan = new PcpLoan(data);
    const reapayments = new LoanRepaymentDetail(pcpLoan);
    return reapayments;
  }


}
