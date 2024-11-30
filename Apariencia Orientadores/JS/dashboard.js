document.addEventListener('DOMContentLoaded', () => {
    // Sales Chart
    const salesChart = new Chart(
        document.getElementById('salesChart'),
        {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                datasets: [{
                    label: 'Cantidad de Ventas 2024',
                    data: [45, 52, 38, 65, 48, 63, 72, 58, 80, 85, 92, 98],
                    borderColor: '#4CAF50',
                    tension: 0.4,
                    fill: true,
                    backgroundColor: 'rgba(76, 175, 80, 0.1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: value => `${value} ventas`
                        }
                    }
                }
            }
        }
    );

    // Convertibilidad Chart
    const convertibilityChart = new Chart(
        document.getElementById('conversionChart'),
        {
            type: 'doughnut',
            data: {
                labels: ['Suscripciones', 'Seguimiento', 'No Interesados'],
                datasets: [{
                    data: [65, 25, 10],
                    backgroundColor: [
                        '#4CAF50',
                        '#FFC107',
                        '#FF5252'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                cutout: '70%'
            }
        }
    );
});
