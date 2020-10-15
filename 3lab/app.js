let x = [
  3.10, 5.17, 5.34, 3.10, 5.17, 2.27, 2.27, 3.78, 3.96, 7.43, 5.34, 3.10,
  0.23, 0.65, 0.23, 4.54, 0.24, 0.76, 1.34, 15.00, 0.43, 0.42, 0.01, 0.91
]

let p = x.map(
  (currentElement) => x.filter(element => element === currentElement).length / x.length
)

let ctx = document.getElementById('chart').getContext('2d')
let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: x.map((element, i) => i),
    datasets: [{
      label: 'Випадкова величина (X)',
      data: x,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    },
    {
      label: 'Імовірність випадкової величини (P)',
      data: p.map(element => element * 100),
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1
    }
  ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
})