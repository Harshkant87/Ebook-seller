//publishable key = pk_test_bGLv8dpblbcJ4dy2caPj0SNZ009w17Xmh7
//secret key= sk_test_4If6gxJbgHwSGJwdn1uAoPv400YJ0L1taB
const express=require('express');
const keys = require('./config/keys');
const stripe =require('stripe')(keys.stripeSecretKey);
const bodyParser=require('body-parser');
const exphbs = require('express-handlebars');


const app = express();

//handlebars middlewares
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

//bode parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//set static folder
app.use(express.static(`${__dirname}/public`));


//index route
app.get('/',(req,res)=>{
  res.render('index', {
    stripePublishableKey: keys.stripePublishableKey
  });
});


//charge route
app.post('/charge', (req, res) => {
  const amount = 2500;

  // stripe.customers.create({
  //   email: req.body.stripeEmail,
  //   source: req.body.stripeToken
  // })
  // .then(customer => stripe.charges.create({
  //   amount,
  //   description: 'Web Development Ebook',
  //   currency: 'usd',
  //   customer: customer.id
  // }))
   res.render('success');
});


const port = process.env.PORT || 5000;

app.listen(port, () =>{
  console.log(`Server started on port: ${port}`);
});
