document.addEventListener('DOMContentLoaded', () => {
    // Datos de los equipos
    const teamDianaMembers = [
        { name: "Alison Gutierrez", suscripciones: 32, seguimientos: 45, noResponde: 20, noInteresado: 12, equivocado: 3 },
        { name: "Estefania Rodriguez", suscripciones: 28, seguimientos: 50, noResponde: 18, noInteresado: 10, equivocado: 2 },
        { name: "Ana Venegas", suscripciones: 35, seguimientos: 48, noResponde: 22, noInteresado: 15, equivocado: 4 },
        { name: "Daniela Muñoz", suscripciones: 30, seguimientos: 52, noResponde: 19, noInteresado: 11, equivocado: 2 },
        { name: "Naomi Mateus", suscripciones: 29, seguimientos: 47, noResponde: 21, noInteresado: 13, equivocado: 3 },
        { name: "Francy Cortes", suscripciones: 31, seguimientos: 49, noResponde: 23, noInteresado: 14, equivocado: 2 },
        { name: "Diego Ruiz", suscripciones: 33, seguimientos: 46, noResponde: 17, noInteresado: 9, equivocado: 2 },
        { name: "Brayan Montenegro", suscripciones: 27, seguimientos: 43, noResponde: 16, noInteresado: 8, equivocado: 2 }
    ];

    const teamNicolMembers = [
        { name: "Andrea Meneses", suscripciones: 30, seguimientos: 48, noResponde: 19, noInteresado: 11, equivocado: 2 },
        { name: "Johana Niño", suscripciones: 34, seguimientos: 46, noResponde: 21, noInteresado: 13, equivocado: 3 },
        { name: "Yuli Hernandez", suscripciones: 29, seguimientos: 50, noResponde: 18, noInteresado: 10, equivocado: 2 },
        { name: "Ada Rangel", suscripciones: 31, seguimientos: 47, noResponde: 20, noInteresado: 12, equivocado: 3 },
        { name: "Paula Pedraza", suscripciones: 28, seguimientos: 49, noResponde: 22, noInteresado: 14, equivocado: 2 },
        { name: "Jose Sierra", suscripciones: 32, seguimientos: 45, noResponde: 17, noInteresado: 9, equivocado: 2 },
        { name: "Angie Villamor", suscripciones: 33, seguimientos: 44, noResponde: 16, noInteresado: 8, equivocado: 2 },
        { name: "Andrea Gonzalez", suscripciones: 27, seguimientos: 43, noResponde: 15, noInteresado: 7, equivocado: 2 }
    ];

    // Función para llenar las tablas
    function populateTable(tableId, teamData) {
        const tbody = document.getElementById(tableId);
        teamData.forEach(member => {
            const row = document.createElement('tr');
            const memberNameFormatted = member.name.toLowerCase().replace(' ', '_');
            row.innerHTML = `
                <td>
                    <a href="../dashboard/dashboard_${memberNameFormatted}.html" class="member-link">
                        ${member.name}
                    </a>
                </td>
                <td>${member.suscripciones}</td>
                <td>${member.seguimientos}</td>
                <td>${member.noResponde}</td>
                <td>${member.noInteresado}</td>
                <td>${member.equivocado}</td>
            `;
            tbody.appendChild(row);
        });
    }

    // Llenar las tablas con los datos
    populateTable('teamDianaTable', teamDianaMembers);
    populateTable('teamNicolTable', teamNicolMembers);

    // Event listener para el selector de período
    document.getElementById('periodSelector').addEventListener('change', (e) => {
        // Aquí puedes agregar la lógica para actualizar los datos según el período seleccionado
        console.log('Período seleccionado:', e.target.value);
        updateDataForPeriod(e.target.value);
    });

    // Función para actualizar datos según período
    function updateDataForPeriod(period) {
        // Implementar lógica de actualización de datos
        console.log(`Actualizando datos para período: ${period}`);
    }
});
