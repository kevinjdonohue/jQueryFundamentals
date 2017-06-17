//Binding to Events

//Core event function in jQuery since 1.7

//==on function==

//fluent style syntax "my div on click do blah"

$('#someDiv').on('click', function() {
   //handle the click event 
});

//==off function==

//turn off a specific event
$('#someDiv').off('click')

//turn off all events that are attached to the given element
$('#someDiv').off();

//binding to multiple events with on:

$('#someDiv').on('mouseenter mouseleave', function() {
   //handle both events here 
});

//==live, delegate, and on functions 

//allows children to be added to a container without explicitly attaching an event handler to each child
//event will bubble up to the parent, where it will be handled

//OLD VERSION: live function

//attached at the document object (DO)

$('.someClass').live('click', someFunction);

$('.someClass').die('click', someFunction);

//NEWER VERSIONS:

//==delegate function==

$('#someParentDiv').delegate('div', 'click', someFunction);

//when any child of someParentDiv that is a div is clicked, the click event bubbles up to someParentDiv; the event handler is fired

//NEWEST VERSION:

//==on function==

$('#someParentDiv').on('click', 'div', someFunction);

//just like delegate, when any child of someParentDiv is clicked, the click event bubbles up to someParentDiv; the event handler is fired

//using the on function with a Map:

$('#MyTable tr').on({
    mouseenter: function() {
      
    },
    mouseleave: function() {
        
    }
});

//handling the hover events

//equivalent to mouseenter and mouseleave functions

$('#someDiv').hover(handlerIn, handlerOut);

//where two arguments are functions handle the mouseenter (in) and mouseleave (out)

//example:
$('#someDiv').hover(
    function() {
        $(this).css('background-color', '#00FF99');
    },
    function() {
        $(this).css('background-color', '#FFFFFF');
    }
);

//short hand version (you can leverage the same function for both the in and out):

$('#someDiv').hover(handlerInOut);

//can be a great compliment to the jQuery toggle functions:

//example:
$('#someDiv').hover(function() {
   $(this).toggleClass('over'); 
});

//==toggle==

$('#MyTable tr').toggle(
    function firstClick() {
        $(this).css('background-color', 'blue');
    },
    function secondClick() {
        $(this).css('background-color', 'green');
    },
    function thirdClick() {
        $(this).css('background-color', '');
    }
);


