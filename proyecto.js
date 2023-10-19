document.addEventListener('DOMContentLoaded', function() {
    const secondaryTableEl = document.getElementById('secondaryTable');
    const mainTableEl = document.getElementById('mainTable');
    const studentListEl = document.getElementById('studentList');
    const groupNameTitle = document.getElementById('groupNameTitle');
    let GrupsBotons = document.getElementById('GrupsBotons');

    const generarBotones = () => {
        for(let i=0; i < groups.length; i++){
            let boton = document.createElement("button");
            boton.innerText = groups[i].groupName;

            // Establecer el comportamiento al hacer clic en el botón
            boton.onclick = function() {
                displayGrupDetails(groups[i].groupName);
            };

            GrupsBotons.appendChild(boton);
        }
    }

    const groups = [
        {
            groupName: "Grup 1",
            students: [
                { name: "Alejandro" },
                { name: "Victor" },
                { name: "Bru" }
            ]
        },
        {
            groupName: "Grup 2",
            students: [
                { name: "Maria" },
                { name: "Laura" },
                { name: "Helena" }
            ]
        },
        {
            groupName: "Grup 3",
            students: [
                { name: "David" },
                { name: "Aleix" },
                { name: "Manel" }
            ]
        },
        {
            groupName: "Grup 4",
            students: [
                { name: "Eloy" },
                { name: "Estefania" },
                { name: "Kiara" }
            ]
        },
        {
            groupName: "Grup 5",
            students: [
                { name: "Monica" },
                { name: "Jose" },
                { name: "Arnau" }
            ]
        },
        {
            groupName: "Grup 6",
            students: [
                { name: "Carmen" },
                { name: "Toni" },
                { name: "Oriol" }
            ]
        },
        {
            groupName: "Grup 7",
            students: [
                { name: "Javi" },
                { name: "Romà" },
                { name: "Siliva" }
            ]
        },
        {
            groupName: "Grup 8",
            students: [
                { name: "Unai" },
                { name: "Alexis" },
                { name: "Juan" }
            ]
        },
        {
            groupName: "Grup 9",
            students: [
                { name: "Sergi" },
                { name: "Paula" },
                { name: "Laia" }
            ]
        },
        {
            groupName: "Grup 10",
            students: [
                { name: "Nerea" },
                { name: "Carla" },
                { name: "Natalia" }
            ]
        },
        {
            groupName: "Grup 11",
            students: [
                { name: "Estudiante11A" },
                { name: "Estudiante11B" },
                { name: "Estudiante11C" }
            ]
        },
        {
            groupName: "Grup 12",
            students: [
                { name: "Estudiante12A" },
                { name: "Estudiante12B" },
                { name: "Estudiante12C" }
            ]
        }
    ];
    


    const clearPreviousHighlight = () => {
        const secondaryTableRows = secondaryTableEl.getElementsByTagName('tr');
        const mainTableRows = mainTableEl.getElementsByTagName('tr');

        for (let row of secondaryTableRows) {
            row.classList.remove('highlighted-row');
        }

        for (let row of mainTableRows) {
            row.classList.remove('highlighted-row');
        }
    }

    const highlightTableRow = (groupName) => {
        clearPreviousHighlight();

        const findAndHighlight = (table) => {
            const rows = table.getElementsByTagName('tr');
            for (let row of rows) {
                if (row.getAttribute('data-group') === groupName) {
                    row.classList.add('highlighted-row');
                    break;
                }
            }
        }

        findAndHighlight(secondaryTableEl);
        findAndHighlight(mainTableEl);
    }

    const displayGrupDetails = (groupName) => {
        const group = groups.find(g => g.groupName === groupName);
        studentListEl.innerHTML = ''; // Limpiar el listado previo
        groupNameTitle.textContent = `Información del ${groupName}`;

        if (group) {
            group.students.forEach(student => {
                const li = document.createElement('li');
                li.textContent = student.name;
                studentListEl.appendChild(li);
            });
        }

        highlightTableRow(groupName);
    };

    const handleTableClick = (e) => {
        let targetRow = e.target;
        while (targetRow && targetRow.tagName !== 'TR') {
            targetRow = targetRow.parentElement;
        }

        if (targetRow && targetRow.hasAttribute('data-group')) {
            const groupName = targetRow.getAttribute('data-group');
            displayGrupDetails(groupName);
        }
    };

    secondaryTableEl.addEventListener('click', handleTableClick);
    mainTableEl.addEventListener('click', handleTableClick);

    // Finalmente, generamos los botones.
    generarBotones();
});
