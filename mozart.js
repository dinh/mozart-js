//Mozart JS v1.2
//Shorthand for element lookup/creation/insertion/removal.

//element retrieval
function $get(input) {
    return document.querySelectorAll(input);
}
function $grab(input) {
    return document.querySelector(input);
}

//element creation
function $make(tag, params) {
    var obj = document.createElement(tag);
    for (var key in params) {
        if (key === 'text') {
            obj.textContent = params[key];
        } else {
            obj.setAttribute(key, params[key]);
        }
    }
    return obj;
}

//sibling insertion before
function $addBefore(input, target) {
    var newElm = $set(input)[0];
    var oldElms = $set(target);
    if (oldElms[0]) {
        var firstTarget = oldElms[0];
        firstTarget.parentElement.insertBefore(newElm, firstTarget);
        for (var i = 1; i < oldElms.length; i++) {
            var oldElm = oldElms[i];
            var clone = newElm.cloneNode(true);
            oldElm.parentElement.insertBefore(clone, oldElm);
        }
    }
}

//sibling insertion after
function $addAfter(input, target) {
    var newElm = $set(input)[0];
    var oldElms = $set(target);
    if (oldElms[0]) {
        var firstTarget = oldElms[0];
        firstTarget.parentElement.insertBefore(newElm, firstTarget.nextSibling);
        for (var i = 1; i < oldElms.length; i++) {
            var oldElm = oldElms[i];
            var clone = newElm.cloneNode(true);
            oldElm.parentElement.insertBefore(clone, oldElm.nextSibling);
        }
    }
}


//element removal
function $remove(input) {
    var rem = $set(input);
    for (var i = 0; i < rem.length; i++) {
        var elm = rem[i];
        elm.parentElement.removeChild(elm);
    }
}

//turn something into a set
function $set(input) {
    var set;
    if (typeof input === 'string' || input instanceof String) {
        set = $get(input);
    } else if (input.nodeType === 1 || input.nodeType === 3) {
        set = [input];
    } else if (input[Symbol.iterator] !== undefined) {
        set = input;
    } else {
        throw new TypeError('Cannot convert ' + typeof input + ' to iterable');
    }
    return set;
}
