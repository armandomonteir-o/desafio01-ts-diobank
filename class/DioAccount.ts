export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()){
      this.balance = this.balance + amount
    }
    else throw new Error('Depósito não realizado')
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus() && amount <= this.balance){
      this.balance = this.balance - amount
    }
    else throw new Error ('Saque não realizado')
  }  

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (amount: number): void => {
    this.balance = amount; 
    console.log('Saldo atualizado com sucesso!');
}


  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
