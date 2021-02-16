// import Jquery
function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  
    script.src = url;  // set its src to the provided URL

    document.body.appendChild(script);  
}
//url of jquery
let url = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
//function call insert url variable
dynamicallyLoadScript(url);



//close side bar
$(".nav-link").click(function(){
	$(html, body).animate({
		scrollTop: $('#Systax').offset().top
	}, 2000)
});



