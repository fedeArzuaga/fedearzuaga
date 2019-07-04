let span = document.getElementById("count");
let number = 5;

let count = setInterval( () => {
	
	if( number == 0 ){
		clearInterval(count);
		window.location.replace("https://fedearzuaga.com");
		}

	span.textContent = number;
	number--;

}, 1000);