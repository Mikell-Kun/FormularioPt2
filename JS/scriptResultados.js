// scriptResultados.js (en la página "resultados.html")
document.addEventListener("DOMContentLoaded", function() {
    const tablaResultados = document.getElementById("tablaResultados");
      // Obtener los envíos almacenados en el almacenamiento local
    const envios = JSON.parse(localStorage.getItem("envios")) || [];
     // Recorrer los envíos y agregar filas a la tabla
    envios.forEach((envio) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${envio.clave}</td>
            <td>${envio.nombre}</td>
            <td>${envio.apellido}</td>
            <td>${envio.telefono}</td>
            <td>${envio.correo}</td>
            <td>${envio.edad}</td>
            <td>${envio.fechaNacimiento}</td>
        `;
        tablaResultados.appendChild(fila);
    });

    document.getElementById('btn-borrar').addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.clear();
    });
});
