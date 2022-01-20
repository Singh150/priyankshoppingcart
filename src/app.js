const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/livewire',{useNewUrlparser:true,useUnifiedTopology:true})
.then(()=>console.log("connection Successfull...."))
.catch((err)=>console.log(err));


//creating model
const employeeSchmea=new mongoose.Schema({
    name:{type:String,
    required:true},
    mobile:Number,
    address:String,
    emp_id:Number
});



const Employee=new mongoose.model('Employee',employeeSchmea);
//data insertion

const employeOne=new Employee({
    name:"HimaniSingh",
    mobile:6262474111,
    address:"indore",
    emp_id:0912
});
employeOne.save();
