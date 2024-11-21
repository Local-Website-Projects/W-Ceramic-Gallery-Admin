(function ($) {
    "use strict";


    const chart1 = document.getElementById("comments_graph").getContext('2d');
    const gradientStroke = chart1.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#f53c79");
    gradientStroke.addColorStop(0.35, "#f53c79");
    gradientStroke.addColorStop(0.7, "#f0a709");
    gradientStroke.addColorStop(1, "#f0a808");

    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function () {
            draw.apply(this, arguments);
            let chart1 = this.chart.chart.ctx;
            let _stroke = chart1.stroke;
            chart1.stroke = function () {
                chart1.save();
                chart1.shadowColor = 'rgba(242, 23, 128, .6)';
                chart1.shadowBlur = 40;
                chart1.shadowOffsetX = 0;
                chart1.shadowOffsetY = 10;
                _stroke.apply(this, arguments)
                chart1.restore();
            }
        }
    });
    
    
    new Chart(chart1, {
        type: 'line',
        data: {
            labels: ["01", "02", "03", "04", "05"],
            datasets: [{
                data: [60, 300, 160, 500, 400],
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
                    display: false,
                    ticks: {
                        padding: 10,
                        stepSize: 100,
                        max: 600,
                        min: 0
                    },
                    gridLines: {
                        display: false,
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

    const chart2 = document.getElementById("statistics_graph").getContext('2d');
    const gradientStroke = chart2.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#f0a808");
    gradientStroke.addColorStop(0.235, "#f53c79");
    gradientStroke.addColorStop(0.7, "#f0a709");
    gradientStroke.addColorStop(1, "#f0a808");

    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function () {
            draw.apply(this, arguments);
            let chart2 = this.chart.chart.ctx;
            let _stroke = chart2.stroke;
            chart2.stroke = function () {
                chart2.save();
                chart2.shadowColor = 'rgba(0, 0, 0, .1)';
                chart2.shadowBlur = 5;
                chart2.shadowOffsetX = 0;
                chart2.shadowOffsetY = 20;
                _stroke.apply(this, arguments)
                chart2.restore();
            }
        }
    });
    
    
    new Chart(chart2, {
        type: 'line',
        data: {
            labels: ["January 2017", "January 2016", "January 2015", "January 2014", "January 2013"],
            datasets: [{
                data: [2100, 700, 1400, 500, 2200],
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
                        display: !1
                    }
                }],
                yAxes: [{
                    display: 1,
                    ticks: {
                        padding: 10,
                        stepSize: 500,
                        max: 2500,
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


(function($) {
    "use strict"

    const chart3 = document.getElementById("earnings_graph").getContext('2d');

    const gradientStroke = chart3.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#fd712c");
    gradientStroke.addColorStop(1, "#f21780");

    const gradientStroke2 = chart3.createLinearGradient(500, 0, 100, 0);
    gradientStroke2.addColorStop(0, "rgba(253, 113, 44, .4)");
    gradientStroke2.addColorStop(1, "rgba(242, 23, 128, .4)");
    
    new Chart(chart3, {
        type: 'line',
        data: {
            labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            type: 'line',
            datasets: [{
                label: "My First dataset",
                data: [80, 66, 76, 50, 76, 68],
                backgroundColor: gradientStroke2,
                borderColor: gradientStroke,
                pointRadius: 0,
                lineTension: 0,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, 
            tooltips: {
                enabled: false,
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: false,

                }
            },
            scales: {
                xAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }, 
                    ticks: {
                        max: 100, 
                        min: 0, 
                        stepSize: 10
                    }
                }]
            },
            title: {
                display: false,
            }
        }
    });











})(jQuery);


(function ($) {
    "use strict";

    const ctx = document.getElementById("leaderboard_graph").getContext('2d');

    const gradientStroke = ctx.createLinearGradient(50, 100, 50, 50);
    gradientStroke.addColorStop(0, "#fd712c");
    gradientStroke.addColorStop(1, "#f21780");

    let barChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Red',
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke, 
            data: [
                '32',
                '52',
                '62',
                '52',
                '42',
                '52',
                '32', 
                '56', 
                '54', 
                '44', 
                '34', 
                '52'
            ]
        }, {
            label: 'Blue',
            backgroundColor: '#EEEEEE',
            hoverBackgroundColor: '#EEEEEE', 
            data: [
                '12',
                '12',
                '20',
                '12',
                '12',
                '15',
                '12', 
                '10', 
                '11', 
                '15', 
                '17', 
                '21'
            ]
        }]

    };
    
    new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            legend: {
                display: false
            }, 
            title: {
                display: false
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            maintainAspectRatio: false, 
            scales: {
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        display: false, 
                        drawBorder: false
                    }, 
                    barPercentage: .15
                }],
                yAxes: [{
                    stacked: true, 
                    display: false, 
                    ticks: {
                        max: 100, 
                        min: 0
                    }, 
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    });

})(jQuery);


(function($) {
    "use strict"

    let chart = new Chartist.Pie('#device_ratio_graph', {
        series: [30, 25, 45],
        labels: [1, 2, 3]
      }, {
        donut: true,
        showLabel: false,
        plugins: [
          Chartist.plugins.tooltip()
        ]
      });
      
})(jQuery);

(function($){
    $('.negetive-circle').circleProgress({
        startAngle: -Math.PI / .8 * 1,
        value: 0.25,
        size: 110,
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
        size: 110,
        emptyFill: '#EEEEEE',
        lineCap: 'round',
        thickness: 4,
        fill: { 
            gradient: ["#3dbde3", "#44e7a2"] 
         },
        reverse: true
    });
})(jQuery);


(function() {
    "use strict"

    $('#chat_list').slimscroll({
        position: "left",
        size: "5px",
        height: "400px",
        color: "#c6c8c9"
    });

})(jQuery);