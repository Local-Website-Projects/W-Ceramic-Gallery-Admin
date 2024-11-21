(function ($) {
    "use strict";
    //doughut chart
    const ctx = document.getElementById("spend_channels_2").getContext('2d');
    // ctx.height = 100;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            defaultFontFamily: 'Poppins',
            datasets: [{
                borderWidth: 0, 
                data: [63, 25, 12],
                backgroundColor: [
                    "#1D7FF0",
                    "#F0A808",
                    "#FC5532"
                ],
                hoverBackgroundColor: [
                    "#1D7FF0",
                    "#F0A808",
                    "#FC5532"
                ]

            }],
            labels: [
                "Super Card",
                "Super Tag",
                "App"
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, 
            legend: {
                display: false
            }
        }
    });



    $('.negetive-circle').circleProgress({
        startAngle: -Math.PI / .8 * 1,
        value: 0.25,
        size: 100,
        emptyFill: '#EEEEEE',
        lineCap: 'round',
        thickness: 4,
        fill: { 
            gradient: ["#f21780", "#fd712c"] 
            },
        reverse: true
    });
    
    $('.positive-circle').circleProgress({
        startAngle: -Math.PI / 5 * 4,
        value: 0.75,
        size: 100,
        emptyFill: '#EEEEEE',
        lineCap: 'round',
        thickness: 4,
        fill: { 
            gradient: ["#3dbde3", "#44e7a2"] 
            },
        reverse: true
    });

})(jQuery);