

(function ($) {
    "use strict";

    const ctx = document.getElementById("transaction").getContext('2d');

    var barChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Red',
            backgroundColor: '#1D7FF0',
            hoverBackgroundColor: '#1D7FF0', 
            data: [
                '32',
                '22',
                '12',
                '22',
                '32',
                '22',
                '22', 
                '26', 
                '14', 
                '34', 
                '34', 
                '32'
            ]
        }, {
            label: 'Green',
            backgroundColor: '#84E1FF',
            hoverBackgroundColor: '#84E1FF', 
            data: [
                '42',
                '42',
                '22',
                '12',
                '12',
                '12',
                '12', 
                '23',
                '21', 
                '34', 
                '22', 
                '31' 
            ]
        }, {
            label: 'Blue',
            backgroundColor: '#EEEEEE',
            hoverBackgroundColor: '#EEEEEE', 
            data: [
                '12',
                '12',
                '42',
                '42',
                '22',
                '32',
                '12', 
                '23', 
                '11', 
                '15', 
                '17', 
                '31'
            ]
        }]

    };
    
    new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            maintainAspectRatio: false, 
            legend: {
                display: true
            }, 
            title: {
                display: false
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        display: false
                    }, 
                    barPercentage: .2
                }],
                yAxes: [{
                    stacked: true, 
                    ticks: {
                        max: 100, 
                        min: 0
                    }
                }]
            }
        }
    });

})(jQuery);



(function ($) {
    "use strict";

    const nk = document.getElementById("transaction_2").getContext('2d');
    const gradientStroke = nk.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#f0a808");
    gradientStroke.addColorStop(0.235, "#f53c79");
    gradientStroke.addColorStop(0.7, "#f0a709");
    gradientStroke.addColorStop(1, "#f0a808");

    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function () {
            draw.apply(this, arguments);
            let nk = this.chart.chart.ctx;
            let _stroke = nk.stroke;
            nk.stroke = function () {
                nk.save();
                nk.shadowColor = 'rgba(0, 0, 0, .1)';
                nk.shadowBlur = 5;
                nk.shadowOffsetX = 0;
                nk.shadowOffsetY = 20;
                _stroke.apply(this, arguments)
                nk.restore();
            }
        }
    });
    
    
    new Chart(nk, {
        type: 'line',
        data: {
            labels: ["01", "02", "03", "04", "05", "06", "07", "08"],
            datasets: [{
                data: [500, 410, 50, 380, 100, 450, 300, 340],
                borderWidth: 4,
                borderColor: gradientStroke,
                pointBackgroundColor: gradientStroke,
                pointBorderColor: gradientStroke,
                pointHoverBackgroundColor: gradientStroke,
                pointHoverBorderColor: gradientStroke,
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: !1
            }]
        },
        options: {
            responsive: !0,
            maintainAspectRatio: false, 
            legend: {
                display: !1
            },
            scales: {
                xAxes: [{
                    display: 1,
                    gridLines: {
                        display: 1
                    }
                }],
                yAxes: [{
                    display: 1,
                    ticks: {
                        padding: 10,
                        stepSize: 100,
                        max: 600,
                        min: 0
                    },
                    gridLines: {
                        display: !0,
                        drawBorder: !1,
                        lineWidth: 1,
                        zeroLineColor: "#e5e5e5"
                    }
                }]
            }
        },
    });

})(jQuery);



(function ($) {
    "use strict";

    const ctx = document.getElementById("leave_month").getContext('2d');
        
    // ctx.height = 100;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Jan", "Feb", "Mar", 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: "Eriqson",
                    data: [25, 39, 40, 49, 23, 92, 34, 23, 32, 43, 32, 82],
                    borderColor: '#1D7FF0',
                    borderWidth: "0",
                    backgroundColor: '#1D7FF0', 
                    hoverBackgroundColor: '#1D7FF0'
                },
                {
                    label: "Anderson",
                    data: [38, 48, 60, 43, 23, 72, 34, 25, 32, 43, 92, 52],
                    borderColor: '#FBCF00',
                    borderWidth: "0",
                    backgroundColor: '#FBCF00', 
                    hoverBackgroundColor: '#FBCF00'
                },
                {
                    label: "James",
                    data: [58, 58, 70, 43, 23, 72, 32, 93, 52, 43, 32, 72],
                    borderColor: '#815CC2',
                    borderWidth: "0",
                    backgroundColor: '#815CC2', 
                    hoverBackgroundColor: '#815CC2'
                }
            ]
        },
        options: {
            legend: {
                display: true
            }, 
            maintainAspectRatio: false, 
            responsive: true, 
            scales: {
                yAxes: [{
                    gridLines: {
                        display: true
                    }, 
                    ticks: {
                        beginAtZero: true, 
                        display: true, 
                        max: 100, 
                        min: 0
                    }, 
                    display: true
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        display: true
                    }, 
                    barPercentage: .1, 
                    display: true, 
                    categoryPercentage: .4
                }]
            }
        }
    });

})(jQuery);



(function($) {
    "use strict"

    $('#progress_media').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.95,
        size: 100,
        lineCap: 'round',
        fill: { color: '#1D7FF0' },
        reverse: false,
        thickness: 3
    });
    $('#progress_digital_reach').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.75,
        size: 100,
        lineCap: 'round',
        fill: { color: '#FC5532' },
        reverse: false,
        thickness: 3
    });
    $('#progress_traffic').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.5,
        size: 100,
        lineCap: 'round',
        fill: { color: '#815CC2' },
        reverse: false,
        thickness: 3
    });
    $('#progress_research').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.5,
        size: 100,
        lineCap: 'round',
        fill: { color: '#FBCF00' },
        reverse: false,
        thickness: 3
    });



})(jQuery);


(function ($) {
    "use strict";

    const nk = document.getElementById("current_bank").getContext('2d');
    const gradientStroke = nk.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#f0a808");
    gradientStroke.addColorStop(0.235, "#f53c79");
    gradientStroke.addColorStop(0.7, "#f0a709");
    gradientStroke.addColorStop(1, "#f0a808");

    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function () {
            draw.apply(this, arguments);
            let nk = this.chart.chart.ctx;
            let _stroke = nk.stroke;
            nk.stroke = function () {
                nk.save();
                nk.shadowColor = 'rgba(0, 0, 0, .1)';
                nk.shadowBlur = 5;
                nk.shadowOffsetX = 0;
                nk.shadowOffsetY = 20;
                _stroke.apply(this, arguments)
                nk.restore();
            }
        }
    });
    
    
    new Chart(nk, {
        type: 'line',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["01", "02", "03", "04", "05", "06", "07", "08"],
            datasets: [{
                data: [80, 120, 550, 280, 500, 300, 300, 440],
                borderWidth: 4,
                borderColor: gradientStroke,
                pointBackgroundColor: gradientStroke,
                pointBorderColor: gradientStroke,
                pointHoverBackgroundColor: gradientStroke,
                pointHoverBorderColor: gradientStroke,
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: !1
            }]
        },
        options: {
            responsive: !0,
            maintainAspectRatio: false, 
            legend: {
                display: !1
            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        padding: 10,
                        stepSize: 100,
                        max: 600,
                        min: 0
                    },
                    gridLines: {
                        display: true,
                        drawBorder: !1,
                        lineWidth: 1,
                        zeroLineColor: "#e5e5e5"
                    }
                }]
            }
        },
    });

})(jQuery);


(function ($) {
    "use strict";
    //doughut chart
    const ctx = document.getElementById("spend_channels").getContext('2d');
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