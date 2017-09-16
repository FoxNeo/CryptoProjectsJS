$(document).ready(function () {
    
        $('.user-input').on('keyup', function () {
            if ($('.user-input').val().length > 0) {
                // Get the value from the input and hash it
                var hash = CryptoJS.SHA3($('.user-input').val());
                // Update the value of hash to get the new output on the screen
                $('.' + $('.hash').attr('class')).val(hash.toString());
            } else {
                // clean the value if user delete all input value
                $('.hash').val('');
            }
        });
    
    });