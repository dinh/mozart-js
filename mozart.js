//Mozart JS v1.2
//Shorthand for element manipulation.

//element retrieval
function $get(input) {
    return document.querySelectorAll(input);
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
    var newElms = $set(input);
    var oldElms = $set(target);
    for (var i = 0; i < oldElms.length; i++) {
        var oldElm = oldElms[i];
        for (var j = 0; j < newElms.length; j++) {
            var newElm = newElms[j].cloneNode(true);
            oldElm.parentNode.insertBefore(newElm, oldElm);
        }
    }
}

//sibling insertion after
function $addAfter(input, target) {
    var newElms = $set(input);
    var oldElms = $set(target);
    for (var i = 0; i < oldElms.length; i++) {
        var oldElm = oldElms[i];
        for (var j = 0; j < newElms.length; j++) {
            var newElm = newElms[j].cloneNode(true);
            oldElm.parentNode.insertBefore(newElm, oldElm.nextSibling);
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
