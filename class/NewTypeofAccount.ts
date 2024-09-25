import { DioAccount } from "./DioAccount";

export class NewTypeofAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (amount: number): void => {
        if (this.validateStatus()){
          this.setBalance(this.getBalance() + (amount + 10))
        }
        else throw new Error('Depósito não realizado')
      }
}