const express=require('express');
const  app=express();

const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send('provide your age');
    }
    else if(req.query.age<18){
        res.send('you can not access this page');
    }
    else{
        next();
    }
}
// app.use(reqFilter);
const route= express.Router();

route.use(reqFilter);

app.get('/',(req,res)=>{
    res.send('welcome to home page');
});
app.get('/user',(req,res)=>{
    res.send('welcome to user page');
});

route.get('/contact',(req,res)=>{
    res.send('welcome to contact page');
});
app.use('/',route);

app.listen(4400);
