var v = "3.4.1";

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
  setInterval(function(){ eventFire(document.getElementById('bigCookie'), 'click'); }, 50);
  
  $(document).keydown(function(e){
    if(e.keyCode==49){
	eventFire(document.getElementById('product0'), 'click');    
    }
  });
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


