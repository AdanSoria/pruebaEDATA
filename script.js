
document.getElementById('cargarDatos').addEventListener('click', function() {
    fetch('data.xml')
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
            const servicios = data.querySelectorAll('servicio');
            let html = '<h3>Nuestros servicios:</h3><ul>';
            
            servicios.forEach(servicio => {
                const nombre = servicio.querySelector('nombre').textContent;
                const descripcion = servicio.querySelector('descripcion').textContent;
                html += `<li><strong>${nombre}</strong>: ${descripcion}</li>`;
            });
            
            html += '</ul>';
            document.getElementById('resultado-xml').innerHTML = html;
        })
        .catch(error => {
            console.error('Error al cargar el XML:', error);
        });
});