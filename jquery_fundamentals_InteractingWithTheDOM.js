//INTERACTING WITH THE DOM
//=============================================================================

//==each function==

$('div').each(function(index, elem) { 
    alert(index + " = " + $(elem).text());
});

//or

$('div').each(function(index) { 
    alert(index + " = " + $(this).text());
});

//interact with the JavaScript object properties directly using the this keyword:

$('div').each(function(index) { 
    this.title = "My Index = " + index;
});

//modifying attributes

var val = $('#CustomerDiv').attr('title');

$('img').attr('title', 'My Image Title');  //this will update the title of all of the images found by jQuery; no each required

//even further, you can update multiple attributes at once with JSON syntax (map):

$('img').attr({
    title: 'My Image Title',
    style: 'border:2px solid black;'
});

//adding or removing nodes from the DOM:

//append, appendTo, prepend, prependTo, remove

 $('.phone').append('<span>Phone:</span>')
 
 $('.phone').prepend('<span>Phone:</span>');

//wrap:

$('.state').wrap('<div class="US_State"/>');  //wraps selected item in the html provided

//remove:

$('phone, .location').remove();

//hasClass addClass, removeClass, toggleClass






//=============================================================================