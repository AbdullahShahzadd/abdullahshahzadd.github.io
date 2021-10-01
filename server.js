var express = require("express");
var app = express();
const HTTP_PORT = process.env.PORT || 8080;
app.use(express.static("views"))

app.get("/", (req, res) => {
	res.send("index.html")
})
app.listen(HTTP_PORT, function(){
	console.log("server on: " + HTTP_PORT);
});
