const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise'); 
const productsRoute = require('./routes/productRoutes')
const ordersRoute = require('./routes/orderRoutes')
const loginRoute = require('./routes/authRoute')
const adminRoute = require('./routes/userRoutes')
const queryRoute = require('./routes/queryRoutes')
const app = express();
const port = process.env.PORT || 8000;

app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.use(bodyParser.json());



app.use('/auth', loginRoute);
app.use('/admin' , adminRoute);
app.use('/products' , productsRoute);
app.use('/orders' , ordersRoute);
app.use('/quaries' , queryRoute);


app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

