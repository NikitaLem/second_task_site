import Chart from 'chart.js';

Chart.defaults.global.legend.display = false;

var keldimItems = document.querySelectorAll(".item__number_all");
var keldimItemsValue = [];

for(var i = 0; i < keldimItems.length; i++) {
    keldimItemsValue[i] = keldimItems[i].value;
}

var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Веревки", "Карабины", "Жумары", "Корзинки", "Беседки", "Оттяжки"],
        datasets: [{
            data: keldimItemsValue,
            backgroundColor: [
                '#E49842',
                '#F9F944',
                '#23A296',
                '#8560D5',
                '#4AA737',
                "#A04F4F"
            ],
            borderColor: [
                '#E49842',
                '#F9F944',
                '#23A296',
                '#8560D5',
                '#4AA737',
                "#A04F4F"
            ],
            borderWidth: 1
        }]
    },
    options: {
        cutoutPercentage: 0
    }
});

var cty = document.getElementById("myChartOne").getContext("2d");

var keldimItemsCurrent = document.querySelectorAll(".item__number_current");
var keldimItemsValueCurrent = [];

for(var i = 0; i < keldimItemsCurrent.length; i++) {
    keldimItemsValueCurrent[i] = keldimItemsCurrent[i].value;
}

var myChartOne = new Chart(cty, {
    type: 'pie',
    data: {
        labels: ["Веревки", "Карабины", "Жумары", "Корзинки", "Беседки", "Оттяжки"],
        datasets: [{
            data: keldimItemsValueCurrent,
            backgroundColor: [
                '#E49842',
                '#F9F944',
                '#23A296',
                '#8560D5',
                '#4AA737',
                "#A04F4F"
            ],
            borderColor: [
                '#E49842',
                '#F9F944',
                '#23A296',
                '#8560D5',
                '#4AA737',
                "#A04F4F"
            ],
            borderWidth: 1
        }]
    },
    options: {
        cutoutPercentage: 0
    }
});