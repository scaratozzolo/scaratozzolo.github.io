if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    var done = false;
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.4.1.js";
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
  $('table').addClass('table-hover');
}
