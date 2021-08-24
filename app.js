const express = require('express');
const Blog=require('./models/Blog');

// express app
const app = express();
const mongoose=require('mongoose');

// listen for requests
app.listen(3000);
const dbURI='mongodb+srv://Ahmed:test@blog.gwbak.mongodb.net/Blog?retryWrites=true&w=majority'
//

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(4000))// To make sure the db is connected before we start our project.
  .catch(err => console.log(err));


// register view engine
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
  res.redirect('/blogs');
})
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});
app.get('/blogs',(req,res)=>{
  Blog.find().sort({createdAt:-1})
  .then((result)=>{
    console.log(result);
    res.render('index',{title: 'All Blogs',blogs:result})
  })
  .catch((err)=>{
    console.log(err);
  })
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});


app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});
const path = require('path')
app.use(express.static('public'));

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
 