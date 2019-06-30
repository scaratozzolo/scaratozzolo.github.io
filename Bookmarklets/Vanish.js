var start = document.getElementsByTagName("html")[0];
var elements = [];

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
	randomElement.remove();
}

setInterval(function(){ deleteElement(); }, 1000);
