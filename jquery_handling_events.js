//HANDLING EVENTS

//1st - JavaScript for button click event:

myButton.addEventListener('click', function() {}, false);

//for IE:

myButton.attachEvent('onclick', function() {});

//jQuery:
$('#myButton').click(function() {
    alert('blah');
});

//handle select ... or changes to a textbox, textarea, etc.
//change function:

$('.MyInput').change(function() {
   //do something here 
});

//works when you leave the textbox or textarea ... like a loss of focus



