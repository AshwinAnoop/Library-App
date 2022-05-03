const express = require('express');
const passport = require('passport')
const Userdata = require('./src/model/Userdata')
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');


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
app.use('/images', express.static('images'));
app.use(express.urlencoded({extended:true}));
app.use(session({   resave: false,saveUninitialized: true,secret: 'SECRET' }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/books',bookRouter)
app.use('/authors',authorRouter)
app.use('/login',loginRouter)
app.use('/admin',adminRouter)
app.set('view engine','ejs')
app.set('views','./src/views')

passport.use(new LocalStrategy(Userdata.authenticate()));
passport.serializeUser(Userdata.serializeUser());
passport.deserializeUser(Userdata.deserializeUser());



app.get('/',(req,res)=>{
    res.render("index",{
        nav,
        title : 'Library'
    });
})



app.listen(5000,()=>{
    console.log("server started")
});