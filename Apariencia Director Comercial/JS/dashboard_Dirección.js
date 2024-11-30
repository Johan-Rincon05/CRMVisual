document.addEventListener('DOMContentLoaded', () => {
    // Team Sales Chart
    const teamSalesChart = new Chart(
        document.getElementById('teamSalesChart'),
        {
            type: 'bar',
            data: {
                labels: ['Equipo 1', 'Equipo 2'],
                datasets: [{
                    label: 'Ventas por Equipo',
                    data: [450000000, 380000000],
                    backgroundColor: ['#4CAF50', '#2196F3'],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    );

    // Top Programs Chart
    const topProgramsChart = new Chart(
        document.getElementById('topProgramsChart'),
        {
            type: 'pie',
            data: {
                labels: ['Ing. Sistemas', 'Psicología', 'Ing. Industrial', 'Educación', 'Otros'],
                datasets: [{
                    data: [30, 25, 20, 15, 10],
                    backgroundColor: [
                        '#4CAF50',
                        '#2196F3',
                        '#FFC107',
                        '#9C27B0',
                        '#FF5722'
                    ],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    );

    // Sales Trend Chart
    const salesTrendChart = new Chart(
        document.getElementById('salesTrendChart'),
        {
            type: 'line',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                datasets: [{
                    label: 'Ventas Totales',
                    data: [320, 420, 380, 450, 480, 520],
                    borderColor: '#4CAF50',
                    tension: 0.4,
                    fill: true,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    );

    // Conversion Rate Chart
    const conversionRateChart = new Chart(
        document.getElementById('conversionRateChart'),
        {
            type: 'doughnut',
            data: {
                labels: ['Convertidos', 'En Proceso', 'No Interesados'],
                datasets: [{
                    data: [65, 25, 10],
                    backgroundColor: ['#4CAF50', '#FFC107', '#FF5252'],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    );
});
