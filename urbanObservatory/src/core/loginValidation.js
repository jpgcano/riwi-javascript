// loginValidation.js
import { store } from "../state/store.js";

export function initLoginLogic() {
    // 1. Seleccionamos el formulario (ya existe en el DOM porque el router lo pintó)
    const form = document.querySelector(".auth-form");
    const errorMsg = document.querySelector(".auth-error");

    if (!form) return; // Seguridad por si no encuentra el form

    // 2. Escuchamos el evento submit
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita recarga de página

        // 3. Capturamos valores
        const emailInput = document.querySelector("#email").value;
        const passwordInput = document.querySelector("#password").value;

        // 4. Buscamos en la "Base de Datos" del store
        const foundUser = store.users.find(user => 
            user.email === emailInput && user.password === passwordInput
        );

        if (foundUser) {
            // A. LOGIN EXITOSO
            store.currentUser = foundUser; // Guardamos sesión en el estado

            //  Guardar en localStorage para que no se pierda al refrescar
            localStorage.setItem('user', JSON.stringify(foundUser)); 

            // Redirigir al dashboard
            window.location.hash = '#/dashboard';
        } else {
            // B. LOGIN FALLIDO
            errorMsg.classList.remove("hidden"); // Mostrar mensaje de error (asegúrate de tener estilos para .hidden)
        }
    });
}