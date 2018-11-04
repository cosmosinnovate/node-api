/*jshint esversion: 6 */

const Request = require('request');
const bank = require('../middleware');

describe('functionalities', () => {
  let server;
  let endPoint = 'http://localhost:8000'; ///API endpoint
  let account;
  let saving = 'saving';
  let checking = 'checking';

  ///Before a test begins
  beforeAll(() => {
    server = require('../app');
    account = new bank(400);
  });

  ///Save resources
  afterAll(() => {
    server.close();
    account = null;

  });

  describe('Banking /deposit', () => {
    let data = {};
    beforeAll((done) => {
      Request.post(`${endPoint}/deposit`, (error, response, body) => {
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
      expect(account.deposit(data.body.deposit, data.body.accountType)).toBe('checking account: 90');
    });
  });



  describe('Banking /withdraw', () => {
    let data = {};
    beforeAll((done) => {
      Request.post(`${endPoint}/withdraw`, (error, response, body) => {
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
      expect(account.withdraw(data.body.withdraw, data.body.accountType)).toBe('Successful withdrawal from checking');
    });
  });

  describe('POST /transfer', ()=> {
     let data = {};
     beforeAll((done) => {
      Request.post(`${endPoint}/transfer`, (error, response, body) => {
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
      expect(account.transfer(data.body.transfer, data.body.accountType)).toBe('Successful transfer to checking');
    });
  });



  describe('GET /balance', ()=> {
     let data = {};
     beforeAll((done) => {
      Request.get(`${endPoint}/balance`, (error, response, query) => {
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
      if (account.balance(data.query.accountType) != 0) {
        expect(account.balance(data.query.accountType)).toBe(90);
      }
    });
  });
});
