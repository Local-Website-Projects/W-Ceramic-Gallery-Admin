(function($) {
    "use strict"

    $('.negetive-circle').circleProgress({
        startAngle: -Math.PI / .8 * 1,
        value: 0.25,
        size: 60,
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
        size: 60,
        emptyFill: '#EEEEEE',
        lineCap: 'round',
        thickness: 4,
        fill: { 
            gradient: ["#3dbde3", "#44e7a2"] 
         },
        reverse: true
    });









})(jQuery);



var chartData = [{
    "date": "2017-01-01",
    "distance": 250,
    "townName": "New York",
    "townName2": "New York",
    "townSize": 25,
    "latitude": 40.71,
    "duration": 408
}, {
    "date": "2017-01-02",
    "distance": 371,
    "townName": "Washington",
    "townSize": 14,
    "latitude": 38.89,
    "duration": 482
}, {
    "date": "2017-01-03",
    "distance": 433,
    "townName": "Wilmington",
    "townSize": 6,
    "latitude": 34.22,
    "duration": 562
}, {
    "date": "2017-01-04",
    "distance": 345,
    "townName": "Jacksonville",
    "townSize": 7,
    "latitude": 30.35,
    "duration": 379
}, {
    "date": "2017-01-05",
    "distance": 480,
    "townName": "Miami",
    "townName2": "Miami",
    "townSize": 10,
    "latitude": 25.83,
    "duration": 501
}, {
    "date": "2017-01-06",
    "distance": 386,
    "townName": "Tallahassee",
    "townSize": 7,
    "latitude": 30.46,
    "duration": 443
}, {
    "date": "2017-01-07",
    "distance": 348,
    "townName": "New Orleans",
    "townSize": 10,
    "latitude": 29.94,
    "duration": 405
}, {
    "date": "2017-01-08",
    "distance": 238,
    "townName": "Houston",
    "townName2": "Houston",
    "townSize": 16,
    "latitude": 29.76,
    "duration": 309
}, {
    "date": "2017-01-09",
    "distance": 218,
    "townName": "Dalas",
    "townSize": 17,
    "latitude": 32.8,
    "duration": 287
}, {
    "date": "2017-01-10",
    "distance": 349,
    "townName": "Oklahoma City",
    "townSize": 11,
    "latitude": 35.49,
    "duration": 485
}, {
    "date": "2017-01-11",
    "distance": 603,
    "townName": "Kansas City",
    "townSize": 10,
    "latitude": 39.1,
    "duration": 890
}, {
    "date": "2017-01-12",
    "distance": 534,
    "townName": "Denver",
    "townName2": "Denver",
    "townSize": 18,
    "latitude": 39.74,
    "duration": 810
}, {
    "date": "2017-01-13",
    "townName": "Salt Lake City",
    "townSize": 12,
    "distance": 425,
    "duration": 670,
    "latitude": 40.75,
    "alpha": 0.4
}, {
    "date": "2017-01-14",
    "latitude": 36.1,
    "duration": 470,
    "townName": "Las Vegas",
    "townName2": "Las Vegas",
    "bulletClass": "lastBullet"
}, {
    "date": "2017-01-13",
    "townName": "Salt Lake City",
    "townSize": 12,
    "distance": 425,
    "duration": 670,
    "latitude": 40.75,
    "alpha": 0.4
}, {
    "date": "2017-01-13",
    "townName": "Salt Lake City",
    "townSize": 12,
    "distance": 425,
    "duration": 670,
    "latitude": 40.75,
    "alpha": 0.4
}];


(function($) {
    "use strict"

    var chart = AmCharts.makeChart("revenue-chart", {
        "type": "serial",
        "theme": "dark",

        "dataDateFormat": "YYYY-MM-DD",
        "dataProvider": chartData,

        "addClassNames": true,
        "startDuration": 1,
        "color": "#FFFFFF",
        "marginLeft": 0,

        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "minPeriod": "DD",
            "autoGridCount": false,
            "gridCount": 50,
            "gridAlpha": 0.1,
            // "gridColor": "#FFFFFF",
            "axisColor": "#555555",
            "dateFormats": [{
                "period": 'DD',
                "format": 'DD'
            }, {
                "period": 'WW',
                "format": 'MMM DD'
            }, {
                "period": 'MM',
                "format": 'MMM'
            }, {
                "period": 'YYYY',
                "format": 'YYYY'
            }]
        },

        "valueAxes": [{
            "id": "a1",
            "title": "distance",
            "gridAlpha": 0,
            "axisAlpha": 0
        }, {
            "id": "a2",
            "position": "right",
            "gridAlpha": 0,
            "axisAlpha": 0,
            "labelsEnabled": false
        }, {
            "id": "a3",
            "title": "duration",
            "position": "right",
            "gridAlpha": 0,
            "axisAlpha": 0,
            "inside": true,
            "duration": "mm",
            "durationUnits": {
                "DD": "d. ",
                "hh": "h ",
                "mm": "min",
                "ss": ""
            }
        }],
        "graphs": [{
            "id": "g1",
            "valueField": "distance",
            "title": "distance",
            "type": "column",
            "fillAlphas": 0.9,
            "valueAxis": "a1",
            "balloonText": "[[value]] miles",
            "legendValueText": "[[value]] mi",
            "legendPeriodValueText": "total: [[value.sum]] mi",
            "lineColor": "#73629B",
            "alphaField": "alpha"
        }, {
            "id": "g2",
            "valueField": "latitude",
            "classNameField": "bulletClass",
            "title": "latitude/city",
            "type": "line",
            "valueAxis": "a2",
            "lineColor": "#03A9F5",
            "lineThickness": 1,
            "legendValueText": "[[value]]/[[description]]",
            "descriptionField": "townName",
            "bullet": "round",
            "bulletSizeField": "townSize",
            "bulletBorderColor": "#0000FF",
            "bulletBorderAlpha": 1,
            "bulletBorderThickness": 2,
            "bulletColor": "#00A2FF",
            "labelText": "[[townName2]]",
            "labelPosition": "right",
            "balloonText": "latitude:[[value]]",
            "showBalloon": true,
            "animationPlayed": true
        }, {
            "id": "g3",
            "title": "duration",
            "valueField": "duration",
            "type": "line",
            "valueAxis": "a3",
            "lineColor": "#F44336",
            "balloonText": "[[value]]",
            "lineThickness": 1,
            "legendValueText": "[[value]]",
            "bullet": "square",
            "bulletBorderColor": "#F44336",
            "bulletBorderThickness": 1,
            "bulletBorderAlpha": 1,
            "dashLengthField": "dashLength",
            "animationPlayed": true
        }],

        "chartCursor": {
            "zoomable": false,
            "categoryBalloonDateFormat": "DD",
            "cursorAlpha": 0,
            "valueBalloonsEnabled": false
        },
        "legend": {
            "bulletType": "round",
            "equalWidths": false,
            "valueWidth": 120,
            "useGraphSettings": true,
            "color": "#FFFFFF"
        }
    });


})(jQuery);


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