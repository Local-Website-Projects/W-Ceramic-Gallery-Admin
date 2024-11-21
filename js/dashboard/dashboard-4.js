
(function ($) {
    "use strict";

    const ctx = document.getElementById("monthly_view_chart_2").getContext('2d');
    const gradientStroke1 = ctx.createLinearGradient(50, 100, 50, 50);
    gradientStroke1.addColorStop(0, "#f25521");
    gradientStroke1.addColorStop(1, "#f9c70a");

    const gradientStroke2 = ctx.createLinearGradient(50, 100, 50, 50);
    gradientStroke2.addColorStop(0, "#4400eb");
    gradientStroke2.addColorStop(1, "#44ecf5");

    const gradientStroke3 = ctx.createLinearGradient(50, 100, 50, 50);
    gradientStroke3.addColorStop(0, "#f53c79");
    gradientStroke3.addColorStop(1, "#f0ae00");

    const gradientStroke4 = ctx.createLinearGradient(50, 100, 50, 50);
    gradientStroke4.addColorStop(0, "#36b9d8");
    gradientStroke4.addColorStop(1, "#4bffa2");
    
    // ctx.height = 100;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["First", "Second", "Third"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [25, 39, 40],
                    borderColor: gradientStroke1,
                    borderWidth: "0",
                    backgroundColor: gradientStroke1, 
                    hoverBackgroundColor: gradientStroke1
                },
                {
                    label: "My Second dataset",
                    data: [38, 48, 60],
                    borderColor: gradientStroke2,
                    borderWidth: "0",
                    backgroundColor: gradientStroke2, 
                    hoverBackgroundColor: gradientStroke2
                },
                {
                    label: "My Third dataset",
                    data: [58, 58, 70],
                    borderColor: gradientStroke3,
                    borderWidth: "0",
                    backgroundColor: gradientStroke3, 
                    hoverBackgroundColor: gradientStroke3
                }, 
                {
                    label: "My Fourth dataset",
                    data: [88, 68, 90],
                    borderColor: gradientStroke4,
                    borderWidth: "0",
                    backgroundColor: gradientStroke4, 
                    hoverBackgroundColor: gradientStroke4
                }
            ]
        },
        options: {
            legend: {
                display: false
            }, 
            maintainAspectRatio: false, 
            responsive: true, 
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false
                    }, 
                    ticks: {
                        beginAtZero: true, 
                        display: false, 
                        max: 100, 
                        min: 0
                    }, 
                    display: false
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }, 
                    barPercentage: .6, 
                    display: false, 
                    categoryPercentage: 1.0
                }]
            }
        }
    });

})(jQuery);


(function ($) {
    "use strict";

    const ctx = document.getElementById("highlights").getContext('2d');
    const gradientStroke1 = ctx.createLinearGradient(500, 500, 100, 0);
    gradientStroke1.addColorStop(0, "#4400eb");
    gradientStroke1.addColorStop(1, "#44ecf5");


    const gradientStroke2 = ctx.createLinearGradient(500, 500, 100, 0);
    gradientStroke2.addColorStop(0, "#f25521");
    gradientStroke2.addColorStop(1, "#f9c70a");

    // ctx.height = 50;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["01:00 pm", "04:00 pm", "07:00 pm", "10:00 pm", "01:00 am", "07:00 am", "10:00 am", "04:00 am", "12:00 am"],
            type: 'line',
            datasets: [{
                data: [0, 80, 100, 122, 220, 200, 210, 320, 200],
                label: "Saiful",
                backgroundColor: gradientStroke1,
                borderColor: gradientStroke1,
                borderWidth: 0.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: gradientStroke1,
                pointBackgroundColor: gradientStroke1,
            }, {
                label: "Saikot",
                data: [0, 100, 160, 130, 100, 220, 370, 300, 170],
                backgroundColor: gradientStroke2,
                borderColor: gradientStroke2,
                borderWidth: 0.5,
                pointStyle: 'circle',
                pointRadius: 5,
                pointBorderColor: gradientStroke2,
                pointBackgroundColor: gradientStroke2,
            }]
        },
        options: {
            maintainAspectRatio: false, 
            responsive: true,
            tooltips: {
                mode: 'index',
                titleFontSize: 12,
                titleFontColor: '#000',
                bodyFontColor: '#000',
                backgroundColor: '#fff',
                cornerRadius: 3,
                intersect: false,
            },
            legend: {
                // position: 'top',
                // labels: {
                //     usePointStyle: true,
                // },
                display: false


            },
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        display: true,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,
                    ticks: {
                        max: 400, 
                        stepSize: 100, 
                        min: 0
                    }, 
                    gridLines: {
                        display: true,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            },
            title: {
                display: false,
            }
        }
    });


})(jQuery);


//piety chart
(function($) {
    "use strict"
 
    $(".data-attr").peity("donut");
 
})(jQuery);