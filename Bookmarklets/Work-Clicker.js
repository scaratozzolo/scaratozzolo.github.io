var WC = {};
WC.Version = "0.5.2";
console.log("Work-Clicker.js v" + WC.Version);


WC.Config = {};
WC.Products = {};
WC.Custom = {};

WC.Interval = null;

WC.Config.ClickSpeed = 75;
WC.Config.Clicking = false;
WC.Config.BigCookieClicking = false;
WC.Config.ShimmerClicking = false;
WC.Config.ProductClicking = false;
WC.Config.UpgradeBuying = false;

WC.Config.KeyConfig = {};
WC.Config.KeyConfig.Upgrade = {keyCode:90, func:function(){if(document.getElementById('upgrades').children.length != 0) eventFire(document.getElementById('upgrades').children[0], 'click');}};
WC.Config.KeyConfig.Product0 = {keyCode:49, func:function(){eventFire(document.getElementById('product0'), 'click');}}; //1
WC.Config.KeyConfig.Product1 = {keyCode:50, func:function(){eventFire(document.getElementById('product1'), 'click');}}; //2
WC.Config.KeyConfig.Product2 = {keyCode:51, func:function(){eventFire(document.getElementById('product2'), 'click');}}; //3
WC.Config.KeyConfig.Product3 = {keyCode:52, func:function(){eventFire(document.getElementById('product3'), 'click');}}; //4
WC.Config.KeyConfig.Product4 = {keyCode:53, func:function(){eventFire(document.getElementById('product4'), 'click');}}; //5
WC.Config.KeyConfig.Product5 = {keyCode:54, func:function(){eventFire(document.getElementById('product5'), 'click');}}; //6
WC.Config.KeyConfig.Product6 = {keyCode:55, func:function(){eventFire(document.getElementById('product6'), 'click');}}; //7
WC.Config.KeyConfig.Product7 = {keyCode:56, func:function(){eventFire(document.getElementById('product7'), 'click');}}; //8
WC.Config.KeyConfig.Product8 = {keyCode:57, func:function(){eventFire(document.getElementById('product8'), 'click');}}; //9
WC.Config.KeyConfig.Product9 = {keyCode:48, func:function(){eventFire(document.getElementById('product9'), 'click');}}; //0
WC.Config.KeyConfig.Product10 = {keyCode:189, func:function(){eventFire(document.getElementById('product10'), 'click');}}; // - _
WC.Config.KeyConfig.Product11 = {keyCode:187, func:function(){eventFire(document.getElementById('product11'), 'click');}}; // = +
WC.Config.KeyConfig.Product12 = {keyCode:81, func:function(){eventFire(document.getElementById('product12'), 'click');}}; // q
WC.Config.KeyConfig.Product13 = {keyCode:87, func:function(){eventFire(document.getElementById('product13'), 'click');}}; // w
WC.Config.KeyConfig.Product14 = {keyCode:69, func:function(){eventFire(document.getElementById('product14'), 'click');}}; // e
WC.Config.KeyConfig.Product15 = {keyCode:82, func:function(){eventFire(document.getElementById('product15'), 'click');}}; // r
WC.Config.KeyConfig.ManualBigCookie = {keyCode:67, func:function(){eventFire(document.getElementById('bigCookie'), 'click');}}; //c
WC.Config.KeyConfig.ManualShimmers = {keyCode:86, func:function(){if(document.getElementById('shimmers').innerHTML != "") eventFire(document.getElementsByClassName('shimmer')[0], 'click');;}}; //v

WC.Products.HighestUnlocked = "";

WC.Custom.customTickers = ["Work-Clicker.js saves local man from getting cookies stolen by boss.", "News: Florida man steals employee's cookies for clicking too loud.", "Work-Clicker.js recieves yet another update. Now version " + WC.Version];
WC.Custom.customTickersFunction = function() { return WC.Custom.customTickers; }
Game.customTickers.push(WC.Custom.customTickersFunction);




WC.Main = function() {

  WC.Interval = setInterval(function(){ WC.AutoClick(); }, WC.ClickSpeed);
  WC.Config.Clicking = true;
  WC.Config.BigCookieClicking = true;
  WC.Config.ShimmerClicking  = true;
  WC.Config.ProductClicking = true;
  document.onkeydown = function(e){
    for(let item of Object.keys(WC.Config.KeyConfig)){
      if(e.keyCode == WC.Config.KeyConfig[item].keyCode){
        WC.Config.KeyConfig[item].func();
      }
    }
  }

  WC.UpdateMenu = Game.UpdateMenu;
  Game.UpdateMenu = function(){
    WC.UpdateMenu();
    document.getElementById('menu').querySelector('.subsection').children[7].remove();
    WC.CustomMenu();
  }

}

