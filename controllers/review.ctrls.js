const db = require('../models')
const session = require('express-session')

//Create
const create = async (req,res) =>{
    try{
        const newReview = await db.Review.create(req.body)
        console.log('New Review: ', newReview)
        return res.status(200).json({review:newReview})
    } catch(err){
        return res.status(404).json({error:err.message})
    }
}

//Delete
const destroy = async (req,res) =>{
    try{
        const foundReview = await db.Review.findByIdAndDelete(req.params.id)
        if(!foundReview){
            return res.status(400).json({error: 'Review not found'})
        }else{
            return res.status(200).json({message:`${foundReview.id} deleted successfully`}) 
        }
    }catch(err){
        return res.status(404).json({error:err.message})
    }
}

module.exports = {
    create,
    destroy
}