document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("videoModal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");

    // Abrir el modal
    openModalBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace
        modal.style.display = "flex";
    });

    // Cerrar el modal
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera del contenido
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
