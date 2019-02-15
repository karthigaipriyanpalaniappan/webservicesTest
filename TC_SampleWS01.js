var request = require('request');

var strHost = "reqres.in";

var options = {
    "url":"https://"+strHost+"/api/users",
    "method":"POST",
    "json":true,
    "strictSSL":false,
    "headers":{
        "Accept":"application/json, text/plain, */*",
        "Content-Length" : "34",
        "Content-Type":"application/json;charset=UTF-8",
        "Host":strHost
    },
    "body":{"name":"morpheus","job":"leader"}
}

request(options, (err, res, body)=>{
    if(err){
        console.log("Message : "+err.message);
    }else{
        console.log("Body :"+JSON.stringify(body));
    }
})