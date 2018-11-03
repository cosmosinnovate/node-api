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
app.get('/accounts', (request, response) => {
    /// TODO:
 });

app.post('/deposit', (request, response) => {
   /// TODO:
 })
app.post('/transfer', (request, response) => {
   /// TODO:
 })

app.post('/withdraw', (request, response) => {
   /// TODO:
 })

app.post('/balance', (request, response) => {
   /// TODO:
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
    /// Add initial amount
    /// Banks usually starts an account minimal $200 - 500 (if you are /// rich then cool beans)
    /// Checking accountType = Checking | saving
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

## UnitTests'
This is where you can start to test your middleware and/api routes to get the right responses.
[UnitTests](https://github.com/Cosmos-it/node-api/blob/master/spec/app.spec.js)

### UnitTests


## How to run and test this project:
There are three ways to test this project.
* UnitTests: This is the most common ones when it comes to TDD (Test driven development)
* Postman: This is also very common when you are testing your API. Because you definitely want to know if your API is doing what it is suppose to do.
* Curl: Curl is another way you can use to run test. In my opinion, if you learned curl very well, anything is possible.
