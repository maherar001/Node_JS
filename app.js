const express = require('express');
const morgan = require('morgan');
const mongooes = require('mongoose');
const projectRoutes = require('./routes/projectRoutes');

// password F2qPF0ONT9Od9w62

const dbURI = 'mongodb+srv://admin0:test321@cluster0.l4qtmyl.mongodb.net/portfolio?retryWrites=true&w=majority';

mongooes.connect(dbURI , { useNewUrlParser: true, useUnifiedTopology: true })
 .then ((result) => app.listen(3000))
 .catch ((err) => console.log( "ERRORS 404 " + err));

// express app
const app = express();

const port = 5000;

//register view engine
app.set('view engine', 'ejs');

//middleware & static fiels
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Home Page
app.get('/',(req, res) =>
{
    res.redirect('/projects');
} );

// About
app.get('/about',(req, res) =>
{
    res.render('about', {title: 'About'});
} );

//project routes
app.use('/projects', projectRoutes);

// 404 not found
app.use((req, res)=>{
res.status(404).render('404', {title: 'Error 404'}); 
});

app.listen(process.env.PORT || port, () => console.log(`listening on port ${port}`));