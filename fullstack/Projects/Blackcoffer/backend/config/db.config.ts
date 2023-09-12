const mongoose = require('mongoose');
let devurl="mongodb://127.0.0.1:27017/black-Coffer"
mongoose.connect( devurl)
  .then(() => console.log('Connected!'));