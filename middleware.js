/*jshint esversion: 6 */

/***************************
 @author Taban Cosmos
 @date

 Bank class:
    fields:
    -------------------
    checking
    savings
    accountId

    propertities:
    ------------------------
     setIntitialAmount
     withdraw
     transfer
     deposit
     balance
     saving
*******************************/

class Bank {

  constructor(amount=0) {
    this.accountId = null;
    this.checking = amount;
    this.savings = 0;
  }

  setIntitialAmount(amount) {
    this.checking += amount;
    return this.checking;
  }

  withdraw(amount, acctType) {
    /// withdraw money from checking | saving accounts
    if (acctType === 'checking') {
      if (amount < this.checking) {
        this.checking -= amount;
        return "Successful";
      }
      if (amount > this.checking) {
        return "Insufficient amount";
      }
    }

    if (acctType === 'saving') {
      if (amount < this.savings) {
        this.savings -= amount;
        return "Successful";
      }
      if (amount > this.savings) {
        return "Insufficient amount";
      }
    }
    return;
  }


  saving() {
    return this.savings;
  }

  balance() {
    /// check checking checking | saving account
    return this.checking;
  }

  transfer(amount, acctType) {
    /// Transfer money to another account
    let result;
    if (acctType === 'checking') {
      if (amount > this.checking) {
        result = 'Insufficient funds';
      }
      if (amount < this.checking) {
        this.checking += amount;
        this.savings -= amount;
        result ='Successful transfer';
      }
    }

    if (acctType === 'saving') {
      if (amount > this.savings) {
        result = 'Insufficient funds';
      }
      if (amount < this.savings) {
        this.savings += amount;
        this.checking -= amount;
        result = 'Successful transfer';
      }
    }
    return result;
  }

  deposit(amount, acctType) {
    /// deposit money to either saving | checking account
      this.checking += amount;
      return 'Successful deposit';
  }

}

module.exports = Bank;
