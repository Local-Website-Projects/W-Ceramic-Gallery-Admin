$(function() {
    "use strict";
    $(".bar-line").peity("bar", {
        width: "100%",
        height: "100"
    });

    
    $("span.pie").peity("pie", {
        fill: ['#f21780', 'rgba(242, 23, 128, .3)'], 
        width: "100%",
        height: "100"
    });
    
    
    
    $("span.donut").peity("donut", {
        width: "100%",
        height: "100"
    });
    
    
    
    $(".peity-line").peity("line", {
        fill: ["rgba(245, 60, 121, .5)"], 
        stroke: '#f21780', 
        width: "100%",
        height: "100"
    });
    
    
    
    $(".bar").peity("bar", {
        fill: ["#fd712c", "#f21780", "#f21780"],  
        width: "100%",
        height: "100"
    });
    
    
    //yes
    $(".bar-colours-1").peity("bar", {
        fill: ["#73629B", "#fd712c", "#f21780"],
        width: "100%",
        height: "100"
    });
    
    
    
    $(".bar-colours-2").peity("bar", {
        fill: function(t, e, i) {
            return t > 0 ? "rgb(253, " + parseInt(e / i.length * 44) + ", 44)" : "rgb(242, " + parseInt(e / i.length * 255) + ", 128)"
        },
        width: "100%",
        height: "100"
    });
    
    
    
    $(".bar-colours-3").peity("bar", {
        fill: function(t, e, i) {
            return "rgb(54, " + parseInt(e / i.length * 255) + ", 216)"
        },
        width: "100%",
        height: "100"
    });
    
    
    
    $(".pie-colours-1").peity("pie", {
        fill: ["cyan", "magenta", "yellow", "black"],
        width: "100%",
        height: "100"
    });
    
    
    
    $(".pie-colours-2").peity("pie", {
        fill: ["#36b9d8", "#28D6C3", "#4400eb", "#44ecf5", "#4bffa2"],
        width: "100%",
        height: "100"
    });
    
    
    
    $(".data-attr").peity("donut");


    var t = $(".updating-chart").peity("line", {
        fill: ['rgba(245, 60, 121, .5)'],
        stroke: '#f53c79', 
        width: "100%",
        height: 100
    });
    setInterval(function() {
        var e = Math.round(10 * Math.random()),
            i = t.text().split(",");
        i.shift(), i.push(e), t.text(i.join(",")).change()
    }, 1e3);

});