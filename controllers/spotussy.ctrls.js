const db = require('../models')
const session = require('express-session')
const res = require('express/lib/response')

//Index
const index = async (req,res) =>{
    try {
        const allSpots = await db.Spotussy.find({})
        return res.status(200).json({
            allSpots,
            requestedAt: new Date().toLocaleDateString
        })
    }catch(err){
        return res.status(404).json({error:err.message})
    }
}

//Create
const create = async (req,res) =>{
    try{
        const newSpot = await db.Spotussy.create(req.body)
        console.log('New Spotussy: ', newSpot)
        return res.status(200).json({spotussy:newSpot})
    } catch(err){
        return res.status(404).json({error:err.message})
    }
}

//Delete
const destroy = async (req,res) =>{
    try{
        const oneSpot = await db.Spotussy.findByIdAndDelete(req.params.id)
        if(!oneSpot){
            return res.status(400).json({error: 'Spot not found'})
        }else{
            return res.status(200).json({message:`${oneSpot.id} deleted successfully`}) 
        }
    }catch(err){
        return res.status(404).json({error:err.message})
    }
}

module.exports = {
    index,
    create,
    destroy
}