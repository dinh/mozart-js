# mozart-js
Lightweight library that adds shorthand for element retrieval, creation, insertion, and removal without the unncessary bulk of jQuery.

**Element Retrieval**

Mozart's syntax is modelled after jQuery:

```javascript
$get('#myId'); // returns an element with the ID "myId"
$get('.myClass'); // returns an array of elements with the class "myClass"
$get('-myName'); // returns an array of elements with the name "myName"
$get('div'); //returns an array of DIV elements
```

To search only the subtree of a specific node, add that node as the second paramter:
```javascript
$get('.myClass', '#topNode');
```
**Element Creation**

To create an element, specify the tag name:

```javascript
var foo = $make('div');
```

To add style, class, text, or value, add an object literal as the second parameter and set the keys/values accordingly:<br>

```javascript
var foo = $make('div', {
    'style':'float: left',
    'class':'myClass',
    'text': 'Some text here',
    'value': 'Some value here'
});
```

To add any attributes, add a key with the attribute name prepended with `@`:

```javascript
var foo = $make('div', {  
    'style':'float: left',
    '@id':'myDivId',  
    '@name': 'myDivName',  
    '@title':'This is a <div>'	
});
```

**Element Sibling Insertion**

To add an element before or after an item, call the `$addBefore` or `$addAfter` function with the common syntax:
```javascript
$addBefore(newElement, targetElement);
$addAfter(newElement, targetElement);
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
```
