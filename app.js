const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

//middleware & static fiels
app.use(express.static('public'));

app.use(morgan('dev'));
// Home Page
app.get('/',(req, res) =>
{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', {title: 'Home' , blogs});
} );

// About
app.get('/about',(req, res) =>
{
    res.render('about', {title: 'About'});
} );

app.get("/blogs/create", (req, res) =>{
    res.render('create', {title: 'New Blog'});
})

// 404 not found
app.use((req, res)=>{
res.status(404).render('404', {title: 'Error 404'}); 
});