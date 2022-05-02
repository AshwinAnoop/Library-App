const express = require('express');
const bookRouter = express.Router();
const Bookdata = require('../model/Bookdata')


function router(nav) {

    bookRouter.get('/', (req, res) => {
        Bookdata.find()
            .then(function (books) {
                res.render("books", {
                    nav,
                    title: 'Library',
                    books
                })

            })

    })




    bookRouter.get('/:id', (req, res) => {
        const id = req.params.id
        Bookdata.find({ "_id": id }).
            then((book) => {
                console.log(book[0])

                res.render("book", {
                    nav,
                    title: 'Library',
                    book: book[0]
                })

            })
    })


    bookRouter.get('/delete/:id',(req,res)=>{
        const id = req.params.id
        Bookdata.deleteOne({ "_id": id })
        .then((book)=>{
            console.log(book)
            res.redirect('/books')
        })
    })

    return bookRouter
}




module.exports = router;