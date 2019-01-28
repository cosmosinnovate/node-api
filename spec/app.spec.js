/*jshint esversion: 6 */


/**-----------------------------------------------------
 * 
 * Building our test cases.
 * 
 */
const Request = require('request');
const Bank = require('../middleware');

describe('Bank class object testing', () => {
  let Server;
  let EndPoint = 'http://localhost:8000'; ///API EndPoint

  /// Before a test begins
  beforeAll(() => {
    Server = require('../app');
    Bank.createBankObject(400);
  });

  /// Save resources
  afterAll(() => {
    Server.close();
    account = null;
  });

  describe('Banking /deposit', () => {
    let data = {};
    beforeAll((done) => {
      Request.post(`${EndPoint}/deposit`, (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(body);
        console.log('\nData passed: ', data);
        done();
      });
    });

    it('Status 200', () => {
      expect(data.status).toBe(200);
    });

    it('Deposit funds', () => {
      expect(Bank.deposit(data.body.deposit, data.body.accountType)).toBe('checking account: 90');
    });
    
  });

  describe('Banking /withdraw', () => {
    let data = {};
    beforeAll((done) => {
      Request.post(`${EndPoint}/withdraw`, (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(body);
        console.log('\nData passed: ', data);
        done();
      });
    });

    it('Status 200', () => {
      expect(data.status).toBe(200);
    });

    it('Withdraw', () => {
      expect(Bank.withdraw(data.body.withdraw, data.body.accountType)).toBe('Successful withdrawal from checking');
    });
  });

  describe('POST /transfer', ()=> {
     let data = {};
     beforeAll((done) => {
      Request.post(`${EndPoint}/transfer`, (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(body);
        console.log('\nData passed: ', data);
        done();
      });
    });

    it('Status 200', () => {
      expect(data.status).toBe(200);
    });

    it('transfer', () => {
      expect(Bank.transfer(data.body.transfer, data.body.accountType)).toBe('Successful transfer to checking');
    });
  });

  describe('GET /balance', ()=> {
     let data = {};
     beforeAll((done) => {
      Request.get(`${EndPoint}/balance`, (error, response, query) => {
        data.status = response.statusCode;
        data.query = JSON.parse(query);
        console.log('\nData passed: ', data);
        done();
      });
    });

    it('Status 200', () => {
      expect(data.status).toBe(200);
    });

    it('balance', () => {
      /// This is to test
      if (Bank.balance(data.query.accountType) != 0) {
        expect(Bank.balance(data.query.accountType)).toBe(90);
      }
    });
  });
});
