const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    // res.sendFile(path.join(__dirname+'/views/index.html')); <= manera sense editor de plantilles 'ejs' de mostrar contingut. Si es fa servir 'ejs', cal transformar index.html en index.ejs.
    res.render('index.html', {title:'First website with NodeJS'});
});

router.get('/contact',(req,res) => {
    res.render('contact.html', {title:'Contact page'});
});


module.exports = router;