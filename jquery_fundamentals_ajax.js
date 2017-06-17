//ajax functions

//==load function==

$('#someDiv').load(url, data, callback);  //loads HTML data from the server

//example:

$(document).ready(function() {
   $('#HelpButton').click(function() {
      $('#HelpDiv').load('HelpDetails.htm #MainTOC'); 
   });
});

$('#helpButton').click(function() {
   //$('#myHelpContent').load('help.htm #helpSection1Body'); 
    $('#myHelpContent').load('NotFound.htm', function (response, status, xhr){
        if(status === "error") {
            alert('Error: ' + xhr.statusText);
        }
    });
});

//?how do you do this when the data is coming from another site? - is that JSONP?

//==get and post functions==

//the get function actually just wraps the .ajax function under the covers

$.get(url, data, callback, datatype);  //retrieves data from a server

$.get('help.htm', function(data) {
   $('#myHelpContent').html(data); 
});

//==getJSON function==

$.getJSON(url, data, callback)  //get or post; returns JSON data

$.getJSON('SomePage.aspx', {id:1}, function(data) {
   alert(data.FirstName + ' ' + data.LastName); 
});

//==post function==
$.post(url, data, callback, datatype)  //get and post raw data from the server

//==core Ajax functionality==

$.ajax();

//example:
$.ajax({
    url: 'InsertCustomer',
    data: customer,
    dataType: 'json',
    success: function(data, status, xhr) {
        alert('Insert status: ' + data.Status + '\n' + data.message);
    },
    error: function(xhr, status, error) {
        alert('Error occurred: ' + status);
    }
});

//looks like a more current example would look like this:

$.ajax({
    url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http%3A%2F%2Fnews.google.com%2Fnews%3Foutput%3Drss%26num%3D8%20',
    type: 'GET',
    dataType: 'jsonp'
})
    .done(function(data) { successHandler(data); })
    .fail(function(xhr, status, error) { errorHandler(xhr, status, error); })

//this uses the newer done and fail (and always) methods chained on to the ajax call instead of the success, error functions
//in addition, especially with this style you can extract out the different functions into seperate functions instead of being inline; anonymous functions in the ajax block
