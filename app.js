/*jshint esversion: 6 */
const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
const Bank = require('./middleware');
let account = new Bank();



app.use((resquest, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));


app.get('/test', (request, response) => {
   response.status(500).send({'message': 'sucker man'});
});


app.post('/deposit', (request, response) => {
  /// call the middleware here | deposite functionality
  response.status(200).send({'deposit': account.deposit(parseInt(request.body.deposit), request.body.accountType)});
  
});

app.post('/withdraw', (request, response) => {
  /// call middleware here withdraw functionality
  response.status(200).send({'withdraw': account.withdraw(parseInt(request.body.withdraw), request.body.accountType)});

});

app.post('/transfer', (request, response) => {
  /// call middleware here | transfer funds functionality
  console.log(request.body.transfer, request.body.accountType);
  response.status(200).send(
    {
      'transfer': account.transfer(parseInt(request.body.transfer), request.body.accountType)
    }
  );

});

app.get('/balance', (request, response) => {
  /// call the middleware here | balance functionality
  response.status(200).send({'balance': account.balance()});

});

let server = app.listen(8000, () => {
   console.log('Listening on port' + server.address().port + '...');
});


module.exports = server;
