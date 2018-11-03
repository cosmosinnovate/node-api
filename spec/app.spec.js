/*jshint esversion: 6 */

const Request = require('request');
const bank = require('../middleware');

describe('functionalities', () => {
  let server;
  let endPoint = 'http://localhost:8000'; ///API endpoint
  let account;

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


  // describe('Bank testing', () => {
  //   let saving = 'saving';
  //   let checking = 'checking';
  //
  //   beforeAll((done) => {
  //     //  account.setIntitialAmount(200);
  //     done();
  //   });
  //
  //   it('Transfer funds', () => {
  //     expect(account.transfer(20, checking)).toBe('Successful transfer');
  //   });
  //
  //   it('Desposite funds', () => {
  //     expect(account.deposite(90, saving)).toBe('Successful deposite');
  //   });
  //
  //   it('withdraw funds', () => {
  //     expect(account.withdraw(50, checking)).toBe('Successful');
  //   });
  //
  //   it('Bank balance', () => {
  //     console.log('Checking: ' + account.balance() + ' Savings: ' + account.saving());
  //   });
  // });


  describe('Banking /', () => {
    let data = {};
    beforeAll((done) => {
      Request.post(`${endPoint}/deposit`, (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });

    it('Status 200', () => {
      expect(data.status).toBe(200);
    });

    it('deposit', () => {
      expect(data.body.deposit).toBe('Successful deposit');
    });

  });


  describe('GET /balance', ()=> {
     let data = {};
     beforeAll((done) => {
      Request.get(`${endPoint}/balance`, (error, response, body) => {
        data.status = response.statusCode;
        data.body = JSON.parse(body);
        done();
      });
    });

    it('Status 200', () => {
      expect(data.status).toBe(200);
    });

    it('balance', () => {
      expect(data.body.balance).toBe(400);
    });
  });

});
