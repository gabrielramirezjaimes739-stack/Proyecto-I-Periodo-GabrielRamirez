// Comportamientos que deben activarse después de cargar el DOM.
document.addEventListener('DOMContentLoaded', function () {

    // Oculta los mensajes flash para que la interfaz no quede saturada.
    document.querySelectorAll('.flash').forEach(function (el) {
        setTimeout(function () {
            el.style.transition = 'opacity .4s';
            el.style.opacity = '0';
            setTimeout(function () { el.remove(); }, 400);
        }, 4000);
    });

    // En edición, el botón de confirmar dispara el guardado real.
    var btnAct = document.getElementById('btn-confirmar-act');
    if (btnAct) {
        btnAct.addEventListener('click', function () {
            cerrarModal('modal-actualizar');
            document.getElementById('form-editar').submit();
        });
    }

    // Limita el teléfono a solo 8 dígitos numéricos.
    var tel = document.getElementById('f-telefono');
    if (tel) {
        tel.addEventListener('input', function () {
            this.value = this.value.replace(/\D/g, '').slice(0, 8);
        });
    }

    // Cierra cualquier modal si el usuario hace clic sobre el fondo.
    document.querySelectorAll('.modal-overlay').forEach(function (el) {
        el.addEventListener('click', function (e) {
            if (e.target === el) {
                el.classList.add('hidden');
            }
        });
    });

});


// Utilidades simples para abrir y cerrar modales reutilizables.
function cerrarModal(id) {
    document.getElementById(id).classList.add('hidden');
}

function abrirModal(id) {
    document.getElementById(id).classList.remove('hidden');
}

function abrirEliminar(url, nombre) {
    // El modal de eliminación recibe el nombre y la URL de destino en tiempo real.
    document.getElementById('del-nombre').textContent = nombre;
    document.getElementById('form-eliminar').action   = url;
    abrirModal('modal-eliminar');
}

function confirmarActualizar(e) {
    // Antes de guardar la edición, primero valida y luego pide confirmación.
    e.preventDefault();
    if (!validarContacto()) return false;
    abrirModal('modal-actualizar');
    return false;
}

function validarLogin() {
    // Validación básica del login para evitar envíos vacíos.
    var usuario    = document.getElementById('login-usuario');
    var contrasena = document.getElementById('login-contrasena');
    if (!usuario.value.trim()) {
        alert('⚠️ El usuario no puede estar vacío.');
        usuario.focus();
        return false;
    }
    if (!contrasena.value.trim()) {
        alert('⚠️ La contraseña no puede estar vacía.');
        contrasena.focus();
        return false;
    }
    return true;
}

function validarContacto() {
    // Validación del formulario de contactos antes de enviarlo al servidor.
    var nombre   = document.getElementById('f-nombre');
    var telefono = document.getElementById('f-telefono');
    var correo   = document.getElementById('f-correo');

    if (!nombre || !nombre.value.trim()) {
        alert('⚠️ El nombre es obligatorio.');
        if (nombre) nombre.focus();
        return false;
    }
    if (!telefono || !telefono.value.trim()) {
        alert('⚠️ El teléfono es obligatorio.');
        if (telefono) telefono.focus();
        return false;
    }
    if (!/^\d{8}$/.test(telefono.value.trim())) {
        alert('⚠️ El teléfono debe tener exactamente 8 dígitos numéricos.');
        telefono.focus();
        return false;
    }
    if (!correo || !correo.value.trim()) {
        alert('⚠️ El correo es obligatorio.');
        if (correo) correo.focus();
        return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) {
        alert('⚠️ El correo no tiene un formato válido.\nEjemplo: usuario@dominio.com');
        correo.focus();
        return false;
    }
    return true;
}

function filtrarTabla(q) {
    // Filtro en vivo sobre la tabla principal de contactos.
    q = q.toLowerCase();
    var filas    = document.querySelectorAll('#tabla-contactos tbody tr');
    var visibles = 0;
    filas.forEach(function (tr) {
        var texto   = tr.textContent.toLowerCase();
        var mostrar = texto.includes(q);
        tr.style.display = mostrar ? '' : 'none';
        if (mostrar) visibles++;
    });
    var counter = document.getElementById('counter');
    if (counter) {
        counter.textContent = 'Mostrando ' + visibles + ' de ' + filas.length + ' contactos';
    }
}
