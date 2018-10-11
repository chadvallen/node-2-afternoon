const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const pC = require('./products_controller')
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(error => {
    console.log('Error on massive', error)
})

app.get('/api/products', pC.getAll);
app.get('/api/products/:id', pC.getOne);
app.put('/api/products/:id', pC.update);
app.post('/api/products', pC.create);
app.delete('/api/products/:id', pC.delete);




SERVER_PORT = process.env.PORT || 3000;
app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on Port ${SERVER_PORT} 🍔`);
})

