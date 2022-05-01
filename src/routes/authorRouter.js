const express = require('express');
const authorRouter = express.Router();
const Authordata = require('../model/Authordata')

function router(nav) {
    

    // var authors = [
    //     {
    //         name:'Joseph barbera',
    //         books:'Tom and Jerry',
    //         genre:'cartoon',
    //         img: '/images/joseph.jpg'
    //     },
    //     {
    //         name:'JK Rowling',
    //         books:'Harry porter',
    //         genre:'fantasy',
    //         img: '/images/rowling.jpg'
    //     }
    // ]

    authorRouter.get('/',(req,res)=>{
        Authordata.find()
        .then((authors)=>{
            res.render("author",{
                nav,
                authors
            })
        })

    })



    return authorRouter
}

module.exports = router;