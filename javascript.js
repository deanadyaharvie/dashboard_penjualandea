const barCtx = document.getElementById('barChart').getContext('2d');
const lineCtx = document.getElementById('lineChart').getContext('2d');
const pieCtx = document.getElementById('pieChart').getContext('2d');
const scatterCtx = document.getElementById('scatterChart').getContext('2d');

// Data sample for sales
const salesData = [3000, 2500, 2000, 4000, 3500, 5000, 4500, 4200, 3800, 4700, 5200, 6000];

// Bar Chart
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [{
            label: 'Penjualan',
            data: salesData,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Line Chart
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [{
            label: 'Penjualan',
            data: salesData,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Pie Chart
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
        datasets: [{
            label: 'Penjualan',
            data: salesData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(199, 199, 199, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

// Scatter Chart
new Chart(scatterCtx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Penjualan',
            data: [
                { x: 1, y: 3000 },
                { x: 2, y: 2500 },
                { x: 3, y: 2000 },
                { x: 4, y: 4000 },
                { x: 5, y: 3500 },
                { x: 6, y: 5000 },
                { x: 7, y: 4500 },
                { x: 8, y: 4200 },
                { x: 9, y: 3800 },
                { x: 10, y: 4700 },
                { x: 11, y: 5200 },
                { x: 12, y: 6000 }
            ],
            backgroundColor: 'rgba(255, 99, 132, 0.6)'
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            },
            y: {
                beginAtZero: true
            }
        }
    }
});
