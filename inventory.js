document.addEventListener('DOMContentLoaded', function () {
  fetch('/Inventory/GetStockData')
    .then(response => response.json())
    .then(data => {
      const labels = data.map(item => item.Product);
      const values = data.map(item => item.Stock);

      const ctx = document.getElementById('inventoryChart').getContext('2d');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Stock Available',
            data: values,
            backgroundColor: [
              '#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#F44336'
            ],
            borderWidth: 1,
            borderColor: '#333',
            borderRadius: 5,
            barThickness: 40
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Current Stock by Product'
            },
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
});
