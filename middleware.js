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
    this.accountId = ''; ///Hash key
    this.checking = amount; /// int -- will use float or double later
    this.savings = 0; ///int -- will use float or double later
  }

  setIntitialAmount(amount) {
    this.checking += amount;
    return this.checking;
  }

  withdraw(amount, accountType) {
    /// withdraw money from checking | saving accounts
    if (accountType === 'checking') {
      if (amount < this.checking) {
        this.checking -= amount;
        return `Successful withdrawal from ${accountType}`;
      }
      if (amount > this.checking) {
        return `Insufficient amount in ${accountType}`;
      }
    }

    if (accountType === 'saving') {
      if (amount < this.savings) {
        this.savings -= amount;
        return `Successful withdrawal from ${accountType}`;
      }
      if (amount > this.savings) {
        return `Insufficient amount in ${accountType}`;
      }
    }
    return;
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


  transfer(amount, accountType) {
    /// Transfer money to another account
    let result = "Error";

    if (accountType === 'checking') {
      if (amount > this.checking) {
        result = 'Insufficient funds';
      }
      if (amount < this.checking) {
        this.checking -= amount;
        this.savings += amount;
        return `Successful transfer to ${accountType}`;
      }
    }

    if (accountType === 'saving') {
      if (amount > this.savings) {
        result = 'Insufficient funds';
      }
      if (amount < this.savings) {
        this.savings -= amount;
        this.checking += amount;
        return `Successful transfer to ${accountType}`;
      }
    }
    return result;
  }

  deposit(amount, accountType) {
    /// deposit money to either saving | checking account
    let result = "Error";

    if (accountType === 'checking') {
        this.checking += amount;
        return  `${accountType} account: ${amount}`;
    }

    if (accountType === 'saving')  {
      this.savings += amount;
      return  `${accountType} account: ${amount}`;
    }

    return result;
  }

}

module.exports = Bank;
