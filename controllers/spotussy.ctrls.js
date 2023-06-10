const db = require('../models')

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

module.exports = {
    index
}