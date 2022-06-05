const express=require("express");
const https=require("https");
const app=express();

app.get("/",function(req,res){
   
    const url= "https://api.opentripmap.com/0.1/en/places/xid/R4682064?apikey=5ae2e3f221c38a28845f05b61cf9ff614d3e7ce7d8c01eb2ff7f49b6";
    
    https.get(url,function(response)
    {
            console.log(response.statusCode);
            response.on("data",function(data){
                const placeData=JSON.parse(data);
                const temp=placeData.address;
                const des= placeData.wikipedia_extracts.text;
                const img = placeData.image;
                res.sendFile();
                console.log(temp);
                console.log(des);
            })
    })
  // res.send("Server is up and running");
  // res.sendFile(img);
});
app.listen(3000,function(){
    console.log("Server is running on port 3000.")
})
