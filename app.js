const express = require('express');

// express app
const app = express();

// listen for request

app.listen(3000);

// Home Page
app.get('/home',(req, res) =>
{
    res.sendFile('./views/index.html', {root: __dirname});
} );

// About
app.get('/about',(req, res) =>
{
    res.sendFile('./views/about.html', {root: __dirname});
} );

//redirects
app.get('/about-us',(req, res) =>
{
    res.redirect('/about');
} );

// 404 not found
app.use((req, res)=>{
res.status(404).sendFile('./views/404.html', {root: __dirname});
});