const express = require("express");
const app     = express();
const PORT    = process.env.port || 8080;


//this is pug engine config with express
app.set('view engine', 'pug');

app.set('views', __dirname + '/Views');



app.listen(PORT, ()=>{
	console.log(`Server is running 👏 👏 👏   On PORT  ➡ ${PORT}`);
});

app.get('/', (req, res)=>{
	res.render('index');
})
