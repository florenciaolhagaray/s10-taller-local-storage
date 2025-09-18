const datoGuardado = localStorage.getItem('datito'); 
const mostrarDato = document.getElementById("data"); 
if (datoGuardado) {
    mostrarDato.textContent = `${datoGuardado}`;
}