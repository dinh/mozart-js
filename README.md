# mozart-js
Lightweight library that adds shorthand for element retrieval, creation, insertion, and removal.

*TODO: modify insertion and removal functions to take common syntax without using* `$get`

**Element Retrieval**

Mozart's retrieval function is modelled after jQuery:

```
$get('#myId'); // returns an element with the ID "myId"
$get('.myClass'); // returns an array of elements with the class "myClass"
$get('-myName'); // returns an array of elements with the name "myName"
$get('div'); //returns an array of DIV elements
```

To search only the subtree of a specific node, add that node as the second paramter:
```
$get('.myClass', $get('#topNode'));
```
**Element Creation**

To create an element, specify the tag name: <br>

```
var foo = $make('div');
```

To add style, class, text, or value, add an object literal as the second parameter and set the keys/values accordingly:<br>

```
var foo = $make('div', {
    'style':'float: left',
    'class':'myClass',
    'text': 'Some text here',
    'value': 'Some value here'
});
```

To add any attributes, add a key with the attribute name prepended with `@`:

```
var foo = $make('div', {  
	'style':'float: left',
    '@id':'myDivId',  
    '@name': 'myDivName',  
    '@title':'This is a <div>'	
});
```

**Element Sibling Insertion**

To add an element before or after an item, call the `$addBefore` or `$addAfter` function:
```
$addBefore(newElement, targetElement);
$addAfter(newElement, targetElement);
```

**Element Removal**

To remove an element from the DOM, call the `$remove` function:
```
$remove($get('#myId'));
```
