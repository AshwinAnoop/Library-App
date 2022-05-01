const express = require('express');
const loginRouter = express.Router();
const Userdata = require('../model/Userdata');


function router(nav) {
    
    loginRouter.get('/',(req,res)=>{
        res.render('login',{
            nav
        })
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
                res.redirect("/")
            }
            else{
                console.log("Successfully registered")
                res.redirect("/")
            }
        })
    })


    return loginRouter
}

module.exports = router;

