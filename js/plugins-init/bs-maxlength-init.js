(function($) {
    "use strict"

    $('#mx_basic').maxlength();

    $('#mx_change').maxlength({
        threshold: 20
    });

    $('#mx_position').maxlength({
        alwaysShow: true,
        placement: 'top-left'
    });


    $('#mx_text').maxlength({
        alwaysShow: true
    });


    $('#mx_all').maxlength({
        alwaysShow: true,
        threshold: 10,
        warningClass: "label label-success",
        limitReachedClass: "label label-danger",
        separator: ' of ',
        preText: 'You have ',
        postText: ' chars remaining.',
        validate: true
    });



})(jQuery);