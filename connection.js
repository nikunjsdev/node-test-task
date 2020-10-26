const mongoose = require('mongoose');


const uri = 'mongodb+srv://demo123:demo123@cluster1.x4fr0.mongodb.net/<demoDB>?retryWrites=true&w=majority';
mongoose.connect(uri, {}, () => {
    console.log('MongoDB database connected!!...')
});

mongoose.connection.on('error', (err) => {
    console.log(err);
    throw new Error(`unable to connect to database: ${config.db}`);
  });
  


