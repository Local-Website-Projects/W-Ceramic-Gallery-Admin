(function($) {
    "use strict"

    $('#world-map').vectorMap({ 
        map: 'world_en',
        backgroundColor: '#F7FAFC',
        borderColor: '#818181',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: '#3BCAC9',
        enableZoom: true,
        hoverColor: '#DB001D',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#DB001D',
        selectedRegions: null,
        showTooltip: true,
        onRegionClick: function(element, code, region)
        {
            var message = 'You clicked "'
                + region
                + '" which has the code: '
                + code.toUpperCase();
     
            alert(message);
        }
    });

    // $('#usa').vectorMap({ 
    //     map: 'usa_en',
    //     backgroundColor: '#a5bfdd',
    //     borderColor: '#818181',
    //     borderOpacity: 0.25,
    //     borderWidth: 1,
    //     color: '#f4f3f0',
    //     enableZoom: true,
    //     hoverColor: '#c9dfaf',
    //     hoverOpacity: null,
    //     normalizeFunction: 'linear',
    //     scaleColors: ['#b6d6ff', '#005ace'],
    //     selectedColor: '#c9dfaf',
    //     selectedRegions: null,
    //     showTooltip: true,
    //     onRegionClick: function(element, code, region)
    //     {
    //         var message = 'You clicked "'
    //             + region
    //             + '" which has the code: '
    //             + code.toUpperCase();
     
    //         alert(message);
    //     }
    // });

    // $('#australia').vectorMap({ 
    //     map: 'au_en',
    //     backgroundColor: '#a5bfdd',
    //     borderColor: '#818181',
    //     borderOpacity: 0.25,
    //     borderWidth: 1,
    //     color: '#f4f3f0',
    //     enableZoom: true,
    //     hoverColor: '#c9dfaf',
    //     hoverOpacity: null,
    //     normalizeFunction: 'linear',
    //     scaleColors: ['#b6d6ff', '#005ace'],
    //     selectedColor: '#c9dfaf',
    //     selectedRegions: null,
    //     showTooltip: true,
    //     onRegionClick: function(element, code, region)
    //     {
    //         var message = 'You clicked "'
    //             + region
    //             + '" which has the code: '
    //             + code.toUpperCase();
     
    //         alert(message);
    //     }
    // });





})(jQuery);