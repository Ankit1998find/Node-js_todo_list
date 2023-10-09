
const mongoose=require("mongoose");
const {Schema}=mongoose;
const tasksSchema=new Schema({
userId:{type:String,default:101},
taskTitle:{type:String, require:true},
CreatedAt: { type: Date, default: Date.now },
Status:{ type: String, enum: ['Pending', 'Completed', 'HalfDone'], default: 'Pending' },

});

exports.task=mongoose.model('task',tasksSchema);