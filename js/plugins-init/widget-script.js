(function($) {
    "use strict"

    var ctx = document.getElementById("task_dist_chart").getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 80, 80, 0);
    // var gradientStroke = ctx.createRadialGradient(130, 0, 0, 130, 68, 130);
    gradientStroke.addColorStop(0, "#f0a907");
    gradientStroke.addColorStop(1, "#f53c79");

    var gradientStroke2 = ctx.createLinearGradient(0, 80, 80, 0);
    // var gradientStroke2 = ctx.createRadialGradient(130, 0, 0, 130, 68, 130);
    gradientStroke2.addColorStop(0, "#4dedf5");
    gradientStroke2.addColorStop(1, "#480ceb");

    var gradientStroke3 = ctx.createLinearGradient(0, 80, 80, 0);
    // var gradientStroke3 = ctx.createRadialGradient(130, 0, 0, 130, 68, 130);
    gradientStroke3.addColorStop(0, "#51f5ae");
    gradientStroke3.addColorStop(1, "#3fbcda");

    var gradientStroke4 = ctx.createLinearGradient(0, 80, 80, 0);
    // var gradientStroke4 = ctx.createRadialGradient(130, 0, 0, 130, 68, 130);
    gradientStroke4.addColorStop(0, "#f25521");
    gradientStroke4.addColorStop(1, "#f9c70a");
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [45, 25, 20, 10],
                backgroundColor: [
                    gradientStroke,
                    gradientStroke2,
                    gradientStroke3,
                    gradientStroke4
                ],
                hoverBackgroundColor: [
                    gradientStroke,
                    gradientStroke2,
                    gradientStroke3,
                    gradientStroke4
                ], 
                borderWidth: 5

            }],
            labels: [
                "Front-End",
                "Design",
                "Back-End",
                "Testing"
            ], 
        },
        options: {
            responsive: true, 
            maintainAspectRatio: false, 
            legend: false
        }
    });




    var ctx = document.getElementById("monthly_view_chart").getContext('2d');
    var gradientStroke1 = ctx.createLinearGradient(50, 100, 50, 50);
    gradientStroke1.addColorStop(0, "#f25521");
    gradientStroke1.addColorStop(1, "#f9c70a");

    var gradientStroke2 = ctx.createLinearGradient(50, 100, 50, 50);
    gradientStroke2.addColorStop(0, "#4400eb");
    gradientStroke2.addColorStop(1, "#44ecf5");

    var gradientStroke3 = ctx.createLinearGradient(50, 100, 50, 50);
    gradientStroke3.addColorStop(0, "#f53c79");
    gradientStroke3.addColorStop(1, "#f0ae00");

    var gradientStroke4 = ctx.createLinearGradient(50, 100, 50, 50);
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





    //posting_graph
    var posting_graph = document.getElementById("posting_graph").getContext('2d');
    var gradientStroke3 = posting_graph.createLinearGradient(500, 0, 100, 0);
    gradientStroke3.addColorStop(0, "#05CD8D");
    gradientStroke3.addColorStop(1, "#f53c79");
    
    
    new Chart(posting_graph, {
        type: 'line',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["01", "02", "03", "04", "05", "06", "07", "08"],
            datasets: [{
                data: [4, 7, 5, 8, 1, 5, 3, 4],
                borderWidth: 4,
                borderColor: gradientStroke3,
                pointBackgroundColor: gradientStroke3,
                pointBorderColor: gradientStroke3,
                pointHoverBackgroundColor: gradientStroke3,
                pointHoverBorderColor: gradientStroke3,
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
                    display: !1,
                    gridLines: {
                        display: 1
                    }
                }],
                yAxes: [{
                    display: 1,
                    ticks: {
                        padding: 10,
                        stepSize: 2,
                        max: 10,
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




    //sale_analysis_graph
    var sale_analysis_graph = document.getElementById("sale_analysis_graph").getContext('2d');
    var sale_analysis_graph_gradientStroke = sale_analysis_graph.createLinearGradient(500, 0, 100, 0);
    sale_analysis_graph_gradientStroke.addColorStop(0, "#f0a808");
    sale_analysis_graph_gradientStroke.addColorStop(0.235, "#f53c79");
    sale_analysis_graph_gradientStroke.addColorStop(0.7, "#f0a709");
    sale_analysis_graph_gradientStroke.addColorStop(1, "#f0a808");
    
    
    new Chart(sale_analysis_graph, {
        type: 'line',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["01", "02", "03", "04", "05", "06", "07", "08"],
            datasets: [{
                data: [3, 4, 9, 6, 8, 5, 7, 4],
                borderWidth: 4,
                borderColor: sale_analysis_graph_gradientStroke,
                pointBackgroundColor: sale_analysis_graph_gradientStroke,
                pointBorderColor: sale_analysis_graph_gradientStroke,
                pointHoverBackgroundColor: sale_analysis_graph_gradientStroke,
                pointHoverBorderColor: sale_analysis_graph_gradientStroke,
                pointRadius: 2,
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
                    display: !1,
                    gridLines: {
                        display: 1
                    }
                }],
                yAxes: [{
                    display: !1,
                    ticks: {
                        padding: 10,
                        stepSize: 2,
                        max: 10,
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




    //sale_analysis_graph
    var data_graph_line = document.getElementById("data_graph_line").getContext('2d');
    var data_graph_line_gradientStroke = data_graph_line.createLinearGradient(500, 0, 100, 0);
    data_graph_line_gradientStroke.addColorStop(0, "#f0a808");
    data_graph_line_gradientStroke.addColorStop(0.235, "#f53c79");
    data_graph_line_gradientStroke.addColorStop(0.7, "#f0a709");
    data_graph_line_gradientStroke.addColorStop(1, "#f0a808");
    
    
    new Chart(data_graph_line, {
        type: 'line',
        data: {
            defaultFontFamily: 'Poppins',
            labels: ["01", "02", "03", "04", "05", "06", "07", "08"],
            datasets: [{
                data: [0, 2, 9, 1, 8, 5, 7, 4],
                borderWidth: 4,
                borderColor: data_graph_line_gradientStroke,
                pointBackgroundColor: data_graph_line_gradientStroke,
                pointBorderColor: data_graph_line_gradientStroke,
                pointHoverBackgroundColor: data_graph_line_gradientStroke,
                pointHoverBorderColor: data_graph_line_gradientStroke,
                pointRadius: 2,
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
            elements: {
                line: {
                    tension: 0
                }
            }, 
            scales: {
                xAxes: [{
                    display: !1,
                    gridLines: {
                        display: 1
                    }
                }],
                yAxes: [{
                    display: !1,
                    ticks: {
                        padding: 10,
                        stepSize: 2,
                        max: 10,
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


    

    var data_graph_bar = document.getElementById("data_graph_bar").getContext('2d');

    //gradient generate
    var data_graph_bar_gradientStroke = data_graph_bar.createLinearGradient(0, 400, 0, 0);
    data_graph_bar_gradientStroke.addColorStop(0, "#f53c79");
    data_graph_bar_gradientStroke.addColorStop(1, "#f0ae00");

    var data_graph_bar_gradientStroke2 = data_graph_bar.createLinearGradient(0, 400, 0, 0);
    data_graph_bar_gradientStroke2.addColorStop(0, "#4400eb");
    data_graph_bar_gradientStroke2.addColorStop(1, "#44ecf5");

    var barChartData2 = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Red',
            backgroundColor: [data_graph_bar_gradientStroke, data_graph_bar_gradientStroke2, data_graph_bar_gradientStroke, data_graph_bar_gradientStroke2, data_graph_bar_gradientStroke, data_graph_bar_gradientStroke2],
            hoverBackgroundColor: [data_graph_bar_gradientStroke, data_graph_bar_gradientStroke2, data_graph_bar_gradientStroke, data_graph_bar_gradientStroke2, data_graph_bar_gradientStroke, data_graph_bar_gradientStroke2], 
            data: [
                '82',
                '72',
                '72',
                '72',
                '62',
                '72'
            ]
        }, {
            label: 'Blue',
            backgroundColor: "#eee",
            hoverBackgroundColor: "#eee", 
            data: [
                '12',
                '14',
                '11',
                '16',
                '14',
                '9'
            ]
        }]

    };

    new Chart(data_graph_bar, {
        type: 'bar',
        data: barChartData2,
        options: {
            maintainAspectRatio: false, 
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
            scales: {
                xAxes: [{
                    display: false, 
                    gridLines: {
                        display: false
                    }, 
                    barPercentage: .3, 
                    categoryPercentage: 1, 
                    stacked: true
                }],
                yAxes: [{
                    display: false, 
                    ticks: {
                        max: 100, 
                        min: 0
                    }, 
                    gridLines: {
                        drawBorder: false
                    }, 
                    stacked: true
                }]
            }
        }
    });


    var ctx = document.getElementById("spend_channels").getContext('2d');
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


    var chart = new Chartist.Pie('#device_ratio_graph', {
        series: [30, 25, 45],
        labels: [1, 2, 3]
      }, {
        donut: true,
        showLabel: false,
        plugins: [
          Chartist.plugins.tooltip()
        ]
      });




    var chart3 = document.getElementById("earnings_graph").getContext('2d');

    var gradientStroke = chart3.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#fd712c");
    gradientStroke.addColorStop(1, "#f21780");

    var gradientStroke2 = chart3.createLinearGradient(500, 0, 100, 0);
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



    var chart1 = document.getElementById("comments_graph").getContext('2d');
    var gradientStroke = chart1.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#f53c79");
    gradientStroke.addColorStop(0.35, "#f53c79");
    gradientStroke.addColorStop(0.7, "#f0a709");
    gradientStroke.addColorStop(1, "#f0a808");

    var draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
        draw: function () {
            draw.apply(this, arguments);
            var chart1 = this.chart.chart.ctx;
            var _stroke = chart1.stroke;
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