var el = window.getSelection().anchorNode.parentNode;
var atts = el.attributes;
var nodes=[], values=[];
for (var i = 0; i < atts.length; i++){
    att = atts[i];
    nodes.push(att.nodeName);
    values.push(att.nodeValue);
}
console.log(nodes);
var newEl = document.createElement('marquee');
newEl.innerHTML = el.innerHTML;
for(var j = 0; j < atts.length; j++) {
    newEl.setAttribute(nodes[j], values[j]);
}

// replace el with newEL
el.parentNode.replaceChild(newEl, el);
