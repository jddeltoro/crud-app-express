const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const Product = require('./models/product.models');


app.use(express.json()); 
app.get('/', (req, res) => {
    res.send('Hello World');
});


app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            image: req.body.image
        });
        res.send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}); 

app.get('/api/product/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.status(200).send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

app.put('/api/product/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, {
            name: req.body?.name,
            price: req.body?.price,
            quantity: req.body?.quantity,
            image: req.body?.image
        }, { new: true });
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.status(200).send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

app.delete('/api/product/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.status(200).send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});



mongoose.connect('mongodb+srv://jdiazdeltoro:H6AvoixQ04RVvDCq@crud-app.q0t14xf.mongodb.net/?retryWrites=true&w=majority&appName=crud-app', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});