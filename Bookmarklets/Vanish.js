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
	console.log(randomElement);
	randomElement.remove();
}

setInterval(function(){ deleteElement(); }, vanishSpeed);
