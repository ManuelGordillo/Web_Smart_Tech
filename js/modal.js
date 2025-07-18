document.addEventListener("DOMContentLoaded", () => {
  // MODAL DE USUARIO
  const botonUsuario = document.querySelector(".btn--usuario");
  const modalUsuario = document.getElementById("modal");
  const cerrarUsuario = document.getElementById("cerrar");

  if (botonUsuario && modalUsuario && cerrarUsuario) {
    botonUsuario.addEventListener("click", () => {
      modalUsuario.style.display = "flex";
    });

    cerrarUsuario.addEventListener("click", () => {
      modalUsuario.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modalUsuario) {
        modalUsuario.style.display = "none";
      }
    });
  }

  // MODAL DE CONTRASEÑA
  const btnContrasena = document.querySelector(".btn--contrasena");
  const modalContrasena = document.querySelector(".modal-overlay--contrasena");
  const cerrarContrasena = document.querySelector(".modal-cerrar--contrasena");
  const enviarCorreo = document.querySelector(".modal-enviar--contrasena");
  const inputCorreo = document.querySelector(".modal-input--contrasena");

  if (
    btnContrasena &&
    modalContrasena &&
    cerrarContrasena &&
    enviarCorreo &&
    inputCorreo
  ) {
    btnContrasena.addEventListener("click", (e) => {
      e.preventDefault();
      modalContrasena.style.display = "flex";
    });

    cerrarContrasena.addEventListener("click", () => {
      modalContrasena.style.display = "none";
    });

    enviarCorreo.addEventListener("click", () => {
      const correo = inputCorreo.value.trim();
      if (correo !== "") {
        alert(`Correo enviado a: ${correo}`);
        modalContrasena.style.display = "none";
        inputCorreo.value = "";
      } else {
        alert("Por favor, ingresa un correo válido.");
      }
    });

    window.addEventListener("click", (e) => {
      if (e.target === modalContrasena) {
        modalContrasena.style.display = "none";
      }
    });
  } else {
    console.warn(
      "Uno o más elementos del modal de contraseña no se encontraron."
    );
  }
});
