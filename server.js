var express = require("express")
var app = express()
app.use(express.static(__dirname + '/index.html'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = process.env.port || 3000;

app.listen(port, () => {

    console.log("App listening to: " + port)
})