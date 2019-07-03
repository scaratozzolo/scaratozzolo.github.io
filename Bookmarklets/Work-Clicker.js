var version = "0.3.1";
console.log("Work-Clicker.js v" + version);
var WC = {};

var jqueryv = "3.4.1";
var clickspeed = 75;
var interval = null;
var clicking = false;
var bigCookieClicking = false;
var shimmerClicking = false;

var customTickers=["Work-Clicker.js saves local man from getting cookies stolen by boss.", "News: Florida man steals employee's cookies for clicking too loud.", "Work-Clicker.js recieves yet another update. Now version " + version];
customTickersFunction=function() { return customTickers; }
Game.customTickers.push(customTickersFunction);

if (window.jQuery === undefined || window.jQuery.fn.jquery < jqueryv) {
    var done = false;
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-" + jqueryv + ".js";
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

  interval = setInterval(function(){ autoClick(); }, clickspeed);
  clicking = true;
  bigCookieClicking = true;
  shimmerClicking = true;
  $(document).keydown(function(e){
    //x turn on/off auto click
    if(e.keyCode==88){
    	autoClickToggle();
    //z
    }else if(e.keyCode==90){
      if(document.getElementById('upgrades').children.length != 0){
          eventFire(document.getElementById('upgrades').children[0], 'click');
      }
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
    }else if(e.keyCode==48){
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
    //c maunal click big cookie
    }else if(e.keyCode==67){
    	 eventFire(document.getElementById('bigCookie'), 'click');
    //v manual click shimmers
    }else if(e.keyCode==86){
      if(document.getElementById('shimmers').innerHTML != ""){
        eventFire(document.getElementsByClassName('shimmer')[0], 'click');
      }
    //b turn on/off auto big cookie clicking
    }else if(e.keyCode==66){
      bigCookieClicking = !bigCookieClicking;
    //n turn on/off auto shimmer clicking
    }else if(e.keyCode==78){
      shimmerClicking = !shimmerClicking;
    }
  });

  WC.UpdateMenu = Game.UpdateMenu;
  Game.UpdateMenu = function(){
    WC.UpdateMenu();
    CustomMenu();
  }

}

function CustomMenu(){
	var titlediv = document.createElement('div');
	titlediv.className = 'title';
	titlediv.textContent = 'Work-Clicker.js';


	if (Game.onMenu == 'prefs') {
		var sub = document.getElementsByClassName('subsection')[0];
    sub.appendChild(titlediv);

    var listingdiv = document.createElement('div');
    listingdiv.className = 'listing';

    optionButton(listingdiv, 'autoclickButton', 'WCToggle("autoclickButton", "Autoclicking", "clicking", clicking)', 'Autoclicking', 'Turn on/off all autoclicking', false);
    optionButton(listingdiv, 'bigCookieButton', 'WCToggle("bigCookieButton", "Big Cookie Autoclicking", "bigCookieClicking", bigCookieClicking)', 'Auto Big Cookie Clicking', 'Turn on/off big cookie autoclicking', false);
    optionButton(listingdiv, 'shimmerButton', 'WCToggle("shimmerButton", "Shimmer Autoclicking", "shimmerClicking", shimmerClicking)', 'Auto Shimmer Clicking', 'Turn on/off shimmer autoclicking', false);

    sub.appendChild(listingdiv);
	}
}

function optionButton(parent, id, callback, button, labelText, invert){

  var a = document.createElement('a');
  a.id = id;
  a.setAttribute('onclick', callback);
  if(!invert){
    a.className = 'option';
    a.textContent = button + " ON";
  }else{
    a.className = 'option off';
    a.textContent = button + " OFF";
  }

  var label = document.createElement('label');
	label.textContent = labelText;

  var linebreak = document.createElement('br')

  parent.appendChild(a);
  parent.appendChild(label);
  parent.appendChild(linebreak);

}

function WCToggle(id, button, state, tmp){
  var el = document.getElementById(id);

  if(tmp){
    el.textContent = button + " OFF";
    el.className = 'option off';

  }else{
    el.textContent = button + " ON";
    el.className = 'option';
  }

  if(state == 'clicking') autoClickToggle();
  if(state == 'bigCookieClicking') bigCookieClicking = !bigCookieClicking;
  if(state == 'shimmerClicking') shimmerClicking = !shimmerClicking;
}

function autoClickToggle(){
  if(clicking){
    clearInterval(interval);
    clicking = false;
  }else{
    interval = setInterval(function(){ autoClick(); }, clickspeed);
    clicking = true;
  }
}

function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  }else{
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

function autoClick() {
  if (bigCookieClicking){
    eventFire(document.getElementById('bigCookie'), 'click');
  }

  if(shimmerClicking){
    if(document.getElementById('shimmers').innerHTML != ""){
      eventFire(document.getElementsByClassName('shimmer')[0], 'click');
    }
  }
}
