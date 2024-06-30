import {
    copyToClipboard
} from './clipboard.js'

$(document).ready(function () {

    $('.user-input').on('keyup', function () {
        if ($('.user-input').val().length > 0) {
            // Get the value from the input and hash it
            let hash = CryptoJS.SHA256($('.user-input').val());
            var hash2 = CryptoJS.SHA256("shivasurya");
            console.log(hash2);
            // Update the value of hash to get the new output on the screen
            $('.' + $('.hash').attr('class')).val(hash.toString());
        } else {
            // clean the value if user delete all input value
            $('.hash').val('');
        }
    });
    copyToClipboard;
});