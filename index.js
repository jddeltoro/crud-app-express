const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');
const authRoute = require('./routes/auth.route');
const dotenv = require('dotenv');
dotenv.config();

//Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


//Routes
app.get('/', (req, res) => {
    res.send('CRUD App with Node.js and MongoDB');
});

app.use('/api/products', productRoute);
app.use('/api/auth', authRoute);


mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});