var axios = require("axios").default;
const express = require('express');
const app = express();
//Here i want to display news to my website

app.use(express.urlencoded({extended:true}));

// listen for requests
app.listen(5000);
app.get('/',async (req,res,next)=>{
     //see message is passed to index.ejs and ejs will take care of rendering it
        //so same way you can load your api data here like:  
        try {
            const jobs = axios.get('https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id={df2058fa}&app_key={5b4c52416a544a0726bffa3f8d6b70cb}');
            //now pass apiData to index.ejs to take care of it
            res.render('news',{ jobs: jobs});
         }
         catch (e){
            //render your error.ejs here
         }
})


