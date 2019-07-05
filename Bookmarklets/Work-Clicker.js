var version = "0.4.1";
console.log("Work-Clicker.js v" + version);
var WC = {};

var clickspeed = 75;
var interval = null;
var clicking = false;
var bigCookieClicking = false;
var shimmerClicking = false;
var productClicking = false;
var highestProduct = "";

var customTickers=["Work-Clicker.js saves local man from getting cookies stolen by boss.", "News: Florida man steals employee's cookies for clicking too loud.", "Work-Clicker.js recieves yet another update. Now version " + version];
customTickersFunction=function() { return customTickers; }
Game.customTickers.push(customTickersFunction);

initMyBookmarklet();

function initMyBookmarklet() {

  interval = setInterval(function(){ autoClick(); }, clickspeed);
  clicking = true;
  bigCookieClicking = true;
  shimmerClicking = true;
  productClicking = true;
  document.onkeydown = function(e){
    //x turn on/off auto click
    if(e.keyCode==88){
    	if(clicking){
        clearInterval(interval);
        clicking = false
      }else{
        interval = setInterval(function(){ autoClick(); }, clickspeed);
        clicking = true;
      }
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
  }

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

    optionButton(listingdiv, 'autoclickButton', 'WCAutoToggle();', 'Autoclicking', 'Turn on/off all autoclicking', !clicking);
    optionButton(listingdiv, 'bigCookieButton', 'WCBigCookieToggle();', 'Big Cookie Autoclicking', 'Turn on/off big cookie autoclicking', !bigCookieClicking);
    optionButton(listingdiv, 'shimmerButton', 'WCShimmerToggle();', 'Shimmer Autoclicking', 'Turn on/off shimmer autoclicking', !shimmerClicking);
    optionButton(listingdiv, 'productClickButton', 'WCProductToggle();', 'Product Autoclicking', 'Turn on/off autoclicking of the highest product', !productClicking);

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

function WCAutoToggle(){
  var el = document.getElementById('autoclickButton');

  if(clicking){
    el.textContent = "Autoclicking OFF";
    el.className = 'option off';
    clearInterval(interval);
    clicking = false

  }else{
    el.textContent = "Autoclicking ON";
    el.className = 'option';
    interval = setInterval(function(){ autoClick(); }, clickspeed);
    clicking = true;
  }

}

function WCBigCookieToggle(){
  var el = document.getElementById('bigCookieButton');
  if(bigCookieClicking){
    el.textContent = "Big Cookie Autoclicking OFF";
    el.className = 'option off';
    bigCookieClicking = false

  }else{
    el.textContent = "Big Cookie Autoclicking ON";
    el.className = 'option';
    bigCookieClicking = true;
  }
}

function WCShimmerToggle(){
  var el = document.getElementById('shimmerButton');
  if(shimmerClicking){
    el.textContent = "Shimmer Autoclicking OFF";
    el.className = 'option off';
    shimmerClicking = false

  }else{
    el.textContent = "Shimmer Autoclicking ON";
    el.className = 'option';
    shimmerClicking = true;
  }
}

function WCProductToggle(){
  var el = document.getElementById('productClickButton');
  if(productClicking){
    el.textContent = "Product Autoclicking OFF";
    el.className = 'option off';
    productClicking = false

  }else{
    el.textContent = "Product Autoclicking ON";
    el.className = 'option';
    productClicking = true;
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

  if(productClicking){

    let products = document.getElementById('products').querySelectorAll('.unlocked.enabled');
    if(products[products.length-1].id > highestProduct){
      highestProduct = products[products.length-1].id
    }
    eventFire(document.getElementById(highestProduct), 'click');

  }
}
