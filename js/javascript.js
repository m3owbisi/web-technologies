

$(document).ready(function() {
    // Toggle text when button is clicked
    $('#toggleText').click(function() {
        $('#about p').toggle();
    });
 
    // Submit form
    $('form').submit(function(event) {
        event.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        alert('Name: ' + name + '\nEmail: ' + email);
    });
});

