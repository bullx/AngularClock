
var exp =  require('express');
var app = exp();

app.use(exp.static(__dirname+"/"));

app.listen(3001);
console.log("server on port 3001");

