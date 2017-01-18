//Mozart JS v1.3
//Shorthand for element lookup/creation/insertion/removal.
//https://github.com/C-Weinstein/mozart-js/

//element retrieval
function $get(input) {return $toArray(document.querySelectorAll(input));}
function $grab(input) {return document.querySelector(input);}
function $toArray(arrayLike) {return Array.prototype.slice.call(arrayLike);}

//element creation
function $make(tag, params) {
    var obj = document.createElement(tag);
    for (var key in params) obj[key] === null || obj[key] === '' ? obj[key] = params[key] : obj.setAttribute(key, params[key]);   
    return obj;
}

//sibling insertion before
function $addBefore(input, target) {
    var newElm = $set(input)[0];
    var oldElms = $set(target);
    if (oldElms[0]) {
        for (var i = 0; i < oldElms.length; i++) {
            var oldElm = oldElms[i];
            var clone = (i !== 0 ? newElm.cloneNode(true) : newElm);
            oldElm.parentElement.insertBefore(clone, oldElm);
        }
    }
}

//sibling insertion after
function $addAfter(input, target) {
    var newElm = $set(input)[0];
    var oldElms = $set(target);
    if (oldElms[0]) {        
        for (var i = 0; i < oldElms.length; i++) {
            var oldElm = oldElms[i];
            var parent = oldElm.parentElement;
            var clone = (i !== 0 ? newElm.cloneNode(true) : newElm);
            oldElm.nextSibling ? parent.insertBefore(clone, oldElm.nextSibling) : parent.appendChild(clone);
        }
    }
}

//element removal
function $remove(input) {
    var rem = $set(input);
    for (var i = 0; i < rem.length; i++) rem[i].parentElement.removeChild(rem[i]);    
}

//turn something into a set
function $set(input) {    
    if (typeof input === 'string' || input instanceof String) return $get(input);
    if (input.nodeType === 1 || input.nodeType === 3) return [input];
    if (input[Symbol.iterator] !== undefined) return input;
    throw new TypeError('Cannot convert ' + typeof input + ' to iterable');        
}
