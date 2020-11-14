import { DebtPayment } from './calculator';

export class Loan {

    loanAmount: number = 0;
    annualInterestRate: number = 0;
    numberOfMonths: number = 0;
    monthlyInterestRate: number = 0;
    decimalMonthlyInterestRate: number = 0;
    monthlyPayment: number = 0;
    debtPayments: DebtPayment[] = [];

    constructor(loanAmount: number, annualInterestRate: number, numberOfMonths: number, monthlyPayment: number = -1) {
       this.loanAmount = loanAmount;
       this.annualInterestRate = annualInterestRate;
       this.numberOfMonths = numberOfMonths;
       this.monthlyInterestRate = this.annualInterestRate / 12;
       this.decimalMonthlyInterestRate = this.monthlyInterestRate / 100;
       if(monthlyPayment !== 0) {
        this.monthlyPayment = this.calculateBaseMonthlyPayment();
       }
       this.calculateBase();
    }

    get getDebtPayments(): DebtPayment[] {
        return this.debtPayments;
    }
    
    get getTotalInterestCharged (): number {
        return this.debtPayments.map(i => i.interestPaid).reduce((acc, val) => acc += val);
    }

    get getTotalPayable(): number {
        return this.monthlyPayment * this.numberOfMonths;
    }

    get costToBuy(): number {
        return this.monthlyPayment * this.numberOfMonths;
    }

    get getMonthlyPayment(): number {
        return this.monthlyPayment;
    }

    calculateBaseMonthlyPayment(): number {
        if(this.decimalMonthlyInterestRate == 0)
        {
            return (this.loanAmount / this.numberOfMonths);
        }

        const OnePlusRate = 1 + this.decimalMonthlyInterestRate;
        const top = (Math.pow(OnePlusRate, this.numberOfMonths)) - 1;
        const bottom = this.decimalMonthlyInterestRate * (Math.pow(OnePlusRate, this.numberOfMonths));
        const discountFactor = top / bottom;
        const monthlyPayment = this.loanAmount / discountFactor;
        return monthlyPayment;
    }

    calculateBase(): void {
        var currentBalance = this.loanAmount;
        for (let month = 0; month < this.numberOfMonths; month++)
        {
            var interestAccrued = currentBalance * this.decimalMonthlyInterestRate;
            var principalRepaid = this.monthlyPayment - interestAccrued;
            currentBalance -= principalRepaid;
            this.debtPayments.push(
            {
                interestPaid: interestAccrued,
                monthNumber: month,
                totalPayment: this.monthlyPayment,
                principal: principalRepaid,
                remainingDebt: Math.round(currentBalance)
            });
        }
    }
}