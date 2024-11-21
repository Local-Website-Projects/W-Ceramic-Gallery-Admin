// !function(t){"use strict";t(document).ready(function(){t(function(){t("#tags_1").tagsInput({width:"auto"}),t("#tags_2").tagsInput({width:"auto",onChange:function(n,a){var i=["php","ruby","javascript"];t(".tag",a).each(function(){t(this).text().search(new RegExp("\\b("+i.join("|")+")\\b"))>=0&&t(this).addClass("tag--yellow")})}})})})}(window.jQuery);


(function($) {
    "use strict"

    $("#tags_1").tagsinput();

    $("#tags_2").tagsinput('items');



    // var citynames = new Bloodhound({
    //     datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
    //     queryTokenizer: Bloodhound.tokenizers.whitespace,
    //     prefetch: {
    //       url: './../ajax/citynames.json',
    //       filter: function(list) {
    //         return $.map(list, function(cityname) {
    //           return { name: cityname }; });
    //       }
    //     }
    // });
    // citynames.initialize();
      
    // $('#tags_typeahead').tagsinput({
    //     typeaheadjs: {
    //       name: 'citynames',
    //       displayKey: 'name',
    //       valueKey: 'name',
    //       source: citynames.ttAdapter()
    //     }
    // });


    // var cities = new Bloodhound({
    //     datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
    //     queryTokenizer: Bloodhound.tokenizers.whitespace,
    //     prefetch: './../ajax/cities.json'
    //   });
    //   cities.initialize();
      
    //   var elt = $('#object_typeahead');
    //   elt.tagsinput({
    //     itemValue: 'value',
    //     itemText: 'text',
    //     typeaheadjs: {
    //       name: 'cities',
    //       displayKey: 'text',
    //       source: cities.ttAdapter()
    //     }
    //   });
    //   elt.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
    //   elt.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
    //   elt.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
    //   elt.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
    //   elt.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });














})(jQuery);