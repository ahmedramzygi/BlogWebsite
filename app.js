const express = require('express');
const app = express();
const mongoose=require('mongoose');
const blogRoutes=require('./Routes/blogRoutes')

const port=process.env.PORT || 4000
app.use(express.urlencoded({extended:true}));

// listen for requests
app.listen(3000);
const dbURI='mongodb+srv://Ahmed:test@blog.gwbak.mongodb.net/Blog?retryWrites=true&w=majority'
//

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(port))// To make sure the db is connected before we start our project.
  .catch(err => console.log(err));


// register view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/',(req,res)=>{
  res.redirect('/blogs');
})
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});
app.use(blogRoutes)
// const newsRouter = require('./geo')
// app.use('/blogs/news', newsRouter)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
 