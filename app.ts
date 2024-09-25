import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { NewTypeofAccount } from './class/NewTypeofAccount';


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);


console.log(`Saldo inicial de Nath: ${peopleAccount.getBalance()}`);
peopleAccount.deposit(200);  
console.log(`Saldo após depósito: ${peopleAccount.getBalance()}`);
peopleAccount.withdraw(50);   
console.log(`Saldo após saque: ${peopleAccount.getBalance()}`);


const companyAccount: CompanyAccount = new CompanyAccount('Tim', 20);


console.log(`Saldo inicial da Tim: ${companyAccount.getBalance()}`);
companyAccount.deposit(100);  
console.log(`Saldo após depósito: ${companyAccount.getBalance()}`);
companyAccount.getLoan(300);  
console.log(`Saldo após empréstimo: ${companyAccount.getBalance()}`);
companyAccount.withdraw(50);   
console.log(`Saldo após saque: ${companyAccount.getBalance()}`);


const newtypeofAccount: NewTypeofAccount = new NewTypeofAccount('Junior', 50);


console.log(`Saldo inicial de Junior: ${newtypeofAccount.getBalance()}`);
newtypeofAccount.deposit(500); 
console.log(`Saldo após depósito (com bônus): ${newtypeofAccount.getBalance()}`);
newtypeofAccount.withdraw(100); 
console.log(`Saldo após saque: ${newtypeofAccount.getBalance()}`);
