const app = require('./app');

app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to our Application"
    })
})

app.listen(5000,function(){
    console.log("Application Started at PORT:5000");
})