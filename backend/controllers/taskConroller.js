const TaskModel=require("../models/taskModel")

module.exports.getTask=async(req,res)=>{
    const task=await TaskModel.find()
    res.send(task)

    
   
}
module.exports.saveTask=(req,res)=>{
   
  const {task}=req.body

  TaskModel.create({task}).then((data)=>{
    console.log("saved")
    res.status(201).send(data)
  }).catch((err)=>{
    console.log(err);
    res.send("error happend")
  })

    
   
}

module.exports.updateTask=(req,res)=>{
   const {id}= req.params
    const {task}=req.body
  
    TaskModel.findByIdAndUpdate(id, {task}).then(()=>{
      res.send("updated successfully")
    }).catch((err)=>{
      console.log(err);
      res.send("error happend")
    })
  
      
     
  }
  module.exports.deleteTask=(req,res)=>{
    const {id}= req.params
   
   
     TaskModel.findByIdAndDelete(id).then(()=>{
       res.send("deleted successfully")
     }).catch((err)=>{
       console.log("f###########d up");
       res.send("error happend")
     })
   
       
      
   }