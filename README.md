# mozart-js
Lightweight library that adds shorthand for element retrieval, creation, insertion, and removal without the bulk of jQuery.

**Element Retrieval**

Mozart operates on CSS selectors in `document.querySelectorAll`, just like jQuery:

```javascript
var a = $get('#myId');
var b = $get('.myClass');
var c = $get('div'); 

//Equivalent to:

var a = document.getElementById('myId');
var b = document.getElementsByClassName('myClass');
var c = document.getElementsByTagName('div');
```

**Element Creation**

To create an element, specify the tag name:

```javascript
var f = $make('div');

//Equivalent to:

var f = document.createElement('div');

```

To set an attribute, add it to an object literal in the second parameter. Though `text` is not an attribute, you can use this property in the literal to add text content:

```javascript
var g = $make('button', {
    'style':'float: left',
    'class':'myClass',
    'text': 'Some text here',
    'value': 'Some value here'
});

//Equivalent to:

var g = document.createElement('button');
g.setAttribute('style','float: left');
g.setAttribute('class','myClass');
g.textContent = 'Some text here';
g.setAttribute('value','Some value here');
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
