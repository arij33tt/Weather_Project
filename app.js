
const expres= require("express")

 const https= require("https");

 const bodyParser= require("body-parser");

 const app = expres();

app.use(bodyParser.urlencoded({extended: true}))

 app.get("/",(req,res)=>{ 

res.sendFile(__dirname+"/index.html")
    
 })
    app.post("/",(req,res)=>{ 

  //  console.log();

   const qurey= req.body.cityName;  

     const apikey = "242213c2a06c7f80b6e04a02dea582";

     const  units ="metric";
    
    const url="https://api.openweathermap.org/data/2.5/weather?q="+ qurey+"&appid="+apikey +"ad&units="+units;

    
https.get(url,(resh)=>{

resh.on('data', (data) => {

  const wData= JSON.parse(data);

  const temp= wData.main.temp;

  const wDiscription= wData.weather[0].description

  const icon = wData.weather[0].icon
 
  const imgUrl= "http://openweathermap.org/img/wn/"+icon+"@2x.png";

  res.write("<p> the weather type is "+ wDiscription + "</p>");

  res.write("<h1>Temperature at "+ qurey +" is "+temp+" degree Celcius </h1>");

  res.write("<img src =" +imgUrl +">");

  res.send();
  })

})

    })
 
 



app.listen(3000,()=>{
    console.log("Weather app working att port 3000")
})