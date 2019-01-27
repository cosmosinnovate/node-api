/*jshint esversion: 6 */

/**-------------------------------------------------------
 * @author Taban Cosmos
 * 
 * Create our middleware
 * 
 * Bank class:
 * => checking, savings, accountId
 * 
 * propertities:
 * => setIntitialAmount, withdraw, transfer, deposit, balance, saving
 *------------------------------------------------------------------*/

class Bank {
  constructor(amount = 0) {
    this.accountId = ''; ///Hash key
    this.checking = amount; /// int -- will use float or double later
    this.savings = 0; ///int -- will use float or double later
  }

  /**
   * @param {BankData} data 
   */
  static async createBankObject(data) {
    const {
      amount
    } = data;
    this.setIntitialAmount(amount);
    return new Bank(amount);
  }

  static async setIntitialAmount(amount) {
    this.checking += amount;
    return this.checking;
  }

  /**
   * Withdraw money from checking | saving accounts
   * @param {*} amount 
   * @param {CheckingOrSaving} accountType 
   */
  static async withdraw(amount, accountType) {
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

  /**
   * @param {CheckingOrSaving} accountType 
   * @return  checking checking | saving account\
   */
  static async balance(accountType) {
    let result = "Error";
    switch (accountType) {
      case 'checking':
        return this.checking;
      case 'saving':
        return this.savings;
      default:
        return result;
    }
  }

  /**
   * Transfer money to another account
   * @param {*} amount 
   * @param {CheckingOrSaving} accountType 
   */
  static async transfer(amount, accountType) {
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

  /** 
   * Deposit money to either saving | checking account
   * @param {*} amount 
   * @param {CheckingOrSaving} accountType 
   */
  static async deposit(amount, accountType) {
    let result = "Error";
    switch (accountType) {
      case 'checking':
        this.checking += amount;
        return `${accountType} account: ${amount}`;
      case 'saving':
        this.savings += amount;
        return `${accountType} account: ${amount}`;
      default:
        return result;
    }
  }
}

module.exports = Bank;