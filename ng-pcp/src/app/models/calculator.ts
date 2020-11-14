// export interface Loan {
//     loanAmount: number,
//     annualInterestRate: number,
//     numberOfMonths: number,
//     monthlyInterestRate: number,
//     decimalMonthlyInterestRate: number,
//     monthlyPayment: number
// }

export interface DebtPayment {
    totalPayment : number,
    principal : number,
    interestPaid : number,
    monthNumber : number,
    remainingDebt : number,
}

// export interface LoadRepaymentDetail {
//     monthlyRepayment  : number,
//     Repayments  : DebtPayment[],
//     totalInterestAccrued  : number,
//     totalPayable : number,
//     costToBuy  : number,
// }

export interface FinanceData {
    cost: number,
    gmfv: number,
    months: number,
    interest: number,
    deposit: number,
    dealer: number
  }