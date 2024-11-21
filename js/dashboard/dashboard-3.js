$(function() {
    "use strict";

    const message_analysis_graph = document.getElementById("message_analysis_graph").getContext('2d');

    //gradient generate
    const gradientStroke = message_analysis_graph.createLinearGradient(0, 400, 0, 0);
    gradientStroke.addColorStop(0, "#f53c79");
    gradientStroke.addColorStop(1, "#f0ae00");

    const gradientStroke2 = message_analysis_graph.createLinearGradient(0, 400, 0, 0);
    gradientStroke2.addColorStop(0, "#4400eb");
    gradientStroke2.addColorStop(1, "#44ecf5");

    let barChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Red',
            backgroundColor: [gradientStroke, gradientStroke2, gradientStroke, gradientStroke2, gradientStroke, gradientStroke2, gradientStroke, gradientStroke2, gradientStroke, gradientStroke2, gradientStroke, gradientStroke2],
            hoverBackgroundColor: [gradientStroke, gradientStroke2, gradientStroke, gradientStroke2, gradientStroke, gradientStroke2, gradientStroke, gradientStroke2, gradientStroke, gradientStroke2, gradientStroke, gradientStroke2], 
            data: [
                '82',
                '72',
                '72',
                '72',
                '62',
                '72', 
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
                '9', 
                '10',
                '15',
                '14',
                '18',
                '10',
                '11'
            ]
        }]

    };

    new Chart(message_analysis_graph, {
        type: 'bar',
        data: barChartData,
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
                    gridLines: {
                        display: false
                    }, 
                    barPercentage: .7, 
                    categoryPercentage: 1, 
                    stacked: true
                }],
                yAxes: [{
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


    //posting_graph
    const posting_graph = document.getElementById("posting_graph").getContext('2d');
    const gradientStroke3 = posting_graph.createLinearGradient(500, 0, 100, 0);
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
    const sale_analysis_graph = document.getElementById("sale_analysis_graph").getContext('2d');
    const sale_analysis_graph_gradientStroke = sale_analysis_graph.createLinearGradient(500, 0, 100, 0);
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
    const data_graph_line = document.getElementById("data_graph_line").getContext('2d');
    const data_graph_line_gradientStroke = data_graph_line.createLinearGradient(500, 0, 100, 0);
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
    




    const data_graph_bar = document.getElementById("data_graph_bar").getContext('2d');

    //gradient generate
    const data_graph_bar_gradientStroke = data_graph_bar.createLinearGradient(0, 400, 0, 0);
    data_graph_bar_gradientStroke.addColorStop(0, "#f53c79");
    data_graph_bar_gradientStroke.addColorStop(1, "#f0ae00");

    const data_graph_bar_gradientStroke2 = data_graph_bar.createLinearGradient(0, 400, 0, 0);
    data_graph_bar_gradientStroke2.addColorStop(0, "#4400eb");
    data_graph_bar_gradientStroke2.addColorStop(1, "#44ecf5");

    let barChartData2 = {
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



    var ctx = document.getElementById("channel_graph").getContext('2d');
    // ctx.height = 100;
    new Chart(ctx, {
        type: 'doughnut', 
        data: {
            defaultFontFamily: 'Poppins', 
            datasets: [{
                data: [75, 15, 10], 
                backgroundColor: [
                    "#38BED4",
                    "#F53C79",
                    "#449BF1"
                ],
                hoverBackgroundColor: [
                    "#38BED4",
                    "#F53C79",
                    "#449BF1"
                ]

            }],
            labels: [
                "DM",
                "Channel",
                "Others"
            ]
        },
        options: {
            responsive: true, 
            maintainAspectRatio: false, 
            legend: {
                display: false
            }, 
            cutoutPercentage: 85
        }
    });



    
});


