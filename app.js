const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.get('/', (req, res) => {
 const blogs=[
  {title: 'Workout Routine', snippet: 'I start with exercising  early in the morning at the gym'},
 {title: 'Food plan', snippet: 'I believe that the most important factor to have a good shape is to eat healthy balanced meals througout the day'},
 {title: 'Courses', snippet: 'Lorem ipsum dolor sit amet consectetur'},
];
  res.render('index', { title: 'Home',blogs:blogs  });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});
const path = require('path')
app.use(express.static('public'));

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
