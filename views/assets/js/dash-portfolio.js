const uri = document.documentURI.split('/');
if (uri[uri.length-1].includes('index.html')) {
    document.addEventListener("DOMContentLoaded", function() {
    $( document ).ready( populateCharts );
        
});
}

/*
var $table = $('accounts-table');
var myData = [{"account": "acc1",
              "strategy": "strat 1",
              "delta": "-1.2",
              "value": "$23,000"}
             ]
$(function () {
    $('#accounts-table').bootstrapTable({
        data: myData
    });
});
*/

function populateCharts(jQuery){
    popDeltasChartProfile();
    popPositionsChartProfile();
    popDelta();
    popTotalValue();
    popCash();
    popTotalPositions();
}

function popDelta() {
    const delta = '+1.5';
    if(document.getElementById("profile-delta") != null){
        let span = document.getElementById("profile-delta");
        while( span.firstChild ) {
            span.removeChild( span.firstChild );
        }
        span.appendChild( document.createTextNode(delta) );
    }
}

function popTotalValue() {
    const totalValue = '$' + '217,000';
    if(document.getElementById("total-value") != null){
        let span = document.getElementById("total-value");
        while( span.firstChild ) {
            span.removeChild( span.firstChild );
        }
        span.appendChild( document.createTextNode(totalValue) );
    }
}

function popCash() {
    const cash = '35' + '%';
    if(document.getElementById("cash-percent") != null){
        let span = document.getElementById("cash-percent");
        while( span.firstChild ) {
            span.removeChild( span.firstChild );
        }
        span.appendChild( document.createTextNode(cash) );
    }
}

function popTotalPositions() {
    const totalPositions = '23';
    if(document.getElementById("total-positions") != null){
        let span = document.getElementById("total-positions");
        while( span.firstChild ) {
            span.removeChild( span.firstChild );
        }
        span.appendChild( document.createTextNode(totalPositions) );
    }
}

function popDeltasChartProfile() {
    // Code to run when the document is ready.
    let chart = document.querySelector('#accounts-delta canvas').chart;
    chart.data.datasets[1].data[0] = 17000;
    chart.data.datasets[1].data[1] = 10000;
    chart.data.datasets[1].data[2] = 17000;
    chart.data.datasets[1].data[3] = 10000;
    chart.data.datasets[1].data[4] = 17000;
    chart.data.datasets[1].data[5] = 10000;
    chart.data.datasets[1].data[6] = 17000;
    chart.data.datasets[1].data[7] = 10000;
    chart.data.labels[0] = 'setJS';
    chart.update();
}

function popPositionsChartProfile() {
    let chart = document.querySelector('#positions canvas').chart;
    chart.data.datasets[0].data[0] = 50;
    chart.data.datasets[0].data[1] = 25;
    chart.data.datasets[0].data[2] = 15;
    chart.data.datasets[0].data[3] = 10;
    chart.data.labels[0] = 'Label 1';
    chart.data.labels[1] = 'Label 2';
    chart.data.labels[2] = 'Label 3';
    chart.data.labels[3] = 'Label 4';
    chart.update();
}
 
//$( document ).ready( populateCharts );