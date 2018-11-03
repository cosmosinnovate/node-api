# Node-API | Middleware | UnitTests | Curl commands

## This application has three parts.
* API routes
* Middleware
* UnitTests


## API routes
Apis are __endpoints__ interacts with the __client side__ and the __database__.
(eg. Mongodb, Postgres, or CouchDB etc).
[API](https://github.com/Cosmos-it/node-api/blob/master/app.js)

### API Modules:
* express
* middleware (bank class)
* BodyParser: body-parser extract the entire body portion of an incoming request stream and exposes it on req.body

### EndPoints
```javascript

/// http://localhost:8000/accounts?accountType=saving
app.get('/accounts', (request, response) => {
    /// TODO: request.query
 });

/// http://localhost:8000/deposit?deposit=200&accountType=saving
app.post('/deposit', (request, response) => {
   /// TODO: request.body
 })

///http://localhost:8000/balance?transfer=35&accountType=saving
app.post('/transfer', (request, response) => {
   /// TODO: request.body
 })

/// http://localhost:8000/withdraw?withdraw=20&accountType=saving
app.post('/withdraw', (request, response) => {
   /// TODO: request.body
 })

/// http://localhost:8000/balance?accountType=saving
app.get('/balance', (request, response) => {
   /// TODO: request.query
 })

```

## Middleware
The business logics or the class etc.
This design is a way to get started quickly but obviously __not__ the best way to go about.
[Middleware](https://github.com/Cosmos-it/node-api/blob/master/middleware.js)

### Bank class:
```javascript
class Bank {
  constructor(amount = 0) {
    this.accountId = 0;
    this.checking = amount;
    this.saving = 0;
  }

  setIntitialAmount(amount) {
    /**
      * Banks usually starts an account a minimum of $200 - 500 (if you are
      * rich then cool beans)
      * Checking accountType = Checking | saving
      **/
  }

  transfer(amount, accountType) {
    /// Move money from one account to another
  }

  deposit(amount, accountType) {
    /// Add money to any account you would like
  }

  balance(accountType) {
    /// Check your balance
  }
}

```

## UnitTests
This is where you can start to test your middleware and/api routes.
[UnitTests](https://github.com/Cosmos-it/node-api/blob/master/spec/app.spec.js)

### UnitTests
Modules required to make test happen
* request
* middleware

``` javascript

describe('Bank testing', () => {
  let saving = 'saving';
  let checking = 'checking';

  beforeAll((done) => {
     /// account.setIntitialAmount(200);
    done();
  });

  it('Transfer funds', () => {
    //expect(account.transfer(20, checking)).toBe('Successful transfer');
  });

  it('Desposite funds', () => {
    /// expect(account.deposite(90, saving)).toBe('Successful deposite');
  });

  it('withdraw funds', () => {
    /// expect(account.withdraw(50, checking)).toBe('Successful');
  });

  it('Bank balance', () => {
    /// console.log('Checking: ' + account.balance() + ' Savings: ' + account.saving());
  });
});

```

## How to run and test this project:
There are three ways to test this project.
* UnitTests: This is the most common ones when it comes to TDD (Test driven development)
* Postman: This is also very common when you are testing your API. Because you definitely want to know if your API is doing what it is suppose to do.
* Curl: Curl is another way you can use to run test. In my opinion, if you learned curl very well, anything is possible.
