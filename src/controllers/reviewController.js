const mongoose = require('mongoose')
const reviewModel = require("../models/reviewModel")
const bookModel = require("../models/bookModel")

let isValid = mongoose.Types.ObjectId.isValid


const createReview = async function(req, res){
    try{

        let book = req.params.bookId

        if(!isValid(book)){
            return res.status(400).send({status : false, mssg : "BookId is not valid"})
        }

        let data = req.body
        let { bookId, reviewedBy, reviewedAt, rating, review, isDeleted} = data

        let dataBody = Object.keys(data)
        if(dataBody.length == 0){
            return res.status(400).send({ status : false, mssg : "DataBody can not be empty"})
        }

        if(!bookId){
            return res.status(400).send({ status : false, mssg : "bookId is mandatory"})
        }

        if(!reviewedBy){
            return res.status(400).send({ status : false, mssg : "Plz specify who has reviewed"})
        }

        if(!rating){
            return res.status(400).send({ status : false, mssg : "Ratings is mandatory"})
        }

        if(rating < 1 || rating > 5){
            return res.status(400).send({ status : false, mssg : "Ratings can only be lied between 1 and 5"})
        }

        if (review) {
            if (typeof (review) != "string") {
                 return res.status(400).send({ status: false, message: "review should be in Strings only" })
            }
          }
        
        if(isDeleted) {
            if (typeof (isDeleted) != "boolean") {
                 return res.status(400).send({ status: false, message: "isDeleted can be true or false only" })
            }
        }

        let bookCheck = await bookModel.findOne({_id: bookId, isDeleted : false})
        if(!bookCheck){
            return res.status(404).send({ status : false, mssg : "No such book found"})
        }
        if(!reviewedAt){
            return res.status(400).send({ status : false, mssg : "ReviewedAt is mandatory"})
        }

        //data.reviewedAt = new Date()

        let reviewData = await reviewModel.create(data)
        let selectReview = await reviewModel.findById(reviewData._id).select({_id:1, bookId : 1, reviewedBy : 1, reviewedAt: 1, rating: 1, review: 1})

        if(selectReview){
            updatedBook = await bookModel.findOneAndUpdate({_id : reviewData.bookId, isDeleted : false}, {$inc: { reviews : 1}},{new: true})
        }
        return res.status(201).send({ status : true , mssg : "success", data : updatedBook,  reviewData})
    }catch(error){
        return res.status(500).send({ status : false, mssg : error.message})
    }
}

//=============================================UPDATE REVIEW=========================

const updateReview = async function (req, res) {
    try {
        let reviewId = req.params.reviewId
        let bookId = req.params.bookId

        if(!isValid(bookId)){
            return res.status(400).send({status : false, mssg : "BookId is not valid"})
        }
        if(!isValid(reviewId)){
            return res.status(400).send({status : false, mssg : "reviewId is not valid"})
        }

        let findBook = await bookModel.findOne({_id : bookId, isDeleted : false})
        if(!findBook){
            return res.status(404).send({ status : false, mssg : "BookId is not found"})
        }

        let findReview = await reviewModel.findOne({_id : reviewId, isDeleted : false})
        if(!findReview){
            return res.status(404).send({ status: false, mssg : " This review is not found"})
        }

        let data = req.body 
        let {review, rating, reviewedBy} = data
        
        let dataBody = Object.keys(data)
        if(dataBody.length == 0){
            return res.status(400).send({ status : false, mssg : "DataBody can not be empty"})
        }

        if(rating){
            if(rating < 1 || rating > 5){
                return res.status(400).send({ status : false, mssg : "Ratings can only be lied between 1 and 5"})
            }
    
        }
        
        let updatedReview = await reviewModel.findByIdAndUpdate({ _id: reviewId, isDeleted: false },req.body, {new : true}).select({_id : 1, bookId : 1, reviewedBy:1, reviewedAt:1, rating:1, review:1})
        let object ={
            _id: findBook._id,
                title: findBook.title,
                excerpt: findBook.excerpt,
                userId: findBook.userId,
                category: findBook.category,
                subcategory: findBook.subcategory,
                isDeleted: findBook.isDeleted,
                reviews: findBook.reviews,
                releasedAt: findBook.releasedAt,
                createdAt: findBook.createdAt,
                updatedAt: findBook.updatedAt,
                updatedReview: updatedReview
            }
            return res.status(200).send({status: true, mssg : "Review update is successful" , data : object})
            }catch (err) {
        return res.status(500).send({ error: err.message });
    }
}

//===============================================DELETE REVIEW===============================

const reviewDeleted =async function(req,res){
    try {
        let reviewId = req.params.reviewId
        let bookId = req.params.bookId

        if(!isValid(bookId)){
            return res.status(400).send({status : false, mssg : "BookId is not valid"})
        }
        if(!isValid(reviewId)){
            return res.status(400).send({status : false, mssg : "reviewId is not valid"})
        }

         let findBookId = await bookModel.findOne({_id: bookId,isDeleted: false,});
              if (!findBookId) {
                return res
                  .status(400)
                  .send({ status: false, message: "Book does not exists" });
              }
        if (!reviewId) {
            return res
              .status(400)
              .send({ status: false, message: "please enter reviewId" });
        }
        let findReviewId = await reviewModel.findOne({
          _id: reviewId,
          isDeleted: false,
        })
    
    
        if (!findReviewId) {
          return res
            .status(400)
            .send({ status: false, message: "review does not exists" });
        }
         
        if (findReviewId.bookId !=bookId) {
            return res.status(400).send({status:false,message:"review doesnot exists this book"})
        }
       
        const deleteReview=await reviewModel.findOneAndUpdate({_id:reviewId,isDeleted:false},{$set:{isDeleted:true}},{new:true})
        if (!deleteReview) {
            return res.status(404).send({status:false,message:"review is already deleted"})
        }   
    
        let reviewCount=await reviewModel.find({_id:bookId,isDeleted:false}).count()
    
        const bookReviewCount= await bookModel.findOneAndUpdate({_id:bookId,isDeleted:false},{$set:{reviews:reviewCount}},{new:true}).select({isDeleted : 1})
      return res.status(200).send({status:true,message:"review deleted successfully" , data : bookReviewCount})                      
    } catch (err) {
        res.status(500).send({error:err.message })
    }
    }
module.exports = { createReview , updateReview, reviewDeleted }