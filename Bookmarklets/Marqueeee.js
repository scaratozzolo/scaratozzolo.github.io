var el = window.getSelection().anchorNode.parentNode;
var s = getSelText();
var index = el.innerHTML.indexOf(s);
console.log(index+s.length);
var newhtml = el.innerHTML.substring(0, index) + "<marquee>" + s + "</marquee>" + el.innerHTML.substring(index+s.toString().length);
el.innerHTML = newhtml;

function getSelText() {
    var s = '';
    if (window.getSelection) {
        s = window.getSelection();
    } else if (document.getSelection) {
        s = document.getSelection();
    } else if (document.selection) {
        s = document.selection.createRange().text;
    }
    return s;
}