WC.CustomMenu = function(){
	var titlediv = document.createElement('div');
	titlediv.className = 'title';
	titlediv.textContent = 'Work-Clicker.js';


	if (Game.onMenu == 'prefs') {
		var sub = document.getElementsByClassName('subsection')[0];
    sub.appendChild(titlediv);

    var listingdiv = document.createElement('div');
    listingdiv.className = 'listing';

    optionButton(listingdiv, 'autoclickButton', 'WC.AutoclickingToggle();', 'Autoclicking', 'Turn on/off all autoclicking', !WC.Config.Clicking);
    optionButton(listingdiv, 'bigCookieButton', 'WC.BigCookieToggle();', 'Big Cookie Autoclicking', 'Turn on/off big cookie autoclicking', !WC.Config.BigCookieClicking);
    optionButton(listingdiv, 'shimmerButton', 'WC.ShimmerToggle();', 'Shimmer Autoclicking', 'Turn on/off shimmer (golden cookie) autoclicking', !WC.Config.ShimmerClicking);
    optionButton(listingdiv, 'productClickButton', 'WC.ProductToggle();', 'Product Autoclicking', 'Turn on/off autoclicking of the highest product', !WC.Config.ProductClicking);
    optionButton(listingdiv, 'upgradeClickButton', 'WC.UpgradeToggle();', 'Upgrade Auto Buying', 'Turn on/off auto buying of upgrades', !WC.Config.UpgradeBuying);

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

WC.AutoclickingToggle = function(){
  var el = document.getElementById('autoclickButton');

  if(WC.Config.Clicking){
    el.textContent = "Autoclicking OFF";
    el.className = 'option off';
    clearInterval(WC.Interval);
    WC.Config.Clicking = false

  }else{
    el.textContent = "Autoclicking ON";
    el.className = 'option';
    WC.Interval = setInterval(function(){ WC.AutoClick(); }, WC.Config.ClickSpeed);
    WC.Config.Clicking = true;
  }

}

WC.BigCookieToggle = function(){
  var el = document.getElementById('bigCookieButton');
  if(WC.Config.BigCookieClicking){
    el.textContent = "Big Cookie Autoclicking OFF";
    el.className = 'option off';
    WC.Config.BigCookieClicking = false

  }else{
    el.textContent = "Big Cookie Autoclicking ON";
    el.className = 'option';
    WC.Config.BigCookieClicking = true;
  }
}

WC.ShimmerToggle = function(){
  var el = document.getElementById('shimmerButton');
  if(WC.Config.ShimmerClicking){
    el.textContent = "Shimmer Autoclicking OFF";
    el.className = 'option off';
    WC.Config.ShimmerClicking = false

  }else{
    el.textContent = "Shimmer Autoclicking ON";
    el.className = 'option';
    WC.Config.ShimmerClicking = true;
  }
}

WC.ProductToggle = function(){
  var el = document.getElementById('productClickButton');
  if(WC.Config.ProductClicking){
    el.textContent = "Product Autoclicking OFF";
    el.className = 'option off';
    WC.Config.ProductClicking = false

  }else{
    el.textContent = "Product Autoclicking ON";
    el.className = 'option';
    WC.Config.ProductClicking = true;
  }
}

WC.UpgradeToggle = function(){
  var el = document.getElementById('upgradeClickButton');
  if(WC.Config.UpgradeBuying){
    el.textContent = "Upgrade Auto Buying OFF";
    el.className = 'option off';
    WC.Config.UpgradeBuying = false

  }else{
    el.textContent = "Upgrade Auto Buying ON";
    el.className = 'option';
    WC.Config.UpgradeBuying = true;
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

WC.AutoClick = function() {
  if (WC.Config.BigCookieClicking){
    eventFire(document.getElementById('bigCookie'), 'click');
  }

  if(WC.Config.ShimmerClicking){
    if(document.getElementById('shimmers').innerHTML != ""){
      eventFire(document.getElementsByClassName('shimmer')[0], 'click');
    }
  }

  if(WC.Config.ProductClicking){

    let products = document.getElementById('products').querySelectorAll('.unlocked');
    if(products.length != 0){
      if(products[products.length-1].id > WC.Products.HighestUnlocked){
        WC.Products.HighestUnlocked = products[products.length-1].id
      }
      eventFire(document.getElementById(WC.Products.HighestUnlocked), 'click');
    }
  }
}

WC.Main();
