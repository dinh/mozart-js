//Mozart JS v1.0 
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
            $get(t).forEach(function () {
                this.parentNode.insertBefore(e, this);
            });
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
            $get(t).forEach(function () {
                this.parentNode.insertBefore(e, this.nextSibling);
            });
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
            $get(e).forEach(function () {
                this.parentNode.removeChild(e);
            });
        }
    } else {
        e.parentNode.removeChild(e);
    }
}
