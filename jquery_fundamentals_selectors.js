//jQuery Fundamentals Notes, Examples, etc.

//OVERVIEW:
//Single File
//Cross browser
//Selectors
//Events
//Ajax
//Plugins

//jQuery document ready functions
//"ready" doesn't mean everything is loaded (images, CSS, etc.) - just that the DOM is loaded
$(document).ready(function() {

});

//SELECTORS
//=============================================================================

//==by tag name==

$('p') //selects all <p> tags from the DOM

$('p, a, span')  //selects all paragraphs, anchors and span tags from the DOM

$('table tr')  //selects all descendants of the ancestor - in this case all <tr> tags that are descendants of <table> tags

//==by ID - FASTEST way to locate an element (tag, node) in the DOM==

$('#myID')  //selects any tags (nodes) with an id of myID

//==by ClassName==

$('.MyClass')  //selects any tags with a CSS class called MyClass

$('.BlueDiv, .RedDiv')  //selects any tags with a CSS class of BlueDiv or RedDiv

//==by Tag Name and Class Name - more efficient==

$('a.myClass')  //selects only <a> tags with class of myClass

//==by Attribute Values==

$('a[title]') // selects all <a> tags with a title attribute; think of the brackets as "where"

$('a[title="ProgrammingInfo"]') // ... where title attribute is equal to ProgrammingInfo

//==Input Nodes==

$(':input')  //selects all input elements including:  input, select, textarea, button, image, radio, etc.

//versus:

$('input')

//specific

$('form:input')
//or
$('#form1:input')

//additional / advanced selector features:

//==Contains==

$('div:contains("pluralsight")')  //matchs all divs that contain the word pluralsight

//==Odd | Even==

$('tr:odd')
//or
$('tr:even')  //select the odd or event rows; say for conditional formatting

//==First Child==

$('span:first-child')  //find all spans and select the first one in a group

//above will select the first span (firstChild)
    
//==Starts With== 

$('input[value^="Events]') //select all inputs with a value (attribute) that starts with the word Events

//==Ends With==

$('input[value$="Events"]')  //select all inputs with a value (attribute) that ends with the word Events

//==Contains==

$('input[value*="Events"]')  //selects all inputs with a value (attribute) that contains the word Events



//=============================================================================


