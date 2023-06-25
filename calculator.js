const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(request,response){
                    response.sendFile(__dirname+"/index.html");
                    
});
app.post("/",function(request,response){
                    var num1=Number(request.body.num1);
                    var num2=Number(request.body.num2);
                    var result=num1+num2;
                    response.send("The result for calculation :"+result);
});
//bmi calculator

app.get("/bmicalculator",function(request,response){
                    response.sendFile(__dirname+"/bmicalculator.html");
});
app.post("/bmicalculator",function(request,response){
                    var height=parseFloat(request.body.height);
                    var weight=parseFloat(request.body.weight);
                    var res=(weight/(height*height));
                    response.send("BMI calculated value="+res);
});
app.listen(3000,function(){
                    console.log("Live at channel 3000");
});

