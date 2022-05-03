const express = require("express")
const multer = require('multer')
const path = require('path')
const adminRouter = express.Router()
const Bookdata = require("../model/Bookdata")
const Authordata = require("../model/Authordata")

function router(nav) {


    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null,path.join(__dirname, '../../public/images'))
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
    var upload = multer({ storage: storage })



    adminRouter.get('/addnew/', (req, res) => {
        res.render("addbook", {
            nav
        })
    })

    adminRouter.post('/addnew/',upload.single('image'),(req, res) => {
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.file.filename
        }
        var book = Bookdata(item)
        book.save()
        res.redirect("/books")
    })

    adminRouter.get('/addauthor/', (req, res) => {
        res.render('addauthor', {
            nav
        })
    })

    adminRouter.post('/addauthor/', (req, res) => {
        var item = {
            name: req.body.name,
            books: req.body.books,
            genre: req.body.genre,
            image: req.body.image
        }

        var author = Authordata(item)
        author.save()
        res.redirect('/authors/')
    })


    return adminRouter

}


module.exports = router;