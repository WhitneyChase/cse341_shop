const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URL || 'mongodb+srv://Whitney-Chase-01:nitney15020@cluster01.clet0.mongodb.net/products?retryWrites=true&w=majority'
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');

const errorController = require('./controllers/error');
const User = require('./models/user');


const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');
const ta01 = require('./routes/ta01');
const ta02 = require('./routes/ta02');
const ta03 = require('./routes/ta03');
const ta04 = require('./routes/ta04');
const ta05 = require('./routes/ta05');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);
app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      if (!user) {
        return next();
      }
      req.user = user;
      next();
    })
    .catch(err => {
      next(new Error(err));
    });
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);
app.use(ta01);
app.use(ta02);
app.use(ta03);
app.use(ta04);
app.use(ta05);

app.get('/500', errorController.get500);

app.use(errorController.get404);

app.use((error, req, res, next) => {
  res.status(500).render('500', {
    pageTitle: 'Error!',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn
  });
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4 
  })
  .then(result => {
    
  })
  .catch(err => {
    console.log(err);
  });
