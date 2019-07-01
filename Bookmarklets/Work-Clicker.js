var v = "3.4.1";
var clickspeed = 75;
var interval = null;
var clicking = false;

if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done = false;
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-" + v + ".js";
    script.onload = script.onreadystatechange = function(){
        if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
            done = true;
            initMyBookmarklet();
        }
    };
    document.getElementsByTagName("head")[0].appendChild(script);
} else {
    initMyBookmarklet();
}


function initMyBookmarklet() {
  interval = setInterval(function(){ eventFire(document.getElementById('bigCookie'), 'click'); }, clickspeed);
  clicking = true;
  $(document).keydown(function(e){
    //x
    if(e.keyCode==88){
	if(clicking){
		clearInterval(interval);
		clicking = false;
	}else{
		interval = setInterval(function(){ eventFire(document.getElementById('bigCookie'), 'click'); }, clickspeed);
		clicking = true;
	}
    //z
    }else if(e.keyCode==90){
       eventFire(document.getElementById('upgrade0'), 'click');
    //1
    }else if(e.keyCode==49){
	eventFire(document.getElementById('product0'), 'click');
    //2
    }else if(e.keyCode==50){
    	eventFire(document.getElementById('product1'), 'click');
    //3
    }else if(e.keyCode==51){
    	eventFire(document.getElementById('product2'), 'click');
    //4
    }else if(e.keyCode==52){
    	eventFire(document.getElementById('product3'), 'click');
    //5
    }else if(e.keyCode==53){
    	eventFire(document.getElementById('product4'), 'click');
    //6
    }else if(e.keyCode==54){
    	eventFire(document.getElementById('product5'), 'click');
    //7
    }else if(e.keyCode==55){
    	eventFire(document.getElementById('product6'), 'click');
    //8
    }else if(e.keyCode==56){
    	eventFire(document.getElementById('product7'), 'click');
    //9
    }else if(e.keyCode==57){
    	eventFire(document.getElementById('product8'), 'click');
    //0
    }else if(e.keyCode==49){
    	eventFire(document.getElementById('product9'), 'click');
    //- and _
    }else if(e.keyCode==189){
    	eventFire(document.getElementById('product10'), 'click');
    //+ and =
    }else if(e.keyCode==187){
    	eventFire(document.getElementById('product11'), 'click');
    //q
    }else if(e.keyCode==81){
    	eventFire(document.getElementById('product12'), 'click');
    //w
    }else if(e.keyCode==87){
    	eventFire(document.getElementById('product13'), 'click');
    //e
    }else if(e.keyCode==69){
    	eventFire(document.getElementById('product14'), 'click');
    //r
    }else if(e.keyCode==82){
    	eventFire(document.getElementById('product15'), 'click');
    //c
    }else if(e.keyCode==67){
    	eventFire(document.getElementById('bigCookie'), 'click');
    //ctrl+shift+x
    }else if(e.keyCode==88 && e.ctrlKey && e.shiftKey){
	    changeClickSpeed();
    }
  });
}

function changeClickSpeed(){
	clickspeed = parseInt(prompt("New click speed in milliseconds, current is " + clickspeed + " milliseconds.");
	interval = setInterval(function(){ eventFire(document.getElementById('bigCookie'), 'click'); }, clickspeed);
}

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}


