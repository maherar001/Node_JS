const express = require('express');
const morgan = require('morgan');
const mongooes = require('mongoose');
const Project = require('./models/portfolio');

// password F2qPF0ONT9Od9w62

const dbURI = 'mongodb+srv://admin0:test321@cluster0.l4qtmyl.mongodb.net/portfolio?retryWrites=true&w=majority';

mongooes.connect(dbURI , { useNewUrlParser: true, useUnifiedTopology: true })
 .then ((result) => app.listen(3000))
 .catch ((err) => console.log( "ERRORS 404 " + err));

// express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//middleware & static fiels
app.use(express.static('public'));

app.use(morgan('dev'));

// mongoose and mongo sandbox routes 
app.get('/add-project', (req, res) =>{
    const project = new Project({
        title: 'My Portfolio',
        description: 'This is my first project in Node JS.',
        project_url: 'https://www.google.com/',
        gitRepository: 'https://github.com/maherar001/Node_JS'
    });

    project.save()
    .then ((result) => {
        res.send(result)
    })
    .catch((err) =>{
        console.log("Error is = " + err);
    });
})


// Home Page
app.get('/',(req, res) =>
{
    const blogs = [
        {title: 'Yoshi finds eggs', descr: 'Lorem ipsum dolor sit amet consectetur' , project_url: 'https://www.google.com/'},
        {title: 'Mario finds stars', descr: 'Lorem ipsum dolor sit amet consectetur', project_url: 'https://stackoverflow.com/'},
        {title: 'How to defeat bowser', descr: 'Lorem ipsum dolor sit amet consectetur', project_url: 'https://www.youtube.com/'},
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