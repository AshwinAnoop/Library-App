const express = require('express');
const bookRouter = express.Router();
const Bookdata = require('../model/Bookdata')


function router(nav){
    // var books=[
    //     {
    //         title:'Tom and Jerry',
    //         author:'Joseph Barbera',
    //         genre:'cartoon',
    //         img: '/images/tom.jpg'
    //     },
    //     {
    //         title:'Harry Porter',
    //         author:'JK Rowling',
    //         genre:'Fantasy',
    //         img: '/images/harry.jpg'
    //     },
    //     {
    //         title:'Pathumayude Aadu',
    //         author:'Basheer',
    //         genre:'Drama',
    //         img: '/images/basheer.jpg'
    //     }
    // ]
    
    bookRouter.get('/',(req,res)=>{
        Bookdata.find()
        .then(function (books) {
            res.render("books",{
                nav,
                title : 'Library',
                books
            })
            
        })

    })



    
    bookRouter.get('/:id',(req,res)=>{
        const id = req.params.id
        res.render("book",{
            nav,
            title : 'Library',
            book : books[id]
        })
    })



    return bookRouter
}




module.exports = router;