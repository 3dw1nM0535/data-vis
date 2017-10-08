var myChart = document.getElementById('myChart').getContext('2d');

var chartPlot = new Chart(myChart, {
  type: 'bar',
  data: {
    labels: ['Worcester city', 'Lowel city', 'Cambridge city', 'Quincy city', 'Lynn city', 'Newton city', 'Lawrence city', 'Somerville city', 'Brokton city', 'Springfield city', 'Malden city', 'Plymouth city', 'Medford city'],
    datasets: [{
      label: 'Population',
      data: [
        614437,
        342483,
        223431,
        122209,
        89234,
        43233,
        56988,
        77882,
        34445,
        57889,
        23342,
        45542,
        22234
      ]
    }],
  },
  options: {},
});
