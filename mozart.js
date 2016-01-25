//Mozart JS v1.1
//Shorthand for element retrieval, creation, insertion, and removal. 

//retrieve element(s)
function $get(i, t) {
    if (void 0 === t) t = document;
    if (i.startsWith('#')) return t.getElementById(i.substring(1));
    if (i.startsWith('.')) return t.getElementsByClassName(i.substring(1));
    if (i.startsWith('-')) return t.getElementsByName(i.substring(1));
    return t.getElementsByTagName(i);
}

//create element
function $make(t, p) {
    var o = document.createElement(t);
    if (p.style) o.style.cssText = p.style;
    if (p.class) o.className = p.class;
    if (p.text) o.textContent = p.text;
    if (p.value) o.value = p.value;
    Object.keys(p).forEach((e) => {
        if(e.startsWith("@")) {
            o.setAttribute(e.substring(1), p[e]);            
        }        
    });
    return o;
}

//insert element before target(s)
function $addBefore(e, t) {
    if (typeof t === 'string' || t instanceof String) {
        if (t.startsWith('#')) {            
            $get(t).parentNode.insertBefore(e, $get(t));
        } else {
            var arr = $get(t);
            for (var i in arr) {
                var f = e.cloneNode(true);
                arr[i].parentNode.insertBefore(f, arr[i]);
            } 
        }
    } else {
        t.parentNode.insertBefore(e, t);
    }        
}

//insert element after target(s)
function $addAfter(e, t) {
    if (typeof t === 'string' || t instanceof String) {
        if (t.startsWith('#')) {
            $get(t).parentNode.insertBefore(e, $get(t).nextSibling);
        } else {

            var arr = $get(t);
            for (var i in arr) {
                var f = e.cloneNode(true);
                arr[i].parentNode.insertBefore(f, arr[i].nextSibling);
            } 

        }
    } else {
        t.parentNode.insertBefore(e, t.nextSibling);
    }
}

//remove element(s)
function $remove(e) {
    if (typeof e === 'string' || e instanceof String) {
        if (e.startsWith('#')) {
            $get(e).parentNode.removeChild($get(e));
        } else {
            var arr = $get(e);
            for (var i in arr) {                
                arr[i].parentNode.removeChild(arr[i]);
            }            
        }
    } else {
        e.parentNode.removeChild(e);
    }
}

//on when the document is ready
var $domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};
