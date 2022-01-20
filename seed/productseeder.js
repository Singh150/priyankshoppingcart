var Product=require('../models/product');

var mongoose=require('mongoose');


mongoose.connect('mongodb://localhost:27017/shopping');

var products=[
  
        new Product({
            imagePath:"https://www.seekpng.com/png/detail/86-866167_appliance-png-mart-home-appliances-images-png.png",
            title:'Electronics',
            description:'Latest',
            price:.1000-9000
    
        }),
        new Product({
            imagePath:"https://cdn.theculturetrip.com/wp-content/uploads/2018/01/shutterstock_372453505.jpg",
            title:'Beauty Products',
            description:'Awesome',
            price:.1000 - 5000
    
        }),
        new Product({
            imagePath:"https://i.ytimg.com/vi/XdyXc3S6yXA/maxresdefault.jpg",
            title:'Athenic Weat',
            description:'New One',
            price:.700 - 2000
    
        }),
];
var done=0;
for(var i=0; i<products.length; i++){
    products[i].save(function(err,result){
        done++;
        if(done ==products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}
