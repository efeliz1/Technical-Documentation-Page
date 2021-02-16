const express = require("express");
const app     = express();
const PORT    = process.env.port || 8080;
const path    = require("path");


//this is pug engine config with express
app.set('view engine', 'pug');

//This is view directory configration
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));


// this is listen to the server and send the port value we choose
app.listen(PORT, ()=>{
	console.log(`Server is running 👏 👏 👏   On PORT  ➡ ${PORT}`);

});

// here we will handle the request and response .
// and send data to render client side
// here are just rendering are pug pageS
app.get('/', (req, res)=>{
	res.render('index');
})
