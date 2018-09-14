import Chart from 'chart.js';

const myChartJs = function(idOfCanvas, dataForChart) {
  Chart.defaults.global.legend.display = false;

  const ctx = document.getElementById(idOfCanvas).getContext("2d");

  const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Веревки", "Карабины", "Жумары", "Корзинки", "Беседки", "Оттяжки"],
      datasets: [{
        data: dataForChart,
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
};

export { myChartJs };
