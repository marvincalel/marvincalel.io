document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Obtener los valores de los campos
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Obtener los elementos de error
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");
        const successMessage = document.getElementById("successMessage");

        let isValid = true;

        // Validar Nombre
        if (name === "") {
            nameError.textContent = "⚠️ Por favor, ingresa tu nombre.";
            nameError.style.display = "block";
            isValid = false;
        } else {
            nameError.style.display = "none";
        }

        // Validar Correo Electrónico
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (email === "") {
            emailError.textContent = "⚠️ El correo no puede estar vacío.";
            emailError.style.display = "block";
            isValid = false;
        } else if (!email.match(emailPattern)) {
            emailError.textContent = "⚠️ Ingresa un correo válido.";
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // Validar Mensaje
        if (message === "") {
            messageError.textContent = "⚠️ Escribe un mensaje.";
            messageError.style.display = "block";
            isValid = false;
        } else {
            messageError.style.display = "none";
        }

        // Si todo está correcto, mostrar mensaje de éxito
        if (isValid) {
            successMessage.classList.remove("hidden");
            successMessage.textContent = "✅ ¡Tu mensaje ha sido enviado con éxito!";
            
            // Limpiar los campos después de 2 segundos
            setTimeout(() => {
                form.reset();
                successMessage.classList.add("hidden");
            }, 2000);
        }
    });
});
