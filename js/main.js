// Mostrar el modal al cargar la página 
window.addEventListener('load', function() {
    // Instancia y muestra el modal de Bootstrap
    var alertModal = new bootstrap.Modal(document.getElementById('alertModal'));
    alertModal.show();
});

// Referencias al formulario y sus elementos
const contactForm = document.getElementById('contactForm');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const nombreError = document.getElementById('nombreError');
const emailError = document.getElementById('emailError');
const mensajeError = document.getElementById('mensajeError');
const successMessage = document.getElementById('successMessage');

// Expresión regular para validar el correo electrónico
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Función para validar campos en tiempo real
function validateField(field, errorElement, validationFn, errorMessage) {
    field.addEventListener('input', function() {
        if (!validationFn(field.value)) {
            errorElement.textContent = errorMessage;
            field.setAttribute('aria-invalid', 'true');
        } else {
            errorElement.textContent = '';
            field.setAttribute('aria-invalid', 'false');
        }
    });
}

// Validaciones en tiempo real 
validateField(nombre, nombreError, value => value.trim() !== '', 'El nombre es obligatorio.');
validateField(email, emailError, value => emailPattern.test(value), 'Ingrese un correo electrónico válido.');
validateField(mensaje, mensajeError, value => value.trim() !== '', 'El mensaje es obligatorio.');

// Validación al enviar el formulario 
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Validar Nombre
    if (nombre.value.trim() === '') {
        nombreError.textContent = 'El nombre es obligatorio.';
        nombre.setAttribute('aria-invalid', 'true');
        isValid = false;
    } else {
        nombreError.textContent = '';
        nombre.setAttribute('aria-invalid', 'false');
    }

    // Validar Correo Electrónico
    if (email.value.trim() === '' || !emailPattern.test(email.value)) {
        emailError.textContent = email.value.trim() === '' ? 'El correo es obligatorio.' : 'Ingrese un correo válido.';
        email.setAttribute('aria-invalid', 'true');
        isValid = false;
    } else {
        emailError.textContent = '';
        email.setAttribute('aria-invalid', 'false');
    }

    // Validar Mensaje
    if (mensaje.value.trim() === '') {
        mensajeError.textContent = 'El mensaje es obligatorio.';
        mensaje.setAttribute('aria-invalid', 'true');
        isValid = false;
    } else {
        mensajeError.textContent = '';
        mensaje.setAttribute('aria-invalid', 'false');
    }

    // Mostrar mensaje de éxito si es válido
    if (isValid) {
        successMessage.textContent = 'Formulario enviado correctamente.';
        successMessage.setAttribute('role', 'alert');
        contactForm.reset(); // Limpia el formulario tras el envío exitoso
    } else {
        successMessage.textContent = '';
    }
});

// Evento adicional: Limpiar mensajes al hacer clic en el formulario 
contactForm.addEventListener('click', function() {
    if (successMessage.textContent) {
        successMessage.textContent = '';
    }
});