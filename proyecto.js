document.addEventListener("DOMContentLoaded", function () {
  let secondaryTableEl = document.getElementById("secondaryTable");
  let mainTableEl = document.getElementById("mainTable");
  let studentListEl = document.getElementById("studentList");
  let groupNameTitle = document.getElementById("groupNameTitle");
  let GrupsBotons = document.getElementById("GrupsBotons");
  let selectedGroupButton = null;
  let selectedGroupName = null;

  let highlightButton = (groupName) => {
    // quitar highlight
    let botones = GrupsBotons.getElementsByTagName("button");
    for (let btn of botones) {
      btn.classList.remove("button-highlighted-red");
    }
    // resaltar botón
    for (let btn of botones) {
      if (btn.getAttribute("data-group") === groupName) {
        btn.classList.add("button-highlighted-red");
        break;
      }
    }
  };
  let intercambiarGrupos = (grupo1, grupo2) => {
    let rowsGrupo1 = document.querySelectorAll(`tr[data-group='${grupo1}']`);
    let rowsGrupo2 = document.querySelectorAll(`tr[data-group='${grupo2}']`);
    for (let i = 0; i < rowsGrupo1.length; i++) {
      let tempHTML = rowsGrupo1[i].innerHTML;
      rowsGrupo1[i].innerHTML = rowsGrupo2[i].innerHTML;
      rowsGrupo2[i].innerHTML = tempHTML;

      rowsGrupo1[i].setAttribute("data-group", grupo2);
      rowsGrupo2[i].setAttribute("data-group", grupo1);
    }
  };

  let handleButtonDblClick = (boton) => {
    let groupName = boton.getAttribute("data-group");

    if (selectedGroupName && selectedGroupName !== groupName) {
      // Intercambiar grupos
      intercambiarGrupos(selectedGroupName, groupName);

      // Reinicia el estado seleccionado
      selectedGroupButton.classList.remove("button-highlighted-red");
      boton.classList.remove("button-highlighted-red");
      selectedGroupButton = null;
      selectedGroupName = null;
    } else {
      // Selecciona el nuevo grupo
      if (selectedGroupButton) {
        selectedGroupButton.classList.remove("button-highlighted-red");
      }
      boton.classList.add("button-highlighted-red");
      selectedGroupButton = boton;
      selectedGroupName = groupName;
    }
  };

  let generarBotones = () => {
    for (let i = 0; i < groups.length; i++) {
      let boton = document.createElement("button");
      boton.innerText = groups[i].groupName;
      boton.className = "miBoton";
      boton.setAttribute("data-group", groups[i].groupName);

      boton.setAttribute("data-group", groups[i].groupName);
      boton.ondblclick = function () {
        handleButtonDblClick(this);
      };

      boton.onclick = function () {
        displayGrupDetails(groups[i].groupName);
      };

      GrupsBotons.appendChild(boton);
    }
  };

  let groups = [
    {
      groupName: "Grup 1",
      students: [{ name: "Alejandro" }, { name: "Victor" }, { name: "Bru" }],
    },
    {
      groupName: "Grup 2",
      students: [{ name: "Maria" }, { name: "Laura" }, { name: "Helena" }],
    },
    {
      groupName: "Grup 3",
      students: [{ name: "David" }, { name: "Aleix" }, { name: "Manel" }],
    },
    {
      groupName: "Grup 4",
      students: [{ name: "Eloy" }, { name: "Estefania" }, { name: "Kiara" }],
    },
    {
      groupName: "Grup 5",
      students: [{ name: "Monica" }, { name: "Jose" }, { name: "Arnau" }],
    },
    {
      groupName: "Grup 6",
      students: [{ name: "Carmen" }, { name: "Toni" }, { name: "Oriol" }],
    },
    {
      groupName: "Grup 7",
      students: [{ name: "Javi" }, { name: "Romà" }, { name: "Siliva" }],
    },
    {
      groupName: "Grup 8",
      students: [{ name: "Unai" }, { name: "Alexis" }, { name: "Juan" }],
    },
    {
      groupName: "Grup 9",
      students: [{ name: "Sergi" }, { name: "Paula" }, { name: "Laia" }],
    },
    {
      groupName: "Grup 10",
      students: [{ name: "Nerea" }, { name: "Carla" }, { name: "Natalia" }],
    },
    {
      groupName: "Grup 11",
      students: [
        { name: "Taula buida" },
        { name: "Taula buida" },
        { name: "Taula buida" },
      ],
    },
    {
      groupName: "Grup 12",
      students: [
        { name: "Taula buida" },
        { name: "Taula buida" },
        { name: "Taula buida" },
      ],
    },
  ];

  let clearPreviousHighlight = () => {
    let secondaryTableRows = secondaryTableEl.getElementsByTagName("tr");
    let mainTableRows = mainTableEl.getElementsByTagName("tr");

    for (let row of secondaryTableRows) {
      row.classList.remove("highlighted-row");
    }

    for (let row of mainTableRows) {
      row.classList.remove("highlighted-row");
    }
  };

  let highlightTableRow = (groupName) => {
    clearPreviousHighlight();

    let findAndHighlight = (table) => {
      let rows = table.getElementsByTagName("tr");
      for (let row of rows) {
        if (row.getAttribute("data-group") === groupName) {
          row.classList.add("highlighted-row");
          break;
        }
      }
    };

    findAndHighlight(secondaryTableEl);
    findAndHighlight(mainTableEl);
  };

  let displayGrupDetails = (groupName) => {
    let group = groups.find((g) => g.groupName === groupName);
    studentListEl.innerHTML = ""; // borra la lista de antes
    groupNameTitle.textContent = `Información del ${groupName}`;

    // quita el resaltado de los botones
    let botones = GrupsBotons.getElementsByTagName("button");
    for (let btn of botones) {
      btn.classList.remove("button-highlighted");
    }

    // resalta el botón segun su grupo
    for (let btn of botones) {
      if (btn.innerText === groupName) {
        btn.classList.add("button-highlighted");
        break;
      }
    }

    if (group) {
      group.students.forEach((student) => {
        let li = document.createElement("li");
        li.textContent = student.name;
        studentListEl.appendChild(li);
      });
    }

    highlightTableRow(groupName);
  };

  let handleTableClick = (e) => {
    let targetRow = e.target;
    while (targetRow && targetRow.tagName !== "TR") {
      targetRow = targetRow.parentElement;
    }

    if (targetRow && targetRow.hasAttribute("data-group")) {
      let groupName = targetRow.getAttribute("data-group");
      displayGrupDetails(groupName);
    }
  };

  secondaryTableEl.addEventListener("click", handleTableClick);
  mainTableEl.addEventListener("click", handleTableClick);

  generarBotones();
});
