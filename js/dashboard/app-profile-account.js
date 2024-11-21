(function ($) {
    "use strict";
    //doughut chart
    const ctx = document.getElementById("spend_channels_3").getContext('2d');
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

})(jQuery);