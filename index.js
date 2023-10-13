const http=require('http')
const {dummydata}=require('./dummydata')

const details=JSON.stringify(dummydata)
const app=http.createServer((req,res)=>{
    console.log(req.url,"fetch the path from base url")
    if(req.url==='/home'){
       res.write("<h1>What is Nodejs</h1>")
       res.write("<p>Node.js is an open-source and cross-platform JavaScript runtime environment</p>")
       res.write("<p>open-source: Means anyone can access it is publically accessible</p>")
       res.write("<p>Cross-plateform: Means we can run the nodejs coding in various platforms or where javascript is installed or can run.</p>")
    res.end() 
}
else if(req.url==='/post'){
    res.write(details)
    res.end()
}
   else{
    res.write("404 page not found")
    res.end();
   }
})
app.listen(5000,()=>{
    try{
        console.log('server is running on Port No. 5000')
    }
    catch(err){
           console.log('error occured during starting the live error',err)
    }
  
})