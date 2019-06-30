var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
link.setAttribute('id', 'animatecsslink');
document.getElementsByTagName('head')[0].appendChild(link);

var start = document.getElementsByTagName("html")[0];
var elements = [];
var vanishSpeed = Math.floor(Math.random() * (10000 - 1000) ) + 1000;

for(var i = 0; i < start.children.length; i++){
	
	getChildren(start.children[i]);	

}


function getChildren(e){
	if(e.children.length != 0){
		for(var j = 0; j < e.children.length; j++){
			getChildren(e.children[j]);
		}
	}else{
		elements.push(e);
	}

}

function deleteElement(){
	var randomElement = elements[Math.floor(Math.random() * (elements.length - 0) )];
	if(randomElement.id != 'animatecsslink'){
		randomElement.classList.add('animated', 'fadeOut');
		console.log(randomElement);
		setTimeout(true, 3000);
		randomElement.remove();
	}else{
		deleteElement();
	}
}

setInterval(function(){ deleteElement(); }, 200);
