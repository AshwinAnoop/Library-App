const express = require('express');

const app = express();
const nav = [
    {link:'/books',name: 'Books'},
    {link:'/authors',name:'authors'},
    {link:'/login',name:'login'},
    
]
const bookRouter = require('./src/routes/bookRouter')(nav)
const authorRouter = require('./src/routes/authorRouter')(nav)
const loginRouter = require('./src/routes/loginRouter')(nav)
const adminRouter = require('./src/routes/adminRouter')(nav)

app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
app.use('/books',bookRouter)
app.use('/authors',authorRouter)
app.use('/login',loginRouter)
app.use('/admin',adminRouter)
app.set('view engine','ejs')
app.set('views','./src/views')


app.get('/',(req,res)=>{
    res.render("index",{
        nav,
        title : 'Library'
    });
})



app.listen(5000,()=>{
    console.log("server started")
});