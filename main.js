// Javascript file


function myFunction(){
	var active=0;
	switch(active) {
		case 0:
			active = "1";
			document.getElementById("demo").innerHTML = "Script has run.";
			break;
		case 1:
			active = "0";
			document.getElementById("demo").innerHTML = "Script has run twice.";
			break;
		default:
			document.getElementById("demo").innerHTML = "Script error!";
			break;
	}
}

function refreshPage( ){
	location.reload(true);
}
