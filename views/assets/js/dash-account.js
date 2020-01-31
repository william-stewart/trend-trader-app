const uriD = document.documentURI.split('/');
if (uriD[uriD.length-1].includes('dash-account.html')) {
    document.addEventListener("DOMContentLoaded", function() {
    $( document ).ready( populateChartsAccount );
});
}

function populateChartsAccount(jQuery){
    popDeltasChartAccount();
    popPositionsChartAccount();
    popDeltaAccount();
    popValueAccount();
    popCashAccount();
    popPositionsAccount();
}

function popDeltaAccount() {
    const delta = '+2.1';
    if(document.getElementById("account-delta") != null){
        let span = document.getElementById("account-delta");
        while( span.firstChild ) {
            span.removeChild( span.firstChild );
        }
        span.appendChild( document.createTextNode(delta) );
    }
}

function popValueAccount() {
    const totalValue = '$' + '17,000';
    if(document.getElementById("account-value") != null){
        let span = document.getElementById("account-value");
        while( span.firstChild ) {
            span.removeChild( span.firstChild );
        }
        span.appendChild( document.createTextNode(totalValue) );
    }
}

function popCashAccount() {
    const cash = '48' + '%';
    if(document.getElementById("account-cash") != null){
        let span = document.getElementById("account-cash");
        while( span.firstChild ) {
            span.removeChild( span.firstChild );
        }
        span.appendChild( document.createTextNode(cash) );
    }
}

function popPositionsAccount() {
    const totalPositions = '8';
    if(document.getElementById("account-positions") != null){
        let span = document.getElementById("account-positions");
        while( span.firstChild ) {
            span.removeChild( span.firstChild );
        }
        span.appendChild( document.createTextNode(totalPositions) );
    }
}

function popDeltasChartAccount() {
    // Code to run when the document is ready.
    let chart = document.querySelector('#account-delta canvas').chart;
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

function popPositionsChartAccount() {
    let chart = document.querySelector('#positions-account canvas').chart;
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
