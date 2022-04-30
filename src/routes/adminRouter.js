const express = require("express")
const adminRouter = express.Router()
const Bookdata = require("../model/Bookdata")

function router(nav) {

    adminRouter.get('/addnew/',(req,res)=>{
        res.render("addbook",{
            nav
        })
    })

    adminRouter.post('/addnew/',(req,res)=>{
        var item  = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
        } 

        var book = Bookdata(item)
        book.save()
        res.redirect("/books")
    })

    return adminRouter

}


module.exports = router;