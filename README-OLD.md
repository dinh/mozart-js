# mozart-js
Lightweight library that adds shorthand for element retrieval, creation, insertion, and removal without the bulk of jQuery.

**Element Retrieval**

Mozart's syntax is modelled after jQuery:

```javascript
var a = $get('#myId');
var b = $get('.myClass');
var c = $get('-myName');
var d = $get('div'); 

//Equivalent to:

var a = document.getElementById('myId');
var b = document.getElementsByClassName('myClass');
var c = document.getElementsByName('myName');
var d = document.getElementsByTagName('div');

```

To search only the subtree of a specific node, add that node as the second paramter:
```javascript
var e = $get('.myClass', '#topNode');

//Equivalent to:

var e = document.getElementById('topNode').getElementsByClassName('myClass');

```
**Element Creation**

To create an element, specify the tag name:

```javascript
var f = $make('div');

//Equivalent to:
var f = document.createElement('div');

```

To add style, class, text, or value, add an object literal as the second parameter and set the keys/values accordingly:<br>

```javascript
var g = $make('button', {'style':'float: left', 'class':'myClass', 'text': 'Some text here','value': 'Some value here'});

//Equivalent to:

var g = document.createElement('button');
g.style.cssText('float: left');
g.className = 'myClass';
g.textContent = 'Some text here';
g.value = 'Some value here';
```

To add any attributes, add a key with the attribute name prepended with `@`:

```javascript
var h = $make('a', {'text':'Google','@href':'https://google.com', '@target':'_blank'});

//Equivalent to:

var h = document.createElement('a');
h.textContent = 'Google';
h.setAttribute('href','https://google.com');
h.setAttribute('target','_blank');
```

**Element Sibling Insertion**

To add an element before or after an item, call the `$addBefore` or `$addAfter` function with or without the common syntax:
```javascript

$addBefore(newElement, targetElement);
$addBefore(newElement, '#someElement');


//Equivalent to:
targetElement.parentNode.insertBefore(newElement,targetElement);
targetElement.parentNode.insertBefore(newElement, document.getElementById('someElement'));
```
Like jQuery, you can clone an element and add it multiple times with the common syntax:
```javascript
var foo = $make('div', {'text': 'This is a test'});
$addBefore(foo, '.myClass');
```
**Element Removal**

To remove an element from the DOM, call the `$remove` function with the common syntax:
```javascript
$remove('#myId');
$remove('.myClass');

//Equivalent to:

var rem = document.getElementById('myId');
rem.parentNode.remove(rem);
for (var i in document.getElementsByClassName(myClass)) {
    var elm = document.getElementsByClassName(myClass)[i];
    elm.parentNode.remove(elm);
}


```
