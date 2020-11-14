import { FinanceData } from './calculator';
import { Loan } from './loan';

export class PcpLoan extends Loan {

    repaymentLoan: Loan;
    baloonLoan: Loan;
    monthlyPayment: number;

    constructor(private financeData: FinanceData) {
        super(financeData.cost - financeData.deposit - financeData.dealer - financeData.gmfv, financeData.interest, financeData.months);
        const netCost = financeData.cost - financeData.deposit - financeData.dealer - financeData.gmfv;
        this.repaymentLoan = new Loan(netCost, financeData.interest, financeData.months);
        this.baloonLoan = new Loan(financeData.gmfv, financeData.interest, financeData.months, 0);
        this.monthlyPayment = this.calculateMonthlyPayment();
        
    }

    calculateMonthlyPayment(): number {
        let payment = this.repaymentLoan.getMonthlyPayment;
        const baloonInterest = this.baloonLoan.getDebtPayments.map(i => i.interestPaid).reduce((acc, val) => acc += val);
        const monthlyBaloonInterest = baloonInterest / this.financeData.months;
        return payment += monthlyBaloonInterest;
    }
}