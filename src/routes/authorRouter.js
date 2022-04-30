const express = require('express');
const authorRouter = express.Router();


function router(nav) {
    

    var authors = [
        {
            name:'Joseph barbera',
            books:'Tom and Jerry',
            genre:'cartoon',
            img: '/images/joseph.jpg'
        },
        {
            name:'JK Rowling',
            books:'Harry porter',
            genre:'fantasy',
            img: '/images/rowling.jpg'
        }
    ]

    authorRouter.get('/',(req,res)=>{
        res.render("author",{
            nav,
            authors
        })
    })



    return authorRouter
}

module.exports = router;