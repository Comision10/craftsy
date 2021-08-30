const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

/* recursos estáticos */
app.use(express.static('public'));

/* controladores */
const {index,admin} = require('./controllers/mainController');
const {register,login} = require('./controllers/usersController');
const {detail,add} = require('./controllers/productsController');


app.get('/', index);
app.get('/admin',admin);

app.get('/products/detail',detail);
app.get('/products/add',add);

app.get('/users/login',login);
app.get('/users/register',register);




app.listen(port, () => console.log('Server running in port ' + port))