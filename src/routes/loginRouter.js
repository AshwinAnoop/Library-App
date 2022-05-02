const express = require('express');
const loginRouter = express.Router();
const Userdata = require('../model/Userdata');
const passport = require('passport');


function router(nav) {
    
    loginRouter.get('/',(req,res)=>{
        res.render('login',{
            nav
        })
    })

    loginRouter.post("/",(req,res,next)=>{
        passport.authenticate('local',(err,user)=>{
            if (err) {
                console.log(err)
                res.redirect('/login')
            }else{
                if (!user) {
                    console.log("Incorrect data")
                    res.redirect('/login/') 
                }else{
                    req.logIn(user,()=>{
                        console.log("login successful")
                        res.redirect("/")
                    })
                }
            }
        })(req,res,next);
    })

    loginRouter.get('/createAccount/',(req,res)=>{
        res.render('signup',{
            nav
        })
    })

    loginRouter.post('/createAccount/',(req,res)=>{
        var details = {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            admin: false,
        }

        var user = Userdata(details)
        Userdata.register(user,req.body.password,(err,data)=>{
            if(err){
                console.log("failed to register")
                res.redirect("/login/")
            }
            else{
                console.log("Successfully registered")
                res.redirect("/login/")
            }
        })
    })


    return loginRouter
}

module.exports = router;

