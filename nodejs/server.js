var http=require('http');
var url=require('url');


http.createServer(function(req,res){
    var route=req.url
    if(route==='/')
    res.end('This is homepage');
    if(route==='/admin')
        {
            var username=['aman','sahil','shubham','mohit']
            res.end(JSON.stringify(username));
        }
    
console.log ("server running on port 5050");

}).listen(5050);