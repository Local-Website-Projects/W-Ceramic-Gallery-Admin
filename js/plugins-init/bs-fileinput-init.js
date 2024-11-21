(function($) {
    "use strict"

    $("#file_input_1").fileinput();


    $("#file_input_2").fileinput({showCaption: false, dropZoneEnabled: false});


    $("#file_input_3").fileinput({showCaption: false, dropZoneEnabled: true, allowedFileExtensions: ["jpg", "png", "gif"]});



    $("#file_input_4").fileinput({showCaption: false, dropZoneEnabled: true, allowedFileExtensions: ["jpg", "png", "gif"]});



})(jQuery);