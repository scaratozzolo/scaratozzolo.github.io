var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');
link.setAttribute('id', 'animatecsslink');
document.getElementsByTagName('head')[0].appendChild(link);

var start = document.getElementsByTagName("html")[0];
var elements = [];
var vanishSpeed = 200;
var animations = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp', 'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'lightSpeedOut', 'rotateOut', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'hinge', 'jackInTheBox', 'rollOut', 'zoomOut', 'zoomOutDown', 'zoonOutLeft', 'zoomOutRight', 'zoomOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp', 'heartBeat'];
var randomAnimation = false;

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
	if(elements.length != 0){
		var index = Math.floor(Math.random() * (elements.length) );
		var randomElement = elements[index];
		if(randomElement.id != 'animatecsslink'){
			if(!randomAnimation){
				randomElement.classList.add('animated', 'fadeOut', 'slow');
			}else{
				randomElement.classList.add('animated', animations[Math.floor(Math.random() * (animations.length - 0) )], 'slow');
			}
			console.log(randomElement);
			setTimeout(function(){ randomElement.remove(); }, 2500);
			elements.splice(index,1);
		}else{
			deleteElement();
		}
	}else{
		clearInterval(interval);
	}
}

interval = setInterval(function(){ deleteElement(); }, vanishSpeed);

document.onkeydown = function (e){
	if(e.keyCode==90 && e.ctrlKey && e.shiftKey){
		if(randomAnimation){
			console.log('Random Animations Off');
			randomAnimation = false;
		}else{	
			console.log('Random Animations On');
			randomAnimation = true;
		}
	}else if(e.keyCode==88 && e.ctrlKey && e.shiftKey){
		clearInterval(interval);
		vanishSpeed = parseInt(prompt("New vanish speed in milliseconds, current speed is " + vanishSpeed + " milliseconds."));
		interval = setInterval(function(){ deleteElement(); }, vanishSpeed);
	}
}
