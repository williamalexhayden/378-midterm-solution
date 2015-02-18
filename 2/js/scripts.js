// Close Button
$('.message .close').on('click', function() {
  $(this).closest('.message').fadeOut();
});

// Previous Number of Messages
var prevNumMsg = 35;
// New Number of Messages
var newNumMsg = 123;
// Create variable, `totalMsg` to store Total Messages
// Add (sum) of Previous and New Messages
var totalMsg = prevNumMsg + newNumMsg;

// Output to red Messages badge
// REF: http://api.jquery.com/text/
$('.msg').text(totalMsg);