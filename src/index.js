const express = require('express');
const app = express();
const path = require('path'); // interpreta si ets a Windows o Linux i adapta les / i \ a la ruta que va millor a cada sistema

// settings
app.set('port',3000);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares

// routes
app.use(require('./routes/index'));

// static files (img, fonts, icons, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});