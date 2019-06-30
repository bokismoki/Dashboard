// BIG-CHART-CHART
let bigChartChart = document.getElementById("big-chart-chart").getContext("2d");

let massPopChart = new Chart(bigChartChart, {
    type: "line",
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [{
            data: [
                100,
                70,
                90,
                70,
                85,
                60,
                75,
                60,
                90,
                80,
                110,
                100,
                130,
                50
            ],
            borderWidth: 3,
            borderColor: "#3da775",
            // backgroundColor: ""
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
            position: "right",
            labels: {
                fontColor: "#000"
            }
        },
        tooltips: {
            backgroundColor: "#000"
        }
    }
});

//  SMALL-CHART-CHART-1,2,3
// 1
let smallChartChart1 = document.getElementById("small-chart-chart-1").getContext("2d");

let smallChart1 = new Chart(smallChartChart1, {
    type: "line",
    data: {
        labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [{
            data: [
                80,
                100,
                70,
                80,
                120,
                80,
                130,
                60
            ],
            borderWidth: 3,
            borderColor: "#3da775",
            // backgroundColor: ""
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
            position: "right",
            labels: {
                fontColor: "#000"
            }
        },
        tooltips: {
            backgroundColor: "#000"
        }
    }
});

// 2
let smallChartChart2 = document.getElementById("small-chart-chart-2").getContext("2d");

let smallChart2 = new Chart(smallChartChart2, {
    type: "bar",
    data: {
        labels: ["US", "GE", "AU", "GB", "RO", "BR"],
        datasets: [{
            data: [
                53,
                20,
                10,
                80,
                100,
                45,
                120
            ],
            borderWidth: 3,
            borderColor: "#1d8cf8",
            // backgroundColor: ""
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
            position: "right",
            labels: {
                fontColor: "#000"
            }
        },
        tooltips: {
            backgroundColor: "#000"
        }
    }
});

// 3
let smallChartChart3 = document.getElementById("small-chart-chart-3").getContext("2d");

let smallChart3 = new Chart(smallChartChart3, {
    type: "line",
    data: {
        labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
        datasets: [{
            data: [
                90,
                27,
                60,
                12,
                80,
                140
            ],
            borderWidth: 3,
            borderColor: "#fd5d93",
            // backgroundColor: ""
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
            position: "right",
            labels: {
                fontColor: "#000"
            }
        },
        tooltips: {
            backgroundColor: "#000"
        }
    }
});