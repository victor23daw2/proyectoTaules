document.addEventListener('DOMContentLoaded', function() {
    const secondaryTableEl = document.getElementById('secondaryTable');
    const mainTableEl = document.getElementById('mainTable');
    const studentListEl = document.getElementById('studentList');
    const groupNameTitle = document.getElementById('groupNameTitle');

    const groups = [
        {
            groupName: "Group1",
            students: [
                { name: "Estudiante1A" },
                { name: "Estudiante1B" },
                { name: "Estudiante1C" }
            ]
        },
        {
            groupName: "Group2",
            students: [
                { name: "Estudiante2A" },
                { name: "Estudiante2B" },
                { name: "Estudiante2C" }
            ]
        },
        {
            groupName: "Group3",
            students: [
                { name: "Estudiante3A" },
                { name: "Estudiante3B" },
                { name: "Estudiante3C" }
            ]
        },
        {
            groupName: "Group4",
            students: [
                { name: "Estudiante4A" },
                { name: "Estudiante4B" },
                { name: "Estudiante4C" }
            ]
        },
        {
            groupName: "Group5",
            students: [
                { name: "Estudiante5A" },
                { name: "Estudiante5B" },
                { name: "Estudiante5C" }
            ]
        },
        {
            groupName: "Group6",
            students: [
                { name: "Estudiante6A" },
                { name: "Estudiante6B" },
                { name: "Estudiante6C" }
            ]
        },
        {
            groupName: "Group7",
            students: [
                { name: "Estudiante7A" },
                { name: "Estudiante7B" },
                { name: "Estudiante7C" }
            ]
        },
        {
            groupName: "Group8",
            students: [
                { name: "Estudiante8A" },
                { name: "Estudiante8B" },
                { name: "Estudiante8C" }
            ]
        },
        {
            groupName: "Group9",
            students: [
                { name: "Estudiante9A" },
                { name: "Estudiante9B" },
                { name: "Estudiante9C" }
            ]
        },
        {
            groupName: "Group10",
            students: [
                { name: "Estudiante10A" },
                { name: "Estudiante10B" },
                { name: "Estudiante10C" }
            ]
        },
        {
            groupName: "Group11",
            students: [
                { name: "Estudiante11A" },
                { name: "Estudiante11B" },
                { name: "Estudiante11C" }
            ]
        },
        {
            groupName: "Group12",
            students: [
                { name: "Estudiante12A" },
                { name: "Estudiante12B" },
                { name: "Estudiante12C" }
            ]
        }
    ];
    

    const displayGroupDetails = (groupName) => {
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
    };

    const handleTableClick = (e) => {
        let targetRow = e.target;
        while (targetRow && targetRow.tagName !== 'TR') {
            targetRow = targetRow.parentElement;
        }

        if (targetRow && targetRow.hasAttribute('data-group')) {
            const groupName = targetRow.getAttribute('data-group');
            displayGroupDetails(groupName);
        }
    };

    secondaryTableEl.addEventListener('click', handleTableClick);
    mainTableEl.addEventListener('click', handleTableClick);
});
