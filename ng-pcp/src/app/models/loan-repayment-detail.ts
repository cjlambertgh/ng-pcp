import { DebtPayment } from './calculator';
import { Loan } from './loan';

export class LoanRepaymentDetail {

    constructor(private loan: Loan) {        
        
    }

    get monthlyRepayment(): number {
        return Math.round((this.loan.getMonthlyPayment + Number.EPSILON) * 100) / 100;
    }

    get repayments(): DebtPayment[] {
        return this.loan.getDebtPayments;
    }

    get totalInterestAccrued(): number {
        return Math.round((this.loan.getTotalInterestCharged + Number.EPSILON) * 100) / 100;
    }

    get totalPayable(): number {
        return Math.round((this.loan.getTotalPayable + Number.EPSILON) * 100) / 100;
    }

    get costToBuy(): number {
        return Math.round((this.loan.costToBuy + Number.EPSILON) * 100) / 100;
    }
}