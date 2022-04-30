const express = require('express');
const loginRouter = express.Router();


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

    return loginRouter
}

module.exports = router;

