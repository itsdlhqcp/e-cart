const express = require('express');
const mongoose = require('mongoose');
const productRoute = require("./routes/product.route.js")
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// main end-point
app.get('/', (req, res) => {
    res.send("Hello from Node API");
});

mongoose.connect('mongodb+srv://helloworld:helloworld@cluster0.hh5iw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
