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

  constructor(amount = 0) {
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

  balance(accountType) {
    /// check checking checking | saving account\
    let result = "Error";

    if (accountType === 'checking') {
      return this.checking;
    }

    if (accountType === "saving") {
      return this.savings;
    }

    return result;
  }


  transfer(amount, acctType) {
    /// Transfer money to another account
    let result = "Error";

    if (acctType === 'checking') {
      if (amount > this.checking) {
        result = 'Insufficient funds';
      }
      if (amount < this.checking) {
        this.checking += amount;
        this.savings -= amount;
        return 'Successful transfer to checking';
      }
    }

    if (acctType === 'saving') {
      if (amount > this.savings) {
        result = 'Insufficient funds';
      }
      if (amount < this.savings) {
        this.savings += amount;
        this.checking -= amount;
        return 'Successful transfer to savings';
      }
    }
    return result;
  }

  deposit(amount, accountType) {
    /// deposit money to either saving | checking account
    let result = "Error";
    console.log(amount, accountType);

    if (accountType === 'checking') {
        this.checking += amount;
        return "Checking account: " + amount + "deposit";
    }

    if (accountType === 'saving')  {
      this.savings += amount;
      return "Savings account: " + amount + "deposit";
    }

    return result;
  }

}

module.exports = Bank;
