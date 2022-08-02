const Bootcamp=require('../model/Bootcamp')

exports.getbootcamps=(req , res , next)=>{
    Bootcamp.find().then(body=>{
        res.status(200).json({
            sucess:true,
            body:body
        })
     })
}

exports.getbootcamp=(req , res , next)=>{
    Bootcamp.findById(req.params.id).then(body=>{
        res.status(201).json({
            sucess:true,
            body:body
        })
     })
}

exports.createbootcamp=async(req , res , next)=>{
     Bootcamp.create(req.body).then(body=>{
        res.status(201).json({
            sucess:true,
            body:body
        })
     })
}

exports.updatebootcamps=(req , res , next)=>{
    Bootcamp.findByIdAndUpdate(req.params.id , req.body , {
        new:true
    }).then(body=>{
        res.status(201).json({
            sucess:true,
            body:body
        })
     })
}

exports.deletebootcamps=(req , res , next)=>{
    try{
        Bootcamp.findByIdAndRemove(req.params.id).then(()=>{
            res.status(201).json({
                sucess:true,
                body:{}
            })
        })
    }
    catch(err){
        console.log(err)
    }
   
}