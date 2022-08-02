const express=require('express')
const { 
    getbootcamps ,
    getbootcamp , 
    createbootcamp ,
    updatebootcamps ,
    deletebootcamps }=require('../controllers/bootcamps')

const router=express.Router()

router
    .route('/')
    .get(getbootcamps)
    .post(createbootcamp)

router
    .route('/:id')
    .put(updatebootcamps)
    .delete(deletebootcamps)
    .get(getbootcamp)
    
module.exports=router